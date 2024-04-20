import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor:'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    fontSize:12
  },
  errorInput: {
    borderColor: 'red',
  },
  
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius:20,
  },
  loginButton:{
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:20,
  }
})