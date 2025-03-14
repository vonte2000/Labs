import { ObjectId } from "mongodb";
import CartItem from "./CartItem";

export default interface User {
    _id?: ObjectId;
    displayName: string;
    photoURL: string;
    darkTheme: string;
}