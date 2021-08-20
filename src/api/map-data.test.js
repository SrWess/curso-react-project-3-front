import { mapData } from './map-data';

describe('map-data', () => {
  //Mapeando mesmo sem dados - Evitando retornar erro
  it('should map data even if there is no data', () => {
    const pagesData = mapData()[0];

    //Recebendo um objeto que seja footerHtml e que possua uma string vazia
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
    //Toda vez que for realizar uma verificação de um array ou obj, utilizar .toEqual()
    expect(pagesData.sections).toEqual([]);
    expect(pagesData.menu).toEqual({});
  });

  //Mapeando quando tiver dados
  it('should map data if there are data', () => {
    const pagesData = mapData([
      {
        footer_text: '<p>Teste</p>',
        slug: 'slug',
        title: 'title',
        sections: [1, 2, 3, 4],
        menu: { a: 'b' },
      },
    ])[0];

    //Verificando se dentro de footer possui o código HTML com o conteúdo
    expect(pagesData.footerHtml).toBe('<p>Teste</p>');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.title).toBe('title');
    // Toda vez que for realizar uma verificação de um array ou obj, utilizar .toEqual()
    expect(pagesData.sections).toEqual([1, 2, 3, 4]);
    expect(pagesData.menu).toEqual({ a: 'b' });
  });
});
