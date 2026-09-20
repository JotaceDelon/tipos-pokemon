const iconBase = "./icons/";

const types = [
  "Normal",
  "Fire",
  "Water",
  "Electric",
  "Grass",
  "Ice",
  "Fighting",
  "Poison",
  "Ground",
  "Flying",
  "Psychic",
  "Bug",
  "Rock",
  "Ghost",
  "Dragon",
  "Dark",
  "Steel",
  "Fairy"
];

const left9 = [
  "Normal",
  "Fire",
  "Water",
  "Electric",
  "Grass",
  "Ice",
  "Fighting",
  "Poison",
  "Ground"
];

const right9 = [
  "Flying",
  "Psychic",
  "Bug",
  "Rock",
  "Ghost",
  "Dragon",
  "Dark",
  "Steel",
  "Fairy"
];


const esName = {
  Normal: "Normal",
  Fire: "Fuego",
  Water: "Agua",
  Electric: "Eléctrico",
  Grass: "Planta",
  Ice: "Hielo",
  Fighting: "Lucha",
  Poison: "Veneno",
  Ground: "Tierra",
  Flying: "Volador",
  Psychic: "Psíquico",
  Bug: "Bicho",
  Rock: "Roca",
  Ghost: "Fantasma",
  Dragon: "Dragón",
  Dark: "Siniestro",
  Steel: "Acero",
  Fairy: "Hada"
};


const chart = {

  Normal: {
    weak: ["Fighting"],
    resist: [],
    immune: ["Ghost"],
    strong: [],
    notvery: ["Rock", "Steel"],
    nohit: ["Ghost"]
  },

  Fire: {
    weak: ["Water", "Ground", "Rock"],
    resist: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    immune: [],
    strong: ["Grass", "Ice", "Bug", "Steel"],
    notvery: ["Fire", "Water", "Rock", "Dragon"],
    nohit: []
  },

  Water: {
    weak: ["Electric", "Grass"],
    resist: ["Fire", "Water", "Ice", "Steel"],
    immune: [],
    strong: ["Fire", "Ground", "Rock"],
    notvery: ["Water", "Grass", "Dragon"],
    nohit: []
  },

  Electric: {
    weak: ["Ground"],
    resist: ["Electric", "Flying", "Steel"],
    immune: [],
    strong: ["Water", "Flying"],
    notvery: ["Electric", "Grass", "Dragon"],
    nohit: ["Ground"]
  },

  Grass: {
    weak: ["Fire", "Ice", "Poison", "Flying", "Bug"],
    resist: ["Water", "Electric", "Grass", "Ground"],
    immune: [],
    strong: ["Water", "Ground", "Rock"],
    notvery: ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"],
    nohit: []
  },

  Ice: {
    weak: ["Fire", "Fighting", "Rock", "Steel"],
    resist: ["Ice"],
    immune: [],
    strong: ["Grass", "Ground", "Flying", "Dragon"],
    notvery: ["Fire", "Water", "Ice", "Steel"],
    nohit: []
  },

  Fighting: {
    weak: ["Flying", "Psychic", "Fairy"],
    resist: ["Bug", "Rock", "Dark"],
    immune: [],
    strong: ["Normal", "Rock", "Steel", "Ice", "Dark"],
    notvery: ["Flying", "Poison", "Bug", "Psychic", "Fairy"],
    nohit: ["Ghost"]
  },

  Poison: {
    weak: ["Ground", "Psychic"],
    resist: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
    immune: [],
    strong: ["Grass", "Fairy"],
    notvery: ["Poison", "Ground", "Rock", "Ghost"],
    nohit: ["Steel"]
  },

  Ground: {
    weak: ["Water", "Grass", "Ice"],
    resist: ["Poison", "Rock"],
    immune: ["Electric"],
    strong: ["Fire", "Electric", "Poison", "Rock", "Steel"],
    notvery: ["Grass", "Bug"],
    nohit: ["Flying"]
  },

  Flying: {
    weak: ["Electric", "Ice", "Rock"],
    resist: ["Grass", "Fighting", "Bug"],
    immune: ["Ground"],
    strong: ["Grass", "Fighting", "Bug"],
    notvery: ["Electric", "Rock", "Steel"],
    nohit: []
  },

  Psychic: {
    weak: ["Bug", "Ghost", "Dark"],
    resist: ["Fighting", "Psychic"],
    immune: [],
    strong: ["Fighting", "Poison"],
    notvery: ["Psychic", "Steel"],
    nohit: ["Dark"]
  },

  Bug: {
    weak: ["Fire", "Flying", "Rock"],
    resist: ["Grass", "Fighting", "Ground"],
    immune: [],
    strong: ["Grass", "Psychic", "Dark"],
    notvery: ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"],
    nohit: []
  },

  Rock: {
    weak: ["Water", "Grass", "Fighting", "Ground", "Steel"],
    resist: ["Normal", "Fire", "Poison", "Flying"],
    immune: [],
    strong: ["Fire", "Ice", "Flying", "Bug"],
    notvery: ["Fighting", "Ground", "Steel"],
    nohit: []
  },

  Ghost: {
    weak: ["Ghost", "Dark"],
    resist: ["Poison", "Bug"],
    immune: ["Normal", "Fighting"],
    strong: ["Psychic", "Ghost"],
    notvery: ["Dark"],
    nohit: ["Normal"]
  },

  Dragon: {
    weak: ["Ice", "Dragon", "Fairy"],
    resist: ["Fire", "Water", "Electric", "Grass"],
    immune: [],
    strong: ["Dragon"],
    notvery: ["Steel"],
    nohit: ["Fairy"]
  },

  Dark: {
    weak: ["Fighting", "Bug", "Fairy"],
    resist: ["Ghost", "Dark"],
    immune: ["Psychic"],
    strong: ["Psychic", "Ghost"],
    notvery: ["Fighting", "Dark", "Fairy"],
    nohit: []
  },

  Steel: {
    weak: ["Fire", "Fighting", "Ground"],
    resist: [
      "Normal",
      "Grass",
      "Ice",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Dragon",
      "Steel",
      "Fairy"
    ],
    immune: ["Poison"],
    strong: ["Ice", "Rock", "Fairy"],
    notvery: ["Fire", "Water", "Electric", "Steel"],
    nohit: []
  },

  Fairy: {
    weak: ["Poison", "Steel"],
    resist: ["Fighting", "Bug", "Dark"],
    immune: ["Dragon"],
    strong: ["Fighting", "Dragon", "Dark"],
    notvery: ["Fire", "Poison", "Steel"],
    nohit: []
  }

};


/* =========================================================
   TOOLTIP
   ========================================================= */

const tip = document.getElementById("tip");


function showTip(e, text) {
  tip.style.display = "block";
  tip.style.left = e.clientX + "px";
  tip.style.top = e.clientY + "px";
  tip.textContent = text;
}


function hideTip() {
  tip.style.display = "none";
}


function iconUrl(t) {
  return `${iconBase}${t}.png`;
}


/* =========================================================
   ÓRBITAS
   ========================================================= */
/*
function makeOrbital(
  list,
  {
    exclaimSet = null,
    tooltipBuilder = null
  } = {}
) {
  const orbital = document.createElement("div");
  orbital.className = "orbital";

  const n = list.length;

  if (n === 0) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "—";
    orbital.appendChild(empty);
    return orbital;
  }

  // Detectar si la pantalla es de tamaño móvil
  const isMobile = window.innerWidth <= 600;

  // Si hay más de 5 elementos o estamos en móvil, usamos la vista Cuadrícula/Grid
  const useGrid = n > 5 || isMobile;

  if (useGrid) {
    orbital.classList.add("orbital-grid");

    // Ajustar columnas dinámicamente según la cantidad de elementos
    if (n > 8) {
      orbital.classList.add("grid-dense");
    }

    for (let i = 0; i < n; i++) {
      const t = list[i];
      const slot = createSlotElement(t, exclaimSet, tooltipBuilder);
      orbital.appendChild(slot);
    }

    return orbital;
  }

  // --- MODO ÓRBITA TRADICIONAL (1 a 5 elementos en pantalla grande) ---
  const baseSlotSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--slot")) || 28;
  const orbSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--orb")) || 80;

  const cx = orbSize / 2;
  const cy = orbSize / 2;

  const rx = (orbSize / 2) - (baseSlotSize / 2) - 2;
  const ry = rx * 0.75; // Elipse suave

  for (let i = 0; i < n; i++) {
    const t = list[i];

    // Calcular coordenadas
    const angle = (2 * Math.PI * i) / n - (Math.PI / 2);
    const x = cx + rx * Math.cos(angle);
    const y = cy + ry * Math.sin(angle);

    const slot = createSlotElement(t, exclaimSet, tooltipBuilder);
    slot.style.position = "absolute";
    slot.style.left = x + "px";
    slot.style.top = y + "px";

    orbital.appendChild(slot);
  }

  return orbital;
}

// Función auxiliar para construir cada slot limpia y reutilizable
function createSlotElement(t, exclaimSet, tooltipBuilder) {
  const slot = document.createElement("div");
  slot.className = "slot";

  const ex = exclaimSet?.has(t) ?? false;

  // Si es inmune, añadimos una clase especial a la casilla entera
  if (ex) {
    slot.classList.add("is-immune");
  }

  const img = document.createElement("img");
  img.alt = esName[t] ?? t;
  img.src = iconUrl(t);

  img.onerror = () => {
    slot.innerHTML =
      `<div style="font-size:8px;font-weight:1000;line-height:1;text-align:center;padding:0 1px">${(esName[t] ?? t).slice(0, 3)}</div>`;
  };

  slot.appendChild(img);

  // Añadimos la insignia fuera o con un estilo no invasivo
  if (ex) {
    const b = document.createElement("div");
    b.className = "badge";
    b.textContent = "!";
    slot.appendChild(b);
  }

  const tipText = tooltipBuilder
    ? tooltipBuilder(t, ex)
    : (esName[t] ?? t);

  slot.addEventListener("mousemove", (e) => showTip(e, tipText));
  slot.addEventListener("mouseleave", hideTip);

  return slot;
}
*/

function makeOrbital(list, { exclaimSet=null, tooltipBuilder=null } = {}){
  const orbital = document.createElement("div");
  orbital.className = "orbital";

  const n = list.length;
  if(n === 0){
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "—";
    orbital.appendChild(empty);
    return orbital;
  }

  // ====== CONFIG "CLEAN" ======
  const slotSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--slot")) || 28;
  const gap = -2;                       // aire extra entre iconos
  const minNeighborDist = slotSize + gap;

  const perRing = 6;

  const orbSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--orb")) || 86;
  const maxAllowed = (orbSize / 2) - (slotSize / 2);
  const cx = orbSize / 2;
  const cy = orbSize / 2;

  function minRadiusForRing(count){
    if(count <= 1) return 0;
    const denom = 2 * Math.sin(Math.PI / count);
    return Math.ceil(minNeighborDist / denom);
  }

  const rings = [];
  for(let i = 0; i < n; i += perRing){
    rings.push(list.slice(i, i + perRing));
  }

  const radii = [];
  let prevOuter = 0;
  const ringGap = 0;

  for(const ring of rings){
    const count = ring.length;
    let r = minRadiusForRing(count);

    const minFromPrev = prevOuter + ringGap + slotSize/2;
    if(r < minFromPrev) r = minFromPrev;

    radii.push(r);
    prevOuter = r + slotSize/2;
  }

  const maxUsed = Math.max(...radii) + slotSize/2;
  if (maxUsed > maxAllowed) {
    const sRaw = maxAllowed / maxUsed;
    const minScale = 0.76; // 0.75–0.85 suele ir perfecto
    const s = Math.max(sRaw, minScale);

    orbital.style.transformOrigin = "center";
    orbital.style.transform = `scale(${s})`;
  }

  for(let ringIndex = 0; ringIndex < rings.length; ringIndex++){
    const ring = rings[ringIndex];
    const count = ring.length;
    const radius = radii[ringIndex];

    for(let i=0; i<count; i++){
      const t = ring[i];
      const angle = (-Math.PI/2) + (2*Math.PI*i)/count;

      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);

      const slot = document.createElement("div");
      slot.className = "slot";
      slot.style.left = x + "px";
      slot.style.top = y + "px";

      const ex = exclaimSet?.has(t) ?? false;
      if(ex){
        const b = document.createElement("div");
        b.className = "badge";
        b.textContent = "!";
        slot.appendChild(b);
      }

      const img = document.createElement("img");
      img.alt = esName[t] ?? t;
      img.src = iconUrl(t);
      img.onerror = () => {
        slot.innerHTML =
          `<div style="font-size:10px;font-weight:1000;line-height:1.1;text-align:center;padding:0 4px">${esName[t] ?? t}</div>` +
          (ex ? `<div class="badge">!</div>` : "");
      };
      slot.appendChild(img);

      const tipText = tooltipBuilder ? tooltipBuilder(t, ex) : (esName[t] ?? t);
      slot.addEventListener("mousemove", (e)=> showTip(e, tipText));
      slot.addEventListener("mouseleave", hideTip);

      orbital.appendChild(slot);
    }
  }

  return orbital;
}

/* =========================================================
   TABLAS
   ========================================================= */

function makeCell(child) {

  const c =
    document.createElement("div");

  c.className = "cell";

  c.appendChild(child);

  return c;
}


function buildTable(tbodyId, defenderList) {

  const tbody =
    document.getElementById(tbodyId);

  tbody.innerHTML = "";


  for (const def of defenderList) {

    const row =
      document.createElement("div");

    row.className = "row";


    const resistPlus =
      [...chart[def].resist];

    const immuneSet =
      new Set(chart[def].immune);


    for (const im of immuneSet) {

      if (!resistPlus.includes(im)) {
        resistPlus.push(im);
      }
    }


    row.appendChild(
      makeCell(
        makeOrbital(
          resistPlus,
          {
            exclaimSet: immuneSet,

            tooltipBuilder:
              (atk, ex) =>
                ex
                  ? `Defensa: ${esName[def]} es inmune a ${esName[atk]} (x0)`
                  : `Defensa: ${esName[def]} resiste ${esName[atk]} (x½)`
          }
        )
      )
    );


    row.appendChild(
      makeCell(
        makeOrbital(
          chart[def].weak,
          {
            tooltipBuilder:
              (atk) =>
                `Defensa: ${esName[def]} es débil a ${esName[atk]} (x2)`
          }
        )
      )
    );


    const cCenter =
      document.createElement("div");

    cCenter.className = "cell";


    const center =
      document.createElement("div");

    center.className = "centerIcon";


    const imgC =
      document.createElement("img");

    imgC.alt =
      esName[def];

    imgC.src =
      iconUrl(def);


    imgC.onerror = () => {

      center.textContent =
        esName[def];

      center.style.fontWeight =
        "1000";

      center.style.fontSize =
        "11px";
    };


    center.appendChild(imgC);

    cCenter.appendChild(center);

    row.appendChild(cCenter);


    row.appendChild(
      makeCell(
        makeOrbital(
          chart[def].strong,
          {
            tooltipBuilder:
              (d) =>
                `Ataque: ${esName[def]} es supereficaz contra ${esName[d]} (x2)`
          }
        )
      )
    );


    row.appendChild(
      makeCell(
        makeOrbital(
          chart[def].notvery,
          {
            tooltipBuilder:
              (d) =>
                `Ataque: ${esName[def]} es poco eficaz contra ${esName[d]} (x½)`
          }
        )
      )
    );


    row.appendChild(
      makeCell(
        makeOrbital(
          chart[def].nohit,
          {
            tooltipBuilder:
              (d) =>
                `Ataque: ${esName[def]} no afecta a ${esName[d]} (x0)`
          }
        )
      )
    );


    tbody.appendChild(row);
  }
}


/* =========================================================
   CALCULADORA
   ========================================================= */

let attacker = "";
let def1 = "";
let def2 = "";

let active = "att";


const slotAtt =
  document.getElementById("slotAtt");

const slotDef1 =
  document.getElementById("slotDef1");

const slotDef2 =
  document.getElementById("slotDef2");

const palette =
  document.getElementById("palette");

const calcText =
  document.getElementById("calcText");

const calcMult =
  document.getElementById("calcMult");


/* =========================================================
   DEFENSA
   ========================================================= */

const defHint =
  document.getElementById("defHint");

const def_x4 =
  document.getElementById("def_x4");

const def_x2 =
  document.getElementById("def_x2");

const def_x05 =
  document.getElementById("def_x05");

const def_x025 =
  document.getElementById("def_x025");

const def_x0 =
  document.getElementById("def_x0");


function setActive(a) {

  active = a;

  slotAtt.classList.toggle(
    "active",
    active === "att"
  );

  slotDef1.classList.toggle(
    "active",
    active === "d1"
  );

  slotDef2.classList.toggle(
    "active",
    active === "d2"
  );
}


function renderSlot(el, t, label) {

  el.innerHTML =
    `<div class="tiny">${label}</div>`;


  if (!t) {

    const none =
      document.createElement("div");

    none.className = "noneMark";

    none.textContent = "Ø";

    el.appendChild(none);

    return;
  }


  const img =
    document.createElement("img");

  img.alt =
    esName[t];

  img.src =
    iconUrl(t);


  img.onerror = () => {

    const d =
      document.createElement("div");

    d.className = "fallback";

    d.textContent =
      esName[t];

    el.appendChild(d);
  };


  el.appendChild(img);
}


/* =========================================================
   MULTIPLICADORES
   ========================================================= */

function mult(att, def) {

  if (!att || !def) {
    return null;
  }

  if (chart[def].immune.includes(att)) {
    return 0;
  }

  if (chart[def].weak.includes(att)) {
    return 2;
  }

  if (chart[def].resist.includes(att)) {
    return 0.5;
  }

  return 1;
}


function multDual(att, d1, d2) {

  const m1 =
    mult(att, d1);

  if (m1 === null) {
    return null;
  }

  if (!d2) {
    return m1;
  }

  const m2 =
    mult(att, d2);

  if (m2 === null) {
    return null;
  }

  return m1 * m2;
}


function fmt(m) {

  if (m === null) {
    return "—";
  }

  if (m === 0) {
    return "x0";
  }

  if (m === 0.25) {
    return "x¼";
  }

  if (m === 0.5) {
    return "x½";
  }

  if (m === 1) {
    return "x1";
  }

  if (m === 2) {
    return "x2";
  }

  if (m === 4) {
    return "x4";
  }

  return "x" + m;
}


/* =========================================================
   MINI ICONOS
   ========================================================= */

function clearMini(el) {
  el.innerHTML = "";
}


function addMiniIcon(el, t) {

  const s =
    document.createElement("div");

  s.className = "miniSlot";


  const img =
    document.createElement("img");

  img.alt =
    esName[t] ?? t;

  img.src =
    iconUrl(t);


  img.onerror = () => {

    s.textContent =
      (esName[t] ?? t)
        .slice(0, 2)
        .toUpperCase();

    s.style.fontWeight =
      "1000";

    s.style.fontSize =
      "10px";
  };


  s.appendChild(img);


  s.addEventListener(
    "mousemove",
    (e) =>
      showTip(
        e,
        esName[t] ?? t
      )
  );


  s.addEventListener(
    "mouseleave",
    hideTip
  );


  el.appendChild(s);
}


function renderMiniGroup(el, list) {

  clearMini(el);


  if (!list.length) {

    const d =
      document.createElement("div");

    d.style.color =
      "var(--muted)";

    d.style.fontSize =
      "12px";

    d.style.fontWeight =
      "900";

    d.textContent =
      "—";

    el.appendChild(d);

    return;
  }


  for (const t of list) {
    addMiniIcon(el, t);
  }
}


/* =========================================================
   REPORTE DEFENSIVO
   ========================================================= */

function renderDefenseReport() {

  if (!def1) {

    defHint.textContent =
      "Selecciona Def1 y/o Def2";

    renderMiniGroup(def_x4, []);
    renderMiniGroup(def_x2, []);
    renderMiniGroup(def_x05, []);
    renderMiniGroup(def_x025, []);
    renderMiniGroup(def_x0, []);

    return;
  }


  const name =
    esName[def1] +
    (def2
      ? " / " + esName[def2]
      : "");


  defHint.textContent =
    `Defensa de ${name}:`;


  const g4 = [];
  const g2 = [];
  const g05 = [];
  const g025 = [];
  const g0 = [];


  for (const atk of types) {

    const m =
      multDual(
        atk,
        def1,
        def2
      );


    if (m === null) {
      continue;
    }

    if (m === 4) {
      g4.push(atk);
    }

    else if (m === 2) {
      g2.push(atk);
    }

    else if (m === 0.5) {
      g05.push(atk);
    }

    else if (m === 0.25) {
      g025.push(atk);
    }

    else if (m === 0) {
      g0.push(atk);
    }
  }


  renderMiniGroup(def_x4, g4);
  renderMiniGroup(def_x2, g2);
  renderMiniGroup(def_x05, g05);
  renderMiniGroup(def_x025, g025);
  renderMiniGroup(def_x0, g0);
}


/* =========================================================
   RENDER CALCULADORA
   ========================================================= */

function renderCalc() {

  renderSlot(
    slotAtt,
    attacker,
    "Atk"
  );

  renderSlot(
    slotDef1,
    def1,
    "Def1"
  );

  renderSlot(
    slotDef2,
    def2,
    "Def2"
  );


  const m =
    multDual(
      attacker,
      def1,
      def2
    );


  const left =
    attacker
      ? esName[attacker]
      : "Ø";


  const right =
    def1
      ? esName[def1]
      : "Ø";


  const right2 =
    def2
      ? " / " + esName[def2]
      : "";


  if (m === null) {

    calcText.textContent =
      `${left} → ${right}${right2}`;

    calcMult.textContent =
      "—";

    renderDefenseReport();

    return;
  }


  const m1 =
    mult(
      attacker,
      def1
    );


  const explain =
    def2
      ? `${fmt(m1)}·${fmt(mult(attacker, def2))}`
      : `${fmt(m1)}`;


  calcText.textContent =
    `${left} → ${right}${right2} (${explain})`;


  calcMult.textContent =
    fmt(m);


  renderDefenseReport();
}


/* =========================================================
   ASIGNAR TIPO
   ========================================================= */

function assignType(t) {

  if (active === "att") {
    attacker = t;
  }

  else if (active === "d1") {
    def1 = t;
  }

  else if (active === "d2") {
    def2 = t;
  }


  renderCalc();
}


/* =========================================================
   PALETA
   ========================================================= */

function buildPalette() {

  palette.innerHTML = "";


  /* Botón Ø */

  const noneBtn =
    document.createElement("button");

  noneBtn.className = "pBtn";

  noneBtn.type = "button";

  noneBtn.innerHTML =
    `<div class="noneMark" style="transform:scale(.85)">Ø</div>`;


  noneBtn.addEventListener(
    "click",
    () => assignType("")
  );


  noneBtn.addEventListener(
    "mousemove",
    (e) =>
      showTip(
        e,
        "Ninguno (Ø)"
      )
  );


  noneBtn.addEventListener(
    "mouseleave",
    hideTip
  );


  palette.appendChild(noneBtn);


  /* Tipos */

  for (const t of types) {

    const b =
      document.createElement("button");

    b.className = "pBtn";

    b.type = "button";


    const img =
      document.createElement("img");

    img.alt =
      esName[t];

    img.src =
      iconUrl(t);


    img.onerror = () => {

      b.innerHTML =
        `<div class="fallback">${esName[t]}</div>`;
    };


    b.appendChild(img);


    b.addEventListener(
      "click",
      () => assignType(t)
    );


    b.addEventListener(
      "mousemove",
      (e) =>
        showTip(
          e,
          esName[t]
        )
    );


    b.addEventListener(
      "mouseleave",
      hideTip
    );


    palette.appendChild(b);
  }
}


/* =========================================================
   EVENTOS CALCULADORA
   ========================================================= */

slotAtt.addEventListener(
  "click",
  () => setActive("att")
);


slotDef1.addEventListener(
  "click",
  () => setActive("d1")
);


slotDef2.addEventListener(
  "click",
  () => setActive("d2")
);


document
  .getElementById("btnSwap")
  .addEventListener("click", () => {

    if (!def2) {
      return;
    }

    const tmp =
      def1;

    def1 =
      def2;

    def2 =
      tmp;

    renderCalc();
  });


document
  .getElementById("btnResetAll")
  .addEventListener("click", () => {

    attacker = "";
    def1 = "";
    def2 = "";

    setActive("att");

    renderCalc();
  });


/* =========================================================
   TEMA
   ========================================================= */

const btnTheme =
  document.getElementById("btnThemeTop");


function applyTheme(theme) {

  if (theme === "light") {

    document.body.setAttribute(
      "data-theme",
      "light"
    );

    btnTheme.textContent =
      "Oscuro";

  } else {

    document.body.removeAttribute(
      "data-theme"
    );

    btnTheme.textContent =
      "Claro";
  }


  localStorage.setItem(
    "pk_theme",
    theme
  );
}


function getTheme() {

  return (
    localStorage.getItem("pk_theme") ||
    "dark"
  );
}


btnTheme.addEventListener(
  "click",
  () => {

    const current =
      document.body.getAttribute(
        "data-theme"
      ) === "light"
        ? "light"
        : "dark";


    applyTheme(
      current === "light"
        ? "dark"
        : "light"
    );
  }
);


/* Tema inicial */

applyTheme(
  getTheme()
);


/* =========================================================
   ATAJOS DE TECLADO
   ========================================================= */

window.addEventListener(
  "keydown",
  (e) => {

    if (
      ["INPUT", "TEXTAREA"]
        .includes(
          document.activeElement.tagName
        )
    ) {
      return;
    }


    switch (e.key) {

      case "1":
        setActive("att");
        break;

      case "2":
        setActive("d1");
        break;

      case "3":
        setActive("d2");
        break;

      case "0":

        if (active === "att") {
          attacker = "";
        }

        else if (active === "d1") {
          def1 = "";
        }

        else if (active === "d2") {
          def2 = "";
        }

        renderCalc();

        break;
    }
  }
);


/* =========================================================
   POKÉMONDB
   ========================================================= */

function toPokeDbSlug(raw) {

  return (raw ?? "")
    .trim()
    .toLowerCase()

    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    )

    .replace(/♀/g, "-f")
    .replace(/♂/g, "-m")

    .replace(
      /[^a-z0-9]+/g,
      "-"
    )

    .replace(
      /-+/g,
      "-"
    )

    .replace(
      /^-|-$/g,
      ""
    );
}


function goPokeDb() {

  const input =
    document.getElementById(
      "pokeSearchInput"
    );


  const q =
    input.value;


  const slug =
    toPokeDbSlug(q);


  if (!slug) {
    return;
  }


  const url =
    `https://pokemondb.net/pokedex/${slug}`;


  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );


  input.value = "";

  input.blur();
}


document
  .getElementById("pokeSearchBtn")
  .addEventListener(
    "click",
    goPokeDb
  );


document
  .getElementById("pokeSearchInput")
  .addEventListener(
    "keydown",
    (e) => {

      if (e.key === "Enter") {
        goPokeDb();
      }
    }
  );


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

buildTable(
  "tbodyA",
  left9
);


buildTable(
  "tbodyB",
  right9
);


buildPalette();


setActive("att");


attacker = "";
def1 = "";
def2 = "";


renderCalc();