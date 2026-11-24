// Netzwerk neu A1 – Kapitel 4: Guten Appetit!
window.UEBUNG = {
  kurs: 'Netzwerk neu A1', kapitel: 4, titel: 'Guten Appetit!',
  titelAr: 'الطعام والمشروبات والمتاجر والشراء – Akkusativ و mögen/möchten',
  teile: [
    { titel: 'Lebensmittel', anweisung: 'Was passt nicht in die Gruppe? Wählen Sie.', anweisungAr: 'أيّ كلمة لا تنتمي إلى المجموعة؟', typ: 'mcq', items: [
      { q: 'Obst', o: ['die Gurke', 'der Apfel', 'die Banane'], a: 'die Gurke' },
      { q: 'Gemüse', o: ['der Käse', 'die Tomate', 'die Kartoffel'], a: 'der Käse' },
      { q: 'Milchprodukte', o: ['das Brötchen', 'der Joghurt', 'die Butter'], a: 'das Brötchen' },
      { q: 'Getränke', o: ['der Reis', 'der Saft', 'der Tee'], a: 'der Reis' },
      { q: 'Fleischprodukte', o: ['die Birne', 'die Wurst', 'der Schinken'], a: 'die Birne' }
    ] },
    { titel: 'Geschäfte', anweisung: 'Wo kauft man das? Ordnen Sie zu.', anweisungAr: 'من أين نشتري ذلك؟ صِل بين العمودين.', typ: 'match', items: [
      { q: '', pairs: [
        ['Brot und Brötchen', 'in der Bäckerei'],
        ['Fleisch und Wurst', 'in der Metzgerei'],
        ['frisches Obst und Gemüse', 'auf dem Markt'],
        ['fast alles', 'im Supermarkt']
      ] }
    ] },
    { titel: 'Packungen und Mengen', anweisung: 'Was passt? Wählen Sie.', anweisungAr: 'اختر وحدة القياس المناسبة.', typ: 'select', o: ['eine Flasche', 'ein Becher', 'eine Packung', 'ein Kilo', 'ein Stück', 'eine Tüte'], items: [
      { q: '___ Wasser', o: ['eine Flasche', 'ein Stück', 'ein Becher'], a: 'eine Flasche' },
      { q: '___ Joghurt', o: ['ein Becher', 'ein Stück', 'eine Flasche'], a: 'ein Becher' },
      { q: '___ Kartoffeln', o: ['ein Kilo', 'ein Becher', 'eine Flasche'], a: 'ein Kilo' },
      { q: '___ Kuchen', o: ['ein Stück', 'eine Flasche', 'ein Becher'], a: 'ein Stück' },
      { q: '___ Nudeln', o: ['eine Packung', 'eine Flasche', 'ein Becher'], a: 'eine Packung' },
      { q: '___ Brötchen (mitnehmen)', o: ['eine Tüte', 'eine Flasche', 'ein Becher'], a: 'eine Tüte' }
    ] },
    { titel: 'Akkusativ: einen, ein, eine', anweisung: 'Ergänzen Sie den Artikel im Akkusativ.', anweisungAr: 'يتغيّر المذكّر في حالة النصب: ein ← einen، أما المؤنث والمحايد فلا يتغيّران.', typ: 'select', o: ['einen', 'ein', 'eine'], items: [
      { q: 'Ich brauche ___ Apfel.', a: 'einen' },
      { q: 'Wir kaufen ___ Brot.', a: 'ein' },
      { q: 'Er möchte ___ Banane.', a: 'eine' },
      { q: 'Ich nehme ___ Kaffee.', a: 'einen' },
      { q: 'Sie isst ___ Ei.', a: 'ein' },
      { q: 'Möchtest du ___ Tomate?', a: 'eine' }
    ] },
    { titel: 'Akkusativ: der, den, kein, keinen', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'اختر الصيغة الصحيحة في حالة النصب (Akkusativ).', typ: 'select', items: [
      { q: 'Wo finde ich ___ Käse? (der Käse)', o: ['den', 'der', 'dem'], a: 'den' },
      { q: 'Ich trinke ___ Kaffee, ich trinke Tee.', o: ['keinen', 'kein', 'keine'], a: 'keinen' },
      { q: 'Wir haben ___ Milch mehr.', o: ['keine', 'kein', 'keinen'], a: 'keine' },
      { q: 'Der Salat ist lecker. Ich nehme ___ Salat.', o: ['den', 'der', 'die'], a: 'den' },
      { q: 'Er isst ___ Fleisch.', o: ['kein', 'keinen', 'keine'], a: 'kein' }
    ] },
    { titel: 'mögen und möchten', anweisung: 'Schreiben Sie die richtige Form.', anweisungAr: 'mögen = يحبّ، möchten = يرغب في / يودّ.', typ: 'gap', items: [
      { q: 'Ich ___ Schokolade. Sie ist so lecker! (mögen)', a: ['mag'] },
      { q: '___ du Fisch? (mögen)', a: ['Magst'] },
      { q: 'Wir ___ zwei Kaffee, bitte. (möchten)', a: ['möchten', 'moechten'] },
      { q: 'Was ___ Sie trinken? (möchten)', a: ['möchten', 'moechten'] },
      { q: 'Er ___ keinen Käse. (mögen)', a: ['mag'] },
      { q: 'Ich ___ ein Wasser, bitte. (möchten)', a: ['möchte', 'moechte'] }
    ] },
    { titel: 'Verben', anweisung: 'Schreiben Sie das Verb in der richtigen Form.', anweisungAr: 'انتبه: essen ← isst، nehmen ← nimmt.', typ: 'gap', items: [
      { q: 'Was ___ du zum Frühstück? (essen)', a: ['isst'] },
      { q: 'Er ___ einen Salat. (nehmen)', a: ['nimmt'] },
      { q: 'Wir ___ Kartoffeln und Zwiebeln. (brauchen)', a: ['brauchen'] },
      { q: 'Was ___ das Brot? (kosten)', a: ['kostet'] },
      { q: 'Sie ___ gern Tee. (trinken)', a: ['trinkt'] }
    ] },
    { titel: 'Beim Einkaufen', anweisung: 'Was sagt der Verkäufer / die Kundin? Wählen Sie die passende Antwort.', anweisungAr: 'اختر الرد المناسب في المتجر.', typ: 'mcq', items: [
      { q: 'Was möchten Sie?', o: ['Ein Kilo Tomaten, bitte.', 'Danke, gleichfalls.', 'Ja, sehr gern.'], a: 'Ein Kilo Tomaten, bitte.' },
      { q: 'Entschuldigung, wo finde ich Reis?', o: ['Da hinten, neben den Nudeln.', 'Zwei Euro fünfzig.', 'Guten Appetit!'], a: 'Da hinten, neben den Nudeln.' },
      { q: 'Was kostet der Käse?', o: ['2,99 Euro.', 'In der Metzgerei.', 'Er ist lecker.'], a: '2,99 Euro.' },
      { q: 'Noch etwas?', o: ['Nein, danke. Das ist alles.', 'Ja, ich mag Käse.', 'Guten Tag!'], a: 'Nein, danke. Das ist alles.' },
      { q: 'Das macht 8,40 Euro.', o: ['Können Sie wechseln? Ich habe nur 50 Euro.', 'Danke, gut.', 'Ich möchte zahlen.'], a: 'Können Sie wechseln? Ich habe nur 50 Euro.' }
    ] },
    { titel: 'Beim Essen', anweisung: 'Was passt? Ordnen Sie zu.', anweisungAr: 'صِل كل جملة بالرد المناسب على مائدة الطعام.', typ: 'match', items: [
      { q: '', pairs: [
        ['Guten Appetit!', 'Danke, gleichfalls.'],
        ['Schmeckt\'s?', 'Ja, das ist sehr lecker!'],
        ['Möchtest du noch Salat?', 'Nein, danke. Ich bin satt.'],
        ['Das Essen ist fertig!', 'Super, ich komme!']
      ] }
    ] },
    { titel: 'Position im Satz', anweisung: 'Bauen Sie den Satz. Das Verb steht auf Position 2.', anweisungAr: 'يأتي الفعل دائمًا في الموقع الثاني من الجملة.', typ: 'words', items: [
      { q: 'Aussagesatz (.)', w: ['am Morgen', 'esse', 'ich', 'ein Müsli'], a: ['am Morgen esse ich ein Müsli', 'ich esse am Morgen ein Müsli', 'ein Müsli esse ich am Morgen'] },
      { q: 'Aussagesatz (.)', w: ['zum Mittagessen', 'trinkt', 'er', 'Wasser'], a: ['zum Mittagessen trinkt er Wasser', 'er trinkt zum Mittagessen Wasser', 'Wasser trinkt er zum Mittagessen'] },
      { q: 'Aussagesatz (.)', w: ['heute', 'kaufen', 'wir', 'Fisch'], a: ['heute kaufen wir Fisch', 'wir kaufen heute Fisch', 'Fisch kaufen wir heute'] },
      { q: 'W-Frage (?)', w: ['was', 'isst', 'du', 'gern'], a: ['was isst du gern'] }
    ] },
    { titel: 'Mahlzeiten', anweisung: 'Frühstück, Mittagessen oder Abendessen?', anweisungAr: 'فطور أم غداء أم عشاء؟', typ: 'select', o: ['das Frühstück', 'das Mittagessen', 'das Abendessen'], items: [
      { q: 'Um 7 Uhr morgens: ___', a: 'das Frühstück' },
      { q: 'Um 13 Uhr: ___', a: 'das Mittagessen' },
      { q: 'Um 19 Uhr: ___', a: 'das Abendessen' }
    ] },
    { titel: 'Lesen: Der Einkaufszettel', anweisung: 'Lesen Sie die Nachricht. Richtig oder falsch?', anweisungAr: 'اقرأ الرسالة. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Hallo Omar! Heute Abend kommen Mona und Tarek zum Essen. Ich koche Reis mit Hähnchen und einen Salat. Wir haben noch Reis, aber wir brauchen ein Hähnchen, zwei Gurken und ein Kilo Tomaten. Wir haben keine Milch mehr. Bitte kauf auch eine Packung Kaffee und ein Stück Kuchen für den Nachtisch. Den Kuchen gibt es in der Bäckerei. Danke! Nadia',
      items: [
        { q: 'Heute Abend kommen Gäste.', a: true },
        { q: 'Omar muss Reis kaufen.', a: false },
        { q: 'Nadia braucht zwei Gurken.', a: true },
        { q: 'Es gibt noch Milch.', a: false },
        { q: 'Den Kuchen kauft Omar in der Bäckerei.', a: true }
      ] },
    { titel: 'Schreiben: Mein Essen', anweisung: 'Was essen und trinken Sie zum Frühstück, zum Mittagessen und zum Abendessen? Was mögen Sie nicht? (ca. 30 Wörter)', anweisungAr: 'ماذا تأكل وتشرب في الفطور والغداء والعشاء؟ وما الذي لا تحبه؟ نحو 30 كلمة.', typ: 'write', items: [
      { q: 'Zum Frühstück …', min: 25, muster: 'Zum Frühstück esse ich Brot mit Käse und ein Ei. Ich trinke Tee mit Milch. Zum Mittagessen esse ich gern Reis mit Hähnchen und Salat. Am Abend esse ich nicht viel, oft nur einen Joghurt. Fisch mag ich nicht.' }
    ] }
  ]
};
