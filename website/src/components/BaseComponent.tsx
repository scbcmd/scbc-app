import React, { ReactElement } from 'react';
import { BaseModel } from '../model/BaseModel';
import { ModelType } from '../model/ModelType';
import { MapModel } from '../model/MapModel';
import { LeafletMapComponent } from './LeafletMapComponent';
import { ImageModel } from '../model/ImageModel';
import { ImageOverlayComponent } from './ImageOverlayComponent';
import { DualModel } from '../model/DualModel';
import { DualComponent } from './DualComponent';
import { BrandComponent } from './BrandComponent';
import { CardComponent } from './CardComponent';
import { BrandModel } from '../model/BrandModel';
import { CardModel } from '../model/CardModel';
import { SlideshowModel } from '../model/SlideshowModel';
import { SlideshowComponent } from './SlideshowComponent';
import { FacebookComponent } from './FacebookComponent';
import { FacebookModel } from '../model/FacebookModel';
import { CalendarComponent } from './CalendarComponent';
import { CalendarModel } from '../model/CalendarModel';

interface BaseComponentProps {
    key?: number;
    model: BaseModel;
    className?: string;
    style?: any
}

interface BaseComponentState {
}

export class BaseComponent extends React.Component<BaseComponentProps, BaseComponentState> {

    public constructor(props: BaseComponentProps){
        super(props);
        this.getModelType = this.getModelType.bind(this);
    }

    private getModelType(): ModelType {
        if(!isNaN(this.props.model.type)) return this.props.model.type as ModelType;
        const enumName: string = this.props.model.type.toString().toUpperCase();
        const key = enumName as keyof typeof ModelType;
        return ModelType[key];
    }

    public render(): ReactElement {

        switch(this.getModelType()){
            case ModelType.BRAND:
                return <BrandComponent model={this.props.model as BrandModel} className={this.props.className} style={this.props.style} />

            case ModelType.CALENDAR:
                return <CalendarComponent model={this.props.model as CalendarModel} className={this.props.className} style={this.props.style} />
                
            case ModelType.CARD:
                return <CardComponent model={this.props.model as CardModel} className={this.props.className} style={this.props.style} />

            case ModelType.DUAL:
                return <DualComponent model={this.props.model as DualModel} className={this.props.className} style={this.props.style} />

            case ModelType.FACEBOOK:
                return <FacebookComponent  model={this.props.model as FacebookModel} className={this.props.className} style={this.props.style}/>

            case ModelType.IMAGE:
                return <ImageOverlayComponent model={this.props.model as ImageModel} className={this.props.className} style={this.props.style} />

            case ModelType.MAP:
                return <LeafletMapComponent model={this.props.model as MapModel} className={this.props.className} style={this.props.style} />

            case ModelType.SLIDESHOW:
                return <SlideshowComponent model={this.props.model as SlideshowModel} className={this.props.className} style={this.props.style} />

            default: return <React.Fragment/>
        }
    }
}