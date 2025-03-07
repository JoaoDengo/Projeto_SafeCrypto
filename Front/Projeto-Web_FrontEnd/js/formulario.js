const API_URL = "http://localhost:8080/main/usuarios"; 


function validarCampo(input, elementErro, msg){
    if(input.value.trim() === ""){
        elementErro.textContent = msg;
        input.classList.add("input-error");
        return false;
    }
    elementErro.textContent = "";
    input.classList.remove("input-error");
    return true;
}

function validarEmail(input, elementErro){
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(input.value.trim() === ""){
        elementErro.textContent = "O e-mail é obrigatório";
        input.classList.add("input-error");
        return false;
    }else if(!regexEmail.test(input.value)){
        elementErro.textContent = "E-mail inválido";
        input.classList.add("input-error");
        return false;
    }
    elementErro.textContent = "";
    input.classList.remove("input-error");
    return true;
}

function validarCpf(input,elementErro){
    let regexCpf = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;

    if(input.value.trim() === ""){
        elementErro.textContent = "O CPF é obrigatório";
        input.classList.add("input-error");
        return false;
    }else if(!regexCpf.test(input.value)){
        elementErro.textContent = "CPF inválido";
        input.classList.add("input-error");
        return false;
    }
    elementErro.textContent = "";
    input.classList.remove("input-error");
    return true;
}

function validarRg(input, elementErro){
    let regexRg = /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\-[0-9]{1}$/;

    if(input.value.trim() === ""){
        elementErro.textContent = "O RG é obrigatório";
        input.classList.add("input-error");
        return false;
    }else if(!regexRg.test(input.value)){
        elementErro.textContent = "RG inválido";
        input.classList.add("input-error");
        return false;
    }
    elementErro.textContent = "";
    input.classList.remove("input-error");
    return true;
}

function validarTelefone(input, elementErro){
    let regexTelefone = /^[0-9]{11}$/;

    if(input.value.trim() === ""){
        elementErro.textContent = "O Telefone é obrigatório";
        input.classList.add("input-error");
        return false;
    }else if(!regexTelefone.test(input.value)){
        elementErro.textContent = "Telefone inválido";
        input.classList.add("input-error");
        return false;
    }
    elementErro.textContent = "";
    input.classList.remove("input-error");
    return true;
}

function validarCep(input, elementErro){
    let regexCep = /^[0-9]{5}\-[0-9]{3}$/;

    if(input.value.trim() === ""){
        elementErro.textContent = "O CEP é obrigatório";
        input.classList.add("input-error");
        return false;
    }else if(!regexCep.test(input.value)){
        elementErro.textContent = "CEP inválido";
        input.classList.add("input-error");
        return false;
    }
    elementErro.textContent = "";
    input.classList.remove("input-error");
    return true;
}

function validarPolitica(input, elementErro){
    if (!input.checked) {
        elementErro.textContent = "Você precisa aceitar os termos.";
        input.classList.add("input-error");
        return false;
    }
    
    elementErro.textContent = "";
    input.classList.remove("input-error");
    return true;
}


document.getElementById("nome").addEventListener("blur", function() {
    validarCampo(this, document.getElementById("erroNome"), "O nome é obrigatório");
});

document.getElementById("sobreNome").addEventListener("blur", function(){
    validarCampo(this, document.getElementById("erroSobreNome"), "O sobre nome é obrigatório");
})

document.getElementById("email").addEventListener("blur", function() {
    validarEmail(this, document.getElementById("erroEmail"));
});

document.getElementById("cpf").addEventListener("blur", function(){
    validarCpf(this, document.getElementById("erroCpf"));
});

document.getElementById("rg").addEventListener("blur", function(){
    validarRg(this, document.getElementById("erroRg"));
})

document.getElementById("telefone").addEventListener("blur", function(){
    validarTelefone(this, document.getElementById("erroTel"));
})

document.getElementById("data").addEventListener("blur", function(){
    validarCampo(this, document.getElementById("erroData"), "A data de nascimento é obrigatória");
})

document.getElementById("cep").addEventListener("blur", function(){
    validarCep(this, document.getElementById("erroCep"));
})

document.getElementById("rua").addEventListener("blur", function(){
    validarCampo(this, document.getElementById("erroRua"), "O nome da Rua é obrigatório");
})

document.getElementById("numero").addEventListener("blur", function(){
    validarCampo(this, document.getElementById("erroNumero"), "O número do endereço é obrigatório");
})

document.getElementById("cidade").addEventListener("blur", function(){
    validarCampo(this, document.getElementById("erroCidade"), "O nome da cidade é obrigatório");
})

document.getElementById("bairro").addEventListener("blur", function(){
    validarCampo(this, document.getElementById("erroBairro"), "O nome do bairro é obrigatório");
})

document.getElementById("estado").addEventListener("blur", function(){
    validarCampo(this, document.getElementById("erroEstado"), "O estado é obrigatório");
})

document.getElementById("politica").addEventListener("blur", function(){
    validarPolitica(this, document.getElementById("erroPolitica"));
})

document.getElementById("senha").addEventListener("blur", function(){
    validarCampo(this, document.getElementById("erroSenha"), "A senha é obrigatório");
})
document.getElementById("confsenha").addEventListener("blur", function(){
    validarCampo(this, document.getElementById("erroConfSenha"), "Confirmar a senha é obrigatório");
})


document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    let nomeValido = validarCampo(nome, erroNome, "O nome é obrigatório");
    let sobreNomeValido = validarCampo(sobreNome, erroSobreNome, "O sobre nome é obrigatório");
    let emailValido = validarEmail(email, erroEmail);
    let cpfValido = validarCpf(cpf, erroCpf);
    let rgValido = validarRg(rg, erroRg);
    let telValido = validarTelefone(telefone, erroTel);
    let dataValido = validarCampo(data, erroData, "A data de nascimento é obrigatória");
    let cepValido = validarCep(cep, erroCep);
    let ruaValido = validarCampo(rua, erroRua, "O nome da Rua é obrigatório");
    let numeroValido = validarCampo(numero, erroNumero, "O número do endereço é obrigatório");
    let cidadeValido = validarCampo(cidade, erroCidade, "O nome da cidade é obrigatório");
    let bairroValido = validarCampo(bairro, erroBairro, "O nome do bairro é obrigatório");
    let estadoValido = validarCampo(estado, erroEstado, "O estado é obrigatório");
    let politicaValido = validarPolitica(politica, erroPolitica);
    let senhaValido = validarCampo(senha, erroSenha, "A senha é obrigatória");
    let confSenhaValido = validarCampo(confsenha, erroConfSenha, "Confirmar a senha é obrigatório");

    if (
        !nomeValido || !sobreNomeValido || !emailValido || !cpfValido || !rgValido ||
        !telValido || !dataValido || !cepValido || !ruaValido || !numeroValido ||
        !cidadeValido || !bairroValido || !estadoValido || !politicaValido ||
        !senhaValido || !confSenhaValido
    ) {
        return;
    } else {
        addUsuario(); 
    }
});
document.getElementById("olhoSenha").addEventListener("click", function() {
    let inputSenha = document.getElementById("senha");
    if (inputSenha.type === "password") {
        inputSenha.type = "text";
    } else {
        inputSenha.type = "password";
    }
});

document.getElementById("olhoConfSenha").addEventListener("click", function() {
    let inputConfSenha = document.getElementById("Confsenha");
    if (inputConfSenha.type === "password") {
        inputConfSenha.type = "text";
    } else {
        inputConfSenha.type = "password";
    }
});

async function enviarDadosParaAPI(usuario) {
    console.log("Enviando dados:", usuario);  
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });

        console.log("Status da resposta:", response.status); 

        if (!response.ok) {
            const errorText = await response.text(); 
            throw new Error(`Erro ao cadastrar usuário! Detalhes: ${errorText}`);
        }

        const data = await response.json(); 
        console.log("Usuário cadastrado com sucesso:", data);
        alert("Usuário cadastrado com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar dados para a API:", error);
        alert(`Erro ao cadastrar usuário. ${error.message}`);
    }
}

    
function addUsuario() {
    const novoUsuario = {
        nome: document.getElementById("nome").value,
        sobreNome: document.getElementById("sobreNome").value,
        email: document.getElementById("email").value,
        cpf: document.getElementById("cpf").value,
        rg: document.getElementById("rg").value,
        telefone: document.getElementById("telefone").value,
        dataNascimento: document.getElementById("data").value, 
        cep: document.getElementById("cep").value,
        rua: document.getElementById("rua").value,
        numero: document.getElementById("numero").value,
        cidade: document.getElementById("cidade").value,
        bairro: document.getElementById("bairro").value,
        estado: document.getElementById("estado").value,
        aceitouPolitica: document.getElementById("politica").checked,
        senha: document.getElementById("senha").value,
    };

    enviarDadosParaAPI(novoUsuario);
}
