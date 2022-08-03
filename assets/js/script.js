let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let nomeOk = false
let emailOk = false
let senhaOk = false

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length <= 2) {
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
    }
    else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }
    else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }   
}

function validaSenha() {
    let txtSenha = document.querySelector('#txtSenha')
    if (senha.value.length >= 8) {
        txtSenha.innerHTML = 'Por favor, digite no máximo 6 caracteres'
        txtSenha.style.color = 'red'
        txtSenha.style.display = 'block'
    }
    else {
        txtSenha.style.display = 'none'
        assuntoOk = true
    }
}


function acesse () {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Cadastro bem-sucedido!')
    }
    else {
        alert ('Por favor, preencha o formulário corretamente para enviá-lo')
    }
}

