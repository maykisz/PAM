import React, { useState } from 'react';
import { ActivityIndicator, Pressable, Text, TextInput, View } from 'react-native';
import styles from '../styles';

export default function LoginScreen({ onLogin, loading, error }) {
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');

	const submit = () => {
		onLogin(email.trim(), senha);
	};

	return (
		<View style={styles.loginContainer}>
			<View style={styles.loginBox}>
				<Text style={styles.loginTitle}>PAM Tarefas</Text>
				<Text style={styles.loginSubtitle}>Entre para acessar suas tarefas.</Text>

				{error ? <Text style={styles.loginError}>{error}</Text> : null}

				<Text style={styles.label}>Email</Text>
				<TextInput
					autoCapitalize="none"
					autoComplete="email"
					keyboardType="email-address"
					onChangeText={setEmail}
					placeholder="seu@email.com"
					style={styles.input}
					value={email}
				/>

				<Text style={styles.label}>Senha</Text>
				<TextInput
					autoCapitalize="none"
					onChangeText={setSenha}
					onSubmitEditing={submit}
					placeholder="Sua senha"
					secureTextEntry
					style={styles.input}
					value={senha}
				/>

				<Pressable
					disabled={loading}
					onPress={submit}
					style={[styles.primaryButton, loading && styles.buttonDisabled]}
				>
					{loading ? <ActivityIndicator color="#ffffff" /> : <Text style={styles.primaryButtonText}>Entrar</Text>}
				</Pressable>
			</View>
		</View>
	);
}
