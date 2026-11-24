// Netzwerk neu B1 – Kapitel 2: Das ist ja praktisch!
// Grammatik: Verb lassen, Folgen (deshalb/deswegen/darum/daher, sodass, so … dass), Genitiv, wegen und trotz · Redemittel: reklamieren, Meinung zu Werbung
// Prüfungstraining: telc B1 Lesen Teil 3 (Anzeigen) · telc B1 Schreiben (Beschwerdebrief mit 4 Leitpunkten)
window.UEBUNG = {
  kurs: 'Netzwerk neu B1', kapitel: 2, titel: 'Das ist ja praktisch!',
  titelAr: 'الأجهزة والشكاوى والإعلانات – الفعل lassen، والتعبير عن النتيجة، وحالة الإضافة (Genitiv)، و wegen/trotz',
  teile: [
    { titel: 'Wortschatz: Geräte und Technik', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Powerbank', 'aufladen', 'Ladekabel', 'stumm schalten', 'Gebrauchsanweisung', 'Alarmanlage'], items: [
      { q: 'Unterwegs lade ich mein Handy mit einer ___.', a: 'Powerbank' },
      { q: 'Der Akku ist leer. Ich muss ihn ___.', a: 'aufladen' },
      { q: 'Ich habe mein ___ zu Hause vergessen.', a: 'Ladekabel' },
      { q: 'Im Kino sollte man das Handy ___.', a: 'stumm schalten' },
      { q: 'Wie funktioniert das Gerät? Lies doch die ___!', a: 'Gebrauchsanweisung' },
      { q: 'Unser Haus hat eine ___. Sie schützt vor Einbrüchen.', a: 'Alarmanlage' }
    ] },
    { titel: 'Wortschatz: Werbung', anweisung: 'Was ist richtig? Wählen Sie.', anweisungAr: 'اختر الإجابة الصحيحة عن الإعلانات.', typ: 'mcq', items: [
      { q: 'Ein kurzer Satz, den man sich gut merken kann, z. B. „Haribo macht Kinder froh“, ist ein …', o: ['Slogan.', 'Rabatt.', 'Merkmal.'], a: 'Slogan.' },
      { q: 'Diese Woche kostet die Waschmaschine 20 % weniger. Das ist ein …', o: ['Sonderangebot.', 'Einbruch.', 'Fingerabdruck.'], a: 'Sonderangebot.' },
      { q: 'Werbung spricht oft Gefühle an und kann so unser Kaufverhalten …', o: ['beeinflussen.', 'reinigen.', 'installieren.'], a: 'beeinflussen.' },
      { q: 'Ein neues Produkt ist ab Montag in den Geschäften. Es kommt …', o: ['auf den Markt.', 'in die Gefahr.', 'zum Neubau.'], a: 'auf den Markt.' },
      { q: 'Die Werbung ist frech und originell. Sie fällt sofort …', o: ['auf.', 'aus.', 'an.'], a: 'auf.' }
    ] },
    { titel: 'Grammatik: lassen', anweisung: 'Ergänzen Sie lassen in der richtigen Form.', anweisungAr: 'lassen + مصدر = يجعل شخصًا آخر يفعل الشيء: Sie lässt ihr Handy reparieren.', typ: 'gap', items: [
      { q: 'Sie ___ ihr Handy reparieren. (Präsens)', a: ['lässt', 'laesst'] },
      { q: '___ du dein Fahrrad in der Werkstatt reparieren? (Präsens)', a: ['Lässt', 'Laesst'] },
      { q: 'Wir ___ die Waschmaschine liefern. (Präsens)', a: ['lassen'] },
      { q: 'Ihr ___ euch die Haare schneiden. (Präsens)', a: ['lasst'] },
      { q: 'Er hat seinen Laptop reparieren ___. (Perfekt)', a: ['lassen'] }
    ] },
    { titel: 'Grammatik: selbst machen oder machen lassen?', anweisung: 'Welcher Satz passt?', anweisungAr: 'هل يفعل الشخص الشيء بنفسه أم يجعل غيره يفعله؟', typ: 'mcq', items: [
      { q: 'Tarik hat keine Ahnung von Technik. Sein Handy ist kaputt. Er …', o: ['lässt es reparieren.', 'repariert es selbst.', 'lässt es selbst.'], a: 'lässt es reparieren.' },
      { q: 'Lena ist Elektrikerin. Ihre Lampe ist kaputt. Sie …', o: ['repariert sie selbst.', 'lässt sie reparieren lassen.', 'lässt reparieren sie.'], a: 'repariert sie selbst.' },
      { q: 'Wir haben keine Zeit zum Kochen. Wir …', o: ['lassen uns das Essen liefern.', 'lassen das Essen kochen uns.', 'kochen lassen.'], a: 'lassen uns das Essen liefern.' }
    ] },
    { titel: 'Grammatik: Folgen ausdrücken', anweisung: 'Ergänzen Sie deshalb, sodass oder so … dass.', anweisungAr: 'deshalb/deswegen/darum/daher يأتي بعدها الفعل مباشرة. أما sodass و so … dass فجملة فرعية والفعل في آخرها. وإذا كان هناك صفة نضع so قبلها.', typ: 'select', items: [
      { q: 'Tarik ist viel unterwegs, ___ braucht er eine Powerbank.', o: ['deshalb', 'sodass', 'dass'], a: 'deshalb' },
      { q: 'Online gibt es keine Beratung, ___ Tarik lieber ins Geschäft geht.', o: ['sodass', 'deshalb', 'darum'], a: 'sodass' },
      { q: 'Der Kopfhörer war ___ teuer, dass sie lange sparen musste.', o: ['so', 'sodass', 'deshalb'], a: 'so' },
      { q: 'Der Akku ist leer, ___ kann ich dich nicht anrufen.', o: ['darum', 'sodass', 'so'], a: 'darum' },
      { q: 'Die Anleitung war kompliziert, ___ wir das Gerät nicht installieren konnten.', o: ['sodass', 'daher', 'deswegen'], a: 'sodass' },
      { q: 'Das Sonderangebot war gut, ___ haben wir zwei Geräte gekauft.', o: ['daher', 'sodass', 'dass'], a: 'daher' }
    ] },
    { titel: 'Grammatik: Folgen – Satzbau', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة.', typ: 'words', items: [
      { q: 'Satz (.)', w: ['das Gerät ist kaputt,', 'deshalb', 'bringe', 'ich', 'es', 'zurück'], a: ['das Gerät ist kaputt, deshalb bringe ich es zurück'] },
      { q: 'Satz (.)', w: ['die Musik war so laut,', 'dass', 'wir', 'nichts', 'verstanden', 'haben'], a: ['die Musik war so laut, dass wir nichts verstanden haben'] }
    ] },
    { titel: 'Grammatik: Genitiv', anweisung: 'Ergänzen Sie den Artikel im Genitiv.', anweisungAr: 'Genitiv: des (+ -s/-es) للمذكر والمحايد، و der للمؤنث والجمع. Wessen? = لِمَن؟', typ: 'select', items: [
      { q: 'Das ist das Haus ___ Eltern. (meine Eltern)', o: ['meiner', 'meinen', 'meine'], a: 'meiner' },
      { q: 'Die Größe ___ Raumes ist ideal. (der Raum)', o: ['des', 'dem', 'der'], a: 'des' },
      { q: 'Die Technik ___ Wohnung ist modern. (die Wohnung)', o: ['der', 'des', 'die'], a: 'der' },
      { q: 'Die Farbe ___ Zimmers gefällt mir. (das Zimmer)', o: ['des', 'der', 'dem'], a: 'des' },
      { q: 'Der Preis ___ Kopfhörers ist zu hoch. (ein Kopfhörer)', o: ['eines', 'einem', 'einer'], a: 'eines' },
      { q: 'Die Meinung ___ Gäste ist uns wichtig. (die Gäste)', o: ['der', 'den', 'des'], a: 'der' }
    ] },
    { titel: 'Grammatik: wegen und trotz', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'wegen = بسبب، trotz = رغم. وبعدهما Genitiv، وتأخذ الصفة النهاية -en.', typ: 'select', items: [
      { q: 'Wir haben kein Smart Home ___ hohen Kosten.', o: ['wegen der', 'trotz der', 'wegen den'], a: 'wegen der' },
      { q: 'Die Wohnung ist ___ smarten Technik gemütlich.', o: ['trotz der', 'wegen der', 'trotz die'], a: 'trotz der' },
      { q: '___ Regens sind wir zu Hause geblieben.', o: ['Wegen des', 'Trotz des', 'Wegen dem'], a: 'Wegen des' },
      { q: '___ Garantie musste ich die Reparatur bezahlen.', o: ['Trotz der', 'Wegen der', 'Trotz die'], a: 'Trotz der' },
      { q: 'Er kauft ___ günstigen Preises immer in diesem Geschäft ein.', o: ['wegen des', 'trotz des', 'wegen der'], a: 'wegen des' }
    ] },
    { titel: 'Redemittel: Etwas reklamieren', anweisung: 'Wer sagt das: der Kunde oder der Verkäufer?', anweisungAr: 'من يقول هذه الجملة: الزبون أم البائع؟', typ: 'select', o: ['Kunde', 'Verkäufer'], items: [
      { q: '„Der Kopfhörer funktioniert nicht richtig.“', a: 'Kunde' },
      { q: '„Was ist denn das Problem?“', a: 'Verkäufer' },
      { q: '„Ich habe noch ein Jahr Garantie.“', a: 'Kunde' },
      { q: '„Haben Sie den Kassenzettel noch?“', a: 'Verkäufer' },
      { q: '„Möchten Sie ein neues Gerät oder das Geld zurück?“', a: 'Verkäufer' },
      { q: '„Ich bin mit dem Gerät leider gar nicht zufrieden.“', a: 'Kunde' }
    ] },
    { titel: 'Redemittel: Meinung zu Werbung', anweisung: 'Positiv oder negativ?', anweisungAr: 'هل الرأي في الإعلان إيجابي أم سلبي؟', typ: 'select', o: ['positiv', 'negativ'], items: [
      { q: '„Ich finde die Idee ausgezeichnet.“', a: 'positiv' },
      { q: '„Die Werbung gefällt mir am wenigsten, weil sie langweilig ist.“', a: 'negativ' },
      { q: '„Die Werbung wirkt auf mich am kreativsten.“', a: 'positiv' },
      { q: '„Ich finde sie seltsam und unmodern.“', a: 'negativ' },
      { q: '„Ich mag bei dieser Werbung die Farben nicht.“', a: 'negativ' }
    ] },
    { titel: 'Prüfungstraining – telc B1 Lesen Teil 3', anweisung: 'Lesen Sie die Situationen 1–5 und die Anzeigen A–F. Welche Anzeige passt zu welcher Situation? Für eine Situation gibt es keine passende Anzeige (X).', anweisungAr: 'تدريب على امتحان telc B1 (القراءة، الجزء 3): أيّ إعلان يناسب كل موقف؟ وموقف واحد ليس له إعلان مناسب، فاختر له X.', typ: 'select',
      text: 'A  Repair Café Linden: Jeden Samstag reparieren Freiwillige kostenlos Lampen, Toaster und Kleidung. Werkzeug ist vorhanden.\nB  Handy-Klinik: Displays und Akkus in 30 Minuten repariert. Mit 6 Monaten Garantie. Mo–Sa 9–19 Uhr.\nC  Technik-Markt: Große Sonderangebote! Alle Waschmaschinen bis zu 30 % billiger. Lieferung gratis.\nD  Volkshochschule: Kurs „Smart Home für Anfänger“ – Wie steuere ich Licht und Heizung mit dem Handy? 4 Abende.\nE  Second-Hand-Laden „Fairkauf“: Gebrauchte Laptops und Tablets, geprüft, mit Quittung und 1 Jahr Garantie.\nF  Sicher wohnen: Wir installieren Ihre Alarmanlage. Kostenlose Beratung bei Ihnen zu Hause.',
      o: ['A', 'B', 'C', 'D', 'E', 'F', 'X'],
      items: [
        { q: '1. Das Display Ihres Handys ist kaputt, und Sie brauchen es schnell wieder.', a: 'B' },
        { q: '2. Sie möchten lernen, wie man ein Haus mit dem Handy steuert.', a: 'D' },
        { q: '3. Sie möchten einen günstigen, gebrauchten Laptop kaufen.', a: 'E' },
        { q: '4. Ihr Toaster ist kaputt, und Sie möchten nichts bezahlen.', a: 'A' },
        { q: '5. Sie suchen einen gebrauchten Fernseher.', a: 'X' }
      ] },
    { titel: 'Prüfungstraining – telc B1 Schreiben: Eine Reklamation', anweisung: 'Sie haben vor drei Wochen im Online-Shop „Technik24“ einen Staubsauger gekauft. Er funktioniert nicht richtig. Schreiben Sie an den Kundenservice (ca. 100 Wörter). Schreiben Sie etwas zu allen vier Punkten: Grund für Ihr Schreiben – Was ist das Problem? – Was haben Sie schon versucht? – Was soll der Shop machen? Denken Sie an Betreff, Anrede und Gruß.', anweisungAr: 'تدريب على امتحان telc B1 (الكتابة): رسالة شكوى رسمية نحو 100 كلمة تتناول النقاط الأربع كلها. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nBetreff: Reklamation …\nSehr geehrte Damen und Herren,\nich schreibe Ihnen, weil … / Am … habe ich bei Ihnen … gekauft.\nLeider funktioniert … nicht richtig. / … ist kaputt.\nIch habe schon … / Trotz …\nDa ich noch Garantie habe, möchte ich … umtauschen / das Geld zurück.\nIch würde mich über eine schnelle Antwort freuen.\nMit freundlichen Grüßen',
      items: [
        { q: 'Betreff: …', min: 85, muster: 'Betreff: Reklamation Staubsauger, Bestellnummer 4471\n\nSehr geehrte Damen und Herren,\nich schreibe Ihnen, weil ich mit meinem neuen Staubsauger leider gar nicht zufrieden bin. Am 2. März habe ich ihn in Ihrem Online-Shop gekauft. Seit letzter Woche wird er nach fünf Minuten so heiß, dass er sich automatisch ausschaltet. Ich habe die Gebrauchsanweisung gründlich gelesen und das Gerät gereinigt. Trotz der Reinigung funktioniert er immer noch nicht richtig. Da ich noch zwei Jahre Garantie habe, möchte ich den Staubsauger umtauschen. Wenn das nicht möglich ist, hätte ich gern mein Geld zurück. Die Quittung schicke ich Ihnen im Anhang.\nIch würde mich über eine schnelle Antwort freuen.\n\nMit freundlichen Grüßen\nKarim Saleh' }
    ] }
  ]
};
