// Learning material data
const learningData = [
    {
        question: 'Formulieren Sie eine Anfrage an die Flughafendatenbank.<br>Die Abfrage soll die Orte (bezeichnung, plz) ausgeben.<br>Es sollen nur Orte ausgewählt werden, deren Ortsnamen mit H und Postleitzahlen mit 2 beginnen.<br>Ordnen Sie die Ausgabe aufsteigend nach bezeichnung und plz.<br>Ausgabe: plz, bezeichnung.',
        answer: `
<pre><code>
<span class="sql-keyword">SELECT</span> plz, bezeichnung
<span class="sql-keyword">FROM</span> ORT
<span class="sql-keyword">WHERE</span> bezeichnung LIKE 'H%' <span class="sql-keyword">AND</span> plz LIKE '2%'
<span class="sql-keyword">ORDER BY</span> bezeichnung ASC, plz ASC;
</code></pre>
    `,
        image: null
    },

    {
        question: 'Formulieren Sie eine Anfrage an die Toprastdatenbank (siehe Datenbankschema), die diese Frage beantwortet:<br>Geben Sie eine Liste aller Produkte (Name) aus, die Erdnuss oder Schalenfrüchte beinhalten können und entsprechende Allergien auslösen könnten.<br>Ordnen Sie nach Allergenbezeichnung und Produktname in aufsteigender Reihenfolge.<br>Ausgabe: Allergenbezeichnung, Produktname.',
        answer: `
<pre><code>
<span class="sql-keyword">SELECT</span> bezeichnung, name
<span class="sql-keyword">FROM</span> produkte 
<span class="sql-keyword">JOIN</span> allerg_prod <span class="sql-keyword">ON</span> produkt_id = fk_produkt_id
<span class="sql-keyword">JOIN</span> allergene <span class="sql-keyword">ON</span> fk_kuerzel = kuerzel
<span class="sql-keyword">WHERE</span> bezeichnung <span class="sql-keyword">IN</span> ('Erdnuss','Schalenfrüchte')
<span class="sql-keyword">ORDER BY</span> 1, 2;
</code></pre>
    `,
        image: null
    },
    {
        question: 'Formulieren Sie eine Anfrage an die Flughafendatenbank (siehe Datenbankschema), die diese Frage beantwortet:<br>Geben Sie eine Liste aller Chefpiloten und Piloten (Vorname, Nachname) mit ihrem Dienstrang aus.<br>Ordnen Sie nach Dienstrang, Nachname und Vorname in aufsteigender Reihenfolge.<br>Ausgabe: Dienstrang, Vorname, Nachname.',
        answer: `
<pre><code>
<span class="sql-keyword">SELECT</span> bezeichnung, vorname, nachname
<span class="sql-keyword">FROM</span> person 
<span class="sql-keyword">JOIN</span> flugpersonal <span class="sql-keyword">USING</span> (personid)
<span class="sql-keyword">JOIN</span> dienstrang <span class="sql-keyword">USING</span> (dienstrangid)
<span class="sql-keyword">WHERE</span> bezeichnung <span class="sql-keyword">IN</span> ('Chefpilot', 'Pilot')
<span class="sql-keyword">ORDER BY</span> bezeichnung, nachname, vorname;
</code></pre>
    `,
        image: null
    },
    {
        question: 'Formulieren Sie eine Anfragen an die Flughafendatenbank (siehe Datenbankschema), die diese Frage beantworten:<br>Geben Sie die Vornamen und Nachnamen aller Personen aus, deren Nachname mit S und Vorname mit K beginnen?<br>Ordnen Sie die Ausgabe aufsteigend nach Nachname und Vorname.<br>Ausgabe: Vorname, Nachname.',
        answer: `
<pre><code>
<span class="sql-keyword">SELECT</span> vorname, nachname
<span class="sql-keyword">FROM</span> person
<span class="sql-keyword">WHERE</span> nachname <span class="sql-keyword">LIKE</span> 'S%' <span class="sql-keyword">AND</span> vorname <span class="sql-keyword">LIKE</span> 'K%'
<span class="sql-keyword">ORDER BY</span> 2, 1;
</code></pre>
    `,
        image: null
    },
    {
        question: `BILD: Geben Sie alle Personen aus (Vorname, Nachname), die weder Kunden noch Mitarbeiter sind.
Ordnen Sie nach Nachname und Vorname.`,
        answer: `
<pre><code>
<span class="sql-keyword">SELECT</span> vorname, nachname
<span class="sql-keyword">FROM</span> personen
<span class="sql-keyword">LEFT JOIN</span> kunden
    <span class="sql-keyword">ON</span> personen.pers_id = kunden.fk_pers_id
<span class="sql-keyword">LEFT JOIN</span> mitarbeiter
    <span class="sql-keyword">ON</span> personen.pers_id = mitarbeiter.fk_pers_id
<span class="sql-keyword">WHERE</span> kundennummer IS NULL
  <span class="sql-keyword">AND</span> mitarbeiternummer IS NULL
<span class="sql-keyword">ORDER BY</span> nachname, vorname;
</code></pre>`,
        image: null
    },
    {
        question: `Formulieren Sie eine Anfrage an die Flughafendatenbank (siehe Datenbankschema), die diese Frage beantwortet:
Geben Sie die Vornamen und Nachnamen aller Personen aus, deren Nachname mit L und Vorname mit A beginnen.
Ordnen Sie die Ausgabe aufsteigend nach Nachname und Vorname.
Ausgabe: Vorname, Nachname.`,
        answer: `
<pre><code>
<span class="sql-keyword">SELECT</span> vorname, nachname
<span class="sql-keyword">FROM</span> personen
<span class="sql-keyword">WHERE</span> nachname LIKE 'L%' <span class="sql-keyword">AND</span> vorname LIKE 'A%'
<span class="sql-keyword">ORDER BY</span> nachname ASC, vorname ASC;
</code></pre>`,
        image: null
    },
    {
        question: `AUFGABE:
Geben Sie eine Liste aller (!) Fluglinien und die Anzahl ihrer Flugzeuge aus.<br>
Ordnen Sie nach Anzahl der Flugzeuge in absteigender Reihenfolge und Name der Fluglinien in aufsteigender Reihenfolge.<br>
Ausgabe: Name der Fluglinie, Anzahl der Flugzeuge.`,
        answer: `
<pre><code>
<span class="sql-keyword">SELECT</span> bezeichnung, COUNT(fluglinieid) AS Anzahl
<span class="sql-keyword">FROM</span> fluglinie
<span class="sql-keyword">INNER JOIN</span> flugzeug <span class="sql-keyword">USING</span> (fluglinieid)
<span class="sql-keyword">GROUP BY</span> bezeichnung
<span class="sql-keyword">ORDER BY</span> Anzahl DESC, bezeichnung ASC;
</code></pre>`,
        image: null
    },
    {
        question: `Formulieren Sie eine Anfrage an die Flughafendatenbank (siehe Datenbankschema), die diese Frage beantwortet:<br>
Geben Sie eine Liste aller (!) Orte und die Anzahl der Personen des Personals aus, die dort wohnen.<br>
Ordnen Sie nach Anzahl der im Ort wohnhaften Personen in absteigender Reihenfolge 
und Name des Orts in aufsteigender Reihenfolge.<br>
Ausgabe: Name des Orts, Anzahl der Personen.`,
        answer: `
<pre><code>
<span class="sql-keyword">SELECT</span> o.bezeichnung AS Ort, COUNT(p.personid) AS AnzahlPersonen
<span class="sql-keyword">FROM</span> ort o
<span class="sql-keyword">LEFT JOIN</span> personal p <span class="sql-keyword">ON</span> o.plz = p.plz
<span class="sql-keyword">GROUP BY</span> o.bezeichnung
<span class="sql-keyword">ORDER BY</span> COUNT(p.personid) DESC, o.bezeichnung ASC;
</code></pre>`,
        image: null
    }





];

// Generate learning content
function generateLearningMaterial() {
    const container = document.getElementById('quiz'); // same container
    container.innerHTML = learningData.map((item, idx) => {
        const imageBlock = item.image
            ? `<div class="question-image"><img src="${item.image}" alt="question image" style="max-width:100%; margin-bottom:10px;"></div>`
            : "";

        return `
            <div class="learning-item" style="background:#f0f8fb; padding:20px; border-radius:10px; margin-bottom:20px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
                <div class="question-text" style="font-size:1.1rem; margin-bottom:12px; line-height:1.5; color:#000;">
                    ${idx + 1}. ${item.question}
                </div>
                ${imageBlock}
                <div class="answer">
                    ${item.answer}
                </div>
            </div>
        `;
    }).join('');
}


// Initialize page
document.addEventListener('DOMContentLoaded', function () {
    generateLearningMaterial();

    // Burger menu for mobile
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
