function validateForm(form){
	var Now_State = parseInt(getValue("WKNumState"));

	if(form.getValue("ramal") == "") {
		throw "Campo Ramal não foi preenchido.";
	}
	if(form.getValue("descricao") == "") {
		throw "Campo Descrição não foi preenchido.";
	}
	if(form.getValue("txt_categoria") == "") {
		throw "Campo Categoria não foi preenchido.";
	}
	if(form.getValue("maquina") == "") {
		throw "Campo Número da Máquina não foi preenchido.";
	}
	if(form.getValue("titulo") == "") {
		throw "Campo Título não foi preenchido.";
	}

	// ---Analisar Chamado - Suporte Geral---

	if (Now_State == 10) {
		if(form.getValue("equipamento") == "") {
			throw "Campo Equipamento não foi preenchido.";
		}
		if(form.getValue("valorEstimado") == "") {
			throw "Campo Valor Estimado não foi preenchido.";
		}
	}

	//	---Avaliar Chamado---
	if (Now_State == 14) {
		if(form.getValue("avaliacao") == "") {
			throw "Campo Avaliação não foi preenchido.";
		}
		if(form.getValue("obs1") == "") {
			throw "Campo Observação não foi preenchido.";
		}
	}
}