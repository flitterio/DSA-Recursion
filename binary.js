const binary = (n) => {
    if (n === 0){
        return 0;
    }
    const div = Math.floor(n/2);
    const remainder = n % 2;
    if (div === 0) {
        return `${remainder}`;
    }
    return binary(div) + remainder.toString()
}


console.log(binary(2))