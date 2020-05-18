## READMENOTES.md

```
npm i @reduxjs/toolkit --save-dev
```

configureStore - to simplify store creation (with redux dev tool, redux-thunk)
    accepts a configuration object where you can define:
    - a root reducer, or an object of slices
    - your middleware
    - optional store enhancers
    - a preloaded state

createAction - have action creators and named actions for almost every behaviour of the app

createReducer - takes initial state and mapping object where:
    - properties in the mapping are action types
    - values are reducing functions

