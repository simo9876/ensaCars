let panier = JSON.parse(localStorage.getItem("panier")) || [];
        const container = document.getElementById("panier");
        function afficherPanier() {
            container.innerHTML = "";
            if (panier.length === 0) {
                container.innerHTML = "<p>Le panier est vide.</p>";
                return;
            }
            panier.forEach((v,i) => {
                container.innerHTML += `
                <div class="voiture">
                    <h3>${v.marque} ${v.model}</h3>
                    <img src="${v.image}">
                    <ul class="voituredescription">
                        <li><strong>Carburant :</strong> ${v.carburants}</li>
                        <li><strong>Puissance :</strong> ${v.puissance_reel} ch</li>
                        <li><strong>Boîte :</strong> ${v.boite_vitesse}</li>
                    </ul>
                    <div class="voiturefooter">
                        <span class="price-tag">€${v.prix}</span>
                        <button class="delete-btn" onclick="supprimer(${i})">Supprimer</button>
                    </div>
                </div>
                `;
            });
        }

        // Supprimer un article
        function supprimer(index){
            panier.splice(index,1);
            localStorage.setItem("panier", JSON.stringify(panier));
            afficherPanier();
        }

        // Vider tout
        function viderPanier() {
            localStorage.removeItem("panier");
            panier = [];
            afficherPanier();
        }

        // Afficher initialement
        afficherPanier();
        //formulaire apres button achat
        function acheterpanier(){
            if(panier.length ===0){
                alert('le panier est vide!');
                return;
            }
            document.getElementById("achatform").style.display="block";
        }

        function validerpanier(){
            let nomcomplet = document.getElementById("nom").value;
            let emailacheuteur = document.getElementById("email").value;
            let telephone = document.getElementById("telephone").value;
            let adresse = document.getElementById("adresse").value;
            let paiementmethod = document.getElementById("modePaiement").value;
            let numerofacture = Math.floor(10000000 + Math.random() * 90000000);
            // Vérification des champs obligatoires
            if (nomcomplet === "" || emailacheuteur === "" || telephone === "" || adresse === "" || paiementmethod === "") {
                alert("Veuillez remplir toutes les informations avant de continuer!");
                return; // Arrête la fonction, ne passe pas au reçu
            }
            // ouvrir une nouvelle page en envoyant les données
             window.location.href = `recu.html?nom=${encodeURIComponent(nomcomplet)}&email=${encodeURIComponent(emailacheuteur)}&telephone=${encodeURIComponent(telephone)}&adresse=${encodeURIComponent(adresse)}&pay=${encodeURIComponent(paiementmethod)}&numero=${encodeURIComponent(numerofacture)}`;
        }