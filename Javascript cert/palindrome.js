function palindrome(str) {

  let regex = /[a-z0-9]/ig;
  let newStr = str.match(regex).join("").toUpperCase();
  let reversedStr = str.match(regex).reverse().join("").toUpperCase();

  return newStr === reversedStr ? true : false;
}


console.log(palindrome("race car"));