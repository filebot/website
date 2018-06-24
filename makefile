include *.variables


RSYNC := rsync --update --verbose --recursive --times --links --executability --progress --human-readable --prune-empty-dirs --exclude .DS_Store --exclude '*.msi' --exclude '*.pkg' --exclude '*.deb' --exclude '*.tar.xz' --exclude '*.spk' --exclude '*.asc'


put:
	$(RSYNC) get.filebot.net $(FRS_USER)@$(FRS_HOST):~

get:
	$(RSYNC) $(FRS_USER)@$(FRS_HOST):~/get.filebot.net .
