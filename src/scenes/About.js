import React, { Component } from 'react';

import {
	View,
	StatusBar,
	ScrollView,
	ActivityIndicator,
	Text,
	Image,
	RefreshControl,
	StyleSheet
   } from 'react-native';


class About extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<Image style={styles.aboutImage} source={require('./photos/coderconf.png')} />
					<Text style={styles.aboutText}>
					گردهمایی بزرگ برنامه‌نویسان ایران با نام Coder Conf هر سال در آخرین پنجشنبه مرداد، در تهران برگزار می‌گردد.
	
					{"\n"}
					{"\n"}
	کودرکانف در هر برگزاری بورد‌های مختلفی برگزار می‌کند، رویداد پیش رو نیز شامل سه بورد Android ،PHP و DevOps خواهد بود.
	
	{"\n"}
	{"\n"}
	در سال ۱۳۹۴ به کمک جمعی از برنامه‌نویسان با تجربه از شهرهای مختلف ایران، تیم برگزار کننده همایش کودرکانف را تشکیل دادیم تا گردهمایی بزرگ برنامه‌نویسان ایران با نام Coder Conf را برگزار کنیم. هم‌اکنون نیز با توجه به علاقه و درخواست شرکت‌کننده‌های سال‌های گذشته در حال برگزاری همایش کودرکانف ۳ هستیم و از شما دعوت می‌کنیم در این رویداد شرکت نمایید.
					</Text>
				</ScrollView>
			</View>
		);
	}
}

module.exports = About;

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#F5FCFF',
	},
	aboutText: {
		fontFamily: 'IRANSansWeb',
		writingDirection: 'rtl',
		// textAlign:'justify',
		padding: 15,
		paddingBottom: 65,
		color: '#616161',
		fontSize: 15,
		lineHeight: 30
	},
	aboutImage: {
		width: '100%',
		overflow: 'hidden',
		flex: 1,
		aspectRatio: 2.7, 
		resizeMode: 'contain',
	}
});
