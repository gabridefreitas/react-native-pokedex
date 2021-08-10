import {StyleSheet} from 'react-native';

import {COLORS} from '../../common';

export default StyleSheet.create({
  typeHorizontalCardContainer: {
    height: 30,
    width: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.MEDIUM_BLUE,
    borderRadius: 100,
    shadowColor: COLORS.BLACK,
    elevation: 10,
  },
  typeText: {
    color: COLORS.WHITE,
    textTransform: 'uppercase',
    marginLeft: 10,
  },
});
