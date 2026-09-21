import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',

    left: 22,
    right: 22,
    bottom: 16,

    zIndex: 1000,

    alignItems: 'center',
  },

  bar: {
    width: '100%',

    maxWidth: 410,

    height: 76,

    borderRadius: 38,

    backgroundColor: '#242728',

    paddingHorizontal: 8,

    flexDirection: 'row',

    alignItems: 'center',

    shadowColor: '#000000',

    shadowOpacity: 0.16,

    shadowRadius: 17,

    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 12,
  },

  item: {
    flex: 1,

    height: '100%',

    alignItems: 'center',

    justifyContent: 'center',

    gap: 3,
  },

  itemPressed: {
    opacity: 0.65,
  },

  iconContainer: {
    width: 39,
    height: 39,

    borderRadius: 20,

    alignItems: 'center',

    justifyContent: 'center',
  },

  iconContainerActive: {
    backgroundColor: '#FFFFFF',
  },

  label: {
    color: '#FFFFFF',

    fontSize: 8.5,

    fontWeight: '500',

    opacity: 0.8,
  },

  labelActive: {
    opacity: 1,

    fontWeight: '600',
  },
});

export default styles;