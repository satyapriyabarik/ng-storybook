import { Product } from "./types/Product";

export async function getProducts({ page = 1, limit = 50 } = {}): Promise<Product[]> {
    // Fake product list for Storybook
    const mockProducts: Product[] = [
        { id: 1, name: "Aloe Vera", category: "Succulent", price: 10, image: "", description: "", care: "", reviews: [] },
        { id: 2, name: "Lavender", category: "Herb", price: 15, image: "", description: "", care: "", reviews: [] },
        { id: 3, name: "Rose", category: "Flower", price: 20, image: "", description: "", care: "", reviews: [] },
        { id: 4, name: "Basil", category: "Herb", price: 8, image: "", description: "", care: "", reviews: [] },
        { id: 5, name: "Cactus", category: "Succulent", price: 12, image: "", description: "", care: "", reviews: [] },
    ];
    return new Promise((resolve) => setTimeout(() => resolve(mockProducts), 300));
}

export const sampleProducts: Product[] = [
    {
        "id": 1,
        "name": "Rose",
        "care": "Full sunlight",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznSUipw7u1sWW24l3fer-VQ8AJzo3JAQDpw&s",
        "description": "Beautiful red rose, requires moderate care. This is emmense pleaseure to fullfil my garden with so much natural fragnances.",
        "category": "Flower",
        "price": 345.99,
        "reviews": [
            {
                "userName": "Priya",
                "rating": 5,
                "title": "Healthy and beautiful!",
                "comment": "The plant arrived well-packed and fresh. It looks great in my living room!"
            }
        ]
    },
    {
        "id": 2,
        "name": "Tulip",
        "care": "Partial shade",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHOO_kkyLrUZprSI2aJWUm3KJCfVUJAmyJrpaxeO9kaj9O44aM9hdpH6KVIuljxv_drppwtsUW1e5VUD_xQHZY7pVT1o_GoxFUrYXWFWNa",
        "description": "Vibrant tulip, blooms in spring with minimal care. Pleasantful garden with joyful memories to create.",
        "category": "Flower",
        "price": 408.99,
        "reviews": [
            {
                "userName": "Barsha",
                "rating": 5,
                "title": "Naturally Awesome",
                "comment": "The best plant in my collections!"
            }
        ]
    }
];
