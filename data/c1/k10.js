// Aspekte neu C1 – Kapitel 10: Erinnerungen (M1 Erinnern und Vergessen · M2 Falsche Erinnerungen · M3 Kennen wir uns …? · M4 Vergangene Tage)
// Grammatik: Konditionalsätze ohne wenn, Partizipialgruppen · Modalitätsverben (scheinen, brauchen, haben/sein … zu, drohen, pflegen …)
// Prüfung: C1 Lesen (Ja / Nein / Text sagt dazu nichts), Goethe C1 Schreiben Teil 1 (Forumsbeitrag)
window.UEBUNG = {
  kurs: 'Aspekte neu C1', kapitel: 10, titel: 'Erinnerungen',
  titelAr: 'الذكريات: التذكّر والنسيان، والذكريات الزائفة، وعمى الوجوه، والأيام الماضية – جمل الشرط بدون wenn، وتعبيرات اسم المفعول، وأفعال الكيفية الخاصة (scheinen zu, haben zu …)',
  teile: [
    { teil: 'A', titel: 'Lesen – C1 Detailverstehen', anweisung: 'Lesen Sie den Text. Stimmt die Aussage mit dem Text überein (Ja), widerspricht sie dem Text (Nein), oder sagt der Text dazu nichts?', anweisungAr: 'هل العبارة تتفق مع النص (Ja)، أم تخالفه (Nein)، أم أن النص لا يذكر ذلك؟', typ: 'select', o: ['Ja', 'Nein', 'Text sagt dazu nichts'],
      text: 'Wenn das Gedächtnis uns täuscht\nUnsere Erinnerungen scheinen uns wie ein zuverlässiges Archiv. Doch die Gedächtnisforschung zeigt: Jedes Mal, wenn wir uns an etwas erinnern, wird die Erinnerung neu zusammengesetzt – und dabei kann sie sich verändern. In aufsehenerregenden Experimenten gelang es Psychologen, Versuchspersonen davon zu überzeugen, sie hätten als Kind ein Erlebnis gehabt, das nie stattgefunden hatte. Werden solche Geschichten mehrfach erzählt und mit realen Details ausgeschmückt, so übernehmen viele Menschen sie als eigene Erinnerung. Besonders problematisch ist dies vor Gericht. Zeugenaussagen gelten als wichtiges Beweismittel, sind aber nachweislich fehleranfällig. Suggestive Fragen der Ermittler können die Erinnerung eines Zeugen unbewusst beeinflussen. Genau betrachtet ist das Vergessen und Umdeuten jedoch keine Schwäche, sondern eine Leistung des Gehirns: Es bewahrt das Wesentliche und passt unsere Vergangenheit an das an, was wir heute über uns wissen.',
      items: [
        { q: 'Erinnerungen werden beim Abrufen jedes Mal neu konstruiert.', a: 'Ja' },
        { q: 'In Experimenten konnte niemand von einer falschen Erinnerung überzeugt werden.', a: 'Nein' },
        { q: 'Kinder sind für falsche Erinnerungen anfälliger als Erwachsene.', a: 'Text sagt dazu nichts' },
        { q: 'Die Art, wie Zeugen befragt werden, kann ihre Aussagen verändern.', a: 'Ja' },
        { q: 'Zeugenaussagen sollen vor Gericht künftig nicht mehr zugelassen werden.', a: 'Text sagt dazu nichts' },
        { q: 'Der Autor bewertet das Vergessen ausschließlich negativ.', a: 'Nein' }
      ] },
    { teil: 'B1', titel: 'Wortschatz: Gedächtnis und Erinnerung', anweisung: 'Ergänzen Sie den passenden Ausdruck.', anweisungAr: 'أكمل بالتعبير المناسب.', typ: 'select', o: ['Gedächtnislücke', 'sich einprägen', 'Langzeitgedächtnis', 'nostalgisch', 'Gesichtsblindheit', 'Meilenstein'], items: [
      { q: 'Ich weiß wirklich nicht mehr, wo ich war – ich habe eine ___.', a: 'Gedächtnislücke' },
      { q: 'Mit Eselsbrücken kann man ___ Vokabeln leichter.', a: 'sich einprägen' },
      { q: 'Was wir oft wiederholen, gelangt ins ___.', a: 'Langzeitgedächtnis' },
      { q: 'Wenn ich alte Fotos ansehe, werde ich ganz ___.', a: 'nostalgisch' },
      { q: 'Menschen mit ___ erkennen sogar enge Freunde nicht am Gesicht.', a: 'Gesichtsblindheit' },
      { q: 'Der erste Schultag ist für viele Kinder ein wichtiger ___.', a: 'Meilenstein' }
    ] },
    { teil: 'B2', titel: 'Grammatik: Konditionalsätze ohne wenn', anweisung: 'Welcher Satz hat dieselbe Bedeutung?', anweisungAr: 'جملة الشرط بدون wenn: يبدأ الفعل الجملة، وغالبًا تأتي dann/so في الجملة الرئيسية: Wiederholt man Vokabeln, (so) behält man sie besser.', typ: 'mcq', items: [
      { q: 'Wenn man Vokabeln regelmäßig wiederholt, behält man sie besser.', o: ['Wiederholt man Vokabeln regelmäßig, behält man sie besser.', 'Man wiederholt Vokabeln regelmäßig, behält man sie besser.', 'Wiederholt man Vokabeln regelmäßig, man behält sie besser.'], a: 'Wiederholt man Vokabeln regelmäßig, behält man sie besser.' },
      { q: 'Wenn unser Gedächtnis etwas Neues speichert, dann verknüpft es dies mit Bekanntem.', o: ['Speichert unser Gedächtnis etwas Neues, dann verknüpft es dies mit Bekanntem.', 'Unser Gedächtnis speichert etwas Neues, dann verknüpft es mit Bekanntem.', 'Speichert unser Gedächtnis etwas Neues, dann es verknüpft dies mit Bekanntem.'], a: 'Speichert unser Gedächtnis etwas Neues, dann verknüpft es dies mit Bekanntem.' },
      { q: 'Hätte ich das gewusst, ___ ich früher gekommen.', o: ['wäre', 'hätte', 'würde'], a: 'wäre' },
      { q: 'Sollten Sie Fragen haben, ___ Sie sich gern an uns.', o: ['wenden', 'wendeten', 'zu wenden'], a: 'wenden' }
    ] },
    { teil: 'B3', titel: 'Grammatik: Partizipialgruppen als feste Wendungen', anweisung: 'Welche Wendung passt?', anweisungAr: 'تعبيرات ثابتة باسم المفعول: genau betrachtet، ehrlich gesagt، abgesehen davon، verglichen mit، ausgehend von، offen gestanden.', typ: 'select', items: [
      { q: '___, habe ich das Buch nie zu Ende gelesen. (= wenn ich ehrlich bin)', o: ['Ehrlich gesagt', 'Genau betrachtet', 'Verglichen mit'], a: 'Ehrlich gesagt' },
      { q: '___ ist das Vergessen eine wichtige Leistung des Gehirns. (= wenn man es genau betrachtet)', o: ['Genau betrachtet', 'Abgesehen davon', 'Ausgehend davon'], a: 'Genau betrachtet' },
      { q: '___ mit früher haben Kinder heute weniger Freiheiten.', o: ['Verglichen', 'Abgesehen', 'Gesagt'], a: 'Verglichen' },
      { q: 'Der Film war zu lang. ___ war er aber sehr gut gemacht.', o: ['Abgesehen davon', 'Ehrlich gesagt davon', 'Genau gesagt'], a: 'Abgesehen davon' },
      { q: '___ von dieser Studie entwickelten die Forscher ein neues Lernprogramm.', o: ['Ausgehend', 'Verglichen', 'Gesagt'], a: 'Ausgehend' }
    ] },
    { teil: 'B4', titel: 'Grammatik: Modalitätsverben', anweisung: 'Was bedeutet der Satz?', anweisungAr: 'scheinen zu = يبدو، nicht brauchen zu = لا يلزم، haben … zu = يجب (فاعل)، sein … zu = يجب/يمكن (مجهول)، drohen zu = يوشك أن (سلبي)، pflegen zu = اعتاد أن.', typ: 'mcq', items: [
      { q: 'Er scheint mich nicht zu erkennen.', o: ['Offenbar erkennt er mich nicht.', 'Er muss mich erkennen.', 'Er will mich nicht erkennen.'], a: 'Offenbar erkennt er mich nicht.' },
      { q: 'Sie brauchen den Antrag nicht persönlich abzugeben.', o: ['Sie müssen den Antrag nicht persönlich abgeben.', 'Sie dürfen den Antrag nicht persönlich abgeben.', 'Sie können den Antrag nicht abgeben.'], a: 'Sie müssen den Antrag nicht persönlich abgeben.' },
      { q: 'Die Formulare sind bis Montag zurückzuschicken.', o: ['Die Formulare müssen bis Montag zurückgeschickt werden.', 'Die Formulare wurden bis Montag zurückgeschickt.', 'Die Formulare können nicht zurückgeschickt werden.'], a: 'Die Formulare müssen bis Montag zurückgeschickt werden.' },
      { q: 'Du hast die Hausaufgaben bis morgen zu erledigen.', o: ['Du musst die Hausaufgaben bis morgen erledigen.', 'Du darfst die Hausaufgaben erledigen.', 'Die Hausaufgaben sind schon erledigt.'], a: 'Du musst die Hausaufgaben bis morgen erledigen.' },
      { q: 'Das alte Haus droht einzustürzen.', o: ['Es besteht die Gefahr, dass das alte Haus einstürzt.', 'Das alte Haus ist eingestürzt.', 'Man will das alte Haus abreißen.'], a: 'Es besteht die Gefahr, dass das alte Haus einstürzt.' },
      { q: 'Mein Großvater pflegte nach dem Essen eine Zeitung zu lesen.', o: ['Mein Großvater las gewöhnlich nach dem Essen eine Zeitung.', 'Mein Großvater musste nach dem Essen eine Zeitung lesen.', 'Mein Großvater las nie eine Zeitung.'], a: 'Mein Großvater las gewöhnlich nach dem Essen eine Zeitung.' }
    ] },
    { teil: 'C1', titel: 'Sprechen: Was antworten Sie?', anweisung: 'Lesen Sie, was die Person sagt. Welche Antwort ist am angemessensten?', anweisungAr: 'اختر الرد الأنسب.', typ: 'mcq', items: [
      { q: 'Am Telefon: „Hallo, hier ist Markus! Kennst du mich noch?“ – Sie erinnern sich nicht.', o: ['Entschuldige, mir fällt gerade nicht ein, woher wir uns kennen. Hilf mir doch bitte auf die Sprünge.', 'Nein. Tschüss.', 'Ja klar, Markus! Wer bist du?'], a: 'Entschuldige, mir fällt gerade nicht ein, woher wir uns kennen. Hilf mir doch bitte auf die Sprünge.' },
      { q: '„Was ist deine früheste Kindheitserinnerung?“', o: ['Ich erinnere mich noch genau daran, wie mein Großvater mich auf seinen Schultern über den Markt in Tanta getragen hat.', 'Ich war ein Kind.', 'Das weiß ich nicht, ist lange her.'], a: 'Ich erinnere mich noch genau daran, wie mein Großvater mich auf seinen Schultern über den Markt in Tanta getragen hat.' },
      { q: '„Früher war doch alles besser!“', o: ['Das sagt man oft, aber genau betrachtet neigen wir dazu, die Vergangenheit zu verklären und Negatives zu vergessen.', 'Stimmt, heute ist alles schlecht.', 'Früher gab es kein Internet.'], a: 'Das sagt man oft, aber genau betrachtet neigen wir dazu, die Vergangenheit zu verklären und Negatives zu vergessen.' },
      { q: 'Sie geben einen Tipp, wie man sich Namen besser merken kann.', o: ['Wiederholen Sie den Namen gleich im Gespräch und verknüpfen Sie ihn mit einem Bild – so prägt er sich leichter ein.', 'Schreiben Sie alle Namen auf die Hand.', 'Namen sind nicht wichtig.'], a: 'Wiederholen Sie den Namen gleich im Gespräch und verknüpfen Sie ihn mit einem Bild – so prägt er sich leichter ein.' },
      { q: 'Sie erzählen von einem besonderen Ereignis und möchten Spannung erzeugen.', o: ['Ich hätte nie gedacht, dass dieser ganz gewöhnliche Dienstag mein Leben verändern würde.', 'Es war Dienstag, dann passierte etwas.', 'Na ja, war nichts Besonderes.'], a: 'Ich hätte nie gedacht, dass dieser ganz gewöhnliche Dienstag mein Leben verändern würde.' }
    ] },
    { teil: 'C2', titel: 'Sprechen: Von Erinnerungen erzählen', anweisung: 'Wozu dient der Ausdruck?', anweisungAr: 'ما وظيفة كل تعبير عند الحديث عن الذكريات؟', typ: 'select', o: ['sich erinnern', 'sich nicht erinnern', 'Gefühle beschreiben'], items: [
      { q: '„Ich sehe es noch genau vor mir.“', a: 'sich erinnern' },
      { q: '„Das ist mir völlig entfallen.“', a: 'sich nicht erinnern' },
      { q: '„Wenn ich daran zurückdenke, wird mir ganz warm ums Herz.“', a: 'Gefühle beschreiben' },
      { q: '„Ich kann mich dunkel daran erinnern, dass …“', a: 'sich erinnern' },
      { q: '„Da muss ich passen – keine Ahnung mehr.“', a: 'sich nicht erinnern' },
      { q: '„Der Gedanke daran macht mich noch heute traurig.“', a: 'Gefühle beschreiben' }
    ] },
    { teil: 'D', titel: 'Schreiben – Goethe C1 Schreiben Teil 1 (Forumsbeitrag)', anweisung: 'In einem Wissenschaftsforum wird diskutiert: „Können wir unseren Erinnerungen trauen?“ Schreiben Sie einen Beitrag (ca. 230 Wörter). Erläutern Sie, wie Erinnerungen entstehen und sich verändern, gehen Sie auf die Folgen falscher Erinnerungen ein (z. B. vor Gericht), berichten Sie von einer eigenen Erfahrung und ziehen Sie ein Fazit.', anweisungAr: 'اكتب مشاركة في منتدى (نحو 230 كلمة): هل يمكننا الوثوق بذكرياتنا؟ كيف تنشأ الذكريات وتتغير، وعواقب الذكريات الزائفة، وتجربة شخصية، وخلاصة. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nUnsere Erinnerungen scheinen …, doch … / Genau betrachtet …\nForschungen zufolge … / Wird eine Erinnerung …, so …\nBesonders problematisch ist dies … / Dies hat zur Folge, dass …\nIch erinnere mich noch gut daran, wie … / Ehrlich gesagt …\nAlles in allem lässt sich sagen, dass …',
      items: [
        { q: 'Ihr Forumsbeitrag', min: 210, muster: 'Unsere Erinnerungen scheinen uns ein treues Abbild der Vergangenheit zu liefern, doch die Forschung zeichnet ein anderes Bild. Genau betrachtet sind Erinnerungen keine gespeicherten Filme, sondern Rekonstruktionen. Ruft man eine Erinnerung ab, so wird sie jedes Mal neu zusammengesetzt und dabei mit aktuellen Gefühlen und Informationen vermischt. Forschungen zufolge lassen sich auf diese Weise sogar Erlebnisse „einpflanzen“, die nie stattgefunden haben.\nBesonders problematisch ist dies vor Gericht. Zeugen sind oft fest davon überzeugt, den Täter wiederzuerkennen, und irren sich trotzdem. Werden ihnen suggestive Fragen gestellt, verändert sich ihre Erinnerung unbemerkt. Dies hat zur Folge, dass Unschuldige verurteilt werden können – ein Risiko, das Ermittler und Richter stets zu bedenken haben.\nIch selbst habe eine solche Erfahrung gemacht: Jahrelang war ich überzeugt, bei der Hochzeit meiner Tante in Alexandria dabei gewesen zu sein. Ich sah die Musiker und das Festzelt genau vor mir. Ehrlich gesagt war ich ziemlich überrascht, als meine Mutter mir erzählte, dass ich damals krank zu Hause geblieben war. Offenbar hatte ich die Fotos und Erzählungen so oft gehört, dass sie zu meiner eigenen Erinnerung geworden waren.\nAlles in allem lässt sich sagen, dass wir unseren Erinnerungen nur bedingt trauen sollten. Das bedeutet jedoch nicht, dass sie wertlos sind: Sie verraten zwar nicht immer, was wirklich geschehen ist, aber sehr viel darüber, wer wir sind.' }
    ] }
  ]
};
