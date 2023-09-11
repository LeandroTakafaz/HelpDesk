function displayFields(form, customHTML) {
	var Now_State = parseInt(getValue("WKNumState"));
	var data = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	var usuario = getValue("WKUser");
	form.setValue("name", usuario);


	form.setValue("dataAval", data.format(new Date()));

	//	---Abrir Chamado || Atender Chamdo---

	if (Now_State == 0 || Now_State == 9) {
		form.setVisibleById("info", false);
	}
	if (Now_State == 5) {
		form.setVisibleById("paineldesc", false);
		form.setVisibleById("painel_req", false);
	}

}	