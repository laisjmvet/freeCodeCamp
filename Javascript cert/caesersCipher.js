function rot13(str) {

  const regex = /[a-z]/i;
  let newStr= "";

  for(let i = 0; i < str.length; i++) {
    if(str[i].match(regex)) {
      if(str.charCodeAt(i) - 13 < 65) {
        newStr += String.fromCharCode((str.charCodeAt(i) + 13));

      }else{
        newStr += String.fromCharCode((str.charCodeAt(i) - 13));

      }

    }else {
      newStr += str[i]

    }
  }

  return newStr;
}

rot13("SERR PBQR PNZC");