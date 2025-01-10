//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const passos=parseInt(gets());
const jornada=parseInt(gets());

const posicaoFinal = passos+jornada;


print("Posicao final do heroi:"+posicaoFinal);
//ou  console.log("Posicao final do heroi:"+posicaoFinal);


// variaveis
let fruta = "Banana";

switch(fruta){
    case("Laranja"):{
        print("Suco de Laranja");
        break;
    }
    case"Banana":{
        print("Vitamina de Banana")
        break;
    }
    case"Maçã":{
        print("Suco de Maça")
        break;
    }
    case"Laranja":{
        print("Suco de Laranja")
        break;
    }
    default: print("incorreto")

}