// Netzwerk neu A1 – Kapitel 11: Die Jacke gefällt mir!
window.UEBUNG = {
  kurs: 'Netzwerk neu A1', kapitel: 11, titel: 'Die Jacke gefällt mir!',
  titelAr: 'الملابس والتسوق والمتجر الكبير – welcher/dieser وضمائر الـ Dativ والأفعال التي تأخذ Dativ و Partizip II للأفعال المنفصلة',
  teile: [
    { titel: 'Kleidung', anweisung: 'Was passt nicht? Wählen Sie.', anweisungAr: 'أيّ كلمة لا تنتمي إلى المجموعة؟', typ: 'mcq', items: [
      { q: 'Kleidung für den Winter:', o: ['der Bikini', 'der Mantel', 'die Mütze'], a: 'der Bikini' },
      { q: 'Kleidung für Frauen und Männer:', o: ['der Rock', 'die Jeans', 'der Pullover'], a: 'der Rock' },
      { q: 'Das trägt man an den Füßen:', o: ['der Schal', 'der Schuh', 'der Stiefel'], a: 'der Schal' },
      { q: 'Das trägt man im Büro:', o: ['die Badehose', 'der Anzug', 'die Bluse'], a: 'die Badehose' }
    ] },
    { titel: 'Kleidung beschreiben', anweisung: 'Was ist das Gegenteil? Ordnen Sie zu.', anweisungAr: 'صِل كل صفة بضدّها.', typ: 'match', items: [
      { q: '', pairs: [
        ['eng', 'weit'],
        ['kurz', 'lang'],
        ['schön', 'doof'],
        ['teuer', 'billig'],
        ['neu', 'kaputt']
      ] }
    ] },
    { titel: 'Personalpronomen im Dativ', anweisung: 'mir, dir, ihm, ihr, uns, euch, Ihnen? Ergänzen Sie.', anweisungAr: 'ضمائر حالة الـ Dativ: mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen.', typ: 'select', items: [
      { q: 'Die Jacke gefällt ___. Ich kaufe sie. (ich)', o: ['mir', 'mich', 'ich'], a: 'mir' },
      { q: 'Der Pulli steht ___ gut, Lisa! (du)', o: ['dir', 'dich', 'du'], a: 'dir' },
      { q: 'Tom trägt ein Hemd. Es passt ___ nicht. (er)', o: ['ihm', 'ihn', 'ihr'], a: 'ihm' },
      { q: 'Anna hat ein Kleid. Es gefällt ___ sehr. (sie)', o: ['ihr', 'ihm', 'sie'], a: 'ihr' },
      { q: 'Kann ich ___ helfen, Frau Weber? (Sie)', o: ['Ihnen', 'Sie', 'ihr'], a: 'Ihnen' },
      { q: 'Wir finden das T-Shirt toll. Es gefällt ___. (wir)', o: ['uns', 'wir', 'euch'], a: 'uns' }
    ] },
    { titel: 'Verben mit Dativ', anweisung: 'gefallen, passen, stehen, gehören, helfen? Ergänzen Sie.', anweisungAr: 'أفعال تأخذ Dativ: gefallen (يُعجِب)، passen (يناسب مقاسًا)، stehen (يليق بـ)، gehören (يخصّ / مِلك لـ).', typ: 'select', o: ['gefällt', 'passt', 'steht', 'gehört', 'hilft'], items: [
      { q: 'Die Hose ist zu klein. Sie ___ mir nicht.', a: 'passt' },
      { q: 'Die Farbe ist super! Das Kleid ___ dir sehr gut.', a: 'steht' },
      { q: 'Wem ___ die Tasche? – Mir.', a: 'gehört' },
      { q: 'Der Film ist toll. Er ___ mir sehr.', a: 'gefällt' },
      { q: 'Die Verkäuferin ___ dem Kunden.', a: 'hilft' }
    ] },
    { titel: 'Welcher? – Dieser!', anweisung: 'Ergänzen Sie welcher/welches/welche und dieser/dieses/diese.', anweisungAr: 'welcher = أيّ، dieser = هذا. نهايتهما مثل أداة التعريف: der ← -er، das ← -es، die ← -e.', typ: 'select', items: [
      { q: '___ Jacke gefällt dir? (die Jacke)', o: ['Welche', 'Welcher', 'Welches'], a: 'Welche' },
      { q: '___ Pullover möchtest du? (der Pullover)', o: ['Welchen', 'Welcher', 'Welche'], a: 'Welchen' },
      { q: '___ Kleid ist schöner? (das Kleid)', o: ['Welches', 'Welcher', 'Welche'], a: 'Welches' },
      { q: 'Ich nehme ___ Schuhe. (die Schuhe)', o: ['diese', 'dieser', 'dieses'], a: 'diese' },
      { q: 'Wie findest du ___ Rock? (der Rock)', o: ['diesen', 'dieser', 'dieses'], a: 'diesen' },
      { q: '___ T-Shirt ist zu teuer. (das T-Shirt)', o: ['Dieses', 'Dieser', 'Diese'], a: 'Dieses' }
    ] },
    { titel: 'Partizip II: trennbar und nicht trennbar', anweisung: 'Wählen Sie das richtige Partizip.', anweisungAr: 'في الأفعال المنفصلة تأتي ge بين البادئة والفعل (angezogen). أما البادئات be-, ver-, er-, ent-, emp- فلا تأخذ ge (bestellt).', typ: 'mcq', items: [
      { q: 'anziehen → hat …', o: ['angezogen', 'geanzogen', 'angeziehen'], a: 'angezogen' },
      { q: 'einkaufen → hat …', o: ['eingekauft', 'geeinkauft', 'einkauft'], a: 'eingekauft' },
      { q: 'bestellen → hat …', o: ['bestellt', 'gebestellt', 'bestelltet'], a: 'bestellt' },
      { q: 'verkaufen → hat …', o: ['verkauft', 'geverkauft', 'verkaufen'], a: 'verkauft' },
      { q: 'anprobieren → hat …', o: ['anprobiert', 'angeprobiert', 'geanprobiert'], a: 'anprobiert' },
      { q: 'umtauschen → hat …', o: ['umgetauscht', 'geumtauscht', 'umtauscht'], a: 'umgetauscht' }
    ] },
    { titel: 'Perfekt', anweisung: 'Schreiben Sie das Partizip II.', anweisungAr: 'اكتب صيغة الـ Partizip II.', typ: 'gap', items: [
      { q: 'Ich habe die Jacke im Internet ___. (bestellen)', a: ['bestellt'] },
      { q: 'Die Jacke ist gestern ___. (ankommen)', a: ['angekommen'] },
      { q: 'Sie hat das Kleid ___. (anprobieren)', a: ['anprobiert'] },
      { q: 'Wir haben im Kaufhaus ___. (einkaufen)', a: ['eingekauft'] },
      { q: 'Wo hast du die Tasche ___? (entdecken)', a: ['entdeckt'] }
    ] },
    { titel: 'Im Kaufhaus', anweisung: 'Was passt? Wählen Sie.', anweisungAr: 'اختر الرد المناسب في المتجر.', typ: 'mcq', items: [
      { q: 'Kann ich Ihnen helfen?', o: ['Ja, ich suche eine Jacke in Größe 40.', 'Nein, die Jacke gefällt mir.', 'Ja, ich bin bequem.'], a: 'Ja, ich suche eine Jacke in Größe 40.' },
      { q: 'Kann ich die Hose anprobieren?', o: ['Natürlich, die Kabine ist dort hinten.', 'Ja, sie ist kaputt.', 'Um 20 Uhr.'], a: 'Natürlich, die Kabine ist dort hinten.' },
      { q: 'Wo finde ich Kosmetik?', o: ['Im Erdgeschoss, gleich links.', 'Größe 38.', 'Sie steht Ihnen gut.'], a: 'Im Erdgeschoss, gleich links.' },
      { q: 'Wie lange haben Sie heute geöffnet?', o: ['Bis 20 Uhr.', 'Seit 10 Uhr zu.', 'Im Untergeschoss.'], a: 'Bis 20 Uhr.' }
    ] },
    { titel: 'Lesen: Online bestellt', anweisung: 'Lesen Sie die Nachricht. Richtig oder falsch?', anweisungAr: 'اقرأ الرسالة. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Hallo Nadia!\nIch habe letzte Woche im Internet einen Mantel bestellt. Gestern ist das Paket angekommen. Der Mantel ist schön und die Farbe gefällt mir sehr, aber er ist zu eng. Er passt mir leider nicht. Jetzt muss ich ihn zurückschicken. Das nervt! Morgen gehe ich lieber ins Kaufhaus. Da kann ich die Kleidung anprobieren. Kommst du mit?\nLiebe Grüße, Hoda',
      items: [
        { q: 'Hoda hat einen Mantel im Kaufhaus gekauft.', a: false },
        { q: 'Das Paket ist gestern angekommen.', a: true },
        { q: 'Die Farbe gefällt Hoda nicht.', a: false },
        { q: 'Der Mantel ist zu eng.', a: true },
        { q: 'Hoda schickt den Mantel zurück.', a: true }
      ] },
    { titel: 'Schreiben: Was ziehe ich an?', anweisung: 'Was tragen Sie gern? Was tragen Sie im Kurs, auf einer Party und im Winter? Was gefällt Ihnen nicht? (ca. 35 Wörter)', anweisungAr: 'ماذا تحب أن ترتدي؟ وماذا ترتدي في الدورة، وفي الحفلات، وفي الشتاء؟ وما الذي لا يعجبك؟ نحو 35 كلمة.', typ: 'write', items: [
      { q: 'Ich trage gern …', min: 30, muster: 'Ich trage gern Jeans und T-Shirts, denn sie sind bequem. Im Kurs trage ich meistens eine Hose und einen Pullover. Auf einer Party trage ich ein Kleid. Im Winter brauche ich einen Mantel, einen Schal und Stiefel. Krawatten gefallen mir nicht.' }
    ] }
  ]
};
