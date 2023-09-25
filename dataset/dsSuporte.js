function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();

    dataset.addColumn("Servico");
    dataset.addColumn("Categoria");
    dataset.addColumn("SLA");
    
    dataset.addRow(new Array("", "", ""));
    dataset.addRow(new Array("Alteração de Formulário", "My Web", "1"));
    dataset.addRow(new Array("Ajuste Planilha NET", "RM", "3"));
    dataset.addRow(new Array("Alteração Assinatura de Email", "Suporte Geral", "1"));
    dataset.addRow(new Array("Aguardando Chamado", "RM", "2"));
    dataset.addRow(new Array("Bloqueio de Acesso", "Suporte Geral", "1"));
    dataset.addRow(new Array("Batida de Ponto", "SGOlite", "72"));
    dataset.addRow(new Array("Conversão de Arquivo", "Suporte Geral", "1"));
    dataset.addRow(new Array("Cadastrar Notícias", "My Web", "1"));
    dataset.addRow(new Array("Criar Relatório", "My Web", "1"));
    dataset.addRow(new Array("Criação de Acesso", "Suporte Geral", "2"));
    dataset.addRow(new Array("Cargo - Autorizante", "RM", "1"));
    dataset.addRow(new Array("Centro de Custo", "RM", "1"));
    dataset.addRow(new Array("Contrato - Medicação", "RM", "1"));
    dataset.addRow(new Array("Desbloqueio Senha", "Suporte Geral", "1"));
    dataset.addRow(new Array("Desbloqueio de Site", "Suporte Geral", "2"));
    dataset.addRow(new Array("Erro de Assinatura", "My Web", "1"));
    dataset.addRow(new Array("Erro de Logon", "RM", "1"));                             
    dataset.addRow(new Array("Erro de Login/Senha", "RM", "1"));
    dataset.addRow(new Array("Erro no Processo", "My Web", "1"));
    dataset.addRow(new Array("eSocial", "RM", "1"));
    dataset.addRow(new Array("Execução Orçamentária", "SGOlite", "1"));
    dataset.addRow(new Array("Envelope de Pagamento", "SGOlite", "3"));
    dataset.addRow(new Array("Fábrica de Software", "RM", "3"));
    dataset.addRow(new Array("Folha de Pagamento", "RM", "3"));
    dataset.addRow(new Array("Inclusão de Imagem para Assinatura", "My Web", "1"));
    dataset.addRow(new Array("Integração Loja", "RM", "1"));
    dataset.addRow(new Array("Incluir Funcionalidade", "My Web", "2"));
    dataset.addRow(new Array("Instalação de Computador", "Suporte Geral", "1"));
    dataset.addRow(new Array("Instalação de Software", "Suporte Geral", "1"));
    dataset.addRow(new Array("Lançamento", "RM", "1"));
    dataset.addRow(new Array("Liberação de Acesso", "Suporte Geral", "1"));
    dataset.addRow(new Array("Mapeamento", "Processos", "1"));
    dataset.addRow(new Array("Manutenção de Software - APP", "Suporte Geral", "1"));
    dataset.addRow(new Array("NFCe - NFSe", "RM", "3"));
    dataset.addRow(new Array("Orientação para Uso", "My Web", "1"));
    dataset.addRow(new Array("Permissão de Acesso", "My Web", "1"));
    dataset.addRow(new Array("Relatório Administrativo", "My Web", "3"));
    dataset.addRow(new Array("Parâmetros", "RM", "1"));
    dataset.addRow(new Array("Permissão em Módulo", "RM", "1"));
    dataset.addRow(new Array("Portaria de Substituição", "RM", "1"));
    dataset.addRow(new Array("Recuperação de Arquivo", "Suporte Geral", "2"));
    dataset.addRow(new Array("Relatórios - Extração de Dados", "RM", "2"));
    dataset.addRow(new Array("Reserva Sala 06", "Suporte Geral", "2"));
    dataset.addRow(new Array("Revisão de Equipamento", "Suporte Geral", "2"));
    dataset.addRow(new Array("Revisão de Impressora", "Suporte Geral", "1"));
    dataset.addRow(new Array("Status 'Em Faturamento'", "RM", "1"));
    dataset.addRow(new Array("Solicitação - Prestação de Diárias", "SGOlite", "1"));
    dataset.addRow(new Array("Solicitação de Equipamento", "Suporte Geral", "2"));
    dataset.addRow(new Array("Solicitação de Notebook", "Suporte Geral", "2"));
    dataset.addRow(new Array("Suporte em Evento", "Suporte Geral", "1"));
    dataset.addRow(new Array("Transferência de Equipamento", "Suporte Geral", "1"));
    dataset.addRow(new Array("Troca da Senha do Wifi", "Suporte Geral", "1"));
    dataset.addRow(new Array("Visita Técnica", "Suporte Geral", "6"));


    return dataset;
}