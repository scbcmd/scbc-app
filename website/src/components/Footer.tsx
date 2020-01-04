import React, { ReactElement } from 'react';
import { Social } from './Social';
import '../stylesheets/Footer.css';
import ConfigService from '../services/ConfigService';
import { FooterModel } from '../model/FooterModel';

interface FooterProps {
    style?: any
}

interface FooterState {
    model: FooterModel[]
}

export class Footer extends React.Component<FooterProps, FooterState> {

    constructor(props: FooterProps) {
        super(props);
        this.state = {
            model: []
        }
    }

    public componentDidMount() {
        new ConfigService().getFooter()
        .then(result => {
            console.log(result);
            this.setState({
                model: result
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    public render(): ReactElement {

        const links: ReactElement[] = [];
        if(this.state.model != null) {
            for(let i = 0; i < this.state.model.length; i++){
                const model: FooterModel = this.state.model[i];
                links.push(<li key={i}>
                    <a href={model.url}>{model.label}</a>
                </li>)
            }
        }

        return <div id="footer" style={{padding:"50px", textAlign:"center"}} className="content">
            <ul className="links">
                {links}
            </ul>
            <br/>
            <div className="copyright">Copyright © {new Date().getFullYear()} Southern Calvert Baptist Church. All Rights Reserved</div>
            <br/>
            <Social />
        </div>
    }
}