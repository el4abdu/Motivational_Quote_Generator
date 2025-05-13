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
  
  let currentQuote = null;
  
  // Populate categories
  const categories = getAllCategories();
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    categorySelect.appendChild(option);
  });
  
  // Generate random quote
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Display quote
  function displayQuote(quote) {
    if (!quote) {
      quoteText.textContent = "No quotes found matching your criteria. Try another search.";
      quoteAuthor.textContent = "";
      return;
    }
    
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = `- ${quote.author}`;
    
    // Add fade-in animation
    quoteText.classList.remove('fade-in');
    quoteAuthor.classList.remove('fade-in');
    
    // Trigger reflow
    void quoteText.offsetWidth;
    void quoteAuthor.offsetWidth;
    
    quoteText.classList.add('fade-in');
    quoteAuthor.classList.add('fade-in');
    
    currentQuote = quote;
  }
  
  // Get quotes by category
  function getQuotesByCategory(category) {
    if (!category) {
      return generateRandomQuote();
    }
    
    const filteredQuotes = quotes.filter(quote => 
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
    
    const filteredQuotes = quotes.filter(quote => 
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
        copyBtn.innerHTML = '<i class="bi bi-check"></i> Copied!';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
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
  
  // Initial quote on page load
  displayQuote(generateRandomQuote());
}); 