import { ModelType } from "./ModelType";
import { BaseModel } from "./BaseModel";
import { IUrl } from "./IUrl";
import { IContent } from "./IContent";
import { IButton } from "./IButton";

export class ImageModel extends BaseModel implements IContent, IUrl {
    
    public readonly url: string;
    public readonly content: string;
    public readonly button?: IButton;
    public readonly color: string;

    constructor(url: string, color:string, content: string, button: IButton | undefined = undefined) {
        super(ModelType.IMAGE);
        this.color = color;
        this.content = content;
        this.url = url;
        this.button = button;
    }
}