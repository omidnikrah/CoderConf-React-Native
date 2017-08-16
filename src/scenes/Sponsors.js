import React, { Component } from 'react';

import {
	View,
	StatusBar,
	ScrollView,
	ActivityIndicator,
	Text,
	Image,
	RefreshControl,
	StyleSheet,
	TouchableOpacity,
	TextInput
   } from 'react-native';


class Sponsors extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.item}>
					<Image style={styles.itemPhoto} source={require('./photos/sponsors/bamilo.png')}/>
				</View>
				<View style={styles.item}>
					<Image style={styles.itemPhoto} source={require('./photos/sponsors/evand.png')}/>
				</View>
				<View style={styles.item}>
					<Image style={styles.itemPhoto} source={require('./photos/sponsors/rima.png')}/>
				</View>
				<View style={styles.item}>
					<Image style={styles.itemPhoto} source={require('./photos/sponsors/tadbirgostaran.png')}/>
				</View>
			</View>
		);
	}
}

module.exports = Sponsors;

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  paddingTop: 15,
	  backgroundColor: '#F5FCFF',
	  flexDirection: 'row',
	  flexWrap: 'wrap',	
	},
	item: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderRadius:8,
		backgroundColor: '#FBFBFB',
		margin: 10,
		padding: 15,
		height: 110,
		width:'44%',
		shadowOffset: { width: 0, height: 0 },
		shadowColor: 'black',
		shadowRadius: 8,
		shadowOpacity: 0.15,
	},
	itemPhoto: {
		height: 40,
		width: '100%'
	},
});
