import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../src/styles/global-styles"
import { theme } from "../src/styles/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      {/* //Componente que está sendo enviado */}
      <Story/>
      <GlobalStyles/>
    </ThemeProvider>
  )
]
