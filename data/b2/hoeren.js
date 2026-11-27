// Aspekte neu B2 – Hören (wie Goethe-Zertifikat B2 und telc Deutsch B2)
// Wird von assets/app.js vor dem Schreiben-Teil (D) eingefügt. audio = Hörtext (Sprachausgabe), plays = wie oft (1 oder 2).
(function () {
  var RATE = 1;
  function g1(items) {
    return { teil: 'Hören', titel: 'Hören Teil 1 (wie Goethe B2): Kurze Texte', typ: 'tf', plays: 1, rate: RATE,
      anweisung: 'Sie hören kurze Texte. Sie hören jeden Text einmal. Zu jedem Text lösen Sie zwei Aufgaben: Richtig oder falsch? und a, b oder c. Lesen Sie zuerst die Aufgaben.',
      anweisungAr: 'ستسمع نصوصًا قصيرة، وتسمع كل نص مرة واحدة فقط. لكل نص سؤالان: صحيح أم خطأ، ثم اختيار من متعدد. اقرأ الأسئلة أولًا.',
      items: items };
  }
  function g2(audio, items) {
    return { teil: 'Hören', titel: 'Hören Teil 2 (wie Goethe B2): Ein Interview', typ: 'mcq', plays: 2, rate: RATE, audio: audio, audioTitel: 'Interview',
      anweisung: 'Sie hören ein Interview. Sie hören den Text zweimal. Lesen Sie zuerst die Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
      anweisungAr: 'ستسمع مقابلة إذاعية مرتين. اقرأ الأسئلة أولًا، ثم اختر الإجابة الصحيحة لكل سؤال.',
      items: items };
  }
  function g3(audio, items) {
    return { teil: 'Hören', titel: 'Hören Teil 3 (wie Goethe B2): Ein Gespräch', typ: 'mcq', plays: 1, rate: RATE, audio: audio, audioTitel: 'Gespräch',
      anweisung: 'Sie hören ein Gespräch. Sie hören den Text einmal. Lesen Sie zuerst die Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
      anweisungAr: 'ستسمع محادثة مرة واحدة فقط. اقرأ الأسئلة أولًا، ثم اختر الإجابة الصحيحة لكل سؤال.',
      items: items };
  }
  function g4(audio, items) {
    return { teil: 'Hören', titel: 'Hören Teil 4 (wie Goethe B2): Ein Vortrag', typ: 'mcq', plays: 2, rate: RATE, audio: audio, audioTitel: 'Vortrag',
      anweisung: 'Sie hören einen Vortrag. Sie hören den Text zweimal. Lesen Sie zuerst die Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
      anweisungAr: 'ستسمع محاضرة مرتين. اقرأ الأسئلة أولًا، ثم اختر الإجابة الصحيحة لكل سؤال.',
      items: items };
  }
  function tInterview(audio, items) {
    return { teil: 'Hören', titel: 'Hören (wie telc B2): Ein Radiointerview', typ: 'tf', plays: 1, rate: RATE, audio: audio, audioTitel: 'Interview',
      anweisung: 'Sie hören ein Interview aus dem Radio. Sie hören den Text einmal. Lesen Sie zuerst die Aussagen. Sind sie richtig oder falsch?',
      anweisungAr: 'ستسمع مقابلة إذاعية مرة واحدة فقط. اقرأ الجمل أولًا، ثم حدّد: هل كل جملة صحيحة أم خاطئة؟',
      items: items };
  }
  function tKurz(items) {
    return { teil: 'Hören', titel: 'Hören (wie telc B2): Ansagen und Nachrichten', typ: 'tf', plays: 2, rate: RATE,
      anweisung: 'Sie hören fünf kurze Texte: Ansagen, Nachrichten am Telefon und Radiotexte. Sie hören jeden Text zweimal. Ist die Aussage richtig oder falsch?',
      anweisungAr: 'ستسمع خمسة نصوص قصيرة: إعلانات ورسائل هاتفية ونصوصًا إذاعية، وتسمع كل نص مرتين. هل العبارة صحيحة أم خاطئة؟',
      items: items };
  }

  // Goethe B2 Hören Teil 3: Radiosendung mit mehreren Personen – Wer sagt was?
  function g3wer(audio, o, items) {
    return { teil: 'Hören', titel: 'Hören Teil 3 (wie Goethe B2): Eine Diskussion – Wer sagt was?', typ: 'select', o: o, plays: 1, rate: RATE, audio: audio, audioTitel: 'Diskussion im Radio',
      anweisung: 'Sie hören eine Diskussion aus dem Radio. Sie hören den Text einmal. Lesen Sie zuerst die Aussagen. Wer sagt was? Wählen Sie.',
      anweisungAr: 'ستسمع نقاشًا إذاعيًا مرة واحدة فقط. اقرأ العبارات أولًا، ثم حدّد: من قال كل عبارة؟',
      items: items };
  }
  // Finaltest: alle vier Teile wie Goethe-Zertifikat B2 (C1 = Teil 1 … C4 = Teil 4)
  function nr(t, n) { t.teil = 'C' + n; return t; }

  window.HOEREN = {
    // ------------------------------------------------ Kapitel 1: Heimat ist …
    k1: [g2([
      { s: 'w', n: 'Moderatorin', t: 'Was bedeutet Heimat? Darüber spreche ich heute mit Karim Mansour. Er ist in Kairo geboren, lebt seit fünfzehn Jahren in Hamburg und hat gerade ein Buch über Menschen geschrieben, die zwischen zwei Kulturen leben. Herr Mansour, ist Hamburg für Sie inzwischen Heimat?' },
      { s: 'm', n: 'Karim Mansour', t: 'Das ist eine schwierige Frage. Als ich hierherkam, habe ich Ägypten sehr vermisst: das Essen, die Familie, sogar den Lärm auf den Straßen. Heute fühle ich mich in Hamburg zu Hause, aber nicht nur hier. Ich würde sagen, ich habe zwei Heimaten. Das ist für mich kein Widerspruch, sondern eher ein Reichtum.' },
      { s: 'w', n: 'Moderatorin', t: 'Für Ihr Buch haben Sie mit über vierzig Menschen gesprochen. Was hat Sie dabei am meisten überrascht?' },
      { s: 'm', n: 'Karim Mansour', t: 'Dass Heimat für die meisten gar kein Ort ist. Viele haben mir erzählt, dass sie Heimat mit Menschen verbinden, mit Gerüchen oder mit einer bestimmten Sprache. Eine Frau aus Polen sagte mir: Heimat ist dort, wo man mich versteht, ohne dass ich etwas erklären muss.' },
      { s: 'w', n: 'Moderatorin', t: 'Welche Rolle spielt die Sprache?' },
      { s: 'm', n: 'Karim Mansour', t: 'Eine sehr große. Am Anfang konnte ich mich auf Deutsch nicht so ausdrücken, wie ich wollte. Ich habe mich oft dumm gefühlt, obwohl ich in Ägypten als Ingenieur gearbeitet hatte. Erst als ich die Sprache wirklich beherrschte, habe ich angefangen, mich hier wohlzufühlen.' },
      { s: 'w', n: 'Moderatorin', t: 'Gibt es auch Missverständnisse, die Sie bis heute erleben?' },
      { s: 'm', n: 'Karim Mansour', t: 'Natürlich! Wenn ich in Kairo bin, sagen meine Verwandten, ich sei zu deutsch geworden, zu pünktlich und zu direkt. Und hier fragt man mich immer noch, woher ich eigentlich komme. Darüber kann ich inzwischen lachen.' },
      { s: 'w', n: 'Moderatorin', t: 'Was möchten Sie mit Ihrem Buch erreichen?' },
      { s: 'm', n: 'Karim Mansour', t: 'Ich möchte zeigen, dass man sich nicht entscheiden muss. Man kann gleichzeitig zu zwei Orten gehören. Das Buch richtet sich übrigens nicht nur an Migranten, sondern an alle, die schon einmal umgezogen sind.' }
    ], [
      { q: 'Wie beschreibt Karim Mansour seine Beziehung zu Hamburg heute?', o: ['Hamburg ist eine von zwei Heimaten für ihn.', 'Er vermisst Ägypten jeden Tag sehr.', 'Er fühlt sich nur in Hamburg zu Hause.'], a: 'Hamburg ist eine von zwei Heimaten für ihn.' },
      { q: 'Was hat ihn bei seinen Gesprächen am meisten überrascht?', o: ['Für viele ist Heimat nicht an einen Ort gebunden.', 'Die meisten Menschen wollen in ihr Herkunftsland zurück.', 'Viele Menschen sprechen nicht gern über Heimat.'], a: 'Für viele ist Heimat nicht an einen Ort gebunden.' },
      { q: 'Warum hat er sich am Anfang oft dumm gefühlt?', o: ['Weil er sich auf Deutsch nicht gut ausdrücken konnte.', 'Weil er keine Arbeit als Ingenieur fand.', 'Weil er die deutsche Kultur nicht verstand.'], a: 'Weil er sich auf Deutsch nicht gut ausdrücken konnte.' },
      { q: 'Was sagen seine Verwandten in Kairo über ihn?', o: ['Er sei zu deutsch geworden.', 'Er solle nach Ägypten zurückkommen.', 'Er spreche nicht mehr gut Arabisch.'], a: 'Er sei zu deutsch geworden.' },
      { q: 'Für wen hat er sein Buch geschrieben?', o: ['Für alle, die schon einmal umgezogen sind.', 'Nur für Menschen mit Migrationsgeschichte.', 'Vor allem für Deutsche, die Ägypten besuchen.'], a: 'Für alle, die schon einmal umgezogen sind.' }
    ])],

    // ------------------------------------------------ Kapitel 2: Sprich mit mir!
    k2: [g1([
      { q: 'Laut der Studie lernt man schneller, wenn man mit Muttersprachlern spricht.', a: true,
        audio: [{ s: 'w', t: 'Wer eine neue Sprache lernt, sollte nicht nur Vokabeln pauken. Das zeigt eine aktuelle Studie der Universität Bremen. Die Forscher haben festgestellt, dass Lernende, die sich regelmäßig mit Muttersprachlern unterhalten, deutlich schneller Fortschritte machen als diejenigen, die nur mit Lehrbüchern arbeiten. Besonders wirksam sind sogenannte Tandems, bei denen sich zwei Personen gegenseitig ihre Sprache beibringen. Die Universität bietet ab dem Wintersemester eine kostenlose Plattform an, auf der man Tandempartner finden kann.' }] },
      { typ: 'mcq', q: 'Was bietet die Universität an?', o: ['Eine Plattform zur Suche nach Tandempartnern.', 'Kostenlose Sprachkurse für alle.', 'Neue Lehrbücher für Anfänger.'], a: 'Eine Plattform zur Suche nach Tandempartnern.' },
      { q: 'Ralf möchte, dass Claudia zum Teamessen kommt.', a: true,
        audio: [{ s: 'm', t: 'Hallo Claudia, hier ist Ralf. Es geht um das Teamessen am Freitag. Ich weiß, dass du dich über Thomas geärgert hast, weil er in der Besprechung so unhöflich war. Aber ich fände es schade, wenn du deshalb nicht kommst. Er hat mir übrigens gesagt, dass es ihm leidtut und dass er sich bei dir entschuldigen möchte. Ruf mich doch kurz zurück, dann kann ich den Tisch für alle reservieren.' }] },
      { typ: 'mcq', q: 'Was hat Thomas zu Ralf gesagt?', o: ['Er möchte sich bei Claudia entschuldigen.', 'Er kommt nicht zum Teamessen.', 'Er ärgert sich über Claudia.'], a: 'Er möchte sich bei Claudia entschuldigen.' },
      { q: 'Gesten werden in allen Ländern gleich verstanden.', a: false,
        audio: [{ s: 'm', t: 'In unserer Reihe „Missverständnisse im Alltag“ geht es heute um Gesten. Viele Menschen glauben, dass Körpersprache überall auf der Welt gleich verstanden wird. Das ist jedoch ein Irrtum. Ein Nicken bedeutet zum Beispiel in Bulgarien traditionell nicht „Ja“, sondern „Nein“. Auch der Daumen nach oben, bei uns ein Zeichen für „super“, gilt in einigen Ländern als Beleidigung. Unser Tipp: Wer ins Ausland reist, sollte sich vorher über die wichtigsten Gesten informieren.' }] },
      { typ: 'mcq', q: 'Was empfiehlt der Sprecher Reisenden?', o: ['Sich vor der Reise über Gesten zu informieren.', 'Im Ausland möglichst keine Gesten zu benutzen.', 'Immer nachzufragen, wenn man etwas nicht versteht.'], a: 'Sich vor der Reise über Gesten zu informieren.' }
    ])],

    // ------------------------------------------------ Kapitel 3: Arbeit ist das halbe Leben?
    k3: [tInterview([
      { s: 'm', n: 'Moderator', t: 'Laut einer neuen Umfrage ist nur jeder dritte Beschäftigte in Deutschland mit seiner Arbeit wirklich zufrieden. Darüber spreche ich mit der Arbeitspsychologin Doktor Sabine Meyer. Frau Meyer, woran liegt das?' },
      { s: 'w', n: 'Dr. Sabine Meyer', t: 'Viele denken zuerst an das Gehalt. Aber unsere Untersuchungen zeigen, dass Geld nur auf Platz vier steht. Viel wichtiger sind ein gutes Verhältnis zu den Kollegen, ein Vorgesetzter, der einen wertschätzt, und das Gefühl, etwas Sinnvolles zu tun.' },
      { s: 'm', n: 'Moderator', t: 'Was können Unternehmen konkret tun?' },
      { s: 'w', n: 'Dr. Sabine Meyer', t: 'Sie sollten ihre Mitarbeiter stärker an Entscheidungen beteiligen. Wer mitbestimmen darf, identifiziert sich mehr mit seiner Arbeit. Außerdem hilft regelmäßiges Feedback, und zwar nicht nur einmal im Jahr beim Mitarbeitergespräch, sondern im Alltag.' },
      { s: 'm', n: 'Moderator', t: 'Viele Firmen organisieren Teamevents, zum Beispiel gemeinsame Ausflüge. Bringt das etwas?' },
      { s: 'w', n: 'Dr. Sabine Meyer', t: 'Solche Events können sinnvoll sein, aber sie lösen keine grundlegenden Probleme. Wenn im Alltag die Kommunikation nicht funktioniert, ändert auch ein Kletterausflug nichts daran.' },
      { s: 'm', n: 'Moderator', t: 'Und was raten Sie Beschäftigten, die unzufrieden sind?' },
      { s: 'w', n: 'Dr. Sabine Meyer', t: 'Zuerst sollten sie herausfinden, was genau sie stört. Anstatt sofort zu kündigen, lohnt es sich oft, ein offenes Gespräch mit der Führungskraft zu suchen. Erst wenn sich danach nichts ändert, würde ich mich nach einer neuen Stelle umsehen.' }
    ], [
      { q: 'Laut der Umfrage ist die Mehrheit der Beschäftigten mit ihrer Arbeit zufrieden.', a: false },
      { q: 'Für die Zufriedenheit ist das Gehalt am wichtigsten.', a: false },
      { q: 'Mitarbeiter, die mitentscheiden dürfen, identifizieren sich stärker mit ihrer Arbeit.', a: true },
      { q: 'Frau Meyer empfiehlt, nur einmal im Jahr Feedback zu geben.', a: false },
      { q: 'Teamevents können Kommunikationsprobleme im Alltag nicht lösen.', a: true },
      { q: 'Unzufriedene Beschäftigte sollten zuerst mit ihrer Führungskraft sprechen.', a: true }
    ])],

    // ------------------------------------------------ Kapitel 4: Zusammen leben
    k4: [g3([
      { s: 'w', n: 'Elif', t: 'Jonas, du warst doch letzte Woche bei unserem Projekt „Mitternachtssport“ dabei. Wie war es?' },
      { s: 'm', n: 'Jonas', t: 'Ehrlich gesagt war ich am Anfang skeptisch. Basketball um Mitternacht, das klang für mich eher nach einer verrückten Idee. Aber es kamen über dreißig Jugendliche, viel mehr, als ich erwartet hatte.' },
      { s: 'w', n: 'Elif', t: 'Das freut mich. Genau das ist ja das Ziel: Jugendliche, die abends sonst auf der Straße herumhängen, sollen einen Ort haben, wo sie sich treffen können.' },
      { s: 'm', n: 'Jonas', t: 'Mir ist aufgefallen, dass es kaum Streit gab, obwohl die Jugendlichen aus ganz verschiedenen Stadtteilen kamen.' },
      { s: 'w', n: 'Elif', t: 'Das liegt an den Regeln. Wer andere beleidigt oder schlägt, darf eine Woche nicht mitspielen. Das wissen alle, und sie halten sich daran. Außerdem entscheiden die Jugendlichen selbst mit, wer Schiedsrichter ist.' },
      { s: 'm', n: 'Jonas', t: 'Wer bezahlt das eigentlich? Die Halle, die Trainer …' },
      { s: 'w', n: 'Elif', t: 'Die Stadt stellt die Halle kostenlos zur Verfügung. Die Trainer arbeiten ehrenamtlich, und für die Getränke haben wir einen Sponsor gefunden, eine Bäckerei aus dem Viertel.' },
      { s: 'm', n: 'Jonas', t: 'Ich würde gern regelmäßig mitmachen. Brauchst du noch Leute?' },
      { s: 'w', n: 'Elif', t: 'Unbedingt! Vor allem freitags fehlen uns Betreuer. Wer mitmacht, sollte aber vorher einen kurzen Kurs in Erster Hilfe besuchen.' }
    ], [
      { q: 'Wie fand Jonas die Idee am Anfang?', o: ['Er war skeptisch.', 'Er war sofort begeistert.', 'Er fand sie zu teuer.'], a: 'Er war skeptisch.' },
      { q: 'Was hat Jonas überrascht?', o: ['Es kamen viele Jugendliche.', 'Es gab viel Streit.', 'Die Jugendlichen spielten sehr gut Basketball.'], a: 'Es kamen viele Jugendliche.' },
      { q: 'Was ist das Ziel des Projekts?', o: ['Jugendliche sollen abends einen Treffpunkt haben.', 'Jugendliche sollen Profisportler werden.', 'Jugendliche sollen neue Stadtteile kennenlernen.'], a: 'Jugendliche sollen abends einen Treffpunkt haben.' },
      { q: 'Was passiert, wenn jemand einen anderen beleidigt?', o: ['Er darf eine Woche nicht mitspielen.', 'Er darf nie mehr kommen.', 'Er muss Schiedsrichter sein.'], a: 'Er darf eine Woche nicht mitspielen.' },
      { q: 'Wer bezahlt die Getränke?', o: ['Eine Bäckerei aus dem Viertel.', 'Die Stadt.', 'Die Jugendlichen selbst.'], a: 'Eine Bäckerei aus dem Viertel.' },
      { q: 'Was sollen neue Betreuer vorher tun?', o: ['Einen Erste-Hilfe-Kurs besuchen.', 'Eine Trainerprüfung machen.', 'Selbst Basketball spielen lernen.'], a: 'Einen Erste-Hilfe-Kurs besuchen.' }
    ])],

    // ------------------------------------------------ Kapitel 5: Wer Wissen schafft, macht Wissenschaft
    k5: [g4([
      { s: 'w', n: 'Referentin', t: 'Meine Damen und Herren, herzlich willkommen zu meinem Vortrag über ein Thema, das uns alle betrifft: den Schlaf. Wir verbringen etwa ein Drittel unseres Lebens schlafend, und trotzdem wurde der Schlaf lange Zeit kaum erforscht. Man hielt ihn für einen passiven Zustand, in dem sich der Körper einfach ausruht. Heute wissen wir, dass das Gehirn im Schlaf sehr aktiv ist. Es sortiert die Informationen des Tages und speichert wichtige Inhalte im Langzeitgedächtnis. Deshalb ist es zum Beispiel sinnvoll, vor einer Prüfung ausreichend zu schlafen, anstatt die ganze Nacht zu lernen. Wie viel Schlaf brauchen wir? Für Erwachsene werden sieben bis neun Stunden empfohlen. Allerdings ist das Schlafbedürfnis von Mensch zu Mensch sehr unterschiedlich. Problematisch ist vor allem, dass in Deutschland etwa jeder Vierte über Schlafstörungen klagt. Eine wichtige Ursache wird häufig unterschätzt: das Licht von Bildschirmen. Es signalisiert dem Gehirn, dass noch Tag ist, und verzögert so das Einschlafen. Mein Rat lautet daher: Legen Sie Handy und Tablet mindestens eine Stunde vor dem Schlafengehen zur Seite. Im zweiten Teil des Vortrags stelle ich Ihnen eine Studie vor, die an unserem Institut durchgeführt wurde.' }
    ], [
      { q: 'Wie sah man den Schlaf früher?', o: ['Als passiven Zustand der Erholung.', 'Als wichtigste Zeit für das Gehirn.', 'Als gefährlich für die Gesundheit.'], a: 'Als passiven Zustand der Erholung.' },
      { q: 'Was macht das Gehirn im Schlaf?', o: ['Es speichert wichtige Informationen.', 'Es ruht sich vollständig aus.', 'Es löscht alle Informationen des Tages.'], a: 'Es speichert wichtige Informationen.' },
      { q: 'Was empfiehlt die Referentin vor einer Prüfung?', o: ['Genug zu schlafen.', 'Die ganze Nacht zu lernen.', 'Besonders früh aufzustehen.'], a: 'Genug zu schlafen.' },
      { q: 'Was sagt die Referentin über das Schlafbedürfnis?', o: ['Es ist bei jedem Menschen anders.', 'Alle Erwachsenen brauchen genau acht Stunden.', 'Es wird mit dem Alter größer.'], a: 'Es ist bei jedem Menschen anders.' },
      { q: 'Welche Ursache für Schlafstörungen wird oft unterschätzt?', o: ['Das Licht von Bildschirmen.', 'Zu viel Kaffee am Abend.', 'Lärm in der Nacht.'], a: 'Das Licht von Bildschirmen.' },
      { q: 'Worum geht es im zweiten Teil des Vortrags?', o: ['Um eine Studie des Instituts.', 'Um Tipps gegen Stress.', 'Um den Schlaf von Kindern.'], a: 'Um eine Studie des Instituts.' }
    ])],

    // ------------------------------------------------ Kapitel 6: Fit für …
    k6: [tKurz([
      { q: 'Auch reduzierte Artikel kann man zurückschicken.', a: false,
        audio: [{ s: 'w', t: 'Sie sind mit Ihrer Bestellung bei Modehaus Online nicht zufrieden? Kein Problem: Sie können alle Artikel innerhalb von dreißig Tagen kostenlos zurückschicken. Bitte verwenden Sie dafür das Rücksendeetikett, das Ihrem Paket beiliegt. Reduzierte Ware ist allerdings vom Umtausch ausgeschlossen.' }] },
      { q: 'Wer eine E-Mail schreibt, bekommt innerhalb von zwei Werktagen eine Antwort.', a: true,
        audio: [{ s: 'm', t: 'Herzlich willkommen bei der Service-Hotline Ihres Stromanbieters. Leider sind im Moment alle Leitungen besetzt. Wenn Sie nicht warten möchten, können Sie uns auch eine E-Mail schreiben oder unser Kontaktformular im Internet nutzen. Wir melden uns dann innerhalb von zwei Werktagen bei Ihnen.' }] },
      { q: 'Herr Schuster soll den Plan bis Mittwoch unterschrieben zurückgeben.', a: true,
        audio: [{ s: 'w', t: 'Hallo Herr Schuster, hier ist Petra Lang aus der Personalabteilung. Ich wollte Sie daran erinnern, dass Ihr Einarbeitungsplan noch nicht unterschrieben ist. Bitte geben Sie ihn mir bis Mittwoch zurück. Falls Sie noch Fragen dazu haben, können Sie gern in meinem Büro vorbeikommen.' }] },
      { q: 'Die Uhrzeiten der Prüfung bekommen die Teilnehmer per E-Mail.', a: false,
        audio: [{ s: 'm', t: 'Liebe Kursteilnehmerinnen und Kursteilnehmer, die mündliche Prüfung findet nicht wie geplant am Samstag statt, sondern bereits am Freitag. Die genauen Uhrzeiten werden am Montag am schwarzen Brett ausgehängt. Bitte bringen Sie unbedingt Ihren Ausweis mit.' }] },
      { q: 'Experten empfehlen, mit dem Kauf einen Tag zu warten.', a: true,
        audio: [{ s: 'w', t: 'Sie haben schon wieder etwas bestellt, was Sie gar nicht brauchen? Dann sind Sie nicht allein. Laut einer Studie kauft jeder Zweite im Internet regelmäßig Dinge, die er später bereut. Experten raten deshalb, Artikel zunächst einen Tag im Warenkorb zu lassen, bevor man sie wirklich kauft.' }] }
    ])],

    // ------------------------------------------------ Kapitel 7: Kulturwelten
    k7: [g2([
      { s: 'm', n: 'Moderator', t: 'Etwa die Hälfte der rund siebentausend Sprachen der Welt ist vom Aussterben bedroht. Bei uns im Studio ist die Sprachwissenschaftlerin Professorin Anna Hofmann. Frau Hofmann, warum verschwinden so viele Sprachen?' },
      { s: 'w', n: 'Prof. Anna Hofmann', t: 'Die Gründe sind vielfältig. Oft sprechen Eltern mit ihren Kindern nicht mehr die eigene Sprache, weil sie glauben, dass ihre Kinder mit einer großen Sprache wie Englisch oder Spanisch bessere Chancen haben. Dadurch, dass die junge Generation die Sprache nicht mehr lernt, stirbt sie nach und nach aus.' },
      { s: 'm', n: 'Moderator', t: 'Ist das wirklich so schlimm? Man könnte auch sagen: Wenn alle dieselbe Sprache sprechen, verstehen wir uns besser.' },
      { s: 'w', n: 'Prof. Anna Hofmann', t: 'Das höre ich oft. Aber mit jeder Sprache geht auch Wissen verloren, zum Beispiel über Pflanzen, über die Natur und über die Geschichte. Viele dieser Sprachen wurden nie aufgeschrieben. Das Wissen existiert nur in den Köpfen der Sprecher.' },
      { s: 'm', n: 'Moderator', t: 'Was kann man dagegen tun?' },
      { s: 'w', n: 'Prof. Anna Hofmann', t: 'Zunächst einmal dokumentieren wir die Sprachen, indem wir Gespräche mit den letzten Sprechern aufnehmen. Aber das allein reicht nicht. Eine Sprache lebt nur, wenn sie im Alltag gebraucht wird. Deshalb unterstützen wir Projekte, in denen Kinder die Sprache ihrer Großeltern in der Schule lernen.' },
      { s: 'm', n: 'Moderator', t: 'Gibt es Beispiele, wo das funktioniert hat?' },
      { s: 'w', n: 'Prof. Anna Hofmann', t: 'Ja, zum Beispiel das Hebräische, das über Jahrhunderte kaum im Alltag gesprochen wurde und heute Millionen Sprecher hat. Ein anderes Beispiel ist das Maori in Neuseeland. Dort gibt es inzwischen Kindergärten, in denen nur Maori gesprochen wird.' },
      { s: 'm', n: 'Moderator', t: 'Und was kann jeder Einzelne tun?' },
      { s: 'w', n: 'Prof. Anna Hofmann', t: 'Neugierig sein! Wer andere Sprachen respektiert und sich für sie interessiert, trägt schon viel dazu bei.' }
    ], [
      { q: 'Warum sprechen viele Eltern ihre Sprache nicht mehr mit ihren Kindern?', o: ['Sie hoffen auf bessere Chancen für ihre Kinder.', 'Sie haben ihre eigene Sprache vergessen.', 'Die Schulen verbieten es.'], a: 'Sie hoffen auf bessere Chancen für ihre Kinder.' },
      { q: 'Was geht laut Frau Hofmann mit einer Sprache verloren?', o: ['Wissen über Natur und Geschichte.', 'Die Möglichkeit, sich mit anderen zu verständigen.', 'Viele alte Bücher und Dokumente.'], a: 'Wissen über Natur und Geschichte.' },
      { q: 'Wie dokumentieren die Forscher die Sprachen?', o: ['Sie nehmen Gespräche mit den letzten Sprechern auf.', 'Sie schreiben Wörterbücher für Schulen.', 'Sie übersetzen alte Texte ins Englische.'], a: 'Sie nehmen Gespräche mit den letzten Sprechern auf.' },
      { q: 'Wann lebt eine Sprache laut Frau Hofmann weiter?', o: ['Wenn sie im Alltag benutzt wird.', 'Wenn sie gut dokumentiert ist.', 'Wenn viele Wissenschaftler sie lernen.'], a: 'Wenn sie im Alltag benutzt wird.' },
      { q: 'Was erfährt man über das Maori?', o: ['Es gibt Kindergärten, in denen nur Maori gesprochen wird.', 'Es hat heute Millionen Sprecher.', 'Es wurde über Jahrhunderte nicht gesprochen.'], a: 'Es gibt Kindergärten, in denen nur Maori gesprochen wird.' },
      { q: 'Was kann laut Frau Hofmann jeder Einzelne tun?', o: ['Sich für andere Sprachen interessieren.', 'Eine bedrohte Sprache lernen.', 'Geld für Sprachprojekte spenden.'], a: 'Sich für andere Sprachen interessieren.' }
    ])],

    // ------------------------------------------------ Kapitel 8: Das macht(e) Geschichte
    k8: [g3([
      { s: 'm', n: 'Lukas', t: 'Oma, für mein Schulprojekt soll ich jemanden interviewen, der den Mauerfall erlebt hat. Hast du kurz Zeit?' },
      { s: 'w', n: 'Großmutter', t: 'Für dich doch immer, Lukas. Was möchtest du wissen?' },
      { s: 'm', n: 'Lukas', t: 'Wo warst du am neunten November neunzehnhundertneunundachtzig?' },
      { s: 'w', n: 'Großmutter', t: 'Wir wohnten damals in Ostberlin, im Stadtteil Prenzlauer Berg. Ich war schon im Bett, weil ich am nächsten Morgen früh zur Arbeit musste. Dein Großvater hat mich geweckt und gerufen: Die Grenze ist offen! Ich habe ihm zuerst kein Wort geglaubt.' },
      { s: 'm', n: 'Lukas', t: 'Und dann?' },
      { s: 'w', n: 'Großmutter', t: 'Dann haben wir den Fernseher eingeschaltet und die Bilder von der Bornholmer Straße gesehen. Tausende Menschen standen da. Wir haben uns schnell angezogen und sind hingelaufen. Deine Mutter war damals erst drei. Sie haben wir bei der Nachbarin gelassen.' },
      { s: 'm', n: 'Lukas', t: 'Wie war es, als ihr im Westen angekommen seid?' },
      { s: 'w', n: 'Großmutter', t: 'Unglaublich. Wildfremde Menschen haben uns umarmt und uns Sekt angeboten. Ich habe die ganze Zeit geweint, vor Freude, aber auch, weil ich an meine Schwester denken musste. Sie war fünf Jahre vorher in den Westen geflohen, und wir hatten sie seitdem nicht gesehen.' },
      { s: 'm', n: 'Lukas', t: 'Habt ihr sie in dieser Nacht getroffen?' },
      { s: 'w', n: 'Großmutter', t: 'Nein, das hat noch zwei Tage gedauert. Telefone gab es ja kaum. Aber als wir uns dann endlich gesehen haben, das war der schönste Moment meines Lebens.' },
      { s: 'm', n: 'Lukas', t: 'Gibt es etwas, das du heute vermisst?' },
      { s: 'w', n: 'Großmutter', t: 'Die DDR vermisse ich nicht. Aber den Zusammenhalt unter den Nachbarn damals, den vermisse ich manchmal schon.' }
    ], [
      { q: 'Warum war die Großmutter am Abend schon im Bett?', o: ['Sie musste am nächsten Morgen früh arbeiten.', 'Sie war krank.', 'Sie war sehr müde von der Reise.'], a: 'Sie musste am nächsten Morgen früh arbeiten.' },
      { q: 'Wie reagierte sie zuerst auf die Nachricht?', o: ['Sie hat es nicht geglaubt.', 'Sie hat sofort geweint.', 'Sie hat ihre Schwester angerufen.'], a: 'Sie hat es nicht geglaubt.' },
      { q: 'Wo war die Mutter von Lukas in dieser Nacht?', o: ['Bei einer Nachbarin.', 'Bei ihren Großeltern.', 'Mit ihren Eltern an der Grenze.'], a: 'Bei einer Nachbarin.' },
      { q: 'Warum hat die Großmutter im Westen geweint?', o: ['Vor Freude und weil sie an ihre Schwester dachte.', 'Weil sie Angst vor der Zukunft hatte.', 'Weil sie ihre Tochter vermisste.'], a: 'Vor Freude und weil sie an ihre Schwester dachte.' },
      { q: 'Wann hat sie ihre Schwester wiedergesehen?', o: ['Zwei Tage später.', 'Noch in derselben Nacht.', 'Fünf Jahre später.'], a: 'Zwei Tage später.' },
      { q: 'Was vermisst die Großmutter manchmal?', o: ['Den Zusammenhalt unter den Nachbarn.', 'Das Leben in der DDR.', 'Ihre alte Wohnung in Ostberlin.'], a: 'Den Zusammenhalt unter den Nachbarn.' }
    ])],

    // ------------------------------------------------ Kapitel 9: Mit viel Gefühl …
    k9: [g1([
      { q: 'Nur klassische Musik kann Stress reduzieren.', a: false,
        audio: [{ s: 'w', t: 'Musik kann nachweislich unsere Stimmung beeinflussen. Forscher der Universität Wien haben herausgefunden, dass schon zwanzig Minuten Lieblingsmusik am Tag das Stresshormon Cortisol senken können. Dabei kommt es nicht darauf an, ob es sich um klassische Musik oder um Rockmusik handelt. Entscheidend ist, dass einem die Musik gefällt. Musiktherapeuten nutzen diese Erkenntnis inzwischen auch in Krankenhäusern, zum Beispiel vor Operationen.' }] },
      { typ: 'mcq', q: 'Wo wird die Erkenntnis bereits genutzt?', o: ['In Krankenhäusern.', 'In Schulen.', 'In Büros.'], a: 'In Krankenhäusern.' },
      { q: 'Ben hat gemischte Gefühle wegen seiner neuen Stelle.', a: true,
        audio: [{ s: 'm', t: 'Hallo Nora, hier ist Ben. Ich muss dir unbedingt etwas erzählen: Ich habe die Stelle in München bekommen! Einerseits freue ich mich riesig, andererseits bin ich auch ein bisschen traurig, weil ich euch dann alle hier zurücklassen muss. Ich gebe am Samstag eine kleine Abschiedsfeier. Es wäre schön, wenn du kommen könntest. Sag mir bis Donnerstag Bescheid, ja?' }] },
      { typ: 'mcq', q: 'Was soll Nora tun?', o: ['Ben bis Donnerstag Bescheid sagen.', 'Ben in München besuchen.', 'Die Abschiedsfeier organisieren.'], a: 'Ben bis Donnerstag Bescheid sagen.' },
      { q: 'In Raum drei können die Besucher selbst etwas ausprobieren.', a: true,
        audio: [{ s: 'w', t: 'Liebe Besucherinnen und Besucher, in unserer neuen Ausstellung „Farben und Gefühle“ erfahren Sie, warum wir Rot mit Liebe, aber auch mit Wut verbinden und warum Blau beruhigend wirkt. In Raum drei können Sie selbst testen, wie verschiedene Farben Ihre Stimmung verändern. Bitte beachten Sie, dass dieser Raum aus Sicherheitsgründen nur in Gruppen von höchstens zehn Personen betreten werden darf.' }] },
      { typ: 'mcq', q: 'Was gilt für Raum drei?', o: ['Es dürfen höchstens zehn Personen gleichzeitig hinein.', 'Man braucht eine extra Eintrittskarte.', 'Er ist nur für Kinder geöffnet.'], a: 'Es dürfen höchstens zehn Personen gleichzeitig hinein.' }
    ])],

    // ------------------------------------------------ Kapitel 10: Ein Blick in die Zukunft
    k10: [tInterview([
      { s: 'w', n: 'Moderatorin', t: 'In Japan helfen Roboter schon heute in vielen Pflegeheimen. Kommt das bald auch zu uns? Darüber spreche ich mit Doktor Markus Feld, der an einer Hochschule zum Thema Pflegeroboter forscht. Herr Feld, werden Roboter in Zukunft die Pflegekräfte ersetzen?' },
      { s: 'm', n: 'Dr. Markus Feld', t: 'Nein, das glaube ich nicht, und das ist auch nicht das Ziel. Roboter sollen die Pflegekräfte entlasten, nicht ersetzen. Sie können zum Beispiel schwere Patienten heben oder Essen und Medikamente bringen. Dadurch haben die Pflegekräfte mehr Zeit für Gespräche mit den Menschen.' },
      { s: 'w', n: 'Moderatorin', t: 'Wie reagieren die älteren Menschen auf die Roboter?' },
      { s: 'm', n: 'Dr. Markus Feld', t: 'Überraschend positiv. In unserem Pilotprojekt hatten anfangs viele Bewohnerinnen und Bewohner Bedenken. Nach einigen Wochen haben die meisten den Roboter aber akzeptiert. Manche haben ihm sogar einen Namen gegeben.' },
      { s: 'w', n: 'Moderatorin', t: 'Gibt es auch Kritik?' },
      { s: 'm', n: 'Dr. Markus Feld', t: 'Natürlich. Kritiker befürchten, dass Pflegeheime aus Kostengründen Personal abbauen, sobald die Roboter zuverlässig funktionieren. Diese Gefahr sehe ich auch. Deshalb brauchen wir klare Regeln, die von der Politik festgelegt werden müssen.' },
      { s: 'w', n: 'Moderatorin', t: 'Wann werden wir Pflegeroboter in deutschen Heimen sehen?' },
      { s: 'm', n: 'Dr. Markus Feld', t: 'In einzelnen Einrichtungen gibt es sie schon. Bis sie überall eingesetzt werden, wird es aber sicher noch zehn bis fünfzehn Jahre dauern, vor allem, weil die Geräte noch sehr teuer sind.' }
    ], [
      { q: 'Laut Dr. Feld sollen Roboter die Pflegekräfte ersetzen.', a: false },
      { q: 'Roboter können zum Beispiel schwere Patienten heben.', a: true },
      { q: 'Die Bewohner im Pilotprojekt waren von Anfang an begeistert.', a: false },
      { q: 'Einige Bewohner haben dem Roboter einen Namen gegeben.', a: true },
      { q: 'Dr. Feld hält die Sorge, dass Personal abgebaut wird, für unbegründet.', a: false },
      { q: 'Pflegeroboter sind im Moment noch sehr teuer.', a: true }
    ])],

    // ------------------------------------------------ Finaltest B2: Hören Teil 1–4
    final: [
      nr(g1([
        { q: 'Die Stadt will neue Radwege bauen.', a: true,
          audio: [{ s: 'w', t: 'Und nun zu den Nachrichten aus der Region. Die Stadt Hannover will den Radverkehr stärker fördern. Wie die Stadtverwaltung gestern mitteilte, sollen bis Ende nächsten Jahres zwanzig Kilometer neue Radwege entstehen. Außerdem werden an allen großen Bahnhöfen überdachte Fahrradparkhäuser gebaut. Kritik kommt vom Einzelhandelsverband: Die Geschäftsleute befürchten, dass durch die neuen Radwege zahlreiche Parkplätze in der Innenstadt wegfallen.' }] },
        { typ: 'mcq', q: 'Wovor haben die Geschäftsleute Angst?', o: ['Dass Parkplätze in der Innenstadt verschwinden.', 'Dass weniger Kunden mit dem Fahrrad kommen.', 'Dass die Bauarbeiten zu lange dauern.'], a: 'Dass Parkplätze in der Innenstadt verschwinden.' },
        { q: 'Das Vorstellungsgespräch findet wie geplant am Donnerstag statt.', a: false,
          audio: [{ s: 'm', t: 'Hallo Frau Becker, hier ist Stefan Krause von der Personalabteilung. Es geht um Ihr Vorstellungsgespräch am Donnerstag. Leider ist Herr Doktor Lang, der das Gespräch führen sollte, an diesem Tag auf einer Dienstreise. Wir würden den Termin deshalb gern auf Montag um zehn Uhr verschieben. Falls Ihnen das nicht passt, rufen Sie mich bitte bis morgen Mittag zurück. Bringen Sie bitte außerdem Ihre Zeugnisse im Original mit.' }] },
        { typ: 'mcq', q: 'Was soll Frau Becker mitbringen?', o: ['Ihre Zeugnisse im Original.', 'Eine Kopie ihres Lebenslaufs.', 'Ihren Personalausweis.'], a: 'Ihre Zeugnisse im Original.' },
        { q: 'Im Winter braucht der Körper kaum Flüssigkeit.', a: false,
          audio: [{ s: 'w', t: 'In unserer Rubrik Gesundheit geht es heute um das Thema Trinken. Viele Menschen trinken im Winter zu wenig, weil sie weniger Durst haben als im Sommer. Dabei braucht der Körper auch in der kalten Jahreszeit etwa anderthalb Liter Flüssigkeit am Tag. Wer zu wenig trinkt, wird schneller müde und kann sich schlechter konzentrieren. Unser Tipp: Stellen Sie sich morgens eine Flasche Wasser auf den Schreibtisch. So sehen Sie den ganzen Tag, wie viel Sie schon getrunken haben.' }] },
        { typ: 'mcq', q: 'Was empfiehlt die Sprecherin?', o: ['Eine Wasserflasche auf den Schreibtisch zu stellen.', 'Im Winter mehr Tee als Wasser zu trinken.', 'Erst dann zu trinken, wenn man Durst hat.'], a: 'Eine Wasserflasche auf den Schreibtisch zu stellen.' },
        { q: 'Die Sonderausstellung ist verlängert worden.', a: true,
          audio: [{ s: 'm', t: 'Liebe Besucherinnen und Besucher, wir möchten Sie darauf hinweisen, dass unser Museum heute bereits um sechzehn Uhr schließt, da am Abend eine geschlossene Veranstaltung stattfindet. Die Sonderausstellung „Ägypten am Nil“ im zweiten Stock ist bis zum Ende des Monats verlängert worden. Führungen auf Arabisch und Deutsch finden jeden Samstag um vierzehn Uhr statt. Tickets dafür erhalten Sie an der Kasse im Erdgeschoss.' }] },
        { typ: 'mcq', q: 'Wo bekommt man Tickets für die Führungen?', o: ['An der Kasse im Erdgeschoss.', 'Im zweiten Stock.', 'Nur im Internet.'], a: 'An der Kasse im Erdgeschoss.' }
      ]), 1),
      nr(g2([
        { s: 'm', n: 'Moderator', t: 'Wie werden wir in zwanzig Jahren wohnen? Darüber spreche ich mit der Architektin und Stadtplanerin Miriam Scholz. Frau Scholz, wird sich unser Wohnen tatsächlich so stark verändern?' },
        { s: 'w', n: 'Miriam Scholz', t: 'In manchen Bereichen ja. Die Städte wachsen, und Wohnraum wird immer teurer. Deshalb werden die Wohnungen im Durchschnitt kleiner. Dafür werden wir mehr Räume gemeinsam nutzen, zum Beispiel Gästezimmer, Werkstätten oder große Küchen, die sich mehrere Haushalte teilen.' },
        { s: 'm', n: 'Moderator', t: 'Das klingt nach einer Wohngemeinschaft für Erwachsene.' },
        { s: 'w', n: 'Miriam Scholz', t: 'In gewisser Weise schon. Allerdings hat jeder weiterhin seine eigene, abgeschlossene Wohnung. Die gemeinsamen Räume sind ein Angebot, keine Pflicht. In unseren Projekten haben wir festgestellt, dass gerade ältere Menschen davon profitieren, weil sie weniger einsam sind.' },
        { s: 'm', n: 'Moderator', t: 'Welche Rolle spielt die Technik?' },
        { s: 'w', n: 'Miriam Scholz', t: 'Eine größere, als viele denken, aber eine kleinere, als die Werbung verspricht. Sensoren, die automatisch die Heizung regeln, sparen tatsächlich viel Energie. Einen Kühlschrank, der selbstständig Milch bestellt, braucht dagegen kaum jemand.' },
        { s: 'm', n: 'Moderator', t: 'Und wie sieht es auf dem Land aus?' },
        { s: 'w', n: 'Miriam Scholz', t: 'Dort erwarte ich eine Wiederbelebung. Seit viele Menschen im Homeoffice arbeiten können, ziehen junge Familien wieder in Dörfer, die lange Zeit Einwohner verloren hatten. Damit das funktioniert, braucht es aber schnelles Internet und gute Busverbindungen. Hier muss die Politik noch viel tun.' },
        { s: 'm', n: 'Moderator', t: 'Zum Schluss: Wie wohnen Sie selbst?' },
        { s: 'w', n: 'Miriam Scholz', t: 'Ich wohne mit meinem Mann in einem Mehrgenerationenhaus. Wir teilen uns einen Garten mit vier anderen Familien. Für mich ist das die ideale Mischung aus Gemeinschaft und Privatsphäre.' }
      ], [
        { q: 'Was erwartet Frau Scholz für die Wohnungen in den Städten?', o: ['Sie werden im Durchschnitt kleiner.', 'Sie werden deutlich größer.', 'Sie werden billiger.'], a: 'Sie werden im Durchschnitt kleiner.' },
        { q: 'Was sagt sie über die gemeinsamen Räume?', o: ['Man kann sie nutzen, muss es aber nicht.', 'Alle Bewohner müssen sie nutzen.', 'Sie ersetzen die eigene Wohnung.'], a: 'Man kann sie nutzen, muss es aber nicht.' },
        { q: 'Wer profitiert laut Frau Scholz besonders von solchen Wohnprojekten?', o: ['Ältere Menschen.', 'Studierende.', 'Familien mit kleinen Kindern.'], a: 'Ältere Menschen.' },
        { q: 'Wie beurteilt sie die Technik im Haushalt?', o: ['Manche Technik ist nützlich, manche überflüssig.', 'Sie wird das Wohnen völlig verändern.', 'Sie ist für die meisten Menschen zu teuer.'], a: 'Manche Technik ist nützlich, manche überflüssig.' },
        { q: 'Was ist nötig, damit das Leben auf dem Land attraktiv wird?', o: ['Schnelles Internet und gute Busverbindungen.', 'Mehr Arbeitsplätze in Fabriken.', 'Günstigere Grundstücke.'], a: 'Schnelles Internet und gute Busverbindungen.' }
      ]), 2),
      nr(g3wer([
        { s: 'w', n: 'Moderatorin', t: 'Willkommen zu unserer Gesprächsrunde. In einigen Ländern dürfen Jugendliche unter sechzehn Jahren keine sozialen Netzwerke mehr nutzen. Sollten wir das auch in Deutschland einführen? Bei mir sind der Lehrer Jonas Brandt und die Medienpädagogin Derya Yilmaz. Herr Brandt, wie erleben Sie das an Ihrer Schule?' },
        { s: 'm', n: 'Jonas Brandt', t: 'Ich sehe täglich, wie sehr die Schüler von ihren Handys abgelenkt sind. Viele schlafen zu wenig, weil sie bis spät in die Nacht Videos schauen. Ein Verbot wäre aus meiner Sicht ein klares Signal, dass wir die Gesundheit der Kinder ernst nehmen.' },
        { s: 'w2', n: 'Derya Yilmaz', t: 'Ich verstehe die Sorge, halte ein Verbot aber für wenig realistisch. Jugendliche finden immer einen Weg, solche Regeln zu umgehen. Viel wichtiger ist es, ihnen beizubringen, kritisch mit Inhalten umzugehen.' },
        { s: 'w', n: 'Moderatorin', t: 'Aber wer soll das leisten? Die Eltern sind doch oft selbst überfordert.' },
        { s: 'w2', n: 'Derya Yilmaz', t: 'Genau deshalb brauchen wir Medienbildung als festes Schulfach. Dort könnten die Kinder lernen, Falschmeldungen zu erkennen und ihre Daten zu schützen.' },
        { s: 'm', n: 'Jonas Brandt', t: 'Ein neues Fach klingt gut, aber unsere Lehrpläne sind schon jetzt überfüllt. Außerdem sind die Plattformen so gestaltet, dass man möglichst lange online bleibt. Dagegen kommen auch gut informierte Jugendliche kaum an.' },
        { s: 'w', n: 'Moderatorin', t: 'Es gibt ja auch positive Seiten. Viele Jugendliche finden in sozialen Netzwerken Freunde mit ähnlichen Interessen.' },
        { s: 'w2', n: 'Derya Yilmaz', t: 'Das ist ein wichtiger Punkt. Gerade Jugendliche, die sich in ihrer Umgebung als Außenseiter fühlen, finden online oft Unterstützung.' },
        { s: 'm', n: 'Jonas Brandt', t: 'Das bestreite ich nicht. Trotzdem sollten wir die Plattformen stärker in die Pflicht nehmen. Sie müssten zum Beispiel das Alter ihrer Nutzer zuverlässig überprüfen.' }
      ], ['Moderatorin', 'Herr Brandt', 'Frau Yilmaz'], [
        { q: 'In manchen Ländern gibt es schon ein Verbot für Jugendliche.', a: 'Moderatorin' },
        { q: 'Viele Schüler schlafen wegen ihrer Handys zu wenig.', a: 'Herr Brandt' },
        { q: 'Jugendliche würden ein Verbot einfach umgehen.', a: 'Frau Yilmaz' },
        { q: 'Eltern sind beim Thema Medien oft überfordert.', a: 'Moderatorin' },
        { q: 'Medienbildung sollte ein Schulfach werden.', a: 'Frau Yilmaz' },
        { q: 'In den Lehrplänen ist kein Platz für ein weiteres Fach.', a: 'Herr Brandt' },
        { q: 'Außenseiter finden im Internet oft Unterstützung.', a: 'Frau Yilmaz' },
        { q: 'Die Plattformen sollten das Alter der Nutzer kontrollieren.', a: 'Herr Brandt' }
      ]), 3),
      nr(g4([
        { s: 'm', n: 'Dr. Weiß', t: 'Meine Damen und Herren, ich freue mich, dass Sie heute so zahlreich erschienen sind. In meinem Vortrag möchte ich Ihnen zeigen, warum es sich lohnt, mehrere Sprachen zu sprechen, und zwar nicht nur aus beruflichen Gründen.' },
        { s: 'm', n: 'Dr. Weiß', t: 'Lange Zeit glaubte man, dass Kinder, die zweisprachig aufwachsen, durcheinanderkämen und in der Schule schlechter abschnitten. Heute wissen wir, dass das nicht stimmt. Zwar beginnen zweisprachige Kinder manchmal etwas später zu sprechen, aber diesen Rückstand holen sie schnell auf.' },
        { s: 'm', n: 'Dr. Weiß', t: 'Interessant ist vor allem, was im Gehirn passiert. Wer mehrere Sprachen spricht, muss ständig entscheiden, welche Sprache gerade gebraucht wird, und die andere unterdrücken. Dieses tägliche Training verbessert offenbar die Fähigkeit, sich zu konzentrieren und zwischen verschiedenen Aufgaben zu wechseln.' },
        { s: 'm', n: 'Dr. Weiß', t: 'Mehrere Studien deuten außerdem darauf hin, dass bei mehrsprachigen Menschen die ersten Anzeichen einer Demenz im Durchschnitt einige Jahre später auftreten. Ich möchte allerdings betonen, dass die Ergebnisse noch nicht eindeutig sind und weitere Forschung nötig ist.' },
        { s: 'm', n: 'Dr. Weiß', t: 'Und nun die gute Nachricht für alle Erwachsenen hier im Saal: Es ist nie zu spät. Auch wer erst mit sechzig Jahren eine neue Sprache lernt, trainiert sein Gehirn. Entscheidend ist nicht die Perfektion, sondern die regelmäßige Anwendung. Im zweiten Teil meines Vortrags stelle ich Ihnen einige Methoden vor, mit denen das besonders gut gelingt.' }
      ], [
        { q: 'Was glaubte man früher über zweisprachige Kinder?', o: ['Sie würden durcheinanderkommen und in der Schule schlechter sein.', 'Sie würden besonders früh sprechen lernen.', 'Sie würden später gute Übersetzer werden.'], a: 'Sie würden durcheinanderkommen und in der Schule schlechter sein.' },
        { q: 'Was sagt der Redner über die Sprachentwicklung zweisprachiger Kinder?', o: ['Ein anfänglicher Rückstand wird schnell aufgeholt.', 'Sie sprechen immer früher als andere Kinder.', 'Sie haben dauerhaft Probleme in der Schule.'], a: 'Ein anfänglicher Rückstand wird schnell aufgeholt.' },
        { q: 'Was trainieren mehrsprachige Menschen laut dem Vortrag jeden Tag?', o: ['Die Konzentration und den Wechsel zwischen Aufgaben.', 'Das Gedächtnis für Vokabeln.', 'Ihre Aussprache.'], a: 'Die Konzentration und den Wechsel zwischen Aufgaben.' },
        { q: 'Was sagt der Redner über Mehrsprachigkeit und Demenz?', o: ['Die Ergebnisse der Studien sind noch nicht eindeutig.', 'Mehrsprachige Menschen erkranken nie an Demenz.', 'Es gibt sicher keinen Zusammenhang.'], a: 'Die Ergebnisse der Studien sind noch nicht eindeutig.' },
        { q: 'Was ist laut dem Redner beim Sprachenlernen im Alter entscheidend?', o: ['Die Sprache regelmäßig anzuwenden.', 'Die Sprache perfekt zu beherrschen.', 'Vor dem sechzigsten Lebensjahr anzufangen.'], a: 'Die Sprache regelmäßig anzuwenden.' }
      ]), 4)
    ]
  };
})();
