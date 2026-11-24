// Aspekte neu C1 – Kapitel 1: Alltägliches (M1 Zeitgefühl · M2 Vereine heute · M3 Zuletzt online … · M4 Unser Zuhause)
// Grammatik: Konnektoren (andernfalls, sonst, folglich, somit, demnach, außer wenn, es sei denn) · trennbare und untrennbare Verben
// Prüfung: Goethe C1 Lesen Teil 1 (Lückentext), telc C1 Schreiben (Beschwerdebrief)
window.UEBUNG = {
  kurs: 'Aspekte neu C1', kapitel: 1, titel: 'Alltägliches',
  titelAr: 'الحياة اليومية: الإحساس بالوقت، والجمعيات، والحياة الرقمية، والسكن المشترك – أدوات الربط (andernfalls, folglich, es sei denn …) والأفعال المنفصلة وغير المنفصلة',
  teile: [
    { teil: 'A', titel: 'Lesen – Goethe C1 Lesen Teil 1', anweisung: 'Lesen Sie den Text. Welches Wort passt in die Lücke?', anweisungAr: 'اقرأ النص واختر الكلمة المناسبة لكل فراغ (على نمط Goethe C1).', typ: 'select',
      text: 'Warum die Zeit im Alter schneller vergeht\nFast jeder kennt das Phänomen: Als Kind schienen die Sommerferien __(1)__ zu dauern, heute rast ein Jahr nur so vorbei. Psychologen erklären dies __(2)__, dass unser Gehirn die Dauer eines Zeitraums im Nachhinein anhand der Zahl neuer Eindrücke bewertet. Kinder erleben ständig Neues, __(3)__ speichern sie viele Erinnerungen ab. Erwachsene hingegen folgen meist festen Routinen. Ein Arbeitstag gleicht dem anderen, und __(4)__ bleibt im Gedächtnis wenig hängen. Wer dem entgegenwirken möchte, sollte __(5)__ Abwechslung in seinen Alltag bringen – etwa durch Reisen, neue Hobbys oder einfach einen anderen Weg zur Arbeit. __(6)__ läuft man Gefahr, dass die Jahre ununterscheidbar ineinanderfließen.',
      items: [
        { q: 'Lücke 1: ___', o: ['endlos', 'kurzweilig', 'zeitig'], a: 'endlos' },
        { q: 'Lücke 2: ___', o: ['damit', 'darauf', 'davon'], a: 'damit' },
        { q: 'Lücke 3: ___', o: ['folglich', 'andernfalls', 'trotzdem'], a: 'folglich' },
        { q: 'Lücke 4: ___', o: ['somit', 'sonst', 'es sei denn'], a: 'somit' },
        { q: 'Lücke 5: ___', o: ['gezielt', 'zögerlich', 'vergeblich'], a: 'gezielt' },
        { q: 'Lücke 6: ___', o: ['Andernfalls', 'Demnach', 'Folglich'], a: 'Andernfalls' }
      ] },
    { teil: 'B1', titel: 'Wortschatz: Zeit, Vereine, Wohnen', anweisung: 'Ergänzen Sie den passenden Ausdruck.', anweisungAr: 'أكمل بالتعبير المناسب.', typ: 'select', o: ['die Zeit totschlagen', 'unter Zeitdruck', 'Mitgliedsbeitrag', 'Zoff', 'Mitbewohner', 'Ehrenamtliche'], items: [
      { q: 'Im Wartezimmer lese ich alte Zeitschriften, um ___.', a: 'die Zeit totschlagen' },
      { q: 'Kurz vor der Abgabe steht das ganze Team ___.', a: 'unter Zeitdruck' },
      { q: 'Der ___ für den Sportverein beträgt 120 Euro im Jahr.', a: 'Mitgliedsbeitrag' },
      { q: 'In unserer WG gibt es ständig ___ wegen des Abwaschs.', a: 'Zoff' },
      { q: 'Mein neuer ___ hört nachts laute Musik.', a: 'Mitbewohner' },
      { q: 'Ohne ___ könnten die meisten Vereine nicht überleben.', a: 'Ehrenamtliche' }
    ] },
    { teil: 'B2', titel: 'Grammatik: Konnektoren', anweisung: 'Welcher Konnektor passt?', anweisungAr: 'andernfalls/sonst = وإلا، folglich/somit/demnach = وبالتالي/إذن، außer wenn / es sei denn = إلا إذا (es sei denn يليه ترتيب الجملة الرئيسية أو dass).', typ: 'select', items: [
      { q: 'Wir müssen die Miete pünktlich überweisen, ___ droht uns eine Mahnung.', o: ['andernfalls', 'folglich', 'demnach'], a: 'andernfalls' },
      { q: 'Die Mitgliederzahl sinkt seit Jahren, ___ muss der Verein die Beiträge erhöhen.', o: ['folglich', 'sonst', 'es sei denn'], a: 'folglich' },
      { q: 'Ich komme morgen zum Treffen, ___ mein Zug fällt aus.', o: ['es sei denn', 'außer wenn', 'andernfalls'], a: 'es sei denn' },
      { q: 'Ich gehe jeden Tag joggen, ___ es stark regnet.', o: ['außer wenn', 'es sei denn', 'sonst'], a: 'außer wenn' },
      { q: 'Laut Hausordnung ist ab 22 Uhr Ruhe. ___ ist laute Musik danach nicht erlaubt.', o: ['Demnach', 'Andernfalls', 'Sonst'], a: 'Demnach' },
      { q: 'Beeil dich, ___ verpassen wir den Bus!', o: ['sonst', 'somit', 'demnach'], a: 'sonst' }
    ] },
    { teil: 'B3', titel: 'Grammatik: Trennbar oder untrennbar?', anweisung: 'Welche Form ist richtig?', anweisungAr: 'بعض البادئات (durch, über, um, unter, wieder) تكون منفصلة أو غير منفصلة، ويتغير المعنى: übersetzen (يترجم، غير منفصل) / übersetzen (يعبر بالقارب، منفصل).', typ: 'select', items: [
      { q: 'Der Fährmann hat uns ans andere Ufer ___. (über-setzen = mit dem Boot bringen)', o: ['übergesetzt', 'übersetzt', 'überzusetzt'], a: 'übergesetzt' },
      { q: 'Sie hat den Brief ins Arabische ___. (übersetzen = in eine andere Sprache)', o: ['übersetzt', 'übergesetzt', 'geübersetzt'], a: 'übersetzt' },
      { q: 'Der Lehrer ___ die Grammatik noch einmal. (wiederholen = noch einmal erklären)', o: ['wiederholt', 'holt … wieder', 'wiedergeholt'], a: 'wiederholt' },
      { q: 'Wegen der Baustelle mussten wir das Stadtzentrum ___. (umfahren = um etwas herumfahren)', o: ['umfahren', 'umgefahren', 'umzufahren'], a: 'umfahren' },
      { q: 'Der Betrunkene hat ein Verkehrsschild ___. (umfahren = zu Boden fahren)', o: ['umgefahren', 'umfahren', 'geumfahren'], a: 'umgefahren' },
      { q: 'Sie hat seine Lüge sofort ___. (durchschauen = erkennen)', o: ['durchschaut', 'durchgeschaut', 'durchzuschaut'], a: 'durchschaut' }
    ] },
    { teil: 'B4', titel: 'Grammatik: Sätze bauen', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة.', typ: 'words', items: [
      { q: 'es sei denn (.)', w: ['wir', 'treffen uns', 'um acht,', 'es sei denn,', 'du', 'hast', 'keine Zeit'], a: ['wir treffen uns um acht, es sei denn, du hast keine zeit'] },
      { q: 'folglich (.)', w: ['die WG-Kasse', 'war leer,', 'folglich', 'mussten', 'alle', 'zehn Euro', 'nachzahlen'], a: ['die wg-kasse war leer, folglich mussten alle zehn euro nachzahlen'] }
    ] },
    { teil: 'C1', titel: 'Sprechen: Was antworten Sie?', anweisung: 'Lesen Sie, was die Person sagt. Welche Antwort ist sprachlich und inhaltlich am angemessensten?', anweisungAr: 'اختر الرد الأنسب لغويًا ومضمونًا في المحادثة.', typ: 'mcq', items: [
      { q: 'Mitbewohnerin: „Du hast schon wieder meine Milch ausgetrunken!“ – Sie möchten den Konflikt konstruktiv lösen.', o: ['Oh, das tut mir leid, das war gedankenlos. Was hältst du davon, wenn wir gemeinsame Lebensmittel künftig aus der WG-Kasse kaufen?', 'Reg dich nicht so auf, es war doch nur Milch.', 'Dann kauf dir halt neue.'], a: 'Oh, das tut mir leid, das war gedankenlos. Was hältst du davon, wenn wir gemeinsame Lebensmittel künftig aus der WG-Kasse kaufen?' },
      { q: 'Vereinsvorstand: „Warum sollten Sie gerade in unserem Verein Mitglied werden?“', o: ['Mich überzeugt vor allem, dass Sie nicht nur Sport anbieten, sondern auch Integration fördern – genau dafür möchte ich mich engagieren.', 'Weil er in der Nähe ist.', 'Das weiß ich noch nicht so genau.'], a: 'Mich überzeugt vor allem, dass Sie nicht nur Sport anbieten, sondern auch Integration fördern – genau dafür möchte ich mich engagieren.' },
      { q: 'Kollege: „Ich habe ständig das Gefühl, dass mir die Zeit davonläuft.“', o: ['Das kenne ich. Mir hat es geholfen, Prioritäten zu setzen und das Handy während der Arbeit bewusst wegzulegen.', 'Dann arbeite schneller.', 'Zeit ist relativ.'], a: 'Das kenne ich. Mir hat es geholfen, Prioritäten zu setzen und das Handy während der Arbeit bewusst wegzulegen.' },
      { q: 'Freundin: „Ich überlege, ganz auf soziale Medien zu verzichten.“ – Sie äußern Bedenken.', o: ['Ich verstehe dich, gebe aber zu bedenken, dass du dann womöglich wichtige Informationen und Kontakte verpasst.', 'Mach doch, was du willst.', 'Das schaffst du sowieso nicht.'], a: 'Ich verstehe dich, gebe aber zu bedenken, dass du dann womöglich wichtige Informationen und Kontakte verpasst.' },
      { q: 'Vermieter: „Die Reparatur der Heizung kann frühestens in drei Wochen erfolgen.“', o: ['Bei allem Verständnis: Das ist mitten im Winter nicht zumutbar. Ich muss Sie bitten, umgehend einen Handwerker zu beauftragen.', 'Okay, dann friere ich eben.', 'Das ist eine Frechheit, Sie sind ein schlechter Vermieter!'], a: 'Bei allem Verständnis: Das ist mitten im Winter nicht zumutbar. Ich muss Sie bitten, umgehend einen Handwerker zu beauftragen.' }
    ] },
    { teil: 'C2', titel: 'Sprechen: Redemittel', anweisung: 'Wozu dient der Ausdruck?', anweisungAr: 'ما وظيفة كل تعبير؟', typ: 'select', o: ['jemanden überzeugen', 'sich beschweren', 'einen Kompromiss vorschlagen'], items: [
      { q: '„Sie werden sehen, dass sich eine Mitgliedschaft in jeder Hinsicht lohnt.“', a: 'jemanden überzeugen' },
      { q: '„Ich muss mich leider darüber beklagen, dass …“', a: 'sich beschweren' },
      { q: '„Wie wäre es, wenn jeder abwechselnd eine Woche putzt?“', a: 'einen Kompromiss vorschlagen' },
      { q: '„Es ist nicht hinnehmbar, dass …“', a: 'sich beschweren' },
      { q: '„Lassen Sie sich diese einmalige Gelegenheit nicht entgehen!“', a: 'jemanden überzeugen' },
      { q: '„Wir könnten uns doch in der Mitte treffen.“', a: 'einen Kompromiss vorschlagen' }
    ] },
    { teil: 'D', titel: 'Schreiben – telc C1 (Beschwerdebrief)', anweisung: 'Seit Monaten stört Sie der Lärm einer Baustelle neben Ihrem Wohnhaus – auch nachts und am Wochenende. Schreiben Sie einen Beschwerdebrief an die Hausverwaltung (ca. 200 Wörter). Schildern Sie die Situation sachlich, beschreiben Sie die Folgen für Sie, verweisen Sie auf geltende Regeln und fordern Sie konkrete Maßnahmen.', anweisungAr: 'اكتب رسالة شكوى رسمية (نحو 200 كلمة) إلى إدارة العقار بسبب ضوضاء ورشة بناء: وصف موضوعي، والعواقب، والإشارة إلى القواعد، ومطالب محددة. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nSehr geehrte Damen und Herren,\nhiermit möchte ich mich nachdrücklich über … beschweren.\nSeit … ist es … / Erschwerend kommt hinzu, dass …\nDies hat zur Folge, dass … / Folglich …\nLaut Hausordnung / Gemäß … ist … untersagt.\nIch fordere Sie daher auf, … / Andernfalls sehe ich mich gezwungen, …\nMit freundlichen Grüßen',
      items: [
        { q: 'Ihr Brief', min: 180, muster: 'Sehr geehrte Damen und Herren,\nhiermit möchte ich mich nachdrücklich über den Lärm der Baustelle neben unserem Wohnhaus in der Lindenstraße 12 beschweren.\nSeit Anfang März wird dort nicht nur werktags, sondern zunehmend auch nachts und an Wochenenden gearbeitet. Erschwerend kommt hinzu, dass schwere Maschinen häufig bereits um fünf Uhr morgens in Betrieb genommen werden.\nDies hat zur Folge, dass meine Familie seit Wochen kaum noch durchschlafen kann. Meine Kinder sind in der Schule unkonzentriert, und ich selbst arbeite als Krankenpfleger im Schichtdienst und bin folglich auf erholsamen Schlaf angewiesen.\nGemäß den geltenden Lärmschutzvorschriften sind Bauarbeiten nachts sowie an Sonn- und Feiertagen grundsätzlich untersagt, es sei denn, es liegt eine Ausnahmegenehmigung vor. Eine solche wurde den Mietern jedoch nie mitgeteilt.\nIch fordere Sie daher auf, umgehend Kontakt mit der Baufirma aufzunehmen und für die Einhaltung der Ruhezeiten zu sorgen. Darüber hinaus halte ich eine angemessene Mietminderung für die vergangenen Monate für gerechtfertigt. Andernfalls sehe ich mich gezwungen, rechtlichen Rat einzuholen.\nIch bitte um eine schriftliche Stellungnahme bis zum 30. dieses Monats.\nMit freundlichen Grüßen\nKhaled Ibrahim' }
    ] }
  ]
};
