import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const BLUE_PRIMARY = '#2563EB'; // Azul vibrante da logo e botão

export default StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 40,
  },
  /* --- LOGO --- */
  logoWrap: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logoIcon: {
    width: 75,
    height: 75,
    borderRadius: 22,
    backgroundColor: BLUE_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  logoText: {
    fontSize: 34,
    fontWeight: '700',
    color: '#1F2937',
  },
  logoHighlight: {
    color: BLUE_PRIMARY,
  },
  tagline: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 6,
  },
  /* --- FORMULÁRIO --- */
  formContainer: {
    width: '100%',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    borderRadius: 16,
    height: 60,
    paddingHorizontal: 18,
    marginBottom: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  /* --- OPÇÕES --- */
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 4,
  },
  rememberBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: BLUE_PRIMARY,
    borderColor: BLUE_PRIMARY,
  },
  rememberText: {
    fontSize: 14,
    color: '#6B7280',
  },
  forgotText: {
    fontSize: 14,
    color: BLUE_PRIMARY,
    fontWeight: '600',
  },
  /* --- BOTÕES --- */
  loginBtn: {
    height: 60,
    borderRadius: 16,
    backgroundColor: BLUE_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: BLUE_PRIMARY,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  loginBtnDisabled: {
    opacity: 0.6,
  },
  loginBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  /* --- DIVIDER --- */
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#F3F4F6',
  },
  dividerText: {
    paddingHorizontal: 15,
    fontSize: 13,
    color: '#9CA3AF',
  },
  /* --- SOCIAIS --- */
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  socialBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    backgroundColor: '#FFFFFF',
    gap: 10,
  },
  socialBtnText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
  },
  /* --- FOOTER --- */
  footer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 15,
    color: '#6B7280',
  },
  footerLink: {
    fontSize: 15,
    color: BLUE_PRIMARY,
    fontWeight: '700',
  },
 /* --- ONDAS (CORRIGIDO) --- */
  waveContainer: {
    position: 'absolute', // Mudado de relative para absolute
    bottom: 0,            // Cola no fundo da tela
    left: 0,
    right: 0,
    height: 200,          // Altura fixa para o desenho
    zIndex: -1,           // Garante que fique ATRÁS do texto e botões
  },

  waveBack: {
    position: 'absolute',
    bottom:-50,            // Ajustado para colar na base
    left: 0,
    width: '100%',
    height: '100%',
  },

  waveFront: {
    position: 'absolute',
    bottom: -55,            // Ajustado para colar na base
    left: 0,
    width: '100%',
    height: '100%',
  },
});