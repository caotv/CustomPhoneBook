import {StyleSheet} from 'react-native';
import colors from '../../../src/assets/theme/colors';

export default StyleSheet.create({
  wraper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.white
    
  },

  contact: {
    flexDirection: 'row',
  },

  avatar: {
    width: '100%',
    height: 40,
    width: 40,
    backgroundColor: colors.grey,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemName: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  name: {
    fontSize: 17,
  },
  phoneNumber: {
    alignItems: 'center',
    color: colors.primary,
    opacity: 0.6,
    fontSize: 14,
  },

  floatingBtn: {
    backgroundColor: 'red',
    width: 55,
    height: 55,
    borderRadius: 100,
    position: 'absolute',
    bottom: 45,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});