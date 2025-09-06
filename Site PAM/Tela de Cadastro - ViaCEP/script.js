const form = document.getElementById("multiStepForm");
const formSteps = document.querySelectorAll(".form-step");
const progress = document.getElementById("progress");
let currentStep = 0;

// Botões Próximo/Anterior
document.querySelectorAll(".btn-next").forEach(button => {
  button.addEventListener("click", () => {
    if(currentStep < formSteps.length - 1){
      formSteps[currentStep].classList.remove("form-step-active");
      currentStep++;
      formSteps[currentStep].classList.add("form-step-active");
      updateProgress();
    }
  });
});

document.querySelectorAll(".btn-prev").forEach(button => {
  button.addEventListener("click", () => {
    if(currentStep > 0){
      formSteps[currentStep].classList.remove("form-step-active");
      currentStep--;
      formSteps[currentStep].classList.add("form-step-active");
      updateProgress();
    }
  });
});

function updateProgress(){
  let percent = ((currentStep+1)/formSteps.length)*100;
  progress.style.width = percent + "%";
}

// ViaCEP
document.getElementById("cep").addEventListener("blur", function () {
  let cep = this.value.replace(/\D/g,"");
  if(cep !== ""){
    let validacep = /^[0-9]{8}$/;
    if(validacep.test(cep)){
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        if(!("erro" in data)){
          document.getElementById("rua").value = data.logradouro;
          document.getElementById("bairro").value = data.bairro;
          document.getElementById("cidade").value = data.localidade;
          document.getElementById("uf").value = data.uf;
        } else alert("CEP não encontrado.");
      })
      .catch(()=>alert("Erro ao buscar CEP."));
    } else alert("Formato de CEP inválido.");
  }
});

// Força da senha
const senha = document.getElementById("senha");
const strengthText = document.getElementById("strengthText");
senha.addEventListener("input", ()=>{
  const val = senha.value;
  let strength = "Fraca";
  if(val.length>=6 && /[A-Z]/.test(val) && /\d/.test(val)) strength="Média";
  if(val.length>=8 && /[A-Z]/.test(val) && /\d/.test(val) && /[!@#\$%\^&\*]/.test(val)) strength="Forte";
  strengthText.textContent = strength;
});

// Submit final
form.addEventListener("submit", e=>{
  e.preventDefault();
  const confirmaSenha = document.getElementById("confirmaSenha").value;
  if(senha.value !== confirmaSenha){
    alert("As senhas não coincidem!");
    return;
  }
  alert("Cadastro realizado com sucesso!");
});
