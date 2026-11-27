// Netzwerk neu A2 – Hören (wie Goethe-Zertifikat A2 / telc Deutsch A2)
// Wird von assets/app.js vor dem Schreiben-Teil eingefügt. audio = Hörtext (Sprachausgabe), plays = wie oft (1 oder 2).
// Teil 1: kurze Texte (a/b/c, 2×) · Teil 2: Gespräch, Zuordnung (1×) · Teil 3: kurze Gespräche (a/b/c, 1×) · Teil 4: Interview (richtig/falsch, 2×)
(function () {
  var RATE = 0.9;
  function teil1(items, teil) {
    return { teil: teil || 'Hören', titel: 'Hören Teil 1 (wie Goethe A2): Kurze Texte', typ: 'mcq', plays: 2, rate: RATE,
      anweisung: 'Sie hören kurze Texte aus dem Radio, am Telefon oder als Durchsage. Sie hören jeden Text zweimal. Lesen Sie zuerst die Frage. Wählen Sie dann die richtige Antwort.',
      anweisungAr: 'ستسمع نصوصًا قصيرة من الإذاعة أو الهاتف أو الإعلانات، وتسمع كل نص مرتين. اقرأ السؤال أولًا، ثم اختر الإجابة الصحيحة.',
      items: items };
  }
  function teil2(titel, audio, o, items, teil) {
    return { teil: teil || 'Hören', titel: 'Hören Teil 2 (wie Goethe A2): ' + titel, typ: 'select', plays: 1, rate: RATE, audio: audio, audioTitel: 'Gespräch', o: o,
      anweisung: 'Sie hören ein Gespräch. Sie hören den Text einmal. Lesen Sie zuerst die Aufgaben. Was passt? Wählen Sie für jede Aufgabe die richtige Antwort. Zwei Antworten passen nicht.',
      anweisungAr: 'ستسمع محادثة مرة واحدة فقط. اقرأ المطلوب أولًا، ثم اختر لكل سطر الإجابة المناسبة. هناك إجابتان لا تناسبان أي سطر.',
      items: items };
  }
  function teil3(items, teil) {
    return { teil: teil || 'Hören', titel: 'Hören Teil 3 (wie Goethe A2): Kurze Gespräche', typ: 'mcq', plays: 1, rate: RATE,
      anweisung: 'Sie hören kurze Gespräche. Sie hören jeden Text einmal. Lesen Sie zuerst die Frage. Wählen Sie dann die richtige Antwort.',
      anweisungAr: 'ستسمع محادثات قصيرة، وتسمع كل نص مرة واحدة فقط. اقرأ السؤال أولًا، ثم اختر الإجابة الصحيحة.',
      items: items };
  }
  function teil4(audio, items, teil) {
    return { teil: teil || 'Hören', titel: 'Hören Teil 4 (wie Goethe A2): Ein Interview', typ: 'tf', plays: 2, rate: RATE, audio: audio, audioTitel: 'Interview',
      anweisung: 'Sie hören ein Interview. Sie hören den Text zweimal. Lesen Sie zuerst die Sätze. Sind sie richtig oder falsch?',
      anweisungAr: 'ستسمع مقابلة، وتسمعها مرتين. اقرأ الجمل أولًا، ثم حدّد: هل كل جملة صحيحة أم خاطئة؟',
      items: items };
  }

  window.HOEREN = {
    // ------------------------------------------------ Kapitel 1: Und was machst du?
    k1: [teil4([
      { s: 'm', n: 'Moderator', t: 'Herzlich willkommen zu unserer Sendung „Neu in der Stadt“. Heute ist Samira Haddad bei uns. Frau Haddad, Sie kommen aus Ägypten, richtig?' },
      { s: 'w', n: 'Samira Haddad', t: 'Ja, genau. Ich komme aus Alexandria. Vor drei Jahren bin ich nach Leipzig gekommen, weil ich hier Informatik studieren wollte.' },
      { s: 'm', n: 'Moderator', t: 'Und was machen Sie jetzt?' },
      { s: 'w', n: 'Samira Haddad', t: 'Im Sommer habe ich mein Studium beendet. Jetzt arbeite ich als Programmiererin bei einer kleinen Firma.' },
      { s: 'm', n: 'Moderator', t: 'Was machen Sie in Ihrer Freizeit?' },
      { s: 'w', n: 'Samira Haddad', t: 'Ich tanze sehr gern. Zweimal pro Woche gehe ich in einen Tanzkurs. Am Wochenende treffe ich oft Freunde, oder ich telefoniere mit meiner Familie in Ägypten.' },
      { s: 'm', n: 'Moderator', t: 'Was war am Anfang schwer für Sie?' },
      { s: 'w', n: 'Samira Haddad', t: 'Das Wetter! Im ersten Winter war es so kalt. Aber die Leute waren sehr nett und haben mir viel geholfen.' },
      { s: 'm', n: 'Moderator', t: 'Vielen Dank, Frau Haddad!' }
    ], [
      { q: 'Samira Haddad wohnt seit drei Jahren in Leipzig.', a: true },
      { q: 'Sie ist nach Leipzig gekommen, weil sie dort arbeiten wollte.', a: false },
      { q: 'Sie arbeitet jetzt als Programmiererin.', a: true },
      { q: 'Sie geht jeden Tag in einen Tanzkurs.', a: false },
      { q: 'Am Anfang war das Wetter ein Problem für sie.', a: true }
    ])],

    // ------------------------------------------------ Kapitel 2: Nach der Schulzeit
    k2: [teil2('Was machen Lisas Schulfreunde jetzt?', [
      { s: 'm', n: 'Vater', t: 'Lisa, du hast doch letzte Woche deine alten Schulfreunde getroffen. Was machen die denn jetzt?' },
      { s: 'w', n: 'Lisa', t: 'Ganz verschiedene Sachen! Tim macht jetzt eine Ausbildung als Koch. Er wollte schon immer in einem Restaurant arbeiten.' },
      { s: 'm', n: 'Vater', t: 'Und deine Freundin Jana? Wollte sie nicht Medizin studieren?' },
      { s: 'w', n: 'Lisa', t: 'Ja, das wollte sie. Aber sie hat keinen Studienplatz bekommen. Jetzt macht sie ein Praktikum in einem Krankenhaus.' },
      { s: 'm', n: 'Vater', t: 'Und Paul?' },
      { s: 'w', n: 'Lisa', t: 'Paul hat nach dem Abitur ein Jahr gearbeitet. Jetzt reist er drei Monate durch Australien.' },
      { s: 'm', n: 'Vater', t: 'Toll! Und Mehmet?' },
      { s: 'w', n: 'Lisa', t: 'Mehmet studiert Medizin in Heidelberg. Er hatte sehr gute Noten.' },
      { s: 'm', n: 'Vater', t: 'Und was macht Sophie?' },
      { s: 'w', n: 'Lisa', t: 'Sophie arbeitet bei einer Bank. Dort hat sie letztes Jahr ihre Ausbildung beendet.' }
    ], ['eine Ausbildung als Koch', 'ein Praktikum im Krankenhaus', 'eine Reise durch Australien', 'ein Medizinstudium', 'eine Arbeit bei einer Bank', 'einen Sprachkurs in England', 'eine Arbeit als Lehrer'], [
      { q: 'Tim macht …', a: 'eine Ausbildung als Koch' },
      { q: 'Jana macht …', a: 'ein Praktikum im Krankenhaus' },
      { q: 'Paul macht …', a: 'eine Reise durch Australien' },
      { q: 'Mehmet macht …', a: 'ein Medizinstudium' },
      { q: 'Sophie hat …', a: 'eine Arbeit bei einer Bank' }
    ])],

    // ------------------------------------------------ Kapitel 3: Immer online?
    k3: [teil1([
      { q: 'Wann ist der Handykurs?', o: ['Jeden Dienstag am Vormittag.', 'Jeden Donnerstag am Vormittag.', 'Jeden Dienstag am Abend.'], a: 'Jeden Dienstag am Vormittag.',
        audio: [{ s: 'm', t: 'Sie möchten Ihr Handy besser kennenlernen? Die Volkshochschule bietet ab dem zehnten Oktober einen Kurs für Seniorinnen und Senioren an. Der Kurs ist jeden Dienstag von zehn bis zwölf Uhr und kostet dreißig Euro.' }] },
      { q: 'Was soll Max machen?', o: ['Anna eine Nachricht schreiben.', 'Kinokarten kaufen.', 'Anna anrufen.'], a: 'Anna eine Nachricht schreiben.',
        audio: [{ s: 'w', t: 'Hallo Max, hier ist Anna. Ich habe zwei Kinokarten für heute Abend. Der Film beginnt um acht. Er ist bestimmt lustiger als der Film letzte Woche! Schreib mir bitte eine Nachricht, ob du mitkommst.' }] },
      { q: 'Wie lange sind Jugendliche jeden Tag online?', o: ['Fast vier Stunden.', 'Drei Stunden.', 'Fünf Stunden.'], a: 'Fast vier Stunden.',
        audio: [{ s: 'm', t: 'Eine neue Studie zeigt: Jugendliche in Deutschland sind jeden Tag fast vier Stunden online. Das ist eine Stunde mehr als vor fünf Jahren.' }] },
      { q: 'Was braucht man für das Internet in der Bibliothek?', o: ['Einen Bibliotheksausweis.', 'Einen Personalausweis.', 'Zehn Euro.'], a: 'Einen Bibliotheksausweis.',
        audio: [{ s: 'w', t: 'Liebe Besucherinnen und Besucher, ab Montag können Sie in der Stadtbibliothek kostenlos im Internet surfen. Sie brauchen nur Ihren Bibliotheksausweis.' }] },
      { q: 'Wann beginnt der Krimi?', o: ['Um 20:15 Uhr.', 'Um 21:45 Uhr.', 'Um 20:00 Uhr.'], a: 'Um 20:15 Uhr.',
        audio: [{ s: 'm', t: 'Und hier unser Tipp für heute Abend: Um zwanzig Uhr fünfzehn zeigen wir den Krimi „Mord am See“. Danach, um einundzwanzig Uhr fünfundvierzig, kommen die Nachrichten.' }] }
    ])],

    // ------------------------------------------------ Kapitel 4: Große und kleine Gefühle
    k4: [teil3([
      { q: 'Wann feiert Paul seinen Geburtstag?', o: ['Am Samstag.', 'Heute.', 'Am Sonntag.'], a: 'Am Samstag.',
        audio: [{ s: 'w', t: 'Hallo Paul, herzlichen Glückwunsch zum Geburtstag!' }, { s: 'm', t: 'Danke! Woher weißt du das?' }, { s: 'w', t: 'Von Lena. Feierst du heute?' }, { s: 'm', t: 'Nein, heute muss ich arbeiten. Aber am Samstag mache ich eine Party.' }] },
      { q: 'Warum ist die Frau traurig?', o: ['Ihr Hund ist krank.', 'Sie ist krank.', 'Ihr Freund ist krank.'], a: 'Ihr Hund ist krank.',
        audio: [{ s: 'm', t: 'Du siehst traurig aus. Was ist los?' }, { s: 'w', t: 'Mein Hund ist krank. Ich war heute mit ihm beim Tierarzt.' }, { s: 'm', t: 'Oh, das tut mir leid.' }] },
      { q: 'Worüber ärgert sich die Frau?', o: ['Über den Bus.', 'Über ihren Chef.', 'Über das Auto.'], a: 'Über den Bus.',
        audio: [{ s: 'w', t: 'Ich ärgere mich so! Der Bus ist schon wieder zu spät gekommen.' }, { s: 'm', t: 'Wenn du willst, kann ich dich morgen mit dem Auto abholen.' }, { s: 'w', t: 'Das ist nett, danke!' }] },
      { q: 'Was feiert das Paar im Mai?', o: ['Die Hochzeit.', 'Einen Geburtstag.', 'Den Umzug.'], a: 'Die Hochzeit.',
        audio: [{ s: 'm', t: 'Wir heiraten im Mai! Und wir möchten euch einladen.' }, { s: 'w', t: 'Wie schön! Ich freue mich so für euch. Wo feiert ihr?' }, { s: 'm', t: 'In einem Restaurant am See.' }] },
      { q: 'Warum ist die Frau nervös?', o: ['Sie hat morgen eine Prüfung.', 'Sie hat etwas vergessen.', 'Sie hat Streit mit einer Freundin.'], a: 'Sie hat morgen eine Prüfung.',
        audio: [{ s: 'w', t: 'Wenn ich nervös bin, kann ich nicht schlafen.' }, { s: 'm', t: 'Bist du nervös, weil du morgen die Prüfung hast?' }, { s: 'w', t: 'Ja. Ich habe Angst, dass ich alles vergesse.' }] }
    ])],

    // ------------------------------------------------ Kapitel 5: Leben in der Stadt
    k5: [teil1([
      { q: 'Wann ist das Bürgeramt am Nachmittag geöffnet?', o: ['Am Donnerstag.', 'Am Montag.', 'Jeden Tag.'], a: 'Am Donnerstag.',
        audio: [{ s: 'w', t: 'Herzlich willkommen beim Bürgeramt. Unsere Öffnungszeiten: Montag bis Freitag von acht bis zwölf Uhr, am Donnerstag auch von vierzehn bis achtzehn Uhr. Termine können Sie auch online vereinbaren.' }] },
      { q: 'Was soll Frau Celik mitbringen?', o: ['Ihren Pass und die Meldebescheinigung.', 'Ihren Pass und ein Foto.', 'Ihre Bankkarte.'], a: 'Ihren Pass und die Meldebescheinigung.',
        audio: [{ s: 'm', t: 'Guten Tag, Frau Celik, hier ist Herr Brandt von der Stadtbank. Sie möchten ein Konto eröffnen. Könnten Sie bitte noch Ihren Pass und Ihre Meldebescheinigung mitbringen? Vielen Dank!' }] },
      { q: 'Welche Straße ist gesperrt?', o: ['Die Goethestraße.', 'Die Schillerstraße.', 'Die Bahnhofstraße.'], a: 'Die Goethestraße.',
        audio: [{ s: 'w', t: 'Und nun die Verkehrsmeldungen: In der Innenstadt ist die Goethestraße bis Freitag gesperrt, weil dort gebaut wird. Bitte fahren Sie über die Schillerstraße.' }] },
      { q: 'Warum ruft Frau Klein an?', o: ['Sie lädt Herrn Nasser zu einem Vorstellungsgespräch ein.', 'Sie sagt das Vorstellungsgespräch ab.', 'Sie bietet Herrn Nasser ein Hotelzimmer an.'], a: 'Sie lädt Herrn Nasser zu einem Vorstellungsgespräch ein.',
        audio: [{ s: 'w', t: 'Guten Tag, Herr Nasser. Hier ist Frau Klein vom Hotel Stadtblick. Vielen Dank für Ihre Bewerbung. Wir möchten Sie gern kennenlernen. Könnten Sie am Mittwoch um vierzehn Uhr zu einem Vorstellungsgespräch kommen?' }] },
      { q: 'Wie viel kostet der Eintritt zum Altstadtfest?', o: ['Nichts.', 'Fünf Euro.', 'Nur Erwachsene müssen bezahlen.'], a: 'Nichts.',
        audio: [{ s: 'm', t: 'Am Wochenende feiert unsere Stadt das Altstadtfest. Auf dem Marktplatz gibt es Musik, Essen und viele Angebote für Kinder. Der Eintritt ist frei.' }] }
    ])],

    // ------------------------------------------------ Kapitel 6: Arbeitswelten
    k6: [teil4([
      { s: 'm', n: 'Moderator', t: 'In unserer Reihe „Berufe heute“ sprechen wir mit Lena Wagner. Frau Wagner, Sie sind Lokführerin. Wie sind Sie zu diesem Beruf gekommen?' },
      { s: 'w', n: 'Lena Wagner', t: 'Schon als Kind habe ich mich für Züge interessiert. Nach der Schule habe ich aber zuerst eine Ausbildung als Bürokauffrau gemacht. Die Arbeit im Büro war mir zu langweilig.' },
      { s: 'm', n: 'Moderator', t: 'Und dann?' },
      { s: 'w', n: 'Lena Wagner', t: 'Dann habe ich bei der Bahn eine neue Ausbildung angefangen. Seit vier Jahren fahre ich jetzt Regionalzüge.' },
      { s: 'm', n: 'Moderator', t: 'Wie sind Ihre Arbeitszeiten?' },
      { s: 'w', n: 'Lena Wagner', t: 'Ganz unterschiedlich. Manchmal fange ich um vier Uhr morgens an, manchmal arbeite ich am Abend oder am Wochenende. Das ist nicht immer leicht.' },
      { s: 'm', n: 'Moderator', t: 'Was möchten Sie in Zukunft machen?' },
      { s: 'w', n: 'Lena Wagner', t: 'Ich möchte Ausbilderin werden. Dann kann ich jungen Leuten meinen Beruf zeigen.' }
    ], [
      { q: 'Lena Wagner hat sich schon als Kind für Züge interessiert.', a: true },
      { q: 'Ihre erste Ausbildung hat sie bei der Bahn gemacht.', a: false },
      { q: 'Sie fährt seit vier Jahren Züge.', a: true },
      { q: 'Sie arbeitet immer von Montag bis Freitag.', a: false },
      { q: 'Sie möchte später junge Leute ausbilden.', a: true }
    ])],

    // ------------------------------------------------ Kapitel 7: Ganz schön mobil
    k7: [teil2('Wie kommen die Kollegen jetzt zur Arbeit?', [
      { s: 'w', n: 'Eva', t: 'Jan, du hast doch die Umfrage im Team gemacht. Wie kommen die Kollegen eigentlich zur Arbeit?' },
      { s: 'm', n: 'Jan', t: 'Das war interessant! Frau Becker wohnt ganz in der Nähe. Sie geht jeden Morgen zu Fuß.' },
      { s: 'w', n: 'Eva', t: 'Und Herr Yilmaz? Er wohnt doch nicht in der Stadt.' },
      { s: 'm', n: 'Jan', t: 'Ja, er fährt mit der S-Bahn. Früher ist er mit dem Auto gefahren, aber er hat jeden Tag im Stau gestanden.' },
      { s: 'w', n: 'Eva', t: 'Und Lisa? Sie fährt doch Fahrrad, oder?' },
      { s: 'm', n: 'Jan', t: 'Im Sommer schon. Aber jetzt im Winter nimmt sie den Bus.' },
      { s: 'w', n: 'Eva', t: 'Was ist mit Tom?' },
      { s: 'm', n: 'Jan', t: 'Tom hat sich einen E-Roller gekauft. Mit dem Roller braucht er nur zehn Minuten.' },
      { s: 'w', n: 'Eva', t: 'Und der Chef?' },
      { s: 'm', n: 'Jan', t: 'Herr Krause fährt immer noch mit seinem großen Auto. Er sagt, dass er es für die Kunden braucht.' }
    ], ['zu Fuß', 'mit der S-Bahn', 'mit dem Bus', 'mit dem E-Roller', 'mit dem Auto', 'mit dem Fahrrad', 'mit dem Motorrad'], [
      { q: 'Frau Becker kommt …', a: 'zu Fuß' },
      { q: 'Herr Yilmaz fährt …', a: 'mit der S-Bahn' },
      { q: 'Lisa fährt im Winter …', a: 'mit dem Bus' },
      { q: 'Tom fährt …', a: 'mit dem E-Roller' },
      { q: 'Herr Krause, der Chef, fährt …', a: 'mit dem Auto' }
    ])],

    // ------------------------------------------------ Kapitel 8: Gelernt ist gelernt!
    k8: [teil3([
      { q: 'Was für einen Kurs macht die Frau?', o: ['Einen Spanischkurs.', 'Einen Italienischkurs.', 'Einen Kochkurs.'], a: 'Einen Spanischkurs.',
        audio: [{ s: 'm', t: 'Was für einen Kurs machst du an der Volkshochschule?' }, { s: 'w', t: 'Einen Spanischkurs. Ich möchte im Sommer nach Spanien reisen.' }] },
      { q: 'Was soll die Frau machen?', o: ['Den Vortrag laut üben.', 'Früh schlafen gehen.', 'Die Präsentation absagen.'], a: 'Den Vortrag laut üben.',
        audio: [{ s: 'w', t: 'Ich habe morgen meine Präsentation und bin total nervös.' }, { s: 'm', t: 'Du solltest den Vortrag heute Abend noch einmal laut üben. Das hilft wirklich.' }] },
      { q: 'Wie war die Prüfung für die Frau?', o: ['Sie hat bestanden.', 'Sie hat nicht bestanden.', 'Der schriftliche Teil war schwer.'], a: 'Sie hat bestanden.',
        audio: [{ s: 'm', t: 'Wie war die Prüfung?' }, { s: 'w', t: 'Der schriftliche Teil war leicht, aber im mündlichen Teil war ich sehr nervös. Ich habe trotzdem bestanden!' }] },
      { q: 'Bis wann soll man sich anmelden?', o: ['Bis zum 15. Februar.', 'Bis zum 1. März.', 'Bis zum 15. März.'], a: 'Bis zum 15. Februar.',
        audio: [{ s: 'w', t: 'Wann beginnt der Computerkurs?' }, { s: 'm', t: 'Am ersten März. Aber Sie sollten sich bis zum fünfzehnten Februar anmelden.' }] },
      { q: 'Wo lernt die Frau neue Wörter?', o: ['In der Straßenbahn.', 'Zu Hause am Schreibtisch.', 'In der Bibliothek.'], a: 'In der Straßenbahn.',
        audio: [{ s: 'm', t: 'Wie lernst du neue Wörter?' }, { s: 'w', t: 'Ich schreibe sie auf kleine Karten und lese sie jeden Morgen in der Straßenbahn.' }] }
    ])],

    // ------------------------------------------------ Kapitel 9: Sportlich, sportlich
    k9: [teil4([
      { s: 'w', n: 'Moderatorin', t: 'Heute ist Daniel Krüger bei uns im Studio. Er ist Trainer von einer Fußballmannschaft für Kinder. Herr Krüger, wie viele Kinder trainieren bei Ihnen?' },
      { s: 'm', n: 'Daniel Krüger', t: 'Im Moment sind es achtzehn Kinder zwischen acht und zehn Jahren. Wir trainieren zweimal pro Woche, am Dienstag und am Freitag.' },
      { s: 'w', n: 'Moderatorin', t: 'Haben Sie selbst auch Fußball gespielt?' },
      { s: 'm', n: 'Daniel Krüger', t: 'Ja, zwanzig Jahre lang. Dann hatte ich eine Knieverletzung, deshalb konnte ich nicht mehr spielen. Aber ich wollte trotzdem beim Fußball bleiben.' },
      { s: 'w', n: 'Moderatorin', t: 'Was ist Ihnen beim Training wichtig?' },
      { s: 'm', n: 'Daniel Krüger', t: 'Die Kinder sollen Spaß haben. Gewinnen ist nicht so wichtig. Sie sollen lernen, dass man zusammen im Team spielt.' },
      { s: 'w', n: 'Moderatorin', t: 'Und was machen die Eltern?' },
      { s: 'm', n: 'Daniel Krüger', t: 'Viele Eltern helfen uns. Sie fahren die Kinder zu den Spielen oder backen Kuchen für unsere Feste.' }
    ], [
      { q: 'Die Kinder trainieren zweimal pro Woche.', a: true },
      { q: 'Daniel Krüger spielt heute noch in einer Mannschaft.', a: false },
      { q: 'Er musste wegen einer Verletzung aufhören.', a: true },
      { q: 'Für Herrn Krüger ist es am wichtigsten, dass die Kinder gewinnen.', a: false },
      { q: 'Viele Eltern helfen der Mannschaft.', a: true }
    ])],

    // ------------------------------------------------ Kapitel 10: Zusammen leben
    k10: [teil2('Welche Haustiere haben die Nachbarn?', [
      { s: 'w', n: 'Laura Stein', t: 'Guten Tag, ich bin die neue Mieterin, Laura Stein. Darf man hier im Haus eigentlich Haustiere haben?' },
      { s: 'm', n: 'Hausmeister', t: 'Ja, natürlich. Viele Nachbarn haben Tiere. Familie Schulz im Erdgeschoss hat einen großen Hund. Er heißt Bruno und ist sehr lieb.' },
      { s: 'w', n: 'Laura Stein', t: 'Und wer wohnt neben mir?' },
      { s: 'm', n: 'Hausmeister', t: 'Frau Novak. Sie hat zwei Katzen. Als sie hier eingezogen ist, hatte sie nur eine.' },
      { s: 'w', n: 'Laura Stein', t: 'Und über mir?' },
      { s: 'm', n: 'Hausmeister', t: 'Da wohnt Herr Berger. Er hatte früher einen Vogel, aber jetzt hat er keine Haustiere mehr. Er ist oft auf Reisen.' },
      { s: 'w', n: 'Laura Stein', t: 'Und im dritten Stock?' },
      { s: 'm', n: 'Hausmeister', t: 'Da wohnen zwei Studenten. Sie haben ein Aquarium mit vielen Fischen.' },
      { s: 'w', n: 'Laura Stein', t: 'Und Familie Ahmadi? Ich habe die Kinder im Garten gesehen.' },
      { s: 'm', n: 'Hausmeister', t: 'Die Kinder haben ein Kaninchen. Wenn das Wetter schön ist, spielen sie mit ihm im Garten.' }
    ], ['einen Hund', 'zwei Katzen', 'keine Haustiere', 'Fische', 'ein Kaninchen', 'einen Vogel', 'eine Schildkröte'], [
      { q: 'Familie Schulz hat …', a: 'einen Hund' },
      { q: 'Frau Novak hat …', a: 'zwei Katzen' },
      { q: 'Herr Berger hat jetzt …', a: 'keine Haustiere' },
      { q: 'Die Studenten im dritten Stock haben …', a: 'Fische' },
      { q: 'Die Kinder von Familie Ahmadi haben …', a: 'ein Kaninchen' }
    ])],

    // ------------------------------------------------ Kapitel 11: Wie die Zeit vergeht!
    k11: [teil3([
      { q: 'Wohin würde der Mann gern reisen?', o: ['Nach Japan.', 'Nach China.', 'Nach Kanada.'], a: 'Nach Japan.',
        audio: [{ s: 'w', t: 'Was würdest du machen, wenn du mehr Zeit hättest?' }, { s: 'm', t: 'Ich würde mehr reisen. Am liebsten nach Japan.' }] },
      { q: 'Worauf freut sich die Frau?', o: ['Auf ihren Urlaub.', 'Auf ihren Geburtstag.', 'Auf das Wochenende.'], a: 'Auf ihren Urlaub.',
        audio: [{ s: 'm', t: 'Worauf freust du dich am meisten?' }, { s: 'w', t: 'Auf meinen Urlaub im Juli. Ich fahre zwei Wochen ans Meer.' }] },
      { q: 'Wann gehen die beiden ins Museum?', o: ['Am Sonntag.', 'Am Samstag.', 'Heute.'], a: 'Am Sonntag.',
        audio: [{ s: 'w', t: 'Hast du am Samstag Zeit? Wir könnten zusammen ins Museum gehen.' }, { s: 'm', t: 'Samstag ist schlecht, da muss ich arbeiten. Aber am Sonntag hätte ich Zeit.' }, { s: 'w', t: 'Gut, dann am Sonntag!' }] },
      { q: 'Was rät die Frau dem Mann?', o: ['Er soll mit seinem Chef sprechen.', 'Er soll eine neue Arbeit suchen.', 'Er soll mehr Urlaub nehmen.'], a: 'Er soll mit seinem Chef sprechen.',
        audio: [{ s: 'm', t: 'Ich hätte gern mehr Zeit für meine Familie. Ich arbeite jeden Tag zehn Stunden.' }, { s: 'w', t: 'Vielleicht könntest du mit deinem Chef über Teilzeit sprechen.' }] },
      { q: 'Wie lange wohnt der Mann schon in Hamburg?', o: ['Seit fünf Jahren.', 'Seit zwei Jahren.', 'Seit sieben Jahren.'], a: 'Seit fünf Jahren.',
        audio: [{ s: 'w', t: 'Wie lange wohnst du schon in Hamburg?' }, { s: 'm', t: 'Seit fünf Jahren. Die Zeit vergeht so schnell! Vorher habe ich zwei Jahre in München gewohnt.' }] }
    ])],

    // ------------------------------------------------ Kapitel 12: Gute Unterhaltung!
    k12: [teil1([
      { q: 'Wie lange dauert das Festival?', o: ['Drei Tage.', 'Zwei Tage.', 'Eine Woche.'], a: 'Drei Tage.',
        audio: [{ s: 'm', t: 'Das Sommerfestival im Stadtpark beginnt dieses Jahr am Freitag, dem zwölften Juli, und dauert drei Tage. Tickets für alle drei Tage kosten fünfundvierzig Euro.' }] },
      { q: 'Warum fällt das Konzert heute aus?', o: ['Der Sänger ist krank.', 'Das Wetter ist schlecht.', 'Es gibt keine Karten mehr.'], a: 'Der Sänger ist krank.',
        audio: [{ s: 'w', t: 'Hallo Ben, hier ist Mia. Du, das Konzert heute Abend fällt aus, weil der Sänger krank ist. Die Band spielt jetzt am nächsten Samstag. Unsere Karten können wir dann benutzen.' }] },
      { q: 'Wann gibt es eine Führung durch die Ausstellung?', o: ['Jeden Sonntag um 11 Uhr.', 'Jeden Samstag um 11 Uhr.', 'Jeden Sonntag um 10 Uhr.'], a: 'Jeden Sonntag um 11 Uhr.',
        audio: [{ s: 'w', t: 'Liebe Besucherinnen und Besucher, die Ausstellung mit Bildern von jungen Malerinnen und Malern ist noch bis Ende August geöffnet. Jeden Sonntag gibt es um elf Uhr eine Führung.' }] },
      { q: 'Wie alt war die älteste Läuferin?', o: ['81 Jahre.', '18 Jahre.', '80 Jahre.'], a: '81 Jahre.',
        audio: [{ s: 'm', t: 'Und nun die Nachrichten. In Köln haben gestern mehr als tausend Menschen bei einem Stadtlauf mitgemacht. Der jüngste Läufer war acht Jahre alt, die älteste Läuferin war einundachtzig.' }] },
      { q: 'Was kann man gewinnen?', o: ['Zwei Karten für ein Konzert.', 'Ein Radio.', 'Eine Reise.'], a: 'Zwei Karten für ein Konzert.',
        audio: [{ s: 'w', t: 'Sie hören Radio Nord. Wer kennt den Sänger, der dieses Lied singt? Rufen Sie uns jetzt an! Wer gewinnt, bekommt zwei Karten für das Konzert am Samstag.' }] }
    ])],

    // ------------------------------------------------ Finaltest A2: Hören Teil 1–4
    final: [
      teil1([
        { q: 'Was soll Herr Schmitt machen?', o: ['In der Praxis anrufen.', 'Morgen in die Praxis kommen.', 'Zu einem anderen Arzt gehen.'], a: 'In der Praxis anrufen.',
          audio: [{ s: 'w', t: 'Guten Tag, Herr Schmitt, hier ist die Praxis Doktor Wolf. Leider müssen wir Ihren Termin morgen absagen, weil die Ärztin krank ist. Könnten Sie uns bitte zurückrufen? Dann machen wir einen neuen Termin.' }] },
        { q: 'Von welchem Gleis fährt der Zug nach Dortmund heute ab?', o: ['Von Gleis 8.', 'Von Gleis 3.', 'Von Gleis 13.'], a: 'Von Gleis 8.',
          audio: [{ s: 'm', t: 'Achtung an Gleis drei: Der Intercity nach Dortmund fährt heute nicht von Gleis drei, sondern von Gleis acht ab. Wir bitten um Entschuldigung.' }] },
        { q: 'Wie wird das Wetter morgen am Nachmittag im Süden?', o: ['Sonnig.', 'Regnerisch.', 'Es schneit.'], a: 'Sonnig.',
          audio: [{ s: 'w', t: 'Das Wetter für morgen: Am Vormittag regnet es im ganzen Land. Am Nachmittag scheint im Süden wieder die Sonne. Die Temperaturen liegen zwischen zwölf und sechzehn Grad.' }] },
        { q: 'Wo kann Sandra ihre Kinokarte bekommen?', o: ['An der Kasse.', 'Bei Kai im Kino.', 'Vor dem Kino.'], a: 'An der Kasse.',
          audio: [{ s: 'm', t: 'Hallo Sandra, hier ist Kai. Ich stehe vor dem Kino, aber du bist nicht da. Wo bist du? Der Film beginnt in zehn Minuten. Ich warte noch fünf Minuten, dann gehe ich schon hinein. Deine Karte gebe ich an der Kasse ab.' }] },
        { q: 'Was ist heute günstiger?', o: ['Sofas.', 'Betten.', 'Lampen.'], a: 'Sofas.',
          audio: [{ s: 'w', t: 'Liebe Kundinnen und Kunden, heute ist unser Möbelhaus bis zweiundzwanzig Uhr geöffnet. Alle Sofas sind heute dreißig Prozent günstiger.' }] }
      ], 'H1'),
      teil2('Was macht Jonas nächste Woche?', [
        { s: 'w', n: 'Nina', t: 'Hallo Jonas, hast du nächste Woche mal Zeit? Wir könnten zusammen ins Schwimmbad gehen.' },
        { s: 'm', n: 'Jonas', t: 'Nächste Woche ist ganz schön voll. Am Montag habe ich nach der Arbeit einen Termin beim Zahnarzt.' },
        { s: 'w', n: 'Nina', t: 'Und am Dienstag?' },
        { s: 'm', n: 'Jonas', t: 'Am Dienstag spiele ich immer Fußball mit meinen Kollegen. Und am Mittwoch muss ich länger arbeiten, weil wir ein wichtiges Projekt haben.' },
        { s: 'w', n: 'Nina', t: 'Und am Donnerstag?' },
        { s: 'm', n: 'Jonas', t: 'Am Donnerstag helfe ich meiner Schwester beim Umzug. Aber am Freitag habe ich Zeit!' },
        { s: 'w', n: 'Nina', t: 'Freitag geht bei mir leider nicht. Da besuche ich meine Oma.' },
        { s: 'm', n: 'Jonas', t: 'Hm. Am Samstag kaufe ich am Vormittag ein. Aber am Nachmittag können wir schwimmen gehen.' },
        { s: 'w', n: 'Nina', t: 'Super, dann am Samstagnachmittag!' }
      ], ['zum Zahnarzt gehen', 'Fußball spielen', 'länger arbeiten', 'der Schwester helfen', 'schwimmen gehen', 'die Oma besuchen', 'ins Kino gehen'], [
        { q: 'Am Montag will Jonas …', a: 'zum Zahnarzt gehen' },
        { q: 'Am Dienstag will Jonas …', a: 'Fußball spielen' },
        { q: 'Am Mittwoch muss Jonas …', a: 'länger arbeiten' },
        { q: 'Am Donnerstag will Jonas …', a: 'der Schwester helfen' },
        { q: 'Am Samstagnachmittag will Jonas …', a: 'schwimmen gehen' }
      ], 'H2'),
      teil3([
        { q: 'Wo ist die Milch?', o: ['Neben dem Käse.', 'Neben dem Brot.', 'Am Eingang.'], a: 'Neben dem Käse.',
          audio: [{ s: 'm', t: 'Entschuldigung, wo finde ich die Milch?' }, { s: 'w', t: 'Die Milch ist ganz hinten, neben dem Käse.' }] },
        { q: 'Was hat der Mann im Urlaub oft gemacht?', o: ['Er war im Museum.', 'Er war wandern.', 'Er war schwimmen.'], a: 'Er war im Museum.',
          audio: [{ s: 'w', t: 'Wie war dein Urlaub in Österreich?' }, { s: 'm', t: 'Leider hat es fast jeden Tag geregnet. Deshalb waren wir oft im Museum.' }] },
        { q: 'Warum möchte der Mann das Hemd umtauschen?', o: ['Es ist zu klein.', 'Es ist kaputt.', 'Die Farbe gefällt ihm nicht.'], a: 'Es ist zu klein.',
          audio: [{ s: 'm', t: 'Guten Tag, ich möchte dieses Hemd umtauschen. Es ist zu klein.' }, { s: 'w', t: 'Haben Sie den Kassenbon dabei?' }, { s: 'm', t: 'Ja, hier.' }, { s: 'w', t: 'Gut. Möchten Sie das Hemd eine Nummer größer?' }] },
        { q: 'Was macht der Mann heute Abend?', o: ['Er lernt für eine Prüfung.', 'Er geht ins Theater.', 'Er arbeitet.'], a: 'Er lernt für eine Prüfung.',
          audio: [{ s: 'w', t: 'Kommst du heute Abend mit ins Theater?' }, { s: 'm', t: 'Ich würde gern, aber ich muss für meine Prüfung lernen.' }] },
        { q: 'Wie viel muss der Mann für das Ticket bezahlen?', o: ['58 €', '29 €', '85 €'], a: '58 €',
          audio: [{ s: 'm', t: 'Wie viel kostet ein Ticket nach Berlin?' }, { s: 'w', t: 'Mit Bahncard neunundzwanzig Euro, ohne Bahncard achtundfünfzig Euro.' }, { s: 'm', t: 'Ich habe leider keine Bahncard.' }] }
      ], 'H3'),
      teil4([
        { s: 'w', n: 'Moderatorin', t: 'Familie Lorenz hat vor einem Jahr ihr Auto verkauft. Herr Lorenz, warum?' },
        { s: 'm', n: 'Herr Lorenz', t: 'Unser Auto war alt, und wir mussten oft in die Werkstatt. Ein neues Auto war uns zu teuer. Außerdem wohnen wir in der Stadt. Da braucht man nicht unbedingt ein Auto.' },
        { s: 'w', n: 'Moderatorin', t: 'Wie kommen Sie jetzt zur Arbeit?' },
        { s: 'm', n: 'Herr Lorenz', t: 'Mit dem Fahrrad. Ich brauche nur zwanzig Minuten. Meine Frau fährt mit der Straßenbahn.' },
        { s: 'w', n: 'Moderatorin', t: 'Und wie machen Sie den Großeinkauf?' },
        { s: 'm', n: 'Herr Lorenz', t: 'Wir kaufen jetzt öfter ein, aber immer nur ein bisschen. Und schwere Sachen bestellen wir manchmal im Internet.' },
        { s: 'w', n: 'Moderatorin', t: 'Gibt es auch Probleme?' },
        { s: 'm', n: 'Herr Lorenz', t: 'Ja, im Urlaub. Wenn wir aufs Land fahren wollen, ist das mit dem Zug manchmal kompliziert. Dann leihen wir uns ein Auto.' },
        { s: 'w', n: 'Moderatorin', t: 'Möchten Sie wieder ein eigenes Auto haben?' },
        { s: 'm', n: 'Herr Lorenz', t: 'Nein, im Moment nicht. Wir sparen viel Geld und sind fitter.' }
      ], [
        { q: 'Familie Lorenz hat ihr Auto vor einem Jahr verkauft.', a: true },
        { q: 'Herr Lorenz fährt mit der Straßenbahn zur Arbeit.', a: false },
        { q: 'Die Familie bestellt manchmal schwere Sachen im Internet.', a: true },
        { q: 'Im Urlaub fährt die Familie immer mit dem Zug.', a: false },
        { q: 'Ohne Auto spart die Familie viel Geld.', a: true }
      ], 'H4')
    ]
  };
})();
