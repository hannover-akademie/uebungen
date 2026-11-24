// Aspekte neu B2 – Kapitel 6: Fit für … (M1 Fit für den Onlineeinkauf · M2 Fit am Telefon · M3 Fit für die Kollegen · M4 Fit für die Prüfung)
// Grammatik: Passiv mit sein (Zustandspassiv) · irreale Vergleichssätze mit als, als ob, als wenn · Prüfung: telc B2 Leseverstehen Teil 3 (Anzeigen), telc B2 Schreiben (Beschwerde)
window.UEBUNG = {
  kurs: 'Aspekte neu B2', kapitel: 6, titel: 'Fit für …',
  titelAr: 'الاستعداد: للتسوق عبر الإنترنت، وللهاتف، وللزملاء، وللامتحان – المبني للمجهول الحالي (sein) وجمل المقارنة غير الواقعية (als ob)',
  teile: [
    { teil: 'A', titel: 'Lesen – telc B2 Leseverstehen Teil 3', anweisung: 'Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt? Für eine Situation gibt es keine passende Anzeige (X).', anweisungAr: 'اختر الإعلان المناسب لكل موقف. هناك موقف واحد ليس له إعلان (X).', typ: 'select', o: ['A', 'B', 'C', 'D', 'E', 'X'],
      text: 'A  Prüfungsangst? Unser Wochenendseminar zeigt Ihnen Entspannungs- und Lerntechniken für mündliche Prüfungen. Kleine Gruppen, max. 8 Personen.\nB  Telefontraining für Berufstätige: Souverän am Telefon – auch in der Fremdsprache. Abendkurs, 6 Termine, mit vielen Rollenspielen.\nC  Paket nicht angekommen? Ware beschädigt? Die Verbraucherzentrale berät Sie kostenlos zu Ihren Rechten beim Onlinekauf. Termin online buchen.\nD  Teamtraining im Grünen: Stärken Sie den Zusammenhalt Ihrer Abteilung mit gemeinsamen Aufgaben in der Natur. Ideal für Firmen.\nE  Gebrauchte Laptops mit 12 Monaten Garantie – geprüft, gereinigt und sofort einsatzbereit. Online bestellen, im Laden abholen.',
      items: [
        { q: 'Ihre Kollegin muss bald mit Kunden in England telefonieren und ist unsicher.', a: 'B' },
        { q: 'Ihr bestellter Mixer kam kaputt an, und der Händler reagiert nicht.', a: 'C' },
        { q: 'Ihre Chefin sucht eine Aktivität, damit das Team besser zusammenarbeitet.', a: 'D' },
        { q: 'Ihr Freund wird vor jeder Prüfung so nervös, dass er nichts mehr weiß.', a: 'A' },
        { q: 'Ihr Sohn braucht für die Schule einen günstigen Computer.', a: 'E' },
        { q: 'Sie möchten Ihre Präsentationsfolien professioneller gestalten.', a: 'X' }
      ] },
    { teil: 'B1', titel: 'Wortschatz: Einkaufen, Telefonieren, Kollegen', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Lieferung', 'reklamieren', 'Warteschleife', 'durchstellen', 'Kollegialität', 'Prüfungsangst'], items: [
      { q: 'Die ___ sollte eigentlich gestern kommen, aber das Paket ist immer noch nicht da.', a: 'Lieferung' },
      { q: 'Wenn die Ware beschädigt ist, kann man sie ___.', a: 'reklamieren' },
      { q: 'Ich hänge schon seit 20 Minuten in der ___ und höre Musik.', a: 'Warteschleife' },
      { q: 'Einen Moment bitte, ich werde Sie zu Herrn Schmidt ___.', a: 'durchstellen' },
      { q: 'In unserem Büro wird ___ großgeschrieben: Wir helfen uns gegenseitig.', a: 'Kollegialität' },
      { q: 'Gegen ___ helfen eine gute Vorbereitung und Atemübungen.', a: 'Prüfungsangst' }
    ] },
    { teil: 'B2', titel: 'Grammatik: Vorgangs- oder Zustandspassiv?', anweisung: 'Ergänzen Sie wird/werden oder ist/sind.', anweisungAr: 'Vorgangspassiv (werden + Partizip II) = العملية تحدث الآن، و Zustandspassiv (sein + Partizip II) = النتيجة/الحالة بعد انتهاء العملية.', typ: 'select', items: [
      { q: 'Das Paket ___ gerade verpackt. (Vorgang)', o: ['wird', 'ist'], a: 'wird' },
      { q: 'Das Paket ___ schon verpackt. Wir können es abschicken. (Zustand)', o: ['ist', 'wird'], a: 'ist' },
      { q: 'Tut mir leid, der Laden ___ heute geschlossen.', o: ['ist', 'wird'], a: 'ist' },
      { q: 'Die Bestellung ___ morgen ausgeliefert.', o: ['wird', 'ist'], a: 'wird' },
      { q: 'Keine Sorge, die Rechnung ___ längst bezahlt.', o: ['ist', 'wird'], a: 'ist' },
      { q: 'Das Formular ___ noch nicht ausgefüllt – kannst du das bitte machen?', o: ['ist', 'wird'], a: 'ist' }
    ] },
    { teil: 'B3', titel: 'Grammatik: Irreale Vergleichssätze', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'als ob / als wenn + فعل Konjunktiv II في آخر الجملة، أو als + فعل Konjunktiv II مباشرة: Er tut so, als ob er krank wäre = als wäre er krank.', typ: 'select', items: [
      { q: 'Er tut so, als ob er die Antwort ___. (wissen)', o: ['wüsste', 'weiß', 'wusste'], a: 'wüsste' },
      { q: 'Sie spricht so, als ___ sie schon jahrelang in Deutschland. (leben)', o: ['lebte', 'ob lebte', 'lebt'], a: 'lebte' },
      { q: 'Der Kollege benimmt sich, als ___ er hier der Chef.', o: ['wäre', 'ist', 'ob wäre'], a: 'wäre' },
      { q: 'Du siehst aus, als ob du die ganze Nacht nicht geschlafen ___.', o: ['hättest', 'hast', 'hattest'], a: 'hättest' },
      { q: 'Am Telefon klang er, als wenn er gerade ___. (aufwachen, Vergangenheit)', o: ['aufgewacht wäre', 'aufwachte', 'aufgewacht ist'], a: 'aufgewacht wäre' }
    ] },
    { teil: 'B4', titel: 'Grammatik: als ob – Sätze bauen', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة.', typ: 'words', items: [
      { q: 'als ob (.)', w: ['er', 'tut so,', 'als ob', 'er', 'keine Zeit', 'hätte'], a: ['er tut so, als ob er keine zeit hätte'] },
      { q: 'als + Konjunktiv II (.)', w: ['die Kollegin', 'redet,', 'als', 'wüsste', 'sie', 'alles', 'besser'], a: ['die kollegin redet, als wüsste sie alles besser'] }
    ] },
    { teil: 'C1', titel: 'Sprechen: Am Telefon', anweisung: 'Lesen Sie, was die Person am Telefon sagt. Welche Antwort passt am besten?', anweisungAr: 'اختر الرد الأنسب في المكالمة الهاتفية.', typ: 'mcq', items: [
      { q: '„Kundenservice Mediashop, Sie sprechen mit Frau Krüger. Was kann ich für Sie tun?“', o: ['Guten Tag, mein Name ist Ali Nasser. Ich rufe wegen meiner Bestellung vom 3. Mai an.', 'Hallo, wer ist da?', 'Mein Paket!'], a: 'Guten Tag, mein Name ist Ali Nasser. Ich rufe wegen meiner Bestellung vom 3. Mai an.' },
      { q: '„Herr Weber ist gerade in einer Besprechung.“', o: ['Könnten Sie ihm bitte ausrichten, dass er mich zurückrufen soll?', 'Dann holen Sie ihn bitte sofort.', 'Schade. Tschüss.'], a: 'Könnten Sie ihm bitte ausrichten, dass er mich zurückrufen soll?' },
      { q: '„Wie ist Ihre Kundennummer?“ – Sie haben sie nicht verstanden.', o: ['Entschuldigung, die Verbindung ist schlecht. Könnten Sie das bitte wiederholen?', 'Ich habe keine Nummer.', 'Wie bitte? Sprechen Sie lauter!'], a: 'Entschuldigung, die Verbindung ist schlecht. Könnten Sie das bitte wiederholen?' },
      { q: '„Wir können Ihnen leider nur einen Gutschein anbieten.“ – Sie möchten Ihr Geld zurück.', o: ['Das verstehe ich, aber ich bestehe auf einer Rückerstattung des Kaufpreises.', 'Okay, dann eben nicht.', 'Gutscheine sind doof.'], a: 'Das verstehe ich, aber ich bestehe auf einer Rückerstattung des Kaufpreises.' },
      { q: 'Sie möchten das Telefongespräch beenden.', o: ['Vielen Dank für Ihre Hilfe. Auf Wiederhören!', 'Ciao.', 'Das war alles, Ende.'], a: 'Vielen Dank für Ihre Hilfe. Auf Wiederhören!' },
      { q: 'Kollege: „Kannst du mir kurz bei der Präsentation helfen?“ – Sie haben gerade keine Zeit.', o: ['Gerade passt es leider schlecht, aber in einer Stunde helfe ich dir gern.', 'Nein.', 'Mach das doch selbst.'], a: 'Gerade passt es leider schlecht, aber in einer Stunde helfe ich dir gern.' }
    ] },
    { teil: 'C2', titel: 'Sprechen: Wer sagt das am Telefon?', anweisung: 'Sagt das eher der Anrufer oder die Mitarbeiterin der Firma?', anweisungAr: 'هل يقول ذلك المتصل أم موظفة الشركة؟', typ: 'select', o: ['Anrufer', 'Mitarbeiterin'], items: [
      { q: '„Ich hätte gern Frau Becker gesprochen.“', a: 'Anrufer' },
      { q: '„Bleiben Sie bitte dran, ich verbinde.“', a: 'Mitarbeiterin' },
      { q: '„Ich rufe an, weil ich eine Frage zu meiner Rechnung habe.“', a: 'Anrufer' },
      { q: '„Darf ich Ihnen etwas ausrichten?“', a: 'Mitarbeiterin' },
      { q: '„Unter welcher Nummer kann Sie Frau Becker zurückrufen?“', a: 'Mitarbeiterin' },
      { q: '„Wann kann ich sie am besten erreichen?“', a: 'Anrufer' }
    ] },
    { teil: 'D', titel: 'Schreiben – telc B2 Schreiben (Beschwerde)', anweisung: 'Sie haben in einem Onlineshop einen Laptop bestellt. Das Gerät kam zwei Wochen zu spät und funktioniert nicht richtig. Schreiben Sie eine Beschwerde an den Kundenservice (ca. 150 Wörter). Beschreiben Sie, was Sie bestellt haben, was passiert ist und welche Probleme Sie dadurch hatten. Sagen Sie, was Sie jetzt erwarten.', anweisungAr: 'تدريب على امتحان telc B2 (الكتابة): رسالة شكوى (نحو 150 كلمة) عن حاسوب وصل متأخرًا ومعطّلًا: ماذا طلبت، وماذا حدث، وما المشاكل الناتجة، وماذا تتوقع الآن. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nSehr geehrte Damen und Herren,\nam … habe ich bei Ihnen … bestellt (Bestellnummer …).\nLeider muss ich mich über … beschweren. / Zu meinem Ärger musste ich feststellen, dass …\nDadurch hatte ich große Probleme, denn … / Das ist besonders ärgerlich, weil …\nIch erwarte, dass Sie … / Ich bitte Sie daher, … / Sollte …, werde ich …\nMit freundlichen Grüßen',
      items: [
        { q: 'Ihre Beschwerde', min: 130, muster: 'Sehr geehrte Damen und Herren,\nam 2. März habe ich in Ihrem Onlineshop den Laptop „Pro 15“ zum Preis von 899 Euro bestellt (Bestellnummer 48213). Laut Ihrer Webseite sollte das Gerät innerhalb von drei Tagen geliefert werden.\nLeider muss ich mich über Ihren Service beschweren. Der Laptop ist erst nach zwei Wochen angekommen, und er funktioniert so schlecht, als wäre er schon jahrelang benutzt worden: Der Bildschirm wird nach wenigen Minuten schwarz, und der Akku ist nach einer Stunde leer.\nDas ist besonders ärgerlich, weil ich den Laptop dringend für mein Studium brauche. Ich konnte deshalb eine wichtige Hausarbeit nicht rechtzeitig abgeben.\nIch erwarte, dass Sie das defekte Gerät auf Ihre Kosten abholen und mir innerhalb einer Woche einen neuen Laptop schicken. Sollte das nicht möglich sein, bitte ich um die vollständige Rückerstattung des Kaufpreises.\nMit freundlichen Grüßen\nYasmin Adel' }
    ] }
  ]
};
