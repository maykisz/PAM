import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    width: '100%',
    alignSelf: 'stretch',

    backgroundColor: '#F3F3F1',
  },

  list: {
    flex: 1,
    width: '100%',
  },

  content: {
    width: '100%',

    paddingHorizontal: 18,
    paddingTop: 24,
    paddingBottom: 110,
  },

  pageHeader: {
    width: '100%',
  },

  label: {
    color: '#A1A19D',

    fontSize: 8,
    fontWeight: '700',

    letterSpacing: 0.7,
  },

  title: {
    color: '#292928',

    fontSize: 29,
    fontWeight: '600',

    letterSpacing: -1,

    marginTop: 5,
  },

  subtitle: {
    color: '#92928E',

    fontSize: 11,

    marginTop: 5,
  },

  summary: {
    width: '100%',
    height: 92,

    marginTop: 22,

    borderRadius: 24,

    paddingHorizontal: 18,

    backgroundColor: '#FBFBF9',

    borderWidth: 1,
    borderColor: '#E9E9E5',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  summaryLabel: {
    color: '#999995',

    fontSize: 8,
    fontWeight: '600',
  },

  summaryValue: {
    color: '#292929',

    fontSize: 27,
    fontWeight: '600',

    marginTop: 2,
  },

  listTitle: {
    color: '#292929',

    fontSize: 16,
    fontWeight: '600',

    marginTop: 25,
    marginBottom: 12,
  },

  card: {
    width: '100%',

    padding: 15,

    borderRadius: 23,

    backgroundColor: '#FBFBF9',

    borderWidth: 1,
    borderColor: '#E9E9E5',

    marginBottom: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 52,
    height: 52,

    borderRadius: 17,

    backgroundColor: '#EE9374',

    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    color: '#FFFFFF',

    fontSize: 14,
    fontWeight: '700',
  },

  info: {
    flex: 1,

    marginLeft: 12,
  },

  name: {
    color: '#292929',

    fontSize: 14,
    fontWeight: '600',
  },

  role: {
    color: '#777773',

    fontSize: 10,

    marginTop: 2,
  },

  email: {
    color: '#A0A09C',

    fontSize: 9,

    marginTop: 5,
  },

  socials: {
    flexDirection: 'row',

    gap: 8,

    marginTop: 14,
  },

  socialButton: {
    flex: 1,

    height: 38,

    borderRadius: 19,

    backgroundColor: '#EFEFED',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 6,
  },

  socialText: {
    color: '#444441',

    fontSize: 9,
    fontWeight: '500',
  },
});

export default styles;