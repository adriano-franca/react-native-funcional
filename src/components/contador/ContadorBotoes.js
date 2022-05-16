import React from 'react'
import { Button, SafeAreaView, StyleSheet } from 'react-native'

export default props => {
    return (
        <SafeAreaView style={style.Botoes}>
            <Button title='-' onPress={props.dec}/>
            <Button title='+' onPress={props.inc}/> 
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Botoes:{
        flexDirection: "row"
    }
})