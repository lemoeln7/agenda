const form = document.getElementById('form-contato');
let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNome = document.getElementById('nome');
    const inputTel = document.getElementById('phone');

    let = linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += `<td>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
})