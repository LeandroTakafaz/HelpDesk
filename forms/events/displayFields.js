function displayFields(form, customHTML) {
	var Now_State = parseInt(getValue("WKNumState"));
	var data = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	var usuario = getValue("WKUser");
	form.setValue("name", usuario);
	form.setValue("cmb_NomeSolicitante", usuario);
	form.setValue("cmb_UnidadeSolicitante", usuario);
	form.setHidePrintLink(true);
	form.setValue("dataAval", data.format(new Date()));
	
	//  Analisar Chamado - Todos
	if (Now_State == 12 || Now_State == 8 || Now_State == 6) {
		form.setVisibleById("painel_sup", false);
		form.setVisibleById("p1", false);
		form.setVisibleById("p25", false);
		form.setVisibleById("p75", false);
		form.setVisibleById("p100", false);
		form.setVisibleById("painel_aprov", false);
	}
	
	// Analisar Chamado - Suporte Geral	
	
	if (Now_State == 10) {
		form.setVisibleById("painel_sup", false);
		form.setVisibleById("p1", false);
		form.setVisibleById("p25", false);
		form.setVisibleById("p75", false);
		form.setVisibleById("p100", false);
		form.setVisibleById("aproval", false);
		form.setVisibleById("cmb_UnidadeSolicitante", false);
		form.setVisibleById("cmb_GerenteSolicitante", false);
		form.setVisibleById("cmb_NomeSolicitante", false);
	}

	//	---Abrir Chamado---
	
	if (Now_State == 0) {
		form.setVisibleById("info", false);
		form.setVisibleById("painel_sup", false);
		form.setVisibleById("p25", false);
		form.setVisibleById("p50", false);
		form.setVisibleById("p75", false);
		form.setVisibleById("p100", false);
		form.setVisibleById("painel_solucao", false);
		form.setVisibleById("painel_aprov", false);
		
	}
	
	//	---Aprovar Compra----
	
	if (Now_State == 25) {
		form.setVisibleById("p1", false);
		form.setVisibleById("p25", false);
		form.setVisibleById("p50", false);
		form.setVisibleById("p75", false);
		form.setVisibleById("p100", false);
		form.setVisibleById("painel_req", false);
		form.setVisibleById("painel_desc", false);
		form.setVisibleById("painel_sup", false);
		form.setVisibleById("painel_solucao", false);
		form.setVisibleById("cmb_UnidadeSolicitante", false);
		form.setVisibleById("cmb_GerenteSolicitante", false);
		form.setVisibleById("cmb_NomeSolicitante", false);
		form.setVisibleById("equip", false);
		form.setVisibleById("addRateio", false);
		form.setVisibleById("painel_nota", false);
//		ocultarCampo(customHTML, "delRateio");
		
	}
	//	 ---Realizar Compra---
	if (Now_State == 35) {
		form.setVisibleById("p1", false);
		form.setVisibleById("p25", false);
		form.setVisibleById("p50", false);
		form.setVisibleById("p75", false);
		form.setVisibleById("p100", false);
		form.setVisibleById("painel_req", false);
		form.setVisibleById("painel_desc", false);
		form.setVisibleById("painel_sup", false);
		form.setVisibleById("painel_solucao", false);
		form.setVisibleById("cmb_UnidadeSolicitante", false);
		form.setVisibleById("cmb_GerenteSolicitante", false);
		form.setVisibleById("cmb_NomeSolicitante", false);
		form.setVisibleById("equip", false);
		form.setVisibleById("addRateio", false);
		form.setVisibleById("aproval", false);
		form.setVisibleById("tabela_Rateio", false);
	}

		//	---Avaliar Chamado---
		if (Now_State == 14) {
			form.setVisibleById("paineldesc", false);
			form.setVisibleById("painel_req", false);
			form.setVisibleById("p1", false);
			form.setVisibleById("p25", false);
			form.setVisibleById("p50", false);
			form.setVisibleById("p75", false);
			form.setVisibleById("inputAdicionarSoluc", false);
			form.setVisibleById("painel_aprov", false);
			form.setVisibleById("painel_desc", false);
			form.setVisibleById("inputAdicionar", false);
		}
}	