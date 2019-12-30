import React, { ReactElement } from 'react';
import {Sidebar} from 'primereact/sidebar';
import {PanelMenu} from 'primereact/panelmenu';
import Axios from 'axios';
import '../stylesheets/NavigationMenu.css';
import { Social } from './Social';


interface NavigationMenuProps {}

interface NavigationMenuState {
    isSideBarVisible: boolean;
    navigationContent: [];
}

export class NavigationMenu extends React.Component<NavigationMenuProps, NavigationMenuState> {

    constructor(props: NavigationMenuProps){
        super(props)
        this.state = {
            isSideBarVisible: false,
            navigationContent: []
        };
    }

    public componentDidMount(){
        Axios.get('/config/navigation.json')
        .then((response) => {
            let content = response.data;
            for(let i = 0; i < content.length; i++) {
                if(content[i].url) {
                    content[i].command = () => {window.location.assign(content[i].url)}
                }
            }
            this.setState({
                navigationContent: content
            });
        });
    }

	public render(): ReactElement {
		return <React.Fragment>
            <div id="titlebar">
                    <i className="fas fa-bars" id="hamburger-button" onClick={(e) => this.setState({isSideBarVisible: !this.state.isSideBarVisible})}></i>
                    <img src="images/logo.jpg" alt="Southern Calvert Baptist Church"></img>
                    <Social />
            </div>
            <Sidebar id="sidebar" visible={this.state.isSideBarVisible} modal={false} onHide={() => this.setState({isSideBarVisible:false})}>
                <PanelMenu model={this.state.navigationContent} id="sidebar-menu" style={{width:'100%'}}/>
            </Sidebar>
            <div style={{height:"60px"}}></div>
        </React.Fragment>
	}
}