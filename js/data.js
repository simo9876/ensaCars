const data = {
  "cars": [
    {
      "marque": "Renault",
      "models": [
        {"model": "Clio", "carburants": "Essence", "puissance_reel": 145, "boite_vitesse": "Auto (E-Tech)", "image": "https://autohub.ma/wp-content/uploads/2024/05/renault-clio-maroc.webp", "prix": 18000},
        {"model": "Captur", "carburants": "Essence", "puissance_reel": 160, "boite_vitesse": "Auto", "image": "https://www.argusautomobile.tn/wp-content/uploads/2021/07/kaptur.jpg", "prix": 22000},
        {"model": "Megane", "carburants": "Essence", "puissance_reel": 160, "boite_vitesse": "Auto", "image": "https://images.elite-auto.fr/visuel/RENAULT/350x233/renault_20meganephevintnswg4fb_angularfront.png", "prix": 25000},
        {"model": "Austral", "carburants": "Hybride", "puissance_reel": 220, "boite_vitesse": "Auto", "image": "https://s3-eu-west-1.amazonaws.com/staticeu.izmocars.com/toolkit/commonassets/2025/25renault/25renaultaustralhteknoesprtalpnsu1bfr/25renaultaustralhteknoesprtalpnsu1bfr_animations/colorpix/fr/400x300/renault_25australhteknoesprtalpnsu1bfr_blancnacr%C3%A9_angular-front.webp", "prix": 33000},
        {"model": "Arkana", "carburants": "Essence", "puissance_reel": 145, "boite_vitesse": "Auto", "image": "https://image.elite-auto.fr/visuel/RENAULT/renault_24arkanahevespritalpinesu1fb_angularfront.png", "prix": 27000},
        {"model": "Scenic E-Tech", "carburants": "Électrique", "puissance_reel": 260, "boite_vitesse": "Auto (réducteur EV)", "image": "https://cdn-datak.motork.net/configurator-imgs/cars/fr/800/RENAULT/SCENIC-E-TECH-ELECTRIC/43219_SUV-VP-5-PORTES/renault-scenic.png", "prix": 38400},
        {"model": "Clio", "carburants": "Hybride", "puissance_reel": 165, "boite_vitesse": "Auto (E-Tech)", "image": "https://autohub.ma/wp-content/uploads/2024/05/renault-clio-maroc.webp", "prix": 19800},
        {"model": "Captur", "carburants": "Hybride", "puissance_reel": 180, "boite_vitesse": "Auto", "image": "https://www.argusautomobile.tn/wp-content/uploads/2021/07/kaptur.jpg", "prix": 24200},
        {"model": "Megane", "carburants": "Hybride", "puissance_reel": 180, "boite_vitesse": "Auto", "image": "https://images.elite-auto.fr/visuel/RENAULT/350x233/renault_20meganephevintnswg4fb_angularfront.png", "prix": 27500},
        {"model": "Arkana", "carburants": "Hybride", "puissance_reel": 165, "boite_vitesse": "Auto", "image": "https://image.elite-auto.fr/visuel/RENAULT/renault_24arkanahevespritalpinesu1fb_angularfront.png", "prix": 29700}
      ]
    },
    {
      "marque": "Peugeot",
      "models": [
        {"model": "208", "carburants": "Essence", "puissance_reel": 156, "boite_vitesse": "Auto / EV", "image": "https://www.peugeot.ma/content/dam/peugeot/master/b2c/our-range/showroom/208/2023-10-new-208/mobile/208_GTEV_M.jpg?imwidth=768", "prix": 20000},
        {"model": "2008", "carburants": "Essence", "puissance_reel": 156, "boite_vitesse": "Auto / EV", "image": "https://www.peugeottunisie.com/content/dam/peugeot/tunisia/b2c/our-range/new-2008/2008_ACTIVEEV_D_768_468.png?imwidth=768", "prix": 25000},
        {"model": "308", "carburants": "Essence", "puissance_reel": 180, "boite_vitesse": "Auto", "image": "https://autohub.ma/wp-content/uploads/2024/05/peugeot-308-1.webp", "prix": 28000},
        {"model": "3008", "carburants": "Essence", "puissance_reel": 230, "boite_vitesse": "Auto", "image": "https://images.caradisiac.com/images/7/3/1/8/207318/S1-a-contre-courant-les-alternatives-thermiques-au-suv-peugeot-e-3008-791649.jpg", "prix": 35000},
        {"model": "408", "carburants": "Essence", "puissance_reel": 225, "boite_vitesse": "Auto", "image": "https://www.cizgirentacar.com/upcache/araclar/351/351-a.png", "prix": 33000},
        {"model": "508", "carburants": "Essence", "puissance_reel": 225, "boite_vitesse": "Auto", "image": "https://www.peugeot.ma/content/dam/peugeot/morocco/b2c/508/affirmez-votre-style/508_GRIS_ARTENSE%20(1).jpg", "prix": 36000},
        {"model": "208", "carburants": "Électrique", "puissance_reel": 196, "boite_vitesse": "Auto / EV", "image": "https://www.peugeot.ma/content/dam/peugeot/master/b2c/our-range/showroom/208/2023-10-new-208/mobile/208_GTEV_M.jpg?imwidth=768", "prix": 24000},
        {"model": "2008", "carburants": "Électrique", "puissance_reel": 196, "boite_vitesse": "Auto / EV", "image": "https://www.peugeottunisie.com/content/dam/peugeot/tunisia/b2c/our-range/new-2008/2008_ACTIVEEV_D_768_468.png?imwidth=768", "prix": 30000},
        {"model": "308", "carburants": "Diesel", "puissance_reel": 190, "boite_vitesse": "Auto", "image": "https://autohub.ma/wp-content/uploads/2024/05/peugeot-308-1.webp", "prix": 26600},
        {"model": "3008", "carburants": "Électrique", "puissance_reel": 270, "boite_vitesse": "Auto", "image": "https://images.caradisiac.com/images/7/3/1/8/207318/S1-a-contre-courant-les-alternatives-thermiques-au-suv-peugeot-e-3008-791649.jpg", "prix": 42000},
        {"model": "408", "carburants": "Hybride", "puissance_reel": 245, "boite_vitesse": "Auto", "image": "https://www.cizgirentacar.com/upcache/araclar/351/351-a.png", "prix": 36300},
        {"model": "508", "carburants": "Hybride", "puissance_reel": 245, "boite_vitesse": "Auto", "image": "https://www.peugeot.ma/content/dam/peugeot/morocco/b2c/508/affirmez-votre-style/508_GRIS_ARTENSE%20(1).jpg", "prix": 39600}
      ]
    },
    {
      "marque": "Audi",
      "models": [
        {"model": "A3", "carburants": "Essence", "puissance_reel": 150, "boite_vitesse": "S tronic", "image": "https://autohub.ma/wp-content/uploads/2024/06/audi-maroc-a3-spotback.webp", "prix": 30000},
        {"model": "A3", "carburants": "Diesel", "puissance_reel": 160, "boite_vitesse": "S tronic", "image": "https://autohub.ma/wp-content/uploads/2024/06/audi-maroc-a3-spotback.webp", "prix": 28500},
        {"model": "A3", "carburants": "Hybride", "puissance_reel": 170, "boite_vitesse": "S tronic", "image": "https://autohub.ma/wp-content/uploads/2024/06/audi-maroc-a3-spotback.webp", "prix": 33000},
        {"model": "A4", "carburants": "Essence", "puissance_reel": 204, "boite_vitesse": "S tronic", "image": "https://stimg.cardekho.com/images/car-images/930x620/Audi/A4/10548/1689673922795/221_Tango-Red-Metallic_d2525a.jpg?tr=w-420", "prix": 40000},
        {"model": "A4", "carburants": "Diesel", "puissance_reel": 214, "boite_vitesse": "S tronic", "image": "https://stimg.cardekho.com/images/car-images/930x620/Audi/A4/10548/1689673922795/221_Tango-Red-Metallic_d2525a.jpg?tr=w-420", "prix": 38000},
        {"model": "A6", "carburants": "Essence", "puissance_reel": 245, "boite_vitesse": "S tronic", "image": "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/39472/a6-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80", "prix": 55000},
        {"model": "A6", "carburants": "Hybride", "puissance_reel": 265, "boite_vitesse": "S tronic", "image": "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/39472/a6-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80", "prix": 60500},
        {"model": "Q3", "carburants": "Essence", "puissance_reel": 180, "boite_vitesse": "S tronic", "image": "https://autohub.ma/wp-content/uploads/2024/06/audi-maroc-q3.webp", "prix": 45000},
        {"model": "Q3", "carburants": "Diesel", "puissance_reel": 190, "boite_vitesse": "S tronic", "image": "https://autohub.ma/wp-content/uploads/2024/06/audi-maroc-q3.webp", "prix": 42750},
        {"model": "Q3", "carburants": "Hybride", "puissance_reel": 200, "boite_vitesse": "S tronic", "image": "https://autohub.ma/wp-content/uploads/2024/06/audi-maroc-q3.webp", "prix": 49500},
        {"model": "Q5", "carburants": "Essence", "puissance_reel": 265, "boite_vitesse": "S tronic", "image": "https://autohub.ma/wp-content/uploads/2024/06/audi-maroc-q5.webp", "prix": 60000},
        {"model": "Q5", "carburants": "Hybride", "puissance_reel": 285, "boite_vitesse": "S tronic", "image": "https://autohub.ma/wp-content/uploads/2024/06/audi-maroc-q5.webp", "prix": 66000},
        {"model": "Q5", "carburants": "Diesel", "puissance_reel": 275, "boite_vitesse": "S tronic", "image": "https://autohub.ma/wp-content/uploads/2024/06/audi-maroc-q5.webp", "prix": 57000},
        {"model": "e-tron", "carburants": "Électrique", "puissance_reel": 340, "boite_vitesse": "Auto (EV)", "image": "https://images.dealer.com/ddc/vehicles/2025/Audi/S%20e-tron%20GT/Sedan/perspective/front-left/2025_76.png", "prix": 84000}
      ]
    },
    {
      "marque": "Mercedes",
      "models": [
        {"model": "A-Class", "carburants": "Essence", "puissance_reel": 163, "boite_vitesse": "Auto (7G-DCT)", "image": "https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy/auto-client/585ce6022b7e1bd5e4c371bd0ecd9539/a200.png", "prix": 35000},
        {"model": "A-Class", "carburants": "Diesel", "puissance_reel": 173, "boite_vitesse": "Auto (7G-DCT)", "image": "https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy/auto-client/585ce6022b7e1bd5e4c371bd0ecd9539/a200.png", "prix": 33250},
        {"model": "A-Class", "carburants": "Hybride", "puissance_reel": 183, "boite_vitesse": "Auto (7G-DCT)", "image": "https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy/auto-client/585ce6022b7e1bd5e4c371bd0ecd9539/a200.png", "prix": 38500},
        {"model": "C-Class", "carburants": "Essence", "puissance_reel": 204, "boite_vitesse": "Auto (9G-Tronic)", "image": "https://amudynecep.cloudimg.io/v7/https://s3.eu-central-1.amazonaws.com/wensink-nl/08/cla-coupe-amg-line-uitvoering-2.png?width=540&height=304", "prix": 45000},
        {"model": "C-Class", "carburants": "Hybride", "puissance_reel": 224, "boite_vitesse": "Auto (9G-Tronic)", "image": "https://amudynecep.cloudimg.io/v7/https://s3.eu-central-1.amazonaws.com/wensink-nl/08/cla-coupe-amg-line-uitvoering-2.png?width=540&height=304", "prix": 49500},
        {"model": "E-Class", "carburants": "Essence", "puissance_reel": 313, "boite_vitesse": "Auto (9G-Tronic)", "image": "https://imageonthefly.autodatadirect.com/images/?width=1200&height=900&IMG=USD40MBC681A021001.jpg", "prix": 70000},
        {"model": "E-Class", "carburants": "Hybride", "puissance_reel": 333, "boite_vitesse": "Auto (9G-Tronic)", "image": "https://imageonthefly.autodatadirect.com/images/?width=1200&height=900&IMG=USD40MBC681A021001.jpg", "prix": 77000},
        {"model": "GLA", "carburants": "Essence", "puissance_reel": 224, "boite_vitesse": "Auto", "image": "https://www.mercedes-benz.fr/content/dam/hq/passengercars/cars/gla/gla-suv-h247-fl-pi/modeloverview/03-2023/images/mercedes-gla-h247-modeloverview-696x392-03-2023.png", "prix": 50000},
        {"model": "GLA", "carburants": "Hybride", "puissance_reel": 244, "boite_vitesse": "Auto", "image": "https://www.mercedes-benz.fr/content/dam/hq/passengercars/cars/gla/gla-suv-h247-fl-pi/modeloverview/03-2023/images/mercedes-gla-h247-modeloverview-696x392-03-2023.png", "prix": 55000},
        {"model": "GLC", "carburants": "Hybride", "puissance_reel": 333, "boite_vitesse": "Auto", "image": "https://media.oneweb.mercedes-benz.com/images/dynamic/europe/FR/254602/806_056/iris.png?q=COSY-EU-100-1713d0VXq5WFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtGyUtsd1JpcUfwFuXGEZT3J0l30fOB2Ng1bApjkbI5uV6JQC3qSpkzNRmdm7jZ6qhKVFKF%25vq9UTyLRDGfYaxWoErH1dItn8wfQ2oiZEqpM4FlRjTg926n6PD87bSeWiwWtsd4oVcUfC%25NXGEzyEJ0l7HfOB2KgFbApvPlI5uLQxQC3akWkzNHmxm7jQ63hKVk0Q%25vqmIlyLRscWYaxU0YrH1GBln8w0Q3oiZBklM4FAs2Tg95bn6PDaksSeWHXutsd8ZDcUfiMcXGE4TBJ0lgCVOB2Pz%25bApe7bI5usKDQC3UnpkzNpTwm7ju6ohKV3YQ%25vq8tTyLRiO6Yax4bJrH1gObnMr%25E2fzhI5uKMTQmIwlzkhQ25nm7jGcZhKVU0b%25vq7vqyLRKLfYaxvoxrH1LMOn8waV2oiZHIfM4F8UpTg9jQO6PDVrDSeWsmItsdUs3cUfGU6XGE0aSJ0lB4xOBi1aftkV3xb15pGfxd2rbpldCdcqcgVGB4NPVHF8ukSa0Y&BKGND=9&IMGT=P27&cp=U7lLKRUtPa6KAFr8s_ubHw&uni=m&POV=BE040,PZM", "prix": 71500},
        {"model": "GLC", "carburants": "Diesel", "puissance_reel": 323, "boite_vitesse": "Auto", "image": "https://media.oneweb.mercedes-benz.com/images/dynamic/europe/FR/254602/806_056/iris.png?q=COSY-EU-100-1713d0VXq5WFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtGyUtsd1JpcUfwFuXGEZT3J0l30fOB2Ng1bApjkbI5uV6JQC3qSpkzNRmdm7jZ6qhKVFKF%25vq9UTyLRDGfYaxWoErH1dItn8wfQ2oiZEqpM4FlRjTg926n6PD87bSeWiwWtsd4oVcUfC%25NXGEzyEJ0l7HfOB2KgFbApvPlI5uLQxQC3akWkzNHmxm7jQ63hKVk0Q%25vqmIlyLRscWYaxU0YrH1GBln8w0Q3oiZBklM4FAs2Tg95bn6PDaksSeWHXutsd8ZDcUfiMcXGE4TBJ0lgCVOB2Pz%25bApe7bI5usKDQC3UnpkzNpTwm7ju6ohKV3YQ%25vq8tTyLRiO6Yax4bJrH1gObnMr%25E2fzhI5uKMTQmIwlzkhQ25nm7jGcZhKVU0b%25vq7vqyLRKLfYaxvoxrH1LMOn8waV2oiZHIfM4F8UpTg9jQO6PDVrDSeWsmItsdUs3cUfGU6XGE0aSJ0lB4xOBi1aftkV3xb15pGfxd2rbpldCdcqcgVGB4NPVHF8ukSa0Y&BKGND=9&IMGT=P27&cp=U7lLKRUtPa6KAFr8s_ubHw&uni=m&POV=BE040,PZM", "prix": 61750},
        {"model": "EQC", "carburants": "Électrique", "puissance_reel": 448, "boite_vitesse": "Auto (EV)", "image": "https://www.mercedes-kroely.fr/mediasecure-getphoto?dossier=metas&photo=GetPhoto__11__322111425.webp", "prix": 90000}
      ]
    },
    {
      "marque": "Volkswagen",
      "models": [
        {"model": "Polo", "carburants": "Essence", "puissance_reel": 95, "boite_vitesse": "Manuelle / DSG", "image": "https://i.postimg.cc/sfGB2yKb/download.jpg", "prix": 18000},
        {"model": "Golf", "carburants": "Essence", "puissance_reel": 150, "boite_vitesse": "DSG", "image": "https://i.postimg.cc/N00FvwKY/download.jpg", "prix": 30000},
        {"model": "Golf", "carburants": "Diesel", "puissance_reel": 160, "boite_vitesse": "DSG", "image": "https://i.postimg.cc/N00FvwKY/download.jpg", "prix": 28500},
        {"model": "Golf", "carburants": "Hybride", "puissance_reel": 170, "boite_vitesse": "DSG", "image": "https://i.postimg.cc/N00FvwKY/download.jpg", "prix": 33000},
        {"model": "T-Roc", "carburants": "Essence", "puissance_reel": 150, "boite_vitesse": "DSG", "image": "https://i.postimg.cc/qRPvKhjR/download.jpg", "prix": 32000},
        {"model": "T-Roc", "carburants": "Diesel", "puissance_reel": 160, "boite_vitesse": "DSG", "image": "https://i.postimg.cc/qRPvKhjR/download.jpg", "prix": 30400},
        {"model": "Tiguan", "carburants": "Essence", "puissance_reel": 200, "boite_vitesse": "DSG", "image": "https://i.postimg.cc/vmDYSLKH/download.jpg", "prix": 40000},
        {"model": "Tiguan", "carburants": "Hybride", "puissance_reel": 220, "boite_vitesse": "DSG", "image": "https://i.postimg.cc/vmDYSLKH/download.jpg", "prix": 44000},
        {"model": "Tiguan", "carburants": "Diesel", "puissance_reel": 210, "boite_vitesse": "DSG", "image": "https://i.postimg.cc/vmDYSLKH/download.jpg", "prix": 38000},
        {"model": "Passat", "carburants": "Hybride", "puissance_reel": 238, "boite_vitesse": "DSG", "image": "https://i.postimg.cc/L5k2ZyJW/download.jpg", "prix": 49500},
        {"model": "Passat", "carburants": "Diesel", "puissance_reel": 228, "boite_vitesse": "DSG", "image": "https://i.postimg.cc/L5k2ZyJW/download.jpghttps://i.postimg.cc/L5k2ZyJW/download.jpg", "prix": 42750},
        {"model": "ID.4", "carburants": "Électrique", "puissance_reel": 244, "boite_vitesse": "Auto (EV)", "image": "https://i.postimg.cc/hGJn04JG/download.jpg", "prix": 60000}
      ]
    },
    {
      "marque": "BMW",
      "models": [
        {"model": "Serie 1", "carburants": "Essence", "puissance_reel": 136, "boite_vitesse": "Auto / Manuelle", "image": "https://i.postimg.cc/T1shCNRF/download.jpg", "prix": 30000},
        {"model": "Serie 1", "carburants": "Diesel", "puissance_reel": 146, "boite_vitesse": "Auto / Manuelle", "image": "https://i.postimg.cc/T1shCNRF/download.jpg", "prix": 28500},
        {"model": "Serie 3", "carburants": "Essence", "puissance_reel": 292, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/3Jykdh1y/download.jpg", "prix": 55000},
        {"model": "Serie 3", "carburants": "Hybride", "puissance_reel": 312, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/3Jykdh1y/download.jpg", "prix": 60500},
        {"model": "Serie 5", "carburants": "Essence", "puissance_reel": 340, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/d0F3HyYP/download.jpg", "prix": 75000},
        {"model": "Serie 5", "carburants": "Hybride", "puissance_reel": 360, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/d0F3HyYP/download.jpg", "prix": 82500},
        {"model": "Serie 5", "carburants": "Électrique", "puissance_reel": 380, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/d0F3HyYP/download.jpg", "prix": 90000},
        {"model": "X1", "carburants": "Essence", "puissance_reel": 240, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/br4NQGgh/download.jpg", "prix": 50000},
        {"model": "X1", "carburants": "Hybride", "puissance_reel": 260, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/br4NQGgh/download.jpg", "prix": 55000},
        {"model": "X1", "carburants": "Électrique", "puissance_reel": 280, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/br4NQGgh/download.jpg", "prix": 60000},
        {"model": "X3", "carburants": "Essence", "puissance_reel": 286, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/bY4t0dsJ/download.jpg", "prix": 60000},
        {"model": "X3", "carburants": "Diesel", "puissance_reel": 296, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/bY4t0dsJ/download.jpg", "prix": 57000},
        {"model": "X3", "carburants": "Hybride", "puissance_reel": 306, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/bY4t0dsJ/download.jpg", "prix": 66000},
        {"model": "i4", "carburants": "Électrique", "puissance_reel": 380, "boite_vitesse": "Auto (EV)", "image": "https://i.postimg.cc/cLBtNmTQ/download.jpg", "prix": 84000}
      ]
    },
    {
    "marque": "Dacia",
    "models": [
      {"model": "Sandero", "carburants": "Essence", "puissance_reel": 90, "boite_vitesse": "Manuelle", "image": "https://i.postimg.cc/bN6RjqJY/download.jpg", "prix": 12000},
      {"model": "Sandero", "carburants": "GPL", "puissance_reel": 95, "boite_vitesse": "Manuelle", "image": "https://i.postimg.cc/bN6RjqJY/download.jpg", "prix": 11640},
      {"model": "Sandero Stepway", "carburants": "Essence", "puissance_reel": 100, "boite_vitesse": "Manuelle", "image": "https://i.postimg.cc/bN6RjqJY/download.jpg", "prix": 14000},
      {"model": "Sandero Stepway", "carburants": "GPL", "puissance_reel": 105, "boite_vitesse": "Manuelle", "image": "https://i.postimg.cc/bN6RjqJY/download.jpg", "prix": 13580},
      {"model": "Duster", "carburants": "Essence", "puissance_reel": 130, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/50qwKVGG/download.jpg", "prix": 18000},
      {"model": "Duster", "carburants": "Diesel", "puissance_reel": 140, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/50qwKVGG/download.jpg", "prix": 17100},
      {"model": "Jogger", "carburants": "Essence", "puissance_reel": 140, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/0yM7RmF6/download.jpg", "prix": 20000},
      {"model": "Jogger", "carburants": "Hybride", "puissance_reel": 160, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/0yM7RmF6/download.jpg", "prix": 22000},
      {"model": "Spring", "carburants": "Électrique", "puissance_reel": 105, "boite_vitesse": "Auto (EV)", "image": "https://i.postimg.cc/59szXnM7/download.jpg", "prix": 18000},
      {"model": "Lodgy", "carburants": "Essence", "puissance_reel": 115, "boite_vitesse": "Manuelle", "image": "https://i.postimg.cc/vmwgJKWc/download.jpg", "prix": 17000},
      {"model": "Lodgy", "carburants": "Diesel", "puissance_reel": 125, "boite_vitesse": "Manuelle", "image": "https://i.postimg.cc/vmwgJKWc/download.jpg", "prix": 16150}
    ]
  },
  {
    "marque": "Hyundai",
    "models": [
      {"model": "i10", "carburants": "Essence", "puissance_reel": 84, "boite_vitesse": "Manuelle / Auto", "image": "https://i.postimg.cc/CK9PpScM/download.jpg", "prix": 11000},
      {"model": "i20", "carburants": "Essence", "puissance_reel": 100, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/ZnSw0jtS/download.jpg", "prix": 14000},
      {"model": "i20", "carburants": "Hybride", "puissance_reel": 120, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/ZnSw0jtS/download.jpg", "prix": 15400},
      {"model": "i30", "carburants": "Essence", "puissance_reel": 120, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/3J3LTLFG/download.jpg", "prix": 18000},
      {"model": "i30", "carburants": "Diesel", "puissance_reel": 130, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/3J3LTLFG/download.jpg", "prix": 17100},
      {"model": "Kona", "carburants": "Essence", "puissance_reel": 198, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/Z5Mj6Jtj/download.jpg", "prix": 30000},
      {"model": "Kona", "carburants": "Hybride", "puissance_reel": 218, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/Z5Mj6Jtj/download.jpg", "prix": 33000},
      {"model": "Kona", "carburants": "Électrique", "puissance_reel": 238, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/Z5Mj6Jtj/download.jpg", "prix": 36000},
      {"model": "Tucson", "carburants": "Essence", "puissance_reel": 230, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/4dz5CtKW/download.jpg", "prix": 35000},
      {"model": "Tucson", "carburants": "Hybride", "puissance_reel": 250, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/4dz5CtKW/download.jpg", "prix": 38500},
      {"model": "Tucson", "carburants": "Diesel", "puissance_reel": 240, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/4dz5CtKW/download.jpg", "prix": 33250},
      {"model": "IONIQ 5", "carburants": "Électrique", "puissance_reel": 268, "boite_vitesse": "Auto (EV)", "image": "https://i.postimg.cc/bNYRMZq2/download.jpg", "prix": 54000}
    ]
  },
  {
    "marque": "Citroën",
    "models": [
      {"model": "C3", "carburants": "Essence", "puissance_reel": 110, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/J4bWTd4P/download.jpg", "prix": 15000},
      {"model": "C3", "carburants": "Diesel", "puissance_reel": 120, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/J4bWTd4P/download.jpg", "prix": 14250},
      {"model": "C3 Aircross", "carburants": "Essence", "puissance_reel": 110, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/wBbKtCFw/download.jpg", "prix": 17000},
      {"model": "C3 Aircross", "carburants": "Diesel", "puissance_reel": 120, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/wBbKtCFw/download.jpg", "prix": 16150},
      {"model": "C4", "carburants": "Essence", "puissance_reel": 136, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/C1WW7b3P/download.jpg", "prix": 22000},
      {"model": "C4", "carburants": "Hybride", "puissance_reel": 156, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/C1WW7b3P/download.jpg", "prix": 24200},
      {"model": "C4", "carburants": "Électrique", "puissance_reel": 176, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/C1WW7b3P/download.jpg", "prix": 26400},
      {"model": "C4 X", "carburants": "Essence", "puissance_reel": 136, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/tCdLdZ2B/download.jpg", "prix": 24000},
      {"model": "C4 X", "carburants": "Électrique", "puissance_reel": 176, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/tCdLdZ2B/download.jpg", "prix": 28800},
      {"model": "C5 Aircross", "carburants": "Essence", "puissance_reel": 180, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/BvzyZxnf/download.jpg", "prix": 30000},
      {"model": "C5 Aircross", "carburants": "Hybride", "puissance_reel": 200, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/BvzyZxnf/download.jpg", "prix": 33000},
      {"model": "Berlingo", "carburants": "Diesel", "puissance_reel": 146, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/xTP4Nr1v/download.jpg", "prix": 26600},
      {"model": "Berlingo", "carburants": "Électrique", "puissance_reel": 176, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/xTP4Nr1v/download.jpg", "prix": 33600}
    ]
  },
  {
    "marque": "Nissan",
    "models": [
      {"model": "Micra", "carburants": "Essence", "puissance_reel": 92, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/y6GqYCWW/download.jpg", "prix": 12000},
      {"model": "Juke", "carburants": "Essence", "puissance_reel": 143, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/Dz6D9ttZ/download.jpg", "prix": 18000},
      {"model": "Juke", "carburants": "Hybride", "puissance_reel": 163, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/Dz6D9ttZ/download.jpg", "prix": 19800},
      {"model": "Qashqai", "carburants": "Essence", "puissance_reel": 190, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/L5YbZhht/download.jpg", "prix": 28000},
      {"model": "Qashqai", "carburants": "Hybride", "puissance_reel": 210, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/L5YbZhht/download.jpg", "prix": 30800},
      {"model": "X-Trail", "carburants": "Hybride", "puissance_reel": 233, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/59DxKCBZ/download.jpg", "prix": 38500},
      {"model": "Leaf", "carburants": "Électrique", "puissance_reel": 190, "boite_vitesse": "Auto (EV)", "image": "https://i.postimg.cc/Xv2WfGNf/images.jpg", "prix": 36000},
      {"model": "Ariya", "carburants": "Électrique", "puissance_reel": 282, "boite_vitesse": "Auto (EV)", "image": "https://i.postimg.cc/G2V1fWyq/download.jpg", "prix": 54000}
    ]
  },
  {
    "marque": "Kia",
    "models": [
      {"model": "Picanto", "carburants": "Essence", "puissance_reel": 84, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/GmV9k5M7/images.jpg", "prix": 11000},
      {"model": "Rio", "carburants": "Essence", "puissance_reel": 100, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/XJ3jLS9g/download.jpg", "prix": 14000},
      {"model": "Ceed", "carburants": "Essence", "puissance_reel": 136, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/66MWrPqv/download.jpg", "prix": 20000},
      {"model": "Ceed", "carburants": "Diesel", "puissance_reel": 146, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/66MWrPqv/download.jpg", "prix": 19000},
      {"model": "Sportage", "carburants": "Essence", "puissance_reel": 230, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/TPjGp7B2/download.jpg", "prix": 35000},
      {"model": "Sportage", "carburants": "Hybride", "puissance_reel": 250, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/TPjGp7B2/download.jpg", "prix": 38500},
      {"model": "Sportage", "carburants": "Diesel", "puissance_reel": 240, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/TPjGp7B2/download.jpg", "prix": 33250},
      {"model": "Niro", "carburants": "Hybride", "puissance_reel": 224, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/GmGn5gLm/download.jpg", "prix": 44000},
      {"model": "Niro", "carburants": "Électrique", "puissance_reel": 244, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/GmGn5gLm/download.jpg", "prix": 48000},
      {"model": "EV6", "carburants": "Électrique", "puissance_reel": 269, "boite_vitesse": "Auto (EV)", "image": "https://i.postimg.cc/4d8D9rPf/images.jpg", "prix": 54000}
    ]
  },
  {
    "marque": "Porsche",
    "models": [
      {"model": "911 Carrera", "carburants": "Essence", "puissance_reel": 394, "boite_vitesse": "PDK / Manuelle", "image": "https://i.postimg.cc/W4GWVMrN/download.jpg", "prix": 120000},
      {"model": "911 Turbo S", "carburants": "Essence", "puissance_reel": 650, "boite_vitesse": "PDK", "image": "https://i.postimg.cc/PqXVQSPf/download.jpg", "prix": 220000},
      {"model": "Cayenne", "carburants": "Essence", "puissance_reel": 340, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/qv01p1cg/download.jpg", "prix": 90000},
      {"model": "Cayenne", "carburants": "Hybride", "puissance_reel": 360, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/qv01p1cg/download.jpg", "prix": 99000},
      {"model": "Macan", "carburants": "Essence", "puissance_reel": 265, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/63GrrZLn/download.jpg", "prix": 70000},
      {"model": "Taycan", "carburants": "Électrique", "puissance_reel": 570, "boite_vitesse": "Auto (EV)", "image": "https://i.postimg.cc/MpPVg59c/download.jpg", "prix": 144000},
      {"model": "Panamera", "carburants": "Essence", "puissance_reel": 550, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/TYTbwFS8/images.jpg", "prix": 150000},
      {"model": "Panamera", "carburants": "Hybride", "puissance_reel": 570, "boite_vitesse": "Auto", "image": "https://i.postimg.cc/TYTbwFS8/images.jpg", "prix": 165000}
    ]
  }
  ]
}
