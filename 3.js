const sleep = (num) => {
   return new Promise(function(resolve, reject) {

    if (num > 3) reject('Done!')

        setTimeout(function() {
            console.log('In: ' + num)
            resolve(num + 1)
        }, num * 1000)
        
})
}

Promise.all([sleep(0), sleep(1), sleep(2)]).then((result) => {console.log(result)})
                                         .catch((result) => console.log(result))

