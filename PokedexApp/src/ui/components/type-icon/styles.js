import {StyleSheet} from 'react-native';

import {COLORS} from '../../common';

export default StyleSheet.create({
  typeIconContainer: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.MEDIUM_BLUE,
    borderRadius: 100,
    shadowColor: COLORS.BLACK,
    elevation: 10,
  },
});
