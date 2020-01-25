import React, { ReactElement } from 'react';
import { FacebookModel } from '../model/FacebookModel';
import '../stylesheets/FacebookComponent.css';

interface FacebookComponentProps {
    model: FacebookModel;
    className?: string;
    style?: any
}

interface FacebookComponentState {

}

export class FacebookComponent extends React.Component<FacebookComponentProps, FacebookComponentState> {

    public render(): ReactElement {
        return <div className={`${this.props.className} facebook-container`} style={this.props.style}>
            <iframe src={"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2F" + this.props.model.url
                + "&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"}
                width="340" height="500" allow="encrypted-media" title={this.props.model.url}></iframe>
        </div>
    }
}