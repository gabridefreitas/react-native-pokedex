import {StyleSheet} from 'react-native';

import {COLORS} from '../../common';

export default StyleSheet.create({
  movesCardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moveNameText: {
    fontSize: 19,
    fontWeight: '500',
    color: COLORS.DARK_GRAY,
    textTransform: 'capitalize',
  },
});
