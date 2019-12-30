import React, { ReactElement } from 'react';
import {Button} from 'primereact/button';
import { ImageOverlay } from '../components/ImageOverlay';
import { ChurchMap } from '../components/ChurchMap';
import '../stylesheets/HomePage.css';

export class HomePage extends React.Component {

    public render(): ReactElement {

        return <React.Fragment>
            <ImageOverlay src="images/homepage.jpg" color="rgba(22,69,89,0.3)" style={{display: "inline-block", minHeight: "300px", width: "100%"}}>
                <h1 id="homepage-title">Come Worship With Us!</h1>
                <h3 id="homepage-subtitle">
                    Connect Groups at 9:30 AM
                    <br/>
                    Worship Service at 10:45 AM
                    <br/>
                    Sunday Evenings at 6:00 PM
                </h3>
            </ImageOverlay>
            <div className="p-grid p-nogutter content">
                <div id="map-content" className="p-col-12 p-md-6 p-lg-6 p-nogutter">
                    <ChurchMap />
                </div>
                <div id="intro-content" className="p-col-12 p-md-6 p-lg-6 p-nogutter content-text">
                    <img src="images/logo.jpg"/>
                    <h2>Connecting People With Christ, and Connecting Christ's People with One Another</h2>
                    <h3>Connect Groups: Sunday at 9:30 AM</h3>
                    <h3>Worship Service: Sunday at 10:45 AM</h3>
                    <h3>Sunday Evenings: Sunday at 6:00 PM</h3>
                </div>
            </div>
            <ImageOverlay src="images/who-we-are.jpg" color="rgba(22,69,89,0.3)" style={{display: "inline-block", minHeight: "300px", width: "100%"}}>
                <div className="image-overlay-text">
                    <h1>Who We Are</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <Button label="Learn More" />
                </div>
            </ImageOverlay>
            <div className="p-grid p-nogutter">
                <ImageOverlay color="rgba(22,69,89,0.3)" src="images/contact-us.jpg" className="p-col-12 p-md-6 p-lg-6 p-nogutter">
                    <h2>Contact Us</h2>
                    <h4>410-326-6533</h4>
                    <h4>scbc1secretary@gmail.com</h4>
                </ImageOverlay>
                <ImageOverlay color="rgba(22,69,89,0.3)" src="images/bible-study.jpg" className="p-col-12 p-md-6 p-lg-6 p-nogutter">
                    <h2>Join us for Bible Study</h2>
                    <h4>Coed Study Sunday at 6:00 PM</h4>
                    <h4>Women's Study Tuesday at 1:00 and 7:00 PM</h4>
                    <h4>Men's Study Wednesday at 6:00 PM</h4>
                    <h4>Coed Study Wednesday at 6:00 PM</h4>
                </ImageOverlay>
            </div>
        </React.Fragment>
    }

}