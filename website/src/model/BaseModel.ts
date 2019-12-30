import { ModelType } from "./ModelType";

export abstract class BaseModel {
    
    public readonly type: ModelType

    constructor(type: ModelType){
        this.type = type;
    }

}