import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

import listaDeFilmes from '../catalogo.js';

interface Filme {
  id: number;
  titulo: string;
  subtitulo: string;
  ano: number;
  plataformas: string[];
  imagemCapa: string | number; 
  linkDetalhes: string; 
}

const TelaCatalogo = () => {

  const handlePressDetalhes = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={estilos.containerPrincipal}>
      <StatusBar barStyle="light-content" />
      
      <View style={estilos.cabecalho}>
        <View style={estilos.containerTitulo}>
          <FontAwesome name="film" size={24} color="#FFC300" />
          <Text style={estilos.tituloPrincipal}>Meu Portfólio de Filmes</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={estilos.containerDaLista}>
        {listaDeFilmes.map((filme: Filme) => (
          <View key={filme.id} style={estilos.cartao}>
            <Image 
              source={typeof filme.imagemCapa === 'string' ? { uri: filme.imagemCapa } : filme.imagemCapa}
              style={estilos.imagemCapa} 
            />
            <View style={estilos.areaTexto}>
              <Text style={estilos.tituloFilme}>{filme.titulo}</Text>
              <Text style={estilos.subtituloFilme}>{filme.subtitulo}</Text>

              <View style={estilos.rodapeCard}>
                <Text style={estilos.anoFilme}>Lançamento: {filme.ano}</Text>
                <TouchableOpacity 
                  onPress={() => handlePressDetalhes(filme.linkDetalhes)} 
                  style={estilos.botaoDetalhes}
                >
                  <FontAwesome name="search-plus" size={16} color="#B0B0B0" />
                </TouchableOpacity>
              </View>

              <View style={estilos.containerPlataformas}>
                <Text style={estilos.textoPlataformas}>{filme.plataformas.join(' • ')}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={estilos.rodape}>
        <Text style={estilos.textoRodape}>© 2025 Thimotio Jeronimo</Text>
      </View>
      
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  containerPrincipal: { flex: 1, backgroundColor: '#121212' },
  cabecalho: { paddingVertical: 15, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#222' },
  containerTitulo: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  tituloPrincipal: { fontSize: 26, fontWeight: 'bold', color: '#FFFFFF', marginLeft: 10, textShadowColor: 'rgba(255, 195, 0, 0.5)', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4 },
  containerDaLista: { paddingHorizontal: 20, paddingTop: 20 },
  cartao: { backgroundColor: '#1E1E1E', borderRadius: 10, marginBottom: 20, flexDirection: 'row', alignItems: 'center', padding: 15, borderWidth: 1, borderColor: '#333', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 8 },
  imagemCapa: { width: 90, height: 120, borderRadius: 6, marginRight: 15 },
  areaTexto: { flex: 1, alignSelf: 'stretch' }, // Garante que a área de texto ocupe toda a altura
  tituloFilme: { fontSize: 18, fontWeight: 'bold', color: '#FFC300', marginBottom: 8 },
  subtituloFilme: { fontSize: 14, color: '#B0B0B0', lineHeight: 21, marginBottom: 10 },
  
  rodapeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  anoFilme: {
    fontSize: 12,
    color: '#888888',
    fontStyle: 'italic',
  },
  botaoDetalhes: {
    padding: 8,
  },
  
  containerPlataformas: { paddingTop: 10, borderTopWidth: 1, borderTopColor: '#333' },
  textoPlataformas: { fontSize: 13, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center' },
  rodape: { paddingVertical: 20, borderTopWidth: 1, borderTopColor: '#222' },
  textoRodape: { fontSize: 12, color: '#888888', textAlign: 'center' },
});

export default TelaCatalogo;