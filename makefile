include *.variables


RSYNC := rsync --update --verbose --recursive --times --executability --keep-dirlinks --copy-links --progress --human-readable --prune-empty-dirs --exclude .DS_Store --exclude '*/HEAD/*' --exclude '*.msi' --exclude '*.pkg' --exclude '*.deb' --exclude '*.tar.xz' --exclude '*.spk' --exclude '*.asc'
GZ_FILES := --include='*/' --include='*.gz' --exclude='*'


sync:
	make clean get log

website:
	ant website
	open dist/filebot.net/index.html

deploy:
	ant website
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

purge-cache:
	curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$(CF_ZONE_ID)/purge_cache" -H "X-Auth-Email: $(CF_AUTH_EMAIL)" -H "X-Auth-Key: $(CF_AUTH_KEY)" -H "Content-Type: application/json" --data '{"purge_everything":true}'
