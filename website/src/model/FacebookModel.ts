import { ModelType } from "./ModelType";
import { BaseModel } from "./BaseModel";
import { IUrl } from "./IUrl";

export class FacebookModel extends BaseModel implements IUrl {

    public readonly url: string;

    constructor(url: string) {
        super(ModelType.FACEBOOK);
        this.url = url;
    }
}