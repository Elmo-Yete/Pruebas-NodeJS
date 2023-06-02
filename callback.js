// function test1 () {
//     console.log("hola")
// }

// function test2 (callback) {
//     console.log("test2 ok")
//     callback()
// }

// test2(test1)

const koder = {
    informed:false,
    interview:false,
    payment:false,
    inscription:false,
}

const giveInfo =  (koder,inter) =>  {
    setTimeout(()=> {
        koder.informed = true;
        inter(koder)
        console.log(koder)
        return koder;
        },3000)
}

const interviewed = (koder,pay) => {
    setTimeout(()=> {
        koder.interview = true;
        console.log(koder)
        pay(koder)
        return koder;
    },4000)
}
const payment = (koder) => {
    setTimeout(()=> {
        koder.payment = true;
        console.log(koder)
        return koder;
    },3000)
}


// let informedKoder = giveInfo(koder,interviewed,payment)

