// Aspekte neu C1 – Kapitel 3: An die Arbeit! (M1 Ein bunter Lebenslauf · M2 Probieren geht über Studieren? · M3 Multitasking · M4 Soft Skills)
// Grammatik: Subjekt- und Objektsätze · weiterführende Nebensätze
// Prüfung: telc C1 Leseverstehen Teil 1 (Lückentext mit Sätzen), Goethe C1 Schreiben Teil 2 (formelle Mitteilung)
window.UEBUNG = {
  kurs: 'Aspekte neu C1', kapitel: 3, titel: 'An die Arbeit!',
  titelAr: 'العمل: السيرة الذاتية، والدراسة أم التدريب المهني، وتعدد المهام، والمهارات الشخصية – جمل الفاعل والمفعول، والجمل الفرعية الاستئنافية',
  teile: [
    { teil: 'A', titel: 'Lesen – telc C1 Leseverstehen Teil 1', anweisung: 'Lesen Sie den Text. Welcher Satz gehört in welche Lücke? Ein Satz bleibt übrig.', anweisungAr: 'اختر الجملة المناسبة لكل فراغ. تبقى جملة واحدة دون استخدام.', typ: 'select', o: ['a) Das Gehirn springt in Wahrheit nur sehr schnell zwischen den Aufgaben hin und her.', 'b) Die Fehlerquote steigt dabei deutlich an.', 'c) Frauen gelten deshalb als die besseren Manager.', 'd) Wer konzentriert arbeiten will, sollte daher feste Zeiten für E-Mails einplanen.', 'e) Viele Arbeitgeber erwarten diese Fähigkeit ganz selbstverständlich.'],
      text: 'Der Mythos Multitasking\nIn Stellenanzeigen wird häufig „Multitaskingfähigkeit“ verlangt. __(1)__ Doch können Menschen tatsächlich mehrere Dinge gleichzeitig erledigen? Hirnforscher sind skeptisch. Zwar gelingt es uns, beim Gehen zu telefonieren, weil eine der beiden Tätigkeiten automatisiert abläuft. Sobald jedoch zwei Aufgaben unsere volle Aufmerksamkeit erfordern, stoßen wir an Grenzen. __(2)__ Jeder dieser Wechsel kostet Zeit und Energie. Studien belegen, dass Personen, die ständig zwischen E-Mails, Telefonaten und Berichten wechseln, für ihre Arbeit deutlich länger brauchen. __(3)__ Was als Effizienz erscheint, ist also in Wirklichkeit oft das Gegenteil. __(4)__ Das Smartphone verschwindet in dieser Zeit am besten in der Schublade.',
      items: [
        { q: 'Lücke 1: ___', a: 'e) Viele Arbeitgeber erwarten diese Fähigkeit ganz selbstverständlich.' },
        { q: 'Lücke 2: ___', a: 'a) Das Gehirn springt in Wahrheit nur sehr schnell zwischen den Aufgaben hin und her.' },
        { q: 'Lücke 3: ___', a: 'b) Die Fehlerquote steigt dabei deutlich an.' },
        { q: 'Lücke 4: ___', a: 'd) Wer konzentriert arbeiten will, sollte daher feste Zeiten für E-Mails einplanen.' }
      ] },
    { teil: 'B1', titel: 'Wortschatz: Beruf und Bewerbung', anweisung: 'Ergänzen Sie den passenden Ausdruck.', anweisungAr: 'أكمل بالتعبير المناسب.', typ: 'select', o: ['Lücken im Lebenslauf', 'Probezeit', 'duale Ausbildung', 'Arbeitsvertrag', 'Durchsetzungsvermögen', 'Belastbarkeit'], items: [
      { q: 'Personalchefs fragen oft nach ___, zum Beispiel nach einem Jahr ohne Arbeit.', a: 'Lücken im Lebenslauf' },
      { q: 'Während der ___ kann beiden Seiten mit einer Frist von zwei Wochen gekündigt werden.', a: 'Probezeit' },
      { q: 'Bei der ___ lernt man sowohl im Betrieb als auch in der Berufsschule.', a: 'duale Ausbildung' },
      { q: 'Lesen Sie den ___ genau durch, bevor Sie ihn unterschreiben.', a: 'Arbeitsvertrag' },
      { q: 'Als Teamleiterin braucht sie ___, um ihre Ideen gegen Widerstände umzusetzen.', a: 'Durchsetzungsvermögen' },
      { q: 'In der Notaufnahme ist hohe ___ unverzichtbar.', a: 'Belastbarkeit' }
    ] },
    { teil: 'B2', titel: 'Grammatik: Subjekt- und Objektsätze', anweisung: 'Welcher Satz hat dieselbe Bedeutung?', anweisungAr: 'جملة الفاعل أو المفعول (dass / Infinitiv / w-Frage) يمكن تحويلها إلى اسم والعكس: Mich freut, dass du kommst = Mich freut dein Kommen.', typ: 'mcq', items: [
      { q: 'Dass er gekündigt hat, überrascht alle. (Nomen)', o: ['Seine Kündigung überrascht alle.', 'Bei seiner Kündigung überrascht alle.', 'Wegen seiner Kündigung überrascht alle.'], a: 'Seine Kündigung überrascht alle.' },
      { q: 'Die Chefin erwartet Pünktlichkeit. (Nebensatz)', o: ['Die Chefin erwartet, dass man pünktlich ist.', 'Die Chefin erwartet, ob man pünktlich ist.', 'Die Chefin erwartet, pünktlich zu sein wird.'], a: 'Die Chefin erwartet, dass man pünktlich ist.' },
      { q: 'Wann die Stelle besetzt wird, ist noch unklar. (Nomen)', o: ['Der Zeitpunkt der Stellenbesetzung ist noch unklar.', 'Die Stelle ist wann unklar.', 'Bei der Stellenbesetzung ist es noch unklar.'], a: 'Der Zeitpunkt der Stellenbesetzung ist noch unklar.' },
      { q: 'Ich bedauere meine Entscheidung. (Infinitiv)', o: ['Ich bedauere, mich so entschieden zu haben.', 'Ich bedauere, dass ich entscheiden zu haben.', 'Ich bedauere, entschieden habe.'], a: 'Ich bedauere, mich so entschieden zu haben.' },
      { q: 'Es ist wichtig, ___ man im Vorstellungsgespräch authentisch bleibt.', o: ['dass', 'ob', 'was'], a: 'dass' }
    ] },
    { teil: 'B3', titel: 'Grammatik: Weiterführende Nebensätze', anweisung: 'Ergänzen Sie das passende Wort.', anweisungAr: 'الجملة الفرعية الاستئنافية تعلّق على الجملة الرئيسية كلها: was, weshalb/weswegen, wo(r) + حرف جر (worüber, womit …).', typ: 'select', items: [
      { q: 'Er hat die Probezeit bestanden, ___ ihn sehr freut.', o: ['was', 'das', 'welches'], a: 'was' },
      { q: 'Sie hat ein Jahr im Ausland gearbeitet, ___ sie jetzt fließend Englisch spricht.', o: ['weshalb', 'was', 'worüber'], a: 'weshalb' },
      { q: 'Der Kollege kommt ständig zu spät, ___ sich das ganze Team ärgert.', o: ['worüber', 'was', 'worauf'], a: 'worüber' },
      { q: 'Wir bekommen ab nächstem Jahr mehr Urlaub, ___ wir lange gekämpft haben.', o: ['wofür', 'was', 'weshalb'], a: 'wofür' },
      { q: 'Sie hat sich für eine Ausbildung entschieden, ___ ihre Eltern zunächst nicht einverstanden waren.', o: ['womit', 'was', 'worauf'], a: 'womit' }
    ] },
    { teil: 'B4', titel: 'Grammatik: Sätze bauen', anweisung: 'Bauen Sie den Satz.', anweisungAr: 'رتّب الجملة.', typ: 'words', items: [
      { q: 'weiterführender Nebensatz (.)', w: ['sie', 'hat', 'die Stelle', 'bekommen,', 'was', 'niemand', 'erwartet', 'hatte'], a: ['sie hat die stelle bekommen, was niemand erwartet hatte'] },
      { q: 'Subjektsatz (.)', w: ['dass', 'Soft Skills', 'immer wichtiger', 'werden,', 'zeigen', 'viele', 'Studien'], a: ['dass soft skills immer wichtiger werden, zeigen viele studien'] }
    ] },
    { teil: 'C1', titel: 'Sprechen: Beratung und Vortrag', anweisung: 'Lesen Sie, was die Person sagt. Welche Antwort ist am angemessensten?', anweisungAr: 'اختر الرد الأنسب.', typ: 'mcq', items: [
      { q: 'Berufsberaterin: „Haben Sie schon überlegt, ob ein Studium oder eine Ausbildung besser zu Ihnen passt?“', o: ['Ehrlich gesagt schwanke ich noch. Mich reizt die Praxisnähe einer Ausbildung, andererseits eröffnet ein Studium langfristig mehr Möglichkeiten.', 'Ja.', 'Das ist mir eigentlich egal.'], a: 'Ehrlich gesagt schwanke ich noch. Mich reizt die Praxisnähe einer Ausbildung, andererseits eröffnet ein Studium langfristig mehr Möglichkeiten.' },
      { q: 'Personalchef: „Wie erklären Sie die Lücke in Ihrem Lebenslauf?“', o: ['In dieser Zeit habe ich meinen Vater gepflegt. Dabei habe ich gelernt, Verantwortung zu übernehmen und mich gut zu organisieren.', 'Darüber möchte ich nicht sprechen.', 'Welche Lücke?'], a: 'In dieser Zeit habe ich meinen Vater gepflegt. Dabei habe ich gelernt, Verantwortung zu übernehmen und mich gut zu organisieren.' },
      { q: 'Sie leiten zum Hauptteil Ihres Vortrags über.', o: ['Nach diesem kurzen Überblick möchte ich nun näher auf die einzelnen Soft Skills eingehen.', 'So, jetzt der Rest.', 'Also, weiter.'], a: 'Nach diesem kurzen Überblick möchte ich nun näher auf die einzelnen Soft Skills eingehen.' },
      { q: 'Ein Zuhörer stellt eine kritische Frage, die nicht zu Ihrem Thema gehört.', o: ['Das ist ein spannender Aspekt, der allerdings über mein Thema hinausgeht. Gern können wir im Anschluss darüber sprechen.', 'Das gehört nicht hierher.', 'Keine Ahnung.'], a: 'Das ist ein spannender Aspekt, der allerdings über mein Thema hinausgeht. Gern können wir im Anschluss darüber sprechen.' },
      { q: 'Kollegin: „Ich schaffe meine Arbeit nur, wenn ich alles gleichzeitig mache.“', o: ['Das kann ich nachvollziehen, aber Studien zeigen, dass man konzentrierter arbeitet, wenn man eine Aufgabe nach der anderen erledigt.', 'Dann mach doch.', 'Du bist eben nicht organisiert.'], a: 'Das kann ich nachvollziehen, aber Studien zeigen, dass man konzentrierter arbeitet, wenn man eine Aufgabe nach der anderen erledigt.' }
    ] },
    { teil: 'C2', titel: 'Sprechen: Soft Skills', anweisung: 'Welche Kompetenz wird beschrieben?', anweisungAr: 'ما المهارة الشخصية الموصوفة؟', typ: 'select', o: ['Teamfähigkeit', 'Kritikfähigkeit', 'Zeitmanagement', 'Empathie'], items: [
      { q: 'Sie nimmt Verbesserungsvorschläge an, ohne beleidigt zu sein.', a: 'Kritikfähigkeit' },
      { q: 'Er spürt sofort, wenn es einem Kunden schlecht geht.', a: 'Empathie' },
      { q: 'Sie plant ihre Woche so, dass sie alle Fristen einhält.', a: 'Zeitmanagement' },
      { q: 'Er teilt Informationen gern und unterstützt seine Kollegen.', a: 'Teamfähigkeit' },
      { q: 'Sie bedankt sich für eine negative Rückmeldung und ändert ihr Verhalten.', a: 'Kritikfähigkeit' },
      { q: 'Er setzt Prioritäten und lässt sich nicht von Unwichtigem ablenken.', a: 'Zeitmanagement' }
    ] },
    { teil: 'D', titel: 'Schreiben – Goethe C1 Schreiben Teil 2 (formelle Mitteilung)', anweisung: 'Sie haben ein Jobangebot erhalten und sollen den Arbeitsvertrag unterschreiben. Einige Punkte sind Ihnen jedoch unklar. Schreiben Sie an die Personalabteilung, Frau Dr. Seidel (ca. 150 Wörter). Bedanken Sie sich für das Angebot, bitten Sie um Klärung der Arbeitszeitregelung und der Überstunden, fragen Sie nach Weiterbildungsmöglichkeiten und schlagen Sie einen Gesprächstermin vor.', anweisungAr: 'تدريب على امتحان Goethe C1 (الكتابة، الجزء 2): رسالة رسمية (نحو 150 كلمة) إلى قسم الموظفين لتوضيح بنود عقد العمل. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nSehr geehrte Frau Dr. …,\nhaben Sie vielen Dank für … / Ich freue mich sehr über …\nBevor ich den Vertrag unterzeichne, würde ich gern einige Punkte klären.\nUnklar ist mir, ob … / In § … heißt es, dass …, was für mich Fragen aufwirft.\nDarüber hinaus wäre ich Ihnen dankbar, wenn Sie mir mitteilen könnten, …\nFür ein kurzes Gespräch stehe ich Ihnen gern am … zur Verfügung.\nMit freundlichen Grüßen',
      items: [
        { q: 'Ihre Mitteilung', min: 130, muster: 'Sehr geehrte Frau Dr. Seidel,\nhaben Sie vielen Dank für Ihr Angebot, die Stelle als Projektkoordinatorin in Ihrem Unternehmen anzutreten. Ich freue mich sehr über Ihr Vertrauen.\nBevor ich den Vertrag unterzeichne, würde ich jedoch gern einige Punkte klären. In § 4 heißt es, dass die wöchentliche Arbeitszeit „je nach betrieblichem Bedarf“ variieren könne, was für mich Fragen aufwirft. Unklar ist mir insbesondere, ob Überstunden durch Freizeit ausgeglichen oder vergütet werden und ob es hierfür eine Obergrenze gibt.\nDarüber hinaus wäre ich Ihnen dankbar, wenn Sie mir mitteilen könnten, welche Weiterbildungsmöglichkeiten Ihr Unternehmen anbietet. Da ich mich langfristig im Bereich Projektmanagement weiterentwickeln möchte, ist dieser Aspekt für mich von großer Bedeutung.\nFür ein kurzes Gespräch stehe ich Ihnen gern am kommenden Dienstag oder Mittwoch ab 14 Uhr zur Verfügung.\nMit freundlichen Grüßen\nSalma Abdelaziz' }
    ] }
  ]
};
