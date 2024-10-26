const SurnamesList = require('../Lists/SurnamesList.js');

class SurnamesGenerator {
    constructor() {
        this.surnamesList = new SurnamesList();
    }
    generate() {
        return this.surnamesList.surnames[Math.floor(Math.random() * this.surnamesList.surnames.length)];
    }
}

module.exports = SurnamesGenerator;