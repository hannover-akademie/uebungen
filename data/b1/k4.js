// Netzwerk neu B1 – Kapitel 4: Arbeitswelt
// Grammatik: Konjunktiv II (Modalverben, sein, haben, würde), irreale Bedingungssätze, Pronomen und Pronominaladverbien, Verben mit Präposition + Nebensatz/Infinitiv
// Redemittel: sich entschuldigen, auf Entschuldigungen reagieren, am Telefon nach Informationen fragen
// Prüfungstraining: telc B1 Lesen Teil 1 (Überschriften) · Goethe B1 Schreiben Aufgabe 3 (formelle Nachricht)
window.UEBUNG = {
  kurs: 'Netzwerk neu B1', kapitel: 4, titel: 'Arbeitswelt',
  titelAr: 'عالم العمل والبحث عن وظيفة – صيغة الشرط غير الواقعي (Konjunktiv II)، وظروف da(r)+حرف جر، والأفعال مع حروف الجر',
  teile: [
    { titel: 'Wortschatz: Bewerbung', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة من مفردات التقدّم للوظائف.', typ: 'select', o: ['Bewerbungsunterlagen', 'Lebenslauf', 'Voraussetzung', 'Inserat', 'Eindruck', 'Stundenlohn'], items: [
      { q: 'Ich habe Ihr ___ in der Zeitung gelesen.', a: 'Inserat' },
      { q: 'Bitte schicken Sie uns Ihre vollständigen ___.', a: 'Bewerbungsunterlagen' },
      { q: 'Im ___ stehen meine Ausbildung und meine Berufserfahrung.', a: 'Lebenslauf' },
      { q: 'Ein Führerschein ist eine wichtige ___ für diese Stelle.', a: 'Voraussetzung' },
      { q: 'Im Vorstellungsgespräch möchte man einen guten ___ machen.', a: 'Eindruck' },
      { q: 'Der ___ beträgt 15 Euro.', a: 'Stundenlohn' }
    ] },
    { titel: 'Wortschatz: Eigenschaften', anweisung: 'Positiv oder negativ?', anweisungAr: 'هل الصفة إيجابية أم سلبية في بيئة العمل؟', typ: 'select', o: ['positiv', 'negativ'], items: [
      { q: 'kommunikativ', a: 'positiv' },
      { q: 'zornig', a: 'negativ' },
      { q: 'qualifiziert', a: 'positiv' },
      { q: 'unfreundlich', a: 'negativ' },
      { q: 'zuverlässig und exakt', a: 'positiv' },
      { q: 'aggressiv', a: 'negativ' }
    ] },
    { titel: 'Grammatik: Konjunktiv II – Formen', anweisung: 'Schreiben Sie die Form im Konjunktiv II.', anweisungAr: 'صيغة Konjunktiv II: könnte, müsste, dürfte, sollte, wollte، و wäre و hätte، ولسائر الأفعال würde + مصدر.', typ: 'gap', items: [
      { q: 'Ich ___ gern im Homeoffice arbeiten. (können)', a: ['könnte', 'koennte'] },
      { q: 'Wenn ich mehr Zeit ___, würde ich eine Fortbildung machen. (haben)', a: ['hätte', 'haette'] },
      { q: 'Es ___ toll, wenn wir mehr Urlaub hätten. (sein)', a: ['wäre', 'waere'] },
      { q: 'Du ___ eigentlich schon im Büro sein. (müssen)', a: ['müsstest', 'muesstest'] },
      { q: '___ ich Sie kurz stören? (dürfen)', a: ['Dürfte', 'Duerfte'] },
      { q: 'Ich ___ noch einen Kaffee trinken, wenn ich Zeit hätte. (werden)', a: ['würde', 'wuerde'] }
    ] },
    { titel: 'Grammatik: Irreale Bedingungssätze', anweisung: 'Welcher Satz ist richtig?', anweisungAr: 'الشرط غير الواقعي: Wenn + Konjunktiv II (الفعل في آخر الجملة)، ثم Konjunktiv II في الجملة الرئيسية.', typ: 'mcq', items: [
      { q: 'Boris ist sehr gestresst. – Wenn Boris nicht so gestresst wäre, …', o: ['wäre die Pause lustiger.', 'ist die Pause lustiger.', 'die Pause lustiger wäre.'], a: 'wäre die Pause lustiger.' },
      { q: 'Ich muss lange arbeiten. – Wenn ich nicht so lange arbeiten müsste, …', o: ['würde ich gern mitkommen.', 'ich würde gern mitkommen.', 'komme ich gern mit.'], a: 'würde ich gern mitkommen.' },
      { q: 'Ich habe keinen Führerschein. – Wenn ich einen Führerschein …', o: ['hätte, könnte ich als Fahrer arbeiten.', 'habe, könnte ich als Fahrer arbeiten.', 'hätte, ich könnte als Fahrer arbeiten.'], a: 'hätte, könnte ich als Fahrer arbeiten.' }
    ] },
    { titel: 'Grammatik: Wenn-Sätze bauen', anweisung: 'Bauen Sie den irrealen Bedingungssatz.', anweisungAr: 'رتّب جملة الشرط غير الواقعي.', typ: 'words', items: [
      { q: 'Satz (.)', w: ['wenn', 'ich', 'Chef', 'wäre,', 'würde', 'ich', 'mehr Pausen', 'machen'], a: ['wenn ich Chef wäre, würde ich mehr Pausen machen'] },
      { q: 'Satz (.)', w: ['ich', 'würde', 'mich', 'bewerben,', 'wenn', 'ich', 'mehr Erfahrung', 'hätte'], a: ['ich würde mich bewerben, wenn ich mehr Erfahrung hätte'] }
    ] },
    { titel: 'Grammatik: Pronomen oder Pronominaladverb?', anweisung: 'Ergänzen Sie.', anweisungAr: 'للأشخاص: حرف الجر + ضمير (mit ihm). للأشياء والأحداث: da(r) + حرف الجر (daran, darauf).', typ: 'select', items: [
      { q: 'Rufen Sie den Personalchef an. ___ können Sie sprechen. (mit + der Personalchef)', o: ['Mit ihm', 'Damit', 'Mit es'], a: 'Mit ihm' },
      { q: 'Es gibt ein Bewerbungstraining. ___ kann jeder teilnehmen. (an + das Training)', o: ['Daran', 'An ihm', 'Woran'], a: 'Daran' },
      { q: 'Die Kollegin ist sehr nett. Ich verstehe mich gut ___.', o: ['mit ihr', 'damit', 'darüber'], a: 'mit ihr' },
      { q: 'Die neue Stelle? Ich freue mich sehr ___.', o: ['darauf', 'auf sie', 'worauf'], a: 'darauf' },
      { q: 'Unser Projekt ist schwierig. Wir sprechen morgen ___.', o: ['darüber', 'über es', 'über ihm'], a: 'darüber' }
    ] },
    { titel: 'Grammatik: Verben mit Präposition und Nebensatz', anweisung: 'Ergänzen Sie das Pronominaladverb.', anweisungAr: 'قبل جملة dass أو المصدر مع zu نضع ظرف da(r)+حرف الجر: Er wartet darauf, dass …', typ: 'select', o: ['darauf', 'daran', 'darüber', 'davon', 'dafür'], items: [
      { q: 'Er wartet ___, dass er eine Antwort bekommt. (warten auf)', a: 'darauf' },
      { q: 'Sie denkt ___, sich bei der Firma zu bewerben. (denken an)', a: 'daran' },
      { q: 'Ich freue mich ___, dass ich die Stelle bekommen habe. (sich freuen über)', a: 'darüber' },
      { q: 'Er träumt ___, eine eigene Firma zu haben. (träumen von)', a: 'davon' },
      { q: 'Wir interessieren uns ___, im Ausland zu arbeiten. (sich interessieren für)', a: 'dafür' }
    ] },
    { titel: 'Redemittel: Sich entschuldigen und reagieren', anweisung: 'Entschuldigung oder Reaktion?', anweisungAr: 'هل الجملة اعتذار أم ردّ على اعتذار؟', typ: 'select', o: ['sich entschuldigen', 'reagieren'], items: [
      { q: '„Das war keine Absicht.“', a: 'sich entschuldigen' },
      { q: '„Das kann doch jedem mal passieren.“', a: 'reagieren' },
      { q: '„Das ist mir wirklich peinlich.“', a: 'sich entschuldigen' },
      { q: '„Schon gut. Kein Problem.“', a: 'reagieren' },
      { q: '„Verzeihen Sie bitte. Ich habe Sie verwechselt.“', a: 'sich entschuldigen' },
      { q: '„Das ist doch nicht so schlimm.“', a: 'reagieren' }
    ] },
    { titel: 'Redemittel: Am Telefon nach einer Stelle fragen', anweisung: 'Bringen Sie das Telefongespräch in die richtige Reihenfolge.', anweisungAr: 'رتّب المكالمة الهاتفية للاستفسار عن وظيفة.', typ: 'order', items: [
      { q: 'Anruf wegen eines Inserats', lines: [
        'Guten Tag, mein Name ist Saleh. Ich rufe wegen Ihrer Anzeige an.',
        'Guten Tag, Herr Saleh. Was kann ich für Sie tun?',
        'Ich interessiere mich für die Stelle als Lagerarbeiter. Ist das noch aktuell?',
        'Ja, die Stelle ist noch nicht besetzt. Haben Sie schon in diesem Bereich gearbeitet?',
        'Ja, drei Jahre in Kairo. Ich hätte da noch eine Frage zu den Arbeitszeiten.',
        'Sie arbeiten im Schichtdienst. Am besten vereinbaren wir einen Termin. Passt Ihnen Donnerstag?',
        'Ja, Donnerstag passt mir sehr gut. Vielen Dank!'
      ] }
    ] },
    { titel: 'Prüfungstraining – telc B1 Lesen Teil 1', anweisung: 'Lesen Sie die Texte 1–4. Welche Überschrift passt zu welchem Text?', anweisungAr: 'تدريب على امتحان telc B1 (القراءة، الجزء 1): اختر العنوان المناسب لكل نص. بعض العناوين لا تناسب أيّ نص.', typ: 'select',
      text: '1  Viele Firmen suchen dringend Fachkräfte. Besonders in der Pflege, im Handwerk und in der IT gibt es mehr freie Stellen als Bewerber. Experten sagen, dass sich die Situation in den nächsten Jahren nicht ändern wird.\n2  Im Vorstellungsgespräch zählt nicht nur, was man sagt. Wer pünktlich ist, freundlich lächelt und dem Gesprächspartner in die Augen sieht, macht einen guten ersten Eindruck.\n3  Immer mehr Menschen arbeiten von zu Hause aus. Sie sparen den Weg zur Arbeit, haben aber oft Probleme, Beruf und Freizeit zu trennen.\n4  Die Volkshochschule bietet ab März ein kostenloses Bewerbungstraining an. Die Teilnehmer üben Vorstellungsgespräche und schreiben ihren Lebenslauf. Anmeldung bis zum 15. Februar.',
      o: ['Kostenloser Kurs für Jobsuchende', 'Der erste Eindruck ist wichtig', 'Arbeit im Homeoffice: Vor- und Nachteile', 'Fachkräfte gesucht', 'Mehr Geld für Pflegekräfte', 'Neue Regeln für den Urlaub'],
      items: [
        { q: 'Text 1: ___', a: 'Fachkräfte gesucht' },
        { q: 'Text 2: ___', a: 'Der erste Eindruck ist wichtig' },
        { q: 'Text 3: ___', a: 'Arbeit im Homeoffice: Vor- und Nachteile' },
        { q: 'Text 4: ___', a: 'Kostenloser Kurs für Jobsuchende' }
      ] },
    { titel: 'Prüfungstraining – Goethe B1 Schreiben Aufgabe 3', anweisung: 'Ihr Chef, Herr Weber, hat Sie für morgen um 9 Uhr zu einer Besprechung eingeladen. Sie können nicht kommen. Schreiben Sie Herrn Weber eine E-Mail (ca. 40 Wörter). Entschuldigen Sie sich höflich, nennen Sie den Grund und machen Sie einen Vorschlag. Vergessen Sie nicht Anrede und Gruß.', anweisungAr: 'تدريب على امتحان Goethe B1 (الكتابة، المهمة 3): رسالة رسمية قصيرة نحو 40 كلمة: اعتذر بأدب، واذكر السبب، واقترح بديلًا. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nSehr geehrter Herr …, / Sehr geehrte Frau …,\nes tut mir sehr leid, aber … / Leider kann ich …, weil …\nKönnten wir … / Wäre es möglich, dass …?\nVielen Dank für Ihr Verständnis.\nMit freundlichen Grüßen',
      items: [
        { q: 'Sehr geehrter Herr Weber, …', min: 35, muster: 'Sehr geehrter Herr Weber,\nes tut mir sehr leid, aber ich kann morgen nicht an der Besprechung teilnehmen. Mein Sohn ist krank, und ich muss mit ihm zum Arzt gehen. Wäre es möglich, die Besprechung auf Donnerstag zu verschieben?\nVielen Dank für Ihr Verständnis.\nMit freundlichen Grüßen\nNadia Mansour' }
    ] }
  ]
};
