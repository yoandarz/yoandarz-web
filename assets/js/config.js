const SITE_CONFIG = {
  musician: {
    name: "Yoan Darz Musician",
    subtitle: "Violoncello, voz y música en vivo para momentos especiales.",
    formUrl: "https://tally.so/r/kdO7KJ",
    whatsappNumber: "34673168611",
    whatsappMessage:
      "Hola, Yoan. Quiero solicitar información sobre música en vivo para un evento.\n\nNombre:\nTipo de evento:\nFecha:\nHora aproximada:\nLugar:\n\nFormato deseado:\n[ ] Violonchelo\n[ ] Voz\n[ ] Violonchelo y voz\n[ ] Otro:\n\nDuración aproximada:\nPiezas o estilo musical que me interesa:\nObservaciones:",
    telegramUrl: "https://t.me/YoanDarz",
    social: {
      instagram: "https://www.instagram.com/yoandarz_musician/",
      tiktok: "https://www.tiktok.com/@yoandarz.music",
      youtube: "https://www.youtube.com/@yoandarz/videos",
      facebook: "https://www.facebook.com/yoandarz/",
      x: "https://x.com/Yoandarz"
    },
    videos: [
      "https://www.youtube.com/watch?v=m9Qq4LxoMng",
      "https://www.youtube.com/shorts/eIN-inFTLXk",
      "https://www.youtube.com/shorts/2smcArE0Co4",
      "https://www.youtube.com/shorts/0rWnBjRt0p0",
      "https://www.youtube.com/watch?v=Mu2Bxjg4v2A",
      "https://www.youtube.com/watch?v=fp9II_ZOmvM",
      "https://www.youtube.com/watch?v=1vDyj9wrRII"
    ]
  },

  repertoire: [
    { category: "Académicas", artist: "Albinoni", title: "Adagio", duration: "3:05" },
    { category: "Académicas", artist: "Alfredo Maucchi", title: "O sole mio", duration: "4:35" },
    { category: "Académicas", artist: "Andrea Bocelli", title: "Por ti volaré", duration: "4:43" },
    { category: "Académicas", artist: "Bach", title: "Aria de Suite nº 3 en Re", duration: "4:56" },
    { category: "Académicas", artist: "Bach", title: "Arioso", duration: "3:37 / 5:49" },
    { category: "Académicas", artist: "Bach", title: "Preludio Suite I Violoncello", duration: "3:30" },
    { category: "Académicas", artist: "Bach-Gounod", title: "Ave María", duration: "2:53" },
    { category: "Académicas", artist: "Bizet", title: "Habanera", duration: "4:18" },
    { category: "Académicas", artist: "Bizet", title: "Toreador", duration: "1:07" },
    { category: "Académicas", artist: "Caccini", title: "Ave María", duration: "3:26" },
    { category: "Académicas", artist: "Camille Saint-Saëns", title: "El cisne", duration: "2:45" },
    { category: "Académicas", artist: "Giacomo Puccini", title: "Nessun Dorma", duration: "2:58" },
    { category: "Académicas", artist: "Haendel", title: "Comfort Ye My People", duration: "3:30" },
    { category: "Académicas", artist: "Haendel", title: "Every Valley", duration: "3:30" },
    { category: "Académicas", artist: "Haendel", title: "Lascia ch'io pianga", duration: "4:13" },
    { category: "Académicas", artist: "Lucio Dalla", title: "Caruso", duration: "3:53" },
    { category: "Académicas", artist: "Pietro Mascagni", title: "Cavallería Rusticana", duration: "3:15 / 3:34" },
    { category: "Académicas", artist: "Ravel", title: "Bolero", duration: "4:04" },
    { category: "Académicas", artist: "Secret Garden", title: "Song From A Secret Garden", duration: "3:03" },
    { category: "Académicas", artist: "Shostakovich", title: "Waltz Nro 2", duration: "3:50" },
    { category: "Académicas", artist: "Schubert", title: "Ave María", duration: "4:33" },
    { category: "Académicas", artist: "Schubert", title: "Ständchen", duration: "4:27" },
    { category: "Académicas", artist: "Vivaldi", title: "Concierto en Do Mayor, I", duration: "3:02" },
    { category: "Académicas", artist: "Vivaldi", title: "Concierto en Do Mayor, II", duration: "3:02" },
    { category: "Académicas", artist: "Vivaldi", title: "Invierno, 2º Movimiento", duration: "2:26" },

    { category: "Bachatas", artist: "Juan Luis Guerra", title: "Burbujas de amor", duration: "4:11" },

    { category: "Boleros", artist: "Agustín Lara", title: "Solamente una vez", duration: "3:19" },
    { category: "Boleros", artist: "Bobby Capó", title: "Piel Canela", duration: "2:35" },
    { category: "Boleros", artist: "Consuelo Velázquez", title: "Bésame Mucho", duration: "2:45" },
    { category: "Boleros", artist: "José Alfredo Jiménez", title: "Si nos dejan", duration: "3:47" },

    { category: "Cine y TV", artist: "Breakfast At Tiffany's", title: "Moon River", duration: "3:42" },
    { category: "Cine y TV", artist: "Cinema Paradiso", title: "Love Theme", duration: "3:14" },
    { category: "Cine y TV", artist: "A Star Is Born", title: "Shallow", duration: "3:36" },
    { category: "Cine y TV", artist: "Dragon Ball Z", title: "Cha-La Head-Cha-La", duration: "1:53" },
    { category: "Cine y TV", artist: "Game Of Thrones", title: "Intro", duration: "3:30" },
    { category: "Cine y TV", artist: "Game Of Thrones", title: "Blood Of My Blood (inicio)", duration: "3:30" },
    { category: "Cine y TV", artist: "Game Of Thrones", title: "The Rain Of Castamere", duration: "3:30" },
    { category: "Cine y TV", artist: "Ghost", title: "Unchained Melody", duration: "3:44" },
    { category: "Cine y TV", artist: "La lista de Schindler", title: "Main Theme", duration: "4:41" },
    { category: "Cine y TV", artist: "Love Story", title: "Where Do I Begin", duration: "3:06" },
    { category: "Cine y TV", artist: "Once Upon A Time In America", title: "Deborah's Theme", duration: "3:26" },
    { category: "Cine y TV", artist: "Pearl Harbor", title: "Tennessee", duration: "3:17" },
    { category: "Cine y TV", artist: "The Mission", title: "Gabriel’s Oboe", duration: "2:22" },
    { category: "Cine y TV", artist: "Titanic", title: "My Heart Will Go On", duration: "4:42" },

    { category: "Disney & Pixar", artist: "Coco", title: "Recuérdame", duration: "1:19" },
    { category: "Disney & Pixar", artist: "El Rey León", title: "Can You Feel The Love Tonight", duration: "4:08" },
    { category: "Disney & Pixar", artist: "Frozen", title: "Let It Go", duration: "3:40" },
    { category: "Disney & Pixar", artist: "La Bella y la Bestia", title: "Bella y bestia", duration: "2:44" },
    { category: "Disney & Pixar", artist: "La Sirenita", title: "Part Of Your World", duration: "3:01" },
    { category: "Disney & Pixar", artist: "Tarzán", title: "You’ll Be In My Heart", duration: "4:15" },

    { category: "Merengues", artist: "Rubby Rugby Pérez", title: "Volveré", duration: "3:30" },

    { category: "Pop, rock y baladas en español", artist: "Andrea Bocelli", title: "Vivo por ella", duration: "4:30" },
    { category: "Pop, rock y baladas en español", artist: "Carlos Gardel", title: "Por una cabeza", duration: "2:55" },
    { category: "Pop, rock y baladas en español", artist: "Chiquetete", title: "Esta cobardía", duration: "3:01" },
    { category: "Pop, rock y baladas en español", artist: "Il Divo", title: "Hasta mi final", duration: "3:43" },
    { category: "Pop, rock y baladas en español", artist: "Jeanette", title: "Porque te vas", duration: "3:22" },
    { category: "Pop, rock y baladas en español", artist: "Jeanette", title: "Soy rebelde", duration: "3:12" },
    { category: "Pop, rock y baladas en español", artist: "José Luis Perales", title: "Y cómo es él", duration: "3:52" },
    { category: "Pop, rock y baladas en español", artist: "Juan Gabriel", title: "Así fue", duration: "4:44" },
    { category: "Pop, rock y baladas en español", artist: "La oreja de Van Gogh", title: "La playa", duration: "4:12" },
    { category: "Pop, rock y baladas en español", artist: "La oreja de Van Gogh", title: "Rosas", duration: "3:47" },
    { category: "Pop, rock y baladas en español", artist: "Laura Pausini", title: "En cambio no", duration: "3:50" },
    { category: "Pop, rock y baladas en español", artist: "Luis Fonsi", title: "Despacito", duration: "3:57" },
    { category: "Pop, rock y baladas en español", artist: "Mari Trini", title: "Te amaré, te amo y te querré", duration: "3:02" },
    { category: "Pop, rock y baladas en español", artist: "Mecano", title: "Cruz de navajas", duration: "5:04" },
    { category: "Pop, rock y baladas en español", artist: "Mecano", title: "Hijo de la Luna", duration: "4:15" },
    { category: "Pop, rock y baladas en español", artist: "Mocedades", title: "Tómame o déjame", duration: "2:58" },
    { category: "Pop, rock y baladas en español", artist: "Nino Bravo", title: "Un beso y una flor", duration: "3:51" },
    { category: "Pop, rock y baladas en español", artist: "Roberto Carlos", title: "El gato que está triste y azul", duration: "4:16" },
    { category: "Pop, rock y baladas en español", artist: "Rosario", title: "Que bonito", duration: "3:31" },
    { category: "Pop, rock y baladas en español", artist: "Son By Four", title: "A puro dolor", duration: "3:29" },
    { category: "Pop, rock y baladas en español", artist: "Violeta Parra", title: "Gracias a la vida", duration: "5:13" },

    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "ABBA", title: "Andante, andante", duration: "4:43" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "ABBA", title: "Angeleyes", duration: "4:30" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "ABBA", title: "Chiquitita", duration: "5:08" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "ABBA", title: "Dancing Queen", duration: "3:48 / 3:55" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "ABBA", title: "Fernando", duration: "3:55" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "ABBA", title: "Mamma Mia", duration: "3:24 / 3:35" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "ABBA", title: "Slipping Through My Fingers", duration: "3:55" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "ABBA", title: "The Winner Takes It All", duration: "4:56" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Aerosmith", title: "I Don’t Wanna Miss A Thing", duration: "4:00" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Bee Gees", title: "How Deep Is Your Love", duration: "3:40 / 4:02" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Bob Dylan", title: "Blowing In The Wind", duration: "2:45" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Bonnie Tyler", title: "Total Eclipse Of The Heart", duration: "5:22" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Bruno Mars", title: "Marry You", duration: "2:55" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Camila Cabello", title: "Señorita", duration: "3:15" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Coldplay", title: "Viva la vida", duration: "4:03" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Christina Perri", title: "A Thousand Years", duration: "4:49" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Ed Sheeran", title: "Perfect", duration: "4:30" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Edith Piaf", title: "La vie en rose", duration: "3:03" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Elvis Presley", title: "Can’t Help Falling In Love", duration: "3:05 / 4:26" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "F. R. David", title: "Words", duration: "3:20" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Frank Sinatra", title: "My Way", duration: "4:56" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "John Legend", title: "All Of Me", duration: "4:38" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "John Lennon", title: "Imagine", duration: "3:26" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Katy Perry", title: "Unconditionally", duration: "3:44 / 4:30" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Keane", title: "Somewhere Only We Know", duration: "3:43" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Leonard Cohen", title: "Hallelujah", duration: "3:35" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Louis Armstrong", title: "What A Wonderful World", duration: "2:35" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Metallica", title: "Nothing Else Matters", duration: "5:24 / 5:25" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Michael Jackson", title: "Ben", duration: "2:42" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Michael Jackson", title: "Heal The World", duration: "4:00" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Michael Jackson", title: "I’ll Be There", duration: "3:30" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Queen", title: "Crazy Little Thing Called Love", duration: "2:40" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Queen", title: "Love Of My Life", duration: "3:03" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Queen", title: "Radio Gaga", duration: "3:31" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Queen", title: "We Are The Champions", duration: "3:03" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "R.E.M.", title: "Losing My Religion", duration: "4:50" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Roy Orbison", title: "Pretty Woman", duration: "2:58" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Roxette", title: "It Must Have Been Love", duration: "4:16" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Simon & Garfunkel", title: "The Sound Of Silence", duration: "4:06" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Stevie Wonder", title: "I Just Called To Say I Love You", duration: "4:24" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "The Bangles", title: "Eternal Flame", duration: "2:54" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "The Beatles", title: "Let It Be", duration: "3:53" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "The Beatles", title: "Yesterday", duration: "2:14" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "The Tokens", title: "The Lion Sleeps Tonight", duration: "2:16" },
    { category: "Pop, rock, tangos y baladas en inglés y otros idiomas", artist: "Tones And I", title: "Dance Monkey", duration: "3:30" },

    { category: "Salsas", artist: "Marc Anthony", title: "Vivir mi vida", duration: "4:15" },
    { category: "Salsas", artist: "Marc Anthony", title: "Ahora quién", duration: "5:15" },
    { category: "Salsas", artist: "Willy Colón", title: "Edilio", duration: "5:10" },

    { category: "Vascas", artist: "Mikel Laboa", title: "Txoria Txori", duration: "3:22" },

    { category: "Venezolanas", artist: "Simón Díaz", title: "Caballo viejo", duration: "2:31" }
  ],

  conditions: [
    {
      title: "Repertorio y solicitudes especiales",
      text: "El repertorio disponible es amplio, variado y se actualiza de forma continua. Puede consultarse y seleccionarse directamente en esta página web. Si se solicita alguna pieza fuera del repertorio publicado, se aplicará un suplemento adicional del 30% por cada canción solicitada. Estas peticiones deben hacerse al menos 20 días antes del evento."
    },
    {
      title: "Reserva y confirmación",
      text: "La fecha y hora del evento quedan confirmadas solo tras acuerdo expreso y el pago del 50% del total como reserva. Las reservas y confirmaciones deben realizarse, preferiblemente, al menos 20 días antes del evento. El pago puede realizarse por transferencia, efectivo u otro medio acordado."
    },
    {
      title: "Cancelaciones",
      text: "Si la cancelación parte del organizador, el abono de reserva no es reembolsable. Si la cancelación parte del músico, siendo esta justificable solo en caso de fuerza mayor, como enfermedad grave, accidente o catástrofes, el músico reembolsará la totalidad de la reserva."
    },
    {
      title: "Día del evento",
      text: "El músico debe tener acceso al lugar, con tiempo para pruebas y ubicación, al menos 30 minutos antes de la actuación. El resto del importe acordado se abonará antes de iniciar el evento. El espacio debe ser adecuado y protegido contra lluvia, sol o condiciones adversas."
    },
    {
      title: "Transporte y alojamiento",
      text: "En Bilbao, el músico asume su transporte. Para eventos fuera de Bilbao, el organizador asume los gastos de transporte de ida y vuelta y, si fuera necesario, alojamiento. Las condiciones se acuerdan en cada caso."
    },
    {
      title: "Apoyo logístico",
      text: "Si el acceso al lugar implica escaleras u obstáculos, se agradecerá la colaboración del organizador para facilitar el traslado del instrumento y/o equipos."
    },
    {
      title: "Grabación y uso de imagen",
      text: "El organizador se compromete a compartir, si es posible, fotos y vídeos donde aparezca el músico, para uso profesional. Cualquier uso comercial o promocional adicional requiere autorización expresa."
    },
    {
      title: "Puntualidad y cambios",
      text: "Se ruega cumplir los horarios acordados. Si el evento se retrasa más de 30 minutos sin aviso o causa mayor, la actuación podrá acortarse proporcionalmente. Cualquier cambio relevante debe notificarse con antelación."
    }
  ]
};