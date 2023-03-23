// capitalise the first leter of each element  ['hello','shalini','hiii'] 


// function cap(arr){
//     let newArr=[]
// for(let i=0;i<arr.length;i++){
//    let a= arr[i][0].toUpperCase()+arr[i].slice(1)
//   newArr.push(a)
// }
// return newArr
// }

// console.log(cap(['hello','shalini','hiii']))


function cap(arr,i){
    //4 mins are left 
    // sir se pucho

    let newArr=[]
  if(arr.length==i)return 

cap(arr,i+1)
return newArr.push(arr[i][0].toUpperCase()+arr[i].slice(1))
}
console.log(cap( ['hello','shalini','hiii'],0))
