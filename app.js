const regionMultipliers = {
  north: 1.08,
  central: 1,
  south: 0.94,
};

const baseItems = [
  {
    category: "設計",
    name: "純設計費：平面配置、施工圖、材質規劃",
    unit: "坪",
    qty: 30,
    low: 3000,
    mid: 4500,
    high: 6000,
    profit: 1.15,
    note: "參考 2026 每坪設計費行情，圖面深度另議",
  },
  {
    category: "設計",
    name: "設計監造 / 工程管理費",
    unit: "式",
    qty: 1,
    low: 60000,
    mid: 90000,
    high: 150000,
    profit: 1.1,
    note: "可改用工程總價 5% 到 10% 估算",
  },
  {
    category: "拆除",
    name: "舊裝潢拆除與基本清運",
    unit: "坪",
    qty: 10,
    low: 2500,
    mid: 3800,
    high: 5500,
    profit: 1.2,
    note: "含一般木作拆除，磁磚、浴室、廚具另估",
  },
  {
    category: "保護",
    name: "公共區域與室內地坪保護",
    unit: "坪",
    qty: 30,
    low: 350,
    mid: 550,
    high: 850,
    profit: 1.2,
    note: "管委會要求、電梯保護、走道轉角需加強",
  },
  {
    category: "泥作",
    name: "地坪磁磚鋪貼",
    unit: "坪",
    qty: 8,
    low: 4000,
    mid: 5000,
    high: 6000,
    profit: 1.22,
    note: "不含特殊大板磚、拼花、斜鋪與基底大修",
  },
  {
    category: "泥作",
    name: "牆面抹灰找平 / 局部補土",
    unit: "坪",
    qty: 12,
    low: 1200,
    mid: 2100,
    high: 3000,
    profit: 1.22,
    note: "南部在地行情有較低基準，現場平整度影響大",
  },
  {
    category: "防水",
    name: "浴室防水工程：打底、防水層、試水",
    unit: "間",
    qty: 2,
    low: 18000,
    mid: 30000,
    high: 48000,
    profit: 1.25,
    note: "老屋浴室需先檢查管線、門檻、洩水坡度",
  },
  {
    category: "水電",
    name: "全室水電重拉：2 房住宅基準",
    unit: "戶",
    qty: 1,
    low: 100000,
    mid: 140000,
    high: 180000,
    profit: 1.18,
    note: "迴路數、弱電、給排水移位、廚衛數量會加價",
  },
  {
    category: "水電",
    name: "新增插座 / 開關點位",
    unit: "點",
    qty: 20,
    low: 1200,
    mid: 1800,
    high: 2600,
    profit: 1.2,
    note: "含基本配線與面板，特殊品牌面板另計",
  },
  {
    category: "木作",
    name: "木作高櫃：木心板 / 夾板現場訂製",
    unit: "尺",
    qty: 10,
    low: 7000,
    mid: 8000,
    high: 12000,
    profit: 1.2,
    note: "已放入你舉例的一尺 8000 元，可自行改價",
  },
  {
    category: "木作",
    name: "木作天花板：平釘 / 局部造型",
    unit: "坪",
    qty: 12,
    low: 4500,
    mid: 6500,
    high: 9000,
    profit: 1.2,
    note: "燈槽、圓弧、檢修孔、冷氣包管另列",
  },
  {
    category: "系統櫃",
    name: "系統高櫃：門片式",
    unit: "尺",
    qty: 8,
    low: 3800,
    mid: 4650,
    high: 5500,
    profit: 1.2,
    note: "高度 80 到 240 公分、深度少於 60 公分的常見基準",
  },
  {
    category: "系統櫃",
    name: "系統高櫃：滑門",
    unit: "尺",
    qty: 6,
    low: 4500,
    mid: 5500,
    high: 6500,
    profit: 1.2,
    note: "滑門五金、門片材質、深度會影響價格",
  },
  {
    category: "系統櫃",
    name: "抽屜 / 拉籃 / 緩衝五金",
    unit: "組",
    qty: 6,
    low: 1200,
    mid: 2800,
    high: 5500,
    profit: 1.25,
    note: "國產與進口五金價差可達 20% 到 30%",
  },
  {
    category: "油漆",
    name: "全室乳膠漆：批土研磨、底漆、面漆",
    unit: "坪",
    qty: 30,
    low: 1500,
    mid: 2500,
    high: 3500,
    profit: 1.2,
    note: "特殊漆、跳色、修補面積大需另計",
  },
  {
    category: "地板",
    name: "SPC / 超耐磨木地板鋪設",
    unit: "坪",
    qty: 16,
    low: 3500,
    mid: 5200,
    high: 7800,
    profit: 1.18,
    note: "含基本收邊，地坪不平需先整平",
  },
  {
    category: "廚具",
    name: "一字型廚具：基本桶身、檯面、門板",
    unit: "尺",
    qty: 8,
    low: 12000,
    mid: 18000,
    high: 26000,
    profit: 1.18,
    note: "不含三機、龍頭水槽升級、石英石高規檯面",
  },
  {
    category: "衛浴",
    name: "基本衛浴設備：馬桶、面盆、龍頭、淋浴",
    unit: "套",
    qty: 2,
    low: 12000,
    mid: 26000,
    high: 40000,
    profit: 1.18,
    note: "品牌、安裝條件、壁掛或免治設備另計",
  },
  {
    category: "燈具",
    name: "基本吸頂燈 / 崁燈 / 線燈配置",
    unit: "盞",
    qty: 24,
    low: 1000,
    mid: 2200,
    high: 6000,
    profit: 1.2,
    note: "燈具品牌、調光系統、變壓器與驅動器另估",
  },
  {
    category: "清潔",
    name: "完工細清與垃圾整理",
    unit: "坪",
    qty: 30,
    low: 450,
    mid: 700,
    high: 1100,
    profit: 1.15,
    note: "玻璃、石材美容、裝潢粉塵嚴重時需加價",
  },
];

const cityMarketRates = {
  taichung: {
    name: "台中市",
    updated: "115 年 Q1 / 2026-01-15",
    source: "臺中市不動產建築開發商業同業公會工程市場行情表（115 年 Q1），並補充台中住宅裝修坪單價公開參考。",
    note: "表列多為台中市廠商行情。官方行情表也提醒：物價波動大，廠商價格會依發包條件、建案規模、材料與做法增減。",
    items: [
      {
        category: "整體預算",
        name: "新成屋基本裝潢",
        unit: "坪",
        low: 60000,
        high: 120000,
        note: "台中 2025-2026 常見住宅行情，含系統櫃、燈光、局部木作與軟裝配置概估",
      },
      {
        category: "整體預算",
        name: "中古屋全室裝修",
        unit: "坪",
        low: 100000,
        high: 180000,
        note: "台中 2025-2026 常見住宅行情，視拆除、水電、泥作、防水與廚衛更新範圍調整",
      },
      {
        category: "整體預算",
        name: "30 年以上老屋翻新",
        unit: "坪",
        low: 150000,
        high: 250000,
        note: "含水電、防水、格局與基礎工程時的常見區間，現場風險需另估",
      },
      {
        category: "設計",
        name: "台中室內設計費",
        unit: "坪",
        low: 4000,
        high: 10000,
        note: "依公司資歷、圖面細緻度、監工服務與案件複雜度調整",
      },
      {
        category: "水電",
        name: "水電工程",
        unit: "建坪",
        low: 23000,
        high: 26000,
        note: "大樓建案基準，材料與做法不同差價很大",
      },
      {
        category: "弱電",
        name: "弱電工程",
        unit: "建坪",
        low: 2000,
        high: 3000,
        note: "大樓 E 化設備規劃不同，價格落差大",
      },
      {
        category: "消防",
        name: "消防工程",
        unit: "建坪",
        low: 3500,
        high: 4000,
        note: "實際仍需依法規、用途與消防圖說確認",
      },
      {
        category: "泥作",
        name: "地坪 1:3 打底工資",
        unit: "㎡",
        low: 280,
        high: 340,
        note: "公共空間地坪，Q4 區間",
      },
      {
        category: "泥作",
        name: "內牆 1:3 打底工資",
        unit: "㎡",
        low: 350,
        high: 410,
        note: "Q4 區間",
      },
      {
        category: "泥作",
        name: "內牆貼 30x60 磁磚",
        unit: "㎡",
        low: 550,
        high: 600,
        note: "Q4 區間，特殊磚、拼法與基底另計",
      },
      {
        category: "泥作",
        name: "地坪貼拋光石英磚 60x60cm",
        unit: "㎡",
        low: 530,
        high: 620,
        note: "含吊料、硬底，Q4 區間",
      },
      {
        category: "泥作",
        name: "地坪貼拋光石英磚 80x80cm",
        unit: "㎡",
        low: 580,
        high: 800,
        note: "含吊料、硬底，Q4 區間",
      },
      {
        category: "防水",
        name: "地坪 / 牆面防水：聚脲噴塗",
        unit: "㎡",
        low: 1100,
        high: 1400,
        note: "Q1 區間，品牌與厚度需確認",
      },
      {
        category: "矽利康",
        name: "室內矽利康",
        unit: "M",
        low: 50,
        high: 60,
        note: "牆面與地坪接縫處，青葉參考",
      },
      {
        category: "隔間",
        name: "濕式灌漿牆 6mm 板完成面 8.7cm",
        unit: "㎡",
        low: 1500,
        high: 1750,
        note: "房間隔間，含灌漿材料",
      },
      {
        category: "隔間",
        name: "乾式石膏板輕隔間 11.3cm",
        unit: "㎡",
        low: 1480,
        high: 1580,
        note: "19+75+19 石膏板雙面單層加隔音棉",
      },
      {
        category: "天花",
        name: "平頂平釘輕鋼架 + 6mm 矽酸鈣板",
        unit: "㎡",
        low: 820,
        high: 900,
        note: "國產，含 AB 膠批土，不含油漆",
      },
      {
        category: "油漆",
        name: "牆面乳膠漆二底三度",
        unit: "㎡",
        low: 180,
        high: 210,
        note: "得利 986 參考",
      },
      {
        category: "油漆",
        name: "平頂水泥漆批土二度噴漆",
        unit: "㎡",
        low: 145,
        high: 155,
        note: "金利登、虹牌 780 參考",
      },
      {
        category: "地板",
        name: "5mm-8mm 靜音墊耐磨 SPC",
        unit: "坪",
        low: 2500,
        high: 4000,
        note: "不同型號及厚度費用不同",
      },
      {
        category: "地板",
        name: "8mm + 2mm 靜音墊耐磨木地板",
        unit: "坪",
        low: 2750,
        high: 2850,
        note: "德國松木、太格、美綻系列參考",
      },
      {
        category: "清潔",
        name: "室內交屋清潔費",
        unit: "戶",
        low: 4000,
        high: 9000,
        note: "不含公共空間，大樓住家室內清潔 2 次",
      },
    ],
  },
};

const STORAGE_KEY = "winning-interior-estimator-v1";
let isBooting = true;

const money = new Intl.NumberFormat("zh-TW", {
  style: "currency",
  currency: "TWD",
  maximumFractionDigits: 0,
});

const body = document.querySelector("#itemsBody");
const template = document.querySelector("#itemTemplate");
const regionSelect = document.querySelector("#regionSelect");
const priceMode = document.querySelector("#priceMode");
const globalProfit = document.querySelector("#globalProfit");
const searchInput = document.querySelector("#searchInput");
const cityMarketSelect = document.querySelector("#cityMarketSelect");
const marketBody = document.querySelector("#marketBody");
const cityMarketMeta = document.querySelector("#cityMarketMeta");

function regionalPrice(item, mode = priceMode.value, region = regionSelect.value) {
  return Math.round(item[mode] * regionMultipliers[region]);
}

function addRow(item = {}) {
  const row = template.content.firstElementChild.cloneNode(true);
  const data = {
    active: item.active ?? true,
    category: item.category || "自訂",
    name: item.name || "新增工項",
    unit: item.unit || "式",
    qty: item.qty ?? 1,
    cost: item.cost ?? regionalPrice(item),
    profit: item.profit ?? Number(globalProfit.value || 1.2),
    note: item.note || "",
  };

  row.dataset.search = `${data.category} ${data.name} ${data.note}`.toLowerCase();
  row.querySelector(".active-input").checked = data.active;
  row.querySelector(".category-input").value = data.category;
  row.querySelector(".name-input").value = data.name;
  row.querySelector(".unit-input").value = data.unit;
  row.querySelector(".qty-input").value = data.qty;
  row.querySelector(".cost-input").value = data.cost;
  row.querySelector(".profit-input").value = data.profit;
  row.querySelector(".note-input").value = data.note;

  row.addEventListener("input", calculate);
  body.append(row);
  calculate();
}

function getRows() {
  return [...body.querySelectorAll("tr")];
}

function rowValue(row) {
  const active = row.querySelector(".active-input").checked;
  const qty = Number(row.querySelector(".qty-input").value) || 0;
  const cost = Number(row.querySelector(".cost-input").value) || 0;
  const profit = Number(row.querySelector(".profit-input").value) || 1;
  const profitPrice = Math.round(cost * profit);
  const costTotal = active ? Math.round(cost * qty) : 0;
  const lineTotal = active ? Math.round(profitPrice * qty) : 0;
  return { active, qty, cost, profit, profitPrice, costTotal, lineTotal };
}

function calculate() {
  let costTotal = 0;
  let grandTotal = 0;
  let activeCount = 0;
  let profitSum = 0;

  getRows().forEach((row) => {
    const value = rowValue(row);
    row.querySelector(".profit-price").textContent = money.format(value.profitPrice);
    row.querySelector(".line-total").textContent = money.format(value.lineTotal);

    costTotal += value.costTotal;
    grandTotal += value.lineTotal;
    if (value.active) {
      activeCount += 1;
      profitSum += value.profit;
    }
  });

  const avgProfit = activeCount ? profitSum / activeCount : 0;
  document.querySelector("#costTotal").textContent = money.format(costTotal);
  document.querySelector("#profitTotal").textContent = money.format(grandTotal - costTotal);
  document.querySelector("#grandTotal").textContent = money.format(grandTotal);
  document.querySelector("#avgProfit").textContent = avgProfit.toFixed(2);
  document.querySelector("#summaryMeta").textContent = `${activeCount} 個工項，平均倍率 ${avgProfit.toFixed(2)}`;
  if (!isBooting) saveEstimate();
}

function serializeEstimate() {
  return {
    projectName: document.querySelector("#projectName").value,
    region: regionSelect.value,
    priceMode: priceMode.value,
    globalProfit: globalProfit.value,
    rows: getRows().map((row) => {
      const value = rowValue(row);
      return {
        active: value.active,
        category: row.querySelector(".category-input").value,
        name: row.querySelector(".name-input").value,
        unit: row.querySelector(".unit-input").value,
        qty: row.querySelector(".qty-input").value,
        cost: value.cost,
        profit: value.profit,
        note: row.querySelector(".note-input").value,
      };
    }),
  };
}

function setSaveStatus(message) {
  const status = document.querySelector("#saveStatus");
  if (status) status.textContent = message;
}

function saveEstimate() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializeEstimate()));
    setSaveStatus(`已自動儲存到這台裝置：${new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })}`);
  } catch {
    setSaveStatus("這個瀏覽器目前無法儲存估價內容，請先匯出 CSV 備份。");
  }
}

function restoreEstimate() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return false;
  const saved = JSON.parse(raw);
  document.querySelector("#projectName").value = saved.projectName || "住宅裝修工程估價單";
  regionSelect.value = saved.region || "north";
  priceMode.value = saved.priceMode || "mid";
  globalProfit.value = saved.globalProfit || "1.20";
  body.innerHTML = "";
  (saved.rows || []).forEach(addRow);
  return true;
}

function resetEstimate() {
  if (!confirm("要重置為預設估價表嗎？目前這台裝置儲存的內容會被清掉。")) return;
  isBooting = true;
  localStorage.removeItem(STORAGE_KEY);
  document.querySelector("#projectName").value = "住宅裝修工程估價單";
  regionSelect.value = "north";
  priceMode.value = "mid";
  globalProfit.value = "1.20";
  body.innerHTML = "";
  baseItems.forEach(addRow);
  isBooting = false;
  calculate();
  setSaveStatus("已重置為預設估價表。");
}

function applyRegionPrices() {
  const mode = priceMode.value;
  const region = regionSelect.value;
  getRows().forEach((row, index) => {
    const item = baseItems[index];
    if (!item) return;
    row.querySelector(".cost-input").value = regionalPrice(item, mode, region);
  });
  calculate();
}

function applyProfit() {
  const profit = Number(globalProfit.value) || 1.2;
  getRows().forEach((row) => {
    row.querySelector(".profit-input").value = profit.toFixed(2);
  });
  calculate();
}

function filterRows() {
  const query = searchInput.value.trim().toLowerCase();
  getRows().forEach((row) => {
    const liveText = [
      row.querySelector(".category-input").value,
      row.querySelector(".name-input").value,
      row.querySelector(".note-input").value,
    ].join(" ").toLowerCase();
    row.hidden = query && !liveText.includes(query);
  });
}

function csvEscape(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function exportCsv() {
  const rows = [
    ["專案名稱", document.querySelector("#projectName").value],
    ["主要區域", regionSelect.options[regionSelect.selectedIndex].textContent],
    [],
    ["啟用", "分類", "工項", "單位", "數量", "成本單價", "利潤倍率", "利潤後單價", "小計", "備註"],
  ];

  getRows().forEach((row) => {
    const value = rowValue(row);
    rows.push([
      value.active ? "是" : "否",
      row.querySelector(".category-input").value,
      row.querySelector(".name-input").value,
      row.querySelector(".unit-input").value,
      row.querySelector(".qty-input").value,
      value.cost,
      value.profit,
      value.profitPrice,
      value.lineTotal,
      row.querySelector(".note-input").value,
    ]);
  });

  const csv = rows.map((row) => row.map(csvEscape).join(",")).join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${document.querySelector("#projectName").value || "interior-estimate"}.csv`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function marketMid(item) {
  return Math.round((item.low + item.high) / 2);
}

function renderMarketRates() {
  const market = cityMarketRates[cityMarketSelect.value];
  marketBody.innerHTML = "";
  cityMarketMeta.textContent = `${market.name}行情資料：${market.updated}。${market.source} ${market.note}`;

  market.items.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input class="market-check" type="checkbox" aria-label="選取行情項目"></td>
      <td>${item.category}</td>
      <td>${item.name}</td>
      <td>${item.unit}</td>
      <td class="money">${money.format(item.low)}</td>
      <td class="money">${money.format(item.high)}</td>
      <td class="money">${money.format(marketMid(item))}</td>
      <td>${item.note}</td>
    `;
    row.dataset.index = String(index);
    marketBody.append(row);
  });
}

function addSelectedMarketRates() {
  const market = cityMarketRates[cityMarketSelect.value];
  const selected = [...marketBody.querySelectorAll(".market-check:checked")];
  selected.forEach((input) => {
    const item = market.items[Number(input.closest("tr").dataset.index)];
    addRow({
      category: item.category,
      name: `${market.name}行情：${item.name}`,
      unit: item.unit,
      qty: 1,
      cost: marketMid(item),
      profit: Number(globalProfit.value) || 1.2,
      note: `${item.note}；來源：${market.name} ${market.updated}`,
    });
    input.checked = false;
  });
}

baseItems.forEach(addRow);
try {
  restoreEstimate();
} catch {
  setSaveStatus("讀取本機儲存資料失敗，已使用預設估價表。");
}
isBooting = false;
calculate();
renderMarketRates();

document.querySelector("#applyRegionBtn").addEventListener("click", applyRegionPrices);
document.querySelector("#applyProfitBtn").addEventListener("click", applyProfit);
document.querySelector("#addItemBtn").addEventListener("click", () => addRow({ cost: 0 }));
document.querySelector("#saveBtn").addEventListener("click", saveEstimate);
document.querySelector("#resetBtn").addEventListener("click", resetEstimate);
document.querySelector("#exportBtn").addEventListener("click", exportCsv);
document.querySelector("#printBtn").addEventListener("click", () => window.print());
document.querySelector("#addSelectedMarketBtn").addEventListener("click", addSelectedMarketRates);
document.querySelector("#projectName").addEventListener("input", saveEstimate);
globalProfit.addEventListener("input", saveEstimate);
regionSelect.addEventListener("change", applyRegionPrices);
priceMode.addEventListener("change", applyRegionPrices);
searchInput.addEventListener("input", filterRows);
cityMarketSelect.addEventListener("change", renderMarketRates);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      setSaveStatus("離線快取需要透過 HTTPS 網址開啟；目前仍可正常估價與匯出。");
    });
  });
}
