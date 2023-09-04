function validateForm(form){
	
	if(form.getValue("ramal") == "") {
		throw "Campo Ramal não foi preenchido.";
	}
	if(form.getValue("obs") == "") {
		throw "Campo Descrição não foi preenchido.";
	}
	if(form.getValue("txt_categoria") == "") {
		throw "Campo Categoria não foi preenchido.";
	}
	if(form.getValue("maquina") == "") {
		throw "Campo Número da Máquina não foi preenchido.";
	}

}