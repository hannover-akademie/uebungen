// Netzwerk neu A2 – Kapitel 1: Und was machst du?
// Wortschatz: Lernwortschatz ÜB · Grammatik/Redemittel: KB „kurz und klar“ (Genitiv Name + s, Perfekt, weil)
window.UEBUNG = {
  kurs: 'Netzwerk neu A2', kapitel: 1, titel: 'Und was machst du?',
  titelAr: 'التعريف بالنفس والحديث عن الماضي والمواعيد – الملكية بـ s، والـ Perfekt، وجمل weil',
  teile: [
    { titel: 'Wortschatz: Lebensstationen', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['geheiratet', 'geboren', 'geschieden', 'abgeschlossen', 'umgezogen', 'Rentner'], items: [
      { q: 'Ich bin 1990 in Kairo ___.', a: 'geboren' },
      { q: 'Tom und Lea haben im Mai ___. Die Hochzeit war sehr romantisch.', a: 'geheiratet' },
      { q: 'Meine Eltern sind seit fünf Jahren ___. Sie leben nicht mehr zusammen.', a: 'geschieden' },
      { q: 'Sie hat ihre Ausbildung als Bankkauffrau im Juli ___.', a: 'abgeschlossen' },
      { q: 'Wir wohnen nicht mehr auf dem Land. Wir sind ins Stadtzentrum ___.', a: 'umgezogen' },
      { q: 'Mein Opa arbeitet nicht mehr. Er ist ___.', a: 'Rentner' }
    ] },
    { titel: 'Wortschatz: Freizeit', anweisung: 'Ergänzen Sie.', anweisungAr: 'أكمل بالكلمة المناسبة من مفردات وقت الفراغ.', typ: 'select', o: ['Flohmarkt', 'Verein', 'anmelden', 'teilnehmen', 'organisieren', 'reiten'], items: [
      { q: 'Am Samstag kaufe ich alte Bücher auf dem ___.', a: 'Flohmarkt' },
      { q: 'Ich spiele seit drei Jahren in einem Fußball___.', a: 'Verein' },
      { q: 'Für den Kochkurs muss man sich online ___.', a: 'anmelden' },
      { q: 'Möchtest du am Wettbewerb ___?', a: 'teilnehmen' },
      { q: 'Wer kann die Party für Tim ___?', a: 'organisieren' },
      { q: 'Meine Tochter liebt Pferde. Sie möchte ___ lernen.', a: 'reiten' }
    ] },
    { titel: 'Wortschatz: Wie schmeckt das?', anweisung: 'Wählen Sie das passende Adjektiv.', anweisungAr: 'اختر الصفة المناسبة للطعم.', typ: 'select', o: ['sauer', 'scharf', 'salzig', 'bitter', 'süß'], items: [
      { q: 'Eine Zitrone schmeckt ___.', a: 'sauer' },
      { q: 'Chili ist sehr ___.', a: 'scharf' },
      { q: 'Chips sind ___.', a: 'salzig' },
      { q: 'Kaffee ohne Zucker ist ___.', a: 'bitter' },
      { q: 'Schokolade und Kuchen sind ___.', a: 'süß' }
    ] },
    { titel: 'Grammatik: Genitiv mit Namen', anweisung: 'Schreiben Sie es kürzer: Name + s.', anweisungAr: 'الملكية مع الأسماء: Julias Schwester. وبعد ß أو x أو z أو s تأتي علامة \' فقط: Max\' Bruder.', typ: 'gap', items: [
      { q: 'die Schwester von Julia → ___ Schwester', a: ['Julias'] },
      { q: 'die Freunde von Lilly → ___ Freunde', a: ['Lillys'] },
      { q: 'das Handy von Anna → ___ Handy', a: ['Annas'] },
      { q: 'der Bruder von Max → ___ Bruder', a: ["Max'", 'Max’'] },
      { q: 'die Kollegin von Frau Weiß → Frau ___ Kollegin', a: ["Weiß'", 'Weiß’', "Weiss'"] },
      { q: 'die Wohnung von Omar → ___ Wohnung', a: ['Omars'] }
    ] },
    { titel: 'Grammatik: Partizip II', anweisung: 'Schreiben Sie das Partizip II.', anweisungAr: 'اكتب صيغة الـ Partizip II: منتظم ge…t، -ieren بلا ge، شاذ ge…en، منفصل …ge…، غير منفصل بلا ge.', typ: 'gap', items: [
      { q: 'kennenlernen → hat ___', a: ['kennengelernt'] },
      { q: 'umziehen → ist ___', a: ['umgezogen'] },
      { q: 'beenden → hat ___', a: ['beendet'] },
      { q: 'organisieren → hat ___', a: ['organisiert'] },
      { q: 'finden → hat ___', a: ['gefunden'] },
      { q: 'reisen → ist ___', a: ['gereist'] },
      { q: 'besuchen → hat ___', a: ['besucht'] },
      { q: 'helfen → hat ___', a: ['geholfen'] },
      { q: 'weitersuchen → hat ___', a: ['weitergesucht'] },
      { q: 'fliegen → ist ___', a: ['geflogen'] }
    ] },
    { titel: 'Grammatik: Perfekt mit haben oder sein', anweisung: 'Wählen Sie.', anweisungAr: 'sein مع أفعال الحركة وتغيّر الحال، ومع passieren و bleiben و sein.', typ: 'select', items: [
      { q: 'Was ___ passiert?', o: ['ist', 'hat'], a: 'ist' },
      { q: 'Sie ___ im Urlaub nach Spanien geflogen.', o: ['ist', 'hat'], a: 'ist' },
      { q: 'Er ___ zwei Wochen bei seiner Oma geblieben.', o: ['ist', 'hat'], a: 'ist' },
      { q: 'Wir ___ die Ausbildung im Sommer beendet.', o: ['haben', 'sind'], a: 'haben' },
      { q: 'Der Film ___ mir sehr gut gefallen.', o: ['hat', 'ist'], a: 'hat' },
      { q: '___ du schon einmal geritten?', o: ['Bist', 'Hast'], a: 'Bist' },
      { q: 'Ich ___ gestern lange Überstunden gemacht.', o: ['habe', 'bin'], a: 'habe' }
    ] },
    { titel: 'Grammatik: Die Satzklammer im Perfekt', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة: haben/sein في الموقع الثاني، والـ Partizip في آخر الجملة.', typ: 'words', items: [
      { q: 'Aussagesatz (.)', w: ['ich', 'habe', 'meine Frau', 'im Urlaub', 'kennengelernt'], a: ['ich habe meine Frau im Urlaub kennengelernt', 'im Urlaub habe ich meine Frau kennengelernt'] },
      { q: 'W-Frage (?)', w: ['wann', 'bist', 'du', 'nach Deutschland', 'gekommen'], a: ['wann bist du nach Deutschland gekommen'] },
      { q: 'Aussagesatz (.)', w: ['letztes Jahr', 'sind', 'wir', 'durch Spanien', 'gereist'], a: ['letztes Jahr sind wir durch Spanien gereist', 'wir sind letztes Jahr durch Spanien gereist'] }
    ] },
    { titel: 'Grammatik: Nebensatz mit weil', anweisung: 'Welcher Satz ist richtig?', anweisungAr: 'بعد weil يأتي الفاعل، ويأتي الفعل المصرَّف في آخر الجملة.', typ: 'mcq', items: [
      { q: 'Ich gehe heute nicht ins Kino, weil …', o: ['ich keine Zeit habe.', 'ich habe keine Zeit.', 'habe ich keine Zeit.'], a: 'ich keine Zeit habe.' },
      { q: 'Marvin kommt später, weil …', o: ['er arbeiten muss.', 'er muss arbeiten.', 'muss er arbeiten.'], a: 'er arbeiten muss.' },
      { q: 'Sie ist froh, weil …', o: ['sie die Prüfung bestanden hat.', 'sie hat die Prüfung bestanden.', 'die Prüfung sie bestanden hat.'], a: 'sie die Prüfung bestanden hat.' },
      { q: 'Wir sind umgezogen, weil …', o: ['die alte Wohnung zu klein war.', 'die alte Wohnung war zu klein.', 'war die alte Wohnung zu klein.'], a: 'die alte Wohnung zu klein war.' }
    ] },
    { titel: 'Grammatik: Sätze mit weil bauen', anweisung: 'Bauen Sie den Satz mit weil.', anweisungAr: 'كوّن جملة بـ weil.', typ: 'words', items: [
      { q: 'Satz (.)', w: ['er kann nicht kommen,', 'weil', 'er', 'krank', 'ist'], a: ['er kann nicht kommen, weil er krank ist'] },
      { q: 'Satz (.)', w: ['ich lerne Deutsch,', 'weil', 'ich', 'in Deutschland', 'studieren', 'möchte'], a: ['ich lerne Deutsch, weil ich in Deutschland studieren möchte'] }
    ] },
    { titel: 'Redemittel: Sich verabreden', anweisung: 'Was macht die Person? Ordnen Sie zu.', anweisungAr: 'ماذا يفعل المتحدث: يقترح، أم يوافق، أم يعتذر، أم يستفسر؟', typ: 'select', o: ['etwas vorschlagen', 'zusagen', 'absagen', 'nachfragen'], items: [
      { q: '„Gehen wir zusammen ins Kino? Hast du auch Lust?“ → ___', a: 'etwas vorschlagen' },
      { q: '„Oh ja, gern. Das ist eine gute Idee.“ → ___', a: 'zusagen' },
      { q: '„Ich möchte gern, aber ich muss arbeiten.“ → ___', a: 'absagen' },
      { q: '„Wann geht es los?“ → ___', a: 'nachfragen' },
      { q: '„Einverstanden!“ → ___', a: 'zusagen' },
      { q: '„Schade, da kann ich leider nicht, weil ich Besuch habe.“ → ___', a: 'absagen' },
      { q: '„Kann ich etwas mitbringen?“ → ___', a: 'nachfragen' },
      { q: '„Ich gehe am Sonntag schwimmen. Kommst du mit?“ → ___', a: 'etwas vorschlagen' }
    ] },
    { titel: 'Redemittel: Ein Dialog', anweisung: 'Bringen Sie den Dialog in die richtige Reihenfolge.', anweisungAr: 'رتّب الحوار.', typ: 'order', items: [
      { q: 'Verabredung zum Flohmarkt', lines: [
        'Hallo Mia! Ich gehe am Freitag auf den Flohmarkt. Kommst du mit?',
        'Gute Idee! Wann geht es los?',
        'Um zehn Uhr. Hast du da Zeit?',
        'Geht es auch ein bisschen später? Ich muss vorher noch einkaufen.',
        'Kein Problem. Treffen wir uns um elf am Eingang?',
        'Einverstanden. Bis Freitag!'
      ] }
    ] },
    { titel: 'Redemittel: Sich vorstellen', anweisung: 'Was passt zusammen? Ordnen Sie zu.', anweisungAr: 'صِل بين جزأي كل جملة.', typ: 'match', items: [
      { q: '', pairs: [
        ['Ich komme aus Ägypten', 'und lebe jetzt in Hannover.'],
        ['Ich habe eine Ausbildung', 'zum Augenoptiker gemacht.'],
        ['Ich bin verheiratet', 'und habe zwei Kinder.'],
        ['In der Freizeit', 'spiele ich gern Fußball.'],
        ['Ich habe Deutsch', 'in Kairo gelernt.']
      ] }
    ] },
    { titel: 'Lesen: Essen ohne Licht', anweisung: 'Lesen Sie die Homepage. Richtig oder falsch?', anweisungAr: 'اقرأ صفحة المطعم. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Restaurant „Im Dunkeln“ – ein Abend mit allen Sinnen\nBei uns essen Sie in einem ganz dunklen Raum. Ein Kellner empfängt Sie am Eingang und führt Sie zu Ihrem Platz. Unsere Kellner sind blind und kennen den Raum sehr gut. Wichtig: Handys und Uhren mit Licht müssen aus sein. Sie wählen Ihr Menü schon vorher aus: Fleisch, Fisch oder vegetarisch. Ein Aufenthalt dauert etwa drei Stunden. Eine Reservierung ist nötig, spätestens zwei Tage vorher. Möchten Sie sich informieren? Rufen Sie uns an!',
      items: [
        { q: 'Man isst in einem dunklen Raum.', a: true },
        { q: 'Die Gäste suchen ihren Platz allein.', a: false },
        { q: 'Man darf das Handy anmachen.', a: false },
        { q: 'Das Menü wählt man vor dem Essen aus.', a: true },
        { q: 'Man kann auch am gleichen Tag reservieren.', a: false }
      ] },
    { titel: 'Lesen: Karims Weg', anweisung: 'Lesen Sie den Text. Richtig oder falsch?', anweisungAr: 'اقرأ النص. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Ich heiße Karim und bin 1992 in Assiut geboren. Nach der Schule habe ich eine Ausbildung zum Bankkaufmann gemacht. 2019 bin ich nach Deutschland gekommen, weil meine Frau hier studiert hat. Zuerst haben wir auf dem Land gewohnt, aber 2022 sind wir ins Stadtzentrum von Köln umgezogen, weil wir dort Arbeit gefunden haben. Jetzt arbeite ich in einer Bank. Manchmal muss ich Überstunden machen. In meiner Freizeit spiele ich in einem Fußballverein.',
      items: [
        { q: 'Karim hat eine Ausbildung zum Bankkaufmann gemacht.', a: true },
        { q: 'Er ist 2019 nach Deutschland gekommen, weil er studieren wollte.', a: false },
        { q: 'Karim und seine Frau haben zuerst auf dem Land gewohnt.', a: true },
        { q: 'Sie sind umgezogen, weil die Wohnung zu klein war.', a: false },
        { q: 'Karim spielt in einem Verein Fußball.', a: true }
      ] },
    { titel: 'Schreiben: Sich vorstellen', anweisung: 'Sie sind neu im Deutschkurs. Stellen Sie sich im Kursforum vor (60–80 Wörter). Schreiben Sie: Woher kommen Sie? Was haben Sie gelernt oder studiert? Wann und warum sind Sie nach Deutschland gekommen (weil …)? Was machen Sie gern in der Freizeit? Schlagen Sie ein Treffen vor.', anweisungAr: 'أنت جديد في الدورة. عرّف بنفسك في منتدى الدورة (60–80 كلمة): من أين أنت؟ ماذا درست أو تعلّمت؟ متى ولماذا جئت إلى ألمانيا (مستخدمًا weil)؟ ماذا تحب أن تفعل في وقت فراغك؟ واقترح لقاءً. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nIch komme aus … / Ich lebe jetzt in …\nIch habe eine Ausbildung zum/zur … gemacht. / Ich habe … studiert.\nIch bin … nach Deutschland gekommen, weil …\nIn der Freizeit … ich gern …\nHast du Lust, …? / Gehen wir zusammen …?',
      items: [
        { q: 'Hallo zusammen, …', min: 55, muster: 'Hallo zusammen,\nich heiße Amira und komme aus Ägypten, aus Alexandria. Ich habe in Kairo Biologie studiert. Vor einem Jahr bin ich nach Hannover gekommen, weil mein Mann hier eine Stelle gefunden hat. Wir haben zuerst bei Freunden gewohnt, aber im März sind wir in eine eigene Wohnung umgezogen. In der Freizeit koche ich gern und gehe oft auf den Flohmarkt. Am Samstag gehe ich wieder hin. Hat jemand Lust mitzukommen?\nViele Grüße\nAmira' }
    ] }
  ]
};
