import {StyleSheet} from 'react-native';

import {COLORS} from '../../common';

export default StyleSheet.create({
  moveDetailsContainer: {
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
  moveTypeContainer: {
    position: 'absolute',
    top: -45,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moveEffectContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  moveInfoContainer: {
    minHeight: 80,
    flexDirection: 'row',
  },
  infoCard: {
    flex: 1,
    alignItems: 'center',
  },
  accuracyCard: {
    flex: 1,
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.LIGHT_GRAY,
  },
  attributeTitleText: {
    fontSize: 15,
    marginBottom: 20,
  },
  moveNameText: {
    fontSize: 40,
    fontWeight: '700',
    color: COLORS.DARK_GRAY,
    textTransform: 'capitalize',
    marginTop: 50,
    textAlign: 'center',
  },
  moveInfoText: {
    fontSize: 19,
    fontWeight: '500',
    color: COLORS.DARK_GRAY,
  },
  moveEffectText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.DARK_GRAY,
    textAlign: 'center',
    marginTop: 30,
  },
});
