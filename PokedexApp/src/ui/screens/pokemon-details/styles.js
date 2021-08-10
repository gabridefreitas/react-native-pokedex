import {StyleSheet} from 'react-native';

import {COLORS} from '../../common';

export default StyleSheet.create({
  pokemonDetailsContainer: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  modalContainer: {
    flex: 0.75,
    backgroundColor: COLORS.VERY_LIGHT_GRAY,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  pokemonImageContainer: {
    position: 'absolute',
    top: -120,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokemonTypesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  pokemonImage: {
    width: 170,
    height: 170,
    resizeMode: 'cover',
  },
  pokemontTypeHorizontalCard: {
    marginHorizontal: 5,
  },
  pokemonNameText: {
    fontSize: 40,
    fontWeight: '700',
    color: COLORS.DARK_GRAY,
    textTransform: 'capitalize',
    marginTop: 50,
    textAlign: 'center',
  },
  pokemonDescriptionText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.DARK_GRAY,
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});
