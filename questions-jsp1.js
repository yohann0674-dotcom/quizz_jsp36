const masterJsp1Bank = [
    // --- INSTITUTION ET HISTOIRE ---
    {
        question: "Quel est le numéro d'appel d'urgence européen unique gratuit joignable dans toute l'Union européenne ?",
        options: ["18", "15", "112", "17"],
        correct: 2,
        rationale: "Le 112 est le numéro d'urgence européen unique, joignable partout en UE."
    },
    {
        question: "Quel est le numéro d'appel téléphonique direct pour joindre les Sapeurs-Pompiers en France ?",
        options: ["15", "17", "18", "196"],
        correct: 2,
        rationale: "Le 18 est le numéro national d'appel d'urgence pour les sapeurs-pompiers."
    },
    {
        question: "Quelle est la devise historique des Sapeurs-Pompiers de France ?",
        options: ["Courage et Dévouement", "Sauver ou Périr", "Honneur et Patrie", "Protéger et Servir"],
        correct: 1,
        rationale: "La devise 'Sauver ou Périr' symbolise l'engagement total du sapeur-pompier."
    },
    {
        question: "Quel organisme public gère et coordonne l'action des sapeurs-pompiers au niveau d'un département ?",
        options: ["Le Conseil Régional", "Le SDIS", "La Préfecture de Police", "La Mairie"],
        correct: 1,
        rationale: "Le Service Départemental d'Incendie et de Secours (SDIS) est l'établissement public départemental."
    },
    {
        question: "Que signifie le sigle SDIS ?",
        options: ["Service Départemental d'Incendie et de Secours", "Service Départemental d'Intervention et de Secours", "Secours Départemental d'Incendie et de Sécurité", "Société Départementale d'Incendie et de Secours"],
        correct: 0,
        rationale: "Le SDIS désigne le Service Départemental d'Incendie et de Secours."
    },
    {
        question: "Parmi ces grades, quel est le premier grade des sapeurs-pompiers (grade de début) ?",
        options: ["Caporal", "Sapeur de 2e classe", "Sergent", "Lieutenant"],
        correct: 1,
        rationale: "Le grade de sapeur de 2e classe est le premier grade de la hiérarchie."
    },
    {
        question: "Que signifie le sigle JSP ?",
        options: ["Jeune Sapeur-Pompier", "Journée des Sapeurs Professionnels", "Jeu de Secours Public", "Joint de Sécurité et Prévention"],
        correct: 0,
        rationale: "JSP désigne les Jeunes Sapeurs-Pompiers, formation civique et technique pour les adolescents."
    },
    {
        question: "Quel est l'âge minimum requis en général pour intégrer une section de Jeunes Sapeurs-Pompiers (JSP) ?",
        options: ["10 ans", "12 ans", "14 ans", "16 ans"],
        correct: 1,
        rationale: "Le recrutement en section JSP débute généralement autour de 12 ans."
    },
    {
        question: "Sous quelle double tutelle administrative et opérationnelle se trouve placé un SDIS ?",
        options: ["Le Maire et le Commissaire", "Le Préfet et le Président du Conseil Départemental", "Le Ministre de la Défense et le Président de Région", "Le Directeur de la Gendarmerie et le Maire"],
        correct: 1,
        rationale: "Le SDIS est placé sous l'autorité administrative du Préfet et sous l'autorité du Président du Conseil d'Administration du SDIS (Président du Conseil Départemental)."
    },
    {
        question: "Comment appelle-t-on le centre opérationnel départemental qui reçoit les appels 18 et 112 ?",
        options: ["Le CTA-CODIS", "Le CROSS", "Le CORG", "Le SAMU"],
        correct: 0,
        rationale: "Le CTA (Centre de Traitement de l'Alerte) couplé au CODIS (Centre Opérationnel Départemental d'Incendie et de Secours) gère les appels."
    },
    {
        question: "Qui était le commandant de la garde de Paris qui a structuré le corps des sapeurs-pompiers suite à l'incendie de l'ambassade d'Autriche en 1810 ?",
        options: ["Jean-Baptiste de Garsancon", "Le colonel Prieur", "Napoléon Bonaparte", "Le maréchal de Mac Mahon"],
        correct: 0,
        rationale: "C'est sous l'impulsion de l'Empire et de ses officiers que le bataillon des sapeurs-pompiers de Paris a été créé, avec des figures historiques marquantes."
    },
    {
        question: "Quel est le drapeau officiel des sapeurs-pompiers de France ?",
        options: ["Le drapeau tricolore aux armes de la République", "Le drapeau rouge frappé de la grenade à 8 flammes", "Le drapeau blanc de la protection civile", "Un drapeau aux couleurs de chaque département"],
        correct: 1,
        rationale: "Le drapeau des sapeurs-pompiers arbore traditionnellement les symboles de la République et la grenade des sapeurs-pompiers."
    },
    {
        question: "Qu'est-ce qu'un sapeur-pompier volontaire (SPV) ?",
        options: ["Un agent qui travaille gratuitement 24h/24", "Un citoyen qui exerce une activité professionnelle en plus de son engagement bénévole indemnisé pour secourir autrui", "Un militaire de carrière", "Un fonctionnaire exclusif du SDIS"],
        correct: 1,
        rationale: "Le SPV concède une partie de son temps libre aux missions de sécurité civile tout en exerçant une profession ou ses études."
    },
    {
        question: "Quel terme désigne les sapeurs-pompiers professionnels (SPP) ?",
        options: ["Des fonctionnaires territoriaux de la filière incendie et secours", "Des militaires de l'armée de terre", "Des salariés d'entreprise privée", "Des bénévoles de la Croix-Rouge"],
        correct: 0,
        rationale: "Les sapeurs-pompiers professionnels relèvent de la fonction publique territoriale."
    },
    {
        question: "Quel corps militaire fait partie intégrante de la sécurité civile française aux côtés des sapeurs-pompiers civils ?",
        options: ["La Légion Étrangère", "Les Formations Militaires de la Sécurité Civile (FORMSIC / Unités d'instruction)", "La Gendarmerie Maritime", "Les commandos marine uniquement"],
        correct: 1,
        rationale: "Les unités d'instruction et d'intervention de la sécurité civile (UIISC) sont des unités militaires."
    },

    // --- INCENDIE ET CLASSES DE FEU ---
    {
        question: "Quel feu de classe concerne les feux de solides (ex: bois, papier, carton, tissu) ?",
        options: ["Feux de classe A", "Feux de classe B", "Feux de classe C", "Feux de classe D"],
        correct: 0,
        rationale: "Les feux de classe A (ou feux de solides) forment des braises lors de leur combustion."
    },
    {
        question: "Quel feu de classe concerne les feux de liquides ou de solides liquéfiables (ex: essence, alcool, huile) ?",
        options: ["Feux de classe A", "Feux de classe B", "Feux de classe C", "Feux de classe D"],
        correct: 1,
        rationale: "Les feux de classe B correspondent aux feux de liquides ou de solides liquéfiables."
    },
    {
        question: "Quel feu de classe concerne les feux de gaz (ex: butane, propane, gaz de ville) ?",
        options: ["Feux de classe A", "Feux de classe B", "Feux de classe C", "Feux de classe D"],
        correct: 2,
        rationale: "Les feux de classe C concernent les feux de gaz."
    },
    {
        question: "Quel feu de classe concerne les feux de métaux (ex: aluminium, magnésium, sodium) ?",
        options: ["Feux de classe A", "Feux de classe B", "Feux de classe C", "Feux de classe D"],
        correct: 3,
        rationale: "Les feux de classe D sont spécifiques aux feux de métaux."
    },
    {
        question: "Comment appelle-t-on les trois éléments constituant le triangle du feu ?",
        options: ["Le combustible, le comburant, l'énergie d'activation", "L'eau, l'air, le feu", "La chaleur, la fumée, la flamme", "Le gaz, le bois, l'oxygène"],
        correct: 0,
        rationale: "Le feu nécessite un combustible, un comburant (oxygène) et une énergie d'activation (chaleur)."
    },
    {
        question: "Quel est le comburant le plus courant dans la nature pour alimenter un feu ?",
        options: ["L'azote", "L'oxygène de l'air", "Le dioxyde de carbone", "L'hydrogène"],
        correct: 1,
        rationale: "L'oxygène contenu dans l'air est le comburant principal des incendies."
    },
    {
        question: "Qu'appelle-t-on l'énergie d'activation dans le triangle du feu ?",
        options: ["La source de chaleur ou l'étincelle qui déclenche l'incendie", "La quantité de fumée dégagée", "Le poids du matériau brûlé", "La vitesse du vent"],
        correct: 0,
        rationale: "L'énergie d'activation apporte la chaleur initiale nécessaire pour amorcer la combustion."
    },
    {
        question: "Pourquoi ne doit-on jamais jeter d'eau sur un feu de friteuse (huile enflammée) ?",
        options: ["Parce que l'eau s'évapore trop vite et fait du bruit", "Parce que l'eau passe instantanément sous forme de vapeur en projection, provoquant une violente explosion de vapeur et d'huile enflammée (flash ou projection)", "Parce que cela éteint trop bien le feu", "Parce que cela rend l'huile toxique"],
        correct: 1,
        rationale: "L'eau se vaporise instantanément au contact de l'huile brûlante, provoquant une projection massive d'huile en feu."
    },
    {
        question: "Quel agent extincteur principal utilise-t-on le plus fréquemment pour éteindre un feu de classe A ?",
        options: ["L'eau (sous forme de jet pulvérisé ou plein)", "Le sable fin", "Le dioxyde de carbone pur", "L'huile moteur"],
        correct: 0,
        rationale: "L'eau est l'agent extincteur le plus efficace sur les feux de classe A grâce à son pouvoir de refroidissement."
    },
    {
        question: "Quel type d'extincteur est recommandé pour les feux d'origine électrique sous tension ?",
        options: ["L'extincteur à eau pulvérisée avec additif", "L'extincteur à dioxyde de carbone (CO2)", "L'extincteur à eau pure en jet plein", "Le seau d'eau"],
        correct: 1,
        rationale: "Le CO2 est un gaz non conducteur qui n'endommage pas les installations électriques et évite l'électrocution."
    },
    {
        question: "Qu'est-ce qu'un additif dans un extincteur à eau ?",
        options: ["Un produit chimique qui donne un parfum agréable", "Un produit qui améliore l'extinction (mouillant, émulseur) en modifiant les propriétés de l'eau", "Un colorant pour voir où l'eau tombe", "Un produit antigel pour l'hiver"],
        correct: 1,
        rationale: "L'additif réduit la tension superficielle de l'eau et aide à pénétrer les solides ou à former un film étanche."
    },
    {
        question: "Qu'appelle-t-on la combustion lente d'un matériau solide sans flamme visible ?",
        options: ["Une explosion", "Une incandescence (ou feu couvant)", "Une déflagration", "Une pyrolyse"],
        correct: 1,
        rationale: "L'incandescence est une combustion sans flamme apparente, typique des braises."
    },
    {
        question: "Qu'est-ce que la pyrolyse ?",
        options: ["La décomposition thermique d'un matériau organique sous l'effet de la chaleur en l'absence ou en faible quantité d'oxygène", "L'extinction d'un feu par le froid", "La fabrication du plastique", "L'arrosage d'un bâtiment"],
        correct: 0,
        rationale: "La pyrolyse précède souvent l'inflammation en libérant des gaz combustibles."
    },
    {
        question: "Quel est le principal danger mortel immédiat lors d'un incendie dans un local fermé pour les occupants ?",
        options: ["La brûlure directe par les flammes", "L'asphyxie et l'intoxication par les fumées toxiques (monoxyde de carbone)", "La chute des meubles", "Le bruit des sirènes"],
        correct: 1,
        rationale: "Les fumées et les gaz toxiques (notamment le monoxyde de carbone CO) tuent avant les flammes."
    },
    {
        question: "Qu'indique une couleur de fumée noire et dense lors d'un feu ?",
        options: ["La combustion de produits naturels comme le bois vert", "La combustion de matières plastiques, d'hydrocarbures ou de produits synthétiques", "Une absence de danger", "De la vapeur d'eau pure"],
        correct: 1,
        rationale: "Les fumées noires épaisses traduisent la combustion incomplète de matériaux organiques complexes ou d'hydrocarbures."
    },

    // --- MATÉRIEL ET LANCÉES ---
    {
        question: "Comment appelle-t-on le tuyau semi-rigide alimenté en eau en permanence sur un fourgon pompe-tonne ?",
        options: ["Le tuyau d'aspiration", "Le dévidoir tournant (DTR / LDT)", "La tuyauterie souple d'incendie", "La colonne sèche"],
        correct: 1,
        rationale: "Le dévidoir à tuyau semi-rigide (DTR) permet une mise en œuvre rapide pour les feux naissants."
    },
    {
        question: "Quel est le diamètre nominal le plus courant des tuyaux d'établissement de souples pour attaquer un feu urbain (refoulement) ?",
        options: ["Tuyau de 20 mm", "Tuyau de 45 mm (DN45) et 70 mm (DN70)", "Tuyau de 200 mm", "Tuyau de 10 mm"],
        correct: 1,
        rationale: "Les diamètres 45 mm et 70 mm sont les standards pour l'alimentation et l'attaque en intervention."
    },
    {
        question: "À quoi sert une lance à débit et pression variables (LDV) ?",
        options: ["À régler le débit d'eau et diffuser le jet (jet plat, jet pulvérisé conique, jet droit)", "À mesurer la température de la pièce", "À gonfler les pneumatiques du camion", "À couper l'électricité"],
        correct: 0,
        rationale: "La LDV est l'outil polyvalent par excellence du binôme d'attaque."
    },
    {
        question: "Qu'appelle-t-on un 'fourgon pompe-tonne' (FPT) ?",
        options: ["Un véhicule exclusivement destiné au transport du personnel", "Un engin de lutte contre l'incendie emportant une réserve d'eau et une pompe", "Un camion citerne feux de forêts hauturier", "Une ambulance de secours à victims"],
        correct: 1,
        rationale: "Le FPT est le véhicule de base de lutte contre l'incendie urbain et rural."
    },
    {
        question: "Quel équipement de protection individuelle (EPI) protège les voies respiratoires des fumées toxiques en ambiance enfumée ?",
        options: ["Un simple masque en tissu", "L'Appareil Respiratoire Isolant (ARI)", "Des lunettes de natation", "Un casque de chantier"],
        correct: 1,
        rationale: "L'ARI fournit de l'air respirable à partir d'une bouteille d'air comprimé."
    },
    {
        question: "De quoi est composé principalement le gaz contenu dans la bouteille d'un ARI de sapeur-pompier ?",
        options: ["De l'oxygène pur à 100%", "De l'air atmosphérique comprimé et filtré", "Du monoxyde de carbone", "De l'hélium"],
        correct: 1,
        rationale: "L'ARI contient de l'air comprimé (similaire à l'air ambiant, environ 21% d'oxygène et 79% d'azote)."
    },
    {
        question: "Quel est l'élément du casque de sapeur-pompier F1 qui protège la nuque contre les projections de goudron ou de chaleur ?",
        options: ["La visière transparente", "Le couvre-nuque (bavette en cuir ou aluminisée)", "La jugulaire", "La coque en polycarbonate"],
        correct: 1,
        rationale: "Le couvre-nuque protège l'arrière du cou des ruissellements de liquides chauds ou des braises."
    },
    {
        question: "À quoi sert la tenon ou la clef de hydrante (clef de Pompier / clef tricoise) ?",
        options: ["À ouvrir ou fermer les poteaux d'incendie et bouches d'incendie sous pression", "À ouvrir les portes de voitures", "À démarrer le camion", "À réparer les tuyaux percés"],
        correct: 0,
        rationale: "La clef de Poteau d'Incendie (clef tricoise ou pentagonale) est indispensable pour manoeuvrer la prise d'eau sur le réseau."
    },
    {
        question: "Comment appelle-t-on un point d'eau fixe extérieur implanté sur la voie publique et relié au réseau d'eau sous pression ?",
        options: ["Une piscine municipale", "Un poteau d'incendie (PI) ou une bouche d'incendie (BI)", "Un château d'eau", "Une citerne souple"],
        correct: 1,
        rationale: "Les PI et BI constituent le réseau public de défense extérieure contre l'incendie (DECI)."
    },
    {
        question: "Qu'est-ce qu'une colonne sèche dans un immeuble élevé (IGH ou immeuble d'habitation) ?",
        options: ["Une canalisation fixe vide traversant l'immeuble verticalement, permettant aux pompiers d'y injecter de l'eau depuis le rez-de-chaussée", "Un tuyau qui sèche tout seul après utilisation", "Un système de chauffage par air chaud", "Une douche de décontamination"],
        correct: 0,
        rationale: "La colonne sèche évite d'avoir à dérouler des centaines de mètres de tuyaux dans les cages d'escalier des grands immeubles."
    },

    // --- SECOURS À PERSONNES (INITIATION / PSC1) ---
    {
        question: "Quelle est la première action à mener face à un accident ou une situation d'urgence avant toute chose ?",
        options: ["Fuir en courant", "Protéger (pour éviter suraccident)", "Donner à boire à la victime", "Déplacer la victime brutalement"],
        correct: 1,
        rationale: "La règle de base est de S'assurer de la Sécurité (Protéger), puis Examiner, Alerter, Secourir."
    },
    {
        question: "Que doit comporter impérativement un message d'alerte clair aux services de secours (18 ou 112) ?",
        options: ["Le numéro de téléphone, la nature du problème, l'adresse exacte, le nombre de victimes et leur état", "Juste le prénom de l'appelant", "La météo du jour", "La marque de la voiture accidentée"],
        correct: 0,
        rationale: "Un message d'alerte précis permet au CTA d'envoyer les moyens adaptés immédiatement sans perdre de temps."
    },
    {
        question: "Comment s'assure-t-on qu'une victime inconsciente respire lors du bilan primaire ?",
        options: ["En lui mettant un miroir devant la bouche", "En regardant si le ventre et la poitrine se soulèvent et en sentant le flux d'air tout en écoutant les bruits respiratoires pendant 10 secondes maximum", "En lui secouant les épaules vigoureusement", "En prenant sa tension artérielle"],
        correct: 1,
        rationale: "L'évaluation de la respiration se fait en visualisant les mouvements thoraciques et en écoutant/sentant l'air."
    },
    {
        question: "Quelle est la position dans laquelle on doit placer une victime inconsciente qui respire (pour éviter qu'elle ne s'étouffe) ?",
        options: ["Sur le dos à plat", "Sur le ventre bras tendus", "En Position Latérale de Sécurité (PLS)", "Assise sur une chaise"],
        correct: 2,
        rationale: "La PLS maintient les voies aériennes libres et évite l'inhalation de liquides (salive, sang, vomissements)."
    },
    {
        question: "Que faire face à une personne consciente qui s'étouffe totalement (obstruction aiguë des voies aériennes, ne peut plus parler ni respirer) ?",
        options: ["Lui donner de l'eau immédiatement", "Effectuer des claques dans le dos (maximum 5) suivies si besoin de compressions abdominales (méthode de Heimlich)", "L'allonger sur le dos et dormir", "Lui taper sur la tête"],
        correct: 1,
        rationale: "En cas d'obstruction totale, l'alternance de claques dans le dos et de compressions abdominales permet de déloger le corps étranger."
    },
    {
        question: "Qu'appelle-t-on une hémorragie externe visible ?",
        options: ["Un écoulement de sang qui s'arrête tout seul en 2 secondes", "Un saignement abondant d'une plaie qui ne s'arrête pas et imbibe les vêtements ou coule en jet", "Un bleu sous la peau", "Une saignée médicale"],
        correct: 1,
        rationale: "Une hémorragie externe grave nécessite une compression immédiate pour stopper l'effusion sanguine."
    },
    {
        question: "Quelle est la technique prioritaire pour stopper une hémorragie externe grave sur un membre si la compression locale est insuffisante ou impossible ?",
        options: ["Mettre de l'alcool à 90°", "Poser un garrot tourniquet", "Faire un pansement avec du coton", "Attendre l'arrivée du médecin"],
        correct: 1,
        rationale: "Le garrot hémostatique de combat est la référence pour stopper un saignement de membre menaçant le pronostic vital."
    },
    {
        question: "Quel est le signe principal d'un arrêt cardiaque chez une victime ?",
        options: ["La victime crie de douleur", "La victime est inconsciente et ne respire pas (ou a des gasps anormaux)", "La victime a les yeux ouverts en train de parler", "La victime transpire beaucoup"],
        correct: 1,
        rationale: "Inconscience + absence de respiration normale = arrêt cardiorespiratoire."
    },
    {
        question: "Quel appareil électronique portable permet de délivrer un choc électrique externe en cas d'arrêt cardiaque en attendant les secours ?",
        options: ["Un défibrillateur automatisé externe (DAE)", "Un électrocardiogramme portatif", "Un tensiomètre automatique", "Un défibrillateur manuel d'hôpital"],
        correct: 0,
        rationale: "Le DAE analyse le rythme cardiaque et guide l'intervenant pour administrer un choc si nécessaire."
    },
    {
        question: "Quel est le rythme approximatif des compressions thoraciques (massage cardiaque) chez l'adulte en arrêt cardiaque ?",
        options: ["30 compressions puis 2 ventilations", "10 compressions sans ventilation", "En continu sans s'arrêter jamais", "50 compressions et 5 ventilations"],
        correct: 0,
        rationale: "Le ratio standard en réanimation cardiopulmonaire (RCP) grand public et secouriste de base est de 30 compressions pour 2 insufflations."
    },
    {
        question: "Quelle est la fréquence des compressions thoraciques par minute pour un massage cardiaque efficace chez l'adulte ?",
        options: ["De 60 à 80 par minute", "De 100 à 120 par minute", "De 140 à 160 par minute", "Exactement 40 par minute"],
        correct: 1,
        rationale: "Il faut masser à une cadence rythmée comprise entre 100 et 120 compressions par minute."
    },
    {
        question: "Quelle est la profondeur d'enfoncement recommandée pour les compressions thoraciques chez un adulte lors d'une RCP ?",
        options: ["1 à 2 centimètres", "5 à 6 centimètres", "10 à 15 centimètres", "Moins de 1 centimètre"],
        correct: 1,
        rationale: "La compression doit être efficace, soit une profondeur d'environ 5 cm chez l'adulte (sans dépasser 6 cm)."
    },
    {
        question: "Que faut-il faire face à une brûlure simple (ex: petite cloque de la taille d'une pièce de monnaie) ?",
        options: ["Mettre du beurre ou du dentifrice", "Arroser immédiatement la brûlure à l'eau tempérée (15 à 25°C) pendant 10 à 20 minutes", "Percer la cloque avec une aiguille", "Appliquer de la glace vive"],
        correct: 1,
        rationale: "Le refroidissement immédiat à l'eau tempérée limite la profondeur et l'extension de la brûlure."
    },
    {
        question: "Qu'appelle-t-on un malaise ?",
        options: ["Une sensation pénible traduisant une perturbation du fonctionnement d'un organe (souvent le cerveau ou le cœur)", "Une fracture ouverte de la jambe", "Une coupure au doigt", "Une entorse du poignet"],
        correct: 0,
        rationale: "Le malaise est une alerte corporelle subjective ou objective nécessitant d'installer la victime au repos."
    },
    {
        question: "Quelle position adopte-t-on généralement pour une victime qui présente un malaise simple et qui est consciente ?",
        options: ["Position assise ou demi-assise confortable selon sa convenance", "Strictement debout les bras en l'air", "La tête en bas sur une pente", "En position ventrale"],
        correct: 0,
        rationale: "La position demi-assise ou allongée selon le type de malaise facilite la respiration et le confort."
    },

    // --- TRANSMISSIONS ET RADIO ---
    {
        question: "Quel matériel utilise le sapeur-pompier pour communiquer à distance en intervention de manière hertzienne ?",
        options: ["Un talkie-walkie ou portatif radio (ex: ANTARES)", "Un pigeon voyageur", "Un téléphone fixe à cadran", "Un talkie filaire en cuivre"],
        correct: 0,
        rationale: "Les réseaux radio cryptés et sécurisés (comme le réseau ANTARES en France) permettent les liaisons opérationnelles."
    },
    {
        question: "Comment doit-on parler dans un émetteur-récepteur radio pour être compris clairement par le central ou ses équipiers ?",
        options: ["En criant le plus fort possible dans le micro", "En articulant distinctement, en parlant d'une voix calme, posée et en utilisant l'indicatif d'appel", "En chuchotant très vite", "En chantant les messages"],
        correct: 1,
        rationale: "La clarté, le calme et la concision sont les règles d'or des transmissions radio."
    },
    {
        question: "Que signifie généralement l'utilisation du terme 'REÇU' lors d'une transmission radio ?",
        options: ["J'ai bien entendu et compris le message transmis", "Je refuse d'exécuter l'ordre", "Renvoyez-moi le colis", "La ligne est coupée"],
        correct: 0,
        rationale: "« Reçu » accuse réception du message."
    },
    {
        question: "Qu'est-ce qu'un indicatif radio opérationnel ?",
        options: ["Le nom de baptême du pompier", "Le code d'identification attribué à un véhicule ou à une fonction (ex: FPT POITIERS 1)", "Le code secret de la caserne", "Le numéro de sécurité sociale du chef d'agrès"],
        correct: 1,
        rationale: "L'indicatif identifie sans ambiguïté l'entité qui émet ou reçoit sur le réseau."
    },

    // --- DIVERS / CULTURE POMPIER COMPLÉMENTAIRE ---
    {
        question: "Quelle est la couleur réglementaire des casques de la majorité des sapeurs-pompiers en intervention courante (ex: F1) en France ?",
        options: ["Le jaune ou le rouge (ou blanc selon la fonction/grade)", "Le vert fluo", "Le rose fushia", "Le marron mat"],
        correct: 0,
        rationale: "Le casque F1 est traditionnellement blanc (officiers/sous-officiers/certains cadres) ou rouge (ou jaune selon les services), les sapeurs portant souvent le blanc ou le jaune selon les traditions locales du corps."
    },
    {
        question: "Comment appelle-t-on le saint patron des Sapeurs-Pompiers de France fêté traditionnellement le 4 décembre ?",
        options: ["Saint Barbe (Sainte Barbe)", "Saint Jean-Baptiste", "Saint Nicolas", "Saint Michel"],
        correct: 0,
        rationale: "Sainte Barbe est la patronne des artilleurs, des sapeurs et des mineurs, célébrée chaque 4 décembre."
    },
    {
        question: "Qu'est-ce que le 'GFA' ou le 'GPF' dans le jargon des sapeurs-pompiers (gestion/groupement) ?",
        options: ["Des groupements fonctionnels ou territoriaux d'organisation du SDIS", "Un type de tuyau d'arrosage", "Un nœud de raccordement", "Une grade d'officier supérieur"],
        correct: 0,
        rationale: "Les groupements territoriaux ou fonctionnels structurent l'administration et l'opérationnel du SDIS."
    },
    {
        question: "Quel nœud utilise-t-on couramment chez les sapeurs-pompiers pour amarrer une anche, une échelle ou hisser du matériel en hauteur en toute sécurité ?",
        options: ["Le nœud de chaise ou le nœud plat / nœud de batelier", "Le nœud coulant simple sans sécurité", "Le nœud de lacets de chaussures", "Le nœud de pêcheur double obligatoire"],
        correct: 0,
        rationale: "Le nœud de chaise est un nœud d'amarrage sûr qui ne glisse pas sous la traction."
    },
    {
        question: "Quel est le rôle principal d'un binôme d'intervention sur un feu d'appartement ?",
        options: ["Progresser ensemble, reliés ou en contact visuel/tactile, pour effectuer la reconnaissance et l'extinction en toute sécurité", "Se séparer dans chaque pièce pour aller plus vite", "Attendre dehors que le feu s'éteigne tout seul", "Filmer l'intervention pour les réseaux sociaux"],
        correct: 0,
        rationale: "La règle du binôme garantit la sécurité mutuelle des sapeurs-pompiers en zone dangereuse."
    },
    {
        question: "Qu'est-ce qu'un 'Flashover' (embrasement généralisé éclair) ?",
        options: ["Une photo prise avec un flash d'appareil", "Le passage brutal et soudain de tous les combustibles d'un local clos à l'embrasement sous l'effet de l'accumulation de chaleur et de gaz de pyrolyse", "Une explosion de pneu de camion", "L'allumage d'une lampe torche puissante"],
        correct: 1,
        rationale: "Le flashover est un phénomène thermique extrêmement dangereux menaçant la vie des intervenants."
    },
    {
        question: "Qu'est-ce qu'un 'Backdraft' (coup de feu) ?",
        options: ["Une rentrée d'air brutale dans un local en sous-ventilation (contenant des gaz chauds non brûlés) provoquant une explosion violente lors de l'ouverture de la porte", "Un courant d'air frais agréable en été", "Le retour d'eau dans les tuyaux", "Une marche arrière en camion"],
        correct: 0,
        rationale: "Le backdraft est l'explosion des gaz de combustion accumulés lorsqu'un apport d'oxygène soudain survient."
    },
    {
        question: "Quel équipement protège la tête des chocs et de la chaleur rayonnante lors des feux de structures ?",
        options: ["Le casque F1", "Une casquette en tissu", "Un bonnet en laine", "Un chapeau de paille"],
        correct: 0,
        rationale: "Le casque F1 est le casque de référence pour l'incendie urbain et divers."
    },
    {
        question: "Quel est le nom de l'hymne national joué lors des cérémonies officielles des sapeurs-pompiers ?",
        options: ["La Marseillaise", "Le chant des marais", "Le rituel du feu", "La marche des pompiers"],
        correct: 0,
        rationale: "La Marseillaise est jouée lors de tous les hommages et cérémonies républicaines des sapeurs-pompiers."
    },
    {
        question: "Qu'est-ce que l'HMP (Hors Marche Périodique / Hors Matériel Périodique) ou l'indisponibilité d'un engin ?",
        options: ["Le fait qu'un véhicule soit en panne, en révision ou en nettoyage et ne puisse pas partir en intervention", "Le moment de repos des pompiers", "Une marche sportive de nuit", "Le changement d'année civile"],
        correct: 0,
        rationale: "Un engin HMP est retiré temporairement du départ en intervention."
    }
];