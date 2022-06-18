function calcula (evento) {
    evento.preventDefault();
    let conta = document.getElementById("conta").value;
    let valorPorcentagem = document.getElementById("valorPorcentagem").value;
    let pessoas = document.getElementById("pessoas").value;

    if(conta == "" || valorPorcentagem == 0 || pessoas == ''){
        alert('É necessário preencher todos os campos');
        return;
    }

    if(pessoas == "" || pessoas <=1){
        pessoas = 1;
        document.getElementById("cada").style.display = "none";
    } else {
        document.getElementById("cada").style.display = "block";
    }

    total = (conta * valorPorcentagem) / pessoas;
    total = total.toFixed(2);
    document.getElementById("porcentagem").innerHTML = total;
    document.getElementById("total_porcentagem").style.display = "block";
}

document.getElementById("total_porcentagem").style.display = "none";
document.getElementById("cada").style.display = "none";

document.getElementById("form").addEventListener("submit", calcula);