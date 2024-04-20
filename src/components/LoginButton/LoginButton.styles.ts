import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    //justifyContent: 'center',
    
  },
  button: {
   
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 20,
    width: '95%',
    backgroundColor: 'rgb(136, 131, 240)',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});