import { ModelType } from "./ModelType";
import { BaseModel } from "./BaseModel";

export class DualModel extends BaseModel {

    public readonly left: BaseModel;
    public readonly right: BaseModel;

    constructor(left: BaseModel, right: BaseModel) {
        super(ModelType.DUAL);
        this.left = left;
        this.right = right;
    }
}