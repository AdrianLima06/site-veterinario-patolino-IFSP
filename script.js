window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollPosition >= 180) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });
  

function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}



var formSubmitted = false;


function validaForm(event) {
    event.preventDefault(); 
  
    var raca = document.forms["contato_form"]["raca"].value;
    var idade = document.forms["contato_form"]["idade"].value;
    var sintomas = document.forms["contato_form"]["sintomas"].value;
  
    if (raca === "" || idade === "" || sintomas === "") {
        alert("Todos os campos devem ser preenchidos");
    } else if (formSubmitted) {
        alert("Você já realizou com sucesso o agendamento!");
    } else {
        alert("Enviado com Sucesso!");
        formSubmitted = true;
        document.getElementById("btns").disabled = true; 
        closePopup(); 
    }
}


function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.forms["contato_form"].reset(); 
}


function openPopup() {
    if (formSubmitted) {
        alert("Você já realizou com sucesso o agendamento!");
    } else {
        document.getElementById("popup").style.display = "block";
    }
}

window.onclick = function(event) {
    if (event.target == document.getElementById("popup")) {
        closePopup();
    }
};
