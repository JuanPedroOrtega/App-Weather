# WeatherApp

## Environment

### Available environemnt variables

| Name    | Required | Type   | Default | Description                  |
|---------|----------|--------|---------|------------------------------|
| OWM_API | yes      | String |         | API Key for Open Weather Map |

## Set Up

Create a file `.env` in the root folder with the required environment variables:
```
OWM_API=API_KEY
...
```

## NPM Scripts

### config
Updates an Angular env file using process.env variables -> `npm run config -- --environment=prod`

## NgRX

### Code creation

ng g [action|feature|reducer|effect] name

### Folder structure

- component
  - /* angular elements */
  - component.module.ts
    - import StoreModule.forFeature(...)
    - import EffectsModule.forFeature(...)
  - store
    - component.actions.ts
      - export createAction(...)
    - component.reducer.ts
      - export state type
      - export createFeature(...)
      - export { state, selectors } from feature
    - component.effects.ts
      - export effect Class

### Communication

```
                   selector
        Component <-------- Store
           |                  ^
           | dispatch         | new state
           v                  |
        Action -----------> Reducer
         | ^ |-------------------- API
triggers | | |                      ^
         | | |----------------------|
         v | v                      |
        Effect --> Service --- (Interceptor)
```
