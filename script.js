import { repasses } from './dados.js';
import { repassesTeste } from './dadosTeste.js';

/// REUSABLE FUNCTIONS

function calcularValor(array) {
  return array.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
}

function filtrarLista(
  status,
  propriedade,
  comDadosTeste = false,
  apenasDadosValidos = false
) {
  let todosOsRepasses = repasses;

  if (comDadosTeste) {
    todosOsRepasses = repasses.concat(repassesTeste);
    if (apenasDadosValidos) {
      todosOsRepasses = repasses
        .concat(repassesTeste)
        .filter(
          (repasse) =>
            (repasse.status === 'sucesso' &&
              Object.keys(repasse).length === 4) ||
            (repasse.status === 'falha' && Object.keys(repasse).length === 5)
        );
    }
  }

  const listaFiltrada = todosOsRepasses.filter(
    (repasse) => repasse.status === status
  );

  if (status !== undefined && propriedade !== undefined) {
    return Map.groupBy(listaFiltrada, (repasse) => repasse[propriedade]);
  }

  if (propriedade !== undefined) {
    return Map.groupBy(todosOsRepasses, (repasse) => repasse[propriedade]);
  }

  if (status !== undefined) {
    return listaFiltrada;
  }
  return todosOsRepasses;
}

function extrairString(repasse, propriedade) {
  return [
    ...new Set(repasse.map((repasse) => repasse[propriedade])),
  ].toString();
}

function calcularEstatisticasRepasses(
  status,
  propriedade,
  comDadosLimpos = false
) {
  let quantidade = [];
  let listaFiltrada;

  if (comDadosLimpos) {
    listaFiltrada = Array.from(filtrarLista(status, propriedade, true, true));
  }
  listaFiltrada = Array.from(filtrarLista(status, propriedade));

  listaFiltrada.forEach((repasse) => {
    quantidade.push(repasse[1].length);
  });

  const maisRepasses = listaFiltrada.filter(
    (repasses) => repasses[1].length === Math.max(...quantidade)
  );
  return maisRepasses;
}

function exibirRepassesOrgao(repasses, comDadosLimpos = false) {
  let [repassesFiltrados] = Array.from(filtrarLista(undefined, 'orgao')).filter(
    (orgao) => orgao[0] === repasses
  );

  if (comDadosLimpos) {
    [repassesFiltrados] = Array.from(
      filtrarLista(undefined, 'orgao', true, true)
    ).filter((orgao) => orgao[0] === repasses);
  }

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

const sucessoValores = Object.keys(
  Object.fromEntries(filtrarLista('sucesso', 'valor'))
).map(Number);

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

exibirRepassesOrgao('Susep');

/// USER STORY 5

filtrarLista('falha', 'motivo', true).forEach((repasses) => {
  if (repasses.length > 1) {
    repasses.forEach((repasse) => {
      if (repasse.motivo !== undefined) return;

      console.log(
        `Detalhes das transações que não foram processadas com sucesso: repasse para ${repasse.orgao} em ${repasse.data}, no valor de ${repasse.valor}`
      );
    });
  } else if (repasses[0].motivo === undefined) {
    console.log(
      `Detalhes das transações que não foram processadas com sucesso: repasse para ${repasses[0].orgao} em ${repasses[0].data}, no valor de ${repasses[0].valor}`
    );
  }
});

/// USER STORY 6 (RE-RUNNING VALIDATED DATA)

console.log(
  `Total de repasses processados: ${
    filtrarLista(undefined, undefined, true, true).length
  }`
);

////// 1 A

console.log(
  `Quantidade total de repasses bem sucedidos: ${
    filtrarLista('sucesso', undefined, true, true).length
  }`
);

////// 1 B

filtrarLista('sucesso', 'orgao', true, true).forEach((repasse) => {
  const orgao = extrairString(repasse, 'orgao');

  console.log(
    `Quantidade total de repasses bem sucedidos para ${orgao}: ${repasse.length}`
  );
});

////// 1 C

const sucessoValoresLimpos = Object.keys(
  Object.fromEntries(filtrarLista('sucesso', 'valor', true, true))
).map(Number);

const valorSucessoTotalLimpo = calcularValor(sucessoValoresLimpos);

console.log(
  `Valor total de repasses bem sucedidos: R$ ${valorSucessoTotalLimpo}`
);

////// 1 D

filtrarLista('sucesso', 'orgao', true, true).forEach((repasse) => {
  const orgao = extrairString(repasse, 'orgao');

  const valores = repasse.map((repasse) => repasse.valor);

  const valorTotal = calcularValor(valores);

  console.log(
    `Valor total de repasses bem sucedidos para ${orgao}: R$ ${valorTotal}`
  );
});

////// 2 A

console.log(
  `Quantidade total de repasses com falha: ${
    filtrarLista('falha', undefined, true, true).length
  }`
);

////// 2 B

filtrarLista('falha', 'orgao', true, true).forEach((repasse) => {
  const orgao = extrairString(repasse, 'orgao');

  console.log(
    `Quantidade total de repasses com falha para ${orgao}: ${repasse.length}`
  );
});

////// 2 C

filtrarLista('falha', 'motivo', true, true).forEach((repasse) => {
  const motivo = extrairString(repasse, 'motivo');

  console.log(
    `Quantidade total de repasses com falha por ${motivo.toLowerCase()}: ${
      repasse.length
    }`
  );
});

////// 2 D

const falhaValoresLimpos = Object.keys(
  Object.fromEntries(filtrarLista('falha', 'valor', true, true))
).map(Number);

const valorFalhaTotalLimpo = calcularValor(falhaValoresLimpos);

console.log(`Valor total de repasses com falha: R$ ${valorFalhaTotalLimpo}`);

////// 2 E

filtrarLista('falha', 'orgao', true, true).forEach((repasse) => {
  const orgao = extrairString(repasse, 'orgao');

  const valores = repasse.map((repasse) => repasse.valor);

  const valorTotal = calcularValor(valores);

  console.log(
    `Valor total de repasses com falha para ${orgao}: R$ ${valorTotal}`
  );
});

////// 2 F

filtrarLista('falha', 'motivo', true, true).forEach((repasse) => {
  const motivo = extrairString(repasse, 'motivo');

  const valores = repasse.map((repasse) => repasse.valor);

  const valorTotal = calcularValor(valores);

  console.log(
    `Valor total de repasses com falha por ${motivo.toLowerCase()}: R$ ${valorTotal}`
  );
});

////// 4 A

const listaFiltradaValorLimpa = Object.fromEntries(
  filtrarLista(undefined, 'valor', true, true)
);

const maiorValorLimpo = Object.keys(listaFiltradaValorLimpa).at(-1);

const [maiorRepasseLimpo] = listaFiltradaValorLimpa[maiorValorLimpo];

console.log(
  `Detalhes do repasse com maior valor: R$ ${maiorValorLimpo} para ${
    maiorRepasseLimpo.orgao
  } em ${maiorRepasseLimpo.data}, ${
    maiorRepasseLimpo.status === 'sucesso'
      ? `bem sucedido.`
      : `com falha por motivo de ${maiorRepasseLimpo.motivo.toLowerCase()}`
  }`
);

////// 4 B

const menorValorLimpo = Object.keys(listaFiltradaValorLimpa).at(0);

const [menorRepasseLimpo] = listaFiltradaValorLimpa[menorValorLimpo];

console.log(
  `Detalhes do repasse com menor valor: R$ ${menorValorLimpo} para ${
    menorRepasseLimpo.orgao
  } em ${menorRepasseLimpo.data}, ${
    menorRepasseLimpo.status === 'sucesso'
      ? `bem sucedido`
      : `com falha por motivo de ${menorRepasseLimpo.motivo.toLowerCase()}`
  }`
);

////// 4 C

let diaRepassesLimpos = [];
const listaFiltradaDataLimpa = Array.from(
  filtrarLista(undefined, 'data', true, true)
);

listaFiltradaDataLimpa.forEach((repasse) => {
  diaRepassesLimpos.push(repasse[1].length);
});

const diaMaisRepassesLimpos = listaFiltradaDataLimpa.filter(
  (repasses) => repasses[1].length === Math.max(...diaRepassesLimpos)
);

console.log(`Dia(s) com mais repasses:`);
diaMaisRepassesLimpos.forEach((orgao) =>
  console.log(`${orgao[0]} com ${orgao[1].length} repasses`)
);

////// 4 D

console.log(`Órgão(s) com mais repasses:`);
calcularEstatisticasRepasses(undefined, 'orgao', true).forEach((orgao) =>
  console.log(`${orgao[0]} com ${orgao[1].length} repasses`)
);

////// 4 E

console.log(`Órgão(s) com mais repasses bem sucedidos:`);
calcularEstatisticasRepasses('sucesso', 'orgao', true).forEach((orgao) =>
  console.log(`${orgao[0]} com ${orgao[1].length} repasses`)
);

////// 4 F

console.log(`Órgão(s) com mais repasses com falha:`);
calcularEstatisticasRepasses('falha', 'orgao', true).forEach((orgao) =>
  console.log(`${orgao[0]} com ${orgao[1].length} repasses`)
);

////// 4 G

console.log(`Motivo de falha com mais repasses:`);
calcularEstatisticasRepasses('falha', 'motivo', true).forEach((motivo) =>
  console.log(`${motivo[0]} com ${motivo[1].length} repasses`)
);

/// USER STORY 4

exibirRepassesOrgao('Ministério da Educação', true);
