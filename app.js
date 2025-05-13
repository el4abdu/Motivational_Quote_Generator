document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const generateBtn = document.getElementById('generate-btn');
  const copyBtn = document.getElementById('copy-btn');
  const shareBtn = document.getElementById('share-btn');
  const categorySelect = document.getElementById('category-select');
  const categoryBtn = document.getElementById('category-btn');
  const keywordInput = document.getElementById('keyword-input');
  const searchBtn = document.getElementById('search-btn');
  const themeToggle = document.getElementById('theme-toggle');
  const languageSelect = document.getElementById('language-select');
  const aiCategorySelect = document.getElementById('ai-category-select');
  const aiLanguageSelect = document.getElementById('ai-language-select');
  const aiGenerateBtn = document.getElementById('ai-generate-btn');
  
  // Gemini API key
  const GEMINI_API_KEY = 'AIzaSyA3j3cNFoi2eQKLgQAG09qqT_O21NwHkT8';
  const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
  
  let currentQuote = null;
  let currentLanguage = 'en';
  // Combine all quotes in a single array
  let allQuotes = [...quotes];
  
  // Add multilingual quotes if available
  if (typeof frenchQuotes !== 'undefined') {
    allQuotes = [...allQuotes, ...frenchQuotes];
  }
  
  if (typeof arabicQuotes !== 'undefined') {
    allQuotes = [...allQuotes, ...arabicQuotes];
  }
  
  // Check if dark mode is enabled in local storage
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
  } else {
    themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
  }
  
  // Check if language preference is stored in local storage
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
    currentLanguage = savedLanguage;
    languageSelect.value = savedLanguage;
    if (savedLanguage === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
    document.documentElement.setAttribute('lang', savedLanguage);
  }
  
  // Apply translations
  applyTranslations();
  
  // Populate categories for both standard and AI selects
  populateCategories();
  
  // Theme Toggle
  themeToggle.addEventListener('click', function() {
    // Create a ripple effect from the toggle button position
    const ripple = document.createElement('div');
    ripple.className = 'theme-switch-ripple';
    
    // Position the ripple at the center of the screen
    ripple.style.top = '50%';
    ripple.style.left = '50%';
    
    // Set the ripple color based on current theme
    const isDarkMode = document.body.classList.contains('dark-mode');
    ripple.style.backgroundColor = isDarkMode ? '#f9f9f9' : '#121212';
    
    // Add ripple to body
    document.body.appendChild(ripple);
    
    // Toggle theme after a small delay to allow animation to start
    setTimeout(() => {
      document.body.classList.toggle('dark-mode');
      const newIsDarkMode = document.body.classList.contains('dark-mode');
      
      if (newIsDarkMode) {
        themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
      } else {
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
      }
      
      // Save preference to local storage
      localStorage.setItem('darkMode', newIsDarkMode);
    }, 50);
    
    // Remove ripple after animation completes
    setTimeout(() => {
      document.body.removeChild(ripple);
    }, 1000);
  });
  
  // Language Switch
  languageSelect.addEventListener('change', function() {
    const newLanguage = this.value;
    
    // Don't do anything if language hasn't changed
    if (newLanguage === currentLanguage) return;
    
    // Create a transition effect container
    const transitionOverlay = document.createElement('div');
    transitionOverlay.className = 'language-transition-overlay';
    document.body.appendChild(transitionOverlay);
    
    // Start transition animation
    setTimeout(() => {
      transitionOverlay.classList.add('active');
      
      // After overlay is fully visible, change the language
      setTimeout(() => {
        currentLanguage = newLanguage;
        
        // Set HTML direction based on language
        if (currentLanguage === 'ar') {
          document.documentElement.setAttribute('dir', 'rtl');
        } else {
          document.documentElement.setAttribute('dir', 'ltr');
        }
        
        document.documentElement.setAttribute('lang', currentLanguage);
        
        // Save preference to local storage
        localStorage.setItem('language', currentLanguage);
        
        // Update categories and translations
        populateCategories();
        applyTranslations();
        
        // Start hiding transition
        transitionOverlay.classList.add('fade-out');
        
        // Remove overlay after animation completes
        setTimeout(() => {
          document.body.removeChild(transitionOverlay);
        }, 500);
      }, 400);
    }, 50);
  });
  
  function applyTranslations() {
    if (!translations[currentLanguage]) return;
    
    // Translate all elements with data-translate attribute
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
      const key = element.getAttribute('data-translate');
      
      // Special handling for buttons with icons
      if (element.tagName === 'BUTTON' && element.querySelector('i')) {
        const icon = element.querySelector('i').outerHTML;
        
        // Handle array items like howToItems:0
        if (key.includes(':')) {
          const [arrayKey, index] = key.split(':');
          if (translations[currentLanguage][arrayKey] && translations[currentLanguage][arrayKey][index]) {
            element.innerHTML = `${icon} ${translations[currentLanguage][arrayKey][index]}`;
          }
        } else if (translations[currentLanguage][key]) {
          element.innerHTML = `${icon} ${translations[currentLanguage][key]}`;
        }
      } else {
        // Handle array items like howToItems:0
        if (key.includes(':')) {
          const [arrayKey, index] = key.split(':');
          if (translations[currentLanguage][arrayKey] && translations[currentLanguage][arrayKey][index]) {
            element.textContent = translations[currentLanguage][arrayKey][index];
          }
        } else if (translations[currentLanguage][key]) {
          element.textContent = translations[currentLanguage][key];
        }
      }
    });
    
    // Translate placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      if (translations[currentLanguage][key]) {
        element.placeholder = translations[currentLanguage][key];
      }
    });
    
    // If a quote is currently displayed, update the "no quotes found" message if needed
    if (quoteText.textContent.includes('No quotes found') || quoteText.textContent.includes('Aucune citation') || quoteText.textContent.includes('لم يتم العثور')) {
      quoteText.textContent = translations[currentLanguage].noQuotesFound;
    }
    
    // Update copied message
    if (copyBtn.innerHTML.includes('Copied') || copyBtn.innerHTML.includes('Copié') || copyBtn.innerHTML.includes('تم النسخ')) {
      copyBtn.innerHTML = `<i class="bi bi-check"></i> ${translations[currentLanguage].copied}`;
    }
  }
  
  // Populate categories for both standard and AI selects
  function populateCategories() {
    const categories = getAllCategories();
    
    // Clear existing options except the first one for category select
    while (categorySelect.options.length > 1) {
      categorySelect.remove(1);
    }
    
    // Update the "All Categories" option
    categorySelect.options[0].textContent = translations[currentLanguage].allCategories;
    
    // Populate standard category select
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = translateCategory(category, currentLanguage);
      categorySelect.appendChild(option);
    });
    
    // Clear all options for AI category select
    while (aiCategorySelect.options.length > 0) {
      aiCategorySelect.remove(0);
    }
    
    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = translations[currentLanguage].allCategories;
    aiCategorySelect.appendChild(defaultOption);
    
    // Populate AI category select with the same categories
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = translateCategory(category, currentLanguage);
      aiCategorySelect.appendChild(option);
    });
  }
  
  // Get quotes based on language preference
  function getQuotesByLanguage() {
    let filteredQuotes = allQuotes;
    
    // Filter quotes based on language if not in English
    if (currentLanguage === 'fr' && typeof frenchQuotes !== 'undefined') {
      // Prioritize French quotes but include English ones
      const englishQuotes = quotes.filter(quote => !frenchQuotes.some(frQuote => frQuote.text === quote.text));
      filteredQuotes = [...frenchQuotes, ...englishQuotes];
    } else if (currentLanguage === 'ar' && typeof arabicQuotes !== 'undefined') {
      // Prioritize Arabic quotes but include English ones
      const englishQuotes = quotes.filter(quote => !arabicQuotes.some(arQuote => arQuote.text === quote.text));
      filteredQuotes = [...arabicQuotes, ...englishQuotes];
    }
    
    // Add AI-generated quotes in the current language (both approved and non-approved)
    try {
      if (typeof aiQuotes !== 'undefined' && Array.isArray(aiQuotes)) {
        const languageAiQuotes = aiQuotes.filter(quote => 
          quote && quote.language === currentLanguage
        );
        if (languageAiQuotes.length > 0) {
          filteredQuotes = [...filteredQuotes, ...languageAiQuotes];
        }
      }
    } catch (error) {
      console.error('Error adding AI quotes:', error);
      // Continue without AI quotes if there's an error
    }
    
    return filteredQuotes;
  }
  
  // Generate random quote
  function generateRandomQuote() {
    const filteredQuotes = getQuotesByLanguage();
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[randomIndex];
  }
  
  // Display quote
  function displayQuote(quote) {
    if (!quote) {
      quoteText.textContent = translations[currentLanguage].noQuotesFound;
      quoteAuthor.textContent = "";
      return;
    }
    
    // Ensure the quote has all required properties
    const safeQuote = {
      text: quote.text || "Your journey to greatness begins with a single thought.",
      author: quote.author || "Anonymous",
      categories: Array.isArray(quote.categories) ? quote.categories : ["inspiration"],
      language: quote.language || currentLanguage
    };
    
    // Add exit animation
    quoteText.classList.add('fade-out');
    quoteAuthor.classList.add('fade-out');
    
    // After short delay, update text and fade back in
    setTimeout(() => {
      // Safely set text content
      try {
        quoteText.textContent = safeQuote.text;
        quoteAuthor.textContent = `- ${safeQuote.author}`;
        
        // Keep language attribute for accessibility and RTL support
        // But not needed for font styling anymore since we use Amiri for all text
        if (safeQuote.language === 'ar') {
          quoteText.setAttribute('lang', 'ar');
          quoteAuthor.setAttribute('lang', 'ar');
        } else {
          quoteText.removeAttribute('lang');
          quoteAuthor.removeAttribute('lang');
        }
      } catch (error) {
        console.error('Error setting quote text:', error);
        quoteText.textContent = "Your journey to greatness begins with a single thought.";
        quoteAuthor.textContent = "- Anonymous";
        quoteText.removeAttribute('lang');
        quoteAuthor.removeAttribute('lang');
      }
      
      // Remove all animation classes
      quoteText.classList.remove('fade-in', 'fade-out');
      quoteAuthor.classList.remove('fade-in', 'fade-out');
      
      // Trigger reflow
      void quoteText.offsetWidth;
      void quoteAuthor.offsetWidth;
      
      // Add entrance animation
      quoteText.classList.add('fade-in');
      quoteAuthor.classList.add('fade-in');
    }, 300);
    
    currentQuote = safeQuote;
  }
  
  // Get quotes by category
  function getQuotesByCategory(category) {
    if (!category) {
      return generateRandomQuote();
    }
    
    const filteredQuotes = getQuotesByLanguage().filter(quote => 
      quote.categories.includes(category.toLowerCase())
    );
    
    if (filteredQuotes.length === 0) {
      return null;
    }
    
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[randomIndex];
  }
  
  // Search quotes by keyword
  function searchQuotesByKeyword(keyword) {
    if (!keyword) {
      return generateRandomQuote();
    }
    
    const lowercaseKeyword = keyword.toLowerCase();
    
    const filteredQuotes = getQuotesByLanguage().filter(quote => 
      quote.text.toLowerCase().includes(lowercaseKeyword) || 
      quote.author.toLowerCase().includes(lowercaseKeyword) ||
      quote.categories.some(category => category.includes(lowercaseKeyword))
    );
    
    if (filteredQuotes.length === 0) {
      return null;
    }
    
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[randomIndex];
  }
  
  // Copy quote to clipboard
  function copyToClipboard() {
    if (!currentQuote) return;
    
    const textToCopy = `"${currentQuote.text}" - ${currentQuote.author}`;
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        copyBtn.innerHTML = `<i class="bi bi-check"></i> ${translations[currentLanguage].copied}`;
        setTimeout(() => {
          copyBtn.innerHTML = `<i class="bi bi-clipboard"></i> ${translations[currentLanguage].copyBtn}`;
        }, 2000);
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  }
  
  // Share quote
  function shareQuote() {
    if (!currentQuote) return;
    
    if (navigator.share) {
      navigator.share({
        title: 'Motivational Quote',
        text: `"${currentQuote.text}" - ${currentQuote.author}`,
        url: window.location.href
      })
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.log('Error sharing:', error));
    } else {
      copyToClipboard();
      alert('Your browser does not support sharing. The quote has been copied to your clipboard instead.');
    }
  }

  // Generate a quote using Gemini AI
  async function generateAIQuote() {
    const selectedCategory = aiCategorySelect.value;
    // Use the language from the AI language selector, not the current UI language
    const selectedLanguage = aiLanguageSelect.value;
    
    // Update UI to show loading state
    aiGenerateBtn.disabled = true;
    const originalBtnText = aiGenerateBtn.innerHTML;
    aiGenerateBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>${translations[currentLanguage].aiGenerating}`;
    
    try {
      // Simulate loading delay for realistic effect
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Expanded collection of quotes by language
      const localQuotesByLanguage = {
        en: [
          { quote: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
          { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
          { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
          { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
          { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
          { quote: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Anonymous" },
          { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
          { quote: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
          { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
          { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
          { quote: "If you're going through hell, keep going.", author: "Winston Churchill" },
          { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
          { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
          { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
          { quote: "The secret to getting ahead is getting started.", author: "Mark Twain" }
        ],
        fr: [
          { quote: "Le voyage de mille lieues commence par un seul pas.", author: "Lao Tzu" },
          { quote: "Le succès n'est pas final, l'échec n'est pas fatal: c'est le courage de continuer qui compte.", author: "Winston Churchill" },
          { quote: "La meilleure façon de prédire l'avenir est de le créer.", author: "Peter Drucker" },
          { quote: "Croyez que vous pouvez et vous êtes à mi-chemin.", author: "Theodore Roosevelt" },
          { quote: "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.", author: "Franklin D. Roosevelt" },
          { quote: "Plus vous travaillez dur pour quelque chose, plus vous vous sentirez bien quand vous l'atteindrez.", author: "Anonyme" },
          { quote: "Ne regardez pas l'horloge; faites ce qu'elle fait. Continuez d'avancer.", author: "Sam Levenson" },
          { quote: "Tout ce que vous avez toujours voulu est de l'autre côté de la peur.", author: "George Addair" },
          { quote: "Le seul endroit où le succès vient avant le travail est dans le dictionnaire.", author: "Vidal Sassoon" },
          { quote: "Votre temps est limité, ne le gaspillez pas en vivant la vie de quelqu'un d'autre.", author: "Steve Jobs" },
          { quote: "Si vous traversez l'enfer, continuez d'avancer.", author: "Winston Churchill" },
          { quote: "Faites ce que vous pouvez, avec ce que vous avez, là où vous êtes.", author: "Theodore Roosevelt" },
          { quote: "Ne cherchez pas à être un succès, mais plutôt à avoir de la valeur.", author: "Albert Einstein" },
          { quote: "L'avenir appartient à ceux qui croient en la beauté de leurs rêves.", author: "Eleanor Roosevelt" },
          { quote: "Le secret pour avancer est de commencer.", author: "Mark Twain" }
        ],
        de: [
          { quote: "Die Reise von tausend Meilen beginnt mit einem einzigen Schritt.", author: "Lao Tzu" },
          { quote: "Erfolg ist nicht endgültig, Misserfolg ist nicht tödlich: Es ist der Mut weiterzumachen, der zählt.", author: "Winston Churchill" },
          { quote: "Der beste Weg, die Zukunft vorherzusagen, ist, sie zu erschaffen.", author: "Peter Drucker" },
          { quote: "Glaube, dass du kannst, und du bist schon halb am Ziel.", author: "Theodore Roosevelt" },
          { quote: "Die einzige Grenze für unsere Verwirklichung von morgen werden unsere Zweifel von heute sein.", author: "Franklin D. Roosevelt" },
          { quote: "Je härter du für etwas arbeitest, desto besser wirst du dich fühlen, wenn du es erreichst.", author: "Anonym" },
          { quote: "Schau nicht auf die Uhr; tue, was sie tut. Mach weiter.", author: "Sam Levenson" },
          { quote: "Alles, was du je wolltest, liegt auf der anderen Seite der Angst.", author: "George Addair" },
          { quote: "Der einzige Ort, an dem Erfolg vor Arbeit kommt, ist im Wörterbuch.", author: "Vidal Sassoon" },
          { quote: "Deine Zeit ist begrenzt, verschwende sie nicht damit, das Leben eines anderen zu leben.", author: "Steve Jobs" },
          { quote: "Wenn du durch die Hölle gehst, geh weiter.", author: "Winston Churchill" },
          { quote: "Tu, was du kannst, mit dem, was du hast, dort, wo du bist.", author: "Theodore Roosevelt" },
          { quote: "Streef er niet naar om succesvol te zijn, maar eerder om waardevol te zijn.", author: "Albert Einstein" },
          { quote: "Die Zukunft gehört denen, die geloven in de schoonheid von ihren Träumen.", author: "Eleanor Roosevelt" },
          { quote: "Das Geheimnis, voranzukommen, ist anzufangen.", author: "Mark Twain" }
        ],
        es: [
          { quote: "El viaje de mil millas comienza con un solo paso.", author: "Lao Tzu" },
          { quote: "El éxito no es definitivo, el fracaso no es fatal: es el coraje de continuar lo que cuenta.", author: "Winston Churchill" },
          { quote: "La mejor manera de predecir el futuro es crearlo.", author: "Peter Drucker" },
          { quote: "Cree que puedes y ya estás a medio camino.", author: "Theodore Roosevelt" },
          { quote: "El único límite para nuestra realización del mañana serán nuestras dudas de hoy.", author: "Franklin D. Roosevelt" },
          { quote: "Cuanto más duro trabajas por algo, mejor te sentirás cuando lo logres.", author: "Anónimo" },
          { quote: "No mires el reloj; haz lo que hace. Sigue adelante.", author: "Sam Levenson" },
          { quote: "Todo lo que siempre has querido está al otro lado del miedo.", author: "George Addair" },
          { quote: "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.", author: "Vidal Sassoon" },
          { quote: "Tu tiempo es limitado, no lo desperdicies viviendo la vida de otra persona.", author: "Steve Jobs" },
          { quote: "Si estás pasando por el infierno, sigue adelante.", author: "Winston Churchill" },
          { quote: "Haz lo que puedas, con lo que tengas, donde estés.", author: "Theodore Roosevelt" },
          { quote: "No te esfuerces por ser un éxito, sino más bien por ser de valor.", author: "Albert Einstein" },
          { quote: "El futuro pertenece a aquellos que creen en la belleza de sus sueños.", author: "Eleanor Roosevelt" },
          { quote: "El secreto para avanzar es comenzar.", author: "Mark Twain" }
        ],
        it: [
          { quote: "Il viaggio di mille miglia inizia con un solo passo.", author: "Lao Tzu" },
          { quote: "Il successo non è definitivo, il fallimento non è fatale: è il coraggio di continuare che conta.", author: "Winston Churchill" },
          { quote: "Il modo migliore per prevedere il futuro è crearlo.", author: "Peter Drucker" },
          { quote: "Credi di poterlo fare e sei già a metà strada.", author: "Theodore Roosevelt" },
          { quote: "L'unico limite alla nostra realizzazione di domani saranno i nostri dubbi di oggi.", author: "Franklin D. Roosevelt" },
          { quote: "Più duramente lavori per qualcosa, meglio ti sentirai quando lo raggiungerai.", author: "Anonimo" },
          { quote: "Non guardare l'orologio; fai quello che fa lui. Continua ad andare avanti.", author: "Sam Levenson" },
          { quote: "Tutto ciò che hai sempre desiderato è dall'altra parte della paura.", author: "George Addair" },
          { quote: "L'unico posto dove il successo viene prima del lavoro è nel dizionario.", author: "Vidal Sassoon" },
          { quote: "Il tuo tempo è limitato, non sprecarlo vivendo la vita di qualcun altro.", author: "Steve Jobs" },
          { quote: "Se stai attraversando l'inferno, continua a camminare.", author: "Winston Churchill" },
          { quote: "Fai ciò che puoi, con quello che hai, dove sei.", author: "Theodore Roosevelt" },
          { quote: "Non sforzarti di avere successo, ma piuttosto di avere valore.", author: "Albert Einstein" },
          { quote: "Il futuro appartiene a coloro che credono nella bellezza dei propri sogni.", author: "Eleanor Roosevelt" },
          { quote: "Il segreto per andare avanti è iniziare.", author: "Mark Twain" }
        ],
        pt: [
          { quote: "A jornada de mil milhas começa com um único passo.", author: "Lao Tzu" },
          { quote: "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.", author: "Winston Churchill" },
          { quote: "A melhor maneira de prever o futuro é criá-lo.", author: "Peter Drucker" },
          { quote: "Acredite que você pode e você já está no meio do caminho.", author: "Theodore Roosevelt" },
          { quote: "O único limite para nossa realização de amanhã serão nossas dúvidas de hoje.", author: "Franklin D. Roosevelt" },
          { quote: "Quanto mais você trabalha por algo, melhor você se sentirá quando alcançá-lo.", author: "Anônimo" },
          { quote: "Não olhe para o relógio; faça o que ele faz. Continue indo.", author: "Sam Levenson" },
          { quote: "Tudo o que você sempre quis está do outro lado do medo.", author: "George Addair" },
          { quote: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.", author: "Vidal Sassoon" },
          { quote: "Seu tempo é limitado, não o desperdice vivendo a vida de outra pessoa.", author: "Steve Jobs" },
          { quote: "Se você está passando pelo inferno, continue em frente.", author: "Winston Churchill" },
          { quote: "Faça o que puder, com o que tiver, onde estiver.", author: "Theodore Roosevelt" },
          { quote: "Não se esforce para ser um sucesso, mas sim para ser de valor.", author: "Albert Einstein" },
          { quote: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.", author: "Eleanor Roosevelt" },
          { quote: "O segredo para avançar é começar.", author: "Mark Twain" }
        ],
        nl: [
          { quote: "De reis van duizend mijl begint met één stap.", author: "Lao Tzu" },
          { quote: "Succes is niet definitief, mislukking is niet fataal: het is de moed om door te gaan die telt.", author: "Winston Churchill" },
          { quote: "De beste manier om de toekomst te voorspellen is door deze te creëren.", author: "Peter Drucker" },
          { quote: "Geloof dat je het kunt en je bent al halverwege.", author: "Theodore Roosevelt" },
          { quote: "De enige grens aan onze verwezenlijking van morgen zullen onze twijfels van vandaag zijn.", author: "Franklin D. Roosevelt" },
          { quote: "Hoe harder je voor iets werkt, hoe beter je je zult voelen als je het bereikt.", author: "Anoniem" },
          { quote: "Kijk niet naar de klok; doe wat hij doet. Blijf doorgaan.", author: "Sam Levenson" },
          { quote: "Alles wat je ooit hebt gewild, ligt aan de andere kant van angst.", author: "George Addair" },
          { quote: "De enige plaats waar succes voor werk komt, is in het woordenboek.", author: "Vidal Sassoon" },
          { quote: "Je tijd is beperkt, verspil het niet door het leven van iemand anders te leven.", author: "Steve Jobs" },
          { quote: "Als je door de hel gaat, blijf dan doorgaan.", author: "Winston Churchill" },
          { quote: "Doe wat je kunt, met wat je hebt, waar je bent.", author: "Theodore Roosevelt" },
          { quote: "Streef er niet naar om succesvol te zijn, maar eerder om waardevol te zijn.", author: "Albert Einstein" },
          { quote: "De toekomst behoort toe aan hen die geloven in de schoonheid van hun dromen.", author: "Eleanor Roosevelt" },
          { quote: "Het geheim om vooruit te komen is om te beginnen.", author: "Mark Twain" }
        ],
        ar: [
          { quote: "رحلة الألف ميل تبدأ بخطوة واحدة.", author: "لاو تزو" },
          { quote: "النجاح ليس نهائياً، والفشل ليس قاتلاً: ما يهم هو الشجاعة للاستمرار.", author: "وينستون تشرشل" },
          { quote: "أفضل طريقة للتنبؤ بالمستقبل هي صنعه.", author: "بيتر دراكر" },
          { quote: "آمن أنك تستطيع وتكون قد قطعت نصف الطريق.", author: "ثيودور روزفلت" },
          { quote: "الحدود الوحيدة لتحقيق أحلامنا غداً هي شكوكنا اليوم.", author: "فرانكلين د. روزفلت" },
          { quote: "كلما عملت بجدية من أجل شيء ما، كلما شعرت بشعور أفضل عندما تحققه.", author: "مجهول" },
          { quote: "لا تراقب الساعة؛ افعل ما تفعله. استمر في المضي قدمًا.", author: "سام ليفينسون" },
          { quote: "كل ما أردته دائمًا موجود على الجانب الآخر من الخوف.", author: "جورج أدير" },
          { quote: "المكان الوحيد الذي يأتي فيه النجاح قبل العمل هو في القاموس.", author: "فيدال ساسون" },
          { quote: "وقتك محدود، فلا تضيعه في عيش حياة شخص آخر.", author: "ستيف جوبز" },
          { quote: "إذا كنت تمر بالجحيم، فاستمر في السير.", author: "وينستون تشرشل" },
          { quote: "افعل ما تستطيع، بما لديك، حيث أنت.", author: "ثيودور روزفلت" },
          { quote: "لا تسعى لأن تكون ناجحًا، بل بالأحرى أن تكون ذا قيمة.", author: "ألبرت أينشتاين" },
          { quote: "المستقبل ينتمي لأولئك الذين يؤمنون بجمال أحلامهم.", author: "إليانور روزفلت" },
          { quote: "سر التقدم هو البدء.", author: "مارك توين" }
        ]
      };
      
      // Category-specific quotes
      const categoryQuotes = {
        success: {
          en: [
            { quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
            { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
            { quote: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" }
          ],
          fr: [
            { quote: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.", author: "Albert Schweitzer" },
            { quote: "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.", author: "Winston Churchill" },
            { quote: "Le chemin vers le succès et le chemin vers l'échec sont presque exactement les mêmes.", author: "Colin R. Davis" }
          ],
          de: [
            { quote: "Erfolg ist nicht der Schlüssel zum Glück. Glück ist der Schlüssel zum Erfolg. Wenn du liebst, was du tust, wirst du erfolgreich sein.", author: "Albert Schweitzer" },
            { quote: "Erfolg bedeutet, von Misserfolg zu Misserfolg zu gehen, ohne die Begeisterung zu verlieren.", author: "Winston Churchill" },
            { quote: "Der Weg zum Erfolg und der Weg zum Scheitern sind fast genau dieselben.", author: "Colin R. Davis" }
          ]
        },
        motivation: {
          en: [
            { quote: "When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.", author: "Marcus Aurelius" },
            { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
            { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" }
          ],
          fr: [
            { quote: "Quand vous vous levez le matin, pensez au privilège précieux que c'est d'être en vie - de respirer, de penser, de profiter, d'aimer.", author: "Marc Aurèle" },
            { quote: "Vous n'êtes jamais trop vieux pour vous fixer un autre objectif ou pour rêver un nouveau rêve.", author: "C.S. Lewis" },
            { quote: "La seule façon de faire du bon travail est d'aimer ce que vous faites.", author: "Steve Jobs" }
          ],
          de: [
            { quote: "Wenn du am Morgen aufstehst, denke daran, was für ein kostbares Privileg es ist, am Leben zu sein - zu atmen, zu denken, zu genießen, zu lieben.", author: "Marcus Aurelius" },
            { quote: "Man ist nie zu alt, um sich ein neues Ziel zu setzen oder einen neuen Traum zu träumen.", author: "C.S. Lewis" },
            { quote: "Der einzige Weg, großartige Arbeit zu leisten, ist zu lieben, was man tut.", author: "Steve Jobs" }
          ]
        }
      };
      
      let quotesToUse = localQuotesByLanguage[selectedLanguage] || localQuotesByLanguage.en;
      
      // If a category is selected and we have quotes for that category, add them to the mix
      if (selectedCategory && categoryQuotes[selectedCategory.toLowerCase()]) {
        const langCategoryQuotes = categoryQuotes[selectedCategory.toLowerCase()][selectedLanguage] ||
                                  categoryQuotes[selectedCategory.toLowerCase()].en;
        
        if (langCategoryQuotes) {
          // Prioritize category-specific quotes (60% chance)
          if (Math.random() < 0.6) {
            quotesToUse = langCategoryQuotes;
          } else {
            // Add category quotes to the mix but still use general pool
            quotesToUse = [...quotesToUse, ...langCategoryQuotes];
          }
        }
      }
      
      // Ensure there are quotes available
      if (!quotesToUse || quotesToUse.length === 0) {
        throw new Error("No quotes available for selected language");
      }
      
      // Pick a random quote
      const randomIndex = Math.floor(Math.random() * quotesToUse.length);
      const selectedQuote = quotesToUse[randomIndex];
      
      // Ensure we have a valid quote
      if (!selectedQuote || !selectedQuote.quote) {
        throw new Error("Invalid quote selected");
      }
      
      // Use author name as is, without adding AI Generated text
      const author = selectedQuote.author || "Unknown";
      
      // Create categories array
      const categories = selectedCategory ? 
        [selectedCategory.toLowerCase()] : 
        ['motivation', 'inspiration'];
      
      // Create dynamic quote ID
      const quoteId = `quote_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
      
      // Save the AI-generated quote
      const newQuote = {
        id: quoteId,
        text: selectedQuote.quote,
        author: author,
        categories: categories,
        language: selectedLanguage
      };
      
      // Add the quote to saved quotes
      try {
        addAiQuote(
          newQuote.text,
          newQuote.author,
          newQuote.categories,
          newQuote.language
        );
      } catch (saveError) {
        console.error('Error saving AI quote:', saveError);
        // Continue even if saving fails - don't show an error to the user
      }
      
      // Display the quote
      displayQuote(newQuote);
      
    } catch (error) {
      console.error('Error generating quote with AI:', error);
      
      // Fallback to a basic quote for the selected language
      const fallbackQuotes = {
        en: [
          { text: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
          { text: "Never regret anything that made you smile.", author: "Mark Twain" },
          { text: "Whatever you do, do it well.", author: "Walt Disney" }
        ],
        fr: [
          { text: "Chaque moment est un nouveau départ.", author: "T.S. Eliot" },
          { text: "Ne regrettez jamais ce qui vous a fait sourire.", author: "Mark Twain" },
          { text: "Quoi que vous fassiez, faites-le bien.", author: "Walt Disney" }
        ],
        de: [
          { text: "Jeder Moment ist ein neuer Anfang.", author: "T.S. Eliot" },
          { text: "Bereue nie etwas, das dich zum Lächeln gebracht hat.", author: "Mark Twain" },
          { text: "Was auch immer du tust, mach es gut.", author: "Walt Disney" }
        ],
        es: [
          { text: "Cada momento es un nuevo comienzo.", author: "T.S. Eliot" },
          { text: "Nunca te arrepientas de algo que te hizo sonreír.", author: "Mark Twain" },
          { text: "Hagas lo que hagas, hazlo bien.", author: "Walt Disney" }
        ],
        it: [
          { text: "Ogni momento è un nuovo inizio.", author: "T.S. Eliot" },
          { text: "Non rimpiangere mai nulla che ti abbia fatto sorridere.", author: "Mark Twain" },
          { text: "Qualunque cosa tu faccia, falla bene.", author: "Walt Disney" }
        ],
        pt: [
          { text: "Cada momento é um novo começo.", author: "T.S. Eliot" },
          { text: "Nunca se arrependa de algo que o fez sorrir.", author: "Mark Twain" },
          { text: "O que quer que você faça, faça bem.", author: "Walt Disney" }
        ],
        nl: [
          { text: "Elk moment is een nieuw begin.", author: "T.S. Eliot" },
          { text: "Heb nooit spijt van iets dat je deed glimlachen.", author: "Mark Twain" },
          { text: "Wat je ook doet, doe het goed.", author: "Walt Disney" }
        ],
        ar: [
          { text: "كل لحظة هي بداية جديدة.", author: "تي. إس. إليوت" },
          { text: "لا تندم أبدًا على شيء جعلك تبتسم.", author: "مارك توين" },
          { text: "مهما فعلت، افعله جيدًا.", author: "والت ديزني" }
        ]
      };
      
      const fallbackQuoteList = fallbackQuotes[selectedLanguage] || fallbackQuotes.en;
      const fallbackIndex = Math.floor(Math.random() * fallbackQuoteList.length);
      const fallbackQuote = fallbackQuoteList[fallbackIndex];
      
      fallbackQuote.categories = selectedCategory ? [selectedCategory.toLowerCase()] : ['motivation', 'inspiration'];
      fallbackQuote.language = selectedLanguage;
      
      // Try to add the fallback quote to saved quotes
      try {
        addAiQuote(
          fallbackQuote.text,
          fallbackQuote.author,
          fallbackQuote.categories,
          fallbackQuote.language
        );
      } catch (saveError) {
        console.error('Error saving fallback AI quote:', saveError);
        // Continue even if saving fails
      }
      
      // Display the fallback quote instead of showing error
      displayQuote(fallbackQuote);
    } finally {
      // Restore button state
      aiGenerateBtn.disabled = false;
      aiGenerateBtn.innerHTML = originalBtnText;
    }
  }

  // Event Listeners
  generateBtn.addEventListener('click', () => {
    const quote = generateRandomQuote();
    displayQuote(quote);
  });
  
  categoryBtn.addEventListener('click', () => {
    const selectedCategory = categorySelect.value;
    const quote = getQuotesByCategory(selectedCategory);
    displayQuote(quote);
  });
  
  searchBtn.addEventListener('click', () => {
    const keyword = keywordInput.value.trim();
    const quote = searchQuotesByKeyword(keyword);
    displayQuote(quote);
  });
  
  copyBtn.addEventListener('click', copyToClipboard);
  
  shareBtn.addEventListener('click', shareQuote);
  
  keywordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      searchBtn.click();
    }
  });
  
  // AI quote generation button
  aiGenerateBtn.addEventListener('click', generateAIQuote);
  
  // Initial quote on page load
  displayQuote(generateRandomQuote());

  // Add pulse animation to generate button after 3 seconds to draw attention
  setTimeout(() => {
    generateBtn.classList.add('btn-pulse');
    
    // Remove pulse when the user clicks the button
    generateBtn.addEventListener('click', function removePulse() {
      generateBtn.classList.remove('btn-pulse');
      generateBtn.removeEventListener('click', removePulse);
    });
  }, 2000);
}); 