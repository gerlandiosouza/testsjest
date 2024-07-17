function choiceFuel(fuel, distance) {
    if (fuel == "gasoline") {
        let result = calculeGas(distance)
        return result
     
    }
    if (fuel == "ethanol") {
        let result = calculeEth(distance)
        return result
     
    }
}
 
choiceFuel ("gasoline", 100)
console.log(choiceFuel)

function calculeGas(distance) {
  
        let equationGas = parseInt(distance / 16);
        return equationGas

}

function calculeEth(distance) {
    
        let equationEth = parseInt(distance / 11);
        return equationEth
    
}
//Resultado em um única funçao:

/*function amountByFuel(distance, fuel) {
  
    if (fuel == "gasoline") {
        let equationGas = parseInt(distance / 16);
        return equationGas
    }
    
    if (fuel == "ethanol") {
        let equationEth = parseInt(distance / 11);
        return equationEth
    }
}
*/
module.exports={choiceFuel, calculeEth, calculeGas}

