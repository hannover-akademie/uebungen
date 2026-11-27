/* Hannover Sprachakademie – Einstufungstest
   Ablauf: Start → Stufe A1 … C1 (Lesen, Hören, Sprachbausteine; weiter nur bei ≥ 60 %) → Schreiben → Ergebnis
   Hören: Sprachausgabe des Browsers (deutsche Stimme), höchstens 2× pro Text.
   Schreiben: Korrektur durch KI über die Apps-Script-Web-App (action: 'korrektur'), Text geht zusätzlich an die Lehrkraft. */
(function () {
  'use strict';
  var CFG = window.HA_CONFIG || {};
  var E = window.EINSTUFUNG;
  var app = document.getElementById('app');
  var KEY = 'ha_einstufung_v1';
  var LV = E.stufen.map(function (s) { return s.niveau; });
  var state = load() || neu();

  function neu() { return { phase: 'start', name: '', tel: '', start: 0, stufe: 0, answers: {}, scores: [], plays: {}, texts: {}, korr: {}, result: null }; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function load() { try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && s.phase) return s; } catch (e) {} return null; }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function words(s) { s = String(s || '').trim(); return s ? s.split(/\s+/).length : 0; }
  function top() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function maxOf(st) { var n = 0; st.teile.forEach(function (t) { n += t.items.length; }); return n; }
  function need(st, f) { return Math.ceil(maxOf(st) * f - 1e-9); }

  function progress(txt, pct) {
    var p = document.getElementById('progress'); p.hidden = false;
    document.getElementById('bar').style.width = pct + '%';
    document.getElementById('ptext').textContent = txt;
  }

  // ------------------------------------------------------------ Start
  function renderStart() {
    stopAudio();
    app.innerHTML = '';
    var c = el('section', 'card start');
    c.appendChild(el('p', 'sub', 'Hannover Sprachakademie'));
    c.appendChild(el('h1', null, 'Einstufungstest Deutsch'));
    c.appendChild(el('p', 'ar', 'اختبار تحديد المستوى في اللغة الألمانية (من A1 إلى C1)'));
    var info = el('div', 'lesetext einst-info');
    info.textContent = 'So funktioniert der Test:\n' +
      '1. Der Test beginnt leicht (A1) und wird Stufe für Stufe schwerer – bis C1.\n' +
      '2. Jede Stufe hat drei Teile: Lesen, Hören und Wortschatz/Grammatik.\n' +
      '3. Wenn eine Stufe zu schwer ist, endet dieser Teil automatisch. Das ist ganz normal!\n' +
      '4. Danach schreiben Sie einen oder mehrere kurze Texte.\n' +
      '5. Am Ende sehen Sie Ihr Niveau und den passenden Kurs.\n' +
      'Dauer: ca. 20–60 Minuten. Bitte benutzen Sie keine Hilfsmittel (Wörterbuch, Übersetzer).';
    c.appendChild(info);
    c.appendChild(el('p', 'ar', 'يبدأ الاختبار سهلًا (A1) ثم يزداد صعوبة مرحلةً بعد مرحلة حتى C1. في كل مرحلة: قراءة واستماع ومفردات وقواعد. إذا كانت المرحلة صعبة عليك ينتهي هذا الجزء تلقائيًا، وهذا أمر طبيعي. بعد ذلك تكتب نصًّا قصيرًا أو أكثر، ثم تظهر لك نتيجتك والدورة المناسبة لك. المدة: من 20 إلى 60 دقيقة تقريبًا. أجب وحدك من دون قاموس أو مترجم، لتكون النتيجة دقيقة.'));
    c.appendChild(el('p', 'ar', '🎧 في جزء الاستماع يُقرأ النص بصوت ألماني من جهازك، فشغّل الصوت أو استخدم السمّاعات.'));
    c.appendChild(el('p', null, 'Ihr vollständiger Name:'));
    var inp = el('input'); inp.type = 'text'; inp.placeholder = 'Vorname Nachname'; inp.autocomplete = 'name'; inp.value = state.name || '';
    c.appendChild(inp);
    c.appendChild(el('p', null, 'Ihre Telefonnummer / WhatsApp (freiwillig):'));
    var tel = el('input'); tel.type = 'text'; tel.placeholder = 'z. B. 0176 12345678'; tel.autocomplete = 'tel'; tel.inputMode = 'tel'; tel.value = state.tel || '';
    c.appendChild(tel);
    c.appendChild(el('p', 'ar', 'رقم الهاتف اختياري، ويساعد المحاضر على التواصل معك بشأن الدورة.'));
    var err = el('p', 'err'); c.appendChild(err);
    var row = el('div', 'row'); var b = el('button', 'btn gold', 'Test starten'); row.appendChild(b); c.appendChild(row);
    b.onclick = function () {
      var n = inp.value.replace(/\s+/g, ' ').trim();
      if (n.length < 3 || n.indexOf(' ') < 0) { err.textContent = 'Bitte Vor- und Nachnamen schreiben. · اكتب الاسم الأول واسم العائلة.'; return; }
      state = neu(); state.name = n; state.tel = tel.value.replace(/[^\d+ ]/g, '').trim().slice(0, 25);
      state.phase = 'test'; state.start = Date.now(); save(); renderStufe();
    };
    app.appendChild(c);
  }

  // ------------------------------------------------------------ Stufe
  function qid(si, ti, ii) { return si + '.' + ti + '.' + ii; }

  function renderStufe() {
    stopAudio();
    var si = state.stufe, st = E.stufen[si];
    progress('Stufe ' + (si + 1) + ' / ' + E.stufen.length, Math.round(si / E.stufen.length * 100));
    app.innerHTML = '';
    var head = el('section', 'card');
    head.appendChild(el('h2', null, 'Stufe ' + (si + 1) + ' von ' + E.stufen.length));
    head.appendChild(el('p', null, 'Name: ' + state.name));
    head.appendChild(el('p', 'ar', 'المرحلة ' + (si + 1) + ' من ' + E.stufen.length + ' — أجب عن جميع الأسئلة، ثم اضغط على «Weiter».'));
    app.appendChild(head);

    st.teile.forEach(function (t, ti) {
      var c = el('section', 'card teil');
      var h = el('h2'); h.appendChild(el('span', 'badge', t.bereich)); h.appendChild(document.createTextNode(' ' + t.titel)); c.appendChild(h);
      c.appendChild(el('p', 'anw', t.anweisung));
      c.appendChild(el('p', 'ar anw-ar', t.anweisungAr));
      if (t.text) c.appendChild(el('div', 'lesetext', t.text));
      if (t.lines) c.appendChild(player(si, ti, t));
      t.items.forEach(function (it, ii) {
        var id = qid(si, ti, ii);
        var box = el('div', 'item');
        var q = el('div', 'q'); q.appendChild(el('span', 'num', (ii + 1) + '.')); q.appendChild(document.createTextNode(it.q)); box.appendChild(q);
        var opts = t.typ === 'tf' ? ['Richtig', 'Falsch'] : (it._o || (it._o = shuffle(it.o)));
        var wrap = el('div', 'opts');
        opts.forEach(function (o) {
          var lab = el('label', 'opt'); var r = el('input'); r.type = 'radio'; r.name = 'r' + id; r.value = o;
          if (state.answers[id] === o) r.checked = true;
          r.onchange = function () { state.answers[id] = o; save(); };
          lab.appendChild(r); lab.appendChild(el('span', null, o)); wrap.appendChild(lab);
        });
        box.appendChild(wrap); c.appendChild(box);
      });
      app.appendChild(c);
    });

    var bar = el('div', 'submit-bar');
    var b = el('button', 'btn gold', si < E.stufen.length - 1 ? 'Weiter →' : 'Weiter zum Schreiben →');
    b.onclick = function () { weiter(si); };
    bar.appendChild(b);
    app.appendChild(bar);
    top();
  }

  function weiter(si) {
    var st = E.stufen[si], offen = 0;
    st.teile.forEach(function (t, ti) { t.items.forEach(function (it, ii) { if (!state.answers[qid(si, ti, ii)]) offen++; }); });
    if (offen && !confirm(offen + ' Aufgabe(n) sind noch offen. Trotzdem weiter?\n\nما زال ' + offen + ' سؤالًا دون إجابة. هل تريد المتابعة؟')) return;
    var p = 0, teil = {};
    st.teile.forEach(function (t, ti) {
      var tp = 0;
      t.items.forEach(function (it, ii) {
        var v = state.answers[qid(si, ti, ii)];
        var ok = t.typ === 'tf' ? v === (it.a ? 'Richtig' : 'Falsch') : v === it.a;
        if (ok) { p++; tp++; }
      });
      teil[t.bereich] = { p: tp, max: t.items.length };
    });
    state.scores[si] = { niveau: st.niveau, p: p, max: maxOf(st), teil: teil };
    if (p >= need(st, E.bestehen) && si < E.stufen.length - 1) { state.stufe = si + 1; save(); renderStufe(); return; }
    state.phase = 'schreiben'; save(); renderSchreiben();
  }

  // ------------------------------------------------------------ Hören (Sprachausgabe)
  var synth = window.speechSynthesis;
  function deVoices() { if (!synth) return []; return synth.getVoices().filter(function (v) { return /^de([-_]|$)/i.test(v.lang); }); }
  function rank(v) { var n = v.name; return (/natural|online|neural|premium|enhanced/i.test(n) ? 0 : 1) + (/de[-_]DE/i.test(v.lang) ? 0 : 0.5); }
  function pickVoices() {
    var vs = deVoices().sort(function (a, b) { return rank(a) - rank(b); });
    if (!vs.length) return null;
    var W = /katja|hedda|anna|petra|helena|marlene|vicki|amala|seraphina|elke|gisela|louisa|maja|tanja|ingrid|klara|female|weiblich|google deutsch/i;
    var M = /stefan|conrad|markus|yannick|hans|killian|florian|ralf|bernd|kasper|viktor|christoph|male|männlich/i;
    var w = vs.filter(function (v) { return W.test(v.name); })[0] || vs[0];
    var m = vs.filter(function (v) { return M.test(v.name) && v !== w; })[0] || null;
    return { w: { v: w, pitch: 1.05 }, m: m ? { v: m, pitch: 1 } : { v: w, pitch: 0.75 } };
  }
  function stopAudio() { try { if (synth) synth.cancel(); } catch (e) {} }
  function sentences(t) { return String(t).match(/[^.!?…:]+[.!?…:]*\s*/g) || [t]; }

  function player(si, ti, t) {
    var pid = si + '.' + ti, MAX = 2;
    var box = el('div', 'player');
    var btn = el('button', 'btn', ''); btn.type = 'button';
    var info = el('span', 'player-info');
    var note = el('div', 'ar player-note');
    box.appendChild(btn); box.appendChild(info); box.appendChild(note);
    function used() { return state.plays[pid] || 0; }
    function label(playing) {
      var rest = MAX - used();
      btn.disabled = playing || rest <= 0;
      btn.textContent = playing ? '🔊 Läuft …' : (rest > 0 ? '▶ Abspielen' : '✓ Gehört');
      info.textContent = playing ? '' : (rest > 0 ? 'noch ' + rest + '× · متبقٍّ ' + (rest === 2 ? 'مرتان' : 'مرة واحدة') : 'Keine Wiederholung mehr · انتهى عدد مرات الاستماع');
    }
    function noVoice() {
      note.textContent = 'لا يتوفر على جهازك صوت ألماني. جرّب متصفح Chrome أو Edge، أو افتح الاختبار من الهاتف. إذا لم يكن ذلك ممكنًا، فاضغط على الزر لقراءة النص بدلًا من سماعه.';
      var show = el('button', 'small-btn', 'Text anzeigen · اعرض النص'); show.type = 'button';
      show.onclick = function () {
        var tx = el('div', 'lesetext'); tx.textContent = t.lines.map(function (l) { return (t.lines.length > 1 ? (l.s === 'w' ? 'Frau: ' : 'Mann: ') : '') + l.t; }).join('\n');
        box.appendChild(tx); show.remove(); state.plays[pid] = MAX; state.ohneTon = true; save(); label(false);
      };
      note.appendChild(document.createElement('br')); note.appendChild(show);
    }
    btn.onclick = function () {
      if (!synth) { noVoice(); return; }
      var vo = pickVoices();
      if (!vo) { noVoice(); return; }
      stopAudio();
      state.plays[pid] = used() + 1; save();
      label(true);
      var queue = [];
      t.lines.forEach(function (l, li) {
        var sp = l.s === 'm' ? vo.m : vo.w;
        sentences(l.t).forEach(function (s) { queue.push({ text: s.trim(), sp: sp, pause: false }); });
        if (li < t.lines.length - 1) queue[queue.length - 1].pause = true;
      });
      var i = 0;
      (function next() {
        if (i >= queue.length) { label(false); return; }
        var q = queue[i++];
        var u = new SpeechSynthesisUtterance(q.text);
        u.lang = q.sp.v.lang; u.voice = q.sp.v; u.pitch = q.sp.pitch; u.rate = t.rate || 1;
        u.onend = function () { setTimeout(next, q.pause ? 450 : 60); };
        u.onerror = function () { setTimeout(next, 60); };
        synth.speak(u);
      })();
    };
    if (synth && !deVoices().length) { synth.onvoiceschanged = function () { label(false); }; }
    label(false);
    return box;
  }

  // ------------------------------------------------------------ Schreiben
  function bestanden() {
    var n = 0;
    for (var i = 0; i < state.scores.length; i++) { var s = state.scores[i]; if (s && s.p >= need(E.stufen[i], E.bestehen)) n++; else break; }
    return n;
  }
  function aufgaben() { var b = bestanden(); return E.schreiben.filter(function (w) { return b >= w.ab; }); }

  function renderSchreiben() {
    stopAudio();
    progress('Schreiben', 90);
    app.innerHTML = '';
    var head = el('section', 'card');
    head.appendChild(el('h2', null, 'Letzter Teil: Schreiben'));
    head.appendChild(el('p', null, 'Schreiben Sie so gut, wie Sie können. Wenn eine Aufgabe zu schwer ist, lassen Sie das Feld leer.'));
    head.appendChild(el('p', 'ar', 'الجزء الأخير: الكتابة. اكتب بأفضل ما تستطيع ومن دون مترجم. إذا كانت إحدى المهام صعبة عليك، فاترك خانتها فارغة. ستُصحَّح نصوصك فورًا، وتصل كذلك إلى المحاضر.'));
    app.appendChild(head);
    aufgaben().forEach(function (w, wi) {
      var c = el('section', 'card teil');
      var h = el('h2'); h.appendChild(el('span', 'badge', 'Schreiben')); h.appendChild(document.createTextNode(' ' + w.titel.replace(/^Schreiben \d+: /, ''))); c.appendChild(h);
      c.appendChild(el('div', 'lesetext', w.aufgabe));
      c.appendChild(el('p', 'ar anw-ar', w.aufgabeAr));
      var ta = el('textarea'); ta.value = state.texts[wi] || ''; ta.spellcheck = false;
      ta.setAttribute('autocorrect', 'off'); ta.setAttribute('autocapitalize', 'sentences');
      var wc = el('div', 'wc');
      function count() { wc.textContent = words(ta.value) + ' Wörter (Ziel: mindestens ' + w.min + ')'; }
      ta.oninput = function () { state.texts[wi] = ta.value; save(); count(); };
      ta.onpaste = function (e) { e.preventDefault(); };
      count(); c.appendChild(ta); c.appendChild(wc);
      app.appendChild(c);
    });
    var bar = el('div', 'submit-bar');
    var b = el('button', 'btn gold', 'Abgeben und Ergebnis sehen ✓');
    b.onclick = abgeben; bar.appendChild(b);
    bar.appendChild(el('p', 'ar', 'بعد الضغط لا يمكن تغيير الإجابات.'));
    app.appendChild(bar);
    top();
  }

  function abgeben() {
    var leer = aufgaben().filter(function (w, wi) { return words(state.texts[wi]) < 3; }).length;
    var msg = (leer ? leer + ' Text(e) sind leer. ' : '') + 'Jetzt abgeben?\n\n' + (leer ? 'هناك ' + leer + ' نص فارغ. ' : '') + 'هل تريد التسليم الآن؟';
    if (!confirm(msg)) return;
    state.phase = 'auswertung'; save();
    auswerten();
  }

  // ------------------------------------------------------------ Auswertung + KI-Korrektur
  function auswerten() {
    progress('Auswertung', 100);
    app.innerHTML = '';
    var c = el('section', 'card start');
    c.appendChild(el('h2', null, 'Ihre Texte werden korrigiert …'));
    c.appendChild(el('div', 'spinner'));
    c.appendChild(el('p', 'ar', 'جارٍ تصحيح نصوصك… قد يستغرق ذلك دقيقة واحدة. لا تغلق الصفحة.'));
    app.appendChild(c);
    var auf = aufgaben();
    var jobs = auf.map(function (w, wi) {
      var text = String(state.texts[wi] || '').trim();
      if (words(text) < 3) return Promise.resolve();
      if (state.korr[wi] && state.korr[wi].ok) return Promise.resolve();
      return korrigieren(w, text).then(function (k) { state.korr[wi] = k; save(); });
    });
    Promise.all(jobs).then(fertig, fertig);
  }

  function korrigieren(w, text) {
    if (!CFG.apiUrl) return Promise.resolve({ ok: false, message: 'offline' });
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 120000);
    return fetch(CFG.apiUrl, { method: 'POST', body: JSON.stringify({ action: 'korrektur', aufgabe: w.aufgabe, ziel: w.ziel, text: text }), signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) { return r.json(); })
      .then(function (j) { clearTimeout(timer); return j && j.ok && j.k ? { ok: true, k: j.k } : { ok: false, message: (j && j.message) || 'Fehler' }; })
      .catch(function () { clearTimeout(timer); return { ok: false, message: 'Netzwerk' }; });
  }

  function ergebnis() {
    var b = bestanden(), n = E.stufen.length;
    var niveau = b === 0 ? 'unter A1' : LV[b - 1];
    var kurs, kursAr, code;
    if (b >= n) { code = 'C1+'; kurs = 'C1+ (Prüfungsvorbereitung C1 / C2)'; kursAr = 'دورة تحضيرية لامتحان C1 أو دورة C2'; }
    else {
      var s = state.scores[b];
      var sub = s && s.p >= need(E.stufen[b], E.teilweise) ? '.2' : '.1';
      code = kurs = LV[b] + sub; kursAr = 'دورة ' + LV[b] + sub;
    }
    var sum = { Lesen: [0, 0], Hören: [0, 0], Sprache: [0, 0] }, p = 0, max = 0;
    state.scores.forEach(function (s) {
      if (!s) return; p += s.p; max += s.max;
      Object.keys(s.teil).forEach(function (k) { sum[k][0] += s.teil[k].p; sum[k][1] += s.teil[k].max; });
    });
    return { niveau: niveau, kurs: kurs, code: code, kursAr: kursAr, bestanden: b, punkte: p, max: max, sum: sum };
  }

  function fertig() {
    var r = ergebnis();
    if (!state.result) { r.zeit = new Date().toISOString(); r.dauerMin = Math.round((Date.now() - state.start) / 60000); r.gesendet = false; state.result = r; }
    else { r.zeit = state.result.zeit; r.dauerMin = state.result.dauerMin; r.gesendet = state.result.gesendet; state.result = r; }
    state.phase = 'fertig'; save();
    renderErgebnis();
    if (!state.result.gesendet) senden();
  }

  // ------------------------------------------------------------ Ergebnis
  var LV_AR = { 'unter A1': 'مبتدئ (لم تبلغ A1 بعد)', A1: 'A1 (مبتدئ)', A2: 'A2 (أساسي)', B1: 'B1 (متوسط)', B2: 'B2 (فوق المتوسط)', C1: 'C1 (متقدم)' };

  function renderErgebnis() {
    stopAudio();
    var r = state.result;
    progress('Fertig', 100);
    app.innerHTML = '';
    var c = el('section', 'card result');
    c.appendChild(el('p', 'sub', state.name));
    c.appendChild(el('h2', null, 'Ihr Ergebnis'));
    var lv = el('div', 'lvl-box');
    var a = el('div', 'lvl'); a.appendChild(el('small', null, 'Ihr Niveau · مستواك')); a.appendChild(el('strong', null, r.niveau)); a.appendChild(el('span', 'ar', LV_AR[r.niveau] || ''));
    var k = el('div', 'lvl gold'); k.appendChild(el('small', null, 'Empfohlener Kurs · الدورة المناسبة')); k.appendChild(el('strong', null, r.kurs)); k.appendChild(el('span', 'ar', r.kursAr));
    lv.appendChild(a); lv.appendChild(k); c.appendChild(lv);

    var tab = el('div', 'stufen');
    E.stufen.forEach(function (st, i) {
      var s = state.scores[i];
      var row = el('div', 'stufe-row');
      row.appendChild(el('span', 'st-n', st.niveau));
      var barw = el('div', 'st-bar'); var fill = el('span');
      var pct = s ? Math.round(s.p / s.max * 100) : 0; fill.style.width = pct + '%';
      if (s) fill.className = s.p >= need(st, E.bestehen) ? 'ok' : 'bad';
      barw.appendChild(fill); row.appendChild(barw);
      row.appendChild(el('span', 'st-p', s ? s.p + ' / ' + s.max : '–'));
      tab.appendChild(row);
    });
    c.appendChild(tab);
    var parts = el('p', 'teile-sum');
    parts.textContent = ['Lesen', 'Hören', 'Sprache'].map(function (k2) { var x = r.sum[k2]; return (k2 === 'Sprache' ? 'Wortschatz & Grammatik' : k2) + ': ' + x[0] + '/' + x[1]; }).join('  ·  ');
    c.appendChild(parts);
    c.appendChild(el('p', 'ar', 'المستوى محسوب من أجزاء القراءة والاستماع والمفردات والقواعد. أما الكتابة فتجد تقييمها وتصحيحها في الأسفل، ويراجعها المحاضر أيضًا. الدورة المقترحة توصية أولية، يناقشها المحاضر معك عند التسجيل.'));

    // Anmeldung
    var reg = el('div', 'anmelden');
    reg.appendChild(el('h3', null, 'Jetzt für den Kurs anmelden'));
    reg.appendChild(el('p', 'ar', 'هل تريد التسجيل في الدورة المناسبة لمستواك؟ اضغط على الزر، وأرسل الرسالة الجاهزة إلى المحاضر عبر واتساب.'));
    if (CFG.whatsapp) {
      var txt = 'Hallo! Ich bin ' + state.name + '. Ich habe den Einstufungstest gemacht.\n' +
        'Mein Niveau: ' + r.niveau + '\nEmpfohlener Kurs: ' + r.kurs + '\n' +
        'Ich möchte mich gern für einen Deutschkurs anmelden.\n\n' +
        'مرحبًا، أنا ' + state.name + '. أنهيتُ اختبار تحديد المستوى، وأرغب في التسجيل في دورة اللغة الألمانية.';
      var wa = el('a', 'btn wa', '💬 Anmelden per WhatsApp');
      wa.href = 'https://wa.me/' + String(CFG.whatsapp).replace(/\D/g, '') + '?text=' + encodeURIComponent(txt);
      wa.target = '_blank'; wa.rel = 'noopener';
      reg.appendChild(wa);
    }
    if (CFG.anmeldeUrl) { var f = el('a', 'btn ghost', 'Anmeldeformular öffnen'); f.href = CFG.anmeldeUrl; f.target = '_blank'; f.rel = 'noopener'; reg.appendChild(f); }
    c.appendChild(reg);
    var st = el('div', 'send'); st.id = 'sendstate'; c.appendChild(st);
    app.appendChild(c);

    // Schreiben: Korrektur
    aufgaben().forEach(function (w, wi) {
      var text = String(state.texts[wi] || '').trim();
      var s = el('section', 'card teil');
      var h = el('h2'); h.appendChild(el('span', 'badge', 'Schreiben')); h.appendChild(document.createTextNode(' ' + w.titel.replace(/^Schreiben \d+: /, ''))); s.appendChild(h);
      if (words(text) < 3) { s.appendChild(el('p', 'ar', 'لم تكتب نصًّا في هذه المهمة.')); app.appendChild(s); return; }
      s.appendChild(el('p', 'anw', 'Ihr Text:'));
      s.appendChild(el('div', 'lesetext', text));
      var kk = state.korr[wi];
      if (!kk || !kk.ok) {
        s.appendChild(el('p', 'ar', 'لم يتوفر التصحيح الفوري الآن. سيصحّح المحاضر نصك بنفسه، فقد وصله.'));
        if (CFG.apiUrl) { var again = el('button', 'small-btn', 'Korrektur erneut versuchen · أعد محاولة التصحيح'); again.onclick = function () { state.phase = 'auswertung'; save(); auswerten(); }; s.appendChild(again); }
        app.appendChild(s); return;
      }
      var K = kk.k;
      var lvl = el('div', 'korr-lvl'); lvl.appendChild(el('span', null, 'Niveau dieses Textes (KI-Einschätzung): ')); lvl.appendChild(el('strong', null, K.niveau || '–')); s.appendChild(lvl);
      if (K.begruendung_ar) s.appendChild(el('p', 'ar', K.begruendung_ar));
      if (K.lob_ar) s.appendChild(el('p', 'ar korr-lob', '👍 ' + K.lob_ar));
      var fl = Array.isArray(K.fehler) ? K.fehler : [];
      if (fl.length) {
        s.appendChild(el('p', 'anw', 'Fehler und Korrekturen · الأخطاء وتصحيحها'));
        var ul = el('ul', 'korr-list');
        fl.forEach(function (f) {
          var li = el('li');
          var l1 = el('div'); l1.appendChild(el('del', null, f.falsch || '')); l1.appendChild(document.createTextNode(' → ')); l1.appendChild(el('ins', null, f.richtig || ''));
          li.appendChild(l1);
          if (f.erklaerung_ar) li.appendChild(el('div', 'ar', f.erklaerung_ar));
          ul.appendChild(li);
        });
        s.appendChild(ul);
      } else { s.appendChild(el('p', 'korr-lob', '✓ Keine Fehler gefunden. · لم يُعثر على أخطاء.')); }
      if (K.korrigiert) { s.appendChild(el('p', 'anw', 'Korrigierte Fassung · النص بعد التصحيح')); s.appendChild(el('div', 'muster', K.korrigiert)); }
      if (K.tipp_ar) s.appendChild(el('p', 'ar', '💡 ' + K.tipp_ar));
      s.appendChild(el('p', 'wc', 'Die Korrektur wurde automatisch von einer KI erstellt und kann Fehler enthalten. Ihre Lehrkraft sieht Ihren Text ebenfalls. · هذا التصحيح آلي وقد يحتوي على أخطاء، والمحاضر يطّلع على نصك أيضًا.'));
      app.appendChild(s);
    });

    var end = el('div', 'row');
    var home = el('a', 'btn ghost', 'Zur Startseite'); home.href = 'index.html';
    var re = el('button', 'small-btn', 'Test neu beginnen'); re.onclick = function () {
      if (!confirm('Den Test wirklich neu beginnen? Ihr Ergebnis wird auf diesem Gerät gelöscht.\nهل تريد فعلًا بدء الاختبار من جديد؟')) return;
      state = neu(); save(); renderStart();
    };
    end.appendChild(home); end.appendChild(re); app.appendChild(end);
    setSendState();
    top();
  }

  // ------------------------------------------------------------ Senden an die Lehrkraft
  function setSendState() {
    var st = document.getElementById('sendstate'); if (!st) return;
    var r = state.result;
    if (!CFG.apiUrl) { st.className = 'send wait'; st.textContent = ''; return; }
    if (r.gesendet) { st.className = 'send ok'; st.textContent = '✓ Ihr Ergebnis wurde an die Akademie gesendet. · أُرسلت نتيجتك إلى الأكاديمية.'; return; }
    st.className = 'send bad'; st.textContent = 'Noch nicht gesendet. ';
    var b = el('button', 'small-btn', 'Erneut senden · أعد الإرسال'); b.onclick = senden; st.appendChild(b);
  }

  function senden() {
    if (!CFG.apiUrl) return;
    var r = state.result;
    var st = document.getElementById('sendstate'); if (st) { st.className = 'send wait'; st.textContent = 'Wird gesendet … · جاري الإرسال…'; }
    var stufen = state.scores.map(function (s) { return s.niveau + ': ' + s.p + '/' + s.max; }).join(' · ');
    var teile = ['Lesen', 'Hören', 'Sprache'].map(function (k) { return k + ' ' + r.sum[k][0] + '/' + r.sum[k][1]; }).join(' · ');
    var auf = aufgaben();
    var frei = auf.map(function (w, wi) {
      var t = String(state.texts[wi] || '').trim(); var kk = state.korr[wi];
      return w.titel + (kk && kk.ok ? ' [KI: ' + (kk.k.niveau || '?') + ']' : '') + ':\n' + (t || '(leer)');
    }).join('\n\n');
    var payload = {
      akademie: CFG.akademie, kurs: 'Einstufungstest', kapitel: r.code, titel: 'Niveau: ' + r.niveau + ' → Kurs ' + r.code,
      name: state.name + (state.tel ? ' · Tel. ' + state.tel : ''),
      punkte: r.punkte, max: r.max, prozent: r.max ? Math.round(r.punkte / r.max * 100) : 0, dauerMin: r.dauerMin, zeit: r.zeit,
      fehler: 'Stufen: ' + stufen + '\nTeile: ' + teile + (state.ohneTon ? '\nHinweis: Hörtexte ohne Ton (Text gelesen).' : ''),
      freitext: frei
    };
    fetch(CFG.apiUrl, { method: 'POST', body: JSON.stringify(payload) })
      .then(function (x) { return x.json(); })
      .then(function (j) { r.gesendet = !!(j && j.ok); save(); setSendState(); })
      .catch(function () { r.gesendet = false; save(); setSendState(); });
  }

  // ------------------------------------------------------------ Start
  if (!E) { app.textContent = 'Fehler: Testdaten fehlen.'; return; }
  if (state.phase === 'test') renderStufe();
  else if (state.phase === 'schreiben') renderSchreiben();
  else if (state.phase === 'auswertung') auswerten();
  else if (state.phase === 'fertig' && state.result) renderErgebnis();
  else renderStart();
  window.addEventListener('pagehide', stopAudio);
})();
