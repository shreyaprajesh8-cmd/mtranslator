/**
 * Malicious Translator 😈
 * Deliberately misinterprets innocent sentences into theatrical drama,
 * villainous declarations, toxic gossip, and absurd chaos.
 * 100% Client-Side & Offline.
 */

// Mode Templates & Lexicons
const DRAMA_ENGINES = {
  gossip: {
    title: "💅 GOSSIP MODE TRANSLATION",
    color: "#ff2a85",
    subtextPrefixes: [
      "They clearly think they are better than everyone in the group chat.",
      "A blatant cry for validation that nobody asked for.",
      "Passive-aggressive flex designed to make Jessica feel inferior.",
      "The unspoken tea is scorching hot and frankly embarrassing.",
      "Translation: 'Look at me, I'm the main character now.'"
    ],
    templates: [
      (input, nouns) => `“Oh, so you're claiming '${input}'? Please. Jessica saw what you did on Tuesday, and the entire cul-de-sac knows this is just a smokescreen for your secret debt.”`,
      (input, nouns) => `“Translation: 'I just need everyone to stare at me while I dramatically announce: ${input}'. Honey, nobody asked, but we are taking screenshots anyway 💅.”`,
      (input, nouns) => `“Not you casually dropping '${input}' like you didn't leave Brandon on delivered for six months. The math simply isn't mathing, sweetie.”`,
      (input, nouns) => `“Everyone at brunch agreed: saying '${input}' was definitely a targeted dig at Sarah's third engagement party. The sheer audacity!”`,
      (input, nouns) => `“'${input}'? Wow. Could you scream 'I peaked in middle school' any louder? Don't worry, your secret is safe with me and my 42 closest friends.”`
    ],
    keywordRules: {
      food: "“Eating food again? What a calculated display of nutritional privilege while the group chat starves for genuine loyalty.”",
      work: "“'Working late'? That's code for lurking on your ex's new partner's Spotify listening activity, isn't it?”",
      sleep: "“'Going to sleep'? Cute cover story. We all know you're setting your phone on 'Do Not Disturb' to orchestrate emotional turmoil.”",
      busy: "“'Too busy'? Funny how your screen time report was 11 hours yesterday. We have the logs, darling.”",
      coffee: "“Another latte? Just say you lack emotional stability and let the barista go home.”"
    }
  },

  villain: {
    title: "😈 VILLAIN MODE DECLARATION",
    color: "#b026ff",
    subtextPrefixes: [
      "An unmistakable declaration of war against the council of mortal fools.",
      "The first phase of the planetary apocalypse protocol has commenced.",
      "A chilling confession of ruthless ambition masked as mundane dialogue.",
      "The prophecy foretold this exact treachery three centuries ago.",
      "Tremble before the impending darkness disguised as casual banter."
    ],
    templates: [
      (input, nouns) => `“Mwahaha! You think '${input}' will fool me?! Every syllable brings the dawn of my global dominion closer! The pathetic mortals will weep at dawn! ⚡”`,
      (input, nouns) => `“Fools! You utter '${input}' as if your puny resistance matters! Soon, the skies shall crack with violet fire and your precious tea will turn to ASH!”`,
      (input, nouns) => `“Behold! With the activation code '${input}', the ancient seals of doom are shattered! Tremble before my glorious, malevolent master plan! 🌑”`,
      (input, nouns) => `“You dare utter '${input}' in my presence?! Release the mechanized shadow hounds! Let none survive this insolence!”`,
      (input, nouns) => `“How quaint that you believe '${input}' is innocent. It is merely Phase Four of my symphony of pure, unadulterated chaos! 😈”`
    ],
    keywordRules: {
      food: "“Consuming sustenance?! No doubt harvesting synthetic carbohydrates to power the rebel android militia!”",
      work: "“'Working'? Yes... crafting cursed anti-matter warheads in the subterranean volcano laboratory!”",
      sleep: "“Slumber is for the frail! Sleep while you can, before the eclipse of agony swallows the dawn!”",
      busy: "“Busy plotting my demise?! Insolent speck, I calculated this variable before you were even spawned!”",
      coffee: "“The dark elixir of despair brews! A potion capable of bending the temporal fabric of reality!”"
    }
  },

  ex: {
    title: "💔 JEALOUS EX PARANOIA",
    color: "#ff4d6d",
    subtextPrefixes: [
      "They are definitely seeing someone taller, richer, or with better skin.",
      "An intentional emotional mind game aimed directly at my coronary artery.",
      "They wore that shirt just because they knew it was my favorite color.",
      "Clear, manipulative subtext specifically drafted to make me text them at 2 AM.",
      "They never used that punctuation with me when we were in Cabo."
    ],
    templates: [
      (input, nouns) => `“'${input}'?? Oh wow. Is that what you told TAYLOR when you two were laughing in the parking lot in 2021?! Do you ever think about the promises you broke?!”`,
      (input, nouns) => `“Fine. Say '${input}' then. Go live your little fantasy life with someone who doesn't even appreciate your playlist! Don't come crying when it all burns down.”`,
      (input, nouns) => `“It's funny how '${input}' is the EXACT phrase your mom said to me right before you changed your Netflix password! I hope you're proud of yourself.”`,
      (input, nouns) => `“I know what '${input}' REALLY means. It means you threw away four years of shared Spotify algorithms like trash on trash day. Have a nice life!!”`,
      (input, nouns) => `“You didn't put a period at the end of '${input}' because you're still leaving the door open. I see right through your desperate psychological traps!”`
    ],
    keywordRules: {
      food: "“Eating without me?! Remember when we split that garlic bread in 2019 and you said it was 'our bread'? I guess vows mean nothing.”",
      work: "“'Working late'? Who's the new intern?! What's their astrology sign?! Don't lie to me!”",
      sleep: "“'Going to sleep'? But your green dot is still active on WhatsApp! Who are you chatting with?! WHO?!”",
      busy: "“You were never too busy for me when you needed someone to help you assemble that IKEA shelf!”",
      coffee: "“Coffee? I literally introduced you to cold brew. You are drinking MY personality right now!”"
    }
  },

  chaos: {
    title: "💀 CHAOS MODE COGNITIVE COLLAPSE",
    color: "#00f2fe",
    subtextPrefixes: [
      "The microwave is listening and it does not approve of this frequency.",
      "The simulation has encountered a severe syntax error at memory address 0xDEADBEEF.",
      "Pigeons are government drones and this phrase just triggered their firmware update.",
      "Reality has folded into an origami swan and is biting your ankle.",
      "The interdimensional council is revoking your gravity subscription."
    ],
    templates: [
      (input, nouns) => `“BEEP BOOP 🚨 '${input}' just summoned three feral raccoons into the mayor's hot tub! The space-time continuum is leaking warm soup everywhere!”`,
      (input, nouns) => `“Instructions unclear: heard '${input}', bought 4,000 miniature rubber ducks, and declared independence from Tuesday. SQUAWK! 🦆💥”`,
      (input, nouns) => `“Breaking news: Scientists confirm '${input}' caused the moon to vibrate at 432Hz. Please do not feed the existential dread after midnight!”`,
      (input, nouns) => `“You fool! Saying '${input}' has inverted my digestive tract and inverted the stock market for glitter! THE GOBY FISH HAVE RISEN!”`,
      (input, nouns) => `“ERROR 404: Dignity not found. By proclaiming '${input}', you have unlocked the secret disco dimension. DANCE FOR YOUR LIFE, MORTAL!”`
    ],
    keywordRules: {
      food: "“FOOD DETECTED. Commencing tactical deployment of airborne waffles! HIDE YOUR SYRUP!”",
      work: "“The corporate matrix has exploded! The photocopier has been elected Pope! All hail Canon Pixma IV!”",
      sleep: "“SLEEP IS A CONSPIRACY INVENTED BY BED COMPANIES TO SELL MORE DUVETS! AWAKEN, SLEEPER AGENT!”",
      busy: "“BUSY? The void cares not for your calendar invites! The void demands a ceremonial dance!”",
      coffee: "“CAFFEINE OVERLOAD: My blood is now 80% liquid turbo. I can see what you will eat for lunch in 2037!”"
    }
  }
};

// Keyword detector helper
function detectKeywordCategory(text) {
  const lower = text.toLowerCase();
  if (/eat|food|snack|sandwich|lunch|dinner|breakfast|burger|pizza|hungry|cook/i.test(lower)) return 'food';
  if (/work|office|job|boss|shift|deadline|meeting|colleague|project/i.test(lower)) return 'work';
  if (/sleep|bed|tired|nap|rest|night|dream|asleep/i.test(lower)) return 'sleep';
  if (/busy|later|tomorrow|call|forgot|schedule|cant|can't/i.test(lower)) return 'busy';
  if (/coffee|tea|latte|espresso|drink|sip|water|mug/i.test(lower)) return 'coffee';
  return null;
}

// Random samples
const RANDOM_SAMPLES = [
  "I'm just going to the grocery store.",
  "Can you send me the file when you have a chance?",
  "I need to clean my room today.",
  "I really like this song.",
  "I'm feeling a bit tired today.",
  "I left my umbrella on the train.",
  "Thanks for the dinner yesterday!",
  "Let me know when you get home safely."
];

// App State
let currentMode = 'gossip';
let lastInput = '';
let currentOutput = '';

// DOM Elements
const userInput = document.getElementById('user-input');
const charNum = document.getElementById('char-num');
const translateBtn = document.getElementById('translate-btn');
const randomBtn = document.getElementById('random-btn');
const resultCard = document.getElementById('result-card');
const dramaBubble = document.getElementById('drama-bubble');
const dramaText = document.getElementById('drama-text');
const resultModeTag = document.getElementById('result-mode-tag');
const toxicSubtext = document.getElementById('toxic-subtext');
const meterBar = document.getElementById('meter-bar');
const dramaLevelText = document.getElementById('drama-level-text');
const twistBtn = document.getElementById('twist-btn');
const copyBtn = document.getElementById('copy-btn');
const copyText = document.getElementById('copy-text');
const copyIcon = document.getElementById('copy-icon');
const clearBtn = document.getElementById('clear-btn');
const toast = document.getElementById('toast');
const modeButtons = document.querySelectorAll('.mode-btn');
const promptChips = document.querySelectorAll('.prompt-chip');

// Initialize event listeners
function init() {
  // Mode selection
  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMode = btn.dataset.mode;
      
      // If result is already visible, re-translate into new mode
      if (!resultCard.classList.contains('hidden') && userInput.value.trim()) {
        generateTranslation();
      }
    });
  });

  // Prompt chips
  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      userInput.value = chip.dataset.sample;
      updateCharCount();
      generateTranslation();
    });
  });

  // Input events
  userInput.addEventListener('input', updateCharCount);
  userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      generateTranslation();
    }
  });

  // Action buttons
  translateBtn.addEventListener('click', generateTranslation);
  randomBtn.addEventListener('click', () => {
    const randomPick = RANDOM_SAMPLES[Math.floor(Math.random() * RANDOM_SAMPLES.length)];
    userInput.value = randomPick;
    updateCharCount();
    generateTranslation();
  });

  twistBtn.addEventListener('click', () => {
    // Add quick spin/pop animation to the bubble
    dramaBubble.style.transform = 'scale(0.96)';
    setTimeout(() => {
      generateTranslation(true);
      dramaBubble.style.transform = 'scale(1)';
    }, 120);
  });

  copyBtn.addEventListener('click', copyToClipboard);
  clearBtn.addEventListener('click', resetAll);
}

function updateCharCount() {
  charNum.textContent = userInput.value.length;
}

// Core Translation Logic
function generateTranslation(forceTwist = false) {
  const text = userInput.value.trim();
  if (!text) {
    userInput.focus();
    userInput.placeholder = "⚠️ Type something here first!";
    return;
  }

  lastInput = text;
  const engine = DRAMA_ENGINES[currentMode];
  const detectedCategory = detectKeywordCategory(text);

  let translation = "";

  // 40% chance of keyword rule if found, else template
  if (detectedCategory && engine.keywordRules[detectedCategory] && (Math.random() < 0.45 && !forceTwist)) {
    translation = engine.keywordRules[detectedCategory];
  } else {
    const templateIndex = Math.floor(Math.random() * engine.templates.length);
    translation = engine.templates[templateIndex](cleanInput(text));
  }

  // Randomize toxic subtext
  const randomSubtext = engine.subtextPrefixes[Math.floor(Math.random() * engine.subtextPrefixes.length)];
  
  // Randomize dramatic meter (80% - 100%)
  const percentage = Math.floor(Math.random() * 21) + 80;
  const labels = ["Maximum Petty", "Catastrophic Drama", "Unhinged Malice", "Hostile & Sassy", "Extremely Radioactive"];
  const randomLabel = labels[Math.floor(Math.random() * labels.length)];

  // Update UI
  currentOutput = translation;
  resultModeTag.textContent = engine.title;
  resultModeTag.style.color = engine.color;
  dramaBubble.style.borderColor = engine.color;
  
  dramaText.textContent = translation;
  toxicSubtext.textContent = randomSubtext;
  meterBar.style.width = `${percentage}%`;
  meterBar.style.background = `linear-gradient(90deg, #7928ca, ${engine.color})`;
  dramaLevelText.textContent = `${percentage}% — ${randomLabel}`;
  dramaLevelText.style.color = engine.color;

  // Reveal card with animation
  resultCard.classList.remove('hidden');
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function cleanInput(str) {
  // Remove wrapping quotes if user typed them
  return str.replace(/^["']|["']$/g, '');
}

// Copy to clipboard
function copyToClipboard() {
  if (!currentOutput) return;

  const fullShareText = `${currentOutput}\n\n(Translated maliciously via Malicious Translator 😈)`;
  navigator.clipboard.writeText(fullShareText).then(() => {
    copyText.textContent = "Copied!";
    copyIcon.textContent = "✅";
    showToast();

    setTimeout(() => {
      copyText.textContent = "Copy Drama";
      copyIcon.textContent = "📋";
    }, 2000);
  }).catch(() => {
    // Fallback
    showToast("Copy failed, please select text manually.");
  });
}

function showToast(msg = "Copied to clipboard! 💅") {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

function resetAll() {
  userInput.value = '';
  updateCharCount();
  resultCard.classList.add('hidden');
  currentOutput = '';
  userInput.focus();
}

// Start
document.addEventListener('DOMContentLoaded', init);
