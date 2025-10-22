const screens = document.querySelectorAll('.app-screen');
const navButtons = document.querySelectorAll('.nav-item');
const bottomNav = document.querySelector('.bottom-nav');
const logActionCTA = document.getElementById('logActionCTA');
const openImpactButton = document.getElementById('openImpactButton');
const scoreValue = document.getElementById('scoreValue');
const scoreBadgesPreview = document.getElementById('scoreBadgesPreview');
const recentTimeline = document.getElementById('recentTimeline');
const actionGrid = document.getElementById('actionGrid');
const actionModal = document.getElementById('actionModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const modalPoints = document.getElementById('modalPoints');
const modalDescription = document.getElementById('modalDescription');
const modalBody = document.getElementById('modalBody');
const modalFooter = document.getElementById('modalFooter');
const closeModalButton = document.getElementById('closeModalButton');
const toast = document.getElementById('toast');
const confettiLayer = document.getElementById('confettiLayer');
const impactScore = document.getElementById('impactScore');
const impactCarbon = document.getElementById('impactCarbon');
const impactEntries = document.getElementById('impactEntries');
const badgeCollection = document.getElementById('badgeCollection');
const fullTimeline = document.getElementById('fullTimeline');
const filterChips = document.querySelectorAll('.filter-chip');
const categoryCards = document.querySelectorAll('.category-card');

let currentFilter = 'all';

const behaviors = [
  {
    id: 'mindful-dining-clean-plate',
    category: 'consumption',
    title: 'Clean plate check-in',
    description: 'Finish your meal without leftovers and log the win.',
    points: 15,
    type: 'checkin',
    affirmation: 'Thanks for leaving no leftovers!'
  },
  {
    id: 'mindful-dining-low-carbon',
    category: 'consumption',
    title: 'Low-carbon meal',
    description: 'Choose vegetarian or local dishes and share a quick photo.',
    points: 18,
    type: 'upload',
    uploadHint: 'JPG or PNG, up to 5 MB.'
  },
  {
    id: 'byo-container',
    category: 'consumption',
    title: 'Bring your own container',
    description: 'Use your own cup or container and snap a receipt or photo.',
    points: 20,
    type: 'upload'
  },
  {
    id: 'sustainable-souvenir',
    category: 'consumption',
    title: 'Eco souvenir',
    description: 'Buy an eco souvenir and upload the receipt.',
    points: 16,
    type: 'upload'
  },
  {
    id: 'e-receipt',
    category: 'consumption',
    title: 'E-receipt',
    description: 'Opt for an e-receipt and upload a quick screenshot.',
    points: 10,
    type: 'upload',
    uploadHint: 'No real file needed—feel free to upload a mock image.'
  },
  {
    id: 'no-disposable',
    category: 'consumption',
    title: 'Skip single-use items',
    description: 'Say no to disposable straws or stirrers and log the choice.',
    points: 12,
    type: 'checkin',
    affirmation: 'Small refusal, big impact.'
  },
  {
    id: 'paper-saving',
    category: 'consumption',
    title: 'Save paper',
    description: 'Use a dryer instead of paper towels and check in.',
    points: 12,
    type: 'checkin',
    affirmation: 'Dry hands, happy forests.'
  },
  {
    id: 'rvm-recycle',
    category: 'recycling',
    title: 'Reverse vending machine',
    description: 'Recycle with an RVM and upload a screen showing your points.',
    points: 20,
    type: 'upload'
  },
  {
    id: 'unire-recycle',
    category: 'recycling',
    title: 'Mixed recyclables',
    description: 'Sort items into UniRe® bins and upload a quick photo.',
    points: 18,
    type: 'upload'
  },
  {
    id: 'water-refill',
    category: 'recycling',
    title: 'Bottle refill',
    description: 'Top up your bottle at a fountain and check in.',
    points: 14,
    type: 'checkin',
    affirmation: 'Every refill protects our blue planet.'
  },
  {
    id: 'green-landmark-tour',
    category: 'exploration',
    title: 'Green landmark tour',
    description: 'Visit a spot on the GreenMap@PolyU and check in with a photo.',
    points: 18,
    type: 'upload',
    uploadHint: 'Snap the landmark or signage to log this tour.'
  },
  {
    id: 'sustainability-quiz',
    category: 'exploration',
    title: 'Sustainability quiz',
    description: 'Answer a quick question about PolyU green facilities.',
    points: 12,
    type: 'checkin',
    affirmation: 'Nice! Your eco knowledge just levelled up.'
  },
  {
    id: 'share-green-story',
    category: 'exploration',
    title: 'Share your green story',
    description: 'Post your PolyU green actions online and log the share.',
    points: 16,
    type: 'upload',
    uploadHint: 'Upload a screenshot link or add a quick note for proof.'
  },
  {
    id: 'invite-friends',
    category: 'exploration',
    title: 'Invite a friend',
    description: 'Encourage a friend to join and share your badge or points.',
    points: 10,
    type: 'checkin',
    affirmation: 'Sharing green vibes sparks bigger change.'
  }
];

const badgeBlueprints = [
  {
    id: 'starter',
    name: 'Green Newcomer',
    requirement: { points: 20 },
    icon: '🌱',
    description: 'Earn your first green points and begin your journey.'
  },
  {
    id: 'foodie',
    name: 'Low-carbon Diner',
    requirement: { category: 'consumption', count: 3 },
    icon: '🥗',
    description: 'Complete 3 consumption & waste reduction actions.'
  },
  {
    id: 'recycler',
    name: 'Recycler',
    requirement: { category: 'recycling', count: 3 },
    icon: '♻️',
    description: 'Record 3 recycling actions.'
  },
  {
    id: 'water-hero',
    name: 'Water Saver',
    requirement: { behaviorId: 'water-refill', count: 2 },
    icon: '💧',
    description: 'Refill your bottle twice at a drinking fountain.'
  },
  {
    id: 'legend',
    name: 'Legend',
    requirement: { points: 120 },
    icon: '🏆',
    description: 'Accumulate 120 points to unlock the legend badge.'
  }
];

const userState = {
  points: 65,
  history: [
    {
      id: crypto.randomUUID(),
      behaviorId: 'green-landmark-tour',
      title: 'Explored the rooftop green farm',
      points: 18,
      timestamp: Date.now() - 1000 * 60 * 45,
      evidenceType: 'upload'
    },
    {
      id: crypto.randomUUID(),
      behaviorId: 'rvm-recycle',
      title: 'Recycled 3 plastic bottles at RVM',
      points: 20,
      timestamp: Date.now() - 1000 * 60 * 60 * 6,
      evidenceType: 'upload'
    },
    {
      id: crypto.randomUUID(),
      behaviorId: 'mindful-dining-clean-plate',
    title: 'Lunchtime clean plate challenge completed',
      points: 15,
      timestamp: Date.now() - 1000 * 60 * 60 * 20,
      evidenceType: 'checkin'
    },
    {
      id: crypto.randomUUID(),
      behaviorId: 'no-disposable',
    title: 'Refused single-use straw',
      points: 12,
      timestamp: Date.now() - 1000 * 60 * 60 * 30,
      evidenceType: 'checkin'
    }
  ],
  unlockedBadges: new Set(['starter'])
};

function init() {
  renderNav('home');
  applyFilter('all');
  updateScore();
  updateTimeline();
  updateImpact();
  updateBadges();
  attachEvents();
  feather.replace();
}

function renderNav(targetScreen) {
  screens.forEach((screen) => {
    screen.classList.toggle('active', screen.dataset.screen === targetScreen);
  });

  navButtons.forEach((btn) => {
    const isActive = btn.dataset.nav === targetScreen;
    btn.classList.toggle('active', isActive);
  });
}

function renderActionCards(filter = currentFilter) {
  currentFilter = filter;
  actionGrid.innerHTML = '';
  const filtered = behaviors.filter((behavior) => currentFilter === 'all' || behavior.category === currentFilter);

  if (filtered.length === 0) {
    actionGrid.innerHTML = '<p class="empty-state">No tasks found in this category yet. Stay tuned.</p>';
    return;
  }

  filtered.forEach((behavior) => {
    const card = document.createElement('article');
    card.className = 'action-card';
    card.dataset.behaviorId = behavior.id;
    card.dataset.category = behavior.category;
    card.dataset.type = behavior.type;

    card.innerHTML = `
      <div class="card-icon"><i data-feather="${behavior.type === 'upload' ? 'upload' : 'check-circle'}"></i></div>
      <div>
        <h3 class="card-title">${behavior.title}</h3>
        <p class="card-copy">${behavior.description}</p>
      </div>
      <div class="card-meta">
        <span class="points">+${behavior.points} pts</span>
        <span class="card-mode">${behavior.type === 'upload' ? 'Upload proof' : 'Honest check-in'}</span>
      </div>
    `;

    actionGrid.appendChild(card);
  });

  feather.replace();
}

function applyFilter(filter) {
  currentFilter = filter;
  filterChips.forEach((chip) => {
    chip.classList.toggle('active', chip.dataset.filter === filter);
  });
  renderActionCards(filter);
}

function updateScore() {
  scoreValue.textContent = userState.points;
  impactScore.textContent = userState.points;
  renderBadgePreview();
}

function renderBadgePreview() {
  scoreBadgesPreview.innerHTML = '';
  const previewBadges = Array.from(userState.unlockedBadges).slice(-2);
  if (previewBadges.length === 0) {
    const span = document.createElement('span');
    span.className = 'badge-chip';
    span.textContent = 'No badges unlocked yet';
    scoreBadgesPreview.appendChild(span);
    return;
  }

  previewBadges.forEach((badgeId) => {
    const badge = badgeBlueprints.find((b) => b.id === badgeId);
    if (!badge) return;
    const chip = document.createElement('span');
    chip.className = 'badge-chip';
    chip.innerHTML = `${badge.icon} ${badge.name}`;
    scoreBadgesPreview.appendChild(chip);
  });
}

function updateTimeline() {
  const sorted = [...userState.history].sort((a, b) => b.timestamp - a.timestamp);
  const recent = sorted.slice(0, 3);

  recentTimeline.innerHTML = '';
  if (recent.length === 0) {
    recentTimeline.innerHTML = '<li class="empty-state">No records yet — complete your first green action!</li>';
  } else {
    recent.forEach((entry) => {
      const li = document.createElement('li');
      li.className = 'timeline-item';
      li.innerHTML = `
        <p class="timeline-title">${entry.title}</p>
    <p class="timeline-meta">+${entry.points} pts · ${formatRelativeTime(entry.timestamp)}</p>
      `;
      recentTimeline.appendChild(li);
    });
  }

  fullTimeline.innerHTML = '';
  if (sorted.length === 0) {
    fullTimeline.innerHTML = '<li class="empty-state">No records yet</li>';
  } else {
    sorted.forEach((entry) => {
      const behavior = behaviors.find((b) => b.id === entry.behaviorId);
      const li = document.createElement('li');
      li.className = 'timeline-item';
      li.innerHTML = `
        <p class="timeline-title">${entry.title}</p>
        <p class="timeline-description">From: ${behavior ? behavior.title : 'Green action'}</p>
        <p class="timeline-meta">+${entry.points} pts · ${new Date(entry.timestamp).toLocaleString()}</p>
      `;
      fullTimeline.appendChild(li);
    });
  }
}

function updateImpact() {
  impactEntries.textContent = userState.history.length;
  const estimatedCarbon = Math.round(userState.points * 2.7);
  impactCarbon.textContent = `${estimatedCarbon} g`;
}

function updateBadges() {
  badgeCollection.innerHTML = '';
  badgeBlueprints.forEach((badge) => {
    const unlocked = userState.unlockedBadges.has(badge.id) || checkBadgeUnlock(badge);
    if (unlocked) {
      userState.unlockedBadges.add(badge.id);
    }

    const card = document.createElement('article');
    card.className = `badge-card ${unlocked ? 'unlocked' : 'locked'}`;
    card.innerHTML = `
      <div class="badge-icon">${badge.icon}</div>
      <div>
        <p class="font-semibold">${badge.name}</p>
        <p class="text-sm text-slate-500">${badge.description}</p>
      </div>
    `;
    badgeCollection.appendChild(card);
  });

  renderBadgePreview();
}

function checkBadgeUnlock(badge) {
  if (badge.requirement.points) {
    return userState.points >= badge.requirement.points;
  }
  if (badge.requirement.category) {
    const count = userState.history.filter((entry) => behaviors.find((b) => b.id === entry.behaviorId)?.category === badge.requirement.category).length;
    return count >= badge.requirement.count;
  }
  if (badge.requirement.behaviorId) {
    const count = userState.history.filter((entry) => entry.behaviorId === badge.requirement.behaviorId).length;
    return count >= badge.requirement.count;
  }
  return false;
}

function attachEvents() {
  navButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.nav;
      if (target === 'log') {
        renderNav('log');
        applyFilter(currentFilter);
      } else if (target === 'impact') {
        renderNav('impact');
      } else {
        renderNav('home');
      }
    });
  });

  logActionCTA.addEventListener('click', () => {
    renderNav('log');
    applyFilter('all');
  });

  openImpactButton.addEventListener('click', () => {
    renderNav('impact');
  });

  bottomNav.querySelectorAll('[data-nav="log"]').forEach((btn) => btn.addEventListener('click', () => renderNav('log')));

  document.querySelectorAll('[data-nav="back"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      renderNav('home');
    });
  });

  document.querySelectorAll('[data-nav="impact"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      renderNav('impact');
    });
  });

  actionGrid.addEventListener('click', (event) => {
    const card = event.target.closest('.action-card');
    if (!card) return;
    const behavior = behaviors.find((item) => item.id === card.dataset.behaviorId);
    if (!behavior) return;
    openBehaviorModal(behavior);
  });

  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      applyFilter(chip.dataset.filter);
    });
  });

  categoryCards.forEach((card) => {
    card.addEventListener('click', () => {
      const targetCategory = card.dataset.category ?? 'all';
      renderNav('log');
      applyFilter(targetCategory);
    });
  });

  modalBackdrop.addEventListener('click', closeModal);
  closeModalButton.addEventListener('click', closeModal);
}

function openBehaviorModal(behavior) {
  modalTitle.textContent = behavior.title;
  modalPoints.textContent = `+${behavior.points} pts`;
  modalDescription.textContent = behavior.description;
  modalBody.innerHTML = '';
  modalFooter.innerHTML = '';

  if (behavior.type === 'upload') {
    const uploadBox = document.createElement('div');
    uploadBox.className = 'upload-box';
    uploadBox.innerHTML = `
      <p>Upload a photo or screenshot to show your green action.</p>
      <label for="modalUpload">Click to upload / take photo</label>
      <input type="file" id="modalUpload" accept="image/*" />
      <div class="upload-preview" id="uploadPreview">
        <img alt="upload preview" />
      </div>
      ${behavior.uploadHint ? `<p class="text-sm text-slate-500">${behavior.uploadHint}</p>` : ''}
    `;

    const submitButton = document.createElement('button');
    submitButton.className = 'btn-primary';
  submitButton.textContent = 'Confirm submit';

    modalBody.appendChild(uploadBox);
    modalFooter.appendChild(submitButton);

    const fileInput = uploadBox.querySelector('#modalUpload');
    const preview = uploadBox.querySelector('#uploadPreview');
    const previewImg = preview.querySelector('img');

    fileInput.addEventListener('change', () => {
      const file = fileInput.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          previewImg.src = e.target.result;
          preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
      }
    });

    submitButton.addEventListener('click', () => {
      handleBehaviorSubmit(behavior, fileInput.files?.[0] ? 'upload' : 'checkin');
    });
  } else {
    const affirmation = document.createElement('div');
    affirmation.className = 'checkin-affirmation';
  affirmation.textContent = behavior.affirmation ?? 'Green action checked in successfully!';

    const submitButton = document.createElement('button');
    submitButton.className = 'btn-primary';
  submitButton.textContent = "I've done it";

    modalBody.appendChild(affirmation);
    modalFooter.appendChild(submitButton);

    submitButton.addEventListener('click', () => {
      handleBehaviorSubmit(behavior, 'checkin');
    });
  }

  actionModal.classList.add('open');
  actionModal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  actionModal.classList.remove('open');
  actionModal.setAttribute('aria-hidden', 'true');
}

function handleBehaviorSubmit(behavior, evidenceType) {
  const entry = {
    id: crypto.randomUUID(),
    behaviorId: behavior.id,
    title: behavior.title,
    points: behavior.points,
    timestamp: Date.now(),
    evidenceType
  };

  userState.history.push(entry);
  userState.points += behavior.points;

  updateScore();
  updateTimeline();
  updateImpact();
  updateBadges();

  showToast(`Recorded "${behavior.title}" — +${behavior.points} pts`);
  launchConfetti();
  closeModal();
  renderNav('home');
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

function launchConfetti() {
  const colors = ['#4caf50', '#8bc34a', '#2196f3', '#cc3333'];
  const pieces = 24;

  for (let i = 0; i < pieces; i += 1) {
    const confetti = document.createElement('span');
    confetti.className = 'confetti-piece';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = '0';
    confetti.style.animationDelay = `${Math.random() * 0.4}s`;
    confettiLayer.appendChild(confetti);

    confetti.addEventListener('animationend', () => {
      confetti.remove();
    });
  }
}

function formatRelativeTime(timestamp) {
  const elapsed = Date.now() - timestamp;
  const minutes = Math.round(elapsed / (1000 * 60));
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes} minutes ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} hours ago`;
  const days = Math.round(hours / 24);
  if (days < 7) return `${days} days ago`;
  const weeks = Math.round(days / 7);
  if (weeks < 4) return `${weeks} weeks ago`;
  const months = Math.round(days / 30);
  if (months < 12) return `${months} months ago`;
  const years = Math.round(days / 365);
  return `${years} years ago`;
}

init();
