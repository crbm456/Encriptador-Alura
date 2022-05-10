/* La pagina va a iniciar con el boton de copiar desactivado*/
document.getElementById('copiar').style.display="none"

function ocultarContenido(){
    var texto = document.getElementById('inputText1').value;
         /*Si el usuario no ingresa ningun texto las imagenes y el texto se mantendran mostradas
            y el textarea y el boton de copiar se ocultaran */
    if (texto == ""){
        document.getElementById("imagen").style.display="";         
        document.getElementById('text').style.display="";
        document.getElementById('text-2').style.display="";
        document.getElementById('inputText2').style.display="none";
        document.getElementById('copiar').style.display="none";
        swal("Por favor ingresar el texto","Sin texto","error");
   
        
    }
    /* De lo contrario ocurra de manera invertida */
    else{
        document.getElementById("imagen").style.display="none";
        document.getElementById('text').style.display="none";
        document.getElementById('text-2').style.display="none";
        document.getElementById('inputText2').style.display="";
        document.getElementById('copiar').style.display="";
    }

    
    }

    function ocultarVacio(){

        document.getElementById("imagen").style.display="";         
        document.getElementById('text').style.display="";
        document.getElementById('text-2').style.display="";
        document.getElementById('inputText2').style.display="none";
        document.getElementById('copiar').style.display="none";
        
    }

/*Funcion de encriptar el texto*/
function encriptar(){                                    
    var texto = document.getElementById("inputText1").value;
    var i = 0;
    var textaux = "";

        while(i < texto.length){
            if(texto.charAt(i) == "e"){
             textaux += texto.charAt(i).replace('e','enter');
         }
         else if (texto.charAt(i) == "i"){
            textaux += texto.charAt(i).replace('i','imes');
         }
         else if (texto.charAt(i) == "a"){
            textaux += texto.charAt(i).replace('a','ai');
         }
         else if (texto.charAt(i) == "o"){
            textaux += texto.charAt(i).replace('o','ober');
         }
         else if (texto.charAt(i) == "u"){
             textaux += texto.charAt(i).replace('u', 'ufat');
        }

        else{
            textaux += texto.charAt(i);
        }
    i++;
    document.getElementById("inputText2").value=textaux;
    
    }

    
   
}

/*Funcion de desencriptar el texto*/
function desencriptar(){         
    var texto = document.getElementById("inputText1").value;                       
    var i=0;
    var textaux=""

    while(i < texto.length){
        if (texto[i]== "e" && texto[i+4]== "r"){
             textaux+="e";
             i+=4;
        }
        else if(texto[i]=="i" && texto[i+3]=="s"){
             textaux +="i";
             i+=3
        }
        else if(texto[i]=="o" && texto[i+3]=="r"){
         textaux += "o";
         i+=3
        }
        else if(texto[i]=="a" && texto[i+1]=="i"){
         textaux += "a";
         i+=1
        }
        else if(texto[i]=="u" && texto[i+3]=="t"){
         textaux += "u";
         i+=3
        }
        else{
         textaux += texto[i];
        }
     i++
     }
 document.getElementById("inputText2").value=textaux;


 }

   /*Funcion de validar caracteres(Sin acentos ni caracteres especiales)*/
   function validarTexto(){
    var texto = document.getElementById("inputText1").value;
    

for(let i = 0; i <texto.length; i++){      
    if (texto[i].charCodeAt() > 34 && texto[i].charCodeAt() < 44){
        swal("No se permiten numeros ni símbolos", "Revise el texto ingresado","error");
        document.getElementById('inputText2').value = "";   
        ocultarVacio();     
        break;
    }
    if (texto[i].charCodeAt() > 47 && texto[i].charCodeAt() < 58){
        swal("No se permiten numeros ni símbolos", "Revise el texto ingresado","error");
        document.getElementById('inputText2').value = "";
        ocultarVacio();
        break;
    }
    if (texto[i].charCodeAt() > 59 && texto[i].charCodeAt() < 65){
        swal("No se permiten numeros ni símbolos", "Revise el texto ingresado","error");
        document.getElementById('inputText2').value = "";
        ocultarVacio();
        break;
    }
    if (texto[i].charCodeAt() > 90 && texto[i].charCodeAt() < 97){
        swal("No se permiten numeros ni símbolos", "Revise el texto ingresado","error");
        document.getElementById('inputText2').value = "";
        ocultarVacio();
        break;
    }
    if (texto[i].charCodeAt() > 122){
        swal("No se permiten numeros ni símbolos", "Revise el texto ingresado","error");
        document.getElementById('inputText2').value = "";
        ocultarVacio();
        break;
    }
      
}

}
 
 /*Funcion de copiar el texto*/
function copiar(){
    var contenido = document.getElementById('inputText2');
    contenido.select();
    document.execCommand('copy');    
    ocultarVacio();
    swal(" Texto copiado exitosamente","Dar Click en el boton","success");
    
}

