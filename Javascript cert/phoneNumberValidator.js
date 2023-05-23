function telephoneCheck(str) {
  let newStr = str.match(/[0-9]/g);
  let newStrFull = str.split("");

  if(newStr.length === 10){
    if(str[0] === "1"){
      return false;
    }

  }else if(newStr.length === 11){
    if(str[0] !== "1"){
      return false;
    }

  }else{
    return false;
  }

  if(newStrFull.some(elem => elem === ")")) {
    if(newStrFull.filter(elem => elem ==="(").length === 0){
      return false;
    }
  }

  if(newStrFull.some(elem => elem === "(")) {
    if(newStrFull.filter(elem => elem ==="(").length > 1){
      return false;
    }

    if(str[1] === "(" && str[5] != ")"){
      return false;
    }

    if(str[2] === "(" && str[6] != ")"){
      return false;

    }

    if(str[0] == "(" && str[4] != ")"){
      return false;

    }
  }

  if(newStrFull.some(elem => elem === "-")) {
    if(newStrFull.filter(elem => elem ==="-").length > 2){
      return false;
    }

    if(newStrFull.filter(elem => elem ==="-").length === 1) {
      if(newStrFull[str.length - 5] != "-") {
        return false;
      }

      if(newStrFull.filter(elem => elem ==="-").length === 2) {
        if(newStrFull[str.length - 5] != "-" && newStrFull[str.length - 9] != "-") {
          return false;
        }
      }
    }
  }

  return true;
}

telephoneCheck("555-555-5555");