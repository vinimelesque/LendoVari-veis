function MostrarAlert() {

    var nome = document.getElementById("c_nome").value;
    var snome = document.getElementById("c_snome").value;
    var dataNasc = document.getElementById("anoNasc").value;

    var idade = 2023 - dataNasc;

    alert("Eae pikareta, mais especificadamente " + nome + " " + snome + ". Tá velho hein! " + idade + " anos já!");
}