//print the duplicates in an array
// eg[23,3,1,2,3,]

function duplicates(arr){
    let freq=new Map()
    for(let i=0;i<arr.length;i++){
        if(freq.get(arr[i])==undefined){
            freq.set(arr[i],1)
        }
        else freq.set(arr[i], freq.get(arr[i]+1))
    }
let res=[]
    for(let pairs of freq){
   if(pairs[1]>1) res.push(pairs[0])
    }
    return res
}

console.log(duplicates([23,3,1,2,3,]))