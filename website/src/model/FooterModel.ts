import { IUrl } from "./IUrl"

export class FooterModel implements IUrl {

    public readonly url: string;
    public readonly label: string;

    constructor(label: string, url: string) {
        this.label = label;
        this.url = url;
    }
}