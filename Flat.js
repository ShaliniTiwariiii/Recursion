// function flat(arr) {
//     let flatarr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i]) === false)
//             flatarr.push(arr[i])
//         else {
//             flatarr = flatarr.concat(flat(arr[i]))
//         }
//     }
// return flatarr
// }
// console.log(flat([1,2,3,4,[2,3,[1]]]))





function flat(arr){
let newFlat=[]
for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])===false){
        newFlat.push(arr[i])
    }
    else{
        newFlat=newFlat.concat(flat(arr[i]))
    }
}
return newFlat
}
// console.log(flat([1,2,3,4,[2,3,[1]]]))


function flatB(arr){
let arr1=[]
for(let i=0;i<arr.length;i++){
    console.log(arr[4])
    if(Array.isArray(arr[i])==false){
        arr1.push(arr[i])
    }
    else{
        arr1=arr1.concat(flatB(arr[i]))
    }
}
return arr1
}
console.log(flatB([1,2,3,4,[2,3,[1]]]))