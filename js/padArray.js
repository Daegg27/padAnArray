// REMEMBER TO PSEUDOCODE
exports.pad = (array, minSize, value=null) => {
    if (array.length >= minSize){
        // console.log(array)
        return array;
    }else{
        for (let i = array.length; i < minSize; i++ ){
            array.push(value);
            
        }
        return array;
    }
    // console.log(array)
}
// exports.pad([0,1,2,3], 4,)
