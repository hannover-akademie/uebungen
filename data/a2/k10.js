// Netzwerk neu A2 – Kapitel 10: Zusammen leben
// Grammatik: Wechselpräpositionen, Positions- und Richtungsverben, Nebensatz mit als und wenn · Redemittel: um einen Gefallen bitten, sich beschweren, sich entschuldigen, auf Informationen reagieren
window.UEBUNG = {
  kurs: 'Netzwerk neu A2', kapitel: 10, titel: 'Zusammen leben',
  titelAr: 'السكن والجيران والحيوانات الأليفة – حروف الجر المتغيّرة، وأفعال الوضع والاتجاه، و als/wenn',
  teile: [
    { titel: 'Wortschatz: Wohnen und Wohnformen', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Bauernhof', 'Stadtrand', 'Altbau', 'Keller', 'Nebenkosten', 'möbliert'], items: [
      { q: 'Wir wohnen nicht im Zentrum, sondern am ___.', a: 'Stadtrand' },
      { q: 'Auf dem ___ gibt es Kühe, Schafe und Schweine.', a: 'Bauernhof' },
      { q: 'Das Haus ist über 100 Jahre alt. Es ist ein ___.', a: 'Altbau' },
      { q: 'Die Fahrräder stehen unten im ___.', a: 'Keller' },
      { q: 'Die Miete ist 600 Euro, plus 150 Euro ___ für Wasser und Heizung.', a: 'Nebenkosten' },
      { q: 'Das Zimmer ist ___: Bett, Schrank und Tisch sind schon da.', a: 'möbliert' }
    ] },
    { titel: 'Wortschatz: Nachbarn und Haustiere', anweisung: 'Was ist richtig? Wählen Sie.', anweisungAr: 'اختر الإجابة الصحيحة.', typ: 'mcq', items: [
      { q: 'Der Hund von nebenan …', o: ['bellt jede Nacht.', 'gießt die Blumen.', 'stinkt den Müll.'], a: 'bellt jede Nacht.' },
      { q: 'Ich bin im Urlaub. Kannst du bitte meine Blumen …', o: ['gießen?', 'füttern?', 'bellen?'], a: 'gießen?' },
      { q: 'Und kannst du auch meine Katze …', o: ['füttern?', 'gießen?', 'auspacken?'], a: 'füttern?' },
      { q: 'Der Müll steht seit einer Woche im Treppenhaus. Er …', o: ['stinkt.', 'schaukelt.', 'bellt.'], a: 'stinkt.' },
      { q: 'Der Postbote hat für Sie ein … bei mir abgegeben.', o: ['Päckchen', 'Kissen', 'Ufer'], a: 'Päckchen' }
    ] },
    { titel: 'Grammatik: Wo? oder Wohin?', anweisung: 'Wählen Sie die richtige Form.', anweisungAr: 'Wo? (مكان ثابت) ← Dativ، و Wohin? (حركة/اتجاه) ← Akkusativ.', typ: 'select', items: [
      { q: 'Der Müll steht neben ___ Garage. (Wo?)', o: ['der', 'die', 'den'], a: 'der' },
      { q: 'Sie stellen das Fahrrad in ___ Garage. (Wohin?)', o: ['die', 'der', 'dem'], a: 'die' },
      { q: 'Das Kissen liegt unter ___ Stuhl. (Wo?)', o: ['dem', 'den', 'der'], a: 'dem' },
      { q: 'Sie legen das Kissen auf ___ Stuhl. (Wohin?)', o: ['den', 'dem', 'der'], a: 'den' },
      { q: 'Ein Poster hängt an ___ Gartenhaus. (Wo?)', o: ['dem', 'das', 'den'], a: 'dem' },
      { q: 'Er hängt die Lampions in ___ Baum. (Wohin?)', o: ['den', 'dem', 'der'], a: 'den' },
      { q: 'Die Katze schläft zwischen ___ Stühlen. (Wo?)', o: ['den', 'die', 'der'], a: 'den' },
      { q: 'Stell die Torte bitte hinter ___ Gartenhaus. (Wohin?)', o: ['das', 'dem', 'den'], a: 'das' }
    ] },
    { titel: 'Grammatik: Positions- und Richtungsverben', anweisung: 'Ergänzen Sie das Verb.', anweisungAr: 'أفعال الوضع (stehen, liegen, hängen) مع Dativ، وأفعال الاتجاه (stellen, legen, hängen) مع Akkusativ.', typ: 'select', items: [
      { q: 'Ich ___ die Flasche auf den Tisch.', o: ['stelle', 'stehe', 'liege'], a: 'stelle' },
      { q: 'Die Flasche ___ auf dem Tisch.', o: ['steht', 'stellt', 'legt'], a: 'steht' },
      { q: 'Er ___ die Zeitung auf das Sofa.', o: ['legt', 'liegt', 'steht'], a: 'legt' },
      { q: 'Die Zeitung ___ auf dem Sofa.', o: ['liegt', 'legt', 'stellt'], a: 'liegt' },
      { q: 'Das Bild ___ an der Wand.', o: ['hängt', 'stellt', 'legt'], a: 'hängt' },
      { q: 'Wohin ___ ihr die Kerzen?', o: ['stellt', 'steht', 'liegt'], a: 'stellt' }
    ] },
    { titel: 'Grammatik: als oder wenn?', anweisung: 'Ergänzen Sie als oder wenn.', anweisungAr: 'als لحدث واحد في الماضي، و wenn لحدث متكرر أو في الحاضر.', typ: 'select', o: ['als', 'wenn'], items: [
      { q: '___ Melly 14 Jahre alt war, hat sie die Schule gewechselt.', a: 'als' },
      { q: 'Immer ___ sie traurig war, hat sie Musik gehört.', a: 'wenn' },
      { q: '___ wir umgezogen sind, hat es geregnet.', a: 'als' },
      { q: '___ ich Zeit habe, gehe ich mit dem Hund spazieren.', a: 'wenn' },
      { q: '___ ich ein Kind war, hatten wir eine Katze.', a: 'als' },
      { q: 'Jedes Mal, ___ der Nachbar Musik macht, kann ich nicht schlafen.', a: 'wenn' }
    ] },
    { titel: 'Grammatik: Sätze mit als und wenn', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة.', typ: 'words', items: [
      { q: 'Satz (.)', w: ['als', 'ich', 'nach Berlin', 'gezogen bin,', 'kannte', 'ich', 'niemanden'], a: ['als ich nach Berlin gezogen bin, kannte ich niemanden'] },
      { q: 'Satz (.)', w: ['wenn', 'die Nachbarn', 'im Urlaub', 'sind,', 'gieße', 'ich', 'die Blumen'], a: ['wenn die Nachbarn im Urlaub sind, gieße ich die Blumen'] }
    ] },
    { titel: 'Redemittel: Bitten, beschweren, entschuldigen', anweisung: 'Was macht die Person?', anweisungAr: 'ماذا يفعل المتحدث: يطلب خدمة، أم يشتكي، أم يعتذر؟', typ: 'select', o: ['um einen Gefallen bitten', 'sich beschweren', 'sich entschuldigen'], items: [
      { q: '„Könnten Sie mir einen Gefallen tun?“', a: 'um einen Gefallen bitten' },
      { q: '„Es stört mich, wenn Sie nachts so laut Musik hören.“', a: 'sich beschweren' },
      { q: '„Verzeihung. Das kommt nicht mehr vor.“', a: 'sich entschuldigen' },
      { q: '„Ich hätte eine Bitte: Könnten Sie mein Paket annehmen?“', a: 'um einen Gefallen bitten' },
      { q: '„Sie können doch nicht immer Ihr Fahrrad in den Flur stellen!“', a: 'sich beschweren' },
      { q: '„Das tut mir leid. Entschuldigung.“', a: 'sich entschuldigen' }
    ] },
    { titel: 'Redemittel: Auf eine Bitte reagieren', anweisung: 'Welche Reaktion passt? Ordnen Sie zu.', anweisungAr: 'صِل كل جملة بالرد المناسب.', typ: 'match', items: [
      { q: '', pairs: [
        ['Könnten Sie meine Blumen gießen?', 'Natürlich, das mache ich gern.'],
        ['Könnten Sie die Musik leiser machen?', 'Oh, Verzeihung! Das kommt nicht mehr vor.'],
        ['Könnten Sie mir beim Umzug helfen?', 'Schade, das geht leider nicht. Ich arbeite.'],
        ['Ich wollte Sie fragen, ob ich Ihre Leiter leihen kann.', 'Ja, gerne. Kein Problem!']
      ] }
    ] },
    { titel: 'Redemittel: Auf Informationen reagieren', anweisung: 'Welche Reaktion passt?', anweisungAr: 'اختر الرد المناسب على المعلومة.', typ: 'mcq', items: [
      { q: 'In Deutschland leben über 34 Millionen Haustiere.', o: ['Mich hat überrascht, dass es so viele sind.', 'Das kommt nicht mehr vor.', 'Natürlich, das mache ich gern.'], a: 'Mich hat überrascht, dass es so viele sind.' },
      { q: 'Viele Deutsche feiern im Sommer ein Hoffest mit allen Nachbarn.', o: ['Das ist bei uns ganz anders.', 'Es stört mich, wenn …', 'Könnten Sie mir helfen?'], a: 'Das ist bei uns ganz anders.' },
      { q: 'Hunde müssen in Deutschland Steuern bezahlen.', o: ['Ich habe nicht gewusst, dass es eine Hundesteuer gibt.', 'Verzeihung!', 'Ja, gerne.'], a: 'Ich habe nicht gewusst, dass es eine Hundesteuer gibt.' }
    ] },
    { titel: 'Lesen: Hausordnung und Nachbarn', anweisung: 'Lesen Sie den Aushang. Richtig oder falsch?', anweisungAr: 'اقرأ الإعلان المعلَّق. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Liebe Nachbarinnen und Nachbarn,\nam Samstag, den 14. Juni, feiern wir unser Sommerfest im Hof! Wir beginnen um 16 Uhr. Bitte bringt einen Kuchen, einen Salat oder etwas zu trinken mit. Für die Kinder gibt es Spiele. Wir brauchen noch Hilfe: Wer kann am Vormittag Tische und Stühle aus dem Keller in den Hof tragen? Wer hat Lampions? Bitte schreibt euren Namen auf die Liste neben dem Briefkasten. Ab 22 Uhr ist Nachtruhe. Dann gehen wir in die Wohnungen.\nFamilie Nasser, 2. Stock',
      items: [
        { q: 'Das Sommerfest findet im Hof statt.', a: true },
        { q: 'Die Nachbarn sollen etwas zum Essen oder Trinken mitbringen.', a: true },
        { q: 'Die Tische stehen schon im Hof.', a: false },
        { q: 'Die Liste hängt im Keller.', a: false },
        { q: 'Das Fest dauert die ganze Nacht.', a: false }
      ] },
    { titel: 'Schreiben: Eine Nachricht an den Nachbarn', anweisung: 'Sie fahren zwei Wochen in Urlaub. Schreiben Sie Ihrer Nachbarin, Frau Krüger, eine Nachricht (60–80 Wörter): Bitten Sie sie höflich um einen Gefallen (Blumen gießen, Briefkasten leeren). Sagen Sie, wo der Schlüssel liegt und wo die Gießkanne steht (Wechselpräpositionen!). Bedanken Sie sich und bieten Sie etwas an.', anweisungAr: 'ستسافر أسبوعين. اكتب رسالة لجارتك السيدة Krüger (60–80 كلمة): اطلب منها خدمة بأدب (سقي الزرع وتفريغ صندوق البريد)، وأخبرها أين المفتاح وأين إبريق السقي (استخدم حروف الجر المتغيّرة)، واشكرها واعرض عليها شيئًا. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nLiebe Frau …,\nKönnten Sie mir einen Gefallen tun? / Ich hätte eine Bitte: …\nDer Schlüssel liegt unter/auf/in … / Die Gießkanne steht neben/hinter …\nVielen Dank! / Das ist sehr nett von Ihnen.\nWenn Sie in Urlaub fahren, … ich gern Ihre …',
      items: [
        { q: 'Liebe Frau Krüger, …', min: 55, muster: 'Liebe Frau Krüger,\nich fahre vom 1. bis zum 14. August nach Ägypten. Könnten Sie mir einen Gefallen tun? Könnten Sie bitte zweimal pro Woche meine Blumen gießen und meinen Briefkasten leeren? Der Schlüssel liegt ab Freitag in Ihrem Briefkasten. Die Gießkanne steht in der Küche neben dem Kühlschrank. Die Briefe können Sie einfach auf den Tisch im Flur legen. Vielen Dank, das ist sehr nett von Ihnen! Wenn Sie in Urlaub fahren, füttere ich gern Ihre Katze.\nViele Grüße\nHoda Mansour' }
    ] }
  ]
};
