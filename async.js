const cake = {
    receta:false,
    ingredientes:false,
    masa:false,
    hornear:false,
    decorar:false,
}

const leerReceta = (cake, ingredientes) => {
    let error = null;
    setTimeout(() => {
    cake.receta = true;
    if (!cake.receta) {
        error = "Lee la receta primero";
    }
    console.log("La receta ya fue leida", cake);
    ingredientes(error, cake);
}, 2000);
};
const tenerIngredientes = (recetaLeida, hacerMasa) => {
    let error = null;
    setTimeout(() => {
    recetaLeida.ingredientes = true;
    if (!recetaLeida.ingredientes) {
        error = "No se tienen los ingredientes para continuar";
    }
    console.log("La receta y los ingredientes estan listos", recetaLeida);
    hacerMasa(error, recetaLeida);
}, 1000);
};

const hacerMasa = (ingredientesListos, hornear) => {
let error = null;
    setTimeout(() => {
    ingredientesListos.masa = true;
    if (!ingredientesListos.masa) {
        error = "La masa no esta lista para hornear";
    }
    console.log("La masa esta lista para hornear", ingredientesListos);
    hornear(error, ingredientesListos);
}, 2000);
};

const hornear = (horneado, decorar) => {
    let error = null;
        setTimeout(() => {
        horneado.hornear = true;
        if (!horneado.hornear) {
            error = "La horneada no salio bien";
        }
        console.log("El pastel esta listo", horneado);
        decorar(error, horneado);
    }, 2000);
    };

const decorar = (horneado) => {
    let error = null;
        setTimeout(() => {
        horneado.decorar = true;
        console.log("El pastel esta listo", horneado);
    }, 2000);
};



leerReceta(cake, (error, ingredientes) => {
    if(error) {
        console.log(error)
        return;
    }
    tenerIngredientes(ingredientes, (error, hacerMasa) => {
        if(error) {
        console.log(error)
        return;
    }
    hacerMasa(hacerMasa, (error, hornear) => {
        if(error) {
            console.log(error)
            return;
        }
    hornear(hornear,(decorar) => {
            if(error) {
        console.log(error)
        return;
    }}
    )})
    })
});

decorar(hornear)