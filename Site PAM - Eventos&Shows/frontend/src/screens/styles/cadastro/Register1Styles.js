import { StyleSheet, Platform } from 'react-native';

const COLORS = {
  background: '#FFFFFF', // Fundo totalmente branco como na imagem
  primary: '#2563EB',    // Azul vibrante do botão "Cadastrar"
  border: '#E5E7EB',     // Cinza claro para as bordas dos inputs
  textPrimary: '#1F2937',// Cinza escuro para títulos
  textSecondary: '#6B7280',// Cinza médio para subtítulos e ícones
  white: '#FFFFFF',
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 40,
  },

  // Botão de voltar no topo esquerdo
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 20,
  },

  // Container da Logo/Ícone Azul
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  blueIcon: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.primary,
    borderRadius: 20, // Cantos arredondados do ícone azul
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    // Sombra leve para o ícone
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },

  // Formulário
  form: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16, // Inputs bem arredondados conforme a imagem
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: COLORS.white,
  },
  inputIcon: {
    marginRight: 12,
  },
  inputField: {
    flex: 1,
    fontSize: 15,
    color: COLORS.textPrimary,
  },

  // Checkbox de Termos de Uso
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    paddingRight: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  termsText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    flex: 1,
    lineHeight: 18,
  },
  linkText: {
    color: COLORS.primary,
    fontWeight: '600',
  },

  // Botão Cadastrar (Azul total)
  cadastrarButton: {
    height: 56,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    // Sombra para o botão principal
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cadastrarButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Footer (Já tem conta? Entrar)
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  footerLink: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});

export default styles;