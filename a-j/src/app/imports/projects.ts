// import { title } from "process";
// import { ImageData } from "../page";

// const images: ImageData[] = [
//     { src: "/images/page1.png", type: "full", text: "" },
//     { src: "/images/page2.png", type: "full", title: "PACK YOUR BODY", text: "Design, création et direction artistique. Vêtements inspirés d'emballage en carton, de corps et de dimensions, transformé en vêtements. Ce projet est réalisé en laine bouillie. Format Photos 2:3" },
//     { src: "/images/page3.png", type: "side" },
//     { src: "/images/page4.png", type: "side" },
//     { src: "/images/page5.png", type: "side", title: "LE VOILE DU DEUIL", text: "Design, création, direction artistique et photographie. Projet de guimpe réalisé dans un workshop de knitwear. Inspiré de l'artiste Majd Abdel Hamide qui travaille la borderie et qui cherche sa propre manière de faire le deuil. Format photos: 4:5" },
//     { src: "/images/page6.png", type: "side" },
//     { src: "/images/page7.png", type: "side", title: "THE FLYING COAT", text: "Design, création et direction artistique. Projet inspiré des tenues des danseurs de Soufie, de la guerre et du temps. Ce projet est réalisé en laine et en polyester. Format photos: 4:5" },
//     // { src: "/images/page8.png", type: "side" },
//     { src: "/images/page9.png", type: "side" },
//     { src: "/images/page10.png", type: "side", title: "THE GRAPHIC SHIRT", text: "Design, création, direction artistique et photographique. Projet réalisé dans le but de trouver une harmonie, et de créer un vêtement avec des motifs de rayures différents. Ce vêtement est créé à partir de trois tissus en polyester et en coton. Le shooting photo a eu lieu à l'espace Monte-Cristo, devant l'oeuvre de Manurel Merida intitulée Ordre et désordre. Une vidéo a été produite à l'exposition de ce projet en collaboration avec Hélène Dinke. Format photo: 4:5" },
//     { src: "/images/page11.png", type: "side" },
//     { src: "/images/page12.png", type: "side", title: "LN MAGAZINE", text: "Travail au but de montrer mon univers et mes inspirations quotidiennes, et de développement des compétences sur indesign." },
//     { src: "/images/page13.png", type: "side" },
//     { src: "/images/page14.png", type: "side" },
//     { src: "/images/page15.png", type: "side" },
//     { src: "/images/page16.png", type: "side" },
//     { src: "/images/page17.png", type: "side" },
//     { src: "/images/page18.png", type: "full", title: "THE SILHOUETTES", text: "Travail réalisé à partir de 16 silhouettes. Au but d'apprendre à chercher des vêtements de seconde main et de savoir les habiller au quotidien. Avec un vêtements upcyclé." },
//     { src: "/images/page19.png", type: "full" },
//     { src: "/images/page20.png", type: "full" },
//     { src: "/images/page21.png", type: "full", text: "Traitement d'un sujet sur les matières premières. La première image est nature morte minimale composée d'une assiette en argile blanche, d'un amas de farine et d'un verre d'eau croupie. J'ai voulu dénoncer les conditions de vie des victimes de guerre. Malgré tout le confort que l'on a pu avoir avant le conflit, la guerre nous a renvoyé à quelque chose de plus archaïque. Dans la matière première, je vois un retour à l'état primitif. Avant le beurre existait le lait et avant le pain existait la farine. L'assiette est l'allégorie de cette conditions humaine, j'ai opté pour l'argile car dans les croyances islamiques, il est dit qu'Adam a été crée d'un mélange d'argiles. La perforation en son centre symoblise un manque qui est nécessaire à la stabilité de tout être humain, la matière première pour un esprit sain : la sécurité." },
//     { src: "/images/page22.png", type: "side" },
//     { src: "/images/page23.png", type: "side" },
//     { src: "/images/page24.png", type: "full", text: "J'ai voulu travailler autour du vêtement. J'ai pris un gilet en maille de production industrielle que j'ai détérioré puis dé-filé. Tout d'abord j'ai voulu revenir sur le concept de sécurité abordé plus haut. Après la sécurité psychique, j'ai voulu illustrer la sécurité physique car le vêtement n'est pas qu'objet d'apparat ou de distinction sociale. J'ai souhaité revenir à la nature première d'un vêtement : l'intégrité physique. S'habiller pour se protéger. Cependant, on peut également le voir sous le spectre du vêtement 'contenant', du vêtement réconfortant. Un pull que notre défunt père aurait pu laisser sur les ruines de la maison familiale par exemple. Implicitement, au travers de ce processus j'ai souhaité inverser le système de production. Au lieu d'utiliser une matière première pour la transformer en objet, j'ai voulu transformer l'objet en matière. On revient sur ce concept de changement d'état / changement de condition. La matière et l'humain ne font plus qu'un." },
//     { src: "/images/page25.png", type: "side" },
//     { src: "/images/page26.png", type: "side" }
// ];

const projects = [
    {
        title: "PACK YOUR BODY",
        images: [
            { src: "/images/page2.png", type: "full" },
            { src: "/images/page3.png", type: "side" },
            { src: "/images/page4.png", type: "side" },
        ],
        description: "Design, création et direction artistique. Vêtements inspirés d'emballage en carton, de corps et de dimensions, transformé en vêtements. Ce projet est réalisé en laine bouillie.",
        photo_format: "2:3"
    },
    {
        title: "LE VOILE DU DEUIL",
        images: [
            { src: "/images/page5.png", type: "" },
            { src: "/images/page6.png", type: "" },
        ],
        description: "Design, création, direction artistique et photographie. Projet de guimpe réalisé dans un workshop de knitwear. Inspiré de l'artiste Majd Abdel Hamide qui travaille la borderie et qui cherche sa propre manière de faire le deuil.",
        photo_format: "4:5"
    },
    {
        title: "THE FLYING COAT",
        images: [
            { src: "/images/page7.png", type: "" },
            { src: "/images/page8.png", type: "" },
            { src: "/images/page9.png", type: "" },
        ],
        description: "Design, création et direction artistique. Projet inspiré des tenues des danseurs de Soufie, de la guerre et du temps. Ce projet est réalisé en laine et en polyester.",
        photo_format: "4:5"
    },
    {
        title: "THE GRAPHIC SHIRT",
        images: [
            { src: "/images/page10.png", type: "" },
            { src: "/images/page11.png", type: "" },
        ],
        description: "Design, création, direction artistique et photographique. Projet réalisé dans le but de trouver une harmonie, et de créer un vêtement avec des motifs de rayures différents. Ce vêtement est créé à partir de trois tissus en polyester et en coton. Le shooting photo a eu lieu à l'espace Monte-Cristo, devant l'oeuvre de Manurel Merida intitulée Ordre et désordre. Une vidéo a été produite à l'exposition de ce projet en collaboration avec Hélène Dinke.",
        photo_format: "4:5"
    },
    {
        title: "LN MAGAZINE",
        images: [
            { src: "/images/page12.png", type: "" },
            { src: "/images/page13.png", type: "" },
            { src: "/images/page14.png", type: "" },
            { src: "/images/page15.png", type: "" },
            { src: "/images/page16.png", type: "" },
            { src: "/images/page17.png", type: "" }
        ],
        description: "Travail au but de montrer mon univers et mes inspirations quotidiennes, et de développement des compétences sur indesign."
    },
    {
        title: "THE SILHOUETTES",
        images: [
            { src: "/images/page18.png", type: "" },
            { src: "/images/page19.png", type: "" },
            { src: "/images/page20.png", type: "" }
        ],
        description: "Travail réalisé à partir de 16 silhouettes. Au but d'apprendre à chercher des vêtements de seconde main et de savoir les habiller au quotidien. Avec un vêtements upcyclé."
    },
    {
        images: [
            { src: "/images/page21.png", type: "side" },
            { src: "/images/page22.png", type: "side" },
            { src: "/images/page23.png", type: "side" }
        ],
        description: "Traitement d'un sujet sur les matières premières. La première image est nature morte minimale composée d'une assiette en argile blanche, d'un amas de farine et d'un verre d'eau croupie. J'ai voulu dénoncer les conditions de vie des victimes de guerre. Malgré tout le confort que l'on a pu avoir avant le conflit, la guerre nous a renvoyé à quelque chose de plus archaïque. Dans la matière première, je vois un retour à l'état primitif. Avant le beurre existait le lait et avant le pain existait la farine. L'assiette est l'allégorie de cette conditions humaine, j'ai opté pour l'argile car dans les croyances islamiques, il est dit qu'Adam a été crée d'un mélange d'argiles. La perforation en son centre symoblise un manque qui est nécessaire à la stabilité de tout être humain, la matière première pour un esprit sain : la sécurité."
    },
    {
        images: [
            { src: "/images/page24.png", type: "side" },
            { src: "/images/page25.png", type: "side" },
            { src: "/images/page26.png", type: "side" }
        ],
        description: "J'ai voulu travailler autour du vêtement. J'ai pris un gilet en maille de production industrielle que j'ai détérioré puis dé-filé. Tout d'abord j'ai voulu revenir sur le concept de sécurité abordé plus haut. Après la sécurité psychique, j'ai voulu illustrer la sécurité physique car le vêtement n'est pas qu'objet d'apparat ou de distinction sociale. J'ai souhaité revenir à la nature première d'un vêtement : l'intégrité physique. S'habiller pour se protéger. Cependant, on peut également le voir sous le spectre du vêtement 'contenant', du vêtement réconfortant. Un pull que notre défunt père aurait pu laisser sur les ruines de la maison familiale par exemple. Implicitement, au travers de ce processus j'ai souhaité inverser le système de production. Au lieu d'utiliser une matière première pour la transformer en objet, j'ai voulu transformer l'objet en matière. On revient sur ce concept de changement d'état / changement de condition. La matière et l'humain ne font plus qu'un."
    }

]

export default projects;