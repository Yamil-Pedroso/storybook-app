import { Schema, model } from "mongoose";

interface IGames {
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

const gamesSchema = new Schema<IGames>({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    platform: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    developer: { type: String, required: true },
    publisher: { type: String, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
    onSale: { type: Boolean, required: true },
});

const Games = model<IGames>("Games", gamesSchema);

export { IGames, Games };