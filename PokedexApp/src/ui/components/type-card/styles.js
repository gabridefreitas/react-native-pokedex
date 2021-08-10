import {StyleSheet} from 'react-native';

import {COLORS} from '../../common';

export default StyleSheet.create({
  typeCardContainer: {
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 100,
    borderColor: COLORS.WHITE,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
