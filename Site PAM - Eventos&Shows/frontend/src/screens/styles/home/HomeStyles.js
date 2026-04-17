import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const shadow = Platform.select({
  ios: {
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
  },
  android: { elevation: 5 },
});

const shadowStrong = Platform.select({
  ios: {
    shadowColor: '#0f172a',
    shadowOpacity: 0.14,
    shadowRadius: 32,
    shadowOffset: { width: 0, height: 16 },
  },
  android: { elevation: 10 },
});

const styles = StyleSheet.create({

  // ─── ROOT ────────────────────────────────────────────────────────────────
  container: {
    flex: 1,
    backgroundColor: '#f8f9fb',
  },

  // ─── NAVBAR ──────────────────────────────────────────────────────────────
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(15,23,42,0.05)',
    ...shadow,
  },
  brand: {
    color: '#0f172a',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  navTextButton: {
    color: '#475569',
    fontSize: 14,
    fontWeight: '600',
  },
  navPrimaryButton: {
    backgroundColor: '#0f172a',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
  },
  navPrimaryText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },

  // ─── SCROLL ───────────────────────────────────────────────────────────────
  scrollContent: {
    paddingTop: 72,
    paddingBottom: 0,
  },

  // ─── HERO ─────────────────────────────────────────────────────────────────
  heroSection: {
    paddingHorizontal: 20,
    paddingTop: 48,
    paddingBottom: 40,
    backgroundColor: '#f8f9fb',
  },
  badge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#BFDBFE',
    gap: 8,
  },
  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#2563EB',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#1D4ED8',
    letterSpacing: 0.3,
  },
  heroTitle: {
    fontSize: 42,
    lineHeight: 50,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 20,
    letterSpacing: -1.5,
  },
  heroTitleHighlight: {
    color: '#1042ad',
  },
  heroSubtitle: {
    fontSize: 16,
    lineHeight: 27,
    color: '#64748b',
    marginBottom: 32,
    fontWeight: '400',
  },
  heroActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 32,
  },
  primaryButton: {
    backgroundColor: '#0f172a',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    ...shadow,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
  primaryButtonIcon: {
    color: '#94a3b8',
    fontSize: 16,
  },
  secondaryButton: {
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    backgroundColor: '#fff',
    ...shadow,
  },
  secondaryButtonText: {
    color: '#292929',
    fontSize: 15,
    fontWeight: '600',
  },

  // ─── MOCKUP ───────────────────────────────────────────────────────────────
  mockupCard: {
    borderRadius: 20,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    ...shadowStrong,
  },
  mockupHeader: {
    height: 48,
    backgroundColor: '#F8FAFC',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  mockupDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  mockupSearchBar: {
    flex: 1,
    marginLeft: 14,
    height: 24,
    borderRadius: 6,
    backgroundColor: '#F1F5F9',
  },
  mockupBody: {
    flexDirection: 'row',
    height: 200,
  },
  mockupSidebar: {
    width: 90,
    backgroundColor: '#FAFAFA',
    borderRightWidth: 1,
    borderRightColor: '#F1F5F9',
    padding: 12,
    gap: 6,
  },
  mockupSidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  mockupSidebarActive: {
    backgroundColor: '#EFF6FF',
  },
  mockupSidebarDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#CBD5E1',
  },
  mockupSidebarLine: {
    height: 7,
    borderRadius: 4,
    backgroundColor: '#E2E8F0',
  },
  mockupMain: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  mockupTaskGroup: {
    gap: 8,
  },
  mockupGroupLabel: {
    width: '55%',
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E2E8F0',
    marginBottom: 4,
  },
  mockupTaskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  mockupCheckbox: {
    width: 16,
    height: 16,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
  },
  mockupTaskLine: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E2E8F0',
    flex: 1,
  },
  mockupTag: {
    width: 32,
    height: 16,
    borderRadius: 4,
    backgroundColor: '#DBEAFE',
  },

  // ─── STATS BAR ────────────────────────────────────────────────────────────
  statsBar: {
    flexDirection: 'row',
    backgroundColor: '#0f172a',
    paddingVertical: 28,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  statLabel: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  // ─── SECTIONS ─────────────────────────────────────────────────────────────
  section: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#f8f9fb',
  },
  sectionTag: {
    fontSize: 11,
    fontWeight: '800',
    color: '#2563EB',
    letterSpacing: 2,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0f172a',
    letterSpacing: -0.8,
    marginBottom: 8,
    lineHeight: 36,
  },
  sectionSubtitle: {
    fontSize: 15,
    color: '#64748b',
    marginBottom: 28,
    lineHeight: 24,
  },

  // ─── FEATURE CARDS ────────────────────────────────────────────────────────
  featureGrid: {
    gap: 14,
    marginTop: 8,
  },
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 22,
    ...shadow,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  iconText: {
    fontSize: 22,
  },
  featureTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#64748b',
  },

  // ─── TESTIMONIALS / SLIDER ────────────────────────────────────────────────
  sliderSection: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  testimonialCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 24,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  testimonialText: {
    fontSize: 16,
    lineHeight: 27,
    color: '#1E293B',
    fontWeight: '500',
    fontStyle: 'italic',
  },
  testimonialName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
  },
  testimonialRole: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 2,
    fontWeight: '500',
  },
  dotRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 20,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#CBD5E1',
  },
  dotActive: {
    width: 20,
    backgroundColor: '#2563EB',
  },

  // ─── PRICING ──────────────────────────────────────────────────────────────
  pricingGrid: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 32,
  },
  pricingCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    ...shadow,
    overflow: 'hidden',
    flex: 1,
  },
  pricingCardHighlighted: {
    borderWidth: 2,
    borderColor: '#2563EB',
  },
  popularBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#2563EB',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderBottomLeftRadius: 14,
  },
  popularBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  pricingPlan: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0f172a',
  },
  pricingPriceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 8,
    marginBottom: 20,
  },
  pricingPrice: {
    fontSize: 32,
    fontWeight: '500',
    color: '#0f172a',
    letterSpacing: -1,
  },
  pricingPeriod: {
    fontSize: 14,
    color: '#94A3B8',
    fontWeight: '500',
    marginLeft: 2,
    marginBottom: 2,
  },
  pricingFeatures: {
    marginBottom: 24,
  },
  pricingFeature: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 8,
  },
  perkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  perkCheck: {
    fontSize: 14,
    fontWeight: '800',
    color: '#CBD5E1',
  },
  perkText: {
    fontSize: 14,
    color: '#475569',
  },
  planButton: {
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    backgroundColor: '#fff',
  },
  planButtonPrimary: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  planButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0f172a',
  },

  // ─── FAQ ──────────────────────────────────────────────────────────────────
  faqItem: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0f172a',
    flex: 1,
    marginRight: 12,
  },
  faqChevron: {
    fontSize: 18,
    color: '#94A3B8',
  },
  faqAnswer: {
    fontSize: 14,
    lineHeight: 23,
    color: '#64748b',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },

  // ─── CTA FINAL ────────────────────────────────────────────────────────────
  ctaSection: {
    backgroundColor: '#0f172a',
    margin: 20,
    borderRadius: 24,
    padding: 36,
    alignItems: 'center',
    ...shadowStrong,
  },
  ctaTitle: {
    fontSize: 26,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: -0.8,
    marginBottom: 12,
    lineHeight: 34,
  },
  ctaSubtitle: {
    fontSize: 15,
    color: '#94A3B8',
    textAlign: 'center',
    marginBottom: 28,
    lineHeight: 23,
  },
  ctaButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
  },
  ctaButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },

  // ─── FOOTER ───────────────────────────────────────────────────────────────
  footer: {
    backgroundColor: '#fff',
    paddingTop: 36,
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  footerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 28,
  },
  footerBrand: {
    color: '#0f172a',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  footerTagline: {
    color: '#94A3B8',
    fontSize: 13,
    marginTop: 4,
    fontWeight: '400',
  },
  footerLinks: {
    gap: 12,
    alignItems: 'flex-end',
  },
  footerLink: {
    color: '#64748b',
    fontSize: 14,
    fontWeight: '500',
  },
  footerDivider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginBottom: 20,
  },
  footerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  copyright: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '500',
  },
  legalText: {
    color: '#94A3B8',
    fontSize: 12,
  },
});

export default styles;