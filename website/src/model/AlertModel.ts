export default class AlertModel {
    public readonly title: string;
    public readonly content: string;
    public readonly expirationDate: Date;
    public dismissed: boolean = false;

    constructor(title: string, content: string, expirationDate: Date){
        this.title = title;
        this.content = content;
        this.expirationDate = expirationDate;
    }
}