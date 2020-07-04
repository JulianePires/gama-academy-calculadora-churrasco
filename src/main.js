const botao = document.querySelector("#botaoCalcular")

const calcularChurrasco = () => {

    // Coleta valor dos inputs
    const mulheresC = document.getElementById('mulheresC-qnt').value;
    const homensC = document.getElementById('homensC-qnt').value;
    const criancasC = document.getElementById('criancasC-qnt').value;

    const mulheresV = document.getElementById('mulheresV-qnt').value;
    const homensV = document.getElementById('homensV-qnt').value;
    const criancasV = document.getElementById('criancasV-qnt').value;

    const acompanhamentos = document.getElementById('acompanhamentos').value;
    const bebidasAlcoolicas = document.getElementById('bebidas-alcoolicas').value;
    const bebidasNaoAlcoolicas = document.getElementById('bebidas-nao-alcoolicas').value;


    // Logica de valores por grama e multiplicacao da quantidade de pessoas
    let totalCarne = mulheresC * 150 + homensC * 200 + criancasC * 100

    // Logica de valores por grama e multiplicação da quantidade de pessoas    
    let totalVegan = mulheresV * 150 + homensV * 200 + criancasV * 100

    // Soma da quantidade de pessoas
    const totalPessoas = Number(mulheresC) + Number(homensC) + Number(criancasC) + Number(mulheresV) + Number(homensV) + Number(criancasV)
    
    // 50g de acompanhamento por pessoa
    const totalAcompanhamento = acompanhamentos ? 50 * Number(totalPessoas) : 0
    
    // 400ml de bebida nao alcoolica para cada pessoa
    const totalBebidasNaoAlcoolicas = bebidasNaoAlcoolicas ? 500 * Number(bebidasNaoAlcoolicas) : 0
    
    // 500ml de bebida alcoolica para cada pessoa :'D
    const totalBebidasAlcoolicas = bebidasAlcoolicas ? 500 * Number(bebidasAlcoolicas) : 0

    

    document.getElementById("total-carnes").innerHTML = `${getValueMeasure(totalCarne, 1)}`
    document.getElementById("total-vegan").innerHTML = `${getValueMeasure(totalVegan, 1)}`
    document.getElementById("total-pessoas").innerHTML = `${totalPessoas} pessoas`
    document.getElementById("total-acompanhamento").innerHTML = `${getValueMeasure(totalAcompanhamento, 1)}`
    document.getElementById("total-bebidas-nao-alcoolicas").innerHTML = `${getValueMeasure(totalBebidasNaoAlcoolicas, 2)}`
    document.getElementById("total-bebidas-alcoolicas").innerHTML = `${getValueMeasure(totalBebidasAlcoolicas, 2)}`

}


/* Definição da medida utilizada a partir da quantidade medida em gramas
type 1: comidas
type 2: bebidas
*/

function getValueMeasure(val, type) {
    switch(type) {
        case 1: {
            return val >= 1000 ? `${val/1000}kg` : `${val}g`
            break;
        }
        case 2: {
            return val >= 1000 ? `${val/1000}L` : `${val}ml`
            break;
        }
    }
}

botao.addEventListener("click", calcularChurrasco)
