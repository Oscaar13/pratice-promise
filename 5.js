const sleep = (num) => {
   return new Promise(function(resolve, reject) {

    if (num+1 === 2) reject()

        setTimeout(function() {
            resolve(num + 1)
        }, (num+1) * 1000)
        
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
.catch((result) => console.log(result))

