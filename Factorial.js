function fact(n){
    if(n===1) return 1
    else if(n===0) return 0



    return n*fact(n-1)
}
console.log(fact(5))


function productArr(arr,i){
if(arr.length==i) return 1
return arr[i]*productArr(arr,i+1)
}
console.log(productArr([1,2,3,4,5],0))