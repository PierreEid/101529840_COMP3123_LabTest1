const lowerCaseWords = function(mixedArr) {
    return new Promise((resolve, reject) => {
        const result = mixedArr.filter(val => typeof val == "string").map(str => str.toLowerCase());

        if(result.length === 0){
            return reject(new Error("Output array is empty."));
        } else {
            return resolve(result);
        }
    });
}

lowerCaseWords(["PIZZA", 10, true, 25, false, "Wings"])
    .then(result => console.log(result))
    .catch(error => console.log(error));

lowerCaseWords([10, true, 25, false])
    .then(result => console.log(result))
    .catch(error => console.log(error));