export interface INavbardData  {
    routeLink: string;
    icon?: string;
    label:string;
    expanded?: boolean;
    items?: INavbardData[];
    parent?: INavbardData | null; // Ajouter la propriété 'parent'

}