const voituresSection = document.getElementById("voitures");
      const paginationContainer = document.getElementById("pagination");

      const marqueSelect = document.getElementById("marqueSelect");
      const modelSelect = document.getElementById("modelSelect");
      const carburantSelect = document.getElementById("carburant");
      const prixMinInput = document.getElementById("prixMin");
      const prixMaxInput = document.getElementById("prixMax");
      const btn = document.getElementById("btnRechercher");

      let toutesVoitures = [];
      let voituresAffichees = [];
      let currentPage = 1;
      const voituresParPage = 15;

      // charger toutes voitures
      data.cars.forEach(c => c.models.forEach(m => toutesVoitures.push({ ...m, marque: c.marque })));
      toutesVoitures = toutesVoitures.sort(() => Math.random() - 0.5);
      voituresAffichees = [...toutesVoitures];

      // remplir marques
      [...new Set(data.cars.map(c => c.marque))].forEach(m => {
        const opt = document.createElement("option");
        opt.value = m;
        opt.textContent = m;
        marqueSelect.appendChild(opt);
      });

      // mettre à jour modèles après marque
      marqueSelect.addEventListener("change", () => {
        modelSelect.innerHTML = '<option value="">-- Choisir un modèle --</option>';
        modelSelect.disabled = true;

        const marque = marqueSelect.value;
        if (!marque) return;

        const car = data.cars.find(c => c.marque === marque);
        [...new Set(car.models.map(m => m.model))].forEach(m => {
          const opt = document.createElement("option");
          opt.value = m;
          opt.textContent = m;
          modelSelect.appendChild(opt);
        });

        modelSelect.disabled = false;
      });

      // afficher voitures
      function afficherVoitures() {
        voituresSection.replaceChildren();
        paginationContainer.innerHTML = "";

        const start = (currentPage - 1) * voituresParPage;
        const end = start + voituresParPage;

        voituresAffichees.slice(start, end).forEach(v => {
          const card = document.createElement("div");
          card.className = "voiture-card";
          card.innerHTML = `
            <div class="prix">€${v.prix}</div>
            <img src="${v.image}" alt="${v.model}">
            <br><br><br>
            <h3>${v.marque} ${v.model}</h3>
            <p><strong>Carburant :</strong> ${v.carburants}</p>
            <button onclick="voirDetails('${v.marque}','${v.model}')">Voir détails</button>
          `;
          voituresSection.appendChild(card);
        });

        // pagination
        const totalPages = Math.ceil(voituresAffichees.length / voituresParPage);
        const pagination = document.createElement("div");
        pagination.className = "pagination";

        const btnPrev = document.createElement("button");
        btnPrev.textContent = "Préc";
        if (currentPage === 1) btnPrev.className = "disabled";
        else btnPrev.onclick = () => changerPage(currentPage - 1);
        pagination.appendChild(btnPrev);

        for (let i = 1; i <= totalPages; i++) {
          const btnPage = document.createElement("button");
          btnPage.textContent = i;
          if (i === currentPage) btnPage.className = "disabled";
          else btnPage.onclick = () => changerPage(i);
          pagination.appendChild(btnPage);
        }

        const btnNext = document.createElement("button");
        btnNext.textContent = "Suiv";
        if (currentPage === totalPages) btnNext.className = "disabled";
        else btnNext.onclick = () => changerPage(currentPage + 1);
        pagination.appendChild(btnNext);

        paginationContainer.appendChild(pagination);

        setTimeout(() => { if (window.sendHeight) window.sendHeight(); }, 50);
      }

      // changer page
      function changerPage(page) {
        const total = Math.ceil(voituresAffichees.length / voituresParPage);
        if (page < 1 || page > total) return;
        currentPage = page;
        afficherVoitures();
      }

      // recherche
      btn.addEventListener("click", () => {
        currentPage = 1;
        voituresAffichees = [...toutesVoitures];

        const marque = marqueSelect.value;
        const model = modelSelect.value;
        const carburant = carburantSelect.value;
        const prixMin = prixMinInput.value ? parseFloat(prixMinInput.value) : null;
        const prixMax = prixMaxInput.value ? parseFloat(prixMaxInput.value) : null;

        if (!marque && !model && !carburant && !prixMin && !prixMax) {
          alert("Veuillez remplir au moins un champ !");
          return;
        }
        if (model && !marque) {
          alert("Vous devez choisir une marque pour filtrer par modèle !");
          return;
        }

        if (marque) voituresAffichees = voituresAffichees.filter(v => v.marque === marque);
        if (model) voituresAffichees = voituresAffichees.filter(v => v.model === model);
        if (carburant) voituresAffichees = voituresAffichees.filter(v => v.carburants === carburant);
        if (prixMin !== null) voituresAffichees = voituresAffichees.filter(v => v.prix >= prixMin);
        if (prixMax !== null) voituresAffichees = voituresAffichees.filter(v => v.prix <= prixMax);

        if (voituresAffichees.length === 0) {
          voituresSection.innerHTML = "<p>Aucun résultat trouvé.</p>";
          paginationContainer.innerHTML = "";
          return;
        }

        afficherVoitures();
      });

      // details voiture
      function voirDetails(marque, model) {
        window.location.href = `detail.html?marque=${encodeURIComponent(marque)}&model=${encodeURIComponent(model)}`;
      }

      afficherVoitures();
      

      