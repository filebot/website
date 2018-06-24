include *.variables

RSYNC := rsync --verbose --recursive --times --links --executability --progress --human-readable --prune-empty-dirs --exclude .DS_Store

sync-to-local:
	$(RSYNC) $(FRS_USER)@$(FRS_HOST):~/get.filebot.net .
