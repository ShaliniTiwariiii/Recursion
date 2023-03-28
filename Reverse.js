



function rev(x){
    if(x.length==0) return ''
    return rev(x.slice(1))+x[0]
}
console.log(rev(['h','e','l','l','0']))

function revSentWords(sent){
    let words=sent.split(' ')
    for(let i=0;i<words.length;i++){
words[i]=rev(words[i])
    }
    return words.join(' ')
}

console.log(revSentWords('Hello there I am  Shalini'))