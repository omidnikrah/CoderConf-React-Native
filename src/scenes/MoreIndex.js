import React, { Component } from 'react';

import {
	View,
	StatusBar,
	ScrollView,
	ActivityIndicator,
	Text,
	Button,
	RefreshControl,
	StyleSheet,
	TouchableOpacity
   } from 'react-native';

   import { Actions } from 'react-native-router-flux';
   
class MoreIndex extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.moreView}>
					<TouchableOpacity style={[styles.moreOptions, styles.about]} activeOpacity={0.9} onPress={Actions.about}>
						<Text style={styles.moreOptionsText}>درباره همایش</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.moreOptions, styles.banner]} activeOpacity={0.9} onPress={Actions.banner}>
						<Text style={styles.moreOptionsText}>ساخت بنر «شرکت در همایش»</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.moreOptions, styles.newsletter]} activeOpacity={0.9} onPress={Actions.newsletter}>
						<Text style={styles.moreOptionsText}>عضویت در خبرنامه</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.moreOptions, styles.sponsers]} activeOpacity={0.9} onPress={Actions.sponsors}>
						<Text style={styles.moreOptionsText}>حامیان همایش</Text>
					</TouchableOpacity>
				</View>
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
	description: {
	  fontSize: 20,
	  textAlign: 'center',
	  margin: 10,
	  fontFamily: 'IRANSansWeb',
	},
	header: {
		padding: 40
	},
	headerText: {
		color: '#616161',
		fontSize: 15,
		fontFamily: 'IRANSansWeb-Bold',		
	},
	moreView: {
		flex: 1,
		width: '100%',
	},
	moreOptions: {
		width: '100%',
		padding: 30,
	},
	moreOptionsText: {
		color: '#fff',
		textAlign: 'right',
		fontSize: 15,
		fontFamily: 'IRANSansWeb-Bold',				
	},
	about: {
		backgroundColor: '#75D1FF'
	},
	banner: {
		backgroundColor: '#57B3E0'		
	},
	newsletter: {
		backgroundColor: '#48A0CD'		
	},
	sponsers: {
		backgroundColor: '#368CB8'		
	}
});

module.exports = MoreIndex;
