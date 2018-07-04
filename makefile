include *.variables

ANT := ant -lib lib
RSYNC := rsync --update --verbose --recursive --times --executability --keep-dirlinks --copy-links --progress --human-readable --prune-empty-dirs --exclude .DS_Store --exclude '*/HEAD/*' --exclude '*.zip' --exclude '*.xz' --exclude '*.msi' --exclude '*.pkg' --exclude '*.deb' --exclude '*.spk' --exclude '*.asc'
GZ_FILES := --include='*/' --include='*.gz' --exclude='*'


sync:
	make clean sync-frs sync-log

website: qnap
	$(ANT) website
	# open dist/filebot.net/index.html

qnap:
	$(ANT) qnap

deploy-website:
	make clean website
	$(RSYNC) dist/filebot.net $(WWW_USER)@$(WWW_HOST):~/
	make purge-cache

sync-frs:
	$(RSYNC) $(FRS_USER)@$(FRS_HOST):~/get.filebot.net .
	$(RSYNC) get.filebot.net $(FRS_USER)@$(FRS_HOST):~/

sync-log:
	$(RSYNC) $(GZ_FILES) $(FRS_USER)@$(FRS_HOST):~/logs .

clean:
	git reset --hard
	git pull
	git log -1
	rm -rvf dist

	ant resolve

purge-cache:
	curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$(CF_ZONE_ID)/purge_cache" -H "X-Auth-Email: $(CF_AUTH_EMAIL)" -H "X-Auth-Key: $(CF_AUTH_KEY)" -H "Content-Type: application/json" --data '{"purge_everything":true}'
