const { AoiClient } = require("aoi.js");
const settings = require("./json/settings.json");

const client = new AoiClient({
    token: settings.token,
    prefix: settings.prefix,
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

client.loadCommands("./commands");

client.status({
    name: "Boş Altyapı | HamsterMert",
    type: "Custom"
})

client.variables({
    ornek1: "degisken",
})