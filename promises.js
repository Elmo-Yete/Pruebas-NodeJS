// sintaxis de promesas : new Promise ((resolve,reject)) => 

const cake = {
    receta:false,
    ingredientes:false,
    masa:false,
    hornear:false,
    decorar:false,
}

const readRecipe = (cake) => {
    return new Promise ((resolve,reject) => {
        setTimeout (()=> {
            cake.receta = true;
            if (!cake.receta) {
                reject("Tienes que leer la receta primero")
            }
            resolve(cake)
        },3000)
    })
}

const getIngredients = (cakeRead) => {
    return new Promise ((resolve,reject)=> {
        setTimeout(()=>{
            cakeRead.ingredientes = true;
            if (!cakeRead.ingredientes) {
                reject("No hay ingredientes")
            }
            resolve(cakeRead)
        },3000)
    })
}

const getDough = (cakeIngredients) => {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            cakeIngredients.masa = true;
            if (!cakeIngredients.masa) {
                reject ("No se preparo la masa")
            }
            resolve(cakeIngredients)
        },3000)
    })
}

const getBake = (cakeDough) => {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            cakeDough.hornear = true;
            if (!cakeDough.hornear) {
                reject ("No se preparo la masa")
            }
            resolve(cakeDough)
        },3000)
    })
}

const decore = (cakeBaked) => {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            cakeBaked.decorar = true;
            if (!cakeBaked.decorar) {
                reject ("No se preparo la masa")
            }
            resolve(cakeBaked)
        },3000)
    })
}

readRecipe(cake)                            // esto recibe el obj original en false
    .then((cakeRead)=> {                    // receta = true
        getIngredients(cakeRead)            
            .then((cakeIngredients)=> {     // ingredientes = true
                getDough(cakeIngredients)
                .then((cakeDough)=> {       // masa = true
                    getBake(cakeDough)
                    .then((cakeBaked)=> {   // hornear = true
                        console.log("el pastel esta en",cakeBaked)
                        decore(cakeBaked)
                        .then((console.log(cakeBaked)))   // se espera ejecutar sin error  decorar = true
                    })
                    .catch((error)=> {
                        console.log("el error es:",error)
                    })
                })
                .catch((error)=> {
                    console.log("el error es:",error)
                })
            })
            .catch((error)=> {
                console.log("el error es:",error)
            })
    })
    .catch((error)=> {
        console.log("el error es:",error)
    })

