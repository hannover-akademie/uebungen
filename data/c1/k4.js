// Aspekte neu C1 – Kapitel 4: Wirtschaftsgipfel (M1 Vom Kohlenpott … · M2 Mit gutem Gewissen? · M3 Die Welt ist ein Dorf · M4 Wer soll das bezahlen?)
// Grammatik: Temporalsätze (verbal/nominal) · Kausal- und Modalsätze (verbal/nominal)
// Prüfung: C1 Lesen (Ja / Nein / Text sagt dazu nichts), telc C1 Schreiben (Stellungnahme)
window.UEBUNG = {
  kurs: 'Aspekte neu C1', kapitel: 4, titel: 'Wirtschaftsgipfel',
  titelAr: 'الاقتصاد: التحول الهيكلي، والاستهلاك بضمير مرتاح، والعولمة، والتمويل الجماعي – جمل الزمن والسبب والطريقة بين الأسلوب الفعلي والاسمي',
  teile: [
    { teil: 'A', titel: 'Lesen – C1 Detailverstehen', anweisung: 'Lesen Sie den Text. Stimmt die Aussage mit dem Text überein (Ja), widerspricht sie dem Text (Nein), oder sagt der Text dazu nichts?', anweisungAr: 'هل العبارة تتفق مع النص (Ja)، أم تخالفه (Nein)، أم أن النص لا يذكر ذلك (Text sagt dazu nichts)؟', typ: 'select', o: ['Ja', 'Nein', 'Text sagt dazu nichts'],
      text: 'Vom Kohlenpott zur Wissensregion\nÜber 150 Jahre lang prägte der Bergbau das Ruhrgebiet. Nach dem Zweiten Weltkrieg arbeiteten dort fast 500 000 Menschen unter Tage, viele von ihnen Zuwanderer aus Italien, der Türkei oder Polen. Seit den 1960er-Jahren jedoch wurde die heimische Steinkohle zunehmend durch billigere Importkohle und Erdöl verdrängt. Zeche um Zeche wurde geschlossen, bis 2018 mit „Prosper-Haniel“ in Bottrop das letzte Steinkohlebergwerk Deutschlands seinen Betrieb einstellte. Der Strukturwandel verlief schmerzhaft: Ganze Stadtteile verloren ihre wirtschaftliche Grundlage, und die Arbeitslosigkeit lag lange über dem Bundesdurchschnitt. Inzwischen hat sich die Region jedoch neu erfunden. Wo früher Fördertürme standen, entstanden Universitäten, Technologieparks und Kulturstätten. Die Zeche Zollverein in Essen gehört seit 2001 sogar zum UNESCO-Welterbe und zieht jährlich Hunderttausende Besucher an. Kritiker bemängeln allerdings, dass vom Aufschwung längst nicht alle profitieren.',
      items: [
        { q: 'Im Ruhrgebiet arbeiteten viele Menschen aus dem Ausland im Bergbau.', a: 'Ja' },
        { q: 'Die Kohle aus dem Ruhrgebiet wurde durch teurere Kohle aus dem Ausland ersetzt.', a: 'Nein' },
        { q: 'Seit 2018 wird in Deutschland keine Steinkohle mehr abgebaut.', a: 'Ja' },
        { q: 'Die meisten ehemaligen Bergleute haben eine Stelle an einer Universität gefunden.', a: 'Text sagt dazu nichts' },
        { q: 'Die Zeche Zollverein ist heute ein Ort für Touristen.', a: 'Ja' },
        { q: 'Alle Bewohner der Region haben vom wirtschaftlichen Wandel profitiert.', a: 'Nein' }
      ] },
    { teil: 'B1', titel: 'Wortschatz: Wirtschaft', anweisung: 'Ergänzen Sie den passenden Begriff.', anweisungAr: 'أكمل بالمصطلح المناسب.', typ: 'select', o: ['Strukturwandel', 'fairer Handel', 'Globalisierung', 'Schwarmfinanzierung', 'Rendite', 'Nachhaltigkeit'], items: [
      { q: 'Der ___ hat viele Industriestädte vor große Herausforderungen gestellt.', a: 'Strukturwandel' },
      { q: 'Beim ___ erhalten Produzenten in Entwicklungsländern faire Preise.', a: 'fairer Handel' },
      { q: 'Durch die ___ sind die Märkte weltweit eng miteinander verflochten.', a: 'Globalisierung' },
      { q: 'Crowdfunding wird auf Deutsch auch ___ genannt.', a: 'Schwarmfinanzierung' },
      { q: 'Je höher die ___, desto höher ist meist auch das Risiko einer Geldanlage.', a: 'Rendite' },
      { q: 'Immer mehr Verbraucher achten beim Einkauf auf ___.', a: 'Nachhaltigkeit' }
    ] },
    { teil: 'B2', titel: 'Grammatik: Temporalsätze – verbal und nominal', anweisung: 'Welche Nominalform entspricht dem Nebensatz?', anweisungAr: 'wenn/als → bei، nachdem → nach، bevor → vor، seit(dem) → seit، bis → bis zu، während → während، sobald → gleich nach.', typ: 'mcq', items: [
      { q: 'Als die letzte Zeche geschlossen wurde, …', o: ['Bei der Schließung der letzten Zeche …', 'Nach der Schließung der letzten Zeche …', 'Seit der Schließung der letzten Zeche …'], a: 'Bei der Schließung der letzten Zeche …' },
      { q: 'Bevor man einen Kredit aufnimmt, …', o: ['Vor der Aufnahme eines Kredits …', 'Nach der Aufnahme eines Kredits …', 'Bis zur Aufnahme eines Kredits …'], a: 'Vor der Aufnahme eines Kredits …' },
      { q: 'Seitdem die Region sich gewandelt hat, …', o: ['Seit dem Wandel der Region …', 'Während des Wandels der Region …', 'Bei dem Wandel der Region …'], a: 'Seit dem Wandel der Region …' },
      { q: 'Bis das Projekt finanziert ist, …', o: ['Bis zur Finanzierung des Projekts …', 'Vor der Finanzierung des Projekts …', 'Seit der Finanzierung des Projekts …'], a: 'Bis zur Finanzierung des Projekts …' },
      { q: 'Sobald die Ware angekommen ist, …', o: ['Gleich nach der Ankunft der Ware …', 'Vor der Ankunft der Ware …', 'Während der Ankunft der Ware …'], a: 'Gleich nach der Ankunft der Ware …' }
    ] },
    { teil: 'B3', titel: 'Grammatik: Kausal- und Modalsätze', anweisung: 'Ergänzen Sie die passende Präposition oder den Konnektor.', anweisungAr: 'السبب: weil/da ↔ wegen/aufgrund + Genitiv، و vor + Dativ (للمشاعر: vor Angst). الطريقة: indem/dadurch, dass ↔ durch + Akkusativ، و ohne dass ↔ ohne + Akkusativ.', typ: 'select', items: [
      { q: '___ der hohen Energiekosten verlagern viele Firmen ihre Produktion ins Ausland.', o: ['Aufgrund', 'Durch', 'Indem'], a: 'Aufgrund' },
      { q: 'Das Start-up finanzierte sich, ___ es Crowdfunding nutzte.', o: ['indem', 'durch', 'weil'], a: 'indem' },
      { q: '___ geschickte Werbung gewann das Projekt viele Unterstützer.', o: ['Durch', 'Wegen', 'Indem'], a: 'Durch' },
      { q: 'Er zitterte ___ Aufregung, als er seine Geschäftsidee präsentierte.', o: ['vor', 'wegen', 'durch'], a: 'vor' },
      { q: 'Die Firma wurde verkauft, ___ die Mitarbeiter informiert wurden.', o: ['ohne dass', 'ohne', 'indem'], a: 'ohne dass' },
      { q: '___ die Löhne in Europa höher sind, wird vieles in Asien produziert.', o: ['Da', 'Aufgrund', 'Durch'], a: 'Da' }
    ] },
    { teil: 'B4', titel: 'Grammatik: Umformen', anweisung: 'Bauen Sie den Satz im Nominalstil.', anweisungAr: 'رتّب الجملة بالأسلوب الاسمي.', typ: 'words', items: [
      { q: 'Nominalstil (.)', w: ['nach', 'der Schließung', 'der Zechen', 'stieg', 'die Arbeitslosigkeit', 'stark an'], a: ['nach der schließung der zechen stieg die arbeitslosigkeit stark an', 'die arbeitslosigkeit stieg nach der schließung der zechen stark an'] },
      { q: 'Nominalstil (.)', w: ['durch', 'den Kauf', 'fair gehandelter Produkte', 'unterstützt man', 'Kleinbauern'], a: ['durch den kauf fair gehandelter produkte unterstützt man kleinbauern'] }
    ] },
    { teil: 'C1', titel: 'Sprechen: Was antworten Sie?', anweisung: 'Lesen Sie, was die Person sagt. Welche Antwort ist am angemessensten?', anweisungAr: 'اختر الرد الأنسب.', typ: 'mcq', items: [
      { q: 'Bankberater: „Welche Sicherheiten können Sie für den Kredit bieten?“', o: ['Ich habe ein festes Einkommen und könnte zusätzlich eine Bürgschaft meines Bruders vorlegen.', 'Ich bin ein ehrlicher Mensch.', 'Brauche ich das wirklich?'], a: 'Ich habe ein festes Einkommen und könnte zusätzlich eine Bürgschaft meines Bruders vorlegen.' },
      { q: '„Ist es nicht naiv zu glauben, dass man mit seinem Einkauf die Welt verbessern kann?“', o: ['Allein sicher nicht. Aber wenn viele Verbraucher bewusst einkaufen, entsteht durchaus Druck auf die Unternehmen.', 'Ja, total naiv.', 'Ich kaufe, was ich will.'], a: 'Allein sicher nicht. Aber wenn viele Verbraucher bewusst einkaufen, entsteht durchaus Druck auf die Unternehmen.' },
      { q: 'Sie sollen den Begriff „Globalisierung“ definieren.', o: ['Unter Globalisierung versteht man die zunehmende weltweite Verflechtung von Wirtschaft, Politik und Kultur.', 'Globalisierung ist, wenn alles global ist.', 'Das ist schwer zu sagen.'], a: 'Unter Globalisierung versteht man die zunehmende weltweite Verflechtung von Wirtschaft, Politik und Kultur.' },
      { q: 'Sie präsentieren Ihre Crowdfunding-Idee und möchten Unterstützer gewinnen.', o: ['Mit Ihrer Unterstützung können wir in Assuan eine Nähwerkstatt eröffnen, die zwanzig Frauen ein eigenes Einkommen sichert.', 'Bitte geben Sie mir Geld.', 'Wer will, kann zahlen.'], a: 'Mit Ihrer Unterstützung können wir in Assuan eine Nähwerkstatt eröffnen, die zwanzig Frauen ein eigenes Einkommen sichert.' },
      { q: '„Globalisierung schadet doch vor allem den armen Ländern.“ – Sie relativieren.', o: ['Das trifft nur bedingt zu. Einige Länder haben durchaus profitiert, andere hingegen wurden abgehängt.', 'Das stimmt überhaupt nicht.', 'Genau, nur Nachteile.'], a: 'Das trifft nur bedingt zu. Einige Länder haben durchaus profitiert, andere hingegen wurden abgehängt.' }
    ] },
    { teil: 'C2', titel: 'Sprechen: Stellung nehmen', anweisung: 'Wozu dient der Ausdruck?', anweisungAr: 'ما وظيفة كل تعبير عند إبداء الرأي؟', typ: 'select', o: ['Meinung äußern', 'Gegenargument einräumen', 'Schlussfolgerung ziehen'], items: [
      { q: '„Ich vertrete den Standpunkt, dass …“', a: 'Meinung äußern' },
      { q: '„Zugegeben, es lässt sich nicht leugnen, dass …“', a: 'Gegenargument einräumen' },
      { q: '„Daraus ergibt sich, dass …“', a: 'Schlussfolgerung ziehen' },
      { q: '„Es mag zwar sein, dass …, dennoch …“', a: 'Gegenargument einräumen' },
      { q: '„Meines Erachtens …“', a: 'Meinung äußern' },
      { q: '„Alles in allem komme ich zu dem Schluss, dass …“', a: 'Schlussfolgerung ziehen' }
    ] },
    { teil: 'D', titel: 'Schreiben – telc C1 (Stellungnahme)', anweisung: 'Eine Verbraucherzeitschrift fragt ihre Leser: „Konsum mit gutem Gewissen – Können Fairtrade- und Bioprodukte die Welt gerechter machen?“ Schreiben Sie eine Stellungnahme (ca. 230 Wörter). Erläutern Sie die Idee des fairen Handels, wägen Sie Vor- und Nachteile ab, gehen Sie auf die Situation in Ihrem Heimatland ein und ziehen Sie ein Fazit.', anweisungAr: 'اكتب رأيًا مكتوبًا (نحو 230 كلمة): هل تجعل منتجات التجارة العادلة العالم أكثر عدلًا؟ اشرح الفكرة، ووازن بين المزايا والعيوب، واذكر الوضع في بلدك، واختم بخلاصة. سيصحّح المحاضر هذا الجزء.', typ: 'write',
      text: 'Nützliche Redemittel:\nDie Frage, ob …, gewinnt zunehmend an Bedeutung.\nUnter … versteht man … / Die Idee besteht darin, dass …\nFür … spricht vor allem, dass … / Dagegen lässt sich einwenden, dass …\nZugegeben, … / Es mag sein, dass …, dennoch …\nIn meinem Heimatland … / Im Gegensatz zu …\nAlles in allem komme ich zu dem Schluss, dass …',
      items: [
        { q: 'Ihre Stellungnahme', min: 210, muster: 'Die Frage, ob Verbraucher durch ihren Einkauf zu mehr Gerechtigkeit beitragen können, gewinnt zunehmend an Bedeutung. Unter fairem Handel versteht man ein Handelssystem, bei dem Kleinbauern in Entwicklungsländern Mindestpreise erhalten, die über dem Weltmarktpreis liegen. Darüber hinaus verpflichten sich die Produzenten, auf Kinderarbeit zu verzichten und Umweltstandards einzuhalten.\nFür den fairen Handel spricht vor allem, dass er Familien ein verlässliches Einkommen sichert. Durch die zusätzlichen Prämien werden häufig Schulen oder Gesundheitsstationen finanziert. Dagegen lässt sich einwenden, dass Fairtrade-Produkte nach wie vor nur einen geringen Marktanteil haben. Zudem sind sie oft so teuer, dass sich gerade Familien mit niedrigem Einkommen den bewussten Konsum kaum leisten können.\nIn meinem Heimatland Ägypten spielen Fairtrade-Siegel bislang kaum eine Rolle, obwohl beispielsweise die Baumwollbauern im Nildelta von fairen Preisen stark profitieren würden. Aufgrund der hohen Inflation achten die meisten Verbraucher dort vor allem auf den Preis.\nZugegeben, der Einzelne kann mit seinem Einkauf die globale Ungerechtigkeit nicht beseitigen. Dennoch bin ich überzeugt, dass bewusster Konsum ein wichtiges Signal an Unternehmen und Politik sendet. Alles in allem komme ich zu dem Schluss, dass fairer Handel die Welt zwar nicht allein gerechter macht, aber einen unverzichtbaren Beitrag dazu leistet – vorausgesetzt, die Politik schafft verbindliche Regeln für alle Unternehmen.' }
    ] }
  ]
};
