import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // =====================================================
  // BASE
  // =====================================================

  screen: {
    flex: 1,
    backgroundColor: '#F1F1EF',
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 32,
  },

  list: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 36,
  },

  // =====================================================
  // LOGIN
  // =====================================================

  loginContainer: {
    flex: 1,
    backgroundColor: '#EAEAE8',
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 24,
  },

  loginCard: {
    width: '100%',
    backgroundColor: '#F9F9F7',
    borderRadius: 31,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 9,
    },

    elevation: 4,
  },

  loginHero: {
    height: 235,
    paddingHorizontal: 22,
    paddingTop: 23,
    paddingBottom: 22,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },

  loginHeroGlowOne: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(255,255,255,0.16)',
    top: -150,
    right: -70,
  },

  loginHeroGlowTwo: {
    position: 'absolute',
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: 'rgba(255,255,255,0.10)',
    left: -90,
    bottom: -90,
  },

  brandBadge: {
    position: 'absolute',
    top: 18,
    left: 18,

    width: 38,
    height: 38,
    borderRadius: 19,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'rgba(255,255,255,0.78)',
  },

  welcomeLabel: {
    color: 'rgba(255,255,255,0.90)',
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 0.3,
    marginBottom: 5,
  },

  loginTitle: {
    color: '#FFFFFF',
    fontSize: 29,
    lineHeight: 31,
    fontWeight: '400',
    letterSpacing: -0.8,
  },

  loginTitleStrong: {
    fontWeight: '700',
  },

  loginHeroDescription: {
    color: 'rgba(255,255,255,0.82)',
    fontSize: 11,
    lineHeight: 15,
    marginTop: 9,
    maxWidth: 245,
  },

  loginForm: {
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 20,
  },

  loginSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 17,
  },

  loginFormTitle: {
    color: '#222222',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: -0.4,
  },

  loginSubtitle: {
    color: '#999996',
    fontSize: 10,
    marginTop: 3,
  },

  loginMiniIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,

    backgroundColor: '#EEEEEB',

    justifyContent: 'center',
    alignItems: 'center',
  },

  errorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,

    borderRadius: 13,
    backgroundColor: '#FFF1EE',

    paddingHorizontal: 12,
    paddingVertical: 9,
    marginBottom: 13,
  },

  loginError: {
    flex: 1,
    color: '#A64B3C',
    fontSize: 10,
  },

  label: {
    color: '#6A6A67',
    fontSize: 10,
    fontWeight: '500',
    marginBottom: 6,
    marginTop: 9,
  },

  inputWrapper: {
    height: 48,
    borderRadius: 16,

    backgroundColor: '#EFEFED',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 13,
    gap: 8,

    borderWidth: 1,
    borderColor: '#E8E8E5',
  },

  inputInside: {
    flex: 1,
    height: 48,
    color: '#222222',
    fontSize: 12,
  },

  input: {
    height: 48,
    borderRadius: 16,

    backgroundColor: '#EFEFED',

    paddingHorizontal: 13,

    borderWidth: 1,
    borderColor: '#E8E8E5',

    color: '#222222',
    fontSize: 12,
  },

  primaryButton: {
    height: 50,

    marginTop: 20,
    paddingHorizontal: 8,
    paddingLeft: 18,

    backgroundColor: '#30302F',
    borderRadius: 25,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 3,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },

  buttonIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,

    backgroundColor: '#F6F6F3',

    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonDisabled: {
    opacity: 0.55,
  },

  loginFooter: {
    textAlign: 'center',
    color: '#AEAEAA',
    fontSize: 9,
    marginTop: 15,
  },

  // =====================================================
  // DASHBOARD / HERO
  // =====================================================

  heroCard: {
    height: 225,

    borderRadius: 28,
    overflow: 'hidden',

    paddingHorizontal: 20,
    paddingVertical: 19,

    marginBottom: 23,

    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 7,
    },

    elevation: 3,
  },

  heroCircleOne: {
    position: 'absolute',

    width: 280,
    height: 280,
    borderRadius: 140,

    top: -190,
    right: -80,

    backgroundColor: 'rgba(255,255,255,0.13)',
  },

  heroCircleTwo: {
    position: 'absolute',

    width: 190,
    height: 190,
    borderRadius: 95,

    left: -120,
    bottom: -110,

    backgroundColor: 'rgba(255,255,255,0.08)',
  },

  heroTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  heroOverline: {
    color: 'rgba(255,255,255,0.78)',
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 0.4,
    marginBottom: 6,
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    lineHeight: 30,
    fontWeight: '500',
    letterSpacing: -0.9,
  },

  heroButton: {
    width: 38,
    height: 38,
    borderRadius: 19,

    backgroundColor: 'rgba(255,255,255,0.70)',

    justifyContent: 'center',
    alignItems: 'center',
  },

  heroBottom: {
    marginTop: 'auto',

    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  heroInfoLabel: {
    color: 'rgba(255,255,255,0.72)',
    fontSize: 8,
    fontWeight: '500',
  },

  heroInfoValue: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 1,
  },

  darkPillButton: {
    height: 40,

    paddingHorizontal: 15,

    backgroundColor: '#30302F',
    borderRadius: 20,

    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  darkPillButtonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '500',
  },

  // =====================================================
  // SEÇÕES
  // =====================================================

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 13,
  },

  sectionEyebrow: {
    color: '#A3A3A0',
    fontSize: 8,
    fontWeight: '600',
    letterSpacing: 0.7,
    marginBottom: 3,
  },

  sectionTitle: {
    color: '#282826',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: -0.35,
  },

  sectionIcon: {
    width: 35,
    height: 35,
    borderRadius: 17.5,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#F8F8F6',

    borderWidth: 1,
    borderColor: '#E8E8E5',
  },

  simpleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    marginTop: 3,
    marginBottom: 19,
  },

  pageBigTitle: {
    color: '#282826',
    fontSize: 26,
    fontWeight: '500',
    letterSpacing: -0.9,
  },

  pageDescription: {
    color: '#999996',
    fontSize: 10,
    marginTop: 3,
  },

  headerRoundButton: {
    width: 40,
    height: 40,
    borderRadius: 20,

    backgroundColor: '#F8F8F6',

    borderWidth: 1,
    borderColor: '#E7E7E4',

    justifyContent: 'center',
    alignItems: 'center',
  },

  listSectionTitle: {
    color: '#333330',
    fontSize: 14,
    fontWeight: '600',

    marginTop: 20,
    marginBottom: 10,
  },

  // =====================================================
  // TASK CARD
  // =====================================================

  taskCard: {
    backgroundColor: '#F9F9F7',

    borderRadius: 22,

    paddingHorizontal: 15,
    paddingVertical: 14,

    marginBottom: 10,

    borderWidth: 1,
    borderColor: '#E9E9E6',

    shadowColor: '#000',
    shadowOpacity: 0.035,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 1,
  },

  taskCardTop: {
    flexDirection: 'row',
    gap: 11,
  },

  taskIconBox: {
    width: 43,
    height: 43,

    borderRadius: 14,

    backgroundColor: '#F4E7E1',

    alignItems: 'center',
    justifyContent: 'center',
  },

  taskCardContent: {
    flex: 1,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    gap: 7,
  },

  cardTitle: {
    flex: 1,

    color: '#323230',

    fontSize: 13,
    fontWeight: '600',

    letterSpacing: -0.2,
  },

  cardText: {
    color: '#858582',

    fontSize: 10,
    lineHeight: 14,

    marginTop: 5,
  },

  cardMeta: {
    color: '#999996',
    fontSize: 9,
  },

  taskDeveloper: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 4,

    marginTop: 7,
  },

  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 7,
    height: 23,

    borderRadius: 11.5,

    gap: 4,
  },

  statusBadgeActive: {
    backgroundColor: '#FCE9E1',
  },

  statusBadgeFinished: {
    backgroundColor: '#EAF1EA',
  },

  statusDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },

  statusDotActive: {
    backgroundColor: '#E9794F',
  },

  statusDotFinished: {
    backgroundColor: '#759B75',
  },

  status: {
    color: '#6E6E6B',
    fontSize: 8,
    fontWeight: '500',
  },

  taskDivider: {
    height: 1,
    backgroundColor: '#ECECE9',
    marginVertical: 12,
  },

  taskActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  editButton: {
    height: 31,

    paddingHorizontal: 12,

    borderRadius: 15.5,

    backgroundColor: '#EEEEEB',

    flexDirection: 'row',
    alignItems: 'center',

    gap: 5,
  },

  editButtonText: {
    color: '#4B4B48',
    fontSize: 9,
    fontWeight: '500',
  },

  deleteButton: {
    height: 31,

    paddingHorizontal: 12,

    borderRadius: 15.5,

    backgroundColor: '#F8ECE8',

    flexDirection: 'row',
    alignItems: 'center',

    gap: 5,
  },

  deleteButtonText: {
    color: '#A85C4E',
    fontSize: 9,
    fontWeight: '500',
  },

  // =====================================================
  // DEVELOPER
  // =====================================================

  teamStatsCard: {
    minHeight: 75,

    backgroundColor: '#F9F9F7',

    borderRadius: 21,

    paddingHorizontal: 16,

    borderWidth: 1,
    borderColor: '#E8E8E5',

    flexDirection: 'row',
    alignItems: 'center',
  },

  statLabel: {
    color: '#A2A29F',
    fontSize: 8,
    fontWeight: '500',
  },

  statValue: {
    color: '#30302E',
    fontSize: 22,
    fontWeight: '600',
    marginTop: 1,
  },

  statLine: {
    width: 1,
    height: 32,

    backgroundColor: '#E5E5E2',

    marginHorizontal: 15,
  },

  statInformation: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'center',

    gap: 6,
  },

  statInformationText: {
    flex: 1,

    color: '#8D8D89',

    fontSize: 9,
    lineHeight: 12,
  },

  developerCard: {
    backgroundColor: '#F9F9F7',

    borderRadius: 21,

    padding: 14,

    marginBottom: 9,

    borderWidth: 1,
    borderColor: '#E9E9E6',
  },

  developerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 48,
    height: 48,

    borderRadius: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  developerInfo: {
    flex: 1,
    marginLeft: 11,
  },

  developerRole: {
    color: '#81817E',
    fontSize: 10,
    marginTop: 2,
  },

  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 4,

    marginTop: 5,
  },

  developerArrow: {
    width: 31,
    height: 31,

    borderRadius: 15.5,

    backgroundColor: '#EEEEEB',

    justifyContent: 'center',
    alignItems: 'center',
  },

  socialRow: {
    flexDirection: 'row',
    gap: 7,

    marginTop: 12,
  },

  socialButton: {
    flex: 1,

    height: 36,

    borderRadius: 18,

    backgroundColor: '#EEEEEB',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 5,
  },

  socialText: {
    color: '#535350',
    fontSize: 9,
    fontWeight: '500',
  },

  // =====================================================
  // CREATE TASK
  // =====================================================

  createContent: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 35,
  },

  createHero: {
    height: 205,

    borderRadius: 27,

    paddingHorizontal: 20,
    paddingVertical: 20,

    justifyContent: 'flex-end',

    overflow: 'hidden',

    marginBottom: 12,
  },

  createHeroIcon: {
    position: 'absolute',

    top: 18,
    right: 18,

    width: 38,
    height: 38,

    borderRadius: 19,

    backgroundColor: 'rgba(255,255,255,0.68)',

    justifyContent: 'center',
    alignItems: 'center',
  },

  createHeroTitle: {
    color: '#FFFFFF',

    fontSize: 28,
    lineHeight: 30,

    fontWeight: '500',

    letterSpacing: -0.8,
  },

  createHeroDescription: {
    color: 'rgba(255,255,255,0.80)',

    fontSize: 10,
    lineHeight: 14,

    maxWidth: 250,

    marginTop: 8,
  },

  formCard: {
    backgroundColor: '#F9F9F7',

    borderRadius: 24,

    padding: 17,

    borderWidth: 1,
    borderColor: '#E8E8E5',
  },

  formCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    marginBottom: 16,
  },

  formCardTitle: {
    color: '#333330',

    fontSize: 16,
    fontWeight: '600',
  },

  formHeaderIcon: {
    width: 35,
    height: 35,

    borderRadius: 17.5,

    backgroundColor: '#EEEEEB',

    alignItems: 'center',
    justifyContent: 'center',
  },

  // =====================================================
  // FORM
  // =====================================================

  formGroup: {
    marginBottom: 13,
  },

  textArea: {
    minHeight: 100,

    backgroundColor: '#EFEFED',

    borderRadius: 16,

    borderWidth: 1,
    borderColor: '#E7E7E4',

    paddingHorizontal: 13,
    paddingVertical: 12,

    color: '#333330',

    fontSize: 11,

    textAlignVertical: 'top',
  },

  pickerContainer: {
    minHeight: 48,

    borderRadius: 16,

    overflow: 'hidden',

    justifyContent: 'center',

    backgroundColor: '#EFEFED',

    borderWidth: 1,
    borderColor: '#E7E7E4',
  },

  secondaryButton: {
    height: 40,

    borderRadius: 20,

    backgroundColor: '#EEEEEB',

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 8,
  },

  secondaryButtonText: {
    color: '#50504D',
    fontSize: 10,
    fontWeight: '500',
  },

  // =====================================================
  // EMPTY
  // =====================================================

  emptyCard: {
    backgroundColor: '#F9F9F7',

    borderRadius: 22,

    paddingVertical: 25,
    paddingHorizontal: 20,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#E8E8E5',
  },

  emptyIcon: {
    width: 50,
    height: 50,

    borderRadius: 17,

    backgroundColor: '#F4E7E1',

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 10,
  },

  emptyTitle: {
    color: '#343431',

    fontSize: 14,
    fontWeight: '600',
  },

  emptyText: {
    color: '#999996',

    fontSize: 10,
    lineHeight: 14,

    textAlign: 'center',

    marginTop: 4,
  },

  emptyButton: {
    height: 36,

    paddingHorizontal: 15,

    borderRadius: 18,

    backgroundColor: '#30302F',

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 14,
  },

  emptyButtonText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '500',
  },

  // =====================================================
  // COMPATIBILIDADE
  // =====================================================

  card: {
    backgroundColor: '#F9F9F7',

    borderRadius: 21,

    padding: 15,

    borderWidth: 1,
    borderColor: '#E9E9E6',

    marginBottom: 9,
  },

  pageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    color: '#30302E',
    fontSize: 25,
    fontWeight: '500',
    letterSpacing: -0.7,
  },

  subtitle: {
    color: '#999996',
    fontSize: 10,
    marginTop: 3,
  },

  smallButton: {
    height: 36,

    paddingHorizontal: 14,

    borderRadius: 18,

    backgroundColor: '#30302F',

    justifyContent: 'center',
  },

  smallButtonText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '500',
  },
});

export default styles;