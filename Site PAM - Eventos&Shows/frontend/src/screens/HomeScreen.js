import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Animated,
  Dimensions,
  FlatList,
  PanResponder,
  Linking,
} from 'react-native';
import styles from './styles/home/HomeStyles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// ─── DATA ────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: '⚡',
    title: 'Velocidade Zero',
    desc: 'Ações instantâneas sem latência. Seu fluxo nunca para.',
    accent: '#6d6d6d',
    bg: '#EFF6FF',
  },
  {
    icon: '🌙',
    title: 'Modo Foco',
    desc: 'Interface otimizada para sessões longas. Sem distrações.',
    accent: '#6d6d6d',
    bg: '#F5F3FF',
  },
  {
    icon: '🔒',
    title: 'Local-First',
    desc: 'Seus dados ficam no seu dispositivo. Sempre.',
    accent: '#6d6d6d',
    bg: '#ECFDF5',
  },
  {
    icon: '🧩',
    title: 'Contextos',
    desc: 'Organize por projetos, áreas e prioridades.',
    accent: '#D6d6d6d',
    bg: '#FFFBEB',
  },
];

const TESTIMONIALS = [
  {
    name: 'Ana Luiza M.',
    role: 'Product Designer',
    text: 'O Vortex mudou como eu trabalho. Tudo no lugar certo, no momento certo.',
    avatar: 'AL',
    rating: 5,
  },
  {
    name: 'Rodrigo Ferreira',
    role: 'Dev Full Stack',
    text: 'Finalmente um gerenciador que não me atrapalha. Rápido e sem frescura.',
    avatar: 'RF',
    rating: 5,
  },
  {
    name: 'Carla Mendez',
    role: 'CEO, Studio Loop',
    text: 'Toda minha equipe migrou. A diferença de produtividade é absurda.',
    avatar: 'CM',
    rating: 5,
  },
];

const STATS = [
  { value: '50k+', label: 'Usuários ativos' },
  { value: '98%', label: 'Satisfação' },
  { value: '4.9★', label: 'Nota na store' },
  { value: '<50ms', label: 'Latência média' },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

const StarRating = ({ count }) => (
  <View style={{ flexDirection: 'row', marginBottom: 10 }}>
    {Array.from({ length: count }).map((_, i) => (
      <Text key={i} style={{ color: '#F59E0B', fontSize: 14 }}>★</Text>
    ))}
  </View>
);

const Avatar = ({ initials, size = 44, color = '#2563EB' }) => (
  <View style={{
    width: size, height: size, borderRadius: size / 2,
    backgroundColor: color + '20',
    alignItems: 'center', justifyContent: 'center', marginRight: 12,
  }}>
    <Text style={{ color, fontWeight: '700', fontSize: size * 0.32 }}>{initials}</Text>
  </View>
);

// ─── SECTION: TESTIMONIAL SLIDER ─────────────────────────────────────────────

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const flatRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (index + 1) % TESTIMONIALS.length;
      setIndex(next);
      flatRef.current?.scrollToIndex({ index: next, animated: true });
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  const avatarColors = ['#6d6d6d', '#6d6d6d', '#6d6d6d'];

  return (
    <View style={styles.sliderSection}>
      <Text style={styles.sectionTag}>CLIENTES</Text>
      <Text style={styles.sectionTitle}>Quem já usa, ama.</Text>

      <FlatList
        ref={flatRef}
        data={TESTIMONIALS}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => String(i)}
        onMomentumScrollEnd={(e) => {
          const newIndex = Math.round(e.nativeEvent.contentOffset.x / (SCREEN_WIDTH - 40));
          setIndex(newIndex);
        }}
        renderItem={({ item, index: i }) => (
          <View style={[styles.testimonialCard, { width: SCREEN_WIDTH - 40 }]}>
            <StarRating count={item.rating} />
            <Text style={styles.testimonialText}>"{item.text}"</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
              <Avatar initials={item.avatar} color={avatarColors[i % avatarColors.length]} />
              <View>
                <Text style={styles.testimonialName}>{item.name}</Text>
                <Text style={styles.testimonialRole}>{item.role}</Text>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.dotRow}>
        {TESTIMONIALS.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, i === index && styles.dotActive]}
          />
        ))}
      </View>
    </View>
  );
};

// ─── SECTION: STATS BAR ──────────────────────────────────────────────────────

const StatsBar = () => (
  <View style={styles.statsBar}>
    {STATS.map((s, i) => (
      <View key={i} style={styles.statItem}>
        <Text style={styles.statValue}>{s.value}</Text>
        <Text style={styles.statLabel}>{s.label}</Text>
      </View>
    ))}
  </View>
);

// ─── SECTION: FEATURES ───────────────────────────────────────────────────────

const FeaturesSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTag}>SISTEMA</Text>
    <Text style={styles.sectionTitle}>Simplicidade é a última sofisticação.</Text>
    <Text style={styles.sectionSubtitle}>Cada detalhe pensado para o seu fluxo.</Text>

    <View style={styles.featureGrid}>
      {FEATURES.map((f, i) => (
        <View
          key={i}
          style={[styles.featureCard, { borderLeftColor: f.accent, borderLeftWidth: 3 }]}
        >
          <View style={[styles.iconBox, { backgroundColor: f.bg }]}>
            <Text style={styles.iconText}>{f.icon}</Text>
          </View>
          <Text style={[styles.featureTitle, { color: '#0f172a' }]}>{f.title}</Text>
          <Text style={styles.featureText}>{f.desc}</Text>
        </View>
      ))}
    </View>
  </View>
);

// ─── SECTION: FAQ ────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  { q: 'Posso usar offline?', a: 'Sim. O Vortex é local-first. Tudo funciona sem internet.' },
  { q: 'Tem app para desktop?', a: 'Em breve. iOS, Android e Web já estão disponíveis.' },
  { q: 'Posso cancelar quando quiser?', a: 'Sim. Sem multa, sem burocracia. Cancele em 1 clique.' },
  { q: 'Meus dados ficam seguros?', a: 'Seus dados são seus. Nunca vendemos ou compartilhamos.' },
];

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTag}>FAQ</Text>
      <Text style={styles.sectionTitle}>Dúvidas frequentes.</Text>

      {FAQ_ITEMS.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => setOpen(open === i ? null : i)}
          style={styles.faqItem}
          activeOpacity={0.75}
        >
          <View style={styles.faqHeader}>
            <Text style={styles.faqQuestion}>{item.q}</Text>
            <Text style={[styles.faqChevron, open === i && { transform: [{ rotate: '180deg' }] }]}>
              ▾
            </Text>
          </View>
          {open === i && (
            <Text style={styles.faqAnswer}>{item.a}</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

// ─── SECTION: MOCKUP ─────────────────────────────────────────────────────────

const MockupCard = () => (
  <View style={styles.mockupCard}>
    <View style={styles.mockupHeader}>
      <View style={[styles.mockupDot, { backgroundColor: '#FF5F57' }]} />
      <View style={[styles.mockupDot, { backgroundColor: '#FFBD2E', marginHorizontal: 8 }]} />
      <View style={[styles.mockupDot, { backgroundColor: '#28CA41' }]} />
      <View style={styles.mockupSearchBar} />
    </View>
    <View style={styles.mockupBody}>
      <View style={styles.mockupSidebar}>
        {['Hoje', 'Semana', 'Projetos', 'Tags'].map((label, i) => (
          <View key={i} style={[styles.mockupSidebarItem, i === 0 && styles.mockupSidebarActive]}>
            <View style={[styles.mockupSidebarDot, i === 0 && { backgroundColor: '#2563EB' }]} />
            <View style={[styles.mockupSidebarLine, { width: `${60 + i * 10}%` }]} />
          </View>
        ))}
      </View>
      <View style={styles.mockupMain}>
        <View style={styles.mockupTaskGroup}>
          <View style={styles.mockupGroupLabel} />
          {[80, 60, 90].map((w, i) => (
            <View key={i} style={styles.mockupTaskRow}>
              <View style={[styles.mockupCheckbox, i === 0 && { backgroundColor: '#2563EB', borderColor: '#2563EB' }]} />
              <View style={[styles.mockupTaskLine, { width: `${w}%`, opacity: i === 0 ? 0.4 : 1 }]} />
              {i === 1 && <View style={styles.mockupTag} />}
            </View>
          ))}
        </View>
        <View style={styles.mockupTaskGroup}>
          <View style={[styles.mockupGroupLabel, { width: '40%' }]} />
          {[70, 85].map((w, i) => (
            <View key={i} style={styles.mockupTaskRow}>
              <View style={styles.mockupCheckbox} />
              <View style={[styles.mockupTaskLine, { width: `${w}%` }]} />
            </View>
          ))}
        </View>
      </View>
    </View>
  </View>
);

// ─── MAIN SCREEN ─────────────────────────────────────────────────────────────

export default function HomeScreen({ navigation }) {
  const scrollRef = useRef(null);
  const headerOpacity = useRef(new Animated.Value(0)).current;

  const handleScroll = useCallback((event) => {
    const y = event.nativeEvent.contentOffset.y;
    const newOpacity = Math.min(y / 80, 1);
    headerOpacity.setValue(newOpacity);
  }, [headerOpacity]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fb" />

      {/* ── NAVBAR ── */}
      <Animated.View style={[styles.navbar, { backgroundColor: headerOpacity.interpolate({ inputRange: [0, 1], outputRange: ['rgba(248,249,251,0)', 'rgba(255,255,255,0.97)'] }) }]}>
        <Text style={styles.brand}>VORTEX<Text style={{ color: '#2563EB' }}>.</Text></Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navTextButton}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navPrimaryButton} onPress={() => navigation.navigate('RegisterStep1')} activeOpacity={0.85}>
            <Text style={styles.navPrimaryText}>Começar</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {/* ── HERO ── */}
        <View style={styles.heroSection}>
          <View style={styles.badge}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>Agora em Early Access</Text>
          </View>

          <Text style={styles.heroTitle}>
            Trabalhe na{'\n'}
            <Text style={styles.heroTitleHighlight}>velocidade{'\n'}do pensamento.</Text>
          </Text>

          <Text style={styles.heroSubtitle}>
            O gerenciador de tarefas que entende seu fluxo.{'\n'}
            Minimalista por fora, potente por dentro.
          </Text>

          <View style={styles.heroActions}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => navigation.navigate('RegisterStep1')}
              activeOpacity={0.85}
            >
              <Text style={styles.primaryButtonText}>Começar gratuitamente</Text>
              <Text style={styles.primaryButtonIcon}>→</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => Linking.openURL('https://vortex.app/demo')}
              activeOpacity={0.75}
            >
              <Text style={styles.secondaryButtonText}>Ver demo</Text>
            </TouchableOpacity>
          </View>

          <MockupCard />
        </View>

        {/* ── STATS ── */}
        <StatsBar />

        {/* ── FEATURES ── */}
        <FeaturesSection />

        {/* ── TESTIMONIALS ── */}
        <TestimonialSlider />

        {/* ── FAQ ── */}
        <FAQSection />

        {/* ── CTA FINAL ── */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Pronto para turbinar sua produtividade?</Text>
          <Text style={styles.ctaSubtitle}>Junte-se a mais de 50 mil pessoas que já usam o Vortex.</Text>
          <TouchableOpacity style={styles.ctaButton} activeOpacity={0.85} onPress={() => navigation.navigate('RegisterStep1')}>
            <Text style={styles.ctaButtonText}>Criar conta grátis →</Text>
          </TouchableOpacity>
        </View>

        {/* ── FOOTER ── */}
        <View style={styles.footer}>
          <View style={styles.footerTop}>
            <View>
              <Text style={styles.footerBrand}>VORTEX<Text style={{ color: '#2563EB' }}>.</Text></Text>
              <Text style={styles.footerTagline}>Inovação em cada pixel.</Text>
            </View>
            <View style={styles.footerLinks}>
              {['Produto', 'Empresa', 'Blog', 'Suporte'].map((link) => (
                <TouchableOpacity key={link}>
                  <Text style={styles.footerLink}>{link}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.footerDivider} />
          <View style={styles.footerBottom}>
            <Text style={styles.copyright}>© 2026 Vortex Studio</Text>
            <View style={{ flexDirection: 'row', gap: 16 }}>
              <Text style={styles.legalText}>Privacidade</Text>
              <Text style={styles.legalText}>Termos</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}