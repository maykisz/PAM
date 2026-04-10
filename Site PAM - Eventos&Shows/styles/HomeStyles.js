import { StyleSheet, Platform } from 'react-native';
import { SHADOWS } from './CommonStyles'; // Removi COLORS já que usaremos hardcoded

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Fundo branco puro
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 20,
    marginBottom: 25,
  },
  welcomeText: {
    fontSize: 14,
    color: '#757575', // Cinza médio para texto secundário
    fontWeight: '500',
  },
  userName: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000000', // Preto para destaque
  },
  notificationBtn: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#F5F5F5', // Cinza bem claro (quase branco)
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.soft,
  },
  actionContainer: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    gap: 15,
    marginBottom: 30,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEEEEE', // Borda sutil para substituir sombras coloridas
    ...SHADOWS.soft,
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#000000', // Ícones em fundo preto para contraste
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#212121', // Cinza muito escuro (quase preto)
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  seeAll: {
    fontSize: 14,
    color: '#000000', // Link em preto (pode usar negrito para diferenciar)
    fontWeight: '700',
  },
  listPadding: {
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
  miniStatus: {
    width: 4,
    height: '100%',
    backgroundColor: '#424242', // Cinza grafite para indicadores
    borderRadius: 2,
    marginRight: 12,
  }
});