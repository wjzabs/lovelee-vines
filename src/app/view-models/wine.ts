export interface Wine {
    id: number;
    price: number;
    category: string;
    img?: string;
    label: string;
    origin: string;
    year: string;
    description?: string;
    shop?: string;
    pair?: string; 
}