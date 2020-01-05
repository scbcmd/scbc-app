import React, { ReactElement } from 'react';
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/nova-light/theme.css'
import './App.css';
import { NavigationMenu } from './components/NavigationMenu';
import { Footer } from './components/Footer';
import { BaseModel } from './model/BaseModel';
import { BaseComponent } from './components/BaseComponent';
import { ErrorComponent } from './components/ErrorComponent';
import ConfigService from './services/ConfigService';
import { AlertComponent } from './components/AlertComponent';
import PageService from './services/PageService';

declare global {
    interface Window {
		google: any;
	}
}

interface AppProps {
}

interface AppState {
	models: BaseModel[]
}

export class App extends React.Component<AppProps, AppState> {

	constructor(props: AppProps) {
		super(props);
		this.state = {
			models: []
		}

		PageService.getInstance().pageChange.add(models => {
			this.setState({
				models: models
			})
		});
	}

	public componentDidMount(){
		PageService.getInstance()
		.getCurrentPage()
		.then(models => {
			this.setState({
				models: models
			});
		});		
	}

	public render(): ReactElement {
		
		const elements: ReactElement[] = [];
		if(this.state.models != null) {
			for(let i = 0; i < this.state.models.length; i++){
				elements.push(<BaseComponent key={i} model={this.state.models[i]} />);
			}
		}

		return <div id="app">
			<NavigationMenu/>
			<AlertComponent />
			{elements}
			<Footer />
		</div>
	}
}