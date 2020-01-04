export default class Alert {
    public readonly title: string;
    public readonly description: string;
    public readonly expirationDate: Date;
    public dismissed: boolean = false;

    constructor(title: string, description: string, expirationDate: Date){
        this.title = title;
        this.description = description;
        this.expirationDate = expirationDate;
    }
}