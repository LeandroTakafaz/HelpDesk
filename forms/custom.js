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

//
var tipoServicoSelect = document.getElementById("tipoServico");
var tipoCatInput = document.getElementById("tipoCat");
var tipoSLAInput = document.getElementById("tipoSLA");

tipoServicoSelect.addEventListener("change", function() {
    var selectedServico = tipoServicoSelect.value;

    var dataset = DatasetFactory.getDataset("dsteste", null, null, null);

    for (var i = 0; i < dataset.values.length; i++) {
        var row = dataset.values[i];
        if (row.Servico === selectedServico) {
            tipoCatInput.value = row["Categoria"];
            tipoSLAInput.value = row["SLA"];
            break;
        }
    }
});
//