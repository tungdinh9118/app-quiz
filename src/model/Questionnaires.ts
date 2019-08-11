import Model from './base';

interface IQuestionnaire {
    name : string;
}
export default class Questionnaire extends Model implements IQuestionnaire{
    name: string = ""
    category_id: string = ""

    constructor() {
        super("questionnaire");
    }



    // public async getAllQuestionnaires(): Promise<Questionnaire[]> {
    //     const results: Questionnaire[] = new Array();
    //     let companyID = Vue.$store.getters.currentCompany.id
    //     if (companyID) {
    //         const modelCollection = this.firestore.collection(this.COLLECTION);
    //         const records = await modelCollection
    //             .where("company_id", "==", companyID)
    //             .get();
    //         records.forEach(docSnapshot => {
    //             let record = new Questionnaire();
    //             Object.assign(record, docSnapshot.data());
    //             record.id = docSnapshot.id;
    //             results.push(record);
    //         });
    //     }
    //     return results
    // }
}
