const quotes = [
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    categories: ["dreams", "future", "belief"]
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    categories: ["success", "failure", "courage"]
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    categories: ["belief", "motivation", "confidence"]
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    categories: ["work", "passion", "success"]
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    categories: ["perseverance", "progress", "patience"]
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    categories: ["future", "creativity", "action"]
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    categories: ["dreams", "goals", "age"]
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    categories: ["doubt", "limits", "future"]
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    categories: ["time", "perseverance", "action"]
  },
  {
    text: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama",
    categories: ["happiness", "action", "mindfulness"]
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
    categories: ["destiny", "decision", "self-improvement"]
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Anonymous",
    categories: ["work", "achievement", "effort"]
  },
  {
    text: "If you can dream it, you can do it.",
    author: "Walt Disney",
    categories: ["dreams", "achievement", "possibility"]
  },
  {
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    categories: ["risk", "change", "growth"]
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    categories: ["action", "beginning", "productivity"]
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    categories: ["time", "authenticity", "life"]
  },
  {
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
    categories: ["attitude", "resilience", "mindset"]
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
    categories: ["mindset", "thoughts", "growth"]
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    categories: ["time", "action", "beginning"]
  },
  {
    text: "The only way to achieve the impossible is to believe it is possible.",
    author: "Charles Kingsleigh (Alice in Wonderland)",
    categories: ["belief", "possibility", "achievement"]
  },
  {
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
    categories: ["failure", "success", "enthusiasm"]
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
    categories: ["goals", "achievement", "growth"]
  },
  {
    text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson",
    categories: ["belief", "self-confidence", "obstacles"]
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    categories: ["journey", "beginning", "action"]
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
    categories: ["risk", "opportunity", "action"]
  },
  // 100 more quotes added below
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    categories: ["beginning", "action", "progress"]
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
    categories: ["present", "mindfulness", "focus"]
  },
  {
    text: "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
    categories: ["beginning", "greatness", "action"]
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
    categories: ["fear", "courage", "desire"]
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
    categories: ["journey", "beginning", "progress"]
  },
  {
    text: "Keep your face always toward the sunshine - and shadows will fall behind you.",
    author: "Walt Whitman",
    categories: ["positivity", "optimism", "attitude"]
  },
  {
    text: "What defines us is how well we rise after falling.",
    author: "Anonymous",
    categories: ["resilience", "failure", "growth"]
  },
  {
    text: "The difference between ordinary and extraordinary is that little extra.",
    author: "Jimmy Johnson",
    categories: ["effort", "excellence", "success"]
  },
  {
    text: "When we strive to become better than we are, everything around us becomes better too.",
    author: "Paulo Coelho",
    categories: ["self-improvement", "growth", "influence"]
  },
  {
    text: "If opportunity doesn't knock, build a door.",
    author: "Milton Berle",
    categories: ["opportunity", "creativity", "action"]
  },
  {
    text: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
    categories: ["mistakes", "risk", "innovation"]
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "George Eliot",
    categories: ["potential", "change", "opportunity"]
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    categories: ["achievement", "perseverance", "possibility"]
  },
  {
    text: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
    categories: ["helping", "kindness", "leadership"]
  },
  {
    text: "The best revenge is massive success.",
    author: "Frank Sinatra",
    categories: ["success", "resilience", "motivation"]
  },
  {
    text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine",
    categories: ["challenges", "meaning", "overcoming"]
  },
  {
    text: "Happiness is not by chance, but by choice.",
    author: "Jim Rohn",
    categories: ["happiness", "choice", "attitude"]
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    categories: ["difficulty", "opportunity", "perspective"]
  },
  {
    text: "Your attitude, not your aptitude, will determine your altitude.",
    author: "Zig Ziglar",
    categories: ["attitude", "success", "mindset"]
  },
  {
    text: "The question isn't who is going to let me; it's who is going to stop me.",
    author: "Ayn Rand",
    categories: ["determination", "confidence", "ambition"]
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    categories: ["purpose", "happiness", "life"]
  },
  {
    text: "I didn't fail the test. I just found 100 ways to do it wrong.",
    author: "Benjamin Franklin",
    categories: ["failure", "perspective", "learning"]
  },
  {
    text: "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
    author: "Sheryl Sandberg",
    categories: ["opportunity", "action", "risk"]
  },
  {
    text: "The more difficult the victory, the greater the happiness in winning.",
    author: "Pele",
    categories: ["victory", "difficulty", "achievement"]
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
    categories: ["action", "resourcefulness", "present"]
  },
  {
    text: "Fall seven times and stand up eight.",
    author: "Japanese Proverb",
    categories: ["resilience", "perseverance", "failure"]
  },
  {
    text: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost",
    categories: ["choices", "uniqueness", "journey"]
  },
  {
    text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
    categories: ["action", "decision", "tenacity"]
  },
  {
    text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    author: "Mark Twain",
    categories: ["regret", "action", "risk"]
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
    categories: ["failure", "perseverance", "innovation"]
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    categories: ["fear", "courage", "mindset"]
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    categories: ["life", "planning", "present"]
  },
  {
    text: "The most common way people give up their power is by thinking they don't have any.",
    author: "Alice Walker",
    categories: ["power", "mindset", "self-belief"]
  },
  {
    text: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford",
    categories: ["mindset", "belief", "attitude"]
  },
  {
    text: "You become what you believe.",
    author: "Oprah Winfrey",
    categories: ["belief", "mindset", "growth"]
  },
  {
    text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    author: "Steve Jobs",
    categories: ["passion", "work", "fulfillment"]
  },
  {
    text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau",
    categories: ["dreams", "confidence", "life"]
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    categories: ["resilience", "glory", "failure"]
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    categories: ["change", "action", "influence"]
  },
  {
    text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    author: "Martin Luther King Jr.",
    categories: ["darkness", "light", "love"]
  },
  {
    text: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth",
    categories: ["failure", "persistence", "success"]
  },
  {
    text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
    author: "Oprah Winfrey",
    categories: ["gratitude", "celebration", "positivity"]
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    categories: ["authenticity", "uniqueness", "self"]
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
    categories: ["leadership", "originality", "courage"]
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
    categories: ["success", "happiness", "passion"]
  },
  {
    text: "The greatest wealth is to live content with little.",
    author: "Plato",
    categories: ["contentment", "simplicity", "wealth"]
  },
  {
    text: "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
    author: "Henry Ford",
    categories: ["purpose", "destiny", "action"]
  },
  {
    text: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    author: "Helen Keller",
    categories: ["opportunity", "perspective", "happiness"]
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
    categories: ["simplicity", "life", "perspective"]
  },
  {
    text: "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mahatma Gandhi",
    categories: ["happiness", "harmony", "authenticity"]
  },
  {
    text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    author: "Winston Churchill",
    categories: ["optimism", "pessimism", "opportunity"]
  },
  {
    text: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
    categories: ["progress", "judgment", "growth"]
  },
  {
    text: "The secret of change is to focus all of your energy not on fighting the old, but on building the new.",
    author: "Socrates",
    categories: ["change", "focus", "growth"]
  },
  {
    text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    author: "Steve Jobs",
    categories: ["work", "satisfaction", "greatness"]
  },
  {
    text: "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius",
    categories: ["resilience", "glory", "failure"]
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    categories: ["wisdom", "humility", "knowledge"]
  },
  {
    text: "Everything has beauty, but not everyone sees it.",
    author: "Confucius",
    categories: ["beauty", "perspective", "awareness"]
  },
  {
    text: "Keep your face to the sunshine and you cannot see a shadow.",
    author: "Helen Keller",
    categories: ["positivity", "perspective", "optimism"]
  },
  {
    text: "What we think, we become.",
    author: "Buddha",
    categories: ["thoughts", "mindset", "transformation"]
  },
  {
    text: "In order to succeed, we must first believe that we can.",
    author: "Nikos Kazantzakis",
    categories: ["belief", "success", "confidence"]
  },
  {
    text: "All our dreams can come true if we have the courage to pursue them.",
    author: "Walt Disney",
    categories: ["dreams", "courage", "pursuit"]
  },
  {
    text: "The power of imagination makes us infinite.",
    author: "John Muir",
    categories: ["imagination", "power", "possibility"]
  },
  {
    text: "Try to be a rainbow in someone's cloud.",
    author: "Maya Angelou",
    categories: ["kindness", "positivity", "influence"]
  },
  {
    text: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
    categories: ["fear", "risk", "courage"]
  },
  {
    text: "We may encounter many defeats but we must not be defeated.",
    author: "Maya Angelou",
    categories: ["defeat", "resilience", "perseverance"]
  },
  {
    text: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke",
    categories: ["action", "responsibility", "courage"]
  },
  {
    text: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
    categories: ["life", "creation", "identity"]
  },
  {
    text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
    categories: ["gratitude", "perspective", "abundance"]
  },
  {
    text: "The key to success is to focus on goals, not obstacles.",
    author: "Anonymous",
    categories: ["focus", "goals", "success"]
  },
  {
    text: "Nothing is impossible, the word itself says 'I'm possible'!",
    author: "Audrey Hepburn",
    categories: ["possibility", "attitude", "wordplay"]
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
    categories: ["success", "value", "purpose"]
  },
  {
    text: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
    categories: ["success", "excuses", "accountability"]
  },
  {
    text: "You can't use up creativity. The more you use, the more you have.",
    author: "Maya Angelou",
    categories: ["creativity", "abundance", "growth"]
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
    categories: ["dreams", "courage", "failure"]
  },
  {
    text: "The best time to plant a tree is twenty years ago. The second best time is now.",
    author: "Chinese Proverb",
    categories: ["time", "action", "beginning"]
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    categories: ["time", "authenticity", "life"]
  },
  {
    text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    author: "Maya Angelou",
    categories: ["life", "moments", "appreciation"]
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
    categories: ["mind", "thoughts", "transformation"]
  },
  {
    text: "Winning isn't everything, but wanting to win is.",
    author: "Vince Lombardi",
    categories: ["winning", "desire", "attitude"]
  },
  {
    text: "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
    categories: ["purpose", "life", "discovery"]
  },
  {
    text: "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
    categories: ["decisions", "circumstances", "responsibility"]
  },
  {
    text: "The greatest discovery of all time is that a person can change his future by merely changing his attitude.",
    author: "Oprah Winfrey",
    categories: ["attitude", "change", "future"]
  },
  {
    text: "Either you run the day, or the day runs you.",
    author: "Jim Rohn",
    categories: ["control", "time", "productivity"]
  },
  {
    text: "What we fear doing most is usually what we most need to do.",
    author: "Tim Ferriss",
    categories: ["fear", "growth", "needs"]
  },
  {
    text: "You can never cross the ocean until you have the courage to lose sight of the shore.",
    author: "Christopher Columbus",
    categories: ["courage", "risk", "exploration"]
  },
  {
    text: "People often say that motivation doesn't last. Well, neither does bathing – that's why we recommend it daily.",
    author: "Zig Ziglar",
    categories: ["motivation", "consistency", "habit"]
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
    categories: ["beginning", "resourcefulness", "action"]
  },
  {
    text: "Don't let what you cannot do interfere with what you can do.",
    author: "John Wooden",
    categories: ["ability", "focus", "action"]
  },
  {
    text: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    author: "Mark Twain",
    categories: ["reflection", "individuality", "thinking"]
  },
  {
    text: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
    categories: ["mistakes", "innovation", "risk"]
  },
  {
    text: "If you're going through hell, keep going.",
    author: "Winston Churchill",
    categories: ["perseverance", "difficulty", "persistence"]
  },
  {
    text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    author: "Ralph Waldo Emerson",
    categories: ["purpose", "life", "impact"]
  },
  {
    text: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee",
    categories: ["success", "focus", "ordinariness"]
  },
  {
    text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    author: "Mark Twain",
    categories: ["regret", "action", "courage"]
  },
  {
    text: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
    categories: ["change", "action", "example"]
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
    categories: ["hardship", "destiny", "growth"]
  },
  {
    text: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.",
    author: "Chantal Sutherland",
    categories: ["self-belief", "challenges", "fear"]
  },
  {
    text: "If you don't like something, change it. If you can't change it, change your attitude.",
    author: "Maya Angelou",
    categories: ["change", "attitude", "adaptation"]
  },
  {
    text: "Success is stumbling from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
    categories: ["success", "failure", "enthusiasm"]
  },
  {
    text: "The best dreams happen when you're awake.",
    author: "Cherie Gilderbloom",
    categories: ["dreams", "awareness", "action"]
  },
  {
    text: "It's the possibility of having a dream come true that makes life interesting.",
    author: "Paulo Coelho",
    categories: ["dreams", "possibility", "life"]
  },
  {
    text: "The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
    categories: ["adventure", "dreams", "life"]
  },
  {
    text: "The difference between ordinary and extraordinary is that little extra.",
    author: "Jimmy Johnson",
    categories: ["effort", "excellence", "difference"]
  },
  {
    text: "If you want to achieve greatness stop asking for permission.",
    author: "Anonymous",
    categories: ["greatness", "initiative", "action"]
  },
  {
    text: "The more you know yourself, the more clarity there is. Self-knowledge has no end.",
    author: "Jiddu Krishnamurti",
    categories: ["self-knowledge", "clarity", "growth"]
  },
  {
    text: "You have to expect things of yourself before you can do them.",
    author: "Michael Jordan",
    categories: ["expectation", "self-belief", "achievement"]
  },
  {
    text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett",
    categories: ["fear", "dreams", "heart"]
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    categories: ["age", "goals", "dreams"]
  },
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier",
    categories: ["success", "effort", "focus"]
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
    categories: ["future", "action", "focus"]
  },
  {
    text: "Your goal should be just out of reach, but not out of sight.",
    author: "Unknown",
    categories: ["goal", "determination", "focus"]
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    categories: ["persistence", "goal", "success"]
  },
  {
    text: "Set your goals high, and don't stop till you get there.",
    author: "Bo Jackson",
    categories: ["goal", "ambition", "success"]
  },
  {
    text: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford",
    categories: ["attitude", "mindset", "possibility"]
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    categories: ["doubt", "possibility", "belief"]
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
    categories: ["attitude", "action", "belief"]
  },
  {
    text: "Do not wait to strike till the iron is hot, but make it hot by striking.",
    author: "William Butler Yeats",
    categories: ["action", "effort", "attitude"]
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    categories: ["possibility", "effort", "attitude"]
  },
  {
    text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett",
    categories: ["success", "value", "impact"]
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
    categories: ["success", "value", "identity"]
  },
  {
    text: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
    categories: ["success", "work", "effort"]
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    categories: ["success", "effort", "focus"]
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
    categories: ["success", "happiness", "fulfillment"]
  },
  {
    text: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
    categories: ["discipline", "goals", "success"]
  },
  {
    text: "Quality is not an act, it is a habit.",
    author: "Aristotle",
    categories: ["quality", "habit", "excellence"]
  },
  {
    text: "Persistence is the vehicle you arrive in.",
    author: "Bill Bradley",
    categories: ["persistence", "success", "determination"]
  },
  {
    text: "The harder the conflict, the greater the triumph.",
    author: "George Washington",
    categories: ["conflict", "triumph", "difficulty"]
  },
  {
    text: "The distance between insanity and genius is measured only by success.",
    author: "Bruce Feirstein",
    categories: ["success", "genius", "perspective"]
  },
  {
    text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
    categories: ["decision", "action", "tenacity"]
  },
  {
    text: "It is hard to fail, but it is worse never to have tried to succeed.",
    author: "Theodore Roosevelt",
    categories: ["failure", "attempt", "success"]
  },
  {
    text: "Energy and persistence conquer all things.",
    author: "Benjamin Franklin",
    categories: ["energy", "persistence", "conquest"]
  },
  {
    text: "Always do your best. What you plant now, you will harvest later.",
    author: "Og Mandino",
    categories: ["effort", "results", "future"]
  },
  {
    text: "Aim for the moon. If you miss, you may hit a star.",
    author: "W. Clement Stone",
    categories: ["ambition", "goals", "achievement"]
  },
  {
    text: "What you lack in talent can be made up with desire, hustle and giving 110% all the time.",
    author: "Don Zimmer",
    categories: ["talent", "desire", "effort"]
  },
  {
    text: "Don't count the days, make the days count.",
    author: "Muhammad Ali",
    categories: ["time", "action", "value"]
  },
  {
    text: "The best way out is always through.",
    author: "Robert Frost",
    categories: ["perseverance", "solution", "difficulty"]
  },
  {
    text: "The expert in anything was once a beginner.",
    author: "Helen Hayes",
    categories: ["expertise", "beginning", "growth"]
  },
  {
    text: "Nothing will work unless you do.",
    author: "Maya Angelou",
    categories: ["action", "work", "initiative"]
  },
  {
    text: "If you want to achieve excellence, you can get there today. As of this second, quit doing less than excellent work.",
    author: "Thomas J. Watson",
    categories: ["excellence", "action", "quality"]
  },
  {
    text: "Without hard work, nothing grows but weeds.",
    author: "Gordon B. Hinckley",
    categories: ["hard work", "growth", "results"]
  },
  {
    text: "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist.",
    author: "Stephen Hawking",
    categories: ["perspective", "wonder", "discovery"]
  },
  {
    text: "Small deeds done are better than great deeds planned.",
    author: "Peter Marshall",
    categories: ["action", "planning", "accomplishment"]
  },
  {
    text: "Write it on your heart that every day is the best day in the year.",
    author: "Ralph Waldo Emerson",
    categories: ["positivity", "mindset", "daily"]
  },
  {
    text: "The starting point of all achievement is desire.",
    author: "Napoleon Hill",
    categories: ["desire", "achievement", "beginning"]
  },
  {
    text: "Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you.",
    author: "George Whitefield",
    categories: ["progress", "journey", "goals"]
  },
  {
    text: "Knowing is not enough; we must apply. Willing is not enough; we must do.",
    author: "Johann Wolfgang von Goethe",
    categories: ["knowledge", "action", "will"]
  },
  {
    text: "We know what we are, but know not what we may be.",
    author: "William Shakespeare",
    categories: ["potential", "identity", "future"]
  },
  {
    text: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
    author: "Confucius",
    categories: ["will", "success", "potential"]
  },
  {
    text: "If you fell down yesterday, stand up today.",
    author: "H.G. Wells",
    categories: ["resilience", "recovery", "perseverance"]
  },
  {
    text: "You can't cross the sea merely by standing and staring at the water.",
    author: "Rabindranath Tagore",
    categories: ["action", "goals", "initiative"]
  },
  {
    text: "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.",
    author: "Samuel Beckett",
    categories: ["failure", "persistence", "improvement"]
  },
  {
    text: "You just can't beat the person who never gives up.",
    author: "Babe Ruth",
    categories: ["persistence", "determination", "winning"]
  },
  {
    text: "There is always room at the top.",
    author: "Daniel Webster",
    categories: ["achievement", "opportunity", "success"]
  },
  {
    text: "The most effective way to do it, is to do it.",
    author: "Amelia Earhart",
    categories: ["action", "effectiveness", "simplicity"]
  },
  {
    text: "Well done is better than well said.",
    author: "Benjamin Franklin",
    categories: ["action", "words", "results"]
  },
  {
    text: "Courage is resistance to fear, mastery of fear, not absence of fear.",
    author: "Mark Twain",
    categories: ["courage", "fear", "mastery"]
  },
  {
    text: "The goal of life is living in agreement with nature.",
    author: "Zeno",
    categories: ["life", "nature", "harmony"]
  },
  {
    text: "To begin, begin.",
    author: "William Wordsworth",
    categories: ["beginning", "action", "simplicity"]
  },
  {
    text: "You can't build a reputation on what you are going to do.",
    author: "Henry Ford",
    categories: ["reputation", "action", "commitment"]
  },
  {
    text: "Only I can change my life. No one can do it for me.",
    author: "Carol Burnett",
    categories: ["change", "responsibility", "self-reliance"]
  },
  {
    text: "The ladder of success is never crowded at the top.",
    author: "Napoleon Hill",
    categories: ["success", "achievement", "competition"]
  },
  {
    text: "Choose a job you love, and you will never have to work a day in your life.",
    author: "Confucius",
    categories: ["work", "passion", "joy"]
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
    categories: ["life", "reaction", "attitude"]
  },
  {
    text: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown Jr.",
    categories: ["preparation", "present", "effort"]
  },
  {
    text: "Set your goals high, and don't stop till you get there.",
    author: "Bo Jackson",
    categories: ["goals", "persistence", "achievement"]
  },
  {
    text: "If opportunity doesn't knock, build a door.",
    author: "Milton Berle",
    categories: ["opportunity", "initiative", "creativity"]
  },
  {
    text: "Success is where preparation and opportunity meet.",
    author: "Bobby Unser",
    categories: ["success", "preparation", "opportunity"]
  },
  {
    text: "You can't expect to hit the jackpot if you don't put a few nickels in the machine.",
    author: "Flip Wilson",
    categories: ["investment", "risk", "reward"]
  },
  {
    text: "The key to success is to focus our conscious mind on things we desire not things we fear.",
    author: "Brian Tracy",
    categories: ["focus", "desire", "fear"]
  },
  {
    text: "The more difficult the victory, the greater the happiness in winning.",
    author: "Pele",
    categories: ["difficulty", "victory", "happiness"]
  },
  {
    text: "If you're not making mistakes, then you're not doing anything.",
    author: "John Wooden",
    categories: ["mistakes", "action", "learning"]
  },
  {
    text: "Leap, and the net will appear.",
    author: "John Burroughs",
    categories: ["risk", "faith", "courage"]
  },
  {
    text: "Failure is the condiment that gives success its flavor.",
    author: "Truman Capote",
    categories: ["failure", "success", "perspective"]
  },
  {
    text: "Motivation is what gets you started. Habit is what keeps you going.",
    author: "Jim Ryun",
    categories: ["motivation", "habit", "persistence"]
  },
  {
    text: "You are the only person on earth who can use your ability.",
    author: "Zig Ziglar",
    categories: ["ability", "uniqueness", "responsibility"]
  },
  {
    text: "What we achieve inwardly will change outer reality.",
    author: "Plutarch",
    categories: ["achievement", "mindset", "reality"]
  },
  {
    text: "Every exit is an entry somewhere else.",
    author: "Tom Stoppard",
    categories: ["change", "opportunity", "perspective"]
  },
  {
    text: "The greatest use of a life is to spend it on something that will outlast it.",
    author: "William James",
    categories: ["legacy", "purpose", "life"]
  },
  {
    text: "You become what you believe.",
    author: "Oprah Winfrey",
    categories: ["belief", "identity", "transformation"]
  },
  {
    text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
    author: "Oprah Winfrey",
    categories: ["gratitude", "celebration", "abundance"]
  },
  {
    text: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
    categories: ["thoughts", "change", "influence"]
  },
  {
    text: "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg",
    categories: ["risk", "change", "strategy"]
  },
  {
    text: "A ship in harbor is safe, but that is not what ships are built for.",
    author: "John A. Shedd",
    categories: ["risk", "purpose", "safety"]
  },
  {
    text: "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus",
    categories: ["reaction", "attitude", "adversity"]
  },
  {
    text: "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
    author: "Barack Obama",
    categories: ["perseverance", "future", "attitude"]
  },
  {
    text: "Great things never came from comfort zones.",
    author: "Neil Strauss",
    categories: ["comfort", "growth", "achievement"]
  },
  {
    text: "In times of great stress or adversity, it's always best to keep busy, to plow your anger and your energy into something positive.",
    author: "Lee Iacocca",
    categories: ["adversity", "energy", "positivity"]
  },
  {
    text: "Only those who dare to fail greatly can ever achieve greatly.",
    author: "Robert F. Kennedy",
    categories: ["failure", "achievement", "courage"]
  },
  {
    text: "Your talent determines what you can do. Your motivation determines how much you're willing to do. Your attitude determines how well you do it.",
    author: "Lou Holtz",
    categories: ["talent", "motivation", "attitude"]
  },
  {
    text: "People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed.",
    author: "Tony Robbins",
    categories: ["momentum", "success", "determination"]
  },
  {
    text: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    author: "Vince Lombardi",
    categories: ["perfection", "excellence", "pursuit"]
  },
  {
    text: "There are no shortcuts to any place worth going.",
    author: "Beverly Sills",
    categories: ["shortcuts", "worthiness", "journey"]
  },
  {
    text: "Don't let the fear of losing be greater than the excitement of winning.",
    author: "Robert Kiyosaki",
    categories: ["fear", "excitement", "winning"]
  },
  {
    text: "Enthusiasm moves the world.",
    author: "Arthur Balfour",
    categories: ["enthusiasm", "influence", "action"]
  },
  {
    text: "You have to learn the rules of the game. And then you have to play better than anyone else.",
    author: "Albert Einstein",
    categories: ["rules", "excellence", "competition"]
  },
  {
    text: "The dreamers are the saviors of the world.",
    author: "James Allen",
    categories: ["dreams", "impact", "vision"]
  },
  {
    text: "One finds limits by pushing them.",
    author: "Herbert Simon",
    categories: ["limits", "challenge", "growth"]
  },
  {
    text: "Every problem has in it the seeds of its own solution. If you don't have any problems, you don't get any seeds.",
    author: "Norman Vincent Peale",
    categories: ["problems", "solutions", "opportunity"]
  },
  {
    text: "If you can dream it, you can achieve it.",
    author: "Zig Ziglar",
    categories: ["dreams", "achievement", "possibility"]
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    categories: ["belief", "achievement", "mindset"]
  },
  {
    text: "A jug fills drop by drop.",
    author: "Buddha",
    categories: ["patience", "progress", "persistence"]
  },
  {
    text: "You can't stop the waves, but you can learn to surf.",
    author: "Jon Kabat-Zinn",
    categories: ["adaptation", "challenges", "attitude"]
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
    categories: ["courage", "growth", "challenge"]
  },
  {
    text: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
    author: "Marie Curie",
    categories: ["belief", "purpose", "determination"]
  },
  {
    text: "There is no substitute for hard work.",
    author: "Thomas Edison",
    categories: ["hard work", "dedication", "success"]
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    categories: ["beginning", "progress", "initiative"]
  },
  {
    text: "When you cease to dream you cease to live.",
    author: "Malcolm Forbes",
    categories: ["dreams", "life", "vision"]
  },
  {
    text: "Things do not happen. Things are made to happen.",
    author: "John F. Kennedy",
    categories: ["action", "initiative", "creation"]
  },
  {
    text: "The most common way people give up their power is by thinking they don't have any.",
    author: "Alice Walker",
    categories: ["power", "mindset", "potential"]
  },
  {
    text: "Champions keep playing until they get it right.",
    author: "Billie Jean King",
    categories: ["persistence", "excellence", "practice"]
  },
  {
    text: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    author: "Francis of Assisi",
    categories: ["progress", "achievement", "growth"]
  },
  {
    text: "The true strength in our resolve comes from the knowledge that the impact of our work continues beyond our existence.",
    author: "Naval Ravikant",
    categories: ["legacy", "impact", "meaning"]
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: "Anais Nin",
    categories: ["courage", "life", "growth"]
  },
  {
    text: "No matter how hard the past, you can always begin again.",
    author: "Buddha",
    categories: ["renewal", "beginning", "past"]
  },
  {
    text: "Be not afraid of growing slowly; be afraid only of standing still.",
    author: "Chinese Proverb",
    categories: ["growth", "progress", "fear"]
  },
  {
    text: "Knowledge is love and light and vision.",
    author: "Helen Keller",
    categories: ["knowledge", "vision", "enlightenment"]
  },
  {
    text: "Experience is not what happens to you; it's what you do with what happens to you.",
    author: "Aldous Huxley",
    categories: ["experience", "response", "growth"]
  },
  {
    text: "The measure of intelligence is the ability to change.",
    author: "Albert Einstein",
    categories: ["intelligence", "change", "adaptability"]
  },
  // BATCH 1: 100 NEW QUOTES
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    categories: ["innovation", "leadership", "distinction"]
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
    categories: ["failure", "persistence", "invention"]
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
    categories: ["creativity", "intelligence", "enjoyment"]
  },
  {
    text: "The beautiful thing about learning is that nobody can take it away from you.",
    author: "B.B. King",
    categories: ["learning", "education", "growth"]
  },
  {
    text: "Leadership is the art of giving people a platform for spreading ideas that work.",
    author: "Seth Godin",
    categories: ["leadership", "ideas", "platform"]
  },
  {
    text: "Do what you can, where you are, with what you have.",
    author: "Theodore Roosevelt",
    categories: ["action", "resourcefulness", "pragmatism"]
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    categories: ["resilience", "perseverance", "life"]
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    categories: ["success", "failure", "courage"]
  },
  {
    text: "Learn as if you will live forever, live like you will die tomorrow.",
    author: "Mahatma Gandhi",
    categories: ["learning", "living", "inspiration"]
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
    categories: ["ambition", "mindset", "innovation"]
  },
  {
    text: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt",
    categories: ["perseverance", "difficulty", "resilience"]
  },
  {
    text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
    categories: ["learning", "involvement", "education"]
  },
  {
    text: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
    categories: ["success", "work", "effort"]
  },
  {
    text: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    author: "Jim Rohn",
    categories: ["risk", "ordinary", "achievement"]
  },
  {
    text: "All progress takes place outside the comfort zone.",
    author: "Michael John Bobak",
    categories: ["progress", "comfort", "growth"]
  },
  {
    text: "The best revenge is massive success.",
    author: "Frank Sinatra",
    categories: ["success", "revenge", "achievement"]
  },
  {
    text: "It's not about ideas. It's about making ideas happen.",
    author: "Scott Belsky",
    categories: ["ideas", "action", "implementation"]
  },
  {
    text: "What seems to us as bitter trials are often blessings in disguise.",
    author: "Oscar Wilde",
    categories: ["perspective", "blessing", "trials"]
  },
  {
    text: "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis",
    categories: ["success", "failure", "path"]
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    categories: ["action", "time", "beginnings"]
  },
  {
    text: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
    categories: ["opportunity", "creation", "initiative"]
  },
  {
    text: "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
    categories: ["beginning", "greatness", "action"]
  },
  {
    text: "Happiness is not something readymade. It comes from your own actions.",
    author: "Dalai Lama",
    categories: ["happiness", "action", "creation"]
  },
  {
    text: "Impossible is just an opinion.",
    author: "Paulo Coelho",
    categories: ["impossible", "opinion", "perspective"]
  },
  {
    text: "Magic is believing in yourself. If you can do that, you can make anything happen.",
    author: "Johann Wolfgang von Goethe",
    categories: ["magic", "belief", "self-confidence"]
  },
  {
    text: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
    categories: ["inferiority", "consent", "self-worth"]
  },
  {
    text: "The question isn't who is going to let me; it's who is going to stop me.",
    author: "Ayn Rand",
    categories: ["determination", "challenge", "ambition"]
  },
  {
    text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine",
    categories: ["challenges", "meaning", "overcoming"]
  },
  {
    text: "If you want to achieve greatness, stop asking for permission.",
    author: "Unknown",
    categories: ["greatness", "permission", "initiative"]
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    categories: ["life", "planning", "present"]
  },
  {
    text: "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
    categories: ["happiness", "goals", "attachment"]
  },
  {
    text: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
    categories: ["fear", "risk", "participation"]
  },
  {
    text: "Money is better than poverty, if only for financial reasons.",
    author: "Woody Allen",
    categories: ["money", "poverty", "finance"]
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    categories: ["action", "beginning", "talking"]
  },
  {
    text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    author: "Winston Churchill",
    categories: ["pessimism", "optimism", "opportunity"]
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
    categories: ["past", "present", "focus"]
  },
  {
    text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
    author: "Unknown",
    categories: ["failure", "learning", "character"]
  },
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
    categories: ["resilience", "determination", "sports"]
  },
  {
    text: "The obstacle is the way.",
    author: "Ryan Holiday",
    categories: ["obstacles", "way", "stoicism"]
  },
  {
    text: "A winner is a dreamer who never gives up.",
    author: "Nelson Mandela",
    categories: ["winner", "dreamer", "persistence"]
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    categories: ["limits", "doubts", "future"]
  },
  {
    text: "Tough times never last, but tough people do.",
    author: "Robert H. Schuller",
    categories: ["toughness", "endurance", "resilience"]
  },
  {
    text: "If you look at what you have in life, you'll always have more.",
    author: "Oprah Winfrey",
    categories: ["gratitude", "perspective", "abundance"]
  },
  {
    text: "Keep your face always toward the sunshine, and shadows will fall behind you.",
    author: "Walt Whitman",
    categories: ["positivity", "direction", "shadows"]
  },
  {
    text: "What we fear doing most is usually what we most need to do.",
    author: "Ralph Waldo Emerson",
    categories: ["fear", "needs", "growth"]
  },
  {
    text: "Don't worry about failures, worry about the chances you miss when you don't even try.",
    author: "Jack Canfield",
    categories: ["failure", "chances", "trying"]
  },
  {
    text: "The man who moves a mountain begins by carrying away small stones.",
    author: "Confucius",
    categories: ["progress", "persistence", "achievement"]
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
    categories: ["imagination", "reality", "creativity"]
  },
  {
    text: "The single biggest problem in communication is the illusion that it has taken place.",
    author: "George Bernard Shaw",
    categories: ["communication", "illusion", "understanding"]
  },
  {
    text: "Life isn't about getting and having, it's about giving and being.",
    author: "Kevin Kruse",
    categories: ["life", "giving", "being"]
  },
  {
    text: "Our lives begin to end the day we become silent about things that matter.",
    author: "Martin Luther King Jr.",
    categories: ["silence", "matters", "activism"]
  },
  {
    text: "The art of living lies less in eliminating our troubles than growing with them.",
    author: "Bernard M. Baruch",
    categories: ["troubles", "growth", "adaptation"]
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown",
    categories: ["hard work", "achievement", "reward"]
  },
  {
    text: "You don't become what you want, you become what you believe.",
    author: "Oprah Winfrey",
    categories: ["belief", "becoming", "transformation"]
  },
  {
    text: "You can never leave footprints that last if you are always walking on tiptoe.",
    author: "Leymah Gbowee",
    categories: ["impact", "courage", "boldness"]
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    categories: ["pace", "persistence", "progress"]
  },
  {
    text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford",
    categories: ["adversity", "resistance", "progress"]
  },
  {
    text: "If we have the attitude that it's going to be a great day it usually is.",
    author: "Catherine Pulsifer",
    categories: ["attitude", "positivity", "expectation"]
  },
  {
    text: "If you don't like the road you're walking, start paving another one.",
    author: "Dolly Parton",
    categories: ["change", "initiative", "direction"]
  },
  {
    text: "Forget about all the reasons why something may not work. You only need to find one good reason why it will.",
    author: "Dr. Robert Anthony",
    categories: ["possibilities", "focus", "optimism"]
  },
  {
    text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt",
    categories: ["ideas", "events", "people"]
  },
  {
    text: "No one can give you your goals. No one can dig for you. This is your journey.",
    author: "Warren Philip Gates",
    categories: ["goals", "journey", "personal responsibility"]
  },
  {
    text: "Champions keep playing until they get it right.",
    author: "Billie Jean King",
    categories: ["champions", "persistence", "excellence"]
  },
  {
    text: "You can't go back and change the beginning, but you can start where you are and change the ending.",
    author: "C.S. Lewis",
    categories: ["change", "beginning", "ending"]
  },
  {
    text: "To see what is right and not do it is a lack of courage.",
    author: "Confucius",
    categories: ["courage", "action", "morality"]
  },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent Van Gogh",
    categories: ["achievement", "progress", "small steps"]
  },
  {
    text: "No matter what people tell you, words and ideas can change the world.",
    author: "Robin Williams",
    categories: ["words", "ideas", "change"]
  },
  {
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
    categories: ["success", "failure", "enthusiasm"]
  },
  {
    text: "You must do the things you think you cannot do.",
    author: "Eleanor Roosevelt",
    categories: ["courage", "limits", "achievement"]
  },
  {
    text: "Thinking should become your capital asset, no matter whatever ups and downs you come across in your life.",
    author: "A.P.J. Abdul Kalam",
    categories: ["thinking", "capital", "resilience"]
  },
  {
    text: "When we strive to become better than we are, everything around us becomes better too.",
    author: "Paulo Coelho",
    categories: ["improvement", "influence", "growth"]
  },
  {
    text: "If you run you stand a chance of losing, but if you don't run you've already lost.",
    author: "Barack Obama",
    categories: ["risk", "opportunity", "action"]
  },
  {
    text: "Do what is right, not what is easy nor what is popular.",
    author: "Roy T. Bennett",
    categories: ["right", "easy", "popular"]
  },
  {
    text: "Success is getting what you want. Happiness is wanting what you get.",
    author: "Dale Carnegie",
    categories: ["success", "happiness", "contentment"]
  },
  {
    text: "We can't help everyone, but everyone can help someone.",
    author: "Ronald Reagan",
    categories: ["help", "impact", "contribution"]
  },
  {
    text: "Today is your opportunity to build the tomorrow you want.",
    author: "Ken Poirot",
    categories: ["opportunity", "building", "future"]
  },
  {
    text: "Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.",
    author: "Steve Maraboli",
    categories: ["control", "change", "power"]
  },
  {
    text: "The world breaks everyone, and afterward, many are strong at the broken places.",
    author: "Ernest Hemingway",
    categories: ["strength", "adversity", "resilience"]
  },
  {
    text: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
    categories: ["hard work", "luck", "success"]
  },
  {
    text: "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
    categories: ["life", "purpose", "discovery"]
  },
  {
    text: "For me, becoming isn't about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self.",
    author: "Michelle Obama",
    categories: ["becoming", "evolution", "growth"]
  },
  {
    text: "Your positive action combined with positive thinking results in success.",
    author: "Shiv Khera",
    categories: ["positive", "action", "success"]
  },
  {
    text: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    author: "Ayn Rand",
    categories: ["creativity", "motivation", "achievement"]
  },
  {
    text: "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
    categories: ["dreams", "courage", "pursuit"]
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
    categories: ["beginning", "resources", "action"]
  },
  {
    text: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
    categories: ["action", "foundation", "success"]
  },
  {
    text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
    author: "Vince Lombardi",
    categories: ["success", "will", "difference"]
  },
  {
    text: "Try not to become a man of success, but rather to become a man of value.",
    author: "Albert Einstein",
    categories: ["success", "value", "character"]
  },
  {
    text: "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
    author: "Ray Goforth",
    categories: ["difference", "fear", "success"]
  },
  {
    text: "The most common way people give up their power is by thinking they don't have any.",
    author: "Alice Walker",
    categories: ["power", "thinking", "self-limitation"]
  },
  {
    text: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee",
    categories: ["success", "focus", "average"]
  },
  {
    text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett",
    categories: ["fear", "dreams", "guidance"]
  },
  {
    text: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
    author: "Martin Luther King Jr.",
    categories: ["measure", "challenge", "character"]
  },
  {
    text: "I would rather die of passion than of boredom.",
    author: "Vincent van Gogh",
    categories: ["passion", "boredom", "living"]
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
    categories: ["destiny", "decision", "becoming"]
  },
  {
    text: "If you want to make your dreams come true, the first thing you have to do is wake up.",
    author: "J.M. Power",
    categories: ["dreams", "waking", "action"]
  },
  // BATCH 2: 100 MORE QUOTES
  {
    text: "If you want to achieve excellence, start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
    categories: ["excellence", "resourcefulness", "action"]
  },
  {
    text: "When I let go of what I am, I become what I might be.",
    author: "Lao Tzu",
    categories: ["change", "transformation", "potential"]
  },
  {
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
    categories: ["life", "balance", "movement"]
  },
  {
    text: "Some people look for a beautiful place, others make a place beautiful.",
    author: "Hazrat Inayat Khan",
    categories: ["beauty", "creation", "perspective"]
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
    categories: ["habits", "excellence", "repetition"]
  },
  {
    text: "Today is the first day of the rest of your life.",
    author: "Anonymous",
    categories: ["beginnings", "life", "perspective"]
  },
  {
    text: "Do not wait for leaders; do it alone, person to person.",
    author: "Mother Teresa",
    categories: ["leadership", "initiative", "action"]
  },
  {
    text: "Comfort is the enemy of achievement.",
    author: "Farrah Gray",
    categories: ["comfort", "achievement", "growth"]
  },
  {
    text: "People may hear your words, but they feel your attitude.",
    author: "John C. Maxwell",
    categories: ["attitude", "influence", "communication"]
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
    categories: ["journey", "beginnings", "progress"]
  },
  {
    text: "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    author: "John Quincy Adams",
    categories: ["leadership", "inspiration", "influence"]
  },
  {
    text: "Success consists of going from failure to failure without loss of enthusiasm.",
    author: "Winston Churchill",
    categories: ["success", "failure", "enthusiasm"]
  },
  {
    text: "The moment you doubt whether you can fly, you cease forever to be able to do it.",
    author: "J.M. Barrie",
    categories: ["doubt", "ability", "belief"]
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
    categories: ["fear", "desire", "courage"]
  },
  {
    text: "When I'm old and dying, I plan to look back on my life and say, 'Wow, that was an adventure,' not, 'Wow, I sure felt safe.'",
    author: "Tom Preston-Werner",
    categories: ["adventure", "safety", "risk"]
  },
  {
    text: "If you want to go fast, go alone. If you want to go far, go together.",
    author: "African Proverb",
    categories: ["teamwork", "speed", "distance"]
  },
  {
    text: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
    author: "Earl Nightingale",
    categories: ["dreams", "time", "perseverance"]
  },
  {
    text: "Don't wait. The time will never be just right.",
    author: "Napoleon Hill",
    categories: ["time", "action", "waiting"]
  },
  {
    text: "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
    author: "Jim Rohn",
    categories: ["planning", "life", "design"]
  },
  {
    text: "Commit to your goals and say no to things that do not serve your purpose.",
    author: "Anonymous",
    categories: ["commitment", "focus", "purpose"]
  },
  {
    text: "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
    author: "Sheryl Sandberg",
    categories: ["opportunity", "action", "ambition"]
  },
  {
    text: "A goal without a plan is just a wish.",
    author: "Antoine de Saint-Exupéry",
    categories: ["goals", "planning", "action"]
  },
  {
    text: "The struggles we go through are the lessons we need to grow.",
    author: "Anonymous",
    categories: ["struggles", "lessons", "growth"]
  },
  {
    text: "Make each day your masterpiece.",
    author: "John Wooden",
    categories: ["daily", "excellence", "achievement"]
  },
  {
    text: "Courage is fear holding on a minute longer.",
    author: "George S. Patton",
    categories: ["courage", "fear", "perseverance"]
  },
  {
    text: "The purpose of our lives is to add value to the people of this generation and those that follow.",
    author: "Naval Ravikant",
    categories: ["purpose", "value", "contribution"]
  },
  {
    text: "If you always do what you've always done, you'll always get what you've always got.",
    author: "Tony Robbins",
    categories: ["change", "results", "habits"]
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
    categories: ["mind", "thinking", "becoming"]
  },
  {
    text: "Your positive action combined with positive thinking results in success.",
    author: "Shiv Khera",
    categories: ["positive", "action", "success"]
  },
  {
    text: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    author: "Ayn Rand",
    categories: ["creativity", "motivation", "achievement"]
  },
  {
    text: "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
    categories: ["dreams", "courage", "pursuit"]
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
    categories: ["beginning", "resources", "action"]
  },
  {
    text: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
    categories: ["action", "foundation", "success"]
  },
  {
    text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
    author: "Vince Lombardi",
    categories: ["success", "will", "difference"]
  },
  {
    text: "Try not to become a man of success, but rather to become a man of value.",
    author: "Albert Einstein",
    categories: ["success", "value", "character"]
  },
  {
    text: "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
    author: "Ray Goforth",
    categories: ["difference", "fear", "success"]
  },
  {
    text: "The most common way people give up their power is by thinking they don't have any.",
    author: "Alice Walker",
    categories: ["power", "thinking", "self-limitation"]
  },
  {
    text: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee",
    categories: ["success", "focus", "average"]
  },
  {
    text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett",
    categories: ["fear", "dreams", "guidance"]
  },
  {
    text: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
    author: "Martin Luther King Jr.",
    categories: ["measure", "challenge", "character"]
  },
  {
    text: "I would rather die of passion than of boredom.",
    author: "Vincent van Gogh",
    categories: ["passion", "boredom", "living"]
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
    categories: ["destiny", "decision", "becoming"]
  },
  {
    text: "If you want to make your dreams come true, the first thing you have to do is wake up.",
    author: "J.M. Power",
    categories: ["dreams", "waking", "action"]
  },
  {
    text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: "Brian Tracy",
    categories: ["inner strength", "capability", "resilience"]
  },
  // BATCH 3: 100 MORE QUOTES ON UNIQUE TOPICS
  {
    text: "Logic will get you from A to B. Imagination will take you everywhere.",
    author: "Albert Einstein",
    categories: ["logic", "imagination", "creativity"]
  },
  {
    text: "The greatest weapon against stress is our ability to choose one thought over another.",
    author: "William James",
    categories: ["stress", "choice", "thoughts"]
  },
  {
    text: "What you seek is seeking you.",
    author: "Rumi",
    categories: ["seeking", "attraction", "destiny"]
  },
  {
    text: "The quieter you become, the more you can hear.",
    author: "Ram Dass",
    categories: ["silence", "listening", "awareness"]
  },
  {
    text: "Happiness is a direction, not a place.",
    author: "Sydney J. Harris",
    categories: ["happiness", "direction", "journey"]
  },
  {
    text: "The wound is the place where the Light enters you.",
    author: "Rumi",
    categories: ["wounds", "light", "healing"]
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
    categories: ["inner power", "past", "future"]
  },
  {
    text: "A ship in harbor is safe, but that is not what ships are built for.",
    author: "John A. Shedd",
    categories: ["risk", "safety", "purpose"]
  },
  {
    text: "The first wealth is health.",
    author: "Ralph Waldo Emerson",
    categories: ["health", "wealth", "priorities"]
  },
  {
    text: "Tension is who you think you should be. Relaxation is who you are.",
    author: "Chinese Proverb",
    categories: ["tension", "relaxation", "authenticity"]
  },
  {
    text: "Don't wait for your ship to come in, swim out to it.",
    author: "Anonymous",
    categories: ["initiative", "waiting", "action"]
  },
  {
    text: "Life is the dancer and you are the dance.",
    author: "Eckhart Tolle",
    categories: ["life", "dance", "flow"]
  },
  {
    text: "Muddy water is best cleared by leaving it alone.",
    author: "Alan Watts",
    categories: ["clarity", "patience", "stillness"]
  },
  {
    text: "We are not human beings having a spiritual experience. We are spiritual beings having a human experience.",
    author: "Pierre Teilhard de Chardin",
    categories: ["spirituality", "humanity", "experience"]
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    categories: ["authenticity", "uniqueness", "identity"]
  },
  {
    text: "The universe is made of stories, not atoms.",
    author: "Muriel Rukeyser",
    categories: ["universe", "stories", "perspective"]
  },
  {
    text: "Out of your vulnerabilities will come your strength.",
    author: "Sigmund Freud",
    categories: ["vulnerability", "strength", "growth"]
  },
  {
    text: "Respond to every call that excites your spirit.",
    author: "Rumi",
    categories: ["calling", "spirit", "response"]
  },
  {
    text: "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
    author: "Joseph Campbell",
    categories: ["letting go", "planning", "acceptance"]
  },
  {
    text: "Water is the softest thing, yet it can penetrate mountains and earth. This shows clearly the principle of softness overcoming hardness.",
    author: "Lao Tzu",
    categories: ["softness", "strength", "nature"]
  },
  {
    text: "As soon as you trust yourself, you will know how to live.",
    author: "Johann Wolfgang von Goethe",
    categories: ["trust", "self-trust", "living"]
  },
  {
    text: "The privilege of a lifetime is being who you are.",
    author: "Joseph Campbell",
    categories: ["privilege", "identity", "authenticity"]
  },
  {
    text: "The best use of imagination is creativity. The worst use of imagination is anxiety.",
    author: "Deepak Chopra",
    categories: ["imagination", "creativity", "anxiety"]
  },
  {
    text: "Solitude is where I place my chaos to rest and awaken my inner peace.",
    author: "Nikki Rowe",
    categories: ["solitude", "chaos", "peace"]
  },
  {
    text: "The way out is through.",
    author: "Robert Frost",
    categories: ["adversity", "solution", "perseverance"]
  },
  {
    text: "Not all those who wander are lost.",
    author: "J.R.R. Tolkien",
    categories: ["wandering", "purpose", "journey"]
  },
  {
    text: "Life is a balance of holding on and letting go.",
    author: "Rumi",
    categories: ["balance", "holding on", "letting go"]
  },
  {
    text: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    author: "Plato",
    categories: ["forgiveness", "fear", "light"]
  },
  {
    text: "Come let us be friends for once. Let us make life easy on us. Let us be loved ones and lovers. The earth shall be left to no one.",
    author: "Yunus Emre",
    categories: ["friendship", "love", "unity"]
  },
  {
    text: "The moon does not fight. It attacks no one. It does not worry. It does not try to crush others. It keeps to its course, but by its very nature, it gently influences. What other body could pull an entire ocean from shore to shore? The moon is faithful to its nature and its power is never diminished.",
    author: "Ming-Dao Deng",
    categories: ["influence", "nature", "faithfulness"]
  },
  {
    text: "The ego is nothing other than the focus of conscious attention.",
    author: "Alan Watts",
    categories: ["ego", "attention", "consciousness"]
  },
  {
    text: "There is no way to happiness - happiness is the way.",
    author: "Thich Nhat Hanh",
    categories: ["happiness", "path", "journey"]
  },
  {
    text: "The greatest love you can experience is to feel yourself as lovable. This is the essence of self-love.",
    author: "Deepak Chopra",
    categories: ["self-love", "love", "experience"]
  },
  {
    text: "Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.",
    author: "Carl Jung",
    categories: ["vision", "heart", "awakening"]
  },
  {
    text: "The truth is, unless you let go, unless you forgive yourself, unless you forgive the situation, unless you realize that the situation is over, you cannot move forward.",
    author: "Steve Maraboli",
    categories: ["truth", "forgiveness", "moving forward"]
  },
  {
    text: "The art of knowing is knowing what to ignore.",
    author: "Rumi",
    categories: ["knowing", "ignoring", "wisdom"]
  },
  {
    text: "To a mind that is still, the whole universe surrenders.",
    author: "Lao Tzu",
    categories: ["stillness", "mind", "universe"]
  },
  {
    text: "Eventually all things fall into place. Until then, laugh at the confusion, live for the moments, and know everything happens for a reason.",
    author: "Albert Schweitzer",
    categories: ["patience", "confusion", "reason"]
  },
  {
    text: "My religion is very simple. My religion is kindness.",
    author: "Dalai Lama",
    categories: ["religion", "kindness", "simplicity"]
  },
  {
    text: "In the midst of movement and chaos, keep stillness inside of you.",
    author: "Deepak Chopra",
    categories: ["stillness", "chaos", "inner peace"]
  },
  {
    text: "Awareness is the greatest agent for change.",
    author: "Eckhart Tolle",
    categories: ["awareness", "change", "transformation"]
  },
  {
    text: "Be empty of worrying. Think of who created thought.",
    author: "Rumi",
    categories: ["worry", "thought", "creation"]
  },
  {
    text: "Nature does not hurry, yet everything is accomplished.",
    author: "Lao Tzu",
    categories: ["nature", "hurry", "accomplishment"]
  },
  {
    text: "Wherever you are, be there totally.",
    author: "Eckhart Tolle",
    categories: ["presence", "mindfulness", "attention"]
  },
  {
    text: "If you are depressed you are living in the past, if you are anxious you are living in the future, if you are at peace, you are living in the present.",
    author: "Lao Tzu",
    categories: ["depression", "anxiety", "peace"]
  },
  {
    text: "Life is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
    author: "Lao Tzu",
    categories: ["life", "change", "flow"]
  },
  {
    text: "Death is not the biggest fear we have; our biggest fear is taking the risk to be alive - the risk to be alive and express what we really are.",
    author: "Don Miguel Ruiz",
    categories: ["fear", "death", "expression"]
  },
  {
    text: "Realize deeply that the present moment is all you have.",
    author: "Eckhart Tolle",
    categories: ["present", "moment", "realization"]
  },
  {
    text: "The only journey is the one within.",
    author: "Rainer Maria Rilke",
    categories: ["journey", "within", "self-discovery"]
  },
  {
    text: "Silence is the language of God, all else is poor translation.",
    author: "Rumi",
    categories: ["silence", "god", "language"]
  },
  {
    text: "The more you know yourself, the more clarity there is. Self-knowledge has no end.",
    author: "Jiddu Krishnamurti",
    categories: ["self-knowledge", "clarity", "wisdom"]
  },
  {
    text: "Be kind, for everyone you meet is fighting a harder battle.",
    author: "Plato",
    categories: ["kindness", "empathy", "battles"]
  },
  {
    text: "Nothing is as precious as a life of purpose.",
    author: "Dalai Lama",
    categories: ["purpose", "value", "living"]
  },
  {
    text: "You can only lose what you cling to.",
    author: "Buddha",
    categories: ["clinging", "loss", "attachment"]
  },
  {
    text: "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mahatma Gandhi",
    categories: ["happiness", "harmony", "congruence"]
  },
  {
    text: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "Albert Einstein",
    categories: ["miracle", "perspective", "life"]
  },
  {
    text: "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
    author: "Buddha",
    categories: ["self-love", "affection", "deserving"]
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    categories: ["wisdom", "knowledge", "humility"]
  },
  {
    text: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
    author: "Rumi",
    categories: ["wisdom", "change", "self-improvement"]
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha",
    categories: ["peace", "within", "seeking"]
  },
  {
    text: "What you are is what you have been. What you'll be is what you do now.",
    author: "Buddha",
    categories: ["present", "future", "action"]
  },
  {
    text: "The soul always knows what to do to heal itself. The challenge is to silence the mind.",
    author: "Caroline Myss",
    categories: ["soul", "healing", "mind"]
  },
  {
    text: "Love is the absence of judgment.",
    author: "Dalai Lama",
    categories: ["love", "judgment", "acceptance"]
  },
  {
    text: "The most important thing in life is to learn how to give out love, and to let it come in.",
    author: "Morrie Schwartz",
    categories: ["love", "giving", "receiving"]
  },
  {
    text: "Do not follow where the path may lead. Go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
    categories: ["path", "leadership", "originality"]
  },
  {
    text: "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
    author: "Buddha",
    categories: ["salvation", "path", "self-help"]
  },
  {
    text: "The heart that gives, gathers.",
    author: "Tao Te Ching",
    categories: ["giving", "heart", "abundance"]
  },
  {
    text: "There is nothing either good or bad, but thinking makes it so.",
    author: "William Shakespeare",
    categories: ["thinking", "judgment", "perspective"]
  },
  {
    text: "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.",
    author: "Rumi",
    categories: ["love", "guidance", "intuition"]
  },
  {
    text: "The next message you need is always right where you are.",
    author: "Ram Dass",
    categories: ["messages", "presence", "awareness"]
  },
  {
    text: "Raise your words, not voice. It is rain that grows flowers, not thunder.",
    author: "Rumi",
    categories: ["words", "voice", "influence"]
  },
  {
    text: "Don't grieve. Anything you lose comes round in another form.",
    author: "Rumi",
    categories: ["grief", "loss", "transformation"]
  },
  {
    text: "True spirituality is not about religion. It is about being kind, living with compassion, and practicing gratitude.",
    author: "Anonymous",
    categories: ["spirituality", "religion", "compassion"]
  },
  {
    text: "A thousand half-loves must be forsaken to take one whole heart home.",
    author: "Rumi",
    categories: ["love", "wholeness", "commitment"]
  },
  {
    text: "The cure for pain is in the pain.",
    author: "Rumi",
    categories: ["pain", "healing", "acceptance"]
  },
  {
    text: "What you seek is seeking you.",
    author: "Rumi",
    categories: ["seeking", "attraction", "reciprocity"]
  },
  {
    text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius",
    categories: ["happiness", "thinking", "simplicity"]
  },
  {
    text: "You can't rush your healing. Darkness has its teaching.",
    author: "Trevor Hall",
    categories: ["healing", "darkness", "patience"]
  },
  {
    text: "Be grateful for whoever comes, because each has been sent as a guide from beyond.",
    author: "Rumi",
    categories: ["gratitude", "guidance", "people"]
  },
  {
    text: "The inspiration you seek is already within you. Be silent and listen.",
    author: "Rumi",
    categories: ["inspiration", "silence", "listening"]
  },
  {
    text: "In a gentle way, you can shake the world.",
    author: "Mahatma Gandhi",
    categories: ["gentleness", "impact", "change"]
  },
  {
    text: "When I loved myself enough, I began leaving whatever wasn't healthy. This meant people, jobs, my own beliefs and habits – anything that kept me small. My judgement called it disloyal. Now I see it as self-loving.",
    author: "Kim McMillen",
    categories: ["self-love", "boundaries", "health"]
  },
  {
    text: "The meaning of life is to find your gift. The purpose of life is to give it away.",
    author: "Pablo Picasso",
    categories: ["meaning", "purpose", "gifts"]
  },
  {
    text: "Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.",
    author: "Viktor E. Frankl",
    categories: ["response", "choice", "freedom"]
  },
  {
    text: "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
    author: "Rumi",
    categories: ["love", "barriers", "seeking"]
  },
  {
    text: "Look at everything as though you were seeing it either for the first or last time.",
    author: "Betty Smith",
    categories: ["perspective", "gratitude", "seeing"]
  },
  {
    text: "The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
    author: "Henry Miller",
    categories: ["attention", "mystery", "magnificence"]
  },
  {
    text: "The most powerful weapon on earth is the human soul on fire.",
    author: "Ferdinand Foch",
    categories: ["soul", "passion", "power"]
  },
  {
    text: "The privilege of a lifetime is to become who you truly are.",
    author: "Carl Jung",
    categories: ["privilege", "authenticity", "becoming"]
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    categories: ["glory", "resilience", "rising"]
  },
  {
    text: "You are not a drop in the ocean. You are the entire ocean, in a drop.",
    author: "Rumi",
    categories: ["wholeness", "perspective", "identity"]
  },
  {
    text: "The longest journey is the journey inward.",
    author: "Dag Hammarskjöld",
    categories: ["journey", "inward", "self-discovery"]
  },
  {
    text: "There is no path to happiness. Happiness is the path.",
    author: "Gautama Buddha",
    categories: ["happiness", "path", "journey"]
  },
  {
    text: "Inner peace begins the moment you choose not to allow another person or event to control your emotions.",
    author: "Pema Chödrön",
    categories: ["inner peace", "choice", "emotions"]
  },
  {
    text: "When we share our light, we illuminate the world.",
    author: "Anonymous",
    categories: ["light", "sharing", "illumination"]
  },
  // BATCH 4: FINAL 100 QUOTES (FOCUS ON PRACTICAL WISDOM)
  {
    text: "The secret of success is constancy to purpose.",
    author: "Benjamin Disraeli",
    categories: ["success", "constancy", "purpose"]
  },
  {
    text: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    author: "Mark Caine",
    categories: ["success", "environment", "initiative"]
  },
  {
    text: "Luck is what happens when preparation meets opportunity.",
    author: "Seneca",
    categories: ["luck", "preparation", "opportunity"]
  },
  {
    text: "The harder the conflict, the greater the triumph.",
    author: "George Washington",
    categories: ["conflict", "triumph", "difficulty"]
  },
  {
    text: "The biggest risk is not taking any risk.",
    author: "Mark Zuckerberg",
    categories: ["risk", "playing safe", "action"]
  },
  {
    text: "Eighty percent of success is showing up.",
    author: "Woody Allen",
    categories: ["success", "showing up", "consistency"]
  },
  {
    text: "The world makes way for the man who knows where he is going.",
    author: "Ralph Waldo Emerson",
    categories: ["direction", "purpose", "clarity"]
  },
  {
    text: "You don't learn to walk by following rules. You learn by doing, and by falling over.",
    author: "Richard Branson",
    categories: ["learning", "rules", "experience"]
  },
  {
    text: "Improvement is impossible with the continuation of existing habits.",
    author: "Roger Milliken",
    categories: ["improvement", "habits", "change"]
  },
  {
    text: "Decide what you want, decide what you are willing to exchange for it. Establish your priorities and go to work.",
    author: "H. L. Hunt",
    categories: ["decision", "priorities", "exchange"]
  },
  {
    text: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
    author: "Thomas Edison",
    categories: ["opportunity", "work", "perception"]
  },
  {
    text: "A problem is a chance for you to do your best.",
    author: "Duke Ellington",
    categories: ["problems", "opportunity", "excellence"]
  },
  {
    text: "The path to success is to take massive, determined action.",
    author: "Tony Robbins",
    categories: ["success", "action", "determination"]
  },
  {
    text: "If you spend too much time thinking about a thing, you'll never get it done.",
    author: "Bruce Lee",
    categories: ["thinking", "action", "overthinking"]
  },
  {
    text: "Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.",
    author: "George Herbert",
    categories: ["timing", "beginning", "tools"]
  },
  {
    text: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    author: "Bill Gates",
    categories: ["success", "learning", "humility"]
  },
  {
    text: "The only real mistake is the one from which we learn nothing.",
    author: "Henry Ford",
    categories: ["mistakes", "learning", "growth"]
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    categories: ["limits", "doubts", "future"]
  },
  {
    text: "Don't find fault, find a remedy.",
    author: "Henry Ford",
    categories: ["fault", "remedy", "solution"]
  },
  {
    text: "Quality is not an act, it is a habit.",
    author: "Aristotle",
    categories: ["quality", "habit", "consistency"]
  },
  {
    text: "If you want to make your dreams come true, the first thing you have to do is wake up.",
    author: "J.M. Power",
    categories: ["dreams", "awakening", "action"]
  },
  {
    text: "Life is 10% what happens to me and 90% how I react to it.",
    author: "Charles R. Swindoll",
    categories: ["life", "reaction", "attitude"]
  },
  {
    text: "Change your language and you change your thoughts.",
    author: "Karl Albrecht",
    categories: ["language", "thoughts", "change"]
  },
  {
    text: "Wealth consists not in having great possessions, but in having few wants.",
    author: "Epictetus",
    categories: ["wealth", "wants", "possessions"]
  },
  {
    text: "Men are disturbed not by things, but by the view which they take of them.",
    author: "Epictetus",
    categories: ["disturbance", "perspective", "viewpoint"]
  },
  {
    text: "It's fine to celebrate success but it is more important to heed the lessons of failure.",
    author: "Bill Gates",
    categories: ["success", "failure", "lessons"]
  },
  {
    text: "When written in Chinese, the word 'crisis' is composed of two characters - one represents danger and the other represents opportunity.",
    author: "John F. Kennedy",
    categories: ["crisis", "danger", "opportunity"]
  },
  {
    text: "The day is what you make it! So why not make it a great one?",
    author: "Steve Schulte",
    categories: ["day", "choice", "attitude"]
  },
  {
    text: "We must all suffer from one of two pains: the pain of discipline or the pain of regret. The difference is discipline weighs ounces while regret weighs tons.",
    author: "Jim Rohn",
    categories: ["discipline", "regret", "pain"]
  },
  {
    text: "Efficiency is doing things right; effectiveness is doing the right things.",
    author: "Peter Drucker",
    categories: ["efficiency", "effectiveness", "strategy"]
  },
  {
    text: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown, Jr.",
    categories: ["preparation", "today", "excellence"]
  },
  {
    text: "Whatever the mind can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
    categories: ["mind", "belief", "achievement"]
  },
  {
    text: "If everything seems under control, you're not going fast enough.",
    author: "Mario Andretti",
    categories: ["control", "speed", "progress"]
  },
  {
    text: "Yesterday's home runs don't win today's games.",
    author: "Babe Ruth",
    categories: ["past success", "present", "effort"]
  },
  {
    text: "Continuous improvement is better than delayed perfection.",
    author: "Mark Twain",
    categories: ["improvement", "perfection", "progress"]
  },
  {
    text: "What lies in our power to do, lies in our power not to do.",
    author: "Aristotle",
    categories: ["power", "choice", "action"]
  },
  {
    text: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
    categories: ["success", "work", "effort"]
  },
  {
    text: "Vision without action is merely a dream. Action without vision just passes the time. Vision with action can change the world.",
    author: "Joel A. Barker",
    categories: ["vision", "action", "change"]
  },
  {
    text: "The first wealth is health.",
    author: "Ralph Waldo Emerson",
    categories: ["health", "wealth", "priorities"]
  },
  {
    text: "The distance between insanity and genius is measured only by success.",
    author: "Bruce Feirstein",
    categories: ["insanity", "genius", "success"]
  },
  {
    text: "Absorb what is useful, discard what is not, add what is uniquely your own.",
    author: "Bruce Lee",
    categories: ["learning", "adaptation", "uniqueness"]
  },
  {
    text: "I find that when you have a real interest in life and a curious life, that sleep is not the most important thing.",
    author: "Martha Stewart",
    categories: ["interest", "curiosity", "priorities"]
  },
  {
    text: "Courage doesn't always roar. Sometimes courage is the little voice at the end of the day that says 'I'll try again tomorrow.'",
    author: "Mary Anne Radmacher",
    categories: ["courage", "persistence", "trying"]
  },
  {
    text: "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
    author: "Mark Twain",
    categories: ["ambition", "influence", "greatness"]
  },
  {
    text: "The tragedy in life doesn't lie in not reaching your goal. The tragedy lies in having no goal to reach.",
    author: "Benjamin Mays",
    categories: ["tragedy", "goals", "purpose"]
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    categories: ["starting", "talking", "doing"]
  },
  {
    text: "The more you sweat in practice, the less you bleed in battle.",
    author: "Norman Schwarzkopf",
    categories: ["practice", "preparation", "performance"]
  },
  {
    text: "You've got to get up every morning with determination if you're going to go to bed with satisfaction.",
    author: "George Lorimer",
    categories: ["determination", "satisfaction", "daily"]
  },
  {
    text: "The most effective way to do it, is to do it.",
    author: "Amelia Earhart",
    categories: ["effectiveness", "action", "simplicity"]
  },
  {
    text: "Knowledge is being aware of what you can do. Wisdom is knowing when not to do it.",
    author: "Anonymous",
    categories: ["knowledge", "wisdom", "restraint"]
  },
  {
    text: "Leaders aren't born, they are made. And they are made just like anything else, through hard work.",
    author: "Vince Lombardi",
    categories: ["leadership", "hard work", "development"]
  },
  {
    text: "Ability is what you're capable of doing. Motivation determines what you do. Attitude determines how well you do it.",
    author: "Lou Holtz",
    categories: ["ability", "motivation", "attitude"]
  },
  {
    text: "Tact is the ability to tell someone to go to hell in such a way that they look forward to the trip.",
    author: "Winston Churchill",
    categories: ["tact", "communication", "influence"]
  },
  {
    text: "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.",
    author: "Alexander Graham Bell",
    categories: ["concentration", "focus", "effort"]
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    categories: ["darkness", "focus", "light"]
  },
  {
    text: "Dripping water hollows out stone, not through force but through persistence.",
    author: "Ovid",
    categories: ["persistence", "force", "effects"]
  },
  {
    text: "A comfort zone is a beautiful place, but nothing ever grows there.",
    author: "Anonymous",
    categories: ["comfort zone", "growth", "development"]
  },
  {
    text: "If you can't explain it simply, you don't understand it well enough.",
    author: "Albert Einstein",
    categories: ["explanation", "understanding", "simplicity"]
  },
  {
    text: "The more I want to get something done, the less I call it work.",
    author: "Richard Bach",
    categories: ["work", "desire", "perception"]
  },
  {
    text: "Most people have the will to win, few have the will to prepare to win.",
    author: "Bobby Knight",
    categories: ["winning", "preparation", "will"]
  },
  {
    text: "Wisdom is the daughter of experience.",
    author: "Leonardo da Vinci",
    categories: ["wisdom", "experience", "growth"]
  },
  {
    text: "The man who moves a mountain begins by carrying away small stones.",
    author: "Confucius",
    categories: ["progress", "persistence", "beginning"]
  },
  {
    text: "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.",
    author: "Theodore Roosevelt",
    categories: ["responsibility", "trouble", "self-awareness"]
  },
  {
    text: "Patience, persistence and perspiration make an unbeatable combination for success.",
    author: "Napoleon Hill",
    categories: ["patience", "persistence", "success"]
  },
  {
    text: "Anyone who has never made a mistake has never tried anything new.",
    author: "Albert Einstein",
    categories: ["mistakes", "trying", "innovation"]
  },
  {
    text: "Strength shows not only in the ability to persist, but in the ability to start over.",
    author: "F. Scott Fitzgerald",
    categories: ["strength", "persistence", "starting over"]
  },
  {
    text: "You're only given a little spark of madness. You mustn't lose it.",
    author: "Robin Williams",
    categories: ["madness", "uniqueness", "creativity"]
  },
  {
    text: "When you cease to dream you cease to live.",
    author: "Malcolm Forbes",
    categories: ["dreams", "living", "vitality"]
  },
  {
    text: "Each person must live their life as a model for others.",
    author: "Rosa Parks",
    categories: ["life", "model", "influence"]
  },
  {
    text: "Either I will find a way, or I will make one.",
    author: "Philip Sidney",
    categories: ["determination", "problem-solving", "initiative"]
  },
  {
    text: "A goal without a plan is just a wish.",
    author: "Antoine de Saint-Exupéry",
    categories: ["goals", "planning", "achievement"]
  },
  {
    text: "Beware of monotony; it's the mother of all the deadly sins.",
    author: "Edith Wharton",
    categories: ["monotony", "variety", "sin"]
  },
  {
    text: "To avoid criticism, do nothing, say nothing, and be nothing.",
    author: "Elbert Hubbard",
    categories: ["criticism", "action", "courage"]
  },
  {
    text: "Character is what you do when nobody is looking.",
    author: "J.C. Watts",
    categories: ["character", "integrity", "behavior"]
  },
  {
    text: "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
    author: "Etty Hillesum",
    categories: ["rest", "breathing", "importance"]
  },
  {
    text: "Honesty is the first chapter in the book of wisdom.",
    author: "Thomas Jefferson",
    categories: ["honesty", "wisdom", "beginnings"]
  },
  {
    text: "The reward for work well done is the opportunity to do more.",
    author: "Jonas Salk",
    categories: ["reward", "work", "opportunity"]
  },
  {
    text: "The best revenge is to be unlike him who performed the injury.",
    author: "Marcus Aurelius",
    categories: ["revenge", "differentiation", "injury"]
  },
  {
    text: "To conquer oneself is a greater task than conquering others.",
    author: "Buddha",
    categories: ["conquest", "self-control", "discipline"]
  },
  {
    text: "Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
    author: "Lyndon B. Johnson",
    categories: ["yesterday", "tomorrow", "opportunity"]
  },
  {
    text: "We choose to go to the moon not because it is easy, but because it is hard.",
    author: "John F. Kennedy",
    categories: ["choice", "difficulty", "challenge"]
  },
  {
    text: "All things excellent are as difficult as they are rare.",
    author: "Baruch Spinoza",
    categories: ["excellence", "difficulty", "rarity"]
  },
  {
    text: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    author: "Vince Lombardi",
    categories: ["perfection", "excellence", "pursuit"]
  },
  {
    text: "Success is how high you bounce when you hit bottom.",
    author: "George S. Patton",
    categories: ["success", "resilience", "adversity"]
  },
  {
    text: "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
    author: "William Arthur Ward",
    categories: ["pessimist", "optimist", "realist"]
  },
  {
    text: "One cannot step twice in the same river.",
    author: "Heraclitus",
    categories: ["change", "time", "metaphor"]
  },
  {
    text: "Be at war with your vices, at peace with your neighbors, and let every new year find you a better man.",
    author: "Benjamin Franklin",
    categories: ["vices", "peace", "improvement"]
  },
  {
    text: "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
    author: "Confucius",
    categories: ["goals", "action", "adjustment"]
  },
  {
    text: "If people knew how hard I worked to get my mastery, it wouldn't seem so wonderful after all.",
    author: "Michelangelo",
    categories: ["hard work", "mastery", "perception"]
  },
  {
    text: "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
    author: "Heraclitus",
    categories: ["change", "identity", "philosophy"]
  },
  {
    text: "Waste no more time arguing about what a good man should be. Be one.",
    author: "Marcus Aurelius",
    categories: ["time", "argument", "action"]
  },
  {
    text: "Time is the most valuable thing a man can spend.",
    author: "Theophrastus",
    categories: ["time", "value", "spending"]
  },
  {
    text: "Well done is better than well said.",
    author: "Benjamin Franklin",
    categories: ["action", "words", "accomplishment"]
  },
  {
    text: "Everything has beauty, but not everyone sees it.",
    author: "Confucius",
    categories: ["beauty", "perception", "seeing"]
  },
  {
    text: "If you don't stand for something, you will fall for anything.",
    author: "Gordon A. Eadie",
    categories: ["principles", "standing", "falling"]
  },
  {
    text: "Before you judge a man, walk a mile in his shoes. After that who cares? He's a mile away and you've got his shoes!",
    author: "Billy Connolly",
    categories: ["judgment", "empathy", "humor"]
  },
  {
    text: "Be kind, for everyone you meet is fighting a hard battle.",
    author: "Ian Maclaren",
    categories: ["kindness", "battles", "empathy"]
  },
  {
    text: "No great thing is created suddenly.",
    author: "Epictetus",
    categories: ["creation", "time", "process"]
  }
];

// Get all unique categories
function getAllCategories() {
  const categoriesSet = new Set();
  quotes.forEach(quote => {
    quote.categories.forEach(category => {
      categoriesSet.add(category);
    });
  });
  return Array.from(categoriesSet).sort();
}

// Export the quotes array and helper functions
if (typeof module !== 'undefined') {
  module.exports = {
    quotes,
    getAllCategories
  };
} 