// Netzwerk neu A1 – Kapitel 9: Meine Wohnung
window.UEBUNG = {
  kurs: 'Netzwerk neu A1', kapitel: 9, titel: 'Meine Wohnung',
  titelAr: 'الغرف والأثاث والألوان والسكن – in + Akkusativ (Wohin?) و Wechselpräpositionen + Dativ (Wo?)',
  teile: [
    { titel: 'Zimmer', anweisung: 'Wo macht man das? Wählen Sie.', anweisungAr: 'في أيّ غرفة نفعل ذلك؟', typ: 'select', o: ['in der Küche', 'im Bad', 'im Schlafzimmer', 'im Wohnzimmer', 'im Kinderzimmer'], items: [
      { q: 'Man kocht ___.', a: 'in der Küche' },
      { q: 'Man duscht ___.', a: 'im Bad' },
      { q: 'Man schläft ___.', a: 'im Schlafzimmer' },
      { q: 'Man sieht ___ fern und sitzt auf dem Sofa.', a: 'im Wohnzimmer' },
      { q: 'Die Kinder spielen ___.', a: 'im Kinderzimmer' }
    ] },
    { titel: 'Möbel und Geräte', anweisung: 'Was passt nicht? Wählen Sie.', anweisungAr: 'أيّ شيء ليس مكانه في هذه الغرفة؟', typ: 'mcq', items: [
      { q: 'In der Küche:', o: ['das Bett', 'der Herd', 'der Kühlschrank'], a: 'das Bett' },
      { q: 'Im Wohnzimmer:', o: ['die Waschmaschine', 'das Sofa', 'der Sessel'], a: 'die Waschmaschine' },
      { q: 'Im Schlafzimmer:', o: ['der Herd', 'der Schrank', 'das Bett'], a: 'der Herd' },
      { q: 'Im Arbeitszimmer:', o: ['die Dusche', 'der Schreibtisch', 'das Regal'], a: 'die Dusche' }
    ] },
    { titel: 'Farben', anweisung: 'Welche Farbe hat das?', anweisungAr: 'ما لونه؟', typ: 'select', o: ['grün', 'gelb', 'weiß', 'blau', 'rot', 'schwarz'], items: [
      { q: 'Die Banane ist ___.', a: 'gelb' },
      { q: 'Der Schnee ist ___.', a: 'weiß' },
      { q: 'Das Gras ist ___.', a: 'grün' },
      { q: 'Die Tomate ist ___.', a: 'rot' },
      { q: 'Der Himmel ist ___.', a: 'blau' },
      { q: 'Kaffee ohne Milch ist ___.', a: 'schwarz' }
    ] },
    { titel: 'Die Wohnung beschreiben', anweisung: 'Was ist das Gegenteil? Ordnen Sie zu.', anweisungAr: 'صِل كل صفة بضدّها.', typ: 'match', items: [
      { q: '', pairs: [
        ['hell', 'dunkel'],
        ['groß', 'klein'],
        ['teuer', 'billig'],
        ['alt', 'neu'],
        ['zentral', 'weit vom Zentrum']
      ] }
    ] },
    { titel: 'Wohin? in + Akkusativ', anweisung: 'Wohin stellen wir das? Ergänzen Sie.', anweisungAr: 'Wohin? (إلى أين؟) ← in + Akkusativ: in den, ins (in das), in die.', typ: 'select', o: ['in den', 'ins', 'in die'], items: [
      { q: 'Ich stelle den Tisch ___ Garten.', a: 'in den' },
      { q: 'Wir stellen das Sofa ___ Wohnzimmer.', a: 'ins' },
      { q: 'Bring die Lampe bitte ___ Küche.', a: 'in die' },
      { q: 'Er stellt die Waschmaschine ___ Bad.', a: 'ins' },
      { q: 'Wir ziehen ___ Stadt.', a: 'in die' },
      { q: 'Stell den Stuhl bitte ___ Flur.', a: 'in den' }
    ] },
    { titel: 'Wo? Präposition + Dativ', anweisung: 'Wo steht oder liegt das? Ergänzen Sie.', anweisungAr: 'Wo? (أين؟) ← Dativ: auf dem, unter dem, neben der…', typ: 'select', items: [
      { q: 'Die Lampe steht ___ Schreibtisch. (auf)', o: ['auf dem', 'auf den', 'auf der'], a: 'auf dem' },
      { q: 'Die Katze schläft ___ Bett. (unter)', o: ['unter dem', 'unter das', 'unter den'], a: 'unter dem' },
      { q: 'Das Regal steht ___ Tür. (neben)', o: ['neben der', 'neben die', 'neben dem'], a: 'neben der' },
      { q: 'Das Bild hängt ___ Sofa. (über)', o: ['über dem', 'über das', 'über den'], a: 'über dem' },
      { q: 'Der Teppich liegt ___ Tisch und dem Sofa. (zwischen)', o: ['zwischen dem', 'zwischen den', 'zwischen das'], a: 'zwischen dem' },
      { q: 'Der Garten ist ___ Haus. (hinter)', o: ['hinter dem', 'hinter das', 'hinter den'], a: 'hinter dem' }
    ] },
    { titel: 'Wo oder wohin?', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'الحركة (Wohin) ← Akkusativ، والمكان الثابت (Wo) ← Dativ.', typ: 'select', items: [
      { q: 'Ich stelle den Schrank ___ Schlafzimmer.', o: ['ins', 'im'], a: 'ins' },
      { q: 'Der Schrank steht ___ Schlafzimmer.', o: ['im', 'ins'], a: 'im' },
      { q: 'Wir gehen ___ Küche.', o: ['in die', 'in der'], a: 'in die' },
      { q: 'Mama ist ___ Küche.', o: ['in der', 'in die'], a: 'in der' }
    ] },
    { titel: 'Wohnungsanzeige', anweisung: 'Lesen Sie die Anzeige. Richtig oder falsch?', anweisungAr: 'اقرأ إعلان الشقة. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Schöne 3-Zimmer-Wohnung in Hannover-Linden\n75 m², 2. Stock, mit Balkon. Wohnzimmer, Schlafzimmer, Kinderzimmer, Küche und Bad. Die Wohnung ist hell und ruhig. Die Lage ist zentral: Der Bahnhof ist nur fünf Minuten zu Fuß. Keine Haustiere. Miete: 850 Euro plus Nebenkosten. Besichtigung am Samstag von 10 bis 12 Uhr. Tel.: 0511 23 45 67',
      items: [
        { q: 'Die Wohnung hat drei Zimmer.', a: true },
        { q: 'Die Wohnung ist im Erdgeschoss.', a: false },
        { q: 'Die Wohnung hat einen Balkon.', a: true },
        { q: 'Der Bahnhof ist weit weg.', a: false },
        { q: 'Man darf eine Katze haben.', a: false },
        { q: 'Man kann die Wohnung am Samstag besichtigen.', a: true }
      ] },
    { titel: 'Gefällt dir das?', anweisung: 'Was passt? Wählen Sie.', anweisungAr: 'اختر الرد المناسب.', typ: 'mcq', items: [
      { q: 'Wie findest du das Sofa?', o: ['Ich finde es sehr gemütlich.', 'Es steht im Flur.', 'Ich ziehe um.'], a: 'Ich finde es sehr gemütlich.' },
      { q: 'Wie ist die Wohnung?', o: ['Sie ist hell und schön.', 'Sie ist im Schrank.', 'Sie ist blau und schläft.'], a: 'Sie ist hell und schön.' },
      { q: 'Wo stellen wir den Fernseher hin?', o: ['Ins Wohnzimmer, neben das Regal.', 'Er ist schwarz.', 'Im Februar.'], a: 'Ins Wohnzimmer, neben das Regal.' }
    ] },
    { titel: 'Sätze bauen', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة.', typ: 'words', items: [
      { q: 'Aussagesatz (.)', w: ['die Wohnung', 'ist', 'hell', 'und', 'gemütlich'], a: ['die Wohnung ist hell und gemütlich'] },
      { q: 'Aussagesatz (.)', w: ['ich', 'stelle', 'die Pflanze', 'auf den Balkon'], a: ['ich stelle die Pflanze auf den Balkon'] },
      { q: 'W-Frage (?)', w: ['wo', 'steht', 'die Waschmaschine'], a: ['wo steht die Waschmaschine'] }
    ] },
    { titel: 'Schreiben: Meine Wohnung', anweisung: 'Beschreiben Sie Ihre Wohnung: Wie viele Zimmer? Wie ist sie? Was steht im Wohnzimmer? Was gefällt Ihnen? (ca. 35 Wörter)', anweisungAr: 'صِف شقتك: كم غرفة فيها؟ وكيف هي؟ وماذا يوجد في غرفة المعيشة؟ وما الذي يعجبك فيها؟ نحو 35 كلمة.', typ: 'write', items: [
      { q: 'Meine Wohnung …', min: 30, muster: 'Meine Wohnung ist im dritten Stock. Sie hat drei Zimmer, eine Küche, ein Bad und einen Balkon. Das Wohnzimmer ist groß und hell. Im Wohnzimmer stehen ein Sofa, zwei Sessel und ein Fernseher. Der Balkon gefällt mir sehr.' }
    ] }
  ]
};
