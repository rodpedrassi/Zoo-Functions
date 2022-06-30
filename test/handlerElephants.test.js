const { handlerElephants, getElephants, averageAge, computeData } = require('../src/handlerElephants');

const elefantes = getElephants();

describe('Testes da função getElephants', () => {
  it('Checa se getElephants é uma função', () => {
    expect(typeof getElephants).toBe('function');
  });

  it('Checa se getElephants retorna um objeto', () => {
    const atual = getElephants();
    expect(typeof atual).toBe('object');
  });

  it('Checa se getElephants retorna o objeto elephant e suas informações', () => {
    const esperado = {
      id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
      residents: [
        { name: 'Ilana', sex: 'female', age: 11 },
        { name: 'Orval', sex: 'male', age: 15 },
        { name: 'Bea', sex: 'female', age: 12 },
        { name: 'Jefferson', sex: 'male', age: 4 },
      ],
    };
    const atual = elefantes;

    expect(atual).toEqual(esperado);
  });
});

describe('Testes da função averageAge', () => {
  it('Checa se averageAge é uma função', () => {
    expect(typeof averageAge).toBe('function');
  });

  it('Checa se averageAge retorna 10.5', () => {
    const esperado = 10.5;
    const atual = averageAge(elefantes);
    expect(atual).toBe(esperado);
  });
});

describe('Testes da função computeData', () => {
  it('Checa se computeData é uma função', () => {
    expect(typeof computeData).toBe('function');
  });

  it('Checa se ao chamar computeData("count", elefantes) retorna 4', () => {
    expect(computeData('count', elefantes)).toBe(4);
  });

  it('Checa se ao chamar computeData("names", elefantes) retorna um array', () => {
    const atual = computeData('names', elefantes);
    expect(Array.isArray(atual)).toBeTruthy();
  });

  it('Checa se ao chamar computeData("names", elefantes) retorna um array com o nome de todos os elefantes', () => {
    const atual = computeData('names', elefantes);
    const esperado = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(atual).toEqual(esperado);
  });

  it('Checa se ao chamar computeData("averageAge", elefantes) retorna o valor esperado', () => {
    const esperado = 10.5;
    const atual = computeData('averageAge', elefantes);
    expect(atual).toEqual(esperado);
  });

  it('Checa se ao chamar computeData() o retorno é null', () => {
    expect(computeData()).toBeNull();
  });
});

describe('Testes da função handlerElephants', () => {
  it('Checa se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  it('Checa se ao chamar handlerElephants() sem parametros ele retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Checa se ao chamar handlerElephants(123) passando um numero ele retorna uma mensagem', () => {
    const msg = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(123)).toEqual(msg);
  });

  it('Checa se ao chamar handlerElephants("location") ele retorna NW', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Checa se ao chamar handlerElephants("name") ele retorna elephants', () => {
    expect(handlerElephants('name')).toEqual('elephants');
  });
  it('Checa se ao chamar handlerElephants("popularity") ele retorna 5', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Checa se ao chamar handlerElephants("id") ele retorna o id "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5"', () => {
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });
  it('Checa se ao chamar handlerElephants("availability") ele retorna um array', () => {
    expect(Array.isArray(handlerElephants('availability'))).toBeTruthy();
  });
  it('Checa se ao chamar handlerElephants("availability") ele retorna o array esperado', () => {
    const esperado = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(esperado);
  });
  it('Checa se ao chamar handlerElephants("residents") ele retorna um objeto', () => {
    expect(typeof handlerElephants('residents')).toEqual('object');
  });
  it('Checa se ao chamar handlerElephants("residents") ele retorna um objeto com 4 posições', () => {
    expect(handlerElephants('residents').length).toEqual(4);
  });
  it('Checa se ao chamar handlerElephants("residents") ele retorna um objeto com os valores esperados', () => {
    const esperado = [
      {
        name: 'Ilana',
        sex: 'female',
        age: 11,
      },
      {
        name: 'Orval',
        sex: 'male',
        age: 15,
      },
      {
        name: 'Bea',
        sex: 'female',
        age: 12,
      },
      {
        name: 'Jefferson',
        sex: 'male',
        age: 4,
      },
    ];
    expect(handlerElephants('residents')).toEqual(esperado);
  });
  it('Checa se ao chamar handlerElephants("availability") ele retorna um array', () => {
    expect(Array.isArray(handlerElephants('availability'))).toBeTruthy();
  });
  it('Checa se ao chamar handlerElephants("availability") ele retorna um array com as informações esperada', () => {
    const esperado = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(esperado);
  });
  it('Checa se ao chamar handlerElephants("availability") ele retorna um array com 4 posições', () => {
    expect(handlerElephants('availability').length).toEqual(4);
  });
  it('Checa se ao chamar handlerElephants("count") ele retorna 4', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
});
