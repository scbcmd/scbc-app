import React, { ReactElement } from 'react';
import { CardModel } from '../model/CardModel';
import '../stylesheets/CardComponent.css';
import { Card } from "primereact/card";
import { BaseComponent } from './BaseComponent';

interface CardComponentProps {
    key?: number;
    model: CardModel;
    className?: string;
    style?: any
}

interface CardComponentState {

}

export class CardComponent extends React.Component<CardComponentProps, CardComponentState> {

    public render(): ReactElement {
        return <div className={`${this.props.className} card-wrapper`}>
            <Card title={this.props.model.title} >
                <BaseComponent model={this.props.model.model} />
            </Card>
        </div>
    }
}