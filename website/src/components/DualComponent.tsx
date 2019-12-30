import React, { ReactElement } from 'react';
import { DualModel } from '../model/DualModel';
import { BaseComponent } from './BaseComponent';

interface DualComponentProps {
    model: DualModel;
    className?: string;
    style?: any
}

interface DualComponentState {

}

export class DualComponent extends React.Component<DualComponentProps, DualComponentState> {

    public render(): ReactElement {
        return <div className={`p-grid p-nogutter ${this.props.className}`} style={this.props.style}>
            <BaseComponent model={this.props.model.left} className="p-col-12 p-md-6 p-lg-6 p-nogutter"/>
            <BaseComponent model={this.props.model.right} className="p-col-12 p-md-6 p-lg-6 p-nogutter"/>
        </div>
    }
}