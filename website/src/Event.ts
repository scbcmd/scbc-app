export interface IEvent<T> {
    add(handler: { (data: T): void }) : void;
    remove(handler: { (data: T): void }) : void;
}

export default class Event<T> implements IEvent<T> {
    private handlers: { (data: T): void; }[] = [];

    public add(handler: { (data: T): void }) : void {
        this.handlers.push(handler);
    }

    public remove(handler: { (data: T): void }) : void {
        this.handlers = this.handlers.filter(h => h !== handler);
    }

    public invoke(data: T) {
        this.handlers.slice(0).forEach(h => h(data));
    }

    public expose() : IEvent<T> {
        return this;
    }
}