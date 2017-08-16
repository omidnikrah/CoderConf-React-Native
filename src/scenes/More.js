import React, { Component } from 'react';

import { Router, Scene } from 'react-native-router-flux';

import {
	View,
	StatusBar,
	ScrollView,
	ActivityIndicator,
	Text,
	Button,
	RefreshControl,
	StyleSheet
   } from 'react-native';

import MoreIndex from './MoreIndex';
import About from './About';
import Banner from './Banner';
import Newsletter from './Newsletter';
import Sponsors from './Sponsors';


class More extends Component {
	render() {
		return (
			<Router titleStyle={{ fontFamily: 'IRANSansWeb', color: '#616161' }}>
				<Scene key="root" headerTintColor='#616161'> 
					<Scene key="moreIndex" component={MoreIndex} title="بیشتر" initial />
					<Scene key="about" component={About} title="درباره همایش"/>
					<Scene key="banner" component={Banner} title="ساخت بنر"/>
					<Scene key="newsletter" component={Newsletter} title="خبرنامه"/>
					<Scene key="sponsors" component={Sponsors} title="حامیان"/>
				</Scene>
			</Router>
		);
	}
}

  
module.exports = More;