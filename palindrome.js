function palindrome(str) {
    let splitStr = str.toLowerCase().split("");
    let finalArr = splitStr.filter(item => /[A-Za-z0-9]/.test(item));
    let revArr = []

    for(let i = finalArr.length - 1; i >= 0; i--){
        revArr.push(finalArr[i]);

    }    
    
    let fStr = finalArr.join("");
    let revStr = revArr.join("");
    return fStr === revStr;
    //return true;
  }
  
 let result = palindrome("nope");
 console.log(result);