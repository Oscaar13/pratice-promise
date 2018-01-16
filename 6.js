const sleep = (num) => {
    return new Promise(function(resolve, reject) {
        console.log('Input: ' + num)
         setTimeout(function() {
             resolve(num + 1)
         }, (num+1) * 1000)
         
 })
 }
 
const randomeNumber = () => { // {-5, 5}
    YourRandomNumber = Math.floor( Math.random() * (10 + 1) ) -5;
    return YourRandomNumber
}

sleep(randomeNumber()).then(
    (result) => {
        console.log(result)
        return sleep(randomeNumber())
    })
    .then(
        (result) => {
            console.log(result)
            return sleep(randomeNumber())
        })
        .then(
            (result) => {
                console.log(result)
                return sleep(randomeNumber())
            })
            .then(
                (result) => {
                    console.log(result)
                    return sleep(randomeNumber())
                })
.catch((result) => console.log(result))