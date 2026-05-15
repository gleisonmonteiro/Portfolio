const data = window.PORTFOLIO_DATA || {};

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function createElement(tag, className, content) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content !== undefined) element.textContent = content;
  return element;
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
    ["WhatsApp 85 99439-1399", "whatsapp"],
    ["gleisonmonteiro@gmail.com", "email"],
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
    const card = createElement("article", "hero-kpi");
    card.innerHTML = `<span>${item.label}</span><strong>${item.value}</strong><small>${item.detail}</small>`;
    target.appendChild(card);
  });
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

function renderSolutions() {
  const target = qs("#solutionGrid");
  if (!target) return;

  target.innerHTML = "";
  (data.solutions || []).forEach((item) => {
    const card = createElement("article", "solution-card reveal");
    card.innerHTML = `
      <span class="solution-tag">${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <strong class="solution-impact">${item.impact}</strong>
    `;
    target.appendChild(card);
  });
}

function renderDashboardChart(item) {
  if (item.type === "bars") {
    const values = item.bars || [];
    return `
      <div class="bar-chart" style="--count:${values.length}">
        ${values.map((value) => `<span style="--h:${value}%"></span>`).join("")}
      </div>
      <p class="chart-footer">${item.footer || ""}</p>
    `;
  }

  if (item.type === "line") {
    const points = item.points || [];
    const total = Math.max(points.length - 1, 1);
    return `
      <div class="line-chart">
        ${points.map((value, index) => `<span class="line-point" style="--x:${(index / total) * 88 + 4}%;--y:${value}%"></span>`).join("")}
      </div>
      <p class="chart-footer">${item.footer || ""}</p>
    `;
  }

  if (item.type === "matrix") {
    return `
      <div class="matrix-table">
        ${(item.rows || []).map((row) => `
          <div class="matrix-row">
            <strong>${row[0]}</strong><span>${row[1]}</span><span>${row[2]}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (item.type === "ranking") {
    return `
      <div class="ranking-list">
        ${(item.rows || []).map((row, index) => `
          <div class="ranking-row">
            <strong>${index + 1}</strong><span>${row[0]}</span><span>${row[1]}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (item.type === "donut") {
    return `<div class="donut-chart" aria-hidden="true"></div><p class="chart-footer">${item.footer || ""}</p>`;
  }

  return "";
}

function renderProduction() {
  const target = qs("#productionGrid");
  if (!target) return;

  target.innerHTML = "";
  (data.productionSectors || []).forEach((item) => {
    const card = createElement("article", "production-card reveal");
    card.innerHTML = `
      <div class="card-top">
        <span class="chart-label">${item.label}</span>
        <strong class="dashboard-value">${item.value}</strong>
      </div>
      <h3>${item.title}</h3>
      ${item.rows ? renderDashboardChart({ type: "matrix", rows: item.rows }) : renderDashboardChart({ type: "bars", bars: item.bars, footer: item.footer })}
    `;
    target.appendChild(card);
  });
}

function renderDashboards() {
  const target = qs("#dashboardGrid");
  if (!target) return;

  target.innerHTML = "";
  (data.dashboards || []).forEach((item) => {
    const card = createElement("article", "dashboard-card reveal");
    card.innerHTML = `
      <div class="card-top">
        <span class="chart-label">${item.label}</span>
        <strong class="dashboard-value">${item.value}</strong>
      </div>
      <h3>${item.title}</h3>
      ${renderDashboardChart(item)}
    `;
    target.appendChild(card);
  });
}

function renderDpaBoard() {
  const target = qs("#dpaBoard");
  if (!target) return;

  target.innerHTML = "";
  (data.dpaStores || []).forEach((item) => {
    const row = createElement("article", "dpa-row");
    row.innerHTML = `
      <div><span>Loja</span><strong>${item.store}</strong></div>
      <div><span>Perfil</span><strong>${item.profile}</strong></div>
      <div><span>Venda</span><strong>${item.sellout}</strong></div>
      <div><span>Cobertura</span><strong>${item.coverage}</strong></div>
      <div class="dpa-suggestion"><span>Sugestão</span><strong>${item.suggestion}</strong></div>
    `;
    target.appendChild(row);
  });
}

function renderFinanceConsole() {
  const target = qs("#financeConsole");
  if (!target) return;

  target.innerHTML = "";
  (data.financeConsole || []).forEach((line, index) => {
    const item = createElement("div", "console-line", line);
    item.style.transitionDelay = `${index * 70}ms`;
    target.appendChild(item);
  });
}

function renderFiscal() {
  const target = qs("#fiscalGrid");
  if (!target) return;

  target.innerHTML = "";
  (data.fiscalItems || []).forEach((item) => {
    const card = createElement("article", "fiscal-card reveal");
    card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p><strong class="fiscal-stat">${item.stat}</strong>`;
    target.appendChild(card);
  });
}

function renderAutomation() {
  const flow = qs("#automationFlow");
  const log = qs("#automationLog");
  if (!flow || !log) return;

  const steps = data.automationSteps || [];
  flow.innerHTML = "";
  log.innerHTML = "";

  steps.forEach((step, index) => {
    const card = createElement("article", "flow-step");
    card.innerHTML = `
      <span class="step-orb">${String(index + 1).padStart(2, "0")}</span>
      <div><strong>${step.title}</strong><p>${step.text}</p></div>
    `;
    flow.appendChild(card);
  });

  let active = 0;
  let timerId;

  function advance() {
    qsa(".flow-step", flow).forEach((step, index) => {
      step.classList.toggle("is-active", index === active);
    });

    const line = createElement("div", "console-line", steps[active]?.log || "processo atualizado");
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;

    active = (active + 1) % steps.length;
  }

  function start() {
    window.clearInterval(timerId);
    log.innerHTML = "";
    active = 0;
    advance();
    timerId = window.setInterval(advance, 1300);
  }

  const button = qs("#replayAutomation");
  if (button) button.addEventListener("click", start);
  start();
}

function renderProjects() {
  const target = qs("#projectGrid");
  if (!target) return;

  target.innerHTML = "";
  (data.projects || []).forEach((item) => {
    const card = createElement("article", "project-card reveal");
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <div class="tag-row">${item.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}</div>
    `;
    target.appendChild(card);
  });
}

function renderOrders() {
  const target = qs("#ordersGrid");
  if (!target) return;

  target.innerHTML = "";
  (data.orderSteps || []).forEach((item, index) => {
    const card = createElement("article", "order-card reveal");
    card.innerHTML = `
      <span class="order-index">${String(index + 1).padStart(2, "0")}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <strong>${item.status}</strong>
    `;
    target.appendChild(card);
  });
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
        ["Receita bruta", baseGrossRevenue, grossRevenue, grossRevenue / grossRevenue],
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

function setupPriceCalculator() {
  const costInput = qs("#priceCost");
  const markupInput = qs("#priceMarkup");
  const expenseInput = qs("#priceExpense");
  const discountInput = qs("#priceDiscount");
  const target = qs("#priceTableBody");
  if (!costInput || !markupInput || !expenseInput || !discountInput || !target) return;

  function updatePriceTable() {
    const baseCost = Number(costInput.value) || 0;
    const markup = Number(markupInput.value) || 1;
    const expenses = (Number(expenseInput.value) || 0) / 100;
    const discount = (Number(discountInput.value) || 0) / 100;

    target.innerHTML = (data.priceItems || []).map((item) => {
      const cost = baseCost * item.factor;
      const sale = cost * markup;
      const cash = sale * (1 - discount);
      const margin = sale > 0 ? (sale - cost - sale * expenses) / sale : 0;
      return `
        <tr>
          <td>${item.name}</td>
          <td>${formatCurrency(cost)}</td>
          <td>${formatCurrency(sale)}</td>
          <td>${formatCurrency(cash)}</td>
          <td>${formatPercent(margin)}</td>
        </tr>
      `;
    }).join("");
  }

  [costInput, markupInput, expenseInput, discountInput].forEach((input) => {
    input.addEventListener("input", updatePriceTable);
  });
  updatePriceTable();
}

function setupNavigation() {
  const links = qsa(".nav-link");
  const sections = links
    .map((link) => qs(link.getAttribute("href")))
    .filter(Boolean);

  links.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("is-menu-open");
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

  button.addEventListener("click", () => {
    document.body.classList.toggle("is-menu-open");
  });
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
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
}

function init() {
  setContactLinks();
  renderHeroKpis();
  renderMetrics();
  renderSolutions();
  renderDpaBoard();
  renderProduction();
  renderDashboards();
  renderFinanceConsole();
  renderFiscal();
  renderAutomation();
  renderProjects();
  renderOrders();
  setupDreSimulator();
  setupPriceCalculator();
  setupNavigation();
  setupMenu();
  setupReveal();
}

document.addEventListener("DOMContentLoaded", init);
