import React, { ReactElement } from 'react';
import '../stylesheets/ImageOverlay.css';
import { ImageModel } from '../model/ImageModel';
import { Button } from 'primereact/button';
import { IButton } from '../model/IButton';
import PageService from '../services/PageService';


interface ImageOverlayComponentProps {
    className?: string
    style?: any
    model: ImageModel
}

interface ImageOverlayComponentState {
    style: any
}

export class ImageOverlayComponent extends React.Component<ImageOverlayComponentProps, ImageOverlayComponentState> {

    constructor(props: ImageOverlayComponentProps) {
        super(props);
        
        const style = this.props.style || {}
        this.state = {
            style: style
        }
        
        this.state.style.position = "relative";
    }

    public render(): ReactElement {

        let buttonElement: ReactElement = <React.Fragment/>

        if(this.props.model.button != null){
            const button: IButton = this.props.model.button;
            buttonElement = <Button label={button.label} onClick={() => {PageService.getInstance().changePage(button.url)}} />
        }

        return <div style={this.state.style} className={`image-overlay-wrapper ${this.props.className}`}>
            <div className="image-overlay">
                <div className="image" style={{backgroundImage: `url("${this.props.model.url}")`}}></div>
                <div className="filter" style={{backgroundColor: this.props.model.color}}></div>
                <div className="content" >
                    <div style={{maxWidth:"500px", margin:"auto"}}>
                        <div dangerouslySetInnerHTML={{__html: this.props.model.content}}/>
                        {buttonElement}
                    </div>
                </div>
            </div>
        </div>
    }
}