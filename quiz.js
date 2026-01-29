// Quiz data - Add all your questions here
const quizData = [
    {
        type: 'multiple',
        question: 'Wählen Sie eine oder mehrere Antworten:',
        options: [
            { text: 'SQL besteht aus den drei Teilen DDL, DML und DCL', correct: true },
            { text: 'DML steht für Data Markup Language', correct: false },
            { text: 'DDL steht für Data Delete Language', correct: false },
            { text: 'Jede SQL-Anweisung sollte mit einem Semikolon (;) abgeschlossen werden.', correct: true },
            { text: 'DCL steht für Data copy language', correct: false },
            { text: 'DDL steht für Data Definition Language', correct: true },
            { text: 'Die gesamte SQL-Anweisung muss in einer Zeile stehen', correct: false },
            { text: 'Alle vorhandenen Datentypen sind standardisiert und für alle RDS gleich', correct: false },
            { text: 'DCL steht für Data Control Language', correct: true },
            { text: 'DML steht für Data Manipulation Language', correct: true }
        ]
    },
    {
        type: 'multiple',
        question: 'Wählen Sie eine oder mehrere Antworten:',
        options: [
            { text: "to_char(sysdate,'DD') gibt TUESDAY zurück, wenn der aktuelle Tag Dienstag ist", correct: false },
            { text: "Aktualisierung eines Datensatzes prüft automatisch auf referenzielle Integrität", correct: true },
            { text: "to_char(sysdate, 'MM') gibt den Monat des heutigen Datums zurück", correct: true },
            { text: "beim Einfügen eines neuen Datensatzes wird automatisch auf referenzielle Integrität geprüft", correct: true },
            { text: "create table test; --> falls Tabelle bereits existiert wird sie überschrieben", correct: false },
            { text: "drop table: entfernt eine Tabelle und alle ihre Datensätze vollständig", correct: true },
            { text: "beim Löschen eines Datensatzes wird automatisch auf referenzielle Integrität geprüft", correct: true },
            { text: "alter table: alle Einstellungen bereits vorhandener Tabellen können geändert werden", correct: false },
            { text: "Mit der Funktion to_date können Sie ein Datum eines beliebigen Formats in das interne Datumsformat von Oracle konvertieren", correct: true },
            { text: "sysdate gibt immer das aktuelle Datum zurück", correct: true },
            { text: "der Datentyp 'date' in Oracle enthält Tag, Monat, Jahr und Uhrzeit", correct: true },
            { text: "create table: Nach dem Erstellen einer Tabelle können keine Änderungen vorgenommen werden", correct: false }
        ]
    },
    {
        type: 'multiple',
        question: 'Ein CONSTRAINT kann folgende Klauseln haben:',
        options: [
            { text: 'NULL', correct: true },
            { text: 'FOREIGN NUMBER', correct: false },
            { text: 'REFERENCES', correct: true },
            { text: 'ON DELETE CASCADE', correct: true },
            { text: 'SELECT TABLE…', correct: false },
            { text: 'UNIQUE', correct: true },
            { text: 'FOREIGN KEY', correct: true },
            { text: 'PRIMARY KEY', correct: true },
            { text: 'CHECK', correct: true }
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
        question: 'Welche CONSTRAINT-Typen gibt es?',
        options: [
            { text: 'TABLE-CONSTRAINTS', correct: true },
            { text: 'DATABASE-CONSTRAINTS', correct: false },
            { text: 'USER-CONSTRAINTS', correct: false },
            { text: 'COLUMN-CONSTRAINTS', correct: true }
        ]
    },

    {
        type: 'matching',
        question: 'Wählen Sie für jede Frage den Typ des zugeordneten Constraints aus:',
        pairs: [
            { prompt: 'Werte der Spalte müssen eindeutig sein', answer: 'unique' },
            { prompt: 'Wird für 1:n Beziehungen verwendet', answer: 'references' },
            { prompt: 'Reaktionen im Fehlerfall beim Löschen eines Datensatzes können als Erweiterung auf welchen Constraint definiert werden?', answer: 'references' },
            { prompt: 'Ein anderes Wort für outline constraints', answer: 'table constraint' },
            { prompt: 'Ist automatisch NICHT NULL und EINZIGARTIG', answer: 'primary key' },
            { prompt: 'Kann nur einmal für eine Tabelle definiert werden', answer: 'primary key' },
            { prompt: 'Kann Attribute auf vordefinierte Werte begrenzen', answer: 'check' },
            { prompt: 'Spalte darf nicht null sein', answer: 'not null' },
            { prompt: 'Spalte kann null sein', answer: 'null' },
            { prompt: 'Ein anderes Wort für inline constraints', answer: 'column constraint' },
            { prompt: 'Ermöglicht die Definition eines Constraints für mehrere Attribute (Kombination von Attributen)', answer: 'table constraint' },
            { prompt: 'Wenn die Constraint Definition Teil einer Attributdefinition ist', answer: 'column constraint' }
        ],
        options: [
            'unique',
            'primary key',
            'references',
            'check',
            'not null',
            'null',
            'table constraint',
            'column constraint'
        ]
    },

    {
        type: 'matching',
        question: 'Weisen sie nachfolgenden Beschreibungen die passenden Definitionen und SQL-Beispiele zu:',
        pairs: [
            { prompt: 'SQL-Anweisungen, mit denen Daten abgerufen und veraendert werden koennen', answer: 'Data Manipulation Language (DML)' },
            { prompt: 'Datentyp fuer Texte mit variable Laenge zwischen einem und 4000 Zeichen', answer: 'VARCHAR(size)' },
            { prompt: 'Beispiele fuer Datenbankprodukte', answer: 'Oracle, MS SQL Server' },
            { prompt: 'SELECT datum, temperature FROM messwerte WHERE to_char(datum, ‘yyyymmdd’) = to_char(sysdate, ‘yyyymmdd’);', answer: 'Abfrage aller Werte einer Zeitreihe vom heutigen Tag' },
            { prompt: 'SQL-Answeisung zum Anlegen einer Datenbank oder Tabelle, die der DDL-Kategorie zuzuordnen ist', answer: 'CREATE' },
            { prompt: 'Deklarativ; feste Anzahl an Datentypen; ohne Programmierkonstrukte wie Schleifen, Bedingungen, Variablen, usw.', answer: 'Eigenschaften der Sprache SQL' },
            { prompt: 'SQL-Answeisungen zum Festlegen der Datenbank-Struktur', answer: 'Data Definition Language (DDL)' }
        ],
        options: [
            'Data Manipulation Language (DML)',
            'VARCHAR(size)',
            'Oracle, MS SQL Server',
            'Abfrage aller Werte einer Zeitreihe vom heutigen Tag',
            'CREATE',
            'Eigenschaften der Sprache SQL',
            'Data Definition Language (DDL)'
        ]
    }


];

// Generate quiz HTML
function generateQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = quizData.map((q, qIdx) => {
        if (q.type === 'multiple') {
            return `
                        <div class="question" data-type="multiple">
                            <h3>${qIdx + 1}. ${q.question}</h3>
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