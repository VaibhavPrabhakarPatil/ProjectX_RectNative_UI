import { StyleSheet } from "react-native";

const CommonCss = StyleSheet.create({
    // container css 
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },

    // login and otp page image css
    image: {
        width: 250,
        height: 250,
        marginBottom: 20,
        marginTop:20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    // common Button and Text css 
    button: {
        width: '100%',
        height: 45,
        backgroundColor: '#FFCC29',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1
    },
    buttonText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },

    // textInput css
    input: {
        width: '100%',
        marginBottom: 20,
        backgroundColor: '#f9f9f9',
    },

  
})
export default CommonCss