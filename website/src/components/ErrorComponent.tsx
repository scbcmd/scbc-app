import React, { ReactElement } from 'react';
import '../stylesheets/ErrorComponent.css';
import { ImageOverlayComponent } from './ImageOverlayComponent';
import { ImageModel } from '../model/ImageModel';

interface ErrorComponentProps {
    className?: string;
    style?: any
    error: any
}

interface ErrorComponentState {
}

export class ErrorComponent extends React.Component<ErrorComponentProps, ErrorComponentState> {

    public render(): ReactElement {

        const model = new ImageModel("images/one-way.jpg", "rgba(22,69,89,0.5)", `<h1>${this.props.error.response.status} ${this.props.error.response.statusText}</h1>
        <h2>Looks like this page needs Jesus</h2>
        <p>"For the Son of Man came to seek and to save the lost."</p>
        <p>- Luke 19:10</p>`);

        return <ImageOverlayComponent model={model} />
    }
}