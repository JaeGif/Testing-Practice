function caesarCipher(string, shift) {
  //Caesar Cipher for upper, lower and punctuation using UNICODE values
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
      code += shift - 17;
    }
    return String.fromCharCode(code);
  });

  return string.join('');
}
export default caesarCipher;
