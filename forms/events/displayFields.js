function displayFields(form,customHTML){
	
	var codigoSolicitante = getValue("WKUser");
	form.setValue("nome", codigoSolicitante);