const $ = s => document.querySelector(s);
const pieces = {
  "RC-001": {
    "name": "Jaguar del Amazonas",
    "image": "assets/jaguar-amazonas.webp",
    "animal": "Jaguar fantástico",
    "kicker": "EDICIÓN CONCEPTUAL · INSPIRADA EN BRASIL",
    "region": "Brasil",
    "description": "Un jaguar fantástico en tonos verde esmeralda, azul cobalto y detalles dorados. Sus rosetas y líneas reúnen los ríos sinuosos, la vegetación exuberante y los grafismos sagrados de las comunidades del Amazonas.",
    "inspiration": "Brasil: el jaguar guardián, la cuenca del Amazonas y la iconografía de la selva tropical.",
    "meaning": "Encarna la fuerza espiritual del felino, la protección de la biodiversidad y el hermanamiento místico entre los bosques de Oaxaca y la Amazonía.",
    "wood": "Copal hembra de aprovechamiento sustentable, Valles Centrales de Oaxaca.",
    "impact": [
      {
        "place": "Oaxaca",
        "count": 5,
        "text": "árboles de copal reforestados"
      },
      {
        "place": "Amazonas",
        "count": 2,
        "text": "árboles apoyados en programas de conservación"
      }
    ],
    "process": "Talla a mano en pieza única, 8 meses de secado natural y pigmentación con tintes 100% orgánicos: grana cochinilla, añil y cuscate.",
    "sustainability": "Registro de origen sustentable alineado con la normativa europea de deforestación EUDR y Certificado Fitosanitario de Exportación SEMARNAT-03-046.",
    "ip": "Contrato formal de colaboración con cesión remunerada de derechos patrimoniales, artículos 83 y 84 de la LFDA, e iconografía protegida por la comercializadora Voces de Copal.",
    "story": "Ríos azules, vegetación esmeralda y rosetas doradas recorren el Jaguar del Amazonas, un concepto de encuentro entre Oaxaca y Brasil."
  },
  "RC-002": {
    "name": "Quetzal del Mayab",
    "image": "assets/quetzal-mayab.webp",
    "animal": "Quetzal fantástico",
    "kicker": "EDICIÓN CONCEPTUAL · INSPIRADA EN GUATEMALA",
    "region": "Guatemala",
    "description": "Un ave mística en tonos turquesa, jade y rojo carmín. El despliegue de sus plumas combina glifos y geometrías de los tejidos tradicionales mayas con la plástica zapoteca.",
    "inspiration": "Guatemala: el quetzal, las montañas de Petén y los huipiles de Antigua.",
    "meaning": "Simboliza la libertad, la trascendencia del espíritu y la unión histórica de dos de las civilizaciones más importantes de Mesoamérica: la zapoteca y la maya.",
    "wood": "Madera de copal de poda controlada en San Martín Tilcajete, Oaxaca.",
    "impact": [
      {
        "place": "Oaxaca",
        "count": 6,
        "text": "árboles de copal plantados en viveros comunitarios"
      }
    ],
    "process": "Curado ecológico contra plagas, 7 meses de deshidratación gradual y finos trazos realizados con espina de agave y pincel de pelo de camello.",
    "sustainability": "Expediente digital de trazabilidad con coordenadas de cosecha y certificación fitosanitaria para comercio internacional.",
    "ip": "Registro de autoría moral ante el INDAUTOR y marca colectiva protegida por el IMPI.",
    "story": "Jade, turquesa y rojo carmín se despliegan en las plumas del Quetzal del Mayab. Sus geometrías proponen un diálogo visual entre Oaxaca y Guatemala."
  },
  "RC-003": {
    "name": "Llama de los Andes",
    "image": "assets/llama-andes.webp",
    "animal": "Llama fantástica",
    "kicker": "EDICIÓN CONCEPTUAL · INSPIRADA EN BOLIVIA Y PERÚ",
    "region": "Bolivia y Perú",
    "description": "Una llama mística vestida con motivos en ocre, terracota y violeta profundo, rindiendo homenaje a la textilería aymara y a los espíritus protectores de las montañas altiplánicas.",
    "inspiration": "El altiplano andino, las alturas del Salar de Uyuni y los bordados festivos de la Diablada.",
    "meaning": "Representa la resistencia, el caminar comunitario a través de las altas cumbres y la dignidad artesanal de los pueblos originarios de América del Sur.",
    "wood": "Copal recolectado en predios certificados de Zimatlán de Álvarez.",
    "impact": [
      {
        "place": "Oaxaca",
        "count": 4,
        "text": "árboles de copal sembrados y monitoreados en parcelas de reforestación"
      }
    ],
    "process": "Talla de forma orgánica en un solo bloque de madera, curado térmico y preparación de base a partir de cal y pigmentos naturales de cáscara de granada.",
    "sustainability": "Cumplimiento de estándares de trazabilidad ambiental EUDR y permiso de exportación forestal.",
    "ip": "Resguardo de derechos de autor e integración a esquemas de comercio justo de Voces de Copal.",
    "story": "El ocre, la terracota y el violeta profundo visten a la Llama de los Andes. El diseño conceptual celebra la resistencia y el caminar comunitario del altiplano."
  },
  "RC-004": {
    "name": "Cóndor del Sol",
    "image": "assets/condor.webp",
    "animal": "Cóndor fantástico",
    "kicker": "EDICIÓN CONCEPTUAL · INSPIRADA EN PERÚ",
    "region": "Perú",
    "description": "Un cóndor en terracota, rojo y oro. Sus alas reúnen montañas, soles y geometrías inspiradas en los textiles andinos de Perú.",
    "inspiration": "Perú: el cóndor, los Andes y sus textiles.",
    "meaning": "El Cóndor del Sol evoca altura, libertad y encuentro cultural. Es un concepto contemporáneo de alebrije mexicano con inspiración visual peruana.",
    "wood": "Madera de copal. Procedencia pendiente de documentación.",
    "impact": [],
    "process": "Proceso artesanal pendiente de documentar con el taller.",
    "sustainability": "Documentación de origen, geolocalización y certificado fitosanitario pendientes de incorporar.",
    "ip": "Registros de marca, diseño y autoría pendientes de incorporar.",
    "story": "Montañas y soles aparecen sobre alas de color terracota. El Cóndor del Sol conecta la imaginación del alebrije con una inspiración visual peruana."
  },
  "RC-005": {
    "name": "Dragón de la Flor de Cerezo",
    "image": "assets/dragon-sakura.webp",
    "animal": "Dragón fantástico",
    "kicker": "EDICIÓN CONCEPTUAL · INSPIRADA EN JAPÓN",
    "region": "Japón",
    "description": "Una criatura híbrida entre el alebrije zapoteco y el dragón oriental, tallada en tonos blanco perla, rosa sakura y negro carbón, entrelazando trazos del pincel oriental con la iconografía mística de Tilcajete.",
    "inspiration": "Japón: la flor de sakura, los dragones míticos de agua y el diálogo intercultural entre Oaxaca y Asia.",
    "meaning": "Encarna el puente de diálogo entre la cosmovisión artesanal oaxaqueña y el arte milenario del lejano oriente, celebrando la belleza del encuentro entre filosofías ancestrales.",
    "wood": "Madera seleccionada de copal proveniente de parcelas en restauración ambiental.",
    "impact": [
      {
        "place": "Oaxaca",
        "count": 8,
        "text": "árboles de copal plantados en la región de los Valles Centrales"
      }
    ],
    "process": "Talla compleja de alta precisión con 10 meses de secado cuidadoso y aplicación de iconografía mixta zapoteca-oriental.",
    "sustainability": "Certificado fitosanitario SEMARNAT y respaldo de geolocalización de insumos forestales.",
    "ip": "Contrato de obra por encargo con cesión remunerada, protección de marca registrada ante el IMPI e inscripción en la colección internacional de arte de lujo.",
    "story": "Blanco perla, rosa sakura y negro carbón se entrelazan en el Dragón de la Flor de Cerezo. Las flores y las geometrías proponen un encuentro entre Oaxaca y Japón."
  }
};
const artisanTeams = {
  "RC-001": [
    [
      "Mateo Santiago López",
      "Artesano principal"
    ],
    [
      "Lucía Hernández Cruz",
      "Pintura"
    ],
    [
      "Tomás Pérez Méndez",
      "Tallado"
    ],
    [
      "Elisa Martínez Ruiz",
      "Detalles finales"
    ]
  ],
  "RC-002": [
    [
      "Lucía Hernández Cruz",
      "Artesana principal"
    ],
    [
      "Beatriz Ramos Jiménez",
      "Pigmentos y color"
    ],
    [
      "Mateo Santiago López",
      "Tallado"
    ]
  ],
  "RC-003": [
    [
      "Tomás Pérez Méndez",
      "Artesano principal"
    ],
    [
      "Rosa Bautista García",
      "Pintura"
    ],
    [
      "Diego Cruz Ramírez",
      "Pulido y acabados"
    ]
  ],
  "RC-004": [
    [
      "Beatriz Ramos Jiménez",
      "Artesana principal"
    ],
    [
      "Lucía Hernández Cruz",
      "Pintura"
    ],
    [
      "Esteban García López",
      "Tallado"
    ]
  ],
  "RC-005": [
    [
      "Elisa Martínez Ruiz",
      "Artesana principal"
    ],
    [
      "Mateo Santiago López",
      "Tallado"
    ],
    [
      "Rosa Bautista García",
      "Pigmentos y pintura"
    ],
    [
      "Diego Cruz Ramírez",
      "Acabados"
    ]
  ]
};
function artisanPanel(code) {
  const [principal, ...collaborators] = artisanTeams[code];
  return `<section class="artisan-team" aria-label="Equipo artesanal de demostración"><div class="artisan-primary"><p class="eyebrow">${principal[1].toUpperCase()}</p><h4>${principal[0]}</h4></div><div class="artisan-collaborators">${collaborators.map(([name,role])=>`<div><strong>${name}</strong><span>${role}</span></div>`).join('')}</div><p class="artisan-demo">Nombres ficticios para esta demostración. Autoría real pendiente de documentar.</p></section>`;
}
let activeCode = null;
let activeTab = 'cultura';
let scene = 0;
const dialog = $('#story-dialog');
const imageSet = image => `${image.replace('.webp','-mobile.webp')} 640w, ${image} 1254w`;
const row = (label, value, pending = false) => `<div class="data-row"><span>${label}</span><strong${pending ? ' class="pending"' : ''}>${value}</strong></div>`;
function impactCards(p) {
  if (!p.impact.length) return '<p class="tiny">Impacto ambiental pendiente de documentar.</p>';
  return `<div class="impact-concept"><p class="eyebrow">PALO QUE HABLA / ESCENARIO CONCEPTUAL</p><div class="impact-cards">${p.impact.map(i=>`<div><span>${i.place}</span><strong>${i.count}</strong><p>${i.text}</p></div>`).join('')}</div><p class="tiny">Cifras de la propuesta conceptual. Evidencia de plantación y seguimiento pendiente de incorporar.</p></div>`;
}
const conceptNote = '<div class="concept-status"><span></span>Contenido conceptual · validación documental pendiente</div>';
function panels(key) {
  const p = pieces[activeCode];
  if (key === 'cultura') return `<p class="eyebrow">PASAPORTE CULTURAL / ${activeCode}</p><h3>Las manos detrás de ${p.name}.</h3>${conceptNote}${row('Taller de referencia','Taller Jacobo y María Ángeles')}${artisanPanel(activeCode)}${row('Inspiración del diseño',p.inspiration)}<div class="meaning"><h4>El sentido de la pieza</h4><p>${p.meaning}</p></div><div class="video-block"><div class="video-cover"><img loading="lazy" decoding="async" src="${p.image.replace('.webp','-mobile.webp')}" srcset="${imageSet(p.image)}" sizes="(max-width:700px) calc(100vw - 44px), 550px" alt="${p.name}, concepto de la colección"><span class="video-label">LA HISTORIA DE ${p.name.toUpperCase()}</span><button class="story-play" data-story aria-label="Ver adelanto por escenas">▷<span>Ver adelanto por escenas</span></button></div><h4>De la madera a la imaginación</h4><p>La cultura, el proceso artesanal y las personas que darían vida a ${p.name}.</p><p class="tiny">Video pendiente de incorporar. Por ahora puedes recorrer el guion interactivo.</p></div>`;
  if (key === 'origen') return `<p class="eyebrow">TRAZABILIDAD Y SUSTENTABILIDAD / ${activeCode}</p><h3>Del bosque a la pieza.</h3>${conceptNote}<article class="passport-detail"><h4>Origen propuesto de la madera</h4><p>${p.wood}</p></article>${impactCards(p)}<article class="passport-detail"><h4>Proceso artesanal propuesto</h4><p>${p.process}</p></article><div class="document-status">Expediente de origen, coordenadas y evidencias: pendientes de incorporar.</div>`;
  return `<p class="eyebrow">CERTEZA LEGAL Y CERTIFICACIÓN / ${activeCode}</p><h3>El compromiso detrás de la pieza.</h3>${conceptNote}<article class="passport-detail"><h4>Sustentabilidad y sanidad</h4><p>${p.sustainability}</p></article><article class="passport-detail"><h4>Propiedad intelectual</h4><p>${p.ip}</p></article><div class="document-status">Respaldo planteado en la propuesta. No hay certificados, folios ni contratos cargados en esta ficha.</div>`;
}
function selectTab(key) {
  activeTab = key;
  document.querySelectorAll('[data-tab]').forEach(b => { const active = b.dataset.tab === key; b.setAttribute('aria-selected', active); b.tabIndex = active ? 0 : -1; });
  $('#passport-panel').setAttribute('aria-labelledby', 'tab-' + key);
  $('#passport-panel').innerHTML = panels(key);
}
function openPiece(code, focus = true) {
  const p = pieces[code]; if (!p) return;
  activeCode = code;
  $('.skip-link').href = '#passport-panel'; $('.skip-link').textContent = 'Ir al pasaporte';
  $('#piece-title').textContent = p.name;
  $('#piece-kicker').textContent = p.kicker;
  $('#piece-description').textContent = p.description;
  $('#piece-image').src = p.image;
  $('#piece-image').srcset = imageSet(p.image);
  $('#piece-image').sizes = '(max-width:700px) calc(100vw - 64px), (max-width:1000px) 40vw, 500px';
  $('#piece-image').alt = `${p.animal}: ${p.name}, diseño conceptual`;
  $('#piece-badge').textContent = code;
  $('#piece-caption-name').textContent = p.name;
  $('#passport-code').textContent = code;
  $('#welcome-text').textContent = 'Estás explorando ' + p.name;
  $('#access').hidden = true; $('#access-background').hidden = true; $('footer').hidden = false; $('#pasaporte').hidden = false;
  $('#logout').hidden = false; $('#header-label').hidden = true;
  document.title = p.name + ' — Raíces que Unen';
  selectTab('cultura');
  try { sessionStorage.setItem('raices-piece', code); } catch (_) {}
  history.replaceState(null, '', '#pasaporte/' + code);
  if (focus) { $('#piece-title').focus({preventScroll:true}); window.scrollTo({top:0,behavior:'instant'}); }
}
function showAccess() {
  if (dialog.open) dialog.close();
  activeCode = null;
  $('.skip-link').href = '#login-form'; $('.skip-link').textContent = 'Ir al acceso';
  $('#pasaporte').hidden = true; $('#access-background').hidden = false; $('footer').hidden = true; $('#access').hidden = false;
  $('#logout').hidden = true; $('#header-label').hidden = false;
  $('#box-code').value = ''; clearError();
  try { sessionStorage.removeItem('raices-piece'); } catch (_) {}
  history.replaceState(null, '', '#acceso');
  document.title = 'Abre tu pasaporte — Raíces que Unen';
  window.scrollTo({top:0,behavior:'instant'});
}
function clearError() { $('#login-error').hidden = true; $('#login-error').textContent = ''; $('#box-code').removeAttribute('aria-invalid'); }
$('#login-form').addEventListener('submit', e => {
  e.preventDefault();
  const compactCode = $('#box-code').value.toUpperCase().replace(/[\s-]/g, '');
  const code = compactCode.replace(/^RC(\d{3})$/, 'RC-$1');
  if (!Object.hasOwn(pieces,code)) {
    $('#login-error').textContent = code ? 'Código no encontrado. Revisa la etiqueta de tu caja.' : 'Escribe el código de tu caja para continuar.';
    $('#login-error').hidden = false; $('#box-code').setAttribute('aria-invalid','true'); $('#box-code').focus(); return;
  }
  clearError(); openPiece(code);
});
$('#box-code').addEventListener('input', clearError);
document.querySelectorAll('[data-demo]').forEach(b => b.addEventListener('click', () => { $('#box-code').value = b.dataset.demo; clearError(); $('#box-code').focus(); }));
$('#logout').addEventListener('click', showAccess);
$('.brand').addEventListener('click', e => { e.preventDefault(); if (activeCode) { window.scrollTo({top:0,behavior:'smooth'}); } else { $('#box-code').focus(); } });
document.querySelectorAll('[data-tab]').forEach((b,i) => {
  b.addEventListener('click', () => selectTab(b.dataset.tab));
  b.addEventListener('keydown', e => { if (['ArrowRight','ArrowLeft','Home','End'].includes(e.key)) { e.preventDefault(); const all = [...document.querySelectorAll('[data-tab]')]; const n = e.key==='Home'?0:e.key==='End'?2:(i+(e.key==='ArrowRight'?1:2))%3; all[n].focus(); selectTab(all[n].dataset.tab); } });
});
function getScenes() {
  const p=pieces[activeCode];
  return [
    ['01 / EL ENCUENTRO','Todo comienza con una idea.',`La historia de ${p.name} nace de una inspiración: ${p.inspiration.toLowerCase()}. Este concepto propone llevar esa imaginación al tallado y la pintura artesanal.`],
    ['02 / LAS MANOS','El tiempo también forma parte de la pieza.','Seleccionar la madera, respetar su secado, tallar, pulir y pintar. El pasaporte reconocerá a las personas que participen en cada etapa de la obra.'],
    ['03 / EL COLOR',p.name,p.story],
    ['04 / LA HISTORIA CONTINÚA','Una pieza. Un origen. Una historia.',`El código ${activeCode} abre el pasaporte de ${p.name}. Aquí se reunirán su autoría, su origen y su respaldo documental cuando esa información esté disponible.`]
  ];
}
function renderScene() { const scenes=getScenes(), s=scenes[scene], p=pieces[activeCode]; $('#story-kicker').textContent=s[0]; $('#story-title').textContent=s[1]; $('#story-description').textContent=s[2]; $('#story-progress').textContent=`${scene+1} / ${scenes.length}`; $('#story-prev').disabled=scene===0; $('#story-next').textContent=scene===scenes.length-1?'Volver al inicio ↺':'Siguiente →'; $('.story-visual img').src=p.image; $('.story-visual img').srcset=imageSet(p.image); $('.story-visual img').sizes='(max-width:700px) calc(100vw - 24px), 760px'; $('.story-visual img').alt=p.name; $('.story-visual img').style.objectPosition=`center ${20+scene*20}%`; }
document.addEventListener('click',e=>{if(e.target.closest('[data-story]') && activeCode){scene=0;renderScene();dialog.showModal();}});
$('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
$('#story-prev').addEventListener('click',()=>{scene=Math.max(0,scene-1);renderScene();});
$('#story-next').addEventListener('click',()=>{scene=(scene+1)%4;renderScene();});
let saved;try { saved=sessionStorage.getItem('raices-piece'); } catch (_) {}
if (saved && Object.hasOwn(pieces,saved)) openPiece(saved,false);
