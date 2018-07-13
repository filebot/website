include *.variables


ANT := ant -lib lib
RSYNC := rsync --update --verbose --recursive --times --chmod=Du=rwx,Dgo=rx,Fu=rw,Fog=r --keep-dirlinks --copy-links --progress --human-readable --prune-empty-dirs --exclude .DS_Store
GZ_FILES := --include='*/' --include='*.gz' --exclude='*'

DEB_REPO := get.filebot.net/deb


sync-frs:
	$(RSYNC) $(FRS_USER)@$(FRS_HOST):~/get.filebot.net .
	$(RSYNC) $(GZ_FILES) $(FRS_USER)@$(FRS_HOST):~/logs .

deploy-website: clean website qnap deb
	$(RSYNC) dist/filebot.net $(WWW_USER)@$(WWW_HOST):~/
	$(RSYNC) get.filebot.net $(FRS_USER)@$(FRS_HOST):~/
	make purge-cache

website:
	$(ANT) website
	# open dist/filebot.net/index.html

qnap:
	$(ANT) qnap

deb:
	rm -rvf $(DEB_REPO)
	find get.filebot.net/filebot -type f -name '*.deb' | sort | tail -n 1 | xargs -I '{}' cp -v '{}' dist
	prm --type deb --release stable --component main --arch amd64 --path $(DEB_REPO) --directory dist --gpg rednoah@filebot.net --gpg_sign_algorithm SHA256
	find $(DEB_REPO)

clean:
	git reset --hard
	git pull
	git log -1
	rm -rvf dist

purge-cache:
	curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$(CF_ZONE_ID)/purge_cache" -H "X-Auth-Email: $(CF_AUTH_EMAIL)" -H "X-Auth-Key: $(CF_AUTH_KEY)" -H "Content-Type: application/json" --data '{"purge_everything":true}'
