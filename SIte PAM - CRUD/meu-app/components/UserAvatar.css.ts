import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 999,
  },

  pressed: {
    opacity: 0.75,

    transform: [
      {
        scale: 0.96,
      },
    ],
  },

  avatar: {
    overflow: 'hidden',

    borderWidth: 2,

    borderColor: '#FFFFFF',

    backgroundColor: '#F39A80',

    shadowColor: '#000000',

    shadowOpacity: 0.07,

    shadowRadius: 7,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 2,
  },

  avatarNormal: {
    width: 50,
    height: 50,

    borderRadius: 25,
  },

  avatarSmall: {
    width: 38,
    height: 38,

    borderRadius: 19,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  fallback: {
    flex: 1,

    width: '100%',

    alignItems: 'center',

    justifyContent: 'center',

    backgroundColor: '#F39A80',
  },

  initials: {
    color: '#FFFFFF',

    fontSize: 14,

    fontWeight: '700',

    letterSpacing: -0.3,
  },

  initialsSmall: {
    fontSize: 10,
  },
});

export default styles;