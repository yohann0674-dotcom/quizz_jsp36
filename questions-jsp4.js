const masterJsp4Bank = [
    // --- PHÉNOMÈNES THERMIQUES ET FEUX EN VOLUMES CLOS (JSP 4) ---
    {
        question: "Qu'appelle-t-on un 'Backdraft' (coup de feu) dans un local clos ou semi-ouvert ?",
        options: ["Une explosion de fumées due à un apport soudain d'oxygène dans un local en sous-ventilation (feu couvant manquant d'air)", "Une fuite de gaz de ville sur la voie publique", "Un embrasement généralisé éclair par rayonnement", "Un feu de nappe d'hydrocarbures"],
        correct: 0,
        rationale: "Le backdraft survient lorsque des gaz chauds non brûlés s'enflamment brutalement dès l'ouverture ou la rupture d'une paroi apportant de l'air."
    },
    {
        question: "Qu'est-ce que le 'Flashover' (embrasement généralisé éclair) ?",
        options: ["Le passage quasi instantané de la combustion généralisée de tous les matériaux combustibles d'une pièce sous l'effet du rayonnement thermique cumulé", "L'extinction totale d'un feu par manque de combustible", "Une explosion de bouteille de gaz", "La chute d'un éclair sur la caserne"],
        correct: 0,
        rationale: "Le flashover est l'étape critique où la température globale atteint le point d'inflammation de l'ensemble du mobilier de la pièce."
    },
    {
        question: "Quel est le signe précurseur visuel majeur d'un risque imminent de Backdraft sur une ouverture (porte ou fenêtre) ?",
        options: ["De la fumée dense, noire et chaude qui 'siffle' ou pulse par les interstices, associée à des vitres jaunies/brunies et vibrantes", "Une absence totale de fumée et des murs glacés", "De l'eau propre qui s'écoule du plafond", "Un courant d'air froid permanent"],
        correct: 0,
        rationale: "Les impulsions de fumées sous pression et l'aspiration d'air par les fentes sont caractéristiques d'une dépression interne prête à exploser."
    },
    {
        question: "Quelle technique de refroidissement des gaz de la combustion utilise-t-on en priorité lors d'une progression offensive en volume clos ?",
        options: ["Des impulsions courtes de jet pulvérisé conique (JPC) orientées vers le plafond", "Un jet plein dirigé sur le sol", "L'ouverture totale des fenêtres", "Jeter du sable sur les flammes"],
        correct: 0,
        rationale: "Le choc thermique et l'évaporation de l'eau en fines gouttelettes au contact des fumées chaudes abaissent la température et préviennent le flashover."
    },

    // --- RISQUES TECHNOLOGIQUES ET PARTICULIERS (JSP 4) ---
    {
        question: "Que signifie le sigle TMD dans le cadre des transports de matières dangereuses ?",
        options: ["Transport de Matières Dangereuses", "Traitement des Maladies à Domicile", "Tour de Contrôle Militaire", "Transmission Médicale à Distance"],
        correct: 0,
        rationale: "Le TMD regroupe la réglementation et la signalisation (plaques oranges) du transport de produits chimiques, radioactifs ou explosifs."
    },
    {
        question: "Quel danger principal présente l'électricité lors d'une intervention sur un incendie ou un dégât des eaux dans un local d'habitation ?",
        options: ["Le risque d'électrocution par contact direct ou indirect (notamment en cas d'utilisation d'eau sur des installations non coupées)", "La baisse de la luminosité des lampes de poche", "La panne du réseau téléphonique", "Le gel instantané des tuyaux"],
        correct: 0,
        rationale: "L'eau étant conductrice, la coupure impérative de l'énergie électrique (disjoncteur général) est une règle absolue."
    },
    {
        question: "Face à une fuite de gaz inflammable (ex: gaz naturel) enflammée, quelle est la règle tactique de sécurité fondamentale ?",
        options: ["Ne jamais éteindre la flamme si l'on ne peut pas couper l'alimentation en amont, sous peine de transformer la fuite en nuage de gaz explosif", "Jeter de l'eau savonneuse dessus", "Éteindre immédiatement la flamme avec de la poudre", "Laisser brûler sans s'en occuper"],
        correct: 0,
        rationale: "Une fuite enflammée brûle au fur et à mesure ; si la flamme s'éteint, le gaz s'accumule et risque d'exploser au premier point chaud."
    },
    {
        question: "Quel équipement de mesure utilise-t-on pour détecter la présence de monoxyde de carbone (CO) ou évaluer l'explosivité d'une atmosphère ?",
        options: ["Un explosimètre / détecteur multi-gaz", "Un baromètre météo", "Un thermomètre médical", "Un sonomètre"],
        correct: 0,
        rationale: "Le détecteur multi-gaz alerte les intervenants en cas de dépassement des seuils de toxicité ou d'explosivité (LIE)."
    },
    {
        question: "Qu'est-ce qu'une source radioactive scellée ou non scellée relevant du risque RADA (Radiologique) ?",
        options: ["Une matière émettrice de rayonnements ionisants invisibles et dangereux pour la santé (expositions / contaminations)", "Une source de lumière pour éclairer la nuit", "Un produit chimique qui mousse au contact de l'air", "Un type de carburant pour moteur"],
        correct: 0,
        rationale: "Les risques radiologiques nécessitent des périmètres de sécurité stricts, un balisage spécifique et des tenues adaptées."
    },

    // --- SECOURS D'URGENCE AUX PERSONNES (PSE / JSP 4) ---
    {
        question: "Quelle est la conduite à tenir immédiate face à une victime adulte en arrêt cardiorespiratoire (ACR) ?",
        options: ["Alerter immédiatement, masser (RCP 30:2) et défibriller au plus tôt avec un DEA (Défibrillateur Automatisé Externe)", "Attendre l'arrivée du médecin sans rien faire", "Donner de l'eau à boire à la victime", "Installer la victime assise sur une chaise"],
        correct: 0,
        rationale: "La chaîne de survie repose sur la précocité de l'alerte, du massage cardiaque et de la défibrillation."
    },
    {
        question: "Quel est le débit d'oxygène à administrer à une victime en détresse vitale majeure avec un Masque à Haute Concentration (MHC) ?",
        options: ["De 9 à 15 litres par minute", "Exactement 1 litre par minute", "Pas d'oxygène", "50 litres par minute"],
        correct: 1,
        rationale: "Le MHC requiert un débit élevé (généralement réglé à 15 L/min) pour garantir une FiO2 maximale."
    },
    {
        question: "Qu'appelle-t-on une 'hémorragie externe grave' nécessitant une action immédiate du secouriste avant même le bilan complet ?",
        options: ["Un saignement abondant et continu ne s'arrêtant pas spontanément, imbibant les vêtements ou formant une mare au sol, menaçant la vie à court terme", "Une simple saignure de nez bénigne", "Une égratignure superficielle au genou", "Une ecchymose (bleu) sous la peau"],
        correct: 0,
        rationale: "L'hémorragie externe grave non contrôlée conduit rapidement à un état de choc hypovolémique mortel ; elle nécessite compression directe, relais par un garrot ou pansement compressif."
    },
    {
        question: "Dans quel cas pose-t-on un garrot tourniquet improvisé ou opérationnel sur un membre ?",
        options: ["En présence d'une hémorragie externe grave d'un membre qu'il est impossible de comprimer ou en cas d'afflux massif de victimes / situation tactique", "Pour soulager une entorse de la cheville", "Pour immobiliser une fracture du bras sans saignement", "Pour traiter un mal de tête"],
        correct: 0,
        rationale: "Le garrot est l'ultime recours d'urgence pour stopper une hémorragie artérielle menaçante sur un membre."
    },
    {
        question: "Qu'est-ce que l'évaluation de la conscience par l'échelle de Glasgow chez une victime traumatisée ou médicalisée ?",
        options: ["Une cotation de l'ouverture des yeux, de la réponse verbale et de la réponse motrice", "Une mesure de la taille des chaussures", "Un test de la vision des couleurs", "Une analyse de la force musculaire des mains"],
        correct: 0,
        rationale: "Le score de Glasgow évalue la profondeur des troubles de la conscience de manière standardisée."
    },

    // --- OPÉRATIONS DIVERSES ET SECOURS ROUTIER (JSP 4) ---
    {
        question: "Quel est l'objectif premier de la stabilisation d'un véhicule accidenté sur un flanc ou instable sur la voie publique ?",
        options: ["Empêcher tout mouvement ou basculement intempestif du véhicule pendant l'intervention des secours sur les victimes à l'intérieur", "Permettre au véhicule de redémarrer plus vite", "Économiser le carburant restant", "Nettoyer la carrosserie"],
        correct: 0,
        rationale: "Le calage et la stabilisation (cales, étais, sangles) garantissent la sécurité absolue de l'équipe de désincarcération."
    },
    {
        question: "Quel type d'outil utilise-t-on principalement pour écarter les portes ou découper les montants d'une voiture lors d'une désincarcération ?",
        options: ["Un outil hydraulique (une cisaille et un écarteur)", "Une paire de ciseaux de bureau", "Un marteau de menuisier", "Une scie à métaux manuelle"],
        correct: 0,
        rationale: "Le matériel hydraulique de désincarcération développe des forces de coupe et d'écartement immenses."
    },
    {
        question: "Quelle est la règle de sécurité de base lors d'une intervention sur un véhicule récent propulsé par une motorisation hybride ou électrique ?",
        options: ["Identifier la présence de câbles haute tension (généralement de couleur orange), localiser la coupure de secours (coupe-circuit) et éviter de couper au hasard", "Arroser la batterie avec de l'eau salée", "Soulever la voiture à mains nues", "Débrancher l'autoradio uniquement"],
        correct: 0,
        rationale: "Les circuits haute tension des véhicules électriques représentent un risque mortel d'électrocution s'ils sont cisaillés sans précaution."
    },
    {
        question: "Qu'est-ce qu'une intervention pour 'reconnaissance et neutralisation d'hyménoptères' (guêpes/frelons) en JSP 4 ?",
        options: ["L'utilisation d'une combinaison de protection intégrale étanche, d'un pulvérisateur d'insecticide spécifique et le respect des consignes d'approche", "L'utilisation d'une lance à eau en jet plein", "La destruction du nid au chalumeau", "L'abattage de l'arbre sans protection"],
        correct: 0,
        rationale: "Les piqûres multiples ou les réactions allergiques (choc anaphylactique) imposent des techniques rigoureuses de neutralisation."
    },

    // --- MATÉRIEL ET PROCÉDURES OPÉRATIONNELLES (JSP 4) ---
    {
        question: "Quelle est la longueur nominale standard d'une échelle à coulisse de sapeurs-pompiers non déployée (ou repliée) ?",
        options: ["Environ 6 mètres (ou 5 à 6 mètres selon les modèles)", "Exactement 20 mètres", "1 mètre 50", "50 centimètres"],
        correct: 0,
        rationale: "L'échelle à coulisse standard à deux plans mesure environ 5 à 6 mètres repliée et permet d'atteindre le 2e ou 3e étage."
    },
    {
        question: "Dans le cadre du Lot de Sauvetage et de Protection contre la Chute (LSPCC), qu'est-ce qu'une corde dynamique par rapport à une corde statique ?",
        options: ["Une corde conçue pour s'allonger légèrement et absorber l'énergie cinétique en cas de chute (utilisée pour l'assurage dynamique)", "Une corde qui change de couleur toute seule", "Une corde extensible en caoutchouc pour attacher les bagages", "Une corde qui ne sert qu'à porter de l'eau"],
        correct: 0,
        rationale: "La corde dynamique absorbe le choc d'une chute, contrairement à la corde semi-statique utilisée pour les déplacements et le relevage."
    },
    {
        question: "Quel est le rôle du chef d'agrès lors d'une intervention complexe impliquant plusieurs véhicules (ex: FPT et VSAV) ?",
        options: ["Diriger l'ensemble des opérations de son engin, coordonner l'action de son équipe, appliquer la doctrine et rendre compte au commandement (CODIS)", "Conduire tous les camions en même temps", "Gérer la cuisine de la caserne", "Rédiger les procès-verbaux de police"],
        correct: 0,
        rationale: "Le chef d'agrès est le responsable direct de la sécurité et de la tactique de son équipage sur les lieux."
    },
    {
        question: "Comment s'organisent les transmissions radio lors d'une intervention d'envergure sur un canal tactique de feu ?",
        options: ["En respectant la discipline du réseau, en utilisant les indicatifs corrects, des messages courts, précis et factuels", "En parlant tous en même temps pour gagner du temps", "En chantant par politesse", "En coupant la radio dès l'arrivée"],
        correct: 0,
        rationale: "La rigueur des transmissions garantit la fluidité du commandement et la sécurité des intervenants."
    },

    // --- COMPLÉMENT POUR ATTEINDRE LES 50 QUESTIONS JSP 4 ---
    {
        question: "Qu'appelle-t-on un 'feu de cheminée' (conduit de fumée) et quel est son risque principal ?",
        options: ["L'embrasement des suies accumulées dans le conduit, risquant de propager la chaleur par conduction aux planchers et charpentes de l'habitation", "Un feu de bois dans un four à pizza", "Une inondation de la cheminée par la pluie", "Un feu de canapé au salon"],
        correct: 0,
        rationale: "Les feux de conduits génèrent des températures extrêmes menaçant toute la structure de la maison."
    },
    {
        question: "Quel agent extincteur est à proscrire absolument sur un feu d'armoire électrique alimentée en tension ?",
        options: ["L'eau en jet plein", "Le dioxyde de carbone (CO2)", "La poudre", "Le halon (ou substituts propres non conducteurs)"],
        correct: 0,
        rationale: "L'eau en jet plein conduit l'électricité et expose le pompier à un risque d'électrocution mortelle."
    },
    {
        question: "Quel est l'objectif de la ventilation opérationnelle (désenfumage) par pression positive (VPP) ?",
        options: ["Refouler les fumées toxiques et chaudes hors du bâtiment, abaisser la température et améliorer radicalement la visibilité pour la progression", "Augmenter la quantité de fumée à l'intérieur", "Faire sécher le linge des habitants", "Alimenter le feu en oxygène frais pour qu'il brûle plus vite"],
        correct: 0,
        rationale: "Le ventilateur crée une surbrression contrôlée qui chasse les fumées par un ouvrant préalablement ouvert (l'issue de sortie)."
    },
    {
        question: "Qu'est-ce qu'une 'reconnaissance offensive' sous ARI ?",
        options: ["Une progression méthodique à l'intérieur des volumes sinistrés pour rechercher les victimes et localiser précisément le foyer", "Une course de vitesse entre pompiers", "Une inspection des casques dans le camion", "Un contrôle de la pression des pneus"],
        correct: 0,
        rationale: "La reconnaissance offensive engage les binômes au cœur de la zone dangereuse sous protection respiratoire intégrale."
    },
    {
        question: "Quel équipement individuel protège la tête du sapeur-pompier contre les chocs et le rayonnement thermique lors des feux de structures ?",
        options: ["Le casque F1 (ou casque de feu urbain) muni de sa jugulaire fermée et de sa visière", "Un chapeau de paille", "Une casquette en tissu", "Un casque de vélo"],
        correct: 0,
        rationale: "Le casque F1 est l'élément central de protection de la tête du sapeur-pompier en intervention."
    },
    {
        question: "Qu'est-ce que la règle des tiers dans la gestion de l'air d'une bouteille d'ARI ?",
        options: ["Un tiers pour l'aller, un tiers pour le retour, un tiers de réserve de sécurité", "Utiliser un tiers de la bouteille et jeter le reste", "Changer de bouteille toutes les 3 minutes", "Ne consommer que le premier tiers"],
        correct: 0,
        rationale: "Cette règle mathématique et sécuritaire garantit que le binôme dispose toujours de l'air nécessaire pour ressortir en cas de problème."
    },
    {
        question: "Quel rôle joue le Groupe de Reconnaissance et d'Intervention en Milieu Périlleux (GRIMP) ?",
        options: ["Intervenir pour des sauvetages et des secours dans des accès difficiles (parois rocheuses, canyons, hauteurs, ravins)", "Éteindre les feux de cuisine", "Intervenir sur les pannes de courant de la ville", "Réparer les lances à incendie cassées"],
        correct: 0,
        rationale: "Le GRIMP est une unité spécialisée dotée de techniques de cordes avancées."
    },
    {
        question: "Qu'appelle-t-on une 'fausse route' ou une obstruction des voies aériennes par ingestion de liquide ou d'aliment chez une personne ?",
        options: ["Le passage accidentel d'un corps étranger (liquide ou solide) dans la trachée au lieu de l'œsophage, provoquant toux et détresse", "Une erreur de direction en voiture", "Une promenade en forêt qui se passe mal", "Une panne de GPS"],
        correct: 0,
        rationale: "La fausse route perturbe la ventilation et nécessite les gestes adaptés de secours d'urgence."
    },
    {
        question: "Quelle est l'utilité du collier cervical rigide couplé à l'immobilisation sur plan dur ?",
        options: ["Neutraliser les mouvements du rachis en cas de traumatisme violent pour éviter toute lésion de la moelle épinière", "Maintenir le cou au chaud en hiver", "Aider le patient à avaler plus facilement", "Éviter les ronflements"],
        correct: 0,
        rationale: "Le respect de l'axe tête-cou-tronc est primordial pour éviter de transformer un traumatisme simple en paralysie."
    },
    {
        question: "Quel est le principe d'action de la poudre polyvalente ABC sur un feu ?",
        options: ["Inhiber chimiquement la réaction de combustion et étouffer le foyer par formation d'une pellicule étanche", "Refroidir massivement l'atmosphère par de l'eau glacée", "Dissoudre le combustible dans de l'alcool", "Augmenter l'humidité de l'air"],
        correct: 0,
        rationale: "La poudre ABC agit par inhibition et étouffement sur les feux de solides, de liquides et de gaz."
    },
    {
        question: "Qu'est-ce que le plan ORSEC (Organisation de la Réponse de Sécurité Civile) ?",
        options: ["Un dispositif de gestion de crise globale piloté par l'État (préfet) mobilisant l'ensemble des moyens de secours en cas de cataclysme ou d'événement majeur", "Un plan de circulation routière pour les camions", "Un système informatique de la caserne", "Un manuel de sport pour JSP"],
        correct: 0,
        rationale: "Le plan ORSEC structure les secours face aux situations de grande ampleur (tempêtes, inondations massives, accidents industriels)."
    },
    {
        question: "Quel est le risque lié à l'utilisation d'une tronçonneuse thermique dans un espace confiné ou mal ventilé ?",
        options: ["L'accumulation rapide de monoxyde de carbone (CO), gaz inodore et mortel issu des gaz d'échappement", "Le gel de la chaîne de coupe", "Une explosion de la lame en plastique", "L'extinction de la machine par manque d'air"],
        correct: 0,
        rationale: "Les moteurs thermiques rejettent du CO en quantité massive en milieu clos, d'où l'interdiction ou la ventilation rigoureuse requise."
    },
    {
        question: "Qu'appelle-t-on un 'feu couvant' (ou feu mal ventilé) ?",
        options: ["Une combustion lente sans flamme vive apparente, dégageant beaucoup de fumées toxiques et de gaz imbrûlés", "Un feu de cheminée allumé en hiver", "Un feu de broussaille sous la pluie", "Un feu de bois en plein air"],
        correct: 0,
        rationale: "Le feu couvant est particulièrement perfide car il accumule des gaz inflammables prêts à exploser en cas d'apport soudain d'oxygène."
    },
    {
        question: "Quel est le rôle de la division d'alimentation (ou de refoulement) lors d'un établissement de lances ?",
        options: ["Permettre de raccorder une ligne principale de fort diamètre et de la diviser en plusieurs petites lignes pour alimenter plusieurs lances", "Diviser par deux le prix du matériel", "Permettre de couper l'eau de la ville", "Mesurer la pression atmosphérique"],
        correct: 0,
        rationale: "La division est l'outil hydraulique central pour déployer l'attaque à partir d'une alimentation unique."
    },
    {
        question: "Qu'est-ce qu'une 'plaie grave' de l'abdomen avec extérioration d'organes (éviscération) ?",
        options: ["Une plaie ouverte où les viscères sortent de la cavités abdominale ; il ne faut surtout pas les réintroduire, mais les protéger avec un pansement stérile humide", "Une simple égratignure superficielle", "Un bleu sur le ventre", "Une brûlure par le soleil"],
        correct: 0,
        rationale: "L'éviscération nécessite une protection stérile humide pour éviter le dessèchement des organes en attendant l'équipe médicale."
    },
    {
        question: "Dans le cadre de la chaîne de commandement, que signifie le sigle 'COS' ?",
        options: ["Commandant des Opérations de Secours", "Chef Officier de Semaine", "Centre Opérationnel de Secours", "Comité d'Organisation Sportive"],
        correct: 0,
        rationale: "Le COS est le directeur unique des opérations sur les lieux de l'intervention."
    },
    {
        question: "Quel est l'objectif d'un bilan circonstanciel réalisé par les premiers intervenants à l'arrivée sur les lieux ?",
        options: ["Analyser rapidement la situation, identifier les dangers persistants, estimer le volume des victimes et adapter les demandes de moyens", "Demander le menu de la cantine", "Remplir le carnet de route du véhicule", "Vérifier la météo du lendemain"],
        correct: 0,
        rationale: "Le bilan circonstanciel guide les premiers choix tactiques et la sécurité de l'engagement."
    },
    {
        question: "Qu'appelle-t-on le 'point fixe' ou l'amarrage dans le cadre des techniques de sauvetage en hauteur (LSPCC) ?",
        options: ["Un point d'ancrage solide et résistant (ex: poteau, ancrage structurel) capable de supporter les efforts mécaniques d'une charge ou d'une chute", "Un clou planté dans du plâtre", "Une chaise de bureau bloquée", "Le pare-chocs d'une voiture sans frein à main"],
        correct: 0,
        rationale: "La fiabilité du point fixe est la pierre angulaire de toute manœuvre de force ou de sauvetage en hauteur."
    },
    {
        question: "Quel danger représente l'eau sous forme de jet plein ou pulvérisé sur un transformateur électrique haute tension non consigné ?",
        options: ["Un risque majeur d'électrocution mortelle par retour de courant dans la lance", "Un refroidissement instantané de l'électricité", "Une explosion de la vapeur d'eau en glace", "Aucun danger si l'on porte des gants"],
        correct: 0,
        rationale: "L'eau est conductrice ; l'interdiction absolue d'attaquer à l'eau un foyer électrique sous tension sans consignation préalable est fondamentale."
    },
    {
        question: "Qu'est-ce qu'un état de choc anaphylactique ?",
        options: ["Une réaction allergique généralisée violente et immédiate mettant en jeu le pronostic vital (chute de tension, détresse respiratoire)", "Une peur panique de l'eau", "Un choc électrique sur une prise de courant", "Une fracture ouverte de la jambe"],
        correct: 0,
        rationale: "L'anaphylaxie est une urgence médicale absolue nécessitant souvent de l'adrénaline et une oxygénothérapie maximale."
    },
    {
        question: "Quel rôle joue le CTA-CODIS (Centre de Traitement de l'Alerte / Centre Opérationnel Départemental d'Incendie et de Secours) ?",
        options: ["Réceptionner les appels d'urgence (18/112), qualifier la demande, engager les moyens de secours adaptés et suivre les interventions en cours", "Vendre du matériel de caserne", "Organiser les compétitions sportives départementales", "Réparer les casques F1"],
        correct: 0,
        rationale: "Le CODIS est le cœur névralgique de la gestion opérationnelle et des transmissions de département."
    },
    {
        question: "Pourquoi est-il strictement interdit de fumer ou d'utiliser une flamme nue à proximité d'un véhicule accidenté présentant une fuite de carburant ?",
        options: ["En raison du risque élevé d'inflammation immédiate des vapeurs d'essence par le point chaud (risque d'incendie/explosion)", "Pour des raisons de non-courtoisie", "Parce que c'est mauvais pour la santé pulmonaire", "Pour ne pas tacher les uniformes"],
        correct: 0,
        rationale: "Les vapeurs de carburant sont plus lourdes que l'air, s'écoulent au sol et s'enflamment au moindre contact avec une étincelle ou une flamme."
    },
    {
        question: "Qu'est-ce qu'une 'rupture de canalisation de gaz' enflammée à l'air libre dans une rue ?",
        options: ["Une situation où le gaz sort sous pression et brûle en torche ; il faut protéger les bâtiments avoisinants par de l'eau pulvérisée en attendant les techniciens gaz", "Un feu de poubelle banal", "Une fuite d'eau potable", "Une explosion atomique"],
        correct: 0,
        rationale: "La protection thermique des façades et des structures par rideau d'eau (JPC) est prioritaire en attendant la fermeture de la vanne d'isolement."
    },
    {
        question: "Quelle est la définition de la fonction 'équipier' au sein d'un binôme d'intervention incendie ?",
        options: ["Assister le chef d'équipe, surveiller le déroulement de la ligne, veiller à la sécurité mutuelle et appliquer les ordres opérationnels", "Conduire le fourgon tout seul", "Rester à la caserne pour dormir", "Donner les ordres au chef de centre"],
        correct: 0,
        rationale: "Le binôme repose sur la complémentarité stricte entre le chef d'équipe et l'équipier."
    },
    {
        question: "Quel est l'intérêt d'utiliser un coussin de soulèvement pneumatique (haute ou basse pression) lors d'un sauvetage technique ?",
        options: ["Soulever des charges lourdes (ex: dalle de béton, véhicule) pour dégager une victime coincée", "Servir de coussin de sieste pour l'équipe", "Gonfler les pneus du camion", "Transporter des blessés sur l'eau"],
        correct: 0,
        rationale: "Les coussins de relevage pneumatiques permettent de soulever des charges considérables avec un encombrement minimal."
    },
    // --- INCENDIE ET FORMATION AVANCÉE (JSP 4) ---
    {
        question: "Quel est l'effet de l'utilisation d'une lance à eau en jet droit directement au cœur d'un feu de fumées ou de gaz chauds sous le plafond en volume clos ?",
        options: ["Il peut perturber la stratification thermique et plaquer les gaz chauds et toxiques sur les intervenants", "Il éteint instantanément le feu sans aucun risque", "Il refroidit la pièce à la température ambiante extérieure", "Il n'a strictement aucun effet"],
        correct: 0,
        rationale: "Le jet droit dans les fumées perturbe les flux et risque de créer un choc thermique ou une vaporisation massive dangereuse. On privilégie le jet pulvérisé conique (JPC)."
    },
    {
        question: "Qu'appelle-t-on le 'point d'éclair' d'un liquide inflammable ?",
        options: ["La température minimale à laquelle un liquide émet suffisamment de vapeurs pour former un mélange inflammable avec l'air au contact d'une flamme nue", "La température maximale d'ébullition dans une casserole", "La température à laquelle le liquide se transforme en glace", "Le moment exact où le liquide change de couleur"],
        correct: 0,
        rationale: "Plus le point d'éclair est bas, plus le liquide est dangereux et inflammable à température ambiante."
    },
    {
        question: "Quel est le principe d'extinction d'un feu par 'inhibition' (ex: poudre) ?",
        options: ["Interrompre la réaction chimique en chaîne de la combustion au niveau moléculaire", "Refroidir massivement les braises", "Chasser l'oxygène de la pièce", "Ajouter du carburant pour saturer le feu"],
        correct: 0,
        rationale: "L'inhibition neutralise chimiquement les radicaux libres actifs de la flamme."
    },
    {
        question: "Qu'est-ce qu'une 'rupture d'établissement' lors d'un cheminement de tuyaux en grande longueur ?",
        options: ["L'insertion d'un engin pompe ou d'une division intermédiaire pour relayer l'eau et vaincre les pertes de charge dues au dénivelé ou à la distance", "Une coupure d'eau générale décidée par la mairie", "Une fuite due à un tuyau percé par un clou", "Le pliage accidentel d'un tuyau de 110 mm"],
        correct: 0,
        rationale: "Les pertes de charge linéaires obligent à segmenter et relayer l'alimentation en eau sur les longues distances."
    },
    {
        question: "Quel est l'objectif d'un 'reconnaissance thermique' à l'aide d'une caméra thermique (CTI) en ambiance enfumée ?",
        options: ["Localiser rapidement les points chauds cachés, identifier le foyer principal et repérer des victimes à travers la fumée", "Regarder à travers les murs en béton armé", "Prendre des photos souvenirs de l'intervention", "Mesurer la température extérieure de la caserne"],
        correct: 0,
        rationale: "La caméra thermique est un outil technologique majeur d'aide à la décision et à la progression en ambiance opaque."
    },

    // --- SECOURS D'URGENCE AUX PERSONNES / PSE (JSP 4) ---
    {
        question: "Quelle est la conduite à tenir face à une victime présentant une brûlure grave de la main (thermique) après l'avoir arrosée à l'eau tempérée ?",
        options: ["Retirer délicatement les bagues ou bracelets avant l'apparition de l'œdème, puis protéger avec un pansement stérile sans percer les cloques", "Percer immédiatement toutes les cloques avec une aiguille", "Appliquer de la glace pilée directement sur la brûlure", "Mettre du beurre ou de l'huile sur la plaie"],
        correct: 0,
        rationale: "Le refroidissement précoce stoppe la brûlure, et l'ablation des bijoux prévient l'effet garrot en cas de gonflement."
    },
    {
        question: "Qu'est-ce qu'une 'détresse respiratoire aiguë' chez l'enfant ou l'adulte évaluée par les secouristes ?",
        options: ["Une difficulté respiratoire caractérisée par une augmentation de la fréquence, un tirage des muscles, des bruits anormaux et une cyanose potentielle", "Un simple rhume printanier", "Une respiration lente et régulière pendant le sommeil", "Un hoquet persistant après le repas"],
        correct: 0,
        rationale: "La détresse respiratoire prive l'organisme d'oxygène et nécessite une oxygénothérapie d'urgence et une alerte médicale."
    },
    {
        question: "Dans le cadre de la réanimation d'un nourrisson, quel est le rapport de compression / insufflation préconisé en équipe (PSE) ?",
        options: ["15 compressions thoraciques pour 2 insufflations (après 5 insufflations initiales)", "30 compressions pour 2 insufflations comme chez l'adulte", "100 compressions continues sans s'arrêter", "Une seule insufflation par minute"],
        correct: 0,
        rationale: "Le protocole pédiatrique (nourrisson) diffère légèrement de l'adulte pour s'adapter à sa physiologie."
    },
    {
        question: "Qu'appelle-t-on le 'syndrome de tourniquet' ou syndrome de crush (écrasement prolongé d'un membre) ?",
        options: ["La libération massive de toxines dans l'organisme lors de la levée de la compression d'un membre écrasé, menaçant le cœur et les reins", "Une montre portée trop serrée au poignet", "Une technique de nœud de chaise", "Une panne mécanique du camion pompe"],
        correct: 0,
        rationale: "Le syndrome de crush nécessite une approche médicale anticipée avant le dégagement de la victime."
    },
    {
        question: "Quel est le rôle du relevage à l'aide de cuillères (brancard cuillère) ?",
        options: ["Glisser les deux pelles sous la victime sans mobiliser son axe vertébral pour la transférer sur un matelas coquille ou un brancard", "Servir de louche géante pour éteindre le feu", "Transporter du matériel de cuisine", "Mesurer la taille de la victime"],
        correct: 0,
        rationale: "Le brancard cuillère minimise les mobilisations du patient traumatisé lors du brancardage initial."
    },

    // --- RISQUES TECHNOLOGIQUES ET DIVERS (JSP 4) ---
    {
        question: "Que signifient les codes chiffrés (code de danger ou nombre de Kemler) inscrits sur la plaque orange d'un camion transportant des matières dangereuses ?",
        options: ["La nature et l'intensité du danger présenté par la matière (ex: 33 pour un liquide très inflammable)", "Le prix du transport en euros", "La vitesse maximale autorisée du camion", "Le code postal du pays d'origine"],
        correct: 0,
        rationale: "Le code Kemler renseigne immédiatement les secours sur les risques (inflammabilité, toxicité, corrosivité, etc.)."
    },
    {
        question: "Quel est le risque principal lors de la manipulation d'une bouteille d'acétylène impliquée dans un incendie ?",
        options: ["Un risque d'explosion violente par décomposition chimique interne de la bouteille, nécessitant un refroidissement prolongé et un périmètre de sécurité", "Un simple sifflement inoffensif", "La transformation de l'acétylène en eau douce", "Le gel instantané de la pièce"],
        correct: 0,
        rationale: "L'acétylène est extrêmement instable thermiquement ; une bouteille chauffée peut exploser longtemps après le début du feu."
    },
    {
        question: "Qu'est-ce qu'une intervention pour 'odeur de soufre ou de gaz mercaptan' dans un réseau d'assainissement ?",
        options: ["Un risque de présence de gaz toxiques et asphyxiants (comme l'hydrogène sulfuré - H2S) dans un espace confiné", "Une fuite de parfum de grande surface", "Une fermentation naturelle inoffensive", "Une pollution par de l'eau de Javel"],
        correct: 0,
        rationale: "L'H2S est un gaz mortel à haute concentration qui inhibe l'odorat rapidement."
    },
    {
        question: "Quel équipement de protection individuelle spécifique protège le sapeur-pompier lors d'une intervention en milieu chimique contaminé (tenue de décantation / étanche) ?",
        options: ["Une combinaison étanche aux gaz et aux liquides associée à un ARI porté à l'intérieur ou à l'extérieur selon le type de tenue", "Un maillot de bain imperméable", "Un simple tablier en plastique de cuisine", "Une tenue de sport en coton"],
        correct: 0,
        rationale: "Les tenues de type TIV (Tenue d'Intervention Chimique) protètent intégralement contre les agressions chimiques."
    },
    {
        question: "Qu'appelle-t-on le 'point de rosée' ou la condensation massive dans un local en feu ?",
        options: ["Le passage de la vapeur d'eau à l'état liquide lorsque les fumées et l'air chaud se refroidissent au contact des parois froides", "La formation de givre sur les vitres en été", "L'apparition de fleurs sur les murs", "La pluie qui tombe à l'intérieur de la caserne"],
        correct: 0,
        rationale: "La condensation témoigne des variations hygrométriques et thermiques intenses lors des incendies."
    },

    // --- MATÉRIEL, CORDES ET SAUVETAGES EN HAUTEUR (JSP 4) ---
    {
        question: "Quel est le nom du nœud d'accouplement ou de jonction couramment utilisé pour lier deux cordes de même diamètre entre elles ?",
        options: ["Le nœud de pêcheur double (ou nœud de huit)", "Le nœud de cravate", "Le nœud papillon de cuisine", "Le nœud simple de lacet"],
        correct: 0,
        rationale: "Le nœud de pêcheur double est hautement sécurisé pour abouter des cordes de sauvetage."
    },
    {
        question: "Dans le cadre de l'utilisation d'une échelle à main, quel angle d'inclinaison par rapport au mur doit-on respecter pour garantir sa stabilité (règle des 75 degrés ou rapport de base) ?",
        options: ["Un quart de la longueur de l'échelle déployée en recul de la base par rapport au mur (environ 75°)", "Un angle totalement horizontal à plat", "Un angle vertical parfait collé au mur", "Un angle de 180 degrés vers l'arrière"],
        correct: 0,
        rationale: "Le respect de l'embase de l'échelle évite le basculement arrière ou le glissement de la base."
    },
    {
        question: "Qu'est-ce qu'une 'remontée sur corde' ou un auto-sauvetage ascendant en milieu périlleux ?",
        options: ["Une technique utilisant des dispositifs de blocage (type poignées de progression / bloqueurs) pour remonter le long d'une corde fixe", "Le fait de grimper à un arbre sans corde", "Utiliser l'ascenseur de l'immeuble en feu", "Tirer sur la corde pour faire venir le camion"],
        correct: 0,
        rationale: "Les techniques GRIMP et LSPCC intègrent des procédés de mouflage et de progression sur corde."
    },
    {
        question: "Quel est l'intérêt d'un 'sac à dos de premier ko' ou sac d'évacuation d'urgence pour le binôme d'attaque ?",
        options: ["Transporter le matériel d'effraction, les sangles, la pince monseigneur et les outils de premiers reconnaissances", "Ranger les affaires de rechange des pompiers", "Transporter le repas de midi", "Emporter des bouteilles d'eau minérale"],
        correct: 0,
        rationale: "Le matériel d'outillage léger est regroupé pour faciliter l'accès rapide du binôme en volume clos."
    },
    {
        question: "Qu'appelle-t-on un 'mouflage' dans les manœuvres de force des sapeurs-pompiers ?",
        options: ["Un système de poulies combinées permettant de multiplier la force de traction pour déplacer des charges lourdes avec moins d'effort", "Un système de masques à oxygène étanches", "Un type de nœud de chaise", "Une lance à incendie à haut débit"],
        correct: 0,
        rationale: "Le mouflage applique les lois de la mécanique physique pour démultiplier la force humaine."
    },

    // --- DOCTRINE, TRANSMISSIONS ET ORGANISATION ---
    {
        question: "Quel est le rôle du 'soutien sanitaire' (SSSM - Service de Santé et de Secours Médical) lors d'un incendie d'envergure ou d'une manœuvre longue ?",
        options: ["Assurer le suivi médical, l'hygiène, la prévention, le contrôle de la récupération des sapeurs-pompiers et prodiguer les soins d'urgence aux intervenants", "Conduire les camions de pompiers", "Préparer le budget annuel de la caserne", "Inspecter la peinture des casques"],
        correct: 0,
        rationale: "Le SSSM veille à la santé opérationnelle des personnels engagés en conditions difficiles."
    },
    {
        question: "Que signifie le terme tactique 'reconnaissance approfondie' en cours d'intervention ?",
        options: ["Une fouille méthodique et minutieuse de l'intégralité des pièces et des recoins d'un volume sinistré pour s'assurer qu'aucune victime n'a été oubliée", "Un simple coup d'œil rapide à travers la porte d'entrée", "Regarder par la fenêtre du premier étage", "Vérifier le niveau d'essence du camion"],
        correct: 0,
        rationale: "La reconnaissance approfondie succède à la reconnaissance offensive initiale pour valider la levée de doute totale."
    },
    {
        question: "Comment s'effectue la transmission d'un bilan d'urgence vitale au médecin régulateur du SAMU (Centre 15) par les secouristes ?",
        options: ["En suivant une méthode structurée (ex: identité, motifs, détresses vitales, constantes, gestes réalisés et évolution)", "En racontant l'histoire de manière désordonnée", "En envoyant un simple SMS sans chiffres", "En demandant l'avis des passants dans la rue"],
        correct: 0,
        rationale: "La rigueur de la transmission radio ou téléphonique garantit une parfaite compréhension médicale de l'état du patient."
    },
    {
        question: "Qu'est-ce qu'un 'point de rassemblement des moyens' (PRM) mis en place par le COS lors d'un événement majeur ?",
        options: ["Une zone sécurisée où patientent les engins et les équipes de secours en attente d'engagement opérationnel par le commandement", "Le parking de la cantine pour manger", "Le garage personnel des pompiers", "La station-service du coin"],
        correct: 0,
        rationale: "Le PRM structure l'afflux des renforts sur les feux de forêts ou les sinistres importants."
    },
    {
        question: "Quel est le principe de l'analyse des risques 'A-B-C-D-E' (ou approche systématique) enseignée dans les bilans de traumatologie avancée ?",
        options: ["Airways (Voies aériennes), Breathing (Ventilation), Circulation, Disability (Neurologie), Exposure (Exposition)", "Aller Boire Café Dans l'Espace", "Attendre, Bouger, Crier, Dormir, Espérer", "Aucune signification particulière"],
        correct: 0,
        rationale: "Cette approche hiérarchise la prise en charge des détresses vitales de la plus urgente à la moins urgente."
    },

    // --- COMPLÉMENT POUR ATTEINDRE LES 50 QUESTIONS SUPPLÉMENTAIRES (JSP 4) ---
    {
        question: "Quel est le risque lié à l'utilisation d'émulseurs périmés ou non conformes lors d'un feu d'hydrocarbures ?",
        options: ["Une inefficacité de la mousse qui se détruit au contact du carburant, laissant passer les flammes et risquant de provoquer un drame", "Une transformation de la mousse en parfum de luxe", "Un gel instantané de la pompe à eau", "Un nettoyage trop efficace de la route"],
        correct: 0,
        rationale: "La qualité du film étanche de la mousse repose sur la conformité chimique de l'émulseur."
    },
    {
        question: "Qu'appelle-t-on un 'feu de toiture' par propagation thermique dans un comble d'habitation ?",
        options: ["Un incendie qui se propage dans l'espace vide entre l'isolant et la charpente, souvent difficile d'accès et menaçant l'effondrement du toit", "Un feu de cheminée classique au salon", "Une fuite d'eau sur les tuiles", "Un feu de jardin en plein air"],
        correct: 0,
        rationale: "Les feux de combles exigent un bâchage, des découpes de toiture et une reconnaissance minutieuse des structures bois."
    },
    {
        question: "Quel est le rôle d'une 'ligne de vie' provisoire installée lors d'interventions en toiture pentue ?",
        options: ["Offrir un point d'amarrage sûr auquel s'accrocher avec le harnais et le cordon d'antichute pour éviter toute glissade mortelle", "Servir de corde à linge pour sécher les vestes", "Mesurer la pente exacte du toit", "Fixer l'antenne de télévision de la maison"],
        correct: 0,
        rationale: "La sécurisation des intervenants en hauteur sur toiture glissante est une priorité absolue de commandement."
    },
    {
        question: "Qu'est-ce qu'une 'fracture ouverte' et quel est son risque infectieux majeur ?",
        options: ["Une fracture osseuse où l'os brisé traverse la peau et les tissus, présentant un risque élevé d'infection grave (ostéomyélite)", "Une fracture qui se voit à travers les vêtements propres", "Une cassure de la peau sans os touché", "Une simple fissure invisible sur une radiographie"],
        correct: 0,
        rationale: "L'exposition de l'os à l'air libre impose une protection stérile et une antibiothérapie médicale rapide."
    },
    {
        question: "Pourquoi est-il indispensable de purger l'air d'une ligne de tuyaux avant d'entrer dans un volume en feu ?",
        options: ["Pour s'assurer du bon fonctionnement hydraulique, tester la pression, éviter l'effet 'soufflet d'air' et disposer immédiatement d'eau en pression à l'embout de la lance", "Pour faire de la place dans les tuyaux", "Pour nettoyer l'intérieur du tuyau avec de la poussière", "Pour économiser l'essence du camion"],
        correct: 0,
        rationale: "La purge d'air garantit la réactivité de la lance dès l'ouverture du robinet par le binôme d'attaque."
    },
    {
        question: "Quel est le principe d'un 'dosimètre' individuel porté par les sapeurs-pompiers lors d'une intervention radiologique (RADA) ?",
        options: ["Mesurer et cumuler la dose de rayonnements ionisants reçue par l'intervenant en temps réel pour veiller à ne pas dépasser les seuils réglementaires", "Mesurer la température de l'air ambiant", "Calculer le rythme cardiaque de l'agent", "Indiquer la position GPS exacte en forêt"],
        correct: 0,
        rationale: "Le dosimètre garantit la sécurité radiologique des équipes engagées en zone à risque."
    },
    {
        question: "Qu'appelle-t-on une 'intoxication aiguë au monoxyde de carbone (CO)' en intervention dans un logement ?",
        options: ["L'inhalation d'un gaz inodore, invisible et insidieux qui se fixe sur l'hémoglobine du sang à la place de l'oxygène, provoquant asphyxie et malaises", "Une allergie aux acariens de la poussière", "Une intoxication alimentaire par un repas périmé", "Une irritation des yeux par la fumée noire de bois"],
        correct: 0,
        rationale: "Le CO est le tueur silencieux par excellence des chauffages défectueux (chaudières, poêles)."
    },
    {
        question: "Quel est l'objectif d'un 'calage en échelle' ou d'un amarrage de pieds d'échelle lors d'une ascension sur sol meuble ou glissant ?",
        options: ["Empêcher le pied de l'échelle de glisser ou de s'enfoncer sous la charge du pompier", "Permettre à l'échelle de rouler comme un chariot", "Rallonger l'échelle de 2 mètres supplémentaires", "Aider l'échelle à se plier toute seule"],
        correct: 0,
        rationale: "La stabilité de la base de l'échelle conditionne la sécurité de la montée."
    },
    {
        question: "Dans le cadre du secours routier, qu'est-ce que le 'verre-safe' ou la protection des vitrages avant découpe ?",
        options: ["Poser un film adhésif renforcé ou une bâche sur les vitres de la voiture pour éviter que les éclats de verre trempé ne blessent les victimes ou les intervenants", "Nettoyer les vitres avec du produit à vitres", "Casser toutes les vitres à coups de marteau", "Fermer toutes les fenêtres à clé"],
        correct: 0,
        rationale: "Le verre trempé des automobiles vole en milliers de petits morceaux tranchants ; le protéger est indispensable."
    },
    {
        question: "Qu'est-ce qu'une 'brûlure chimique' de la peau par un acide ou une base forte ?",
        options: ["Une lésion tissulaire destructrice provoquée par un produit corrosif, nécessitant un lavage immédiat et prolongé à l'eau courante (sauf contre-indication spécifique)", "Une coloration de la peau sans gravité", "Une irritation due au soleil d'été", "Une piqûre d'insecte venimeux"],
        correct: 0,
        rationale: "Le facteur temps est crucial : le lavage immédiat à l'eau réduit la pénétration chimique dans les tissus."
    },
    {
        question: "Quel rôle joue le chef de groupe (officier) lorsqu'il se présente sur les lieux d'un sinistre d'ampleur moyenne ?",
        options: ["Prendre le commandement des opérations (COS), regrouper les premiers bilans, structurer les secteurs d'intervention et demander des renforts adaptés", "Conduire le véhicule de liaison", "Préparer le café pour les équipes", "Rédiger les fiches de paie des pompiers"],
        correct: 0,
        rationale: "Le chef de groupe encadre plusieurs engins et assume la fonction de commandement tactique intermédiaire."
    },
    {
        question: "Qu'appelle-t-on un 'flashover imminent' ou l'apparition de langues de feu au plafond (rollover) ?",
        options: ["Le précurseur visuel direct de l'embrasement généralisé, où les gaz chauds s'enflamment en nappes sous le plafond de la pièce", "Un feu de cheminée éteint", "Une panne de courant dans l'immeuble", "Un feu de broussaille en extérieur"],
        correct: 0,
        rationale: "Le rollover (ou tongues of flame) signale que la température critique du flashover est imminente."
    },
    {
        question: "Quel est le principe d'utilisation d'un extincteur à CO2 (dioxyde de carbone) sur un feu ?",
        options: ["Refroidir modérément et surtout étouffer le feu par déplacement de l'oxygène, sans laisser de résidus sur le matériel sensible", "Laisser de la poudre blanche partout", "Imbiber le feu d'eau savonneuse", "Faire exploser le foyer par le froid"],
        correct: 0,
        rationale: "Le CO2 est idéal pour les feux d'origine électrique ou dans les salles informatiques car il ne détériore pas le matériel."
    },
    {
        question: "Qu'est-ce qu'une 'fracture fermée' d'un membre ?",
        options: ["Une cassure de l'os sous la peau, sans plaie cutanée en regard de la fracture", "Une fracture visible à l'extérieur de la jambe", "Une entorse bénigne du poignet", "Une luxation de l'épaule"],
        correct: 0,
        rationale: "L'absence de plaie limite le risque d'infection directe, mais nécessite une immobilisation rigGide (attelle) avant transport."
    },
    {
        question: "Quel est l'objectif de la manœuvre d'extraction d'urgence d'une victime dans un véhicule en feu imminent ?",
        options: ["Sortir la victime de la zone de danger vital immédiat (quitte à s'affranchir temporairement des règles d'immobilisation stricte si le feu menace de l'atteindre)", "Attendre tranquillement l'arrivée de la civan", "Prendre le temps de faire un bilan complet de 20 minutes", "Nettoyer les sièges de la voiture"],
        correct: 0,
        rationale: "Le principe de sauvetage d'urgence prime sur les règles de précaution du rachis en cas de danger vital imminent (incendie, explosion)."
    },
    {
        question: "Qu'appelle-t-on un 'coup de bélier' dans une canalisation ou un établissement de tuyaux sous pression ?",
        options: ["Une surpression brutale et violente provoquée par la fermeture ou l'ouverture trop rapide d'une vanne ou d'une lance, pouvant détruire le matériel", "Un choc de voiture contre le camion", "Un coup de vent sur l'échelle", "Une panne de la pompe du fourgon"],
        correct: 0,
        rationale: "La manœuvre progressive des robinets et vannes prévient les coups de bélier destructeurs."
    },
    {
        question: "Quel est le rôle du signal d'évacuation d'urgence (trois coups de klaxon prolongés ou signal sonore spécifique) sur une intervention ?",
        options: ["Ordonner à l'ensemble des intervenants de quitter immédiatement et en urgence la zone dangereuse en abandonnant le matériel si nécessaire", "Anoncer la fin de l'intervention et le départ en pause", "Saluer un collègue pompier sur la route", "Demander l'allumage des feux de détresse"],
        correct: 0,
        rationale: "Le signal sonore d'évacuation d'urgence est une consigne de sécurité impérative face à un danger imminent (effondrement, explosion)."
    },
    {
        question: "Qu'est-ce qu'une 'réaction exothermique' dans le domaine des risques chimiques ou des incendies ?",
        options: ["Une réaction chimique qui dégage de la chaleur de manière intense", "Une réaction qui absorbe la chaleur et gèle l'air", "Une transformation de l'eau en électricité", "Un phénomène de repos thermique"],
        correct: 0,
        rationale: "De nombreux incendies et mélanges chimiques non contrôlés sont des réactions exothermiques génératrices de risques thermiques."
    },
    {
        question: "Quel est le principe d'action de la ventilation opérationnelle par aspiration (ou extraction) ?",
        options: ["Placer un ventilateur à l'ouvrant de sortie pour aspirer et rejeter les fumées hors du volume confiné", "Pousser l'air frais depuis l'extérieur en force", "Refroidir l'eau des camions", "Nettoyer la façade de la maison"],
        correct: 0,
        rationale: "L'extraction complète la surpression selon la configuration architecturale des locaux."
    },
    {
        question: "Pourquoi le port de la bague, de chaînes ou de montres est-il formellement proscrit en intervention chez les sapeurs-pompiers ?",
        options: ["En raison des risques d'arrachement traumatique du doigt (dégantage), de brûlure par conduction thermique du métal ou de conductivité électrique", "Pour des raisons purement esthétiques de l'uniforme", "Parce que le matériel risque de salir les bijoux", "Pour éviter de perdre ses objets personnels en cas de sport"],
        correct: 0,
        rationale: "Les bijoux métalliques emmagasinent la chaleur et s'accrochent facilement, créant des accidents corporels graves."
    }

];