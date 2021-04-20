import React from 'react';
import { SafeAreaView,View, Text, Image } from 'react-native';

import image from '../../assets/image_linkedin.jpg';

import {styles} from './styles'

const Home = () => {
  return (
        <SafeAreaView style={styles.container}>
            <Image source={image}  style={styles.image}/>
            <Text style={styles.name}>Guilherme Aparecido Ferreira Piovezan</Text>
            <Text style={styles.function}>Software Developers</Text>
            <View>
                <Text>GitHub</Text>   
                <Text>Instagram</Text> 
                <Text>Linkdin</Text> 
            </View>
        </SafeAreaView>
    );
}

export default Home;