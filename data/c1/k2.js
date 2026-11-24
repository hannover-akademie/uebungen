// Aspekte neu C1 – Kapitel 2: Hast du Worte? (M1 Immer erreichbar · M2 Gib Contra! · M3 Sprachen lernen · M4 Sag mal was!)
// Grammatik: Redewiedergabe (laut, nach, zufolge, wie-Sätze, Konjunktiv I) · Nominal- und Verbalstil
// Prüfung: Goethe C1 Lesen Teil 2 (Multiple Choice), Goethe C1 Schreiben Teil 1 (Forumsbeitrag)
window.UEBUNG = {
  kurs: 'Aspekte neu C1', kapitel: 2, titel: 'Hast du Worte?',
  titelAr: 'اللغة والتواصل: التواصل الدائم، وسرعة البديهة، وتعلّم اللغات، واللهجات – نقل الكلام (laut, zufolge, Konjunktiv I) والأسلوب الاسمي والفعلي',
  teile: [
    { teil: 'A', titel: 'Lesen – Goethe C1 Lesen Teil 2', anweisung: 'Lesen Sie den Text. Welche Antwort (a, b oder c) ist richtig?', anweisungAr: 'اقرأ النص واختر الإجابة الصحيحة.', typ: 'mcq',
      text: 'Erwerben oder lernen?\nIn der Sprachwissenschaft wird zwischen dem Erwerb und dem Lernen einer Sprache unterschieden. Unter Spracherwerb versteht man den unbewussten Prozess, durch den Kinder ihre Muttersprache aufnehmen – ohne Regeln zu kennen und ohne Unterricht. Lernen hingegen bezeichnet die bewusste Auseinandersetzung mit Wortschatz und Grammatik, wie sie typischerweise im Klassenzimmer stattfindet. Lange Zeit galt die Annahme, Erwachsene könnten eine Fremdsprache nur noch lernen, nicht mehr erwerben. Neuere Studien relativieren diese These jedoch. Ihnen zufolge erwerben auch Erwachsene Strukturen weitgehend unbewusst, sofern sie über einen längeren Zeitraum intensiv mit der Sprache in Berührung kommen – etwa durch einen Auslandsaufenthalt. Entscheidend sei dabei weniger das Alter als vielmehr die Menge und Qualität des sprachlichen Inputs sowie die Motivation. Wie die Linguistin Petra Hahn betont, profitieren Lernende am meisten von einer Kombination beider Wege: Explizites Regelwissen helfe, Fehler zu erkennen, während authentische Kommunikation für die nötige Sprachflüssigkeit sorge.',
      items: [
        { q: 'Der Spracherwerb unterscheidet sich vom Lernen dadurch, dass er …', o: ['ohne bewusste Beschäftigung mit Regeln erfolgt.', 'nur im Unterricht stattfindet.', 'ausschließlich bei Erwachsenen vorkommt.'], a: 'ohne bewusste Beschäftigung mit Regeln erfolgt.' },
        { q: 'Früher ging man davon aus, dass Erwachsene …', o: ['eine Fremdsprache nicht mehr unbewusst aufnehmen können.', 'Sprachen schneller erwerben als Kinder.', 'keine Grammatik brauchen.'], a: 'eine Fremdsprache nicht mehr unbewusst aufnehmen können.' },
        { q: 'Neueren Studien zufolge ist für den Erfolg vor allem entscheidend, …', o: ['wie viel und welchen Input man bekommt.', 'in welchem Alter man beginnt.', 'wie viele Regeln man kennt.'], a: 'wie viel und welchen Input man bekommt.' },
        { q: 'Petra Hahn empfiehlt, …', o: ['Regelwissen und echte Kommunikation zu verbinden.', 'auf Grammatikunterricht zu verzichten.', 'nur im Ausland zu lernen.'], a: 'Regelwissen und echte Kommunikation zu verbinden.' }
      ] },
    { teil: 'B1', titel: 'Wortschatz: Kommunikation', anweisung: 'Ergänzen Sie den passenden Ausdruck.', anweisungAr: 'أكمل بالتعبير المناسب.', typ: 'select', o: ['schlagfertig', 'erreichbar', 'auf den Punkt bringen', 'um den heißen Brei reden', 'Mundart', 'jemandem ins Wort fallen'], items: [
      { q: 'Auf jede unverschämte Bemerkung hat sie sofort eine witzige Antwort – sie ist sehr ___.', a: 'schlagfertig' },
      { q: 'Viele Angestellte fühlen sich verpflichtet, auch im Urlaub ___ zu sein.', a: 'erreichbar' },
      { q: 'Könnten Sie Ihr Anliegen bitte kurz ___?', a: 'auf den Punkt bringen' },
      { q: 'Hör auf, ___, und sag mir endlich, was los ist!', a: 'um den heißen Brei reden' },
      { q: 'Im Dorf meiner Großeltern spricht man noch reine ___.', a: 'Mundart' },
      { q: 'Es ist unhöflich, ___ – lass mich bitte ausreden!', a: 'jemandem ins Wort fallen' }
    ] },
    { teil: 'B2', titel: 'Grammatik: Redewiedergabe', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'نقل الكلام: laut + Dativ/Genitiv، و nach + Dativ (غالبًا بعد الاسم)، و zufolge + Dativ (بعد الاسم)، و wie + الفاعل + الفعل، و Konjunktiv I.', typ: 'select', items: [
      { q: '___ der Studie fühlen sich 60 % der Beschäftigten durch ständige Erreichbarkeit gestresst.', o: ['Laut', 'Zufolge', 'Wie'], a: 'Laut' },
      { q: 'Dem Experten ___ sollte man abends das Diensthandy ausschalten.', o: ['zufolge', 'laut', 'wegen'], a: 'zufolge' },
      { q: '___ die Linguistin erklärt, lernen Kinder Sprachen unbewusst.', o: ['Wie', 'Laut', 'Nach'], a: 'Wie' },
      { q: 'Meiner Meinung ___ ist Schlagfertigkeit trainierbar.', o: ['nach', 'zufolge', 'laut'], a: 'nach' },
      { q: 'Die Forscherin betont, Dialekte ___ keineswegs vom Aussterben bedroht. (sein, Plural)', o: ['seien', 'sind', 'wären gewesen'], a: 'seien' },
      { q: 'Der Chef behauptete, er ___ von dem Problem nichts gewusst.', o: ['habe', 'hat', 'hätte gehabt'], a: 'habe' }
    ] },
    { teil: 'B3', titel: 'Grammatik: Nominal- und Verbalstil', anweisung: 'Welcher Satz im Nominalstil hat dieselbe Bedeutung?', anweisungAr: 'الأسلوب الاسمي (لغة العلوم والإدارة) مقابل الأسلوب الفعلي (لغة الحديث).', typ: 'mcq', items: [
      { q: 'Wenn man eine Sprache intensiv nutzt, lernt man schneller.', o: ['Bei intensiver Nutzung einer Sprache lernt man schneller.', 'Ohne intensive Nutzung einer Sprache lernt man schneller.', 'Trotz intensiver Nutzung einer Sprache lernt man schneller.'], a: 'Bei intensiver Nutzung einer Sprache lernt man schneller.' },
      { q: 'Weil viele Mitarbeiter ständig erreichbar sind, steigt der Stress.', o: ['Aufgrund der ständigen Erreichbarkeit vieler Mitarbeiter steigt der Stress.', 'Bei ständiger Erreichbarkeit steigt kein Stress.', 'Trotz der ständigen Erreichbarkeit vieler Mitarbeiter steigt der Stress.'], a: 'Aufgrund der ständigen Erreichbarkeit vieler Mitarbeiter steigt der Stress.' },
      { q: 'Nachdem die Studie veröffentlicht worden war, wurde heftig diskutiert.', o: ['Nach der Veröffentlichung der Studie wurde heftig diskutiert.', 'Vor der Veröffentlichung der Studie wurde heftig diskutiert.', 'Bei der Veröffentlichung der Studie wurde nicht diskutiert.'], a: 'Nach der Veröffentlichung der Studie wurde heftig diskutiert.' },
      { q: 'Die Untersuchung zur Wirksamkeit des Trainings → Verbalstil:', o: ['Man untersucht, wie wirksam das Training ist.', 'Man trainiert, wie man untersucht.', 'Das Training untersucht die Wirkung.'], a: 'Man untersucht, wie wirksam das Training ist.' },
      { q: 'Obwohl er sich intensiv vorbereitet hatte, … → Nominalstil:', o: ['Trotz intensiver Vorbereitung …', 'Wegen intensiver Vorbereitung …', 'Bei intensiver Vorbereitung …'], a: 'Trotz intensiver Vorbereitung …' }
    ] },
    { teil: 'C1', titel: 'Sprechen: Gib Contra!', anweisung: 'Jemand macht eine unverschämte oder provozierende Bemerkung. Welche Reaktion ist schlagfertig, aber nicht beleidigend?', anweisungAr: 'شخص يقول تعليقًا وقحًا أو مستفزًا: اختر الرد الذكي غير المسيء.', typ: 'mcq', items: [
      { q: '„Mit deinem Akzent wirst du hier nie einen guten Job finden.“', o: ['Interessant – mit meinem Akzent spreche ich immerhin drei Sprachen fließend.', 'Halt den Mund!', 'Du hast recht, ich gebe auf.'], a: 'Interessant – mit meinem Akzent spreche ich immerhin drei Sprachen fließend.' },
      { q: '„Na, wieder mal zu spät? Typisch!“', o: ['Danke, dass du so genau auf meine Ankunftszeiten achtest.', 'Du bist doch selbst immer zu spät!', 'Entschuldigung, entschuldigung, entschuldigung.'], a: 'Danke, dass du so genau auf meine Ankunftszeiten achtest.' },
      { q: 'In einer Diskussion wird ein Gesprächspartner persönlich: „Davon verstehen Sie doch gar nichts.“', o: ['Dann klären Sie mich doch bitte mit Argumenten auf, statt mich persönlich anzugreifen.', 'Sie verstehen noch weniger!', 'Ich sage jetzt gar nichts mehr.'], a: 'Dann klären Sie mich doch bitte mit Argumenten auf, statt mich persönlich anzugreifen.' },
      { q: 'Kollege: „Du bist ja schon wieder online – hast du kein Privatleben?“', o: ['Doch, und genau deshalb erledige ich das jetzt schnell.', 'Das geht dich nichts an, du Idiot.', 'Nein, leider nicht.'], a: 'Doch, und genau deshalb erledige ich das jetzt schnell.' },
      { q: 'Sie möchten in einer mündlichen Prüfung höflich widersprechen.', o: ['Ich sehe das etwas differenzierter. Zwar ist es richtig, dass …, allerdings sollte man bedenken, dass …', 'Das ist falsch.', 'Ja, aber nein.'], a: 'Ich sehe das etwas differenzierter. Zwar ist es richtig, dass …, allerdings sollte man bedenken, dass …' }
    ] },
    { teil: 'C2', titel: 'Sprechen: Strategien in der Diskussion', anweisung: 'Welche Strategie verwendet der Sprecher?', anweisungAr: 'ما الاستراتيجية التي يستخدمها المتحدث؟', typ: 'select', o: ['Zeit gewinnen', 'auf eine Quelle verweisen', 'zusammenfassen'], items: [
      { q: '„Das ist eine interessante Frage, darüber muss ich kurz nachdenken.“', a: 'Zeit gewinnen' },
      { q: '„Laut einer aktuellen Umfrage …“', a: 'auf eine Quelle verweisen' },
      { q: '„Wenn ich Sie richtig verstanden habe, meinen Sie also, dass …“', a: 'zusammenfassen' },
      { q: '„Wie soll ich es ausdrücken …“', a: 'Zeit gewinnen' },
      { q: '„Wie der Sprachforscher Müller betont, …“', a: 'auf eine Quelle verweisen' },
      { q: '„Fassen wir die wichtigsten Punkte noch einmal zusammen: …“', a: 'zusammenfassen' }
    ] },
    { teil: 'D', titel: 'Schreiben – Goethe C1 Schreiben Teil 1 (Forumsbeitrag)', anweisung: 'Im Forum einer Wirtschaftszeitschrift wird diskutiert: „Ständige Erreichbarkeit – Fluch oder Segen?“ Schreiben Sie einen Forumsbeitrag (ca. 230 Wörter). Gehen Sie auf die Vor- und Nachteile ein, auf die Rolle der Arbeitgeber und auf mögliche Regelungen. Belegen Sie Ihre Aussagen mit Beispielen.', anweisungAr: 'تدريب على امتحان Goethe C1 (الكتابة، الجزء 1): مشاركة في منتدى (نحو 230 كلمة) عن التواصل الدائم في العمل: المزايا والعيوب، ودور أصحاب العمل، والحلول الممكنة، مع أمثلة. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nDie Frage, ob …, wird kontrovers diskutiert.\nBefürworter argumentieren, dass … / Kritiker hingegen geben zu bedenken, dass …\nStudien zufolge … / Wie aktuelle Umfragen zeigen, …\nAus meiner Sicht kommt den Arbeitgebern eine besondere Verantwortung zu.\nEine mögliche Lösung bestünde darin, … / Abschließend lässt sich festhalten, dass …',
      items: [
        { q: 'Ihr Forumsbeitrag', min: 210, muster: 'Die Frage, ob ständige Erreichbarkeit eher Fluch oder Segen ist, wird seit Jahren kontrovers diskutiert. Befürworter argumentieren, dass Smartphones und Laptops ein Höchstmaß an Flexibilität ermöglichen. Wer seine E-Mails auch von unterwegs beantworten kann, ist nicht mehr an feste Bürozeiten gebunden und kann Beruf und Familie besser vereinbaren.\nKritiker hingegen geben zu bedenken, dass die Grenze zwischen Arbeit und Freizeit dadurch zunehmend verschwimmt. Studien zufolge fühlen sich Beschäftigte, die auch abends dienstliche Nachrichten lesen, deutlich häufiger erschöpft. Ich selbst habe beobachtet, wie ein Kollege im Urlaub täglich stundenlang Anfragen bearbeitete und folglich nach seiner Rückkehr erschöpfter war als zuvor.\nAus meiner Sicht kommt den Arbeitgebern hierbei eine besondere Verantwortung zu. Sie dürfen nicht stillschweigend erwarten, dass ihre Mitarbeiter rund um die Uhr verfügbar sind. Eine mögliche Lösung bestünde darin, verbindliche Regeln festzulegen: Einige Unternehmen leiten beispielsweise E-Mails nach Feierabend nicht mehr weiter oder löschen während des Urlaubs eingehende Nachrichten automatisch.\nIn meiner Heimat Ägypten ist es übrigens üblich, dass Vorgesetzte ihre Mitarbeiter auch spätabends per WhatsApp kontaktieren – ein Zeichen dafür, dass das Problem keineswegs nur Deutschland betrifft.\nAbschließend lässt sich festhalten, dass ständige Erreichbarkeit nur dann ein Segen ist, wenn sie freiwillig bleibt und klare Grenzen respektiert werden.' }
    ] }
  ]
};
