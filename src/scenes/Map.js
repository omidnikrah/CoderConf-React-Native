import React, { Component } from 'react';

import {
	View,
	StatusBar,
	ScrollView,
	ActivityIndicator,
	Text,
	RefreshControl,
	StyleSheet,
	TextInput
   } from 'react-native';

   import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
   

class Map extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.mapViewInput}>
					<TextInput placeholder="کجایی؟" style={styles.mapInput} />
				</View>
				<MapView
					style={styles.map}
					provider={PROVIDER_GOOGLE}
					initialRegion={{
						latitude: 36.3213431,
						longitude: 50.0341713,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
				/>
				
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#F5FCFF',
	},
	map: {
		height: '100%',
		width: '100%'
	},
	mapViewInput: {
		position: 'absolute',
		right: 15,
		left: 15,
		top: 40,
		zIndex: 2
	},
	mapInput: {
		padding: 15,
		backgroundColor: '#fff',
		borderRadius: 8,
		textAlign: 'right',
		shadowOffset: { width: 0, height: 0 },
		shadowColor: 'black',
		shadowRadius: 8,
		shadowOpacity: 0.15,
		fontFamily: 'IRANSansWeb',
		fontSize: 13,
	},
	description: {
		fontFamily: 'IRANSansWeb',
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	}
  });
  

module.exports = Map;