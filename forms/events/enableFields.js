function enableFields(form) {
	var Now_State = parseInt(getValue("WKNumState"));
	form.setEnabled("name", false);

//	---Analisar Chamado - Todos
	
	if (Now_State == 12 || Now_State == 8 || Now_State == 10 || Now_State == 6) {
		form.setEnabled("ramal", false);
		form.setEnabled("maquina", false);
		form.setEnabled("tipo", false);
		form.setEnabled("txt_categoria", false);
		form.setEnabled("tit", false);
		form.setEnabled("descricao", false);
		form.setEnabled("titulo", false);
	}

	//	---Avaliar Chamado---

	if (Now_State == 14) {
		form.setEnabled("ramal", false);
		form.setEnabled("maquina", false);
		form.setEnabled("tit", false);
		form.setEnabled("descricao", false);
		form.setEnabled("obsSoluc___1", false);
		form.setEnabled("obsSoluc___2", false);
		form.setEnabled("obsSoluc___3", false);
		form.setEnabled("obsSoluc___4", false);
		form.setEnabled("obsSoluc___5", false);
		form.setEnabled("info", false);
		form.setEnabled("dataAval", false);
	}
	
		// ---Abrir Chamado---

		if (Now_State == 0) {
			form.setEnabled("tipoCat", false);
		}
}