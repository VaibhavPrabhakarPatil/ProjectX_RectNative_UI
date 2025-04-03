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

    // services and UploadImage page common css

    servicesButton: {
        backgroundColor:'#FFCC29',
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10, 
        width:'50%'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    }

  
})
export default CommonCss