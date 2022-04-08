var graos = {
    categoria: "Grãos",
    itens: [],
};
var molhos = {
    categoria: "Molhos",
    itens: [],
};
var massas = {
    categoria: "Massas",
    itens: [],
};
var laticinios = {
    categoria: "Laticínios",
    itens: [],
};
var congelados = {
    categoria: "Congelados",
    itens: [],
};
var frutasEVerduras = {
    categoria: "Frutas e verduras",
    itens: [],
};

var listaDeCompras = [
    graos, molhos, massas, laticinios, congelados, frutasEVerduras
];



const divLista = document.getElementById("lista");





function adicionarItem() {
    const nomeItem = document.getElementById("item").value;
    const categoriaItem = document.getElementById("categoria").value;
    listaDeCompras[categoriaItem].itens.push(nomeItem);
    divLista.innerHTML = "";
    document.getElementById("item").value = "";
    mostrarLista();
}

function mostrarLista() {
    
    
    for (let i = 0; i < listaDeCompras.length; i++){
        const textLista = `<ul id='ul${i}'><h3>${listaDeCompras[i].categoria}</h3>`
        divLista.innerHTML += textLista;

        for (let x = 0; x < listaDeCompras[i].itens.length; x++ ){
            const textItens = `<li>${listaDeCompras[i].itens[x]}</li>`
            const ulLista = document.getElementById("ul"+ i);
            ulLista.innerHTML += textItens;
        }

        const fimLista = `</ul>`
        divLista.innerHTML += fimLista;

    }
}