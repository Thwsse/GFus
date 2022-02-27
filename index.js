const mongoose = require("mongoose");
const Config = require("./Config.json");

require("./bot.js");
mongoose.connect(Config.Database.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {
    console.log("Mongoose connected.") 
});