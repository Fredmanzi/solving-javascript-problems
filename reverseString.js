// function that will help to reverse string when invoked
function reverseString(str){
    // let strName = str.split("");

    // let reverseName = strName.reverse();
    // let joinName = reverseName.join();
    // return joinName;

    // short way
    return str.split("").reverse().join();
}

console.log(reverseString("fredmanzi"));