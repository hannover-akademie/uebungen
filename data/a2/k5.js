// Netzwerk neu A2 – Kapitel 5: Leben in der Stadt
// Grammatik: Adjektive nach dem bestimmten Artikel, ohne + Akk / mit + Dat, Konjunktiv II könnte · Redemittel: höflich bitten, eine Stadt beschreiben
window.UEBUNG = {
  kurs: 'Netzwerk neu A2', kapitel: 5, titel: 'Leben in der Stadt',
  titelAr: 'المدينة والمصرف والدوائر الحكومية ومقابلة العمل – الصفة بعد أداة التعريف، و ohne/mit، و könnte للطلب المهذّب',
  teile: [
    { titel: 'Wortschatz: Berufe in der Stadt', anweisung: 'Wer macht was? Ordnen Sie zu.', anweisungAr: 'من يقوم بهذا العمل؟ صِل بين العمودين.', typ: 'match', items: [
      { q: '', pairs: [
        ['die Müllabfuhr', 'leert die Mülltonnen.'],
        ['die Feuerwehr', 'hilft bei Feuer und Unfällen.'],
        ['die Polizei', 'sorgt für Sicherheit.'],
        ['die Straßenreinigung', 'räumt die Straßen auf.'],
        ['die Krankenpflegerin', 'kümmert sich um die Patienten.']
      ] }
    ] },
    { titel: 'Wortschatz: Bei der Behörde und in der Bank', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Formular', 'Antrag', 'Personalausweis', 'Konto', 'abheben', 'sperren'], items: [
      { q: 'Bitte füllen Sie dieses ___ aus.', a: 'Formular' },
      { q: 'Für das Visum müssen Sie einen ___ stellen.', a: 'Antrag' },
      { q: 'Mein ___ ist nicht mehr gültig. Ich brauche einen neuen.', a: 'Personalausweis' },
      { q: 'Ich möchte bei Ihrer Bank ein ___ eröffnen.', a: 'Konto' },
      { q: 'Ich muss am Automaten Geld ___.', a: 'abheben' },
      { q: 'Meine Bankkarte ist weg! Ich muss sie sofort ___ lassen.', a: 'sperren' }
    ] },
    { titel: 'Wortschatz: Einen Job suchen', anweisung: 'Was ist richtig? Wählen Sie.', anweisungAr: 'اختر الإجابة الصحيحة عن البحث عن عمل.', typ: 'mcq', items: [
      { q: 'In der Zeitung oder im Internet liest man eine …', o: ['Stellenanzeige.', 'Mülltonne.', 'Einbürgerung.'], a: 'Stellenanzeige.' },
      { q: 'Für die Bewerbung braucht man Lebenslauf und Zeugnisse, also die …', o: ['Unterlagen.', 'Zutaten.', 'Gesetze.'], a: 'Unterlagen.' },
      { q: 'Sie arbeitet nur 20 Stunden pro Woche. Sie arbeitet in …', o: ['Teilzeit.', 'Sicherheit.', 'Ordnung.'], a: 'Teilzeit.' },
      { q: 'Wir sagen Ihnen bis Freitag, ob Sie die Stelle bekommen. Wir geben Ihnen …', o: ['Bescheid.', 'Lohn.', 'Kredit.'], a: 'Bescheid.' }
    ] },
    { titel: 'Grammatik: Adjektive nach dem bestimmten Artikel', anweisung: 'Ergänzen Sie die Adjektivendung (-e oder -en).', anweisungAr: 'نهاية الصفة بعد أداة التعريف: -e في الحالات الخمس (der/das/die في Nominativ، و das/die في Akkusativ)، وفي باقي الحالات -en.', typ: 'select', items: [
      { q: 'Der schwarz___ Rock gefällt mir. (Nominativ)', o: ['e', 'en'], a: 'e' },
      { q: 'Ich nehme den schwarz___ Rock. (Akkusativ)', o: ['en', 'e'], a: 'en' },
      { q: 'Das weiß___ T-Shirt ist zu klein.', o: ['e', 'en'], a: 'e' },
      { q: 'Was kostet die weiß___ Bluse?', o: ['e', 'en'], a: 'e' },
      { q: 'Er spricht mit dem neu___ Kollegen. (Dativ)', o: ['en', 'e'], a: 'en' },
      { q: 'Die bequem___ Schuhe sind billig. (Plural)', o: ['en', 'e'], a: 'en' },
      { q: 'Wir wohnen in der groß___ Stadt. (Dativ)', o: ['en', 'e'], a: 'en' },
      { q: 'Wie findest du das alt___ Rathaus?', o: ['e', 'en'], a: 'e' }
    ] },
    { titel: 'Grammatik: Adjektive – ganze Form', anweisung: 'Schreiben Sie das Adjektiv mit der richtigen Endung.', anweisungAr: 'اكتب الصفة مع النهاية الصحيحة.', typ: 'gap', items: [
      { q: 'Der ___ Bahnhof ist sehr modern. (neu)', a: ['neue'] },
      { q: 'Kennst du den ___ Park in der Stadtmitte? (schön)', a: ['schönen', 'schoenen'] },
      { q: 'Mit dem ___ Bus kommen wir schneller an. (nächst-)', a: ['nächsten', 'naechsten'] },
      { q: 'Die ___ Brücke ist über 100 Jahre alt. (lang)', a: ['lange'] },
      { q: 'Wir besichtigen die ___ Gebäude. (historisch, Plural)', a: ['historischen'] }
    ] },
    { titel: 'Grammatik: ohne + Akkusativ, mit + Dativ', anweisung: 'Ergänzen Sie.', anweisungAr: 'بعد ohne تأتي حالة Akkusativ، وبعد mit تأتي حالة Dativ.', typ: 'select', items: [
      { q: 'Ohne ___ Pass können Sie nicht reisen. (Ihr Pass)', o: ['Ihren', 'Ihrem', 'Ihr'], a: 'Ihren' },
      { q: 'Mit ___ Pass dürfen Sie über die Grenze. (ein Pass)', o: ['einem', 'einen', 'ein'], a: 'einem' },
      { q: 'Ich gehe nie ohne ___ Handy aus dem Haus. (mein Handy)', o: ['mein', 'meinem', 'meinen'], a: 'mein' },
      { q: 'Er kommt mit ___ Frau zum Termin. (seine Frau)', o: ['seiner', 'seine', 'seinem'], a: 'seiner' },
      { q: 'Ohne ___ Formular geht es leider nicht. (das Formular)', o: ['das', 'dem', 'den'], a: 'das' },
      { q: 'Sie fährt mit ___ Fahrrad zur Bank. (das Fahrrad)', o: ['dem', 'das', 'den'], a: 'dem' }
    ] },
    { titel: 'Grammatik: Konjunktiv II – könnte', anweisung: 'Schreiben Sie die richtige Form von könnte.', anweisungAr: 'صيغة könnte للطلب المهذّب: ich könnte, du könntest, er könnte, wir könnten, ihr könntet, Sie könnten.', typ: 'gap', items: [
      { q: '___ Sie mir bitte kurz helfen?', a: ['Könnten', 'Koennten'] },
      { q: '___ du mir bitte die Nummer geben?', a: ['Könntest', 'Koenntest'] },
      { q: '___ ihr mich bitte vom Bahnhof abholen?', a: ['Könntet', 'Koenntet'] },
      { q: '___ ich mal schnell telefonieren?', a: ['Könnte', 'Koennte'] },
      { q: 'Wir ___ morgen zusammen zur Behörde gehen.', a: ['könnten', 'koennten'] }
    ] },
    { titel: 'Redemittel: Höflich bitten', anweisung: 'Welche Bitte ist am höflichsten?', anweisungAr: 'أيّ طلب هو الأكثر تهذيبًا؟', typ: 'mcq', items: [
      { q: 'Sie möchten die Telefonnummer.', o: ['Könnten Sie mir bitte die Nummer geben?', 'Gib mir die Nummer!', 'Die Nummer, schnell!'], a: 'Könnten Sie mir bitte die Nummer geben?' },
      { q: 'Ihre Bankkarte ist weg.', o: ['Könnten Sie bitte meine Karte sperren?', 'Sperren Sie meine Karte!', 'Karte sperren!'], a: 'Könnten Sie bitte meine Karte sperren?' },
      { q: 'Ihre Freunde sollen Sie abholen.', o: ['Könntet ihr mich bitte abholen?', 'Holt mich ab!', 'Abholen, bitte!'], a: 'Könntet ihr mich bitte abholen?' }
    ] },
    { titel: 'Redemittel: Eine Stadt beschreiben', anweisung: 'Was passt zusammen? Ordnen Sie zu.', anweisungAr: 'صِل كل سؤال عن المدينة بالإجابة المناسبة.', typ: 'match', items: [
      { q: '', pairs: [
        ['Wie groß ist die Stadt?', 'Sie ist nicht so groß. 80.000 Menschen leben dort.'],
        ['Wo liegt die Stadt?', 'Sie liegt im Norden von Deutschland.'],
        ['Was ist Ihnen wichtig?', 'Mir ist wichtig, dass es viele Parks gibt.'],
        ['Was gefällt Ihnen nicht?', 'Mir gefällt nicht so gut, dass es so viel Verkehr gibt.']
      ] }
    ] },
    { titel: 'Redemittel: Beim Vorstellungsgespräch', anweisung: 'Bringen Sie das Gespräch in die richtige Reihenfolge.', anweisungAr: 'رتّب حوار مقابلة العمل.', typ: 'order', items: [
      { q: 'Vorstellungsgespräch im Restaurant', lines: [
        'Guten Tag, Herr Saleh. Bitte nehmen Sie Platz.',
        'Guten Tag. Vielen Dank für die Einladung.',
        'Sie möchten bei uns als Aushilfe arbeiten. Haben Sie schon Erfahrung?',
        'Ja, ich habe zwei Jahre in einem Hotel in Hurghada Gäste bedient.',
        'Sehr gut. Könnten Sie auch am Wochenende arbeiten?',
        'Ja, das ist kein Problem. Ich kann spontan arbeiten.',
        'Prima. Wir geben Ihnen bis Freitag Bescheid.'
      ] }
    ] },
    { titel: 'Lesen: Auf dem Bürgeramt', anweisung: 'Lesen Sie die Information. Richtig oder falsch?', anweisungAr: 'اقرأ المعلومات. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Bürgeramt Mitte – Wichtige Informationen\nSie möchten einen neuen Personalausweis beantragen? Bitte machen Sie online einen Termin. Ohne Termin können wir Ihnen leider nicht helfen. Bringen Sie zum Termin Ihren alten Ausweis und ein aktuelles Foto mit. Der neue Ausweis kostet 37 Euro. Sie können bar oder mit Karte bezahlen. Nach etwa drei Wochen können Sie den Ausweis abholen. Wir geben Ihnen per E-Mail Bescheid.\nÖffnungszeiten: Montag bis Freitag 8–13 Uhr, Donnerstag auch 15–18 Uhr.',
      items: [
        { q: 'Man kann ohne Termin zum Bürgeramt kommen.', a: false },
        { q: 'Man braucht ein aktuelles Foto.', a: true },
        { q: 'Man muss bar bezahlen.', a: false },
        { q: 'Der neue Ausweis ist nach etwa drei Wochen fertig.', a: true },
        { q: 'Am Donnerstagnachmittag ist das Bürgeramt geöffnet.', a: true }
      ] },
    { titel: 'Schreiben: Meine Stadt', anweisung: 'Ein Freund möchte in Ihre Stadt ziehen. Schreiben Sie ihm eine E-Mail (60–80 Wörter): Wie groß ist die Stadt und wo liegt sie? Was gefällt Ihnen besonders (Adjektive!)? Was gefällt Ihnen nicht so gut? Bitten Sie ihn höflich um etwas (Könntest du …?).', anweisungAr: 'صديقك يريد الانتقال إلى مدينتك. اكتب له رسالة إلكترونية (60–80 كلمة): ما حجم المدينة وأين تقع؟ وما الذي يعجبك فيها خاصة (استخدم الصفات)؟ وما الذي لا يعجبك؟ واطلب منه شيئًا بأدب. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nDie Stadt ist groß / nicht so groß. … Menschen leben in …\n… liegt im Norden/Süden/Osten/Westen von …\nMir gefällt besonders, dass … / Ich finde schön, dass …\nMir gefällt nicht so gut, dass …\nKönntest du mir bitte …?',
      items: [
        { q: 'Lieber …', min: 55, muster: 'Lieber Tarek,\nich finde es toll, dass du nach Hannover ziehen möchtest! Die Stadt ist nicht so groß, etwa 540.000 Menschen leben hier. Hannover liegt im Norden von Deutschland. Mir gefällt besonders der große Park mit dem alten Schloss. Ich finde auch schön, dass man überall mit dem Fahrrad fahren kann. Mir gefällt aber nicht so gut, dass die Mieten in der Innenstadt so teuer sind. Könntest du mir bitte sagen, wann du kommst? Dann hole ich dich vom Bahnhof ab.\nViele Grüße\nSamir' }
    ] }
  ]
};
