import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import{ Image } from 'react-native';

import Main from './pages/Main';
import Albuns from './pages/Albuns';
import Documents from './pages/Documents';
import Documents19 from './pages/Documents19';

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions: {
                title:'Início'
            }
        },
        Albuns:{
            screen: Albuns,
            navigationOptions:{
                title:'Meus Álbuns'
            }
        
        },
        Documents:{
            screen: Documents,
            navigationOptions:{
                title:'Álbum'
            }
        },
        Documents19:{
            screen: Documents19,
            navigationOptions:{
                title:'Álbum'
            }
        }
    },{
        defaultNavigationOptions:{
            headerTintColor:'#fff',
            headerStyle:{
                backgroundColor: '#0066ff'
            },
            headerRight: () => (
                <Image style={{ width: 50, height: 50 }} source={require('../img/Logo.png')}/>
            ),
        }
    })
);

export default Routes;