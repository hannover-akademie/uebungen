// Netzwerk neu A1 – Kapitel 5: Alltag und Familie
window.UEBUNG = {
  kurs: 'Netzwerk neu A1', kapitel: 5, titel: 'Alltag und Familie',
  titelAr: 'الساعة والحياة اليومية والعائلة – am/um/von…bis وأدوات الملكية و müssen/können/wollen',
  teile: [
    { titel: 'Wie spät ist es?', anweisung: 'Welche Uhrzeit ist richtig?', anweisungAr: 'كم الساعة؟ اختر الإجابة الصحيحة.', typ: 'mcq', items: [
      { q: '8:30', o: ['Es ist halb neun.', 'Es ist halb acht.', 'Es ist acht nach drei.'], a: 'Es ist halb neun.' },
      { q: '10:15', o: ['Es ist Viertel nach zehn.', 'Es ist Viertel vor zehn.', 'Es ist zehn nach Viertel.'], a: 'Es ist Viertel nach zehn.' },
      { q: '6:45', o: ['Es ist Viertel vor sieben.', 'Es ist Viertel nach sechs.', 'Es ist halb sieben.'], a: 'Es ist Viertel vor sieben.' },
      { q: '4:10', o: ['Es ist zehn nach vier.', 'Es ist zehn vor vier.', 'Es ist vier nach zehn.'], a: 'Es ist zehn nach vier.' },
      { q: '1:55', o: ['Es ist kurz vor zwei.', 'Es ist kurz nach eins.', 'Es ist halb zwei.'], a: 'Es ist kurz vor zwei.' }
    ] },
    { titel: 'Zeitangaben', anweisung: 'am, um oder von … bis? Ergänzen Sie.', anweisungAr: 'تُستعمل am مع الأيام وأجزاء اليوم، و um مع الساعة، و von … bis للمدة.', typ: 'select', o: ['am', 'um', 'von', 'bis'], items: [
      { q: 'Der Kurs beginnt ___ 9 Uhr.', a: 'um' },
      { q: 'Ich gehe ___ Montag zum Sport.', a: 'am' },
      { q: 'Ich arbeite ___ Montag bis Freitag.', a: 'von' },
      { q: 'Das Café ist von 8 ___ 18 Uhr geöffnet.', a: 'bis' },
      { q: 'Ich lerne ___ Abend Deutsch.', a: 'am' },
      { q: 'Wir treffen uns ___ halb acht.', a: 'um' }
    ] },
    { titel: 'Mein Tag', anweisung: 'Was passt? Ordnen Sie zu.', anweisungAr: 'صِل كل وقت بما يحدث فيه.', typ: 'match', items: [
      { q: '', pairs: [
        ['Um 6:30 Uhr', 'stehe ich auf.'],
        ['Um 7 Uhr', 'dusche ich.'],
        ['Von 8 bis 16 Uhr', 'arbeite ich im Büro.'],
        ['Am Abend', 'mache ich Hausaufgaben.'],
        ['Um 23 Uhr', 'schlafe ich.']
      ] }
    ] },
    { titel: 'Die Familie', anweisung: 'Wer ist das? Ergänzen Sie.', anweisungAr: 'من هذا في العائلة؟', typ: 'select', o: ['Bruder', 'Schwester', 'Großvater', 'Großmutter', 'Eltern', 'Tochter', 'Geschwister'], items: [
      { q: 'Der Vater von meiner Mutter ist mein ___.', a: 'Großvater' },
      { q: 'Die Mutter von meinem Vater ist meine ___.', a: 'Großmutter' },
      { q: 'Mein Vater und meine Mutter sind meine ___.', a: 'Eltern' },
      { q: 'Der Sohn von meinen Eltern ist mein ___.', a: 'Bruder' },
      { q: 'Meine Eltern haben eine ___: Das bin ich!', a: 'Tochter' },
      { q: 'Mein Bruder und meine Schwester sind meine ___.', a: 'Geschwister' }
    ] },
    { titel: 'Possessivartikel', anweisung: 'Ergänzen Sie mein, meine, dein, sein, ihr …', anweisungAr: 'اختر أداة الملكية الصحيحة.', typ: 'select', items: [
      { q: 'Das ist ___ Bruder. Er heißt Ali. (ich)', o: ['mein', 'meine', 'meinen'], a: 'mein' },
      { q: 'Wie heißt ___ Schwester? (du)', o: ['deine', 'dein', 'deinen'], a: 'deine' },
      { q: 'Tom und ___ Frau wohnen in Bonn. (er)', o: ['seine', 'ihre', 'sein'], a: 'seine' },
      { q: 'Lena besucht ___ Eltern. (sie)', o: ['ihre', 'seine', 'ihr'], a: 'ihre' },
      { q: 'Wir besuchen ___ Großvater. (wir)', o: ['unseren', 'unser', 'unsere'], a: 'unseren' },
      { q: 'Frau Klein, ist das ___ Handy? (Sie)', o: ['Ihr', 'ihr', 'Ihre'], a: 'Ihr' }
    ] },
    { titel: 'Possessivartikel im Akkusativ', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'يأخذ المذكّر في حالة النصب النهاية -en: meinen، deinen…', typ: 'select', items: [
      { q: 'Ich besuche am Sonntag ___ Bruder.', o: ['meinen', 'mein', 'meine'], a: 'meinen' },
      { q: 'Hast du ___ Handy?', o: ['dein', 'deinen', 'deine'], a: 'dein' },
      { q: 'Er sucht ___ Brille.', o: ['seine', 'seinen', 'sein'], a: 'seine' },
      { q: 'Ich rufe ___ Vater an.', o: ['meinen', 'mein', 'meiner'], a: 'meinen' }
    ] },
    { titel: 'müssen, können, wollen', anweisung: 'Schreiben Sie das Modalverb in der richtigen Form.', anweisungAr: 'اكتب الفعل المساعد (Modalverb) في صيغته الصحيحة: ich muss, du kannst, er will…', typ: 'gap', items: [
      { q: 'Ich ___ heute lange arbeiten. (müssen)', a: ['muss'] },
      { q: '___ du morgen kommen? (können)', a: ['Kannst'] },
      { q: 'Er ___ ins Kino gehen. (wollen)', a: ['will'] },
      { q: 'Wir ___ einen Termin machen. (müssen)', a: ['müssen', 'muessen'] },
      { q: 'Sie ___ sehr gut kochen. (können)', a: ['kann'] },
      { q: 'Was ___ ihr am Wochenende machen? (wollen)', a: ['wollt'] }
    ] },
    { titel: 'Die Satzklammer', anweisung: 'Bauen Sie den Satz. Das Modalverb steht auf Position 2, der Infinitiv am Ende.', anweisungAr: 'يأتي الفعل المساعد في الموقع الثاني، ويأتي المصدر في آخر الجملة.', typ: 'words', items: [
      { q: 'Aussagesatz (.)', w: ['ich', 'muss', 'heute', 'arbeiten'], a: ['ich muss heute arbeiten', 'heute muss ich arbeiten'] },
      { q: 'W-Frage (?)', w: ['wann', 'kannst', 'du', 'kommen'], a: ['wann kannst du kommen'] },
      { q: 'Aussagesatz (.)', w: ['am Samstag', 'wollen', 'wir', 'eine Party', 'machen'], a: ['am Samstag wollen wir eine Party machen', 'wir wollen am Samstag eine Party machen', 'eine Party wollen wir am Samstag machen'] },
      { q: 'Ja/Nein-Frage (?)', w: ['können', 'Sie', 'mir', 'helfen'], a: ['können Sie mir helfen'] }
    ] },
    { titel: 'Termine am Telefon', anweisung: 'Was passt? Wählen Sie die Antwort.', anweisungAr: 'اختر الرد المناسب في المكالمة الهاتفية.', typ: 'mcq', items: [
      { q: 'Praxis Dr. Berger, guten Tag. Was kann ich für Sie tun?', o: ['Ich hätte gern einen Termin.', 'Auf Wiederhören.', 'Ich bin ledig.'], a: 'Ich hätte gern einen Termin.' },
      { q: 'Geht es am Dienstag um 10 Uhr?', o: ['Nein, das geht leider nicht. Ich muss arbeiten.', 'Es ist zehn Uhr.', 'Am Dienstag ist Dienstag.'], a: 'Nein, das geht leider nicht. Ich muss arbeiten.' },
      { q: 'Und am Donnerstag um 16 Uhr?', o: ['Ja, das passt gut.', 'Viertel nach vier.', 'Ich habe Stress.'], a: 'Ja, das passt gut.' },
      { q: 'Entschuldigung, ich komme zu spät.', o: ['Kein Problem.', 'Gute Nacht!', 'Ich bin pünktlich.'], a: 'Kein Problem.' }
    ] },
    { titel: 'Lesen: Familie Nasser', anweisung: 'Lesen Sie den Text. Richtig oder falsch?', anweisungAr: 'اقرأ النص. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Ich heiße Laila Nasser. Ich bin verheiratet und habe zwei Kinder: einen Sohn und eine Tochter. Mein Mann heißt Samir. Er ist Ingenieur und muss jeden Tag von 8 bis 17 Uhr arbeiten. Ich arbeite nur am Vormittag. Am Nachmittag hole ich die Kinder von der Schule ab. Am Wochenende besuchen wir oft meine Eltern. Sie wohnen in Köln. Mein Vater kann sehr gut kochen!',
      items: [
        { q: 'Laila ist ledig.', a: false },
        { q: 'Laila hat zwei Kinder.', a: true },
        { q: 'Samir arbeitet von 8 bis 17 Uhr.', a: true },
        { q: 'Laila arbeitet am Nachmittag.', a: false },
        { q: 'Lailas Eltern wohnen in Köln.', a: true }
      ] },
    { titel: 'Schreiben: Mein Alltag', anweisung: 'Beschreiben Sie Ihren Tag: Wann stehen Sie auf? Was machen Sie am Vormittag, am Nachmittag und am Abend? (ca. 35 Wörter)', anweisungAr: 'صِف يومك: متى تستيقظ؟ وماذا تفعل في الصباح وبعد الظهر وفي المساء؟ نحو 35 كلمة.', typ: 'write', items: [
      { q: 'Ich stehe um … auf.', min: 30, muster: 'Ich stehe um halb sieben auf. Ich dusche und frühstücke. Um acht Uhr fahre ich mit dem Bus zum Kurs. Von neun bis zwölf Uhr lerne ich Deutsch. Am Nachmittag arbeite ich. Am Abend koche ich und mache Hausaufgaben. Um elf Uhr schlafe ich.' }
    ] }
  ]
};
