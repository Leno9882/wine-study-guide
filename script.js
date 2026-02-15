const wineMenu = {
    "Sparkling": [
        { id: "001", name: "Prosecco, Avissi", region: "Veneto, Italy", year: "NV", price: 12, altitude: "250m", soil: "Clay & Marl", coords: [45.84, 12.12], pitch: "Extra-dry and ultra-clean; hits with white flowers and a crisp 'snap' of green apple.", pairings: ["Tuna Tartare", "Shrimp Cocktail", "Parker Rolls"], vitals: { grapes: "Glera", palate: "Green Apple, Honeysuckle, Pear", chartData: [2, 4, 1, 2, 1] } },
        { id: "002", name: "Crémant de Loire, Gratien & Meyer", region: "Loire, France", year: "NV", price: 15, altitude: "100m", soil: "Tuffeau", coords: [47.25, -0.07], pitch: "Creamy, brioche-like weight from extended aging in limestone caves.", pairings: ["Jumbo Lump Crab Cake", "Octopus", "Lobster Bisque"], vitals: { grapes: "Chardonnay/Chenin Blanc", palate: "Lemon Zest, Almond, Baked Apple", chartData: [3, 4, 1, 3, 2] } },
        { id: "003", name: "Champagne, Taittinger", region: "Reims, France", year: "NV", price: 25, altitude: "150m", soil: "Chalk", coords: [49.25, 4.03], pitch: "Remarkably elegant with a persistent, lacy mousse and honeyed finish.", pairings: ["Oysters on the Half Shell", "Cavatelli with Lobster", "Truffle Potato Gratin"], vitals: { grapes: "Chard/Pinot Noir", palate: "Brioche, Honey, White Peach", chartData: [3, 5, 1, 3, 2] } },
        { id: "004", name: "Champagne, Moet & Chandon", region: "Reims, France", year: "NV", price: 29, altitude: "160m", soil: "Limestone", coords: [49.04, 3.95], pitch: "Vibrant and fruit-forward with a signature nutty complexity on the back palate.", pairings: ["Shrimp Cocktail", "Truffle Potato Gratin", "Sticky Chicken Wings"], vitals: { grapes: "Pinot/Meunier/Chard", palate: "Green Apple, Citrus, Nougat", chartData: [3, 4, 1, 3, 1] } }
    ],
    "Whites": [
        { id: "036", name: "Sauvignon Blanc, Sancerre", region: "Loire, France", year: "2024", price: 21, altitude: "280m", soil: "Silex/Flint", coords: [47.33, 2.83], pitch: "Bone-dry and electric; defined by high-toned citrus and smoky flint minerality.", pairings: ["Oysters on the Half Shell", "Harvest Salad", "Branzino"], vitals: { grapes: "Sauvignon Blanc", palate: "Grapefruit, Gunflint, Lemongrass", chartData: [2, 5, 1, 3, 1] } },
        { id: "022", name: "Sauvignon Blanc, Echo Bay", region: "Marlborough, NZ", year: "2024", price: 13, altitude: "50m", soil: "Stony Loam", coords: [-41.51, 173.96], pitch: "Tropical explosion of passionfruit and lime with zesty, puckering acidity.", pairings: ["Tuna Tartare", "Crispy Skin Salmon", "Shrimp Cocktail"], vitals: { grapes: "Sauvignon Blanc", palate: "Passionfruit, Guava, Key Lime", chartData: [2, 5, 1, 3, 1] } },
        { id: "023", name: "Pinot Grigio, Hofstatter", region: "Alto Adige, Italy", year: "2023", price: 17, altitude: "450m", soil: "Gravel/Porphyry", coords: [46.33, 11.30], pitch: "Alpine-grown; offering a crisp saline bite and mountain-fresh pear notes.", pairings: ["Branzino", "Octopus", "Caesar Salad"], vitals: { grapes: "Pinot Grigio", palate: "Bartlett Pear, Saline, White Pepper", chartData: [2, 5, 1, 3, 1] } },
        { id: "025", name: "Chardonnay, Neyers 304", region: "Sonoma, CA", year: "2023", price: 18, altitude: "100m", soil: "Gravelly Loam", coords: [38.29, -122.45], pitch: "Un-oaked and pure; bright tropical pineapple fruit that is lean and crisp.", pairings: ["Jumbo Lump Crab Cake", "Roasted Chicken", "Crispy Skin Salmon"], vitals: { grapes: "Chardonnay", palate: "Pineapple, Starfruit, Lemon Curd", chartData: [3, 4, 1, 4, 1] } },
        { id: "203", name: "Chardonnay, Flowers", region: "Sonoma Coast, CA", year: "2023", price: 35, altitude: "400m", soil: "Schist", coords: [38.54, -123.21], pitch: "Coastal acidity meets elegant oak with a distinct sea-salt finish.", pairings: ["Cavatelli with Lobster", "Branzino", "Baked Mac & Cheese"], vitals: { grapes: "Chardonnay", palate: "Meyer Lemon, Sea Salt, Roasted Pear", chartData: [4, 4, 1, 4, 3] } },
        { id: "034", name: "Chardonnay, Wm. Fevre", region: "Chablis, France", year: "2023", price: 22, altitude: "200m", soil: "Kimmeridgian", coords: [47.81, 3.80], pitch: "Lean, laser-focused acidity with a crushed-seashell mineral finish.", pairings: ["Oysters on the Half Shell", "Shrimp Cocktail", "Octopus"], vitals: { grapes: "Chardonnay", palate: "Chalk, Green Apple, Lemon Peel", chartData: [3, 5, 1, 3, 1] } }
    ],
    "Red": [
        { id: "043", name: "Pinot Noir, Ken Wright", region: "Willamette, OR", year: "2024", price: 18, altitude: "150m", soil: "Volcanic Jory", coords: [45.31, -123.00], pitch: "Delicate and earthy; showcases tart rainier cherry and volcanic soil notes.", pairings: ["Truffle Potato Gratin", "Harvest Salad", "Crispy Brussels Sprouts"], vitals: { grapes: "Pinot Noir", palate: "Tart Cherry, Raspberry, Forest Floor", chartData: [2, 4, 2, 3, 1] } },
        { id: "585", name: "Pinot Noir, Shea", region: "Willamette, OR", year: "2023", price: 44, altitude: "160m", soil: "Sandstone", coords: [45.34, -123.05], pitch: "Muscular Pinot with dark floral notes and a silky, structured mouthfeel.", pairings: ["Roasted Chicken", "Grilled Veal Chop", "Beef Wellington"], vitals: { grapes: "Pinot Noir", palate: "Black Cherry, Violets, Cola", chartData: [3, 3, 3, 4, 2] } },
        { id: "019", name: "Sangiovese, Rodano", region: "Tuscany, Italy", year: "2021", price: 16, altitude: "300m", soil: "Galestro", coords: [43.46, 11.23], pitch: "Rustic and savory; tastes like dusty cherries and dried oregano.", pairings: ["Steak Tartare", "Caesar Salad", "Sticky Chicken Wings"], vitals: { grapes: "Sangiovese", palate: "Sour Cherry, Oregano, Black Tea", chartData: [3, 5, 4, 4, 1] } },
        { id: "026", name: "Super Tuscan, Montepeloso", region: "Tuscany, Italy", year: "2024", price: 18, altitude: "50m", soil: "Silty Clay", coords: [42.98, 10.66], pitch: "Sun-drenched and bold with rich layers of blackberry and dark cocoa.", pairings: ["Grilled Veal Chop", "Beef Wellington", "Baked Mac & Cheese"], vitals: { grapes: "Cab/Sangio/Merlot", palate: "Blackberry, Cocoa, Sage", chartData: [4, 3, 4, 4, 3] } },
        { id: "843", name: "Super Tuscan, Gaja", region: "Tuscany, Italy", year: "2023", price: 37, altitude: "80m", soil: "Marine Clay", coords: [43.21, 10.59], pitch: "Explosive dark fruit backed by firm tannins and an espresso bean finish.", pairings: ["20 oz Bone-In Ribeye", "8 oz Filet Mignon", "Beef Wellington"], vitals: { grapes: "Merlot/Syrah/Sangio", palate: "Plum, Espresso, Cedar", chartData: [5, 4, 4, 5, 4] } },
        { id: "045", name: "Cabernet, Post & Beam", region: "Napa, CA", year: "2022", price: 24, altitude: "120m", soil: "Gravelly Loam", coords: [38.44, -122.38], pitch: "Classic Napa Cabernet with velvety tannins and a finish of vanilla spice.", pairings: ["8 oz Filet Mignon", "Roasted Broccolini", "Beef Wellington"], vitals: { grapes: "Cabernet Sauvignon", palate: "Black Cherry, Vanilla, Tobacco", chartData: [5, 3, 4, 5, 4] } },
        { id: "421", name: "Cabernet, Heitz Cellars", region: "Napa, CA", year: "2021", price: 45, altitude: "130m", soil: "Volcanic Loam", coords: [38.50, -122.46], pitch: "High-structured and powerful with a unique, cooling finish of mint.", pairings: ["20 oz Prime Bone-In Ribeye", "Beef Wellington", "Truffle Potato Gratin"], vitals: { grapes: "Cabernet Sauvignon", palate: "Blackcurrant, Eucalyptus, Lead Pencil", chartData: [5, 4, 5, 4, 4] } }
    ],
    "Rose": [
        { id: "016", name: "Boulay, Sibylle", region: "Sancerre, France", year: "2024", price: 22, altitude: "250m", soil: "Limestone", coords: [47.33, 2.81], pitch: "Structured Sancerre Pinot Noir—crisp, mineral-driven, and gastronomic.", pairings: ["Harvest Salad", "Octopus", "Branzino"], vitals: { grapes: "Pinot Noir", palate: "Wild Strawberry, Chalk, Citrus", chartData: [2, 5, 1, 3, 1] } },
        { id: "017", name: "Peyrassol, La Croix", region: "Provence, France", year: "2023", price: 14, altitude: "200m", soil: "Schist", coords: [43.41, 6.22], pitch: "Quintessential Provence rosé; bone-dry with a distinct sea-breeze salinity.", pairings: ["Tuna Tartare", "Shrimp Cocktail", "Harvest Salad"], vitals: { grapes: "Grenache/Cinsault", palate: "Peach, White Melon, Sea Salt", chartData: [2, 4, 1, 3, 1] } }
    ],
    "Sweet & Port": [
        { id: "1001", name: "Dolce, Late Harvest", region: "Napa, CA", year: "2019", price: 40, altitude: "100m", soil: "Sandy Loam", coords: [38.44, -122.38], pitch: "Decadent and honeyed with rich layers of apricot and caramel.", pairings: ["Apple Butterscotch Cheesecake", "Eggnog Pannacotta"], vitals: { grapes: "Semillon/Sauv Blanc", palate: "Apricot, Honey, Vanilla Bean", chartData: [5, 3, 1, 4, 4] } },
        { id: "1023", name: "Kracher", region: "Austria", year: "2021", price: 25, altitude: "120m", soil: "Lake Sediment", coords: [47.78, 16.83], pitch: "Exotic and electric; balances intense sweetness with tropical mango.", pairings: ["Eggnog Pannacotta", "Apple Butterscotch Cheesecake"], vitals: { grapes: "Welschriesling", palate: "Mango, Honeysuckle, Pineapple", chartData: [5, 5, 1, 3, 2] } },
        { id: "3003", name: "Fonseca, 20yr Tawny", region: "Douro, Portugal", year: "NV", price: 20, altitude: "400m", soil: "Schist", coords: [41.16, -7.61], pitch: "Liquid silk; complex notes of butterscotch and roasted nuts.", pairings: ["Sticky Toffee Pudding", "Chocolate Tart", "Wedge Salad"], vitals: { grapes: "Port Blend", palate: "Butterscotch, Fig, Walnut", chartData: [5, 2, 2, 5, 5] } },
        { id: "3002", name: "Dows, 10yr Tawny", region: "Douro, Portugal", year: "NV", price: 16, altitude: "350m", soil: "Schist", coords: [41.16, -7.53], pitch: "Punchier, drier style; warming spice, raisins, and a nutty finish.", pairings: ["Chocolate Tart", "Sticky Toffee Pudding"], vitals: { grapes: "Port Blend", palate: "Raisin, Pepper, Plum", chartData: [4, 3, 2, 5, 4] } },
        { id: "3004", name: "Boston Bual Madeira", region: "Madeira, Portugal", year: "NV", price: 19, altitude: "600m", soil: "Volcanic Basalt", coords: [32.76, -16.95], pitch: "Indestructible; smoky with unique flavors of burnt sugar and orange peel.", pairings: ["Chocolate Tart", "Sticky Toffee Pudding", "Wedge Salad"], vitals: { grapes: "Bual", palate: "Caramel, Smoke, Orange Zest", chartData: [4, 5, 1, 5, 5] } }
    ]
};

let map, chart;

function getStudyNote(vitals) {
    let notes = [];
    const d = vitals.chartData; 
    if (d[0] >= 4) notes.push("⚖️ <b>Body:</b> Heavy weight on the tongue.");
    if (d[1] >= 4) notes.push("⚡ <b>Acidity:</b> Triggers salivation on the sides.");
    if (d[2] >= 4) notes.push("🏗️ <b>Tannin:</b> Drying grip on the gums.");
    if (d[3] >= 4) notes.push("🔥 <b>Alcohol:</b> Warmth in the back of the throat.");
    return notes.length > 0 ? notes.join('<br>') : "✨ Harmonious balance.";
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
                    <div class="wine-price">$${w.price}</div>
                </div>`;
            });
        }
    }
    container.innerHTML = html;
}

function openTerroir(id) {
    const category = Object.keys(wineMenu).find(cat => wineMenu[cat].some(w => w.id === id));
    const wine = wineMenu[category].find(w => w.id === id);
    
    document.getElementById('modalHeader').innerHTML = `<h1>${wine.name}</h1><p>${wine.region} | ${wine.vitals.grapes}</p>`;
    document.getElementById('modalFooter').innerHTML = `
        <div class="palate-box">${wine.vitals.palate}</div>
        <div class="pairing-container">${wine.pairings.map(p => `<span class="pairing-tag">${p}</span>`).join('')}</div>
        <div class="study-guide-box"><h4>🎓 PHYSICS CHECKLIST</h4><p>${getStudyNote(wine.vitals)}</p></div>
        <div class="stats-grid">
            <div class="stat-card"><small>SOIL</small><strong>${wine.soil}</strong></div>
            <div class="stat-card"><small>ALTITUDE</small><strong>${wine.altitude}</strong></div>
        </div>
    `;

    document.getElementById('terroirModal').classList.remove('hidden');

    setTimeout(() => {
        if (chart) chart.destroy();
        const ctx = document.getElementById('wineChart').getContext('2d');
        const themeColor = category === "Red" ? "#4A0E0E" : category === "Sparkling" ? "#C5A059" : "#BDB76B";
        
        chart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Body', 'Acidity', 'Tannin', 'Alcohol', 'Oak'],
                datasets: [{
                    data: wine.vitals.chartData,
                    backgroundColor: 'rgba(197, 160, 89, 0.2)',
                    borderColor: themeColor,
                    pointBackgroundColor: themeColor
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { r: { min: 0, max: 5, ticks: { display: false } } },
                plugins: { legend: { display: false } }
            }
        });

        if (map) map.remove();
        map = L.map('map-container').setView(wine.coords, 11);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        L.marker(wine.coords).addTo(map);
    }, 200);
}

function closeModal() { document.getElementById('terroirModal').classList.add('hidden'); }
document.getElementById('wineSearch').addEventListener('input', (e) => renderMenu(e.target.value));
window.onload = () => renderMenu();