import React, { ReactElement } from 'react';
import { GMap } from 'primereact/gmap';
import { MapModel } from '../model/MapModel';

interface MapComponentProps {
    className?: string;
    style?: any;
    model: MapModel;
}

interface MapComponentState {
    style?: any
    infoWindow?: any
    overlays?: [any]
}

export class MapComponent extends React.Component<MapComponentProps, MapComponentState> {

    infoWindow: any;

    constructor(props: MapComponentProps){
        super(props)
        
        const style = this.props.style || {};
        this.state = {
            style: style
        }

        this.state.style.minHeight = this.state.style.minHeight || "500px";
        this.onMapReady = this.onMapReady.bind(this);
        this.onOverlayClick = this.onOverlayClick.bind(this);
    }

    
    public onOverlayClick(event: any) {
        let isMarker = event.overlay.getTitle !== undefined;
        
        if(isMarker) {
            this.infoWindow = this.infoWindow || new window.google.maps.InfoWindow();
            this.infoWindow.setContent(`${this.props.model.content}<a href="${this.props.model.url}">Open In Google Maps</a>`);
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());
        }
    }

    onMapReady(event: any) {
        this.setState({
            overlays: [
                new window.google.maps.Marker({
                    position: {
                        lat: this.props.model.location.lat,
                        lng: this.props.model.location.lng
                    }
                })
            ]
        });
    }
    

    public render(): ReactElement {
        
        const options = {
            center: {
                lat: this.props.model.location.lat,
                lng: this.props.model.location.lng
            },
            zoom: this.props.model.zoom,
            draggable: false,
            clickableIcons: false,
            streetViewControl: false
        }

        return <GMap className={this.props.className}
            options={options}
            overlays={this.state.overlays}
            style={this.state.style}
            onOverlayClick={this.onOverlayClick}
            onMapReady={this.onMapReady}></GMap>
    }
}