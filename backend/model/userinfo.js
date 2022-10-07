const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userinfoSchema = Schema({
    username: {
        type: String,
        required: true
    },
    userdescription: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('UserInfo', userinfoSchema);