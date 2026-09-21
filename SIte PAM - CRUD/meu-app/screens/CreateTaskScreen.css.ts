import {
  Platform,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F4F5F4',
  },

  scroll: {
    flex: 1,
    width: '100%',
  },

  content: {
    width: '100%',
    flexGrow: 1,

    paddingHorizontal: 21,

    paddingTop:
      Platform.OS === 'ios'
        ? 22
        : 24,

    paddingBottom: 125,
  },

  topBar: {
    width: '100%',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    marginBottom: 27,
  },

  back: {
    width: 47,
    height: 47,

    borderRadius: 24,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',

    justifyContent: 'center',
  },

  heading: {
    marginBottom: 25,
  },

  overline: {
    color: '#8A9098',

    fontSize: 12,

    marginBottom: 4,
  },

  title: {
    color: '#121212',

    fontSize: 34,

    lineHeight: 38,

    fontWeight: '700',

    letterSpacing: -1.2,
  },

  subtitle: {
    color: '#848B94',

    fontSize: 13,

    lineHeight: 19,

    maxWidth: 340,

    marginTop: 7,
  },

  fieldCard: {
    width: '100%',

    borderRadius: 23,

    backgroundColor: '#FFFFFF',

    padding: 15,

    flexDirection: 'row',

    alignItems: 'flex-start',

    gap: 13,

    marginBottom: 12,
  },

  fieldIcon: {
    width: 47,
    height: 47,

    borderRadius: 15,

    backgroundColor: '#F0F2F5',

    alignItems: 'center',

    justifyContent: 'center',
  },

  fieldContent: {
    flex: 1,

    minWidth: 0,
  },

  labelRow: {
    width: '100%',

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  label: {
    color: '#202020',

    fontSize: 13,

    fontWeight: '600',

    marginBottom: 9,
  },

  inputBox: {
    width: '100%',

    height: 55,

    borderRadius: 18,

    backgroundColor: '#F7F8F8',

    justifyContent: 'center',

    paddingHorizontal: 16,
  },

  input: {
    width: '100%',
    height: '100%',

    color: '#242424',

    fontSize: 13,

    paddingVertical: 0,
  },

  textAreaBox: {
    width: '100%',

    minHeight: 112,

    borderRadius: 18,

    backgroundColor: '#F7F8F8',

    padding: 15,
  },

  textArea: {
    width: '100%',

    minHeight: 80,

    color: '#242424',

    fontSize: 13,

    lineHeight: 18,

    padding: 0,
  },

  counter: {
    alignSelf: 'flex-end',

    color: '#9299A1',

    fontSize: 10,

    marginTop: 6,
  },

  aiButton: {
    minHeight: 28,

    borderRadius: 14,

    paddingHorizontal: 9,

    backgroundColor: '#FFF0EA',

    flexDirection: 'row',

    alignItems: 'center',

    gap: 5,

    marginBottom: 7,
  },

  aiText: {
    color: '#D85B43',

    fontSize: 8.5,

    fontWeight: '600',
  },

  selectRow: {
    width: '100%',

    flexDirection: 'row',

    gap: 10,

    marginBottom: 15,
  },

  selectCard: {
    flex: 1,

    minHeight: 112,

    borderRadius: 22,

    backgroundColor: '#FFFFFF',

    padding: 13,

    flexDirection: 'row',

    alignItems: 'flex-start',

    gap: 10,
  },

  selectIcon: {
    width: 41,
    height: 41,

    borderRadius: 14,

    backgroundColor: '#F0F2F5',

    alignItems: 'center',

    justifyContent: 'center',
  },

  selectContent: {
    flex: 1,

    minWidth: 0,
  },

  selectLabel: {
    color: '#202020',

    fontSize: 11,

    fontWeight: '600',

    marginTop: 2,

    marginBottom: 8,
  },

  selectBox: {
    width: '100%',

    minHeight: 42,

    borderRadius: 15,

    backgroundColor: '#F7F8F8',

    paddingHorizontal: 9,

    flexDirection: 'row',

    alignItems: 'center',

    gap: 6,
  },

  selectPlaceholder: {
    flex: 1,

    color: '#899099',

    fontSize: 9.5,
  },

  selectValue: {
    flex: 1,

    color: '#333333',

    fontSize: 9.5,

    fontWeight: '500',
  },

  miniAvatar: {
    width: 23,
    height: 23,

    borderRadius: 12,

    backgroundColor: '#F28E73',

    alignItems: 'center',

    justifyContent: 'center',
  },

  miniAvatarText: {
    color: '#FFFFFF',

    fontSize: 7,

    fontWeight: '700',
  },

  statusDot: {
    width: 9,
    height: 9,

    borderRadius: 5,

    backgroundColor: '#F06B50',
  },

  saveButton: {
    width: '100%',

    height: 62,

    borderRadius: 31,

    backgroundColor: '#242728',

    position: 'relative',

    alignItems: 'center',

    justifyContent: 'center',

    shadowColor: '#000',

    shadowOpacity: 0.13,

    shadowRadius: 12,

    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 5,
  },

  saveButtonDisabled: {
    opacity: 0.55,
  },

  saveText: {
    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: '600',
  },

  saveArrow: {
    position: 'absolute',

    right: 8,

    width: 46,
    height: 46,

    borderRadius: 23,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',

    justifyContent: 'center',
  },

  backdrop: {
    flex: 1,

    backgroundColor:
      'rgba(15,15,15,0.38)',

    justifyContent: 'flex-end',
  },

  modal: {
    width: '100%',

    maxHeight: '72%',

    borderTopLeftRadius: 31,

    borderTopRightRadius: 31,

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 20,

    paddingTop: 13,

    paddingBottom: 30,
  },

  modalSmall: {
    width: '100%',

    borderTopLeftRadius: 31,

    borderTopRightRadius: 31,

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 20,

    paddingTop: 13,

    paddingBottom: 30,
  },

  handle: {
    width: 48,
    height: 5,

    borderRadius: 3,

    backgroundColor: '#DFDFDC',

    alignSelf: 'center',

    marginBottom: 20,
  },

  modalTitle: {
    color: '#191919',

    fontSize: 20,

    fontWeight: '700',

    letterSpacing: -0.5,
  },

  modalSubtitle: {
    color: '#909690',

    fontSize: 10.5,

    marginTop: 4,

    marginBottom: 18,
  },

  developerItem: {
    width: '100%',

    minHeight: 67,

    borderRadius: 19,

    backgroundColor: '#F7F8F8',

    paddingHorizontal: 12,

    flexDirection: 'row',

    alignItems: 'center',

    gap: 11,

    marginBottom: 8,

    borderWidth: 1,

    borderColor: 'transparent',
  },

  developerSelected: {
    backgroundColor: '#FFF0EB',

    borderColor: '#F5C6B8',
  },

  developerAvatar: {
    width: 43,
    height: 43,

    borderRadius: 15,

    backgroundColor: '#F28E73',

    alignItems: 'center',

    justifyContent: 'center',
  },

  developerAvatarText: {
    color: '#FFFFFF',

    fontSize: 11,

    fontWeight: '700',
  },

  developerInfo: {
    flex: 1,
  },

  developerName: {
    color: '#242424',

    fontSize: 12.5,

    fontWeight: '600',
  },

  developerRole: {
    color: '#8B929A',

    fontSize: 9.5,

    marginTop: 3,
  },

  statusOption: {
    width: '100%',

    height: 58,

    borderRadius: 19,

    backgroundColor: '#F7F8F8',

    paddingHorizontal: 14,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    marginTop: 8,

    borderWidth: 1,

    borderColor: 'transparent',
  },

  statusOptionSelected: {
    backgroundColor: '#FFF0EB',

    borderColor: '#F5C7BA',
  },

  statusOptionText: {
    color: '#292929',

    fontSize: 12,

    fontWeight: '500',
  },
});

export default styles;