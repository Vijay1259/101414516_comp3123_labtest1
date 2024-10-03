function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
            reject(new Error("Input should be an array"));
        } else {
            const filteredWords = array
                .filter(item => typeof item === 'string')
                .map(item => item.toLowerCase());
            resolve(filteredWords);
        }
    });
}
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))  
    .catch(error => console.log(error.message));