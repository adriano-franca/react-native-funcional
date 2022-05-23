import React from 'react'
import { Text, TextInput } from 'react-native'
import Estilo from '../estilo'

export default class Mega extends React.Component {

    
    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }


    alterarQtdeNumero = (qtde) =>{
        this.setState({qtdeNumeros: qtde})

    }

    render(){
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega Sena
                    {this.state.qtdeNumeros}
                </Text>
                <TextInput keyboardType={'numeric'}
                style={{borderBottomWidth: 1}}
                placeholder="Qtde de Numeros"
                value={this.state.qtdeNumeros}
                onChangeText={this.alterarQtdeNumero}
                />
            </>
        )
    }
}