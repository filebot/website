include *.variables


ANT := ant -lib lib
RSYNC := rsync --update --verbose --recursive --times --chmod=Du=rwx,Dgo=rx,Fu=rw,Fog=r --keep-dirlinks --copy-links --progress --human-readable --prune-empty-dirs --exclude .gitignore --exclude .DS_Store
GZ_FILES := --include='*/' --include='*.gz' --exclude='*'


sync: clean
	make pull-release
	make website
	export ANT_OPTS="-Dapplication.version=4.8.2" && make repository
	make push-website purge-cache

pull-release:
	$(RSYNC) $(FRS_USER)@$(FRS_HOST):~/get.filebot.net .
	$(RSYNC) $(GZ_FILES) $(FRS_USER)@$(FRS_HOST):~/logs .

push-website:
	$(RSYNC) dist/filebot.net $(WWW_USER)@$(WWW_HOST):~/
	$(RSYNC) get.filebot.net $(FRS_USER)@$(FRS_HOST):~/

website:
	$(ANT) website

repository:
	$(ANT) deb syno qnap

clean:
	git reset --hard
	git pull
	git log -1
	rm -rvf dist

purge-cache:
	curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$(CF_ZONE_ID)/purge_cache" -H "X-Auth-Email: $(CF_AUTH_EMAIL)" -H "X-Auth-Key: $(CF_AUTH_KEY)" -H "Content-Type: application/json" --data '{"purge_everything":true}'
