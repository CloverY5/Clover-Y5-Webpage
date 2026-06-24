/* CLOVER Y5 — interacciones + bilingüe (ES/EN) */
(function () {
  // ---------- menú móvil ----------
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { links.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
    });
  }

  // ---------- filtro de proyectos ----------
  var fbtns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('[data-brand]');
  if (fbtns.length && cards.length) {
    fbtns.forEach(function (b) {
      b.addEventListener('click', function () {
        fbtns.forEach(function (x){ x.classList.remove('active'); });
        b.classList.add('active');
        var f = b.getAttribute('data-filter');
        cards.forEach(function (c){ c.classList.toggle('is-hidden', !(f === 'all' || c.getAttribute('data-brand') === f)); });
      });
    });
  }

  // ---------- bilingüe (ES por defecto, EN al traducir) ----------
  var EN = {
    // navegación y pie
    "nav.home":"Home","nav.labs":"Labs","nav.studio":"Studio","nav.projects":"Projects","nav.contact":"Contact","nav.openmenu":"Open menu",
    "foot.copy":"© 2026 Clover Y5 · Mexico City","foot.copy.labs":"© 2026 Clover Y5 Labs · Mexico City","foot.copy.studio":"© 2026 Clover Y5 Studio · Mexico City",
    // botones
    "btn.viewprojects":"View projects","btn.talk":"Let's talk","btn.enterlabs":"Enter Labs","btn.enterstudio":"Enter Studio","btn.startproject":"Start a project","btn.allprojects":"All projects","btn.requestquote":"Request a quote","btn.viewwork":"View work","btn.send":"Send message",
    // etiquetas compartidas
    "tag.cy5labs":"Clover Y5 / Labs","tag.cy5studio":"Clover Y5 / Studio",
    // títulos de pestaña
    "meta.title.home":"Clover Y5 — Engineering × Creative","meta.title.labs":"Clover Y5 Labs — Electronics engineering","meta.title.studio":"Clover Y5 Studio — Creative & audiovisual","meta.title.proj":"Projects — Clover Y5","meta.title.contact":"Contact — Clover Y5",
    // INICIO
    "home.eyebrow":"Engineering × Creative",
    "home.h1":"One root,<br>two worlds.",
    "home.lead":"Clover Y5 brings together the precision of engineering and the voice of the creative. <strong style=\"color:var(--ink)\">Labs</strong> builds the hardware; <strong style=\"color:var(--ink)\">Studio</strong> gives it shape and story.",
    "home.world.labs.desc":"Embedded electronics, power electronics and PCB. From the register to the product.",
    "home.world.studio.desc":"Audiovisual production, identity and creative direction. Where the signal becomes expression.",
    "home.root.eyebrow":"The root","home.root.h2":"One brand, two ways to build.",
    "home.root.lead":"The same rigor in two languages. Labs designs the hardware and firmware; Studio gives it shape and story.",
    "home.mini.labs":"Embedded systems · Power electronics · PCB design · Local AI",
    "home.mini.studio":"Audiovisual production · Brand identity · Motion · Creative direction",
    "home.sel.eyebrow":"Selection","home.sel.h2":"Featured projects","home.sel.p":"A sample across Labs and Studio.",
    "home.card1.ph":"Hardware · Firmware","home.card1.title":"Reflow controller","home.card1.desc":"A clothes iron turned into a reflow hotplate with PID control, K-type thermocouple and PWM over a DC bus.",
    "home.card2.ph":"Power electronics","home.card2.title":"14S lithium charger","home.card2.desc":"STM32-controlled boost stage with a CC/CV loop for a 14-cell pack.",
    "home.card3.ph":"Brand identity","home.card3.title":"Clover Y5 visual system","home.card3.desc":"Identity of the root brand and its two sub-brands, including this site.",
    "home.cta.h2":"Got something in mind?","home.cta.p":"From a custom board to an audiovisual piece.",
    // LABS
    "labs.h1":"From the register to the product.",
    "labs.lead":"Embedded and power electronics engineering. Datasheet-level design, control loops actually analyzed, and protections that don't rely on software.",
    "labs.svc.eyebrow":"What I do","labs.svc.h2":"Engineering services","labs.svc.p":"Custom hardware, firmware and control — well built and documented.",
    "labs.svc1.t":"Embedded systems","labs.svc1.d":"Register-level firmware on AVR, STM32 and 8051. State machines, interrupts and peripherals tailored to the problem.",
    "labs.svc2.t":"Power electronics","labs.svc2.d":"DC-DC converters (boost, flyback), battery chargers and CC/CV control. The loop is analyzed, not tuned blindly.",
    "labs.svc3.t":"PCB design","labs.svc3.d":"From schematic to manufacturable board: routing, signal integrity and design for home or professional fabrication.",
    "labs.svc4.t":"Local AI & automation","labs.svc4.d":"Agents and workflows with local models (Ollama / Qwen) to automate tasks without relying on the cloud.",
    "labs.cap.eyebrow":"Stack","labs.cap.h2":"Capabilities",
    "labs.spec1.k":"Microcontrollers","labs.spec2.k":"Power","labs.spec3.k":"Sensing","labs.spec4.k":"Tools",
    "labs.spec5.k":"Safety","labs.spec5.v":"Watchdog · BKIN · optical isolation","labs.spec6.k":"Fabrication","labs.spec6.v":"2-layer PCB · SMD / TQFP",
    "labs.work.eyebrow":"Work","labs.work.h2":"Labs projects",
    "labs.card1.ph":"Hardware · Firmware","labs.card1.t":"Reflow controller","labs.card1.d":"A clothes iron turned into a reflow hotplate with PID control, K-type thermocouple (MAX6675), encoder and PWM over an isolated DC bus.",
    "labs.card2.ph":"Power electronics","labs.card2.t":"14S lithium charger","labs.card2.d":"STM32-controlled boost stage with a CC/CV loop and anti-windup, powered by an isolated flyback supply.",
    "labs.card3.ph":"Audio · Analysis","labs.card3.t":"2.1 system — crossover","labs.card3.d":"Design and diagnosis of a 2.1 system crossover: impedance, real cutoff frequency and distortion correction.",
    "labs.cta.h2":"Need a custom board or firmware?","labs.cta.p":"Quotes in MXN. Tell me the requirements.",
    // STUDIO
    "studio.h1":"Where the signal becomes a story.",
    "studio.lead":"Audiovisual production, identity and creative direction. The same rigor as Labs, in service of image, rhythm and message.",
    "studio.svc.eyebrow":"What I do","studio.svc.h2":"Creative services","studio.svc.p":"From idea to finished piece, with a consistent, distinctive aesthetic.",
    "studio.svc1.t":"Audiovisual production","studio.svc1.d":"Video, direction and post-production for brands and projects that need to tell something clearly.",
    "studio.svc2.t":"Brand identity","studio.svc2.d":"Complete visual systems: logo, palette, typography and the rules that keep them coherent.",
    "studio.svc3.t":"Motion & post-production","studio.svc3.d":"Animation, motion graphics and editing that give the image rhythm and energy.",
    "studio.svc4.t":"Creative direction","studio.svc4.d":"Concept and direction end to end, aligning aesthetics and message in every decision.",
    "studio.work.eyebrow":"Work","studio.work.h2":"Studio selection","studio.work.p":"Illustration, character design and event graphics.",
    "studio.card1.ph":"Brand identity","studio.card1.t":"Clover Y5 visual system","studio.card1.d":"The identity of the root brand and its two sub-brands, including this site and its characters.","studio.card1.m":"Characters",
    "studio.cardfree.ph":"Open slot","studio.cardnext.t":"Your next piece",
    "studio.card2.d":"Reserved space for an audiovisual project: cover, title and a one-line description.",
    "studio.card3.d":"Duplicate this block to add as many projects as you need.",
    "studio.cta.h2":"Got an idea to show?","studio.cta.p":"Quotes in MXN. Let's talk through the concept.",
    // PROYECTOS
    "proj.eyebrow":"Portfolio","proj.h1":"Projects","proj.lead":"Work from both disciplines. Filter by Labs (engineering) or Studio (creative).",
    "filter.all":"All",
    "proj.card5.d":"Reserved for an audiovisual project: cover, title and a one-line description.",
    "proj.cta.h2":"Could your project be here?","proj.cta.p":"Labs or Studio: tell me what you need.",
    // CONTACTO
    "contact.eyebrow":"Contact","contact.h1":"Let's talk about your project.","contact.lead":"Engineering or creative — write to me with what you have in mind and we'll shape it together.",
    "contact.form.h2":"Tell me","contact.form.name":"Name","contact.form.email":"Email","contact.form.area":"Which area?",
    "contact.opt.labs":"Labs — electronics engineering","contact.opt.studio":"Studio — community / collaboration","contact.opt.both":"Not sure / both",
    "contact.form.msg":"Message","contact.form.msg.ph":"Describe your project, scope and timeline…",
    "contact.email.h3":"Direct email","contact.email.general":"General",
    "contact.quote.h3":"Quotes","contact.quote.currency":"Currency","contact.quote.currencyv":"MXN · 16% VAT","contact.quote.base":"Based in","contact.quote.basev":"Mexico City","contact.quote.resp":"Response","contact.quote.respv":"24–48 business hours",
    "p.ebike.t":"E-bike batteries","p.ebike.d":"18650 pack assembly with spot welding, nickel and BMS balancing.",
    "p.bldc.t":"BLDC / PMSM controller repair","p.bldc.d":"Diagnosis and repair of brushless motor controllers.",
    "p.apfc.t":"APFC circuits","p.apfc.d":"Active power factor correction, verified on the scope.",
    "p.surge.t":"Surge protector repair","p.surge.d":"Diagnosis and repair of a surge protection device.",
    "p.esp32.t":"ESP32 DIY speaker","p.esp32.d":"Wireless audio prototype built around an ESP32.",
    "p.fiber.t":"Fiber optic technician","p.fiber.d":"Splicing and management of fiber optic closures.",
    "p.emctrl.t":"Emergency power — control","p.emctrl.d":"Generator control and three-phase voltage monitoring.",
    "p.emconn.t":"Emergency power — connections","p.emconn.d":"Phased cam-lock power connections for generators.",
    "p.rect.t":"Protection coordination — rectifier","p.rect.d":"DC rectifier and alarm system for backup power.",
    "p.subst.t":"Protection coordination — substation","p.subst.d":"112.5 kVA substation and coordination study.",
    "p.resi.t":"Residential installations","p.resi.d":"Load centers, breakers and residential wiring.",
    "p.dcsys.t":"DC system deployment","p.dcsys.d":"Stationary battery banks for backup DC systems.",
    "p.portrait.t":"Portrait — Clover","p.portrait.d":"Character illustration in the Clover Y5 style.",
    "p.costume.t":"Character design — costume","p.costume.d":"Costume and pose exploration for the mascot.",
    "p.sketch.t":"Animation sketches","p.sketch.d":"Rough keyframes and poses for animation tests.",
    "p.muertos.t":"Día de Muertos illustration","p.muertos.d":"Papel picado design for a Day of the Dead event.",
    "p.anim.t":"Animation test","p.anim.d":"Short looping animation test.",
    "studio.anim.eyebrow":"Animation","studio.anim.h2":"Animation tests","studio.anim.p":"Short, frame-by-frame loops.",
    "btn.story":"Read the story",
    "studio.comm.h2":"Want to follow the project?","studio.comm.p":"Studio is a space to chat, share feedback and stay close to the community — no quotes, just creativity.",
    "lore.eyebrow":"Clover Story & Lore","lore.h2":"Clover's story","lore.p":"The universe behind the character: his world, his cast and a story that will grow over time.",
    "lore.keyart":"Key art",
    "lore.sum.h3":"Summary","lore.sum.p":"[Space for a short summary of Clover's story: who he is, where he comes from and what drives him — the lore's elevator pitch.]",
    "lore.cast.h3":"Characters","lore.cast.p":"Details of every character that appears in the story.",
    "lore.char.ph":"Character image",
    "lore.char1.t":"Clover","lore.char1.d":"[Protagonist. Role, personality and key traits.]",
    "lore.char.t":"Character","lore.char.d":"[Name, role and relationship to Clover.]",
    "lore.story.h3":"Full story","lore.story.p":"Released chapter by chapter — it will grow over time.",
    "lore.ch1.t":"Chapter 1 — [title]","lore.ch1.d":"[The story begins here. Replace this block with the first chapter's text.]",
    "lore.chsoon.t":"Chapter — coming soon","lore.chsoon.d":"[Reserved space for the next chapter.]",
    "contact.comm.h3":"Community & social"
  };

  var origHTML = new Map(), origPH = new Map(), origAria = new Map();
  function apply(lang){
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var k = el.getAttribute('data-i18n');
      if(!origHTML.has(el)) origHTML.set(el, el.innerHTML);
      el.innerHTML = (lang==='en' && EN[k]!=null) ? EN[k] : origHTML.get(el);
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function(el){
      var k = el.getAttribute('data-i18n-ph');
      if(!origPH.has(el)) origPH.set(el, el.getAttribute('placeholder')||'');
      el.setAttribute('placeholder', (lang==='en' && EN[k]!=null) ? EN[k] : origPH.get(el));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el){
      var k = el.getAttribute('data-i18n-aria');
      if(!origAria.has(el)) origAria.set(el, el.getAttribute('aria-label')||'');
      el.setAttribute('aria-label', (lang==='en' && EN[k]!=null) ? EN[k] : origAria.get(el));
    });
    document.querySelectorAll('.lang-btn').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-lang')===lang); });
    try{ localStorage.setItem('cy5_lang', lang); }catch(e){}
  }

  var saved = 'es';
  try{ saved = localStorage.getItem('cy5_lang') || 'es'; }catch(e){}
  document.querySelectorAll('.lang-btn').forEach(function(b){
    b.addEventListener('click', function(){ apply(b.getAttribute('data-lang')); });
  });
  apply(saved);
})();
