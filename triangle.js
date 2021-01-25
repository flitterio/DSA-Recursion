const findTri = function(n) {
    if (n<=0){
        return 0;
    }
    return n + findTri(n-1);

}

console.log(findTri(4));