const data = window.PORTFOLIO_DATA || {};

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function createElement(tag, className, content) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content !== undefined) element.textContent = content;
  return element;
}

function formatCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  });
}

function formatPercent(value) {
  return `${(value * 100).toFixed(1).replace(".", ",")}%`;
}

function setContactLinks() {
  const contacts = data.contacts || {};

  qsa("[data-contact-link]").forEach((link) => {
    const key = link.dataset.contactLink;
    if (contacts[key]) link.href = contacts[key];
  });

  const contactActions = qs("#contactActions");
  if (!contactActions) return;

  [
    ["WhatsApp", "whatsapp"],
    ["E-mail", "email"],
    ["LinkedIn", "linkedin"],
    ["GitHub", "github"]
  ].forEach(([label, key]) => {
    if (!contacts[key]) return;
    const link = createElement("a", "contact-button", label);
    link.href = contacts[key];
    if (!contacts[key].startsWith("mailto:")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    contactActions.appendChild(link);
  });
}

function renderHeroKpis() {
  const target = qs("#heroKpis");
  if (!target) return;

  target.innerHTML = "";
  (data.heroKpis || []).forEach((item) => {
    const card = createElement("article", `hero-kpi tone-${item.tone || "good"}`);
    card.innerHTML = `<span>${item.label}</span><strong>${item.value}</strong><small>${item.detail}</small>`;
    target.appendChild(card);
  });
}

function renderHeroModules() {
  const target = qs("#heroModules");
  const alerts = qs("#heroAlerts");
  if (target) {
    target.innerHTML = (data.heroModules || []).map((item) => `
      <article class="module-chip">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
        <small>${item.status}</small>
      </article>
    `).join("");
  }

  if (alerts) {
    alerts.innerHTML = [
      ["Margem baixa", "Atacado abaixo de 24%"],
      ["Estoque parado", "112 dias sem giro"],
      ["Fiscal", "ICMS divergente por UF"]
    ].map(([title, detail]) => `<span><strong>${title}</strong>${detail}</span>`).join("");
  }

  const chart = qs("#heroLineChart");
  if (chart) chart.innerHTML = buildSvgChart({ type: "line", values: [42, 48, 46, 61, 58, 74, 81, 88] });
}

function renderMetrics() {
  const target = qs("#metricStrip");
  if (!target) return;

  target.innerHTML = "";
  (data.metrics || []).forEach((item) => {
    const card = createElement("article", "metric-card reveal");
    card.innerHTML = `<span>${item.label}</span><strong>${item.value}</strong><p>${item.detail}</p>`;
    target.appendChild(card);
  });
}

function renderJumpMenu() {
  const target = qs("#jumpMenu");
  if (!target) return;

  target.innerHTML = (data.jumpMenu || []).map((item) => `
    <a class="jump-link" href="${item.href}" data-jump-link>
      <span>${item.number}</span>
      <strong>${item.title}</strong>
      <small>${item.detail}</small>
      <em>${item.status}</em>
    </a>
  `).join("");
}

function chartPoints(values, width = 320, height = 132) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, 1);
  return values.map((value, index) => {
    const x = values.length === 1 ? width / 2 : (index / (values.length - 1)) * width;
    const y = height - ((value - min) / range) * (height - 24) - 12;
    return [Number(x.toFixed(2)), Number(y.toFixed(2))];
  });
}

function buildSvgChart(chart = {}) {
  const values = chart.values || [40, 55, 48, 66, 72];
  const labels = chart.labels || [];

  if (chart.type === "bars") {
    const max = Math.max(...values, 1);
    return `
      <div class="bars-chart" style="--items:${values.length}">
        ${values.map((value, index) => `
          <div class="bar-item">
            <span style="--h:${Math.max((value / max) * 100, 8)}%"></span>
            <small>${labels[index] || ""}</small>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (chart.type === "horizontal") {
    const max = Math.max(...values, 1);
    return `
      <div class="horizontal-chart">
        ${values.map((value, index) => `
          <div class="horizontal-row">
            <small>${labels[index] || `Item ${index + 1}`}</small>
            <span><i style="width:${Math.max((value / max) * 100, 8)}%"></i></span>
            <strong>${value}%</strong>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (chart.type === "donut") {
    const segments = values.length ? values : [40, 30, 20, 10];
    let start = 0;
    const total = segments.reduce((sum, value) => sum + value, 0) || 1;
    const colors = ["var(--lime)", "var(--cyan)", "var(--gold)", "var(--danger)"];
    const gradient = segments.map((value, index) => {
      const end = start + (value / total) * 100;
      const part = `${colors[index % colors.length]} ${start.toFixed(1)}% ${end.toFixed(1)}%`;
      start = end;
      return part;
    }).join(", ");
    return `
      <div class="donut-wrap">
        <div class="donut-chart" style="--donut:${gradient}"><span>${segments[0]}%</span></div>
        <div class="donut-legend">
          ${segments.slice(0, 4).map((value, index) => `<span><i style="background:${colors[index % colors.length]}"></i>${value}%</span>`).join("")}
        </div>
      </div>
    `;
  }

  const points = chartPoints(values);
  const line = points.map(([x, y]) => `${x},${y}`).join(" ");
  const area = `0,132 ${line} 320,132`;
  const isArea = chart.type === "area";

  return `
    <svg class="line-svg" viewBox="0 0 320 132" role="img" aria-label="Gráfico simulado">
      <defs>
        <linearGradient id="lineFill${Math.round(Math.random() * 100000)}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="rgba(185,255,69,0.34)" />
          <stop offset="100%" stop-color="rgba(100,216,255,0.02)" />
        </linearGradient>
      </defs>
      <g class="grid-lines">
        <path d="M0 24 H320 M0 58 H320 M0 92 H320" />
      </g>
      ${isArea ? `<polygon points="${area}" class="area-fill"></polygon>` : ""}
      <polyline points="${line}" class="line-path"></polyline>
      ${points.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.8"></circle>`).join("")}
    </svg>
  `;
}

function statusClass(value = "") {
  const text = value.toLowerCase();
  if (text.includes("ok") || text.includes("valid") || text.includes("alta") || text.includes("comprar") || text.includes("conciliado")) return "status-good";
  if (text.includes("risco") || text.includes("crítico") || text.includes("diverge") || text.includes("baixa") || text.includes("parado") || text.includes("bloquear")) return "status-danger";
  return "status-warn";
}

function renderKpis(kpis = []) {
  return `
    <div class="panel-kpis">
      ${kpis.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
    </div>
  `;
}

function renderFilters(filters = []) {
  return `<div class="filter-bar">${filters.map((filter) => `<span>${filter}</span>`).join("")}</div>`;
}

function renderMiniRows(rows = []) {
  return `
    <div class="mini-table">
      ${rows.map((row) => `
        <div class="mini-row">
          <strong>${row[0]}</strong>
          <span>${row[1]}</span>
          <em class="${statusClass(row[2])}">${row[2]}</em>
        </div>
      `).join("")}
    </div>
  `;
}

function renderDirectorViews() {
  const target = qs("#directorViews");
  if (!target) return;

  target.innerHTML = (data.directorViews || []).map((item) => `
    <article class="bi-card reveal">
      <div class="card-top">
        <span>${item.title}</span>
        <strong>${item.subtitle}</strong>
      </div>
      ${renderFilters(item.filters)}
      ${renderKpis(item.kpis)}
      <div class="chart-box">${buildSvgChart(item.chart)}</div>
      ${renderMiniRows(item.rows)}
    </article>
  `).join("");
}

function renderSolutions() {
  const target = qs("#solutionGrid");
  if (!target) return;

  target.innerHTML = (data.miniDashboards || []).map((item) => `
    <article class="bi-card solution-dashboard reveal">
      <div class="dashboard-top">
        <span>${item.tag}</span>
        <strong>${item.title}</strong>
      </div>
      ${renderFilters(item.filters)}
      ${renderKpis(item.kpis)}
      <div class="chart-box">${buildSvgChart(item.chart)}</div>
      ${renderMiniRows(item.rows)}
    </article>
  `).join("");
}

function renderDemoPanels() {
  const target = qs("#demoPanels");
  if (!target) return;

  target.innerHTML = (data.demoPanels || []).map((item) => `
    <article class="demo-panel reveal">
      <div class="dashboard-top">
        <span>${item.accent}</span>
        <strong>${item.title}</strong>
      </div>
      ${renderFilters(item.filters)}
      ${renderKpis(item.kpis)}
      <div class="dual-chart">
        ${(item.charts || []).map((chart) => `
          <div class="chart-box">
            <div class="widget-head"><span>${chart.title}</span></div>
            ${buildSvgChart(chart)}
          </div>
        `).join("")}
      </div>
      ${renderMiniRows(item.table)}
    </article>
  `).join("");
}

function renderProductionVision() {
  const sectorsTarget = qs("#sectorMap");
  const workshopsTarget = qs("#workshopMap");
  const production = data.production || {};

  if (sectorsTarget) {
    sectorsTarget.innerHTML = (production.sectors || []).map((item) => `
      <article class="sector-node status-${item.status}">
        <div>
          <span class="status-dot status-${item.status}"></span>
          <strong>${item.name}</strong>
        </div>
        <div class="efficiency-ring" style="--value:${item.efficiency}"><span>${item.efficiency}%</span></div>
        <small>${item.queue}</small>
        <em>${item.output}</em>
      </article>
    `).join("");
  }

  if (workshopsTarget) {
    workshopsTarget.innerHTML = (production.workshops || []).map((item, index) => `
      <article class="workshop-node status-${item.status}" style="--delay:${index * 110}ms">
        <span class="status-dot status-${item.status}"></span>
        <div>
          <strong>${item.name}</strong>
          <small>${item.type}</small>
        </div>
        <div class="workshop-bar"><i style="width:${item.efficiency}%"></i></div>
        <em>${item.efficiency}% | ${item.pieces}</em>
      </article>
    `).join("");
  }
}

function renderVisualTables() {
  const target = qs("#visualTables");
  if (!target) return;

  target.innerHTML = (data.visualTables || []).map((table) => `
    <article class="visual-table-card reveal">
      <div class="dashboard-top">
        <span>controle por exceção</span>
        <strong>${table.title}</strong>
      </div>
      <div class="visual-table-wrap">
        <table class="visual-table">
          <thead><tr>${table.columns.map((column) => `<th>${column}</th>`).join("")}</tr></thead>
          <tbody>
            ${table.rows.map((row) => `
              <tr>
                ${row.map((cell, index) => {
                  const label = table.columns[index] || "";
                  return index === row.length - 1
                    ? `<td data-label="${label}"><span class="status-pill ${statusClass(cell)}"><span class="status-dot ${statusClass(cell).replace("status-", "status-")}"></span>${cell}</span></td>`
                    : `<td data-label="${label}">${cell}</td>`;
                }).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </article>
  `).join("");
}

function renderAutomation() {
  const target = qs("#automationFlow");
  if (!target) return;

  target.innerHTML = (data.automationSteps || []).map((step, index) => `
    <article class="flow-step status-${step.tone || "green"}" style="--delay:${index * 90}ms">
      <span class="step-orb">${String(index + 1).padStart(2, "0")}</span>
      <span class="status-dot status-${step.tone || "green"}"></span>
      <strong>${step.title}</strong>
      <small>${step.status}</small>
      <p>${step.detail}</p>
    </article>
  `).join("");

  let active = 0;
  const steps = qsa(".flow-step", target);
  if (!steps.length) return;

  function update() {
    steps.forEach((step, index) => step.classList.toggle("is-active", index === active));
    active = (active + 1) % steps.length;
  }

  update();
  window.setInterval(update, 1500);
}

function renderBeforeAfter() {
  const target = qs("#beforeAfter");
  const source = data.beforeAfter || {};
  if (!target || !source.before || !source.after) return;

  target.innerHTML = [source.before, source.after].map((group, index) => `
    <article class="comparison-card ${index === 1 ? "after" : "before"} reveal">
      <div class="dashboard-top">
        <span>${index === 1 ? "gestão por dados" : "operação dispersa"}</span>
        <strong>${group.title}</strong>
      </div>
      <div class="comparison-list">
        ${group.items.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function setupDreSimulator() {
  const base = data.dreBase || { revenue: 0, deductionsRate: 0, grossMargin: 0, expenses: 0 };
  const salesLift = qs("#salesLift");
  const marginLift = qs("#marginLift");
  const expenseCut = qs("#expenseCut");
  if (!salesLift || !marginLift || !expenseCut) return;

  const dreTableBody = qs("#dreTableBody");
  const dreRevenue = qs("#dreRevenue");
  const dreGross = qs("#dreGross");
  const dreProfit = qs("#dreProfit");
  const dreMargin = qs("#dreMargin");
  const salesLiftValue = qs("#salesLiftValue");
  const marginLiftValue = qs("#marginLiftValue");
  const expenseCutValue = qs("#expenseCutValue");

  function buildDreRows(salesPercent, marginPoints, expensePercent) {
    const baseGrossRevenue = base.revenue;
    const baseDeductions = baseGrossRevenue * base.deductionsRate;
    const baseNetRevenue = baseGrossRevenue - baseDeductions;
    const baseGrossProfit = baseNetRevenue * base.grossMargin;
    const baseCmv = baseNetRevenue - baseGrossProfit;
    const baseProfit = baseGrossProfit - base.expenses;

    const grossRevenue = base.revenue * (1 + salesPercent / 100);
    const deductions = grossRevenue * base.deductionsRate;
    const netRevenue = grossRevenue - deductions;
    const grossMargin = Math.max(0, base.grossMargin + marginPoints / 100);
    const grossProfit = netRevenue * grossMargin;
    const cmv = netRevenue - grossProfit;
    const expenses = base.expenses * (1 - expensePercent / 100);
    const profit = grossProfit - expenses;

    return {
      grossRevenue,
      grossProfit,
      profit,
      netMargin: grossRevenue > 0 ? profit / grossRevenue : 0,
      rows: [
        ["Receita bruta", baseGrossRevenue, grossRevenue, 1],
        ["(-) Deduções", -baseDeductions, -deductions, -deductions / grossRevenue],
        ["Receita líquida", baseNetRevenue, netRevenue, netRevenue / grossRevenue],
        ["(-) CMV", -baseCmv, -cmv, -cmv / grossRevenue],
        ["Lucro bruto", baseGrossProfit, grossProfit, grossProfit / grossRevenue],
        ["(-) Despesas operacionais", -base.expenses, -expenses, -expenses / grossRevenue],
        ["Resultado final", baseProfit, profit, profit / grossRevenue]
      ]
    };
  }

  function updateDre() {
    const salesPercent = Number(salesLift.value);
    const marginPoints = Number(marginLift.value);
    const expensePercent = Number(expenseCut.value);
    const dre = buildDreRows(salesPercent, marginPoints, expensePercent);

    if (dreRevenue) dreRevenue.textContent = formatCurrency(dre.grossRevenue);
    if (dreGross) dreGross.textContent = formatCurrency(dre.grossProfit);
    if (dreProfit) dreProfit.textContent = formatCurrency(dre.profit);
    if (dreMargin) dreMargin.textContent = formatPercent(dre.netMargin);
    if (salesLiftValue) salesLiftValue.textContent = `${salesPercent}%`;
    if (marginLiftValue) marginLiftValue.textContent = `${marginPoints} p.p.`;
    if (expenseCutValue) expenseCutValue.textContent = `${expensePercent}%`;
    if (dreTableBody) {
      dreTableBody.innerHTML = dre.rows.map(([label, baseValue, simulatedValue, share]) => `
        <tr class="${simulatedValue < 0 ? "is-negative" : "is-positive"}">
          <td>${label}</td>
          <td>${formatCurrency(baseValue)}</td>
          <td>${formatCurrency(simulatedValue)}</td>
          <td>${formatPercent(share)}</td>
        </tr>
      `).join("");
    }
  }

  [salesLift, marginLift, expenseCut].forEach((input) => input.addEventListener("input", updateDre));
  updateDre();
}

function setupNavigation() {
  const links = qsa(".nav-link");
  const sections = links.map((link) => qs(link.getAttribute("href"))).filter(Boolean);

  qsa(".nav-link, [data-jump-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      const section = href ? qs(href) : null;
      document.body.classList.remove("is-menu-open");
      if (!section) return;
      event.preventDefault();
      const offset = window.matchMedia("(max-width: 980px)").matches ? 86 : 14;
      window.scrollTo({ top: Math.max(section.offsetTop - offset, 0), behavior: "auto" });
      window.history.pushState(null, "", href);
    });
  });

  window.addEventListener("scroll", () => {
    const checkpoint = window.scrollY + window.innerHeight * 0.32;
    let currentId = sections[0]?.id;
    sections.forEach((section) => {
      if (section.offsetTop <= checkpoint) currentId = section.id;
    });
    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
    });
  }, { passive: true });
}

function setupMenu() {
  const button = qs("[data-menu-toggle]");
  if (!button) return;
  button.addEventListener("click", () => document.body.classList.toggle("is-menu-open"));
}

function setupReveal() {
  const revealItems = qsa(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
}

function init() {
  setContactLinks();
  renderHeroKpis();
  renderHeroModules();
  renderJumpMenu();
  renderMetrics();
  renderDirectorViews();
  renderSolutions();
  renderDemoPanels();
  renderProductionVision();
  renderVisualTables();
  renderAutomation();
  renderBeforeAfter();
  setupDreSimulator();
  setupNavigation();
  setupMenu();
  setupReveal();
}

document.addEventListener("DOMContentLoaded", init);
