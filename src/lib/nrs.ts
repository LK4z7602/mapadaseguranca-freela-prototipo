export type Modality = "100% Online EaD";
export type Level = "Básico" | "Intermediário" | "Avançado";
export type Category =
  | "Altura"
  | "Espaço Confinado"
  | "Elétrica"
  | "CIPA"
  | "EPI"
  | "Máquinas"
  | "Ergonomia"
  | "Construção"
  | "Inflamáveis";

export interface Training {
  slug: string;
  nr: string;           // "NR-35"
  nrNumber: string;     // "35"
  title: string;
  short: string;
  category: Category;
  hours: number;
  modality: Modality;
  level: Level;
  validity: string;     // certificate validity
  audience: string;
  price: string;        // display price, e.g. "R$ 320" or "Sob consulta"
  featured?: boolean;
  content: string[];    // syllabus modules
  instructor: {
    name: string;
    role: string;
    initials: string;
  };
}

export const TRAININGS: Training[] = [
  {
    slug: "nr-35-trabalho-em-altura",
    nr: "NR-35",
    nrNumber: "35",
    title: "Trabalho em Altura",
    short: "Capacitação para atividades acima de 2 metros com risco de queda.",
    category: "Altura",
    hours: 8,
    modality: "100% Online EaD",
    level: "Básico",
    validity: "2 anos",
    audience: "Trabalhadores autorizados a executar atividades em altura.",
    price: "R$ 320",
    featured: true,
    content: [
      "Normas e regulamentos aplicáveis ao trabalho em altura",
      "Análise de riscos e condições impeditivas",
      "Medidas de prevenção e sistemas de proteção contra quedas",
      "Equipamentos de proteção individual e coletiva",
      "Acidentes típicos e condutas em emergências",
      "Prática: uso de cinturão, talabarte e ancoragem",
    ],
    instructor: { name: "Rafael Monteiro", role: "Eng. de Segurança do Trabalho", initials: "RM" },
  },
  {
    slug: "nr-33-espaco-confinado",
    nr: "NR-33",
    nrNumber: "33",
    title: "Espaço Confinado",
    short: "Segurança e saúde nos trabalhos em espaços confinados — trabalhador e vigia.",
    category: "Espaço Confinado",
    hours: 16,
    modality: "100% Online EaD",
    level: "Intermediário",
    validity: "1 ano",
    audience: "Trabalhadores autorizados e vigias.",
    price: "R$ 640",
    featured: true,
    content: [
      "Definições e responsabilidades",
      "Reconhecimento, avaliação e controle de riscos",
      "Funcionamento de equipamentos utilizados",
      "Procedimentos e utilização da Permissão de Entrada e Trabalho",
      "Noções de resgate e primeiros socorros",
    ],
    instructor: { name: "Camila Duarte", role: "Técnica de Segurança sênior", initials: "CD" },
  },
  {
    slug: "nr-10-seguranca-em-eletricidade",
    nr: "NR-10",
    nrNumber: "10",
    title: "Segurança em Instalações e Serviços em Eletricidade",
    short: "Curso básico obrigatório para profissionais que interagem com instalações elétricas.",
    category: "Elétrica",
    hours: 40,
    modality: "100% Online EaD",
    level: "Intermediário",
    validity: "2 anos",
    audience: "Eletricistas, técnicos e engenheiros eletricistas.",
    price: "R$ 890",
    featured: true,
    content: [
      "Introdução à segurança com eletricidade",
      "Riscos em instalações e serviços com eletricidade",
      "Técnicas de análise de risco",
      "Medidas de controle do risco elétrico",
      "Normas técnicas brasileiras e regulamentares",
      "Equipamentos de proteção coletiva e individual",
    ],
    instructor: { name: "Eduardo Prado", role: "Engenheiro Eletricista", initials: "EP" },
  },
  {
    slug: "nr-05-cipa",
    nr: "NR-05",
    nrNumber: "05",
    title: "CIPA — Comissão Interna de Prevenção de Acidentes",
    short: "Formação obrigatória para membros eleitos e designados da CIPA.",
    category: "CIPA",
    hours: 20,
    modality: "100% Online EaD",
    level: "Básico",
    validity: "1 ano",
    audience: "Membros titulares e suplentes da CIPA.",
    price: "R$ 280",
    content: [
      "Estudo do ambiente, condições e organização do trabalho",
      "Metodologia de investigação e análise de acidentes",
      "Noções sobre AIDS, doenças ocupacionais e assédio",
      "Legislação previdenciária, trabalhista e Normas Regulamentadoras",
      "Princípios de higiene do trabalho",
    ],
    instructor: { name: "Marina Alves", role: "Engenheira de Segurança", initials: "MA" },
  },
  {
    slug: "nr-06-epi",
    nr: "NR-06",
    nrNumber: "06",
    title: "Uso Correto de EPI",
    short: "Seleção, higienização, guarda e uso responsável de Equipamentos de Proteção Individual.",
    category: "EPI",
    hours: 4,
    modality: "100% Online EaD",
    level: "Básico",
    validity: "1 ano",
    audience: "Todos os colaboradores expostos a riscos ocupacionais.",
    price: "R$ 120",
    content: [
      "Tipos e classificação de EPI",
      "Certificado de Aprovação (CA)",
      "Responsabilidades do empregador e do trabalhador",
      "Higienização, guarda e substituição",
    ],
    instructor: { name: "Luís Fernando Reis", role: "Técnico de Segurança", initials: "LF" },
  },
  {
    slug: "nr-11-transporte-e-movimentacao",
    nr: "NR-11",
    nrNumber: "11",
    title: "Operação de Empilhadeira",
    short: "Transporte, movimentação, armazenagem e manuseio de materiais.",
    category: "Máquinas",
    hours: 16,
    modality: "100% Online EaD",
    level: "Intermediário",
    validity: "1 ano",
    audience: "Operadores de empilhadeiras e equipamentos de movimentação.",
    price: "R$ 480",
    content: [
      "Legislação e normas",
      "Componentes, checklist e manutenção",
      "Estabilidade da carga e do equipamento",
      "Direção defensiva e prática operacional",
    ],
    instructor: { name: "Paulo Henrique", role: "Instrutor Técnico", initials: "PH" },
  },
  {
    slug: "nr-12-maquinas-e-equipamentos",
    nr: "NR-12",
    nrNumber: "12",
    title: "Segurança em Máquinas e Equipamentos",
    short: "Requisitos mínimos para prevenção de acidentes com máquinas e equipamentos.",
    category: "Máquinas",
    hours: 8,
    modality: "100% Online EaD",
    level: "Intermediário",
    validity: "2 anos",
    audience: "Operadores, manutenção e responsáveis técnicos.",
    price: "R$ 340",
    content: [
      "Arranjo físico e instalações",
      "Dispositivos de partida, acionamento e parada",
      "Sistemas de segurança e proteções",
      "Procedimentos operacionais e manutenção",
    ],
    instructor: { name: "Eduardo Prado", role: "Engenheiro Eletricista", initials: "EP" },
  },
  {
    slug: "nr-17-ergonomia",
    nr: "NR-17",
    nrNumber: "17",
    title: "Ergonomia no Trabalho",
    short: "Adaptação das condições de trabalho às características psicofisiológicas do trabalhador.",
    category: "Ergonomia",
    hours: 6,
    modality: "100% Online EaD",
    level: "Básico",
    validity: "2 anos",
    audience: "Lideranças, RH e trabalhadores em geral.",
    price: "R$ 180",
    content: [
      "Análise ergonômica preliminar",
      "Levantamento e transporte manual de cargas",
      "Mobiliário e equipamentos dos postos de trabalho",
      "Organização do trabalho",
    ],
    instructor: { name: "Marina Alves", role: "Engenheira de Segurança", initials: "MA" },
  },
  {
    slug: "nr-18-construcao",
    nr: "NR-18",
    nrNumber: "18",
    title: "Segurança na Construção Civil",
    short: "Condições e meio ambiente de trabalho na indústria da construção.",
    category: "Construção",
    hours: 8,
    modality: "100% Online EaD",
    level: "Intermediário",
    validity: "1 ano",
    audience: "Colaboradores da construção civil.",
    price: "R$ 360",
    content: [
      "PGR e PCMAT",
      "Áreas de vivência e sinalização",
      "Escadas, rampas, andaimes e plataformas",
      "Movimentação e transporte de materiais",
    ],
    instructor: { name: "Rafael Monteiro", role: "Eng. de Segurança do Trabalho", initials: "RM" },
  },
  {
    slug: "nr-20-inflamaveis-combustiveis",
    nr: "NR-20",
    nrNumber: "20",
    title: "Inflamáveis e Combustíveis",
    short: "Segurança e saúde no trabalho com inflamáveis e combustíveis — classes I a III.",
    category: "Inflamáveis",
    hours: 16,
    modality: "100% Online EaD",
    level: "Avançado",
    validity: "2 anos",
    audience: "Trabalhadores de plantas com processamento, armazenamento e transporte.",
    price: "R$ 720",
    content: [
      "Propriedades físico-químicas dos inflamáveis",
      "Fontes de ignição e prevenção",
      "Riscos operacionais e de processo",
      "Procedimentos de emergência e planos de resposta",
    ],
    instructor: { name: "Camila Duarte", role: "Técnica de Segurança sênior", initials: "CD" },
  },
  {
    slug: "nr-23-protecao-contra-incendios",
    nr: "NR-23",
    nrNumber: "23",
    title: "Proteção Contra Incêndios",
    short: "Medidas preventivas e formação de brigada de incêndio.",
    category: "Construção",
    hours: 8,
    modality: "100% Online EaD",
    level: "Básico",
    validity: "1 ano",
    audience: "Brigadistas e colaboradores em geral.",
    price: "R$ 260",
    content: [
      "Teoria do fogo",
      "Classes de incêndio e agentes extintores",
      "Rotas de fuga e evacuação",
      "Prática com extintores e mangueiras",
    ],
    instructor: { name: "Paulo Henrique", role: "Instrutor Técnico", initials: "PH" },
  },
];

export const CATEGORIES: Category[] = [
  "Altura",
  "Espaço Confinado",
  "Elétrica",
  "CIPA",
  "EPI",
  "Máquinas",
  "Ergonomia",
  "Construção",
  "Inflamáveis",
];

export function getTraining(slug: string) {
  return TRAININGS.find((t) => t.slug === slug);
}
