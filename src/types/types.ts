export interface IGames {
    _id: string;
    title: string;
    genre: string;
    image: string;
    description: string;
    platform: string;
    releaseDate: Date;
    developer: string;
    publisher: string;
    rating: number;
    price: number;
    onSale: boolean;
}
