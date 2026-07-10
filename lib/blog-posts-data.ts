export interface ContentBlock {
  type: "p" | "h2" | "blockquote" | "ul";
  value: string | string[];
}

export interface BlogPost {
  slug: string;
  image: string;
  tag: string;
  tagClass: string;
  title: string;
  excerpt: string;
  authorName: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  content: ContentBlock[];
}

export const postsDataEs: Record<string, BlogPost> = {
  "ahorrar-cambio-divisas-viajar": {
    slug: "ahorrar-cambio-divisas-viajar",
    image: "/Imagenes/DSC_0694.jpg",
    tag: "Viajes",
    tagClass: "bg-zeep-cyan/15 text-zeep-cyan",
    title: "Cómo ahorrar en el cambio de divisas al viajar",
    excerpt:
      "Evita las comisiones abusivas en aeropuertos y bancos. Te contamos las mejores estrategias colaborativas para optimizar tu presupuesto de viaje y no perder en el cambio.",
    authorName: "Sofía Rodríguez",
    authorAvatar: "SR",
    date: "Jul 10, 2026",
    readTime: "4 min lectura",
    content: [
      {
        type: "p",
        value: "Llegar a un nuevo país es una de las sensaciones más emocionantes para cualquier viajero. Sin embargo, hay un obstáculo clásico al que todos nos enfrentamos nada más bajar del avión: ¿dónde consigo moneda local sin perder una fortuna en el intento?",
      },
      {
        type: "h2",
        value: "El problema de los intermediarios tradicionales",
      },
      {
        type: "p",
        value: "Las casas de cambio de los aeropuertos y los bancos tradicionales suelen ser la opción más cómoda, pero también la más costosa. Estos intermediarios cobran comisiones directas y aplican un \"spread\" (la diferencia entre el precio de compra y el de venta) que puede restar entre un 8% y un 15% de tu presupuesto total de viaje.",
      },
      {
        type: "blockquote",
        value: "El cambio de divisas tradicional está diseñado para beneficiar al intermediario, no al viajero. Cambiar 500 dólares en un aeropuerto puede costarte hasta 75 dólares en comisiones ocultas y tasas desfavorables.",
      },
      {
        type: "h2",
        value: "Estrategias para optimizar tu cambio de dinero",
      },
      {
        type: "p",
        value: "Para evitar pagar de más y estirar tu presupuesto, te recomendamos seguir las siguientes prácticas en tu próxima aventura:",
      },
      {
        type: "ul",
        value: [
          "Planifica con antelación: Nunca cambies todo tu dinero en el aeropuerto. Lleva solo lo mínimo para el transporte inicial.",
          "Usa tarjetas de débito sin comisiones internacionales para retirar del cajero automático si es estrictamente necesario.",
          "Adopta la economía colaborativa: Conecta con personas locales que necesiten tu divisa de origen.",
        ],
      },
      {
        type: "h2",
        value: "Zeepod Exchange: La alternativa colaborativa",
      },
      {
        type: "p",
        value: "Aquí es donde entra Zeepod Exchange. En lugar de acudir a un banco, puedes usar la app de Zeepod para geolocalizar a locales u otros viajeros cercanos que deseen comprar tu moneda de origen y tengan la divisa local que necesitas. Al pactar el tipo de cambio directamente entre personas, eliminas a los intermediarios y logras la tasa más justa del mercado, disfrutando además de un valioso intercambio cultural.",
      },
    ],
  },
  "guia-remesas-transferencias-colaborativas": {
    slug: "guia-remesas-transferencias-colaborativas",
    image: "/Imagenes/Imagenes de influenciadores y lugares/G0298037.jpg",
    tag: "Finanzas",
    tagClass: "bg-zeep-purple/15 text-zeep-purple",
    title: "Guía para enviar remesas y transferencias colaborativas",
    excerpt:
      "El envío tradicional de dinero puede costar hasta un 10% en cargos ocultos. Descubre cómo las redes persona a persona conectan usuarios para transferencias directas y justas.",
    authorName: "Marcus Thorne",
    authorAvatar: "MT",
    date: "Jul 08, 2026",
    readTime: "6 min lectura",
    content: [
      {
        type: "p",
        value: "Enviar dinero a otro país solía ser sinónimo de papeleo, largas esperas y tarifas exorbitantes. Para los nómadas digitales, migrantes y estudiantes en el extranjero, estas transferencias mensuales representan un gasto considerable que impacta en su economía.",
      },
      {
        type: "h2",
        value: "¿Qué es una transferencia colaborativa?",
      },
      {
        type: "p",
        value: "En lugar de realizar una transferencia internacional clásica (que pasa por múltiples bancos corresponsales con costos elevados y tiempos de espera de días), la transferencia colaborativa conecta a dos personas que quieren hacer movimientos inversos de divisas.",
      },
      {
        type: "blockquote",
        value: "Si Juan en España quiere enviar euros a Colombia, y María en Colombia quiere enviar pesos a España, ambos pueden coordinarse a través de Zeepod para entregarse el dinero de forma local en sus respectivos países. El dinero real nunca cruza la frontera física, eliminando las tarifas internacionales por completo.",
      },
      {
        type: "h2",
        value: "Las ventajas de Zeepod Transfer",
      },
      {
        type: "p",
        value: "Con Zeepod Transfer, este proceso de remesas colaborativas se simplifica y automatiza de forma segura y transparente para todos los usuarios:",
      },
      {
        type: "ul",
        value: [
          "Costos mínimos: Al ser un intercambio directo P2P, evitas las comisiones de remesadoras tradicionales.",
          "Rapidez: Los intercambios locales de dinero son inmediatos mediante transferencias bancarias locales instantáneas.",
          "Seguridad garantizada: Los usuarios están verificados en la plataforma, protegiendo cada transacción con geolocalización e historial de reputación.",
        ],
      },
    ],
  },
  "intercambio-cultural-mas-alla-dinero": {
    slug: "intercambio-cultural-mas-alla-dinero",
    image: "/Imagenes/Imagenes de influenciadores y lugares/GOPR8397.jpg",
    tag: "Comunidad",
    tagClass: "bg-zeep-orange/15 text-[#b5760a]",
    title: "Intercambio cultural: Más allá de cambiar dinero",
    excerpt:
      "Las mejores historias y recomendaciones locales ocurren cuando conectas frente a frente con las personas. Zeeperos de todo el mundo nos comparten sus experiencias.",
    authorName: "David Cho",
    authorAvatar: "DC",
    date: "Jun 28, 2026",
    readTime: "5 min lectura",
    content: [
      {
        type: "p",
        value: "Cuando pensamos en cambiar dinero, nos viene a la mente una ventanilla fría de vidrio en un banco y un cajero apurado. Pero para la comunidad Zeeper, cambiar divisas es también una oportunidad increíble para conectar humanamente.",
      },
      {
        type: "h2",
        value: "El dinero como puente social",
      },
      {
        type: "p",
        value: "La economía colaborativa no se trata solo de ahorrar dinero, sino de generar confianza entre desconocidos. Al reunirte con un local para cambiar divisas, estás interactuando con alguien que vive en el destino y conoce de primera mano los mejores lugares, consejos y cultura de la región.",
      },
      {
        type: "blockquote",
        value: "Una transacción económica sencilla se convierte en el inicio de una charla, una recomendación sobre el mejor restaurante local escondido o incluso una gran amistad de viaje.",
      },
      {
        type: "h2",
        value: "Historias reales de la comunidad Zeeper",
      },
      {
        type: "p",
        value: "Nuestros usuarios comparten constantemente anécdotas increíbles de sus intercambios por el mundo:",
      },
      {
        type: "ul",
        value: [
          "Elena de Argentina cambió euros con un local en Berlín y terminó siendo invitada a una cena típica familiar de bienvenida.",
          "Kenji de Japón encontró a un viajero en Tokio para cambiar dólares y descubrieron que iban a la misma universidad en Estados Unidos.",
          "David de México cambió pesos por dólares en Nueva York y recibió un tour personalizado gratuito por los rincones menos turísticos de la ciudad.",
        ],
      },
      {
        type: "p",
        value: "En definitiva, Zeepod redefine el intercambio financiero. Viajar no es solo acumular sellos en el pasaporte; es coleccionar momentos, personas y aprendizajes. ¡Únete a la comunidad y haz que tu próximo viaje sea inolvidable!",
      },
    ],
  },
};

export const postsDataEn: Record<string, BlogPost> = {
  "ahorrar-cambio-divisas-viajar": {
    slug: "ahorrar-cambio-divisas-viajar",
    image: "/Imagenes/DSC_0694.jpg",
    tag: "Travel",
    tagClass: "bg-zeep-cyan/15 text-zeep-cyan",
    title: "How to Save on Currency Exchange When Traveling",
    excerpt:
      "Avoid abusive commissions at airports and banks. We share the best collaborative strategies to optimize your travel budget and avoid exchange losses.",
    authorName: "Sofía Rodríguez",
    authorAvatar: "SR",
    date: "Jul 10, 2026",
    readTime: "4 min read",
    content: [
      {
        type: "p",
        value: "Arriving in a new country is one of the most exciting feelings for any traveler. However, there is a classic obstacle we all face as soon as we step off the plane: where do I get local currency without losing a fortune in the process?",
      },
      {
        type: "h2",
        value: "The Problem of Traditional Middlemen",
      },
      {
        type: "p",
        value: "Airport currency exchanges and traditional banks are usually the most convenient options, but also the most expensive. These intermediaries charge direct fees and apply a spread (the difference between buying and selling prices) that can take away between 8% and 15% of your total travel budget.",
      },
      {
        type: "blockquote",
        value: "Traditional currency exchange is designed to benefit the middleman, not the traveler. Exchanging $500 at an airport can cost you up to $75 in hidden fees and unfavorable rates.",
      },
      {
        type: "h2",
        value: "Strategies to Optimize Money Exchange",
      },
      {
        type: "p",
        value: "To avoid overpaying and stretch your budget, we recommend following these practices on your next adventure:",
      },
      {
        type: "ul",
        value: [
          "Plan ahead: Never exchange all your money at the airport. Carry only the minimum for initial transport.",
          "Use international fee-free debit cards to withdraw from ATMs if strictly necessary.",
          "Embrace the sharing economy: Connect with local people who need your home currency.",
        ],
      },
      {
        type: "h2",
        value: "Zeepod Exchange: The Collaborative Alternative",
      },
      {
        type: "p",
        value: "This is where Zeepod Exchange comes in. Instead of going to a bank, you can use the Zeepod app to geolocate locals or other nearby travelers who want to buy your home currency and have the local currency you need. By negotiating the exchange rate directly between people, you eliminate intermediaries and achieve the fairest market rate, while enjoying a valuable cultural exchange.",
      },
    ],
  },
  "guia-remesas-transferencias-colaborativas": {
    slug: "guia-remesas-transferencias-colaborativas",
    image: "/Imagenes/Imagenes de influenciadores y lugares/G0298037.jpg",
    tag: "Finance",
    tagClass: "bg-zeep-purple/15 text-zeep-purple",
    title: "Guide to Sending Remittances and Collaborative Transfers",
    excerpt:
      "Traditional money transfers can cost up to 10% in hidden fees. Learn how peer-to-peer networks connect users for direct and fair transfers.",
    authorName: "Marcus Thorne",
    authorAvatar: "MT",
    date: "Jul 08, 2026",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        value: "Sending money to another country used to be synonymous with paperwork, long wait times, and exorbitant fees. For digital nomads, migrants, and students abroad, these monthly transfers represent a significant expense that impacts their finances.",
      },
      {
        type: "h2",
        value: "What is a Collaborative Transfer?",
      },
      {
        type: "p",
        value: "Instead of a traditional international transfer (which passes through multiple correspondent banks with high costs and wait times of several days), a collaborative transfer connects two people who want to make opposite currency movements.",
      },
      {
        type: "blockquote",
        value: "If Juan in Spain wants to send euros to Colombia, and Maria in Colombia wants to send pesos to Spain, they can coordinate through Zeepod to deliver the money locally in their respective countries. The real money never crosses the physical border, eliminating international fees entirely.",
      },
      {
        type: "h2",
        value: "The Advantages of Zeepod Transfer",
      },
      {
        type: "p",
        value: "With Zeepod Transfer, this collaborative remittance process is simplified and automated securely and transparently for all users:",
      },
      {
        type: "ul",
        value: [
          "Minimal costs: Being a direct P2P exchange, you avoid the commissions of traditional remittance companies.",
          "Speed: Local money exchanges are immediate via instant local bank transfers.",
          "Guaranteed safety: Users are verified on the platform, protecting each transaction with geolocation and reputation history.",
        ],
      },
    ],
  },
  "intercambio-cultural-mas-alla-dinero": {
    slug: "intercambio-cultural-mas-alla-dinero",
    image: "/Imagenes/Imagenes de influenciadores y lugares/GOPR8397.jpg",
    tag: "Community",
    tagClass: "bg-zeep-orange/15 text-[#b5760a]",
    title: "Cultural Exchange: Beyond Swapping Money",
    excerpt:
      "The best stories and local recommendations happen when you connect face-to-face with people. Zeepers around the world share their experiences.",
    authorName: "David Cho",
    authorAvatar: "DC",
    date: "Jun 28, 2026",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        value: "When we think of exchanging money, we picture a cold glass window at a bank and a rushed cashier. But for the Zeeper community, currency exchange is also an incredible opportunity to connect on a human level.",
      },
      {
        type: "h2",
        value: "Money as a Social Bridge",
      },
      {
        type: "p",
        value: "The sharing economy is not just about saving money; it is about building trust between strangers. By meeting a local to exchange currency, you are interacting with someone who lives in the destination and knows firsthand the best spots, tips, and culture of the region.",
      },
      {
        type: "blockquote",
        value: "A simple economic transaction becomes the start of a chat, a recommendation for the best hidden local restaurant, or even a great travel friendship.",
      },
      {
        type: "h2",
        value: "Real Stories from the Zeeper Community",
      },
      {
        type: "p",
        value: "Our users constantly share incredible anecdotes from their exchanges around the world:",
      },
      {
        type: "ul",
        value: [
          "Elena from Argentina exchanged euros with a local in Berlin and ended up being invited to a typical family welcome dinner.",
          "Kenji from Japan found a traveler in Tokyo to exchange dollars and discovered they went to the same university in the US.",
          "David from Mexico exchanged pesos for dollars in New York and received a free personalized tour of the city's less touristy spots.",
        ],
      },
      {
        type: "p",
        value: "In short, Zeepod redefines financial exchange. Traveling is not just about collecting stamps in your passport; it is about collecting moments, people, and lessons. Join the community and make your next trip unforgettable!",
      },
    ],
  },
};

export const postsData = postsDataEs;
