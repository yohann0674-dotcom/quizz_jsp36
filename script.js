// --- VARIABLES GLOBALES DE L'APPLICATION ---
let currentSpecialty = 'jsp1'; // 'jsp1', 'jsp2', 'jsp3', 'jsp4'
let currentGameMode = 'classic'; // 'classic' ou 'sudden-death'
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = [];
let canClick = true;
let gameIsOver = false; // Nouvelle variable pour contrôler la fin de partie manuellement

// --- LANCEMENT DU QUIZ ---
function startQuizWithSpecialty(mode) {
    currentGameMode = mode;
    gameIsOver = false; // Réinitialisation au démarrage
    
    // Récupère la valeur sélectionnée dans le menu déroulant JSP
    const specialtySelect = document.getElementById('setting-specialty');
    if (specialtySelect) {
        currentSpecialty = specialtySelect.value;
    }

    // Sélectionne la bonne banque de questions selon le niveau JSP
    let selectedBank = [];
    if (currentSpecialty === 'jsp1') {
        selectedBank = (typeof masterJsp1Bank !== 'undefined') ? masterJsp1Bank : [];
    } else if (currentSpecialty === 'jsp2') {
        selectedBank = (typeof masterJsp2Bank !== 'undefined') ? masterJsp2Bank : [];
    } else if (currentSpecialty === 'jsp3') {
        selectedBank = (typeof masterJsp3Bank !== 'undefined') ? masterJsp3Bank : [];
    } else if (currentSpecialty === 'jsp4') {
        selectedBank = (typeof masterJsp4Bank !== 'undefined') ? masterJsp4Bank : [];
    }

    if (!selectedBank || selectedBank.length === 0) {
        alert("Attention : La banque de questions pour ce niveau JSP semble vide ou non chargée.");
        return;
    }

    // Mélange et sélectionne les questions
    let shuffled = [...selectedBank].sort(() => 0.5 - Math.random());
    
    if (currentGameMode === 'classic') {
        currentQuestions = shuffled.slice(0, 10);
    } else {
        currentQuestions = shuffled; // Mort subite : utilise toute la base jusqu'à l'erreur
    }

    currentIndex = 0;
    score = 0;
    userAnswers = [];

    // Bascule l'affichage des écrans
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    
    // Affiche les éléments du header
    document.getElementById('home-btn-header').classList.remove('hidden');
    document.getElementById('stats-header').classList.remove('hidden');
    document.getElementById('current-score').textContent = score;

    loadQuestion();
}

// --- CHARGEMENT D'UNE QUESTION ---
function loadQuestion() {
    canClick = true;
    const q = currentQuestions[currentIndex];
    
    // Mise à jour des compteurs et de la barre de progression
    document.getElementById('question-counter').textContent = `Question ${currentIndex + 1} / ${currentGameMode === 'classic' ? currentQuestions.length : '∞'}`;
    document.getElementById('question-tag').textContent = currentSpecialty.toUpperCase();
    
    if (currentGameMode === 'classic') {
        const progressPercent = ((currentIndex + 1) / currentQuestions.length) * 100;
        document.getElementById('progress-bar').style.width = `${progressPercent}%`;
    } else {
        document.getElementById('progress-bar').style.width = `100%`;
    }

    document.getElementById('question-text').textContent = q.question;

    // Masque la justification et le bouton suivant
    document.getElementById('rationale-container').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');

    // Génération des options de réponse
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => selectOption(index);
        optionsContainer.appendChild(btn);
    });
}

// --- SÉLECTION D'UNE RÉPONSE ---
function selectOption(selectedIndex) {
    if (!canClick) return;
    canClick = false;

    const q = currentQuestions[currentIndex];
    const optionsButtons = document.querySelectorAll('.option-btn');
    const correctIndex = q.correct;

    // Désactive tous les boutons après le choix
    optionsButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        optionsButtons[selectedIndex].classList.add('option-correct');
        score++;
        document.getElementById('current-score').textContent = score;
    } else {
        optionsButtons[selectedIndex].classList.add('option-incorrect');
        optionsButtons[correctIndex].classList.add('option-correct');
    }

    // Affiche la justification
    if (q.rationale) {
        document.getElementById('rationale-text').textContent = q.rationale;
        document.getElementById('rationale-container').classList.remove('hidden');
    }

    // Vérifie si la partie est terminée (erreur en mort subite ou dernière question atteinte)
    if (currentGameMode === 'sudden-death' && selectedIndex !== correctIndex) {
        gameIsOver = true;
    } else if (currentIndex >= currentQuestions.length - 1) {
        gameIsOver = true;
    }

    // Affiche le bouton d'action avec le bon texte
    const nextBtn = document.getElementById('next-btn');
    nextBtn.classList.remove('hidden');
    
    if (gameIsOver) {
        nextBtn.textContent = "Voir les résultats";
    } else {
        nextBtn.textContent = "Question suivante";
    }
}

// --- QUESTION SUIVANTE / FIN DE PARTIE ---
function nextQuestion() {
    if (gameIsOver) {
        endGame();
    } else {
        currentIndex++;
        loadQuestion();
    }
}

// --- FIN DE PARTIE ---
function endGame() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('home-btn-header').classList.add('hidden');
    document.getElementById('stats-header').classList.add('hidden');

    document.getElementById('final-score').textContent = score;

    const msgEl = document.getElementById('result-message');
    const saveSection = document.getElementById('save-score-section');
    const leaderboardView = document.getElementById('leaderboard-view');

    saveSection.classList.add('hidden');
    leaderboardView.classList.add('hidden');

    if (currentGameMode === 'classic') {
        msgEl.textContent = `Partie terminée ! Vous avez obtenu ${score} sur ${currentQuestions.length}.`;
    } else {
        msgEl.textContent = `💀 Mort subite ! Erreur enregistrée. Votre score final est de : ${score} bonne(s) réponse(s).`;
        saveSection.classList.remove('hidden');
        leaderboardView.classList.remove('hidden');
        displayLeaderboard();
    }
}

// --- RETOUR À L'ACCUEIL ---
function restartGame() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
    document.getElementById('home-btn-header').classList.add('hidden');
    document.getElementById('stats-header').classList.add('hidden');
}

// --- GESTION DU CLASSEMENT (TOP 10 MORT SUBITE) ---
function saveHighScore() {
    const pseudoInput = document.getElementById('player-pseudo');
    const pseudo = pseudoInput.value.trim() || "Anonyme";
    
    let leaderboard = JSON.parse(localStorage.getItem('sdis_jsp_leaderboard') || '[]');
    
    leaderboard.push({ pseudo: pseudo, score: score, specialty: currentSpecialty });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10); // Garde le top 10

    localStorage.setItem('sdis_jsp_leaderboard', JSON.stringify(leaderboard));
    
    document.getElementById('save-score-section').classList.add('hidden');
    displayLeaderboard();
}

function displayLeaderboard() {
    const tbody = document.getElementById('leaderboard-tbody');
    tbody.innerHTML = '';

    let leaderboard = JSON.parse(localStorage.getItem('sdis_jsp_leaderboard') || '[]');

    if (leaderboard.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: #94a3b8;">Aucun score enregistré</td></tr>`;
        return;
    }

    leaderboard.forEach((entry, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>#${index + 1}</td>
            <td>${entry.pseudo} (${entry.specialty.toUpperCase()})</td>
            <td>${entry.score}</td>
        `;
        tbody.appendChild(tr);
    });
}

function openLeaderboardFromHome() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('home-btn-header').classList.remove('hidden');
    
    document.getElementById('final-score').textContent = "Top 10";
    document.getElementById('result-message').textContent = "Meilleurs scores enregistrés sur cet appareil :";
    document.getElementById('save-score-section').classList.add('hidden');
    document.getElementById('leaderboard-view').classList.remove('hidden');
    
    displayLeaderboard();
}
