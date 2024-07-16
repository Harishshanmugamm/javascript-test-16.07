// /1. Array creation and Intialization
// 2.Array Manipulations  add elements-push(),unshift() and remove elements-Pop(),shift()
// 3. Array Searching -> Index of ,find(),includes()
// 4.Array Sorting - sort()
// 5. merging two arrays

let A = [2,3,1];
let B = [6,4,5];
let C=[]
console.log("Array created and Initialized",A,B,C)
let merged = [...A, ...B];
console.log('Merged array', merged);
merged.push(12)
merged.push(16)
console.log('Value pushed in Merged array', merged);
merged.sort()
console.log('Merged array sorted', merged);
merged.pop()
console.log('With Last value popped', merged);
let findsindex = merged.indexOf(6);
console.log('Index of value 4 is ', findsindex);
let check = merged.find(merged => merged === 5);
if(check){
    console.log('Find if 5 is present or not ',check);
}


