import { repasses } from './dados.js';

let repassesInvalidos = [];

/// REUSABLE FUNCTIONS

function calcularValor(array) {
  return array.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
}

function filtrarLista(status, propriedade) {
  const listaFiltrada = repasses.filter((repasse) => repasse.status === status);

  /// USER STORY 6

  const dadosInvalidos = repasses.filter(
    (detalhes) => detalhes.status === 'falha' && detalhes.motivo === undefined
  );

  if (dadosInvalidos.length !== 0) {
    repassesInvalidos.push(dadosInvalidos);

    const indexInvalida = repasses.indexOf(dadosInvalidos);
    repasses.splice(indexInvalida, 1);
  }

  if (status !== undefined && propriedade !== undefined) {
    return Map.groupBy(listaFiltrada, (repasse) => repasse[propriedade]);
  }

  if (propriedade !== undefined) {
    return Map.groupBy(repasses, (repasse) => repasse[propriedade]);
  }

  if (status !== undefined) {
    return listaFiltrada;
  }
  return repasses;
}

function extrairString(repasse, propriedade) {
  return [
    ...new Set(repasse.map((repasse) => repasse[propriedade])),
  ].toString();
}

/// USER STORY 1

console.log(`Total de repasses processados: ${repasses.length}`);

/// USER STORY 2

////// 1 A

console.log(
  `Quantidade total de repasses bem sucedidos: ${
    filtrarLista('sucesso').length
  }`
);

////// 1 B

filtrarLista('sucesso', 'orgao').forEach((repasse) => {
  const orgao = extrairString(repasse, 'orgao');

  console.log(
    `Quantidade total de repasses bem sucedidos para ${orgao}: ${repasse.length}`
  );
});

////// 1 C

const sucessoValores = filtrarLista('sucesso').map((repasse) => repasse.valor);

const valorSucessoTotal = calcularValor(sucessoValores);

console.log(`Valor total de repasses bem sucedidos: R$ ${valorSucessoTotal}`);

////// 1 D

filtrarLista('sucesso', 'orgao').forEach((repasse) => {
  const orgao = extrairString(repasse, 'orgao');

  const valores = repasse.map((repasse) => repasse.valor);

  const valorTotal = calcularValor(valores);

  console.log(
    `Valor total de repasses bem sucedidos para ${orgao}: R$ ${valorTotal}`
  );
});

////// 2 A

console.log(
  `Quantidade total de repasses com falha: ${filtrarLista('falha').length}`
);

////// 2 B

filtrarLista('falha', 'orgao').forEach((repasse) => {
  const orgao = extrairString(repasse, 'orgao');

  console.log(
    `Quantidade total de repasses com falha para ${orgao}: ${repasse.length}`
  );
});

////// 2 C

filtrarLista('falha', 'motivo').forEach((repasse) => {
  const motivo = extrairString(repasse, 'motivo');

  console.log(
    `Quantidade total de repasses com falha por ${motivo.toLowerCase()}: ${
      repasse.length
    }`
  );
});

////// 2 D

const falhaValores = Object.keys(
  Object.fromEntries(filtrarLista('falha', 'valor'))
).map(Number);

const valorFalhaTotal = calcularValor(falhaValores);

console.log(`Valor total de repasses com falha: R$ ${valorFalhaTotal}`);

////// 2 E

filtrarLista('falha', 'orgao').forEach((repasse) => {
  const orgao = extrairString(repasse, 'orgao');

  const valores = repasse.map((repasse) => repasse.valor);

  const valorTotal = calcularValor(valores);

  console.log(
    `Valor total de repasses com falha para ${orgao}: R$ ${valorTotal}`
  );
});

////// 2 F

filtrarLista('falha', 'motivo').forEach((repasse) => {
  const motivo = extrairString(repasse, 'motivo');

  const valores = repasse.map((repasse) => repasse.valor);

  const valorTotal = calcularValor(valores);

  console.log(
    `Valor total de repasses com falha por ${motivo.toLowerCase()}: R$ ${valorTotal}`
  );
});

/// USER STORY 3

////// 4 A

const listaFiltradaValor = Object.fromEntries(filtrarLista(undefined, 'valor'));

const maiorValor = Object.keys(listaFiltradaValor).at(-1);

const [maiorRepasse] = listaFiltradaValor[maiorValor];

console.log(
  `Detalhes do repasse com maior valor: R$ ${maiorValor} para ${
    maiorRepasse.orgao
  } em ${maiorRepasse.data}, ${
    maiorRepasse.status === 'sucesso'
      ? `bem sucedido.`
      : `com falha por motivo de ${maiorRepasse.motivo.toLowerCase()}`
  }`
);

////// 4 B

const menorValor = Object.keys(listaFiltradaValor).at(0);

const [menorRepasse] = listaFiltradaValor[menorValor];

console.log(
  `Detalhes do repasse com menor valor: R$ ${menorValor} para ${
    menorRepasse.orgao
  } em ${menorRepasse.data}, ${
    menorRepasse.status === 'sucesso'
      ? `bem sucedido`
      : `com falha por motivo de ${menorRepasse.motivo.toLowerCase()}`
  }`
);

////// 4 C

let diaRepasses = [];
const listaFiltradaData = Array.from(filtrarLista(undefined, 'data'));

listaFiltradaData.forEach((repasse) => {
  diaRepasses.push(repasse[1].length);
});

const diaMaisRepasses = listaFiltradaData.filter(
  (repasses) => repasses[1].length === Math.max(...diaRepasses)
);

console.log(`Dia(s) com mais repasses:`);
diaMaisRepasses.forEach((orgao) =>
  console.log(`${orgao[0]} com ${orgao[1].length} repasses`)
);

////// 4 D

function calcularEstatisticasRepasses(status, propriedade) {
  let quantidade = [];
  const listaFiltrada = Array.from(filtrarLista(status, propriedade));

  listaFiltrada.forEach((repasse) => {
    quantidade.push(repasse[1].length);
  });

  const maisRepasses = listaFiltrada.filter(
    (repasses) => repasses[1].length === Math.max(...quantidade)
  );
  return maisRepasses;
}

console.log(`Órgão(s) com mais repasses:`);
calcularEstatisticasRepasses(undefined, 'orgao').forEach((orgao) =>
  console.log(`${orgao[0]} com ${orgao[1].length} repasses`)
);

////// 4 E

console.log(`Órgão(s) com mais repasses bem sucedidos:`);
calcularEstatisticasRepasses('sucesso', 'orgao').forEach((orgao) =>
  console.log(`${orgao[0]} com ${orgao[1].length} repasses`)
);

////// 4 F

console.log(`Órgão(s) com mais repasses com falha:`);
calcularEstatisticasRepasses('falha', 'orgao').forEach((orgao) =>
  console.log(`${orgao[0]} com ${orgao[1].length} repasses`)
);

////// 4 G

console.log(`Motivo de falha com mais repasses:`);
calcularEstatisticasRepasses('falha', 'motivo').forEach((motivo) =>
  console.log(`${motivo[0]} com ${motivo[1].length} repasses`)
);

/// USER STORY 4

function exibirRepassesOrgao(repasses) {
  const [repassesFiltrados] = Array.from(
    filtrarLista(undefined, 'orgao')
  ).filter((orgao) => orgao[0] === repasses);

  const orgaoRepasses = repassesFiltrados[1];

  console.log(
    `${orgaoRepasses.length} repasses realizados para ${repassesFiltrados[0]}:`
  );
  orgaoRepasses.forEach((repasse) => {
    console.log(
      `Repasse ${
        repasse.status === 'sucesso' ? 'bem sucedido' : 'com falha'
      } no valor de ${repasse.valor} em ${repasse.data}`
    );
  });
}

exibirRepassesOrgao('Susep');

/// USER STORY 5

repasses.push(
  {
    orgao: 'MEC',
    data: '01/01/2024',
    valor: 500,
    status: 'sucesso',
  },
  {
    orgao: 'Ministério da Saúde',
    data: '03/01/2024',
    valor: 750,
    status: 'sucesso',
  },
  {
    orgao: 'MEC',
    data: '05/01/2024',
    valor: 1000,
    status: 'sucesso',
  },
  {
    orgao: 'Ministério da Educação',
    data: '08/01/2024',
    valor: 600,
    status: 'sucesso',
  },
  {
    orgao: 'Ministério da Saúde',
    data: '10/01/2024',
    valor: 900,
    status: 'sucesso',
  },
  {
    orgao: 'Ministério da Educação',
    data: '12/01/2024',
    valor: 300,
    status: 'falha',
    motivo: 'dados inválidos',
  },
  {
    orgao: 'Ministério da Saúde',
    data: '15/01/2024',
    valor: 1200,
    status: 'sucesso',
  },
  {
    orgao: 'MEC',
    data: '17/01/2024',
    valor: 800,
    status: 'falha',
    motivo: 'falta de verba',
  },
  {
    orgao: 'Ministério da Educação',
    data: '20/01/2024',
    valor: 400,
    status: 'falha',
    motivo: 'falta de limite',
  },
  {
    orgao: 'MEC',
    data: '22/01/2024',
    valor: 1100,
    status: 'falha',
  }
);

filtrarLista('falha', 'motivo').forEach((repasse) => {
  const [detalhes] = repasse;
  if (detalhes.motivo !== undefined) return;

  console.log(
    `Detalhes das transações que não foram processadas com sucesso: repasse para ${detalhes.orgao} em ${detalhes.data}, no valor de ${detalhes.valor}`
  );
});
