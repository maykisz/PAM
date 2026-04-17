const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

// Busca o CEP no serviço ViaCEP e retorna os dados de endereço.
router.get('/:cep', async (req, res) => {
  const { cep } = req.params;
  const cleanedCep = cep.replace(/[^0-9]/g, '');

  // CEP deve ter exatamente 8 dígitos após limpeza de caracteres.
  if (cleanedCep.length !== 8) {
    return res.status(400).json({ message: 'CEP inválido. Deve conter 8 dígitos.' });
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cleanedCep}/json/`);
    const data = await response.json();

    if (data.erro) {
      return res.status(404).json({ message: 'CEP não encontrado.' });
    }

    // Mapeia o retorno do ViaCEP para o formato que o frontend espera.
    return res.json({
      cep: data.cep,
      street: data.logradouro,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf,
    });
  } catch (error) {
    console.error('Erro ao buscar CEP:', error);
    return res.status(500).json({ message: 'Erro ao consultar o CEP.' });
  }
});

module.exports = router;
