// Aspekte neu B2 – Kapitel 9: Mit viel Gefühl … (M1 Mit Musik geht alles besser · M2 Farbenfroh · M3 Sprache und Gefühl · M4 Gemischte Gefühle)
// Grammatik: Nominalisierung von Verben · Modalpartikeln · Prüfung: Goethe B2 Lesen Teil 1, Schreiben Teil 2 (E-Mail an eine Bekannte)
window.UEBUNG = {
  kurs: 'Aspekte neu B2', kapitel: 9, titel: 'Mit viel Gefühl …',
  titelAr: 'المشاعر: الموسيقى، والألوان، واللغة والمشاعر، والمشاعر المختلطة – تحويل الأفعال إلى أسماء، وأدوات التلطيف في الكلام (Modalpartikeln)',
  teile: [
    { teil: 'A', titel: 'Lesen – Goethe B2 Lesen Teil 1', anweisung: 'Vier Personen berichten, welche Rolle Musik in ihrem Leben spielt. Auf welche Person trifft die Aussage zu?', anweisungAr: 'اقرأ ما يقوله أربعة أشخاص عن الموسيقى: على أيّ شخص تنطبق كل عبارة؟', typ: 'select', o: ['Hoda', 'Markus', 'Lea', 'Viktor'],
      text: 'Hoda: Beim Autofahren höre ich immer die Lieder von Umm Kulthum, die meine Mutter früher in der Küche gesungen hat. Sobald ich ihre Stimme höre, bin ich in Gedanken wieder in Kairo. Musik ist für mich vor allem Erinnerung.\nMarkus: Ich arbeite als Chirurg, und bei langen Operationen läuft im OP leise klassische Musik. Sie hilft dem ganzen Team, ruhig und konzentriert zu bleiben. Ohne Musik zu arbeiten, kann ich mir kaum noch vorstellen.\nLea: Nach der Trennung von meinem Freund habe ich wochenlang nur traurige Lieder gehört. Meine Freundinnen fanden das schlimm, aber mir hat es geholfen, meine Gefühle zu verarbeiten. Inzwischen singe ich selbst in einem Chor.\nViktor: Ehrlich gesagt bin ich völlig unmusikalisch. Im Radio schalte ich meistens auf Nachrichten um. Nur bei Fußballspielen singe ich mit, wenn das ganze Stadion die Hymne anstimmt – da bekomme ich dann doch Gänsehaut.',
      items: [
        { q: 'Diese Person nutzt Musik bei der Arbeit.', a: 'Markus' },
        { q: 'Diese Person verbindet Musik mit ihrer Familie.', a: 'Hoda' },
        { q: 'Diese Person hat Musik geholfen, eine schwere Zeit zu überstehen.', a: 'Lea' },
        { q: 'Diese Person interessiert sich normalerweise kaum für Musik.', a: 'Viktor' },
        { q: 'Diese Person macht heute selbst Musik.', a: 'Lea' },
        { q: 'Diese Person wird in einer großen Menschenmenge emotional.', a: 'Viktor' }
      ] },
    { teil: 'B1', titel: 'Wortschatz: Gefühle und Farben', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Gänsehaut', 'gerührt', 'Neid', 'Wut', 'rot', 'grün hinter den Ohren'], items: [
      { q: 'Bei diesem Lied bekomme ich jedes Mal ___.', a: 'Gänsehaut' },
      { q: 'Bei der Hochzeit ihrer Tochter war sie so ___, dass sie weinen musste.', a: 'gerührt' },
      { q: 'Als er das neue Auto seines Nachbarn sah, spürte er ___.', a: 'Neid' },
      { q: 'Vor ___ schlug er mit der Faust auf den Tisch.', a: 'Wut' },
      { q: 'Er wird schnell wütend. Wenn man ihn anlügt, sieht er sofort ___.', a: 'rot' },
      { q: 'Der neue Kollege ist noch ___ und hat kaum Erfahrung.', a: 'grün hinter den Ohren' }
    ] },
    { teil: 'B2', titel: 'Grammatik: Nominalisierung von Verben', anweisung: 'Welches Nomen gehört zum Verb?', anweisungAr: 'تحويل الفعل إلى اسم: مع -ung (entscheiden ← die Entscheidung)، أو المصدر كاسم (das Singen)، أو بدون لاحقة (beginnen ← der Beginn)، أو أشكال خاصة (ankommen ← die Ankunft).', typ: 'select', items: [
      { q: 'ankommen → die ___', o: ['Ankunft', 'Ankommung', 'Ankommen'], a: 'Ankunft' },
      { q: 'sich freuen → die ___', o: ['Freude', 'Freuung', 'Freuheit'], a: 'Freude' },
      { q: 'entscheiden → die ___', o: ['Entscheidung', 'Entscheid', 'Entschiedung'], a: 'Entscheidung' },
      { q: 'beginnen → der ___', o: ['Beginn', 'Begann', 'Beginnung'], a: 'Beginn' },
      { q: 'verlieren → der ___', o: ['Verlust', 'Verlieren', 'Verlorung'], a: 'Verlust' },
      { q: 'sich ärgern → der ___', o: ['Ärger', 'Ärgerung', 'Arg'], a: 'Ärger' }
    ] },
    { teil: 'B3', titel: 'Grammatik: Nominalstil', anweisung: 'Welcher Ausdruck hat dieselbe Bedeutung?', anweisungAr: 'حوّل الجملة الفرعية إلى تعبير اسمي: wenn/als → bei، nachdem → nach، bevor → vor، während → während + Genitiv، weil → wegen.', typ: 'mcq', items: [
      { q: 'Wenn man Musik hört, entspannt man sich.', o: ['Beim Hören von Musik entspannt man sich.', 'Nach dem Hören von Musik entspannt man sich.', 'Vor dem Musikhören entspannt man sich.'], a: 'Beim Hören von Musik entspannt man sich.' },
      { q: 'Nachdem das Konzert beendet war, gingen alle nach Hause.', o: ['Nach dem Ende des Konzerts gingen alle nach Hause.', 'Beim Ende des Konzerts gingen alle nach Hause.', 'Vor dem Konzert gingen alle nach Hause.'], a: 'Nach dem Ende des Konzerts gingen alle nach Hause.' },
      { q: 'Bevor sie auftrat, war sie sehr nervös.', o: ['Vor ihrem Auftritt war sie sehr nervös.', 'Nach ihrem Auftritt war sie sehr nervös.', 'Bei ihrem Auftreten war sie sehr nervös.'], a: 'Vor ihrem Auftritt war sie sehr nervös.' },
      { q: 'Weil er so wütend war, konnte er nicht schlafen.', o: ['Wegen seiner Wut konnte er nicht schlafen.', 'Trotz seiner Wut konnte er nicht schlafen.', 'Bei seiner Wut konnte er schlafen.'], a: 'Wegen seiner Wut konnte er nicht schlafen.' },
      { q: 'Während sie studierte, sang sie in einer Band.', o: ['Während ihres Studiums sang sie in einer Band.', 'Nach ihrem Studium sang sie in einer Band.', 'Bei ihrem Studieren sang sie in einer Band.'], a: 'Während ihres Studiums sang sie in einer Band.' }
    ] },
    { teil: 'B4', titel: 'Grammatik: Modalpartikeln', anweisung: 'Welche Partikel passt?', anweisungAr: 'أدوات التلطيف: doch (تذكير/تشجيع/استغراب)، ja (أمر معروف/دهشة)، mal (يلطّف الطلب)، denn (فضول في السؤال)، aber (دهشة/تأكيد)، eben/halt (أمر لا يتغير).', typ: 'select', items: [
      { q: 'Was ist ___ los mit dir? Du siehst so traurig aus. (Interesse in der Frage)', o: ['denn', 'eben', 'mal'], a: 'denn' },
      { q: 'Das ist ___ eine tolle Überraschung! (Erstaunen)', o: ['ja', 'mal', 'denn'], a: 'ja' },
      { q: 'Kannst du ___ das Fenster aufmachen? (freundliche Bitte)', o: ['mal', 'aber', 'ja'], a: 'mal' },
      { q: 'Komm ___ mit ins Konzert, das wird bestimmt schön! (Überredung)', o: ['doch', 'denn', 'eben'], a: 'doch' },
      { q: 'Du hast ___ schön gesungen! (Bewunderung)', o: ['aber', 'denn', 'mal'], a: 'aber' },
      { q: 'So ist das ___ – man kann nicht immer gewinnen. (Resignation)', o: ['eben', 'aber', 'denn'], a: 'eben' }
    ] },
    { teil: 'C1', titel: 'Sprechen: Gefühle ausdrücken und reagieren', anweisung: 'Lesen Sie, was die Person sagt. Welche Reaktion passt am besten?', anweisungAr: 'اختر الرد الأنسب للتعبير عن المشاعر أو التفاعل معها.', typ: 'mcq', items: [
      { q: 'Freundin: „Ich habe die Stelle nicht bekommen. Ich bin total enttäuscht.“', o: ['Das tut mir wirklich leid. Ich kann gut verstehen, dass du enttäuscht bist.', 'Na und? Es gibt andere Stellen.', 'Ich habe meine Stelle bekommen.'], a: 'Das tut mir wirklich leid. Ich kann gut verstehen, dass du enttäuscht bist.' },
      { q: 'Kollege: „Stell dir vor, ich werde Vater!“', o: ['Herzlichen Glückwunsch! Das freut mich riesig für dich!', 'Okay.', 'Viel Stress!'], a: 'Herzlichen Glückwunsch! Das freut mich riesig für dich!' },
      { q: 'Ihr Nachbar macht nachts laute Musik. Sie sind verärgert, bleiben aber höflich.', o: ['Es ärgert mich ehrlich gesagt, dass die Musik nachts so laut ist. Könnten Sie sie bitte leiser machen?', 'Machen Sie sofort die Musik aus!', 'Ich rufe die Polizei!'], a: 'Es ärgert mich ehrlich gesagt, dass die Musik nachts so laut ist. Könnten Sie sie bitte leiser machen?' },
      { q: '„Wie fühlst du dich vor deiner Prüfung?“', o: ['Ich habe gemischte Gefühle: Einerseits bin ich gut vorbereitet, andererseits bin ich ziemlich nervös.', 'Prüfung.', 'Ich fühle mich mit Gefühl.'], a: 'Ich habe gemischte Gefühle: Einerseits bin ich gut vorbereitet, andererseits bin ich ziemlich nervös.' },
      { q: '„Welche Farbe magst du am liebsten?“', o: ['Blau, weil sie mich ans Meer erinnert und beruhigend auf mich wirkt.', 'Farben.', 'Ich mag Farbe.'], a: 'Blau, weil sie mich ans Meer erinnert und beruhigend auf mich wirkt.' }
    ] },
    { teil: 'C2', titel: 'Sprechen: Welches Gefühl?', anweisung: 'Welches Gefühl drückt die Person aus?', anweisungAr: 'ما الشعور الذي يعبّر عنه الشخص؟', typ: 'select', o: ['Freude', 'Ärger', 'Trauer', 'Angst'], items: [
      { q: '„Ich könnte vor Glück platzen!“', a: 'Freude' },
      { q: '„Das geht mir total auf die Nerven!“', a: 'Ärger' },
      { q: '„Mir ist zum Heulen zumute.“', a: 'Trauer' },
      { q: '„Mir zittern schon die Knie.“', a: 'Angst' },
      { q: '„Ich bin überglücklich.“', a: 'Freude' },
      { q: '„Jetzt reicht es mir aber!“', a: 'Ärger' }
    ] },
    { teil: 'D', titel: 'Schreiben – Goethe B2 Schreiben Teil 2 (E-Mail)', anweisung: 'Die Leiterin Ihres Chors, Frau Engel, hat Sie gebeten, beim Jahreskonzert ein Solo zu singen. Sie haben aber große Angst vor Auftritten. Schreiben Sie Frau Engel eine E-Mail (ca. 100 Wörter). Bedanken Sie sich für das Vertrauen, erklären Sie Ihre Gefühle und Ihre Entscheidung und machen Sie einen anderen Vorschlag, wie Sie helfen können.', anweisungAr: 'تدريب على امتحان Goethe B2 (الكتابة، الجزء 2): رسالة نصف رسمية (نحو 100 كلمة) إلى قائدة الجوقة: اشكرها، واشرح مشاعرك وقرارك، واقترح طريقة أخرى للمساعدة. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nLiebe Frau …,\nvielen Dank für Ihr Vertrauen. Es freut mich sehr, dass …\nIch muss Ihnen allerdings gestehen, dass … / Ehrlich gesagt habe ich …\nDeshalb habe ich mich entschieden, … / Es fällt mir schwer, aber …\nStattdessen könnte ich … / Wie wäre es, wenn …?\nHerzliche Grüße',
      items: [
        { q: 'Ihre E-Mail', min: 90, muster: 'Liebe Frau Engel,\nvielen Dank für Ihr Vertrauen! Es freut mich wirklich sehr, dass Sie mir ein Solo beim Jahreskonzert zutrauen.\nIch muss Ihnen allerdings gestehen, dass ich große Angst vor Auftritten habe. Schon beim Gedanken daran, allein vor so vielen Menschen zu stehen, zittern mir die Knie. Bei unserem letzten Konzert konnte ich vor Aufregung die ganze Nacht nicht schlafen. Deshalb habe ich mich nach langem Überlegen entschieden, das Solo nicht zu übernehmen, auch wenn mir das schwerfällt.\nStattdessen könnte ich mich um die Plakate und die Dekoration kümmern. Wie wäre es außerdem, wenn ich das Solo im nächsten Jahr mit einer zweiten Sängerin zusammen singe?\nHerzliche Grüße\nRana' }
    ] }
  ]
};
