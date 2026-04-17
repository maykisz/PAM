import { StyleSheet, Platform } from 'react-native';

const COLORS = {
  background: '#F8F9FA', // Fundo levemente cinza para o card branco destacar
  card: '#FFFFFF',       // Card puro branco
  border: '#E1E4E8',     // Bordas finas e sutis
  textPrimary: '#1A1A1A',// Quase preto para o texto principal
  textSecondary: '#667085',// Cinza para rótulos e instruções
  accent: '#000000',     // Preto sólido para o botão principal
  inputBg: '#FFFFFF',    // Inputs brancos
  textLink: '#000000',   // Links em preto sólido
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
  },
  // Substituto da logo: um cabeçalho limpo
  header: {
    alignItems: 'center',
    marginTop: 80, // Espaço maior já que não tem logo
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: '600',
    color: COLORS.textPrimary,
    letterSpacing: -0.5,
  },
  instructionText: {
    fontSize: 15,
    color: COLORS.textSecondary,
    marginTop: 8,
  },
  
  // Card centralizado
  loginCard: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    padding: 24,
    width: '100%',
    // Sombra suave para dar elevação
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.05,
        shadowRadius: 20,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  // Botão Google estilo "Outline"
  googleButton: {
    flexDirection: 'row',
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
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
    fontSize: 13,
    color: COLORS.textSecondary,
    marginHorizontal: 16,
    textTransform: 'uppercase',
  },

  // Inputs
  inputGroup: {
    gap: 20,
  },
  inputContainer: {
    width: '100%',
  },
  inputLabel: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: '500',
    marginBottom: 8,
  },
  inputField: {
    height: 52,
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 16,
    color: COLORS.textPrimary,
    fontSize: 15,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingRight: 16,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    color: COLORS.textPrimary,
    fontSize: 15,
  },

  // Botão de Entrar Robusto
  loginButton: {
    height: 56,
    backgroundColor: COLORS.accent,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  loginButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  // Footer
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  footerLink: {
    fontSize: 14,
    color: COLORS.textLink,
    fontWeight: '700',
    marginLeft: 4,
  },
});

export default styles;