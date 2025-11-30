        const params = new URLSearchParams(window.location.search);
        document.getElementById("r_nom").textContent = params.get("nom") || "";
        document.getElementById("r_email").textContent = params.get("email") || "";
        document.getElementById("r_tel").textContent = params.get("telephone") || "";
        document.getElementById("r_adresse").textContent = params.get("adresse") || "";
        document.getElementById("r_pay").textContent = params.get("pay") || "";
        document.getElementById("r_numero").textContent= params.get("numero") || "";
        document.getElementById("r_date").textContent = new Date().toLocaleString();

        let panier = JSON.parse(localStorage.getItem("panier")) || [];

        let tbody = document.getElementById("liste_voitures");
        let total = 0;

        panier.forEach(v => {
            let tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${v.marque} ${v.model}</td>
                <td>${v.carburants}</td>
                <td>${v.puissance_reel} ch</td>
                <td>${v.boite_vitesse}</td>
                <td>${v.prix}</td>
            `;

            tbody.appendChild(tr);
            total += Number(v.prix);
        });

        document.getElementById("total_prix").textContent = total.toFixed(2);