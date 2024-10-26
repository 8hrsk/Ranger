# Ranger

Ranger is an npm module for generating random user data. It creates user profiles complete with names, nicknames, surnames, birthdays, emails, and passwords. This module is useful for testing and prototyping applications where user data is required.

## Installation

You can install the Ranger module using npm:

```bash
npm install @8hrsk/ranger
```

## Usage\n\nTo start using Ranger, require the module and create an instance of the Ranger class:

```javascript
const Ranger = require('ranger');
const ranger = new Ranger();
```

### Generating a Single User

You can generate a single user with various properties such as name, nickname, surname, birthday, email, password, and unhashed password:

```javascript
const user = ranger.User();
console.log(user);
```

### Generating Multiple Users

To generate an array of user objects, specify the number of users you want:

```javascript
const users = ranger.Users(5);
console.log(users);
```

### Generating Individual Properties

Ranger provides methods to generate individual properties:

#### Name\n\nGenerate a random name:

```javascript
const name = ranger.name();
console.log(name);
```

#### Surname

Generate a random surname:

```javascript
const surname = ranger.surname();
console.log(surname);
```

#### Birthday

Generate a random birthday:

```javascript
const birthday = ranger.birthday();
console.log(birthday);
```

#### Email

Generate a random email, optionally providing a name, surname, and year:
```javascript
const email = ranger.email('John', 'Doe', 1985);
console.log(email);
```
#### Nickname

Generate a random nickname:
```javascript
const nickname = ranger.nickname();
console.log(nickname);
```

#### Password

Generate a hashed and unhashed password:
```javascript
const password = ranger.password();
console.log(password);
```
## Methods
### `User()`
- Returns a user object with properties: `name`, `nickname`, `surname`, `birthday`, `email`, `password`, and `unhashedPassword`.

### `Users(amount)`
- Generates an array of user objects.
- **Parameters:**
  - `amount` (number): The number of users to generate.
  
### `name()`

- Returns an object with a randomly generated `name`.

### `surname()`
- Returns an object with a randomly generated `surname`.

### `birthday()`
- Returns an object with a randomly generated `birthday`.
### `email(name, surname, year)`
- **Parameters:**
  - `name` (string, optional): Name for the email.
  - `surname` (string, optional): Surname for the email.
  - `year` (number, optional): Year for the email.
  - Returns an object with a randomly generated `email`.
  
### `nickname()`
- Returns an object with a randomly generated `nickname`.

### `password()`
- Returns an object with `unhashedPassword` and `hashed password`.

## Error Handling
- The `Users` method throws an error if the `amount` is not a number.

## License

This module is open-source and available under the MIT License.
---
Feel free to contribute to the Ranger module by submitting issues or pull requests on GitHub. Happy coding!"