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

## New Page

* Create the new module (with routing) `npx ng generate module component/pages/new_page --routing` or `npx ng g m component/pages/new_page --routing`
* Create the component for that page `npx ng generate component component/pages/new_page` or `npx ng g c component/pages/new_page`
* Set the routes as needed
* Import the custom modules and ensure the component is declared
  * ```js
    @NgModule({
      declarations: [NewPageComponent],
      imports: [/* Replace CommonModule */CoreModule, NewPageRoutingModule],
    })
  ```

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
