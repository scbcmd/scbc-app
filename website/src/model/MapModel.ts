import { ModelType } from "./ModelType";
import { BaseModel } from "./BaseModel";
import { IContent } from "./IContent";
import { IUrl } from "./IUrl";
import { ILocation } from "./ILocation";

export class MapModel extends BaseModel implements IContent, IUrl {

    public readonly url: string;
    public readonly content: string;
    public readonly location: ILocation;
    public readonly zoom: number;

    constructor(location: ILocation, content: string, url: string, zoom: number = 16) {
        super(ModelType.MAP);
        this.content = content;
        this.url = url;
        this.location = location;
        this.zoom = zoom;
    }
}