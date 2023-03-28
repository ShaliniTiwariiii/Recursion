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


function capitalizeFirst(arr) {
    if (arr.length === 0) {
      return [];
    } else {
      let capitalized = arr[0][0].toUpperCase() + arr[0].slice(1);
      return [capitalized, ...capitalizeFirst(arr.slice(1))];
    }
  }
  
  let arr = ['hello', 'shalini', 'hiii'];

  
  // console.log( capitalizeFirst(arr)); // Output: ['Hello', 'Shalini', 'Hiii']
  



  function capitaliseFn(arr){
    let result=[]
    if(arr.length==0) return []
    //pull out arr[0] and capitalise is't first char
    let s=arr[0][0].toUpperCase()+arr[0].slice(1)
    result.push(s)
    return result.concat(capitaliseFn(arr.slice(1)))
 
  }
  let array=['abc','pqr','xyz','jkl']

  console.log( capitaliseFn(array))