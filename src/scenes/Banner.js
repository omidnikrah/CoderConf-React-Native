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
	TouchableOpacity
   } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class Banner extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.bannerTextContainer}> 
					<Text style={styles.bannerText}>
					می‌توانید از طریق دکمه زیر عکس خود را انتخاب کرده و برای خودتان بنر «شرکت در همایش» ایجاد کنید تا حضور خودتان را در شبکه‌های اجتماعی اطلاع‌رسانی نمایید.
					</Text>
				</View>

				<View style={styles.bannerBtnContainer}>
					<TouchableOpacity style={styles.bannerBtn} activeOpacity={0.9}>
						<Icon name="camera" size={30} color="#fff" />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

module.exports = Banner;

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#F5FCFF',
	},
	bannerText: {
		fontFamily: 'IRANSansWeb',
		writingDirection: 'rtl',
		padding: 15,
		paddingBottom: 65,
		color: '#616161',
		fontSize: 15,
		lineHeight: 30
	},
	bannerTextContainer: {
		flex:1
	},
	bannerBtnContainer: {
		flex:2
	},	
	bannerBtn: {
		width: 80,
		height: 80,
		borderRadius: 100,
		backgroundColor: '#FF4E3A',
		shadowOffset: { width: 0, height: 0 },
		shadowColor: '#FF4E3A',
		shadowRadius: 15,
		shadowOpacity: 0.7,
		justifyContent: 'center',
		alignItems: 'center',
	}
});
