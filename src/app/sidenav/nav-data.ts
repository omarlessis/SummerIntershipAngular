import { INavbardData } from "./hepler";

export const navbarData: INavbardData [] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Accueil'
    },

    {
        routeLink: 'products',
        icon: 'fal fa-gear',
        label: 'Inspection'
    },

    {
        routeLink: 'statistics',
        icon: 'fal fa-automobile',
        label: 'Véhicule'
    },

    {
        routeLink: 'coupens',
        icon: 'fal fa-bar-chart',
        label: 'Statistique'
    },

    {
        routeLink: 'pages',
        icon: 'fal fa-user',
        label: 'Utilisateurs'
    },

    {
        routeLink: 'media',
        icon: 'fal fa-paperclip',
        label: 'Annexe',
        items: [
            {
                routeLink:'media/PartDamaged',
                icon: 'fal fa-paperclip',
                label:'Part Damaged'
            },
            {
                routeLink:'media/DamageCode',
                icon: 'fal fa-paperclip',
                label:' Damage Code'
            },
            {
                routeLink:'media/DamageSize',
                icon: 'fal fa-paperclip',
                label:' Damage Size'
            },
            {
                routeLink:'media/DamagePosition',
                icon: 'fal fa-paperclip',
                label:' Damage Position'
            },
            {
                routeLink:'media/Type',
                icon: 'fal fa-paperclip',
                label:'Type'
            }


        ]
    },

    
];