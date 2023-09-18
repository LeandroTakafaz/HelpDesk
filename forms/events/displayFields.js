function displayFields(form, customHTML) {
	var Now_State = parseInt(getValue("WKNumState"));
	var data = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	var usuario = getValue("WKUser");
	form.setValue("name", usuario);
	form.setValue("unidade", usuario);
	form.setHidePrintLink(true);
	form.setValue("dataAval", data.format(new Date()));
	
	//	---Avaliar Chamado---
	if (Now_State == 14) {
		form.setVisibleById("paineldesc", false);
		form.setVisibleById("painel_req", false);
		form.setVisibleById("p1", false);
		form.setVisibleById("p25", false);
		form.setVisibleById("p50", false);
		form.setVisibleById("p75", false);
		form.setVisibleById("inputAdicionarSoluc", false);

	}
	//  Analisar Chamado - Todos
	if (Now_State == 12 || Now_State == 8 || Now_State == 10 || Now_State == 6) {
		form.setVisibleById("painel_sup", false);
		form.setVisibleById("p1", false);
		form.setVisibleById("p25", false);
		form.setVisibleById("p75", false);
		form.setVisibleById("p100", false);

	}

	//	---Abrir Chamado---
	
	if (Now_State == 0) {
		form.setVisibleById("info", false);
		form.setVisibleById("painel_sup", false);
		form.setVisibleById("p25", false);
		form.setVisibleById("p50", false);
		form.setVisibleById("p75", false);
		form.setVisibleById("p100", false);
		form.setVisibleById("solucao", false);

		
	}
}	