import {StyleSheet} from 'react-native';

import {COLORS} from '../../common';

export default StyleSheet.create({
  itemDetailsContainer: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  modalContainer: {
    flex: 0.8,
    backgroundColor: COLORS.VERY_LIGHT_GRAY,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 15,
  },
  imageContainer: {
    position: 'absolute',
    top: -60,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemCostContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  itemImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  itemNameText: {
    fontSize: 40,
    fontWeight: '700',
    color: COLORS.DARK_GRAY,
    textTransform: 'capitalize',
    marginTop: 50,
    textAlign: 'center',
  },
  itemCostText: {
    fontSize: 19,
    fontWeight: '500',
    color: COLORS.MEDIUM_GRAY,
    marginRight: 5,
  },
  itemEffectText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.DARK_GRAY,
    textAlign: 'center',
  },
});
