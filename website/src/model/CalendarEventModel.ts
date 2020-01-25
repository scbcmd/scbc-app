export default interface CalendarEventModel {
    id: string;
    title: string;
    start: Date;
    end: Date;
    url: string;
    allDay: boolean;
}