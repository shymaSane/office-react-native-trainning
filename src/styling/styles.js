import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  containerSignup: {
    flex: 1,
    justifyContent: 'center',
  },
  //mostly signup css
  signupFirstInput: {
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
  signupMailImage: {
    margin: 5,
    height: 12,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  signupSecondInput: {
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
  },
  signupLockImage: {
    margin: 5,
    height: 18,
    width: 15,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  signupThirdInput: {
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
  logoSignupImage: {
    width: 120,
    height: 110,
    alignSelf: 'center',
    marginTop: 50,
    marginLeft: 130,
    marginRight: 130,
    marginBottom: 40,
  },
  signupButton: {
    backgroundColor: '#DE4D4F',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 70,
    marginRight: 70,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 50,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    elevation: 5,
  },
  signupButtonText: {
    fontFamily: 'Montserrat-Medium',
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 1,
    opacity: 0.9,
  },
  loginMessage: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    alignSelf: 'center',
    color: 'silver',
    opacity: 0.8,
  },
  loginReminder: {
    color: '#DE4D4F',
  },
  //login css
  loginLogoImage: {
    width: 130,
    height: 130,
    alignSelf: 'center',
    marginTop: 60,
    marginLeft: 130,
    marginRight: 130,
    marginBottom: 40,
  },
  loginSecondInput: {
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
  //home css
  // header customization
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  menuImage: {
    height: 12,
    width: 16,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 18,
  },
  profileImageHome: {
    width: 34,
    height: 34,
    borderRadius: 50,
    //TODO remove when you have dynamic profile pic
    backgroundColor: '#DE4D4F',
    marginTop: 10,
    marginBottom: 9,
    marginLeft: 27,
  },
  searchInput: {
    fontFamily: 'Montserrat-Medium',
    flexDirection: 'row',
    width: '50%',
    height: 34,
    backgroundColor: '#EFEFEF',
    marginLeft: 11,
    marginTop: 10,
    marginBottom: 9,
    borderRadius: 5,
  },
  searchImage: {
    width: 13,
    height: 13,
    marginTop: 11,
    marginBottom: 10,
    marginLeft: 9,
    marginRight: 9,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  filterImage: {
    height: 16,
    width: 14,
    marginTop: 20,
    marginBottom: 19,
    marginRight: 28,
    marginLeft: 16,
  },
  textSearchInput: {
    paddingVertical: 0,
    flex: 1,
  },
  //categories
  categoriesContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 21,
    marginBottom: 30,
  },
  categoryContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageCategoryStyle: {
    resizeMode: 'contain',
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  categoryImageShadow: {
    height: 50,
    width: 50,
    borderRadius: 50,
    elevation: 15,
    opacity: 0.8,
  },
  categoriesText: {
    fontFamily: 'Montserrat-ExtraLight',
    color: '#aeaeaeff',
    fontSize: 12,
    marginTop: 14,
  },
  // Image gallery
  imageGalleryConatiner: {
    flex: 1,
    paddingTop: 7,
    paddingLeft: 7,
  },
  gallerysImage: {
    height: 200,
    width: Dimensions.get('window').width / 2 - 14,
    marginBottom: 7,
    marginRight: 7,
    borderRadius: 5,
  },
  // Home Menu Styling
  menuProfile: {
    width: '100%',
    flex: 1 / 3,
  },
  profileBackgroundImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#DE4D4F',
  },
  menuProfileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 21,
    marginTop: 32,
    marginBottom: 32,
  },
  profileImageMenu: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  menuProfileText1: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: 'white',
  },
  menuProfileText2: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#DCDCDC',
    letterSpacing: 1,
  },
  menuProfileTextContainer: {
    marginBottom: 4,
    marginTop: 14,
  },
  //Filter Styling:
  filterContainer: {
    flex: 1,
    maxWidth: '100%',
    marginLeft: 18,
    marginRight: 23,
  },
  filterHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 53,
  },
  filterHeaderImage: {
    width: 16,
    height: 10,
  },
  filterHeaderImageContainer: {
    marginRight: 11,
  },
  filterHeaderTitle: {
    fontFamily: 'Montserrat-Medium',
    color: '#B1B1B1',
    fontSize: 14,

  },
  cateFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 19,
    marginBottom: 22,
  },
  cateImageFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cateFilterIcon: {
    height: 36,
    width: 36,
  },
  goBackIcon: {
    width: 9,
    height: 16,
  },
  AllCategoriesTextContainer: {
    marginLeft: 18,
  },
  AllCategoriesText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  categoriesFilterText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#676767',
  },
  hrLine: {
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
  },
  filterLightTextContainer: {
    marginTop: 20,
  },
  priceRangeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  priceFormText: {
    fontFamily: 'Montserrat-Medium',
    color: '#676767',
    fontSize: 14,
  },
  priceFormInputText: {
    flex: 1,
    fontFamily: 'Montserrat-Medium',
    color: '#676767',
    fontSize: 14,
  },
  filterButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  FilterResetButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 130,
    elevation: 6,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DE4D4F',
    borderRadius: 25,
  },
  filterResetButtonText: {
    fontFamily: 'Montserrat-Medium',
    color: '#DE4D4F',
  },
  FilterApplyButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 130,
    marginLeft: 7,
    elevation: 6,
    backgroundColor: '#DE4D4F',
    borderWidth: 1,
    borderColor: '#DE4D4F',
    borderRadius: 25,
  },
  filterApplyButtonText: {
    fontFamily: 'Montserrat-Medium',
    color: 'white',
  },
  // Categories styling
  cateContainer: {
    minWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  cateHeader:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',    paddingLeft: 18,
    height: 53
  },
  cateContainerTop: {
    minWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 14
  },
  cateItemContainer: {
    width: Dimensions.get('window').width / 2 - 10,
    height: Dimensions.get('window').width / 2 - 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation:5
  },
  cateCarImage: {
    width: 49,
    height: 34,
  },
  cateMobileImage: {
    width: 26,
    height: 43,
  },
  cateText: {
    fontFamily: 'Montserrat-Light',
    fontSize: 16,
    color: '#aeaeaeff',
  },
  cateTextContainer: {
    marginTop: 16,
  },
  cateHouseIcon: {
    width: 45,
    height: 43,
  },
  cateServiceIcon: {
    width: 51,
    height: 33,
  },
  cateAccessIcon: {
    width: 35,
    height: 50,
  },
  cateOthersIcon: {
    width: 32,
    height: 32,
  },
  cateScrollView: {
    flex: 1,
  },
  // Profile Css
  profileContainer:{
    flex: 1,
    minWidth: '100%'
  },
  profileHeader:{
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 53,
    paddingLeft: 18,
    paddingRight: 13,
   
  },
  profileHeaderItems: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  settingsIcon: {
    width: 17,
    height: 17
  },
  profileMainHeaderContainer:{
    height: 143,
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 18,
    paddingRight: 14
    
  },
  profileMHImage:{
    height: 84,
    width: 84,
    borderRadius: 50
  },
  editIconContainer:{
    position: "absolute",
   right: 0
  },
  editIcon: {
    width: 19, 
    height: 19
  },
  mHBackgroundImage:{
    height: 143,
    minWidth: '100%',
  },
  mHText1:{
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: 'white',
    letterSpacing: 1
  },
  mHText2:{
    fontFamily: 'Montserrat-Light',
    fontSize: 12,
    color: '#DCDCDC',
    letterSpacing: 1
  },
  profileSubHeader:{
    height: 47,
    minWidth: '100%',
    backgroundColor: '#EFEFEF',
    elevation: 0, 
  
  },
  profileSubHeaderText: {
    width:'100%',
    fontFamily: 'Montserrat-Light',
    color: '#9a9a9aff',
    fontSize:12,
    textAlign: 'center',
    lineHeight: 20,
    margin: 0,
    padding: 0
  },
  // Seetings css
  settingsConatiner:{
    flex: 1,
  },
  settingsMenuContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: 18,
    marginBottom: 50
  },
  settingsMenuItemContainer:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  settingsProfilepic:{
    width: 40,
    height: 40,
    borderRadius: 50
  },
  settingsPhotoTextContainer:{
    marginLeft: 10
  },
  nameIcon:{
    width: 14, 
    height: 17
  },
  settingsEmailIcon:{
    width: 15, 
    height: 12
  },
  settingsLocationIcon:{
    width: 11, 
    height: 14
  },
  settingsPassIcon:{
    width: 11, 
    height: 13
  },
  settingsNoteIcon:{
    width: 14, 
    height: 14
  },
  settingsTextContainer: {
    marginLeft: 27
  },
  settingsItemText1:{
    fontFamily: 'Montserrat-Medium',
    fontSize: 12
  },
  settingsItemText2:{
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#B1B1B1',
    marginTop: 7
  },
  settingsNoteTextContainer: {
    marginLeft: 25
  },
  settingsItemText3:{
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: "#DE4D4F"
  },
  changeNameInput:{
    fontFamily: 'Montserrat-Medium',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#EFEFEF',
    paddingLeft: 18,
    borderRadius: 5,
    marginTop: 44
  },
  changeNameInputText:{
    flex: 1,
    marginLeft: 15,
    fontFamily: 'Montserrat-Medium',
    color: '#B1B1B1'
  },
  changeNameInputButton:{
    backgroundColor: '#DE4D4F',
    maxWidth: '100%',
    height: 44,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 50,
    elevation: 7,
    marginTop: 43
  }, 
  changeEmailContainer: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 8
  },
  changeEmailText1:{
    fontFamily:'Montserrat-Light',
    fontSize: 12,
    color: '#DE4D4F'
  },
  changeEmailText2:{
    fontFamily:'Montserrat-Light',
    fontSize: 12,
    color: '#B1B1B1'
  },
});
