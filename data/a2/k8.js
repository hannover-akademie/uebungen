// Netzwerk neu A2 – Kapitel 8: Gelernt ist gelernt!
// Grammatik: Konjunktiv II sollte (Ratschläge), Interrogativartikel Was für ein(e)? · Redemittel: Ratschläge geben, eine Präsentation halten
window.UEBUNG = {
  kurs: 'Netzwerk neu A2', kapitel: 8, titel: 'Gelernt ist gelernt!',
  titelAr: 'التعلّم والامتحانات والعروض التقديمية – sollte للنصيحة، و Was für ein(e)?',
  teile: [
    { titel: 'Wortschatz: Lernen und Prüfungen', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['mündlich', 'schriftlich', 'Stoff', 'Zeitplan', 'Sprechstunde', 'Stipendium'], items: [
      { q: 'In der ___ Prüfung muss man mit dem Prüfer sprechen.', a: 'mündlich' },
      { q: 'In der ___ Prüfung schreibt man Texte.', a: 'schriftlich' },
      { q: 'Für die Prüfung muss ich viel ___ lernen: zehn Kapitel!', a: 'Stoff' },
      { q: 'Mach dir einen ___: Wann lernst du was?', a: 'Zeitplan' },
      { q: 'Die Professorin hat am Dienstag von 10 bis 12 Uhr ___.', a: 'Sprechstunde' },
      { q: 'Er bekommt jeden Monat Geld für sein Studium. Er hat ein ___.', a: 'Stipendium' }
    ] },
    { titel: 'Wortschatz: Berufsalltag', anweisung: 'Was passt? Ordnen Sie zu.', anweisungAr: 'صِل بين جزأي كل جملة.', typ: 'match', items: [
      { q: '', pairs: [
        ['Ein Dolmetscher', 'übersetzt mündlich.'],
        ['Ich bin in Vollzeit', 'bei einer Firma angestellt.'],
        ['Sie arbeitet freiberuflich', 'und hat viele Aufträge.'],
        ['Mein Opa ist pensioniert', 'und bekommt Rente.'],
        ['Die Freiwilligen', 'helfen ohne Geld.']
      ] }
    ] },
    { titel: 'Wortschatz: Eine Präsentation', anweisung: 'Welcher Teil der Präsentation ist das?', anweisungAr: 'إلى أيّ جزء من العرض التقديمي تنتمي هذه الجملة؟', typ: 'select', o: ['Einleitung', 'Hauptteil', 'Schluss'], items: [
      { q: '„Ich möchte euch heute das Thema ‚Lernen mit Apps‘ vorstellen.“', a: 'Einleitung' },
      { q: '„Zum ersten Punkt: Apps sind immer dabei.“', a: 'Hauptteil' },
      { q: '„Kurz gesagt: Apps helfen, aber sie sind nicht alles.“', a: 'Schluss' },
      { q: '„Ich habe das Thema gewählt, weil ich selbst viel mit Apps lerne.“', a: 'Einleitung' },
      { q: '„Ich gebe euch ein Beispiel: …“', a: 'Hauptteil' },
      { q: '„Vielen Dank. Habt ihr Fragen?“', a: 'Schluss' }
    ] },
    { titel: 'Grammatik: Konjunktiv II – sollte', anweisung: 'Schreiben Sie die richtige Form von sollte.', anweisungAr: 'نصيحة بصيغة sollte: ich sollte, du solltest, er sollte, wir sollten, ihr solltet, Sie sollten.', typ: 'gap', items: [
      { q: 'Du ___ mehr Pausen machen.', a: ['solltest'] },
      { q: 'Man ___ mit anderen zusammen lernen.', a: ['sollte'] },
      { q: 'Ihr ___ unbedingt einen Zeitplan machen.', a: ['solltet'] },
      { q: 'Sie ___ vor der Prüfung gut schlafen, Frau Klein.', a: ['sollten'] },
      { q: 'Ich ___ mehr Vokabeln wiederholen.', a: ['sollte'] },
      { q: 'Wir ___ viel Wasser trinken.', a: ['sollten'] }
    ] },
    { titel: 'Grammatik: Ratschläge mit sollte', anweisung: 'Bauen Sie den Satz. Der Infinitiv steht am Ende.', anweisungAr: 'رتّب الجملة: sollte في الموقع الثاني، والمصدر في آخر الجملة.', typ: 'words', items: [
      { q: 'Ratschlag (.)', w: ['du', 'solltest', 'auch Freizeit', 'einplanen'], a: ['du solltest auch Freizeit einplanen'] },
      { q: 'Ratschlag (.)', w: ['man', 'sollte', 'jeden Tag', 'ein bisschen', 'lernen'], a: ['man sollte jeden Tag ein bisschen lernen'] },
      { q: 'Ratschlag (.)', w: ['ihr', 'solltet', 'zusammen', 'üben'], a: ['ihr solltet zusammen üben'] }
    ] },
    { titel: 'Grammatik: Was für ein(e)?', anweisung: 'Ergänzen Sie den Interrogativartikel.', anweisungAr: 'Was für ein يأخذ نهايات أداة النكرة: was für ein / einen / einem / eine / einer، وفي الجمع: was für.', typ: 'select', items: [
      { q: 'Was für ___ Kurs machst du? (der Kurs, Akkusativ)', o: ['einen', 'ein', 'einem'], a: 'einen' },
      { q: 'Was für ___ Buch liest du? (das Buch, Akkusativ)', o: ['ein', 'einen', 'eine'], a: 'ein' },
      { q: 'Was für ___ Prüfung hast du morgen? (die Prüfung)', o: ['eine', 'ein', 'einer'], a: 'eine' },
      { q: 'In was für ___ Haus wohnst du? (das Haus, Dativ)', o: ['einem', 'einen', 'ein'], a: 'einem' },
      { q: 'Was für ___ Lehrer ist er? (der Lehrer, Nominativ)', o: ['ein', 'einen', 'eine'], a: 'ein' },
      { q: 'Was für ___ Aufträge machen Ihnen Spaß? (Plural)', o: ['–', 'ein', 'eine'], a: '–' }
    ] },
    { titel: 'Grammatik: Fragen und Antworten', anweisung: 'Welche Antwort passt?', anweisungAr: 'الإجابة عن Was für ein تأتي غالبًا مع أداة النكرة.', typ: 'mcq', items: [
      { q: 'Was für ein Handy hast du?', o: ['Ein ganz einfaches.', 'Das Handy.', 'Seit zwei Jahren.'], a: 'Ein ganz einfaches.' },
      { q: 'Was für eine Wohnung sucht ihr?', o: ['Eine helle Wohnung mit Balkon.', 'Die Wohnung von Tom.', 'Im dritten Stock.'], a: 'Eine helle Wohnung mit Balkon.' },
      { q: 'Was für Filme siehst du gern?', o: ['Komödien und Krimis.', 'Ein Film.', 'Im Kino am Markt.'], a: 'Komödien und Krimis.' }
    ] },
    { titel: 'Redemittel: Lernprobleme und Ratschläge', anweisung: 'Welcher Ratschlag passt zu welchem Problem?', anweisungAr: 'صِل كل مشكلة دراسية بالنصيحة المناسبة.', typ: 'match', items: [
      { q: '', pairs: [
        ['Ich bin in der Prüfung sehr nervös.', 'Du kannst mit den Prüfenden sprechen.'],
        ['Ich vergesse zu viel von dem Stoff.', 'Du solltest den Stoff oft wiederholen.'],
        ['Ich muss so viel lernen.', 'Du solltest einen Zeitplan machen.'],
        ['Manche Sachen sind zu schwierig.', 'Man sollte mit anderen zusammen lernen.'],
        ['Ich kann mich nicht konzentrieren.', 'Mach mehr Pausen!']
      ] }
    ] },
    { titel: 'Redemittel: Eine Präsentation halten', anweisung: 'Bringen Sie die Präsentation in die richtige Reihenfolge.', anweisungAr: 'رتّب جمل العرض التقديمي.', typ: 'order', items: [
      { q: 'Präsentation: Lernen im Verein', lines: [
        'Ich möchte euch heute den Verein „Nachbarn für Nachbarn“ vorstellen.',
        'Ich habe das Thema gewählt, weil ich dort selbst mitmache.',
        'Zum ersten Punkt: Im Verein helfen Freiwillige älteren Menschen.',
        'Ich gebe euch ein Beispiel: Ich gehe für Frau Berg einkaufen, und sie hilft mir bei den Hausaufgaben.',
        'Kurz gesagt: Wir lernen viel voneinander.',
        'Vielen Dank. Gibt es noch Fragen?'
      ] }
    ] },
    { titel: 'Lesen: Ein Interview', anweisung: 'Lesen Sie das Interview. Richtig oder falsch?', anweisungAr: 'اقرأ المقابلة. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Frau Haddad, Sie sind Dolmetscherin. Was für Aufträge haben Sie?\nIch arbeite freiberuflich. Oft dolmetsche ich bei Ärzten oder auf Konferenzen, manchmal begleite ich auch Menschen zum Standesamt.\nWas ist dabei wichtig?\nMan sollte immer neutral bleiben und genau übersetzen. Das ist nicht immer leicht.\nWie haben Sie Deutsch gelernt?\nIch habe mit 25 Jahren angefangen. Ich hatte einen Zeitplan und habe jeden Tag eine Stunde gelernt. Mein Tipp: Man sollte keine Angst vor Fehlern haben!',
      items: [
        { q: 'Frau Haddad ist bei einer Firma angestellt.', a: false },
        { q: 'Sie dolmetscht manchmal auf Konferenzen.', a: true },
        { q: 'Eine Dolmetscherin sollte ihre Meinung sagen.', a: false },
        { q: 'Sie hat jeden Tag eine Stunde Deutsch gelernt.', a: true },
        { q: 'Ihr Tipp ist: keine Angst vor Fehlern.', a: true }
      ] },
    { titel: 'Schreiben: Tipps zum Lernen', anweisung: 'Eine Freundin schreibt Ihnen: „Ich habe in zwei Wochen meine Deutschprüfung und bin sehr nervös. Ich vergesse alles!“ Antworten Sie ihr (60–80 Wörter): Zeigen Sie Verständnis. Erzählen Sie von Ihren Erfahrungen. Geben Sie mindestens drei Ratschläge (sollte …). Wünschen Sie ihr Glück.', anweisungAr: 'كتبت لك صديقة أنها خائفة من امتحان اللغة الألمانية بعد أسبوعين وأنها تنسى كل شيء. ردّ عليها (60–80 كلمة): أظهر تفهّمك، واحكِ عن تجربتك، وقدّم ثلاث نصائح على الأقل باستخدام sollte، وتمنَّ لها التوفيق. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nDas kann ich gut verstehen. / Das kenne ich gut.\nAls ich …, war ich auch …\nDu solltest … / Du könntest … / Mach …!\nMan sollte …\nViel Glück! / Ich drücke dir die Daumen!',
      items: [
        { q: 'Liebe …', min: 55, muster: 'Liebe Mariam,\ndas kann ich gut verstehen! Vor meiner A2-Prüfung war ich auch sehr nervös. Aber am Ende hat alles gut geklappt. Hier sind meine Tipps: Du solltest einen Zeitplan machen und jeden Tag ein bisschen lernen. Du solltest den Stoff oft wiederholen, dann vergisst du ihn nicht so schnell. Lern doch auch mit anderen zusammen, das macht mehr Spaß. Und mach unbedingt Pausen! Am Abend vor der Prüfung solltest du früh schlafen.\nViel Glück!\nDeine Amira' }
    ] }
  ]
};
