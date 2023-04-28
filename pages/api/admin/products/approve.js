import connectMongo from "@/database/conn";
import Product from "@/models/products";

export default async function handler(req, res) {
    connectMongo();
}

