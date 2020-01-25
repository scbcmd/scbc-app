import { BaseModel } from "./BaseModel";
import { ModelType } from "./ModelType";

export class CardModel extends BaseModel {
    
    readonly title: string;
    readonly content: string;
    readonly models: BaseModel[];

    constructor(title: string, content: string, models: BaseModel[]) {
        super(ModelType.CARD);
        this.title = title;
        this.content = content;
        this.models = models;
    }

}