import { Product } from "./types/Product";
export declare function getProducts({ page, limit }?: {
    page?: number | undefined;
    limit?: number | undefined;
}): Promise<Product[]>;
export declare const sampleProducts: Product[];
