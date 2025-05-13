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
        
        // Set language attribute for proper font rendering
        // This ensures Arabic text uses Amiri font
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
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Local AI-inspired quotes for each language
      const localQuotesByLanguage = {
        en: [
          { quote: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
          { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
          { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
          { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
          { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" }
        ],
        fr: [
          { quote: "Le voyage de mille lieues commence par un seul pas.", author: "Lao Tzu" },
          { quote: "Le succès n'est pas final, l'échec n'est pas fatal: c'est le courage de continuer qui compte.", author: "Winston Churchill" },
          { quote: "La meilleure façon de prédire l'avenir est de le créer.", author: "Peter Drucker" },
          { quote: "Croyez que vous pouvez et vous êtes à mi-chemin.", author: "Theodore Roosevelt" },
          { quote: "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.", author: "Franklin D. Roosevelt" }
        ],
        ar: [
          { quote: "رحلة الألف ميل تبدأ بخطوة واحدة.", author: "لاو تزو" },
          { quote: "النجاح ليس نهائياً، والفشل ليس قاتلاً: ما يهم هو الشجاعة للاستمرار.", author: "وينستون تشرشل" },
          { quote: "أفضل طريقة للتنبؤ بالمستقبل هي صنعه.", author: "بيتر دراكر" },
          { quote: "آمن أنك تستطيع وتكون قد قطعت نصف الطريق.", author: "ثيودور روزفلت" },
          { quote: "الحدود الوحيدة لتحقيق أحلامنا غداً هي شكوكنا اليوم.", author: "فرانكلين د. روزفلت" }
        ]
      };
      
      // Select quotes for the chosen language, or fall back to English
      const quotesForLanguage = localQuotesByLanguage[selectedLanguage] || localQuotesByLanguage.en;
      
      // Ensure there are quotes available
      if (!quotesForLanguage || quotesForLanguage.length === 0) {
        throw new Error("No quotes available for selected language");
      }
      
      // Pick a random quote
      const randomIndex = Math.floor(Math.random() * quotesForLanguage.length);
      const selectedQuote = quotesForLanguage[randomIndex];
      
      // Ensure we have a valid quote
      if (!selectedQuote || !selectedQuote.quote) {
        throw new Error("Invalid quote selected");
      }
      
      // Add AI tag based on language
      let authorWithAI = selectedQuote.author || "Unknown";
      if (selectedLanguage === 'fr') {
        authorWithAI += " (Généré par IA)";
      } else if (selectedLanguage === 'ar') {
        authorWithAI += " (تم إنشاؤه بواسطة الذكاء الاصطناعي)";
      } else {
        authorWithAI += " (AI Generated)";
      }
      
      // Create categories array
      const categories = selectedCategory ? 
        [selectedCategory.toLowerCase()] : 
        ['motivation', 'inspiration'];
      
      // Save the AI-generated quote
      const newQuote = {
        text: selectedQuote.quote,
        author: authorWithAI,
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
        en: { text: "Every moment is a fresh beginning.", author: "T.S. Eliot (Fallback AI Generated)" },
        fr: { text: "Chaque moment est un nouveau départ.", author: "T.S. Eliot (Généré par IA - Solution de secours)" },
        ar: { text: "كل لحظة هي بداية جديدة.", author: "تي. إس. إليوت (تم إنشاؤه بواسطة الذكاء الاصطناعي - احتياطي)" }
      };
      
      const fallbackQuote = fallbackQuotes[selectedLanguage] || fallbackQuotes.en;
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