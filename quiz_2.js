// Quiz data - Add all your questions here
const quizData = [
    {
        type: 'multiple',
        question: 'Welche der folgenden Aussagen zu SQL sind korrekt?',
        options: [
            { text: 'Ein COLUMN-CONSTRAINT kann eine FOREIGN-key-Klausel enthalten', correct: false },
            { text: 'Ein Datensatz (DELETE-Befehl) kann nicht gelöscht werden, wenn noch abhängige Datensätze existieren.', correct: true },
            { text: 'Jeder Column-Constraint (Spaltenbedingung) kann auch als Table-Constraint (Tabellenbedingung) geschrieben werden.', correct: false },
            { text: 'Mit der Wildcard % werden unter SQL und LIKE ein oder mehrere Zeichen selektiert.', correct: true },
            { text: 'Jeder Table-Constraint (Tabellenbedingung) kann auch als Column-Constraint (Spaltenbedingung) geschrieben werden.', correct: false },
            { text: 'In Unterabfragen ist die ORDER-BY-Komponente vorgesehen', correct: false }
        ]
    },
    {
        type: 'multiple',
        question: 'Was bedeutet referentielle Integrität?',
        options: [
            { text: 'Sorgt dafür, dass die Attribute einer Tabelle den richtigen Datentyp haben', correct: false },
            { text: 'Überprüft, ob bereits ein Primärschlüssel vorhanden ist, wenn ein Fremdschlüssel hinzugefügt wird, der auf diesen Primärschlüssel zeigt', correct: true },
            { text: 'Gibt eine Fehlermeldung aus, wenn ein Datensatz mit einem Fremdschlüssel, der auf einen Primärschlüssel einer anderen Tabelle zeigt, gelöscht wird', correct: false },
            { text: 'Überwacht, ob Werte in der Primärtabelle geändert werden und dies zu verwaisten Datensätzen der angehängten Tabellen führt', correct: true },
            { text: 'Sie überwacht die definierte Beziehung zwischen den Tabellen, wenn Datensätze hinzugefügt, geändert oder gelöscht werden', correct: true },
            { text: 'Gibt eine Fehlermeldung aus, wenn ein Datensatz mit einem Primärschlüssel gelöscht wird, auf den ein Fremdschlüssel eines anderen Datensatzes verweist', correct: true },
            { text: 'Sorgt dafür, dass zu jedem Fremdschlüssel in der Datenbank immer ein entsprechender Primärschlüssel vorhanden ist', correct: true },
            { text: 'Beschränkt Attribute auf vordefinierte Werte (z. B. darf das Geschlecht nur "M", "F" oder "D" sein)', correct: false },
            { text: 'Stellt sicher, dass ein Datensatz, auf den ein neu hinzugefügter Datensatz verweist, bereits existiert', correct: true }
        ]
    },
    {
        type: 'multiple',
        question: 'Welche der folgenden INSERT-Anweisungen in eine Tabelle test ist korrekt?',
        image: 'image_1.png',
        options: [
            { text: "a. INSERT INTO TEST (NR, Wert, Bezeichnung) VALUES (1, 'Bier', '20')", correct: false },
            { text: "b. INSERT INTO TEST SELECT Nr, Bezeichnung, Wert FROM Tabelle2", correct: true },
            { text: "c. INSERT INTO TEST VALUES (1, 'Bier', 20)", correct: true },
            { text: "d. INSERT INTO TEST (NR, Bezeichnung) VALUES (1, 'Bier')", correct: false },
            { text: "e. INSERT INTO TEST (1, 20, 'Bier')", correct: false },
            { text: "f. INSERT INTO TEST (NR, Wert) VALUES (1, '20')", correct: false },
            { text: "g. INSERT INTO TEST (NR, Bezeichnung, Wert) VALUES (1, 'Bier', 20)", correct: true }
        ]
    },
    {
        type: 'multiple',
        question: 'Welche der folgenden INSERT-Anweisungen in eine Tabelle Produkt ist korrekt? (Artikel hat die gleichen Spalten wie Test)',
        image: 'image_2.jpg',
        options: [
            { text: "a. INSERT INTO PRODUKT (ID, Name) VALUES (1, 'Cappuccino')", correct: true },
            { text: "b. INSERT INTO PRODUKT (1, 4.20, 'Cappuccino')", correct: false },
            { text: "c. INSERT INTO PRODUKT (ID, Name, Preis) VALUES (1, 'Cappuccino', 4.20)", correct: true },
            { text: "d. INSERT INTO PRODUKT SELECT ID, Name, Preis FROM Artikel", correct: true },
            { text: "e. INSERT INTO PRODUKT (ID, Name, Preis) VALUES (1, 'Cappuccino', '4.20')", correct: false },
            { text: "f. INSERT INTO PRODUKT VALUES (1, 'Cappuccino', 4.20)", correct: false },
            { text: "g. INSERT INTO PRODUKT (ID, Preis) VALUES (1, 4.20)", correct: false }
        ]
    },
    {
        type: 'multiple',
        question: 'Wählen Sie die richtigen Antworten auf Indizes aus:',
        options: [
            { text: 'Indizes können Insert- und Update-Anweisungen in Tabellen verlangsamen', correct: true },
            { text: 'Das Erstellen oder Löschen von Indizes ist jederzeit möglich', correct: true },
            { text: 'Ein Index kann nur für einzelne Spalten definiert werden', correct: false },
            { text: 'Ein Index kann für Kombinationen von Attributen definiert werden', correct: true },
            { text: 'Fremdschlüssel werden automatisch indiziert', correct: false },
            { text: 'Indizes können Select-Anweisungen auf Tabellen dramatisch beschleunigen', correct: true },
            { text: 'Ein Index ermöglicht eine Vorsortierung der Datensätze', correct: true },
            { text: 'Indizes für Attribute sollten nur dann definiert werden, wenn schnelle Abfragen dieser Attribute erforderlich sind', correct: true },
            { text: 'Indexwerte müssen eindeutig sein', correct: false }
        ]
    },



    {
        type: 'matching',
        question: 'Weisen Sie SQL-Anweisungen der entsprechenden Klasse zu:',
        pairs: [
            { prompt: 'Insert', answer: 'DML' },
            { prompt: 'Grant', answer: 'DCL' },
            { prompt: 'Delete', answer: 'DML' },
            { prompt: 'Alter', answer: 'DDL' },
            { prompt: 'Update', answer: 'DML' },
            { prompt: 'Select', answer: 'DML' },
            { prompt: 'Revoke', answer: 'DCL' },
            { prompt: 'Drop', answer: 'DDL' },
            { prompt: 'Create', answer: 'DDL' },
            { prompt: 'Commit', answer: 'DCL' }
        ],
        options: [
            'DML',
            'DCL',
            'DDL'
        ]
    },
    {
        type: 'multiple',
        question: 'Ansätze zur Sicherstellung der Datenintegrität (3 richtige Antworten):',
        options: [
            { text: 'In Anwendungsprogrammen codiert', correct: true },
            { text: 'Das RDBMS kümmert sich von selbst (keine Aktionen für irgendeine Art von Benutzer erforderlich)', correct: false },
            { text: 'Rufen Sie von Zeit zu Zeit die Funktion data_integrity auf', correct: false },
            { text: 'Verwendung von Constraints (Teil des SQL-Standards)', correct: true },
            { text: 'Datenintegrität kann nicht überwacht werden', correct: false },
            { text: 'Verwendung von Triggern (erweiterte SQL-Funktionen wie z.B. PL/SQL)', correct: true }
        ]
    },


];

// Generate quiz HTML
function generateQuiz() {
    const quizContainer = document.getElementById('quiz');

    quizContainer.innerHTML = quizData.map((q, qIdx) => {

        // OPTIONAL IMAGE BLOCK
        const imageBlock = q.image
            ? `<div class="question-image"><img src="${q.image}" alt="question image"></div>`
            : "";

        if (q.type === 'multiple') {
            return `
                <div class="question" data-type="multiple">
                    <h3>${qIdx + 1}. ${q.question}</h3>
                    ${imageBlock}

                    ${q.options.map((opt, oIdx) => `
                        <div class="option">
                            <input type="checkbox" id="q${qIdx}o${oIdx}" data-correct="${opt.correct}">
                            <label for="q${qIdx}o${oIdx}">${opt.text}</label>
                        </div>
                    `).join('')}
                </div>
            `;

        } else if (q.type === 'matching') {
            return `
                <div class="question" data-type="matching">
                    <h3>${qIdx + 1}. ${q.question}</h3>
                    ${imageBlock}

                    ${q.pairs.map((pair, pIdx) => `
                        <div class="match-item">
                            <span>${pair.prompt}</span>
                            <select data-answer="${pair.answer}">
                                <option value="">--Select--</option>
                                ${q.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                            </select>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }).join('');
}


// Submit and evaluate quiz
function submitQuiz() {
    const questions = document.querySelectorAll('.question');
    let totalQuestions = questions.length;
    let correctQuestions = 0;

    questions.forEach(question => {
        let questionCorrect = true;
        if (question.dataset.type === 'multiple') {
            const checkboxes = question.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(cb => {
                const parent = cb.parentElement;
                const isCorrect = cb.dataset.correct === 'true';
                const isChecked = cb.checked;

                if (isChecked && isCorrect) {
                    parent.classList.add('correct');
                } else if (isChecked && !isCorrect) {
                    parent.classList.add('incorrect');
                    questionCorrect = false;
                } else if (!isChecked && isCorrect) {
                    parent.classList.add('incorrect');
                    questionCorrect = false;
                }

                cb.disabled = true;
            });
        }
        else if (question.dataset.type === 'matching') {
            const selects = question.querySelectorAll('select');
            selects.forEach(select => {
                const parent = select.parentElement;
                if (select.value === select.dataset.answer) {
                    parent.classList.add('correct');
                } else {
                    parent.classList.add('incorrect');
                    questionCorrect = false;
                }
                select.disabled = true;
            });
        }

        if (questionCorrect) correctQuestions++;
    });

    const percentage = ((correctQuestions / totalQuestions) * 100).toFixed(1);
    document.getElementById('score').textContent = percentage + '%';
    document.getElementById('feedback').textContent =
        `You got ${correctQuestions} out of ${totalQuestions} questions completely correct.`;
    document.getElementById('results').classList.add('show');
    document.querySelector('.submit-btn').style.display = 'none';
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// Burger menu
document.addEventListener('DOMContentLoaded', function () {
    generateQuiz();

    const navbar = document.querySelector('.navbar');
    const burgerMenu = document.createElement('div');
    burgerMenu.className = 'burger-menu';
    burgerMenu.innerHTML = '<span></span><span></span><span></span>';
    navbar.appendChild(burgerMenu);

    const burger = document.querySelector('.burger-menu');
    const navUl = document.querySelector('.navbar ul');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navUl.classList.toggle('active');
    });

    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navUl.classList.remove('active');
        });
    });
});