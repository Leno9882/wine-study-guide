const wineMenu = {
    "Sparkling": [
        { id: "001", name: "Prosecco, Avissi", region: "Veneto, Italy", year: "NV", classification: "DOC Prosecco", method: "Charmat Method", climate: "Mild Continental", altitude: "250m", soil: "Clay & Marl", coords: [45.84, 12.12], pitch: "Extra-dry and ultra-clean; white flowers and green apple.", pairings: ["Tuna Tartare", "Shrimp Cocktail"], vitals: { grapes: "Glera", composition: ["100% Glera"], palate: "Green Apple, Honeysuckle, Pear", chartData: [2, 4, 1, 2, 1] } },
        { id: "002", name: "Crémant de Loire, Gratien & Meyer", region: "Loire, France", year: "NV", classification: "AOC Crémant", method: "Traditional Method", climate: "Cool Maritime", altitude: "100m", soil: "Tuffeau (Limestone)", coords: [47.25, -0.07], pitch: "Creamy, brioche-like weight from extended aging in limestone caves.", pairings: ["Jumbo Lump Crab Cake", "Octopus"], vitals: { grapes: "Chardonnay / Chenin Blanc", composition: ["40% Chardonnay", "40% Chenin Blanc", "20% Cabernet Franc"], palate: "Lemon Zest, Almond, Baked Apple", chartData: [3, 4, 1, 3, 2] } },
        { id: "003", name: "Champagne, Taittinger", region: "Reims, France", year: "NV", classification: "AOC Champagne", method: "Méthode Champenoise", climate: "Cool Continental", altitude: "150m", soil: "Belemnite Chalk", coords: [49.25, 4.03], pitch: "Elegant with a persistent, lacy mousse and honeyed finish.", pairings: ["Oysters", "Cavatelli with Lobster"], vitals: { grapes: "Chard / Pinot Noir", composition: ["40% Chardonnay", "35% Pinot Noir", "25% Pinot Meunier"], palate: "Brioche, Honey, White Peach", chartData: [3, 5, 1, 3, 2] } },
        { id: "004", name: "Champagne, Moet & Chandon", region: "Reims, France", year: "NV", classification: "AOC Champagne", method: "Méthode Champenoise", climate: "Cool Continental", altitude: "160m", soil: "Limestone", coords: [49.04, 3.95], pitch: "Vibrant and fruit-forward with signature nuttiness.", pairings: ["Shrimp Cocktail", "Sticky Chicken Wings"], vitals: { grapes: "Pinot / Meunier / Chard", composition: ["35% Pinot Noir", "35% Pinot Meunier", "30% Chardonnay"], palate: "Green Apple, Citrus, Nougat", chartData: [3, 4, 1, 3, 1] } }
    ],
    "Whites": [
        { id: "036", name: "Sauvignon Blanc, Sancerre", region: "Loire, France", year: "2024", classification: "AOC Sancerre", method: "Stainless Steel", climate: "Cool Continental", altitude: "280m", soil: "Silex/Flint", coords: [47.33, 2.83], pitch: "Bone-dry and electric; defined by smoky flint minerality.", pairings: ["Oysters", "Branzino"], vitals: { grapes: "Sauvignon Blanc", composition: ["100% Sauvignon Blanc"], palate: "Grapefruit, Gunflint, Lemongrass", chartData: [2, 5, 1, 3, 1] } },
        { id: "022", name: "Sauvignon Blanc, Echo Bay", region: "Marlborough, NZ", year: "2024", classification: "Marlborough AVA", method: "Stainless Steel", climate: "Maritime", altitude: "50m", soil: "Stony Loam", coords: [-41.51, 173.96], pitch: "Tropical explosion of passionfruit and lime.", pairings: ["Tuna Tartare", "Crispy Skin Salmon"], vitals: { grapes: "Sauvignon Blanc", composition: ["100% Sauvignon Blanc"], palate: "Passionfruit, Guava, Key Lime", chartData: [2, 5, 1, 3, 1] } },
        { id: "023", name: "Pinot Grigio, Hofstatter", region: "Alto Adige, Italy", year: "2023", classification: "DOC Alto Adige", method: "Stainless Steel", climate: "Alpine/Continental", altitude: "450m", soil: "Gravel/Porphyry", coords: [46.33, 11.30], pitch: "Alpine-grown; crisp saline bite and fresh pear.", pairings: ["Branzino", "Octopus"], vitals: { grapes: "Pinot Grigio", composition: ["100% Pinot Grigio"], palate: "Bartlett Pear, Saline, White Pepper", chartData: [2, 5, 1, 3, 1] } },
        { id: "025", name: "Chardonnay, Neyers 304", region: "Sonoma, CA", year: "2023", classification: "Sonoma County AVA", method: "Unoaked (Steel)", climate: "Cool Maritime", altitude: "100m", soil: "Gravelly Loam", coords: [38.29, -122.45], pitch: "Un-oaked and pure; bright tropical pineapple fruit.", pairings: ["Jumbo Lump Crab Cake", "Roasted Chicken"], vitals: { grapes: "Chardonnay", composition: ["100% Chardonnay"], palate: "Pineapple, Starfruit, Lemon Curd", chartData: [3, 4, 1, 4, 1] } },
        { id: "203", name: "Chardonnay, Flowers", region: "Sonoma Coast, CA", year: "2023", classification: "Sonoma Coast AVA", method: "French Oak Aged", climate: "Cool Maritime/Foggy", altitude: "400m", soil: "Schist", coords: [38.54, -123.21], pitch: "Coastal acidity meets elegant oak and sea-salt.", pairings: ["Cavatelli with Lobster", "Branzino"], vitals: { grapes: "Chardonnay", composition: ["100% Chardonnay"], palate: "Meyer Lemon, Sea Salt, Roasted Pear", chartData: [4, 4, 1, 4, 3] } },
        { id: "034", name: "Chardonnay, Wm. Fevre", region: "Chablis, France", year: "2023", classification: "AOC Chablis", method: "Stainless Steel/Oak", climate: "Cool Continental", altitude: "200m", soil: "Kimmeridgian", coords: [47.81, 3.80], pitch: "Lean acidity with a crushed-seashell finish.", pairings: ["Oysters", "Shrimp Cocktail"], vitals: { grapes: "Chardonnay", composition: ["100% Chardonnay"], palate: "Chalk, Green Apple, Lemon Peel", chartData: [3, 5, 1, 3, 1] } }
    ],
    "Red": [
        { id: "043", name: "Pinot Noir, Ken Wright", region: "Willamette, OR", year: "2024", classification: "Willamette Valley AVA", method: "Small Batch Oak", climate: "Cool Maritime", altitude: "150m", soil: "Volcanic Jory", coords: [45.31, -123.00], pitch: "Delicate and earthy; tart cherry and volcanic soil.", pairings: ["Truffle Potato Gratin", "Harvest Salad"], vitals: { grapes: "Pinot Noir", composition: ["100% Pinot Noir"], palate: "Tart Cherry, Raspberry, Forest Floor", chartData: [2, 4, 2, 3, 1] } },
        { id: "585", name: "Pinot Noir, Shea", region: "Willamette, OR", year: "2023", classification: "Yamhill-Carlton AVA", method: "French Oak Aged", climate: "Cool Maritime", altitude: "160m", soil: "Sandstone", coords: [45.34, -123.05], pitch: "Muscular Pinot with dark floral notes and silk.", pairings: ["Roasted Chicken", "Beef Wellington"], vitals: { grapes: "Pinot Noir", composition: ["100% Pinot Noir"], palate: "Black Cherry, Violets, Cola", chartData: [3, 3, 3, 4, 2] } },
        { id: "019", name: "Sangiovese, Rodano", region: "Tuscany, Italy", year: "2021", classification: "DOCG Chianti Classico", method: "Large Oak Cask", climate: "Mediterranean", altitude: "300m", soil: "Galestro", coords: [43.46, 11.23], pitch: "Rustic and savory; dusty cherries and oregano.", pairings: ["Steak Tartare", "Caesar Salad"], vitals: { grapes: "Sangiovese", composition: ["100% Sangiovese"], palate: "Sour Cherry, Oregano, Black Tea", chartData: [3, 5, 4, 4, 1] } },
        { id: "026", name: "Super Tuscan, Montepeloso", region: "Tuscany, Italy", year: "2024", classification: "IGT Toscana", method: "Oak Barrique Aged", climate: "Warm Mediterranean", altitude: "50m", soil: "Silty Clay", coords: [42.98, 10.66], pitch: "Sun-drenched and bold; blackberry and dark cocoa.", pairings: ["Grilled Veal Chop", "Beef Wellington"], vitals: { grapes: "Cab / Sangio / Merlot", composition: ["40% Cabernet Sauvignon", "30% Sangiovese", "20% Merlot", "10% Alicante"], palate: "Blackberry, Cocoa, Sage", chartData: [4, 3, 4, 4, 3] } },
        { id: "843", name: "Super Tuscan, Gaja", region: "Tuscany, Italy", year: "2023", classification: "IGT Toscana", method: "Oak Barrique Aged", climate: "Warm Mediterranean", altitude: "80m", soil: "Marine Clay", coords: [43.21, 10.59], pitch: "Explosive dark fruit backed by firm tannins.", pairings: ["20 oz Ribeye", "8 oz Filet Mignon"], vitals: { grapes: "Merlot / Syrah / Sangio", composition: ["55% Merlot", "35% Syrah", "10% Sangiovese"], palate: "Plum, Espresso, Cedar", chartData: [5, 4, 4, 5, 4] } },
        { id: "045", name: "Cabernet, Post & Beam", region: "Napa, CA", year: "2022", classification: "Napa Valley AVA", method: "Oak Aged", climate: "Warm Mediterranean", altitude: "120m", soil: "Gravelly Loam", coords: [38.44, -122.38], pitch: "Classic Napa Cabernet with velvety tannins.", pairings: ["8 oz Filet Mignon", "Beef Wellington"], vitals: { grapes: "Cabernet Sauvignon", composition: ["100% Cabernet Sauvignon"], palate: "Black Cherry, Vanilla, Tobacco", chartData: [5, 3, 4, 5, 4] } },
        { id: "421", name: "Cabernet, Heitz Cellars", region: "Napa, CA", year: "2021", classification: "Napa Valley AVA", method: "Large Oak Cask", climate: "Warm Mediterranean", altitude: "130m", soil: "Volcanic Loam", coords: [38.50, -122.46], pitch: "Powerful with a unique cooling finish of mint.", pairings: ["20 oz Ribeye", "Truffle Potato Gratin"], vitals: { grapes: "Cabernet Sauvignon", composition: ["100% Cabernet Sauvignon"], palate: "Blackcurrant, Eucalyptus, Lead Pencil", chartData: [5, 4, 5, 4, 4] } }
    ],
    "Rose": [
        { id: "016", name: "Boulay, Sibylle", region: "Sancerre, France", year: "2024", classification: "AOC Sancerre", method: "Direct Press", climate: "Cool Continental", altitude: "250m", soil: "Limestone", coords: [47.33, 2.81], pitch: "Structured Sancerre Pinot Noir; crisp and mineral.", pairings: ["Harvest Salad", "Octopus"], vitals: { grapes: "Pinot Noir", composition: ["100% Pinot Noir"], palate: "Wild Strawberry, Chalk, Citrus", chartData: [2, 5, 1, 3, 1] } },
        { id: "017", name: "Peyrassol, La Croix", region: "Provence, France", year: "2023", classification: "IGP Mediterranée", method: "Direct Press", climate: "Warm Mediterranean", altitude: "200m", soil: "Schist", coords: [43.41, 6.22], pitch: "Bone-dry with a distinct sea-breeze salinity.", pairings: ["Tuna Tartare", "Shrimp Cocktail"], vitals: { grapes: "Grenache / Cinsault", composition: ["50% Grenache", "40% Cinsault", "10% Syrah"], palate: "Peach, White Melon, Sea Salt", chartData: [2, 4, 1, 3, 1] } }
    ],
    "Sweet & Port": [
        { id: "1001", name: "Dolce, Late Harvest", region: "Napa, CA", year: "2019", classification: "Napa Valley AVA", method: "Botrytised/Late Harvest", climate: "Warm Mediterranean", altitude: "100m", soil: "Sandy Loam", coords: [38.44, -122.38], pitch: "Decadent and honeyed with rich apricot layers.", pairings: ["Cheesecake", "Eggnog Pannacotta"], vitals: { grapes: "Semillon / Sauv Blanc", composition: ["80% Semillon", "20% Sauvignon Blanc"], palate: "Apricot, Honey, Vanilla Bean", chartData: [5, 3, 1, 4, 4] } },
        { id: "1023", name: "Kracher, Beerenauslese", region: "Burgenland, Austria", year: "2021", classification: "Burgenland DAC", method: "Botrytised Selection", climate: "Pannonian (Warm Lake)", altitude: "120m", soil: "Lake Sediment", coords: [47.78, 16.83], pitch: "Exotic and electric; balances intense mango and honey.", pairings: ["Pannacotta", "Blue Cheese"], vitals: { grapes: "Welschriesling / Chard", composition: ["60% Welschriesling", "40% Chardonnay"], palate: "Mango, Honeysuckle, Pineapple", chartData: [5, 5, 1, 3, 2] } },
        { id: "3002", name: "Dow's, 10yr Tawny Port", region: "Douro, Portugal", year: "NV", classification: "DOC Porto", method: "Fortified / Oxidized", climate: "Hot Continental", altitude: "350m", soil: "Schist", coords: [41.16, -7.53], pitch: "Drier style with warming spice, raisins, and nuts.", pairings: ["Chocolate Tart", "Almond Biscotti"], vitals: { grapes: "Touriga Blend", composition: ["Touriga Nacional", "Touriga Franca", "Tinta Barroca", "Tinta Roriz"], palate: "Raisin, Pepper, Plum", chartData: [4, 3, 2, 5, 4] } },
        { id: "3003", name: "Fonseca, 20yr Tawny Port", region: "Douro, Portugal", year: "NV", classification: "DOC Porto", method: "Fortified / Oxidized", climate: "Hot Continental", altitude: "400m", soil: "Schist", coords: [41.16, -7.61], pitch: "Liquid silk; complex notes of butterscotch and roasted nuts.", pairings: ["Sticky Toffee Pudding", "Chocolate Tart"], vitals: { grapes: "Touriga Blend", composition: ["Touriga Nacional", "Touriga Franca", "Tinta Roriz"], palate: "Butterscotch, Fig, Walnut", chartData: [5, 2, 2, 5, 5] } },
        { id: "3004", name: "Boston Bual Madeira", region: "Madeira, Portugal", year: "NV", classification: "DOC Madeira", method: "Estufagem (Heated/Fortified)", climate: "Subtropical", altitude: "600m", soil: "Volcanic Basalt", coords: [32.76, -16.95], pitch: "Indestructible; smoky with burnt sugar and orange peel.", pairings: ["Chocolate Tart", "Wedge Salad"], vitals: { grapes: "Bual", composition: ["100% Bual"], palate: "Caramel, Smoke, Orange Zest", chartData: [4, 5, 1, 5, 5] } }
    ]
};

let map, chart;

function explainClassification(label) {
    const definitions = {
        "DOC": "Denominazione di Origine Controllata: Guarantees origin and production standards.",
        "DOCG": "Denominazione di Origine Controllata e Garantita: Italy's highest quality tier.",
        "AOC": "Appellation d'Origine Contrôlée: French certification for origin and methods.",
        "AVA": "American Viticultural Area: Identifies a specific US grape-growing region.",
        "IGT": "Indicazione Geografica Tipica: High-quality Italian wine with stylistic freedom.",
        "IGP": "Indication Géographique Protégée: Protected European regional status."
    };
    let match = "A legal designation ensuring origin and production quality.";
    for (let key in definitions) { if (label.includes(key)) { match = definitions[key]; break; } }
    alert(`📜 LABEL INTEL: ${label}\n\n${match}`);
}

function explainMethod(methodName) {
    const methods = {
        "Traditional Method": "Fermented in-bottle. Adds complexity and yeast notes.",
        "Méthode Champenoise": "The specific Traditional Method used in Champagne.",
        "Charmat Method": "Fermented in tanks to keep fruit fresh and bright.",
        "Stainless Steel": "Keeps the wine crisp, bright, and pure.",
        "Unoaked (Steel)": "Pure fruit without any wood influence.",
        "French Oak Aged": "Adds spice, tannin, and a silken texture.",
        "Large Oak Cask": "Softens wine without overpowering it with wood flavor.",
        "Oak Barrique Aged": "Imparts bold flavors of vanilla, tobacco, and cocoa.",
        "Direct Press": "Gently pressed for a pale color and delicate body.",
        "Estufagem (Heated/Fortified)": "Heated and oxidized; makes the wine immortal.",
        "Botrytised Selection": "Made from 'Noble Rot' grapes for intense sweetness.",
        "Fortified / Oxidized": "Rich, nutty, and caramel notes from added spirits."
    };
    alert(`🔍 PROCESS: ${methodName}\n\n${methods[methodName] || "A specialized winemaking technique."}`);
}

function getStudyNote(vitals) {
    const d = vitals.chartData; 
    let notes = [];
    if (d[0] >= 4) notes.push("⚖️ <b>Body:</b> Heavy weight/viscosity.");
    if (d[1] >= 4) notes.push("⚡ <b>Acidity:</b> High, crisp salivation.");
    if (d[2] >= 4) notes.push("🏗️ <b>Tannin:</b> Firm grip on the palate.");
    if (d[3] >= 4) notes.push("🔥 <b>Alcohol:</b> Noticeable warmth/strength.");
    return notes.length > 0 ? notes.join('<br>') : "✨ Balanced and elegant.";
}

function renderMenu(searchTerm = "") {
    const container = document.getElementById('menu-container');
    let html = "";
    for (const [cat, wines] of Object.entries(wineMenu)) {
        const filtered = wines.filter(w => w.name.toLowerCase().includes(searchTerm.toLowerCase()) || w.id.includes(searchTerm));
        if (filtered.length > 0) {
            html += `<h2 class="category-header">${cat}</h2>`;
            filtered.forEach(w => {
                html += `
                <div class="wine-item" onclick="openTerroir('${w.id}')">
                    <div class="wine-id">${w.id}</div>
                    <div class="wine-main"><strong>${w.name}</strong><div class="pitch-snippet">${w.pitch}</div></div>
                    <div class="wine-year">${w.year}</div>
                </div>`;
            });
        }
    }
    container.innerHTML = html;
}

function openTerroir(id) {
    const category = Object.keys(wineMenu).find(cat => wineMenu[cat].some(w => w.id === id));
    const wine = wineMenu[category].find(w => w.id === id);
    const compHtml = wine.vitals.composition.map(c => `<li>• ${c}</li>`).join('');

    // Highlighted DOC and Methodology logic in the Header
    document.getElementById('modalHeader').innerHTML = `
        <div style="text-align: center; border-bottom: 1px solid #eee; padding-bottom: 20px; margin-bottom: 20px;">
            <small style="color: var(--gold); text-transform: uppercase; letter-spacing: 3px; font-weight: 800;">
                TEAM RAMSAY BOSTON • CASK ${wine.id}
            </small>
            <h1 style="margin: 10px 0; font-family: 'Georgia', serif; font-size: 2.2rem; color: var(--wine-red);">${wine.name}</h1>
            <p style="margin: 0; color: #666; font-style: italic;">
                ${wine.region} • 
                <span class="label-link" onclick="explainClassification('${wine.classification}')">
                    ${wine.classification}
                </span>
            </p>
            <div style="margin-top: 15px;">
                 <button class="method-btn" onclick="event.stopPropagation(); explainMethod('${wine.method}')">${wine.method}</button>
            </div>
            <ul style="list-style: none; padding: 0; margin: 15px 0 0 0; color: var(--gold); font-weight: bold; font-size: 0.85rem; display: flex; justify-content: center; gap: 15px;">
                ${compHtml}
            </ul>
        </div>
    `;

    document.getElementById('modalFooter').innerHTML = `
        <div class="palate-box">${wine.vitals.palate}</div>
        <div class="study-guide-box">
            <h4 style="margin:0 0 10px 0; color: var(--gold); font-size: 0.8rem; letter-spacing: 1px; text-transform: uppercase;">🎓 Kitchen Intel</h4>
            <p style="margin: 5px 0;"><strong>Climate:</strong> ${wine.climate}</p>
            <p style="margin: 5px 0;">${getStudyNote(wine.vitals)}</p>
        </div>
        <div class="stats-grid">
            <div class="stat-card"><small>Soil Type</small><strong>${wine.soil}</strong></div>
            <div class="stat-card"><small>Elevation</small><strong>${wine.altitude}</strong></div>
        </div>
        <div class="pairing-section">
             <h4>Perfect Pairings</h4>
            <div class="pairing-container">
                ${wine.pairings.map(p => `<span class="pairing-tag">${p}</span>`).join('')}
            </div>
        </div>
    `;

    document.getElementById('terroirModal').classList.remove('hidden');

    setTimeout(() => {
        if (chart) chart.destroy();
        const themeColor = (category === "Red" || category === "Sweet & Port") ? "#4A0E0E" : "#C5A059";
        
        chart = new Chart(document.getElementById('wineChart'), {
            type: 'radar',
            data: {
                labels: ['Body', 'Acidity', 'Tannin', 'Alcohol', 'Oak'],
                datasets: [{
                    data: wine.vitals.chartData,
                    backgroundColor: 'rgba(197, 160, 89, 0.1)',
                    borderColor: themeColor,
                    pointBackgroundColor: themeColor,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { r: { min: 0, max: 5, ticks: { display: false }, grid: { color: '#eee' }, angleLines: { color: '#eee' } } },
                plugins: { legend: { display: false } }
            }
        });

        if (map) map.remove();
        map = L.map('map-container', { zoomControl: false }).setView(wine.coords, 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        L.marker(wine.coords).addTo(map);
    }, 300);
}

function closeModal() { document.getElementById('terroirModal').classList.add('hidden'); }
document.getElementById('wineSearch').addEventListener('input', (e) => renderMenu(e.target.value));
window.onload = () => renderMenu();