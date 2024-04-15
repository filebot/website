import groovy.xml.*


def f = new File(project.properties.'repo.qnap', 'index.xml')
def now = new Date()


def qnap = [
	version: '4.3.4',
	platforms: ['TS-NASARM', 'TS-NASX86', 'TS-X28A', 'TS-X32', 'TS-X32U', 'TS-X35A', 'TS-XA28A', 'TS-X73']
]


f.withWriter('UTF-8') { writer ->
	def xml = new MarkupBuilder(writer)

	xml.mkp.xmlDeclaration(version: "1.0", encoding: "UTF-8")
	xml.plugins {
		cachechk(now.format('yyyyMMddhhmmss'))

		// FileBot
		item {
			name('FileBot')
			internalName('filebot')
			category('Essentials')
			type('Utilities')
			icon100('https://www.filebot.net/qnap/filebot_100.png')
			icon80('https://www.filebot.net/qnap/filebot_80.png')
			description(project.properties.'package.description')
			developer('rednoah')
			developerLink('https://www.filebot.net/')
			fwVersion(qnap.version)
			version(project.properties.'application.version')
			qnap.platforms.each{ id ->
				platform{
					platformID(id)
					location("https://get.filebot.net/filebot/FileBot_${project.properties.'application.version'}/FileBot_${project.properties.'application.version'}.qpkg")
				}
			}
			snapshot('https://www.filebot.net/qnap/filebot-snapshot.png')
			tutorialLink('https://www.filebot.net/cli.html')
			forumLink('https://www.filebot.net/forums/')
		}

		// FileBot Node
		item {
			name('FileBot Node')
			internalName('filebot-node')
			category('Essentials')
			type('Utilities')
			icon100('https://www.filebot.net/qnap/filebot-node_100.png')
			icon80('https://www.filebot.net/qnap/filebot-node_80.png')
			description(project.properties.'filebot-node.description')
			developer('rednoah')
			developerLink('https://www.filebot.net/')
			fwVersion(qnap.version)
			version(project.properties.'filebot-node.version')
			qnap.platforms.each{ id ->
				platform{
					platformID(id)
					location("https://get.filebot.net/qnap/packages/filebot-node_${project.properties.'filebot-node.version'}.qpkg")
				}
			}
			snapshot('https://www.filebot.net/qnap/filebot-node-snapshot.png')
			forumLink('https://www.filebot.net/qnap/support.html')
		}

		// Java Installer
		item {
			name('Java Installer')
			internalName('java-installer')
			category('Essentials')
			type('Developer Tools')
			icon100('https://www.filebot.net/qnap/java-installer_100.png')
			icon80('https://www.filebot.net/qnap/java-installer_80.png')
			description(project.properties.'java-installer.description')
			developer('rednoah')
			developerLink('https://github.com/rednoah/java-installer')
			fwVersion(qnap.version)
			version(project.properties.'java-installer.version')
			qnap.platforms.each{ id ->
				platform{
					platformID(id)
					location("https://get.filebot.net/qnap/packages/java-installer_${project.properties.'java-installer.version'}.qpkg")
				}
			}
		}
	}
}
