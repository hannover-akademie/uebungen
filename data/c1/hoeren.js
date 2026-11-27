// Aspekte neu C1 – Hören (wie Goethe-Zertifikat C1, telc Deutsch C1 Hochschule und TestDaF)
// Wird von assets/app.js vor dem Schreiben-Teil (D) eingefügt. audio = Hörtext (Sprachausgabe), plays = wie oft (1 oder 2).
// Notizen und Kurzantworten: typ 'gap', a = Musterlösung, kw = Schlüsselwörter (eines muss in der Antwort vorkommen).
(function () {
  var RATE = 1;
  var KURZ = ' Schreiben Sie nur Stichworte (ein bis fünf Wörter).';
  var KURZ_AR = ' اكتب كلمات مفتاحية فقط (من كلمة إلى خمس كلمات).';
  function teil(titel, typ, plays, audio, audioTitel, anweisung, anweisungAr, items) {
    return { teil: 'Hören', titel: titel, typ: typ, plays: plays, rate: RATE, audio: audio, audioTitel: audioTitel,
      anweisung: anweisung, anweisungAr: anweisungAr, items: items };
  }
  // ---- Goethe-Zertifikat C1
  function goethe1(audio, items) {
    return teil('Hören Teil 1 (wie Goethe C1): Ein Gespräch – Notizen', 'gap', 1, audio, 'Telefongespräch',
      'Sie hören ein Gespräch. Sie hören den Text einmal. Lesen Sie zuerst die Notizen. Ergänzen Sie beim Hören die fehlenden Informationen.' + KURZ,
      'ستسمع محادثة مرة واحدة فقط. اقرأ الملاحظات أولًا، ثم أكمل المعلومات الناقصة أثناء الاستماع.' + KURZ_AR, items);
  }
  function goethe2(audio, items) {
    return teil('Hören Teil 2 (wie Goethe C1): Ein Radiointerview', 'mcq', 2, audio, 'Radiointerview',
      'Sie hören ein Interview aus dem Radio. Sie hören den Text zweimal. Lesen Sie zuerst die Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
      'ستسمع مقابلة إذاعية مرتين. اقرأ الأسئلة أولًا، ثم اختر الإجابة الصحيحة لكل سؤال.', items);
  }
  // ---- telc Deutsch C1 Hochschule
  function telc1(audio, items) {
    return teil('Hören Teil 1 (wie telc C1 Hochschule): Ein Beratungsgespräch – Notizen', 'gap', 1, audio, 'Beratungsgespräch',
      'Sie hören ein Gespräch an der Hochschule. Sie hören den Text einmal. Lesen Sie zuerst die Notizen. Ergänzen Sie beim Hören die fehlenden Informationen.' + KURZ,
      'ستسمع محادثة في الجامعة مرة واحدة فقط. اقرأ الملاحظات أولًا، ثم أكمل المعلومات الناقصة أثناء الاستماع.' + KURZ_AR, items);
  }
  function telc2(audio, audioTitel, items) {
    return teil('Hören Teil 2 (wie telc C1 Hochschule): Eine Diskussion', 'tf', 2, audio, audioTitel,
      'Sie hören eine Diskussion. Sie hören den Text zweimal. Lesen Sie zuerst die Aussagen. Sind die Aussagen richtig oder falsch?',
      'ستسمع نقاشًا مرتين. اقرأ العبارات أولًا، ثم حدّد: هل كل عبارة صحيحة أم خاطئة؟', items);
  }
  function telc3(audio, items) {
    return teil('Hören Teil 3 (wie telc C1 Hochschule): Eine Vorlesung – Kurzantworten', 'gap', 2, audio, 'Vorlesung',
      'Sie hören einen Ausschnitt aus einer Vorlesung. Sie hören den Text zweimal. Lesen Sie zuerst die Fragen. Beantworten Sie die Fragen beim Hören.' + KURZ,
      'ستسمع جزءًا من محاضرة جامعية مرتين. اقرأ الأسئلة أولًا، ثم أجب عنها أثناء الاستماع.' + KURZ_AR, items);
  }
  // ---- TestDaF
  function daf1(audio, items) {
    return teil('Hörverstehen – Hörtext 1 (wie TestDaF): Ein Gespräch im Studienalltag', 'gap', 1, audio, 'Gespräch',
      'Sie hören ein Gespräch. Sie hören den Text einmal. Lesen Sie zuerst die Fragen. Beantworten Sie die Fragen beim Hören.' + KURZ,
      'ستسمع محادثة من الحياة الجامعية مرة واحدة فقط. اقرأ الأسئلة أولًا، ثم أجب عنها أثناء الاستماع.' + KURZ_AR, items);
  }
  function daf2(audio, items) {
    return teil('Hörverstehen – Hörtext 2 (wie TestDaF): Ein Gespräch mit mehreren Personen', 'tf', 1, audio, 'Radiogespräch',
      'Sie hören ein Gespräch. Sie hören den Text einmal. Lesen Sie zuerst die Aussagen. Sind die Aussagen richtig oder falsch?',
      'ستسمع حوارًا بين عدة أشخاص مرة واحدة فقط. اقرأ العبارات أولًا، ثم حدّد: هل كل عبارة صحيحة أم خاطئة؟', items);
  }
  function daf3(audio, items) {
    return teil('Hörverstehen – Hörtext 3 (wie TestDaF): Ein Interview mit einem Experten', 'gap', 2, audio, 'Experteninterview',
      'Sie hören ein Interview. Sie hören den Text zweimal. Lesen Sie zuerst die Fragen. Beantworten Sie die Fragen beim Hören.' + KURZ,
      'ستسمع مقابلة مع خبير مرتين. اقرأ الأسئلة أولًا، ثم أجب عنها أثناء الاستماع.' + KURZ_AR, items);
  }

  window.HOEREN = {
    // ------------------------------------------------ Kapitel 1: Alltägliches (Vereine heute)
    k1: [goethe1([
      { s: 'm', n: 'Herr Brandt', t: 'Ruderclub Alster, Brandt am Apparat, guten Tag.' },
      { s: 'w', n: 'Nadia Saleh', t: 'Guten Tag, mein Name ist Nadia Saleh. Ich habe auf Ihrer Internetseite gelesen, dass Sie Anfängerkurse anbieten. Ich würde gern wissen, wie das genau abläuft.' },
      { s: 'm', n: 'Herr Brandt', t: 'Sehr gern. Unsere Anfängerkurse beginnen immer im April, sobald das Wasser etwas wärmer ist. Der nächste Kurs startet am zwölften April und umfasst zehn Termine, jeweils samstags von neun bis elf Uhr.' },
      { s: 'w', n: 'Nadia Saleh', t: 'Samstags passt mir gut. Muss man dafür schon Mitglied sein?' },
      { s: 'm', n: 'Herr Brandt', t: 'Nein, für den Kurs nicht. Er kostet für Nichtmitglieder neunzig Euro. Wenn Sie danach in den Verein eintreten, wird die Kursgebühr allerdings mit dem ersten Mitgliedsbeitrag verrechnet.' },
      { s: 'w', n: 'Nadia Saleh', t: 'Das klingt fair. Und was muss ich mitbringen?' },
      { s: 'm', n: 'Herr Brandt', t: 'Sportkleidung und Turnschuhe, mehr nicht. Die Boote stellen natürlich wir. Wichtig ist allerdings, dass Sie schwimmen können. Dafür brauchen wir einen Nachweis, zum Beispiel ein Schwimmabzeichen. Andernfalls können Sie leider nicht teilnehmen, das schreibt unsere Versicherung vor.' },
      { s: 'w', n: 'Nadia Saleh', t: 'Ein Abzeichen habe ich, das ist kein Problem. Wie melde ich mich an?' },
      { s: 'm', n: 'Herr Brandt', t: 'Am einfachsten über das Formular auf unserer Internetseite. Anmeldeschluss ist der fünfte April. Die Zahl der Plätze ist begrenzt, deshalb würde ich mir an Ihrer Stelle nicht zu lange Zeit lassen.' },
      { s: 'w', n: 'Nadia Saleh', t: 'Gut, dann erledige ich das heute noch. Vielen Dank, Herr Brandt.' },
      { s: 'm', n: 'Herr Brandt', t: 'Gern geschehen. Auf Wiederhören!' }
    ], [
      { q: 'Kursbeginn: am ___ April', a: '12.', kw: ['12', 'zwölf'] },
      { q: 'Kurstag: jeden ___', a: 'Samstag', kw: ['samstag', 'sonnabend'] },
      { q: 'Uhrzeit: von 9 bis ___ Uhr', a: '11', kw: ['11', 'elf'] },
      { q: 'Kosten für Nichtmitglieder: ___ Euro', a: '90', kw: ['90', 'neunzig'] },
      { q: 'Mitbringen: Sportkleidung und ___', a: 'Turnschuhe', kw: ['turnschuh', 'sportschuh'] },
      { q: 'Voraussetzung: Nachweis, dass man ___ kann', a: 'schwimmen', kw: ['schwimm'] },
      { q: 'Anmeldung: über das ___ auf der Internetseite', a: 'Formular', kw: ['formular'] },
      { q: 'Anmeldeschluss: ___ April', a: '5.', kw: ['5', 'fünf'] }
    ])],

    // ------------------------------------------------ Kapitel 2: Hast du Worte? (Gib Contra!)
    k2: [goethe2([
      { s: 'm', n: 'Moderator', t: 'Herzlich willkommen zu unserer Sendung „Sprechen und Verstehen“. Uns allen ist es schon passiert: Jemand macht eine unverschämte Bemerkung, und uns fällt erst Stunden später die passende Antwort ein. Bei mir im Studio ist die Kommunikationstrainerin Ulrike Hartmann, die Seminare zum Thema Schlagfertigkeit gibt. Frau Hartmann, kann man Schlagfertigkeit überhaupt lernen?' },
      { s: 'w', n: 'Ulrike Hartmann', t: 'Ja, durchaus. Viele halten Schlagfertigkeit für eine angeborene Begabung, aber das stimmt nur zum Teil. Natürlich gibt es Menschen, denen das leichter fällt. Letztlich ist es aber vor allem eine Frage der Übung. Wer bestimmte Techniken kennt und sie regelmäßig anwendet, reagiert mit der Zeit spontaner.' },
      { s: 'm', n: 'Moderator', t: 'Welche Techniken sind das zum Beispiel?' },
      { s: 'w', n: 'Ulrike Hartmann', t: 'Eine sehr wirksame Methode ist die Gegenfrage. Wenn mir jemand sagt: „Sie haben ja keine Ahnung“, kann ich ruhig zurückfragen: „Woran machen Sie das fest?“ Damit gewinne ich Zeit, und der andere muss seine Behauptung begründen. Häufig merkt er dann selbst, dass sie haltlos war.' },
      { s: 'm', n: 'Moderator', t: 'Viele denken bei Schlagfertigkeit an witzige, vielleicht sogar verletzende Antworten. Ist das das Ziel?' },
      { s: 'w', n: 'Ulrike Hartmann', t: 'Auf keinen Fall. Ich warne meine Teilnehmer sogar davor, den anderen bloßzustellen. Wer andere lächerlich macht, hat vielleicht kurzfristig die Lacher auf seiner Seite, verliert aber auf Dauer an Glaubwürdigkeit. Mein Ziel ist es, dass man souverän bleibt und das Gespräch wieder auf eine sachliche Ebene bringt.' },
      { s: 'm', n: 'Moderator', t: 'Wer besucht eigentlich Ihre Seminare?' },
      { s: 'w', n: 'Ulrike Hartmann', t: 'Das ist ganz unterschiedlich. Früher kamen hauptsächlich Führungskräfte, inzwischen melden sich zunehmend Studierende an, die sich zum Beispiel auf mündliche Prüfungen oder Vorstellungsgespräche vorbereiten. Auffällig ist, dass mehr Frauen als Männer teilnehmen. Das liegt meiner Meinung nach aber nicht daran, dass Frauen weniger schlagfertig wären, sondern daran, dass sie eher bereit sind, an sich zu arbeiten.' },
      { s: 'm', n: 'Moderator', t: 'Haben Sie zum Schluss noch einen Tipp für unsere Hörerinnen und Hörer?' },
      { s: 'w', n: 'Ulrike Hartmann', t: 'Ja: Nehmen Sie sich nicht vor, immer eine perfekte Antwort parat zu haben. Manchmal ist es völlig in Ordnung, einfach zu schweigen und den anderen ruhig anzuschauen. Auch das kann sehr wirkungsvoll sein.' }
    ], [
      { q: 'Was sagt Frau Hartmann über Schlagfertigkeit?', o: ['Sie ist vor allem eine Frage der Übung.', 'Sie ist eine angeborene Begabung, die man nicht lernen kann.', 'Sie hängt hauptsächlich vom Wortschatz ab.'], a: 'Sie ist vor allem eine Frage der Übung.' },
      { q: 'Welchen Vorteil hat eine Gegenfrage?', o: ['Man gewinnt Zeit, und der andere muss seine Aussage begründen.', 'Man kann den anderen schnell lächerlich machen.', 'Man kann das Gespräch sofort beenden.'], a: 'Man gewinnt Zeit, und der andere muss seine Aussage begründen.' },
      { q: 'Wovor warnt Frau Hartmann ihre Teilnehmer?', o: ['Den Gesprächspartner bloßzustellen.', 'Auf Kritik überhaupt zu reagieren.', 'Zu sachlich zu argumentieren.'], a: 'Den Gesprächspartner bloßzustellen.' },
      { q: 'Wer meldet sich heute zunehmend zu ihren Seminaren an?', o: ['Studierende', 'Führungskräfte', 'Lehrerinnen und Lehrer'], a: 'Studierende' },
      { q: 'Warum nehmen laut Frau Hartmann mehr Frauen als Männer teil?', o: ['Weil Frauen eher bereit sind, an sich zu arbeiten.', 'Weil Frauen weniger schlagfertig sind als Männer.', 'Weil die Seminare speziell für Frauen angeboten werden.'], a: 'Weil Frauen eher bereit sind, an sich zu arbeiten.' },
      { q: 'Was rät sie den Hörerinnen und Hörern zum Schluss?', o: ['Manchmal einfach zu schweigen.', 'Sich immer eine perfekte Antwort zurechtzulegen.', 'Unhöflichen Menschen aus dem Weg zu gehen.'], a: 'Manchmal einfach zu schweigen.' }
    ])],

    // ------------------------------------------------ Kapitel 3: An die Arbeit! (Lebenslauf, Praktikum, Soft Skills)
    k3: [daf1([
      { s: 'w', n: 'Frau Krüger', t: 'Career Service, Krüger. Kommen Sie herein. Was kann ich für Sie tun?' },
      { s: 'm', n: 'Omar Hassan', t: 'Guten Tag, ich heiße Omar Hassan und studiere im vierten Semester Maschinenbau. Ich suche ein Praktikum für den Sommer, weiß aber nicht genau, wo ich anfangen soll.' },
      { s: 'w', n: 'Frau Krüger', t: 'Da sind Sie bei uns richtig. Haben Sie schon eine Vorstellung, in welchem Bereich Sie Erfahrungen sammeln möchten?' },
      { s: 'm', n: 'Omar Hassan', t: 'Am liebsten in der Entwicklung, vielleicht bei einem Autozulieferer. Aber ich habe gehört, dass solche Stellen sehr begehrt sind.' },
      { s: 'w', n: 'Frau Krüger', t: 'Das stimmt. Deshalb empfehle ich Ihnen, sich möglichst früh zu bewerben, am besten schon jetzt im Januar. Viele Unternehmen vergeben ihre Sommerplätze bereits im Februar. Auf unserem Stellenportal finden Sie übrigens eine Liste mit Firmen, die regelmäßig Praktikanten unserer Hochschule nehmen.' },
      { s: 'm', n: 'Omar Hassan', t: 'Das ist hilfreich. Ehrlich gesagt bin ich mir bei meinem Lebenslauf unsicher. Ich habe zwischen Schule und Studium ein Jahr in einem Restaurant gearbeitet. Soll ich das überhaupt angeben?' },
      { s: 'w', n: 'Frau Krüger', t: 'Unbedingt! Lücken im Lebenslauf wirken viel ungünstiger als ein Nebenjob. Gerade in der Gastronomie lernt man, unter Druck zu arbeiten und mit Kunden umzugehen. Das sind genau die Soft Skills, auf die Personalverantwortliche achten.' },
      { s: 'm', n: 'Omar Hassan', t: 'Gut zu wissen. Bieten Sie auch Hilfe beim Anschreiben an?' },
      { s: 'w', n: 'Frau Krüger', t: 'Ja, jeden Dienstagnachmittag gibt es einen Bewerbungscheck. Dort sehen sich unsere Mitarbeiter Ihre Unterlagen an und geben Ihnen eine Rückmeldung. Sie müssen allerdings vorher online einen Termin reservieren.' },
      { s: 'm', n: 'Omar Hassan', t: 'Eine letzte Frage: Ich möchte später vielleicht ein Semester im Ausland verbringen. Gibt es dafür auch Unterstützung?' },
      { s: 'w', n: 'Frau Krüger', t: 'Ja, wenden Sie sich dafür an das International Office. Dort können Sie sich auch über Stipendien informieren, zum Beispiel über das Erasmus-Programm.' },
      { s: 'm', n: 'Omar Hassan', t: 'Vielen Dank, Frau Krüger, das hat mir sehr geholfen.' }
    ], [
      { q: 'In welchem Bereich möchte Omar ein Praktikum machen? ___', a: 'in der Entwicklung', kw: ['entwicklung'] },
      { q: 'Wann sollte er sich laut Frau Krüger bewerben? ___', a: 'möglichst früh, schon jetzt im Januar', kw: ['januar', 'jetzt', 'früh', 'sofort'] },
      { q: 'Wo findet er eine Liste mit passenden Firmen? ___', a: 'auf dem Stellenportal der Hochschule', kw: ['portal'] },
      { q: 'Wo hat Omar vor dem Studium gearbeitet? ___', a: 'in einem Restaurant', kw: ['restaurant', 'gastronomie'] },
      { q: 'Was lernt man laut Frau Krüger in der Gastronomie? (eine Fähigkeit) ___', a: 'unter Druck arbeiten / mit Kunden umgehen', kw: ['druck', 'kunde', 'soft skill'] },
      { q: 'Wann findet der Bewerbungscheck statt? ___', a: 'dienstagnachmittags', kw: ['dienstag'] },
      { q: 'Was muss Omar vor dem Bewerbungscheck tun? ___', a: 'online einen Termin reservieren', kw: ['termin'] },
      { q: 'An wen soll er sich wegen eines Auslandssemesters wenden? ___', a: 'an das International Office', kw: ['international', 'office', 'auslandsamt'] }
    ])],

    // ------------------------------------------------ Kapitel 4: Wirtschaftsgipfel (Mit gutem Gewissen?)
    k4: [telc2([
      { s: 'w', n: 'Moderatorin', t: 'Willkommen zu unserer Diskussionsrunde im Campusradio. Unser Thema heute: Kann man mit seinem Einkauf die Welt verbessern? Bei mir sind Professor Martin Weber, Volkswirt an unserer Universität, und Lena Vogt von einem Verein für fairen Handel. Frau Vogt, warum sollte man fair gehandelte Produkte kaufen?' },
      { s: 'w2', n: 'Lena Vogt', t: 'Weil die Produzenten einen Mindestpreis erhalten, der über dem Weltmarktpreis liegt. Gerade Kaffeebauern sind sonst den starken Preisschwankungen an den Börsen schutzlos ausgeliefert. Der faire Preis gibt ihnen Planungssicherheit, sodass sie zum Beispiel in die Schulbildung ihrer Kinder investieren können.' },
      { s: 'w', n: 'Moderatorin', t: 'Herr Weber, Sie sehen das kritischer?' },
      { s: 'm', n: 'Prof. Martin Weber', t: 'Ich bestreite nicht, dass der faire Handel einzelnen Familien hilft. Aber man sollte seine Wirkung nicht überschätzen. Der Marktanteil von fair gehandeltem Kaffee liegt in Deutschland nur bei etwa fünf Prozent. Strukturelle Probleme wie Handelsbarrieren lassen sich durch den Einkauf im Supermarkt nicht lösen. Dafür braucht es politische Entscheidungen.' },
      { s: 'w2', n: 'Lena Vogt', t: 'Da gebe ich Ihnen teilweise recht. Aber das eine schließt das andere doch nicht aus. Im Gegenteil: Je mehr Verbraucher fair einkaufen, desto größer wird der Druck auf die Politik.' },
      { s: 'w', n: 'Moderatorin', t: 'Ein häufiger Einwand lautet, dass faire Produkte zu teuer seien.' },
      { s: 'm', n: 'Prof. Martin Weber', t: 'Für manche Studierende mag das zutreffen. Allerdings machen die Rohstoffkosten bei einer Tafel Schokolade nur einen kleinen Teil des Preises aus. Ein fairer Preis für den Kakao würde die Schokolade also nur um wenige Cent verteuern. Das Problem ist eher, dass viele Menschen grundsätzlich zum günstigsten Angebot greifen.' },
      { s: 'w', n: 'Moderatorin', t: 'Wie sieht es mit den Siegeln aus? Kann man ihnen vertrauen?' },
      { s: 'w2', n: 'Lena Vogt', t: 'Bei den bekannten Siegeln werden die Produzenten regelmäßig von unabhängigen Stellen kontrolliert. Es gibt aber leider auch Fantasiesiegel, die sich Firmen selbst ausdenken. Ich rate daher, sich vor dem Einkauf im Internet zu informieren.' },
      { s: 'm', n: 'Prof. Martin Weber', t: 'Und genau hier sehe ich eine Aufgabe für den Gesetzgeber. Es kann nicht sein, dass jeder Verbraucher zum Experten werden muss, um verantwortungsvoll einzukaufen. Ich halte ein staatliches Siegel mit klaren Kriterien für überfällig.' },
      { s: 'w', n: 'Moderatorin', t: 'Vielen Dank Ihnen beiden für diese spannende Diskussion.' }
    ], 'Diskussion im Campusradio', [
      { q: 'Die Produzenten erhalten im fairen Handel einen Preis über dem Weltmarktpreis.', a: true },
      { q: 'Herr Weber hält den fairen Handel für völlig wirkungslos.', a: false },
      { q: 'Der Marktanteil von fairem Kaffee in Deutschland ist laut Herrn Weber gering.', a: true },
      { q: 'Frau Vogt ist der Meinung, dass politische Entscheidungen unnötig sind.', a: false },
      { q: 'Laut Herrn Weber würde ein fairer Kakaopreis Schokolade erheblich verteuern.', a: false },
      { q: 'Viele Menschen kaufen laut Herrn Weber grundsätzlich das billigste Produkt.', a: true },
      { q: 'Alle Siegel werden von unabhängigen Stellen kontrolliert.', a: false },
      { q: 'Herr Weber fordert ein staatliches Siegel mit klaren Kriterien.', a: true }
    ])],

    // ------------------------------------------------ Kapitel 5: Ziele (Ehrenamtlich)
    k5: [daf2([
      { s: 'm', n: 'Moderator', t: 'Hallo und willkommen bei „Campus aktuell“. Heute geht es um ehrenamtliches Engagement neben dem Studium. Zu Gast sind Mariam, die Medizin studiert, und Felix, der Lehramt studiert. Mariam, wofür engagierst du dich?' },
      { s: 'w', n: 'Mariam', t: 'Ich gebe zweimal pro Woche Nachhilfe für geflüchtete Kinder in einer Gemeinschaftsunterkunft. Ich habe damit schon im ersten Semester angefangen, weil ich selbst als Kind nach Deutschland gekommen bin und weiß, wie schwer der Anfang in der Schule ist.' },
      { s: 'm', n: 'Moderator', t: 'Ist das mit einem Medizinstudium überhaupt vereinbar?' },
      { s: 'w', n: 'Mariam', t: 'Ehrlich gesagt wird es in der Prüfungszeit manchmal knapp. Dann vertritt mich eine Kommilitonin. Aber ich würde es nie aufgeben, weil es mir mindestens so viel gibt wie den Kindern.' },
      { s: 'm', n: 'Moderator', t: 'Felix, wie ist es bei dir?' },
      { s: 'm2', n: 'Felix', t: 'Ich trainiere eine Fußballmannschaft mit Jugendlichen. Ursprünglich wollte ich nur ein paar Wochen aushelfen, weil der alte Trainer krank war. Inzwischen mache ich das seit drei Jahren.' },
      { s: 'm', n: 'Moderator', t: 'Profitierst du davon auch für dein Studium?' },
      { s: 'm2', n: 'Felix', t: 'Auf jeden Fall. Als angehender Lehrer lerne ich, mit Konflikten in einer Gruppe umzugehen. Das bringt einem kein Seminar so gut bei wie die Praxis. Außerdem lässt sich mein Engagement im Lebenslauf gut darstellen, obwohl das für mich nicht der Hauptgrund ist.' },
      { s: 'm', n: 'Moderator', t: 'Viele Studierende sagen, sie hätten für ein Ehrenamt keine Zeit, weil sie nebenbei jobben müssen.' },
      { s: 'w', n: 'Mariam', t: 'Das verstehe ich gut. Ich arbeite selbst am Wochenende in einer Apotheke. Aber es gibt auch Ehrenämter, die nur wenig Zeit beanspruchen, zum Beispiel einmal im Monat bei der Tafel Lebensmittel zu verteilen.' },
      { s: 'm2', n: 'Felix', t: 'Und manche Hochschulen erkennen ehrenamtliche Arbeit inzwischen sogar mit Leistungspunkten an. Bei uns ist das leider noch nicht der Fall, aber unsere Studierendenvertretung setzt sich dafür ein.' },
      { s: 'm', n: 'Moderator', t: 'Mariam, Felix, vielen Dank für das Gespräch.' }
    ], [
      { q: 'Mariam gibt Nachhilfe für geflüchtete Kinder.', a: true },
      { q: 'Mariam hat erst kurz vor ihren Prüfungen mit dem Ehrenamt angefangen.', a: false },
      { q: 'In der Prüfungszeit übernimmt eine Kommilitonin Mariams Aufgabe.', a: true },
      { q: 'Felix trainiert seit drei Jahren eine Jugendmannschaft.', a: true },
      { q: 'Felix wollte von Anfang an langfristig als Trainer arbeiten.', a: false },
      { q: 'Felix engagiert sich vor allem, um seinen Lebenslauf zu verbessern.', a: false },
      { q: 'Mariam arbeitet neben dem Studium in einer Apotheke.', a: true },
      { q: 'An der Hochschule von Felix bekommt man für ein Ehrenamt Leistungspunkte.', a: false }
    ])],

    // ------------------------------------------------ Kapitel 6: Gesund und munter (Zu Risiken und Nebenwirkungen …)
    k6: [telc3([
      { s: 'w', n: 'Professorin', t: 'Meine Damen und Herren, in der heutigen Vorlesung beschäftigen wir uns mit einem Phänomen, das die Medizin lange unterschätzt hat: dem Placeboeffekt. Unter einem Placebo versteht man ein Scheinmedikament, also zum Beispiel eine Tablette, die nur aus Zucker besteht und keinen Wirkstoff enthält. Trotzdem berichten Patienten nach der Einnahme häufig, dass es ihnen besser geht.' },
      { s: 'w', n: 'Professorin', t: 'Wie lässt sich das erklären? Entscheidend ist die Erwartung. Wer davon überzeugt ist, ein wirksames Medikament zu bekommen, schüttet zum Beispiel körpereigene Schmerzmittel aus. Besonders gut belegt ist der Effekt deshalb bei Schmerzen, aber auch bei Übelkeit und Schlafstörungen.' },
      { s: 'w', n: 'Professorin', t: 'Interessant ist, dass auch äußere Merkmale eine Rolle spielen. In Studien wirkten teure Tabletten stärker als billige und Spritzen stärker als Tabletten. Selbst die Farbe ist nicht unwichtig: Blaue Tabletten werden eher als beruhigend wahrgenommen, rote eher als anregend.' },
      { s: 'w', n: 'Professorin', t: 'Es gibt allerdings auch eine Kehrseite, den sogenannten Noceboeffekt. Wenn Patienten im Beipackzettel lesen, welche Nebenwirkungen auftreten können, berichten manche genau über diese Beschwerden, obwohl sie nur ein Placebo eingenommen haben. Ärztinnen und Ärzte stehen daher vor einem Dilemma: Einerseits müssen sie über Risiken aufklären, andererseits sollten sie keine unnötigen Ängste wecken.' },
      { s: 'w', n: 'Professorin', t: 'Lange galt es als unvermeidlich, die Patienten zu täuschen, damit ein Placebo wirken kann. Neuere Untersuchungen zeigen jedoch, dass sogenannte offene Placebos ebenfalls helfen können. Dabei wissen die Patienten, dass sie ein Scheinmedikament bekommen. In der nächsten Sitzung werden wir uns diese Studien genauer ansehen.' }
    ], [
      { q: 'Woraus besteht die Tablette im Beispiel der Professorin? ___', a: 'nur aus Zucker', kw: ['zucker'] },
      { q: 'Was ist für die Wirkung eines Placebos entscheidend? ___', a: 'die Erwartung', kw: ['erwart'] },
      { q: 'Bei welchen Beschwerden ist der Effekt besonders gut belegt? ___', a: 'bei Schmerzen', kw: ['schmerz'] },
      { q: 'Was wirkte in Studien stärker als Tabletten? ___', a: 'Spritzen', kw: ['spritze'] },
      { q: 'Wie werden rote Tabletten wahrgenommen? ___', a: 'als anregend', kw: ['anreg'] },
      { q: 'Wodurch kann der Noceboeffekt ausgelöst werden? ___', a: 'durch das Lesen der Nebenwirkungen im Beipackzettel', kw: ['beipackzettel', 'nebenwirkung'] },
      { q: 'Was wissen die Patienten bei einem offenen Placebo? ___', a: 'dass sie ein Scheinmedikament bekommen', kw: ['schein', 'placebo', 'wirkstoff'] }
    ])],

    // ------------------------------------------------ Kapitel 7: Recht so! (Dumm gelaufen – Alltagsrecht)
    k7: [telc1([
      { s: 'w', n: 'Frau Schulze', t: 'Rechtsberatung des Studierendenwerks, Schulze. Bitte nehmen Sie Platz. Worum geht es?' },
      { s: 'm', n: 'Ahmed Nour', t: 'Ich bin vor zwei Monaten aus meinem WG-Zimmer ausgezogen, und mein Vermieter will mir die Kaution nicht zurückzahlen. Es geht um sechshundert Euro.' },
      { s: 'w', n: 'Frau Schulze', t: 'Welche Gründe nennt er?' },
      { s: 'm', n: 'Ahmed Nour', t: 'Er behauptet, die Wände seien beschädigt. Aber das stimmt nicht. Ich habe das Zimmer sogar frisch gestrichen, bevor ich ausgezogen bin.' },
      { s: 'w', n: 'Frau Schulze', t: 'Gibt es ein Übergabeprotokoll, also ein Dokument, in dem der Zustand des Zimmers beim Auszug festgehalten wurde?' },
      { s: 'm', n: 'Ahmed Nour', t: 'Ja, wir haben es beide unterschrieben, und darin steht nichts von Schäden.' },
      { s: 'w', n: 'Frau Schulze', t: 'Das ist sehr gut. Damit sind Sie in einer starken Position. Allerdings darf ein Vermieter einen Teil der Kaution vorübergehend einbehalten, wenn die Nebenkostenabrechnung noch nicht vorliegt. Das ist rechtlich zulässig.' },
      { s: 'm', n: 'Ahmed Nour', t: 'Und wie lange darf er sich Zeit lassen?' },
      { s: 'w', n: 'Frau Schulze', t: 'In der Regel hat der Vermieter bis zu sechs Monate Zeit, um über die Kaution abzurechnen. Ich empfehle Ihnen trotzdem, ihn schon jetzt schriftlich aufzufordern, die Kaution zurückzuzahlen. Setzen Sie ihm eine Frist von zwei Wochen und schicken Sie den Brief per Einschreiben, damit Sie einen Nachweis haben.' },
      { s: 'm', n: 'Ahmed Nour', t: 'Und wenn er nicht reagiert?' },
      { s: 'w', n: 'Frau Schulze', t: 'Dann kommen Sie wieder zu uns. Bringen Sie bitte den Mietvertrag, das Übergabeprotokoll und Ihre Kontoauszüge mit. Die Beratung ist für Studierende übrigens kostenlos. Unsere Sprechstunde ist immer mittwochs ab vierzehn Uhr.' },
      { s: 'm', n: 'Ahmed Nour', t: 'Vielen Dank, das beruhigt mich.' }
    ], [
      { q: 'Problem: Der Vermieter zahlt die ___ nicht zurück.', a: 'Kaution', kw: ['kaution'] },
      { q: 'Betrag: ___ Euro', a: '600', kw: ['600', 'sechshundert'] },
      { q: 'Begründung des Vermieters: Die ___ seien beschädigt.', a: 'Wände', kw: ['wände', 'wand'] },
      { q: 'Wichtiges Dokument ohne Schäden, von beiden unterschrieben: das ___', a: 'Übergabeprotokoll', kw: ['protokoll'] },
      { q: 'Zeit für die Abrechnung: in der Regel bis zu ___ Monate', a: 'sechs', kw: ['6', 'sechs'] },
      { q: 'Nächster Schritt: schriftliche Aufforderung, Versand per ___', a: 'Einschreiben', kw: ['einschreiben'] },
      { q: 'Frist im Brief: ___ Wochen', a: 'zwei', kw: ['2', 'zwei'] },
      { q: 'Sprechstunde: ___ ab 14 Uhr', a: 'mittwochs', kw: ['mittwoch'] }
    ])],

    // ------------------------------------------------ Kapitel 8: Du bist, was du bist (Von Anfang an anders?)
    k8: [daf3([
      { s: 'w', n: 'Moderatorin', t: 'In unserer Reihe „Wissenschaft im Gespräch“ begrüße ich heute Doktor Thomas Albrecht, der seit vielen Jahren Zwillinge erforscht. Herr Albrecht, warum sind Zwillinge für die Forschung so interessant?' },
      { s: 'm', n: 'Dr. Thomas Albrecht', t: 'Weil sie uns helfen, eine sehr alte Frage zu beantworten: Was an unserer Persönlichkeit ist angeboren, und was ist anerzogen? Eineiige Zwillinge haben dieselben Gene. Wenn sie sich trotzdem in bestimmten Eigenschaften unterscheiden, muss das an der Umwelt liegen.' },
      { s: 'w', n: 'Moderatorin', t: 'Wie gehen Sie dabei konkret vor?' },
      { s: 'm', n: 'Dr. Thomas Albrecht', t: 'Wir vergleichen eineiige mit zweieiigen Zwillingen. Zweieiige teilen nur etwa die Hälfte ihrer Gene, wachsen aber in der Regel in derselben Familie auf. Besonders aufschlussreich sind außerdem Zwillinge, die nach der Geburt getrennt wurden und in verschiedenen Familien aufgewachsen sind. Solche Fälle sind allerdings sehr selten.' },
      { s: 'w', n: 'Moderatorin', t: 'Was haben Sie herausgefunden?' },
      { s: 'm', n: 'Dr. Thomas Albrecht', t: 'Dass Persönlichkeitsmerkmale wie Offenheit oder Geselligkeit etwa zur Hälfte genetisch bedingt sind. Das bedeutet aber nicht, dass unser Charakter festgelegt ist. Gene bestimmen eher einen Spielraum, und innerhalb dieses Spielraums prägen uns unsere Erfahrungen.' },
      { s: 'w', n: 'Moderatorin', t: 'Viele Eltern glauben, dass ihre Erziehung den größten Einfluss hat. Liegen sie damit falsch?' },
      { s: 'm', n: 'Dr. Thomas Albrecht', t: 'Das ist der überraschendste Befund: Der Einfluss der gemeinsamen Familie ist geringer, als man lange dachte. Viel wichtiger sind die Erfahrungen, die jedes Kind für sich allein macht, zum Beispiel mit Freunden, Lehrern oder in einem Hobby. Deshalb können sich selbst Geschwister, die im selben Haus aufwachsen, sehr unterschiedlich entwickeln.' },
      { s: 'w', n: 'Moderatorin', t: 'Kann sich die Persönlichkeit im Erwachsenenalter noch ändern?' },
      { s: 'm', n: 'Dr. Thomas Albrecht', t: 'Ja, durchaus. Die meisten Menschen werden mit dem Alter gewissenhafter und emotional stabiler. Forscher sprechen hier vom Reifungsprinzip. Einschneidende Ereignisse wie der erste Job oder die Geburt eines Kindes können solche Veränderungen beschleunigen.' },
      { s: 'w', n: 'Moderatorin', t: 'Herr Albrecht, vielen Dank für das Gespräch.' }
    ], [
      { q: 'Welche Frage soll die Zwillingsforschung beantworten? ___', a: 'was angeboren und was anerzogen ist', kw: ['angeboren', 'anerzogen', 'vererbt', 'erziehung'] },
      { q: 'Woran liegt es, wenn sich eineiige Zwillinge unterscheiden? ___', a: 'an der Umwelt', kw: ['umwelt'] },
      { q: 'Welche Zwillinge sind besonders aufschlussreich? ___', a: 'getrennt aufgewachsene Zwillinge', kw: ['getrennt', 'verschiedenen familien'] },
      { q: 'Zu welchem Anteil sind Merkmale wie Offenheit genetisch bedingt? ___', a: 'etwa zur Hälfte', kw: ['hälfte', '50', 'fünfzig'] },
      { q: 'Was beeinflusst die Persönlichkeit stärker als die gemeinsame Familie? ___', a: 'die eigenen Erfahrungen jedes Kindes', kw: ['erfahrung', 'freunde'] },
      { q: 'Wie verändern sich die meisten Menschen mit dem Alter? (eine Eigenschaft) ___', a: 'gewissenhafter / emotional stabiler', kw: ['gewissenhaft', 'stabil'] },
      { q: 'Welches Ereignis kann solche Veränderungen beschleunigen? (ein Beispiel) ___', a: 'der erste Job / die Geburt eines Kindes', kw: ['job', 'geburt', 'arbeit', 'beruf'] }
    ])],

    // ------------------------------------------------ Kapitel 9: Die schöne Welt der Künste (Kino, Kino)
    k9: [goethe2([
      { s: 'w', n: 'Moderatorin', t: 'Seit Jahren heißt es, das Kino sei vom Aussterben bedroht. Trotzdem eröffnen in vielen Städten kleine Programmkinos. Eines davon betreibt Jan Lorenz in Leipzig. Herr Lorenz, ist es nicht leichtsinnig, im Zeitalter von Streamingdiensten ein Kino zu eröffnen?' },
      { s: 'm', n: 'Jan Lorenz', t: 'Das haben mir damals alle gesagt, sogar meine Bank. Den Kredit habe ich am Ende nur bekommen, weil ich einen detaillierten Geschäftsplan vorlegen konnte. Inzwischen läuft das Kino seit vier Jahren, und wir schreiben schwarze Zahlen. Ich glaube, Streaming und Kino sind keine Konkurrenten. Wer zu Hause viele Filme sieht, interessiert sich in der Regel auch für das Kino.' },
      { s: 'w', n: 'Moderatorin', t: 'Was unterscheidet Ihr Kino von den großen Multiplexkinos?' },
      { s: 'm', n: 'Jan Lorenz', t: 'Wir zeigen vor allem Filme, die in den großen Häusern kaum laufen: Dokumentarfilme und Produktionen aus Osteuropa, aus Lateinamerika oder aus der arabischen Welt, meistens im Original mit Untertiteln. Entscheidend ist aber nicht nur das Programm. Nach vielen Vorstellungen diskutieren wir mit dem Publikum, manchmal ist sogar die Regisseurin oder der Regisseur zu Gast.' },
      { s: 'w', n: 'Moderatorin', t: 'Wer ist Ihr Publikum?' },
      { s: 'm', n: 'Jan Lorenz', t: 'Am Anfang dachte ich, es würden vor allem ältere Filmliebhaber kommen. Tatsächlich ist über die Hälfte unserer Besucher jünger als dreißig. Viele junge Leute suchen offenbar gerade das gemeinsame Erlebnis, das sie auf dem Sofa nicht haben.' },
      { s: 'w', n: 'Moderatorin', t: 'Wie finanzieren Sie sich?' },
      { s: 'm', n: 'Jan Lorenz', t: 'Die Eintrittskarten allein würden nicht reichen. Ein wichtiger Teil unserer Einnahmen stammt aus unserem Café, das auch tagsüber geöffnet ist. Außerdem erhalten wir für unser Programm jedes Jahr einen Preis der Filmförderung, der mit einem Geldbetrag verbunden ist.' },
      { s: 'w', n: 'Moderatorin', t: 'Was wünschen Sie sich für die Zukunft?' },
      { s: 'm', n: 'Jan Lorenz', t: 'Dass mehr Schulen mit ihren Klassen zu uns kommen. Filme können Jugendlichen andere Lebenswelten nahebringen. Dafür bräuchte es aber feste Angebote im Lehrplan, und davon sind wir leider noch weit entfernt.' }
    ], [
      { q: 'Warum bekam Herr Lorenz den Kredit von der Bank?', o: ['Weil er einen detaillierten Geschäftsplan vorlegen konnte.', 'Weil er bereits ein anderes Kino besaß.', 'Weil die Stadt für ihn gebürgt hatte.'], a: 'Weil er einen detaillierten Geschäftsplan vorlegen konnte.' },
      { q: 'Wie sieht Herr Lorenz das Verhältnis von Streaming und Kino?', o: ['Sie sind keine Konkurrenten.', 'Streaming wird das Kino bald ersetzen.', 'Kinos müssen selbst Streamingdienste anbieten.'], a: 'Sie sind keine Konkurrenten.' },
      { q: 'Was ist neben dem Programm besonders an seinem Kino?', o: ['Nach vielen Vorstellungen wird mit dem Publikum diskutiert.', 'Alle Filme werden auf Deutsch synchronisiert gezeigt.', 'Die Eintrittskarten sind besonders günstig.'], a: 'Nach vielen Vorstellungen wird mit dem Publikum diskutiert.' },
      { q: 'Was hat ihn beim Publikum überrascht?', o: ['Über die Hälfte der Besucher ist jünger als dreißig.', 'Es kommen fast nur ältere Filmliebhaber.', 'Die meisten Besucher kommen aus dem Ausland.'], a: 'Über die Hälfte der Besucher ist jünger als dreißig.' },
      { q: 'Woher stammt ein wichtiger Teil der Einnahmen?', o: ['Aus dem Café des Kinos.', 'Aus der Werbung vor den Filmen.', 'Aus Spenden der Besucher.'], a: 'Aus dem Café des Kinos.' },
      { q: 'Was wünscht sich Herr Lorenz für die Zukunft?', o: ['Dass mehr Schulklassen ins Kino kommen.', 'Dass die Filmförderung erhöht wird.', 'Dass er ein zweites Kino eröffnen kann.'], a: 'Dass mehr Schulklassen ins Kino kommen.' }
    ])],

    // ------------------------------------------------ Kapitel 10: Erinnerungen (Falsche Erinnerungen)
    k10: [telc2([
      { s: 'w', n: 'Dr. Brenner (Dozentin)', t: 'Letzte Woche haben wir über das Gedächtnis gesprochen. Heute geht es um falsche Erinnerungen. Sie sollten dazu einen Text über die Experimente der Psychologin Elizabeth Loftus lesen. Lukas, können Sie kurz zusammenfassen, worum es ging?' },
      { s: 'm', n: 'Lukas', t: 'Ja. Loftus hat Versuchspersonen Berichte aus ihrer Kindheit vorgelegt, die angeblich von Verwandten stammten. Darunter war eine Geschichte, die nie passiert ist, nämlich dass sie als Kinder in einem Einkaufszentrum verloren gegangen seien. Nach einigen Gesprächen glaubte etwa ein Viertel der Teilnehmer, sich an dieses Ereignis zu erinnern. Manche konnten sogar Details beschreiben.' },
      { s: 'w', n: 'Dr. Brenner (Dozentin)', t: 'Genau. Was folgt daraus? Sara?' },
      { s: 'w2', n: 'Sara', t: 'Dass unser Gedächtnis nicht wie eine Videokamera funktioniert. Wir speichern Erlebnisse nicht einfach ab, sondern konstruieren sie bei jedem Erinnern neu. Dabei können Informationen von außen eingebaut werden, ohne dass wir es merken.' },
      { s: 'w', n: 'Dr. Brenner (Dozentin)', t: 'Welche praktischen Folgen hat das?' },
      { s: 'w2', n: 'Sara', t: 'Vor allem für Gerichtsverfahren. Zeugenaussagen gelten oft als besonders überzeugend, obwohl sie fehlerhaft sein können. In den USA wurden zahlreiche Verurteilte später durch DNA-Analysen entlastet, und in vielen dieser Fälle hatten Augenzeugen sie zuvor falsch identifiziert.' },
      { s: 'm', n: 'Lukas', t: 'Ich finde das ehrlich gesagt beunruhigend. Wenn man sich nicht einmal auf seine eigenen Erinnerungen verlassen kann, worauf denn dann?' },
      { s: 'w', n: 'Dr. Brenner (Dozentin)', t: 'Ich verstehe Ihre Sorge, Lukas. Aber man darf das nicht übertreiben. Die meisten unserer Erinnerungen sind im Kern zutreffend. Fehler entstehen vor allem bei Details und wenn wir gezielt beeinflusst werden, zum Beispiel durch suggestive Fragen. Deshalb hat man bei der Polizei inzwischen die Befragungstechniken verändert.' },
      { s: 'w2', n: 'Sara', t: 'Und Tagebücher oder Fotos können helfen, Erinnerungen zu überprüfen.' },
      { s: 'w', n: 'Dr. Brenner (Dozentin)', t: 'Richtig. Für die nächste Sitzung lesen Sie bitte das Kapitel über das Vergessen. Wir werden uns fragen, ob Vergessen nicht auch eine nützliche Funktion hat.' }
    ], 'Diskussion im Seminar', [
      { q: 'In Loftus’ Experiment wurde den Teilnehmern eine erfundene Geschichte vorgelegt.', a: true },
      { q: 'Die meisten Teilnehmer erinnerten sich an das erfundene Ereignis.', a: false },
      { q: 'Laut Sara speichert das Gedächtnis Erlebnisse wie eine Videokamera.', a: false },
      { q: 'Beim Erinnern können unbemerkt Informationen von außen einfließen.', a: true },
      { q: 'In den USA wurden Verurteilte durch DNA-Analysen entlastet.', a: true },
      { q: 'Lukas findet die Forschungsergebnisse beruhigend.', a: false },
      { q: 'Laut der Dozentin sind die meisten Erinnerungen im Kern richtig.', a: true },
      { q: 'Die Polizei verwendet heute noch dieselben Befragungstechniken wie früher.', a: false }
    ])]
  };
})();
