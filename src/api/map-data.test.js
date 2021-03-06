import { mapData } from './map-data';

describe('map-data', () => {
  //Mapeando mesmo sem dados - Evitando retornar erro
  it('should map data even if there is no data', () => {
    const pagesData = mapData()[0];

    //Recebendo um objeto que seja footerHtml e que possua uma string vazia
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
  });

  //Mapeando quando tiver dados
  it('should map data if there are data', () => {
    const pagesData = mapData([
      {
        footer_text: '<p>Teste</p>',
        slug: 'slug',
        title: 'title'
      },
    ])[0];

    //Verificando se dentro de footer possui o código HTML com o conteúdo
    expect(pagesData.footerHtml).toBe('<p>Teste</p>');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.title).toBe('title');
  });
});
