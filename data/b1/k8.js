// Netzwerk neu B1 – Kapitel 8: Rund um Körper und Geist
// Grammatik: nicht/kein/nur + brauchen + zu, Reflexivpronomen im Akkusativ und Dativ, zweiteilige Konnektoren · Redemittel: Hilfe anbieten/annehmen/ablehnen, warnen, Informationen weitergeben
// Prüfungstraining: Goethe B1 Lesen Teil 5 (Hausordnung) · Goethe B1 Schreiben Aufgabe 2 (Forum)
window.UEBUNG = {
  kurs: 'Netzwerk neu B1', kapitel: 8, titel: 'Rund um Körper und Geist',
  titelAr: 'الصحة والجسم والنفس – nicht/kein/nur + brauchen + zu، والضمائر الانعكاسية في Akkusativ وDativ، وأدوات الربط المزدوجة',
  teile: [
    { titel: 'Wortschatz: Gesundheit und Krankheit', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Überweisung', 'Rezept', 'Notaufnahme', 'Verband', 'Beschwerden', 'Krankmeldung'], items: [
      { q: 'Für den Facharzt brauchen Sie eine ___ vom Hausarzt.', a: 'Überweisung' },
      { q: 'Dieses Medikament bekommen Sie nur mit ___.', a: 'Rezept' },
      { q: 'Nach dem Unfall musste er sofort in die ___.', a: 'Notaufnahme' },
      { q: 'Die Ärztin hat einen ___ um die Wunde gemacht.', a: 'Verband' },
      { q: 'Welche ___ haben Sie? – Ich habe starke Rückenschmerzen.', a: 'Beschwerden' },
      { q: 'Wenn Sie länger als drei Tage krank sind, braucht Ihr Arbeitgeber eine ___.', a: 'Krankmeldung' }
    ] },
    { titel: 'Wortschatz: Körper und Fitness', anweisung: 'Was passt? Wählen Sie.', anweisungAr: 'اختر الإجابة الصحيحة.', typ: 'mcq', items: [
      { q: 'Ich habe mir beim Fußball das Bein …', o: ['gebrochen.', 'erkältet.', 'gestört.'], a: 'gebrochen.' },
      { q: 'Nach dem Training tun mir die Muskeln weh. Ich habe …', o: ['Muskelkater.', 'Fieber.', 'Schnupfen.'], a: 'Muskelkater.' },
      { q: 'Um sich zu …, macht sie jeden Abend Yoga.', o: ['entspannen', 'verletzen', 'erkälten'], a: 'entspannen' },
      { q: 'Seine Verletzung …, er kann bald wieder spielen.', o: ['heilt', 'bricht', 'blutet'], a: 'heilt' },
      { q: 'Man soll vor dem Sport die Muskeln …', o: ['aufwärmen.', 'verbinden.', 'verschreiben.'], a: 'aufwärmen.' }
    ] },
    { titel: 'Grammatik: nicht/kein/nur + brauchen + zu', anweisung: 'Wählen Sie die passende Form.', anweisungAr: 'nicht/kein + brauchen + zu = لا يلزم (عكس müssen)، و nur + brauchen + zu = يكفي أن …', typ: 'select', items: [
      { q: 'Sie müssen nicht sofort kommen. = Sie ___ nicht sofort zu kommen.', o: ['brauchen', 'müssen', 'dürfen'], a: 'brauchen' },
      { q: 'Du musst keine Medikamente nehmen. = Du brauchst keine Medikamente ___.', o: ['zu nehmen', 'nehmen', 'genommen'], a: 'zu nehmen' },
      { q: 'Sie müssen nur das Formular ausfüllen. = Sie brauchen nur das Formular ___.', o: ['auszufüllen', 'zu ausfüllen', 'ausfüllen'], a: 'auszufüllen' },
      { q: 'Er muss nicht im Bett bleiben. = Er braucht nicht im Bett ___.', o: ['zu bleiben', 'bleiben', 'bleibt'], a: 'zu bleiben' },
      { q: 'Ihr müsst nur anrufen. = Ihr ___ nur anzurufen.', o: ['braucht', 'brauchen', 'brauchst'], a: 'braucht' }
    ] },
    { titel: 'Grammatik: Reflexivpronomen im Akkusativ und Dativ', anweisung: 'Ergänzen Sie das Reflexivpronomen.', anweisungAr: 'إذا كان في الجملة مفعول به آخر في Akkusativ يأتي الضمير الانعكاسي في Dativ: ich wasche mich ← ich wasche mir die Hände.', typ: 'select', items: [
      { q: 'Ich habe ___ beim Sport verletzt.', o: ['mich', 'mir', 'sich'], a: 'mich' },
      { q: 'Ich habe ___ den Arm gebrochen.', o: ['mir', 'mich', 'sich'], a: 'mir' },
      { q: 'Putzt du ___ jeden Abend die Zähne?', o: ['dir', 'dich', 'sich'], a: 'dir' },
      { q: 'Hast du ___ erkältet?', o: ['dich', 'dir', 'sich'], a: 'dich' },
      { q: 'Wir müssen ___ mehr bewegen.', o: ['uns', 'unser', 'sich'], a: 'uns' },
      { q: 'Er wünscht ___ mehr Zeit zum Entspannen.', o: ['sich', 'ihm', 'ihn'], a: 'sich' }
    ] },
    { titel: 'Grammatik: Zweiteilige Konnektoren', anweisung: 'Ergänzen Sie den zweiten Teil.', anweisungAr: 'sowohl … als auch (كلاهما)، weder … noch (لا هذا ولا ذاك)، entweder … oder (إما … أو)، nicht nur … sondern auch، zwar … aber، je … desto.', typ: 'select', o: ['als auch', 'noch', 'oder', 'sondern auch', 'aber'], items: [
      { q: 'Sport ist sowohl gut für den Körper ___ für die Seele.', a: 'als auch' },
      { q: 'Er trinkt weder Kaffee ___ Alkohol.', a: 'noch' },
      { q: 'Entweder du gehst zum Arzt, ___ du bleibst im Bett.', a: 'oder' },
      { q: 'Yoga hilft nicht nur gegen Stress, ___ gegen Rückenschmerzen.', a: 'sondern auch' },
      { q: 'Ich gehe zwar oft spazieren, ___ ich mache keinen Sport.', a: 'aber' }
    ] },
    { titel: 'Grammatik: Sätze verbinden', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة.', typ: 'words', items: [
      { q: 'weder … noch (.)', w: ['ich', 'habe', 'weder', 'Fieber', 'noch', 'Husten'], a: ['ich habe weder fieber noch husten'] },
      { q: 'je … desto (.)', w: ['je', 'mehr', 'du', 'schläfst,', 'desto', 'fitter', 'bist', 'du'], a: ['je mehr du schläfst, desto fitter bist du'] }
    ] },
    { titel: 'Redemittel: Hilfe anbieten, annehmen, ablehnen', anweisung: 'Was macht die Person?', anweisungAr: 'هل يعرض الشخص المساعدة، أم يقبلها، أم يرفضها بأدب؟', typ: 'select', o: ['Hilfe anbieten', 'Hilfe annehmen', 'Hilfe ablehnen'], items: [
      { q: '„Kann ich Ihnen helfen?“', a: 'Hilfe anbieten' },
      { q: '„Das ist sehr nett von Ihnen, gern.“', a: 'Hilfe annehmen' },
      { q: '„Danke, das ist nicht nötig. Ich schaffe das allein.“', a: 'Hilfe ablehnen' },
      { q: '„Soll ich die Tasche für Sie tragen?“', a: 'Hilfe anbieten' },
      { q: '„Vielen Dank, das wäre wirklich toll.“', a: 'Hilfe annehmen' },
      { q: '„Nein danke, es geht schon.“', a: 'Hilfe ablehnen' }
    ] },
    { titel: 'Redemittel: Warnen und Informationen weitergeben', anweisung: 'Ergänzen Sie.', anweisungAr: 'أكمل عبارات التحذير ونقل المعلومات.', typ: 'select', o: ['Vorsicht', 'Pass auf', 'Achtung', 'hat gesagt, dass', 'Laut'], items: [
      { q: '___, der Boden ist nass!', a: 'Vorsicht' },
      { q: '___, dass du dich nicht verletzt!', a: 'Pass auf' },
      { q: '___! Das Medikament nicht mit Alkohol einnehmen.', a: 'Achtung' },
      { q: 'Die Ärztin ___ ich drei Tage im Bett bleiben soll.', a: 'hat gesagt, dass' },
      { q: '___ Packungsbeilage soll man die Tabletten nach dem Essen nehmen.', a: 'Laut' }
    ] },
    { titel: 'Prüfungstraining – Goethe B1 Lesen Teil 5', anweisung: 'Sie liegen im Krankenhaus und lesen die Hausordnung. Welche Lösung (a, b oder c) ist richtig?', anweisungAr: 'تدريب على امتحان Goethe B1 (القراءة، الجزء 5): اقرأ تعليمات المستشفى واختر الإجابة الصحيحة.', typ: 'mcq',
      text: 'Hausordnung – Klinikum am See\nBesuchszeiten: Besuch ist täglich von 14 bis 19 Uhr möglich. Auf der Kinderstation dürfen die Eltern jederzeit zu ihrem Kind kommen. Bitte bringen Sie nicht mehr als zwei Besucher gleichzeitig mit ins Zimmer, damit sich die anderen Patienten ausruhen können.\nEssen: Das Frühstück wird um 7:30 Uhr serviert. Wenn Sie eine besondere Diät brauchen, sagen Sie bitte dem Pflegepersonal Bescheid. Sie brauchen keine eigenen Speisen mitzubringen.\nHandys: In den Zimmern dürfen Sie Ihr Handy benutzen, aber bitte schalten Sie es ab 22 Uhr leise. Auf der Intensivstation sind Handys verboten.\nWertsachen: Für Geld und Schmuck gibt es in jedem Zimmer einen Schrank mit Schloss. Für verlorene Wertsachen übernimmt die Klinik keine Haftung.',
      items: [
        { q: 'Wie viele Besucher dürfen gleichzeitig ins Zimmer kommen?', o: ['höchstens zwei', 'beliebig viele', 'nur einer'], a: 'höchstens zwei' },
        { q: 'Wer darf auch außerhalb der Besuchszeiten kommen?', o: ['Eltern von Kindern auf der Kinderstation', 'alle Familienmitglieder', 'niemand'], a: 'Eltern von Kindern auf der Kinderstation' },
        { q: 'Wenn Sie eine spezielle Ernährung brauchen, …', o: ['informieren Sie die Pflegekräfte.', 'bringen Sie Ihr Essen selbst mit.', 'essen Sie in der Cafeteria.'], a: 'informieren Sie die Pflegekräfte.' },
        { q: 'Im Zimmer dürfen Sie …', o: ['telefonieren, aber nachts leise.', 'nie telefonieren.', 'nur bis 19 Uhr telefonieren.'], a: 'telefonieren, aber nachts leise.' },
        { q: 'Ihr Geld sollten Sie …', o: ['im Schrank einschließen.', 'an der Rezeption abgeben.', 'immer bei sich tragen.'], a: 'im Schrank einschließen.' }
      ] },
    { titel: 'Prüfungstraining – Goethe B1 Schreiben Aufgabe 2', anweisung: 'In einer Fernsehsendung wurde über das Thema „Stress im Alltag“ diskutiert. Im Online-Gästebuch der Sendung schreibt Max (35): „Gegen Stress hilft nur Sport. Wer Sport macht, ist nie gestresst.“ Schreiben Sie nun Ihre Meinung (ca. 80 Wörter).', anweisungAr: 'تدريب على امتحان Goethe B1 (الكتابة، المهمة 2): اكتب رأيك (نحو 80 كلمة) عن الضغط النفسي في الحياة اليومية وكيفية التعامل معه. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nIch stimme Max nur teilweise zu, denn … / Da bin ich anderer Meinung.\nSport ist zwar …, aber … / sowohl … als auch …\nMir hilft es, wenn … / Um mich zu entspannen, …\nMan braucht nicht … zu …\nIn meiner Heimat …',
      items: [
        { q: 'Hallo zusammen, …', min: 70, muster: 'Hallo zusammen,\nich stimme Max nur teilweise zu. Sport ist zwar gut gegen Stress, aber meiner Meinung nach hilft er nicht allen Menschen. Mir hilft es zum Beispiel, wenn ich mit meiner Familie spreche oder in Ruhe ein Buch lese. Um mich zu entspannen, gehe ich abends oft spazieren. Man braucht nicht jeden Tag ins Fitnessstudio zu gehen. Wichtig ist sowohl genug Schlaf als auch gesundes Essen. In meiner Heimat Ägypten trifft man sich am Abend mit Freunden, und das ist für mich das beste Mittel gegen Stress.\nViele Grüße\nMona' }
    ] }
  ]
};
