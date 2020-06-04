# Pustak : Block-based Text Editor

### Tools used

[Parcel](https://parceljs.org/)
[Editorjs]()

## Installation

- Install Parcel
  `npm install -g parcel-bundler`

- Move to the project directory and install the dependencies
  `npm install`

## Changes in Package.json

- Configured parcel to run in port 3000

```json
"scripts": {
    "develop": "parcel -p 3000 src/index.html",
    "build": "parcel build src/index.html",
    "start": "concurrently \"cross-env BROWSER=none npm develop\" \"wait-on http://localhost:3000 && electron .\""
  }
```

- Testing the code

```
npm run develop
```

- Building the code for prodection

```
npm run build
```

- Running the applicaion using electron

```
npm start
```
