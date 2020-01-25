import React, { ReactElement } from 'react';
import { MapModel } from '../model/MapModel';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import '../stylesheets/LeafletMapComponent.css';
import L from 'leaflet'


interface LeafletMapComponentProps {
    className?: string;
    style?: any;
    model: MapModel;
}

interface LeafletMapComponentState {

}

export class LeafletMapComponent extends React.Component<LeafletMapComponentProps, LeafletMapComponentState> {

    markerSymbol = new L.Icon({
        iconUrl: '../images/leaflet/marker-icon.png',
        iconRetinaUrl: '../images/leaflet/marker-icon.png',
        iconAnchor: [20, 40],
        popupAnchor: [-5, -35],
        iconSize: [30, 40],
        shadowUrl: '../images/leaflet/marker-shadow.png',
        shadowSize: [29, 40],
        shadowAnchor: [17, 40]
    })

    public render(): ReactElement {

        return <div className={this.props.className} style={{minHeight: "500px"}}>
            <Map center={this.props.model.location}
                zoom={this.props.model.zoom}
                style={{height: "500px"}}
                dragging={false}
                zoomControl={false}
                minZoom={this.props.model.zoom}
                maxZoom={this.props.model.zoom}
                scrollWheelZoom={false}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
                    
                <Marker position={this.props.model.location} icon={this.markerSymbol} ref={(e) => {e?.leafletElement.openPopup()}}>
                    <Popup>
                        <div dangerouslySetInnerHTML={{__html: this.props.model.content}}></div>
                        <a href={this.props.model.url}>Open In Google Maps</a>
                    </Popup>
                </Marker>
                    
            </Map>
        </div>
    }
}

