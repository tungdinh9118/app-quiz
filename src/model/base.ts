import * as firebase from 'firebase'
// @ts-ignore
import {number, string} from "prop-types";

interface IModel{
    id: string;
    createAt: number;
    updateAt: number;
    created_by: string;
}

export default class Model implements IModel {
    static COLLECTION: string;
    COLLECTION: string;
    id: string="";
    createAt: number = new Date().getTime();
    updateAt: number = new Date().getTime();
    created_by: string="";
    firestore: firebase.firestore.Firestore;

    constructor(COLLECTION: string) {
        this.COLLECTION=COLLECTION;
        this.firestore = firebase.firestore();
        const thisStatic = this.constructor as any;
        thisStatic.COLLECTION = COLLECTION;
    };
    async insert():Promise<Model> {
        const modelCollection = this.firestore.collection(this.COLLECTION);
        let result = {...this}
        delete result['firestore'];
        delete result['COLLECTION'];
        delete result['id']
        // @ts-ignore
        result['createAt'] = new Date().getTime(); //TIMESTAMP
        const model = await modelCollection.add(JSON.parse(JSON.stringify(result)));
        this.id = model.id;
        return this
    }
    async update():Promise<Model>{
        const modelCollection = this.firestore.collection(this.COLLECTION)
        let result = {...this};
        let id = result['id'];
        delete result['firestore'];
        delete result['COLLECTION'];
        delete result['id']
        result['updateAt'] = new Date().getTime();
        // @ts-ignore
        const model = await modelCollection.doc(id).set(JSON.parse(JSON.stringify(result),{merge:true}))
        return this
    }
    async delete(): Promise<void>{
        const modelCollection = this.firestore.collection(this.COLLECTION)
        const record = await modelCollection.doc(this.id)
        return record.delete()
    }
    async getById(id: string): Promise<Model>{
        const modelCollection = this.firestore.collection(this.COLLECTION)
        const record = await modelCollection.doc(id).get()
        if(!record.exists){
            throw new Error(`${this.COLLECTION} ${id} not found`)
        }
        this.id = record.id
        Object.assign(this, record.data())
        return this
    }
    async upsert(): Promise<Model> {
        if(this.id){
           return await this.update()
        }else {
           return await this.insert()
        }
    }
}
