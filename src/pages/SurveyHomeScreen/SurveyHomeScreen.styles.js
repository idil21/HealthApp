import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description:{
    fontSize:15
  },
  button: {
    
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
},
  buttonContainer: {
    backgroundColor: '#4b0082',
    borderRadius: 200,
  
    marginTop: 20,
    overflow: 'hidden',
    width:150,
    height:150
   
  },
  
  buttonInnerContainer: {
    borderRadius: 100,
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width:90,
    height:90,
    position: 'absolute',
    top: 30,
    left: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: '#52006A',
    fontSize: 16,
    textAlign: 'center',
  },
  elevation: {//May require extra library for iOS
    elevation: 20,
    shadowColor: '#52006A',
    
  }
});
