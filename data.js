window.PORTFOLIO_DATA = {
  contacts: {
    whatsapp: "https://wa.me/5585994391399",
    email: "mailto:gleisonmonteiro@gmail.com",
    linkedin: "https://www.linkedin.com/in/gleison-monteiro-06115340/",
    github: "https://github.com/gleisonmonteiro/Portfolio"
  },
  heroKpis: [
    { label: "ERP", value: "10 anos", detail: "TOTVS Moda e operações integradas" },
    { label: "Rotina", value: "DRE, DPA e Produção", detail: "áreas tratadas separadamente" },
    { label: "Gestão", value: "360°", detail: "varejo, atacado, corte, loja e financeiro" }
  ],
  metrics: [
    { label: "Operação", value: "ERP + BI", detail: "processos comerciais, financeiros, fiscais e produtivos conectados" },
    { label: "Diretoria", value: "DRE e WhatsApp", detail: "relatórios executivos com rotina de validação antes do envio" },
    { label: "Indústria", value: "Produção", detail: "corte, estamparia, bordado, oficinas e DPA em painéis separados" },
    { label: "Preço e Pedido", value: "Lote", detail: "precificação em massa e módulo de pedidos para operação diária" }
  ],
  solutions: [
    { title: "DRE gerencial", tag: "Financeiro", text: "Receita, deduções, CMV, despesas, lucro e margem líquida em composição de DRE.", impact: "resultado claro" },
    { title: "Otimização do DPA", tag: "Distribuição", text: "Sugestão de envio por venda, giro, perfil da loja, grade e cobertura.", impact: "menos sobra" },
    { title: "Eficiência da produção", tag: "Indústria", text: "Acompanhamento de etapas, gargalos, tempo produtivo e entrega prevista.", impact: "ritmo visível" },
    { title: "Eficiência do corte", tag: "Corte", text: "Aproveitamento, perdas, fila de corte, prioridade e produtividade.", impact: "menos desperdício" },
    { title: "Estamparias e bordados", tag: "Terceiros", text: "Status por fornecedor, prazo, retorno, custo e pendências de produção.", impact: "prazo sob controle" },
    { title: "Calculadora de preços", tag: "Precificação", text: "Entrada de vários produtos, impostos, despesas, markup e preço final em lote.", impact: "preço rastreável" },
    { title: "Módulo de pedidos", tag: "Pedidos", text: "Entrada por grade, conferência, totalização por loja e exportação para rotina interna.", impact: "pedido organizado" },
    { title: "Integração com ERP", tag: "ERP", text: "Conexão entre sistema, planilha, banco de dados, loja e retaguarda.", impact: "dado único" }
  ],
  dpaStores: [
    { store: "Loja Premium", profile: "Alto ticket", sellout: "82%", coverage: "21 dias", suggestion: "+18% mix nobre" },
    { store: "Loja Centro", profile: "Volume", sellout: "91%", coverage: "12 dias", suggestion: "+24% reposição" },
    { store: "Loja Bairro", profile: "Básico", sellout: "67%", coverage: "34 dias", suggestion: "-14% excesso" },
    { store: "Atacado", profile: "Grade aberta", sellout: "74%", coverage: "18 dias", suggestion: "+9% giro rápido" }
  ],
  productionSectors: [
    { title: "Corte", value: "92%", label: "eficiência", bars: [70, 76, 74, 84, 88, 92], footer: "Aproveitamento, encaixe e produtividade por dia" },
    { title: "Produção", value: "87%", label: "plano", bars: [61, 66, 72, 69, 81, 87], footer: "Aderência ao plano e ritmo de entrega" },
    { title: "Estamparias", value: "14 ordens", label: "terceiros", rows: [["Estamparia A", "96 peças", "No prazo"], ["Estamparia B", "148 peças", "Risco"], ["Silk local", "82 peças", "OK"]] },
    { title: "Bordados", value: "9 lotes", label: "acabamento", rows: [["Bordado fino", "42 peças", "Retorno hoje"], ["Patch", "76 peças", "Em fila"], ["Aplicação", "31 peças", "Conferir"]] },
    { title: "Oficinas", value: "81%", label: "entrega", bars: [58, 64, 69, 73, 78, 81], footer: "Comparativo de peças enviadas, retornadas e pendentes" },
    { title: "DPA", value: "4 perfis", label: "distribuição", rows: [["Premium", "Alto ticket", "+18%"], ["Centro", "Volume", "+24%"], ["Bairro", "Básico", "-14%"], ["Atacado", "Grade", "+9%"]] }
  ],
  dashboards: [
    {
      type: "line",
      title: "Venda por hora",
      value: "pico 11h",
      label: "lojas",
      points: [72, 58, 34, 22, 46, 18, 27, 41],
      footer: "Curva simulada para comparar horário, equipe e campanha"
    },
    {
      type: "bars",
      title: "Eficiência por setor",
      value: "86%",
      label: "operação",
      bars: [92, 87, 79, 83, 81, 88],
      footer: "Corte, produção, estamparia, bordado, oficinas e expedição"
    },
    {
      type: "line",
      title: "Curva de venda por perfil",
      value: "giro ativo",
      label: "varejo",
      points: [68, 58, 46, 39, 28, 22],
      footer: "Venda simulada por comportamento de loja"
    },
    {
      type: "bars",
      title: "Margem por canal",
      value: "31,8%",
      label: "margem",
      bars: [42, 56, 51, 68, 63, 74],
      footer: "Varejo, atacado e canais de apoio"
    },
    {
      type: "line",
      title: "Fluxo de pedidos",
      value: "286",
      label: "pedidos",
      points: [70, 54, 47, 36, 42, 29, 24],
      footer: "Entrada, separação, conferência e faturamento"
    },
    {
      type: "donut",
      title: "Composição do estoque",
      value: "78% saudável",
      label: "estoque",
      footer: "Mix entre giro, cobertura e excesso"
    },
    {
      type: "ranking",
      title: "Ranking de lojas",
      value: "Top 5",
      label: "varejo",
      rows: [["Loja Centro", "121%"], ["Loja Premium", "114%"], ["Atacado", "107%"], ["Loja Bairro", "96%"], ["Outlet", "88%"]]
    },
    {
      type: "bars",
      title: "Venda x meta semanal",
      value: "104%",
      label: "meta",
      bars: [72, 84, 78, 91, 96, 104],
      footer: "Acompanhamento de meta por semana comercial"
    }
  ],
  fiscalItems: [
    { title: "Importação de XML", text: "Leitura estruturada de notas e armazenamento organizado.", stat: "XMLs lidos" },
    { title: "Cálculo de impostos", text: "Simulação de regras para apoiar custo, preço e conferência fiscal.", stat: "regras validadas" },
    { title: "Conferência de entrada", text: "Divergências entre pedido, nota, custo e cadastro em destaque.", stat: "alertas por lote" },
    { title: "Regras fiscais", text: "Parâmetros por operação para reduzir conferência manual.", stat: "trilha por UF" },
    { title: "Apoio a SPED", text: "Organização de informações para auditoria e fechamento.", stat: "trilha limpa" },
    { title: "Redução de erro", text: "Fluxo visual para prevenir perdas por lançamento incorreto.", stat: "menos retrabalho" }
  ],
  projects: [
    { title: "Simulador de DRE", text: "Projeta venda, margem, despesa e resultado com controles dinâmicos.", tags: ["DRE", "Diretoria", "Margem"] },
    { title: "Otimizador de DPA", text: "Distribui melhor por perfil de loja, venda, giro, grade e cobertura.", tags: ["DPA", "Lojas", "Estoque"] },
    { title: "Painel de produção", text: "Acompanha corte, oficina, estamparia, bordado, entrega e eficiência por etapa.", tags: ["Produção", "Corte", "Oficinas"] },
    { title: "Calculadora de preços", text: "Precifica vários produtos por vez com markup, impostos, despesas e desconto à vista.", tags: ["Preço", "Markup", "Lote"] },
    { title: "Módulo de pedidos", text: "Organiza entrada de pedido, grade, loja, conferência e exportação.", tags: ["Pedidos", "Grade", "ERP"] },
    { title: "Envio por WhatsApp", text: "Prepara card executivo, valida indicadores e dispara mensagem para contatos autorizados.", tags: ["WhatsApp", "Diretoria", "Automação"] }
  ],
  orderSteps: [
    { title: "Entrada de pedido", text: "Produto, referência, cor, tamanho e loja em uma matriz organizada.", status: "rascunho" },
    { title: "Grade e quantidades", text: "Conferência por coluna de tamanho, totais por loja e divergência por item.", status: "conferindo" },
    { title: "Aprovação", text: "Validação de preço, prazo, estoque e observações antes do envio.", status: "validado" },
    { title: "Exportação", text: "Geração de arquivo para alimentar rotina interna ou ERP.", status: "pronto" }
  ],
  priceItems: [
    { name: "Blusa viscose", factor: 1 },
    { name: "Calça alfaiataria", factor: 1.42 },
    { name: "Vestido midi", factor: 1.86 },
    { name: "Camisa linho", factor: 1.18 }
  ],
  dreBase: {
    revenue: 1280000,
    deductionsRate: 0.082,
    grossMargin: 0.42,
    expenses: 392000
  }
};
