import {
  Platform,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',

    backgroundColor: '#F5F6F5',
  },

  scroll: {
    flex: 1,
    width: '100%',
  },

  content: {
    width: '100%',
    flexGrow: 1,

    paddingTop:
      Platform.OS === 'ios'
        ? 22
        : 24,

    paddingHorizontal: 21,

    paddingBottom: 125,
  },

  // HEADER

  header: {
    width: '100%',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent:
      'space-between',

    marginBottom: 22,
  },

  hello: {
    color: '#111111',

    fontSize: 29,

    lineHeight: 33,

    fontWeight: '700',

    letterSpacing: -1,
  },

  welcome: {
    color: '#858B92',

    fontSize: 13,

    marginTop: 3,
  },

  // SEARCH

  searchRow: {
    width: '100%',

    flexDirection: 'row',

    alignItems: 'center',

    gap: 10,

    marginBottom: 26,
  },

  searchBox: {
    flex: 1,

    height: 58,

    borderRadius: 29,

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',

    alignItems: 'center',

    gap: 12,

    paddingHorizontal: 18,

    borderWidth: 1,

    borderColor: '#ECECE9',
  },

  searchInput: {
    flex: 1,

    height: '100%',

    paddingVertical: 0,

    color: '#242424',

    fontSize: 14.5,
  },

  searchFilter: {
    width: 58,
    height: 58,

    borderRadius: 29,

    backgroundColor: '#242728',

    alignItems: 'center',

    justifyContent: 'center',
  },

  // FILTERS

  sectionHeadline: {
    color: '#171717',

    fontSize: 21,

    fontWeight: '700',

    letterSpacing: -0.55,

    marginBottom: 13,
  },

  filters: {
    gap: 8,

    paddingRight: 20,

    marginBottom: 21,
  },

  filterChip: {
    height: 42,

    borderRadius: 21,

    paddingHorizontal: 18,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor: '#ECECE9',

    alignItems: 'center',

    justifyContent: 'center',
  },

  filterChipActive: {
    backgroundColor: '#242728',

    borderColor: '#242728',
  },

  filterText: {
    color: '#777E86',

    fontSize: 11.5,

    fontWeight: '500',
  },

  filterTextActive: {
    color: '#FFFFFF',

    fontWeight: '600',
  },

  // FEATURED CARDS

  featuredList: {
    paddingRight: 21,

    gap: 12,

    marginBottom: 28,
  },

  featuredCard: {
    width: 314,

    height: 360,

    borderRadius: 29,

    overflow: 'hidden',

    position: 'relative',

    marginRight: 2,

    shadowColor: '#000000',

    shadowOpacity: 0.16,

    shadowRadius: 18,

    shadowOffset: {
      width: 0,
      height: 9,
    },

    elevation: 7,
  },

  featuredImage: {
    borderRadius: 29,
  },

  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
  },

  cardTop: {
    position: 'absolute',

    left: 18,
    right: 18,
    top: 18,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent:
      'space-between',

    zIndex: 4,
  },

  cardStatus: {
    minHeight: 30,

    paddingHorizontal: 11,

    borderRadius: 15,

    backgroundColor:
      'rgba(20,20,20,0.55)',

    flexDirection: 'row',

    alignItems: 'center',

    gap: 6,
  },

  cardStatusDot: {
    width: 6,
    height: 6,

    borderRadius: 3,
  },

  dotActive: {
    backgroundColor: '#FF7456',
  },

  dotDone: {
    backgroundColor: '#65D59A',
  },

  cardStatusText: {
    color: '#FFFFFF',

    fontSize: 9,

    fontWeight: '600',
  },

  cardHeart: {
    width: 43,
    height: 43,

    borderRadius: 22,

    backgroundColor:
      'rgba(30,30,30,0.30)',

    borderWidth: 1,

    borderColor:
      'rgba(255,255,255,0.34)',

    alignItems: 'center',

    justifyContent: 'center',
  },

  cardBottom: {
    position: 'absolute',

    left: 19,
    right: 19,
    bottom: 18,

    zIndex: 4,
  },

  cardEyebrow: {
    color:
      'rgba(255,255,255,0.72)',

    fontSize: 8,

    fontWeight: '700',

    letterSpacing: 0.7,

    textTransform: 'uppercase',

    marginBottom: 6,
  },

  cardTitle: {
    color: '#FFFFFF',

    fontSize: 25,

    lineHeight: 27,

    fontWeight: '700',

    letterSpacing: -0.8,
  },

  cardDescription: {
    color:
      'rgba(255,255,255,0.76)',

    fontSize: 10,

    lineHeight: 14,

    marginTop: 6,
  },

  continueButton: {
    width: '100%',

    height: 52,

    borderRadius: 26,

    marginTop: 14,

    backgroundColor:
      'rgba(30,32,33,0.93)',

    alignItems: 'center',

    justifyContent: 'center',

    position: 'relative',
  },

  continueButtonText: {
    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: '600',
  },

  continueArrow: {
    position: 'absolute',

    right: 6,

    width: 40,
    height: 40,

    borderRadius: 20,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',

    justifyContent: 'center',
  },

  buttonPressed: {
    opacity: 0.88,

    transform: [
      {
        scale: 0.99,
      },
    ],
  },

  // PLACEHOLDER IA

  placeholderCircleOne: {
    position: 'absolute',

    width: 220,
    height: 220,

    borderRadius: 110,

    right: -80,
    top: -90,

    backgroundColor:
      'rgba(255,255,255,0.09)',
  },

  placeholderCircleTwo: {
    position: 'absolute',

    width: 180,
    height: 180,

    borderRadius: 90,

    left: -100,
    top: 40,

    backgroundColor:
      'rgba(255,255,255,0.06)',
  },

  imageLoading: {
    position: 'absolute',

    top: 105,

    left: 0,
    right: 0,

    alignItems: 'center',
  },

  imageLoadingText: {
    color:
      'rgba(255,255,255,0.78)',

    fontSize: 9,

    marginTop: 8,
  },

  // TASKS HEADER

  tasksHeader: {
    width: '100%',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent:
      'space-between',

    marginBottom: 12,
  },

  tasksTitle: {
    color: '#171717',

    fontSize: 20,

    fontWeight: '700',

    letterSpacing: -0.5,
  },

  tasksSubtitle: {
    color: '#939893',

    fontSize: 9,

    marginTop: 2,
  },

  addTaskButton: {
    height: 36,

    borderRadius: 18,

    backgroundColor: '#242728',

    paddingHorizontal: 12,

    flexDirection: 'row',

    alignItems: 'center',

    gap: 5,
  },

  addTaskText: {
    color: '#FFFFFF',

    fontSize: 9.5,

    fontWeight: '600',
  },

  // UMA LISTA, NÃO VÁRIOS CARDS

  tasksPanel: {
    width: '100%',

    borderRadius: 23,

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 15,

    overflow: 'hidden',

    borderWidth: 1,

    borderColor: '#EAEAE7',
  },

  taskRow: {
    width: '100%',

    minHeight: 88,

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 13,

    gap: 12,
  },

  taskRowPressed: {
    opacity: 0.72,
  },

  taskIcon: {
    width: 44,
    height: 44,

    borderRadius: 14,

    backgroundColor: '#FFEAE4',

    alignItems: 'center',

    justifyContent: 'center',
  },

  taskIconDone: {
    backgroundColor: '#EDF2F3',
  },

  taskContent: {
    flex: 1,

    minWidth: 0,
  },

  taskTitleRow: {
    width: '100%',

    flexDirection: 'row',

    alignItems: 'center',

    gap: 7,
  },

  taskTitle: {
    flex: 1,

    color: '#202020',

    fontSize: 13,

    fontWeight: '700',
  },

  statusBadge: {
    minHeight: 23,

    borderRadius: 12,

    paddingHorizontal: 8,

    alignItems: 'center',

    justifyContent: 'center',
  },

  statusProgress: {
    backgroundColor: '#FFEAE4',
  },

  statusPending: {
    backgroundColor: '#EEF1F3',
  },

  statusDone: {
    backgroundColor: '#EDF2F3',
  },

  statusText: {
    color: '#E15A41',

    fontSize: 7.5,

    fontWeight: '600',
  },

  statusTextDone: {
    color: '#61737B',
  },

  taskDescription: {
    color: '#8A9097',

    fontSize: 9.5,

    marginTop: 4,
  },

  taskMeta: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 7,

    gap: 6,
  },

  avatarMini: {
    width: 22,
    height: 22,

    borderRadius: 11,

    backgroundColor: '#F4957A',

    alignItems: 'center',

    justifyContent: 'center',
  },

  avatarMiniText: {
    color: '#FFFFFF',

    fontSize: 6.5,

    fontWeight: '700',
  },

  developerName: {
    flex: 1,

    color: '#8B9197',

    fontSize: 8.5,
  },

  moreButton: {
    width: 31,
    height: 31,

    alignItems: 'center',

    justifyContent: 'center',
  },

  rowDivider: {
    width: '100%',

    height: 1,

    backgroundColor: '#EFEFEC',
  },

  rowActions: {
    flexDirection: 'row',

    gap: 7,

    paddingBottom: 12,
  },

  editAction: {
    height: 32,

    borderRadius: 16,

    paddingHorizontal: 11,

    backgroundColor: '#F1F1EF',

    flexDirection: 'row',

    alignItems: 'center',

    gap: 5,
  },

  editActionText: {
    color: '#383836',

    fontSize: 8.5,

    fontWeight: '500',
  },

  deleteAction: {
    height: 32,

    borderRadius: 16,

    paddingHorizontal: 11,

    backgroundColor: '#FFF0EC',

    flexDirection: 'row',

    alignItems: 'center',

    gap: 5,
  },

  deleteActionText: {
    color: '#CE5542',

    fontSize: 8.5,

    fontWeight: '500',
  },

  // EMPTY

  emptyFeatured: {
    width: '100%',

    minHeight: 190,

    borderRadius: 26,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',

    justifyContent: 'center',

    marginBottom: 27,

    padding: 25,
  },

  emptyFeaturedTitle: {
    color: '#252525',

    fontSize: 14,

    fontWeight: '700',

    marginTop: 9,
  },

  emptyFeaturedText: {
    color: '#8D928E',

    fontSize: 9.5,

    marginTop: 3,
  },

  emptyFeaturedButton: {
    height: 38,

    paddingHorizontal: 16,

    borderRadius: 19,

    backgroundColor: '#242728',

    alignItems: 'center',

    justifyContent: 'center',

    marginTop: 14,
  },

  emptyFeaturedButtonText: {
    color: '#FFFFFF',

    fontSize: 9.5,

    fontWeight: '600',
  },

  emptyTasks: {
    width: '100%',

    minHeight: 150,

    borderRadius: 23,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',

    justifyContent: 'center',

    padding: 20,
  },

  emptyTasksTitle: {
    color: '#252525',

    fontSize: 13,

    fontWeight: '700',

    marginTop: 8,
  },

  emptyTasksText: {
    color: '#919691',

    fontSize: 9,

    marginTop: 3,
  },
});

export default styles;