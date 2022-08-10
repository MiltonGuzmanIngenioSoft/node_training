console.clear();
const {tablaDeMultiplicar} = require('./helpers/tablas');
const [,,coeficiente = 1] = process.argv;

const argv = require('yargs')
                    .option(
                        'c',{
                            alias: 'coeficiente',
                            type: 'number',
                            demand: true
                        }
                    )
tablaDeMultiplicar(coeficiente);