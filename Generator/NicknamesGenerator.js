const NicknamesList = require('../Lists/NicknamesList.js');

class NicknamesGenerator {

    constructor() {
        this.nicknamesList = new NicknamesList();
    }

    generate() {
        return this.nicknamesList.nicknames[Math.floor(Math.random() * this.nicknamesList.nicknames.length)];
    }
}

module.exports = NicknamesGenerator;