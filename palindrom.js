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

// function anyRev(str){
// if(str.length<=1){
//     return str
// }
// else return anyRev(str.slice(1))+str[0]
// }
// console.log(anyRev('shalini'))








// // function isAlpha(str){
// // return /^[0-9a-z]+$/gi.test(str)
// // }
// // function rev(str){
// // if(str.length<=1) return str
// // return rev(str.slice(1))+str[0]
// // }

// // function palin(str){
// //    let newStr=''
// //    for(let i=0;i<str.length;i++){
// //     if(isAlpha(str[i])){
// //         newStr+=str[i]
// //     }
// //    }
// //    if(newStr==rev(newStr)){
// //     return true
// //    }
// //    return false
// // }
// // console.log(palin('madam,madams'))


// function A(str){
// return  /^[0-9a-z]+$/gi.test(str)
// }

// function B(str){
//     if(str.length<=1) return str
//     return  B(str.slice(1))+str[0]
// }
// function C(str){
// let any=''
// for(let i=0;i<str.length;i++){
//     if(B(str[i])){
//         any+=str[i]
//     }
//     if(any==B(str)){
//    return true 
//     }
// }
// return false
// }

// console.log(C('madam,madams'))





function reverse(str){
    if(str.length<=1){
        return str
    }
    else return reverse(str.slice(1))+str[0]
}
console.log(reverse('shalini'))

function palin(str){
    if(reverse(str)==str){
        return true
    }
    return false
}
console.log(palin('ini'))
