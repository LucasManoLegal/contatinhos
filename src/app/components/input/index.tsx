import { View, TextInput, ViewProps, TextInputProps } from 'react-native'

import { styles } from "./styles"

import { theme } from '@/theme'


function Input({ children, style }: ViewProps){
    return <View style={[styles.container, style]}>{children}
    </View>
}

function Field( {...rest}: TextInputProps ){
    return <TextInput style={styles.input} 
        placeholderTextColor={theme.colors.gray_300} {...
        rest}/>
        /*com '...rest' estamos passando todas as
        propriedades de TextInputProps para o
        componente TextInput*/
}

Input.Field = Field /*adicionamos uma propriedade 'Field' ao Input, à qual atribuímos o componentes 'Field()' */

export { Input }