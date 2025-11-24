const repassesDados = [
  {
    orgao: 'Polícia Civil',
    data: '01/01/2024',
    valor: 5500,
    status: 'sucesso',
  },
  {
    orgao: 'Polícia Rodoviária Federal',
    data: '02/01/2024',
    valor: 6000,
    status: 'falha',
    motivo: 'Problemas técnicos',
  },
  {
    orgao: 'Polícia Militar',
    data: '03/01/2024',
    valor: 4500,
    status: 'sucesso',
  },
  {
    orgao: 'Corpo de Bombeiros',
    data: '04/01/2024',
    valor: 7000,
    status: 'sucesso',
  },
  {
    orgao: 'Guarda Municipal',
    data: '05/01/2024',
    valor: 3500,
    status: 'falha',
    motivo: 'Documentação incompleta',
  },
  {
    orgao: 'Receita Federal',
    data: '06/01/2024',
    valor: 8000,
    status: 'sucesso',
  },
  {
    orgao: 'Ministério Público',
    data: '07/01/2024',
    valor: 9000,
    status: 'falha',
    motivo: 'Erro no sistema',
  },
  {
    orgao: 'Defesa Civil',
    data: '08/01/2024',
    valor: 4000,
    status: 'sucesso',
  },
  {
    orgao: 'Detran',
    data: '09/01/2024',
    valor: 5000,
    status: 'sucesso',
  },
  {
    orgao: 'Polícia Federal',
    data: '10/01/2024',
    valor: 6500,
    status: 'falha',
    motivo: 'Falta de recursos',
  },
  {
    orgao: 'Ibama',
    data: '11/01/2024',
    valor: 5500,
    status: 'sucesso',
  },
  {
    orgao: 'Anvisa',
    data: '12/01/2024',
    valor: 6000,
    status: 'sucesso',
  },
  {
    orgao: 'Inmetro',
    data: '13/01/2024',
    valor: 3000,
    status: 'falha',
    motivo: 'Dados incorretos',
  },
  {
    orgao: 'Cetesb',
    data: '14/01/2024',
    valor: 7000,
    status: 'sucesso',
  },
  {
    orgao: 'Susep',
    data: '15/01/2024',
    valor: 8000,
    status: 'falha',
    motivo: 'Problemas técnicos',
  },
  {
    orgao: 'Polícia Civil',
    data: '16/01/2024',
    valor: 5200,
    status: 'sucesso',
  },
  {
    orgao: 'Polícia Rodoviária Federal',
    data: '17/01/2024',
    valor: 6100,
    status: 'falha',
    motivo: 'Erro humano',
  },
  {
    orgao: 'Polícia Militar',
    data: '18/01/2024',
    valor: 4600,
    status: 'sucesso',
  },
  {
    orgao: 'Corpo de Bombeiros',
    data: '19/01/2024',
    valor: 7100,
    status: 'sucesso',
  },
  {
    orgao: 'Guarda Municipal',
    data: '20/01/2024',
    valor: 3600,
    status: 'falha',
    motivo: 'Sistema fora do ar',
  },
  {
    orgao: 'Receita Federal',
    data: '21/01/2024',
    valor: 8100,
    status: 'sucesso',
  },
  {
    orgao: 'Ministério Público',
    data: '22/01/2024',
    valor: 9100,
    status: 'falha',
    motivo: 'Recursos insuficientes',
  },
  {
    orgao: 'Defesa Civil',
    data: '23/01/2024',
    valor: 4100,
    status: 'sucesso',
  },
  {
    orgao: 'Detran',
    data: '24/01/2024',
    valor: 5100,
    status: 'sucesso',
  },
  {
    orgao: 'Polícia Federal',
    data: '25/01/2024',
    valor: 6600,
    status: 'falha',
    motivo: 'Problemas técnicos',
  },
  {
    orgao: 'Ibama',
    data: '26/01/2024',
    valor: 5600,
    status: 'sucesso',
  },
  {
    orgao: 'Anvisa',
    data: '27/01/2024',
    valor: 6100,
    status: 'sucesso',
  },
  {
    orgao: 'Inmetro',
    data: '28/01/2024',
    valor: 3100,
    status: 'falha',
    motivo: 'Dados incorretos',
  },
  {
    orgao: 'Cetesb',
    data: '29/01/2024',
    valor: 7100,
    status: 'sucesso',
  },
  {
    orgao: 'Susep',
    data: '30/01/2024',
    valor: 8100,
    status: 'falha',
    motivo: 'Problemas técnicos',
  },
  {
    orgao: 'Polícia Civil',
    data: '31/01/2024',
    valor: 5300,
    status: 'sucesso',
  },
  {
    orgao: 'Polícia Rodoviária Federal',
    data: '01/01/2024',
    valor: 6200,
    status: 'falha',
    motivo: 'Erro humano',
  },
  {
    orgao: 'Polícia Militar',
    data: '02/01/2024',
    valor: 4700,
    status: 'sucesso',
  },
  {
    orgao: 'Corpo de Bombeiros',
    data: '03/01/2024',
    valor: 7200,
    status: 'sucesso',
  },
  {
    orgao: 'Guarda Municipal',
    data: '04/01/2024',
    valor: 3700,
    status: 'falha',
    motivo: 'Sistema fora do ar',
  },
  {
    orgao: 'Receita Federal',
    data: '05/01/2024',
    valor: 8200,
    status: 'sucesso',
  },
  {
    orgao: 'Ministério Público',
    data: '06/01/2024',
    valor: 9200,
    status: 'falha',
    motivo: 'Recursos insuficientes',
  },
  {
    orgao: 'Defesa Civil',
    data: '07/01/2024',
    valor: 4200,
    status: 'sucesso',
  },
  {
    orgao: 'Detran',
    data: '08/01/2024',
    valor: 5200,
    status: 'sucesso',
  },
  {
    orgao: 'Polícia Federal',
    data: '09/01/2024',
    valor: 6700,
    status: 'falha',
    motivo: 'Problemas técnicos',
  },
  {
    orgao: 'Ibama',
    data: '10/01/2024',
    valor: 5700,
    status: 'sucesso',
  },
  {
    orgao: 'Anvisa',
    data: '11/01/2024',
    valor: 6200,
    status: 'sucesso',
  },
  {
    orgao: 'Inmetro',
    data: '12/01/2024',
    valor: 3200,
    status: 'falha',
    motivo: 'Dados incorretos',
  },
  {
    orgao: 'Cetesb',
    data: '13/01/2024',
    valor: 7200,
    status: 'sucesso',
  },
  {
    orgao: 'Susep',
    data: '14/01/2024',
    valor: 8200,
    status: 'falha',
    motivo: 'Problemas técnicos',
  },
  {
    orgao: 'Polícia Civil',
    data: '15/01/2024',
    valor: 5400,
    status: 'sucesso',
  },
  {
    orgao: 'Polícia Rodoviária Federal',
    data: '16/01/2024',
    valor: 6300,
    status: 'falha',
    motivo: 'Erro humano',
  },
  {
    orgao: 'Polícia Militar',
    data: '17/01/2024',
    valor: 4800,
    status: 'sucesso',
  },
  {
    orgao: 'Corpo de Bombeiros',
    data: '18/01/2024',
    valor: 7300,
    status: 'sucesso',
  },
  {
    orgao: 'Guarda Municipal',
    data: '19/01/2024',
    valor: 3800,
    status: 'falha',
    motivo: 'Sistema fora do ar',
  },
  {
    orgao: 'Receita Federal',
    data: '20/01/2024',
    valor: 8300,
    status: 'sucesso',
  },
  {
    orgao: 'Ministério Público',
    data: '21/01/2024',
    valor: 9300,
    status: 'falha',
    motivo: 'Recursos insuficientes',
  },
  {
    orgao: 'Defesa Civil',
    data: '22/01/2024',
    valor: 4300,
    status: 'sucesso',
  },
  {
    orgao: 'Detran',
    data: '23/01/2024',
    valor: 5300,
    status: 'sucesso',
  },
  {
    orgao: 'Polícia Federal',
    data: '24/01/2024',
    valor: 6800,
    status: 'falha',
    motivo: 'Problemas técnicos',
  },
  {
    orgao: 'Ibama',
    data: '25/01/2024',
    valor: 5800,
    status: 'sucesso',
  },
  {
    orgao: 'Anvisa',
    data: '26/01/2024',
    valor: 6300,
    status: 'sucesso',
  },
  {
    orgao: 'Inmetro',
    data: '27/01/2024',
    valor: 3300,
    status: 'falha',
    motivo: 'Dados incorretos',
  },
  {
    orgao: 'Cetesb',
    data: '28/01/2024',
    valor: 7300,
    status: 'sucesso',
  },
  {
    orgao: 'Susep',
    data: '29/01/2024',
    valor: 8300,
    status: 'falha',
    motivo: 'Problemas técnicos',
  },
  {
    orgao: 'Polícia Civil',
    data: '30/01/2024',
    valor: 5500,
    status: 'sucesso',
  },
  {
    orgao: 'Polícia Rodoviária Federal',
    data: '31/01/2024',
    valor: 6400,
    status: 'falha',
    motivo: 'Erro humano',
  },
  {
    orgao: 'Polícia Militar',
    data: '01/01/2024',
    valor: 4900,
    status: 'sucesso',
  },
  {
    orgao: 'Corpo de Bombeiros',
    data: '02/01/2024',
    valor: 7400,
    status: 'sucesso',
  },
  {
    orgao: 'Guarda Municipal',
    data: '03/01/2024',
    valor: 3900,
    status: 'falha',
    motivo: 'Sistema fora do ar',
  },
  {
    orgao: 'Receita Federal',
    data: '04/01/2024',
    valor: 8400,
    status: 'sucesso',
  },
  {
    orgao: 'Ministério Público',
    data: '05/01/2024',
    valor: 9400,
    status: 'falha',
    motivo: 'Recursos insuficientes',
  },
  {
    orgao: 'Defesa Civil',
    data: '06/01/2024',
    valor: 4400,
    status: 'sucesso',
  },
  {
    orgao: 'Detran',
    data: '07/01/2024',
    valor: 5400,
    status: 'sucesso',
  },
  {
    orgao: 'Polícia Federal',
    data: '08/01/2024',
    valor: 6900,
    status: 'falha',
    motivo: 'Problemas técnicos',
  },
  {
    orgao: 'Ibama',
    data: '09/01/2024',
    valor: 5900,
    status: 'sucesso',
  },
  {
    orgao: 'Anvisa',
    data: '10/01/2024',
    valor: 6400,
    status: 'sucesso',
  },
  {
    orgao: 'Inmetro',
    data: '11/01/2024',
    valor: 3400,
    status: 'falha',
    motivo: 'Dados incorretos',
  },
  {
    orgao: 'Cetesb',
    data: '12/01/2024',
    valor: 7400,
    status: 'sucesso',
  },
  {
    orgao: 'Susep',
    data: '13/01/2024',
    valor: 8400,
    status: 'falha',
    motivo: 'Problemas técnicos',
  },
  {
    orgao: 'Polícia Civil',
    data: '14/01/2024',
    valor: 5600,
    status: 'sucesso',
  },
  {
    orgao: 'Polícia Rodoviária Federal',
    data: '15/01/2024',
    valor: 6500,
    status: 'falha',
    motivo: 'Erro humano',
  },
  {
    orgao: 'Polícia Militar',
    data: '16/01/2024',
    valor: 5000,
    status: 'sucesso',
  },
  {
    orgao: 'Corpo de Bombeiros',
    data: '17/01/2024',
    valor: 7500,
    status: 'sucesso',
  },
  {
    orgao: 'Guarda Municipal',
    data: '18/01/2024',
    valor: 4000,
    status: 'falha',
    motivo: 'Sistema fora do ar',
  },
  {
    orgao: 'Receita Federal',
    data: '19/01/2024',
    valor: 8500,
    status: 'sucesso',
  },
  {
    orgao: 'Ministério Público',
    data: '20/01/2024',
    valor: 9500,
    status: 'falha',
    motivo: 'Recursos insuficientes',
  },
  {
    orgao: 'Defesa Civil',
    data: '21/01/2024',
    valor: 4500,
    status: 'sucesso',
  },
  {
    orgao: 'Detran',
    data: '22/01/2024',
    valor: 5500,
    status: 'sucesso',
  },
  {
    orgao: 'Polícia Federal',
    data: '23/01/2024',
    valor: 7000,
    status: 'falha',
    motivo: 'Problemas técnicos',
  },
  {
    orgao: 'Ibama',
    data: '24/01/2024',
    valor: 6000,
    status: 'sucesso',
  },
  {
    orgao: 'Anvisa',
    data: '25/01/2024',
    valor: 6500,
    status: 'sucesso',
  },
  {
    orgao: 'Inmetro',
    data: '26/01/2024',
    valor: 3500,
    status: 'falha',
    motivo: 'Dados incorretos',
  },
  {
    orgao: 'Cetesb',
    data: '27/01/2024',
    valor: 7500,
    status: 'sucesso',
  },
  {
    orgao: 'Susep',
    data: '28/01/2024',
    valor: 8500,
    status: 'falha',
    motivo: 'Problemas técnicos',
  },
  {
    orgao: 'Polícia Civil',
    data: '29/01/2024',
    valor: 5700,
    status: 'sucesso',
  },
  {
    orgao: 'Polícia Rodoviária Federal',
    data: '30/01/2024',
    valor: 6600,
    status: 'falha',
    motivo: 'Erro humano',
  },
  {
    orgao: 'Polícia Militar',
    data: '31/01/2024',
    valor: 5100,
    status: 'sucesso',
  },
];

/// REUSABLE FUNCTIONS

function calcularValor(array) {
  return array.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
}

function filtrarLista(status, propriedade) {
  const listaFiltrada = repassesDados.filter(
    (repasse) => repasse.status === status
  );

  if (status !== undefined && propriedade !== undefined) {
    return Map.groupBy(listaFiltrada, (repasse) => repasse[propriedade]);
  }
  if (status !== undefined) {
    return repassesDados.filter((repasse) => repasse.status === status);
  }
  if (propriedade !== undefined) {
    return Map.groupBy(repassesDados, (repasse) => repasse[propriedade]);
  }
  return repassesDados;
}

function extrairString(repasse, propriedade) {
  return [
    ...new Set(repasse.map((repasse) => repasse[propriedade])),
  ].toString();
}

/// USER STORY 1

console.log(`Total de repasses processados: ${filtrarLista(undefined).length}`);

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
      : `com falha por motivo de ${maiorRepasse.motivo.toLowerCase()}.`
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

const repassesDadosInvalidos = [
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
  },
];

function filtrarListaInvalida(status, propriedade) {
  const listaFiltrada = repassesDadosInvalidos.filter(
    (repasse) => repasse.status === status
  );

  if (status !== undefined && propriedade !== undefined) {
    return Map.groupBy(listaFiltrada, (repasse) => repasse[propriedade]);
  }
  if (status !== undefined) {
    return repassesDadosInvalidos.filter(
      (repasse) => repasse.status === status
    );
  }
  if (propriedade !== undefined) {
    return Map.groupBy(
      repassesDadosInvalidos,
      (repasse) => repasse[propriedade]
    );
  }
  return repassesDadosInvalidos;
}

filtrarListaInvalida('falha', 'motivo').forEach((repasse) => {
  const [detalhes] = repasse;
  if (detalhes.motivo !== undefined) return;

  console.log(
    `Detalhes das transações que não foram processadas com sucesso: ${detalhes.orgao} em ${detalhes.data}, no valor de ${detalhes.valor}`
  );
});
