import { StyleSheet } from 'react-native';
import { COLORS, SHADOWS } from './CommonStyles';

export const TaskDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.card,
  },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    paddingHorizontal: 25,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginBottom: 20,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.textHeader,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
    color: COLORS.textMain,
    marginBottom: 30,
  },
  infoGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 30,
  },
  infoBox: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.textLight,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textHeader,
    marginTop: 4,
  },
  footer: {
    padding: 25,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  btnComplete: {
    backgroundColor: COLORS.textHeader,
    height: 58,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    ...SHADOWS.soft,
  },
});