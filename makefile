include *.variables


ANT := ant -lib lib
RSYNC := rsync --update --verbose --recursive --times --chmod=Du=rwx,Dgo=rx,Fu=rw,Fog=r --keep-dirlinks --copy-links --progress --human-readable --prune-empty-dirs --exclude BETA --exclude HEAD --exclude .gitignore --exclude .DS_Store
GZ_FILES := --include='*/' --include='*.gz' --exclude='*'
MIRROR_FILES := --delete


update-website:
	make website push-website purge-cache

pull-release:
	$(RSYNC) $(FRS_USER)@$(FRS_HOST):~/get.filebot.net .
	$(RSYNC) $(GZ_FILES) $(FRS_USER)@$(FRS_HOST):~/logs .

push-website:
	$(RSYNC) dist/filebot.net/ $(WWW_USER)@$(WWW_HOST):~/filebot.net/

push-release:
	$(RSYNC) --exclude 'FileBot_*' get.filebot.net/ $(FRS_USER)@$(FRS_HOST):~/get.filebot.net/

push-repository:
	$(RSYNC) $(MIRROR_FILES) get.filebot.net/deb/ $(FRS_USER)@$(FRS_HOST):~/get.filebot.net/deb/
	$(RSYNC) $(MIRROR_FILES) get.filebot.net/rpm/ $(FRS_USER)@$(FRS_HOST):~/get.filebot.net/rpm/

website:
	$(ANT) website

repository:
	$(ANT) deb rpm syno qnap

purge-cache:
	curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$(CF_ZONE_ID)/purge_cache" -H "X-Auth-Email: $(CF_AUTH_EMAIL)" -H "X-Auth-Key: $(CF_AUTH_KEY)" -H "Content-Type: application/json" --data '{"purge_everything":true}'

sync: clean
	make pull-release push-release
	make website push-website
	make repository push-repository
	make purge-cache

clean:
	-rm -rv dist
	git reset --hard
	git pull
	git --no-pager log -1
