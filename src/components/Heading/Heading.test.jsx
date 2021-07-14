/* eslint-disable no-unused-vars */
import { screen } from "@testing-library/react";

import { Heading } from ".";
import { renderTheme } from "../../styles/render-theme";

import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

describe("<Heading />", () => {
  //Renderização com valores padrões: colorDark, as, size e uppercase
  it("should render with default values", () => {
    renderTheme(<Heading>texto</Heading>);

    //Verificando se o elemento existe com "texto"
    const heading = screen.getByRole("heading", { name: "texto" });

    //Verificação de estilização
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      "font-size": theme.font.sizes.xhuge,
      "text-transform": "none",
    });
  });

  it("should render with white color", () => {
    //Mudando o title para branco
    renderTheme(<Heading colorDark={false}>texto</Heading>);

    const heading = screen.getByRole("heading", { name: "texto" });

    //Verificação de estilização
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it("should render correct heading size", () => {
    //Alterando tamanho do texto
    const { rerender } = renderTheme(<Heading size="small">texto</Heading>);

    const heading = screen.getByRole("heading", { name: "texto" });

    //Verificação de estilização
    expect(heading).toHaveStyle({
      "font-size": theme.font.sizes.medium,
    });

    //Modo para realizar testes de outros tamanhos
    //Teste - size medium
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">texto</Heading>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
      "font-size": theme.font.sizes.large,
    });

    //Teste - size big
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">texto</Heading>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
      "font-size": theme.font.sizes.xlarge,
    });

    //Teste - size huge
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">texto</Heading>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
      "font-size": theme.font.sizes.xhuge,
    });
  });

  it("should render correct font-size when using mobile", () => {
    //Alterando tamanho do texto
    const { rerender } = renderTheme(<Heading size="huge">texto</Heading>);

    const heading = screen.getByRole("heading", { name: "texto" });

    //Verificando se Heading ficou com size xlarge ao chegar em 768px
    expect(screen.getByRole("heading", { name: "texto" })).toHaveStyleRule(
      "font-size",
      theme.font.sizes.xlarge,
      {
        media: theme.media.lteMedium,
      }
    );
  });

  //Verificando uppercase
  it("should render correct heading element", () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });
    //Pegando elemento H6 de dentro do container
    const h6 = container.querySelector("h6");

    //Verificando se o elemento realmente é um H6
    expect(h6.tagName.toLowerCase()).toBe("h6");
  });
});
