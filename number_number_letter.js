const doMath = (str) => {
    const valHash = {};
    const itmArr = str.split(' ');
  
    for (let i = 0; i < itmArr.length; i++) {
       
        let int = '', ltr = ''; 
        for (let j = 0; j < itmArr[i].length; j++) {
            if (Number(itmArr[i][j]) || Number(itmArr[i][j]) === 0) {
                int = int + itmArr[i][j];
            } else {
                ltr = ltr + itmArr[i][j];
            }
        }
        valHash[ltr] ? valHash[ltr + ltr] = int : valHash[ltr] = int; 
    }

    return valHash; 
}

doMath("24z6 1x23 y369 89a 900b");



