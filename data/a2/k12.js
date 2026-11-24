// Netzwerk neu A2 – Kapitel 12: Gute Unterhaltung!
// Grammatik: Indefinitpronomen (man, jemand, niemand, alles, etwas, nichts), Relativsätze im Nominativ und Akkusativ · Redemittel: Musiker/Band vorstellen, über ein Bild sprechen, ein Bild beschreiben
window.UEBUNG = {
  kurs: 'Netzwerk neu A2', kapitel: 12, titel: 'Gute Unterhaltung!',
  titelAr: 'الموسيقى والمهرجانات والأخبار والرسم – الضمائر المبهمة وجمل الصلة (Relativsätze)',
  teile: [
    { titel: 'Wortschatz: Festival und Musik', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Hit', 'Stimmung', 'Campingplatz', 'Stehplatz', 'Versandkosten', 'Musikstil'], items: [
      { q: 'Das Lied war ein großer ___. Alle haben es im Radio gehört.', a: 'Hit' },
      { q: 'Auf dem Festival war die ___ super. Alle haben getanzt.', a: 'Stimmung' },
      { q: 'Wir übernachten im Zelt auf dem ___.', a: 'Campingplatz' },
      { q: 'Ein Sitzplatz ist zu teuer. Ich kaufe einen ___.', a: 'Stehplatz' },
      { q: 'Das Ticket kostet 89 Euro plus 5 Euro ___.', a: 'Versandkosten' },
      { q: 'Was ist dein Lieblings___? – Rock und Pop.', a: 'Musikstil' }
    ] },
    { titel: 'Wortschatz: Meldungen und Kunst', anweisung: 'Was ist richtig? Wählen Sie.', anweisungAr: 'اختر الإجابة الصحيحة.', typ: 'mcq', items: [
      { q: 'Nur 5 Euro für die Jacke! Das ist ein …', o: ['Schnäppchen.', 'Sammler.', 'Einsatz.'], a: 'Schnäppchen.' },
      { q: 'Das alte Bild kostet eine Million Euro. Es ist sehr …', o: ['wertvoll.', 'abstrakt.', 'melodisch.'], a: 'wertvoll.' },
      { q: 'Er hat am Morgen den Wecker nicht gehört. Er hat …', o: ['verschlafen.', 'bestätigt.', 'abgemalt.'], a: 'verschlafen.' },
      { q: 'Die Frau liest im Radio die Nachrichten. Sie ist …', o: ['Nachrichtensprecherin.', 'Königin.', 'Sammlerin.'], a: 'Nachrichtensprecherin.' },
      { q: 'Auf dem Bild sieht man keine Menschen und keine Dinge, nur Farben und Formen. Es ist …', o: ['abstrakt.', 'realistisch.', 'rockig.'], a: 'abstrakt.' }
    ] },
    { titel: 'Grammatik: Indefinitpronomen', anweisung: 'Ergänzen Sie das passende Pronomen.', anweisungAr: 'jemand/niemand/man للأشخاص، و alles/etwas/nichts للأشياء.', typ: 'select', o: ['jemand', 'niemand', 'man', 'alles', 'etwas', 'nichts'], items: [
      { q: 'Kann ___ auf dem Festival Getränke kaufen? – Ja, natürlich.', a: 'man' },
      { q: 'Hast du wirklich ___ eingepackt? – Ja, ich habe nichts vergessen.', a: 'alles' },
      { q: 'Hallo? Ist da ___? Ich höre Stimmen.', a: 'jemand' },
      { q: 'Ich habe angerufen, aber ___ war zu Hause.', a: 'niemand' },
      { q: 'Willst du ___ essen? Ich habe Hunger.', a: 'etwas' },
      { q: 'Auf der Karte steht ___. Sie ist leer.', a: 'nichts' }
    ] },
    { titel: 'Grammatik: Relativpronomen', anweisung: 'Ergänzen Sie das Relativpronomen.', anweisungAr: 'ضمير الصلة له شكل أداة التعريف نفسه: der/den، das، die، die. انتبه إلى الحالة (فاعل أم مفعول).', typ: 'select', o: ['der', 'den', 'das', 'die'], items: [
      { q: 'Das ist der Mann, ___ das Bild gekauft hat. (Nominativ)', a: 'der' },
      { q: 'Das ist der Sänger, ___ ich so gut finde. (Akkusativ)', a: 'den' },
      { q: 'Das ist das Bild, ___ billig war.', a: 'das' },
      { q: 'Das ist die Sängerin, ___ nicht singen konnte.', a: 'die' },
      { q: 'Das sind die Bands, ___ wir treffen wollen.', a: 'die' },
      { q: 'Peter Veit ist ein Radiosprecher, ___ viele Menschen kennen.', a: 'den' },
      { q: 'Das ist das Lied, ___ ich am liebsten höre.', a: 'das' },
      { q: 'Kennst du den Film, ___ gestern im Fernsehen kam?', a: 'der' }
    ] },
    { titel: 'Grammatik: Relativsätze bauen', anweisung: 'Bauen Sie den Satz. Das Verb steht im Relativsatz am Ende.', anweisungAr: 'رتّب الجملة: الفعل يأتي في آخر جملة الصلة.', typ: 'words', items: [
      { q: 'Satz (.)', w: ['das ist die Band,', 'die', 'heute', 'im Park', 'spielt'], a: ['das ist die Band, die heute im Park spielt'] },
      { q: 'Satz (.)', w: ['ich suche das Buch,', 'das', 'du', 'mir', 'geschenkt', 'hast'], a: ['ich suche das Buch, das du mir geschenkt hast'] },
      { q: 'Satz (.)', w: ['der Radiosprecher,', 'der', 'eingeschlafen', 'ist,', 'heißt', 'Peter Veit'], a: ['der Radiosprecher, der eingeschlafen ist, heißt Peter Veit'] }
    ] },
    { titel: 'Grammatik: Zwei Sätze – ein Satz', anweisung: 'Welcher Relativsatz ist richtig?', anweisungAr: 'اختر جملة الصلة الصحيحة.', typ: 'mcq', items: [
      { q: 'Das ist meine Freundin. Sie wohnt in Kairo.', o: ['Das ist meine Freundin, die in Kairo wohnt.', 'Das ist meine Freundin, die wohnt in Kairo.', 'Das ist meine Freundin, der in Kairo wohnt.'], a: 'Das ist meine Freundin, die in Kairo wohnt.' },
      { q: 'Ich höre gern den Rapper. Du hast ihn mir empfohlen.', o: ['Ich höre gern den Rapper, den du mir empfohlen hast.', 'Ich höre gern den Rapper, der du mir empfohlen hast.', 'Ich höre gern den Rapper, den du hast mir empfohlen.'], a: 'Ich höre gern den Rapper, den du mir empfohlen hast.' },
      { q: 'Wo ist das Ticket? Ich habe es online gekauft.', o: ['Wo ist das Ticket, das ich online gekauft habe?', 'Wo ist das Ticket, den ich online gekauft habe?', 'Wo ist das Ticket, das ich habe online gekauft?'], a: 'Wo ist das Ticket, das ich online gekauft habe?' }
    ] },
    { titel: 'Redemittel: Eine Band vorstellen', anweisung: 'Was passt zusammen? Ordnen Sie zu.', anweisungAr: 'صِل بين جزأي كل جملة في تقديم فرقة موسيقية.', typ: 'match', items: [
      { q: '', pairs: [
        ['Die Band gibt es', 'seit 2015.'],
        ['Die Band hat', 'vier Mitglieder.'],
        ['Die Musik ist', 'rockig und melodisch.'],
        ['In den Liedern geht es oft', 'um Liebe und Freundschaft.'],
        ['Am besten gefällt mir das Lied „Sommer“,', 'weil es so fröhlich ist.']
      ] }
    ] },
    { titel: 'Redemittel: Ein Bild beschreiben', anweisung: 'Lesen Sie die Bildbeschreibung und ergänzen Sie.', anweisungAr: 'اقرأ وصف اللوحة وأكمل.', typ: 'select', o: ['Vordergrund', 'Hintergrund', 'In der Mitte', 'Links', 'Titel'], items: [
      { q: 'Auf dem Bild mit dem ___ „Abend am Fluss“ sieht man eine Stadt.', a: 'Titel' },
      { q: 'Im ___, also ganz vorne, sitzt eine Frau auf einer Bank.', a: 'Vordergrund' },
      { q: '___ fließt ein großer Fluss mit Schiffen.', a: 'In der Mitte' },
      { q: 'Im ___ sieht man Berge und den Himmel.', a: 'Hintergrund' },
      { q: '___ von der Frau steht ein Baum.', a: 'Links' }
    ] },
    { titel: 'Redemittel: Über ein Bild sprechen', anweisung: 'Positiv oder negativ?', anweisungAr: 'هل الرأي في اللوحة إيجابي أم سلبي؟', typ: 'select', o: ['positiv', 'negativ'], items: [
      { q: '„Das Bild hat hübsche Farben.“', a: 'positiv' },
      { q: '„Ich finde das Bild uninteressant.“', a: 'negativ' },
      { q: '„Das ist eine witzige Idee.“', a: 'positiv' },
      { q: '„Das Bild ist zu dunkel.“', a: 'negativ' },
      { q: '„Ich finde es sehr kreativ.“', a: 'positiv' },
      { q: '„Das Bild ist ein bisschen langweilig.“', a: 'negativ' }
    ] },
    { titel: 'Lesen: Zeitungsmeldungen', anweisung: 'Lesen Sie die Meldungen. Richtig oder falsch?', anweisungAr: 'اقرأ الأخبار القصيرة. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Stille im Radio: Am Mittwochmorgen hörten die Hörerinnen und Hörer von Radio Nord drei Minuten lang nichts. Der Nachrichtensprecher, der die Sendung um 5 Uhr moderiert, war eingeschlafen. Ein Kollege hat ihn geweckt.\nEin Schnäppchen: Eine Sammlerin aus Köln hat auf dem Flohmarkt ein Bild für 20 Euro gekauft. Ein Experte, mit dem sie befreundet ist, hat bestätigt: Das Bild ist über 50.000 Euro wert!',
      items: [
        { q: 'Im Radio war drei Minuten lang Stille.', a: true },
        { q: 'Der Nachrichtensprecher war krank.', a: false },
        { q: 'Ein Kollege hat den Sprecher geweckt.', a: true },
        { q: 'Die Sammlerin hat das Bild in einem Museum gekauft.', a: false },
        { q: 'Das Bild ist sehr wertvoll.', a: true }
      ] },
    { titel: 'Schreiben: Mein Lieblingsmusiker / Meine Lieblingsband', anweisung: 'Stellen Sie in einem Blog Ihren Lieblingsmusiker, Ihre Lieblingsmusikerin oder Ihre Lieblingsband vor (60–80 Wörter): Wer ist das und woher kommt er/sie? Seit wann gibt es die Musik? Was für Musik ist das? Welches Lied gefällt Ihnen am besten und warum? Benutzen Sie mindestens einen Relativsatz.', anweisungAr: 'قدّم في مدوّنة موسيقيّك أو فرقتك المفضلة (60–80 كلمة): من هو، ومن أين؟ ومنذ متى يغنّي؟ وما نوع الموسيقى؟ وأيّ أغنية تعجبك أكثر ولماذا؟ استخدم جملة صلة واحدة على الأقل. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nEr/Sie heißt … und kommt aus …\n… macht seit … Musik. / Die Band gibt es seit …\nDie Musik ist rockig/melodisch/langsam/… / Sie spielen Pop/Rap/…\nEin bekanntes Lied heißt … / In den Liedern geht es oft um …\nAm besten gefällt mir das Lied …, weil … / Am liebsten höre ich ihn/sie, wenn …',
      items: [
        { q: 'Mein Lieblingsmusiker …', min: 55, muster: 'Mein Lieblingsmusiker heißt Mohamed Mounir und kommt aus Assuan in Ägypten. Er macht seit über 40 Jahren Musik. Seine Musik ist melodisch, und in den Liedern geht es oft um Liebe, Freiheit und das Leben am Nil. Er ist ein Sänger, den in Ägypten fast jeder kennt. Am besten gefallen mir seine Lieder über den Nil, weil sie so schön und ruhig sind. Am liebsten höre ich ihn, wenn ich mit dem Auto fahre. Dann ist meine Stimmung immer super!' }
    ] }
  ]
};
