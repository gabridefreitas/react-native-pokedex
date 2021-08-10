import {Dimensions, StyleSheet} from 'react-native';

import {COLORS} from '../../common';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  pressableContainer: {
    width: width,
    height: 75,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.LIGHT_GRAY,
  },
});
