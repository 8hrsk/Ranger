const NamesList = require('../Lists/NamesList.js');

class NameGenerator {

    constructor() {
        this.namesList = new NamesList();
    }

    generate() {
        return this.namesList.names[Math.floor(Math.random() * this.namesList.names.length)];
    }
}

module.exports = NameGenerator;