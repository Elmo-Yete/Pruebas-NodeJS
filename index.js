console.log("primer proyecto de node")
 // leer la documentacion de yargs parser y el ejercicio que viene en la docu

const argv = require('yargs-parser')(process.argv.slice(2))
console.log(argv)
// import parser from 'yargs-parser'
// const test1 = parser('--foo=99 --bar=9987930', {
//     string: ['bar']
//   })
//   console.log(test1)