        // Récupérer les paramètres
        const params = new URLSearchParams(window.location.search);
        const marque = params.get("marque");
        const model  = params.get("model");

        const container = document.getElementById("details");

        // Charger la voiture
        let voitureTrouvee = null;

        data.cars.forEach(c => {
            if (c.marque === marque) {
                const car = c.models.find(m => m.model === model);
                if (car) voitureTrouvee = { ...car, marque: marque };
            }
        });

        if (!voitureTrouvee) {
            container.innerHTML = "<p>Voiture introuvable.</p>";
        } else {
            const v = voitureTrouvee;
            container.innerHTML = `
                <h1>${v.marque} ${v.model}</h1>
                <img src="${v.image}" alt="${v.model}">

                <table class="car-specs">
                <tr>
                    <td><strong>Carburant</strong></td>
                    <td>${v.carburants}</td>
                </tr>
                <tr>
                    <td><strong>Puissance réelle</strong></td>
                    <td>${v.puissance_reel} ch</td>
                </tr>
                <tr>
                    <td><strong>Boîte de vitesses</strong></td>
                    <td>${v.boite_vitesse}</td>
                </tr>
                <tr>
                    <td><strong>Prix</strong></td>
                    <td>€${v.prix}</td>
                </tr>
                <tr>
                    <td><strong>Kilométrage</strong></td>
                    <td>${v.km || "Non renseigné"}</td>
                </tr>
                <tr>
                    <td><strong>Année</strong></td>
                    <td>${v.annee || "Non renseignée"}</td>
                </tr>
            </table>

            <button onclick="ajouterAuPanier()">Ajouter au panier</button>
            <button onclick="history.back()">⬅ Retour</button>
            `;
        }
        function ajouterAuPanier() {
            if (!voitureTrouvee) return;
            let panier = JSON.parse(localStorage.getItem("panier")) || [];
            panier.push(voitureTrouvee);
            localStorage.setItem("panier", JSON.stringify(panier));
            alert("Voiture ajoutée au panier !");
        }