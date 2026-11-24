// Netzwerk neu A2 – Kapitel 3: Immer online?
// Grammatik: Komparativ/Superlativ, Vergleiche mit als/wie, Nebensatz mit dass · Redemittel: Meinung äußern, Filme beschreiben/kommentieren
window.UEBUNG = {
  kurs: 'Netzwerk neu A2', kapitel: 3, titel: 'Immer online?',
  titelAr: 'الإعلام والإنترنت والأفلام – المقارنة والتفضيل، و als/wie، وجمل dass',
  teile: [
    { titel: 'Wortschatz: Medien und Geräte', anweisung: 'Was ist das? Wählen Sie.', anweisungAr: 'ما هذا الجهاز أو الشيء؟', typ: 'mcq', items: [
      { q: 'Damit tippt man Buchstaben am Computer.', o: ['die Tastatur', 'der Lautsprecher', 'das Kabel'], a: 'die Tastatur' },
      { q: 'Darauf sieht man Bilder und Texte.', o: ['der Bildschirm', 'die Maus', 'die Spielekonsole'], a: 'der Bildschirm' },
      { q: 'Damit liest man Bücher digital.', o: ['der E-Book-Reader', 'das Radio', 'der Link'], a: 'der E-Book-Reader' },
      { q: 'Damit hört man Musik laut.', o: ['der Lautsprecher', 'die Tastatur', 'die Webseite'], a: 'der Lautsprecher' },
      { q: 'Damit spielt man Videospiele am Fernseher.', o: ['die Spielekonsole', 'das Tablet-Kabel', 'der Blogbeitrag'], a: 'die Spielekonsole' }
    ] },
    { titel: 'Wortschatz: Aktivitäten mit Medien', anweisung: 'Ergänzen Sie das passende Verb.', anweisungAr: 'أكمل بالفعل المناسب.', typ: 'select', o: ['herunterladen', 'hochladen', 'löschen', 'weiterleiten', 'checken', 'posten'], items: [
      { q: 'Ich möchte die App auf mein Handy ___.', a: 'herunterladen' },
      { q: 'Ich möchte meine Urlaubsfotos ins Internet ___.', a: 'hochladen' },
      { q: 'Die alte Nachricht brauche ich nicht mehr. Ich kann sie ___.', a: 'löschen' },
      { q: 'Kannst du mir die E-Mail von Frau Klein ___?', a: 'weiterleiten' },
      { q: 'Am Morgen muss ich zuerst meine Mails ___.', a: 'checken' },
      { q: 'Sie möchte einen Kommentar in den sozialen Medien ___.', a: 'posten' }
    ] },
    { titel: 'Wortschatz: Filme', anweisung: 'Welcher Film ist das? Ordnen Sie zu.', anweisungAr: 'ما نوع هذا الفيلم؟ صِل بين العمودين.', typ: 'match', items: [
      { q: '', pairs: [
        ['Man lacht sehr viel.', 'die Komödie'],
        ['Ein Kommissar sucht einen Mörder.', 'der Krimi'],
        ['Zwei Menschen verlieben sich.', 'der Liebesfilm'],
        ['Es gibt viele Autos, Kämpfe und Explosionen.', 'der Actionfilm'],
        ['Es gibt Drachen und Zauberer.', 'der Fantasy-Film']
      ] }
    ] },
    { titel: 'Grammatik: Komparativ', anweisung: 'Schreiben Sie den Komparativ.', anweisungAr: 'اكتب صيغة المقارنة (Komparativ). كثير من الصفات القصيرة تأخذ Umlaut: groß ← größer.', typ: 'gap', items: [
      { q: 'Das Tablet ist ___ als der Laptop. (leicht)', a: ['leichter'] },
      { q: 'Mein Handy war ___ als dein Handy. (teuer)', a: ['teurer'] },
      { q: 'Der Bildschirm ist ___ als früher. (groß)', a: ['größer', 'groesser'] },
      { q: 'Ich sehe ___ Komödien als Krimis. (gern)', a: ['lieber'] },
      { q: 'Dieser Film ist ___ als das Buch. (gut)', a: ['besser'] },
      { q: 'Heute gibt es ___ Apps als vor zehn Jahren. (viel)', a: ['mehr'] }
    ] },
    { titel: 'Grammatik: Superlativ', anweisung: 'Schreiben Sie den Superlativ (am …sten).', anweisungAr: 'اكتب صيغة التفضيل: am …sten. الصفات المنتهية بـ d, t, s, ß, z تأخذ -esten.', typ: 'gap', items: [
      { q: 'Von allen Geräten ist das Smartphone am ___. (praktisch)', a: ['praktischsten'] },
      { q: 'Der Laptop ist am ___. (teuer)', a: ['teuersten'] },
      { q: 'Am ___ sehe ich Actionfilme. (gern)', a: ['liebsten'] },
      { q: 'Diese Strecke ist am ___. (kurz)', a: ['kürzesten', 'kuerzesten'] },
      { q: 'Welcher Film hat dir am ___ gefallen? (gut)', a: ['besten'] },
      { q: 'Das Kino ist am ___. (nah)', a: ['nächsten', 'naechsten'] }
    ] },
    { titel: 'Grammatik: als oder wie?', anweisung: 'Ergänzen Sie als oder wie.', anweisungAr: 'بعد الـ Komparativ تأتي als، وبعد (genau)so … تأتي wie.', typ: 'select', o: ['als', 'wie'], items: [
      { q: 'Das Tablet ist praktischer ___ der Laptop.', a: 'als' },
      { q: 'Der Laptop ist genauso praktisch ___ das Tablet.', a: 'wie' },
      { q: 'Der Laptop ist nicht so leicht ___ das Tablet.', a: 'wie' },
      { q: 'Ein E-Book ist billiger ___ ein Buch.', a: 'als' },
      { q: 'Mein Bruder ist so alt ___ dein Bruder.', a: 'wie' },
      { q: 'Im Internet surfe ich mehr ___ früher.', a: 'als' }
    ] },
    { titel: 'Grammatik: Nebensatz mit dass', anweisung: 'Welcher Satz ist richtig?', anweisungAr: 'بعد dass يأتي الفاعل، والفعل المصرَّف في آخر الجملة، والفعل المنفصل لا ينفصل.', typ: 'mcq', items: [
      { q: 'Ich finde es gut, dass …', o: ['man immer Kontakt mit Freunden hat.', 'man hat immer Kontakt mit Freunden.', 'hat man immer Kontakt mit Freunden.'], a: 'man immer Kontakt mit Freunden hat.' },
      { q: 'Ich glaube, dass …', o: ['sie die Fotos schon gepostet hat.', 'sie hat die Fotos schon gepostet.', 'sie die Fotos hat schon gepostet.'], a: 'sie die Fotos schon gepostet hat.' },
      { q: 'Ich möchte, dass …', o: ['du mich heute anrufst.', 'du rufst mich heute an.', 'du mich heute rufst an.'], a: 'du mich heute anrufst.' },
      { q: 'Es ist schlecht, dass …', o: ['viele Kinder zu viel online sind.', 'viele Kinder sind zu viel online.', 'sind viele Kinder zu viel online.'], a: 'viele Kinder zu viel online sind.' }
    ] },
    { titel: 'Grammatik: Sätze mit dass bauen', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة مع dass.', typ: 'words', items: [
      { q: 'Satz (.)', w: ['ich finde,', 'dass', 'das Handy', 'zu teuer', 'ist'], a: ['ich finde, dass das Handy zu teuer ist'] },
      { q: 'Satz (.)', w: ['ich bin froh,', 'dass', 'ich', 'die App', 'heruntergeladen', 'habe'], a: ['ich bin froh, dass ich die App heruntergeladen habe'] },
      { q: 'Satz (.)', w: ['der Film zeigt,', 'dass', 'Freundschaft', 'wichtig', 'ist'], a: ['der Film zeigt, dass Freundschaft wichtig ist'] }
    ] },
    { titel: 'Redemittel: Die eigene Meinung ausdrücken', anweisung: 'Ergänzen Sie die Redemittel.', anweisungAr: 'أكمل عبارات التعبير عن الرأي.', typ: 'select', o: ['glaube', 'finde es', 'bin froh', 'mag es nicht', 'Es ist'], items: [
      { q: 'Ich ___, dass soziale Medien nützlich sind. (Meinung)', o: ['glaube', 'finde es', 'Es ist'], a: 'glaube' },
      { q: 'Ich ___ wichtig, dass Kinder nicht zu lange online sind.', o: ['finde es', 'glaube', 'bin froh'], a: 'finde es' },
      { q: 'Ich ___, dass ich meine Familie per Videochat sehen kann. (Freude)', o: ['bin froh', 'mag es nicht', 'finde es'], a: 'bin froh' },
      { q: 'Ich ___, dass mein Chef mir am Wochenende Mails schreibt. (Ärger)', o: ['mag es nicht', 'bin froh', 'Es ist'], a: 'mag es nicht' },
      { q: '___ schlecht, dass man so viel Zeit am Handy verbringt.', a: 'Es ist' }
    ] },
    { titel: 'Redemittel: Einen Film beschreiben und kommentieren', anweisung: 'Beschreibung, positiver oder negativer Kommentar?', anweisungAr: 'هل الجملة وصف للفيلم، أم تعليق إيجابي، أم تعليق سلبي؟', typ: 'select', o: ['Beschreibung', 'positiv', 'negativ'], items: [
      { q: '„Die Geschichte spielt in Berlin.“', a: 'Beschreibung' },
      { q: '„Der Film hat mir sehr gut gefallen.“', a: 'positiv' },
      { q: '„Die Handlung ist nicht logisch.“', a: 'negativ' },
      { q: '„Die Hauptperson ist ein junger Lehrer.“', a: 'Beschreibung' },
      { q: '„Die Schauspieler haben wirklich toll gespielt.“', a: 'positiv' },
      { q: '„Das Ende hat mir nicht so gut gefallen.“', a: 'negativ' },
      { q: '„Es geht um eine Familie in Kairo.“', a: 'Beschreibung' }
    ] },
    { titel: 'Lesen: Eine Umfrage', anweisung: 'Lesen Sie die Meinungen. Richtig oder falsch?', anweisungAr: 'اقرأ الآراء. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Umfrage: Wie wichtig ist das Smartphone für Sie?\nLena (17): Mein Handy ist immer an. Ich finde es gut, dass ich immer Kontakt mit meinen Freunden habe. Aber meine Eltern meinen, dass ich zu viel chatte.\nHerr Braun (64): Ich lese lieber Zeitung als Nachrichten auf dem Handy. Ich telefoniere nur mit meinem Smartphone. Das ist für mich genug.\nSamira (35): Ich arbeite in einem Start-up. Ich muss jeden Tag Mails checken und Dateien weiterleiten. Am Wochenende mache ich das Handy aus, weil ich auch Ruhe brauche.',
      items: [
        { q: 'Lenas Handy ist oft aus.', a: false },
        { q: 'Lenas Eltern finden, dass sie zu viel chattet.', a: true },
        { q: 'Herr Braun liest Nachrichten lieber auf Papier.', a: true },
        { q: 'Samira braucht das Handy für ihre Arbeit.', a: true },
        { q: 'Samira ist am Wochenende immer online.', a: false }
      ] },
    { titel: 'Schreiben: Ein Filmkommentar', anweisung: 'Schreiben Sie einen Kommentar zu einem Film (60–80 Wörter): Wie heißt der Film? Worum geht es? Wer ist die Hauptperson und wo spielt die Geschichte? Wie hat Ihnen der Film gefallen und warum? Vergleichen Sie ihn mit einem anderen Film (besser als / nicht so … wie).', anweisungAr: 'اكتب تعليقًا على فيلم (60–80 كلمة): ما اسم الفيلم؟ وعمّ يدور؟ ومن البطل، وأين تدور الأحداث؟ وهل أعجبك ولماذا؟ وقارنه بفيلم آخر. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nDer Film heißt … / Es geht um … / Die Geschichte spielt in …\nDie Hauptperson ist …\nDer Film hat mir (nicht) gut gefallen, weil … / Ich finde, dass …\nDie Schauspieler haben toll gespielt. / Die Handlung ist (nicht) logisch.\nDer Film ist spannender als … / nicht so lustig wie …',
      items: [
        { q: 'Der Film heißt …', min: 55, muster: 'Der Film heißt „Das Büro“. Es geht um eine junge Frau aus Kairo. Sie findet eine Stelle in einem Start-up in Berlin. Die Geschichte spielt in einem kleinen Büro, und die Hauptperson muss viele Probleme lösen. Der Film hat mir sehr gut gefallen, weil er lustig und spannend ist. Ich finde, dass die Schauspieler toll gespielt haben. Er ist viel besser als der zweite Teil, denn die Handlung ist logischer. Nur die Filmmusik war nicht so gut wie in anderen Komödien.' }
    ] }
  ]
};
