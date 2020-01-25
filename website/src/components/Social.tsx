import React from 'react';
import '../stylesheets/Social.css';


interface SocialProps {}

interface SocialState {}

export class Social extends React.Component<SocialProps, SocialState> {

    public render() {
        return <div className="social">
            <a href="https://www.facebook.com/Southern-Calvert-Baptist-Church-118133441589278/?epa=SEARCH_BOX">
                <i className="fab fa-facebook social-icon facebook-icon" />
            </a>
            <a href="https://www.instagram.com/southerncalvertbaptistchurch/">
                <i className="fab fa-instagram social-icon instagram-icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCyPFVqf4HpRoYVLODaJQK5A">
                <i className="fab fa-youtube social-icon youtube-icon" />
            </a>
        </div>
    }
}