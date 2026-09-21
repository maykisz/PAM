import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',

    left: 16,
    right: 16,
    bottom: 14,

    alignItems: 'center',
  },

  navigation: {
    width: '100%',
    maxWidth: 450,

    height: 66,

    paddingHorizontal: 12,

    borderRadius: 24,

    backgroundColor: '#FBFBF9',

    borderWidth: 1,
    borderColor: '#E7E7E3',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    shadowColor: '#000',

    shadowOpacity: 0.08,
    shadowRadius: 15,

    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 8,
  },

  item: {
    minWidth: 55,

    alignItems: 'center',
    justifyContent: 'center',

    gap: 3,
  },

  label: {
    color: '#AAAAA6',

    fontSize: 8,
    fontWeight: '500',
  },

  activeLabel: {
    color: '#242424',

    fontWeight: '600',
  },
});

export default styles;