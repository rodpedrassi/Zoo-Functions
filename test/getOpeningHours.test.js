const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Checa se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('Checa se a função receber nenhum parametro retorna o esperado', () => {
    const esperado = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toMatchObject(esperado);
  });

  it('Checa o dia da semana. Se ao receber como parametro diaSemana e hora retorna uma msg de error', () => {
    const diaSemana = 'quinta';
    const hora = 12;
    const error = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours(diaSemana, hora)).toThrow(error);
  });

  it('Checa a hora. Se ao receber como parametro diaSemana e hora retorna uma msg de error', () => {
    const diaSemana = 'Friday';
    const hora = 'xx:xx';
    const error = 'The hour should represent a number';
    expect(() => getOpeningHours(diaSemana, hora)).toThrow(error);
  });
  it('Checa o minuto. Se ao receber como parametro diaSemana e hora retorna uma msg de error', () => {
    const diaSemana = 'Friday';
    const hora = '12:xx';
    const error = 'The minutes should represent a number';
    expect(() => getOpeningHours(diaSemana, hora)).toThrow(error);
  });
  it('Checa a abreviação. Se o formato da hora não AM ou PM retorna uma msg de error', () => {
    const diaSemana = 'Friday';
    const hora = '12:00-xx';
    const error = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours(diaSemana, hora)).toThrow(error);
  });
  it('Checa se a hora esta dentro da range esperada e retorna uma msg de error', () => {
    const diaSemana = 'Friday';
    const hora = '33:00-AM';
    const error = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours(diaSemana, hora)).toThrow(error);
  });
  it('Checa se a minuto esta dentro da range esperada e retorna uma msg de error', () => {
    const diaSemana = 'Friday';
    const hora = '01:62-AM';
    const error = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours(diaSemana, hora)).toThrow(error);
  });
  it('Checa se ao receber parametros válidos retorna se o zoologico está aberto ou não', () => {
    const diaSemana = 'Friday';
    const hora = '01:30-AM';
    const msg = 'The zoo is closed';
    expect(getOpeningHours(diaSemana, hora)).toEqual(msg);

    const diaSemana2 = 'Friday';
    const hora2 = '01:30-PM';
    const msg2 = 'The zoo is open';
    expect(getOpeningHours(diaSemana2, hora2)).toEqual(msg2);

    const diaSemana3 = 'Monday';
    const hora3 = '09:30-AM';
    const msg3 = 'The zoo is closed';
    expect(getOpeningHours(diaSemana3, hora3)).toEqual(msg3);
  });
});
