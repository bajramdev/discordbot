function removeFirstLast(str) {
    const hi = str.substring(1, (str.length - 1));
    console.log(hi)
    if (str.length === 2){
         console.log(str)
    }
}

removeFirstLast("hello");
removeFirstLast("to");
removeFirstLast("a");