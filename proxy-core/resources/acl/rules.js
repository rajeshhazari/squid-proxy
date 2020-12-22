// TODO: write code to make these variable dynamic and managed
const rules = [
    "BL_adv",
    "BL_drugs",
    "BL_dating", "BL_porn","BL_sex","BL_sexLingeri","BL_spyware","BL_tracker"

];
const aclCategoty = ["local", "default"];

const catergoryRules = {
    "local" : ["BL_adv",
                "BL_drugs",
                "BL_dating", "BL_porn","BL_sex","BL_sexLingeri","BL_spyware","BL_tracker"],
    "default": ["BL_adv",
                "BL_drugs",
                "BL_dating", "BL_spyware","BL_tracker"]
}


module.exports = {
    "rules" : rules,
    "aclCategoty" : aclCategoty,
    "catergoryRules" : catergoryRules

}
