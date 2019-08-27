import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerLogin : {
        flex: 1,
        justifyContent: 'center',
    },
    loginFirstInput:{
        fontFamily: 'Montserrat',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#EFEFEF',
        marginBottom: 1,
        marginLeft: 40,
        marginRight: 40,
        padding: 5,
        paddingLeft: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    loginMailImage:{
        margin: 5,
        height: 12,
        width: 20,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    loginSecondInput:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#EFEFEF',
        marginBottom: 1,
        marginLeft: 40,
        marginRight: 40,
        padding: 5,
        paddingLeft: 10
    },
    loginLockImage:{
        margin: 5,
        height: 18,
        width: 15,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    loginThirdInput:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#EFEFEF',
        marginBottom: 1,
        marginLeft: 40,
        marginRight: 40,
        padding: 5,
        paddingLeft: 10,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },    
    logoLoginImage:{
        width: 110,
        height: 110,
        alignSelf: 'center',
        marginTop: 60,
        marginLeft: 130,
        marginRight: 130,
        marginBottom: 40
    },
    loginButton:{
        fontFamily: 'Montserrat',
        backgroundColor: '#DE4D4F',
        marginTop: 30,
        marginBottom: 10,
        marginLeft:70,
        marginRight: 70,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius:50,
        shadowColor: 'black',
        shadowOpacity: .6,
        elevation: 3,
    },
    loginButtonText:{
        color: 'white',
        textAlign:'center',
        letterSpacing: 1,
        opacity: 0.9
    },
    signupLoginMessage:{
        alignSelf: 'center',
        color: 'silver',
        letterSpacing: 1,
    },
    signupReminder:{
        color: '#DE4D4F'
    }
})

