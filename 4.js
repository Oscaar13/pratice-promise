const sleep = (num) => {
   return new Promise(function(resolve, reject) {

    if (num > 6) reject(num)

        setTimeout(function() {
            resolve(num + 1)
        }, num * 1000)
        
})
}

sleep(0).then(
    (result) => {
        console.log(result)
        return sleep(1)
    })
    .then(
        (result) => {
            console.log(result)
            return sleep(2)
        })
    .then(Promise.all([sleep(3), sleep(4), sleep(5)]).then((result) => {console.log(result)}))
.catch((result) => console.log(result))

