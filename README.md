# react-dummy-json

A ReactJS hook to get the dummy json data.

## How to use it?

You can use the project in this way:

### Install

```bash
# with npm
npm i react-dummy-json

# with yarn
yarn add react-dummy-json
```

### Usage

- Import the package in your app:

```js
import {
  useUsers,
  usePost,
  useComment,
  useCart,
  useProduct,
  useTodo,
  useQuotes,
  useRecipe,
  useDecoration,
  useFragrance,
  useAutomotive,
  useFurniture,
  useGroceries,
  useLaptop,
  useLighting,
  useMotorcycle,
  usePhone,
  useSkincare,
  useSunglass,
  useTops,
} from "react-dummy-json";
```

- Get the dummy json data from the hooks:

```js
const data = useUsers();
```
