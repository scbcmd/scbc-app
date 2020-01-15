import { BaseModel } from "./BaseModel";
import { ModelType } from "./ModelType";

export class CardModel extends BaseModel {
    
    readonly title: string
    readonly model: BaseModel;

    constructor(title: string, model: BaseModel) {
        super(ModelType.CARD);
        this.title = title;
        this.model = model;
    }

}