"use strict";
define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    (function () {
        var forms = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    console.log("abrio");
                    event.preventDefault();
                    var myModal = document.getElementById('myModal');
                    $("#myModal").show();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
});

function caracteresCorreoValido(email, div){
    console.log(email);
    //var email = $(email).val();
    var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

    if (caract.test(email) == false){
        $(div).hide().removeClass('hide').slideDown('fast');
        return false;
    }else{
        $(div).hide().addClass('hide').slideDown('slow');
        return true;
    }
}

function validarCheckbox(){
    var formulario = document.checkbox;
    var elementosTotales = formulario.checkbox.elements.length;
    var total_checked = 0;
    for(i=0;i<elementosTotales;i++)
       {
             if((formulario.elements[i].type=="checkbox")
             &&(formulario.elements[i].checked))
             { total_checked++; }
       }
    if(formulario.elements[0])
    print("Porfavor rellenar aunque sea un campo !")
 }

 function limpiarFormulario() {
    document.getElementById("formulario").reset();
  }

  function hideshow(){
    var frm=document.formulario;
    if(frm.style.display=="block"){frm.style.display="none"}
    else
    if(frm.style.display=="none"){frm.style.display="block"}
    }

