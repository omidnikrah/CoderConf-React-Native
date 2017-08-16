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


class Newsletter extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.newsletterTextContainer}> 
					<Text style={styles.newsletterText}>
					با عضویت در خبرنامه ی کودرکانف از آخرین اخبار و همایش ها بااطلاع شوید
					</Text>
				</View>

				<View style={styles.formContainer}>
					<TextInput placeholder="ایمیلت چیه؟" style={styles.formTextInput}/>
					<TouchableOpacity style={styles.formSubmitBtn} activeOpacity={0.9}>
						<Text style={styles.formSubmitBtnText}>عضویت در خبرنامه</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

module.exports = Newsletter;

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#F5FCFF',
	},
	newsletterText: {
		fontFamily: 'IRANSansWeb',
		writingDirection: 'rtl',
		padding: 15,
		paddingBottom: 65,
		color: '#616161',
		fontSize: 15,
		lineHeight: 30
	},
	newsletterTextContainer: {
		flex:1
	},
	formContainer: {
		flex:5,
		width: '100%',
		padding: 15
	},	
	formTextInput: {
		padding: 15,
		textAlign: 'right',
		fontFamily: 'IRANSansWeb',
		fontSize: 13,		
		backgroundColor: '#fff',
		borderRadius: 5,
		shadowOffset: { width: 0, height: 0 },
		shadowColor: 'black',
		shadowRadius: 8,
		shadowOpacity: 0.15,
	},
	formSubmitBtn: {
		padding: 15,		
		marginTop: 15,
		backgroundColor: '#6281DB',
		borderRadius: 5,
		shadowOffset: { width: 0, height: 0 },
		shadowColor: 'black',
		shadowRadius: 8,
		shadowOpacity: 0.10,
	},
	formSubmitBtnText: {
		textAlign: 'center',
		fontFamily: 'IRANSansWeb-Bold',
		fontSize: 13,
		color: '#fff'
	}
});
