# SpaceX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Application Deployment

### Without SSR:
1. Clone or the repository in a folder in local machine (https://github.com/rishabhm1508/space-x.git) or download it.
2. Open cmd and execute 'cd space-x' command.
3. Once inside the code repository, execute 'npm i' in cmd at the same location.
4. Execute 'ng build' to build the project.
5. Execute 'ng serve' to serve the project.
6. Navigate to `http://localhost:4200/` to run the application in browser.
	
### With SSR:
1. Clone or the repository in a folder in local machine (https://github.com/rishabhm1508/space-x.git) or download it.
2. Open cmd and execute 'cd Space-x' command.
3. Once inside the code repository, execute 'npm i' in cmd at the same location.
4. Execute 'npm run build:ssr' to build the project.
5. Execute 'npm run serve:ssr' to serve the project.
6. Navigate to `http://localhost:4000/` to run the application in browser.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Universal "Gotchas"

> When building Universal components in Angular there are a few things to keep in mind.

 - For the server bundle you may need to include your 3rd party module into `nodeExternals` whitelist

 - **`window`**, **`document`**, **`navigator`**, and other browser types - _do not exist on the server_ - so using them, or any library that uses them (jQuery for example) will not work. You do have some options, if you truly need some of this functionality:
    - If you need to use them, consider limiting them to only your client and wrapping them situationally. You can use the Object injected using the PLATFORM_ID token to check whether the current platform is browser or server.

    ```typescript
     import { PLATFORM_ID } from '@angular/core';
     import { isPlatformBrowser, isPlatformServer } from '@angular/common';

     constructor(@Inject(PLATFORM_ID) private platformId: Object) { ... }

     ngOnInit() {
       if (isPlatformBrowser(this.platformId)) {
          // Client only code.
          ...
       }
       if (isPlatformServer(this.platformId)) {
         // Server only code.
         ...
       }
     }
    ```

     - Try to *limit or* **avoid** using **`setTimeout`**. It will slow down the server-side rendering process. Make sure to remove them [`ngOnDestroy`](https://angular.io/docs/ts/latest/api/core/index/OnDestroy-class.html) in Components.
   - Also for RxJs timeouts, make sure to _cancel_ their stream on success, for they can slow down rendering as well.
 - **Don't manipulate the nativeElement directly**. Use the _Renderer2_ from ["@angular/core"](https://angular.io/api/core/Renderer2). We do this to ensure that in any environment we're able to change our view.
```typescript
constructor(element: ElementRef, renderer: Renderer2) {
  this.renderer.setStyle(element.nativeElement, 'font-size', 'x-large');
}
```


## Light House Screen Shot

![Alt text](https://github.com/rishabhm1508/SpaceX/blob/master/src/Light_House.PNG?raw=true)