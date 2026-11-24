// Aspekte neu B2 – Kapitel 5: Wer Wissen schafft, macht Wissenschaft (M1 Wissenschaft für Kinder · M2 Wer einmal lügt … · M3 Ist da jemand? · M4 Gute Nacht)
// Grammatik: Passiv und Passiversatzformen · Indefinitpronomen · Prüfung: Goethe B2 Lesen Teil 3 (Lückentext mit Sätzen), Schreiben Teil 1 (Forumsbeitrag)
window.UEBUNG = {
  kurs: 'Aspekte neu B2', kapitel: 5, titel: 'Wer Wissen schafft, macht Wissenschaft',
  titelAr: 'العلم: علوم للأطفال، والكذب، والحياة في الفضاء، والنوم – المبني للمجهول وبدائله، وضمائر غير المعيّن',
  teile: [
    { teil: 'A', titel: 'Lesen – Goethe B2 Lesen Teil 3', anweisung: 'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Ein Satz passt nicht.', anweisungAr: 'اختر الجملة المناسبة لكل فراغ في النص. جملة واحدة لا تُستخدم.', typ: 'select', o: ['a) Wer zu wenig schläft, isst häufig mehr.', 'b) Jugendliche brauchen deshalb sogar etwas mehr Schlaf als Erwachsene.', 'c) Das Licht von Bildschirmen hemmt nämlich die Bildung des Schlafhormons.', 'd) Doch was passiert eigentlich, während wir schlafen?', 'e) Viele Schlafforscher arbeiten deshalb nachts.'],
      text: 'Warum wir schlafen\nWir verbringen etwa ein Drittel unseres Lebens im Bett. __(1)__ Lange dachte man, das Gehirn ruhe sich in der Nacht einfach aus. Heute weiß man, dass es im Schlaf sehr aktiv ist: Erlebnisse des Tages werden sortiert, und Gelerntes wird im Gedächtnis gespeichert. Auch der Körper profitiert. Schlafmangel kann zum Beispiel das Gewicht beeinflussen. __(2)__ Besonders wichtig ist Schlaf in der Pubertät, weil sich das Gehirn in dieser Zeit stark verändert. __(3)__ Trotzdem liegen viele von ihnen bis spät in die Nacht mit dem Handy im Bett. __(4)__ Experten empfehlen daher, eine Stunde vor dem Schlafengehen auf Smartphone und Tablet zu verzichten.',
      items: [
        { q: 'Lücke 1: ___', a: 'd) Doch was passiert eigentlich, während wir schlafen?' },
        { q: 'Lücke 2: ___', a: 'a) Wer zu wenig schläft, isst häufig mehr.' },
        { q: 'Lücke 3: ___', a: 'b) Jugendliche brauchen deshalb sogar etwas mehr Schlaf als Erwachsene.' },
        { q: 'Lücke 4: ___', a: 'c) Das Licht von Bildschirmen hemmt nämlich die Bildung des Schlafhormons.' }
      ] },
    { teil: 'B1', titel: 'Wortschatz: Wissenschaft', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Experiment', 'erforschen', 'Ergebnisse', 'Lüge', 'Weltall', 'Schlafmangel'], items: [
      { q: 'In der Kinderuni dürfen die Kinder selbst ein ___ durchführen.', a: 'Experiment' },
      { q: 'Die Forscher wollen ___, warum manche Menschen besser schlafen.', a: 'erforschen' },
      { q: 'Die ___ der Studie wurden in einer Fachzeitschrift veröffentlicht.', a: 'Ergebnisse' },
      { q: 'Eine kleine ___ aus Höflichkeit finden viele Menschen in Ordnung.', a: 'Lüge' },
      { q: 'Gibt es im ___ noch andere Planeten mit Leben?', a: 'Weltall' },
      { q: 'Dauerhafter ___ macht krank und unkonzentriert.', a: 'Schlafmangel' }
    ] },
    { teil: 'B2', titel: 'Grammatik: Passiv', anweisung: 'Wählen Sie die richtige Passivform.', anweisungAr: 'المبني للمجهول: werden + Partizip II، والماضي wurde، والتام ist … worden، ومع فعل كيفية: muss … werden. والفاعل بـ von (شخص) أو durch (وسيلة).', typ: 'select', items: [
      { q: 'Die Studie ___ 2020 an der Universität Heidelberg durchgeführt.', o: ['wurde', 'wird worden', 'ist'], a: 'wurde' },
      { q: 'Inzwischen sind über 5000 Planeten außerhalb unseres Sonnensystems entdeckt ___.', o: ['worden', 'geworden', 'werden'], a: 'worden' },
      { q: 'Die Ergebnisse müssen noch genau überprüft ___.', o: ['werden', 'worden', 'wurden'], a: 'werden' },
      { q: 'Das Experiment wurde ___ einer jungen Forscherin geleitet.', o: ['von', 'durch', 'mit'], a: 'von' },
      { q: 'Viele Unfälle werden ___ Müdigkeit verursacht.', o: ['durch', 'von', 'aus'], a: 'durch' }
    ] },
    { teil: 'B3', titel: 'Grammatik: Passiversatzformen', anweisung: 'Welcher Satz hat dieselbe Bedeutung?', anweisungAr: 'بدائل المبني للمجهول: sein + zu + Infinitiv (يجب/يمكن)، و sich lassen + Infinitiv (يمكن)، والصفات بـ -bar و -lich.', typ: 'mcq', items: [
      { q: 'Das Problem kann gelöst werden.', o: ['Das Problem ist lösbar.', 'Das Problem ist gelöst.', 'Das Problem löst.'], a: 'Das Problem ist lösbar.' },
      { q: 'Die Regeln müssen beachtet werden.', o: ['Die Regeln sind zu beachten.', 'Die Regeln lassen sich beachten.', 'Die Regeln sind beachtbar.'], a: 'Die Regeln sind zu beachten.' },
      { q: 'Lügen kann man oft an der Körpersprache erkennen.', o: ['Lügen lassen sich oft an der Körpersprache erkennen.', 'Lügen sind oft an der Körpersprache erkannt.', 'Lügen erkennen sich oft an der Körpersprache.'], a: 'Lügen lassen sich oft an der Körpersprache erkennen.' },
      { q: 'Diese Handschrift kann man kaum lesen.', o: ['Diese Handschrift ist kaum leserlich.', 'Diese Handschrift wird kaum gelesen.', 'Diese Handschrift ist kaum zu gelesen.'], a: 'Diese Handschrift ist kaum leserlich.' },
      { q: 'Der Antrag muss bis Freitag eingereicht werden.', o: ['Der Antrag ist bis Freitag einzureichen.', 'Der Antrag lässt sich bis Freitag einreichen.', 'Der Antrag ist bis Freitag eingereicht.'], a: 'Der Antrag ist bis Freitag einzureichen.' }
    ] },
    { teil: 'B4', titel: 'Grammatik: Indefinitpronomen', anweisung: 'Ergänzen Sie das passende Pronomen.', anweisungAr: 'ضمائر غير المعيّن: jemand/niemand (شخص)، etwas/nichts (شيء)، einer/keiner، manche، alle، irgendwer.', typ: 'select', items: [
      { q: 'Hat ___ eine Idee, wie man das Experiment erklären kann?', o: ['jemand', 'etwas', 'keiner'], a: 'jemand' },
      { q: 'Ich habe ___ gesehen – der Raum war leer.', o: ['niemanden', 'nichts von', 'jemanden'], a: 'niemanden' },
      { q: 'Von den Forschern glaubt ___ an Außerirdische. (nicht ein einziger)', o: ['keiner', 'niemand von', 'nichts'], a: 'keiner' },
      { q: 'Ist dir beim Experiment ___ aufgefallen?', o: ['etwas', 'jemand', 'einer'], a: 'etwas' },
      { q: '___ Menschen schlafen nur fünf Stunden und fühlen sich trotzdem fit.', o: ['Manche', 'Jemand', 'Etwas'], a: 'Manche' },
      { q: 'Ich brauche einen Kugelschreiber. Hast du ___?', o: ['einen', 'einer', 'eins'], a: 'einen' }
    ] },
    { teil: 'C1', titel: 'Sprechen: Was antworten Sie?', anweisung: 'Lesen Sie, was die Person sagt. Welche Antwort passt am besten?', anweisungAr: 'اختر الرد الأنسب.', typ: 'mcq', items: [
      { q: '„Glaubst du, dass es im Weltall noch anderes Leben gibt?“', o: ['Ich halte es zumindest für wahrscheinlich, weil das Universum so unglaublich groß ist.', 'Ja.', 'Das Weltall ist sehr groß.'], a: 'Ich halte es zumindest für wahrscheinlich, weil das Universum so unglaublich groß ist.' },
      { q: '„Findest du Notlügen in Ordnung?“', o: ['Das kommt darauf an. Wenn man jemanden damit nicht verletzt, finde ich sie manchmal sogar nötig.', 'Ich lüge nie, außer manchmal.', 'Was ist eine Notlüge? Egal.'], a: 'Das kommt darauf an. Wenn man jemanden damit nicht verletzt, finde ich sie manchmal sogar nötig.' },
      { q: 'Sie präsentieren eine Studie. Wie beginnen Sie?', o: ['In meinem Vortrag möchte ich Ihnen die Ergebnisse einer aktuellen Studie zum Thema Schlaf vorstellen.', 'Also, äh, Schlaf.', 'Hier ist eine Studie.'], a: 'In meinem Vortrag möchte ich Ihnen die Ergebnisse einer aktuellen Studie zum Thema Schlaf vorstellen.' },
      { q: 'Jemand behauptet: „Man braucht nur vier Stunden Schlaf.“ Sie zweifeln.', o: ['Das bezweifle ich. Die meisten Studien empfehlen sieben bis neun Stunden.', 'Toll, dann schlafe ich auch nur vier.', 'Das weiß ich nicht.'], a: 'Das bezweifle ich. Die meisten Studien empfehlen sieben bis neun Stunden.' },
      { q: 'Nach Ihrem Vortrag fragt jemand etwas, das Sie nicht wissen.', o: ['Gute Frage. Das kann ich leider nicht genau beantworten, aber ich schaue gern nach.', 'Diese Frage ist dumm.', 'Das ist nicht mein Thema.'], a: 'Gute Frage. Das kann ich leider nicht genau beantworten, aber ich schaue gern nach.' }
    ] },
    { teil: 'C2', titel: 'Sprechen: Einen Vortrag halten', anweisung: 'In welchen Teil des Vortrags gehört der Satz?', anweisungAr: 'في أي جزء من العرض التقديمي تُقال كل جملة؟', typ: 'select', o: ['Einleitung', 'Hauptteil', 'Schluss'], items: [
      { q: '„Mein Thema lautet heute …“', a: 'Einleitung' },
      { q: '„Ein weiterer wichtiger Punkt ist …“', a: 'Hauptteil' },
      { q: '„Ich danke Ihnen für Ihre Aufmerksamkeit.“', a: 'Schluss' },
      { q: '„Zunächst gebe ich Ihnen einen kurzen Überblick über …“', a: 'Einleitung' },
      { q: '„Wie Sie auf dieser Folie sehen, …“', a: 'Hauptteil' },
      { q: '„Abschließend möchte ich noch einmal betonen, dass …“', a: 'Schluss' }
    ] },
    { teil: 'D', titel: 'Schreiben – Goethe B2 Schreiben Teil 1 (Forumsbeitrag)', anweisung: 'Im Forum einer Wissenschaftszeitschrift wird diskutiert: „Ist Lügen manchmal erlaubt?“ Schreiben Sie Ihre Meinung (ca. 150 Wörter). Gehen Sie auf folgende Punkte ein: Wann lügen Menschen? Welche Folgen können Lügen haben? Gibt es Situationen, in denen eine Lüge besser ist als die Wahrheit? Wie ist das in Ihrer Kultur?', anweisungAr: 'اكتب رأيك في منتدى (نحو 150 كلمة): هل الكذب مسموح أحيانًا؟ متى يكذب الناس، وما العواقب، وهل هناك مواقف يكون فيها الكذب أفضل، وكيف الأمر في ثقافتك؟ سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nIch bin der Meinung, dass … / Für mich steht fest, dass …\nMenschen lügen oft, um … zu … / … , damit …\nDas kann dazu führen, dass … / Eine mögliche Folge ist …\nEs gibt allerdings Situationen, in denen …\nIn meiner Kultur … / Bei uns in Ägypten …',
      items: [
        { q: 'Ihr Forumsbeitrag', min: 130, muster: 'Für mich steht fest, dass Ehrlichkeit eine der wichtigsten Grundlagen jeder Beziehung ist. Trotzdem lügen fast alle Menschen ab und zu. Meistens tun sie das, um einen Konflikt zu vermeiden oder um besser dazustehen.\nDas Problem ist, dass schon kleine Lügen großen Schaden anrichten können. Wer einmal beim Lügen erwischt wird, dem glaubt man so schnell nicht mehr. Das kann dazu führen, dass Freundschaften zerbrechen.\nEs gibt allerdings Situationen, in denen eine Notlüge die bessere Wahl ist. Wenn mir eine Freundin stolz ihr neues Kleid zeigt, sage ich nicht, dass es mir nicht gefällt. Auch einem schwer kranken Menschen muss man nicht jede schlechte Nachricht sofort mitteilen.\nIn meiner Heimat Ägypten ist Höflichkeit sehr wichtig. Deshalb sagt man manchmal lieber „vielleicht“ als ein direktes „Nein“. Das ist für mich keine Lüge, sondern eine Form von Respekt.' }
    ] }
  ]
};
