import React, { ReactElement } from 'react';
import '../stylesheets/ImageOverlay.css';


interface ImageOverlayProps {
    className?: string
    style?: any
    src: string
    color: string
}

interface ImageOverlayState {
    style: any
}

export class ImageOverlay extends React.Component<ImageOverlayProps, ImageOverlayState> {

    constructor(props: ImageOverlayProps) {
        super(props);
        
        const style = this.props.style || {}
        this.state = {
            style: style
        }
        
        this.state.style.position = "relative";
    }

    public render(): ReactElement {
        return <div className="image-overlay-wrapper">
            <div style={this.state.style} className={`image-overlay ${this.props.className}`}>
                <div className="image-overlay-image" style={{backgroundImage: `url("${this.props.src}")`}}></div>
                <div className="image-overlay-filter" style={{backgroundColor: this.props.color}}></div>
                <div className="image-overlay-content">
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}