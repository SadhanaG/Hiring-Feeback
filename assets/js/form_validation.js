// JavaScript Document
window.onload = init;

function init(){
	document.getElementById("int_form").onsubmit = validateForm;
   	document.getElementById("btnReset").onclick = clearForm;
   	document.getElementById("txtName").focus();
}

function validateForm(theForm) {
   with(theForm) {
      
      return (isNotEmpty(txtName, "Please enter your name!", elmNameError)
      );
   }
   
   // Set initial focus
   document.getElementById("txt_c_name").focus();
}
 