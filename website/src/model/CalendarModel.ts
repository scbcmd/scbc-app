import { ModelType } from "./ModelType";
import { IUrl } from "./IUrl";
import { BaseModel } from "./BaseModel";

export class CalendarModel extends BaseModel {
    
    readonly calendarId: string;

    constructor(calendarId: string) {
        super(ModelType.CALENDAR);
        this.calendarId = calendarId;
    }
}