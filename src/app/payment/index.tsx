import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import {styles} from './styles';

import { CreditCard, CARD_SIDE } from '@/components/credit-card';
import { Input } from '@/components/input';


export function Payment(){
    
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [validade, setValidade] = useState('');
    const [cvv, setCVV] = useState('');

    const cardSide = useSharedValue(CARD_SIDE.front);

    //Função para mostrar a frente do cartão
    function showFrontCard(){
        cardSide.value = CARD_SIDE.front;
    }
    
    //Função para mostrar a parte de trás do cartão
    function showBackCard(){
        cardSide.value = CARD_SIDE.back;
    }

    //Controla a rotação do cartão
    function handleFlipCard(){

        //console.log(cardSide.value);

        if(cardSide.value == CARD_SIDE.front){
            showBackCard();
        }
        else{
            showFrontCard();
        }
    }

    return(
        <View style={styles.container}>
            <CreditCard cardSide={cardSide} data={{
                nome: nome,
                numero: numero.replace(/(\d{4})(?=\d)/g, '$1 '),
                validade: validade,
                cvv: cvv,
            }}/>

            <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
                <Text>Inverter</Text>
            </TouchableOpacity>

            <View style={styles.form}>
                <Input placeholder='Nome do titular' onChangeText={setNome} onFocus={showFrontCard}/>
                <Input placeholder='Número do cartão' keyboardType='numeric' maxLength={16} onChangeText={setNumero} onFocus={showBackCard}/>

                <View style={styles.inline}>
                    <Input placeholder='01/02' style={styles.smallInput} maxLength={5} onChangeText={setValidade} onFocus={showBackCard}/>
                    <Input placeholder='123' style={styles.smallInput} keyboardType='numeric' maxLength={3} onChangeText={setCVV} onFocus={showBackCard}/>
                </View>
                
            </View>
        </View>
    );
}