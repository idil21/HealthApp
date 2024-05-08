
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop:80,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor:'white'
  },
  error: {
    color:'rgb(136, 131, 240)',
    fontSize: 12,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.54,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 20,
    width: "80%",
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dropdownLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  dropdown: {
    width: 150,
  },
});

export default styles;
