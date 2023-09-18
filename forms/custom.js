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
 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var tipoServicoSelect = document.getElementById("tipoServico");
var tipoCatInput = document.getElementById("tipoCat");
var tipoSLAInput = document.getElementById("tipoSLA");
var tipoDataSomadaInput = document.getElementById("tipoDataSomada");

tipoServicoSelect.addEventListener("change", function() {
    var selectedServico = tipoServicoSelect.value;

    var dataset = DatasetFactory.getDataset("dsteste", null, null, null);

    for (var i = 0; i < dataset.values.length; i++) {
        var row = dataset.values[i];
        if (row.Servico === selectedServico) {
            var hora = parseInt(row["SLA"]); 
            var dataAtual = new Date(); 
            dataAtual.setHours(dataAtual.getHours() + hora); 
            
            if (dataAtual.getDay() === 6) {      
                dataAtual.setDate(dataAtual.getDate() + 2);
            }
            if (dataAtual.getDay() === 0) {      
                dataAtual.setDate(dataAtual.getDate() + 1);
            }

            tipoSLAInput.value = hora; 
            tipoCatInput.value = row["Categoria"]; 

            var dia = String(dataAtual.getDate()).padStart(2, '0'); 
            var mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); 
            var ano = dataAtual.getFullYear();
            var hora = String(dataAtual.getHours()).padStart(2, '0');
            var minuto = String(dataAtual.getMinutes()).padStart(2, '0');

            var dataFormatada = ano + '-' + mes + '-' + dia + ' ' + hora + ':' + minuto;
            tipoDataSomadaInput.value = dataFormatada;
            
            break;
        }
    }
});

/***********ESCOLHA DO SUPERIOR******************/

function unidade() {
    var ds_mat = DatasetFactory.getDataset("colleague", null, null, null);
    var ds_und = DatasetFactory.getDataset("dsc_Unidades", null, null, null);

    var mat = document.getElementById("cmb_NomeSolicitante").value;
    // console.log(mat)

    for (var i = 0; i < ds_mat.values.length; i++) {
        if (mat == ds_mat.values[i]['colleaguePK.colleagueId']) {
            var und = ds_mat.values[i]['groupId'];

            // console.log(ds_mat.values[i]['groupId'])

            for (var j = 0; j < ds_und.values.length; j++) {
                if (und == ds_und.values[j]['AntigaSigla']) {
                    // console.log(ds_und.values[j]['Sigla'])
                    document.getElementById("cmb_GerenteSolicitante").value = ds_und.values[j]['NomeGerente']
                    // console.log(document.getElementById("cmb_GerenteSolicitante").value)
                    document.getElementById("cmb_UnidadeSolicitante").value = ds_und.values[j]['NomeUnidade']
                    document.getElementById("numSuperior").value = ds_und.values[j]['Matricula']
                    if (mat == document.getElementById("numSuperior").value) {
                        document.getElementById("cmb_GerenteSolicitante").value = ds_und.values[j]['NomeSuperior']
                        document.getElementById("numSuperior").value = ds_und.values[j]['MatSuperior']
                    }

                    dir = ds_und.values[j]["MatSuperior"]
                    console.log("diretoria: "+ dir)
                    if (dir == "00000428") {
                        document.getElementById("hdn_diretoria").value = 'Pool:Role:DISUP'
                    } else if (dir == "80000318") {
                        document.getElementById("hdn_diretoria").value = 'Pool:Role:DIRAF'
                    } else if (dir == "00000656") { document.getElementById("hdn_diretoria").value = 'Pool:Role:DITEC' }
                }
            }
        }
    }
}
window.addEventListener("load", unidade);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const hoje = new Date();
const dia = hoje.getDate().toString().padStart(2,'0')
const mes = String(hoje.getMonth() + 1).padStart(2,'0')
const ano = hoje.getFullYear()
const dataAtual = `${dia} / ${mes} / ${ano}`