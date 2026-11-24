// Netzwerk neu B1 – Kapitel 3: Veränderungen
// Grammatik: Präteritum (regelmäßig/unregelmäßig/Mischverben), Zeitangaben mit Dativ und Genitiv · Redemittel: vergleichen (früher/heute), einen Gegenstand/ein Ereignis beschreiben
// Prüfungstraining: Goethe B1 Lesen Teil 2 (Zeitungstext) · telc Sprachbausteine · Goethe B1 Schreiben Aufgabe 2 (Forum)
window.UEBUNG = {
  kurs: 'Netzwerk neu B1', kapitel: 3, titel: 'Veränderungen',
  titelAr: 'التغيّرات في الحياة والسعادة والآداب العامة – الماضي البسيط (Präteritum)، وحروف الجر الزمنية مع Dativ و Genitiv',
  teile: [
    { titel: 'Wortschatz: Ereignisse und Veränderungen', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة.', typ: 'select', o: ['Trennung', 'Rückkehr', 'Krise', 'Gewohnheiten', 'Herausforderung', 'radikal'], items: [
      { q: 'Nach der ___ von seiner Frau zog er in eine kleine Wohnung.', a: 'Trennung' },
      { q: 'Nach seiner ___ aus dem Ausland musste er sich wieder an Deutschland gewöhnen.', a: 'Rückkehr' },
      { q: 'Die Firma war in einer schweren ___ und musste viele Mitarbeiter entlassen.', a: 'Krise' },
      { q: 'Es ist schwer, alte ___ zu ändern.', a: 'Gewohnheiten' },
      { q: 'Die neue Stelle war für mich eine große ___.', a: 'Herausforderung' },
      { q: 'Sein Leben hat sich nach dem Unfall ___ verändert – nichts war mehr wie früher.', a: 'radikal' }
    ] },
    { titel: 'Wortschatz: Höflichkeit und Benehmen', anweisung: 'Was ist richtig? Wählen Sie.', anweisungAr: 'اختر الإجابة الصحيحة عن آداب التعامل.', typ: 'mcq', items: [
      { q: 'Unter Studierenden sagt man meistens „du“. Man …', o: ['duzt sich.', 'siezt sich.', 'umarmt sich.'], a: 'duzt sich.' },
      { q: 'Er öffnet die Tür und lässt die Frau zuerst hinein. Er …', o: ['hält ihr die Tür auf.', 'veröffentlicht die Tür.', 'überquert die Tür.'], a: 'hält ihr die Tür auf.' },
      { q: 'Die Eltern meines Mannes sind meine …', o: ['Schwiegereltern.', 'Großeltern.', 'Geschwister.'], a: 'Schwiegereltern.' },
      { q: 'Für die Reise nach Ägypten brauchen viele Europäer ein …', o: ['Visum.', 'Konsulat.', 'Zoll.'], a: 'Visum.' },
      { q: 'Wie sich ein Mensch verhält, nennt man sein …', o: ['Benehmen.', 'Verhältnis.', 'Vitamin.'], a: 'Benehmen.' }
    ] },
    { titel: 'Grammatik: Präteritum – regelmäßige Verben', anweisung: 'Schreiben Sie das Verb im Präteritum.', anweisungAr: 'الماضي البسيط للأفعال المنتظمة: الجذر + -te + النهاية، وبعد d أو t: -ete.', typ: 'gap', items: [
      { q: 'Früher ___ er als Soldat. (arbeiten, er)', a: ['arbeitete'] },
      { q: 'Wir ___ jeden Sommer an der Ostsee. (zelten)', a: ['zelteten'] },
      { q: 'Sie ___ neue Rezepte aus. (ausprobieren, sie = Singular)', a: ['probierte'] },
      { q: 'Ihr ___ in einer kleinen Stadt. (wohnen)', a: ['wohntet'] },
      { q: 'Plötzlich ___ das Handy. (klingeln)', a: ['klingelte'] }
    ] },
    { titel: 'Grammatik: Präteritum – unregelmäßige Verben und Mischverben', anweisung: 'Wählen Sie die richtige Präteritumform.', anweisungAr: 'الأفعال الشاذة يتغيّر فيها حرف العلّة (sehen ← sah)، وبعض الأفعال مختلطة (denken ← dachte).', typ: 'select', items: [
      { q: 'Gestern ___ ich einen alten Freund. (sehen)', o: ['sah', 'sehte', 'gesehen'], a: 'sah' },
      { q: 'Die Stadt ___ mir sofort. (gefallen)', o: ['gefiel', 'gefallte', 'gefällt'], a: 'gefiel' },
      { q: 'Er ___ an seine Familie in Kairo. (denken)', o: ['dachte', 'denkte', 'dacht'], a: 'dachte' },
      { q: 'Niemand ___ die Antwort. (wissen)', o: ['wusste', 'wisste', 'weißte'], a: 'wusste' },
      { q: 'Nach dem Unfall ___ sie nicht auf. (aufgeben)', o: ['gab', 'gibte', 'gebte'], a: 'gab' },
      { q: 'Er ___ mir Blumen mit. (mitbringen)', o: ['brachte', 'bringte', 'brang'], a: 'brachte' },
      { q: 'Der alte Laden ___ von einem Tag auf den anderen. (verschwinden)', o: ['verschwand', 'verschwindete', 'verschwunden'], a: 'verschwand' }
    ] },
    { titel: 'Grammatik: Perfekt oder Präteritum?', anweisung: 'Was verwendet man meistens?', anweisungAr: 'في الكلام والرسائل الشخصية نستخدم غالبًا الـ Perfekt، وفي الصحف والتقارير والقصص الـ Präteritum، ومع sein و haben والأفعال المساعدة الـ Präteritum دائمًا تقريبًا.', typ: 'select', o: ['Perfekt', 'Präteritum'], items: [
      { q: 'Sie erzählen einer Freundin am Telefon von Ihrem Wochenende.', a: 'Perfekt' },
      { q: 'Ein Zeitungsartikel berichtet über einen Unfall.', a: 'Präteritum' },
      { q: 'Ein Märchen beginnt mit dem Satz „Es war einmal ein König …“.', a: 'Präteritum' },
      { q: 'Sie schreiben einer Freundin eine persönliche E-Mail über Ihren Kinobesuch.', a: 'Perfekt' },
      { q: 'Sie sagen beim Sprechen, dass Sie gestern keine Zeit hatten (Verb haben).', a: 'Präteritum' }
    ] },
    { titel: 'Grammatik: Zeitangaben mit Dativ und Genitiv', anweisung: 'Ergänzen Sie die Präposition mit Artikel.', anweisungAr: 'مع Dativ: ab, an, bis zu, in, nach, seit, vor. ومع Genitiv: außerhalb, innerhalb, während.', typ: 'select', items: [
      { q: '___ Umzug wohnen wir am Stadtrand. (seit + der Umzug)', o: ['Seit dem', 'Seit den', 'Seit des'], a: 'Seit dem' },
      { q: 'Die Pakete kommen ___ Stunde. (innerhalb + eine Stunde)', o: ['innerhalb einer', 'innerhalb einem', 'innerhalb eine'], a: 'innerhalb einer' },
      { q: '___ Konzerts klingelte ein Handy. (während + ein Konzert)', o: ['Während eines', 'Während einem', 'Während ein'], a: 'Während eines' },
      { q: '___ nächsten Woche arbeite ich in Teilzeit. (ab + die nächste Woche)', o: ['Ab der', 'Ab die', 'Ab den'], a: 'Ab der' },
      { q: 'Wir bleiben hier ___ Urlaub. (bis zu + der Urlaub)', o: ['bis zum', 'bis zur', 'bis den'], a: 'bis zum' },
      { q: '___ Öffnungszeiten ist die Bibliothek geschlossen. (außerhalb + die Öffnungszeiten)', o: ['Außerhalb der', 'Außerhalb den', 'Außerhalb die'], a: 'Außerhalb der' }
    ] },
    { titel: 'Redemittel: Früher und heute vergleichen', anweisung: 'Ergänzen Sie die Redemittel.', anweisungAr: 'أكمل عبارات المقارنة بين الماضي والحاضر.', typ: 'select', o: ['Im Gegensatz zu', 'Im Vergleich zu', 'hat sich', 'Zum Glück', 'leichter'], items: [
      { q: '___ früher gibt es heute viel mehr Freizeitangebote.', o: ['Im Vergleich zu', 'Zum Glück', 'hat sich'], a: 'Im Vergleich zu' },
      { q: '___ heute mussten die Lehrlinge früher sehr lange arbeiten.', o: ['Im Gegensatz zu', 'leichter', 'Zum Glück'], a: 'Im Gegensatz zu' },
      { q: 'Das Leben in meinem Dorf ___ stark verändert.', a: 'hat sich' },
      { q: '___ ist die Schulbildung heute besser.', a: 'Zum Glück' },
      { q: 'Heute ist es ___, mit der Familie im Ausland Kontakt zu halten.', a: 'leichter' }
    ] },
    { titel: 'Redemittel: Ein besonderes Ereignis beschreiben', anweisung: 'Bringen Sie den Text in die richtige Reihenfolge.', anweisungAr: 'رتّب جمل الحديث عن حدث خاص.', typ: 'order', items: [
      { q: 'Ein besonderer Tag', lines: [
        'Ich habe ein Foto von meiner Hochzeit ausgesucht.',
        'Das war ein besonderer Tag, weil meine ganze Familie aus Ägypten gekommen ist.',
        'Vor diesem Tag war ich sehr nervös.',
        'Danach habe ich mich aber sehr glücklich gefühlt.',
        'Wenn ich an diesen Tag denke, fällt mir sofort die Musik ein.'
      ] }
    ] },
    { titel: 'Prüfungstraining – Goethe B1 Lesen Teil 2', anweisung: 'Lesen Sie den Zeitungstext. Welche Antwort (a, b oder c) ist richtig?', anweisungAr: 'تدريب على امتحان Goethe B1 (القراءة، الجزء 2): اقرأ المقال واختر الإجابة الصحيحة.', typ: 'mcq',
      text: 'Vom Soldaten zum Bäcker\nZwölf Jahre lang war Sebastian Hilpert Berufssoldat. „Lange war ich mit meinem Leben zufrieden“, erzählt der 38-Jährige. „Aber dann fühlte ich mich nicht mehr glücklich. Ich wollte etwas mit meinen Händen machen.“ Seine Familie war überrascht, als er von einem Tag auf den anderen kündigte. Mit 34 Jahren begann er eine Ausbildung zum Bäcker – als ältester Lehrling seiner Klasse. „Am Anfang war es nicht leicht. Ich musste um drei Uhr nachts aufstehen und verdiente sehr wenig Geld.“ Heute hat Hilpert eine eigene kleine Bäckerei in Leipzig. Seine Kunden schätzen vor allem das Brot nach alten Rezepten. „Ich habe den Schritt nie bereut“, sagt er. „Mein Leben hat sich radikal verändert – zum Glück!“',
      items: [
        { q: 'In diesem Text geht es um einen Mann, der …', o: ['seinen Beruf komplett gewechselt hat.', 'als Soldat Brot backen musste.', 'eine Bäckerei von seinen Eltern bekommen hat.'], a: 'seinen Beruf komplett gewechselt hat.' },
        { q: 'Sebastian Hilpert hat gekündigt, weil er …', o: ['lieber mit den Händen arbeiten wollte.', 'zu wenig Geld verdient hat.', 'nach Leipzig ziehen musste.'], a: 'lieber mit den Händen arbeiten wollte.' },
        { q: 'Am Anfang der Ausbildung …', o: ['musste er sehr früh aufstehen.', 'verdiente er mehr als vorher.', 'war er der jüngste Lehrling.'], a: 'musste er sehr früh aufstehen.' },
        { q: 'Heute …', o: ['ist er mit seiner Entscheidung zufrieden.', 'möchte er wieder Soldat werden.', 'arbeitet er in einer großen Fabrik.'], a: 'ist er mit seiner Entscheidung zufrieden.' }
      ] },
    { titel: 'Prüfungstraining – telc B1 Sprachbausteine', anweisung: 'Welches Wort (a, b oder c) passt in die Lücken 1–5?', anweisungAr: 'تدريب على Sprachbausteine في telc B1: اختر الكلمة المناسبة لكل فراغ.', typ: 'select',
      text: 'Als ich vor zehn Jahren nach Deutschland kam, __(1)__ ich kaum Deutsch. __(2)__ der ersten Monate fühlte ich mich oft einsam. Ich __(3)__ meine Familie sehr. Aber dann lernte ich im Sprachkurs Maria kennen, __(4)__ heute meine beste Freundin ist. Seit __(5)__ Zeit ist alles viel leichter.',
      items: [
        { q: 'Lücke 1: ___', o: ['sprach', 'sprecht', 'gesprochen'], a: 'sprach' },
        { q: 'Lücke 2: ___', o: ['Während', 'Seit', 'Bis'], a: 'Während' },
        { q: 'Lücke 3: ___', o: ['vermisste', 'vermiss', 'vermissen'], a: 'vermisste' },
        { q: 'Lücke 4: ___', o: ['die', 'der', 'das'], a: 'die' },
        { q: 'Lücke 5: ___', o: ['dieser', 'diese', 'diesen'], a: 'dieser' }
      ] },
    { titel: 'Prüfungstraining – Goethe B1 Schreiben Aufgabe 2', anweisung: 'Sie haben im Fernsehen eine Diskussionssendung zum Thema „Früher war alles besser – stimmt das?“ gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung: „Früher hatten die Menschen mehr Zeit füreinander. Heute sitzt jeder nur vor dem Handy.“ (Erik, 58) Schreiben Sie nun Ihre Meinung (ca. 80 Wörter).', anweisungAr: 'تدريب على امتحان Goethe B1 (الكتابة، المهمة 2): اكتب رأيك في منتدى (نحو 80 كلمة) عن موضوع «هل كان الماضي أفضل؟» مع ذكر أسباب وأمثلة. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nIch habe die Sendung auch gesehen und möchte meine Meinung sagen.\nIm Vergleich zu früher … / Im Gegensatz zu heute …\nEinerseits …, andererseits … / Ich bin nicht ganz der Meinung von …\nIn meiner Heimat … / Als ich ein Kind war, …\nZum Schluss möchte ich sagen, dass …',
      items: [
        { q: 'Ich habe die Sendung …', min: 70, muster: 'Ich habe die Sendung auch gesehen und bin nicht ganz der Meinung von Erik. Es stimmt, dass viele Menschen heute zu viel Zeit am Handy verbringen. Im Vergleich zu früher ist der Alltag auch hektischer. Aber das Handy hat auch große Vorteile: Ich wohne in Deutschland und meine Familie lebt in Ägypten. Früher konnten die Menschen sich nur Briefe schreiben, heute sehe ich meine Eltern jeden Tag im Videochat. Als ich ein Kind war, war vieles einfacher, aber nicht alles war besser. Man sollte das Handy nur bewusst benutzen.' }
    ] }
  ]
};
