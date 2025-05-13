// French quotes
const frenchQuotes = [
  {
    text: "La vie est ce qui arrive quand on est occupé à faire d'autres projets.",
    author: "John Lennon",
    categories: ["life", "plans"]
  },
  {
    text: "Le succès n'est pas final, l'échec n'est pas fatal: c'est le courage de continuer qui compte.",
    author: "Winston Churchill",
    categories: ["success", "failure", "courage"]
  },
  {
    text: "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il vient de vos propres actions.",
    author: "Dalai Lama",
    categories: ["happiness", "action", "mindfulness"]
  },
  {
    text: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
    author: "Steve Jobs",
    categories: ["work", "passion", "success"]
  },
  {
    text: "Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles.",
    author: "Sénèque",
    categories: ["courage", "difficulty", "action"]
  }
];

// Arabic quotes
const arabicQuotes = [
  {
    text: "لا تؤجل عمل اليوم إلى الغد.",
    author: "مثل شعبي",
    categories: ["time", "action", "productivity"]
  },
  {
    text: "العلم في الصغر كالنقش على الحجر.",
    author: "مثل شعبي",
    categories: ["education", "persistence", "wisdom"]
  },
  {
    text: "أنا لا أفشل أبدًا. إما أنني أنجح أو أتعلم.",
    author: "نيلسون مانديلا",
    categories: ["failure", "learning", "success"]
  },
  {
    text: "الصبر مفتاح الفرج.",
    author: "مثل عربي",
    categories: ["patience", "hope", "resilience"]
  },
  {
    text: "التغيير هو قانون الحياة. ومن ينظر فقط إلى الماضي أو الحاضر سوف يفوته المستقبل بالتأكيد.",
    author: "جون ف. كينيدي",
    categories: ["change", "future", "vision"]
  }
];

// Make the quotes available globally
if (typeof module !== 'undefined') {
  module.exports = {
    frenchQuotes,
    arabicQuotes
  };
} 