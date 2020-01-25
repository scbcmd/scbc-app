import Axios from "axios";
import CalendarEventModel from "../model/CalendarEventModel";

export default class GoogleCalendarService {

    private static instance: GoogleCalendarService;

    private constructor() {

    }

    public static getInstance(): GoogleCalendarService {
        if(this.instance == null) {
            this.instance = new GoogleCalendarService();
        }
        return this.instance;
    }

    private formatDate(date: Date): string {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = (date.getDay() + 1).toString().padStart(2, "0");
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        const offset = (date.getTimezoneOffset() / 60).toString().padStart(2, "0");
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}-${offset}:00`
    }

    private getUrl(calendarId: string, timeMin: Date, timeMax: Date): string {
        return `https://clients6.google.com/calendar/v3/calendars/${calendarId}/events?calendarId=${encodeURIComponent(calendarId)}&singleEvents=true&timeZone=America%2FNew_York&maxAttendees=1&maxResults=500&sanitizeHtml=true&timeMin=${encodeURIComponent(this.formatDate(timeMin))}&timeMax=${encodeURIComponent(this.formatDate(timeMax))}&key=AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs`;
    }

    private parseResponse(response: any): CalendarEventModel[] {
        const events: CalendarEventModel[] = [];
        try {
            response.items.forEach((e: any) => {
                try {

                    if(e.start.dateTime) {
                        events.push({
                            id: e.id.toString(),
                            title: e.summary.toString(),
                            url: e.htmlLink.toString(),
                            start: this.parseGoogleDate(e.start.dateTime.toString()),
                            end: this.parseGoogleDate(e.end.dateTime.toString()),
                            allDay: false
                        });
                    }
                    else if (e.start.date) {
                        events.push({
                            id: e.id.toString(),
                            title: e.summary.toString(),
                            url: e.htmlLink.toString(),
                            start: this.parseGoogleDate(e.start.date.toString()),
                            end: this.parseGoogleDate(e.end.date.toString()),
                            allDay: true
                        });
                    }
                    else {
                        console.log(e);
                    }
                }
                catch(ex){
                    console.log(ex);
                    console.log(e);
                }
            });
        }
        catch(ex){
            console.log(ex);
        }
        return events;
    }

    private parseGoogleDate(dateString: string): Date {
        // example "2020-02-02" or "2020-02-02T17:30:00-05:00"
        const sections: string[] = dateString.split("T");
        const dateSections: string[] = sections[0].split("-");
        const year: number = parseInt(dateSections[0]);
        const month: number = parseInt(dateSections[1]) - 1;
        const day: number = parseInt(dateSections[2]);

        // whole day
        if(sections.length === 1){
            return new Date(year, month, day);
        }

        const timeSections: string[] = sections[1].split(":");
        const hours: number = parseInt(timeSections[0]);
        const minutes: number = parseInt(timeSections[1]);

        return new Date(year, month, day, hours, minutes, 0);
    }

    public getEvents(calendarId: string, timeMin: Date, timeMax: Date): Promise<CalendarEventModel[]> {
        const url = this.getUrl(calendarId, timeMin, timeMax);
        return new Promise<CalendarEventModel[]>((resolve, reject) => {
            Axios.get(url)
            .then((response) => {
                resolve(this.parseResponse(response.data));
            })
            .catch((error) => {
                reject(error)
            })
        });
    }
}