///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var tipoServicoSelect = document.getElementById("tipoServico");
var tipoCatInput = document.getElementById("tipoCat");
var tipoSLAInput = document.getElementById("tipoSLA");
var tipoDataSomadaInput = document.getElementById("tipoDataSomada");

// Define os dias não úteis (por exemplo, sábado e domingo)
var diasNaoUteis = [0, 6]; // Domingo e Sábado

tipoServicoSelect.addEventListener("change", function () {
    var selectedServico = tipoServicoSelect.value;

    var dataset = DatasetFactory.getDataset("dsteste", null, null, null);

    for (var i = 0; i < dataset.values.length; i++) {
        var row = dataset.values[i];
        if (row.Servico === selectedServico) {
            var hora = parseInt(row["SLA"]);
            var dataAtual = new Date();
            var diasAdicionados = 0;

            // Loop para adicionar os dias úteis
            while (diasAdicionados < hora) {
                dataAtual.setDate(dataAtual.getDate() + 1);
                var diaDaSemana = dataAtual.getDay();

                // Verifica se o dia é não útil
                if (diasNaoUteis.includes(diaDaSemana)) {
                    continue; // Pula dias não úteis
                }

                diasAdicionados++;
            }

            tipoSLAInput.value = hora;
            tipoCatInput.value = row["Categoria"];

            var dia = String(dataAtual.getDate()).padStart(2, "0");
            var mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
            var ano = dataAtual.getFullYear();
            var hora = String(dataAtual.getHours()).padStart(2, "0");
            var minuto = String(dataAtual.getMinutes()).padStart(2, "0");

            var dataFormatada = ano + "-" + mes + "-" + dia + " " + hora + ":" + minuto;
            tipoDataSomadaInput.value = dataFormatada;

            break;
        }
    }
});

/*************ATUALIZAÇÃO DOS CAMPOS DE CONFIRMAÇÃO**************/

function controlarCampos() {
    var select = document.getElementById("equipSelect");
    var equipamento = document.getElementById("equipamento");
    var valorEstimado = document.getElementById("valorEstimado");
    
    if (select.value === "sim") {
        equipamento.style.display = "block"; // Mostra o campo Equipamento Solicitado
        valorEstimado.style.display = "block"; // Mostra o campo Valor Estimado
    } else {
        equipamento.style.display = "none"; // Oculta o campo Equipamento Solicitado
        valorEstimado.style.display = "none"; // Oculta o campo Valor Estimado
    }
}

// Adiciona o evento onchange ao campo select
var select = document.getElementById("equipSelect");
select.addEventListener("change", controlarCampos);

// Chama a função inicialmente para definir o estado dos campos com base na escolha inicial
controlarCampos();

/***********ESCOLHA DO SUPERIOR******************/

function unidade() {
    var ds_mat = DatasetFactory.getDataset("colleague", null, null, null);
    var ds_und = DatasetFactory.getDataset("dsc_Unidades", null, null, null);

    var mat = document.getElementById("cmb_NomeSolicitante").value;


    for (var i = 0; i < ds_mat.values.length; i++) {
        if (mat == ds_mat.values[i]['colleaguePK.colleagueId']) {
            var und = ds_mat.values[i]['groupId'];

          

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
function addRateioz() {
    wdkAddChild("dadosrateio");
    var linha = getRowDot()
    slcProjeto(linha)
    slcAcao(linha)
    slcUnidade(linha)

}
function fnCustomDelete(elem) {
    fnWdkRemoveChild(elem);
}

function setSelectedZoomItem(selectedItem) {

    var indice = -1;
    var arraySelectedItem = selectedItem.inputId.split("___");

    if (arraySelectedItem != null && arraySelectedItem != undefined && arraySelectedItem.length > 1) {
        indice = arraySelectedItem[1];
    }

    if (selectedItem["inputId"] == "txt_projeto___" + indice) {

        document.getElementById("txt_codprojeto___" + indice).value = selectedItem["CODCCUSTO"];

        reloadZoomFilterValues("txt_acao___" + indice, "txt_projeto," + document.getElementById("txt_codprojeto___" + indice).value + ",txt_acao," + document.getElementById("txt_acao___" + indice).value);

    }
    if (selectedItem["inputId"] == "txt_acao___" + indice) {

        document.getElementById("txt_codacao___" + indice).value = selectedItem["CODACAO"];

        reloadZoomFilterValues("txt_recursos___" + indice, "txt_projeto," + document.getElementById("txt_codprojeto___" + indice).value + ",txt_acao," + document.getElementById("txt_codacao___" + indice).value);

        buscaSaldo(document.getElementById("txt_codprojeto___" + indice), document.getElementById("txt_codacao___" + indice))

        var saldo = document.getElementById("txt_saldo___" + indice).value

        // console.log(saldo)
        saldo = formataCasasDecimais(saldo)
        // console.log(saldo)
        saldo = moeda.formatar(saldo)
        document.getElementById("txt_saldo___" + indice).value = saldo

    }
}


const hoje = new Date();
const dia = hoje.getDate().toString().padStart(2,'0')
const mes = String(hoje.getMonth() + 1).padStart(2,'0')
const ano = hoje.getFullYear()
const dataAtual = `${dia} / ${mes} / ${ano}`