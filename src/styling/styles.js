import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerSignup : {
        flex: 1,
        justifyContent: 'center',
    },
    //mostly signup css
    signupFirstInput:{
        fontFamily: 'Montserrat-Medium',
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
    signupMailImage:{
        margin: 5,
        height: 12,
        width: 20,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    signupSecondInput:{
        fontFamily: 'Montserrat-Medium',
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
    signupLockImage:{
        margin: 5,
        height: 18,
        width: 15,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    signupThirdInput:{
        fontFamily: 'Montserrat-Medium',
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
    logoSignupImage:{
        width: 120,
        height: 110,
        alignSelf: 'center',
        marginTop: 50,
        marginLeft: 130,
        marginRight: 130,
        marginBottom: 40,
    },
    signupButton:{
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
        elevation: 5,
    },
    signupButtonText:{
        fontFamily: 'Montserrat-Medium',
        color: 'white',
        fontSize: 12,
        textAlign:'center',
        letterSpacing: 1,
        opacity: 0.9
    },
    loginMessage:{
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        alignSelf: 'center',
        color: 'silver',
        opacity: .8
    },
    loginReminder:{
        color: '#DE4D4F'
    },
    //login css
    loginLogoImage:{
        width: 130,
        height: 130,
        alignSelf: 'center',
        marginTop: 60,
        marginLeft: 130,
        marginRight: 130,
        marginBottom: 40,
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
        paddingLeft: 10,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    //home css
    // header customization
    menuImage:{
        height: 12,
        width: 16,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 18
    }
    

})


