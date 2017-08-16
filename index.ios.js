/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';

import Speakers from './src/scenes/Speakers';
import More from './src/scenes/More';
import Map from './src/scenes/Map';
import Participants from './src/scenes/Participants';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default class coderConf extends Component {
	constructor(props) {
		super();
		this.state = {
			selectedTab: 'welcome'
		};
	}
  render() {
    return (
		<TabBarIOS selectedTab={this.state.selectedTab} style={styles.tabBar}>
			<Ionicons.TabBarItemIOS
				selected={this.state.selectedTab === 'more'}
				iconName="ios-more-outline"
				iconSize={40}
				title={'بیشتر'}
				onPress={() => {
						this.setState({
							selectedTab: 'more',
						});
			}}>
			<More/>
			</Ionicons.TabBarItemIOS>
			<Icon.TabBarItemIOS
				selected={this.state.selectedTab === 'map'}
				title="نقشه"
				iconName="map"
				iconSize={25}
				onPress={() => {
					this.setState({
						selectedTab: 'map',
					});
			}}>
			<Map />
			</Icon.TabBarItemIOS>
			<Icon.TabBarItemIOS
				selected={this.state.selectedTab === 'participants'}
				title="شرکت‌کنندگان"
				iconName="people"
				iconSize={25}
				onPress={() => {
					this.setState({
						selectedTab: 'participants',
					});
			}}>
			<Participants />
			</Icon.TabBarItemIOS>
			<Icon.TabBarItemIOS
				selected={this.state.selectedTab === 'welcome'}
				title={'ارائه دهندگان'}
				iconName="microphone"
				iconSize={25}
				tintColor="#fff"
				unselectedTintColor="#111"
				onPress={() => {
					this.setState({
						selectedTab: 'welcome',
					});
			}}>
				<Speakers />
			</Icon.TabBarItemIOS>

		</TabBarIOS>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
	marginBottom: 5,
  },
  tabBar: {
	  backgroundColor: '#0097ff',
	  height: 100,
  },
});

AppRegistry.registerComponent('coderConf', () => coderConf);
