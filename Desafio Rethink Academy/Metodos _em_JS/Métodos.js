const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando Henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda Do Nasscimento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 }
];

/*Agora que você manipulou os dados, precisamos que desenvolva 
uma função que retorna os dados de uma pessoa 
pelo nome passado via parâmetros.
Entrada =  "Gabriel Gomes"
Retorno esperado: */


function Busca_Pelo_Nome(nome) {
    const busca = pessoas.find(Pessoa => Pessoa.name === nome);
    return busca
}

/*  E então, desenvolva uma função que retorna um vetor com os nomes das pessoas. 
Bônus: Retornar somente o primeiro nome.*/

function Imprimir_Nomes() {
    const nomes = [];
    for (var i = 0; i < pessoas.length; i++) {
        nomes[i] = pessoas[i].name.trim().split(' ')[0];
    }
    return nomes;

}

/* Desenvolva uma função que insira um id único para cada pessoa no vetor*/

function Inserir_Ids() {
    for (var i = 0; i < pessoas.length; i++) {
        pessoas[i].id = i+1;
    }
    return pessoas;
}

/*Desenvolva uma função que retorna os dados das pessoas para quem tem idade suficiente para tirar a primeira habilitação.*/

function Maiores_de_idade() {
    const aptos_a_habilitação = [];
    for (var i = 0; i < pessoas.length; i++) {
        if (pessoas[i].age >= 18) {
            aptos_a_habilitação.push(pessoas[i])
        }
    }
    return aptos_a_habilitação

}

/* Cria uma função que retorne a média das idades das pessoas.*/
function Media_de_idade() {
    var total = 0
    var media = 0;
    for (var i = 0; i < pessoas.length; i++) {
        total += pessoas[i].age
    }
    media = total / pessoas.length
    media = (media.toFixed(2))
    return media

}























