import { ModelType } from "./ModelType";
import { BaseModel } from "./BaseModel";
import { IUrl } from "./IUrl";
import { IContent } from "./IContent";

export class BrandModel extends BaseModel implements IContent, IUrl {
    
    readonly content: string;
    readonly url: string;

    constructor(url: string, content: string) {
        super(ModelType.BRAND);
        this.url = url;
        this.content = content;
    }

}