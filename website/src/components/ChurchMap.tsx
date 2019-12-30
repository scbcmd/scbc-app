import React, { ReactElement } from 'react';
import { GMap } from 'primereact/gmap';

interface ChurchMapProps {
    style?: any
}

interface ChurchMapState {
    style?: any
    infoWindow?: any
    overlays?: [any]
}

export class ChurchMap extends React.Component<ChurchMapProps, ChurchMapState> {

    infoWindow: any;

    constructor(props: ChurchMapProps){
        super(props)
        
        const style = this.props.style || {};
        this.state = {
            style: style
        }

        this.state.style.width = this.state.style.width || "100%";
        this.state.style.minHeight = this.state.style.minHeight || "500px";
        this.onMapReady = this.onMapReady.bind(this);
        this.onOverlayClick = this.onOverlayClick.bind(this);
    }

    
    public onOverlayClick(event: any) {
        let isMarker = event.overlay.getTitle !== undefined;
        
        if(isMarker) {
            let title = event.overlay.getTitle();
            this.infoWindow = this.infoWindow || new window.google.maps.InfoWindow();
            this.infoWindow.setContent(`
                <h4 style="margin:0px;">${title}</h4>
                <p style="margin:0px; margin-top:2px; margin-bottom:2px;">12140 H G Trueman Rd, Lusby, MD 20657</p>
                <a href="https://www.google.com/maps/place/Southern+Calvert+Baptist+Church/@38.3648675,-76.4485491,19.5z/data=!4m5!3m4!1s0x89b9d7f830f9eae9:0x93c835718a27e7e6!8m2!3d38.364885!4d-76.448204">Open In Google Maps</a>
            `);
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());
        }
    }

    onMapReady(event: any) {
        this.setState({
            overlays: [
                new window.google.maps.Marker({position: {lat: 38.364839, lng: -76.448224}, title:"Southern Calvert Baptist Church"})
            ]
        });
    }
    

    public render(): ReactElement {
        
        const options = {
            center: {lat: 38.364839, lng: -76.448224},
            zoom: 16,
            draggable: false,
            clickableIcons: false,
            streetViewControl: false
        }

        return <GMap options={options}
            overlays={this.state.overlays}
            style={this.state.style}
            onOverlayClick={this.onOverlayClick}
            onMapReady={this.onMapReady}></GMap>
        
    }
}