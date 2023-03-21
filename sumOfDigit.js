
function digit(a){
if(a==0){return 0}
return a%10+digit(Math.floor(a/10))
}
console.log(digit(123456))