import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title={'Error 404'}
      html={'<p>A página que você está acessando não existe. <a href="/">Clique para voltar.</a></p>'}
    />
  );
};
