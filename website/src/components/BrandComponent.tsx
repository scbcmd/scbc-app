import React, { ReactElement } from 'react';
import { BrandModel } from '../model/BrandModel';
import '../stylesheets/BrandComponent.css';

interface BrandComponentProps {
    key?: number;
    model: BrandModel;
    className?: string;
    style?: any
}

interface BrandComponentState {

}

export class BrandComponent extends React.Component<BrandComponentProps, BrandComponentState> {

    public render(): ReactElement {
        return <div className={`${this.props.className} brand-component`} style={this.props.style}>
            <img src="images/logo.jpg" alt="church logo"/>
            <div dangerouslySetInnerHTML={{__html: this.props.model.content}}/>
        </div>
    }
}