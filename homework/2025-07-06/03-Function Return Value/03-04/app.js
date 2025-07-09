function getLongestString (array) {
    let LongestString= 0;
    let longes = '';
     for(let string of array){
        if(string.length>LongestString){
            longes = string
            LongestString = string.length
        } 
    }
    return longes
   
};
let avg1 = getLongestString (['vfvfv','vdfvdf','qweasdz'])
document.write(`long string: ${avg1} <br>`);
let avg2 = getLongestString (['fsafas1cxz','w','pashapshapashapashapashapasha'])
document.write(`long string: ${avg2} <br>`);
let avg3 = getLongestString (['q','q','qq'])
document.write(`long string: ${avg3} <br>`);
document.write(`long string: ${getLongestString(['выв','выфq','qыыq'])} <br>`);