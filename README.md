# Boilerplate Cypress - PT-BR

See in other languages: [English](README-EN.md)

<p align="center">
  <a href="https://github.com/MGMAdvance/boilerplate-cypress/network"><img src="https://img.shields.io/github/stars/MGMAdvance/boilerplate-cypress.svg?logo=verizon&color=4D8C6F" alt="GitHub stars" /></a>
  <a href="https://github.com/MGMAdvance/boilerplate-cypress/network"><img src="https://img.shields.io/github/forks/MGMAdvance/boilerplate-cypress.svg?logo=github&color=38A3A5" alt="GitHub forks" /></a>
  <a href="https://github.com/MGMAdvance/boilerplate-cypress/issues"><img src="https://img.shields.io/github/issues/MGMAdvance/boilerplate-cypress.svg?logo=codeigniter&logoColor=FFFFFF" alt="GitHub issues" /></a>
</p>

Esqueleto para o uso do Cypress utilizando o conceito de PageObject com SOLID e o uso do Cucumber.

Focando totalmente na produtividade com a devida estrutura já montada com uma padronização no projeto, dando foco na usabilidade e reutilização dos comportamentos das pages.

## 🛠 Tecnologias utilizadas
- [**Typescript:**](https://www.typescriptlang.org) O Boilerplate foi desenvolvido totalmente em Typescript.
- [**Cypress:**](https://www.cypress.io) Automatização dos testes.
- [**Eslint:**](https://eslint.org) Padronização dos Scripts.
- [**Prettier:**](https://prettier.io) Formatação dos Scripts.
- [**Husky:**](https://typicode.github.io/husky/#/) Validação dos commits.
- [**Cucumber:**](https://cucumber.io) Utilização do Gherkin para desenvolvimento dos testes.
- [**EditorConfig:**](https://editorconfig.org) Formatação e Padronização dos arquivos em geral.

## 📖 Preparando o ambiente
Instale todas as dependências do projeto.
```sh
$ npm install
```

## ⚙ Como utilizar o Boilerplate
### Adicionando uma nova Feature
Todas as Features são localizadas em `cypress/tests/features`.
### Adicionando uma nova Page
Todas as Pages estão localizadas em `cypress/tests/pages`.

Utilizando o conceito PageObjects, cada página contém sua pasta e os comportamentos da mesma, tendo a seguinte estrutura:
```
PAGES
├───landingPage
│   │   index.ts
│   │
│   └───structures
|           navMenu.ts
│           form.ts
│
└───profile
    │   index.ts
    │
    └───structures
            bio.ts
            logout.ts
            settings.ts
```
> Isso é uma sugestão de estrutura.

### Adicionando novas Specs
Todas as Pages estão localizadas em `cypress/tests/specs`.

## Extensões recomendadas para VSCode
Caso utilize o VSCode, recomendamos as seguintes extensões para seu aumento de produtividade:
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
- [Cypress Helper](https://marketplace.visualstudio.com/items?itemName=Shelex.vscode-cy-helper)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Feature Syntax Highlight and Snippets (Cucumber/Gherkin)](https://marketplace.visualstudio.com/items?itemName=Blodwynn.featurehighlight)


## 🕶 Contribuidores
| ![Andrey](https://avatars.githubusercontent.com/u/33119304?s=160&v=4) | ![Jonathan](https://avatars3.githubusercontent.com/u/57598746?s=160&v=4) | ![Matheus](https://avatars0.githubusercontent.com/u/20846871?s=160&v=4) | 
|:-----------------------------------------------------------------------:|:-----------------------------------------------------------------------:|:-----------------------------------------------------------------------:|
| [Andrey Oliveira](https://github.com/andreyoli) | [Jonathan Daflon](https://github.com/JonathanDaflon) | [Matheus Gonçalves](https://github.com/MGMAdvance) | 
