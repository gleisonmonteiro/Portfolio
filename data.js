window.PORTFOLIO_DATA = {
  contacts: {
    whatsapp: "https://wa.me/5585994391399",
    email: "mailto:gleisonmonteiro@gmail.com",
    linkedin: "https://www.linkedin.com/in/gleison-monteiro-06115340/",
    github: "https://github.com/gleisonmonteiro/Portfolio"
  },

  heroKpis: [
    { label: "Receita", value: "R$ 4,82 mi", detail: "+18,4% vs. mês anterior", tone: "good" },
    { label: "Margem", value: "32,8%", detail: "3 unidades abaixo da meta", tone: "warn" },
    { label: "Estoque", value: "R$ 1,14 mi", detail: "R$ 286 mil parados", tone: "danger" },
    { label: "Inadimplência", value: "7,2%", detail: "clientes com risco alto", tone: "danger" },
    { label: "DRE", value: "R$ 412 mil", detail: "resultado operacional", tone: "good" },
    { label: "Conciliação", value: "96,5%", detail: "extrato x ERP conciliado", tone: "good" },
    { label: "Alertas fiscais", value: "18", detail: "XML, UF e imposto", tone: "warn" },
    { label: "Vendedores", value: "Top 12", detail: "ranking por margem real", tone: "good" }
  ],

  heroModules: [
    { label: "Receita", value: "4,82 mi", status: "subindo" },
    { label: "Margem", value: "32,8%", status: "atenção" },
    { label: "DRE", value: "412 mil", status: "positivo" },
    { label: "Fiscal", value: "18 alertas", status: "corrigir" },
    { label: "Estoque", value: "286 mil", status: "parado" },
    { label: "Conciliação", value: "96,5%", status: "ok" }
  ],

  metrics: [
    { label: "Margem real", value: "empresa | vendedor | produto", detail: "Produtos que vendem muito, mas deixam pouca rentabilidade." },
    { label: "Capital parado", value: "giro | excesso | ruptura", detail: "Estoque sem giro, risco de compra errada e cobertura em dias." },
    { label: "Caixa rastreado", value: "pagar | receber | banco", detail: "Fluxo de caixa cruzado com ERP, extrato e contas críticas." },
    { label: "Fiscal preventivo", value: "XML | pedido | SPED", detail: "Divergências antes de virarem problema no fechamento." }
  ],

  jumpMenu: [
    { href: "#visoes", number: "01", title: "Visões da diretoria", detail: "Margem, capital parado, risco financeiro e fiscal.", status: "estratégico" },
    { href: "#solucoes", number: "02", title: "Áreas de negócio", detail: "Financeiro, fiscal, comercial, estoque e operação.", status: "BI executivo" },
    { href: "#demonstracoes", number: "03", title: "Demonstrações", detail: "Painéis simulados com KPIs, gráficos e rankings.", status: "vitrine" },
    { href: "#producao", number: "04", title: "Produção e oficinas", detail: "Mapa de setores, gargalos, terceiros e eficiência.", status: "operação" },
    { href: "#tabelas", number: "05", title: "Tabelas de exceção", detail: "Divergência fiscal, conciliação e performance.", status: "rastreio" },
    { href: "#automacoes", number: "06", title: "Fluxos automáticos", detail: "XML, validação, pedido, impostos, ERP e SPED.", status: "processo" },
    { href: "#financeiro", number: "07", title: "DRE gerencial", detail: "Simulação de venda, margem, despesa e resultado.", status: "decisão" }
  ],

  directorViews: [
    {
      title: "Rentabilidade real",
      subtitle: "Margem por empresa, vendedor, produto e marca.",
      filters: ["Empresa: Grupo", "Marca: Todas", "Operação: Varejo"],
      kpis: [["Margem média", "32,8%"], ["Produto crítico", "R$ 186 mil"], ["Unidade negativa", "2"]],
      chart: { type: "bars", values: [64, 48, 72, 41], labels: ["Emp.", "Vend.", "Prod.", "Marca"] },
      rows: [["Loja Centro", "36,4%", "OK"], ["Atacado", "21,8%", "Atenção"], ["Outlet", "14,2%", "Baixa"]]
    },
    {
      title: "Capital parado",
      subtitle: "Excesso, ruptura, giro e cobertura em dias.",
      filters: ["Marca: Premium", "Período: 90 dias", "Operação: Compras"],
      kpis: [["Sem giro", "R$ 286 mil"], ["Ruptura", "42 SKUs"], ["Cobertura", "68 dias"]],
      chart: { type: "area", values: [42, 48, 55, 62, 73, 69, 76] },
      rows: [["Vestido Linho", "112 dias", "Parado"], ["Calça Alf.", "18 dias", "OK"], ["Blusa Viscose", "6 dias", "Ruptura"]]
    },
    {
      title: "Risco financeiro",
      subtitle: "Inadimplência, recebíveis, caixa e contas críticas.",
      filters: ["Período: Maio", "Empresa: Todas", "Carteira: B2B"],
      kpis: [["Inadimplência", "7,2%"], ["Caixa 30d", "R$ 640 mil"], ["Recebíveis", "R$ 1,9 mi"]],
      chart: { type: "line", values: [66, 54, 58, 48, 43, 38, 51] },
      rows: [["Cliente A", "R$ 84 mil", "Risco"], ["Cliente B", "R$ 42 mil", "Acompanhar"], ["Cliente C", "R$ 18 mil", "OK"]]
    },
    {
      title: "Eficiência comercial",
      subtitle: "Fatura alto, lucra pouco, perde cliente ou bate meta.",
      filters: ["Vendedor: Todos", "Canal: Loja", "Período: Mês"],
      kpis: [["Meta", "104%"], ["Ticket médio", "R$ 184"], ["Margem baixa", "3 vend."]],
      chart: { type: "horizontal", values: [92, 84, 78, 65], labels: ["Ana", "Rui", "Marta", "João"] },
      rows: [["Rui", "R$ 412 mil", "Baixa margem"], ["Ana", "R$ 386 mil", "OK"], ["João", "R$ 270 mil", "Meta baixa"]]
    },
    {
      title: "Risco fiscal",
      subtitle: "XML, pedido, entrada, imposto e operação por UF.",
      filters: ["UF: Todas", "Operação: Entrada", "Status: Divergente"],
      kpis: [["XML importados", "1.248"], ["Divergências", "18"], ["UF crítica", "CE"]],
      chart: { type: "donut", values: [56, 28, 10, 6] },
      rows: [["NF 88341", "ICMS", "Corrigir"], ["NF 88378", "Pedido", "Diverge"], ["NF 88402", "OK", "Validada"]]
    },
    {
      title: "Compras inteligentes",
      subtitle: "Reposição, fornecedor, giro baixo e compra desalinhada.",
      filters: ["Marca: Todas", "Comprador: Grupo", "Operação: Reposição"],
      kpis: [["Sugestão", "R$ 420 mil"], ["Cortar compra", "R$ 96 mil"], ["Fornecedor", "Top 8"]],
      chart: { type: "bars", values: [58, 73, 46, 88, 66], labels: ["A", "B", "C", "D", "E"] },
      rows: [["Fornecedor D", "R$ 148 mil", "Comprar"], ["Produto X", "0,4 giro", "Bloquear"], ["Produto Y", "ruptura", "Repor"]]
    }
  ],

  miniDashboards: [
    {
      title: "Dashboard financeiro",
      tag: "Fluxo | DRE | Recebíveis",
      filters: ["Período", "Empresa", "Operação"],
      kpis: [["Caixa projetado", "R$ 640 mil"], ["A receber", "R$ 1,9 mi"], ["A pagar", "R$ 1,2 mi"]],
      chart: { type: "area", values: [48, 42, 55, 62, 58, 70, 76] },
      rows: [["Hoje", "R$ 84 mil", "OK"], ["7 dias", "-R$ 42 mil", "Atenção"], ["30 dias", "R$ 640 mil", "Projetado"]]
    },
    {
      title: "Dashboard fiscal",
      tag: "XML | Impostos | SPED",
      filters: ["UF", "Operação", "Status"],
      kpis: [["XML", "1.248"], ["Divergências", "18"], ["SPED", "92%"]],
      chart: { type: "bars", values: [82, 76, 64, 48, 91], labels: ["CE", "SP", "RJ", "PE", "BA"] },
      rows: [["Entrada", "12 alertas", "Revisar"], ["ICMS", "4 regras", "Atenção"], ["SPED", "92%", "OK"]]
    },
    {
      title: "Dashboard comercial",
      tag: "Vendas | Meta | Margem",
      filters: ["Vendedor", "Marca", "Canal"],
      kpis: [["Venda", "R$ 4,82 mi"], ["Meta", "104%"], ["Ticket", "R$ 184"]],
      chart: { type: "line", values: [62, 58, 66, 72, 69, 78, 84] },
      rows: [["Ana", "118%", "Alta margem"], ["Rui", "109%", "Baixa margem"], ["Marta", "98%", "Recuperar"]]
    },
    {
      title: "Estoque e compras",
      tag: "Giro | Ruptura | Reposição",
      filters: ["Marca", "Coleção", "Comprador"],
      kpis: [["Excesso", "R$ 286 mil"], ["Ruptura", "42 SKUs"], ["Giro", "3,8x"]],
      chart: { type: "horizontal", values: [88, 71, 54, 35], labels: ["Giro", "Cob.", "Exc.", "Rup."] },
      rows: [["SKU 1048", "112 dias", "Parado"], ["SKU 2091", "6 dias", "Ruptura"], ["SKU 7780", "28 dias", "OK"]]
    },
    {
      title: "Conciliação bancária",
      tag: "Banco | ERP | Diferença",
      filters: ["Banco", "Conta", "Período"],
      kpis: [["Conciliado", "96,5%"], ["Diferença", "R$ 12,4 mil"], ["Pendências", "8"]],
      chart: { type: "bars", values: [96, 88, 91, 77, 84], labels: ["B1", "B2", "B3", "B4", "B5"] },
      rows: [["TED cliente", "R$ 2,1 mil", "Diverge"], ["PIX loja", "R$ 0", "OK"], ["Tarifa", "R$ 148", "Lançar"]]
    },
    {
      title: "Produção e operação",
      tag: "Fila | Prazo | Gargalo",
      filters: ["Setor", "Produto", "Prioridade"],
      kpis: [["Eficiência", "87%"], ["Ordens", "148"], ["Atraso", "12"]],
      chart: { type: "area", values: [52, 58, 61, 57, 69, 73, 81] },
      rows: [["Corte", "92%", "OK"], ["Oficina", "78%", "Risco"], ["DPA", "84%", "Ajustar"]]
    }
  ],

  demoPanels: [
    {
      title: "Painel Comercial",
      accent: "Meta x realizado",
      filters: ["Período: Maio/2026", "Empresa: Grupo", "Vendedor: Todos", "Marca: Todas"],
      kpis: [["Vendas", "R$ 4,82 mi"], ["Ticket médio", "R$ 184"], ["Meta", "104%"], ["ABC A", "28% SKUs"]],
      charts: [
        { type: "bars", title: "Vendas por empresa", values: [84, 76, 62, 48], labels: ["Centro", "Premium", "Atacado", "Outlet"] },
        { type: "horizontal", title: "Ranking de vendedores", values: [94, 86, 78, 63], labels: ["Ana", "Rui", "Marta", "João"] }
      ],
      table: [["Produto A", "R$ 420 mil", "Curva A"], ["Produto B", "R$ 260 mil", "Margem baixa"], ["Produto C", "R$ 188 mil", "Oportunidade"]]
    },
    {
      title: "Painel Financeiro",
      accent: "Fluxo, DRE e conciliação",
      filters: ["Período: Trimestre", "Empresa: Todas", "Banco: Consolidado"],
      kpis: [["Fluxo 30d", "R$ 640 mil"], ["DRE", "R$ 412 mil"], ["Inadimplência", "7,2%"], ["Conciliação", "96,5%"]],
      charts: [
        { type: "area", title: "Fluxo de caixa", values: [60, 52, 44, 56, 68, 72, 64] },
        { type: "donut", title: "Composição de despesas", values: [42, 26, 18, 14] }
      ],
      table: [["Cliente A", "R$ 84 mil", "Vencido"], ["Fornecedor B", "R$ 120 mil", "Crítico"], ["Banco Itaú", "R$ 2,1 mil", "Diverge"]]
    },
    {
      title: "Painel Fiscal",
      accent: "XML, UF e SPED",
      filters: ["UF: Todas", "Operação: Entrada", "Status: Divergente"],
      kpis: [["XML importados", "1.248"], ["Divergências", "18"], ["SPED", "92%"], ["UF crítica", "CE"]],
      charts: [
        { type: "bars", title: "Regras fiscais por UF", values: [76, 62, 88, 44, 70], labels: ["CE", "SP", "RJ", "PE", "BA"] },
        { type: "line", title: "Alertas de inconsistência", values: [42, 38, 48, 64, 58, 46, 32] }
      ],
      table: [["NF 88341", "ICMS", "Corrigir"], ["NF 88378", "Pedido", "Diverge"], ["NF 88402", "SPED", "Validada"]]
    },
    {
      title: "Painel Estoque e Compras",
      accent: "Giro, ruptura e reposição",
      filters: ["Marca: Todas", "Coleção: Atual", "Operação: Reposição"],
      kpis: [["Cobertura", "48 dias"], ["Ruptura", "42 SKUs"], ["Excesso", "R$ 286 mil"], ["Reposição", "R$ 420 mil"]],
      charts: [
        { type: "horizontal", title: "Cobertura por grupo", values: [88, 67, 52, 39], labels: ["Jeans", "Malha", "Linho", "Festa"] },
        { type: "bars", title: "Última compra x última venda", values: [44, 82, 39, 72, 58], labels: ["A", "B", "C", "D", "E"] }
      ],
      table: [["SKU 1048", "112 dias", "Excesso"], ["SKU 2091", "6 dias", "Ruptura"], ["SKU 7780", "Reposição", "Comprar"]]
    }
  ],

  production: {
    sectors: [
      { name: "Corte", efficiency: 92, queue: "18 ordens", output: "1.240 peças", status: "green" },
      { name: "Costura", efficiency: 81, queue: "42 ordens", output: "920 peças", status: "yellow" },
      { name: "Estamparia", efficiency: 74, queue: "16 lotes", output: "610 peças", status: "blue" },
      { name: "Bordado", efficiency: 68, queue: "9 lotes", output: "284 peças", status: "red" },
      { name: "Acabamento", efficiency: 88, queue: "24 ordens", output: "1.080 peças", status: "green" },
      { name: "Expedição", efficiency: 95, queue: "7 cargas", output: "2.430 peças", status: "green" },
      { name: "DPA", efficiency: 84, queue: "4 perfis", output: "36 lojas", status: "yellow" },
      { name: "Almoxarifado", efficiency: 79, queue: "12 faltas", output: "96% separado", status: "blue" }
    ],
    workshops: [
      { name: "Oficina Alfa", type: "Costura fina", efficiency: 94, pieces: "480 peças", status: "green" },
      { name: "Bordado Luz", type: "Bordado", efficiency: 71, pieces: "168 peças", status: "yellow" },
      { name: "Silk Norte", type: "Estamparia", efficiency: 63, pieces: "220 peças", status: "red" },
      { name: "Oficina Beta", type: "Jeans", efficiency: 86, pieces: "390 peças", status: "blue" },
      { name: "Acaba Pro", type: "Acabamento", efficiency: 91, pieces: "760 peças", status: "green" }
    ]
  },

  visualTables: [
    {
      title: "Divergências fiscais",
      columns: ["Nota", "Fornecedor", "UF", "Valor XML", "Valor Pedido", "Diferença", "Status"],
      rows: [
        ["88341", "Têxtil Alfa", "CE", "R$ 42.880", "R$ 41.960", "R$ 920", "Divergente"],
        ["88378", "Moda Sul", "SP", "R$ 18.420", "R$ 18.420", "R$ 0", "Validada"],
        ["88402", "Malha Norte", "PE", "R$ 31.760", "R$ 34.100", "-R$ 2.340", "Revisar"],
        ["88466", "Premium Fit", "RJ", "R$ 12.900", "R$ 12.440", "R$ 460", "Imposto"]
      ]
    },
    {
      title: "Conciliação bancária",
      columns: ["Data", "Histórico", "Valor banco", "Valor ERP", "Diferença", "Situação"],
      rows: [
        ["16/05", "PIX Loja Centro", "R$ 12.840", "R$ 12.840", "R$ 0", "Conciliado"],
        ["16/05", "TED Cliente B2B", "R$ 24.100", "R$ 22.000", "R$ 2.100", "Diverge"],
        ["15/05", "Tarifa bancária", "R$ 148", "R$ 0", "R$ 148", "Lançar"],
        ["15/05", "Cartão varejo", "R$ 84.920", "R$ 84.920", "R$ 0", "Conciliado"]
      ]
    },
    {
      title: "Performance comercial",
      columns: ["Vendedor", "Vendas", "Margem", "Ticket médio", "Meta", "Status"],
      rows: [
        ["Ana", "R$ 386 mil", "36,8%", "R$ 198", "118%", "Alta margem"],
        ["Rui", "R$ 412 mil", "21,4%", "R$ 176", "109%", "Vende e lucra pouco"],
        ["Marta", "R$ 304 mil", "33,1%", "R$ 184", "98%", "Recuperar meta"],
        ["João", "R$ 270 mil", "29,7%", "R$ 158", "84%", "Atenção"]
      ]
    }
  ],

  automationSteps: [
    { title: "Entrada de XML", status: "1.248 XMLs lidos", detail: "Notas organizadas por fornecedor, UF, CFOP e operação.", tone: "blue" },
    { title: "Validação fiscal", status: "18 alertas", detail: "ICMS, CST, NCM, CFOP e regra por UF em conferência.", tone: "yellow" },
    { title: "Conferência com pedido", status: "R$ 3,7 mil divergentes", detail: "Valor XML comparado com pedido, custo e entrada.", tone: "red" },
    { title: "Cálculo de impostos", status: "92% validado", detail: "Base, alíquota e impacto no custo de compra.", tone: "green" },
    { title: "Lançamento ERP", status: "fila controlada", detail: "Pendências separadas antes de alimentar rotina interna.", tone: "blue" },
    { title: "Auditoria SPED", status: "trilha limpa", detail: "Rastreio para fechamento fiscal e revisão preventiva.", tone: "green" }
  ],

  beforeAfter: {
    before: {
      title: "Antes",
      items: ["Planilhas soltas", "Conferência manual", "Retrabalho", "Falta de rastreio", "Erro fiscal", "Decisão no escuro"]
    },
    after: {
      title: "Depois",
      items: ["Painel único", "Indicadores atualizados", "Alertas automáticos", "Rastreio por operação", "Gestão por exceção", "Decisão baseada em dados"]
    }
  },

  dreBase: {
    revenue: 1280000,
    deductionsRate: 0.082,
    grossMargin: 0.42,
    expenses: 392000
  }
};
