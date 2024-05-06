
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    card:{
        width: '100%',
        height: 200,
        borderRadius: 12,
        padding: 24,
        justifyContent: 'space-between',
    },

    front:{
        backgroundColor: '#6F2AB9',
        backfaceVisibility: 'hidden',
        position: 'absolute',
    },

    back:{
        backgroundColor: '#6F2AB9',
        backfaceVisibility: 'hidden',
    },

    circle:{
        width: 24,
        height: 24,
        borderRadius: 12,
    },

    logo:{
        backgroundColor: '#FFFFFF',
    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
    },

    name:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

    footer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    flag:{
        flexDirection: 'row',
        gap: -10,
    },

    red:{
        backgroundColor: 'red',
    },

    orange:{
        backgroundColor: 'orange',
    },

    label:{
        fontSize: 14,
        color: '#FFFFFF'
    },

    value:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

});
