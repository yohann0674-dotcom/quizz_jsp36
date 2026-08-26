const masterJsp2Bank = [
    // --- INCENDIE ET FEUX AVANCÉS (JSP 2) ---
    {
        question: "Quel est le rôle principal du jet pulvérisé conique (JPC) lors d'une attaque en feu d'intérieur ?",
        options: ["Refroidir les fumées et l'atmosphère tout en créant un écran de protection thermique", "Projeter de l'eau à plus de 100 mètres en hauteur", "Creuser les murs porteurs", "Nettoyer la chaussée après un accident"],
        correct: 0,
        rationale: "Le JPC permet d'absorber les calories des fumées chaudes et protège le binôme d'attaque."
    },
    {
        question: "Qu'appelle-t-on le 'phénomène thermique' connu sous le nom de roll-over ?",
        options: ["Le retournement d'un camion de pompiers", "L'embrasement des gaz de pyrolyse situés sous le plafond, qui se propagent en vagues de flammes", "Une technique de roulage des tuyaux souples", "Un type de nœud d'amarrage rapide"],
        correct: 1,
        rationale: "Le roll-over est un avertissement critique précédant souvent le flashover."
    },
    {
        question: "Quelle action prioritaire doit réaliser un binôme face à des signes annonciateurs de flashover dans un local clos ?",
        options: ["Fuir en courant sans fermer la lance", "Effectuer des impulsions de jet pulvérisé au plafond pour refroidir les gaz et se baisser/se protéger", "Ouvrir grand toutes les fenêtres pour faire un courant d'air", "Attendre l'ordre du chef d'agrès par radio"],
        correct: 1,
        rationale: "Le refroidissement des fumées par impulsions d'eau (chocs thermiques) prévient l'embrasement."
    },
    {
        question: "Quel agent extincteur est particulièrement déconseillé sur les feux d'équipements électriques sous tension en raison des risques d'électrocution et de dégâts massifs ?",
        options: ["L'eau pure en jet plein", "Le dioxyde de carbone (CO2)", "La poudre BC", "La poudre ABC"],
        correct: 0,
        rationale: "L'eau pure en jet plein est conductrice d'électricité et présente un risque mortel d'électrocution."
    },
    {
        question: "Qu'est-ce qu'un émulseur utilisé dans la lutte contre les feux de classe B (liquides inflammables) ?",
        options: ["Un produit moussant concentré mélangé à l'eau pour former de la mousse et étouffer le feu", "Un liquide qui accélère la combustion", "Un colorant pour colorer l'eau en rouge", "Un produit antigel pour l'hiver"],
        correct: 0,
        rationale: "La mousse isole le liquide inflammable de l'air et étouffe la nappe en feu."
    },
    {
        question: "Quel est le principe d'extinction de la poudre chimique sur un feu ?",
        options: ["L'étouffement et l'inhibition chimique de la réaction de combustion", "Le refroidissement intense par le froid", "L'humidification des braises", "La dilution du combustible"],
        correct: 0,
        rationale: "La poudre agit en interrompant chimiquement la combustion (action inhibitrice)."
    },
    {
        question: "Qu'appelle-t-on la 'marche en of' ou la reconnaissance offensive en binôme ?",
        options: ["Une progression méthodique sous ARI à l'intérieur d'un volume sinistré pour rechercher des victimes et éteindre le foyer", "Une marche sportive de caserne", "Une patrouille de surveillance de nuit", "Une vérification des papiers du camion"],
        correct: 0,
        rationale: "La reconnaissance offensive engage le binôme dans la zone à risques sous protection respiratoire."
    },
    {
        question: "Quel est le pourcentage approximatif d'oxygène dans l'air ambiant nécessaire pour entretenir une combustion classique ?",
        options: ["Moins de 5 %", "Environ 15 à 16 % minimum", "Exactement 50 %", "99 %"],
        correct: 1,
        rationale: "En dessous de 14-16 % d'oxygène, la plupart des feux s'éteignent faute de comburant suffisant."
    },
    {
        question: "Qu'est-ce qu'un établissement de tuyaux en 'antenne' ou en 'charge' ?",
        options: ["Une ligne de tuyaux mise en pression depuis la pompe avant même d'atteindre le point d'attaque", "Une antenne radio fixée sur le tuyau", "Un tuyau percé en haut", "Un raccord défectueux"],
        correct: 0,
        rationale: "Établir en charge signifie que l'eau est admise dans la ligne au fur et à mesure de la progression."
    },
    {
        question: "Quel raccord standard utilise-t-on en France pour relier les tuyaux d'incendie souples de diamètres courants (ex: 45 mm ou 70 mm) ?",
        options: ["Le raccord DSP (Aziz / Sapeurs-Pompiers) ou raccord symétrique", "Le raccord à vis américain", "Le raccord rapide de jardin", "Le raccord à baïonnette étanche"],
        correct: 0,
        rationale: "Le raccord symétrique (type Guillemin / DSP) est le standard national des sapeurs-pompiers français."
    },

    // --- MATÉRIEL ET VÉHICULES (JSP 2) ---
    {
        question: "Que signifie le sigle FPTSR dans la nomenclature des engins des sapeurs-pompiers ?",
        options: ["Fourgon Pompe-Tonne Secours Routier", "Feu de Forêt Propulsion Rapide", "Formation Permanente Technique et Secours", "Flotte Pupitre de Transmission Secours"],
        correct: 0,
        rationale: "Le FPTSR est un engin polyvalent combinant la lutte contre l'incendie et le matériel de désincarcération/secours routier."
    },
    {
        question: "Quel engin spécialisé emporte une grande quantité d'eau et est destiné prioritairement aux feux de structures isolées ou de forêts où les poteaux manquent ?",
        options: ["Le Camion Citerne feux de Forêt (CCF) ou la Citerne Grande Capacité (CCGC)", "L'Ambulance (VSAV)", "Le Véhicule de Commandement (VL)", "La Grande Échelle pivotante (EPA)"],
        correct: 0,
        rationale: "Les engins citernes disposent de réserves d'eau importantes et d'une conception tout-terrain pour le CCF."
    },
    {
        question: "Quel est le rôle d'une Échelle Pivotante Automatique (EPA) ou Échelle Aérienne ?",
        options: ["Permettre le sauvetage de personnes en hauteur, l'attaque de feux par l'extérieur et l'établissement de lances canons", "Servir de pont pour traverser les rivières", "Transporter des blessés allongés à l'horizontale sur de longs trajets routiers", "Gonfler des structures gonflables"],
        correct: 0,
        rationale: "L'échelle aérienne est indispensable pour les interventions en hauteur en milieu urbain."
    },
    {
        question: "Comment vérifie-t-on la pression d'une bouteille d'ARI avant son utilisation opérationnelle ?",
        options: ["En lisant le manomètre de la bouteille (qui doit indiquer la pression nominale maximale, généralement 300 bars)", "En la pesant sur une balance de cuisine", "En secouant la bouteille pour entendre l'air", "En ouvrant à fond dans la caserne"],
        correct: 0,
        rationale: "Le manomètre couplé à la bouteille indique si la charge est complète (300 bars pour les bouteilles modernes composites ou acier haute pression)."
    },
    {
        question: "Quel dispositif de sécurité sonore équipe l'ARI et se déclenche automatiquement si le sapeur-pompier reste immobile trop longtemps ou en cas de détresse ?",
        options: ["Le D.I.U. (Dispositif d'Alerte de Manque de Mouvement / Man-Down Alarm)", "Le klaxon du camion", "La sirène de recul", "Le bipeur de caserne"],
        correct: 0,
        rationale: "Le dispositif d'alarme de perte de mobilité (aussi appelé DATI ou whistle/avertisseur de détresse) émet un son strident si le porteur est inerte."
    },
    {
        question: "À quoi sert un lot de sauvetage et de protection contre la chute (LSPCC) ?",
        options: ["À effectuer des sauvetages en hauteur, des auto-sauvetages ou à s'amarrer en sécurité sur un toit", "À porter les tuyaux lourds", "À couper des arbres", "À balayer les débris de verre"],
        correct: 0,
        rationale: "Le LSPCC est l'équipement individuel ou de binôme pour les manœuvres de corde et d'évacuation d'urgence."
    },
    {
        question: "Quel raccord utilise-t-on pour aspirer de l'eau dans une source non sous pression (mare, rivière, bassin) avec des tuyaux d'aspiration rigides ?",
        options: ["Des raccords à vis ou demi-raccords d'aspiration à grand diamètre avec crépine", "Des raccords rapides de jardin", "Des tuyaux souples de 20 mm", "Du ruban adhésif étanche"],
        correct: 0,
        rationale: "Les tuyaux d'aspiration rigides et la crépine évitent l'écrasement sous la dépression créée par la pompe."
    },
    {
        question: "Qu'est-ce qu'une division d'alimentation ou deっちゃ... de refoulement (ex: division 45/75 ou 75/45) ?",
        options: ["Un robinet répartiteur permettant de diviser une grosse ligne d'eau en plusieurs petites lignes pour alimenter plusieurs lances", "Une calculatrice pour les pompiers", "Un outil pour couper le métal", "Une barrière de sécurité routière"],
        correct: 0,
        rationale: "La division permet de raccorder une alimentation principale et de la subdiviser vers plusieurs lances d'attaque."
    },

    // --- SECOURS À PERSONNES / SECOURISME (JSP 2) ---
    {
        question: "Lors d'un bilan d'urgence vitale, que signifient les lettres 'ABCDE' dans la prise en charge secouriste moderne ?",
        options: ["Airway, Breathing, Circulation, Disability, Exposure (Voies aériennes, Respiration, Circulation, Neurologie, Exposition)", "Aller Boire Cent Doses d'Eau", "Arrêter le Bilan Calmement Dès l'Espace", "Alerter, Baliser, Couvrir, Dormir, Évacuer"],
        correct: 0,
        rationale: "L'approche ABCDE est la méthode standardisée internationale d'évaluation et de traitement des urgences vitales."
    },
    {
        question: "Quelle est la valeur normale indicative de la fréquence respiratoire chez un adulte au repos ?",
        options: ["De 5 à 8 mouvements par minute", "De 12 à 20 mouvements par minute", "De 40 à 60 mouvements par minute", "Exactement 30 mouvements par minute"],
        correct: 1,
        rationale: "Un adulte en bonne santé respire en moyenne entre 12 et 20 fois par minute."
    },
    {
        question: "Qu'appelle-t-on une 'détresse respiratoire' aiguë chez une victime consciente ?",
        options: ["Une sensation de gêne légère avec le sourire", "Une difficulté manifeste à respirer, une cyanose (lèvres bleues), des difficultés à parler en phrases complètes et une augmentation de la fréquence respiratoire", "Un simple hoquet persistant", "Un endormissement profond"],
        correct: 1,
        rationale: "La détresse respiratoire engage rapidement le pronostic vital et nécessite une oxygénothérapie d'urgence."
    },
    {
        question: "Quel débit d'oxygène initial administre-t-on généralement à une victime présentant une détresse respiratoire grave avec un masque à haute concentration (MHC) ?",
        options: ["De 1 à 2 litres par minute", "De 9 à 15 litres par minute", "Exactement 50 litres par minute", "Pas d'oxygène du tout"],
        correct: 1,
        rationale: "Le masque à haute concentration nécessite un débit élevé (souvent 15 L/min) pour garantir une fraction inspirée en oxygène maximale."
    },
    {
        question: "Qu'est-ce qu'un traumatisme des membres avec une déformation évidente, une douleur intense et une impuissance fonctionnelle ?",
        options: ["Une simple courbature", "Une fracture probable ou une luxation grave", "Une allergie cutanée", "Un coup de soleil"],
        correct: 1,
        rationale: "Ces signes cliniques font suspecter fortement une lésion osseuse ou articulaire nécessitant une immobilisation (attelle)."
    },
    {
        question: "À quoi sert la pose d'une attelle (dépression ou rigide) sur un membre traumatisé avant le transport ?",
        options: ["À aggraver la fracture pour faire rire le médecin", "À immobiliser les articulations sus et sous-jacentes pour réduire la douleur, éviter les complications et limiter les mouvements", "À réchauffer la jambe", "À couper la circulation sanguine définitivement"],
        correct: 1,
        rationale: "L'immobilisation préserve les tissus environnants et soulage considérablement la victime."
    },
    {
        question: "Qu'appelle-t-on l'état de choc (hypovolémique ou autre) chez un blessé ou un malade ?",
        options: ["Une peur panique passagère", "Une défaillance circulatoire aiguë généralisée conduisant à une mauvaise oxygénation des organes vitaux", "Un choc électrique sur une prise", "Un sursaut en entendant un bruit fort"],
        correct: 1,
        rationale: "L'état de choc est une urgence absolue caractérisée par une pâleur, des sueurs, un pouls filant et une baisse de tension."
    },
    {
        question: "Quelle position d'attente est recommandée pour une victime présentant un malaise avec risque de choc ou une pâleur intense (hors contre-indication de traumatismes majeurs) ?",
        options: ["Position allongée sur le dos avec éventuellement les jambes légèrement surélevées", "Position debout les bras levés", "Position assise en tailleur", "Position sur le ventre stricte"],
        correct: 0,
        rationale: "Allonger la victime favorise le retour veineux vers le cœur et le cerveau."
    },
    {
        question: "Qu'est-ce qu'une brûlure grave nécessitant une évacuation médicalisée urgente vers un centre spécialisé (brûlés) ?",
        options: ["Une cloque minuscule sur un doigt", "Une brûlure couvrant un pourcentage élevé de la surface corporelle (ex: > 10% chez l'adulte), ou touchant le visage, les mains, les voies aériennes ou des zones circulaires", "Une rougeur passagère sans douleur", "Un coup de soleil léger sur le nez"],
        correct: 1,
        rationale: "L'étendue, la profondeur et la localisation déterminent la gravité d'une brûlure."
    },
    {
        question: "Quelle règle visuelle simple estime approximativement la surface corporelle brûlée chez une victime adulte ?",
        options: ["La règle des 9 de Wallace", "La règle de 3", "Le calcul de l'IMC", "Le périmètre crânien"],
        correct: 0,
        rationale: "La règle des 9 divise le corps en zones valant chacune 9 % ou un multiple de 9 de la surface totale."
    },

    // --- TRANSMISSIONS ET INCENDIE URBAIN (JSP 2) ---
    {
        question: "Comment appelle-t-on le compte rendu initial transmis par le premier véhicule se présentant sur les lieux d'une intervention ?",
        options: ["Le message de présentation ou bilan d'arrivée (ex: 'Reconnaissance negative / Attaque en cours') ou message premier avis", "Le bulletin météo", "Le journal de bord de la caserne", "La facture de carburant"],
        correct: 0,
        rationale: "Le premier avis permet au CODIS d'évaluer la situation et de renforcer les moyens si besoin."
    },
    {
        question: "Que signifie l'expression radio 'À vous' lors d'un échange sur le réseau de commandement ?",
        options: ["Je coupe la radio définitivement", "C'est à votre tour de parler, j'attends votre réponse ou confirmation", "Vous avez gagné un lot", "Je quitte le véhicule"],
        correct: 1,
        rationale: "« À vous » invite l'interlocuteur à prendre la parole."
    },
    {
        question: "Qu'est-ce que l'Armement d'un engin d'incendie (ex: FPT armé à 6 sapeurs) ?",
        options: ["Le fait de charger des armes à feu dans le camion", "L'effectif minimal ou nominal de sapeurs-pompiers qualifiés présents à bord pour armer et faire fonctionner l'engin en sécurité", "La peinture militaire du véhicule", "La vérification des rétroviseurs"],
        correct: 1,
        rationale: "L'armement désigne l'équipage complet requis pour un départ en intervention optimal."
    },
    {
        question: "Quel rôle joue le 'chef d'agrès' d'un véhicule d'incendie ou de secours ?",
        options: ["Il conduit uniquement le camion sans donner d'ordres", "Il dirige l'équipage, prend les décisions tactiques sur place, rend compte au commandement et veille à la sécurité des intervenants", "Il s'occupe de la cuisine de la caserne", "Il nettoie les bottes de l'équipe"],
        correct: 1,
        rationale: "Le chef d'agrès est responsable de la mission confiée à son équipe et de la sécurité opérationnelle."
    },
    {
        question: "Dans un binôme d'attaque en feu d'appartement, qui tient la lance (ou commande la lance) ?",
        options: ["Le porteur de lance (ou binôme 1)", "La victime sauvée", "Le conducteur du camion resté en bas", "Le chef d'agrès à distance"],
        correct: 0,
        rationale: "Le porteur de lance gère la buse et l'orientation du jet, secondé par son binôme qui gère le tuyau."
    },
    {
        question: "Pourquoi est-il indispensable de refermer la porte d'un local en feu si l'on ne peut pas l'éteindre immédiatement ?",
        options: ["Pour empêcher le chat de sortir", "Pour priver le feu d'oxygène, confiner les flammes et les fumées toxiques et retarder l'embrasement généralisé", "Pour faire des économies de chauffage", "Parce que c'est interdit de laisser ouvert"],
        correct: 1,
        rationale: "Le confinement d'un local en feu limite l'apport d'oxygène et protège les volumes adjacents."
    },

    // --- COMPLÉMENT POUR ATTEINDRE LA CENTAINE DE QUESTIONS JSP 2 ---
    {
        question: "Quel est le nom de la manœuvre consistant à évacuer l'eau accumulée dans un local après un incendie ou une inondation à l'aide d'une lance ou d'une pompe vide-cave ?",
        options: ["L'épuisement de locaux ou l'aspiration des eaux", "Le séchage solaire", "La ventilation opérationnelle", "Le bâchage de toiture"],
        correct: 0,
        rationale: "L'épuisement consiste à évacuer l'eau stagnante."
    },
    {
        question: "Qu'est-ce qu'un ventilateur opérationnel (VPP ou VMP) utilisé par les sapeurs-pompiers ?",
        options: ["Un ventilateur de salon pour rafraîchir les pompiers", "Un appareil soufflant de grand débit permettant de chasser les fumées, de désenfumer un volume et d'améliorer la visibilité", "Un système de climatisation pour le camion", "Un appareil pour sécher les tuyaux mouillés"],
        correct: 1,
        rationale: "La ventilation opérationnelle (désenfumage) est une tactique majeure d'attaque et de sauvetage."
    },
    {
        question: "Quel risque majeur présente l'utilisation d'une tronçonneuse thermique ou d'une découpeuse thermique en ambiance confinée ou en présence d'atmosphères explosives ?",
        options: ["Aucun risque", "Des émissions de gaz d'échappement toxiques (monoxyde de carbone) et un risque d'étincelles pouvant enflammer des gaz ou vapeurs inflammables", "Une explosion de la lame en plastique", "Un gel immédiat de la machine"],
        correct: 1,
        rationale: "Les moteurs thermiques consomment de l'oxygène, rejettent du CO et produisent des étincelles d'où le danger en atmosphère explosive."
    },
    {
        question: "Qu'est-ce qu'une échelle à coulisse ?",
        options: ["Une échelle portative dont on peut déployer les plans coulissants pour atteindre des étages intermédiaires", "Une échelle qui glisse sur des rails au sol", "Un toboggan d'évacuation", "Un escadron de secours"],
        correct: 0,
        rationale: "L'échelle à coulisse fait partie du lot de sauvetage et d'accès des fourgons."
    },
    {
        question: "Quel type de nœud réalise-t-on pour relier deux cordes de même diamètre ou confectionner une boucle solide de sécurité ?",
        options: ["Le nœud de huit ou le nœud de pêcheur double / nœud plat", "Le nœud de lacet simple", "Le nœud coulant sans arrêt", "Le nœud de chaise inversé non sécurisé"],
        correct: 0,
        rationale: "Le nœud en chiffre 8 est une référence incontournable en matière de sécurité en hauteur."
    },
    {
        question: "Quelle est la signification d'un signal sonore continu ou répété de la sirène d'un véhicule d'incendie en intervention (deux-tons ou trois-tons) ?",
        options: ["Il avertit les usagers de la route du caractère prioritaire et urgent de l'intervention pour obtenir le libre passage", "Il indique que le camion rentre au garage pour le repas", "C'est une alarme anti-vol", "C'est un signal de fin de service"],
        correct: 0,
        rationale: "Les avertisseurs sonores spéciaux confèrent le statut de véhicule prioritaire (article R. 311-1 du Code de la route)."
    },
    {
        question: "Qu'appelle-t-on la 'reconnaissance' menée par les sapeurs-pompiers à leur arrivée sur les lieux ?",
        options: ["L'action d'observer, de inspecter et d'analyser la zone sinistrée pour identifier les dangers, localiser les victimes et définir la tactique", "Le contrôle des cartes d'identité des passants", "La vérification du carburant du véhicule", "La signature du registre de présence"],
        correct: 0,
        rationale: "La reconnaissance est le fondement de toute décision opérationnelle efficace."
    },
    {
        question: "Quel équipement protège les mains des coupures, de la chaleur et des perforations lors des interventions de secours d'urgence aux personnes ou d'incendie ?",
        options: ["Des gants de vaisselle en latex fin", "Des gants techniques adaptés (gants feux de structures ou gants légers de savp)", "Des mitaines en laine", "Aucun gant n'est nécessaire"],
        correct: 1,
        rationale: "Les gants de protection protègent contre les risques thermiques, mécaniques ou biologiques (sang/fluides)."
    },
    {
        question: "Qu'est-ce qu'un point de rassemblement des victimes (PRV) lors d'un événement impliquant de nombreuses victimes (impliquant un plan de secours) ?",
        options: ["Une zone sécurisée où l'on regroupe les impliqués et les blessés légers en attente de tri et de soins", "Un lieu pour pique-niquer en équipe", "Le parking de la caserne", "Le bureau du maire"],
        correct: 0,
        rationale: "Le PRV structure la chaîne de commandement médicale et de sauvetage (secours à multiples victimes)."
    },
    {
        question: "Quel rôle joue l'eau lors de son action d'extinction par 'refroidissement' ?",
        options: ["Elle absorbe une quantité massive de calories du combustible en s'échauffant et en se vaporisant, rompant le triangle du feu", "Elle augmente la température pour brûler plus vite", "Elle crée un mur en béton", "Elle étouffe le feu sans modifier la température"],
        correct: 0,
        rationale: "Le refroidissement est le mode d'action thermique principal de l'eau."
    }
];