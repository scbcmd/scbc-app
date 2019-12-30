import { ModelType } from "./ModelType";
import { IUrl } from "./IUrl";
import { BaseModel } from "./BaseModel";

export class CalendarModel extends BaseModel implements IUrl {
    
    readonly url: string;

    constructor(url: string) {
        super(ModelType.CALENDAR);
        this.url = url;
    }
}