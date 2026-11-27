/* Hannover Sprachakademie – Übungsseite
   Typen: mcq, tf, select, gap, match, order, words, write (ein Item darf mit typ den Typ des Teils überschreiben)
   Daten: data/<kurs>/k<n>.js setzt window.UEBUNG
   Hören: data/<kurs>/hoeren.js setzt window.HOEREN = { k1: [Teile], …, final: [Teile] }; die Teile werden vor dem Schreiben eingefügt */
(function () {
  'use strict';
  var CFG = window.HA_CONFIG || {};
  var params = new URLSearchParams(location.search);
  var kursId = (params.get('kurs') || 'a1').replace(/[^a-z0-9]/gi, '');
  var kRaw = String(params.get('k') || '1').toLowerCase();
  var kapNr = kRaw === 'final' ? 'final' : (parseInt(kRaw, 10) || 1);   // 'final' = Abschlusstest des Niveaus
  var app = document.getElementById('app');
  var U = null;               // Übungsdaten
  var state = { name: '', answers: {}, start: Date.now(), submitted: false };
  var KEY = 'ha_' + kursId + '_k' + kapNr;

  // ---------- Hilfen ----------
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function norm(s) { return String(s == null ? '' : s).replace(/[’']/g, "'").replace(/\s+/g, ' ').replace(/\s*([.,!?])\s*$/, '$1').trim().toLowerCase(); }
  function fold(s) { return norm(s).replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim(); }
  function normLoose(s) { return norm(s).replace(/[.,!?]+$/, ''); }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function load() { try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && typeof s === 'object') return s; } catch (e) {} return null; }
  function qid(t, i) { return t + '.' + i; }

  // ---------- Daten laden ----------
  function loadScript(src, ok, bad) { var s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = bad; document.body.appendChild(s); }
  loadScript('data/' + kursId + '/' + (kapNr === 'final' ? 'final' : 'k' + kapNr) + '.js', function () {
    U = window.UEBUNG; if (!U) return fail();
    // Hören-Teile des Niveaus (data/<kurs>/hoeren.js) werden vor dem Schreiben eingefügt
    loadScript('data/' + kursId + '/hoeren.js', function () { addHoeren(); init(); }, init);
  }, fail);
  function addHoeren() {
    var H = window.HOEREN, key = kapNr === 'final' ? 'final' : 'k' + kapNr;
    if (!H || !H[key] || U._hoeren) return;
    var pos = -1;
    U.teile.forEach(function (t, i) { if (pos < 0 && /Schreiben/.test((t.teil || '') + ' ' + t.titel)) pos = i; });
    if (pos < 0) pos = U.teile.length;
    Array.prototype.splice.apply(U.teile, [pos, 0].concat(H[key]));
    U._hoeren = true;
  }
  function fail() { app.innerHTML = ''; var c = el('div', 'card'); c.appendChild(el('h2', null, 'Diese Übung gibt es noch nicht.')); c.appendChild(el('p', 'ar', 'هذا التمرين غير متاح بعد.')); var a = el('a', 'btn', 'Zur Startseite'); a.href = 'index.html'; c.appendChild(a); app.appendChild(c); }

  function label() { return U.label || ('Kapitel ' + U.kapitel); }
  function full() { return U.label ? U.label + ': ' + U.titel : 'Kapitel ' + U.kapitel + ': ' + U.titel; }
  function totalItems() { var n = 0; U.teile.forEach(function (t) { n += t.items.length; }); return n; }

  // ---------- Start ----------
  function init() {
    if (U._hoeren) KEY += '_h';   // neue Fassung mit Hören: alte Entwürfe passen nicht mehr
    document.getElementById('kursname').textContent = U.kurs + ' · ' + label();
    document.title = 'Hannover Sprachakademie – ' + U.kurs + ' ' + label();
    var old = load();
    if (old && old.name) { state = old; }
    if (state.submitted) { renderExercises(); showResult(state.result, true); return; }
    if (state.name) { renderExercises(); return; }
    renderStart();
  }

  function renderStart() {
    app.innerHTML = '';
    var c = el('section', 'card start');
    c.appendChild(el('p', 'sub', U.kurs));
    c.appendChild(el('h1', null, full()));
    c.appendChild(el('p', 'ar', U.titelAr ? U.titelAr + ' — ' + totalItems() + ' سؤال' : ''));
    if (U.hinweis) c.appendChild(el('p', 'lesetext', U.hinweis));
    if (U.hinweisAr) c.appendChild(el('p', 'ar', U.hinweisAr));
    c.appendChild(el('p', null, 'Bitte schreiben Sie Ihren vollen Namen:'));
    c.appendChild(el('p', 'ar', 'اكتب اسمك الكامل ليتعرّف المحاضر على إجاباتك:'));
    var inp = el('input'); inp.type = 'text'; inp.placeholder = 'Vorname Nachname'; inp.autocomplete = 'name';
    c.appendChild(inp);
    var err = el('p', 'err');
    c.appendChild(err);
    var row = el('div', 'row'); var b = el('button', 'btn gold', 'Los geht\'s!'); row.appendChild(b); c.appendChild(row);
    function go() {
      var n = inp.value.replace(/\s+/g, ' ').trim();
      if (n.length < 3 || n.indexOf(' ') < 0) { err.textContent = 'Bitte Vor- und Nachnamen schreiben. · اكتب الاسم الأول واسم العائلة.'; return; }
      state.name = n; state.start = Date.now(); save(); renderExercises();
    }
    b.onclick = go; inp.onkeydown = function (e) { if (e.key === 'Enter') go(); };
    app.appendChild(c); inp.focus();
  }

  // ---------- Übungen ----------
  var renderers = {};

  function renderExercises() {
    stopAudio();
    app.innerHTML = '';
    var head = el('section', 'card');
    head.appendChild(el('h2', null, full()));
    head.appendChild(el('p', null, 'Name: ' + state.name));
    if (!state.submitted) {
      var ch = el('button', 'small-btn', 'Name ändern'); ch.onclick = function () { state.name = ''; save(); renderStart(); }; head.appendChild(ch);
    }
    app.appendChild(head);

    U.teile.forEach(function (t, ti) {
      var c = el('section', 'card teil'); c.id = 'teil-' + ti;
      var h = el('h2'); h.appendChild(el('span', 'badge', (t.teil || ('Übung ' + (ti + 1))))); h.appendChild(document.createTextNode(' ' + t.titel)); c.appendChild(h);
      if (t.anweisung) c.appendChild(el('p', 'anw', t.anweisung));
      if (t.anweisungAr) c.appendChild(el('p', 'ar anw-ar', t.anweisungAr));
      if (t.audio) c.appendChild(player('p' + ti, t, t, t.audioTitel || ''));
      if (t.text) c.appendChild(el('div', 'lesetext', t.text));
      var tn = 0;
      t.items.forEach(function (it, ii) {
        if (it.audio) c.appendChild(player('p' + ti + '.' + ii, t, it, it.audioTitel || ('Text ' + (++tn))));
        var box = el('div', 'item'); box.id = 'it-' + qid(ti, ii);
        renderers[it.typ || t.typ](box, t, it, qid(ti, ii), ii);
        c.appendChild(box);
      });
      app.appendChild(c);
    });

    if (!state.submitted) {
      var bar = el('div', 'submit-bar');
      var b = el('button', 'btn gold', 'Abgeben ✓');
      b.onclick = submit; bar.appendChild(b);
      bar.appendChild(el('p', 'ar', 'عندما تنتهي من جميع التمارين، اضغط على "Abgeben".'));
      app.appendChild(bar);
    }
    updateProgress();
  }

  function setAnswer(id, v) { if (state.submitted) return; state.answers[id] = v; save(); updateProgress(); }
  function answered(id) { var v = state.answers[id]; if (v == null) return false; if (Array.isArray(v)) return v.length > 0; if (typeof v === 'object') return Object.keys(v).length > 0; return String(v).trim() !== ''; }
  function updateProgress() {
    var tot = 0, done = 0;
    U.teile.forEach(function (t, ti) { t.items.forEach(function (it, ii) { tot++; if (answered(qid(ti, ii))) done++; }); });
    var p = document.getElementById('progress'); p.hidden = false;
    document.getElementById('bar').style.width = Math.round(done / tot * 100) + '%';
    document.getElementById('ptext').textContent = done + ' / ' + tot;
  }
  function qline(box, it, ii) { var q = el('div', 'q'); q.appendChild(el('span', 'num', (ii + 1) + '.')); q.appendChild(document.createTextNode(it.q || '')); box.appendChild(q); }

  function radios(box, id, options) {
    var wrap = el('div', 'opts');
    options.forEach(function (o) {
      var lab = el('label', 'opt'); var r = el('input'); r.type = 'radio'; r.name = 'r' + id; r.value = o;
      if (state.answers[id] === o) r.checked = true;
      r.onchange = function () { setAnswer(id, o); };
      lab.appendChild(r); lab.appendChild(el('span', null, o)); wrap.appendChild(lab);
    });
    box.appendChild(wrap);
  }
  renderers.mcq = function (box, t, it, id, ii) {
    qline(box, it, ii);
    if (!it._order) it._order = shuffle(it.o);
    radios(box, id, it._order);
  };
  renderers.tf = function (box, t, it, id, ii) { qline(box, it, ii); radios(box, id, ['Richtig', 'Falsch']); };

  // Satz mit ___ : select oder gap
  function sentence(box, it, ii, makeField) {
    var p = el('div', 'q sent'); p.appendChild(el('span', 'num', (ii + 1) + '.'));
    var parts = it.q.split('___');
    parts.forEach(function (part, i) {
      p.appendChild(document.createTextNode(part));
      if (i < parts.length - 1) p.appendChild(makeField());
    });
    // Zuordnungsaufgaben ohne Lücke: Auswahlfeld hinter dem Satz anzeigen
    if (parts.length === 1) { p.appendChild(document.createTextNode(' → ')); p.appendChild(makeField()); }
    box.appendChild(p);
  }
  renderers.select = function (box, t, it, id, ii) {
    sentence(box, it, ii, function () {
      var sel = el('select'); sel.appendChild(el('option', null, '…')).value = '';
      (it.o || t.o).forEach(function (o) { var op = el('option', null, o); op.value = o; sel.appendChild(op); });
      sel.value = state.answers[id] || '';
      sel.onchange = function () { setAnswer(id, sel.value); };
      return sel;
    });
  };
  renderers.gap = function (box, t, it, id, ii) {
    sentence(box, it, ii, function () {
      var inp = el('input'); inp.type = 'text'; inp.autocomplete = 'off'; inp.spellcheck = false; inp.setAttribute('autocapitalize', 'off');
      inp.value = state.answers[id] || '';
      inp.oninput = function () { setAnswer(id, inp.value); };
      return inp;
    });
  };
  renderers.match = function (box, t, it, id, ii) {
    qline(box, { q: it.q || '' }, ii);
    var cur = state.answers[id] || {};
    if (!it._right) it._right = shuffle(it.pairs.map(function (p) { return p[1]; }));
    it.pairs.forEach(function (p, pi) {
      var row = el('div', 'match-row');
      row.appendChild(el('div', null, p[0]));
      var sel = el('select'); sel.appendChild(el('option', null, '…')).value = '';
      it._right.forEach(function (r) { var op = el('option', null, r); op.value = r; sel.appendChild(op); });
      sel.value = cur[pi] || '';
      sel.onchange = function () { var a = state.answers[id] || {}; if (sel.value) a[pi] = sel.value; else delete a[pi]; setAnswer(id, a); };
      row.appendChild(sel); box.appendChild(row);
    });
  };
  renderers.order = function (box, t, it, id, ii) {
    qline(box, it, ii);
    var cur = state.answers[id];
    var lines = (cur && cur.length === it.lines.length) ? cur.slice() : shuffle(it.lines);
    var ul = el('ul', 'order-list');
    function draw() {
      ul.innerHTML = '';
      lines.forEach(function (ln, i) {
        var li = el('li'); li.appendChild(el('strong', null, (i + 1) + '.'));
        li.appendChild(el('span', 'txt', ln));
        var up = el('button', null, '▲'); up.type = 'button'; up.disabled = i === 0; up.setAttribute('aria-label', 'nach oben');
        var dn = el('button', null, '▼'); dn.type = 'button'; dn.disabled = i === lines.length - 1; dn.setAttribute('aria-label', 'nach unten');
        up.onclick = function () { var x = lines[i - 1]; lines[i - 1] = lines[i]; lines[i] = x; setAnswer(id, lines.slice()); draw(); };
        dn.onclick = function () { var x = lines[i + 1]; lines[i + 1] = lines[i]; lines[i] = x; setAnswer(id, lines.slice()); draw(); };
        li.appendChild(up); li.appendChild(dn); ul.appendChild(li);
      });
    }
    draw(); box.appendChild(ul);
  };
  renderers.words = function (box, t, it, id, ii) {
    qline(box, it, ii);
    if (!it._tiles) it._tiles = shuffle(it.w.map(function (w, i) { return { w: w, i: i }; }));
    // gespeicherte Wörter den (neu gemischten) Kärtchen zuordnen
    var chosen = [];
    (state.answers[id + '#w'] || []).forEach(function (w) {
      for (var k = 0; k < it._tiles.length; k++) { if (it._tiles[k].w === w && chosen.indexOf(k) < 0) { chosen.push(k); break; } }
    });
    var built = el('div', 'built'); var pool = el('div', 'words');
    function draw() {
      built.innerHTML = ''; pool.innerHTML = '';
      chosen.forEach(function (ti, k) {
        var b = el('button', 'word', it._tiles[ti].w); b.type = 'button';
        b.onclick = function () { chosen.splice(k, 1); store(); draw(); };
        built.appendChild(b);
      });
      it._tiles.forEach(function (tile, ti) {
        var used = chosen.indexOf(ti) >= 0;
        var b = el('button', 'word' + (used ? ' used' : ''), tile.w); b.type = 'button'; b.disabled = used;
        b.onclick = function () { chosen.push(ti); store(); draw(); };
        pool.appendChild(b);
      });
    }
    function store() {
      if (state.submitted) return;
      var ws = chosen.map(function (ti) { return it._tiles[ti].w; });
      state.answers[id + '#w'] = ws;
      setAnswer(id, ws.join(' '));
    }
    draw(); box.appendChild(pool); box.appendChild(built);
    box.appendChild(el('div', 'ar wc', 'اضغط على الكلمات بالترتيب الصحيح. لإعادة كلمة إلى مكانها، اضغط عليها داخل الجملة.'));
  };
  renderers.write = function (box, t, it, id, ii) {
    qline(box, it, ii);
    var ta = el('textarea'); ta.value = state.answers[id] || ''; ta.spellcheck = false;
    var wc = el('div', 'wc');
    function count() { var n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0; wc.textContent = n + ' Wörter' + (it.min ? ' (mindestens ' + it.min + ')' : ''); }
    ta.oninput = function () { setAnswer(id, ta.value); count(); };
    count(); box.appendChild(ta); box.appendChild(wc);
  };

  // ---------- Hören (Sprachausgabe des Browsers, wie im Einstufungstest) ----------
  // Teil oder Aufgabe mit audio: [{ s: 'w'|'m'|'w2'|'m2', n: 'Name (optional)', t: 'Text' }], plays: 1 oder 2 (wie in der Prüfung), rate: Tempo
  var synth = window.speechSynthesis;
  function deVoices() { if (!synth) return []; return synth.getVoices().filter(function (v) { return /^de([-_]|$)/i.test(v.lang); }); }
  function rank(v) { return (/natural|online|neural|premium|enhanced/i.test(v.name) ? 0 : 1) + (/de[-_]DE/i.test(v.lang) ? 0 : 0.5); }
  function pickVoices() {
    var vs = deVoices().sort(function (a, b) { return rank(a) - rank(b); });
    if (!vs.length) return null;
    var W = /katja|hedda|anna|petra|helena|marlene|vicki|amala|seraphina|elke|gisela|louisa|maja|tanja|ingrid|klara|female|weiblich|google deutsch/i;
    var M = /stefan|conrad|markus|yannick|hans|killian|florian|ralf|bernd|kasper|viktor|christoph|male|männlich/i;
    var ws = vs.filter(function (v) { return W.test(v.name) && !M.test(v.name); }), ms = vs.filter(function (v) { return M.test(v.name); });
    var w = ws[0] || vs[0], m = ms[0] || null;
    return {
      w: { v: w, pitch: 1.05 },
      w2: ws[1] ? { v: ws[1], pitch: 1 } : { v: w, pitch: 1.3 },
      m: m ? { v: m, pitch: 1 } : { v: w, pitch: 0.75 },
      m2: ms[1] ? { v: ms[1], pitch: 1 } : (m ? { v: m, pitch: 0.85 } : { v: w, pitch: 0.6 })
    };
  }
  var lauf = 0;   // jede Wiedergabe hat eine Nummer; eine neue beendet die alte
  function stopAudio() { lauf++; try { if (synth) synth.cancel(); } catch (e) {} }
  function sentences(t) { return String(t).match(/[^.!?…:]+[.!?…:]*\s*/g) || [t]; }
  var SPRECHER = { w: 'Frau', w2: 'Frau 2', m: 'Mann', m2: 'Mann 2' };
  function transcript(src) {
    return src.audio.map(function (l) { return (src.audio.length > 1 || l.n ? (l.n || SPRECHER[l.s] || '') + ': ' : '') + l.t; }).join('\n');
  }
  function player(pid, t, src, titel) {
    state.plays = state.plays || {};
    var MAX = state.submitted ? 99 : (src.plays || t.plays || 2);
    var box = el('div', 'player');
    if (titel) box.appendChild(el('strong', 'player-titel', titel));
    var btn = el('button', 'btn', ''); btn.type = 'button';
    var info = el('span', 'player-info');
    var note = el('div', 'ar player-note');
    box.appendChild(btn); box.appendChild(info); box.appendChild(note);
    function used() { return state.plays[pid] || 0; }
    function label(playing) {
      var rest = MAX - used();
      btn.disabled = playing || rest <= 0;
      btn.textContent = playing ? '🔊 Läuft …' : (rest > 0 ? '▶ Abspielen' : '✓ Gehört');
      if (state.submitted) { info.textContent = ''; return; }
      info.textContent = playing ? '' : (rest > 0 ? (MAX === 1 && rest === 1 ? 'Sie hören den Text einmal. · ستسمع النص مرة واحدة فقط.' : 'noch ' + rest + '× · ' + (rest === 2 ? 'متبقٍّ مرتان' : 'متبقٍّ مرة واحدة')) : 'Keine Wiederholung mehr · انتهى عدد مرات الاستماع');
    }
    function showText() { var tx = el('div', 'lesetext transkript'); tx.textContent = transcript(src); box.appendChild(tx); }
    function noVoice() {
      if (state.submitted) return;
      note.textContent = 'لا يتوفر على جهازك صوت ألماني. جرّب متصفح Chrome أو Edge، أو افتح التمرين من الهاتف. إذا لم يكن ذلك ممكنًا، فاضغط على الزر لقراءة النص بدلًا من سماعه.';
      var show = el('button', 'small-btn', 'Text anzeigen · اعرض النص'); show.type = 'button';
      show.onclick = function () { showText(); show.remove(); state.plays[pid] = MAX; save(); label(false); };
      note.appendChild(document.createElement('br')); note.appendChild(show);
    }
    btn.onclick = function () {
      if (!synth) { noVoice(); return; }
      var vo = pickVoices();
      if (!vo) {
        // Stimmenliste noch leer (häufig auf Android beim ersten Tippen): mit lang = de-DE versuchen
        if (synth.getVoices().length) { noVoice(); return; }
        var d = { v: null, pitch: 1.05 };
        vo = { w: d, w2: { v: null, pitch: 1.3 }, m: { v: null, pitch: 0.75 }, m2: { v: null, pitch: 0.6 } };
      }
      stopAudio();
      var run = lauf;
      if (!state.submitted) { state.plays[pid] = used() + 1; save(); }
      label(true);
      var queue = [];
      src.audio.forEach(function (l, li) {
        var sp = vo[l.s] || vo.w;
        sentences(l.t).forEach(function (s) { queue.push({ text: s.trim(), sp: sp, pause: false }); });
        if (li < src.audio.length - 1) queue[queue.length - 1].pause = true;
      });
      var i = 0;
      (function next() {
        if (i >= queue.length || run !== lauf) { label(false); return; }
        var q = queue[i++];
        var u = new SpeechSynthesisUtterance(q.text);
        u.lang = q.sp.v ? q.sp.v.lang : 'de-DE'; if (q.sp.v) u.voice = q.sp.v; u.pitch = q.sp.pitch; u.rate = src.rate || t.rate || U.rate || 1;
        u.onend = function () { setTimeout(next, q.pause ? 450 : 60); };
        u.onerror = function () { setTimeout(next, 60); };
        synth.speak(u);
      })();
    };
    if (synth && !deVoices().length) { synth.onvoiceschanged = function () { label(false); }; }
    label(false);
    if (state.submitted) {
      var tb = el('button', 'small-btn', 'Transkript · نص الاستماع'); tb.type = 'button';
      tb.onclick = function () { showText(); tb.remove(); };
      box.appendChild(tb);
    }
    return box;
  }

  // ---------- Bewertung ----------
  function check(t, it, v) {
    switch (it.typ || t.typ) {
      case 'mcq': return v === it.a;
      case 'tf': return v === (it.a ? 'Richtig' : 'Falsch');
      case 'select': return v === it.a;
      case 'gap':
        // Kurzantworten (Hören C1): kw = Schlüsselwörter, eines davon muss in der Antwort vorkommen (ä = ae, ß = ss)
        // Zahlen zählen nur als ganzes Wort (6 ≠ 600), Wörter auch als Wortteil (protokoll → Übergabeprotokoll)
        if (it.kw) { var f = fold(v); return f.length > 0 && it.kw.some(function (k) { k = fold(k); return /^\d+$/.test(k) ? (' ' + f + ' ').indexOf(' ' + k + ' ') >= 0 : f.indexOf(k) >= 0; }); }
        var acc = Array.isArray(it.a) ? it.a : [it.a]; return acc.some(function (a) { return norm(a) === norm(v); });
      case 'match': if (!v) return false; return it.pairs.every(function (p, pi) { return v[pi] === p[1]; });
      case 'order': return Array.isArray(v) && v.join('\n') === it.lines.join('\n');
      case 'words': var ok = (it.a || [it.w.join(' ')]); return ok.some(function (a) { return normLoose(a) === normLoose(v); });
      default: return null;
    }
  }
  function solutionText(t, it) {
    switch (it.typ || t.typ) {
      case 'tf': return it.a ? 'Richtig' : 'Falsch';
      case 'gap': return Array.isArray(it.a) ? it.a[0] : it.a;
      case 'match': return it.pairs.map(function (p) { return p[0] + ' → ' + p[1]; }).join(' | ');
      case 'order': return it.lines.map(function (l, i) { return (i + 1) + '. ' + l; }).join('  ');
      case 'words': return (it.a || [it.w.join(' ')])[0];
      default: return it.a;
    }
  }
  function answerText(t, v) {
    if (v == null || v === '') return '';
    if (t.typ === 'match') return Object.keys(v).sort().map(function (k) { return v[k]; }).join(' | ');
    if (Array.isArray(v)) return v.join(' / ');
    return String(v);
  }

  function submit() {
    var missing = 0;
    U.teile.forEach(function (t, ti) { t.items.forEach(function (it, ii) { if (!answered(qid(ti, ii))) missing++; }); });
    if (missing > 0 && !confirm('Sie haben ' + missing + ' Aufgabe(n) noch nicht gelöst. Trotzdem abgeben?\n\nما زال هناك' + missing + ' سؤالًا دون إجابة. هل تريد الإرسال مع ذلك؟')) return;
    if (!confirm('Jetzt abgeben? Danach können Sie nichts mehr ändern.\n\nهل تريد الإرسال الآن؟ لن تتمكن بعد ذلك من تغيير إجاباتك.')) return;

    var pts = 0, max = 0, details = [], freitext = [];
    U.teile.forEach(function (t, ti) {
      t.items.forEach(function (it, ii) {
        var id = qid(ti, ii), v = state.answers[id], r = check(t, it, v);
        if (r === null) { freitext.push({ teil: ti + 1, nr: ii + 1, text: v || '' }); details.push({ id: id, status: 'manual' }); return; }
        max++; if (r) pts++;
        details.push({ id: id, status: r ? 'ok' : 'bad', antwort: answerText(t, v), loesung: r ? '' : String(solutionText(t, it)) });
      });
    });
    var result = { punkte: pts, max: max, prozent: Math.round(pts / max * 100), details: details, freitext: freitext, zeit: new Date().toISOString(), dauerMin: Math.round((Date.now() - state.start) / 60000), gesendet: false };
    state.submitted = true; state.result = result; save();
    renderExercises(); showResult(result, false);
    send(result);
  }

  function showResult(res, fromStorage) {
    // Markierung an jeder Aufgabe
    res.details.forEach(function (d) {
      var box = document.getElementById('it-' + d.id); if (!box) return;
      var p = d.id.split('.'), t = U.teile[+p[0]], it = t.items[+p[1]];
      box.classList.add(d.status === 'manual' ? 'manual' : d.status);
      if (d.status === 'ok') box.appendChild(el('div', 'fb', '✓ Richtig'));
      else if (d.status === 'bad') box.appendChild(el('div', 'fb', '✗ Richtige Lösung: ' + d.loesung));
      else { box.appendChild(el('div', 'fb', '✎ Wird von der Lehrkraft korrigiert. · سيصحّح المحاضر هذا الجزء.')); if (it.muster) { var m = el('div', 'muster'); m.textContent = 'Mustertext:\n' + it.muster; box.appendChild(m); } }
    });
    document.querySelectorAll('.teil').forEach(function (c) { c.classList.add('locked'); });
    document.querySelectorAll('.teil input, .teil select, .teil textarea').forEach(function (x) { x.disabled = true; });

    var c = el('section', 'card result'); c.id = 'result';
    c.appendChild(el('h2', null, 'Ihr Ergebnis'));
    c.appendChild(el('div', 'score', res.punkte + ' / ' + res.max));
    var stars = res.prozent >= 90 ? '★★★' : res.prozent >= 70 ? '★★☆' : res.prozent >= 50 ? '★☆☆' : '☆☆☆';
    c.appendChild(el('div', 'stars', stars));
    var msg = res.prozent >= 90 ? 'Super! Sehr gut gemacht!' : res.prozent >= 70 ? 'Gut gemacht!' : res.prozent >= 50 ? 'Nicht schlecht – üben Sie weiter!' : 'Bitte wiederholen Sie das Kapitel.';
    c.appendChild(el('div', 'pct', res.prozent + ' % – ' + msg));
    c.appendChild(el('p', 'ar', 'الإجابات الخاطئة مميّزة باللون الأحمر، وبجانب كل منها الحل الصحيح. راجعها جيدًا.'));
    var st = el('div', 'send'); st.id = 'sendstate'; c.appendChild(st);
    var row = el('div', 'row');
    var again = el('button', 'btn ghost', 'Noch einmal üben'); again.onclick = function () {
      if (!confirm('Neue Runde nur zum Üben – das Ergebnis oben ist schon gespeichert.\nهذه محاولة جديدة للتدريب فقط؛ فقد سُجّلت نتيجتك الأولى.')) return;
      var keep = { name: state.name, answers: {}, start: Date.now(), submitted: false, practice: true, firstResult: state.result };
      state = keep; KEY = KEY + '_uebung'; save(); renderExercises(); window.scrollTo(0, 0);
    };
    var home = el('a', 'btn', 'Zur Startseite'); home.href = 'index.html';
    row.appendChild(again); row.appendChild(home); c.appendChild(row);
    app.insertBefore(c, app.children[1] || null);
    setSendState(res);
    if (!fromStorage) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setSendState(res) {
    var st = document.getElementById('sendstate'); if (!st) return;
    if (state.practice) { st.className = 'send wait'; st.textContent = 'Übungsrunde – wird nicht gesendet.'; return; }
    if (!CFG.apiUrl) { st.className = 'send wait'; st.textContent = 'Hinweis: Senden ist noch nicht eingerichtet (apiUrl fehlt).'; return; }
    if (res.gesendet) { st.className = 'send ok'; st.textContent = '✓ An die Lehrkraft gesendet. · أُرسلت إلى المحاضر.'; return; }
    st.className = 'send bad'; st.textContent = 'Noch nicht gesendet. ';
    var b = el('button', 'small-btn', 'Erneut senden · أعد الإرسال'); b.onclick = function () { send(res); }; st.appendChild(b);
  }

  function send(res) {
    if (state.practice || !CFG.apiUrl) { setSendState(res); return; }
    var st = document.getElementById('sendstate'); if (st) { st.className = 'send wait'; st.textContent = 'Wird gesendet … · جاري الإرسال…'; }
    var fehler = res.details.filter(function (d) { return d.status === 'bad'; }).map(function (d) {
      var p = d.id.split('.'); return 'Ü' + (+p[0] + 1) + '.' + (+p[1] + 1) + ': ' + (d.antwort || '—') + ' (richtig: ' + d.loesung + ')';
    });
    var payload = {
      akademie: CFG.akademie, kurs: U.kurs, kapitel: U.kapitel, titel: U.titel, name: state.name,
      punkte: res.punkte, max: res.max, prozent: res.prozent, dauerMin: res.dauerMin, zeit: res.zeit,
      fehler: fehler.join('\n'),
      freitext: res.freitext.map(function (f) { return 'Ü' + f.teil + '.' + f.nr + ': ' + f.text; }).join('\n\n')
    };
    fetch(CFG.apiUrl, { method: 'POST', body: JSON.stringify(payload) })
      .then(function (r) { return r.json(); })
      .then(function (j) { res.gesendet = !!(j && j.ok); save(); setSendState(res); })
      .catch(function () { res.gesendet = false; save(); setSendState(res); });
  }
})();
