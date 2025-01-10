let heroi= "Spider Man";
let nivel = 5200;
let rank=""

switch (true){
    case (nivel>=0 && nivel<=1000): {
        console.log ("Ferro");
        rank="Ferro";
        break;
    }
    case (nivel>=1001&& nivel<=2000): {
        rank="Bronze"; 
        break;
    }
    case (nivel>=2001&& nivel<=5000): {
        rank="Prata";
        break;
    }
    case (nivel>=5001&& nivel<=7000): {
        rank="Ouro";
        break;
    }
    case (nivel>=7000&& nivel<=8000):{
        rank= "Platina";
        break;
    }
    case (nivel>=8001&& nivel<=9000): {
        rank="Ascendente";
        break;
    }
    case (nivel>=9001&& nivel<=10000): {
        rank="Imortal";
        break;
    }
    case (nivel>=10000&& nivel>100000):{
        rank="Radiante";
        break;
    }
    default:rank="Nivel Desconhecido";
}

console.log("O Herói de nome "+ heroi +" está no nível de " + rank);