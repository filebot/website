import groovy.xml.*


def f = 'get.filebot.net/qnap/index.xml' as File
def now = new Date()


def platforms = ['TS-NASARM', 'TS-NASX86', 'TS-X28A', 'TS-X32', 'TS-X32U', 'TS-X35A', 'TS-XA28A']


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
			description("FileBot is the ultimate tool for organizing and renaming your Movies, TV Shows and Anime as well as fetching subtitles and artwork. It's smart and just works.")
			developer('rednoah')
			developerLink('https://www.filebot.net/')
			fwVersion('4.2.1')
			version('4.8.2')
			platforms.each{ id ->
				platform{
					platformID(id)
					location('https://get.filebot.net/filebot/FileBot_4.8.2/FileBot_4.8.2.qpkg')
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
			description("FileBot Node allows you to execute filebot via QNAP QTS. FileBot Node requires Node.js and FileBot.")
			developer('rednoah')
			developerLink('https://www.filebot.net/')
			fwVersion('4.2.1')
			version('0.2.8.1')
			platforms.each{ id ->
				platform{
					platformID(id)
					location('https://get.filebot.net/qnap/packages/filebot-node_0.2.8.1.qpkg')
				}
			}
			snapshot('https://www.filebot.net/qnap/filebot-node-snapshot.png')
			forumLink('https://www.filebot.net/qnap/support.html')
		}

		// Java Installer
		item {
			name('Java 8 Installer')
			internalName('java-8-installer')
			category('Essentials')
			type('Developer Tools')
			icon100('https://www.filebot.net/qnap/java-installer_100.png')
			icon80('https://www.filebot.net/qnap/java-installer_80.png')
			description("Java 8 Installer will help you install Oracle Java SE on your QNAP NAS. Supported platforms include armv7l, armv8, i686 and x86_64 models. During the install, this package will download the latest Oracle Java SE Development Kit (180 MB) for your platform. This may take a while.")
			developer('rednoah')
			developerLink('https://github.com/rednoah/java-installer')
			fwVersion('4.2.1')
			version('1.8')
			platforms.each{ id ->
				platform{
					platformID(id)
					location("https://get.filebot.net/qnap/packages/java-8-installer_1.8.qpkg")
				}
			}
		}

		// Ant Installer
		item {
			name('Ant')
			internalName('apache-ant')
			category('Essentials')
			type('Developer Tools')
			icon100('https://www.filebot.net/qnap/apache-ant_100.png')
			icon80('https://www.filebot.net/qnap/apache-ant_80.png')
			description("Apache Ant Installer will help you install Apache Ant on your QNAP NAS. On install, this package will download the Apache Ant and Apache Ivy binaries and additional optional libraries. This may take a while.")
			developer('rednoah')
			developerLink('https://github.com/rednoah/ant-installer')
			fwVersion('4.2.1')
			version('1.10.4')
			platforms.each{ id ->
				platform{
					platformID(id)
					location("https://get.filebot.net/qnap/packages/apache-ant_1.10.4.qpkg")
				}
			}
		}
	}
}
