import { useState } from "react";

const ARQUETIPOS = [
  { id: "inocente",   name: "Inocente",     label: "Grupo 01", values: ["Naturalidade","Honestidade","Sossego","Simplicidade","Tradicionalismo"] },
  { id: "explorador", name: "Explorador",   label: "Grupo 02", values: ["Auto-realização","Movimento","Novidade","Independência","Individualidade"] },
  { id: "sabio",      name: "Sábio",        label: "Grupo 03", values: ["Sabedoria","Objetividade","Análise","Inteligência","Compreensão"] },
  { id: "heroi",      name: "Herói",        label: "Grupo 04", values: ["Admiração","Legado","Disciplina","Superação","Justiça"] },
  { id: "foradlei",   name: "Fora-da-lei",  label: "Grupo 05", values: ["Autonomia","Revolução","Poder","Mudança","Expressão"] },
  { id: "mago",       name: "Mago",         label: "Grupo 06", values: ["Intuição","Transformação","Auto-reflexão","Magnetismo","Visionário"] },
  { id: "cara",       name: "Cara Comum",   label: "Grupo 07", values: ["Conexão","Pertencimento","Igualdade","Verdade","Discrição"] },
  { id: "amante",     name: "Amante",       label: "Grupo 08", values: ["Intimidade","Auto-aceitação","Relacionamento","Estética/beleza","Exclusividade"] },
  { id: "bobo",       name: "Bobo da Corte",label: "Grupo 09", values: ["Diversão","Quebrar regras","Leveza","Espontaneidade","Ousadia"] },
  { id: "cuidador",   name: "Cuidador",     label: "Grupo 10", values: ["Confiança","Servir/Ajudar","Coerência","Proteção","Bem-estar"] },
  { id: "criador",    name: "Criador",      label: "Grupo 11", values: ["Criação","Inovação","Auto-expressão","Diferenciação","Perfeccionismo"] },
  { id: "governante", name: "Governante",   label: "Grupo 12", values: ["Liderar","Controle","Organização","Responsabilidade","Sucesso/Prestígio"] },
];

const QUESTIONARIOS = {
  inocente: {
    sections: [
      { label: "Expressão verbal", max: 25, questions: [
        "Gosto de falar de maneira otimista e positiva, focando nos aspectos bons da vida.",
        "Minhas conversas frequentemente incluem palavras de encorajamento e esperança.",
        "Prefiro usar uma linguagem que transmita simplicidade e clareza.",
        "Gosto de manter um tom de voz calmo e tranquilizador.",
        "Adoro expressar gratidão e reconhecer as coisas boas da vida.",
      ]},
      { label: "Motivações", max: 15, questions: [
        "Acredito que a vida pode ser simples, boa e descomplicada.",
        "Me considero livre para viver conforme o que eu acredito.",
        "Desejo uma vida mais natural e menos competitiva.",
      ]},
      { label: "Comportamento", max: 45, questions: [
        "Gosto de ambientes que sejam acolhedores e que promovam uma sensação de segurança e bem-estar.",
        "Prefiro focar no lado bom das pessoas e das situações.",
        "Adoro encontrar alegria nas pequenas coisas do dia a dia.",
        "Estou sempre procurando maneiras de simplificar minha vida e reduzir o estresse.",
        "Acredito na importância de manter a pureza de intenções em todas as minhas ações.",
        "Minha mentalidade é focada na gratidão e na apreciação do presente.",
        "Valorizo a honestidade e a transparência, procurando sempre ser verdadeiro e sincero.",
        "Gosto de criar ambientes e situações que promovam a tranquilidade.",
        "Valorizo a presença e a atenção plena, aproveitando cada momento.",
      ]},
      { label: "Expressão visual", max: 25, questions: [
        "Meu estilo de vestir é simples e confortável.",
        "Prefiro ambientes claros e iluminados, que me transmitam paz e tranquilidade.",
        "Prefiro peças atemporais que nunca saem de moda.",
        "Prefiro cores suaves e delicadas.",
        "Gosto de designs simples e minimalistas, sem muitos detalhes ou complicações.",
      ]},
    ]
  },
  explorador: {
    sections: [
      { label: "Expressão verbal", max: 25, questions: [
        "Me entusiasmo ao falar sobre experiências que tive ou quero ter.",
        "Encorajo meus amigos a explorar seus interesses e hobbies com mais profundidade.",
        "Tenho uma tendência a fazer perguntas que levam os outros a explorar novas possibilidades.",
        "Gosto de discutir sobre culturas diferentes e modos de vida alternativos.",
        "Costumo encorajar as pessoas a considerar novas possibilidades e alternativas.",
      ]},
      { label: "Motivações", max: 15, questions: [
        "Amo viajar e explorar o mundo e novas experiências.",
        "Procuro descobrir quem eu sou para me tornar uma pessoa mais realizada.",
        "Valorizo poder expressar minha individualidade.",
      ]},
      { label: "Comportamento", max: 45, questions: [
        "Me sinto energizado ao aprender sobre novos conceitos e ideias.",
        "Estou sempre curioso sobre como as coisas funcionam e como podem ser melhoradas.",
        "Minha mente está constantemente buscando novas oportunidades de aprendizado e crescimento.",
        "Quando tomo decisões, considero como elas podem me abrir novas oportunidades e caminhos.",
        "Prefiro passar meu tempo livre explorando novos lugares ou aprendendo novas habilidades.",
        "Me sinto realizado quando descubro algo novo ou diferente do comum.",
        "Gosto de experimentar novas culinárias e explorar diferentes tradições culturais.",
        "Valorizo a liberdade e a flexibilidade para seguir minha curiosidade e interesses.",
        "Gosto de espaços que são abertos e flexíveis, permitindo várias configurações e usos.",
      ]},
      { label: "Expressão visual", max: 25, questions: [
        "Meu guarda-roupa é composto por peças versáteis que se adaptam a diferentes ambientes e ocasiões.",
        "Gosto de roupas modernas e práticas, com um toque de sofisticação.",
        "Gosto de acessórios que tenham uma história.",
        "Prefiro tons neutros com destaques vibrantes.",
        "Prefiro decorações que refletem minhas viagens e experiências pessoais.",
      ]},
    ]
  },
  sabio: {
    sections: [
      { label: "Expressão verbal", max: 25, questions: [
        "Gosto de falar de maneira informativa e educativa, compartilhando conhecimento com os outros.",
        "Minhas conversas frequentemente incluem fatos, dados e insights detalhados.",
        "Prefiro manter um tom de voz calmo e ponderado, que reflita a seriedade do conhecimento.",
        "Adoro discutir temas complexos e analisar diferentes perspectivas.",
        "Encorajo os outros a questionar e buscar conhecimento por si mesmos.",
      ]},
      { label: "Motivações", max: 15, questions: [
        "Gosto de ser livre para pensar por mim mesmo e sustentar as minhas próprias opiniões.",
        "Busco pela verdade e conhecimento.",
        "Gosto de me sentir competente, inteligente e no controle.",
      ]},
      { label: "Comportamento", max: 45, questions: [
        "Penso em como posso entender profundamente os assuntos e compartilhar esse conhecimento.",
        "Acredito na importância da reflexão e da análise cuidadosa para tomar decisões.",
        "Prefiro abordar problemas com uma mentalidade investigativa e curiosa.",
        "Minha mente está sempre buscando novas informações e insights.",
        "Minha abordagem aos problemas é lógica e sistemática, buscando a verdade.",
        "Acredito que o aprendizado contínuo é essencial para o crescimento pessoal e profissional.",
        "Gosto de ler e estudar sobre uma variedade de tópicos.",
        "Prefiro passar meu tempo em atividades que promovem o aprendizado e o crescimento intelectual.",
        "Valorizo a precisão e a clareza em todos os aspectos da minha vida.",
      ]},
      { label: "Expressão visual", max: 25, questions: [
        "Meu estilo de vestir é clássico e intelectual, refletindo minha paixão pelo conhecimento.",
        "Gosto de usar roupas que me façam parecer inteligente e sério.",
        "Sou atraído por designs clean e minimalistas.",
        "Prefiro cores sóbrias e estilos que são atemporais e sofisticados.",
        "Prefiro peças que são bem confeccionadas e que refletem minha atenção aos detalhes.",
      ]},
    ]
  },
  heroi: {
    sections: [
      { label: "Expressão verbal", max: 25, questions: [
        "Prefiro um tom de voz firme e confiante que inspire confiança nos outros.",
        "Minhas conversas frequentemente incluem exemplos de superação e determinação.",
        "Prefiro usar uma linguagem que transmita força e coragem.",
        "Minhas conversas muitas vezes giram em torno da importância do esforço e da dedicação.",
        "Costumo encorajar os outros a nunca desistirem e a persistirem em seus objetivos.",
      ]},
      { label: "Motivações", max: 15, questions: [
        "Sou motivado por meio da competição.",
        "Acredito ter a obrigação de cumprir o meu dever com a comunidade.",
        "Quero usar minhas competências para fazer a diferença para mim e para as pessoas.",
      ]},
      { label: "Comportamento", max: 45, questions: [
        "Penso em como posso superar obstáculos e alcançar grandes conquistas.",
        "Acredito na importância da disciplina e do esforço para atingir metas.",
        "Prefiro abordar problemas com uma mentalidade focada em soluções e resultados.",
        "Minha mente está sempre buscando maneiras de vencer desafios e melhorar.",
        "Gosto de definir metas altas e trabalhar arduamente para alcançá-las.",
        "Prefiro estratégias que exigem esforço e comprometimento, mas que tragam grandes recompensas.",
        "Gosto de pensar em maneiras de me aprimorar continuamente.",
        "Acredito que cada obstáculo é uma oportunidade para crescer e se fortalecer.",
        "Gosto de participar de atividades que exigem esforço físico e mental.",
      ]},
      { label: "Expressão visual", max: 25, questions: [
        "Meu estilo de vestir é funcional e prático, permitindo que eu esteja sempre pronto para ação.",
        "Minhas roupas refletem minha abordagem ativa e determinada à vida.",
        "Sou atraído por designs que são robustos e eficientes.",
        "Aprecio elementos visuais que simbolizem coragem e ação, como linhas marcantes e formas geométricas que inspiram poder.",
        "Tenho preferência por cores fortes e vibrantes.",
      ]},
    ]
  },
  foradlei: {
    sections: [
      { label: "Expressão verbal", max: 25, questions: [
        "Eu costumo desafiar ideias e questionar o que é comum em minhas conversas.",
        "Gosto de falar de maneira franca e direta, sem medo de expressar minhas opiniões.",
        "Minha comunicação muitas vezes envolve provocar reflexão e incentivar mudanças.",
        "Adoro iniciar debates sobre temas controversos para promover uma visão diferente.",
        "Gosto de desafiar as pessoas a pensar de maneira diferente e a sair de suas zonas de conforto.",
      ]},
      { label: "Motivações", max: 15, questions: [
        "Desejo de transformar e quebrar regras estabelecidas.",
        "Busca constante por independência e rejeita as restrições.",
        "Desejo de quebrar regras para expressar sua identidade sem se submeter a imposições.",
      ]},
      { label: "Comportamento", max: 45, questions: [
        "Eu procuro constantemente maneiras de fazer as coisas de forma diferente do convencional.",
        "Acredito que a mudança é essencial e estou sempre pensando em como transformar o que é considerado normal.",
        "Gosto de imaginar cenários alternativos que desafiem a realidade atual.",
        "Acredito que as melhores soluções vêm de ideias ousadas.",
        "Estou constantemente questionando por que as coisas são feitas de determinada maneira.",
        "Minha criatividade floresce ao romper com as normas.",
        "Valorizo a liberdade de ser eu mesmo, independentemente das expectativas sociais.",
        "Adoro assumir riscos e explorar novos territórios.",
        "Minha vida é guiada pela busca contínua por liberdade e personalidade.",
      ]},
      { label: "Expressão visual", max: 25, questions: [
        "Meu estilo é uma extensão da minha personalidade disruptiva e independente.",
        "Adoro usar peças que causam impacto e chamam a atenção.",
        "Minha moda pessoal é uma mistura de estilos que não seguem regras fixas.",
        "Tenho preferência por cores escuras ou contrastantes.",
        "Aprecio elementos visuais que transmitam rebeldia, como detalhes em couro, estampas fortes ou cortes assimétricos.",
      ]},
    ]
  },
  mago: {
    sections: [
      { label: "Expressão verbal", max: 25, questions: [
        "Gosto de falar de maneira inspiradora, estimulando a imaginação dos outros.",
        "Minhas conversas frequentemente incluem ideias transformadoras e visionárias.",
        "Prefiro usar uma linguagem que transmita um senso de possibilidade.",
        "Adoro compartilhar pensamentos que provocam reflexão e inspiração.",
        "Encorajo os outros a verem além do óbvio e a explorarem novas perspectivas.",
      ]},
      { label: "Motivações", max: 15, questions: [
        "Por mais que os outros duvidem, eu não desisto dos meus sonhos.",
        "Gosto de promover a mudança.",
        "Sou motivado pela transformação pessoal e a oportunidade de mudar as pessoas.",
      ]},
      { label: "Comportamento", max: 45, questions: [
        "Penso em como posso transformar situações e criar novas realidades.",
        "Prefiro abordar problemas com uma mentalidade transformadora.",
        "Minha mente está sempre explorando novas possibilidades.",
        "Prefiro soluções que são visionárias e que desafiam o padrão.",
        "Minha abordagem aos problemas é muitas vezes intuitiva.",
        "Acredito que a chave para o sucesso está na capacidade de ver o invisível e criar o impossível.",
        "Gosto de considerar o impacto a longo prazo e as implicações mais amplas de minhas ações.",
        "Gosto de ambientes que são organizados, mas que também sejam cheios de vida e significado.",
        "Acredito que a verdadeira mudança vem de uma profunda transformação interior.",
      ]},
      { label: "Expressão visual", max: 25, questions: [
        "Meu estilo de vestir é único e muitas vezes místico, refletindo minha busca por transformação.",
        "Gosto de usar roupas que me façam sentir enigmático.",
        "Prefiro designs que transmitam uma sensação de magia e originalidade.",
        "Prefiro um design que seja inspirador e cheio de simbolismo.",
        "Gosto de acessórios que acrescentem um toque de mistério ou misticismo ao meu visual.",
      ]},
    ]
  },
  cara: {
    sections: [
      { label: "Expressão verbal", max: 25, questions: [
        "Gosto de falar de maneira simples e direta, sem complicações.",
        "Minhas conversas frequentemente incluem exemplos do dia a dia que todos podem entender.",
        "Minhas conversas muitas vezes giram em torno de assuntos práticos e cotidianos.",
        "Costumo usar palavras e expressões que são comuns e de fácil compreensão.",
        "Prefiro um tom de voz amigável e informal, que deixe as pessoas à vontade.",
      ]},
      { label: "Motivações", max: 15, questions: [
        "Busco sempre pertencer a um grupo com relações sólidas e verdadeiras.",
        "Quero acabar com o artificialismo e focar na simplicidade das coisas.",
        "Procuro confortar as pessoas, afirmando que elas são boas do jeito que são.",
      ]},
      { label: "Comportamento", max: 45, questions: [
        "Penso em soluções práticas e realistas para os problemas que encontro.",
        "Acredito que a colaboração e o trabalho em equipe são essenciais para o sucesso.",
        "Prefiro manter meus pensamentos e ações fundamentados no senso comum e na experiência prática.",
        "Gosto de pensar de maneira pragmática e evitar complicações desnecessárias.",
        "Acredito que pequenas ações podem ter um grande impacto no bem-estar coletivo.",
        "Acredito na importância de tomar decisões baseadas na experiência e no bom senso.",
        "Prefiro passar meu tempo em atividades que são úteis e produtivas.",
        "Gosto de construir relacionamentos baseados na confiança mútua e na reciprocidade.",
        "Adoro participar de atividades comunitárias e colaborar com os outros.",
      ]},
      { label: "Expressão visual", max: 25, questions: [
        "Meu estilo de vestir é casual e prático, adequado para o dia a dia.",
        "Gosto de usar roupas confortáveis e funcionais, sem ostentação.",
        "Cores neutras e discretas fazem parte do meu estilo pessoal.",
        "Aprecio elementos visuais que transmitem simplicidade, sem exageros ou detalhes desnecessários.",
        "Prefiro ambientes e designs que sejam simples, acolhedores e práticos.",
      ]},
    ]
  },
  amante: {
    sections: [
      { label: "Expressão verbal", max: 25, questions: [
        "Eu me expresso com emoção e intensidade, sempre buscando criar uma conexão profunda com as pessoas ao meu redor.",
        "Prefiro usar uma linguagem que transmita calor e proximidade.",
        "Encorajo os outros a expressarem seus sentimentos e a se conectarem emocionalmente.",
        "Minhas conversas são muitas vezes sobre experiências pessoais e relacionamentos significativos.",
        "Gosto de fazer elogios genuínos e de reconhecer o valor dos outros.",
      ]},
      { label: "Motivações", max: 15, questions: [
        "Sou atraído pela beleza e pela estética, buscando criar e apreciar ambientes, experiências e relacionamentos.",
        "Sou impulsionado pelo amor e pela paixão, não apenas em relacionamentos românticos, mas em todas as áreas da vida.",
        "Quero aproveitar a vida ao máximo, experimentando alegria e satisfação em momentos de intimidade e conexão.",
      ]},
      { label: "Comportamento", max: 45, questions: [
        "Valorizo a beleza e a estética, procurando sempre criar um ambiente agradável e atraente.",
        "Quando tomo decisões, considero como elas podem fortalecer e enriquecer minhas relações pessoais.",
        "Procuro constantemente maneiras de demonstrar amor e cuidado pelas pessoas ao meu redor.",
        "Adoro planejar encontros e eventos que criem memórias especiais.",
        "Gosto de mostrar meu apreço por meio de pequenos gestos de carinho.",
        "Prefiro passar meu tempo com aqueles que amo, cultivando conexões significativas.",
        "Valorizo a intimidade e a proximidade em meus relacionamentos.",
        "Não busco a perfeição, mas procuro relacionamentos reais.",
        "Gosto de status e qualidade, não por poder, mas para aumentar o meu prazer pela vida.",
      ]},
      { label: "Expressão visual", max: 25, questions: [
        "Meu estilo de vestir é elegante e busca realçar minha aparência de maneira sofisticada.",
        "Gosto de usar roupas que me façam sentir atraente e confiante.",
        "Prefiro espaços que exalam beleza e harmonia, com um toque de luxo e conforto.",
        "Prefiro cores e estilos que transmitam calor e acolhimento.",
        "Prefiro designs que transmitam sensualidade, elegância e romantismo.",
      ]},
    ]
  },
  bobo: {
    sections: [
      { label: "Expressão verbal", max: 25, questions: [
        "Gosto de falar de maneira leve e engraçada, tornando as conversas mais agradáveis.",
        "Encorajo os outros a verem o lado bom das coisas de maneira natural.",
        "Prefiro usar uma linguagem que transmita alegria e positividade.",
        "Adoro compartilhar histórias engraçadas de forma natural e sem exageros.",
        "Costumo usar humor sutil para deixar as conversas mais interessantes.",
      ]},
      { label: "Motivações", max: 15, questions: [
        "Gosto de viver o presente com alegria total.",
        "Procuro mostrar para as pessoas que é possível viver com leveza e felicidade.",
        "Gosto de quebrar as regras e fugir dos padrões convencionais.",
      ]},
      { label: "Comportamento", max: 45, questions: [
        "Gosto de encontrar soluções que tornem as situações menos estressantes.",
        "Minha mente está sempre procurando maneiras de trazer leveza para as situações.",
        "Valorizo a capacidade de encontrar momentos de alegria nas pequenas coisas do dia-a-dia.",
        "Não levo as coisas muito a sério, gosto de brincar com a vida.",
        "Fujo do tédio de todas as formas possíveis.",
        "Vivo a vida, um dia de cada vez.",
        "Gosto de encontrar maneiras novas, ousadas e inteligentes de ver o mundo.",
        "Nenhum resultado vale o sacrifício da alegria de viver o agora.",
        "Não gosto de conviver com pessoas sérias demais e sem senso de humor.",
      ]},
      { label: "Expressão visual", max: 25, questions: [
        "Meu estilo de vestir é descontraído e colorido, refletindo minha personalidade alegre.",
        "Prefiro ambientes e designs que transmitam alegria, leveza e um toque de irreverência.",
        "Prefiro cores vibrantes e chamativas, que reflitam uma atitude positiva.",
        "Gosto de um estilo de vestir descontraído, com peças que expressem humor e criatividade.",
        "Gosto de linhas orgânicas e curvas, formas arredondadas e amigáveis.",
      ]},
    ]
  },
  cuidador: {
    sections: [
      { label: "Expressão verbal", max: 25, questions: [
        "Gosto de falar de maneira acolhedora e empática, demonstrando preocupação pelos outros.",
        "Minhas conversas frequentemente incluem palavras de apoio e encorajamento.",
        "Prefiro usar uma linguagem que transmita cuidado e compreensão.",
        "Encorajo os outros a buscarem apoio e não hesitarem em pedir ajuda quando necessário.",
        "Adoro escutar os outros e oferecer conselhos que possam ajudar.",
      ]},
      { label: "Motivações", max: 15, questions: [
        "Busco sempre oferecer apoio e ajuda para os outros.",
        "Tenho que equilibrar o cuidado com os outros e o cuidado comigo mesmo.",
        "Sempre mostro o zelo pelas minhas ações e não faço discursos vazios.",
      ]},
      { label: "Comportamento", max: 45, questions: [
        "Penso em como posso ajudar os outros e fazer a diferença na vida das pessoas.",
        "Prefiro tomar decisões que beneficiem o bem-estar coletivo.",
        "Minha mente está sempre buscando maneiras de proporcionar conforto e assistência.",
        "Gosto de antecipar as necessidades dos outros e me preparar para ajudar.",
        "Prefiro pensar em soluções que sejam benéficas para a comunidade como um todo.",
        "Valorizo a colaboração e a solidariedade em todos os aspectos da minha vida.",
        "Procuro constantemente maneiras de ser útil e contribuir para o bem-estar das pessoas ao meu redor.",
        "Adoro participar de atividades voluntárias e de apoio à comunidade.",
        "Gosto de construir relacionamentos baseados na empatia e no apoio mútuo.",
      ]},
      { label: "Expressão visual", max: 25, questions: [
        "Prefiro peças que transmitam uma sensação de conforto e confiança.",
        "Adoro tecidos macios e cores suaves que transmitem serenidade.",
        "Aprecio elementos visuais que transmitem gentileza e cuidado, com detalhes simples e funcionais.",
        "Prefiro roupas sem extravagâncias.",
        "Sou atraído por design simples com cores suaves e reconfortantes.",
      ]},
    ]
  },
  criador: {
    sections: [
      { label: "Expressão verbal", max: 25, questions: [
        "Minhas conversas frequentemente envolvem discussões sobre novos projetos e criações.",
        "Gosto de expressar minhas ideias.",
        "Costumo compartilhar minhas inspirações e fontes de criatividade com amigos.",
        "Eu encorajo os outros a pensar de forma criativa e explorar suas habilidades.",
        "Minhas conversas muitas vezes giram em torno de como melhorar ou reinventar algo.",
      ]},
      { label: "Motivações", max: 15, questions: [
        "Busco constantemente encontrar possibilidades de auto-expressão.",
        "Sempre me inconformo com as situações e busco melhorias.",
        "Gosto de criar estruturas que impactam a sociedade.",
      ]},
      { label: "Comportamento", max: 45, questions: [
        "Sempre busco novas maneiras de resolver problemas e criar soluções únicas.",
        "Prefiro pensar de maneira visual, muitas vezes imaginando como as coisas poderiam ser melhoradas ou transformadas.",
        "Minha mente está constantemente gerando novas ideias.",
        "Adoro a sensação de realizar uma visão ou conceito que imaginei.",
        "Minha criatividade não se limita a uma área, gosto de explorar diferentes possibilidades.",
        "Valorizo a liberdade de expressão.",
        "Preciso de espaços que sejam visualmente estimulantes e cheios de inspiração.",
        "Gosto de desafiar as normas e pensar fora da caixa.",
        "Adoro dedicar tempo a hobbies que envolvem criação, como pintura, escultura ou design.",
      ]},
      { label: "Expressão visual", max: 25, questions: [
        "Gosto de misturar peças e estilos para criar um visual único.",
        "Prefiro roupas que me permitam expressar minha individualidade e criatividade.",
        "Prefiro ambientes e designs que inspirem criatividade, originalidade e expressão pessoal.",
        "Gosto de estar à frente das tendências e definir meu próprio estilo.",
        "Sou atraído por cores vibrantes e formas ousadas no design.",
      ]},
    ]
  },
  governante: {
    sections: [
      { label: "Expressão verbal", max: 25, questions: [
        "Gosto de liderar conversas e manter um tom assertivo e confiante.",
        "Minhas conversas frequentemente incluem orientação e direcionamento para alcançar objetivos.",
        "Adoro compartilhar minhas visões estratégicas e planos com os outros.",
        "Minhas instruções são sempre precisas e detalhadas, garantindo que todos entendam suas responsabilidades.",
        "Prefiro estabelecer regras claras durante as discussões para manter o foco.",
      ]},
      { label: "Motivações", max: 15, questions: [
        "Acredito ser importante assumir a responsabilidade da própria vida.",
        "Tenho liderança nos grupos que participo, como família e trabalho.",
        "Tendo a tornar-me líder na minha área de atuação.",
      ]},
      { label: "Comportamento", max: 45, questions: [
        "Penso de forma estratégica, planejando cuidadosamente minhas ações para alcançar meus objetivos.",
        "Minha abordagem aos problemas é sistemática e orientada por dados.",
        "Gosto de antecipar possíveis obstáculos e planejar soluções antes que os problemas surjam.",
        "Acredito que o sucesso depende de uma visão clara e de um plano bem definido.",
        "Estou sempre pensando em maneiras de otimizar processos e aumentar a eficiência.",
        "Valorizo a previsibilidade e busco criar um ambiente estável e organizado.",
        "Valorizo a liderança e me sinto confortável assumindo o comando em situações diversas.",
        "Adoro estruturar e organizar projetos complexos, garantindo que todos os detalhes sejam pensados.",
        "Minha abordagem à vida é disciplinada e orientada para resultados.",
      ]},
      { label: "Expressão visual", max: 25, questions: [
        "Meu estilo de vestir é clássico e profissional, transmitindo autoridade e confiança.",
        "Gosto de usar roupas que me façam sentir no controle e bem-apresentado.",
        "Aprecio elementos visuais que refletem liderança e organização, como linhas retas e materiais nobres.",
        "Prefiro ambientes e designs que transmitam autoridade, elegância e poder.",
        "Cores fortes e clássicas são predominantes no meu estilo pessoal.",
      ]},
    ]
  },
};

const PURPLE = "#534AB7";
const PURPLE_LIGHT = "#EEEDFE";
const PURPLE_MID = "#AFA9EC";

const styles = {
  page: { minHeight: "100vh", background: "#fafafa", fontFamily: "system-ui, -apple-system, sans-serif", color: "#1a1a1a" },
  inner: { maxWidth: 720, margin: "0 auto", padding: "2rem 1.5rem" },
  phaseLabel: { fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "#888", marginBottom: 6 },
  h2: { fontSize: 22, fontWeight: 500, marginBottom: 6, color: "#1a1a1a" },
  subtitle: { fontSize: 14, color: "#666", marginBottom: 24, lineHeight: 1.6 },
  infoBox: { background: PURPLE_LIGHT, borderLeft: `3px solid ${PURPLE}`, borderRadius: 8, padding: "12px 16px", fontSize: 13, color: "#3C3489", marginBottom: 24, lineHeight: 1.6 },
  input: { width: "100%", padding: "10px 14px", border: "1px solid #ddd", borderRadius: 8, fontSize: 14, outline: "none", marginBottom: 12, boxSizing: "border-box" },
  groupsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 24 },
  groupCard: { background: "#fff", border: "0.5px solid #e5e5e5", borderRadius: 12, padding: "14px 16px" },
  groupLabel: { fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "#999", marginBottom: 10 },
  chip: (sel) => ({ padding: "7px 12px", borderRadius: 8, border: sel ? `1.5px solid ${PURPLE}` : "0.5px solid #e5e5e5", background: sel ? PURPLE : "#fff", color: sel ? "#fff" : "#1a1a1a", fontSize: 13, cursor: "pointer", marginBottom: 6, display: "block", width: "100%", textAlign: "left", fontWeight: sel ? 500 : 400, transition: "all 0.12s" }),
  btn: (disabled) => ({ padding: "11px 24px", borderRadius: 8, border: disabled ? "0.5px solid #ddd" : `0.5px solid ${PURPLE}`, background: disabled ? "#f5f5f5" : PURPLE, color: disabled ? "#aaa" : "#fff", fontSize: 14, fontWeight: 500, cursor: disabled ? "not-allowed" : "pointer", marginRight: 10 }),
  btnSecondary: { padding: "11px 24px", borderRadius: 8, border: "0.5px solid #ddd", background: "#fff", color: "#444", fontSize: 14, fontWeight: 500, cursor: "pointer", marginRight: 10 },
  sectionLabel: { fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: PURPLE, background: PURPLE_LIGHT, borderRadius: 4, padding: "3px 8px", display: "inline-block", marginBottom: 12, marginTop: 20 },
  qRow: { display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "0.5px solid #f0f0f0" },
  qText: { flex: 1, fontSize: 13, lineHeight: 1.5, color: "#1a1a1a" },
  scaleBtn: (active) => ({ width: 34, height: 34, borderRadius: 8, border: active ? `1.5px solid ${PURPLE}` : "0.5px solid #ddd", background: active ? PURPLE : "#fff", color: active ? "#fff" : "#888", fontSize: 13, fontWeight: 500, cursor: "pointer", flexShrink: 0, transition: "all 0.1s" }),
  table: { width: "100%", borderCollapse: "collapse", marginBottom: 24 },
  th: { padding: "8px 10px", fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.07em", color: "#888", borderBottom: "1.5px solid #e5e5e5", textAlign: "center" },
  td: { padding: "12px 10px", textAlign: "center", borderBottom: "0.5px solid #f0f0f0", fontSize: 14, color: "#1a1a1a" },
  rankBadge: (rank) => ({ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 22, height: 22, borderRadius: "50%", fontSize: 11, fontWeight: 500, marginRight: 8, background: rank === 0 ? PURPLE : rank === 1 ? PURPLE_MID : rank === 2 ? PURPLE_LIGHT : "#f0f0f0", color: rank === 0 ? "#fff" : rank === 1 ? "#26215C" : rank === 2 ? "#3C3489" : "#888" }),
  progressBar: { height: 4, background: "#f0f0f0", borderRadius: 2, overflow: "hidden", flex: 1 },
  progressFill: (pct) => ({ height: "100%", background: PURPLE, borderRadius: 2, width: `${pct}%` }),
  nextStep: { background: "#f5f5f5", borderRadius: 12, padding: "16px 20px", fontSize: 13, color: "#666", lineHeight: 1.7 },
  progressTop: { display: "flex", alignItems: "center", gap: 8, marginBottom: 20 },
  progressDot: (done) => ({ width: 8, height: 8, borderRadius: "50%", background: done ? PURPLE : "#ddd" }),
};

export default function Assessment() {
  const [phase, setPhase] = useState("cadastro");
  const [pessoa, setPessoa] = useState({ nome: "", email: "", telefone: "" });
  const [selectedValues, setSelectedValues] = useState(new Set());
  const [topArquetipos, setTopArquetipos] = useState([]);
  const [currentArqIndex, setCurrentArqIndex] = useState(0);
  const [allAnswers, setAllAnswers] = useState({});
  const [currentAnswers, setCurrentAnswers] = useState({});
  const [resultados, setResultados] = useState([]);
  const [sending, setSending] = useState(false);

  const toggleValue = (arqId, value) => {
    const key = arqId + "||" + value;
    setSelectedValues(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const finishFase1 = () => {
    const scores = {};
    ARQUETIPOS.forEach(a => scores[a.id] = 0);
    selectedValues.forEach(key => { scores[key.split("||")[0]]++; });
    const ranked = ARQUETIPOS.map(a => ({ ...a, score: scores[a.id] }))
      .filter(a => a.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    setTopArquetipos(ranked);
    setPhase("fase2");
    setCurrentArqIndex(0);
    setCurrentAnswers({});
  };

  const totalQuestions = (arqId) => {
    const q = QUESTIONARIOS[arqId];
    if (!q) return 0;
    return q.sections.reduce((acc, s) => acc + s.questions.length, 0);
  };

  const answeredCount = Object.keys(currentAnswers).length;

  const finishCurrentQuestionario = () => {
    const arq = topArquetipos[currentArqIndex];
    const q = QUESTIONARIOS[arq.id];
    const sectionScores = q.sections.map((sec, si) => {
      let sum = 0;
      sec.questions.forEach((_, qi) => { sum += currentAnswers[si + "-" + qi] || 0; });
      return { label: sec.label, score: sum, max: sec.max };
    });
    const total = sectionScores.reduce((acc, s) => acc + s.score, 0);
    const newAllAnswers = { ...allAnswers, [arq.id]: { sectionScores, total } };
    setAllAnswers(newAllAnswers);

    if (currentArqIndex < topArquetipos.length - 1) {
      setCurrentArqIndex(currentArqIndex + 1);
      setCurrentAnswers({});
    } else {
      const res = topArquetipos.map(a => {
        const r = newAllAnswers[a.id];
        if (!r) return { ...a, verbal: 0, motiv: 0, comp: 0, visual: 0, total: 0 };
        const [v, m, c, vis] = r.sectionScores;
        return { ...a, verbal: v?.score || 0, motiv: m?.score || 0, comp: c?.score || 0, visual: vis?.score || 0, total: r.total };
      }).sort((a, b) => b.total - a.total);
      setResultados(res);
      setPhase("fase3");
      sendResults(res);
    }
  };

  const sendResults = async (res) => {
    setSending(true);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbyYjSr4y8vkh_9KIoiRwvhwdU4RndCib7o53qR5J2B_71z7UniqZAZjua1h4pvMfB1P/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pessoa, resultados: res }),
      });
    } catch (e) { console.error(e); }
    setSending(false);
  };

  if (phase === "cadastro") return (
    <div style={styles.page}>
      <div style={styles.inner}>
        <p style={styles.phaseLabel}>Assessment de arquétipos</p>
        <h2 style={styles.h2}>Vamos começar</h2>
        <p style={styles.subtitle}>Preencha seus dados para iniciar. O resultado será enviado para o seu e-mail após a conclusão.</p>
        <input style={styles.input} placeholder="Seu nome completo" value={pessoa.nome} onChange={e => setPessoa({ ...pessoa, nome: e.target.value })} />
        <input style={styles.input} placeholder="Seu e-mail" type="email" value={pessoa.email} onChange={e => setPessoa({ ...pessoa, email: e.target.value })} />
        <input style={styles.input} placeholder="Seu telefone (com DDD)" value={pessoa.telefone} onChange={e => setPessoa({ ...pessoa, telefone: e.target.value })} />
        <button style={styles.btn(!pessoa.nome || !pessoa.email || !pessoa.telefone)} disabled={!pessoa.nome || !pessoa.email || !pessoa.telefone} onClick={() => setPhase("fase1")}>Iniciar assessment</button>
      </div>
    </div>
  );

  if (phase === "fase1") return (
    <div style={styles.page}>
      <div style={styles.inner}>
        <p style={styles.phaseLabel}>Fase 1 de 3</p>
        <h2 style={styles.h2}>Quais valores fazem parte de quem você é?</h2>
        <p style={styles.subtitle}>Em cada grupo, marque os valores com os quais você se identifica. Pode marcar quantos quiser — vá pela primeira impressão.</p>
        <div style={styles.infoBox}>Não precisa marcar todos os grupos. Marque apenas o que realmente ressoa com você.</div>
        <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>Marcados: <strong style={{ color: "#1a1a1a" }}>{selectedValues.size}</strong></p>
        <div style={styles.groupsGrid}>
          {ARQUETIPOS.map(a => (
            <div key={a.id} style={styles.groupCard}>
              <div style={styles.groupLabel}>{a.label}</div>
              <div>
                {a.values.map(v => {
                  const key = a.id + "||" + v;
                  const sel = selectedValues.has(key);
                  return <button key={v} style={styles.chip(sel)} onClick={() => toggleValue(a.id, v)}>{v}</button>;
                })}
              </div>
            </div>
          ))}
        </div>
        <div>
          <button style={styles.btnSecondary} onClick={() => setSelectedValues(new Set())}>Limpar</button>
          <button style={styles.btn(selectedValues.size === 0)} disabled={selectedValues.size === 0} onClick={finishFase1}>Avançar</button>
        </div>
      </div>
    </div>
  );

  if (phase === "fase2") {
    const arq = topArquetipos[currentArqIndex];
    const q = QUESTIONARIOS[arq.id];
    const total = totalQuestions(arq.id);
    return (
      <div style={styles.page}>
        <div style={styles.inner}>
          <p style={styles.phaseLabel}>Fase 2 de 3 · Questionário {currentArqIndex + 1} de {topArquetipos.length}</p>
          <div style={styles.progressTop}>
            {topArquetipos.map((_, i) => <div key={i} style={styles.progressDot(i <= currentArqIndex)} />)}
          </div>
          <p style={{ fontSize: 13, color: "#888", marginBottom: 20 }}>Respondidas: <strong style={{ color: "#1a1a1a" }}>{answeredCount}</strong> / {total}</p>
          <div style={styles.infoBox}>Responda cada afirmação de 1 (discordo totalmente) a 5 (concordo totalmente).</div>
          {q.sections.map((sec, si) => (
            <div key={si}>
              <div style={styles.sectionLabel}>{sec.label} · máx. {sec.max} pts</div>
              {sec.questions.map((quest, qi) => {
                const k = si + "-" + qi;
                return (
                  <div key={qi} style={styles.qRow}>
                    <span style={styles.qText}>{quest}</span>
                    <div style={{ display: "flex", gap: 5 }}>
                      {[1,2,3,4,5].map(n => (
                        <button key={n} style={styles.scaleBtn(currentAnswers[k] === n)} onClick={() => setCurrentAnswers(prev => ({ ...prev, [k]: n }))}>{n}</button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
          <div style={{ marginTop: 24 }}>
            <button style={styles.btn(answeredCount < total)} disabled={answeredCount < total} onClick={finishCurrentQuestionario}>
              {currentArqIndex < topArquetipos.length - 1 ? "Próximo questionário" : "Ver resultado"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "fase3") return (
    <div style={styles.page}>
      <div style={styles.inner}>
        <p style={styles.phaseLabel}>Fase 3 de 3</p>
        <h2 style={styles.h2}>Hierarquia de ativação</h2>
        <p style={styles.subtitle}>Veja como cada arquétipo se expressa em você nas diferentes dimensões. Leve esse resultado para a sua sessão.</p>
        <div style={styles.infoBox}>As pontuações revelam <strong style={{ fontWeight: 500 }}>onde</strong> cada arquétipo é mais ativo — no que você fala, no que te move, em como você age ou em como você se apresenta.</div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.th, textAlign: "left" }}>Arquétipo</th>
              <th style={styles.th}>Verbal<br /><span style={{ fontWeight: 400, fontSize: 10 }}>/25</span></th>
              <th style={styles.th}>Motivação<br /><span style={{ fontWeight: 400, fontSize: 10 }}>/15</span></th>
              <th style={styles.th}>Comportamento<br /><span style={{ fontWeight: 400, fontSize: 10 }}>/45</span></th>
              <th style={styles.th}>Visual<br /><span style={{ fontWeight: 400, fontSize: 10 }}>/25</span></th>
              <th style={styles.th}>Total<br /><span style={{ fontWeight: 400, fontSize: 10 }}>/110</span></th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((r, i) => {
              const pct = Math.round((r.total / 110) * 100);
              return (
                <tr key={r.id}>
                  <td style={{ ...styles.td, textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span style={styles.rankBadge(i)}>{i + 1}</span>
                      <div>
                        <div style={{ fontWeight: 500, fontSize: 14 }}>{r.name}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                          <div style={styles.progressBar}><div style={styles.progressFill(pct)} /></div>
                          <span style={{ fontSize: 11, color: "#999", minWidth: 30 }}>{pct}%</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={styles.td}>{r.verbal}</td>
                  <td style={styles.td}>{r.motiv}</td>
                  <td style={styles.td}>{r.comp}</td>
                  <td style={styles.td}>{r.visual}</td>
                  <td style={{ ...styles.td, fontWeight: 500, color: PURPLE, fontSize: 15 }}>{r.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div style={styles.nextStep}>
          <strong style={{ fontWeight: 500, display: "block", marginBottom: 4, color: "#1a1a1a" }}>Próximo passo</strong>
          Leve esse resultado para a sessão. Juntas vamos analisar as pontuações e escolher os 3 arquétipos que vão guiar a expressão da sua marca.
        </div>
        {sending && <p style={{ fontSize: 13, color: "#888", marginTop: 16 }}>Enviando resultado...</p>}
      </div>
    </div>
  );

  return null;
}
