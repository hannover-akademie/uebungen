// Aspekte neu B2 – Kapitel 1: Heimat ist … (M1 Neue Heimat · M2 Ein Land – viele Sprachen · M3 Missverständliches · M4 Zu Hause in Deutschland)
// Grammatik: Wortstellung im Satz (TeKaMoLo, Dativ/Akkusativ), Negation · Prüfung: Goethe B2 Lesen Teil 1, Schreiben Teil 1 (Forumsbeitrag)
window.UEBUNG = {
  kurs: 'Aspekte neu B2', kapitel: 1, titel: 'Heimat ist …',
  titelAr: 'الوطن والهجرة واللغات وسوء الفهم – ترتيب عناصر الجملة (TeKaMoLo) والنفي',
  teile: [
    { teil: 'A', titel: 'Lesen – Goethe B2 Lesen Teil 1', anweisung: 'Lesen Sie die Beiträge. Auf welche Person trifft die Aussage zu?', anweisungAr: 'اقرأ المشاركات الأربع: على أيّ شخص تنطبق كل عبارة؟', typ: 'select', o: ['Samir', 'Julia', 'Kenji', 'Ana'],
      text: 'Was bedeutet Heimat für Sie?\nSamir: Als ich vor sechs Jahren nach Köln kam, habe ich jeden Abend mit meiner Familie in Alexandria telefoniert. Heute fühle ich mich in beiden Städten zu Hause. Heimat ist für mich kein Ort, sondern das Gefühl, verstanden zu werden – und das habe ich inzwischen auch hier.\nJulia: Ich bin in einem kleinen Dorf in Bayern aufgewachsen und lebe jetzt in Hamburg. Den Dialekt meiner Großeltern vermisse ich am meisten. Wenn ich ihn im Zug zufällig höre, bekomme ich sofort Heimweh.\nKenji: Mein Vater ist Japaner, meine Mutter Deutsche, und wir sind oft umgezogen. Eine einzige Heimat hatte ich nie. Das finde ich aber gar nicht schlimm: Ich kann mich überall schnell einleben und habe Freunde auf drei Kontinenten.\nAna: Nach dem Studium wollte ich eigentlich nur ein Jahr in Deutschland bleiben. Am Anfang gab es viele Missverständnisse, weil ich die direkte Art der Kollegen für unhöflich hielt. Heute schätze ich gerade diese Ehrlichkeit und möchte nicht mehr zurück.',
      items: [
        { q: 'Diese Person verbindet Heimat mit einer bestimmten Sprache.', a: 'Julia' },
        { q: 'Diese Person hat ihre Meinung über die Deutschen geändert.', a: 'Ana' },
        { q: 'Für diese Person ist Heimat eher ein Gefühl als ein Ort.', a: 'Samir' },
        { q: 'Diese Person hatte nie eine einzige, feste Heimat.', a: 'Kenji' },
        { q: 'Diese Person hatte zunächst einen kürzeren Aufenthalt geplant.', a: 'Ana' },
        { q: 'Diese Person hielt am Anfang engen Kontakt zur Familie in der alten Heimat.', a: 'Samir' }
      ] },
    { teil: 'B1', titel: 'Wortschatz: Heimat, Sprachen, Missverständnisse', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Heimweh', 'sich einleben', 'Mundart', 'Fettnäpfchen', 'Vorurteile', 'Wurzeln'], items: [
      { q: 'Wer neu in einer Stadt ist, braucht Zeit, um ___.', a: 'sich einleben' },
      { q: 'In den ersten Wochen hatte sie oft ___ nach ihrer Familie.', a: 'Heimweh' },
      { q: 'In der Schweiz spricht man im Alltag meist ___, also Dialekt.', a: 'Mundart' },
      { q: 'Ohne es zu wissen, ist er mit seiner Frage ins ___ getreten.', a: 'Fettnäpfchen' },
      { q: 'Wer andere Kulturen kennenlernt, baut ___ ab.', a: 'Vorurteile' },
      { q: 'Obwohl er in Berlin geboren ist, hat er seine ___ in Ägypten.', a: 'Wurzeln' }
    ] },
    { teil: 'B2', titel: 'Grammatik: Wortstellung im Mittelfeld', anweisung: 'Welcher Satz hat die übliche (neutrale) Wortstellung?', anweisungAr: 'الترتيب المعتاد: Temporal – Kausal – Modal – Lokal (TeKaMoLo). والاسم في Dativ قبل الاسم في Akkusativ، لكن ضمير Akkusativ يأتي قبل Dativ.', typ: 'mcq', items: [
      { q: 'TeKaMoLo:', o: ['Ich fahre morgen wegen der Hochzeit mit dem Zug nach Kairo.', 'Ich fahre mit dem Zug morgen nach Kairo wegen der Hochzeit.', 'Ich fahre nach Kairo morgen mit dem Zug wegen der Hochzeit.'], a: 'Ich fahre morgen wegen der Hochzeit mit dem Zug nach Kairo.' },
      { q: 'Dativ und Akkusativ (Nomen):', o: ['Sie zeigt ihrer Freundin die neue Wohnung.', 'Sie zeigt die neue Wohnung ihrer Freundin.', 'Sie zeigt die neue Wohnung ihr Freundin.'], a: 'Sie zeigt ihrer Freundin die neue Wohnung.' },
      { q: 'Pronomen:', o: ['Sie zeigt sie ihrer Freundin.', 'Sie zeigt ihrer Freundin sie.', 'Sie zeigt ihr sie.'], a: 'Sie zeigt sie ihrer Freundin.' },
      { q: 'Zwei Pronomen:', o: ['Er hat es ihm gestern erklärt.', 'Er hat ihm es gestern erklärt.', 'Er hat gestern ihm es erklärt.'], a: 'Er hat es ihm gestern erklärt.' },
      { q: 'TeKaMoLo im Nebensatz:', o: ['…, weil sie seit Jahren aus beruflichen Gründen in Wien lebt.', '…, weil sie in Wien seit Jahren aus beruflichen Gründen lebt.', '…, weil sie lebt seit Jahren aus beruflichen Gründen in Wien.'], a: '…, weil sie seit Jahren aus beruflichen Gründen in Wien lebt.' }
    ] },
    { teil: 'B3', titel: 'Grammatik: Sätze bauen', anweisung: 'Bauen Sie den Satz in der üblichen Reihenfolge.', anweisungAr: 'رتّب الجملة بالترتيب المعتاد.', typ: 'words', items: [
      { q: 'Satz (.)', w: ['wir', 'sind', 'letztes Jahr', 'aus beruflichen Gründen', 'mit der ganzen Familie', 'nach Leipzig', 'gezogen'], a: ['wir sind letztes jahr aus beruflichen gründen mit der ganzen familie nach leipzig gezogen', 'letztes jahr sind wir aus beruflichen gründen mit der ganzen familie nach leipzig gezogen'] },
      { q: 'Satz (.)', w: ['ich', 'habe', 'meinem Kollegen', 'die Situation', 'noch einmal', 'erklärt'], a: ['ich habe meinem kollegen die situation noch einmal erklärt', 'ich habe meinem kollegen noch einmal die situation erklärt', 'ich habe noch einmal meinem kollegen die situation erklärt', 'noch einmal habe ich meinem kollegen die situation erklärt'] }
    ] },
    { teil: 'B4', titel: 'Grammatik: Negation', anweisung: 'Wählen Sie die richtige Negation.', anweisungAr: 'نفي الجملة بـ nicht (قبل الظرف والمكمّل وحرف الجر)، ونفي الاسم بـ kein، وكلمات النفي: nie, niemand, nichts, nirgends, weder … noch. وأيضًا السوابق واللواحق: un-, -los.', typ: 'select', items: [
      { q: 'Ich habe ___ Heimweh mehr.', o: ['kein', 'nicht', 'nie'], a: 'kein' },
      { q: 'Er versteht den Dialekt ___.', o: ['nicht', 'kein', 'niemand'], a: 'nicht' },
      { q: 'In der neuen Stadt kannte sie am Anfang ___.', o: ['niemanden', 'nichts', 'nirgends'], a: 'niemanden' },
      { q: 'Ich habe meinen Schlüssel ___ gefunden.', o: ['nirgends', 'niemand', 'keine'], a: 'nirgends' },
      { q: 'Das Missverständnis war ___ – niemand hatte Schuld. (absichtlich)', o: ['unabsichtlich', 'absichtlich', 'nichtabsichtlich'], a: 'unabsichtlich' },
      { q: 'Die Diskussion war leider völlig ___. (Ergebnis)', o: ['ergebnislos', 'unergebnis', 'nichtergebnisreich'], a: 'ergebnislos' },
      { q: 'Ich spreche … Schweizerdeutsch … Bayerisch.', o: ['weder … noch', 'nicht … sondern', 'kein … oder'], a: 'weder … noch' }
    ] },
    { teil: 'C1', titel: 'Sprechen: Was antworten Sie?', anweisung: 'Lesen Sie, was die Person sagt. Welche Antwort passt am besten?', anweisungAr: 'اقرأ ما يقوله الشخص واختر الرد الأنسب في المحادثة.', typ: 'mcq', items: [
      { q: 'Kollege: „Du kommst doch aus Ägypten. Vermisst du deine Heimat manchmal?“', o: ['Ja, vor allem meine Familie und das Essen. Aber inzwischen fühle ich mich hier auch wohl.', 'Nein, ich habe kein Ägypten.', 'Ja, ich komme aus Ägypten.'], a: 'Ja, vor allem meine Familie und das Essen. Aber inzwischen fühle ich mich hier auch wohl.' },
      { q: 'Nachbarin: „Na, Sie sind ja heute wieder spät dran!“ – Sie haben das als Vorwurf verstanden. Sie möchten nachfragen.', o: ['Wie meinen Sie das genau?', 'Das ist mir egal.', 'Ich bin immer pünktlich, Sie nicht.'], a: 'Wie meinen Sie das genau?' },
      { q: 'Freund: „Ich glaube, du hast mich falsch verstanden. Ich wollte dich nicht kritisieren.“', o: ['Ach so, dann habe ich das wohl in den falschen Hals bekommen.', 'Das stimmt, du kritisierst immer.', 'Ich verstehe kein Deutsch.'], a: 'Ach so, dann habe ich das wohl in den falschen Hals bekommen.' },
      { q: 'Kursleiterin: „Was war für Sie am Anfang in Deutschland am schwierigsten?“', o: ['Am schwierigsten war für mich, dass man für fast alles einen Termin braucht.', 'Ja, es war schwierig.', 'Deutschland liegt in Europa.'], a: 'Am schwierigsten war für mich, dass man für fast alles einen Termin braucht.' },
      { q: 'Ein Bekannter spricht starken Dialekt. Sie haben nichts verstanden.', o: ['Entschuldigung, könnten Sie das bitte noch einmal langsamer sagen?', 'Was?', 'Sprechen Sie bitte richtiges Deutsch!'], a: 'Entschuldigung, könnten Sie das bitte noch einmal langsamer sagen?' },
      { q: 'Kollegin: „Bei euch in Ägypten ist es doch immer heiß, oder?“', o: ['Nicht ganz. Im Winter kann es nachts in der Wüste sogar ziemlich kalt werden.', 'Ja, immer.', 'Bei uns gibt es keine Wüste.'], a: 'Nicht ganz. Im Winter kann es nachts in der Wüste sogar ziemlich kalt werden.' }
    ] },
    { teil: 'C2', titel: 'Sprechen: Redemittel zuordnen', anweisung: 'Wozu passt der Ausdruck?', anweisungAr: 'ما وظيفة كل عبارة في الحديث؟', typ: 'select', o: ['Missverständnis klären', 'über Erfahrungen berichten', 'Vor- und Nachteile nennen'], items: [
      { q: '„Das habe ich anders gemeint.“', a: 'Missverständnis klären' },
      { q: '„Als ich nach Deutschland kam, ist mir aufgefallen, dass …“', a: 'über Erfahrungen berichten' },
      { q: '„Ein großer Vorteil ist, dass …, allerdings …“', a: 'Vor- und Nachteile nennen' },
      { q: '„Da habe ich mich wohl missverständlich ausgedrückt.“', a: 'Missverständnis klären' },
      { q: '„Ich habe die Erfahrung gemacht, dass …“', a: 'über Erfahrungen berichten' },
      { q: '„Dagegen spricht, dass …“', a: 'Vor- und Nachteile nennen' }
    ] },
    { teil: 'D', titel: 'Schreiben – Goethe B2 Schreiben Teil 1 (Forumsbeitrag)', anweisung: 'Sie schreiben einen Beitrag in einem Online-Forum zum Thema „Im Ausland leben – Chance oder Risiko?“ (ca. 150 Wörter). Äußern Sie Ihre Meinung, nennen Sie Vor- und Nachteile, berichten Sie von eigenen Erfahrungen und geben Sie einen Rat.', anweisungAr: 'تدريب على امتحان Goethe B2 (الكتابة، الجزء 1): اكتب مشاركة في منتدى (نحو 150 كلمة) عن العيش في الخارج: رأيك، والمزايا والعيوب، وتجربتك، ونصيحة. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nMeiner Ansicht nach … / Ich vertrete die Meinung, dass …\nEinerseits …, andererseits … / Ein großer Vorteil / Nachteil ist, dass …\nIch habe die Erfahrung gemacht, dass … / Als ich nach … kam, …\nWer im Ausland leben möchte, sollte … / Ich würde jedem raten, …\nAbschließend möchte ich sagen, dass …',
      items: [
        { q: 'Ihr Forumsbeitrag', min: 130, muster: 'Meiner Ansicht nach ist ein Leben im Ausland vor allem eine große Chance. Einerseits lernt man eine neue Sprache und eine andere Kultur kennen, was die eigene Persönlichkeit stärkt. Andererseits darf man die Schwierigkeiten nicht unterschätzen: Man ist weit weg von der Familie, und am Anfang fühlt man sich oft einsam.\nIch habe die Erfahrung gemacht, dass die ersten Monate die schwersten sind. Als ich vor drei Jahren aus Kairo nach Hannover kam, habe ich kaum jemanden verstanden, weil alle so schnell gesprochen haben. Erst als ich in einen Sportverein eingetreten bin, habe ich Freunde gefunden und mich langsam eingelebt.\nWer im Ausland leben möchte, sollte deshalb schon vorher die Sprache lernen und offen auf die Menschen zugehen. Abschließend möchte ich sagen, dass ich meine Entscheidung nie bereut habe, auch wenn ich meine Heimat Ägypten manchmal sehr vermisse.' }
    ] }
  ]
};
