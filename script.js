function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

class Calculator {
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  static multiply(a, b) {
    return a * b;
  }
  static divide(a, b) {
    return a / b;
  }
}

function caesarCipher(string, shift) {
  //Caesar Cipher for upper, lower and punctuation
  string = string.split('');
  string = string.map((char) => {
    // uppercase

    let code = char.charCodeAt(0);
    let check = code + shift;

    if (code >= 65 && code <= 90 && check <= 90) {
      code += shift;
    }
    if (code >= 65 && code <= 90 && check > 90) {
      code += shift - 26;
    }

    // lowercase
    if (code >= 97 && code <= 122 && check <= 122) {
      code += shift;
    }
    if (code >= 97 && code <= 122 && check > 122) {
      code += shift - 26;
    }

    // punctuation
    if (code >= 32 && code <= 47 && code + shift <= 47) {
      code += shift;
    }
    if (code >= 32 && code <= 47 && check > 47) {
      code += shift - 16;
    }

    return String.fromCharCode(code);
  });

  return string.join('');
}
