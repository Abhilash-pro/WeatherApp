import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	ImageBackground,
	KeyboardAvoidingView
} from 'react-native';

import getImageForWeather from './utils/getImageForWeather';
import SearchInput from './components/SearchInput';

export default class App extends React.Component {

  render(){
	  const location = 'San Franscisco';
    return (
		
		<KeyboardAvoidingView
		style ={styles.container}
		behavior = "padding"
		>
		<ImageBackground 
		source ={getImageForWeather('Clear')}
		style ={styles.imageContainer}
		imageStyle = {styles.image}
		>
		<View style ={styles.detailsContainer}>
        <Text style = {styles.textStyle, styles.largeText}>
			{location}
         </Text>
		 <Text style = {styles.textStyle, styles.smallText}>
			Light Cloud
         </Text>
		 <Text style = {styles.textStyle, styles.largeText}>
		 24°
         </Text>
		 <SearchInput placeholder = "Search any city"/>
		 </View>
		 </ImageBackground>
		 </KeyboardAvoidingView>
     
    );
  };

};


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#34495E',
  },
  imageContainer:{
	  flex: 1,
  },
  image:{
	  flex: 1,
	  width: null,
	  height: null,
	  resizeMode: 'cover',
  },
  detailsContainer:{
	  flex: 1,
	  justifyContent: 'center',
	  backgroundColor: 'rgba(0,0,0,0)',
	  paddingHorizontal: 20,
  },
 textStyle:{
   textAlign:'center',
   fontFamily: 'Roboto',
   color: '#ffff',
 },
 largeText:{
	 fontSize: 44,
 },
 smallText:{
	 fontSize : 18,
 },
 textInput:{
	 backgroundColor: "#666",
	 color:'white',
	 height: 40,
	 width: 300,
	 marginTop: 20,
	 marginHorizontal: 20,
	 paddingHorizontal: 10,
	 alignSelf: 'center',
 },
});