/*===||1 ETAPA||===*/

import {
    totalDeEpisodiosAssistidos,
    diasSemEpisodios,
    mediaDeEpisodios,
    diasMaratonados,
    teveEpisodioTodoDia,
    atingiuMeta,
    gerarResumo,
    filtrarUsuariosPorGenero,
    calcularMediaDeEpisodios,
    quemAssistiuMais,
    ordenarPorTemporadas,
    todosAtingiramMeta,
    algumAtingiuMeta,
    gerarResumoParaTodos,
    atualizarDadosDeJuliana,
    gerarResumoDeJuliana
} from './painelSeries';

const progressoTemporada = [
    { episodiosAssistidos: 3 },
    { episodiosAssistidos: 2 },
    { episodiosAssistidos: 0 },
    { episodiosAssistidos: 4 },
    { episodiosAssistidos: 1 },
    { episodiosAssistidos: 5 },
    { episodiosAssistidos: 0 },
    { episodiosAssistidos: 6 },
    { episodiosAssistidos: 2 }
];

// 1. Função de Total de Episódios Assistidos
console.log("O Total de Episódios assistidos foram: ", totalDeEpisodiosAssistidos(progressoTemporada));

// 2. Verificar Dias Sem Episódios
console.log("Houveram dias sem nenhum episódio assistido? ", diasSemEpisodios(progressoTemporada));

// 3. Calcular a Média de Episódios por Dia
console.log("A média de episódios por dia foram: ", mediaDeEpisodios(progressoTemporada));

// 4. Verificar se houveram maratonas (mais de 4 episódios)
console.log("Houveram maratonas? ", diasMaratonados(progressoTemporada));

// 5. Verificar se foi assistido pelo menos 1 episódio por dia
console.log("Foi assistido pelo menos 1 episódio por dia? ", teveEpisodioTodoDia(progressoTemporada));

/*===||2 ETAPA||===*/

const usuario = {
    nome: "Nathalia", 
    generoFavorito: "Suspense",
    temporadasConcluidas: 3,
    episodiosAssistidos: 42,
    metaMensal: 50
};

// Função para verificar se atingiu a meta.
console.log("Atingiu a meta? ", atingiuMeta(usuario.episodiosAssistidos, usuario.metaMensal));

// Função para gerar o resumo de progresso
console.log(gerarResumo(usuario));

/*===||3 ETAPA||===*/

const usuarios = [
    { nome: "Nathalia", generoFavorito: "Suspense", temporadasConcluidas: 3, episodiosAssistidos: 42, metaMensal: 50 },
    { nome: "Leo", generoFavorito: "Comédia", temporadasConcluidas: 4, episodiosAssistidos: 60, metaMensal: 60 },
    { nome: "Camila", generoFavorito: "Romance", temporadasConcluidas: 2, episodiosAssistidos: 28, metaMensal: 40 },
    { nome: "Igor", generoFavorito: "Suspense", temporadasConcluidas: 5, episodiosAssistidos: 80, metaMensal: 75 },
    { nome: "Juliana", generoFavorito: "Drama", temporadasConcluidas: 3, episodiosAssistidos: 36, metaMensal: 45 }
];

// Testando as funções da Etapa 3 com o array de usuários

// 1. Filtrar usuários por gênero favorito "Suspense"
const usuariosSuspense = filtrarUsuariosPorGenero(usuarios, "Suspense");
console.log("Usuários que gostam de Suspense: ", usuariosSuspense);

// 2. Calcular a média de episódios assistidos entre os usuários
const mediaEpisodios = calcularMediaDeEpisodios(usuarios);
console.log("Média de episódios assistidos entre os usuários: ", mediaEpisodios);

// 3. Identificar quem assistiu mais episódios
const usuarioMaisEpisodios = quemAssistiuMais(usuarios);
console.log("Quem assistiu mais episódios: ", usuarioMaisEpisodios);

// 4. Ordenar por temporadas concluídas
const usuariosOrdenados = ordenarPorTemporadas(usuarios);
console.log("Usuários ordenados por temporadas concluídas: ", usuariosOrdenados);

// 5. Verificar se todos atingiram as metas
const todosAtingiram = todosAtingiramMeta(usuarios);
console.log("Todos atingiram as metas? ", todosAtingiram);

// 6. Verificar se algum atingiu
const algumAtingiu = algumAtingiuMeta(usuarios);
console.log("Algum atingiu a meta? ", algumAtingiu);

// 7. Gerar resumo para todos os usuários
const resumos = gerarResumoParaTodos(usuarios);
console.log("Resumos de todos os usuários: ", resumos);

// 8. Atualizar dados de “Juliana” (temporadas: 4, episódios: 48).
atualizarDadosDeJuliana(usuarios);
console.log("Dados de Juliana atualizados: ", usuarios.find(serie => serie.nome === "Juliana"));

// 9. Gerar resumo apenas de Juliana.
const resumoJuliana = gerarResumoDeJuliana(usuarios);
console.log("Resumo de Juliana: ", resumoJuliana);
