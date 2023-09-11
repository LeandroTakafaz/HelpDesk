function enableFields(form) {
	var Now_State = parseInt(getValue("WKNumState"));
	form.setEnabled("name", false);

//	---Analisar Chamado || Atender Chamado---
	
	if (Now_State == 6 || Now_State == 9) {
		form.setEnabled("ramal", false);
		form.setEnabled("maquina", false);
		form.setEnabled("tipo", false);
		form.setEnabled("txt_categoria", false);
		form.setEnabled("tit", false);
		form.setEnabled("obs", false);
	}
}