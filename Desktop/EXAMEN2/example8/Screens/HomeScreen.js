import React, {useContext} from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native'
import { Header, Card, Image, Button} from 'react-native-elements';
import {PeliculasContext} from '../Context/PeliculasContext';

const HomeScreen = ({navigation}) => {
    const {cartelera,agregar} = useContext(PeliculasContext);
    return (
        <ScrollView>
            <Header
                centerComponent={{ text: 'CINEPOLIS', style: { color: '#fff'}}}
                containerStyle={{borderBottomColor:'black', borderBottomWidth: 3 , backgroundColor: '#2d85f8', height: '5%', marginBottom: 15}}
            />

            <View style={styles.container2}>
            {cartelera.map((e,i)=>{
                return(
                    <Card  
                    containerStyle={{
                        width: '85%',
                        marginBottom: 10
                    }} 
                    key={i}>
                        <Card.Title>{e.nombre}</Card.Title> 
                        <Card.Divider/>
                       
                        <View style={styles.container}>
                            <View style={styles.container50}>
                                <Image
                                style={styles.imagen}
                                source={{
                                   uri: `${e.url}`, 
                                }}
                                
                                />
                            </View>
                            <View style={styles.container50}>
                                <Text>{e.clasificacion}</Text>
                                <Text>{e.idioma}</Text>
                                {e.horarios.map((horario,index)=>{
                                    return( 
                                        <View style={styles.container2}>
                                            <Button
                                            buttonStyle={{backgroundColor:'gray'}}
                                                onPress={()=>(
                                                    agregar(e,horario),
                                                    navigation.navigate('PeliculasScreen')
                                                    )}
                                                key={index}
                                                title={horario}
                                                style={styles.buttonStyle}
                                            />
                                        </View>
                                        
                                    )
                                })} 

                            </View>
                        </View>
                    </Card>
                );
            })
            }
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection:'row',    
    },
    container50:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    imagen: {
        minHeight:220,
        minWidth: 160,
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom:10,
    },
      buttonStyle: {
        color: 'red',
        marginBottom: 12,
    }
});