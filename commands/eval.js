const settings = require("../json/settings.json");

module.exports = [{
    name: "eval",
    code: `
    
    $eval[$message]
    $onlyForIDs[${settings.devs};]
    `
}]