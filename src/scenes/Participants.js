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
	TextInput,
	ListView,
   } from 'react-native';

let participantsArray = [];
class Participants extends Component {
	constructor(props) {
		super(props);
		let participantsDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			participants: participantsDS.cloneWithRows(participantsArray),
			isLoading: true,
		};
	}

	componentDidMount() {
		this.getTheData(function(json){
			console.log(json);
			participantsArray = json;
			this.setState({
				participants: this.state.participants.cloneWithRows(participantsArray),
				isLoading: false
			});
		}.bind(this));
	}
	getTheData(callback) {
		let url = "https://api.evand.com/events/coderconf3/attendees/public?per_page=500";
		fetch(url)
		.then(response => response.json())
		.then(json => callback(json.data))
		.catch(error => console.log(error));
	} 

	renderRow(rowData, sectionID, rowID) {
		return (		   
			<View style={styles.item}>
				<Image style={styles.itemPhoto} source={{uri:`https://www.gravatar.com/avatar/${rowData.email_md5}`}}/>

				<Text style={styles.itemText}>
					{ rowData.first_name } { rowData.last_name }
				</Text>

			</View>
	 );
   }

	render() {
		if(this.state.isLoading){
			return (
				<View style={[styles.containers, styles.loadingContainer]}>
					<ActivityIndicator />
					<Text style={styles.loadingText}>در حال بارگذاری</Text>
				</View>
			);
		}
		return (
			<View style={styles.containers}>
				<TextInput placeholder="دنبال کی هستی؟" style={styles.inputSearch} />
				<ListView
					contentContainerStyle={styles.listViewStyle}
					dataSource={this.state.participants}
					renderRow={this.renderRow.bind(this)} enableEmptySections={true}
				/>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	containers: {
		backgroundColor: '#F5FCFF',
		paddingTop: 25,
		flex: 1
	},
	loadingContainer: {
		alignItems: 'center',
		justifyContent: 'center',		
	},
	inputSearch: {
		padding: 15,
		backgroundColor: '#fff',
		margin: 15,
		marginBottom: 15,
		borderRadius: 8,
		textAlign: 'right',
		shadowOffset: { width: 0, height: 0 },
		shadowColor: 'black',
		shadowRadius: 8,
		shadowOpacity: 0.15,
		fontFamily: 'IRANSansWeb',		
		fontSize: 13,
		
	},
	listViewStyle: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},	
	container: {
		flex: 1,
		height: '100%',
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',		
        justifyContent: 'space-around',
		backgroundColor: '#F5FCFF',
	},
	ScrollView: {
		backgroundColor: '#F5FCFF',	
		padding: 5,
		flex:1,
	},
	item: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderRadius:8,
		backgroundColor: '#FBFBFB',
		margin: 10,
		padding: 15,
		height: 160,
		width:'44%',
		shadowOffset: { width: 0, height: 0 },
		shadowColor: 'black',
		shadowRadius: 8,
		shadowOpacity: 0.15,
	},
	itemText: {
		fontFamily: 'IRANSansWeb-Medium',
		color: '#616161',
		textAlign: 'center',
		fontSize: 14,
		marginTop: 20
	},
	itemPhoto: {
		width: 90,
		height: 90,
		borderRadius: 45,
	},
	loadingText: {
		fontFamily: 'IRANSansWeb-Medium',
		textAlign: 'center',
		paddingTop: 20,
	}
  });
  

module.exports = Participants;