import React, { ReactElement } from 'react';
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/nova-light/theme.css'
import './App.css';
import { NavigationMenu } from './components/NavigationMenu';
import { Footer } from './components/Footer';
import { BaseModel } from './model/BaseModel';
import Axios from 'axios';
import { BaseComponent } from './components/BaseComponent';
import { ErrorComponent } from './components/ErrorComponent';
import ConfigService from './services/ConfigService';

declare global {
    interface Window {
		google: any;
	}
}

interface AppProps {
}

interface AppState {
	models: BaseModel[]
	error?: any;
}

export class App extends React.Component<AppProps, AppState> {

	constructor(props: AppProps) {
		super(props);
		this.state = {
			models: [],
		}	
	}

	public componentDidMount(){
		new ConfigService().getPage()
		.then((result) => {
			this.setState({
				models: result
			});
		}).catch((err) => {
			console.log(err.response);
			this.setState({
				error: err
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

		const errorElement: ReactElement = this.state.error == null ? <React.Fragment /> : <ErrorComponent error={this.state.error}/>;
		
		return <div id="app">
			<NavigationMenu/>
			{errorElement}
			{elements}
			<Footer />
		</div>
	}
}