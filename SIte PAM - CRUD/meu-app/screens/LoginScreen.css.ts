import {
    Platform,
    StyleSheet,
  } from 'react-native';
  
  const styles = StyleSheet.create({
    // =====================================================
    // BASE
    // =====================================================
  
    safeArea: {
      flex: 1,
      width: '100%',
      backgroundColor: '#FFFFFF',
    },
  
    keyboard: {
      flex: 1,
      width: '100%',
    },
  
    scroll: {
      flex: 1,
      width: '100%',
      backgroundColor: '#FFFFFF',
    },
  
    scrollContent: {
      flexGrow: 1,
      width: '100%',
    },
  
    screen: {
      flex: 1,
      width: '100%',
      minHeight: 820,
      backgroundColor: '#FFFFFF',
    },
  
    // =====================================================
    // HERO / IMAGEM DE FUNDO
    // =====================================================
  
    heroBackground: {
      width: '100%',
  
      /*
        Topo um pouco mais alto para os elementos
        respirarem melhor.
      */
      height: 395,
    },
  
    heroContent: {
      flex: 1,
      width: '100%',
  
      alignItems: 'center',
  
      paddingHorizontal: 24,
  
      paddingTop:
        Platform.OS === 'ios'
          ? 76
          : 68,
    },
  
    // =====================================================
    // LOGO
    // =====================================================
  
    logoBox: {
      width: 54,
      height: 54,
  
      borderRadius: 17,
  
      alignItems: 'center',
      justifyContent: 'center',
  
      backgroundColor:
        'rgba(255,255,255,0.10)',
  
      borderWidth: 1,
  
      borderColor:
        'rgba(255,255,255,0.28)',
  
      marginBottom: 20,
  
      shadowColor: '#8E3125',
  
      shadowOpacity: 0.08,
  
      shadowRadius: 10,
  
      shadowOffset: {
        width: 0,
        height: 4,
      },
  
      elevation: 2,
    },
  
    logo: {
      width: 30,
      height: 30,
  
      tintColor: '#FFFFFF',
    },
  
    // =====================================================
    // TEXTOS DO HERO
    // =====================================================
  
    welcome: {
      color: '#FFFFFF',
  
      fontSize: 17,
  
      lineHeight: 21,
  
      fontWeight: '400',
  
      textAlign: 'center',
  
      letterSpacing: -0.15,
    },
  
    title: {
      color: '#FFFFFF',
  
      fontSize: 32,
  
      lineHeight: 34,
  
      fontWeight: '700',
  
      letterSpacing: -1,
  
      textAlign: 'center',
  
      marginTop: 8,
    },
  
    subtitle: {
      color:
        'rgba(255,255,255,0.88)',
  
      fontSize: 11.5,
  
      lineHeight: 16,
  
      fontWeight: '400',
  
      textAlign: 'center',
  
      marginTop: 11,
    },
  
    // =====================================================
    // ÁREA BRANCA
    // =====================================================
  
    whiteSection: {
      flexGrow: 1,
  
      width: '100%',
  
      backgroundColor: '#FFFFFF',
  
      /*
        Entrada mais suave.
      */
      borderTopLeftRadius: 34,
      borderTopRightRadius: 34,
  
      /*
        Sobrepõe levemente o hero.
      */
      marginTop: -26,
  
      paddingTop: 44,
  
      paddingBottom:
        Platform.OS === 'ios'
          ? 50
          : 42,
  
      overflow: 'hidden',
    },
  
    // =====================================================
    // FORMULÁRIO
    // =====================================================
  
    form: {
      width: '82%',
  
      maxWidth: 365,
  
      alignSelf: 'center',
    },
  
    field: {
      width: '100%',
  
      marginBottom: 20,
    },
  
    label: {
      color: '#222222',
  
      fontSize: 12,
  
      lineHeight: 17,
  
      fontWeight: '600',
  
      letterSpacing: -0.1,
  
      marginBottom: 8,
    },
  
    passwordHeader: {
      width: '100%',
  
      flexDirection: 'row',
  
      alignItems: 'center',
  
      justifyContent: 'space-between',
    },
  
    forgotPassword: {
      color: '#EF4C33',
  
      fontSize: 10.5,
  
      lineHeight: 17,
  
      fontWeight: '500',
  
      marginBottom: 8,
    },
  
    // =====================================================
    // INPUTS
    // =====================================================
  
    inputContainer: {
      width: '100%',
  
      height: 56,
  
      borderRadius: 18,
  
      paddingHorizontal: 16,
  
      flexDirection: 'row',
  
      alignItems: 'center',
  
      gap: 11,
  
      backgroundColor: '#FAFAFA',
  
      borderWidth: 1,
  
      borderColor: '#DEDEDE',
  
      shadowColor: '#000000',
  
      shadowOpacity: 0.018,
  
      shadowRadius: 6,
  
      shadowOffset: {
        width: 0,
        height: 3,
      },
  
      elevation: 1,
    },
  
    input: {
      flex: 1,
  
      height: '100%',
  
      paddingVertical: 0,
  
      color: '#252525',
  
      fontSize: 12.5,
  
      fontWeight: '400',
    },
  
    eyeButton: {
      width: 30,
      height: 30,
  
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    // =====================================================
    // SIGN IN
    // =====================================================
  
    signInButton: {
      width: '100%',
  
      height: 57,
  
      borderRadius: 29,
  
      backgroundColor: '#222222',
  
      position: 'relative',
  
      alignItems: 'center',
      justifyContent: 'center',
  
      marginTop: 2,
  
      shadowColor: '#000000',
  
      shadowOpacity: 0.11,
  
      shadowRadius: 10,
  
      shadowOffset: {
        width: 0,
        height: 5,
      },
  
      elevation: 4,
    },
  
    signInPressed: {
      backgroundColor: '#171717',
  
      transform: [
        {
          scale: 0.993,
        },
      ],
    },
  
    signInText: {
      color: '#FFFFFF',
  
      fontSize: 15,
  
      fontWeight: '600',
  
      letterSpacing: -0.1,
    },
  
    arrowCircle: {
      position: 'absolute',
  
      right: 7,
  
      width: 43,
      height: 43,
  
      borderRadius: 22,
  
      backgroundColor: '#3A3A3A',
  
      alignItems: 'center',
  
      justifyContent: 'center',
    },
  
    disabled: {
      opacity: 0.55,
    },
  
    // =====================================================
    // DIVISOR
    // =====================================================
  
    dividerRow: {
      width: '100%',
  
      flexDirection: 'row',
  
      alignItems: 'center',
  
      marginVertical: 21,
    },
  
    divider: {
      flex: 1,
  
      height: 1,
  
      backgroundColor: '#E0E0E0',
    },
  
    orText: {
      color: '#969696',
  
      fontSize: 10,
  
      fontWeight: '400',
  
      marginHorizontal: 14,
    },
  
    // =====================================================
    // GOOGLE
    // =====================================================
  
    googleButton: {
      width: '100%',
  
      height: 56,
  
      borderRadius: 28,
  
      backgroundColor: '#FFFFFF',
  
      borderWidth: 1,
  
      borderColor: '#DFDFDF',
  
      flexDirection: 'row',
  
      alignItems: 'center',
  
      justifyContent: 'center',
  
      gap: 10,
  
      shadowColor: '#000000',
  
      shadowOpacity: 0.028,
  
      shadowRadius: 8,
  
      shadowOffset: {
        width: 0,
        height: 4,
      },
  
      elevation: 1,
    },
  
    googlePressed: {
      backgroundColor: '#F8F8F8',
  
      transform: [
        {
          scale: 0.995,
        },
      ],
    },
  
    googleText: {
      color: '#222222',
  
      fontSize: 12.5,
  
      fontWeight: '600',
  
      letterSpacing: -0.1,
    },
  
    // =====================================================
    // CREATE ACCOUNT
    // =====================================================
  
    registerRow: {
      width: '100%',
  
      flexDirection: 'row',
  
      alignItems: 'center',
  
      justifyContent: 'center',
  
      flexWrap: 'wrap',
  
      gap: 4,
  
      marginTop: 24,
    },
  
    registerQuestion: {
      color: '#858585',
  
      fontSize: 10.5,
  
      fontWeight: '400',
    },
  
    registerLink: {
      color: '#EF4C33',
  
      fontSize: 10.5,
  
      fontWeight: '700',
    },
  
    // =====================================================
    // ERRO
    // =====================================================
  
    errorBox: {
      width: '100%',
  
      minHeight: 40,
  
      borderRadius: 14,
  
      backgroundColor: '#FFF3F0',
  
      borderWidth: 1,
  
      borderColor: '#F0D5CF',
  
      paddingHorizontal: 12,
  
      marginBottom: 15,
  
      flexDirection: 'row',
  
      alignItems: 'center',
  
      gap: 8,
    },
  
    errorText: {
      flex: 1,
  
      color: '#BB503D',
  
      fontSize: 10.5,
  
      lineHeight: 14,
    },
  });
  
  export default styles;