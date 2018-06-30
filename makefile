include *.variables


RSYNC := rsync --update --verbose --recursive --times --executability --keep-dirlinks --copy-links --progress --human-readable --prune-empty-dirs --exclude .DS_Store --exclude '*/HEAD/*' --exclude '*.msi' --exclude '*.pkg' --exclude '*.deb' --exclude '*.tar.xz' --exclude '*.spk' --exclude '*.asc'
GZ_FILES := --include='*/' --include='*.gz' --exclude='*'


www:
	ant website
	open dist/www.filebot.net/index.html

get:
	$(RSYNC) $(FRS_USER)@$(FRS_HOST):~/get.filebot.net .
	$(RSYNC) get.filebot.net $(FRS_USER)@$(FRS_HOST):~/

log:
	$(RSYNC) $(GZ_FILES) $(FRS_USER)@$(FRS_HOST):~/logs .
