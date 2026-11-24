// Netzwerk neu A1 – Kapitel 1: Guten Tag!
// Eigene Übungen zu Wortschatz und Grammatik von Kapitel 1 (Kursbuch/Übungsbuch).
window.UEBUNG = {
  kurs: 'Netzwerk neu A1',
  kapitel: 1,
  titel: 'Guten Tag!',
  titelAr: 'التحية والتعارف والبلدان واللغات والأعداد',
  teile: [
    {
      titel: 'Grüßen und verabschieden',
      anweisung: 'Was sagen Sie? Wählen Sie.',
      anweisungAr: 'ماذا تقول في هذا الموقف؟ اختر.',
      typ: 'mcq',
      items: [
        { q: 'Es ist 8 Uhr morgens. Sie treffen Ihre Kollegin.', o: ['Guten Morgen!', 'Gute Nacht!', 'Guten Abend!'], a: 'Guten Morgen!' },
        { q: 'Es ist 20 Uhr. Sie kommen in ein Restaurant.', o: ['Guten Abend!', 'Guten Morgen!', 'Gute Nacht!'], a: 'Guten Abend!' },
        { q: 'Sie gehen schlafen.', o: ['Gute Nacht!', 'Guten Tag!', 'Hallo!'], a: 'Gute Nacht!' },
        { q: 'Sie gehen nach Hause und sagen zu Ihrem Freund:', o: ['Tschüs!', 'Guten Morgen!', 'Wie geht\'s?'], a: 'Tschüs!' },
        { q: 'Sie gehen aus dem Büro und sagen zu Ihrem Chef:', o: ['Auf Wiedersehen!', 'Hallo!', 'Danke, gut.'], a: 'Auf Wiedersehen!' }
      ]
    },
    {
      titel: 'Wie geht\'s?',
      anweisung: 'Was passt? Wählen Sie die richtige Antwort.',
      anweisungAr: 'اختر الرد المناسب.',
      typ: 'mcq',
      items: [
        { q: 'Hallo Tina! Wie geht\'s?', o: ['Danke, gut. Und dir?', 'Ich heiße Tina.', 'Aus Berlin.'], a: 'Danke, gut. Und dir?' },
        { q: 'Guten Tag, Herr Weber. Wie geht es Ihnen?', o: ['Danke, gut. Und Ihnen?', 'Danke, gut. Und dir?', 'Ich wohne in Bonn.'], a: 'Danke, gut. Und Ihnen?' },
        { q: 'Wie heißt du?', o: ['Ich heiße Jakob.', 'Danke, sehr gut.', 'Tschüs!'], a: 'Ich heiße Jakob.' },
        { q: 'Wer sind Sie?', o: ['Mein Name ist Pia Wörner.', 'Ich komme aus Österreich.', 'Ganz gut.'], a: 'Mein Name ist Pia Wörner.' }
      ]
    },
    {
      titel: 'Dialoge ordnen',
      anweisung: 'Bringen Sie die Sätze in die richtige Reihenfolge (▲ ▼).',
      anweisungAr: 'رتّب جمل الحوار باستخدام الأسهم ▲ ▼.',
      typ: 'order',
      items: [
        { q: 'Dialog 1', lines: ['Hallo, ich heiße Valentin. Und wer bist du?', 'Ich bin Kilian.', 'Hallo Kilian! Woher kommst du?', 'Aus Hamburg. Und du?', 'Ich komme aus Kairo.'] },
        { q: 'Dialog 2', lines: ['Guten Tag! Mein Name ist Schneider.', 'Guten Tag, Frau Schneider. Ich bin Omar Hassan.', 'Woher kommen Sie, Herr Hassan?', 'Aus Ägypten.', 'Und wo wohnen Sie?', 'In Köln.'] }
      ]
    },
    {
      titel: 'Sie oder du?',
      anweisung: 'Formell (Sie) oder informell (du)? Ergänzen Sie.',
      anweisungAr: 'رسمي (Sie) أم غير رسمي (du)؟ أكمل.',
      typ: 'select',
      o: ['Sie', 'du'],
      items: [
        { q: 'Hallo! Ich bin Lukas. Wie heißt ___?', a: 'du' },
        { q: 'Guten Tag! Mein Name ist Bauer. Wie heißen ___?', a: 'Sie' },
        { q: 'Entschuldigung, wer sind ___?', a: 'Sie' },
        { q: 'Hallo Anna! Woher kommst ___?', a: 'du' },
        { q: 'Frau Klein, wo wohnen ___?', a: 'Sie' }
      ]
    },
    {
      titel: 'Fragen und Antworten',
      anweisung: 'Welche Antwort passt zu welcher Frage? Ordnen Sie zu.',
      anweisungAr: 'صِل كل سؤال بالإجابة المناسبة.',
      typ: 'match',
      items: [
        { q: '', pairs: [
          ['Wie heißen Sie?', 'Mein Name ist Victoria Kunze.'],
          ['Woher kommen Sie?', 'Aus Ägypten.'],
          ['Wo wohnen Sie?', 'In Stuttgart.'],
          ['Welche Sprachen sprechen Sie?', 'Arabisch und Deutsch.'],
          ['Wie geht es Ihnen?', 'Ganz gut, danke.']
        ] }
      ]
    },
    {
      titel: 'W-Fragen',
      anweisung: 'Wer? Wie? Wo? Woher? Ergänzen Sie.',
      anweisungAr: 'اختر أداة الاستفهام الصحيحة.',
      typ: 'select',
      o: ['Wer', 'Wie', 'Wo', 'Woher'],
      items: [
        { q: '___ heißt du? – Emma.', a: 'Wie' },
        { q: '___ bist du? – Ich bin Peter.', a: 'Wer' },
        { q: '___ kommst du? – Aus Syrien.', a: 'Woher' },
        { q: '___ wohnen Sie? – In Salzburg.', a: 'Wo' },
        { q: '___ ist das? – Das ist Frau Hernandez.', a: 'Wer' },
        { q: '___ geht es Ihnen? – Gut, danke.', a: 'Wie' }
      ]
    },
    {
      titel: 'Personalpronomen',
      anweisung: 'Ich, du, er, sie oder Sie? Ergänzen Sie.',
      anweisungAr: 'أكمل بالضمير المناسب.',
      typ: 'select',
      items: [
        { q: 'Das ist Niko. ___ kommt aus Österreich.', o: ['Er', 'Sie', 'Ich'], a: 'Er' },
        { q: 'Das ist Vanessa. ___ wohnt in Innsbruck.', o: ['Sie', 'Er', 'Du'], a: 'Sie' },
        { q: 'Ich heiße Maria. Und wie heißt ___?', o: ['du', 'er', 'ich'], a: 'du' },
        { q: '___ heiße Omar und komme aus Kairo.', o: ['Ich', 'Du', 'Er'], a: 'Ich' },
        { q: 'Herr Lang, woher kommen ___?', o: ['Sie', 'du', 'er'], a: 'Sie' }
      ]
    },
    {
      titel: 'Verben',
      anweisung: 'Schreiben Sie das Verb in der richtigen Form.',
      anweisungAr: 'اكتب الفعل في صيغته الصحيحة.',
      typ: 'gap',
      items: [
        { q: 'Ich ___ Pia. (heißen)', a: ['heiße', 'heisse'] },
        { q: 'Woher ___ du? (kommen)', a: ['kommst'] },
        { q: 'Herr Bauer ___ in Zürich. (wohnen)', a: ['wohnt'] },
        { q: 'Ali ___ Arabisch und Englisch. (sprechen)', a: ['spricht'] },
        { q: 'Frau Weber, ___ Sie Deutsch? (sprechen)', a: ['sprechen'] },
        { q: 'Wo ___ du? (wohnen)', a: ['wohnst'] },
        { q: 'Wer ___ du? (sein)', a: ['bist'] },
        { q: 'Ich ___ Omar. (sein)', a: ['bin'] },
        { q: 'Das ___ Fabio. Er kommt aus Italien. (sein)', a: ['ist'] },
        { q: 'Wie ___ Sie? (heißen)', a: ['heißen', 'heissen'] }
      ]
    },
    {
      titel: 'Sätze bauen',
      anweisung: 'Klicken Sie die Wörter in der richtigen Reihenfolge.',
      anweisungAr: 'اضغط على الكلمات بالترتيب الصحيح لتكوّن الجملة.',
      typ: 'words',
      items: [
        { q: 'Aussagesatz (.)', w: ['ich', 'wohne', 'in Berlin'], a: ['ich wohne in Berlin', 'in Berlin wohne ich'] },
        { q: 'W-Frage (?)', w: ['wie', 'heißen', 'Sie'], a: ['wie heißen Sie'] },
        { q: 'W-Frage (?)', w: ['woher', 'kommst', 'du'], a: ['woher kommst du'] },
        { q: 'Aussagesatz (.)', w: ['mein Name', 'ist', 'Nina'], a: ['mein Name ist Nina', 'Nina ist mein Name'] },
        { q: 'Aussagesatz (.)', w: ['ich', 'komme', 'aus Ägypten'], a: ['ich komme aus Ägypten', 'aus Ägypten komme ich'] }
      ]
    },
    {
      titel: 'Zahlen von 0 bis 20',
      anweisung: 'Schreiben Sie die Zahlen als Wort.',
      anweisungAr: 'اكتب العدد بالحروف.',
      typ: 'gap',
      items: [
        { q: '7 = ___', a: ['sieben'] },
        { q: '12 = ___', a: ['zwölf', 'zwoelf'] },
        { q: '16 = ___', a: ['sechzehn'] },
        { q: '17 = ___', a: ['siebzehn'] },
        { q: '0 = ___', a: ['null'] },
        { q: '11 = ___', a: ['elf'] },
        { q: '19 = ___', a: ['neunzehn'] },
        { q: '13 = ___', a: ['dreizehn'] }
      ]
    },
    {
      titel: 'Telefonnummern und Namen',
      anweisung: 'Was ist richtig? Wählen Sie.',
      anweisungAr: 'اختر الرقم أو الاسم الصحيح.',
      typ: 'mcq',
      items: [
        { q: 'null – eins – sieben – fünf – drei – vier – acht – neun', o: ['0175 3489', '0175 3498', '0157 3489'], a: '0175 3489' },
        { q: 'null – vier – null – zwölf – vierzehn – sechzehn', o: ['040 12 14 16', '040 12 14 60', '040 20 14 16'], a: '040 12 14 16' },
        { q: 'Buchstabieren: ka – a – er – i – em', o: ['Karim', 'Kerim', 'Karin'], a: 'Karim' },
        { q: 'Buchstabieren: es – a – er – a – ha', o: ['Sarah', 'Sahra', 'Zara'], a: 'Sarah' }
      ]
    },
    {
      titel: 'Länder und Sprachen',
      anweisung: 'Welche Sprache spricht man da? Ordnen Sie zu.',
      anweisungAr: 'ما اللغة التي يتحدثها أهل هذا البلد؟ صِل بين العمودين.',
      typ: 'match',
      items: [
        { q: '', pairs: [
          ['Deutschland', 'Deutsch'],
          ['Ägypten', 'Arabisch'],
          ['Frankreich', 'Französisch'],
          ['Spanien', 'Spanisch'],
          ['Polen', 'Polnisch'],
          ['Griechenland', 'Griechisch']
        ] }
      ]
    },
    {
      titel: 'Woher kommen Sie?',
      anweisung: 'aus, aus der, aus dem oder aus den? Ergänzen Sie.',
      anweisungAr: 'بعض أسماء البلدان تأتي مع أداة تعريف: aus der / aus dem / aus den.',
      typ: 'select',
      o: ['aus', 'aus der', 'aus dem', 'aus den'],
      items: [
        { q: 'Ich komme ___ Ägypten.', a: 'aus' },
        { q: 'Ich komme ___ Türkei.', a: 'aus der' },
        { q: 'Ich komme ___ Irak.', a: 'aus dem' },
        { q: 'Ich komme ___ USA.', a: 'aus den' },
        { q: 'Ich komme ___ Schweiz.', a: 'aus der' },
        { q: 'Ich komme ___ Deutschland.', a: 'aus' }
      ]
    },
    {
      titel: 'Lesen: Ein Chat',
      anweisung: 'Lesen Sie den Chat. Richtig oder falsch?',
      anweisungAr: 'اقرأ المحادثة. هل العبارة صحيحة أم خاطئة؟',
      typ: 'tf',
      text: 'Nour: Hallo! Ich heiße Nour. Ich komme aus Ägypten, aus Alexandria. Jetzt wohne ich in Berlin. Ich spreche Arabisch, Englisch und ein bisschen Deutsch.\nLukas: Hallo Nour! Ich bin Lukas. Ich komme aus Österreich, aus Wien. Ich wohne auch in Berlin.\nElena: Hallo, ich bin Elena. Ich komme aus Spanien und wohne in Hamburg. Ich spreche Spanisch und Deutsch.',
      items: [
        { q: 'Nour kommt aus Kairo.', a: false },
        { q: 'Nour wohnt in Berlin.', a: true },
        { q: 'Lukas kommt aus Deutschland.', a: false },
        { q: 'Lukas wohnt in Berlin.', a: true },
        { q: 'Elena spricht Spanisch.', a: true },
        { q: 'Elena wohnt in Berlin.', a: false }
      ]
    },
    {
      titel: 'Schreiben: Das bin ich',
      anweisung: 'Stellen Sie sich vor: Name, Land, Stadt, Wohnort, Sprachen. Schreiben Sie ca. 30 Wörter.',
      anweisungAr: 'عرّف بنفسك: اسمك، وبلدك، ومدينتك، ومكان سكنك، واللغات التي تتحدثها. نحو 30 كلمة. سيصحّح المحاضر هذا الجزء.',
      typ: 'write',
      items: [
        { q: 'Hallo! Ich heiße …', min: 25, muster: 'Hallo! Ich heiße Omar Hassan. Ich komme aus Ägypten, aus Kairo. Jetzt wohne ich in Köln. Ich spreche Arabisch, Englisch und ein bisschen Deutsch. Meine Telefonnummer ist 0176 12 34 56 78. Tschüs!' }
      ]
    }
  ]
};
