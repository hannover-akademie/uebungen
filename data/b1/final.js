// Netzwerk neu B1 – Finaltest (Kapitel 1–12)
// Aufbau wie eine B1-Prüfung: A Lesen (Goethe-Zertifikat B1, Teile 1–5) · B Sprachbausteine (telc B1, Teile 1–2) · C Grammatik · D Wortschatz und Redemittel · E Schreiben (Goethe B1, Aufgaben 1–3)
window.UEBUNG = {
  kurs: 'Netzwerk neu B1', kapitel: 'Final', label: 'Finaltest B1', titel: 'Abschlusstest Kapitel 1–12 (Modellprüfung)',
  titelAr: 'الامتحان النهائي لمستوى B1 على نمط امتحانات Goethe و telc: قراءة، وعناصر لغوية، وقواعد، ومفردات، وكتابة',
  hinweis: 'Dauer: ca. 120 Minuten · Teil A Lesen · Teil B Sprachbausteine · Teil C Grammatik · Teil D Wortschatz und Redemittel · Teil E Schreiben\nArbeiten Sie allein und ohne Wörterbuch. Bestanden ab 60 %.',
  hinweisAr: 'المدة نحو 120 دقيقة. أجب بمفردك ودون قاموس. درجة النجاح 60٪. يصحّح المحاضر جزء الكتابة.',
  teile: [
    // ---------------- A LESEN ----------------
    { teil: 'A1', titel: 'Lesen Teil 1 (Goethe B1)', anweisung: 'Lesen Sie den Text. Sind die Aussagen richtig oder falsch?', anweisungAr: 'اقرأ التدوينة: هل العبارات صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Mein erstes Jahr in Leipzig\nVor einem Jahr bin ich wegen meiner neuen Stelle von Kairo nach Leipzig gezogen. Am Anfang war alles schwierig: Ich kannte niemanden, und das Wetter war im Winter grau und kalt. Nachdem ich mich in einem Sportverein angemeldet hatte, wurde es besser. Dort habe ich Martin kennengelernt, der heute mein bester Freund ist. Er hat mir gezeigt, wo man am Wochenende gut frühstücken kann, und mir beim Umzug in meine neue Wohnung geholfen. Was mir in Deutschland am meisten gefällt, ist die Pünktlichkeit der Menschen. Allerdings vermisse ich manchmal die Spontaneität in Ägypten, wo man Freunde einfach ohne Termin besucht. Im Sommer kommt meine Familie zum ersten Mal zu Besuch. Ich freue mich schon sehr darauf, ihnen meine neue Heimat zu zeigen.',
      items: [
        { q: 'Der Autor ist wegen seiner Arbeit nach Leipzig gezogen.', a: true },
        { q: 'Er hat Martin bei der Arbeit kennengelernt.', a: false },
        { q: 'Martin hat ihm beim Umzug geholfen.', a: true },
        { q: 'In Deutschland besucht der Autor seine Freunde oft ohne Termin.', a: false },
        { q: 'Seine Familie hat ihn schon mehrmals in Leipzig besucht.', a: false },
        { q: 'Er möchte seiner Familie die Stadt zeigen.', a: true }
      ] },
    { teil: 'A2', titel: 'Lesen Teil 2 (Goethe B1)', anweisung: 'Lesen Sie den Zeitungsartikel. Welche Lösung (a, b oder c) ist richtig?', anweisungAr: 'اقرأ المقال واختر الإجابة الصحيحة.', typ: 'mcq',
      text: 'Repair-Café: Reparieren statt wegwerfen\nIn der Stadtbibliothek Hannover treffen sich jeden ersten Samstag im Monat Menschen, die kaputte Dinge nicht einfach wegwerfen wollen. Im Repair-Café helfen ehrenamtliche Experten dabei, Toaster, Fahrräder oder Kleidung zu reparieren. Bezahlt werden muss nichts, aber über eine kleine Spende freut sich das Team. „Die Besucher sollen nicht nur ihre Sachen zurückbekommen, sondern auch selbst lernen, wie man etwas repariert“, erklärt der Organisator Thomas Weber. Das erste Repair-Café wurde 2009 in Amsterdam gegründet. Heute gibt es allein in Deutschland über 1000 solcher Treffpunkte. Je mehr Dinge repariert werden, desto weniger Müll entsteht. Etwa 70 Prozent der Gegenstände können wieder benutzt werden. Wer mitmachen möchte, braucht sich nicht anzumelden.',
      items: [
        { q: 'Das Repair-Café findet …', o: ['einmal im Monat statt.', 'jeden Samstag statt.', 'nur im Sommer statt.'], a: 'einmal im Monat statt.' },
        { q: 'Die Reparatur …', o: ['ist kostenlos.', 'kostet fünf Euro.', 'muss vorher bezahlt werden.'], a: 'ist kostenlos.' },
        { q: 'Thomas Weber möchte, dass die Besucher …', o: ['auch selbst etwas lernen.', 'neue Geräte kaufen.', 'im Team mitarbeiten.'], a: 'auch selbst etwas lernen.' },
        { q: 'Die Idee kommt …', o: ['aus den Niederlanden.', 'aus Hannover.', 'aus Berlin.'], a: 'aus den Niederlanden.' },
        { q: 'Wer ins Repair-Café gehen will, …', o: ['kann einfach vorbeikommen.', 'muss sich anmelden.', 'muss Mitglied sein.'], a: 'kann einfach vorbeikommen.' }
      ] },
    { teil: 'A3', titel: 'Lesen Teil 3 (Goethe B1)', anweisung: 'Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt? Für eine Situation gibt es keine Anzeige (X).', anweisungAr: 'اختر الإعلان المناسب لكل شخص. أحد المواقف ليس له إعلان مناسب (X).', typ: 'select', o: ['A', 'B', 'C', 'D', 'E', 'X'],
      text: 'A  Deutschkurs B2 am Abend: Montag und Mittwoch, 18:30–21:00 Uhr. Vorbereitung auf das Goethe-Zertifikat. Kursbeginn: 3. März.\nB  Babysitterin (Studentin, 22) sucht Familien in der Südstadt. Erfahrung mit Kleinkindern, Erste-Hilfe-Kurs vorhanden.\nC  Fahrradwerkstatt „Rad & Tat“: Wir reparieren Ihr Fahrrad innerhalb von 24 Stunden. Auch Verkauf von gebrauchten Rädern.\nD  Nachmieter gesucht: 2-Zimmer-Wohnung mit Balkon, Nähe Hauptbahnhof, 650 € warm, frei ab 1. April.\nE  Lauftreff für alle: Jeden Sonntag um 9 Uhr am Maschsee. Kostenlos, ohne Anmeldung, Anfänger willkommen!',
      items: [
        { q: 'Frau Saad sucht eine Wohnung in der Nähe des Bahnhofs.', a: 'D' },
        { q: 'Herr Lehmann möchte am Wochenende mit anderen Leuten Sport machen.', a: 'E' },
        { q: 'Familie Ahmed braucht jemanden, der abends auf ihren Sohn aufpasst.', a: 'B' },
        { q: 'Yusuf arbeitet tagsüber und will sich auf die B2-Prüfung vorbereiten.', a: 'A' },
        { q: 'Maria möchte ein neues E-Bike kaufen.', a: 'X' },
        { q: 'Karims Fahrrad ist kaputt, und er braucht es schnell wieder.', a: 'C' }
      ] },
    { teil: 'A4', titel: 'Lesen Teil 4 (Goethe B1)', anweisung: 'Lesen Sie die Kommentare zum Thema „Sollten Kinder schon in der Grundschule ein Smartphone haben?“. Ist die Person dafür?', anweisungAr: 'هل الشخص مؤيّد (Ja) أم معارض (Nein) لامتلاك الأطفال هاتفًا ذكيًا في المرحلة الابتدائية؟', typ: 'select', o: ['Ja', 'Nein'],
      text: '1 Sandra (38): Meine Tochter fährt allein mit dem Bus zur Schule. Mit dem Handy kann sie mich jederzeit anrufen. Das beruhigt mich.\n2 Herr Wolf (55): Kinder sollten draußen spielen, anstatt stundenlang auf einen Bildschirm zu schauen. Ein Smartphone brauchen sie frühestens mit zwölf.\n3 Leyla (29): Je früher Kinder lernen, verantwortungsvoll mit Medien umzugehen, desto besser. Deshalb finde ich ein Handy in der Grundschule sinnvoll.\n4 Frank (44): Im Internet gibt es zu viele Gefahren, die kleine Kinder nicht verstehen. Ich würde meinem Sohn kein Smartphone geben.\n5 Frau Dietrich (61): Als Lehrerin sehe ich jeden Tag, wie Handys im Unterricht stören. Die Kinder können sich nicht mehr konzentrieren.',
      items: [
        { q: 'Sandra', a: 'Ja' },
        { q: 'Herr Wolf', a: 'Nein' },
        { q: 'Leyla', a: 'Ja' },
        { q: 'Frank', a: 'Nein' },
        { q: 'Frau Dietrich', a: 'Nein' }
      ] },
    { teil: 'A5', titel: 'Lesen Teil 5 (Goethe B1)', anweisung: 'Sie lesen die Benutzungsordnung der Stadtbibliothek. Welche Lösung (a, b oder c) ist richtig?', anweisungAr: 'اقرأ قواعد استخدام المكتبة واختر الإجابة الصحيحة.', typ: 'mcq',
      text: 'Benutzungsordnung der Stadtbibliothek\n1. Für die Ausleihe brauchen Sie einen Bibliotheksausweis. Er kostet 15 € pro Jahr. Kinder und Jugendliche unter 18 Jahren bekommen ihn kostenlos.\n2. Bücher können vier Wochen ausgeliehen werden, DVDs nur eine Woche. Die Leihfrist kann zweimal online verlängert werden, wenn das Medium nicht von einer anderen Person bestellt wurde.\n3. Wer Medien zu spät zurückgibt, muss pro Tag und Medium 0,50 € bezahlen.\n4. Wenn Sie ein Buch beschädigen oder verlieren, müssen Sie es ersetzen.\n5. In den Lesesälen darf nicht telefoniert und nicht gegessen werden. Getränke in geschlossenen Flaschen sind erlaubt.',
      items: [
        { q: 'Ein Bibliotheksausweis ist kostenlos für …', o: ['Schüler unter 18 Jahren.', 'alle Studenten.', 'Rentner.'], a: 'Schüler unter 18 Jahren.' },
        { q: 'Eine DVD darf man …', o: ['eine Woche behalten.', 'vier Wochen behalten.', 'nicht ausleihen.'], a: 'eine Woche behalten.' },
        { q: 'Die Leihfrist kann man nicht verlängern, wenn …', o: ['ein anderer Leser das Buch bestellt hat.', 'man das Buch zweimal gelesen hat.', 'man keinen Computer hat.'], a: 'ein anderer Leser das Buch bestellt hat.' },
        { q: 'Sie geben zwei Bücher drei Tage zu spät zurück. Sie bezahlen …', o: ['3,00 €.', '1,50 €.', '0,50 €.'], a: '3,00 €.' },
        { q: 'Im Lesesaal darf man …', o: ['Wasser aus einer geschlossenen Flasche trinken.', 'leise telefonieren.', 'ein Brötchen essen.'], a: 'Wasser aus einer geschlossenen Flasche trinken.' }
      ] },
    // ---------------- B SPRACHBAUSTEINE ----------------
    { teil: 'B1', titel: 'Sprachbausteine Teil 1 (telc B1)', anweisung: 'Lesen Sie den Brief. Welches Wort (a, b oder c) passt in die Lücken 1–6?', anweisungAr: 'اختر الكلمة المناسبة لكل فراغ في الرسالة.', typ: 'select',
      text: 'Liebe Amira,\nvielen Dank für deine Einladung zu deiner Hochzeit! Ich freue mich sehr __(1)__, dass du an mich gedacht hast. Leider kann ich nicht kommen, __(2)__ ich genau an diesem Wochenende meine B1-Prüfung habe. Wenn ich Zeit __(3)__, würde ich natürlich sofort kommen! Ich habe dir aber schon ein Geschenk geschickt, __(4)__ du hoffentlich nächste Woche bekommst. __(5)__ ihr aus den Flitterwochen zurück seid, besuche ich euch. Sag mir bitte, __(6)__ euch der Mai passt.\nAlles Liebe\nDeine Dina',
      items: [
        { q: 'Lücke 1: ___', o: ['darüber', 'davon', 'darauf'], a: 'darüber' },
        { q: 'Lücke 2: ___', o: ['weil', 'deshalb', 'trotzdem'], a: 'weil' },
        { q: 'Lücke 3: ___', o: ['hätte', 'habe', 'hatte'], a: 'hätte' },
        { q: 'Lücke 4: ___', o: ['das', 'dem', 'was'], a: 'das' },
        { q: 'Lücke 5: ___', o: ['Sobald', 'Bevor', 'Während'], a: 'Sobald' },
        { q: 'Lücke 6: ___', o: ['ob', 'dass', 'wenn'], a: 'ob' }
      ] },
    { teil: 'B2', titel: 'Sprachbausteine Teil 2 (telc B1)', anweisung: 'Lesen Sie den Text. Welches Wort aus dem Kasten passt in die Lücken 1–6? Jedes Wort passt nur einmal.', anweisungAr: 'اختر من صندوق الكلمات الكلمة المناسبة لكل فراغ. كل كلمة تُستخدم مرة واحدة فقط.', typ: 'select', o: ['wurde', 'obwohl', 'damit', 'seit', 'denen', 'je', 'wo', 'zu'],
      text: 'Unser Nachbarschaftsgarten\n__(1)__ zwei Jahren gibt es in unserem Viertel einen Gemeinschaftsgarten. Er __(2)__ von einer Bürgerinitiative gegründet. Heute arbeiten dort 30 Familien, von __(3)__ viele aus anderen Ländern kommen. Jeder hat ein kleines Beet, __(4)__ er Gemüse anbauen kann. __(5)__ die Arbeit manchmal anstrengend ist, macht sie allen Spaß. Am Wochenende kochen wir zusammen, __(6)__ sich die Nachbarn besser kennenlernen.',
      items: [
        { q: 'Lücke 1: ___', a: 'seit' },
        { q: 'Lücke 2: ___', a: 'wurde' },
        { q: 'Lücke 3: ___', a: 'denen' },
        { q: 'Lücke 4: ___', a: 'wo' },
        { q: 'Lücke 5: ___', a: 'obwohl' },
        { q: 'Lücke 6: ___', a: 'damit' }
      ] },
    // ---------------- C GRAMMATIK ----------------
    { teil: 'C1', titel: 'Grammatik aus Kapitel 1–6', anweisung: 'Was ist richtig? Wählen Sie.', anweisungAr: 'اختر الإجابة الصحيحة (قواعد الفصول 1–6).', typ: 'mcq', items: [
      { q: 'Ich habe keine Lust, heute ___.', o: ['einzukaufen', 'zu einkaufen', 'einkaufen'], a: 'einzukaufen' },
      { q: '___ es regnet, machen wir einen Ausflug.', o: ['Obwohl', 'Weil', 'Trotz'], a: 'Obwohl' },
      { q: 'Ich lasse mein Auto in der Werkstatt ___.', o: ['reparieren', 'repariert', 'zu reparieren'], a: 'reparieren' },
      { q: '___ des schlechten Wetters fiel das Fest aus.', o: ['Wegen', 'Trotz', 'Obwohl'], a: 'Wegen' },
      { q: 'Als Kind ___ ich jeden Sommer bei meiner Oma.', o: ['war', 'bin', 'wäre'], a: 'war' },
      { q: 'Wenn ich mehr Zeit hätte, ___ ich öfter reisen.', o: ['würde', 'werde', 'wurde'], a: 'würde' },
      { q: 'Ich freue mich ___, dich bald zu sehen.', o: ['darauf', 'darüber', 'dafür'], a: 'darauf' },
      { q: 'Wir sparen Wasser, ___ die Umwelt geschützt wird.', o: ['damit', 'um', 'sodass zu'], a: 'damit' },
      { q: 'In zehn Jahren ___ ich ein eigenes Geschäft haben.', o: ['werde', 'wurde', 'würden'], a: 'werde' },
      { q: 'Ich habe mit dem ___ gesprochen. (der Kollege)', o: ['Kollegen', 'Kollege', 'Kolleges'], a: 'Kollegen' }
    ] },
    { teil: 'C2', titel: 'Grammatik aus Kapitel 7–12', anweisung: 'Was ist richtig? Wählen Sie.', anweisungAr: 'اختر الإجابة الصحيحة (قواعد الفصول 7–12).', typ: 'mcq', items: [
      { q: 'Nachdem er gegessen ___, ging er spazieren.', o: ['hatte', 'hat', 'war'], a: 'hatte' },
      { q: '___ du kochst, decke ich den Tisch.', o: ['Während', 'Wegen', 'Trotz'], a: 'Während' },
      { q: 'Sie brauchen nicht zu ___. Ich habe Zeit.', o: ['warten', 'gewartet', 'wartet'], a: 'warten' },
      { q: 'Ich wasche ___ die Hände.', o: ['mir', 'mich', 'sich'], a: 'mir' },
      { q: 'Er spricht ___ Englisch ___ Französisch. (beides)', o: ['sowohl … als auch', 'weder … noch', 'entweder … oder'], a: 'sowohl … als auch' },
      { q: 'Wir trinken gern heiß___ Tee.', o: ['en', 'er', 'es'], a: 'en' },
      { q: 'Das Museum ___ 1890 gebaut.', o: ['wurde', 'wird', 'ist'], a: 'wurde' },
      { q: 'Die Rechnung muss bis Freitag bezahlt ___.', o: ['werden', 'worden', 'wurde'], a: 'werden' },
      { q: 'Das ist alles, ___ ich weiß.', o: ['was', 'das', 'wo'], a: 'was' },
      { q: 'Je mehr ich lese, ___ besser verstehe ich.', o: ['desto', 'als', 'so'], a: 'desto' }
    ] },
    { teil: 'C3', titel: 'Grammatik: Sätze bauen', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة.', typ: 'words', items: [
      { q: 'Konjunktiv II (.)', w: ['an deiner Stelle', 'würde', 'ich', 'mich', 'um die Stelle', 'bewerben'], a: ['an deiner stelle würde ich mich um die stelle bewerben', 'ich würde mich an deiner stelle um die stelle bewerben'] },
      { q: 'Passiv Perfekt (.)', w: ['das Paket', 'ist', 'gestern', 'geliefert', 'worden'], a: ['das paket ist gestern geliefert worden', 'gestern ist das paket geliefert worden'] },
      { q: 'Relativsatz (.)', w: ['das ist', 'die Freundin,', 'mit', 'der', 'ich', 'Urlaub', 'mache'], a: ['das ist die freundin, mit der ich urlaub mache'] }
    ] },
    // ---------------- D WORTSCHATZ UND REDEMITTEL ----------------
    { teil: 'D1', titel: 'Wortschatz', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Bewerbung', 'Unterkunft', 'Überweisung', 'Abgase', 'Ehrenamt', 'Ausstellung', 'Verspätung', 'Vorsätze'], items: [
      { q: 'Für die Reise brauchen wir noch eine günstige ___.', a: 'Unterkunft' },
      { q: 'Ich habe meine ___ an fünf Firmen geschickt.', a: 'Bewerbung' },
      { q: 'Der Zug hat 20 Minuten ___.', a: 'Verspätung' },
      { q: 'Die ___ der Autos verschmutzen die Luft.', a: 'Abgase' },
      { q: 'Sie arbeitet im ___ beim Roten Kreuz.', a: 'Ehrenamt' },
      { q: 'Die ___ im Museum zeigt Bilder von Picasso.', a: 'Ausstellung' },
      { q: 'Die Miete bezahle ich per ___.', a: 'Überweisung' },
      { q: 'Für das neue Jahr habe ich gute ___.', a: 'Vorsätze' }
    ] },
    { teil: 'D2', titel: 'Redemittel: Was sagen Sie?', anweisung: 'Welche Reaktion passt am besten?', anweisungAr: 'ما الرد المناسب في كل موقف؟', typ: 'mcq', items: [
      { q: 'Sie möchten höflich widersprechen.', o: ['Da bin ich anderer Meinung.', 'Das ist doch Quatsch!', 'Genau so ist es.'], a: 'Da bin ich anderer Meinung.' },
      { q: 'Sie haben etwas nicht verstanden und fragen nach.', o: ['Könnten Sie das bitte noch einmal erklären?', 'Das weiß ich schon.', 'Da hast du recht.'], a: 'Könnten Sie das bitte noch einmal erklären?' },
      { q: 'Jemand bietet Ihnen Hilfe an. Sie lehnen höflich ab.', o: ['Danke, das ist nicht nötig.', 'Lass mich in Ruhe!', 'Ja, gern.'], a: 'Danke, das ist nicht nötig.' },
      { q: 'Sie äußern eine Vermutung.', o: ['Ich könnte mir vorstellen, dass …', 'Ich bin sicher, dass …', 'Ich weiß genau, dass …'], a: 'Ich könnte mir vorstellen, dass …' },
      { q: 'Sie beginnen eine Präsentation.', o: ['In meiner Präsentation geht es um …', 'Zum Schluss möchte ich …', 'Vielen Dank für Ihre Aufmerksamkeit.'], a: 'In meiner Präsentation geht es um …' },
      { q: 'Sie wollen in einer Diskussion einen Kompromiss vorschlagen.', o: ['Wie wäre es, wenn wir …?', 'Das kommt nicht in Frage.', 'Immer das Gleiche!'], a: 'Wie wäre es, wenn wir …?' }
    ] },
    // ---------------- E SCHREIBEN ----------------
    { teil: 'E1', titel: 'Schreiben Aufgabe 1 (Goethe B1)', anweisung: 'Sie haben letztes Wochenende mit Freunden einen Ausflug gemacht. Ein Freund / eine Freundin konnte nicht mitkommen. Schreiben Sie ihm/ihr eine E-Mail (ca. 80 Wörter): Beschreiben Sie: Wie war der Ausflug? Begründen Sie: Was hat Ihnen besonders gefallen? Machen Sie einen Vorschlag für einen gemeinsamen Ausflug.', anweisungAr: 'رسالة غير رسمية (نحو 80 كلمة) إلى صديق: صف الرحلة، واذكر ما أعجبك ولماذا، واقترح رحلة مشتركة.', typ: 'write',
      text: 'Nützliche Redemittel:\nLiebe … / Lieber …, wie geht es dir?\nLetztes Wochenende waren wir … / Nachdem wir …, …\nBesonders gut hat mir gefallen, dass … / weil …\nHättest du Lust, …? / Wie wäre es, wenn wir …?\nViele Grüße / Bis bald',
      items: [
        { q: 'Liebe … / Lieber …', min: 70, muster: 'Liebe Sophie,\nschade, dass du am Wochenende nicht mitkommen konntest! Wir waren am Steinhuder Meer. Nachdem wir mit dem Zug angekommen waren, haben wir ein Boot gemietet und sind auf die Insel gefahren. Am Nachmittag haben wir am Ufer gepicknickt. Besonders gut hat mir gefallen, dass es so ruhig war, denn in der Stadt ist es immer laut. Hättest du Lust, im Mai mit mir noch einmal dorthin zu fahren? Wir könnten auch die Fahrräder mitnehmen.\nViele Grüße\nAmira' }
    ] },
    { teil: 'E2', titel: 'Schreiben Aufgabe 2 (Goethe B1)', anweisung: 'Sie haben im Radio eine Diskussionssendung zum Thema „Arbeiten im Homeoffice“ gehört. Im Online-Gästebuch der Sendung finden Sie folgende Meinung: Petra (41): „Im Homeoffice arbeitet niemand richtig. Man sollte jeden Tag ins Büro gehen.“ Schreiben Sie nun Ihre Meinung (ca. 80 Wörter).', anweisungAr: 'اكتب رأيك (نحو 80 كلمة) عن العمل من المنزل، مع أسباب وأمثلة.', typ: 'write',
      text: 'Nützliche Redemittel:\nIch bin nicht der Meinung von Petra, denn … / Ich stimme Petra teilweise zu.\nEinerseits …, andererseits … / Ein Vorteil / Nachteil ist, dass …\nWenn ich im Homeoffice arbeite, … / Je …, desto …\nIn meiner Heimat … / Meiner Erfahrung nach …\nZusammenfassend …',
      items: [
        { q: 'Hallo zusammen, …', min: 70, muster: 'Hallo zusammen,\nich bin nicht der Meinung von Petra. Einerseits ist es richtig, dass man sich zu Hause manchmal schlechter konzentrieren kann, weil die Kinder oder der Haushalt stören. Andererseits spart man viel Zeit, denn man braucht nicht jeden Tag zur Arbeit zu fahren. Wenn ich im Homeoffice arbeite, schaffe ich oft mehr als im Büro. Außerdem entstehen weniger Abgase. Meiner Erfahrung nach ist eine Mischung die beste Lösung: zwei Tage zu Hause und drei Tage im Büro, damit man die Kollegen trotzdem regelmäßig sieht.\nViele Grüße\nHassan' }
    ] },
    { teil: 'E3', titel: 'Schreiben Aufgabe 3 (Goethe B1)', anweisung: 'Ihr Deutschkurs hat einen Kursabend geplant. Sie können aber nicht kommen. Schreiben Sie Ihrer Kursleiterin, Frau Schulz, eine E-Mail (ca. 40 Wörter). Entschuldigen Sie sich höflich und berichten Sie, warum Sie nicht kommen können.', anweisungAr: 'رسالة رسمية قصيرة (نحو 40 كلمة) إلى المحاضِرة: اعتذر بأدب واذكر سبب عدم حضورك.', typ: 'write',
      text: 'Nützliche Redemittel:\nSehr geehrte Frau …, / Liebe Frau …,\nleider kann ich am … nicht … , weil …\nEs tut mir sehr leid, dass …\nIch wünsche Ihnen und dem Kurs …\nMit freundlichen Grüßen / Viele Grüße',
      items: [
        { q: 'Liebe Frau Schulz, …', min: 35, muster: 'Liebe Frau Schulz,\nleider kann ich am Freitag nicht zu unserem Kursabend kommen, weil mein Sohn krank ist und ich bei ihm bleiben muss. Es tut mir sehr leid, denn ich hatte mich schon sehr darauf gefreut. Ich wünsche Ihnen und dem Kurs einen schönen Abend!\nViele Grüße\nMariam Youssef' }
    ] }
  ]
};
