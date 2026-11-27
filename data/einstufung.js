// Hannover Sprachakademie – Einstufungstest (A1–C1)
// Aufbau wie bei großen Anbietern (Goethe-Institut, Universitäten): Der Test wird Stufe für Stufe schwerer.
// Jede Stufe: Lesen (4) + Hören (4) + Sprachbausteine (6) = 14 Punkte. Bestanden ab 60 % (9 Punkte),
// sonst endet der Test. Danach Schreiben (Aufgaben passend zum erreichten Niveau, Korrektur durch KI + Lehrkraft).
// Hören: lines = [{ s: 'w' | 'm', t: 'Text' }] – wird im Browser mit einer deutschen Stimme vorgelesen (max. 2×).
window.EINSTUFUNG = {
  bestehen: 0.6,     // Anteil richtiger Antworten, um die nächste Stufe zu erreichen
  teilweise: 0.4,    // ab diesem Anteil in der nicht bestandenen Stufe: Kurs x.2 statt x.1
  stufen: [
    // ---------------------------------------------------------------- A1
    { niveau: 'A1', teile: [
      { bereich: 'Lesen', titel: 'Lesen: Eine Nachricht', typ: 'tf',
        anweisung: 'Lesen Sie die Nachricht. Richtig oder falsch?', anweisungAr: 'اقرأ الرسالة، ثم حدّد: هل العبارة صحيحة أم خاطئة؟',
        text: 'Hallo Mira,\nmorgen ist Samstag. Hast du Zeit? Ich möchte um 10 Uhr auf den Markt gehen. Danach können wir zusammen bei mir kochen. Mein Bruder Tim kommt auch. Er bringt einen Kuchen mit. Bitte ruf mich heute Abend an!\nLiebe Grüße\nSara',
        items: [
          { q: 'Sara möchte am Samstag auf den Markt gehen.', a: true },
          { q: 'Sara und Mira kochen bei Mira.', a: false },
          { q: 'Tim bringt einen Kuchen mit.', a: true },
          { q: 'Mira soll Sara morgen früh anrufen.', a: false }
        ] },
      { bereich: 'Hören', titel: 'Hören: Eine Ansage am Telefon', typ: 'mcq', rate: 0.85,
        anweisung: 'Sie hören eine Ansage. Lesen Sie zuerst die Aufgaben. Sie können den Text zweimal hören.', anweisungAr: 'ستستمع إلى رسالة هاتفية مسجّلة. اقرأ الأسئلة أولًا، ثم اضغط على زر التشغيل. يمكنك الاستماع مرتين.',
        lines: [
          { s: 'w', t: 'Guten Tag, hier ist die Praxis Doktor Klein. Wir haben im Moment geschlossen. Unsere Sprechzeiten sind von Montag bis Freitag von acht bis zwölf Uhr. Am Dienstag und am Donnerstag sind wir auch von fünfzehn bis achtzehn Uhr für Sie da. In dringenden Fällen rufen Sie bitte den ärztlichen Bereitschaftsdienst an: eins, eins, sechs, eins, eins, sieben. Vielen Dank.' }
        ],
        items: [
          { q: 'Was hören Sie?', o: ['Die Ansage einer Arztpraxis.', 'Eine Durchsage im Supermarkt.', 'Eine Nachricht von einer Freundin.'], a: 'Die Ansage einer Arztpraxis.' },
          { q: 'Wann ist die Praxis am Montag geöffnet?', o: ['Von 8 bis 12 Uhr.', 'Von 15 bis 18 Uhr.', 'Von 8 bis 18 Uhr.'], a: 'Von 8 bis 12 Uhr.' },
          { q: 'An welchen Tagen ist die Praxis auch am Nachmittag geöffnet?', o: ['Am Dienstag und am Donnerstag.', 'Am Montag und am Mittwoch.', 'Jeden Tag.'], a: 'Am Dienstag und am Donnerstag.' },
          { q: 'Welche Nummer soll man in dringenden Fällen anrufen?', o: ['116 117', '116 171', '161 117'], a: '116 117' }
        ] },
      { bereich: 'Sprache', titel: 'Wortschatz und Grammatik', typ: 'mcq',
        anweisung: 'Was passt in die Lücke? Wählen Sie.', anweisungAr: 'اختر الكلمة المناسبة للفراغ.',
        items: [
          { q: 'Woher ___ du? – Aus Ägypten.', o: ['kommst', 'kommt', 'kommen'], a: 'kommst' },
          { q: 'Ich habe ___ Bruder und zwei Schwestern.', o: ['einen', 'ein', 'eine'], a: 'einen' },
          { q: 'Am Wochenende ___ wir nicht arbeiten.', o: ['müssen', 'muss', 'musst'], a: 'müssen' },
          { q: 'Ich bin krank. Ich gehe zum ___.', o: ['Arzt', 'Bahnhof', 'Friseur'], a: 'Arzt' },
          { q: 'Am Morgen ___ ich um 7 Uhr auf.', o: ['stehe', 'stehen', 'steht'], a: 'stehe' },
          { q: 'Gestern ___ ich im Supermarkt.', o: ['war', 'bin', 'habe'], a: 'war' }
        ] }
    ] },

    // ---------------------------------------------------------------- A2
    { niveau: 'A2', teile: [
      { bereich: 'Lesen', titel: 'Lesen: Ein Aushang', typ: 'tf',
        anweisung: 'Lesen Sie den Aushang. Richtig oder falsch?', anweisungAr: 'اقرأ الإعلان، ثم حدّد: هل العبارة صحيحة أم خاطئة؟',
        text: 'Neu in der Stadt? Der Nachbarschaftstreff „Miteinander“ lädt ein!\nJeden Donnerstag treffen sich bei uns von 17 bis 20 Uhr Menschen aus der ganzen Welt. Hier können Sie Deutsch sprechen, neue Leute kennenlernen und zusammen kochen. Die Teilnahme ist kostenlos, nur für das Essen bezahlen Sie zwei Euro. Auch Kinder sind herzlich willkommen: Während die Eltern kochen, spielt eine Erzieherin mit ihnen. Im Juli und im August machen wir Pause. Möchten Sie bei uns mithelfen? Dann sprechen Sie bitte mit Frau Yilmaz.',
        items: [
          { q: 'Der Treff findet jede Woche statt.', a: true },
          { q: 'Für die Teilnahme muss man zehn Euro bezahlen.', a: false },
          { q: 'Die Kinder kochen zusammen mit den Eltern.', a: false },
          { q: 'Im Juli und im August gibt es keine Treffen.', a: true }
        ] },
      { bereich: 'Hören', titel: 'Hören: Ein Telefongespräch', typ: 'mcq', rate: 0.9,
        anweisung: 'Sie hören ein Telefongespräch. Lesen Sie zuerst die Aufgaben. Sie können das Gespräch zweimal hören.', anweisungAr: 'ستستمع إلى مكالمة هاتفية. اقرأ الأسئلة أولًا، ثم اضغط على زر التشغيل. يمكنك الاستماع مرتين.',
        lines: [
          { s: 'w', t: 'Autowerkstatt Becker, guten Tag. Sie sprechen mit Frau Lange.' },
          { s: 'm', t: 'Guten Tag, hier ist Karim Haddad. Ich habe morgen um neun Uhr einen Termin für mein Auto. Leider kann ich morgen nicht. Kann ich den Termin verschieben?' },
          { s: 'w', t: 'Kein Problem, Herr Haddad. Wann passt es Ihnen denn?' },
          { s: 'm', t: 'Geht es vielleicht am Freitag?' },
          { s: 'w', t: 'Am Freitag sind wir leider schon voll. Aber am Montag um halb acht ist noch ein Termin frei.' },
          { s: 'm', t: 'Halb acht ist ein bisschen früh, aber das ist okay. Wie lange dauert die Reparatur?' },
          { s: 'w', t: 'Ungefähr drei Stunden. Sie können hier warten oder später wiederkommen.' },
          { s: 'm', t: 'Dann gehe ich in der Zeit einkaufen. Vielen Dank!' }
        ],
        items: [
          { q: 'Warum ruft Herr Haddad an?', o: ['Er möchte seinen Termin verschieben.', 'Er möchte ein Auto kaufen.', 'Er hatte einen Unfall.'], a: 'Er möchte seinen Termin verschieben.' },
          { q: 'Wann ist der neue Termin?', o: ['Am Montag um 7:30 Uhr.', 'Am Freitag um 9:00 Uhr.', 'Am Montag um 8:30 Uhr.'], a: 'Am Montag um 7:30 Uhr.' },
          { q: 'Wie lange dauert die Reparatur?', o: ['Ungefähr drei Stunden.', 'Eine halbe Stunde.', 'Den ganzen Tag.'], a: 'Ungefähr drei Stunden.' },
          { q: 'Was macht Herr Haddad während der Reparatur?', o: ['Er geht einkaufen.', 'Er wartet in der Werkstatt.', 'Er fährt mit dem Bus nach Hause.'], a: 'Er geht einkaufen.' }
        ] },
      { bereich: 'Sprache', titel: 'Wortschatz und Grammatik', typ: 'mcq',
        anweisung: 'Was passt in die Lücke? Wählen Sie.', anweisungAr: 'اختر الكلمة المناسبة للفراغ.',
        items: [
          { q: 'Ich lerne Deutsch, ___ ich in Deutschland arbeiten möchte.', o: ['weil', 'denn', 'deshalb'], a: 'weil' },
          { q: 'Gestern ___ wir mit dem Zug nach Berlin gefahren.', o: ['sind', 'haben', 'werden'], a: 'sind' },
          { q: 'Kannst du ___ bitte helfen?', o: ['mir', 'mich', 'ich'], a: 'mir' },
          { q: 'Mein Bruder ist zwei Jahre ___ als ich.', o: ['älter', 'alt', 'am ältesten'], a: 'älter' },
          { q: 'Ich interessiere mich sehr ___ Fußball.', o: ['für', 'auf', 'an'], a: 'für' },
          { q: 'Bitte füllen Sie dieses Formular ___.', o: ['aus', 'an', 'auf'], a: 'aus' }
        ] }
    ] },

    // ---------------------------------------------------------------- B1
    { niveau: 'B1', teile: [
      { bereich: 'Lesen', titel: 'Lesen: Ein Zeitungsartikel', typ: 'mcq',
        anweisung: 'Lesen Sie den Text. Welche Lösung ist richtig?', anweisungAr: 'اقرأ النص، ثم اختر الإجابة الصحيحة.',
        text: 'Auto teilen statt Auto kaufen\nImmer mehr Menschen in Deutschland teilen sich ein Auto. Beim sogenannten Carsharing bezahlt man nur dann, wenn man das Auto wirklich benutzt. Die Fahrzeuge stehen an festen Stationen oder verteilt in der Stadt und werden per App reserviert. Besonders in Großstädten ist das Angebot beliebt, denn dort sind Parkplätze knapp und teuer. Nach Angaben des Bundesverbands CarSharing sind inzwischen über fünf Millionen Menschen bei einem Anbieter angemeldet. Viele von ihnen haben ihr eigenes Auto verkauft. Auf dem Land sieht die Situation jedoch anders aus: Weil Busse dort oft nur selten fahren, sind die meisten Menschen weiterhin auf ein eigenes Auto angewiesen. Experten fordern deshalb, Carsharing auch in kleineren Orten auszubauen.',
        items: [
          { q: 'Beim Carsharing bezahlt man …', o: ['nur für die Zeit, in der man das Auto benutzt.', 'einen festen Betrag pro Jahr.', 'nur für den Parkplatz.'], a: 'nur für die Zeit, in der man das Auto benutzt.' },
          { q: 'In Großstädten ist Carsharing beliebt, weil …', o: ['Parkplätze dort knapp und teuer sind.', 'dort keine Busse fahren.', 'Autos dort verboten sind.'], a: 'Parkplätze dort knapp und teuer sind.' },
          { q: 'Viele Carsharing-Kunden …', o: ['haben ihr eigenes Auto verkauft.', 'fahren jeden Tag mehrere Stunden.', 'wohnen auf dem Land.'], a: 'haben ihr eigenes Auto verkauft.' },
          { q: 'Auf dem Land …', o: ['brauchen die meisten Menschen weiterhin ein eigenes Auto.', 'gibt es mehr Carsharing als in der Stadt.', 'fahren die Busse sehr oft.'], a: 'brauchen die meisten Menschen weiterhin ein eigenes Auto.' }
        ] },
      { bereich: 'Hören', titel: 'Hören: Ein Interview im Radio', typ: 'mcq', rate: 0.95,
        anweisung: 'Sie hören ein Interview. Lesen Sie zuerst die Aufgaben. Sie können das Interview zweimal hören.', anweisungAr: 'ستستمع إلى مقابلة إذاعية. اقرأ الأسئلة أولًا، ثم اضغط على زر التشغيل. يمكنك الاستماع مرتين.',
        lines: [
          { s: 'w', t: 'Heute ist Jonas Weber bei uns im Studio. Herr Weber, Sie haben in Hannover einen Leihladen eröffnet. Was kann man sich bei Ihnen ausleihen?' },
          { s: 'm', t: 'Fast alles, was man nur selten braucht: Bohrmaschinen, Zelte, Nähmaschinen oder auch Spiele für Kindergeburtstage. Viele Menschen kaufen solche Dinge, benutzen sie zweimal, und dann liegen sie jahrelang im Keller. Das wollen wir ändern.' },
          { s: 'w', t: 'Und wie funktioniert das?' },
          { s: 'm', t: 'Man wird Mitglied und bezahlt dafür zwanzig Euro im Jahr. Dann kann man bis zu drei Dinge gleichzeitig für zwei Wochen ausleihen. Wer wenig Geld hat, kann auch einmal im Monat bei uns mithelfen und muss dann nichts bezahlen.' },
          { s: 'w', t: 'Haben Sie keine Angst, dass etwas kaputtgeht?' },
          { s: 'm', t: 'Natürlich passiert das manchmal. Aber die meisten Leute gehen sehr sorgfältig mit den Sachen um. Kleine Schäden reparieren wir selbst.' },
          { s: 'w', t: 'Wann hat der Laden geöffnet?' },
          { s: 'm', t: 'Dienstags und freitags von sechzehn bis neunzehn Uhr und samstags von zehn bis vierzehn Uhr. Kommen Sie einfach vorbei!' }
        ],
        items: [
          { q: 'Im Leihladen kann man vor allem Dinge ausleihen, die …', o: ['man nur selten braucht.', 'sehr teuer sind.', 'man jeden Tag benutzt.'], a: 'man nur selten braucht.' },
          { q: 'Wie viel kostet die Mitgliedschaft?', o: ['20 Euro im Jahr.', '20 Euro im Monat.', '3 Euro pro Gegenstand.'], a: '20 Euro im Jahr.' },
          { q: 'Wer wenig Geld hat, …', o: ['kann im Laden mithelfen und muss nichts bezahlen.', 'darf die Sachen länger behalten.', 'darf nur einen Gegenstand ausleihen.'], a: 'kann im Laden mithelfen und muss nichts bezahlen.' },
          { q: 'Was sagt Herr Weber über Schäden?', o: ['Kleine Schäden repariert das Team selbst.', 'Es geht nie etwas kaputt.', 'Die Kunden müssen jeden Schaden bezahlen.'], a: 'Kleine Schäden repariert das Team selbst.' }
        ] },
      { bereich: 'Sprache', titel: 'Wortschatz und Grammatik', typ: 'mcq',
        anweisung: 'Was passt in die Lücke? Wählen Sie.', anweisungAr: 'اختر الكلمة المناسبة للفراغ.',
        items: [
          { q: 'Können Sie mir sagen, ___ der Kurs morgen stattfindet?', o: ['ob', 'dass', 'wenn'], a: 'ob' },
          { q: 'Das ist der Kollege, ___ ich gestern beim Umzug geholfen habe.', o: ['dem', 'den', 'der'], a: 'dem' },
          { q: 'Wenn ich mehr Zeit ___, würde ich öfter Sport machen.', o: ['hätte', 'habe', 'hatte'], a: 'hätte' },
          { q: 'Das Rathaus ___ im letzten Jahr renoviert.', o: ['wurde', 'wird', 'hat'], a: 'wurde' },
          { q: 'Er war krank. ___ ist er zur Arbeit gegangen.', o: ['Trotzdem', 'Obwohl', 'Deshalb'], a: 'Trotzdem' },
          { q: 'Beim Einzug muss man oft eine ___ bezahlen. Beim Auszug bekommt man das Geld zurück.', o: ['Kaution', 'Rechnung', 'Gebühr'], a: 'Kaution' }
        ] }
    ] },

    // ---------------------------------------------------------------- B2
    { niveau: 'B2', teile: [
      { bereich: 'Lesen', titel: 'Lesen: Ein Sachtext', typ: 'mcq',
        anweisung: 'Lesen Sie den Text. Welche Lösung ist richtig?', anweisungAr: 'اقرأ النص، ثم اختر الإجابة الصحيحة.',
        text: 'Vier Tage arbeiten, fünf Tage bezahlt?\nWeniger arbeiten bei gleichem Lohn – für viele Beschäftigte klingt das wie ein Traum. In einem Pilotprojekt haben mehrere Dutzend deutsche Unternehmen ein halbes Jahr lang die Vier-Tage-Woche ausprobiert. Die Idee dahinter: Wer ausgeruhter ist, arbeitet konzentrierter und macht weniger Fehler. Tatsächlich berichteten viele Teilnehmende, dass sie sich weniger gestresst fühlten und besser schliefen. Die meisten Firmen wollten das Modell anschließend fortsetzen.\nKritiker geben allerdings zu bedenken, dass sich die Ergebnisse nicht auf alle Branchen übertragen lassen. In Krankenhäusern, Pflegeheimen oder im Einzelhandel müsse die Arbeit schließlich trotzdem erledigt werden – und dort fehle schon heute Personal. Zudem hätten sich vor allem Unternehmen für das Projekt gemeldet, die der Idee ohnehin positiv gegenüberstanden. Ob die Vier-Tage-Woche wirklich für alle funktioniert, ist daher umstritten. Sicher ist nur: Die Diskussion über moderne Arbeitszeitmodelle wird so schnell nicht enden.',
        items: [
          { q: 'Die Befürworter der Vier-Tage-Woche argumentieren, dass …', o: ['ausgeruhte Mitarbeiter effektiver arbeiten.', 'Firmen dadurch Lohnkosten sparen.', 'man so mehr Personal einstellen kann.'], a: 'ausgeruhte Mitarbeiter effektiver arbeiten.' },
          { q: 'Was berichteten viele Teilnehmende?', o: ['Sie hatten weniger Stress.', 'Sie verdienten mehr Geld.', 'Sie mussten an den anderen Tagen länger arbeiten.'], a: 'Sie hatten weniger Stress.' },
          { q: 'Warum halten Kritiker das Modell nicht für alle Branchen geeignet?', o: ['Weil in manchen Bereichen schon jetzt Arbeitskräfte fehlen.', 'Weil die Beschäftigten lieber mehr Urlaub hätten.', 'Weil die Firmen das Projekt abgebrochen haben.'], a: 'Weil in manchen Bereichen schon jetzt Arbeitskräfte fehlen.' },
          { q: 'Welche Einschränkung nennt der Text zu den Ergebnissen?', o: ['Vor allem Firmen, die die Idee ohnehin gut fanden, haben teilgenommen.', 'Das Projekt hat nur vier Wochen gedauert.', 'Es haben nur Krankenhäuser teilgenommen.'], a: 'Vor allem Firmen, die die Idee ohnehin gut fanden, haben teilgenommen.' }
        ] },
      { bereich: 'Hören', titel: 'Hören: Ein Radiobeitrag', typ: 'mcq', rate: 1,
        anweisung: 'Sie hören einen Radiobeitrag. Lesen Sie zuerst die Aufgaben. Sie können den Beitrag zweimal hören.', anweisungAr: 'ستستمع إلى تقرير إذاعي. اقرأ الأسئلة أولًا، ثم اضغط على زر التشغيل. يمكنك الاستماع مرتين.',
        lines: [
          { s: 'm', t: 'Viele Menschen greifen abends im Bett noch einmal zum Smartphone: nur kurz die Nachrichten lesen oder ein Video ansehen. Schlafforscher sehen diese Gewohnheit kritisch. Das Problem ist dabei nicht so sehr das Licht des Bildschirms, wie man lange angenommen hat, sondern vor allem der Inhalt. Wer spannende Serien schaut oder sich über Kommentare in sozialen Netzwerken ärgert, ist innerlich aufgewühlt und kommt schlechter zur Ruhe. Experten empfehlen deshalb, etwa eine Stunde vor dem Schlafengehen auf das Handy zu verzichten. Wer das nicht schafft, sollte zumindest aufregende Inhalte meiden und lieber ruhige Musik hören oder ein Buch lesen. Außerdem raten die Fachleute, das Smartphone nicht neben das Bett zu legen. Wer nachts aufwacht und sofort aufs Display schaut, findet nämlich oft nur schwer wieder in den Schlaf.' }
        ],
        items: [
          { q: 'Was ist laut Schlafforschern das Hauptproblem?', o: ['Die Inhalte, die man abends ansieht.', 'Das helle Licht des Bildschirms.', 'Die Strahlung des Handys.'], a: 'Die Inhalte, die man abends ansieht.' },
          { q: 'Was empfehlen die Experten?', o: ['Etwa eine Stunde vor dem Schlafen kein Handy mehr zu benutzen.', 'Das Handy nur noch tagsüber aufzuladen.', 'Abends nur noch kurze Videos anzusehen.'], a: 'Etwa eine Stunde vor dem Schlafen kein Handy mehr zu benutzen.' },
          { q: 'Wer nicht auf das Handy verzichten kann, sollte …', o: ['ruhige Inhalte wählen.', 'die Helligkeit erhöhen.', 'früher aufstehen.'], a: 'ruhige Inhalte wählen.' },
          { q: 'Warum sollte das Smartphone nicht neben dem Bett liegen?', o: ['Weil man nach einem Blick aufs Display nachts schwer wieder einschläft.', 'Weil es nachts zu laut klingelt.', 'Weil es beim Aufladen zu heiß wird.'], a: 'Weil man nach einem Blick aufs Display nachts schwer wieder einschläft.' }
        ] },
      { bereich: 'Sprache', titel: 'Wortschatz und Grammatik', typ: 'mcq',
        anweisung: 'Was passt in die Lücke? Wählen Sie.', anweisungAr: 'اختر الكلمة المناسبة للفراغ.',
        items: [
          { q: '___ der hohen Kosten hat die Stadt das Projekt nicht gestoppt.', o: ['Trotz', 'Wegen', 'Während'], a: 'Trotz' },
          { q: 'Er tut so, als ___ er alles wüsste.', o: ['ob', 'dass', 'weil'], a: 'ob' },
          { q: 'Die Unterlagen müssen bis Freitag ___ werden.', o: ['eingereicht', 'einreichen', 'einzureichen'], a: 'eingereicht' },
          { q: 'Das neue Gesetz tritt am 1. Januar in ___.', o: ['Kraft', 'Frage', 'Betrieb'], a: 'Kraft' },
          { q: 'Die Firma, ___ Produkte weltweit verkauft werden, hat ihren Sitz in Hannover.', o: ['deren', 'dessen', 'die'], a: 'deren' },
          { q: 'Weil die Aufträge fehlten, musste die Firma zwanzig Mitarbeiter ___.', o: ['entlassen', 'einstellen', 'befördern'], a: 'entlassen' }
        ] }
    ] },

    // ---------------------------------------------------------------- C1
    { niveau: 'C1', teile: [
      { bereich: 'Lesen', titel: 'Lesen: Ein Essay', typ: 'mcq',
        anweisung: 'Lesen Sie den Text. Welche Lösung ist richtig?', anweisungAr: 'اقرأ النص، ثم اختر الإجابة الصحيحة.',
        text: 'Lob der Langeweile\nLangeweile hat einen schlechten Ruf. Wer sich langweilt, gilt schnell als antriebslos oder einfallslos, und kaum jemand gibt gern zu, dass er gerade nichts mit sich anzufangen weiß. Kein Wunder also, dass wir jede freie Minute füllen: Im Wartezimmer, an der Bushaltestelle oder in der Schlange im Supermarkt greifen wir reflexartig zum Smartphone.\nPsychologen sehen diese Entwicklung mit gemischten Gefühlen. Zwar sei Langeweile ein unangenehmer Zustand, doch gerade darin liege ihr Wert: Sie signalisiere, dass die aktuelle Tätigkeit uns nicht ausfülle, und dränge uns dazu, nach sinnvolleren Beschäftigungen zu suchen. Mehrere Studien deuten zudem darauf hin, dass Menschen nach einer langweiligen Aufgabe kreativer sind – vermutlich, weil der Geist beim Abschweifen neue Verbindungen knüpft.\nWer der Langeweile konsequent aus dem Weg geht, beraubt sich demnach einer wichtigen Quelle von Ideen. Allerdings warnen die Forscher davor, Langeweile zu romantisieren. Chronische Langeweile, etwa in einem monotonen Job, kann durchaus krank machen. Entscheidend sei daher nicht, Langeweile um jeden Preis zu suchen, sondern ihr gelegentlich Raum zu lassen – etwa indem man das Handy beim Warten einfach einmal in der Tasche lässt.',
        items: [
          { q: 'Warum füllen viele Menschen laut Text jede freie Minute?', o: ['Weil Langeweile gesellschaftlich negativ bewertet wird.', 'Weil sie beruflich ständig erreichbar sein müssen.', 'Weil Smartphones immer billiger werden.'], a: 'Weil Langeweile gesellschaftlich negativ bewertet wird.' },
          { q: 'Worin sehen Psychologen den Nutzen der Langeweile?', o: ['Sie zeigt an, dass man etwas Sinnvolleres tun könnte.', 'Sie hilft dem Körper, sich zu erholen.', 'Sie verbessert das Gedächtnis.'], a: 'Sie zeigt an, dass man etwas Sinnvolleres tun könnte.' },
          { q: 'Was legen mehrere Studien nahe?', o: ['Langeweile kann die Kreativität fördern.', 'Langweilige Aufgaben machen Menschen aggressiv.', 'Kreative Menschen langweilen sich nie.'], a: 'Langeweile kann die Kreativität fördern.' },
          { q: 'Welche Haltung vertreten die Forscher am Ende des Textes?', o: ['Man sollte Langeweile zulassen, ohne sie zu verklären.', 'Man sollte Langeweile möglichst ganz vermeiden.', 'Chronische Langeweile ist harmlos.'], a: 'Man sollte Langeweile zulassen, ohne sie zu verklären.' }
        ] },
      { bereich: 'Hören', titel: 'Hören: Ein Experteninterview', typ: 'mcq', rate: 1,
        anweisung: 'Sie hören ein Interview mit einer Expertin. Lesen Sie zuerst die Aufgaben. Sie können das Interview zweimal hören.', anweisungAr: 'ستستمع إلى مقابلة مع خبيرة. اقرأ الأسئلة أولًا، ثم اضغط على زر التشغيل. يمكنك الاستماع مرتين.',
        lines: [
          { s: 'm', t: 'Frau Doktor Brandt, die Sommer in deutschen Städten werden immer heißer. Was kann eine Stadt dagegen tun?' },
          { s: 'w', t: 'Das wirksamste Mittel sind ganz eindeutig Bäume. Ein großer Stadtbaum spendet nicht nur Schatten, er kühlt seine Umgebung auch durch Verdunstung. An heißen Tagen kann es unter einer Baumkrone mehrere Grad kühler sein als auf einem offenen Platz.' },
          { s: 'm', t: 'Warum pflanzen die Städte dann nicht einfach mehr Bäume?' },
          { s: 'w', t: 'Ganz so einfach ist es leider nicht. Unter vielen Straßen verlaufen Leitungen und Kabel, sodass die Wurzeln kaum Platz finden. Hinzu kommt, dass junge Bäume in den ersten Jahren intensiv gegossen werden müssen, und dafür fehlt den Grünflächenämtern oft das Personal. Viele Neupflanzungen gehen deshalb ein, bevor sie überhaupt Schatten spenden.' },
          { s: 'm', t: 'Was schlagen Sie vor?' },
          { s: 'w', t: 'Zum einen sollte man bei jeder Straßensanierung von Anfang an Platz für Bäume einplanen, statt sie nachträglich irgendwo unterzubringen. Zum anderen setzen manche Städte inzwischen auf Baumpatenschaften: Anwohner verpflichten sich, einen Baum in ihrer Straße im Sommer regelmäßig zu gießen. Das ersetzt zwar keine professionelle Pflege, hilft aber enorm und stärkt nebenbei die Nachbarschaft.' }
        ],
        items: [
          { q: 'Wie kühlen Bäume laut Dr. Brandt ihre Umgebung?', o: ['Durch Schatten und Verdunstung.', 'Nur durch ihren Schatten.', 'Indem sie Regenwasser speichern.'], a: 'Durch Schatten und Verdunstung.' },
          { q: 'Warum ist es schwierig, mehr Bäume zu pflanzen?', o: ['Unter den Straßen fehlt oft Platz für die Wurzeln.', 'Die Anwohner sind gegen neue Bäume.', 'Junge Bäume sind in der Anschaffung zu teuer.'], a: 'Unter den Straßen fehlt oft Platz für die Wurzeln.' },
          { q: 'Warum gehen viele junge Bäume ein?', o: ['Sie werden nicht ausreichend gegossen.', 'Sie werden zu früh gefällt.', 'Sie bekommen zu wenig Licht.'], a: 'Sie werden nicht ausreichend gegossen.' },
          { q: 'Wie bewertet Dr. Brandt Baumpatenschaften?', o: ['Sie sind hilfreich, können Fachleute aber nicht ersetzen.', 'Sie sind überflüssig.', 'Sie ersetzen die Arbeit der Grünflächenämter vollständig.'], a: 'Sie sind hilfreich, können Fachleute aber nicht ersetzen.' }
        ] },
      { bereich: 'Sprache', titel: 'Wortschatz und Grammatik', typ: 'mcq',
        anweisung: 'Was passt in die Lücke? Wählen Sie.', anweisungAr: 'اختر الكلمة المناسبة للفراغ.',
        items: [
          { q: '___ aller Bemühungen konnte das Projekt nicht rechtzeitig abgeschlossen werden.', o: ['Ungeachtet', 'Infolge', 'Anhand'], a: 'Ungeachtet' },
          { q: 'Die Ergebnisse sind ___ zu interpretieren, da nur wenige Personen befragt wurden.', o: ['mit Vorsicht', 'mit Absicht', 'mit Vorliebe'], a: 'mit Vorsicht' },
          { q: 'Hätte er sich rechtzeitig beworben, ___ er die Stelle bekommen.', o: ['hätte', 'wäre', 'würde'], a: 'hätte' },
          { q: 'Der Angeklagte ___ zur Tatzeit zu Hause gewesen sein – das behauptet er jedenfalls.', o: ['will', 'soll', 'muss'], a: 'will' },
          { q: 'Mit dieser Bemerkung hat sie den Nagel auf den Kopf ___.', o: ['getroffen', 'geschlagen', 'gelegt'], a: 'getroffen' },
          { q: 'Die Regierung hat Maßnahmen ___, um die Inflation zu bekämpfen.', o: ['ergriffen', 'gegriffen', 'begriffen'], a: 'ergriffen' }
        ] }
    ] }
  ],

  // Schreiben: ab = Anzahl bestandener Stufen, ab der die Aufgabe erscheint
  schreiben: [
    { ab: 0, ziel: 'A1–A2', min: 25, titel: 'Schreiben 1: Mein Tag gestern',
      aufgabe: 'Was haben Sie gestern gemacht? Schreiben Sie 4–6 Sätze (ca. 40 Wörter).',
      aufgabeAr: 'ماذا فعلت أمس؟ اكتب 4–6 جمل (نحو 40 كلمة).' },
    { ab: 1, ziel: 'A2–B1', min: 60, titel: 'Schreiben 2: Eine E-Mail an eine Freundin oder einen Freund',
      aufgabe: 'Sie sind vor Kurzem in eine neue Wohnung gezogen. Schreiben Sie eine E-Mail an eine Freundin oder einen Freund (ca. 80 Wörter):\n• Wie ist die neue Wohnung?\n• Was gefällt Ihnen, was gefällt Ihnen nicht?\n• Laden Sie Ihre Freundin oder Ihren Freund zu einer kleinen Feier ein (Tag und Uhrzeit).',
      aufgabeAr: 'انتقلتَ مؤخرًا إلى شقة جديدة. اكتب رسالة إلكترونية إلى صديق أو صديقة (نحو 80 كلمة): صِف الشقة، واذكر ما يعجبك وما لا يعجبك، وادعُ صديقك إلى حفلة صغيرة مع ذكر اليوم والساعة.' },
    { ab: 3, ziel: 'B1–C1', min: 110, titel: 'Schreiben 3: Ihre Meinung in einem Forum',
      aufgabe: 'Immer mehr Firmen erlauben ihren Mitarbeitern, im Homeoffice zu arbeiten. Was meinen Sie dazu? Schreiben Sie einen Beitrag für ein Online-Forum (ca. 150 Wörter):\n• Nennen Sie Vorteile und Nachteile.\n• Sagen Sie Ihre Meinung und begründen Sie sie.\n• Geben Sie ein Beispiel.',
      aufgabeAr: 'تسمح شركات كثيرة لموظفيها بالعمل من المنزل. ما رأيك في ذلك؟ اكتب مشاركة في منتدى إلكتروني (نحو 150 كلمة): اذكر المزايا والعيوب، وعبّر عن رأيك مع التعليل، وقدّم مثالًا.' }
  ]
};
