# POC for Multilanguage Support using i18n Library (React-TypeScript-ExpressJs-NodeJs)

## Overview

This project is a proof of concept (POC) demonstrating multi-language support in a React application using `i18next` for internationalization. It showcases how to integrate `i18next` for handling translations using multiple json files, manage language switching, and set up the project to be compatible with a UI library that uses `react-localize-redux`. 


## Key Concepts

- **Internationalization (`i18next`)**: The project uses `i18next` to handle translation management and dynamic language switching.
- **React Context**: Provides a way to manage and access the translation function globally without passing props manually through components.
- **Custom Hooks**: Encapsulate logic for language switching and accessing translation functions.
- **Asynchronous Loading**: Uses React’s `Suspense` to handle loading states for translation files.

## Installation

To set up and run this project, follow these steps:

1. **Clone the Repository**

   git clone <repository-url>
   cd <repository-directory>

2. **`npm install`y**

Installs necessary packages for the app, also check tsconfig.json for enabling eslint variants 

3. **`npm start`**

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project Structure
public/
  locales/
    en/
      pages.json
      errors.json
      fields.json
    es/
      pages.json
      errors.json
      fields.json
src/
  App.tsx
  hooks/
    useLocalize.ts
  components/
    ExampleComponent.tsx
  i18n.ts
  index.tsx
  context/
    TranslationContext.tsx

