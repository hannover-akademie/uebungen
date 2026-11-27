// Netzwerk neu B1 – Hören (wie Goethe-Zertifikat B1 und telc Deutsch B1)
// Wird von assets/app.js vor dem Schreiben-Teil eingefügt. audio = Hörtext (Sprachausgabe), plays = wie oft (1 oder 2).
// Goethe: Teil 1 kurze Texte (je 2 Aufgaben, 2×) · Teil 2 Vortrag/Führung (a/b/c, 1×) · Teil 3 Gespräch (richtig/falsch, 1×) · Teil 4 Diskussion (Wer sagt was?, 2×)
// telc: Teil 1 Nachrichten (Globalverstehen, 1×) · Teil 2 Interview (Detailverstehen, 2×) · Teil 3 Ansagen (selektiv, 2×)
(function () {
  var RATE = 0.95;
  function g1(items, teil) {
    return { teil: teil || 'Hören', titel: 'Hören Teil 1 (wie Goethe B1): Kurze Texte', typ: 'tf', plays: 2, rate: RATE,
      anweisung: 'Sie hören kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben: Richtig oder falsch? und a, b oder c. Lesen Sie zuerst die Aufgaben.',
      anweisungAr: 'ستسمع نصوصًا قصيرة، وتسمع كل نص مرتين. لكل نص سؤالان: صحيح أم خطأ، ثم اختيار من متعدد. اقرأ الأسئلة أولًا.',
      items: items };
  }
  function g2(audio, items, teil) {
    return { teil: teil || 'Hören', titel: 'Hören Teil 2 (wie Goethe B1): Ein Vortrag', typ: 'mcq', plays: 1, rate: RATE, audio: audio, audioTitel: 'Vortrag',
      anweisung: 'Sie hören einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie zuerst die Aufgaben.',
      anweisungAr: 'ستسمع نصًّا مرة واحدة فقط، وعليه خمسة أسئلة. اقرأ الأسئلة أولًا، ثم اختر الإجابة الصحيحة لكل سؤال.',
      items: items };
  }
  function g3(audio, items, teil) {
    return { teil: teil || 'Hören', titel: 'Hören Teil 3 (wie Goethe B1): Ein Gespräch', typ: 'tf', plays: 1, rate: RATE, audio: audio, audioTitel: 'Gespräch',
      anweisung: 'Sie hören ein Gespräch. Sie hören das Gespräch einmal. Lesen Sie zuerst die Aussagen. Sind sie richtig oder falsch?',
      anweisungAr: 'ستسمع محادثة مرة واحدة فقط. اقرأ الجمل أولًا، ثم حدّد: هل كل جملة صحيحة أم خاطئة؟',
      items: items };
  }
  function g4(audio, o, items, teil) {
    return { teil: teil || 'Hören', titel: 'Hören Teil 4 (wie Goethe B1): Eine Diskussion', typ: 'select', plays: 2, rate: RATE, audio: audio, audioTitel: 'Diskussion', o: o,
      anweisung: 'Sie hören eine Diskussion. Sie hören die Diskussion zweimal. Lesen Sie zuerst die Aussagen. Wer sagt was? Ordnen Sie zu.',
      anweisungAr: 'ستسمع نقاشًا إذاعيًّا مرتين. اقرأ الجمل أولًا، ثم حدّد: مَن قال كل جملة؟',
      items: items };
  }
  function t1(items, teil) {
    return { teil: teil || 'Hören', titel: 'Hören Teil 1 (wie telc B1): Nachrichten', typ: 'tf', plays: 1, rate: RATE,
      anweisung: 'Sie hören fünf kurze Nachrichten aus dem Radio. Sie hören jede Nachricht einmal. Ist die Aussage richtig oder falsch?',
      anweisungAr: 'ستسمع خمسة أخبار قصيرة من الإذاعة، وتسمع كل خبر مرة واحدة فقط. هل العبارة تلخّص الخبر بشكل صحيح أم لا؟',
      items: items };
  }
  function t2(audio, items, teil) {
    return { teil: teil || 'Hören', titel: 'Hören Teil 2 (wie telc B1): Ein Interview', typ: 'tf', plays: 2, rate: RATE, audio: audio, audioTitel: 'Interview',
      anweisung: 'Sie hören ein Interview aus dem Radio. Sie hören das Interview zweimal. Lesen Sie zuerst die Aussagen. Sind sie richtig oder falsch?',
      anweisungAr: 'ستسمع مقابلة إذاعية مرتين. اقرأ الجمل أولًا، ثم حدّد: هل كل جملة صحيحة أم خاطئة؟',
      items: items };
  }
  function t3(items, teil) {
    return { teil: teil || 'Hören', titel: 'Hören Teil 3 (wie telc B1): Ansagen und Nachrichten am Telefon', typ: 'tf', plays: 2, rate: RATE,
      anweisung: 'Sie hören fünf kurze Texte: Durchsagen und Nachrichten am Telefon. Sie hören jeden Text zweimal. Ist die Aussage richtig oder falsch?',
      anweisungAr: 'ستسمع خمسة نصوص قصيرة: إعلانات ورسائل هاتفية، وتسمع كل نص مرتين. هل العبارة صحيحة أم خاطئة؟',
      items: items };
  }

  window.HOEREN = {
    // ------------------------------------------------ Kapitel 1: Gute Reise!
    k1: [g1([
      { q: 'Herr Lehmanns Flug startet früher als geplant.', a: true,
        audio: [{ s: 'w', t: 'Guten Tag, Herr Lehmann, hier ist Sandra Vogel vom Reisebüro Sonnenschein. Ich rufe an, weil es eine Änderung bei Ihrer Reise nach Teneriffa gibt. Ihr Flug am Samstag startet nicht um neun Uhr, sondern schon um sieben Uhr dreißig. Bitte seien Sie zwei Stunden vor dem Abflug am Flughafen. Die Reiseunterlagen schicke ich Ihnen heute noch per E-Mail. Wenn Sie Fragen haben, rufen Sie mich bitte zurück.' }] },
      { typ: 'mcq', q: 'Was bekommt Herr Lehmann heute?', o: ['Die Reiseunterlagen per E-Mail.', 'Einen Anruf vom Flughafen.', 'Neue Tickets per Post.'], a: 'Die Reiseunterlagen per E-Mail.' },
      { q: 'Reisende nach Leipzig erreichen ihren Anschlusszug.', a: false,
        audio: [{ s: 'm', t: 'Sehr geehrte Fahrgäste, wegen einer Störung an der Strecke hat unser Zug zurzeit etwa fünfundzwanzig Minuten Verspätung. Reisende nach Leipzig erreichen ihren Anschluss deshalb leider nicht. Bitte nehmen Sie den Regionalexpress um vierzehn Uhr zehn von Gleis drei. Im Bordrestaurant bekommen Sie heute ein kostenloses Getränk.' }] },
      { typ: 'mcq', q: 'Was bekommen die Fahrgäste im Bordrestaurant?', o: ['Ein Getränk, das nichts kostet.', 'Ein kostenloses Essen.', 'Einen Gutschein für die nächste Fahrt.'], a: 'Ein Getränk, das nichts kostet.' },
      { q: 'An der Ostsee ist es im Moment noch warm.', a: true,
        audio: [{ s: 'w', t: 'Und hier unser Reisetipp für das Wochenende: Obwohl der Herbst schon begonnen hat, ist es an der Ostsee noch erstaunlich warm. Viele Hotels bieten jetzt günstige Angebote an. Es lohnt sich also, früh zu buchen. Wer nicht mit dem Auto fahren möchte, kann das neue Wochenendticket der Bahn nutzen. Es kostet neunundvierzig Euro und gilt für zwei Personen.' }] },
      { typ: 'mcq', q: 'Was ist richtig über das Wochenendticket?', o: ['Zwei Personen können damit fahren.', 'Es gilt nur für eine Person.', 'Es kostet 19 Euro.'], a: 'Zwei Personen können damit fahren.' }
    ])],

    // ------------------------------------------------ Kapitel 2: Das ist ja praktisch!
    k2: [t3([
      { q: 'Wer ein Gerät reparieren lassen möchte, muss die Zwei drücken.', a: false,
        audio: [{ s: 'w', t: 'Willkommen beim Kundenservice von Techno Plus. Wenn Sie ein Gerät reparieren lassen möchten, drücken Sie bitte die Eins. Für Fragen zu Ihrer Rechnung drücken Sie die Zwei. Wegen der vielen Anrufe müssen Sie zurzeit leider länger warten.' }] },
      { q: 'Frau Krämer muss für die Reparatur nichts bezahlen.', a: true,
        audio: [{ s: 'm', t: 'Hallo Frau Krämer, hier ist die Werkstatt Elektro Brandt. Ihre Waschmaschine ist repariert. Die Reparatur ist kostenlos, weil Sie noch Garantie haben. Sie können die Maschine ab Donnerstag bei uns abholen oder sie liefern lassen.' }] },
      { q: 'Wer einen Staubsauger kauft, bekommt ein Geschenk.', a: true,
        audio: [{ s: 'w', t: 'Nur diese Woche bei Elektro Max: alle Kaffeemaschinen zum halben Preis! Und beim Kauf eines Staubsaugers bekommen Sie eine praktische Tasche gratis dazu.' }] },
      { q: 'Jens möchte, dass Tom sein Handy repariert.', a: false,
        audio: [{ s: 'm', t: 'Hallo Tom, hier ist Jens. Ich habe mir gestern ein neues Handy gekauft, aber der Akku hält nur fünf Stunden. Ich bringe es morgen ins Geschäft zurück. Kannst du mitkommen? Du kennst dich ja mit Technik aus.' }] },
      { q: 'Der Haupteingang ist wegen Bauarbeiten geschlossen.', a: true,
        audio: [{ s: 'w', t: 'Sehr geehrte Kundinnen und Kunden, wegen Bauarbeiten ist unser Haupteingang bis Ende des Monats geschlossen. Bitte benutzen Sie den Eingang in der Parkstraße.' }] }
    ])],

    // ------------------------------------------------ Kapitel 3: Veränderungen
    k3: [g2([
      { s: 'w', n: 'Stadtführerin', t: 'Herzlich willkommen zu unserer Führung! Mein Name ist Petra Kowalski, und ich zeige Ihnen heute, wie sich unser Stadtteil in den letzten fünfzig Jahren verändert hat. Wir stehen hier vor dem alten Bergwerk. Bis neunzehnhundertachtzig arbeiteten hier über dreitausend Menschen. Mein Großvater war einer von ihnen. Nach der Schließung verloren viele Familien ihre Arbeit, und viele junge Leute zogen weg. Lange Zeit standen die Gebäude leer. Erst vor zehn Jahren hatte die Stadt die Idee, hier ein Kulturzentrum zu eröffnen. Heute gibt es in der alten Halle ein Theater, ein Café und Räume für Kurse. Während der Führung gehen wir zuerst ins Museum. Dort sehen Sie Fotos aus der Zeit des Bergbaus. Danach machen wir eine Pause im Café. Bitte beachten Sie: Im Museum darf man nicht fotografieren. Die Führung dauert ungefähr anderthalb Stunden und endet am Bahnhof.' }
    ], [
      { q: 'Was erfährt man über das Bergwerk?', o: ['Früher hatten dort über 3000 Menschen Arbeit.', 'Dort wird heute noch gearbeitet.', 'Der Großvater der Stadtführerin hat es gegründet.'], a: 'Früher hatten dort über 3000 Menschen Arbeit.' },
      { q: 'Was passierte nach der Schließung?', o: ['Viele junge Menschen verließen den Stadtteil.', 'Die Stadt eröffnete sofort ein Kulturzentrum.', 'Neue Firmen kamen in den Stadtteil.'], a: 'Viele junge Menschen verließen den Stadtteil.' },
      { q: 'Was gibt es heute in der alten Halle?', o: ['Ein Theater, ein Café und Kursräume.', 'Ein Hotel und ein Restaurant.', 'Wohnungen für Familien.'], a: 'Ein Theater, ein Café und Kursräume.' },
      { q: 'Was ist im Museum verboten?', o: ['Fotografieren.', 'Essen und Trinken.', 'Laut sprechen.'], a: 'Fotografieren.' },
      { q: 'Wo endet die Führung?', o: ['Am Bahnhof.', 'Im Café.', 'Vor dem Bergwerk.'], a: 'Am Bahnhof.' }
    ])],

    // ------------------------------------------------ Kapitel 4: Arbeitswelt
    k4: [g3([
      { s: 'w', n: 'Julia', t: 'Hallo Kemal! Lange nicht gesehen. Wie geht es dir? Arbeitest du immer noch bei der Versicherung?' },
      { s: 'm', n: 'Kemal', t: 'Hallo Julia! Nein, ich habe vor zwei Monaten gekündigt. Ich habe mich dort schon lange nicht mehr wohlgefühlt.' },
      { s: 'w', n: 'Julia', t: 'Echt? Was war denn das Problem?' },
      { s: 'm', n: 'Kemal', t: 'Eigentlich war die Arbeit interessant. Aber ich musste jeden Tag über eine Stunde zur Arbeit fahren, und mit meinem Chef habe ich mich oft gestritten.' },
      { s: 'w', n: 'Julia', t: 'Und was machst du jetzt?' },
      { s: 'm', n: 'Kemal', t: 'Ich arbeite jetzt bei einer kleinen IT-Firma hier in der Stadt. Ich verdiene zwar etwas weniger, aber ich kann mit dem Fahrrad zur Arbeit fahren. Und zweimal pro Woche arbeite ich im Homeoffice.' },
      { s: 'w', n: 'Julia', t: 'Das klingt super. Ich würde auch gern von zu Hause arbeiten, aber im Krankenhaus geht das natürlich nicht.' },
      { s: 'm', n: 'Kemal', t: 'Bist du denn zufrieden?' },
      { s: 'w', n: 'Julia', t: 'Mit der Arbeit schon. Ich kümmere mich gern um die Patienten. Aber die Nachtschichten sind anstrengend. Ich überlege, ob ich eine Weiterbildung mache. Dann könnte ich auf einer Station mit festen Arbeitszeiten arbeiten.' },
      { s: 'm', n: 'Kemal', t: 'An deiner Stelle würde ich mit deiner Chefin darüber sprechen.' },
      { s: 'w', n: 'Julia', t: 'Ja, das habe ich auch vor. Nächste Woche habe ich einen Termin bei ihr.' }
    ], [
      { q: 'Kemal arbeitet nicht mehr bei der Versicherung.', a: true },
      { q: 'Kemal fand die Arbeit bei der Versicherung langweilig.', a: false },
      { q: 'In der neuen Firma verdient Kemal mehr Geld.', a: false },
      { q: 'Julia arbeitet in einem Krankenhaus.', a: true },
      { q: 'Julia findet die Nachtschichten anstrengend.', a: true },
      { q: 'Julia hat schon mit ihrer Chefin über eine Weiterbildung gesprochen.', a: false }
    ])],

    // ------------------------------------------------ Kapitel 5: Umweltfreundlich?
    k5: [t1([
      { q: 'Hamburg möchte mehr Radwege bauen.', a: true,
        audio: [{ s: 'm', t: 'Hamburg. Die Stadt will in den nächsten zehn Jahren hundert neue Radwege bauen, damit mehr Menschen ihr Auto stehen lassen. Die Kosten liegen bei rund dreihundert Millionen Euro.' }] },
      { q: 'Die Bauern erwarten in diesem Jahr eine bessere Ernte.', a: false,
        audio: [{ s: 'w', t: 'Der Sommer war in diesem Jahr der heißeste seit Beginn der Messungen. Besonders im Juli gab es in vielen Regionen kaum Regen. Die Bauern rechnen deshalb mit einer schlechteren Ernte.' }] },
      { q: 'In der Münchner Innenstadt dürfen ab jetzt gar keine Autos mehr fahren.', a: false,
        audio: [{ s: 'm', t: 'München. Seit Montag dürfen in der Innenstadt keine alten Dieselautos mehr fahren. Wer sich nicht an das Verbot hält, muss hundert Euro bezahlen.' }] },
      { q: 'Viele Menschen kaufen regionale Produkte, weil sie die Umwelt schützen wollen.', a: true,
        audio: [{ s: 'w', t: 'Eine neue Umfrage zeigt: Immer mehr Menschen kaufen Obst und Gemüse aus der Region, um die Umwelt zu schützen. Fast sechzig Prozent der Befragten achten beim Einkaufen darauf, woher die Produkte kommen.' }] },
      { q: 'Am Samstag hat die Stadtreinigung in Berlin gestreikt.', a: false,
        audio: [{ s: 'm', t: 'Berlin. Am Samstag haben Freiwillige in vielen Stadtteilen Müll gesammelt. Insgesamt sammelten mehr als zweitausend Menschen über zehn Tonnen Abfall.' }] }
    ])],

    // ------------------------------------------------ Kapitel 6: Blick nach vorn
    k6: [g4([
      { s: 'w', n: 'Moderatorin', t: 'Willkommen zu unserer Sendung „Forum am Abend“. Heute geht es um die Frage: Wie werden wir in zwanzig Jahren arbeiten? Bei mir im Studio sind Herr Bauer, Berater für Unternehmen, und Frau Lindner, die Informatik studiert. Herr Bauer, was meinen Sie?' },
      { s: 'm', n: 'Herr Bauer', t: 'Ich bin sicher, dass Computer und Roboter viele Aufgaben übernehmen werden. Das ist aber kein Grund zur Panik. Es werden auch viele neue Berufe entstehen, die wir heute noch gar nicht kennen.' },
      { s: 'w2', n: 'Frau Lindner', t: 'Da bin ich nicht so optimistisch. Ich glaube, dass viele Menschen ihre Arbeit verlieren werden, vor allem in Büros und in Fabriken. Die Politik muss sich jetzt darum kümmern.' },
      { s: 'w', n: 'Moderatorin', t: 'Frau Lindner, Sie studieren ja Informatik. Haben Sie selbst keine Angst um Ihre Zukunft?' },
      { s: 'w2', n: 'Frau Lindner', t: 'Nein, für mich persönlich nicht. Informatiker wird man auch in Zukunft brauchen. Aber ich denke an Menschen, die keine gute Ausbildung haben.' },
      { s: 'm', n: 'Herr Bauer', t: 'Genau deshalb ist Weiterbildung so wichtig. Man wird sein ganzes Leben lang lernen müssen. Einen Beruf für das ganze Leben wird es nicht mehr geben.' },
      { s: 'w', n: 'Moderatorin', t: 'Ich persönlich finde den Gedanken ein bisschen anstrengend, dass man nie aufhören darf zu lernen.' },
      { s: 'w2', n: 'Frau Lindner', t: 'Ich finde es eher spannend. Aber die Firmen sollten die Kurse bezahlen, nicht die Mitarbeiter.' },
      { s: 'm', n: 'Herr Bauer', t: 'Das sehe ich anders. Jeder ist selbst für seine Weiterbildung verantwortlich.' }
    ], ['die Moderatorin', 'Herr Bauer', 'Frau Lindner'], [
      { q: 'Durch die Technik werden neue Berufe entstehen.', a: 'Herr Bauer' },
      { q: 'Viele Menschen werden ihre Stelle verlieren.', a: 'Frau Lindner' },
      { q: 'Für Informatiker wird es auch in Zukunft Arbeit geben.', a: 'Frau Lindner' },
      { q: 'Niemand wird sein ganzes Leben im selben Beruf arbeiten.', a: 'Herr Bauer' },
      { q: 'Es ist anstrengend, wenn man immer weiterlernen muss.', a: 'die Moderatorin' },
      { q: 'Die Arbeitgeber sollten die Weiterbildung bezahlen.', a: 'Frau Lindner' },
      { q: 'Jeder muss sich selbst um seine Weiterbildung kümmern.', a: 'Herr Bauer' }
    ])],

    // ------------------------------------------------ Kapitel 7: Zwischenmenschliches
    k7: [g3([
      { s: 'w', n: 'Mona', t: 'Felix, du siehst müde aus. Ist alles in Ordnung?' },
      { s: 'm', n: 'Felix', t: 'Na ja, nicht wirklich. Ich habe mich gestern mit Daniel gestritten.' },
      { s: 'w', n: 'Mona', t: 'Mit Daniel? Ihr seid doch seit der Schulzeit befreundet!' },
      { s: 'm', n: 'Felix', t: 'Ja, seit fünfzehn Jahren. Er hatte mir versprochen, dass er mir beim Umzug hilft. Aber am Samstag ist er einfach nicht gekommen. Erst nachdem ich ihn dreimal angerufen hatte, hat er sich gemeldet.' },
      { s: 'w', n: 'Mona', t: 'Und was hat er gesagt?' },
      { s: 'm', n: 'Felix', t: 'Er hatte den Termin vergessen, weil er bis spät in der Nacht gearbeitet hatte. Ich war so wütend, dass ich ihn angeschrien habe.' },
      { s: 'w', n: 'Mona', t: 'Hm. Und seitdem habt ihr nicht mehr miteinander gesprochen?' },
      { s: 'm', n: 'Felix', t: 'Nein. Und jetzt tut es mir leid. Eigentlich ist er ein sehr zuverlässiger Freund.' },
      { s: 'w', n: 'Mona', t: 'Bevor du noch länger wartest, solltest du ihn anrufen. Oder noch besser: Lade ihn zum Essen ein!' },
      { s: 'm', n: 'Felix', t: 'Gute Idee. Während wir essen, können wir in Ruhe reden.' }
    ], [
      { q: 'Felix und Daniel kennen sich seit der Schulzeit.', a: true },
      { q: 'Daniel hat Felix beim Umzug geholfen.', a: false },
      { q: 'Daniel hat sich sofort nach dem ersten Anruf gemeldet.', a: false },
      { q: 'Daniel hatte den Termin vergessen.', a: true },
      { q: 'Felix findet Daniel normalerweise zuverlässig.', a: true },
      { q: 'Mona rät Felix, auf einen Anruf von Daniel zu warten.', a: false }
    ])],

    // ------------------------------------------------ Kapitel 8: Rund um Körper und Geist
    k8: [g1([
      { q: 'Herr Peters muss noch einmal zur Untersuchung kommen.', a: false,
        audio: [{ s: 'w', t: 'Guten Tag, Herr Peters, hier ist die Praxis Doktor Lehmann. Ihre Blutwerte sind da, und es ist alles in Ordnung. Sie brauchen also nicht noch einmal in die Praxis zu kommen. Ihr Rezept für die Physiotherapie liegt bei uns an der Anmeldung. Sie können es ab morgen abholen.' }] },
      { typ: 'mcq', q: 'Was kann Herr Peters ab morgen abholen?', o: ['Ein Rezept für Physiotherapie.', 'Seine Blutwerte.', 'Ein Medikament.'], a: 'Ein Rezept für Physiotherapie.' },
      { q: 'Man sollte bei der Arbeit regelmäßig aufstehen.', a: true,
        audio: [{ s: 'm', t: 'Und jetzt unser Gesundheitstipp: Viele Menschen sitzen bei der Arbeit zu lange. Experten empfehlen deshalb, jede Stunde kurz aufzustehen und sich zu bewegen. Sowohl kurze Spaziergänge als auch einfache Übungen am Schreibtisch helfen gegen Rückenschmerzen.' }] },
      { typ: 'mcq', q: 'Was hilft laut dem Tipp gegen Rückenschmerzen?', o: ['Spaziergänge und Übungen am Arbeitsplatz.', 'Ein neuer Bürostuhl.', 'Mehr Schlaf.'], a: 'Spaziergänge und Übungen am Arbeitsplatz.' },
      { q: 'Für den Kurs muss man extra bezahlen.', a: false,
        audio: [{ s: 'w', t: 'Liebe Gäste der Therme, heute Abend findet um neunzehn Uhr ein Entspannungskurs mit Yoga und Meditation statt. Der Kurs ist für Anfänger geeignet und kostet nichts extra. Bitte melden Sie sich bis achtzehn Uhr an der Kasse an, denn es gibt nur zwanzig Plätze.' }] },
      { typ: 'mcq', q: 'Was müssen Interessierte tun?', o: ['Sich bis 18 Uhr an der Kasse anmelden.', 'Um 18 Uhr zum Kurs kommen.', 'Eine Yogamatte mitbringen.'], a: 'Sich bis 18 Uhr an der Kasse anmelden.' }
    ])],

    // ------------------------------------------------ Kapitel 9: Kunststücke
    k9: [g2([
      { s: 'm', n: 'Organisator', t: 'Liebe Gäste, herzlich willkommen zur Eröffnung unseres Festivals „Kunst auf der Straße“! Ich bin Martin Reuter und organisiere das Festival seit seinem Beginn vor acht Jahren. In diesem Jahr sind mehr als sechzig Künstlerinnen und Künstler aus zwölf Ländern dabei. Neu ist, dass nicht nur Profis, sondern auch Schulklassen ihre Bilder zeigen. Die Bilder hängen in der Fußgängerzone, die Skulpturen stehen im Stadtpark. Am Samstag um fünfzehn Uhr können Kinder selbst malen. Farben und Papier bekommen sie bei uns kostenlos. Am Sonntagabend gibt es ein Konzert auf dem Marktplatz. Wenn es regnet, findet es in der Stadthalle statt. Übrigens können Sie viele Kunstwerke auch kaufen. Ein Teil des Geldes geht an ein Kinderhaus in unserer Stadt.' }
    ], [
      { q: 'Seit wann gibt es das Festival?', o: ['Seit acht Jahren.', 'Seit zwölf Jahren.', 'Es findet zum ersten Mal statt.'], a: 'Seit acht Jahren.' },
      { q: 'Was ist in diesem Jahr neu?', o: ['Auch Schulklassen zeigen ihre Bilder.', 'Es kommen Künstler aus zwölf Ländern.', 'Die Skulpturen stehen im Stadtpark.'], a: 'Auch Schulklassen zeigen ihre Bilder.' },
      { q: 'Was können Kinder am Samstag machen?', o: ['Kostenlos malen.', 'Bilder kaufen.', 'Ein Konzert besuchen.'], a: 'Kostenlos malen.' },
      { q: 'Wo findet das Konzert statt, wenn es regnet?', o: ['In der Stadthalle.', 'Auf dem Marktplatz.', 'Im Stadtpark.'], a: 'In der Stadthalle.' },
      { q: 'Was passiert mit einem Teil des Geldes?', o: ['Es geht an ein Kinderhaus.', 'Die Schulen bekommen es.', 'Es bezahlt das nächste Festival.'], a: 'Es geht an ein Kinderhaus.' }
    ])],

    // ------------------------------------------------ Kapitel 10: Miteinander
    k10: [g4([
      { s: 'm', n: 'Moderator', t: 'Guten Abend und willkommen zu „Stadtgespräch“. Heute diskutieren wir die Frage, ob ein soziales Jahr nach der Schule für alle jungen Menschen Pflicht werden sollte. Bei mir sind Frau Schäfer, die ein Seniorenheim leitet, und Herr Aydin, der gerade sein Abitur gemacht hat. Frau Schäfer, wie sehen Sie das?' },
      { s: 'w', n: 'Frau Schäfer', t: 'Ich bin dafür. In unserem Heim arbeiten jedes Jahr viele junge Freiwillige, und das hilft uns sehr. Die jungen Leute lernen dabei, Verantwortung zu übernehmen.' },
      { s: 'm2', n: 'Herr Aydin', t: 'Das stimmt vielleicht, aber eine Pflicht finde ich falsch. Ein Ehrenamt muss freiwillig sein. Wer gezwungen wird, hat keine Lust und macht die Arbeit nicht gut.' },
      { s: 'm', n: 'Moderator', t: 'Herr Aydin, haben Sie selbst schon ehrenamtlich gearbeitet?' },
      { s: 'm2', n: 'Herr Aydin', t: 'Ja, ich trainiere seit drei Jahren eine Basketballmannschaft für Kinder. Das macht mir viel Spaß, weil ich es selbst ausgesucht habe.' },
      { s: 'w', n: 'Frau Schäfer', t: 'Aber viele Jugendliche wissen gar nicht, welche Möglichkeiten es gibt. Durch ein Pflichtjahr würden sie Berufe kennenlernen, an die sie vorher nie gedacht haben.' },
      { s: 'm', n: 'Moderator', t: 'Ein wichtiger Punkt ist auch das Geld. Herr Aydin, was meinen Sie?' },
      { s: 'm2', n: 'Herr Aydin', t: 'Wenn es eine Pflicht gibt, muss die Arbeit auch gut bezahlt werden. Sonst ist das unfair.' },
      { s: 'w', n: 'Frau Schäfer', t: 'Ein Gehalt wie im Beruf ist nicht möglich. Aber ein Taschengeld und eine kostenlose Fahrkarte sollten die jungen Leute bekommen.' }
    ], ['der Moderator', 'Frau Schäfer', 'Herr Aydin'], [
      { q: 'Junge Menschen lernen durch ein soziales Jahr, Verantwortung zu übernehmen.', a: 'Frau Schäfer' },
      { q: 'Wer etwas tun muss, macht es oft nicht gut.', a: 'Herr Aydin' },
      { q: 'Ehrenamtliche Arbeit macht mehr Spaß, wenn man sie selbst wählt.', a: 'Herr Aydin' },
      { q: 'Viele Jugendliche kennen die Möglichkeiten für soziale Arbeit nicht.', a: 'Frau Schäfer' },
      { q: 'Ein Pflichtjahr ist nur fair, wenn die Arbeit gut bezahlt wird.', a: 'Herr Aydin' },
      { q: 'Die Freiwilligen sollten ein Taschengeld und eine kostenlose Fahrkarte bekommen.', a: 'Frau Schäfer' }
    ])],

    // ------------------------------------------------ Kapitel 11: Stadt, Land, Fluss
    k11: [t3([
      { q: 'Zwischen Neustadt und Bergdorf fahren heute keine Züge.', a: true,
        audio: [{ s: 'w', t: 'Liebe Fahrgäste, wegen eines Unfalls ist die Bahnstrecke zwischen Neustadt und Bergdorf gesperrt. Zwischen den beiden Orten fahren Busse. Die Fahrt dauert etwa zwanzig Minuten länger.' }] },
      { q: 'Uwe möchte heute noch eine Antwort von Sabine.', a: false,
        audio: [{ s: 'm', t: 'Hallo Sabine, hier ist Uwe. Wir haben für das Wochenende eine Ferienwohnung auf dem Land gefunden, direkt an einem kleinen See, wo man auch schwimmen kann. Sie kostet für zwei Nächte nur hundertzwanzig Euro. Sag mir bitte bis morgen, ob ihr mitkommt.' }] },
      { q: 'Die Fahrgäste dürfen heute nicht auf das obere Deck.', a: true,
        audio: [{ s: 'w', t: 'Willkommen auf der Fähre nach Helgoland. Die Überfahrt dauert heute etwa zwei Stunden und fünfzehn Minuten. Wegen des starken Windes bitten wir Sie, nicht auf das obere Deck zu gehen.' }] },
      { q: 'Im Winter gibt es jeden Tag eine Stadtführung.', a: false,
        audio: [{ s: 'm', t: 'Touristeninformation Altstadt, guten Tag. Unsere Stadtführungen finden von April bis Oktober täglich um elf Uhr statt. Im Winter gibt es Führungen nur am Wochenende. Treffpunkt ist der Brunnen vor dem Rathaus.' }] },
      { q: 'Auf dem Fest kann man Produkte aus der Region kaufen.', a: true,
        audio: [{ s: 'w', t: 'Und hier noch ein Ausflugstipp: Das Dorf Lindenau feiert am Sonntag sein Erntefest. Alles, was dort verkauft wird, kommt von Bauernhöfen aus der Region. Für Kinder gibt es Ponyreiten.' }] }
    ])],

    // ------------------------------------------------ Kapitel 12: Geld regiert die Welt?
    k12: [t2([
      { s: 'w', n: 'Moderatorin', t: 'Herzlich willkommen zu unserer Sendung „Geld und Leben“. Heute ist Thomas Becker bei uns, der als Schuldnerberater bei der Verbraucherberatung arbeitet. Herr Becker, wer kommt zu Ihnen in die Beratung?' },
      { s: 'm', n: 'Thomas Becker', t: 'Ganz unterschiedliche Menschen. Früher waren es vor allem Menschen ohne Arbeit. Heute kommen immer mehr junge Leute zwischen zwanzig und dreißig Jahren, die einen festen Job haben.' },
      { s: 'w', n: 'Moderatorin', t: 'Woran liegt das?' },
      { s: 'm', n: 'Thomas Becker', t: 'Ein Grund ist das Einkaufen im Internet. Man bestellt schnell etwas und bezahlt erst später. Je einfacher das Bezahlen ist, desto schneller verliert man den Überblick. Dazu kommen Handyverträge und teure Abos, die man vergessen hat.' },
      { s: 'w', n: 'Moderatorin', t: 'Was raten Sie diesen Menschen?' },
      { s: 'm', n: 'Thomas Becker', t: 'Zuerst sollten sie ein Haushaltsbuch führen, also jede Ausgabe aufschreiben. Viele sind überrascht, wie viel Geld sie für Kleinigkeiten ausgeben. Außerdem empfehle ich, nicht benötigte Verträge sofort zu kündigen.' },
      { s: 'w', n: 'Moderatorin', t: 'Kostet Ihre Beratung etwas?' },
      { s: 'm', n: 'Thomas Becker', t: 'Nein, sie ist kostenlos. Man muss aber oft einige Wochen auf einen Termin warten. Deshalb sollte man sich früh melden und nicht warten, bis die Probleme zu groß sind.' }
    ], [
      { q: 'Herr Becker berät Menschen, die Probleme mit Geld haben.', a: true },
      { q: 'Heute kommen vor allem Menschen ohne Arbeit in die Beratung.', a: false },
      { q: 'Einfaches Bezahlen im Internet kann zu Schulden führen.', a: true },
      { q: 'Herr Becker empfiehlt, alle Ausgaben aufzuschreiben.', a: true },
      { q: 'Die meisten Menschen wissen genau, wie viel sie für Kleinigkeiten ausgeben.', a: false },
      { q: 'Für die Beratung muss man bezahlen.', a: false },
      { q: 'Man bekommt meistens sofort einen Termin.', a: false }
    ])],

    // ------------------------------------------------ Finaltest B1: Hören Teil 1–4 (Goethe B1)
    final: [
      g1([
        { q: 'Stefan und Laura treffen sich morgen am Bahnhof.', a: false,
          audio: [{ s: 'm', t: 'Hallo Laura, hier ist Stefan. Wegen des Streiks fahren morgen früh keine Busse. Ich kann dich also nicht wie geplant am Bahnhof treffen. Ich fahre mit dem Auto zur Arbeit und hole dich um sieben Uhr fünfzehn vor deiner Haustür ab. Wenn dir das zu früh ist, schreib mir bitte heute Abend noch eine Nachricht.' }] },
        { typ: 'mcq', q: 'Was soll Laura tun, wenn ihr die Zeit nicht passt?', o: ['Stefan eine Nachricht schreiben.', 'Stefan morgen früh anrufen.', 'Mit dem Bus fahren.'], a: 'Stefan eine Nachricht schreiben.' },
        { q: 'Für den Tag der offenen Tür muss man sich anmelden.', a: false,
          audio: [{ s: 'w', t: 'Sie hören Radio Mitte mit unserem Veranstaltungstipp: Am kommenden Samstag öffnen die Hochschulen der Stadt ihre Türen. Von zehn bis sechzehn Uhr können Schülerinnen und Schüler Vorlesungen besuchen, Labore besichtigen und mit Studierenden sprechen. Eine Anmeldung ist nicht nötig. Zwischen den Hochschulen fahren kostenlose Busse.' }] },
        { typ: 'mcq', q: 'Wie kommt man von einer Hochschule zur anderen?', o: ['Mit kostenlosen Bussen.', 'Mit dem Fahrrad.', 'Mit der Straßenbahn.'], a: 'Mit kostenlosen Bussen.' },
        { q: 'Der Flug nach Istanbul startet später.', a: true,
          audio: [{ s: 'm', t: 'Sehr geehrte Fluggäste des Fluges nach Istanbul: Wegen eines technischen Problems verzögert sich Ihr Abflug um etwa neunzig Minuten. Sie erhalten am Schalter B sieben einen Gutschein über zehn Euro für Essen und Getränke. Ihr Flug startet jetzt von Ausgang C zwölf.' }] },
        { typ: 'mcq', q: 'Was bekommen die Fluggäste am Schalter?', o: ['Einen Gutschein für Essen und Getränke.', 'Ein neues Ticket.', 'Eine Information über ein Hotel.'], a: 'Einen Gutschein für Essen und Getränke.' }
      ], 'H1'),
      g2([
        { s: 'w', n: 'Anja Sommer', t: 'Guten Morgen und herzlich willkommen in der Bäckerei Sommer! Ich heiße Anja Sommer und leite den Betrieb zusammen mit meinem Bruder. Unser Großvater hat die Bäckerei neunzehnhundertzweiundfünfzig gegründet, damals mit nur zwei Mitarbeitern. Heute arbeiten bei uns fünfundvierzig Menschen, und wir haben sechs Filialen in der Region. Unser Tag beginnt sehr früh: Die ersten Bäcker fangen schon um zwei Uhr nachts an. Bis sechs Uhr müssen alle Brötchen in den Filialen sein. Besonders stolz sind wir auf unser Brot, für das wir nur Mehl von Bauern aus der Region verwenden. Was am Abend nicht verkauft wurde, geben wir an die Tafel weiter. So wird nichts weggeworfen. Gleich gehen wir in die Backstube. Dort ist es sehr warm, deshalb können Sie Ihre Jacken hier an der Garderobe lassen. Am Ende der Führung dürfen Sie natürlich alles probieren.' }
      ], [
        { q: 'Wer hat die Bäckerei gegründet?', o: ['Der Großvater von Frau Sommer.', 'Frau Sommer und ihr Bruder.', 'Zwei Bäcker aus der Region.'], a: 'Der Großvater von Frau Sommer.' },
        { q: 'Wann beginnt die Arbeit in der Bäckerei?', o: ['Um zwei Uhr nachts.', 'Um sechs Uhr morgens.', 'Um vier Uhr morgens.'], a: 'Um zwei Uhr nachts.' },
        { q: 'Was ist besonders an dem Brot?', o: ['Das Mehl kommt von Bauern aus der Region.', 'Es wird nur in einer Filiale verkauft.', 'Es wird nach einem neuen Rezept gebacken.'], a: 'Das Mehl kommt von Bauern aus der Region.' },
        { q: 'Was passiert mit dem Brot, das nicht verkauft wurde?', o: ['Es wird an die Tafel gegeben.', 'Es wird am nächsten Tag billiger verkauft.', 'Es wird weggeworfen.'], a: 'Es wird an die Tafel gegeben.' },
        { q: 'Was können die Besucher machen, bevor sie in die Backstube gehen?', o: ['Ihre Jacken an der Garderobe lassen.', 'Das Brot probieren.', 'Eine Mütze aufsetzen.'], a: 'Ihre Jacken an der Garderobe lassen.' }
      ], 'H2'),
      g3([
        { s: 'm', n: 'Michael', t: 'Hallo Sarah! Darf ich mich zu dir setzen?' },
        { s: 'w', n: 'Sarah', t: 'Klar, Michael. Na, wie war dein Wochenende?' },
        { s: 'm', n: 'Michael', t: 'Anstrengend. Wir haben uns drei Wohnungen angesehen. Unsere Wohnung ist einfach zu klein geworden, seit das Baby da ist.' },
        { s: 'w', n: 'Sarah', t: 'Und? War etwas Passendes dabei?' },
        { s: 'm', n: 'Michael', t: 'Die erste Wohnung war schön, aber viel zu teuer. Die zweite lag direkt an einer lauten Straße. Aber die dritte hat uns sehr gefallen: vier Zimmer, ein kleiner Garten und nur zehn Minuten von hier.' },
        { s: 'w', n: 'Sarah', t: 'Das klingt doch perfekt!' },
        { s: 'm', n: 'Michael', t: 'Ja, aber es gab über fünfzig Interessenten. Wir haben uns trotzdem beworben. Nächste Woche sollen wir eine Antwort bekommen.' },
        { s: 'w', n: 'Sarah', t: 'Ich drücke euch die Daumen! Wir sind letztes Jahr umgezogen, und es hat ein halbes Jahr gedauert, bis wir etwas gefunden hatten.' },
        { s: 'm', n: 'Michael', t: 'Ein halbes Jahr? So lange können wir nicht warten.' },
        { s: 'w', n: 'Sarah', t: 'Hast du schon mal daran gedacht, eine Wohnung außerhalb der Stadt zu suchen? Dort sind die Mieten viel günstiger.' },
        { s: 'm', n: 'Michael', t: 'Schon, aber dann bräuchte ich jeden Tag eine Stunde zur Arbeit. Das möchte ich eigentlich nicht.' }
      ], [
        { q: 'Michael braucht eine größere Wohnung, weil er ein Baby bekommen hat.', a: true },
        { q: 'Die erste Wohnung hat Michael nicht gefallen.', a: false },
        { q: 'Die dritte Wohnung liegt in der Nähe von Michaels Arbeitsplatz.', a: true },
        { q: 'Michael hat die dritte Wohnung schon sicher.', a: false },
        { q: 'Sarah hat ihre Wohnung sehr schnell gefunden.', a: false },
        { q: 'Michael möchte nicht außerhalb der Stadt wohnen, weil der Weg zur Arbeit zu lang wäre.', a: true }
      ], 'H3'),
      g4([
        { s: 'm', n: 'Moderator', t: 'Willkommen zu unserer Diskussion. Ab welchem Alter sollten Kinder ein eigenes Smartphone haben? Darüber spreche ich heute mit Frau Graf, Lehrerin an einer Grundschule, und mit Herrn Weiß, Vater von zwei Kindern. Frau Graf, was beobachten Sie in der Schule?' },
        { s: 'w', n: 'Frau Graf', t: 'Schon in der dritten Klasse hat fast die Hälfte der Kinder ein Smartphone. Ich merke, dass sich viele Kinder schlechter konzentrieren können. Sie sind müde, weil sie abends lange online sind.' },
        { s: 'm2', n: 'Herr Weiß', t: 'Das kann ich verstehen. Aber für uns Eltern ist das Handy auch praktisch. Meine Tochter fährt allein mit dem Bus zur Schule, und ich bin ruhiger, wenn ich sie erreichen kann.' },
        { s: 'w', n: 'Frau Graf', t: 'Dafür reicht doch ein einfaches Handy ohne Internet. Man kann damit telefonieren und Nachrichten schreiben.' },
        { s: 'm2', n: 'Herr Weiß', t: 'Theoretisch ja. Aber alle Freunde meiner Tochter sind in Chatgruppen. Ohne Smartphone wäre sie ausgeschlossen.' },
        { s: 'm', n: 'Moderator', t: 'Das ist ein Problem, das viele Eltern kennen. Was könnte die Schule tun?' },
        { s: 'w', n: 'Frau Graf', t: 'Wir sollten den Kindern beibringen, wie man verantwortungsvoll mit Medien umgeht. Bei uns gibt es dafür seit diesem Jahr ein eigenes Unterrichtsfach.' },
        { s: 'm2', n: 'Herr Weiß', t: 'Ein Schulfach allein reicht nicht. Auch wir Eltern müssen ein Vorbild sein. Bei uns zu Hause gibt es beim Essen keine Handys, auch nicht für die Erwachsenen.' }
      ], ['der Moderator', 'Frau Graf', 'Herr Weiß'], [
        { q: 'Viele Kinder sind in der Schule müde, weil sie abends online sind.', a: 'Frau Graf' },
        { q: 'Ein Handy gibt Eltern ein sicheres Gefühl.', a: 'Herr Weiß' },
        { q: 'Ein Handy ohne Internet ist genug.', a: 'Frau Graf' },
        { q: 'Kinder ohne Smartphone gehören in ihrer Gruppe nicht richtig dazu.', a: 'Herr Weiß' },
        { q: 'Viele Eltern haben dieses Problem.', a: 'der Moderator' },
        { q: 'Kinder sollten in der Schule lernen, Medien richtig zu nutzen.', a: 'Frau Graf' },
        { q: 'Auch Erwachsene sollten beim Essen das Handy weglegen.', a: 'Herr Weiß' }
      ], 'H4')
    ]
  };
})();
