function getMaxLength(array) {
    let maxLength= 0;
     for(let num of array){
        if(num.length>maxLength) maxLength = num.length
    }
    return maxLength
   
};
let avg1 = getMaxLength(['vfvfv','vdfvdf','qweasdz'])
document.write(`max length: ${avg1} <br>`);
let avg2 = getMaxLength(['fsafas1cxz','w','pashapshapashapashapashapasha'])
document.write(`max length: ${avg2} <br>`);
let avg3 = getMaxLength(['q','q','qq'])
document.write(`max length: ${avg3} <br>`);