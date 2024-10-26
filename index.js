const NameGenerator = require('./Generator/NameGenerator.js');
const NicknamesGenerator = require('./Generator/NicknamesGenerator.js');
const SurnamesGenerator = require('./Generator/SurnamesGenerator.js');
const BirthdayGenerator = require('./Generator/BirthdayGenerator.js');
const EmailGenerator = require('./Generator/EmailGenerator.js');
const PasswordGenerator = require('./Generator/PasswordGenerator.js');

class Ranger {
    constructor() {
        this.nameGenerator = new NameGenerator();
        this.nicknamesGenerator = new NicknamesGenerator();
        this.surnamesGenerator = new SurnamesGenerator();
        this.birthdayGenerator = new BirthdayGenerator();
        this.emailGenerator = new EmailGenerator();
        this.passwordGenerator = new PasswordGenerator();
    }


    /**
     * Generates a user object with the following properties:
     * - name: A randomly generated name.
     * - nickname: A randomly generated nickname.
     * - surname: A randomly generated surname.
     * - birthday: An object containing a randomly generated birthday,
     *            represented as a Date object, and a string representation
     *            of that date.
     * - email: A randomly generated email address using the name, surname, and
     *          year of birth.
     * - password: A randomly generated password that is then hashed.
     * - unhashedPassword: The unhashed version of the generated password.
     * @return {Object} - A user object with the properties described above.
     * @public
     */

    User() {
        const name = this.nameGenerator.generate();
        const surname = this.surnamesGenerator.generate();
        const birthday = this.birthdayGenerator.generate();
        const year = birthday.Instance.getFullYear();

        return {
            name: name,
            nickname: this.nicknamesGenerator.generate(),
            surname: surname,
            birthday: birthday,
            email: this.emailGenerator.generate(name, surname, year),
            password: this.passwordGenerator.generate(),
            unhashedPassword: this.passwordGenerator.unhashedPassword(),
        }
    }

    /**
     * Generates an array of user objects.
     * Each user object is created using the User method.
     *
     * @param {number} amount - The number of user objects to generate.
     * @return {Array<Object>} - An array containing the generated user objects.
     * @public
     */

    Users(amount) {
        if (typeof amount !== 'number') {
            throw new Error('Amount must be a number');
        }

        const users = [];
        for (let i = 0; i < amount; i++) {
            users.push(this.User());
        }
        return users
    }


    /**
     * Generates a name object with a single property, username.
     * The username is a randomly generated name.
     * @return {Object} - A username object with a single property.
     * @public
     */

    name() {
        return {
            name: this.nameGenerator.generate()
        }
    }


    /**
     * Generates a surname object with a single property, surname.
     * The surname is a randomly generated surname.
     * @return {Object} - A surname object with a single property.
     * @public
     */

    surname() {
        return {
            surname: this.surnamesGenerator.generate()
        }
    }


    /**
     * Generates a birthday object with a single property, birthday.
     * The birthday is a randomly generated birthday.
     * @return {Object} - A birthday object with a single property.
     * @public
     */

    birthday() {
        return {
            birthday: this.birthdayGenerator.generate()
        }
    }

    /**
     * Generates an email object with a single property, email.
     * The email is a randomly generated email based on the given arguments.
     * @param {string} [name=null] - The name to use in the email.
     * @param {string} [surname=null] - The surname to use in the email.
     * @param {number} [year=null] - The year to use in the email.
     * @return {Object} - An email object with a single property.
     * @public
     */

    email(name = null, surname = null, year = null) {

        if (name !== null && typeof name !== 'string') {
            throw new Error('Name must be a string');
        }

        if (surname !== null && typeof surname !== 'string') {
            throw new Error('Surname must be a string');
        }

        if (year !== null && typeof year !== 'number') {
            throw new Error('Year must be a number');
        }

        return {
            email: this.emailGenerator.generate(name, surname, year)
        }
    }

    /**
     * Generates a nickname object with a single property, nickname.
     * The nickname is a randomly generated nickname.
     * @return {Object} - A nickname object with a single property.
     * @public
     */

    nickname() {
        return {
            nickname: this.nicknamesGenerator.generate()
        }
    }

    password() {
        return {
            unhashedPassword: this.passwordGenerator.unhashedPassword(),
            password: this.passwordGenerator.generate()
        }
    }
}

module.exports = Ranger