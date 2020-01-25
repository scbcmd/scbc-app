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

		const elements: ReactElement[] = [];
		if(this.props.model.models != null) {
			for(let i = 0; i < this.props.model.models.length; i++){
				elements.push(<BaseComponent key={i} model={this.props.model.models[i]} />);
			}
		}

        return <div className={`${this.props.className} card-wrapper`}>
            <Card title={this.props.model.title} >
                <div className="card-content" >
                    <div dangerouslySetInnerHTML={{__html: this.props.model.content}}/>
                </div>
                {elements}
            </Card>
        </div>
    }
}