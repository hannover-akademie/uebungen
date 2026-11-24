// Aspekte neu C1 – Kapitel 5: Ziele (M1 Vernetzt · M2 Der Weg ist das Ziel · M3 Ab morgen! · M4 Ehrenamtlich)
// Grammatik: negative Konsekutivsätze · Konzessivsätze · Finalsätze
// Prüfung: telc C1 Leseverstehen Teil 2 (Überschriften), C1 Aufsatz (Erörterung)
window.UEBUNG = {
  kurs: 'Aspekte neu C1', kapitel: 5, titel: 'Ziele',
  titelAr: 'الأهداف: الشبكات الاجتماعية، والأهداف المهنية، والقرارات الجديدة، والعمل التطوعي – جمل النتيجة المنفية، وجمل التنازل (obwohl, trotz)، وجمل الهدف',
  teile: [
    { teil: 'A', titel: 'Lesen – telc C1 Leseverstehen Teil 2', anweisung: 'Lesen Sie die Texte 1–4 und die Überschriften a–f. Welche Überschrift passt am besten? Zwei Überschriften bleiben übrig.', anweisungAr: 'اختر العنوان الأنسب لكل نص. يبقى عنوانان دون استخدام.', typ: 'select', o: ['a) Helfen, um selbst zu lernen', 'b) Vorsätze scheitern an zu hohen Zielen', 'c) Netzwerk ersetzt Bewerbungsmappe', 'd) Ehrenamt in der Krise', 'e) Zu viele Kontakte machen einsam', 'f) Ein Verein zahlt seinen Helfern Gehalt'],
      text: '1 Laut einer Umfrage haben 80 % der Deutschen ihre Neujahrsvorsätze spätestens im Februar aufgegeben. Psychologen führen das vor allem darauf zurück, dass viele sich zu viel auf einmal vornehmen. Wer täglich zwei Stunden Sport treiben will, obwohl er bisher nie trainiert hat, ist schnell frustriert. Erfolgreicher sind kleine, konkrete Schritte.\n2 Vereine, Feuerwehren und Hilfsorganisationen schlagen Alarm: Zwar ist die Zahl der Menschen, die sich gelegentlich engagieren, gestiegen, doch immer weniger sind bereit, langfristig Verantwortung zu übernehmen. Vor allem für Vorstandsposten finden sich kaum noch Freiwillige.\n3 Immer mehr Personalabteilungen schauen sich zuerst die Profile von Bewerbern in beruflichen Netzwerken an. Wer dort mit aussagekräftigen Empfehlungen und Projekten präsent ist, wird mitunter direkt kontaktiert – ganz ohne klassisches Anschreiben.\n4 Studierende, die neben dem Studium Geflüchteten Deutschunterricht geben, berichten nicht nur von dankbaren Teilnehmern. Viele erzählen auch, dass sie selbst geduldiger geworden seien und gelernt hätten, komplexe Inhalte einfach zu erklären – eine Fähigkeit, die ihnen später im Beruf zugutekomme.',
      items: [
        { q: 'Text 1', a: 'b) Vorsätze scheitern an zu hohen Zielen' },
        { q: 'Text 2', a: 'd) Ehrenamt in der Krise' },
        { q: 'Text 3', a: 'c) Netzwerk ersetzt Bewerbungsmappe' },
        { q: 'Text 4', a: 'a) Helfen, um selbst zu lernen' }
      ] },
    { teil: 'B1', titel: 'Wortschatz: Ziele und Engagement', anweisung: 'Ergänzen Sie den passenden Ausdruck.', anweisungAr: 'أكمل بالتعبير المناسب.', typ: 'select', o: ['sich etwas vornehmen', 'den inneren Schweinehund überwinden', 'sich engagieren', 'Meilenstein', 'zielstrebig', 'Durchhaltevermögen'], items: [
      { q: 'Um morgens joggen zu gehen, muss ich jedes Mal ___.', a: 'den inneren Schweinehund überwinden' },
      { q: 'Für das neue Jahr wollte er ___, weniger Zeit am Handy zu verbringen.', a: 'sich etwas vornehmen' },
      { q: 'Sie möchte ___, weil sie der Gesellschaft etwas zurückgeben will.', a: 'sich engagieren' },
      { q: 'Die bestandene C1-Prüfung war ein wichtiger ___ auf ihrem Weg.', a: 'Meilenstein' },
      { q: 'Er verfolgt seine Pläne sehr ___ und lässt sich nicht ablenken.', a: 'zielstrebig' },
      { q: 'Für einen Marathon braucht man vor allem ___.', a: 'Durchhaltevermögen' }
    ] },
    { teil: 'B2', titel: 'Grammatik: Negative Konsekutivsätze', anweisung: 'Welcher Satz hat dieselbe Bedeutung?', anweisungAr: 'النتيجة المنفية: zu + صفة, um … zu / als dass + Konjunktiv II = لدرجة لا تسمح بـ؛ و so …, dass … nicht.', typ: 'mcq', items: [
      { q: 'Die Aufgabe ist so schwer, dass man sie nicht allein lösen kann.', o: ['Die Aufgabe ist zu schwer, um sie allein zu lösen.', 'Die Aufgabe ist schwer genug, um sie allein zu lösen.', 'Die Aufgabe ist zu schwer, als dass man sie allein lösen kann zu.'], a: 'Die Aufgabe ist zu schwer, um sie allein zu lösen.' },
      { q: 'Er hatte so wenig Zeit, dass er sich nicht engagieren konnte.', o: ['Er hatte zu wenig Zeit, als dass er sich hätte engagieren können.', 'Er hatte genug Zeit, um sich zu engagieren.', 'Er hatte zu wenig Zeit, sodass er sich engagierte.'], a: 'Er hatte zu wenig Zeit, als dass er sich hätte engagieren können.' },
      { q: 'Das Ziel ist zu unrealistisch, als dass man es erreichen ___.', o: ['könnte', 'kann zu', 'zu können'], a: 'könnte' },
      { q: 'Der Vorsatz war zu vage, um ihn ___.', o: ['umzusetzen', 'umsetzen', 'umgesetzt'], a: 'umzusetzen' }
    ] },
    { teil: 'B3', titel: 'Grammatik: Konzessivsätze', anweisung: 'Ergänzen Sie den passenden Ausdruck.', anweisungAr: 'التنازل: obwohl/obgleich ↔ trotz + Genitiv، و wenn auch / selbst wenn / auch wenn، و zwar … aber، و dennoch/trotzdem، و ungeachtet + Genitiv.', typ: 'select', items: [
      { q: '___ des schlechten Wetters kamen viele Freiwillige zur Aufräumaktion.', o: ['Trotz', 'Obwohl', 'Dennoch'], a: 'Trotz' },
      { q: 'Er hat sein Ziel erreicht, ___ ihm niemand eine Chance gegeben hatte.', o: ['obwohl', 'trotz', 'dennoch'], a: 'obwohl' },
      { q: 'Die Arbeit ist anstrengend. ___ macht sie ihr großen Spaß.', o: ['Dennoch', 'Obwohl', 'Trotz'], a: 'Dennoch' },
      { q: '___ ich nur wenig Zeit habe, möchte ich mich ehrenamtlich engagieren.', o: ['Auch wenn', 'Trotz', 'Zwar'], a: 'Auch wenn' },
      { q: 'Er gab nicht auf, ___ es noch so schwierig war.', o: ['wenn', 'trotzdem', 'zwar'], a: 'wenn' },
      { q: '___ aller Kritik hielt der Vorstand an seinem Plan fest.', o: ['Ungeachtet', 'Obgleich', 'Selbst wenn'], a: 'Ungeachtet' }
    ] },
    { teil: 'B4', titel: 'Grammatik: Finalsätze', anweisung: 'Ergänzen Sie den passenden Ausdruck.', anweisungAr: 'الهدف: damit / um … zu ↔ zu + Dativ (zum Lernen)، و für + Akkusativ، و zwecks + Genitiv (لغة إدارية).', typ: 'select', items: [
      { q: 'Er nimmt Nachhilfe, ___ die Prüfung zu bestehen.', o: ['um', 'damit', 'zwecks'], a: 'um' },
      { q: 'Die Kursleiterin spricht langsam, ___ alle sie verstehen.', o: ['damit', 'um', 'für'], a: 'damit' },
      { q: '___ Verbesserung der Sprachkenntnisse bietet die Firma Kurse an.', o: ['Zur', 'Für die zu', 'Zwecks der zu'], a: 'Zur' },
      { q: 'Bitte reichen Sie die Unterlagen ___ Prüfung Ihres Antrags ein.', o: ['zwecks', 'damit', 'um'], a: 'zwecks' },
      { q: '___ eine erfolgreiche Teilnahme ist regelmäßiges Üben nötig.', o: ['Für', 'Um', 'Damit'], a: 'Für' }
    ] },
    { teil: 'C1', titel: 'Sprechen: Was antworten Sie?', anweisung: 'Lesen Sie, was die Person sagt. Welche Antwort ist am angemessensten?', anweisungAr: 'اختر الرد الأنسب.', typ: 'mcq', items: [
      { q: 'Freund: „Dieses Jahr will ich endlich zehn Kilo abnehmen, jeden Tag ins Fitnessstudio gehen und keinen Zucker mehr essen.“', o: ['Respekt! Aber vielleicht wäre es sinnvoller, mit einem Ziel anzufangen und es schrittweise umzusetzen.', 'Das schaffst du nie.', 'Ich auch, ab morgen.'], a: 'Respekt! Aber vielleicht wäre es sinnvoller, mit einem Ziel anzufangen und es schrittweise umzusetzen.' },
      { q: 'Coach: „Wo möchten Sie beruflich in fünf Jahren stehen?“', o: ['Mein Ziel ist es, ein eigenes Team zu leiten. Um das zu erreichen, will ich mich im Bereich Personalführung weiterbilden.', 'Ganz oben.', 'Darüber habe ich nie nachgedacht.'], a: 'Mein Ziel ist es, ein eigenes Team zu leiten. Um das zu erreichen, will ich mich im Bereich Personalführung weiterbilden.' },
      { q: '„Ehrenamt ist doch nur ausgenutzte Arbeitskraft.“', o: ['Diese Gefahr besteht zweifellos. Gleichwohl erfahren viele Ehrenamtliche ihr Engagement als ausgesprochen sinnstiftend.', 'Stimmt, nur Ausbeutung.', 'Das ist dein Problem.'], a: 'Diese Gefahr besteht zweifellos. Gleichwohl erfahren viele Ehrenamtliche ihr Engagement als ausgesprochen sinnstiftend.' },
      { q: 'Sie präsentieren in der Prüfung Ihr persönliches Ziel und beginnen.', o: ['Ich möchte Ihnen heute ein Ziel vorstellen, das mich seit Langem beschäftigt: ein Medizinstudium in Deutschland.', 'Mein Ziel. Medizin.', 'Ich habe kein Ziel vorbereitet.'], a: 'Ich möchte Ihnen heute ein Ziel vorstellen, das mich seit Langem beschäftigt: ein Medizinstudium in Deutschland.' },
      { q: 'Kollegin: „Ich habe schon wieder alle Vorsätze gebrochen.“ – Sie geben einen Tipp.', o: ['Mir hilft es, meine Fortschritte aufzuschreiben – so sehe ich auch kleine Erfolge und bleibe motiviert.', 'Na ja, Pech gehabt.', 'Vorsätze sind sowieso sinnlos.'], a: 'Mir hilft es, meine Fortschritte aufzuschreiben – so sehe ich auch kleine Erfolge und bleibe motiviert.' }
    ] },
    { teil: 'C2', titel: 'Sprechen: Ein Ziel präsentieren', anweisung: 'In welchen Teil der Präsentation gehört der Satz?', anweisungAr: 'في أي جزء من العرض يُقال كل تعبير؟', typ: 'select', o: ['Ziel nennen', 'Schritte beschreiben', 'Schwierigkeiten benennen', 'Abschluss'], items: [
      { q: '„Mein langfristiges Vorhaben ist es, …“', a: 'Ziel nennen' },
      { q: '„Als Erstes werde ich …, anschließend …“', a: 'Schritte beschreiben' },
      { q: '„Eine große Hürde könnte sein, dass …“', a: 'Schwierigkeiten benennen' },
      { q: '„Ich bin zuversichtlich, dass ich mein Ziel erreichen werde.“', a: 'Abschluss' },
      { q: '„Problematisch ist vor allem …“', a: 'Schwierigkeiten benennen' },
      { q: '„Der nächste Schritt besteht darin, …“', a: 'Schritte beschreiben' }
    ] },
    { teil: 'D', titel: 'Schreiben – C1 Aufsatz (Erörterung)', anweisung: 'Schreiben Sie einen Aufsatz (ca. 250 Wörter) zum Thema: „Sollte ein soziales Pflichtjahr für alle jungen Menschen eingeführt werden?“ Führen Sie Argumente dafür und dagegen an, belegen Sie sie mit Beispielen, gehen Sie auf die Situation in Ihrem Heimatland ein und nehmen Sie abschließend Stellung.', anweisungAr: 'اكتب مقالًا جدليًا (نحو 250 كلمة): هل يجب فرض سنة خدمة اجتماعية إلزامية على الشباب؟ حجج مع وضد مع أمثلة، والوضع في بلدك، ورأيك الختامي. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nIn jüngster Zeit wird verstärkt darüber diskutiert, ob …\nBefürworter führen an, dass … / Ein gewichtiges Argument dafür ist …\nKritiker hingegen wenden ein, dass … / Dagegen spricht, dass …\nZwar …, aber … / Trotz … / Selbst wenn …\nIn meinem Heimatland …\nAbwägend komme ich zu dem Ergebnis, dass …',
      items: [
        { q: 'Ihr Aufsatz', min: 230, muster: 'In jüngster Zeit wird verstärkt darüber diskutiert, ob junge Menschen nach der Schule zu einem sozialen Pflichtjahr verpflichtet werden sollten, etwa in Krankenhäusern, Pflegeheimen oder im Umweltschutz.\nBefürworter führen an, dass ein solches Jahr den gesellschaftlichen Zusammenhalt stärken würde. Junge Menschen kämen mit Lebenswelten in Berührung, die ihnen sonst fremd blieben, und lernten, Verantwortung zu übernehmen. Ein weiteres gewichtiges Argument ist der Personalmangel im Pflegebereich, der durch zusätzliche Helfer zumindest gelindert werden könnte.\nKritiker hingegen wenden ein, dass ein Zwangsdienst einen erheblichen Eingriff in die persönliche Freiheit darstelle. Zudem sei Engagement nur dann wirklich wertvoll, wenn es freiwillig geschehe. Wer gegen seinen Willen in einem Altenheim arbeite, sei womöglich zu unmotiviert, als dass er den Bewohnern eine echte Hilfe sein könnte. Außerdem bestehe die Gefahr, dass reguläre Arbeitsplätze durch billige Hilfskräfte ersetzt würden.\nIn meinem Heimatland Ägypten gibt es für junge Männer einen Militärdienst, aber keinen sozialen Pflichtdienst. Dennoch engagieren sich viele Jugendliche freiwillig, besonders im Ramadan, wenn sie Lebensmittelpakete an bedürftige Familien verteilen.\nAbwägend komme ich zu dem Ergebnis, dass ein Pflichtjahr zwar gut gemeint ist, aber an der falschen Stelle ansetzt. Statt junge Menschen zu verpflichten, sollte der Staat freiwillige Dienste attraktiver machen – etwa durch eine angemessene Vergütung oder Vorteile bei der Studienplatzvergabe. Auf diese Weise ließe sich das Engagement fördern, ohne die Freiheit des Einzelnen einzuschränken.' }
    ] }
  ]
};
