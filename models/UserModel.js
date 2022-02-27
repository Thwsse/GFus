const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    guildID: String,
    userID: String, 
    roles: Array
});

module.exports = model("Presence", UserSchema);
 