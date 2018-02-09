import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import marker from '../img/map-marker-icon.png';

function createMapOptions() {
	return {
		zoomControl: false,
		scaleControl: false
	};
}

let markerStyle = {
	width: '55px',
	height: '55px',
	backgroundImage: `url(${marker})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'contain'
};

const GoogleMapMarker = () => <div style={markerStyle}> </div>;

class GoogleMap extends Component {
	static defaultProps = {
		center: {lat: 54.5983, lng: 36.2569},
		zoom: 16,
	};

	render() {
		return (
			<GoogleMapReact
                apiKey={'AIzaSyBOea0rNX7H0F7ECSC6aXAJMZfpKuHBhhM'}
				defaultCenter={this.props.center}
				defaultZoom={this.props.zoom}
				options={createMapOptions}
			>
				<GoogleMapMarker lat={54.5988} lng={36.2566} />
			</GoogleMapReact>
		);
	}
}

export default GoogleMap;