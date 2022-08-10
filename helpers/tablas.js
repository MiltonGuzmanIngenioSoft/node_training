let salida = '';
const fs= require('fs');
const colors = require('colors');
const tablaDeMultiplicar = (coef) => {
    salida+=`===========Tabla del ${coef}============\n`;
    for(let i = 1; i<=10; i++)
    {
        salida+=`${coef} x ${i} = ${coef*i}\n`;
    }
    fs.writeFile(`outputs/tablaDel${coef}.txt`, salida, (err) => {
        if(err) throw err;
        console.log('Archivo creado con exito'.rainbow);
    });  
}

module.exports = {
    tablaDeMultiplicar
}

