import {db, server_time} from '@/firebase/index'
import * as firebase from "firebase";
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import Type from "@/components/portal/Type.vue";
import {store} from "@/store/store";

// import {WhereFilterOp} from "firebase";
import Query = firebase.firestore.Query;
import DocumentReference = firebase.firestore.DocumentReference;

/*

Đây là base Model, chúng ta sẽ viết những methods thường xuyên sử dụng cho các Models, ví dụ:

- insert
- update
- delete
- getById
- query...

 */

// static listenRealtimeDynamic(conditions:{fieldPath: string | firebase.firestore.FieldPath, opStr: firebase.firestore.WhereFilterOp, value: any}[]=null,
//                                  callbacks:{onAdded?:Function, onUpdated?:Function, onDeleted?:Function} =  {onAdded:()=>{}, onUpdated:()=>{}, onDeleted:()=>{} } ): void {
interface IListenRealtimeCallbacks {

    // callbacks:{onAdded?:Function, onUpdated?:Function, onDeleted?:Function}
    onAdded?:Function
    onUpdated?:Function
    onDeleted?:Function
}

export class ListenRealtimeCallbacks implements IListenRealtimeCallbacks{
    onAdded:Function=()=>{}

    onUpdated:Function=()=>{}

    onDeleted:Function=()=>{}

    // https://stackoverflow.com/a/37682352
    // constructor(onAdded?:Function, onUpdated?:Function, onDeleted?:Function) {
    constructor(init?:Partial<ListenRealtimeCallbacks>) {
        // this.onAdded = onAdded
        // this.onUpdate = onUpdated
        // this.onDeleted = onDeleted
        Object.assign(this, init);
    }
};



export default class Model extends BaseModel{
    static COLLECTION: string;
    COLLECTION: string;
    firestore: firebase.firestore.Firestore;
    id: string = "";
    created_date: number = server_time.now.valueOf();
    updated_date: number = server_time.now.valueOf();
    created_by: string = "";
    updated_by: string = "";
    createdAt: number = server_time.now.valueOf();
    updatedAt: number = server_time.now.valueOf();

}
