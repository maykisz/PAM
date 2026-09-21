import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // =====================================================
  // APP
  // =====================================================

  app: {
    flex: 1,

    width: '100%',

    alignSelf: 'stretch',

    backgroundColor: '#F3F3F1',

    position: 'relative',

    overflow: 'hidden',
  },

  screenContainer: {
    flex: 1,

    width: '100%',

    alignSelf: 'stretch',

    minWidth: 0,

    backgroundColor: '#F3F3F1',
  },

  // =====================================================
  // LOADING
  // =====================================================

  loadingScreen: {
    flex: 1,

    width: '100%',

    backgroundColor: '#F3F3F1',

    alignItems: 'center',

    justifyContent: 'center',
  },

  loadingContent: {
    alignItems: 'center',

    justifyContent: 'center',

    gap: 12,
  },

  loadingText: {
    color: '#777773',

    fontSize: 12,

    fontWeight: '500',
  },

  // =====================================================
  // MESSAGE
  // =====================================================

  messageWrapper: {
    position: 'absolute',

    left: 20,
    right: 20,

    bottom: 92,

    zIndex: 200,

    alignItems: 'center',
  },

  messageBox: {
    width: '100%',

    maxWidth: 420,

    minHeight: 44,

    borderRadius: 22,

    backgroundColor:
      'rgba(35,35,35,0.95)',

    paddingLeft: 15,
    paddingRight: 8,

    paddingVertical: 8,

    flexDirection: 'row',

    alignItems: 'center',

    gap: 8,

    shadowColor: '#000000',

    shadowOpacity: 0.14,

    shadowRadius: 12,

    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 8,
  },

  messageText: {
    flex: 1,

    color: '#FFFFFF',

    fontSize: 10.5,

    lineHeight: 14,
  },

  messageClose: {
    width: 30,
    height: 30,

    borderRadius: 15,

    alignItems: 'center',

    justifyContent: 'center',

    backgroundColor:
      'rgba(255,255,255,0.10)',
  },
});

export default styles;