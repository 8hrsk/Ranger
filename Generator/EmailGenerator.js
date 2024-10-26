class EmailGenerator {

    constructor() {
        this.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        this.lettersCap = this.letters.map(letter => letter.toUpperCase());
        this.digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        this.special = ['_', '-', '~'];
        this.mail = ['@gmail.com', '@yahoo.com', '@hotmail.com', '@outlook.com', '@mail.ru', '@yandex.ru', '@proton.com'];
    }

    generate(name, surname, year) {
        let parts = [];

        const credentials = [name, surname, year];

        // Randomly decide how many credentials to keep (0 to 3)
        const credentialsToKeep = Math.floor(Math.random() * 4);

        // Shuffle the credentials array
        for (let i = credentials.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [credentials[i], credentials[j]] = [credentials[j], credentials[i]];
        }

        // Keep the first 'credentialsToKeep' number of credentials
        credentials.length = credentialsToKeep;
        
        credentials.forEach(credential => {
            parts.push(credential);
        })

        if (parts.length === 0) {
            const randomLength = Math.floor(Math.random() * 4) + 5; // length between 5 and 8
            for (let i = 0; i < randomLength; i++) {
                const randomArray = [this.letters, this.digits][Math.floor(Math.random() * 2)];
                parts.push(randomArray[Math.floor(Math.random() * randomArray.length)]);
            }
        }

        // Add random letters, digits, and specials
        const randomLength = Math.floor(Math.random() * 4) + 3; // length between 3 and 6
        for (let i = 0; i < randomLength; i++) {
            const randomArray = [this.letters, this.digits][Math.floor(Math.random() * 2)];
            parts.push(randomArray[Math.floor(Math.random() * randomArray.length)]);
        }

        // Add up to 2 special characters
        for (let i = 0; i < Math.floor(Math.random() * 2); i++) {
            parts.push(this.special[Math.floor(Math.random() * this.special.length)]);
        }

        // Choose a random mail ending
        const mailEnding = this.mail[Math.floor(Math.random() * this.mail.length)];

        return parts.join('') + mailEnding;
    }
}

module.exports = EmailGenerator