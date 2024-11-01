# DecaString

A lightweight JavaScript library for common string manipulations. DecaString provides simple yet powerful methods for reversing, randomizing, case manipulation, and capitalization of strings.

## Features

- 🔄 String reversal
- 🎲 Character randomization
- 🔡 Random case transformation
- 📝 First letter capitalization
- ✨ Zero dependencies
- 💪 TypeScript support
- ✅ Fully tested
- 📦 Lightweight (~1KB minified)

## Installation

Using npm:
```bash
npm install decastring
```

Using yarn:
```bash
yarn add decastring
```

## Usage

```javascript
const DecaString = require('decastring');

// Or using ES modules
import DecaString from 'decastring';

const str = "HelloWorld";

// Reverse a string
console.log(DecaString.reverseString(str));
// Output: "dlroWolleH"

// Randomize character order
console.log(DecaString.randomizeString(str));
// Output: "lWroHlodle" (random order)

// Randomize character cases
console.log(DecaString.randomCaseString(str));
// Output: "hElLoWoRlD" (random case for each character)

// Capitalize first letter
console.log(DecaString.capitalizeString("hello world"));
// Output: "Hello world"
```

## API Reference

### `DecaString.reverseString(s)`
Reverses the given string.

**Parameters:**
- `s` (string): The string to reverse

**Returns:**
- (string): The reversed string

**Example:**
```javascript
DecaString.reverseString("hello");  // Returns: "olleh"
```

### `DecaString.randomizeString(s)`
Randomizes the order of characters in the given string.

**Parameters:**
- `s` (string): The string to randomize

**Returns:**
- (string): The randomized string

**Example:**
```javascript
DecaString.randomizeString("hello");  // Returns: e.g., "lehol"
```

### `DecaString.randomCaseString(s)`
Applies random casing to each character in the string.

**Parameters:**
- `s` (string): The string to randomize case

**Returns:**
- (string): The string with random case for each character

**Example:**
```javascript
DecaString.randomCaseString("hello");  // Returns: e.g., "hElLo"
```

### `DecaString.capitalizeString(s)`
Capitalizes the first character of the string and makes the rest lowercase.

**Parameters:**
- `s` (string): The string to capitalize

**Returns:**
- (string): The capitalized string

**Example:**
```javascript
DecaString.capitalizeString("hello world");  // Returns: "Hello world"
```

## Error Handling

All methods perform type checking and will throw a `TypeError` if the input is not a string:

```javascript
try {
    DecaString.reverseString(123);  // Throws TypeError
} catch (error) {
    console.error(error.message);  // "Input must be a string"
}
```

## TypeScript Support

DecaString includes TypeScript type definitions out of the box:

```typescript
import DecaString from 'decastring';

const reversed: string = DecaString.reverseString("hello");
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Testing

```bash
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Tom Tarpey
- Twitter: [@DecaDoesRust](https://x.com/DecaDoesRust)
- GitHub: [@decagondev](https://github.com/decagondev)

## Acknowledgments

- Inspired by various string manipulation libraries
- Special thanks to all contributors

## Changelog

### 1.0.0 (2024-11-01)
- Initial release
- Added core string manipulation methods
- Added TypeScript support