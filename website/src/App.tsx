import React, { ReactElement } from 'react';
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/nova-light/theme.css'
import './App.css';
import { NavigationMenu } from './components/NavigationMenu';

export class App extends React.Component {

	public render(): ReactElement {
		return <React.Fragment>
			<NavigationMenu/>
		</React.Fragment>
	}
}