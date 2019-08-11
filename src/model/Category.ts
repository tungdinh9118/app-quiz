import Model from './base';
import {firestore} from "firebase";


interface ICategory {
    name : string;
    description:string
}
export default class Category extends Model implements ICategory {
    name: string = "";
    description:string="";

    constructor() {
        super("category");
    }
    public getAllCategorys(): firestore.Query {
        return this.firestore.collection(this.COLLECTION)
    }
}

