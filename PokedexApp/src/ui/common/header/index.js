import {COLORS} from '../';

export const HeaderStyle = {
  headerTitleAlign: 'center',
  headerTitleStyle: {color: COLORS.BLACK},
  headerStyle: {
    height: 60,
    backgroundColor: COLORS.LIGHT_GREEN,
    borderBottomColor: COLORS.MEDIUM_GREEN,
    borderBottomWidth: 3,
  },
};

export const NoHeaderStyle = {
  headerTitle: () => null,
  headerTransparent: true,
  headerTintColor: COLORS.WHITE,
  headerStyle: {
    borderBottomWidth: 0,
  },
};
