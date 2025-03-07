const form = document.getElementById('form-atividade');
const numero = [];
const nome = [];
let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizaMediaFinal();
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nome');
    const inputNotaAtividade = document.getElementById('numero-de-telefone');

    if( atividade.includes(inputNomeAtividade.value)){
        alert(`O telefone: ${inputNumeroDeTelefone.value} ja foi adicionado`)
    } else{
        atividade.push(inputNome.value);
        notas.push(parseFloat(inputNumeroDeTelefone.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumeroDeTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }


    inputNome.value = '';
    inputNumeroDeTelefone.value = '';
}


function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


