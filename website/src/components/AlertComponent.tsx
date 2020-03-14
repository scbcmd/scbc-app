import React, { ReactElement } from 'react';
import AlertModel from '../model/AlertModel';
import ConfigService from '../services/ConfigService';
import '../stylesheets/AlertComponent.css';

interface AlertComponentProps {
    key?: number;
    className?: string;
    style?: any
}

interface AlertComponentState {
    alerts: AlertModel[]
    retrievedAlerts: boolean
}

export class AlertComponent extends React.Component<AlertComponentProps, AlertComponentState> {
    public constructor(props: AlertComponentProps){
        super(props);
        this.state = {
            alerts: [],
            retrievedAlerts: false
        }
        this.dismissAlert = this.dismissAlert.bind(this);
    }

    public componentDidMount(): void {
        if(this.state.retrievedAlerts) return;
        ConfigService.getInstance().getAlerts()
        .then(alerts => {
            this.setState({
                alerts: alerts,
                retrievedAlerts: true
            });
        })
        .catch(error => {
            console.log(error);
        })
    }

    public dismissAlert(index: number): void {
        const alerts: AlertModel[] = this.state.alerts;
        alerts[index].dismissed = true;
        this.setState({
            alerts: alerts
        });
    }

    public render(): ReactElement {
        const elements: ReactElement[] = [];
        if(this.state.alerts != null) {
            const currentDate: number = Date.parse(new Date().toString());
            for(let i = 0; i < this.state.alerts.length; i++){
                const model: AlertModel = this.state.alerts[i];
                const alertDate: number = Date.parse(model.expirationDate.toString());
                if(model.dismissed || currentDate > alertDate) continue;
                elements.push(<div className="alert" key={i}>
                    <div className="alert-title">{model.title}</div>
                    <div className="alert-description" dangerouslySetInnerHTML={{__html: model.content}}></div>
                    <button className="alert-close-button" onClick={() => {this.dismissAlert(i)}}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>);
            }
        }

        return <div className="alerts-container">
            {elements}
        </div>
    }
}