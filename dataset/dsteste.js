function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();

    dataset.addColumn("Servico");
    dataset.addColumn("Categoria");
    dataset.addColumn("SLA");

    dataset.addRow(new Array("Alteração de Formulário", "My Web", "024.00"));
    dataset.addRow(new Array("Erro de Assinatura", "My Web", "008.00"));
    dataset.addRow(new Array("Cadastrar Notícias", "My Web", "008.00"));
    dataset.addRow(new Array("Criar Relatório", "My Web", "008.00"));
    dataset.addRow(new Array("Inclusão de Imagem para Assinatura", "My Web", "008.00"));
    dataset.addRow(new Array("Erro no Processo", "My Web", "008.00"));
    dataset.addRow(new Array("Permissão de Acesso", "My Web", "008.00"));
    dataset.addRow(new Array("Relatório Administrativo", "My Web", "024.00"));
    dataset.addRow(new Array("Incluir Funcionalidade", "My Web", "040.00"));
    dataset.addRow(new Array("Orientação para Uso", "My Web", "008.00"));
    dataset.addRow(new Array("Mapeamento", "Processos", "000.00"));
    dataset.addRow(new Array("Fábrica de Software", "RM", "016.00"));
    dataset.addRow(new Array("Ajuste Planilha NET", "RM", "016.00"));
    dataset.addRow(new Array("Cargo - Autorizante", "RM", "008.00"));
    dataset.addRow(new Array("Centro de Custo", "RM", "008.00"));
    dataset.addRow(new Array("Contrato - Medicação", "RM", "008.00"));
    dataset.addRow(new Array("Erro de Logon", "RM", "008.00"));                             
    dataset.addRow(new Array("Erro de Login/Senha", "RM", "008.00"));
    dataset.addRow(new Array("eSocial", "RM", "008.00"));
    dataset.addRow(new Array("Folha de Pagamento", "RM", "016.00"));
    dataset.addRow(new Array("Integração Loja", "RM", "024.00"));
    dataset.addRow(new Array("Lançamento", "RM", "008.00"));
    dataset.addRow(new Array("NFCe - NFSe", "RM", "016.00"));
    dataset.addRow(new Array("Parâmetros", "RM", "024.00"));
    dataset.addRow(new Array("Aguardando Chamado", "RM", "048.00"));
    dataset.addRow(new Array("Permissão em Módulo", "RM", "008.00"));
    dataset.addRow(new Array("Portaria de Substituição", "RM", "008.00"));
    dataset.addRow(new Array("Relatórios - Extração de Dados", "RM", "048.00"));
    dataset.addRow(new Array("Status 'Em Faturamento'", "RM", "008.00"));
    dataset.addRow(new Array("Batida de Ponto", "SGOlite", "016.00"));
    dataset.addRow(new Array("Envelope de Pagamento", "SGOlite", "016.00"));
    dataset.addRow(new Array("Execução Orçamentária", "SGOlite", "008.00"));
    dataset.addRow(new Array("Solicitação - Prestação de Diárias", "SGOlite", "008.00"));
    dataset.addRow(new Array("Alteração Assinatura de Email", "Suporte Geral", "008.00"));
    dataset.addRow(new Array("Bloqueio de Acesso", "Suporte Geral", "008.00"));
    dataset.addRow(new Array("Conversão de Arquivo", "Suporte Geral", "008.00"));
    dataset.addRow(new Array("Criação de Acesso", "Suporte Geral", "016.00"));
    dataset.addRow(new Array("Desbloqueio de Site", "Suporte Geral", "016.00"));
    dataset.addRow(new Array("Desbloqueio Senha", "Suporte Geral", "008.00"));
    dataset.addRow(new Array("Instalação de Computador", "Suporte Geral", "008.00"));
    dataset.addRow(new Array("Instalação de Software", "Suporte Geral", "008.00"));
    dataset.addRow(new Array("Liberação de Acesso", "Suporte Geral", "008.00"));
    dataset.addRow(new Array("Manutenção de Software - APP", "Suporte Geral", "008.00"));
    dataset.addRow(new Array("Recuperação de Arquivo", "Suporte Geral", "016.00"));
    dataset.addRow(new Array("Reserva Sala 06", "Suporte Geral", "016.00"));
    dataset.addRow(new Array("Revisão de Equipamento", "Suporte Geral", "016.00"));
    dataset.addRow(new Array("Solicitação de Equipamento", "Suporte Geral", "016.00"));
    dataset.addRow(new Array("Revisão de Impressora", "Suporte Geral", "008.00"));
    dataset.addRow(new Array("Solicitação de Notebook", "Suporte Geral", "016.00"));
    dataset.addRow(new Array("Suporte em Evento", "Suporte Geral", "008.00"));
    dataset.addRow(new Array("Transferência de Equipamento", "Suporte Geral", "008.00"));
    dataset.addRow(new Array("Troca da Senha do Wifi", "Suporte Geral", "008.00"));
    dataset.addRow(new Array("Visita Técnica", "Suporte Geral", "048.00"));


    return dataset;
}