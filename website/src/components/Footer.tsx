import React, { ReactElement } from 'react';
import { Social } from './Social';
import '../stylesheets/Footer.css';

interface FooterProps {
    style?: any
}

interface FooterState {
    style?: any
    infoWindow?: any
    overlays?: [any]
}

export class Footer extends React.Component<FooterProps, FooterState> {

    public render(): ReactElement {
        return <div id="footer" style={{padding:"50px", textAlign:"center"}} className="content">
                <ul className="links">
                    <li><a>Church Calendar</a></li>
                    <li><a>Southern Baptist Convention</a></li>
                    <li><a>Baptist Faith And Message</a></li>
                    <li><a>International Mission Board</a></li>
                    <li><a>North American Mission Board</a></li>
                </ul>
                <br/>
                <div className="copyright">Copyright © {new Date().getFullYear()} Southern Calvert Baptist Church. All Rights Reserved</div>
                <br/>
                <Social />
        </div>
    }
}