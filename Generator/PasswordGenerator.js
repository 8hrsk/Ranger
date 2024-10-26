const md5 = require('@8hrsk/jmd5');

class PasswordGenerator {

    constructor() {
        this.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        this.lettersCap = this.letters.map(letter => letter.toUpperCase());
        this.digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        this.special = ['_', '-', '~', '!'];
    }

    unhashedPassword() {
        const randomLength = Math.floor(Math.random() * 10) + 8; // length between 8 and 17
        const password = [];
        for (let i = 0; i < randomLength; i++) {
            const randomArray = [this.letters, this.lettersCap, this.digits, this.special][Math.floor(Math.random() * 4)];
            password.push(randomArray[Math.floor(Math.random() * randomArray.length)]);
        }
        
        return password.join('');
    }

    generate() {
        return md5(this.unhashedPassword());
    }
}

module.exports = PasswordGenerator