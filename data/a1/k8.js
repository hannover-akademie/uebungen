// Netzwerk neu A1 – Kapitel 8: Fit und gesund
window.UEBUNG = {
  kurs: 'Netzwerk neu A1', kapitel: 8, titel: 'Fit und gesund',
  titelAr: 'الجسم والأمراض والطبيب – صيغة الأمر (Imperativ) و sollen/müssen/dürfen',
  teile: [
    { titel: 'Körperteile', anweisung: 'Was ist das? Wählen Sie.', anweisungAr: 'أيّ جزء من الجسم؟', typ: 'mcq', items: [
      { q: 'Damit sieht man.', o: ['die Augen', 'die Ohren', 'die Füße'], a: 'die Augen' },
      { q: 'Damit hört man.', o: ['die Ohren', 'die Hände', 'die Zähne'], a: 'die Ohren' },
      { q: 'Damit riecht man.', o: ['die Nase', 'der Mund', 'der Bauch'], a: 'die Nase' },
      { q: 'Damit geht man.', o: ['die Beine', 'die Arme', 'die Haare'], a: 'die Beine' },
      { q: 'Er hat zehn davon an den Händen.', o: ['die Finger', 'die Zähne', 'die Knie'], a: 'die Finger' }
    ] },
    { titel: 'Was tut weh?', anweisung: 'Ergänzen Sie die Schmerzen.', anweisungAr: 'اكتب نوع الألم.', typ: 'select', o: ['Kopfschmerzen', 'Halsschmerzen', 'Bauchschmerzen', 'Rückenschmerzen', 'Zahnschmerzen'], items: [
      { q: 'Mein Kopf tut weh. Ich habe ___.', a: 'Kopfschmerzen' },
      { q: 'Mein Hals tut weh. Ich habe ___.', a: 'Halsschmerzen' },
      { q: 'Mein Bauch tut weh. Ich habe ___.', a: 'Bauchschmerzen' },
      { q: 'Mein Rücken tut weh. Ich habe ___.', a: 'Rückenschmerzen' },
      { q: 'Mein Zahn tut weh. Ich habe ___.', a: 'Zahnschmerzen' }
    ] },
    { titel: 'Beim Arzt', anweisung: 'Was sagt der Patient? Wählen Sie.', anweisungAr: 'ماذا يقول المريض للطبيب؟', typ: 'mcq', items: [
      { q: 'Ärztin: Was fehlt Ihnen denn?', o: ['Ich habe Fieber und Husten.', 'Ich bin sportlich.', 'Gute Besserung!'], a: 'Ich habe Fieber und Husten.' },
      { q: 'Ärztin: Seit wann haben Sie Schmerzen?', o: ['Seit drei Tagen.', 'In der Apotheke.', 'Zwei Tabletten.'], a: 'Seit drei Tagen.' },
      { q: 'Ärztin: Hier ist ein Rezept.', o: ['Danke für Ihre Hilfe!', 'Ich bin erkältet.', 'Rauchen Sie nicht!'], a: 'Danke für Ihre Hilfe!' },
      { q: 'Ihr Freund ist krank. Sie sagen:', o: ['Gute Besserung!', 'Guten Appetit!', 'Herzlichen Glückwunsch!'], a: 'Gute Besserung!' }
    ] },
    { titel: 'Medikamente', anweisung: 'Was passt? Ordnen Sie zu.', anweisungAr: 'صِل كل مشكلة بحلّها.', typ: 'match', items: [
      { q: '', pairs: [
        ['Ich habe Kopfschmerzen.', 'Nehmen Sie eine Tablette.'],
        ['Ich habe eine Wunde am Finger.', 'Hier ist ein Pflaster.'],
        ['Ich habe Husten.', 'Trinken Sie den Saft dreimal täglich.'],
        ['Mein Rücken tut weh.', 'Nehmen Sie die Salbe.']
      ] }
    ] },
    { titel: 'Imperativ mit du', anweisung: 'Schreiben Sie den Imperativ (du).', anweisungAr: 'الأمر مع du: يُحذف الضمير du والنهاية -st، مثل: du trinkst ← Trink!', typ: 'gap', items: [
      { q: '___ viel Wasser! (trinken)', a: ['Trink', 'Trinke'] },
      { q: '___ heute im Bett! (bleiben)', a: ['Bleib', 'Bleibe'] },
      { q: '___ die Tablette! (nehmen)', a: ['Nimm'] },
      { q: '___ nicht so viel! (essen)', a: ['Iss'] },
      { q: '___ ruhig! (sein)', a: ['Sei'] },
      { q: '___ regelmäßig Sport! (machen)', a: ['Mach', 'Mache'] }
    ] },
    { titel: 'Imperativ mit ihr und Sie', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'صيغة الأمر مع ihr ومع Sie.', typ: 'select', items: [
      { q: 'Kinder, ___ eure Jacken an! (anziehen, ihr)', o: ['zieht', 'zieh', 'ziehen'], a: 'zieht' },
      { q: 'Herr Klein, ___ Sie bitte nicht! (rauchen)', o: ['rauchen', 'raucht', 'rauch'], a: 'rauchen' },
      { q: 'Lisa und Tom, ___ leise! (sein, ihr)', o: ['seid', 'sei', 'sind'], a: 'seid' },
      { q: 'Frau Berg, ___ Sie das Bein nur wenig! (bewegen)', o: ['bewegen', 'bewegt', 'beweg'], a: 'bewegen' }
    ] },
    { titel: 'sollen, müssen, dürfen', anweisung: 'Schreiben Sie das Modalverb in der richtigen Form.', anweisungAr: 'sollen = يُطلب منه / يُنصح بـ، müssen = يجب، nicht dürfen = ممنوع.', typ: 'gap', items: [
      { q: 'Der Arzt sagt, ich ___ viel schlafen. (sollen)', a: ['soll'] },
      { q: 'Du ___ nicht rauchen. (dürfen)', a: ['darfst'] },
      { q: 'Wir ___ jeden Tag Tabletten nehmen. (müssen)', a: ['müssen', 'muessen'] },
      { q: 'Er ___ den Verband wechseln. (sollen)', a: ['soll'] },
      { q: 'Hier ___ man nicht parken. (dürfen)', a: ['darf'] },
      { q: '___ ich heute schwimmen? (dürfen)', a: ['Darf'] }
    ] },
    { titel: 'Was sagt die Ärztin?', anweisung: 'Sie sagen es weiter: Was sollen Sie tun? Wählen Sie.', anweisungAr: 'انقل كلام الطبيبة: ماذا يجب عليك أن تفعل؟', typ: 'mcq', items: [
      { q: 'Ärztin: „Trinken Sie viel Tee!“ – Ich …', o: ['soll viel Tee trinken.', 'darf keinen Tee trinken.', 'trinke nie Tee.'], a: 'soll viel Tee trinken.' },
      { q: 'Ärztin: „Bleiben Sie zwei Tage im Bett!“ – Ich …', o: ['soll zwei Tage im Bett bleiben.', 'muss zwei Tage arbeiten.', 'darf Sport machen.'], a: 'soll zwei Tage im Bett bleiben.' },
      { q: 'Ärztin: „Rauchen ist verboten!“ – Ich …', o: ['darf nicht rauchen.', 'soll rauchen.', 'muss rauchen.'], a: 'darf nicht rauchen.' }
    ] },
    { titel: 'Erlaubt oder verboten?', anweisung: 'Was bedeuten die Schilder? Ordnen Sie zu.', anweisungAr: 'ما معنى هذه اللافتات؟', typ: 'match', items: [
      { q: '', pairs: [
        ['Rauchen verboten!', 'Hier darf man nicht rauchen.'],
        ['Hunde erlaubt.', 'Hier dürfen Hunde rein.'],
        ['Bitte leise!', 'Hier soll man nicht laut sprechen.'],
        ['Handys aus!', 'Man muss das Handy ausmachen.']
      ] }
    ] },
    { titel: 'Lesen: Fit bleiben', anweisung: 'Lesen Sie den Text. Richtig oder falsch?', anweisungAr: 'اقرأ النص. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Tipps für den Winter: So bleiben Sie gesund!\nGehen Sie jeden Tag eine halbe Stunde spazieren, auch bei Regen. Trinken Sie mindestens zwei Liter Wasser oder Tee pro Tag. Essen Sie viel Obst und Gemüse und nicht so viele Süßigkeiten. Schlafen Sie mindestens sieben Stunden. Sind Sie erkältet? Dann bleiben Sie zu Hause und machen Sie keinen Sport. Haben Sie Fieber? Dann gehen Sie zum Arzt.',
      items: [
        { q: 'Man soll jeden Tag spazieren gehen.', a: true },
        { q: 'Bei Regen soll man zu Hause bleiben.', a: false },
        { q: 'Man soll mindestens zwei Liter trinken.', a: true },
        { q: 'Man soll viele Süßigkeiten essen.', a: false },
        { q: 'Mit Erkältung soll man keinen Sport machen.', a: true }
      ] },
    { titel: 'Schreiben: Gute Besserung', anweisung: 'Ihre Freundin ist krank. Schreiben Sie ihr eine Nachricht mit Tipps (Imperativ). (ca. 30 Wörter)', anweisungAr: 'صديقتك مريضة. اكتب لها رسالة فيها نصائح بصيغة الأمر. نحو 30 كلمة.', typ: 'write', items: [
      { q: 'Liebe …', min: 25, muster: 'Liebe Sara,\noh nein, du bist krank! Bleib heute im Bett und trink viel Tee mit Honig. Nimm die Tabletten vom Arzt. Mach keinen Sport und schlaf viel! Ich rufe dich morgen an.\nGute Besserung!\nDeine Mona' }
    ] }
  ]
};
