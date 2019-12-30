import { ModelType } from "./ModelType";
import { BaseModel } from "./BaseModel";
import { ImageModel } from "./ImageModel";

export class SlideshowModel extends BaseModel {

    public readonly slides: ImageModel[]

    constructor(slides: ImageModel[]) {
        super(ModelType.SLIDESHOW);
        this.slides = slides;
    }
}