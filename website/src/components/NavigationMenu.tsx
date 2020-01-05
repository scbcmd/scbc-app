import React, { ReactElement } from 'react';
import {Sidebar} from 'primereact/sidebar';
import {PanelMenu} from 'primereact/panelmenu';
import '../stylesheets/NavigationMenu.css';
import { Social } from './Social';
import ConfigService from '../services/ConfigService';
import PageService from '../services/PageService';


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
        ConfigService.getInstance().getNavigation()
        .then(result => {
            let items = result;
            this.modifyMenuItems(items);
            this.setState({
                navigationContent: items as []
            })
        })
        .catch(error => {
            console.log(error);
        });
    }

    private modifyMenuItems(items: any[]) {
        for(let i = 0; i < items.length; i++) {
            const item = items[i];

            if(item.items){
                this.modifyMenuItems(item.items);
            }

            if(item.link) {
                item.command = () => {
                    this.setState({
                        isSideBarVisible: false
                    });
                    PageService.getInstance().changePage(item.link);
                }
            }
        }
    }

	public render(): ReactElement {
		return <React.Fragment>
            <div id="titlebar">
                    <i className="fas fa-bars" id="hamburger-button" onClick={(e) => this.setState({isSideBarVisible: !this.state.isSideBarVisible})}></i>
                    <img src="images/logo.jpg" alt="Southern Calvert Baptist Church"></img>
                    <Social />
            </div>
            <Sidebar id="sidebar" visible={this.state.isSideBarVisible} onHide={() => this.setState({isSideBarVisible:false})}>
                <PanelMenu model={this.state.navigationContent} id="sidebar-menu" style={{width:'100%'}}/>
            </Sidebar>
            <div style={{height:"60px"}}></div>
        </React.Fragment>
	}
}