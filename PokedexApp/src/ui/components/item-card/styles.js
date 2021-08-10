import {StyleSheet} from 'react-native';

import {COLORS} from '../../common';

export default StyleSheet.create({
  itemCardLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  itemCardRightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  itemImageContainer: {
    width: 50,
    height: 50,
  },
  itemInfoContainer: {
    maxWidth: 200,
    height: 50,
    marginLeft: 15,
    justifyContent: 'center',
  },
  itemCostContainer: {
    width: 100,
    height: 50,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  itemImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  itemNameText: {
    fontSize: 19,
    fontWeight: '500',
    color: COLORS.DARK_GRAY,
    textTransform: 'capitalize',
  },
  itemCostText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.MEDIUM_GRAY,
  },
  pokedexIcon: {
    marginLeft: 10,
  },
});
