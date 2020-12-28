// TODO: write code to make these variable dynamic and managed
const dest = [
    "BL_adv",
    "BL_drugs",
    "BL_dating", "BL_porn","BL_sex","BL_sexLingeri","BL_spyware","BL_tracker"

];
const aclCategoty = ["local", "default"];

const catergoryRules = {
    "local" : ["!BL_adv",
                "!BL_drugs",
                "!BL_dating", "!BL_porn","!BL_sex","!BL_sexLingeri","!BL_spyware","!BL_tracker", "all"],
    "default": ["!BL_adv",
                "!BL_drugs",
                "!BL_dating", "!BL_spyware","!BL_tracker", "all"]
}

class SquidGuardSource {
    name:String;
    ip:String
}
class Destinations {
    domainList:String;
    urlList:String;
    log:String;

    constructor() {}
}
class SquidGuardConfSchema {
    
    dbhome:String;
    logdir: String;
    sources: SquidGuardSource;
    destinations: Destinations;
    aclsDefined:any;

    
    squidGuardConfSchema(){}    
}
export const rules = {
    "dest" : dest,
    "aclCategoty" : aclCategoty,
    "catergoryRules" : catergoryRules
    
}


