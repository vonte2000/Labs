import { ObjectId } from "mongodb";
import Product from "./Products";

export default interface CartItem {
    _id?: ObjectId;
    userId: ObjectId;
    product: Product;
    quantity: number;
}