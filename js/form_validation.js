// JavaScript Document
window.onload = init;

function init(){
	document.getElementById("int_form").onsubmit = validateForm;
  document.getElementById("btnReset").onclick = clearForm;
}

function validateForm()
{
    var c_name = document.int_form.txt_c_name;
    var c_pos = document.int_form.c_position;
    var c_tech = document.int_form.c_tech_skill;
    var c_round = document.int_form.sel_round;
		var c_round_re = document.int_form.r_radio;


    if (c_name.value == "")
    {
        c_name.focus();
        return false;
    }

    if (c_pos.value == "")
    {
        c_pos.focus();
        return false;
    }

		if (c_tech.value == "")
    {
        c_tech.focus();
        return false;
    }

    if (c_round.selectedIndex < 1)
    {
        c_round.focus();
        return false;
    }

    if (c_round_re.value == "")
    {
        c_round_re.focus();
        return false;
    }
    return true;
}
