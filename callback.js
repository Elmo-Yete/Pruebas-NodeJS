function test1 () {
    console.log("hola")
}

function test2 (callback) {
    console.log("test2 ok")
    callback()
}

test2(test1)