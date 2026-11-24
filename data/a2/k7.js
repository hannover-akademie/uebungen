// Netzwerk neu A2 – Kapitel 7: Ganz schön mobil
// Grammatik: indirekte Fragesätze (W-Fragen, ob), Ortsangaben (an … vorbei, bis zu, durch, gegenüber von) · Redemittel: Informationen erfragen, Meinung sagen, Grafik beschreiben
window.UEBUNG = {
  kurs: 'Netzwerk neu A2', kapitel: 7, titel: 'Ganz schön mobil',
  titelAr: 'المواصلات والطريق إلى العمل – الأسئلة غير المباشرة، وحروف الجر المكانية، والتعبير عن الرأي، ووصف رسم بياني',
  teile: [
    { titel: 'Wortschatz: Rund ums Auto', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'أكمل بالكلمة المناسبة عن السيارة.', typ: 'select', o: ['tanken', 'Panne', 'Stau', 'Parkhaus', 'Reifen', 'Versicherung'], items: [
      { q: 'Das Benzin ist fast leer. Ich muss ___.', a: 'tanken' },
      { q: 'Mein Auto fährt nicht mehr. Ich habe eine ___.', a: 'Panne' },
      { q: 'Auf der Autobahn stehen alle Autos. Wir stehen im ___.', a: 'Stau' },
      { q: 'In der Innenstadt gibt es keinen Parkplatz. Wir parken im ___.', a: 'Parkhaus' },
      { q: 'Ein ___ ist kaputt. Ich kann nicht weiterfahren.', a: 'Reifen' },
      { q: 'Für jedes Auto braucht man eine ___.', a: 'Versicherung' }
    ] },
    { titel: 'Wortschatz: Verkehr in der Stadt', anweisung: 'Was ist richtig? Wählen Sie.', anweisungAr: 'اختر الإجابة الصحيحة.', typ: 'mcq', items: [
      { q: 'Er fährt jeden Tag von Bonn nach Köln zur Arbeit. Er …', o: ['pendelt.', 'tankt.', 'landet.'], a: 'pendelt.' },
      { q: 'Busse und Fahrräder sind gut für die Luft. Sie sind …', o: ['umweltfreundlich.', 'versichert.', 'flexibel.'], a: 'umweltfreundlich.' },
      { q: 'Die Ampel ist rot. Der Fahrer muss …', o: ['halten.', 'abfliegen.', 'pendeln.'], a: 'halten.' },
      { q: 'Ich fahre jeden Tag mit der Bahn und kaufe deshalb eine …', o: ['Monatskarte.', 'Garage.', 'Kreuzung.'], a: 'Monatskarte.' },
      { q: 'Das Flugzeug kommt in Frankfurt an. Es …', o: ['landet.', 'bremst.', 'tankt.'], a: 'landet.' }
    ] },
    { titel: 'Wortschatz: Einen Weg beschreiben', anweisung: 'Ergänzen Sie.', anweisungAr: 'أكمل وصف الطريق.', typ: 'select', o: ['geradeaus', 'Kreuzung', 'Ampel', 'Richtung', 'gegenüber'], items: [
      { q: 'Gehen Sie immer ___, ungefähr 200 Meter.', a: 'geradeaus' },
      { q: 'An der ___ gehen Sie links. Da treffen sich zwei Straßen.', a: 'Kreuzung' },
      { q: 'Warten Sie an der ___, bis sie grün ist.', a: 'Ampel' },
      { q: 'Nehmen Sie die U-Bahn in ___ Hauptbahnhof.', a: 'Richtung' },
      { q: 'Die Post ist ___ vom Supermarkt.', a: 'gegenüber' }
    ] },
    { titel: 'Grammatik: Indirekte W-Fragen', anweisung: 'Welcher Satz ist richtig?', anweisungAr: 'في السؤال غير المباشر يأتي الفعل في آخر الجملة: Wissen Sie, wann der Zug kommt?', typ: 'mcq', items: [
      { q: '„Warum fährt der Zug nicht weiter?“ → Der Mann fragt, …', o: ['warum der Zug nicht weiterfährt.', 'warum fährt der Zug nicht weiter.', 'warum der Zug fährt nicht weiter.'], a: 'warum der Zug nicht weiterfährt.' },
      { q: '„Wohin kann ich den Koffer stellen?“ → Sie weiß nicht, …', o: ['wohin sie den Koffer stellen kann.', 'wohin kann sie den Koffer stellen.', 'wohin sie kann den Koffer stellen.'], a: 'wohin sie den Koffer stellen kann.' },
      { q: 'Könnten Sie mir sagen, …', o: ['wann der nächste Bus kommt?', 'wann kommt der nächste Bus?', 'wann der nächste Bus kommen?'], a: 'wann der nächste Bus kommt?' },
      { q: 'Ich möchte gern wissen, …', o: ['wie lange die Fahrt dauert.', 'wie lange dauert die Fahrt.', 'die Fahrt wie lange dauert.'], a: 'wie lange die Fahrt dauert.' }
    ] },
    { titel: 'Grammatik: Indirekte Fragen mit ob', anweisung: 'Ergänzen Sie ob oder ein W-Wort.', anweisungAr: 'نستعمل ob مع أسئلة نعم/لا، وأداة الاستفهام مع أسئلة W.', typ: 'select', o: ['ob', 'wann', 'wo', 'wie viel', 'warum'], items: [
      { q: '„Braucht man einen Führerschein?“ → Simon fragt, ___ man einen Führerschein braucht.', a: 'ob' },
      { q: '„Wo ist die Haltestelle?“ → Wissen Sie, ___ die Haltestelle ist?', a: 'wo' },
      { q: '„Kostet das Ticket viel?“ → Ich möchte wissen, ___ das Ticket viel kostet.', a: 'ob' },
      { q: '„Wann fährt der Zug ab?“ → Können Sie mir sagen, ___ der Zug abfährt?', a: 'wann' },
      { q: '„Wie viel kostet die Monatskarte?“ → Mich interessiert, ___ die Monatskarte kostet.', a: 'wie viel' },
      { q: '„Warum hat der Bus Verspätung?“ → Darf ich fragen, ___ der Bus Verspätung hat?', a: 'warum' }
    ] },
    { titel: 'Grammatik: Indirekte Fragen bauen', anweisung: 'Bauen Sie die Frage.', anweisungAr: 'رتّب السؤال غير المباشر.', typ: 'words', items: [
      { q: 'Frage (?)', w: ['können Sie mir sagen,', 'wo', 'der Bahnhof', 'ist'], a: ['können Sie mir sagen, wo der Bahnhof ist'] },
      { q: 'Frage (?)', w: ['wissen Sie,', 'ob', 'der Zug', 'pünktlich', 'kommt'], a: ['wissen Sie, ob der Zug pünktlich kommt'] },
      { q: 'Satz (.)', w: ['ich möchte wissen,', 'wann', 'ich', 'umsteigen', 'muss'], a: ['ich möchte wissen, wann ich umsteigen muss'] }
    ] },
    { titel: 'Grammatik: Ortsangaben', anweisung: 'Ergänzen Sie die Präposition mit Artikel.', anweisungAr: 'an … vorbei و bis zu و gegenüber von + Dativ، و durch + Akkusativ.', typ: 'select', items: [
      { q: 'Sie geht ___ Kaufhaus vorbei. (an + das Kaufhaus)', o: ['am', 'an das', 'ans'], a: 'am' },
      { q: 'Geh ___ Kaufhaus und dann links. (bis zu + das Kaufhaus)', o: ['bis zum', 'bis zur', 'bis das'], a: 'bis zum' },
      { q: 'Dann geht sie ___ Park. (durch + der Park)', o: ['durch den', 'durch dem', 'durch der'], a: 'durch den' },
      { q: 'Das Haus ist ___ Park. (gegenüber von + der Park)', o: ['gegenüber vom', 'gegenüber den', 'gegenüber der'], a: 'gegenüber vom' },
      { q: 'Fahren Sie ___ Ampel und dann rechts. (bis zu + die Ampel)', o: ['bis zur', 'bis zum', 'bis die'], a: 'bis zur' },
      { q: 'Wir laufen ___ Stadt. (durch + die Stadt)', o: ['durch die', 'durch der', 'durch den'], a: 'durch die' }
    ] },
    { titel: 'Redemittel: Dafür oder dagegen?', anweisung: 'Ist die Person dafür oder dagegen?', anweisungAr: 'هل المتحدث مؤيّد أم معارض؟', typ: 'select', o: ['dafür', 'dagegen'], items: [
      { q: '„Ich bin für mehr Radwege, weil das gesund ist.“', a: 'dafür' },
      { q: '„Ich finde E-Scooter keine gute Idee, weil sie gefährlich sind.“', a: 'dagegen' },
      { q: '„Für mich ist das Carsharing sehr praktisch.“', a: 'dafür' },
      { q: '„Ich bin gegen Autos im Stadtzentrum.“', a: 'dagegen' },
      { q: '„Ich denke, das ist richtig, weil die Luft besser wird.“', a: 'dafür' },
      { q: '„Das funktioniert nicht. Das ist unpraktisch.“', a: 'dagegen' }
    ] },
    { titel: 'Redemittel: Eine Grafik beschreiben', anweisung: 'Lesen Sie die Grafik und ergänzen Sie.', anweisungAr: 'اقرأ بيانات الرسم وأكمل الجمل.', typ: 'select', text: 'Grafik (Umfrage in einer Firma): Wie kommen die Mitarbeiter zur Arbeit?\nmit dem Auto: 45 %\nmit Bus und Bahn: 30 %\nmit dem Fahrrad: 20 %\nzu Fuß: 5 %', o: ['Die meisten', 'Nur wenige', '30 Prozent', 'mehr', 'weniger'], items: [
      { q: '___ fahren mit dem Auto zur Arbeit.', a: 'Die meisten' },
      { q: '___ gehen zu Fuß.', a: 'Nur wenige' },
      { q: '___ fahren mit Bus und Bahn.', a: '30 Prozent' },
      { q: 'Mit dem Fahrrad fahren ___ Menschen als zu Fuß.', a: 'mehr' },
      { q: 'Mit dem Fahrrad fahren ___ Menschen als mit dem Auto.', a: 'weniger' }
    ] },
    { titel: 'Lesen: Eine Zug-Geschichte', anweisung: 'Lesen Sie die Geschichte. Richtig oder falsch?', anweisungAr: 'اقرأ القصة. هل العبارة صحيحة أم خاطئة؟', typ: 'tf',
      text: 'Letzten Freitag wollte ich mit dem Zug von Hamburg nach München fahren. Plötzlich hat der Zug in einem kleinen Dorf gehalten. Niemand wusste, warum der Zug nicht weiterfährt. Eine Frau neben mir hat gefragt, ob wir noch lange warten müssen. Nach einer Stunde kam eine Durchsage: „Wegen einer Panne fährt dieser Zug nicht weiter. Bitte steigen Sie in den Bus um.“ Im Bus habe ich die Frau wiedergetroffen. Wir haben uns gut unterhalten – und heute sind wir Freunde!',
      items: [
        { q: 'Der Erzähler ist am Freitag mit dem Zug gefahren.', a: true },
        { q: 'Der Zug hat in München gehalten.', a: false },
        { q: 'Am Anfang wusste niemand, warum der Zug hält.', a: true },
        { q: 'Die Fahrgäste mussten in einen anderen Zug umsteigen.', a: false },
        { q: 'Der Erzähler und die Frau sind heute Freunde.', a: true }
      ] },
    { titel: 'Schreiben: Mein Weg zur Arbeit', anweisung: 'Schreiben Sie in einem Forum über Ihren Weg zur Arbeit oder zum Kurs (60–80 Wörter): Wie kommen Sie dorthin? Wie lange brauchen Sie? Was ist gut, was ist schlecht? Was ist Ihre Meinung: Sollen Autos in der Innenstadt verboten werden?', anweisungAr: 'اكتب في منتدى عن طريقك إلى العمل أو إلى الدورة (60–80 كلمة): كيف تذهب؟ وكم من الوقت تحتاج؟ وما الإيجابيات والسلبيات؟ وما رأيك: هل يجب منع السيارات في وسط المدينة؟ سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nIch fahre/gehe jeden Tag mit … / zu Fuß …\nIch brauche ungefähr … Minuten.\nEin Vorteil / Nachteil ist, dass …\nIch bin der Meinung, dass … / Ich bin dafür/dagegen, weil …\nFür mich ist … praktisch/sinnvoll.',
      items: [
        { q: 'Ich fahre jeden Tag …', min: 55, muster: 'Ich fahre jeden Tag mit der Straßenbahn zum Deutschkurs. Ich brauche ungefähr 25 Minuten. Ein Vorteil ist, dass ich in der Bahn lesen oder Vokabeln lernen kann. Ein Nachteil ist, dass die Bahn am Morgen sehr voll ist. Manchmal hat sie auch Verspätung. Ich bin der Meinung, dass man Autos in der Innenstadt nicht verbieten soll. Aber ich bin dafür, dass es mehr Radwege gibt, weil Fahrräder umweltfreundlich und gesund sind.' }
    ] }
  ]
};
