let fibFun = function(n){
    if(n<3){
        return 1;
    }
    return fibFun(n-2) + fibFun(n-1);
}

console.log(fibFun(6));