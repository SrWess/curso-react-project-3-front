import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

import pagesFakeData from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render section with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  //Verificando possível dados inválidos
  it('should test section whith invalid data', () => {
    const whithNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    expect(whithNoTextOrImageGrid).toEqual([
      {
        __component: 'section.section-grid',
      },
    ]);

    const whithNoComponent = mapSections([{}]);
    expect(whithNoComponent).toEqual([{}]);
  });

  it('should test section.section-grid with no text_grid or image_grid', () => {
    const whithNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);
    expect(whithNoTextOrImageGrid.length).toBe(2);
    // expect(whithNoTextOrImageGrid).toEqual([]);
  });

  //Verificando qual é a section
  it('should map sections two columns whithout data', () => {
    const data = mapSectionTwoColumns();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map sections two columns with data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'Text Title',
      description: 'Text Description',
      metadata: {
        background: true,
        section_id: 'home',
      },
      image: {
        url: 'logo.svg',
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('logo.svg');
    expect(data.text).toBe('Text Description');
    expect(data.title).toBe('Text Title');
  });

  it('should map section content without data', () => {
    const data = mapSectionContent();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section content with data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'News coverage and some surprises',
      content: '<p>Text</p>',
      metadata: {
        background: false,
        name: 'Intro',
        section_id: 'intro',
      },
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.html).toBe('<p>Text</p>');
    expect(data.title).toBe('News coverage and some surprises');
  });

  it('should map grid text without data', () => {
    const data = mapTextGrid();

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.title).toBe('');
  });

  it('should map grid text with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      description: 'Nunc diam elit, molestie non mi at',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'Text - Teste 1',
        },
      ],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.description).toBe('Nunc diam elit, molestie non mi at');
    expect(data.title).toBe('My Grid');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Text - Teste 1');
  });

  it('should map grid image without data', () => {
    const data = mapImageGrid();

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.title).toBe('');
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      description: 'Morbi ut ultrices sapien',
      title: 'Gallery',
      image_grid: [
        {
          image: {
            alternativeText: 'Imagem de exemplo',
            url: 'image-grid.png',
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.description).toBe('Morbi ut ultrices sapien');
    expect(data.title).toBe('Gallery');
    expect(data.grid[0].srcImg).toBe('image-grid.png');
    expect(data.grid[0].altText).toBe('Imagem de exemplo');
  });
});
