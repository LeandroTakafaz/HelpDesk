//    Função de Avaliação

$(function () {
    FLUIGC.stars("#avaliacao_stars", {
        stars: 5,
        value: parseInt($("#avaliacao").val()) || 0,
        text: ['NS/NR','Insatisfeito', 'Parcialmente satisfeito', 'Satisfeito', 'Muito Satisfeito']
    }).on("click", function () {
        let index = parseInt($("#avaliacao_stars").find("i").index(this)) + 1;
        $("#avaliacao").val(index);
    });
});
 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var tipoServicoSelect = document.getElementById("tipoServico");
var tipoCatInput = document.getElementById("tipoCat");
var tipoSLAInput = document.getElementById("tipoSLA");
var tipoDataSomadaInput = document.getElementById("tipoDataSomada");


//    Função para Pular Data

function ajustarParaProximoDiaUtil(data) {
    while (data.getDay() === 6 || data.getDay() === 0) {
        data.setDate(data.getDate() + 1);
    }
}

tipoServicoSelect.addEventListener("change", function() {
    var selectedServico = tipoServicoSelect.value;

    var dataset = DatasetFactory.getDataset("dsteste", null, null, null);

    for (var i = 0; i < dataset.values.length; i++) {
        var row = dataset.values[i];
        if (row.Servico === selectedServico) {
            var hora = parseInt(row["SLA"]); 
            var dataAtual = new Date(); 
            dataAtual.setHours(dataAtual.getHours() + hora); 

            // Chama a função para ajustar para o próximo dia útil
            ajustarParaProximoDiaUtil(dataAtual);

            tipoSLAInput.value = hora; 
            tipoCatInput.value = row["Categoria"]; 

            // Formate a data como "dd-mm-aaaa"
            var dia = String(dataAtual.getDate()).padStart(2, '0'); 
            var mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); 
            var ano = dataAtual.getFullYear(); 
            var dataFormatada = dia + '-' + mes + '-' + ano;
            tipoDataSomadaInput.value = dataFormatada;

            break;
        }
    }
});




