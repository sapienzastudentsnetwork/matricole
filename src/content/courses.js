// Course data - centralized configuration for all degree programmes
// Each course has: id, type, color, name, full (i18n), crest, links (whatsapp, telegram, wiki)

export const COURSES = [
  {
    id: "acsai",
    type: "bachelor",
    color: "var(--color-subject-burgundy)",
    name: "ACSAI",
    full: {
      it: "Applied Computer Science and Artificial Intelligence",
      en: "Applied Computer Science and Artificial Intelligence",
    },
    crest: "AI",
    whatsapp: "https://chat.whatsapp.com/El5sFyWPJEKEnsR2J33eez",
    telegram: "https://telegram.me/SapienzaACSAI",
    wiki: "https://sapienzastudents.net/acsai/",
  },
  {
    id: "info-al",
    type: "bachelor",
    color: "var(--color-subject-navy)",
    name: "Informatica · A–L",
    full: {
      it: "Laurea triennale",
      en: "Bachelor's degree",
    },
    crest: "A–L",
    whatsapp: "https://chat.whatsapp.com/KS2J9kiURoH250s2JPnZbM",
    telegram: "https://t.me/addlist/ndfNiRzIyQ85MmNk",
    wiki: "https://sapienzastudents.net/it/",
  },
  {
    id: "info-mz",
    type: "bachelor",
    color: "var(--color-subject-navy)",
    name: "Informatica · M–Z",
    full: {
      it: "Laurea triennale",
      en: "Bachelor's degree",
    },
    crest: "M–Z",
    whatsapp: "https://chat.whatsapp.com/DFhEH3F2KR4DZI5yYZKpPN",
    telegram: "https://t.me/addlist/SRYO6cWOAIcwOGY0",
    wiki: "https://sapienzastudents.net/it/",
  },
  {
    id: "info-distance",
    type: "bachelor",
    color: "var(--color-subject-petrol)",
    name: "Informatica · a distanza",
    full: {
      it: "Laurea triennale · teledidattica",
      en: "Bachelor's degree · distance learning",
    },
    crest: "@",
    telegram: "https://t.me/addlist/NXcZMBVx1BNkODVk",
    wiki: "https://sapienzastudents.net/it/",
  },
  {
    id: "compsci",
    type: "master",
    color: "var(--color-subject-forest)",
    name: "Computer Science",
    full: {
      it: "Laurea magistrale",
      en: "Master's degree",
    },
    crest: "CS",
    telegram: "https://t.me/addlist/T9CJ0uLTpW05ZTFk",
    wiki: "https://sapienzastudents.net/compsci/",
  },
  {
    id: "cybersec",
    type: "master",
    color: "var(--color-subject-olive)",
    name: "Cybersecurity",
    full: {
      it: "Laurea magistrale",
      en: "Master's degree",
    },
    crest: "CY",
    telegram: "https://t.me/addlist/eq0_FbQsuMRkYjVk",
    wiki: "https://sapienzastudents.net/cybersec/",
  },
  {
    id: "datasci",
    type: "master",
    color: "var(--color-subject-plum)",
    name: "Data Science",
    full: {
      it: "Laurea magistrale",
      en: "Master's degree",
    },
    crest: "DS",
    telegram: "https://t.me/addlist/jl45K5s0BPgwY2Rk",
    wiki: "https://sapienzastudents.net/datasci/",
  },
];

export function getBachelorCourses() {
  return COURSES.filter((c) => c.type === 'bachelor');
}

export function getMasterCourses() {
  return COURSES.filter((c) => c.type === 'master');
}

export function getCourseById(id) {
  return COURSES.find((c) => c.id === id);
}
