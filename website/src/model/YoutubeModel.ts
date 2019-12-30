import { ModelType } from "./ModelType";
import { BaseModel } from "./BaseModel";
import { IUrl } from "./IUrl";

export class YoutubeModel extends BaseModel implements IUrl {

    public readonly url: string;

    constructor(url: string) {
        super(ModelType.YOUTUBE);
        this.url = url;
    }
}