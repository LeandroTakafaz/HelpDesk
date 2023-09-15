function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();

    dataset.addColumn("Servico");
    dataset.addColumn("Categoria");
    dataset.addColumn("SLA");

    dataset.addRow(new Array("", "", ""));
    dataset.addRow(new Array("Alteração de Formulário", "My Web", "24"));
    dataset.addRow(new Array("Erro de Assinatura", "My Web", "24"));
    dataset.addRow(new Array("Cadastrar Notícias", "My Web", "24"));
    dataset.addRow(new Array("Criar Relatório", "My Web", "024:00"));
    dataset.addRow(new Array("Inclusão de Imagem para Assinatura", "My Web", "24"));
    dataset.addRow(new Array("Erro no Processo", "My Web", "24"));
    dataset.addRow(new Array("Permissão de Acesso", "My Web", "24"));
    dataset.addRow(new Array("Relatório Administrativo", "My Web", "72"));
    dataset.addRow(new Array("Incluir Funcionalidade", "My Web", "48"));
    dataset.addRow(new Array("Orientação para Uso", "My Web", "24"));
    dataset.addRow(new Array("Mapeamento", "Processos", "24"));
    dataset.addRow(new Array("Fábrica de Software", "RM", "72"));
    dataset.addRow(new Array("Ajuste Planilha NET", "RM", "72"));
    dataset.addRow(new Array("Cargo - Autorizante", "RM", "24"));
    dataset.addRow(new Array("Centro de Custo", "RM", "24"));
    dataset.addRow(new Array("Contrato - Medicação", "RM", "24"));
    dataset.addRow(new Array("Erro de Logon", "RM", "24"));                             
    dataset.addRow(new Array("Erro de Login/Senha", "RM", "24"));
    dataset.addRow(new Array("eSocial", "RM", "24"));
    dataset.addRow(new Array("Folha de Pagamento", "RM", "72"));
    dataset.addRow(new Array("Integração Loja", "RM", "24"));
    dataset.addRow(new Array("Lançamento", "RM", "24"));
    dataset.addRow(new Array("NFCe - NFSe", "RM", "72"));
    dataset.addRow(new Array("Parâmetros", "RM", "24"));
    dataset.addRow(new Array("Aguardando Chamado", "RM", "48"));
    dataset.addRow(new Array("Permissão em Módulo", "RM", "24"));
    dataset.addRow(new Array("Portaria de Substituição", "RM", "24"));
    dataset.addRow(new Array("Relatórios - Extração de Dados", "RM", "48"));
    dataset.addRow(new Array("Status 'Em Faturamento'", "RM", "24"));
    dataset.addRow(new Array("Batida de Ponto", "SGOlite", "72"));
    dataset.addRow(new Array("Envelope de Pagamento", "SGOlite", "72"));
    dataset.addRow(new Array("Execução Orçamentária", "SGOlite", "24"));
    dataset.addRow(new Array("Solicitação - Prestação de Diárias", "SGOlite", "24"));
    dataset.addRow(new Array("Alteração Assinatura de Email", "Suporte Geral", "24"));
    dataset.addRow(new Array("Bloqueio de Acesso", "Suporte Geral", "24"));
    dataset.addRow(new Array("Conversão de Arquivo", "Suporte Geral", "24"));
    dataset.addRow(new Array("Criação de Acesso", "Suporte Geral", "48"));
    dataset.addRow(new Array("Desbloqueio de Site", "Suporte Geral", "48"));
    dataset.addRow(new Array("Desbloqueio Senha", "Suporte Geral", "24"));
    dataset.addRow(new Array("Instalação de Computador", "Suporte Geral", "24"));
    dataset.addRow(new Array("Instalação de Software", "Suporte Geral", "24"));
    dataset.addRow(new Array("Liberação de Acesso", "Suporte Geral", "24"));
    dataset.addRow(new Array("Manutenção de Software - APP", "Suporte Geral", "24"));
    dataset.addRow(new Array("Recuperação de Arquivo", "Suporte Geral", "48"));
    dataset.addRow(new Array("Reserva Sala 06", "Suporte Geral", "48"));
    dataset.addRow(new Array("Revisão de Equipamento", "Suporte Geral", "48"));
    dataset.addRow(new Array("Solicitação de Equipamento", "Suporte Geral", "48"));
    dataset.addRow(new Array("Revisão de Impressora", "Suporte Geral", "24"));
    dataset.addRow(new Array("Solicitação de Notebook", "Suporte Geral", "48"));
    dataset.addRow(new Array("Suporte em Evento", "Suporte Geral", "24"));
    dataset.addRow(new Array("Transferência de Equipamento", "Suporte Geral", "24"));
    dataset.addRow(new Array("Troca da Senha do Wifi", "Suporte Geral", "24"));
    dataset.addRow(new Array("Visita Técnica", "Suporte Geral", "144"));


    return dataset;
}