import {StyleSheet, Dimensions} from 'react-native';

import {COLORS} from '../../common';

const {width} = Dimensions.get('window');

const levelBarWidth = width * 0.7;
const leftContainerSize = width * 0.18;

export default StyleSheet.create({
  statusInfoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  statCardLeftContainer: {
    width: leftContainerSize,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  levelBar: {
    width: levelBarWidth,
    height: 7,
    backgroundColor: COLORS.LIGHT_GRAY,
    justifyContent: 'flex-end',
    borderRadius: 20,
  },
  completeLevelBar: {
    position: 'absolute',
    width: levelBarWidth,
    height: 7,
    backgroundColor: COLORS.BLACK,
    justifyContent: 'flex-end',
    borderRadius: 20,
  },
  statusText: {
    fontSize: 14,
    color: COLORS.DARK_GRAY,
  },
});
