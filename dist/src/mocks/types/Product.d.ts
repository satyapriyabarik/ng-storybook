export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    care: string;
    reviews: {
        userName: string;
        title: string;
        comment: string;
        rating: number;
    }[];
}
