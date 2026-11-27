// Netzwerk neu A1 – Hören (wie Goethe-Zertifikat A1: Start Deutsch 1 / telc Deutsch A1)
// Wird von assets/app.js vor dem Schreiben-Teil eingefügt. audio = Hörtext (Sprachausgabe), plays = wie oft (1 oder 2).
// Teil 1: kurze Gespräche (a/b/c, 2×) · Teil 2: Durchsagen (richtig/falsch, 1×) · Teil 3: Ansagen am Telefon (a/b/c, 2×)
(function () {
  var RATE = 0.85;
  function teil1(items, teil) {
    return { teil: teil || 'Hören', titel: 'Hören Teil 1 (wie Goethe A1 / telc A1): Kurze Gespräche', typ: 'mcq', plays: 2, rate: RATE,
      anweisung: 'Sie hören kurze Gespräche. Sie hören jeden Text zweimal. Lesen Sie zuerst die Frage. Hören Sie dann den Text und wählen Sie die richtige Antwort.',
      anweisungAr: 'ستسمع محادثات قصيرة، وتسمع كل نص مرتين. اقرأ السؤال أولًا، ثم اضغط على زر التشغيل واختر الإجابة الصحيحة.',
      items: items };
  }
  function teil2(items, teil) {
    return { teil: teil || 'Hören', titel: 'Hören Teil 2 (wie Goethe A1 / telc A1): Durchsagen', typ: 'tf', plays: 1, rate: RATE,
      anweisung: 'Sie hören kurze Durchsagen. Sie hören jeden Text nur einmal. Lesen Sie zuerst den Satz. Ist er richtig oder falsch?',
      anweisungAr: 'ستسمع إعلانات قصيرة، وتسمع كل نص مرة واحدة فقط. اقرأ الجملة أولًا، ثم استمع وحدّد: هل هي صحيحة أم خاطئة؟',
      items: items };
  }
  function teil3(items, teil) {
    return { teil: teil || 'Hören', titel: 'Hören Teil 3 (wie Goethe A1 / telc A1): Nachrichten am Telefon', typ: 'mcq', plays: 2, rate: RATE,
      anweisung: 'Sie hören Nachrichten auf dem Anrufbeantworter. Sie hören jeden Text zweimal. Lesen Sie zuerst die Frage. Wählen Sie dann die richtige Antwort.',
      anweisungAr: 'ستسمع رسائل مسجّلة على المجيب الآلي، وتسمع كل رسالة مرتين. اقرأ السؤال أولًا، ثم اختر الإجابة الصحيحة.',
      items: items };
  }

  window.HOEREN = {
    // ------------------------------------------------ Kapitel 1: Guten Tag!
    k1: [teil1([
      { q: 'Woher kommt Frau Silva?', o: ['Aus Portugal.', 'Aus Spanien.', 'Aus Brasilien.'], a: 'Aus Portugal.',
        audio: [{ s: 'm', t: 'Guten Tag! Wie heißen Sie?' }, { s: 'w', t: 'Mein Name ist Ana Silva.' }, { s: 'm', t: 'Woher kommen Sie, Frau Silva? Aus Spanien?' }, { s: 'w', t: 'Nein, ich komme aus Portugal.' }] },
      { q: 'Wie ist die Telefonnummer von Herrn Wagner?', o: ['0176 345 12 18', '0176 354 12 18', '0167 345 12 18'], a: '0176 345 12 18',
        audio: [{ s: 'w', t: 'Herr Wagner, wie ist Ihre Telefonnummer?' }, { s: 'm', t: 'Null, eins, sieben, sechs, drei, vier, fünf, zwölf, achtzehn.' }, { s: 'w', t: 'Null, eins, sieben, sechs, drei, vier, fünf, zwölf, achtzehn. Danke!' }] },
      { q: 'Wo wohnt Karim?', o: ['In Potsdam.', 'In Berlin.', 'In Kairo.'], a: 'In Potsdam.',
        audio: [{ s: 'm', t: 'Hallo, ich bin Karim.' }, { s: 'w', t: 'Hallo Karim, ich bin Lena. Wohnst du hier in Berlin?' }, { s: 'm', t: 'Nein, ich wohne in Potsdam. Und du?' }, { s: 'w', t: 'Ich wohne in Berlin.' }] },
      { q: 'Welche Sprachen spricht Frau Yilmaz?', o: ['Türkisch, Englisch und Deutsch.', 'Türkisch, Französisch und Deutsch.', 'Englisch, Französisch und Deutsch.'], a: 'Türkisch, Englisch und Deutsch.',
        audio: [{ s: 'm', t: 'Frau Yilmaz, welche Sprachen sprechen Sie?' }, { s: 'w', t: 'Ich spreche Türkisch, Englisch und ein bisschen Deutsch.' }, { s: 'm', t: 'Und Französisch?' }, { s: 'w', t: 'Nein, Französisch spreche ich nicht.' }] },
      { q: 'Wie geht es Tim?', o: ['Nicht so gut.', 'Sehr gut.', 'Gut, danke.'], a: 'Nicht so gut.',
        audio: [{ s: 'w', t: 'Hallo Tim! Wie geht\'s?' }, { s: 'm', t: 'Ach, nicht so gut. Und dir, Anna?' }, { s: 'w', t: 'Mir geht es sehr gut, danke.' }] },
      { q: 'Wie heißt die Frau mit Familiennamen?', o: ['Meier', 'Maier', 'Meyer'], a: 'Meier',
        audio: [{ s: 'm', t: 'Wie ist Ihr Name, bitte?' }, { s: 'w', t: 'Meier.' }, { s: 'm', t: 'Wie schreibt man das?' }, { s: 'w', t: 'Em, e, i, e, er.' }] }
    ])],

    // ------------------------------------------------ Kapitel 2: Freunde, Kollegen und ich
    k2: [teil3([
      { q: 'Wann spielen Jonas und Mia Tennis?', o: ['Am Mittwoch.', 'Am Dienstag.', 'Am Donnerstag.'], a: 'Am Mittwoch.',
        audio: [{ s: 'w', t: 'Hallo Jonas, hier ist Mia. Spielen wir am Mittwoch Tennis? Am Dienstag habe ich keine Zeit. Ruf mich bitte an. Tschüs!' }] },
      { q: 'Was ist Herr Brandt von Beruf?', o: ['Lehrer.', 'Fotograf.', 'Koch.'], a: 'Lehrer.',
        audio: [{ s: 'm', t: 'Guten Tag, hier ist Peter Brandt. Ich bin Lehrer an der Goethe-Schule. Ich suche einen Kurs für Fotografie. Bitte rufen Sie mich an. Danke!' }] },
      { q: 'Wie viele Personen kochen am Samstag zusammen?', o: ['Fünf.', 'Vier.', 'Drei.'], a: 'Fünf.',
        audio: [{ s: 'w', t: 'Hallo Sara, hier ist Tina. Wir kochen am Samstag zusammen. Hast du Zeit? Wir sind fünf Personen: Paul, Eva, Max, ich und du. Bis dann!' }] },
      { q: 'Was machen die Freunde am Freitag?', o: ['Sie spielen Fußball.', 'Sie gehen schwimmen.', 'Sie gehen ins Kino.'], a: 'Sie spielen Fußball.',
        audio: [{ s: 'm', t: 'Hallo Lisa, hier ist Ben. Wir spielen am Freitag Fußball im Park. Kommst du auch? Und am Sonntag gehen wir zusammen schwimmen. Bis bald!' }] },
      { q: 'Wo ist der Deutschkurs?', o: ['In Raum 22.', 'In Raum 12.', 'In Raum 20.'], a: 'In Raum 22.',
        audio: [{ s: 'w', t: 'Guten Tag, hier ist die Sprachschule Lingua. Ihr Deutschkurs ist nicht in Raum zwölf. Der Kurs ist in Raum zweiundzwanzig. Vielen Dank!' }] }
    ])],

    // ------------------------------------------------ Kapitel 3: In Hamburg
    k3: [teil2([
      { q: 'Der Zug nach München fährt heute von Gleis 7.', a: true,
        audio: [{ s: 'w', t: 'Sehr geehrte Fahrgäste, der Zug nach München fährt heute nicht von Gleis vier. Er fährt von Gleis sieben.' }] },
      { q: 'Der nächste Halt ist der Flughafen.', a: false,
        audio: [{ s: 'm', t: 'Nächster Halt: Hauptbahnhof. Hier können Sie in die S-Bahn umsteigen.' }] },
      { q: 'Das Museum ist in zehn Minuten geschlossen.', a: true,
        audio: [{ s: 'w', t: 'Liebe Besucherinnen und Besucher, das Museum schließt in zehn Minuten. Bitte gehen Sie jetzt zum Ausgang. Vielen Dank!' }] },
      { q: 'Die Hafenrundfahrt dauert zwei Stunden.', a: false,
        audio: [{ s: 'm', t: 'Herzlich willkommen auf der Hafenrundfahrt! Die Fahrt dauert eine Stunde. Rechts sehen Sie jetzt die Elbphilharmonie.' }] },
      { q: 'Heute fährt man mit der U-Bahn zum Rathaus.', a: true,
        audio: [{ s: 'w', t: 'Eine Information für alle Fahrgäste: Der Bus Nummer dreizehn fährt heute nicht zum Rathaus. Bitte nehmen Sie die U-Bahn.' }] }
    ])],

    // ------------------------------------------------ Kapitel 4: Guten Appetit!
    k4: [teil1([
      { q: 'Was kauft die Frau?', o: ['Tomaten und Gurken.', 'Tomaten und Äpfel.', 'Gurken und Äpfel.'], a: 'Tomaten und Gurken.',
        audio: [{ s: 'm', t: 'Guten Tag! Was möchten Sie?' }, { s: 'w', t: 'Ich möchte ein Kilo Tomaten und zwei Gurken, bitte.' }, { s: 'm', t: 'Möchten Sie auch Äpfel? Die sind heute sehr gut.' }, { s: 'w', t: 'Nein, danke. Ich habe noch Äpfel.' }] },
      { q: 'Wie viel kosten 100 Gramm Käse?', o: ['2,20 €', '2,12 €', '4,40 €'], a: '2,20 €',
        audio: [{ s: 'w', t: 'Entschuldigung, was kostet der Käse?' }, { s: 'm', t: 'Hundert Gramm kosten zwei Euro zwanzig.' }, { s: 'w', t: 'Gut, dann nehme ich zweihundert Gramm.' }] },
      { q: 'Was trinkt der Mann?', o: ['Tee.', 'Kaffee.', 'Wasser.'], a: 'Tee.',
        audio: [{ s: 'w', t: 'Möchtest du einen Kaffee?' }, { s: 'm', t: 'Nein, danke. Ich trinke keinen Kaffee. Hast du Tee?' }, { s: 'w', t: 'Ja, natürlich.' }, { s: 'm', t: 'Dann gern einen Tee, aber ohne Zucker.' }] },
      { q: 'Was isst Lea nicht gern?', o: ['Fisch.', 'Fleisch.', 'Gemüse.'], a: 'Fisch.',
        audio: [{ s: 'm', t: 'Lea, magst du Fisch?' }, { s: 'w', t: 'Nein, Fisch mag ich nicht. Aber Fleisch esse ich gern. Und Gemüse auch.' }] },
      { q: 'Wo kauft Herr Ahmadi Brot?', o: ['In der Bäckerei.', 'Im Supermarkt.', 'Auf dem Markt.'], a: 'In der Bäckerei.',
        audio: [{ s: 'w', t: 'Herr Ahmadi, kaufen Sie Ihr Brot im Supermarkt?' }, { s: 'm', t: 'Nein, das Brot kaufe ich immer in der Bäckerei. Im Supermarkt kaufe ich Obst und Milch.' }] }
    ])],

    // ------------------------------------------------ Kapitel 5: Alltag und Familie
    k5: [teil3([
      { q: 'Wann beginnt der Kurs heute?', o: ['Um 9:30 Uhr.', 'Um 9:00 Uhr.', 'Um 10:30 Uhr.'], a: 'Um 9:30 Uhr.',
        audio: [{ s: 'w', t: 'Hallo Omar, hier ist Sabine. Kommst du heute zum Deutschkurs? Der Kurs beginnt heute nicht um neun Uhr. Er beginnt um halb zehn. Bis später!' }] },
      { q: 'Wann ist der Termin von Frau Neumann?', o: ['Am Freitag um 11:15 Uhr.', 'Am Freitag um 10:45 Uhr.', 'Am Donnerstag um 11:15 Uhr.'], a: 'Am Freitag um 11:15 Uhr.',
        audio: [{ s: 'm', t: 'Guten Tag, Frau Neumann. Hier ist die Praxis Doktor Roth. Ihr Termin ist nicht am Donnerstag. Er ist am Freitag um Viertel nach elf. Auf Wiederhören!' }] },
      { q: 'Wer hat heute Geburtstag?', o: ['Die Cousine von Lina.', 'Die Tante von Lina.', 'Die Mutter von Lina.'], a: 'Die Cousine von Lina.',
        audio: [{ s: 'w', t: 'Hallo Mama, hier ist Lina. Ich bin noch bei Tante Eva. Meine Cousine Mia hat heute Geburtstag. Ich komme um sieben Uhr nach Hause. Tschüs!' }] },
      { q: 'Was muss Paul heute machen?', o: ['Bis 20 Uhr arbeiten.', 'Einkaufen.', 'Kochen.'], a: 'Bis 20 Uhr arbeiten.',
        audio: [{ s: 'm', t: 'Hallo Jana, hier ist Paul. Ich kann heute leider nicht einkaufen. Ich muss bis zwanzig Uhr arbeiten. Kannst du bitte einkaufen? Danke!' }] },
      { q: 'Was soll Herr Schulz machen?', o: ['Er soll seinen Sohn um 14 Uhr abholen.', 'Er soll seinen Sohn um 12 Uhr abholen.', 'Er soll mit seinem Sohn zum Arzt gehen.'], a: 'Er soll seinen Sohn um 14 Uhr abholen.',
        audio: [{ s: 'w', t: 'Hallo Herr Schulz, hier ist Frau Berger von der Kita. Ihr Sohn Leon ist ein bisschen krank. Können Sie ihn bitte um vierzehn Uhr abholen? Danke!' }] }
    ])],

    // ------------------------------------------------ Kapitel 6: Zeit mit Freunden
    k6: [teil1([
      { q: 'Wann hat Laura Geburtstag?', o: ['Am 3. Mai.', 'Am 3. März.', 'Am 13. Mai.'], a: 'Am 3. Mai.',
        audio: [{ s: 'm', t: 'Laura, wann hast du Geburtstag?' }, { s: 'w', t: 'Am dritten Mai.' }, { s: 'm', t: 'Am dritten März?' }, { s: 'w', t: 'Nein, im Mai! Am dritten Mai.' }] },
      { q: 'Was bestellt die Frau?', o: ['Eine Suppe und ein Wasser.', 'Eine Suppe und ein Hauptgericht.', 'Ein Hauptgericht und ein Wasser.'], a: 'Eine Suppe und ein Wasser.',
        audio: [{ s: 'm', t: 'Guten Abend! Was möchten Sie bestellen?' }, { s: 'w', t: 'Ich nehme die Gemüsesuppe und ein Wasser, bitte.' }, { s: 'm', t: 'Und als Hauptgericht?' }, { s: 'w', t: 'Nichts, danke. Nur die Suppe.' }] },
      { q: 'Wie viel kostet das Essen?', o: ['23,50 €', '25,00 €', '32,50 €'], a: '23,50 €',
        audio: [{ s: 'w', t: 'Zahlen, bitte!' }, { s: 'm', t: 'Zusammen oder getrennt?' }, { s: 'w', t: 'Zusammen, bitte.' }, { s: 'm', t: 'Das macht dreiundzwanzig Euro fünfzig.' }, { s: 'w', t: 'Fünfundzwanzig, bitte. Stimmt so.' }] },
      { q: 'Wo war die Frau gestern?', o: ['Zu Hause.', 'Im Kurs.', 'Bei Freunden.'], a: 'Zu Hause.',
        audio: [{ s: 'm', t: 'Wo warst du gestern? Du warst nicht im Kurs.' }, { s: 'w', t: 'Ich war krank. Ich war den ganzen Tag zu Hause.' }] },
      { q: 'Kommt der Mann zur Party?', o: ['Nein, er hat am Samstag keine Zeit.', 'Ja, er kommt am Samstag.', 'Ja, aber er kommt später.'], a: 'Nein, er hat am Samstag keine Zeit.',
        audio: [{ s: 'w', t: 'Wir machen am Samstag eine Party. Kommst du?' }, { s: 'm', t: 'Am Samstag? Da kann ich leider nicht. Ich besuche meine Eltern. Aber am Sonntag habe ich Zeit.' }] },
      { q: 'Wann fängt der Film an?', o: ['Um 19:45 Uhr.', 'Um 19:00 Uhr.', 'Um 20:15 Uhr.'], a: 'Um 19:45 Uhr.',
        audio: [{ s: 'm', t: 'Wann fängt der Film an?' }, { s: 'w', t: 'Um Viertel vor acht. Ich hole dich um sieben ab, okay?' }, { s: 'm', t: 'Super, bis dann!' }] }
    ])],

    // ------------------------------------------------ Kapitel 7: Arbeitsalltag
    k7: [teil3([
      { q: 'Wann ist das Meeting?', o: ['Um 11 Uhr.', 'Um 10 Uhr.', 'Um 12 Uhr.'], a: 'Um 11 Uhr.',
        audio: [{ s: 'w', t: 'Hallo Herr Krüger, hier ist Frau Lenz. Das Meeting ist heute nicht um zehn Uhr. Es ist um elf Uhr. Bis später!' }] },
      { q: 'Was kann man ab Montag bei der Bank abholen?', o: ['Eine neue Bankkarte.', 'Einen Brief.', 'Ein Paket.'], a: 'Eine neue Bankkarte.',
        audio: [{ s: 'm', t: 'Guten Tag, hier ist die Sparkasse am Marktplatz. Ihre neue Bankkarte ist da. Sie können sie ab Montag bei uns abholen. Wir sind von neun bis sechzehn Uhr für Sie da.' }] },
      { q: 'Wo sind die Unterlagen?', o: ['Auf dem Schreibtisch.', 'Im Schrank.', 'Unter dem Computer.'], a: 'Auf dem Schreibtisch.',
        audio: [{ s: 'w', t: 'Hallo Tom, hier ist Julia. Ich bin heute nicht im Büro. Ich arbeite zu Hause. Die Unterlagen liegen auf meinem Schreibtisch, neben dem Computer.' }] },
      { q: 'Was soll Anna machen?', o: ['Herrn Weber anrufen.', 'Nach Bremen fahren.', 'Um drei Uhr ins Büro kommen.'], a: 'Herrn Weber anrufen.',
        audio: [{ s: 'm', t: 'Hallo Anna, hier ist Markus. Ich bin bei einem Kunden in Bremen. Ich komme erst um drei Uhr zurück. Kannst du bitte Herrn Weber anrufen? Danke!' }] },
      { q: 'Bis wann ist die Kantine heute geöffnet?', o: ['Bis 14 Uhr.', 'Bis 12 Uhr.', 'Bis 16 Uhr.'], a: 'Bis 14 Uhr.',
        audio: [{ s: 'w', t: 'Hier ist die Kantine. Heute gibt es Hähnchen mit Reis oder Nudeln mit Gemüse. Die Kantine ist von zwölf bis vierzehn Uhr geöffnet.' }] }
    ])],

    // ------------------------------------------------ Kapitel 8: Fit und gesund
    k8: [teil2([
      { q: 'Die Praxis ist bis zum 10. August geschlossen.', a: true,
        audio: [{ s: 'w', t: 'Praxis Doktor Hoffmann, guten Tag. Die Praxis ist vom zweiten bis zum zehnten August geschlossen. In dringenden Fällen gehen Sie bitte zu Doktor Klein in der Bahnhofstraße.' }] },
      { q: 'Die Apotheke ist heute bis 18 Uhr geöffnet.', a: false,
        audio: [{ s: 'm', t: 'Liebe Kundinnen und Kunden, unsere Apotheke ist heute bis zwanzig Uhr für Sie da.' }] },
      { q: 'Man darf noch eine Stunde schwimmen.', a: false,
        audio: [{ s: 'w', t: 'Liebe Gäste, bitte kommen Sie jetzt aus dem Wasser. Das Schwimmbad schließt in fünfzehn Minuten.' }] },
      { q: 'Der Rückenkurs kostet heute nichts.', a: true,
        audio: [{ s: 'm', t: 'Herzlich willkommen im Fitnessstudio Aktiv! Heute um achtzehn Uhr gibt es einen Rückenkurs. Der Kurs ist kostenlos. Kommen Sie in Raum drei!' }] },
      { q: 'Patienten ohne Termin sollen zuerst zur Anmeldung gehen.', a: true,
        audio: [{ s: 'w', t: 'Patienten mit Termin: Bitte nehmen Sie im Wartezimmer Platz. Patienten ohne Termin: Bitte gehen Sie zuerst zur Anmeldung.' }] }
    ])],

    // ------------------------------------------------ Kapitel 9: Meine Wohnung
    k9: [teil1([
      { q: 'Wie viele Zimmer hat die Wohnung?', o: ['Drei.', 'Zwei.', 'Vier.'], a: 'Drei.',
        audio: [{ s: 'm', t: 'Wie ist deine neue Wohnung?' }, { s: 'w', t: 'Super! Sie hat drei Zimmer, eine Küche und ein Bad. Und einen Balkon!' }] },
      { q: 'Wie hoch ist die Miete?', o: ['650 €', '560 €', '615 €'], a: '650 €',
        audio: [{ s: 'w', t: 'Wie hoch ist die Miete?' }, { s: 'm', t: 'Die Wohnung kostet sechshundertfünfzig Euro im Monat.' }, { s: 'w', t: 'Das ist nicht so teuer.' }] },
      { q: 'Wohin stellt der Mann das Sofa?', o: ['Ins Wohnzimmer.', 'Ins Schlafzimmer.', 'In die Küche.'], a: 'Ins Wohnzimmer.',
        audio: [{ s: 'w', t: 'Wohin stellen wir das Sofa? Ins Schlafzimmer?' }, { s: 'm', t: 'Nein, das Sofa stelle ich ins Wohnzimmer, an die Wand.' }] },
      { q: 'Welche Farbe hat der neue Teppich?', o: ['Blau.', 'Rot.', 'Grün.'], a: 'Blau.',
        audio: [{ s: 'm', t: 'Hast du einen neuen Teppich?' }, { s: 'w', t: 'Ja. Der alte war rot, der neue ist blau.' }] },
      { q: 'Wo ist die Lampe?', o: ['Neben dem Bett.', 'Auf dem Tisch.', 'Unter dem Bett.'], a: 'Neben dem Bett.',
        audio: [{ s: 'w', t: 'Wo ist denn die Lampe?' }, { s: 'm', t: 'Sie steht neben dem Bett.' }, { s: 'w', t: 'Ah ja, danke.' }] },
      { q: 'Wann sieht die Frau die Wohnung an?', o: ['Am Freitag.', 'Am Donnerstag.', 'Am Samstag.'], a: 'Am Freitag.',
        audio: [{ s: 'm', t: 'Sie können die Wohnung am Donnerstag um fünf Uhr ansehen.' }, { s: 'w', t: 'Am Donnerstag? Das geht leider nicht. Geht es auch am Freitag?' }, { s: 'm', t: 'Ja, am Freitag um fünf Uhr geht es auch.' }] }
    ])],

    // ------------------------------------------------ Kapitel 10: Studium und Beruf
    k10: [teil3([
      { q: 'Was hat David gestern gemacht?', o: ['Eine Prüfung.', 'Eine Party.', 'Einen Ausflug.'], a: 'Eine Prüfung.',
        audio: [{ s: 'm', t: 'Hallo Sara, hier ist David. Ich habe gestern die Prüfung gemacht, und ich habe bestanden! Heute Abend feiern wir. Kommst du auch?' }] },
      { q: 'Warum ruft Frau Schmidt an?', o: ['Herr Aziz soll zu einem Gespräch kommen.', 'Herr Aziz soll eine Bewerbung schreiben.', 'Herr Aziz soll am Dienstag arbeiten.'], a: 'Herr Aziz soll zu einem Gespräch kommen.',
        audio: [{ s: 'w', t: 'Guten Tag, Herr Aziz. Hier ist Frau Schmidt von der Firma Teko. Wir haben Ihre Bewerbung bekommen. Können Sie am Dienstag um zehn Uhr zu einem Gespräch kommen?' }] },
      { q: 'Was hat Jonas am Wochenende gemacht?', o: ['Er hat gelernt.', 'Er ist nach Hause gefahren.', 'Er hat einen Test geschrieben.'], a: 'Er hat gelernt.',
        audio: [{ s: 'm', t: 'Hallo Mama, hier ist Jonas. Ich bin am Wochenende nicht nach Hause gefahren. Ich habe viel gelernt. Am Montag schreibe ich einen Test.' }] },
      { q: 'Wo hat Nora das Buch gefunden?', o: ['In der Bibliothek.', 'Im Kurs.', 'In der Mensa.'], a: 'In der Bibliothek.',
        audio: [{ s: 'w', t: 'Hallo Ali, hier ist Nora. Ich habe dein Buch in der Bibliothek gefunden. Es war auf einem Tisch. Ich bringe es morgen in den Kurs mit.' }] },
      { q: 'Wer hat den Computer repariert?', o: ['Ein Techniker.', 'Thomas.', 'Die Chefin.'], a: 'Ein Techniker.',
        audio: [{ s: 'm', t: 'Hallo, hier ist Thomas aus dem Büro. Der Computer funktioniert wieder. Der Techniker ist heute Morgen gekommen und hat ihn repariert.' }] }
    ])],

    // ------------------------------------------------ Kapitel 11: Die Jacke gefällt mir!
    k11: [teil2([
      { q: 'Die Jacken sind heute billiger.', a: true,
        audio: [{ s: 'w', t: 'Liebe Kundinnen und Kunden, heute im dritten Stock: Alle Jacken und Mäntel kosten zwanzig Prozent weniger.' }] },
      { q: 'Das Kaufhaus ist noch eine Stunde geöffnet.', a: false,
        audio: [{ s: 'm', t: 'Achtung, bitte! Unser Kaufhaus schließt in zehn Minuten. Bitte gehen Sie jetzt zur Kasse.' }] },
      { q: 'Die Mutter von Max soll in den ersten Stock kommen.', a: false,
        audio: [{ s: 'w', t: 'Der kleine Max sucht seine Mutter. Max ist fünf Jahre alt und trägt eine rote Mütze. Die Mutter kommt bitte zur Information im Erdgeschoss.' }] },
      { q: 'Die Sportabteilung ist im Untergeschoss.', a: true,
        audio: [{ s: 'm', t: 'Neu in unserer Sportabteilung im Untergeschoss: Turnschuhe für Kinder und Erwachsene. Kommen Sie und probieren Sie sie an!' }] },
      { q: 'Man kann heute im vierten Stock Kaffee trinken.', a: false,
        audio: [{ s: 'w', t: 'Liebe Kundinnen und Kunden, unser Café im vierten Stock ist heute leider geschlossen.' }] }
    ])],

    // ------------------------------------------------ Kapitel 12: Ab in den Urlaub!
    k12: [teil1([
      { q: 'Wie ist das Wetter in Wien?', o: ['Kalt, aber sonnig.', 'Kalt und es regnet.', 'Warm und sonnig.'], a: 'Kalt, aber sonnig.',
        audio: [{ s: 'm', t: 'Hallo Petra! Wie ist das Wetter in Wien?' }, { s: 'w', t: 'Es ist kalt, aber die Sonne scheint. Gestern hat es geregnet.' }] },
      { q: 'Wohin fährt die Familie im Sommer?', o: ['An die Nordsee.', 'Nach Italien.', 'In die Berge.'], a: 'An die Nordsee.',
        audio: [{ s: 'w', t: 'Fahrt ihr im Sommer wieder nach Italien?' }, { s: 'm', t: 'Nein, dieses Jahr fahren wir an die Nordsee. Die Kinder wollen am Meer spielen.' }] },
      { q: 'Wo ist das Hotel Adler?', o: ['Neben der Post.', 'Neben dem Bahnhof.', 'Gegenüber vom Bahnhof.'], a: 'Neben der Post.',
        audio: [{ s: 'm', t: 'Entschuldigung, wo ist das Hotel Adler?' }, { s: 'w', t: 'Gehen Sie hier geradeaus und dann die zweite Straße links. Das Hotel ist neben der Post.' }] },
      { q: 'Wie lange bleibt der Mann im Hotel?', o: ['Drei Nächte.', 'Vier Nächte.', 'Eine Woche.'], a: 'Drei Nächte.',
        audio: [{ s: 'w', t: 'Hotel Adler, guten Tag!' }, { s: 'm', t: 'Guten Tag! Ich möchte ein Einzelzimmer reservieren, vom ersten bis zum vierten Juni.' }, { s: 'w', t: 'Also drei Nächte. Kein Problem.' }] },
      { q: 'Wann fährt der Zug nach Salzburg?', o: ['Um 14:12 Uhr.', 'Um 14:20 Uhr.', 'Um 12:14 Uhr.'], a: 'Um 14:12 Uhr.',
        audio: [{ s: 'm', t: 'Wann fährt der nächste Zug nach Salzburg?' }, { s: 'w', t: 'Um vierzehn Uhr zwölf, von Gleis fünf.' }] }
    ])],

    // ------------------------------------------------ Finaltest A1: Hören Teil 1–3
    final: [
      teil1([
        { q: 'Wie viel kostet das T-Shirt?', o: ['19,90 €', '49,00 €', '9,90 €'], a: '19,90 €',
          audio: [{ s: 'w', t: 'Entschuldigung, was kostet das T-Shirt hier?' }, { s: 'm', t: 'Das T-Shirt kostet neunzehn Euro neunzig.' }, { s: 'w', t: 'Und die Hose?' }, { s: 'm', t: 'Die Hose kostet neunundvierzig Euro.' }] },
        { q: 'Wann hat Frau Bauer einen Termin?', o: ['Am Mittwoch um 8:30 Uhr.', 'Am Mittwoch um 9:30 Uhr.', 'Am Montag um 8:30 Uhr.'], a: 'Am Mittwoch um 8:30 Uhr.',
          audio: [{ s: 'm', t: 'Praxis Doktor Lang, guten Tag!' }, { s: 'w', t: 'Guten Tag, hier ist Bauer. Ich brauche einen Termin.' }, { s: 'm', t: 'Geht es am Mittwoch um halb neun?' }, { s: 'w', t: 'Ja, das geht. Danke!' }] },
        { q: 'Wohin geht Jan zuerst?', o: ['Zur Post.', 'In den Supermarkt.', 'Zur Bank.'], a: 'Zur Post.',
          audio: [{ s: 'w', t: 'Hallo Jan, wohin gehst du?' }, { s: 'm', t: 'Zur Post. Ich muss ein Paket abholen. Danach gehe ich in den Supermarkt.' }] },
        { q: 'Was isst die Frau zum Frühstück?', o: ['Ein Brötchen mit Käse.', 'Ein Brötchen mit Marmelade.', 'Müsli mit Milch.'], a: 'Ein Brötchen mit Käse.',
          audio: [{ s: 'm', t: 'Was isst du zum Frühstück?' }, { s: 'w', t: 'Meistens ein Brötchen mit Käse. Und ich trinke einen Tee.' }] },
        { q: 'Wo arbeitet Herr Demir?', o: ['In einem Restaurant.', 'Im Krankenhaus.', 'Am Flughafen.'], a: 'In einem Restaurant.',
          audio: [{ s: 'w', t: 'Herr Demir, arbeiten Sie im Krankenhaus?' }, { s: 'm', t: 'Nein, ich bin Koch. Ich arbeite in einem Restaurant am Bahnhof.' }] },
        { q: 'Wie fährt die Frau meistens zur Arbeit?', o: ['Mit dem Fahrrad.', 'Mit dem Auto.', 'Mit dem Bus.'], a: 'Mit dem Fahrrad.',
          audio: [{ s: 'm', t: 'Fährst du mit dem Auto zur Arbeit?' }, { s: 'w', t: 'Nein, meistens fahre ich mit dem Fahrrad. Nur bei Regen nehme ich den Bus.' }] }
      ], 'H1'),
      teil2([
        { q: 'Der Zug nach Hannover kommt pünktlich.', a: false,
          audio: [{ s: 'w', t: 'Sehr geehrte Fahrgäste, der Regionalexpress nach Hannover hat heute zwanzig Minuten Verspätung.' }] },
        { q: 'Ein Kilo Bananen kostet heute 1,29 €.', a: true,
          audio: [{ s: 'm', t: 'Liebe Kundinnen und Kunden, heute im Angebot: ein Kilo Bananen für nur einen Euro neunundzwanzig.' }] },
        { q: 'Die Fluggäste nach Frankfurt sollen zu Ausgang B 12 gehen.', a: true,
          audio: [{ s: 'w', t: 'Achtung, bitte! Die Fluggäste nach Frankfurt kommen bitte jetzt zu Ausgang B zwölf.' }] },
        { q: 'Die Bibliothek ist heute bis 18 Uhr geöffnet.', a: false,
          audio: [{ s: 'm', t: 'Liebe Besucherinnen und Besucher, die Bibliothek ist heute nur bis sechzehn Uhr geöffnet.' }] }
      ], 'H2'),
      teil3([
        { q: 'Wo treffen sich Mehmet und Susanne?', o: ['Vor dem Kino.', 'Im Café.', 'Im Kino.'], a: 'Vor dem Kino.',
          audio: [{ s: 'w', t: 'Hallo Mehmet, hier ist Susanne. Wir treffen uns heute nicht im Café. Wir treffen uns vor dem Kino, um sieben Uhr. Bis dann!' }] },
        { q: 'Bis wann kann man das Auto abholen?', o: ['Bis 18 Uhr.', 'Bis 8 Uhr.', 'Bis 16 Uhr.'], a: 'Bis 18 Uhr.',
          audio: [{ s: 'm', t: 'Guten Tag, hier ist die Autowerkstatt Maier. Ihr Auto ist fertig. Sie können es heute bis achtzehn Uhr abholen.' }] },
        { q: 'Was hat Frau Wolf für Herrn Fischer?', o: ['Ein Paket.', 'Einen Brief.', 'Einen Schlüssel.'], a: 'Ein Paket.',
          audio: [{ s: 'w', t: 'Hallo Herr Fischer, hier ist Frau Wolf, Ihre Nachbarin. Ich habe ein Paket für Sie. Ich bin heute Abend zu Hause. Klingeln Sie einfach!' }] },
        { q: 'Wann kommen die Großeltern am Bahnhof an?', o: ['Um 11 Uhr.', 'Um 1 Uhr.', 'Um 10 Uhr.'], a: 'Um 11 Uhr.',
          audio: [{ s: 'm', t: 'Hallo Lea, hier ist Opa. Oma und ich kommen am Sonntag zu dir. Wir sind um elf Uhr am Bahnhof. Kannst du uns abholen?' }] },
        { q: 'Wie viel kostet der Kochkurs?', o: ['80 €', '18 €', '15 €'], a: '80 €',
          audio: [{ s: 'w', t: 'Guten Tag, hier ist die Volkshochschule. Ihr Kurs „Kochen für Anfänger“ beginnt am fünfzehnten März. Der Kurs kostet achtzig Euro.' }] }
      ], 'H3')
    ]
  };
})();
