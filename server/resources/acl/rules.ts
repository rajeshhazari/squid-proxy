// TODO: write code to make these variable dynamic and managed
const dest = [ 'BL_adv', 'BL_drugs', 'BL_dating', 'BL_porn', 'BL_sex', 'BL_sexLingeri', 'BL_spyware', 'BL_tracker'];

const aclCategory = ['local', 'default'];

const catergoryRules = {
    local : ['!BL_adv',
                '!BL_drugs',
                '!BL_dating', '!BL_porn', '!BL_sex', '!BL_sexLingeri', '!BL_spyware', '!BL_tracker', 'all'],
    default: ['!BL_adv',
                '!BL_drugs',
                '!BL_dating', '!BL_spyware', '!BL_tracker', 'all']
};

class SquidGuardSource {
    name: string;
    ip: string;
}

class Destinations {
    domainList: string;
    urlList: string;
    log: string;

    constructor() {}
}

class SquidGuardConfSchema {

    dbhome: string;
    logdir: string;
    sources: SquidGuardSource;
    destinations: Destinations;
    aclsDefined: any;


    squidGuardConfSchema() {}
}
export const rules = {
    dest,
    aclCategory,
    catergoryRules

};


