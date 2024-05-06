import { View, Text } from 'react-native';
import {styles} from './styles';
import Animated, { useAnimatedStyle, SharedValue, interpolate, withTiming } from 'react-native-reanimated';

type CreditCardProps = {
    cardSide: SharedValue<number>,
    data:{
        nome: string,
        numero: string,
        validade: string,
        cvv: string,
    },
}

export enum CARD_SIDE{
    front = 0,
    back  = 1,
}

export function CreditCard({ cardSide, data }: CreditCardProps){

    {/*Animação para a frente do cartão*/}
    const frontAnimated = useAnimatedStyle(() => {

        const rotateValue = interpolate(cardSide.value, [CARD_SIDE.front, CARD_SIDE.back], [0, 180]);

        return{
            transform: [
                {rotateY: withTiming(`${rotateValue}deg`, {duration: 1000})},

            ],
        };
    });


    {/*Animação para a parte de trás do cartão*/}
    const backAnimated = useAnimatedStyle(() => {

        const rotateValue = interpolate(cardSide.value, [CARD_SIDE.front, CARD_SIDE.back], [180, 360]);

        return{
            transform: [
                {rotateY: withTiming(`${rotateValue}deg`, {duration: 1000})},

            ],
        };
    });

    return(
        <View>

            {/* Frente do cartão */}
            <Animated.View style={[styles.card, styles.front, frontAnimated]}>
                
                {/* Cabeçalho */}
                <View style={styles.header}>
                    <View style={[styles.circle, styles.logo]}/>
                    <Text style={styles.name}>Meu Bank!</Text>
                </View>

                {/* Rodapé */}
                <View style={styles.footer}>
                    <Text style={styles.name}>{data.nome}</Text>

                    <View style={styles.flag}>
                        <View style={[styles.circle, styles.red]}/>
                        <View style={[styles.circle, styles.orange]}/>
                    </View>
                </View>

            </Animated.View>

            {/* Trás do cartão */}
            <Animated.View style={[styles.card, styles.back, backAnimated]}>

                <View>
                    <Text style={styles.label}>Número do cartão</Text>
                    <Text style={styles.value}>{data.numero}</Text>
                </View>

                {/* Rodapé */}
                <View style={styles.footer}>
                    <View>
                        <Text style={styles.label}>Validade</Text>  
                        <Text style={styles.value}>{data.validade}</Text>
                    </View>

                    <View>
                        <Text style={styles.label}>CVV</Text>  
                        <Text style={styles.value}>{data.cvv}</Text>
                    </View>
                </View>

            </Animated.View>

        </View>
    );
}
