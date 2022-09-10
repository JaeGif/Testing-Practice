function caesarCipher(string, shift) {
  //Caesar Cipher for upper, lower and punctuation using UNICODE values
  string = string.split('');
  string = string.map((char) => {
    let code = char.charCodeAt(0);
    let check = code + shift;

    if (check >= 32 && check <= 255) {
      code += shift;
    } else if (check > 255) {
      code += shift % 255;
    } else if (check < 32) {
      code += shift % 255;
    }
    console.log(code, char);
    return String.fromCharCode(code);
  });

  return string.join('');
}
console.log(caesarCipher('abcd', 1000));
/* export default caesarCipher;
 */
