const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Checa se retorna undefined ao chamar a função sem parametros', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Checa se retorna uma msg de erro ao passar como parametro um valor diferente de string', () => {
    const error = 'Parâmetro inválido, é necessário uma string';
    const param = 6;
    expect(handlerElephants(param)).toEqual(error);
  });
  it('Checa se ao passar uma chave existente retorna o esperado', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('count')).toEqual(4);
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Ao passar como parâmetro uma busca inexistente, retorna null', () => {
    expect(handlerElephants('Eu gosto de batata e de estudar')).toBeNull();
  });
});
