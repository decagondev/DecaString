class DecaString {
    /**
     * Reverses the given string
     * @param {string} s - The string to reverse
     * @returns {string} The reversed string
     * @throws {TypeError} If input is not a string
     */
    static reverseString(s) {
        if (typeof s !== 'string') {
            throw new TypeError('Input must be a string');
        }
        return s.split('').reverse().join('');
    }

    /**
     * Randomizes the order of characters in the given string
     * @param {string} s - The string to randomize
     * @returns {string} The randomized string
     * @throws {TypeError} If input is not a string
     */
    static randomizeString(s) {
        if (typeof s !== 'string') {
            throw new TypeError('Input must be a string');
        }
        
        const arr = s.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Fisher-Yates shuffle
        }
        return arr.join('');
    }

    /**
     * Applies random casing to each character in the string
     * @param {string} s - The string to randomize case
     * @returns {string} The string with random case for each character
     * @throws {TypeError} If input is not a string
     */
    static randomCaseString(s) {
        if (typeof s !== 'string') {
            throw new TypeError('Input must be a string');
        }

        return s.split('').map(char => 
            Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
        ).join('');
    }

    /**
     * Capitalizes the first character of the string and makes the rest lowercase
     * @param {string} s - The string to capitalize
     * @returns {string} The capitalized string
     * @throws {TypeError} If input is not a string
     */
    static capitalizeString(s) {
        if (typeof s !== 'string') {
            throw new TypeError('Input must be a string');
        }
        
        if (s.length === 0) return s;
        return s[0].toUpperCase() + s.slice(1).toLowerCase();
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DecaString;
}