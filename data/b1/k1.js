// Netzwerk neu B1 – Kapitel 1: Gute Reise!
// Grammatik: Infinitiv mit zu, Nebensatz mit da/weil, Nebensatz mit obwohl · Redemittel: Vorlieben/Abneigungen, Reiseplanung im Reisebüro
// Prüfungstraining: Goethe B1 Lesen Teil 1 · telc B1 Sprachbausteine Teil 1 · Goethe B1 Schreiben Aufgabe 1
window.UEBUNG = {
  kurs: 'Netzwerk neu B1', kapitel: 1, titel: 'Gute Reise!',
  titelAr: 'السفر والإجازات وحجز الرحلات – المصدر مع zu، وجمل da/weil، وجمل obwohl، مع تدريب على امتحانات Goethe و telc',
  teile: [
    { titel: 'Wortschatz: Urlaub und Unterkünfte', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Halbpension', 'Skigebiet', 'Strandpromenade', 'Hütte', 'Aussicht', 'Entfernung'], items: [
      { q: 'Frühstück und Abendessen sind im Preis enthalten. Wir haben ___ gebucht.', a: 'Halbpension' },
      { q: 'Im Winter fahren wir in ein ___ in den Alpen.', a: 'Skigebiet' },
      { q: 'Am Abend spazieren wir gern auf der ___ am Meer.', a: 'Strandpromenade' },
      { q: 'In den Bergen übernachten wir in einer einfachen ___ ohne Strom.', a: 'Hütte' },
      { q: 'Von unserem Balkon haben wir eine herrliche ___ auf den See.', a: 'Aussicht' },
      { q: 'Die ___ zwischen Hamburg und München beträgt fast 800 Kilometer.', a: 'Entfernung' }
    ] },
    { titel: 'Wortschatz: Stimmung im Urlaub', anweisung: 'Wie ist die Stimmung? Wählen Sie.', anweisungAr: 'كيف كانت الحالة المزاجية؟ اختر الصفة المناسبة.', typ: 'select', o: ['begeistert', 'enttäuscht', 'verzweifelt', 'genervt', 'gut gelaunt'], items: [
      { q: 'Wir hatten uns so auf das Hotel gefreut, aber es war viel schlechter als auf den Fotos. Wir waren sehr ___.', a: 'enttäuscht' },
      { q: 'Der Ausblick war fantastisch! Alle waren ___.', a: 'begeistert' },
      { q: 'Wir hatten kein Geld und keinen Pass mehr. Ich war total ___.', a: 'verzweifelt' },
      { q: 'Die Kinder haben die ganze Fahrt gestritten. Ich war ziemlich ___.', a: 'genervt' },
      { q: 'Die Sonne scheint, das Essen ist lecker – heute sind alle ___.', a: 'gut gelaunt' }
    ] },
    { titel: 'Grammatik: Infinitiv mit zu', anweisung: 'Schreiben Sie das Verb mit zu.', anweisungAr: 'اكتب الفعل مع zu. في الأفعال المنفصلة تأتي zu بين البادئة والفعل: auszuschlafen.', typ: 'gap', items: [
      { q: 'Ich habe vergessen, dich ___. (anrufen)', a: ['anzurufen'] },
      { q: 'Es ist langweilig, den ganzen Tag am Strand ___. (liegen)', a: ['zu liegen'] },
      { q: 'Ich habe keine Zeit, ins Reisebüro ___. (gehen)', a: ['zu gehen'] },
      { q: 'Hast du vor, jeden Tag ___? (ausschlafen)', a: ['auszuschlafen'] },
      { q: 'Wir haben beschlossen, in einer Hütte ___. (übernachten)', a: ['zu übernachten', 'zu uebernachten'] },
      { q: 'Es macht mir Spaß, neue Städte ___. (besichtigen)', a: ['zu besichtigen'] },
      { q: 'Vergiss nicht, das Zelt ___! (aufbauen)', a: ['aufzubauen'] }
    ] },
    { titel: 'Grammatik: Infinitiv mit zu – wann?', anweisung: 'Welcher Satz ist richtig?', anweisungAr: 'يأتي المصدر مع zu بعد أفعال مثل versuchen و vorhaben، وبعد صفة + sein/finden، وبعد اسم + haben/machen. لكن لا zu بعد الأفعال المساعدة (Modalverben).', typ: 'mcq', items: [
      { q: 'Im Urlaub …', o: ['will ich mich ausruhen.', 'will ich mich auszuruhen.', 'will ich zu mich ausruhen.'], a: 'will ich mich ausruhen.' },
      { q: 'Ich versuche, …', o: ['jeden Tag Sport zu machen.', 'jeden Tag Sport machen.', 'zu jeden Tag Sport machen.'], a: 'jeden Tag Sport zu machen.' },
      { q: 'Ich finde es anstrengend, …', o: ['lange im Auto zu sitzen.', 'lange im Auto sitzen.', 'lange zu sitzen im Auto.'], a: 'lange im Auto zu sitzen.' },
      { q: 'Wir haben keine Lust, …', o: ['nach einer Unterkunft zu suchen.', 'nach einer Unterkunft suchen.', 'zu nach einer Unterkunft suchen.'], a: 'nach einer Unterkunft zu suchen.' }
    ] },
    { titel: 'Grammatik: da, weil oder obwohl?', anweisung: 'Grund oder Gegengrund? Ergänzen Sie.', anweisungAr: 'weil/da للسبب، و obwohl للتعارض (رغم أنّ). وتأتي da غالبًا في أول الجملة.', typ: 'select', items: [
      { q: 'Melina gefällt Heringsdorf, ___ die Strände so schön sind.', o: ['weil', 'obwohl'], a: 'weil' },
      { q: 'Melina hatte schöne Tage in Heringsdorf, ___ das Wetter schlecht war.', o: ['obwohl', 'weil'], a: 'obwohl' },
      { q: '___ Rothenburg sehr bekannt ist, kommen viele Touristen in die Stadt.', o: ['Da', 'Obwohl'], a: 'Da' },
      { q: 'Viele Touristen kommen nach Rothenburg, ___ die Restaurants teuer sind.', o: ['obwohl', 'da'], a: 'obwohl' },
      { q: 'Wir fahren lieber mit dem Zug, ___ das umweltfreundlicher ist.', o: ['weil', 'obwohl'], a: 'weil' },
      { q: 'Er hatte Heimweh, ___ der Urlaub wunderschön war.', o: ['obwohl', 'da'], a: 'obwohl' }
    ] },
    { titel: 'Grammatik: Sätze verbinden', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة: في الجملة الفرعية يأتي الفعل في آخرها، وإذا بدأت بها الجملة جاء فعل الجملة الرئيسية بعد الفاصلة مباشرة.', typ: 'words', items: [
      { q: 'Satz (.)', w: ['obwohl', 'es', 'geregnet', 'hat,', 'waren', 'wir', 'gut gelaunt'], a: ['obwohl es geregnet hat, waren wir gut gelaunt'] },
      { q: 'Satz (.)', w: ['da', 'das Handy', 'keinen Empfang', 'hatte,', 'konnte', 'ich', 'nicht anrufen'], a: ['da das Handy keinen Empfang hatte, konnte ich nicht anrufen'] },
      { q: 'Satz (.)', w: ['wir buchen früh,', 'weil', 'wir', 'ein günstiges Angebot', 'möchten'], a: ['wir buchen früh, weil wir ein günstiges Angebot möchten'] }
    ] },
    { titel: 'Redemittel: Im Reisebüro', anweisung: 'Wer sagt das: der Kunde oder die Mitarbeiterin des Reisebüros?', anweisungAr: 'من يقول هذه الجملة: الزبون أم موظفة وكالة السفر؟', typ: 'select', o: ['Kunde', 'Reisebüro'], items: [
      { q: '„Was können Sie mir empfehlen?“', a: 'Kunde' },
      { q: '„Wie lange möchten Sie denn fahren?“', a: 'Reisebüro' },
      { q: '„Was ist im Angebot enthalten?“', a: 'Kunde' },
      { q: '„Es gibt da ein tolles Angebot: …“', a: 'Reisebüro' },
      { q: '„Der Preis ist inklusive Vollpension.“', a: 'Reisebüro' },
      { q: '„Gut, dann buchen wir das.“', a: 'Kunde' }
    ] },
    { titel: 'Redemittel: Ein Gespräch im Reisebüro', anweisung: 'Bringen Sie das Gespräch in die richtige Reihenfolge.', anweisungAr: 'رتّب الحوار في وكالة السفر.', typ: 'order', items: [
      { q: 'Reiseplanung', lines: [
        'Guten Tag. Ich möchte im August eine Reise an die Ostsee buchen.',
        'Gern. Wie lange möchten Sie denn fahren?',
        'Eine Woche. Was können Sie mir empfehlen?',
        'Es gibt da ein tolles Angebot: ein Hotel direkt am Strand, inklusive Halbpension.',
        'Das klingt gut. Was kostet die Reise?',
        'Im Moment ist sie sehr günstig: nur 590 Euro pro Person.',
        'Gut, dann buchen wir das.'
      ] }
    ] },
    { titel: 'Prüfungstraining – Goethe B1 Lesen Teil 1', anweisung: 'Lesen Sie den Blogeintrag. Sind die Aussagen richtig oder falsch?', anweisungAr: 'تدريب على امتحان Goethe B1 (القراءة، الجزء 1): اقرأ التدوينة وحدّد إن كانت العبارة صحيحة أم خاطئة.', typ: 'tf',
      text: 'Drei Monate auf der Alm – mein Sommer ohne Internet\nLetzten Sommer habe ich etwas ganz Besonderes gemacht: Ich habe drei Monate auf einer Alm in Österreich gearbeitet. Eigentlich wollte ich nur eine Woche Urlaub in den Bergen machen, aber dann habe ich eine Anzeige gelesen: „Helfer für den Sommer gesucht“. Ich habe mich sofort entschlossen, mich zu bewerben. Die Arbeit war hart: Jeden Morgen um fünf Uhr musste ich die Kühe aus dem Stall holen. Obwohl ich am Anfang sehr müde war, hat mir die Arbeit bald Spaß gemacht. Am schwierigsten war für mich, dass mein Handy fast nie Empfang hatte. In der ersten Woche hatte ich deshalb oft Heimweh. Aber mit der Zeit habe ich die Einsamkeit genossen. Am Abend saßen wir mit den Wanderern vor der Hütte und haben Geschichten erzählt. Nächstes Jahr möchte ich auf jeden Fall wieder hinfahren!',
      items: [
        { q: 'Die Autorin hatte geplant, den ganzen Sommer auf der Alm zu arbeiten.', a: false },
        { q: 'Sie musste jeden Tag sehr früh aufstehen.', a: true },
        { q: 'Die Arbeit hat ihr von Anfang an gefallen.', a: false },
        { q: 'In der ersten Zeit hat sie ihre Familie vermisst.', a: true },
        { q: 'Sie möchte im nächsten Jahr wieder auf der Alm arbeiten.', a: true }
      ] },
    { titel: 'Prüfungstraining – telc B1 Sprachbausteine Teil 1', anweisung: 'Lesen Sie die E-Mail. Welches Wort (a, b oder c) passt in die Lücken 1–6?', anweisungAr: 'تدريب على امتحان telc B1 (Sprachbausteine): أيّ كلمة تناسب كل فراغ في الرسالة؟', typ: 'select',
      text: 'Liebe Jana,\nendlich bin ich wieder zu Hause! Der Urlaub an der Ostsee war wunderbar, __(1)__ das Wetter nicht immer gut war. Ich hatte vor, jeden Tag im Meer __(2)__ schwimmen, aber das Wasser war leider zu kalt. __(3)__ bin ich oft am Strand spazieren gegangen. Unser Hotel lag direkt an __(4)__ Strandpromenade, und das Frühstück war im Preis __(5)__. Ich habe vor, nächstes Jahr __(6)__ August wieder hinzufahren. Hast du Lust mitzukommen?\nLiebe Grüße\nSara',
      items: [
        { q: 'Lücke 1: ___', o: ['obwohl', 'weil', 'deshalb'], a: 'obwohl' },
        { q: 'Lücke 2: ___', o: ['zu', 'um', 'für'], a: 'zu' },
        { q: 'Lücke 3: ___', o: ['Deshalb', 'Obwohl', 'Weil'], a: 'Deshalb' },
        { q: 'Lücke 4: ___', o: ['der', 'die', 'den'], a: 'der' },
        { q: 'Lücke 5: ___', o: ['enthalten', 'gehalten', 'erhalten'], a: 'enthalten' },
        { q: 'Lücke 6: ___', o: ['im', 'am', 'um'], a: 'im' }
      ] },
    { titel: 'Prüfungstraining – Goethe B1 Schreiben Aufgabe 1', anweisung: 'Sie haben mit Freunden Urlaub gemacht. Eine Freundin konnte nicht mitkommen. Schreiben Sie ihr eine E-Mail (ca. 80 Wörter): Beschreiben Sie: Wo waren Sie und was haben Sie gemacht? Begründen Sie: Was hat Ihnen am besten gefallen und warum? Machen Sie einen Vorschlag für eine gemeinsame Reise. Schreiben Sie zu allen drei Punkten. Denken Sie an Anrede, Einleitung, Reihenfolge der Punkte und Gruß.', anweisungAr: 'تدريب على امتحان Goethe B1 (الكتابة، المهمة 1): رسالة غير رسمية نحو 80 كلمة تتناول النقاط الثلاث كلها. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nLiebe … / Lieber …, wie geht es dir? Schade, dass du nicht dabei warst.\nWir waren … in … / Wir haben … besichtigt / gemacht.\nAm besten hat mir … gefallen, weil … / Obwohl …, …\nHast du Lust, …? / Ich habe vor, … zu … / Wie wäre es mit …?\nLiebe Grüße / Bis bald',
      items: [
        { q: 'Liebe …', min: 70, muster: 'Liebe Hanna,\nwie geht es dir? Schade, dass du nicht mitkommen konntest! Wir waren eine Woche in Salzburg und haben dort in einer kleinen Pension gewohnt. Jeden Tag haben wir die Stadt besichtigt oder sind in den Bergen gewandert. Am besten hat mir die Schifffahrt auf dem See gefallen, weil die Aussicht auf die Berge herrlich war. Obwohl es zweimal geregnet hat, waren wir immer gut gelaunt. Hast du Lust, im Herbst mit mir nach Wien zu fahren? Ich habe vor, rechtzeitig ein günstiges Angebot zu buchen.\nLiebe Grüße\nMona' }
    ] }
  ]
};
