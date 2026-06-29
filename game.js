const LEVELS = [
  {
    id: 1, name: 'Warm Up', multiplier: 1.0, timeLimit: null, wordCount: 20,
    desc: 'Simple short words. No time pressure.',
    unlockWpm: 0, unlockAccuracy: 0,
    words: [
      'the','and','for','are','but','not','you','all','can','had',
      'her','was','one','our','out','day','get','has','him','his',
      'how','its','may','new','now','old','see','way','who','boy',
      'did','let','put','say','she','too','use','big','end','far',
      'few','got','hot','job','key','lot','map','own','red','run'
    ]
  },
  {
    id: 2, name: 'Getting Faster', multiplier: 1.5, timeLimit: null, wordCount: 30,
    desc: 'Longer words. Try to beat the par time!',
    unlockWpm: 20, unlockAccuracy: 0, parTime: 60,
    words: [
      'bridge','planet','silver','frozen','castle','dragon','rocket','puzzle',
      'quantum','velvet','anchor','beacon','cipher','dagger','eclipse','falcon',
      'golden','harbor','ignite','jigsaw','kernel','lantern','mystic','nebula',
      'oracle','prism','quartz','riddle','sphinx','timber','unique','vertex',
      'walrus','zenith','blazer','cobalt','desert','ember','floral','guitar',
      'humble','ivory','jungle','knight','lumber','marble','nimble','opaque',
      'parcel','robust','saddle','temple','ultra','vivid','wander','yellow',
      'alpine','barrel','canvas','drapes','fennel','glacer','hunter','insect',
      'jovial','kettle','locket','muffin','nectar','offset','picnic','quiver',
      'rattle','script','travel','umpire','violet','wreath','export','fossil'
    ]
  },
  {
    id: 3, name: 'Real Text', multiplier: 2.0, timeLimit: 90, wordCount: 5,
    desc: 'Full sentences with punctuation.',
    unlockWpm: 30, unlockAccuracy: 0,
    sentences: [
      'The quick brown fox jumps over the lazy dog.',
      'She picked up the heavy box and carried it inside.',
      'A gentle breeze rustled through the autumn leaves.',
      'The train arrived exactly on time at the old station.',
      'He opened the door and stepped into the bright sunlight.',
      'Clouds gathered on the horizon as the wind picked up.',
      'The children laughed and played in the park all afternoon.',
      'She wrote a long letter to her friend across the sea.',
      'The mountain trail was steep, but the view was worth it.',
      'Rain began to fall softly on the dusty road ahead.',
      'The old clock tower chimed twelve times at midnight.',
      'Fresh coffee filled the kitchen with a warm, rich aroma.',
      'They drove for hours along the winding coastal highway.',
      'The garden was full of colorful flowers and busy bees.',
      'He solved the puzzle after thinking about it for days.'
    ]
  },
  {
    id: 4, name: 'Code Mode', multiplier: 3.0, timeLimit: 75, wordCount: 25,
    desc: 'Code snippets with special characters.',
    unlockWpm: 35, unlockAccuracy: 90,
    sentences: [
      'const data = JSON.parse(res);',
      'for (let i = 0; i < arr.length; i++)',
      'if (user && user.isActive)',
      'return { ...state, count: 0 };',
      'console.log("Hello, World!");',
      'function add(a, b) { return a + b; }',
      'const [x, y] = getCoords();',
      'arr.filter(item => item.id > 0)',
      'try { await fetch(url); } catch (e) {}',
      'export default class App {}',
      'Object.keys(obj).forEach(key => {})',
      'const result = a > b ? a : b;',
      'document.getElementById("app")',
      'switch (type) { case "A": break; }',
      'let sum = nums.reduce((a, b) => a + b, 0);',
      'const map = new Map();',
      'while (queue.length > 0) {}',
      'if (!Array.isArray(input)) return;',
      'const { name, age } = person;',
      'str.replace(/[^a-z]/g, "")',
      'Promise.all([p1, p2, p3])',
      'el.addEventListener("click", handler);',
      'module.exports = { parse };',
      'process.env.NODE_ENV === "production"',
      'db.query("SELECT * FROM users");',
      'import React, { useState } from "react";',
      'const fn = (x) => x * x;',
      'res.status(200).json({ ok: true });',
      'path.join(__dirname, "public")',
      'setTimeout(() => resolve(val), 100);'
    ]
  },
  {
    id: 5, name: 'TypeStrike Master', multiplier: 4.0, timeLimit: 60, wordCount: 8,
    desc: 'Mixed content. Symbols, numbers, chaos.',
    unlockWpm: 40, unlockAccuracy: 92,
    sentences: [
      'Order #38291 shipped to 742 Evergreen Terr. (ETA: 3-5 days).',
      'The GDP grew 2.7% in Q3, exceeding the $4.2B forecast!',
      'Set password: Xy$9mK@2pL (min. 12 chars, 1 symbol).',
      'Meeting at 3:45 PM in Room #204 — bring your laptop.',
      'Invoice total: $1,287.50 (tax: $98.13, shipping: $12.00).',
      'Email john@example.com & cc: 3 others by 5:00 PM today!',
      'Version 2.8.1-beta was released on 2024-03-15 (build #7042).',
      'The ratio of 7:3 yields ~70% accuracy at p < 0.05 level.',
      'File path: C:\\Users\\admin\\docs\\report_v3_final.pdf',
      'Run: npm install --save-dev @types/node@^18.0.0',
      'Lat: 40.7128 N, Long: 74.0060 W (New York City).',
      'Use CTRL+SHIFT+P to open the command palette quickly.',
      'The Wi-Fi password is: g0lD3n_$unR1se!2024',
      'Tickets: 2x Adult ($45), 1x Child ($22.50) = $112.50.',
      'API key: sk-abc123XYZ_789-test (expires 12/31/2025).'
    ]
  }
];

const ACHIEVEMENTS = [
  { id: 'first_game', name: 'First Steps', icon: '\u{1F476}', desc: 'Complete your first round' },
  { id: 'wpm_50', name: 'Speed Racer', icon: '\u{1F3CE}', desc: 'Reach 50 WPM' },
  { id: 'wpm_80', name: 'Velocity', icon: '\u{26A1}', desc: 'Reach 80 WPM' },
  { id: 'wpm_100', name: 'Light Speed', icon: '\u{1F680}', desc: 'Reach 100 WPM' },
  { id: 'perfect', name: 'Perfectionist', icon: '\u{1F4AF}', desc: 'Complete a round with 0 errors' },
  { id: 'accuracy_99', name: 'Sharpshooter', icon: '\u{1F3AF}', desc: '99%+ accuracy on any level' },
  { id: 'games_50', name: 'Marathon', icon: '\u{1F3C3}', desc: 'Play 50 total games' },
  { id: 'streak_20', name: 'Combo Master', icon: '\u{1F525}', desc: 'Hit a 20-word streak' },
  { id: 'code_clear', name: 'Code Monkey', icon: '\u{1F4BB}', desc: 'Complete Level 4' },
  { id: 'all_levels', name: 'Grandmaster', icon: '\u{1F451}', desc: 'Complete all 5 levels' },
  { id: 'score_5000', name: 'High Scorer', icon: '\u{2B50}', desc: 'Score 5000+ in a single round' },
  { id: 'games_100', name: 'Dedicated', icon: '\u{1F4AA}', desc: 'Play 100 total games' }
];

const SoundManager = {
  ctx: null,
  enabled: true,
  init() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
  },
  play(freq, type, duration, volume = 0.15) {
    if (!this.enabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = volume;
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
    osc.connect(gain).connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  },
  keystroke() { this.play(800, 'sine', 0.05); },
  error() { this.play(200, 'square', 0.08, 0.1); },
  wordComplete() {
    this.play(400, 'sine', 0.06);
    setTimeout(() => this.play(600, 'sine', 0.06), 40);
  },
  levelComplete() {
    [400, 500, 600, 800].forEach((f, i) => setTimeout(() => this.play(f, 'sine', 0.12), i * 80));
  },
  achievement() {
    [600, 800, 1000].forEach((f, i) => setTimeout(() => this.play(f, 'triangle', 0.15), i * 100));
  },
  countdown() { this.play(1000, 'sine', 0.05); }
};

class TypeStrikeGame {
  constructor() {
    this.state = this.freshState();
    this.timerInterval = null;
    this.currentLevel = 1;
    this.leaderboardTab = 1;
    this.bindElements();
    this.bindEvents();
    this.loadData();
    this.showScreen('screen-menu');
  }

  freshState() {
    return {
      words: [], chars: [], currentCharIndex: 0, totalChars: 0,
      correctChars: 0, errors: 0, streak: 0, maxStreak: 0,
      score: 0, startTime: null, elapsedMs: 0, isRunning: false,
      wordErrors: new Set(), currentWordIndex: 0
    };
  }

  bindElements() {
    this.screens = {};
    document.querySelectorAll('.screen').forEach(s => this.screens[s.id] = s);
    this.els = {
      wordDisplay: document.getElementById('word-display'),
      timer: document.getElementById('timer'),
      wpmLive: document.getElementById('wpm-live'),
      accuracyLive: document.getElementById('accuracy-live'),
      streakDisplay: document.getElementById('streak-display'),
      scoreLive: document.getElementById('score-live'),
      progressFill: document.getElementById('progress-fill'),
      countdownOverlay: document.getElementById('countdown-overlay'),
      countdownNumber: document.getElementById('countdown-number'),
      resultScore: document.getElementById('result-score'),
      resultWpm: document.getElementById('result-wpm'),
      resultAccuracy: document.getElementById('result-accuracy'),
      resultStreak: document.getElementById('result-streak'),
      resultErrors: document.getElementById('result-errors'),
      resultTime: document.getElementById('result-time'),
      resultLevel: document.getElementById('result-level'),
      bonusesList: document.getElementById('bonuses-list'),
      newRecord: document.getElementById('new-record'),
      nameEntry: document.getElementById('name-entry'),
      nameInput: document.getElementById('name-input'),
      leaderboardTabs: document.getElementById('leaderboard-tabs'),
      leaderboardTable: document.getElementById('leaderboard-table'),
      achievementsGrid: document.getElementById('achievements-grid'),
      statsContent: document.getElementById('stats-content'),
      levelCards: document.getElementById('level-cards'),
      muteBtn: document.getElementById('mute-btn'),
      gameHint: document.querySelector('.game-hint'),
      btnNextLevel: document.getElementById('btn-next-level')
    };
  }

  bindEvents() {
    document.getElementById('btn-play').onclick = () => this.showLevelSelect();
    document.getElementById('btn-leaderboard').onclick = () => this.showLeaderboard();
    document.getElementById('btn-achievements').onclick = () => this.showAchievements();
    document.getElementById('btn-stats').onclick = () => this.showStats();
    document.getElementById('btn-levels-back').onclick = () => this.showScreen('screen-menu');
    document.getElementById('btn-leaderboard-back').onclick = () => this.showScreen('screen-menu');
    document.getElementById('btn-achievements-back').onclick = () => this.showScreen('screen-menu');
    document.getElementById('btn-stats-back').onclick = () => this.showScreen('screen-menu');
    document.getElementById('btn-play-again').onclick = () => this.startLevel(this.currentLevel);
    document.getElementById('btn-next-level').onclick = () => {
      if (this.currentLevel < 5) this.startLevel(this.currentLevel + 1);
    };
    document.getElementById('btn-results-menu').onclick = () => this.showScreen('screen-menu');
    document.getElementById('btn-save-score').onclick = () => this.saveLeaderboardEntry();
    this.els.muteBtn.onclick = () => {
      SoundManager.enabled = !SoundManager.enabled;
      this.els.muteBtn.classList.toggle('muted', !SoundManager.enabled);
      this.els.muteBtn.innerHTML = SoundManager.enabled ? '\u{1F50A}' : '\u{1F507}';
    };

    document.addEventListener('keydown', (e) => this.handleKeydown(e));
    document.addEventListener('paste', (e) => {
      if (this.state.isRunning) e.preventDefault();
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state.isRunning) this.pauseTimer();
      else if (!document.hidden && this.state.isRunning) this.resumeTimer();
    });
  }

  loadData() {
    this.stats = JSON.parse(localStorage.getItem('typestrike_stats') || 'null') || {
      totalGames: 0, totalWords: 0, totalChars: 0, totalTime: 0,
      levels: { 1: {}, 2: {}, 3: {}, 4: {}, 5: {} }
    };
    this.leaderboard = JSON.parse(localStorage.getItem('typestrike_leaderboard') || 'null') || {
      1: [], 2: [], 3: [], 4: [], 5: []
    };
    this.unlockedAchievements = JSON.parse(localStorage.getItem('typestrike_achievements') || '[]');
    this.unlockedLevels = JSON.parse(localStorage.getItem('typestrike_unlocked') || '[1]');
  }

  saveData() {
    localStorage.setItem('typestrike_stats', JSON.stringify(this.stats));
    localStorage.setItem('typestrike_leaderboard', JSON.stringify(this.leaderboard));
    localStorage.setItem('typestrike_achievements', JSON.stringify(this.unlockedAchievements));
    localStorage.setItem('typestrike_unlocked', JSON.stringify(this.unlockedLevels));
  }

  showScreen(id) {
    Object.values(this.screens).forEach(s => s.classList.remove('active'));
    const target = this.screens[id];
    if (target) {
      target.classList.add('active');
      target.offsetHeight;
    }
  }

  showLevelSelect() {
    this.renderLevelCards();
    this.showScreen('screen-levels');
  }

  renderLevelCards() {
    this.els.levelCards.innerHTML = LEVELS.map(lv => {
      const unlocked = this.unlockedLevels.includes(lv.id);
      const best = this.stats.levels[lv.id];
      const stars = this.getStars(lv.id, best);
      return `
        <div class="level-card ${unlocked ? '' : 'locked'}" data-level="${lv.id}">
          ${!unlocked ? '<span class="lock-icon">\u{1F512}</span>' : ''}
          <div class="level-number">Level ${lv.id}</div>
          <div class="level-name">${lv.name}</div>
          <div class="level-desc">${lv.desc}</div>
          <div class="level-meta">
            ${lv.timeLimit ? lv.timeLimit + 's time limit' : 'No time limit'}
            &middot; ${lv.multiplier}x multiplier
          </div>
          ${best && best.bestWpm ? `<div class="level-best">Best: ${best.bestWpm} WPM / ${best.bestScore} pts</div>` : ''}
          <div class="level-stars">${stars}</div>
          ${!unlocked ? `<div class="level-meta" style="margin-top:4px;color:var(--accent)">Requires ${lv.unlockWpm}+ WPM${lv.unlockAccuracy ? ' & ' + lv.unlockAccuracy + '%+ acc' : ''} on Level ${lv.id - 1}</div>` : ''}
        </div>`;
    }).join('');

    this.els.levelCards.querySelectorAll('.level-card:not(.locked)').forEach(card => {
      card.onclick = () => this.startLevel(parseInt(card.dataset.level));
    });
  }

  getStars(levelId, best) {
    if (!best || !best.bestWpm) return '☆☆☆';
    const lv = LEVELS[levelId - 1];
    let s = 0;
    if (best.bestWpm >= (lv.unlockWpm || 10)) s++;
    if (best.bestWpm >= (lv.unlockWpm || 10) * 1.5) s++;
    if (best.bestAccuracy >= 95) s++;
    return '★'.repeat(s) + '☆'.repeat(3 - s);
  }

  startLevel(levelId) {
    SoundManager.init();
    this.currentLevel = levelId;
    const lv = LEVELS[levelId - 1];
    this.state = this.freshState();

    if (lv.sentences) {
      const shuffled = [...lv.sentences].sort(() => Math.random() - 0.5);
      this.state.words = shuffled.slice(0, lv.wordCount);
    } else {
      const shuffled = [...lv.words].sort(() => Math.random() - 0.5);
      this.state.words = shuffled.slice(0, lv.wordCount);
    }

    this.buildChars();
    this.renderWordDisplay();
    this.updateGameUI();
    this.showScreen('screen-game');
    this.els.gameHint.textContent = 'Get ready...';
    this.runCountdown();
  }

  buildChars() {
    this.state.chars = [];
    const words = this.state.words;
    for (let w = 0; w < words.length; w++) {
      for (let c = 0; c < words[w].length; c++) {
        this.state.chars.push({ ch: words[w][c], wordIndex: w, status: 'upcoming' });
      }
      if (w < words.length - 1) {
        this.state.chars.push({ ch: ' ', wordIndex: w, status: 'upcoming', isSpace: true });
      }
    }
    this.state.totalChars = this.state.chars.length;
  }

  renderWordDisplay() {
    this.els.wordDisplay.innerHTML = this.state.chars.map((c, i) => {
      const cls = i === 0 ? 'char char-current' : 'char char-upcoming';
      if (c.isSpace) return `<span class="${cls}" data-i="${i}">&nbsp;</span>`;
      return `<span class="${cls}" data-i="${i}">${this.escapeHtml(c.ch)}</span>`;
    }).join('');
    this.charEls = this.els.wordDisplay.querySelectorAll('.char');
  }

  escapeHtml(ch) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return map[ch] || ch;
  }

  runCountdown() {
    this.els.countdownOverlay.classList.remove('hidden');
    let count = 3;
    this.els.countdownNumber.textContent = count;
    SoundManager.countdown();
    const interval = setInterval(() => {
      count--;
      if (count > 0) {
        this.els.countdownNumber.textContent = count;
        this.els.countdownNumber.style.animation = 'none';
        this.els.countdownNumber.offsetHeight;
        this.els.countdownNumber.style.animation = '';
        SoundManager.countdown();
      } else {
        clearInterval(interval);
        this.els.countdownOverlay.classList.add('hidden');
        this.els.gameHint.textContent = 'Type now!';
        this.state.isRunning = true;
        this.state.startTime = performance.now();
        this.startTimer();
      }
    }, 700);
  }

  startTimer() {
    const lv = LEVELS[this.currentLevel - 1];
    this.timerInterval = setInterval(() => {
      if (!this.state.isRunning) return;
      this.state.elapsedMs = performance.now() - this.state.startTime;
      const secs = Math.floor(this.state.elapsedMs / 1000);
      if (lv.timeLimit) {
        const remaining = Math.max(0, lv.timeLimit - secs);
        this.els.timer.textContent = this.formatTime(remaining);
        if (remaining <= 0) this.endGame();
      } else {
        this.els.timer.textContent = this.formatTime(secs);
      }
      this.updateLiveStats();
    }, 100);
  }

  pauseTimer() { this.pausedAt = performance.now(); }
  resumeTimer() {
    if (this.pausedAt) {
      this.state.startTime += performance.now() - this.pausedAt;
      this.pausedAt = null;
    }
  }

  formatTime(totalSecs) {
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  }

  handleKeydown(e) {
    if (!this.state.isRunning) return;
    if (e.ctrlKey || e.altKey || e.metaKey) return;

    const idx = this.state.currentCharIndex;

    if (e.key === 'Backspace') {
      e.preventDefault();
      if (idx > 0) {
        const prev = idx - 1;
        this.state.chars[prev].status = 'upcoming';
        this.charEls[prev].className = 'char char-upcoming';
        this.charEls[idx].className = 'char char-upcoming';
        this.charEls[prev].className = 'char char-current';
        this.state.currentCharIndex = prev;
        if (this.state.chars[prev].wordIndex < this.state.currentWordIndex) {
          this.state.currentWordIndex = this.state.chars[prev].wordIndex;
        }
      }
      return;
    }

    if (e.key.length !== 1) return;
    e.preventDefault();

    if (idx >= this.state.chars.length) return;

    const expected = this.state.chars[idx].ch;
    const typed = e.key;

    if (typed === expected) {
      this.state.chars[idx].status = 'correct';
      this.charEls[idx].className = 'char char-correct';
      this.state.correctChars++;
      SoundManager.keystroke();

      const wasLastCharOfWord = idx + 1 >= this.state.chars.length ||
        this.state.chars[idx + 1].wordIndex !== this.state.chars[idx].wordIndex ||
        this.state.chars[idx + 1].isSpace;

      if (this.state.chars[idx].isSpace || (wasLastCharOfWord && !this.state.chars[idx].isSpace)) {
        if (!this.state.chars[idx].isSpace) {
          if (!this.state.wordErrors.has(this.state.currentWordIndex)) {
            this.state.streak++;
            if (this.state.streak > this.state.maxStreak) this.state.maxStreak = this.state.streak;
          } else {
            this.state.streak = 0;
          }
          this.addWordScore(this.state.currentWordIndex);
          this.state.currentWordIndex++;
          SoundManager.wordComplete();
        }
      }
    } else {
      this.state.chars[idx].status = 'error';
      this.charEls[idx].className = 'char char-error';
      this.state.errors++;
      this.state.wordErrors.add(this.state.chars[idx].wordIndex);
      SoundManager.error();
      return;
    }

    this.state.currentCharIndex = idx + 1;
    if (idx + 1 < this.state.chars.length) {
      this.charEls[idx + 1].className = 'char char-current';
    }

    this.updateProgress();
    this.updateLiveStats();
    this.scrollWordDisplay();

    if (this.state.currentCharIndex >= this.state.chars.length) {
      this.endGame();
    }
  }

  addWordScore(wordIndex) {
    const word = this.state.words[wordIndex];
    const lv = LEVELS[this.currentLevel - 1];
    const charCount = word.length;
    const accuracyMult = this.state.wordErrors.has(wordIndex) ? 0.5 : 1.0;
    const streakMult = Math.min(3.0, 1 + this.state.streak * 0.1);
    const score = Math.round(charCount * accuracyMult * streakMult * lv.multiplier);
    this.state.score += score;
  }

  updateProgress() {
    const pct = (this.state.currentCharIndex / this.state.totalChars) * 100;
    this.els.progressFill.style.width = pct + '%';
  }

  updateLiveStats() {
    const elapsed = this.state.elapsedMs / 1000;
    if (elapsed >= 5) {
      const wpm = Math.round((this.state.correctChars / 5) / (elapsed / 60));
      this.els.wpmLive.textContent = wpm;
    }
    const total = this.state.correctChars + this.state.errors;
    const acc = total > 0 ? Math.round((this.state.correctChars / total) * 100) : 100;
    this.els.accuracyLive.textContent = acc + '%';
    this.els.streakDisplay.textContent = this.state.streak;
    this.els.scoreLive.textContent = this.state.score;

    if (this.state.streak >= 5) {
      this.els.streakDisplay.classList.add('streak-fire');
    } else {
      this.els.streakDisplay.classList.remove('streak-fire');
    }
  }

  updateGameUI() {
    this.els.timer.textContent = '0:00';
    this.els.wpmLive.textContent = '---';
    this.els.accuracyLive.textContent = '100%';
    this.els.streakDisplay.textContent = '0';
    this.els.scoreLive.textContent = '0';
    this.els.progressFill.style.width = '0%';
  }

  scrollWordDisplay() {
    const currentEl = this.charEls[this.state.currentCharIndex];
    if (currentEl) {
      const container = this.els.wordDisplay;
      const elTop = currentEl.offsetTop;
      const containerH = container.clientHeight;
      if (elTop > container.scrollTop + containerH - 60) {
        container.scrollTop = elTop - 60;
      }
    }
  }

  endGame() {
    this.state.isRunning = false;
    clearInterval(this.timerInterval);
    SoundManager.levelComplete();

    const elapsed = this.state.elapsedMs / 1000;
    const wpm = elapsed > 0 ? Math.round((this.state.correctChars / 5) / (elapsed / 60)) : 0;
    const total = this.state.correctChars + this.state.errors;
    const accuracy = total > 0 ? Math.round((this.state.correctChars / total) * 100) : 100;
    const lv = LEVELS[this.currentLevel - 1];

    const bonuses = [];
    if (wpm >= 60) { this.state.score += 500; bonuses.push({ name: 'Speed Demon (60+ WPM)', pts: 500 }); }
    if (accuracy >= 98) { this.state.score += 300; bonuses.push({ name: 'Sharpshooter (98%+ acc)', pts: 300 }); }
    if (this.state.errors === 0) { this.state.score += 1000; bonuses.push({ name: 'Perfect Round', pts: 1000 }); }
    if (this.state.maxStreak >= 15) { this.state.score += 200; bonuses.push({ name: 'Combo King (15+ streak)', pts: 200 }); }
    if (lv.timeLimit) {
      const remaining = Math.max(0, lv.timeLimit - Math.floor(elapsed));
      if (remaining > 0) {
        const timeBonus = remaining * 10;
        this.state.score += timeBonus;
        bonuses.push({ name: `Time Left (${remaining}s)`, pts: timeBonus });
      }
    }

    this.els.resultScore.textContent = this.state.score;
    this.els.resultWpm.textContent = wpm;
    this.els.resultAccuracy.textContent = accuracy + '%';
    this.els.resultStreak.textContent = this.state.maxStreak;
    this.els.resultErrors.textContent = this.state.errors;
    this.els.resultTime.textContent = this.formatTime(Math.floor(elapsed));
    this.els.resultLevel.textContent = lv.name;

    this.els.bonusesList.innerHTML = bonuses.map((b, i) =>
      `<div class="bonus-item" style="animation-delay:${0.7 + i * 0.15}s">
        <span>${b.name}</span><span class="bonus-points">+${b.pts}</span>
      </div>`
    ).join('');

    this.updateStats(wpm, accuracy, elapsed);
    this.checkUnlocks(wpm, accuracy);
    this.checkAchievements(wpm, accuracy);
    this.checkLeaderboard(wpm, accuracy);

    const nextLv = this.currentLevel + 1;
    this.els.btnNextLevel.style.display = (nextLv <= 5 && this.unlockedLevels.includes(nextLv)) ? '' : 'none';

    this.showScreen('screen-results');
  }

  updateStats(wpm, accuracy, elapsed) {
    this.stats.totalGames++;
    this.stats.totalWords += this.state.words.length;
    this.stats.totalChars += this.state.correctChars;
    this.stats.totalTime += elapsed;

    const lvStats = this.stats.levels[this.currentLevel];
    if (!lvStats.bestWpm || wpm > lvStats.bestWpm) lvStats.bestWpm = wpm;
    if (!lvStats.bestAccuracy || accuracy > lvStats.bestAccuracy) lvStats.bestAccuracy = accuracy;
    if (!lvStats.bestScore || this.state.score > lvStats.bestScore) {
      lvStats.bestScore = this.state.score;
      this.els.newRecord.classList.remove('hidden');
    } else {
      this.els.newRecord.classList.add('hidden');
    }
    lvStats.gamesPlayed = (lvStats.gamesPlayed || 0) + 1;

    this.saveData();
  }

  checkUnlocks(wpm, accuracy) {
    for (let i = 1; i < LEVELS.length; i++) {
      const nextLv = LEVELS[i];
      if (!this.unlockedLevels.includes(nextLv.id)) {
        const prevBest = this.stats.levels[nextLv.id - 1];
        if (prevBest && prevBest.bestWpm >= nextLv.unlockWpm &&
            (!nextLv.unlockAccuracy || prevBest.bestAccuracy >= nextLv.unlockAccuracy)) {
          this.unlockedLevels.push(nextLv.id);
          this.showToast('\u{1F513}', `Level ${nextLv.id} Unlocked!`, nextLv.name);
        }
      }
    }
    this.saveData();
  }

  checkAchievements(wpm, accuracy) {
    const checks = [
      { id: 'first_game', cond: () => true },
      { id: 'wpm_50', cond: () => wpm >= 50 },
      { id: 'wpm_80', cond: () => wpm >= 80 },
      { id: 'wpm_100', cond: () => wpm >= 100 },
      { id: 'perfect', cond: () => this.state.errors === 0 },
      { id: 'accuracy_99', cond: () => accuracy >= 99 },
      { id: 'games_50', cond: () => this.stats.totalGames >= 50 },
      { id: 'streak_20', cond: () => this.state.maxStreak >= 20 },
      { id: 'code_clear', cond: () => this.currentLevel >= 4 },
      { id: 'all_levels', cond: () => {
        return [1,2,3,4,5].every(l => this.stats.levels[l] && this.stats.levels[l].gamesPlayed > 0);
      }},
      { id: 'score_5000', cond: () => this.state.score >= 5000 },
      { id: 'games_100', cond: () => this.stats.totalGames >= 100 }
    ];

    for (const check of checks) {
      if (!this.unlockedAchievements.includes(check.id) && check.cond()) {
        this.unlockedAchievements.push(check.id);
        const ach = ACHIEVEMENTS.find(a => a.id === check.id);
        if (ach) {
          SoundManager.achievement();
          this.showToast(ach.icon, ach.name, ach.desc);
        }
      }
    }
    this.saveData();
  }

  checkLeaderboard(wpm, accuracy) {
    const board = this.leaderboard[this.currentLevel];
    const qualifies = board.length < 10 || this.state.score > (board[board.length - 1]?.score || 0);
    if (qualifies) {
      this.els.nameEntry.classList.remove('hidden');
      this.els.nameInput.value = '';
      this.els.nameInput.focus();
      this.pendingLeaderboardEntry = { wpm, accuracy };
    } else {
      this.els.nameEntry.classList.add('hidden');
    }
  }

  saveLeaderboardEntry() {
    const name = (this.els.nameInput.value || 'AAA').toUpperCase().slice(0, 3).padEnd(3, 'A');
    const entry = {
      name,
      score: this.state.score,
      wpm: this.pendingLeaderboardEntry.wpm,
      accuracy: this.pendingLeaderboardEntry.accuracy,
      date: new Date().toLocaleDateString()
    };
    const board = this.leaderboard[this.currentLevel];
    board.push(entry);
    board.sort((a, b) => b.score - a.score);
    if (board.length > 10) board.length = 10;
    this.saveData();
    this.els.nameEntry.classList.add('hidden');
    this.showToast('\u{1F3C6}', 'Score Saved!', `${name} — ${entry.score} pts`);
  }

  showLeaderboard() {
    this.renderLeaderboardTabs();
    this.renderLeaderboardTable(this.leaderboardTab);
    this.showScreen('screen-leaderboard');
  }

  renderLeaderboardTabs() {
    this.els.leaderboardTabs.innerHTML = LEVELS.map(lv =>
      `<button class="level-tab ${lv.id === this.leaderboardTab ? 'active' : ''}" data-level="${lv.id}">Lv ${lv.id}</button>`
    ).join('');
    this.els.leaderboardTabs.querySelectorAll('.level-tab').forEach(tab => {
      tab.onclick = () => {
        this.leaderboardTab = parseInt(tab.dataset.level);
        this.renderLeaderboardTabs();
        this.renderLeaderboardTable(this.leaderboardTab);
      };
    });
  }

  renderLeaderboardTable(level) {
    const board = this.leaderboard[level] || [];
    if (!board.length) {
      this.els.leaderboardTable.innerHTML = '<div class="lb-empty">No scores yet. Be the first!</div>';
      return;
    }
    let html = '<div class="lb-row lb-header"><span>#</span><span>Name</span><span>Date</span><span>WPM</span><span>Score</span></div>';
    html += board.map((e, i) => {
      const rankClass = i < 3 ? ` lb-rank-${i + 1}` : '';
      return `<div class="lb-row">
        <span class="lb-rank${rankClass}">${i + 1}</span>
        <span>${e.name}</span><span>${e.date}</span>
        <span>${e.wpm}</span><span>${e.score}</span>
      </div>`;
    }).join('');
    this.els.leaderboardTable.innerHTML = html;
  }

  showAchievements() {
    this.els.achievementsGrid.innerHTML = ACHIEVEMENTS.map(a => {
      const unlocked = this.unlockedAchievements.includes(a.id);
      return `<div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
        <div class="achievement-icon">${unlocked ? a.icon : '\u{1F512}'}</div>
        <div class="achievement-name">${unlocked ? a.name : '???'}</div>
        <div class="achievement-desc">${unlocked ? a.desc : 'Keep playing to unlock!'}</div>
      </div>`;
    }).join('');
    this.showScreen('screen-achievements');
  }

  showStats() {
    const s = this.stats;
    const avgWpm = s.totalTime > 0 ? Math.round((s.totalChars / 5) / (s.totalTime / 60)) : 0;
    let html = `
      <div class="stats-section">
        <h3>Overall</h3>
        <div class="stats-grid">
          <div class="stat-card"><div class="stat-card-value">${s.totalGames}</div><div class="stat-card-label">Games Played</div></div>
          <div class="stat-card"><div class="stat-card-value">${s.totalWords}</div><div class="stat-card-label">Words Typed</div></div>
          <div class="stat-card"><div class="stat-card-value">${s.totalChars}</div><div class="stat-card-label">Characters</div></div>
          <div class="stat-card"><div class="stat-card-value">${avgWpm}</div><div class="stat-card-label">Average WPM</div></div>
          <div class="stat-card"><div class="stat-card-value">${this.formatTime(Math.floor(s.totalTime))}</div><div class="stat-card-label">Total Time</div></div>
          <div class="stat-card"><div class="stat-card-value">${this.unlockedAchievements.length}/${ACHIEVEMENTS.length}</div><div class="stat-card-label">Achievements</div></div>
        </div>
      </div>`;
    for (let i = 1; i <= 5; i++) {
      const lv = this.stats.levels[i];
      if (lv && lv.gamesPlayed) {
        html += `
          <div class="stats-section">
            <h3>Level ${i} — ${LEVELS[i - 1].name}</h3>
            <div class="stats-grid">
              <div class="stat-card"><div class="stat-card-value">${lv.gamesPlayed}</div><div class="stat-card-label">Games</div></div>
              <div class="stat-card"><div class="stat-card-value">${lv.bestWpm || 0}</div><div class="stat-card-label">Best WPM</div></div>
              <div class="stat-card"><div class="stat-card-value">${lv.bestAccuracy || 0}%</div><div class="stat-card-label">Best Accuracy</div></div>
              <div class="stat-card"><div class="stat-card-value">${lv.bestScore || 0}</div><div class="stat-card-label">Best Score</div></div>
            </div>
          </div>`;
      }
    }
    this.els.statsContent.innerHTML = html;
    this.showScreen('screen-stats');
  }

  showToast(icon, title, desc) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<div class="toast-icon">${icon}</div><div class="toast-title">${title}</div><div class="toast-desc">${desc}</div>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
  }
}

new TypeStrikeGame();
