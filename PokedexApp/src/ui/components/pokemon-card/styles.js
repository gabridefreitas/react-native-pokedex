import {StyleSheet} from 'react-native';

import {COLORS} from '../../common';

export default StyleSheet.create({
  pokeCardLeftContainer: {
    flexDirection: 'row',
  },
  pokeCardRightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  pokeImageContainer: {
    width: 50,
    height: 50,
  },
  pokeInfoContainer: {
    maxWidth: 200,
    height: 50,
    marginLeft: 15,
    justifyContent: 'center',
  },
  pokeTypesContainer: {
    width: 100,
    height: 50,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  pokeImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  pokeNameText: {
    fontSize: 19,
    fontWeight: '500',
    color: COLORS.DARK_GRAY,
    textTransform: 'capitalize',
  },
  pokeIdText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.MEDIUM_GRAY,
  },
  typeIconContainer: {
    marginLeft: 10,
  },
});
