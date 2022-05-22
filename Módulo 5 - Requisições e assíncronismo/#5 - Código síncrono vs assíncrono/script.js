/**
 * 
 * Código síncrono é executado de forma direta, enquanto que o código assíncrono nunca espera uma operação ser concluída.
 *
*/


// exemplo código SÍNCRONO:
let syncPerson = {
    name: 'Michael',
    lastName: 'Santos',
    fullName: `${name} ${lastName}`,
}


// exemplo código ASSÍNCRONO:
let asyncPerson = {
    name: 'Michael',
    lastName: 'Santos',
    temperature: machine.getTemeperature(), // linha ASSÍNCRONA
    fullName: `${name} ${lastName}`,
}