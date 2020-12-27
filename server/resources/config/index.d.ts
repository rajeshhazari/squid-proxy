var squidInstallProps = require("../squidInstallProps.json");

console.log(process.env.NODE_ENV);
var props = '';
if (process.env.NODE_ENV ){
    props = squidInstallProps.dev;    
} else {
    props = squidInstallProps.prod
}

module.exports = {
    "squidInstallProps": props
}