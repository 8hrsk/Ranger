class BirthdayGenerator {
    constructor() {
        this.currentYear = new Date().getFullYear();
    }

    generate() {
        const date = this.generateBirthday();
        return {
            "timestamp": date.getTime(),
            "date": date.toLocaleDateString("en-US"),
            "Instance": date
        }
    }

    generateBirthday() {
        const year = Math.floor(Math.random() * (this.currentYear - (this.currentYear - 100)) + (this.currentYear - 100));
        const month = Math.floor(Math.random() * 12);
        const day = Math.floor(Math.random() * 28) + 1; // To handle February
        return new Date(year, month, day);
    }
}

module.exports = BirthdayGenerator