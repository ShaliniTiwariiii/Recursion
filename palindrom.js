// function isPld(str){
//     if(str.length<=1) return true
//     if(str[0]==str.slice(-1)) return isPld(str.slice(1,-1))
//     else return false
// }
// console.log(isPld('ini'))

// function reverse(str){
//     if(str.length<=1){
//         return str
//     }
//     else return reverse(str.slice(1))+str[0]
// }
// console.log(reverse('shalini'))

// function palin(str){
//     if(reverse(str)==str){
//         return true
//     }
//     return false
// }
// console.log(palin('ini'))

function anyRev(str){
if(str.length<=1){
    return str
}
else return anyRev(str.slice(1))+str[0]
}
console.log(anyRev('shalini'))