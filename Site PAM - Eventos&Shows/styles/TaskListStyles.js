import { StyleSheet, Platform } from 'react-native';
import { COLORS, SHADOWS } from './CommonStyles';

export const TaskListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 20,
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: COLORS.textHeader,
    letterSpacing: -1,
  },
  listContent: {
    padding: 20,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    ...SHADOWS.soft,
  },
  cardDone: {
    opacity: 0.6,
    backgroundColor: '#F1F5F9',
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.textMain,
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 30,
    width: 64,
    height: 64,
    borderRadius: 22,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.medium,
  },
});