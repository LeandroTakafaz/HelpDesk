function displayFields(form, customHTML) {
	var Now_State = parseInt(getValue("WKNumState"));
	var data = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	var usuario = getValue("WKUser");
	form.setValue("name", usuario);
	form.setHidePrintLink(true);


	form.setValue("dataAval", data.format(new Date()));

	//	---Atender Chamado---

	if (Now_State == 9) {
		form.setVisibleById("info", false);
		form.setVisibleById("painel_sup", false);
		form.setVisibleById("p1", false);
		form.setVisibleById("p25", false);
		form.setVisibleById("p75", false);
		form.setVisibleById("p100", false);
	}
	//	---Avaliar Chamado---
	if (Now_State == 5) {
		form.setVisibleById("paineldesc", false);
		form.setVisibleById("painel_req", false);
		form.setVisibleById("p1", false);
		form.setVisibleById("p25", false);
		form.setVisibleById("p50", false);
		form.setVisibleById("p75", false);
	}
	//  ---Corrigir Informações---
	if (Now_State == 4) {
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
	}
	
	//	---Analisar Chamado---
	
	if (Now_State == 6) {
		form.setVisibleById("painel_sup", false);
		form.setVisibleById("p1", false);
		form.setVisibleById("p50", false);
		form.setVisibleById("p75", false);
		form.setVisibleById("p100", false);
	}
	
}	