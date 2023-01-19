
 var longestCommonPrefix = function(strs) {
    let i = 0;
    const check = strs.every((item) => strs[0][i] === item[i]) ;
    while (check) {
        i++;
    }
    const value =  strs[0].slice(0, i);
    console.log(value)
};


const strs = ["flower","flow","flight"];
longestCommonPrefix(strs);