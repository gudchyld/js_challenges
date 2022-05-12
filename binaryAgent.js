function binaryAgent(str) {
  const returnedString = str.split(" ").map(item => parseInt(item, 2))
    .map(item => String.fromCharCode(item)).join("");
    //let splitStr = str.split(" ");
    //console.log(splitStr);
    //let bin1 = '01000001';
    //let bin1Dec = parseInt(bin1,2);
    //return str;
    return returnedString;
  }
  
  let result = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  console.log(result);