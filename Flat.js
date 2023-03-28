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


// function A(arr){
//     let b=[]
// for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])===false){
//         b.push(arr[i])
//     }
//     else{
//         b=b.concat(A(arr[i]))
//     }
// }
// return b
// }
// console.log(A([1,2,3,4,[2,3,[1]]]))



function A(arr){
if(arr.length<=1) return arr
let b=[]
for(let i=0;i<arr.length;i++){
    if(!Array.isArray(arr[i])){
        b.push(arr[i])
    }
    else{
        b=b.concat(A(arr[i]))
    }
}
return b
}

 console.log(A([1,2,3,4,[2,3,[1]]]))





















