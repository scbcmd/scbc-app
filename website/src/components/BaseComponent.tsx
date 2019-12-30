import React, { ReactElement } from 'react';
import { BaseModel } from '../model/BaseModel';
import { ModelType } from '../model/ModelType';
import { MapModel } from '../model/MapModel';
import { MapComponent } from './MapComponent';
import { ImageModel } from '../model/ImageModel';
import { ImageOverlayComponent } from './ImageOverlayComponent';
import { DualModel } from '../model/DualModel';
import { DualComponent } from './DualComponent';
import { BrandComponent } from './BrandComponent';
import { BrandModel } from '../model/BrandModel';
import { SlideshowModel } from '../model/SlideshowModel';
import { SlideshowComponent } from './SlideshowComponent';

interface BaseComponentProps {
    key?: number;
    model: BaseModel;
    className?: string;
    style?: any
}

interface BaseComponentState {
}

export class BaseComponent extends React.Component<BaseComponentProps, BaseComponentState> {

    public render(): ReactElement {

        console.log(this.props.model);

        if(this.props.model.type == ModelType.MAP || this.props.model.type.toString().toLowerCase() == ModelType[ModelType.MAP].toString().toLowerCase()){
            const mapModel: MapModel = this.props.model as MapModel;
            return <MapComponent model={mapModel} className={this.props.className} style={this.props.style} />
        }
        if(this.props.model.type == ModelType.IMAGE || this.props.model.type.toString().toLowerCase() == ModelType[ModelType.IMAGE].toString().toLowerCase()){
            const imageModel: ImageModel = this.props.model as ImageModel;
            return <ImageOverlayComponent model={imageModel} className={this.props.className} style={this.props.style} />
        }
        if(this.props.model.type == ModelType.DUAL || this.props.model.type.toString().toLowerCase() == ModelType[ModelType.DUAL].toString().toLowerCase()){
            const dualModel: DualModel = this.props.model as DualModel;
            return <DualComponent model={dualModel} className={this.props.className} style={this.props.style} />
        }
        if(this.props.model.type == ModelType.BRAND || this.props.model.type.toString().toLowerCase() == ModelType[ModelType.BRAND].toString().toLowerCase()){
            const brandModel: BrandModel = this.props.model as BrandModel;
            return <BrandComponent model={brandModel} className={this.props.className} style={this.props.style} />
        }
        if(this.props.model.type == ModelType.SLIDESHOW || this.props.model.type.toString().toLowerCase() == ModelType[ModelType.SLIDESHOW].toString().toLowerCase()){
            const slideshowModel: SlideshowModel = this.props.model as SlideshowModel;
            return <SlideshowComponent model={slideshowModel} className={this.props.className} style={this.props.style} />
        }

        return <React.Fragment></React.Fragment>
    }
}