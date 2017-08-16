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
   

class Speakers extends Component {
	render() {
		return (
		<View style={styles.container}>
			<ScrollView style={styles.ScrollView} paddingEnabled>
				<View id="1" style={styles.item}>
					<View style={styles.itemTexts}>
						<Text style={styles.itemText}>
						امید نیک راه
						</Text>
						<Text style={styles.itemTextTitle}>
						React Native
						</Text>
					</View>
					<Image style={styles.itemPhoto} source={require('./photos/omid.png')}/>
				</View>
				<View id="1" style={styles.item}>
					<View style={styles.itemTexts}>
						<Text style={styles.itemText}>
						مهدی حمیدی
						</Text>
						<Text style={styles.itemTextTitle}>
						Continuous‬‬ ‫‪Integration‬‬ ‫‪and‬‬ ‫‪Delivery‬‬ ‫‪using‬‬ ‫‪Jenkins‬‬ ‫‪and‬‬ ‫‪Docker‬‬
						</Text>
					</View>
					<Image style={styles.itemPhoto} source={require('./photos/hamidi.png')}/>
				</View>
				<View id="1" style={styles.item}>
					<View style={styles.itemTexts}>
						<Text style={styles.itemText}>
						مجید رمضان‌پور
						</Text>
						<Text style={styles.itemTextTitle}>
						Reactive programming ‌in Android‬‬
						</Text>
					</View>
					<Image style={styles.itemPhoto} source={require('./photos/ramezanpour.png')}/>
				</View>
				<View id="1" style={styles.item}>
					<View style={styles.itemTexts}>
						<Text style={styles.itemText}>
						رامین فرمانی
						</Text>
						<Text style={styles.itemTextTitle}>
						چگونه یک برنامه امن با php بنویسیم‬‬
						</Text>
					</View>
					<Image style={styles.itemPhoto} source={require('./photos/farmani.png')}/>
				</View>
				<View id="1" style={styles.item}>
					<View style={styles.itemTexts}>
						<Text style={styles.itemText}>
						علی محمدمیرزایی
						</Text>
						<Text style={styles.itemTextTitle}>
						سلام بر REST، درود بر GraphQL!‬‬
						</Text>
					</View>
					<Image style={styles.itemPhoto} source={require('./photos/mirzaei.png')}/>
				</View>
				<View id="1" style={styles.item}>
					<View style={styles.itemTexts}>
						<Text style={styles.itemText}>
						میلاد رحیمی
						</Text>
						<Text style={styles.itemTextTitle}>
مقدمه ای بر Unit Testing ،Integration Testing ،TDD و BDD در PHP و لاراول‬‬
						</Text>
					</View>
					<Image style={styles.itemPhoto} source={require('./photos/rahimi.png')}/>
				</View>
				<View id="1" style={styles.item}>
					<View style={styles.itemTexts}>
						<Text style={styles.itemText}>
						بردیا حیدری نژاد
						</Text>
						<Text style={styles.itemTextTitle}>
						بررسی معایب معماری میکروسرویس‬‬
						</Text>
					</View>
					<Image style={styles.itemPhoto} source={require('./photos/heidarinezhad.png')}/>
				</View>
				<View id="1" style={styles.item}>
					<View style={styles.itemTexts}>
						<Text style={styles.itemText}>
						مسعود صدری
						</Text>
						<Text style={styles.itemTextTitle}>
						بررسی Progressive Web App ها‬‬
						</Text>
					</View>
					<Image style={styles.itemPhoto} source={require('./photos/sadri.png')}/>
				</View>
				<View id="1" style={styles.item}>
					<View style={styles.itemTexts}>
						<Text style={styles.itemText}>
						مسعود کاویانی
						</Text>
						<Text style={styles.itemTextTitle}>
						یادگیری ماشین در PHP‬‬
						</Text>
					</View>
					<Image style={styles.itemPhoto} source={require('./photos/kaviani.png')}/>
				</View>
				<View id="1" style={styles.item}>
					<View style={styles.itemTexts}>
						<Text style={styles.itemText}>
						رامین فرمانی
						</Text>
						<Text style={styles.itemTextTitle}>
						چگونه یک rest api خوب بنویسیم!‬‬
						</Text>
					</View>
					<Image style={styles.itemPhoto} source={require('./photos/farmani.png')}/>
				</View>
				<View id="1" style={styles.item}>
					<View style={styles.itemTexts}>
						<Text style={styles.itemText}>
						مصطفی میرموسوی
						</Text>
						<Text style={styles.itemTextTitle}>
						REST API‬‬
						</Text>
					</View>
					<Image style={styles.itemPhoto} source={require('./photos/mirmosavi.png')}/>
				</View>
				<View id="1" style={styles.item}>
					<View style={styles.itemTexts}>
						<Text style={styles.itemText}>
						هامون محمدیان‌پور
						</Text>
						<Text style={styles.itemTextTitle}>
						ترکیب داده های ساختار یافته و نیمه ساختار یافته در MariaDB 10.2‬‬
						</Text>
					</View>
					<Image style={styles.itemPhoto} source={require('./photos/mohamadianpour.png')}/>
				</View>
				<View id="1" style={styles.item}>
					<View style={styles.itemTexts}>
						<Text style={styles.itemText}>
						علیرضا جهانگیری
						</Text>
						<Text style={styles.itemTextTitle}>
						Control the Physical World with MQTT, Android and NodeRED‬‬
						</Text>
					</View>
					<Image style={styles.itemPhoto} source={require('./photos/jahangiri.png')}/>
				</View>
				<View id="1" style={styles.item}>
					<View style={styles.itemTexts}>
						<Text style={styles.itemText}>
						علیرضا رحمانی خلیلی
						</Text>
						<Text style={styles.itemTextTitle}>
						Anti-Patterns in OOP‬‬
						</Text>
					</View>
					<Image style={styles.itemPhoto} source={require('./photos/khalili.png')}/>
				</View>
				<View id="1" style={styles.item}>
					<View style={styles.itemTexts}>
						<Text style={styles.itemText}>
						محمود مسیح تهرانی
						</Text>
						<Text style={styles.itemTextTitle}>
						Agile team Workflow‬‬
						</Text>
					</View>
					<Image style={styles.itemPhoto} source={require('./photos/tehrani.png')}/>
				</View>


			</ScrollView>
		  </View>
		);
	}
}



const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#F6FCFF',
	},
	description: {
		fontFamily: 'IRANSansWeb-Bold',
		fontSize: 20,
		textAlign: 'center',
		paddingTop: 50,
		color: '#444',
		backgroundColor: '#e5e5e5',
		width: '100%',
		height: '15%'
	},
	item: {
		borderRadius:8,
		backgroundColor: '#FBFBFB',
		marginBottom: 15,
		padding: 15,
		width: '100%',
		height: 110,
		shadowOffset: { width: 0, height: 0 },
		shadowColor: 'black',
		shadowRadius: 8,
		shadowOpacity: 0.2,
		flexDirection: 'row', justifyContent: 'flex-end',
		alignItems: 'center',
	},
	itemText: {
		fontFamily: 'IRANSansWeb-Medium',
		color: '#818181',
		marginRight: 15,
		textAlign: 'right',
		fontSize: 13
	},
	itemTextTitle: {
		fontFamily: 'IRANSansWeb-Bold',
		color: '#616161',
		marginRight: 15,
		textAlign: 'right',
		fontSize: 14		
	},
	itemPhoto: {
		width: 79,
		height: 79,
		borderRadius: 5,
	},
	itemTexts: {
		flexDirection: 'column', justifyContent: 'flex-end',flex:1
	},
	ScrollView: {
		width: '100%',
		paddingTop: 20,
		padding: 15,
	}
  });
  

module.exports = Speakers;