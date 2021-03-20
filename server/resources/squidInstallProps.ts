export const squidInstallProps = Object ({
prod : {
        SRC_URI: 'http://squidguard.mesd.k12.or.us',
        DATABASE: '/var/lib/squidguard/db/BL',
        SQUID_CONFIGFILE: '/etc/squid/squid.conf',
        SQUID_INSTALL_DIR: '/etc/squid',
        SQUIDGUARD_INSTALL_DIR: '/etc/squidguard',
        SQUIDGUARD_CONFIGFILE: '/etc/squidguard/squidGuard.conf',
        SQUIDUSER: 'proxy',
        SQUIDPID: '/var/run/squid.pid',
        LOGFILE_DIR: '/var/log/squidguard'
        },
dev : {
    SRC_URI: 'http://squidguard.mesd.k12.or.us',
    DATABASE: '/var/lib/squidguard/db/BL',
    SQUID_INSTALL_DIR: '/etc/squid',
    SQUIDGUARD_INSTALL_DIR: '/etc/squidguard',
    SQUID_CONFIGFILE: '/squid.conf',
    SQUIDGUARD_CONFIGFILE: '/squidGuard.conf',
    SQUIDUSER: 'proxy',
    SQUIDPID: '/var/run/squid.pid',
    LOGFILE_DIR: '/var/log/squidguard'
    },
local : {
    SRC_URI: 'http://squidguard.mesd.k12.or.us',
    DATABASE: '~/squid/squidguard/db/BL',
    SQUID_INSTALL_DIR: '~/squid',
    SQUIDGUARD_INSTALL_DIR: '~/squid/squidguard',
    SQUID_CONFIGFILE: '~/squid/squid.conf',
    SQUIDGUARD_CONFIGFILE: '~/squid/squidGuard.conf',
    SQUIDUSER: 'proxy',
    SQUIDPID: '/var/run/squid.pid',
    LOGFILE_DIR: '~/squid/log/squidguard'
}
});