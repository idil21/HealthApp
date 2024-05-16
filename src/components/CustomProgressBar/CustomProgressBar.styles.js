
import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 40, // Responsive width
    marginTop: 10,
  },
  label: {
    color: '#808080', // Grey color for labels
    fontSize: 12,
  },
  activeLabel: {
    color: '#000', // Black for active label
    fontWeight: 'bold',
  },
});