import Model from "./base";

interface IQuestion{
    name: string;
    category_id: string;
    questionnaire_id: string;
    description: string;
    response_type: string;
}
export default class Question extends Model implements IQuestion {
    name: string ="";
    category_id: string = "";
    questionnaire_id: string = "";
    description: string = "";
    options = [];
    response_type: string ="multiplechoice";
    constructor(){
        super("question")
    }
}
