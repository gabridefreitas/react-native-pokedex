import {StyleSheet} from 'react-native';

import {COLORS} from '../../common';

export default StyleSheet.create({
  buttonContainer: {
    width: 110,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.VERY_LIGHT_GRAY,
    marginHorizontal: 5,
  },
  buttonTitleText: {
    fontSize: 13,
    color: COLORS.WHITE,
    textTransform: 'uppercase',
  },
});
