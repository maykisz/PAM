import { StyleSheet, Platform } from 'react-native';

const COLORS = {
  background: '#F9FAFB', // Off-white para profundidade
  surface: '#FFFFFF',    // Branco puro para o Card
  border: '#E5E7EB',     // Cinza neutro para divisórias e bordas
  textPrimary: '#111827',// Preto "Onix" para legibilidade
  textSecondary: '#6B7280',// Cinza para rótulos e descrição
  buttonPrimary: '#000000',// Preto sólido (robusto)
  inputBg: '#F3F4F6',    // Cinza bem claro para o fundo dos inputs
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  // Cabeçalho limpo (substitui a logo)
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '600',
    color: COLORS.textPrimary,
    letterSpacing: -0.5,
  },
  instructionText: {
    fontSize: 15,
    color: COLORS.textSecondary,
    marginTop: 6,
  },

  // Card central (O container robusto da imagem)
  loginCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 24,
    padding: 28,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.03,
        shadowRadius: 10,
      },
      android: {
        elevation: 2,
      },
    }),
  },

  // Botão Google (estilo Outline profissional)
  googleButton: {
    flexDirection: 'row',
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  googleButtonText: {
    fontSize: 15,
    color: COLORS.textPrimary,
    fontWeight: '500',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },
  dividerText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginHorizontal: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  // Inputs robustos
  inputGroup: {
    gap: 18,
  },
  inputContainer: {
    width: '100%',
  },
  inputLabel: {
    fontSize: 13,
    color: COLORS.textPrimary,
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase', // Dá um ar mais técnico/robusto
    letterSpacing: 0.5,
  },
  inputField: {
    height: 54,
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: COLORS.textPrimary,
    borderWidth: 1,
    borderColor: 'transparent', // Fica visível apenas no focus se quiser
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 54,
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    paddingRight: 16,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    fontSize: 15,
    color: COLORS.textPrimary,
  },

  // Botão de Login principal
  loginButton: {
    height: 56,
    backgroundColor: COLORS.buttonPrimary,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  loginButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    letterSpacing: 0.3,
  },

  // Rodapé
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  footerLink: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: '700',
    marginLeft: 6,
    textDecorationLine: 'underline',
  },
});

export default styles;