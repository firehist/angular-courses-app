# Angular courses app

List all our challenges for this Angular course

## 00 - Introduction

[step-00](https://github.com/firehist/angular-courses-app/tree/step-00)

Not really a challenge but it's an howTo bootstrap the app.

### Install NVM (if wanted

1. Install NVM (https://github.com/creationix/nvm#install-script)
2. Install a Node Version through NVM
```
nvm install 7
nvm alias default 7
```

### Ensure node is installed w/ npm

```
$ node -v
v8.1.0
$ npm -v
5.0.3
```

### Install [@angular/cli](https://cli.angular.io) globally

`npm install -g @angular/cli

### Boostrap an angular cli application (updated guide on official website https://cli.angular.io)
```
ng new myProjectName
cd myProjectName
# Run the application through http://localhost:4200
ng serve
```

Proposed solution: [step-00](https://github.com/firehist/angular-courses-app/tree/step-00)

## 01 - Introduction to Components

Based on [step-00](https://github.com/firehist/angular-courses-app/tree/step-00)

**Main idea: use ng generate and be familiar with basic component**

1. Create a component called `header`
```
$ ng generate component header
```
2. Add the selector element `<app-header></<app-header>` into the main HTML `app.component.html`
3. Play with template to see what's going on
  a. Add [ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap/blob/development/docs/getting-started/ng-cli.md) or [angular2-materialize](https://github.com/InfomediaLtd/angular2-materialize#installing--configuring-angular2-materialize-in-projects-created-with-the-angular-cli)
  c. Design a navbar header to display the name of app and links for future routes
  b. Add code between `<app-header>` and `</<app-header>`
  c. be genious :D

Proposed solution: [step-01](https://github.com/firehist/angular-courses-app/tree/step-01)

### 02 - Templates, Interpolation & Directives

Based on [step-00](https://github.com/firehist/angular-courses-app/tree/step-00)

**Main idea: create a product list view by using *ngIf & *ngFor directives**

1. Create a component called `product-list`

```
ng generate component product/product-list
```

2. Inject the created component into the `app.component.html`

```
<app-product-list></app-product-list>
```

3. Now, add an default products list into our `ProductListComponent` class (find below a default products array)

  ```
  products = [
        {
            "id": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "id": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "id": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
        {
            "id": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
        },
        {
            "id": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
        }
    ]
  ```

4. Work on the product-list component template
    - Add a table to display product (display image url as text)
  
    - Use `*ngIf` directive to show the table if there is no product in the array
  
    - Use `*ngFor` directive on `<tr>` element to repeat this element as many times as products in the array
  
    - Add a button to show/hide all images on the page (you can handle click by using `<button (click)="myPublicMethod()"></button>`)
  
5. Bonus: Create a ProductListDetail component to replace HTML code of `*ngFor`

Proposed solution: [step-02](https://github.com/firehist/angular-courses-app/tree/step-02)

### 03 - Data Binding & Pipes

*Working based on 04 source code*

1. Display image as `<img src...` into the table with a *property binding* to `product.imageUrl` 
2. Insert a button at the top of the table and set an *event binding* to display and hide all images
The text should be adapted to the current stage: `Show the images` or `Hide the images`
3. Develop the filter two-way binding (input text <=> display) (*use banana in the box `[()]`*)
4. Create a custom Pipe to reverse a word

### 04 - More on components

*Working based on 05 source code*

1. Develop the `product` pipe and use it into the product-list view.
2. Use Component lifecycle to `console.log` a message into the `onInit` event
3. Add specific style for the product-list component
4. Add pipe to products `*ngFor` (eg: currency, uppercase, etc.)
5. Add your custom Pipe `reverse`

### 05 - Building Nested Component

*Working based on 06 source code*

1. Create a `starComponent` which display the rating with stars
2. Use this component into our `productListComponent` and place it next to existing `product.starRating`
3. Set-up `rating` input into `starComponent`
4. Set-up `ratingClicked` output into `starComponent`
5. Listen `ratingClicked` event from `ProductListComponent`

### 06 - Services and dependency injection

*Working based on 07 source code*

1. Create a new angular service called `ProductService`

`$ ng generate service shared/models/product`

2. Ensure that it will be declared at our appModule level
3. Move the IProduct interface and the products array from our `productListComponent` to this new service
4. Write a public `getProducts` method to access to this products array
5. [OPTIONAL]: Write a public `getObservableProducts` which return an Observable

#### 09 - Retrieving data Using HTTP

*Working based on 08 source code*

1. Import the `HttpModule` into the `AppModule` (if not already done)
    1.1 Install the `@angular/http` module
    1.2 Import the `HttpModule` into our `AppModule`
2. Inject `Http` into our `ProductService`
3. Update the `getProducts()` method to make a `get` call to our API Service `http://localhost:3000/products`
4. Use `RxJS` methods:
    1. `map` to convert the string result into a JSON Object
    2. `do` to `console.log` the JSON Object
    3. `catch` to attach a method to handle errors
5. Change into `ProductListComponent` the way we retrieve the data from our `ProductService`

## 10 - Navigation and Routing Basics

*Working based on 09 source code*

1. Create a simple `ProductDetailComponent` and a `WelcomeComponent` with a basic template 
2. Import the `RouterModule` into the `AppModule` (if not already there)
    1. Install the `@angular/router` module
    2. Import the `RouterModule` into our `AppModule`
    3. Use the `RouterModule.forRoot([])` syntax to describe the application's routes (Note that `RouterModule.forChild([]) is used in angular sub-module of our application)
3. Add the `<router-outlet></router-outlet>` instead of our `app-product-list` directive into our `AppRootComponent`
4. Add a menu to navigate through Home and Product List pages using the directive `[routerLink]` directive
5. Add to the `ProductDetailComponent` two link:
  - One to go back to `/products` route
  - an other to go to the next product detail page

**FROM THIS POINT IT NEEDS TO BE UPDATED!**

## 11 - Navigating and Routing Advanced

*Working based on 10 source code*

1. Read `id` parameter from url in `ProductDetailComponent` using `ActivatedRoute`
2. Develop a method `getProductById(id:number)` in our `ProductService`
2. Develop the `ProductDetailComponent` to display real product detail information by retrieving the product from our `ProductService`
3. Implement a Guard to check the validity of given `id`

## 12 - Forms

*Working based on 11 source code*

1. Create a new component called `ProductEditComponent` with a basic edit form of a product
2. Use `template driven form`
    1. Use `[(ngModel)]` on each input to create a two-way binding
    2. Add the hash operator to retrieve the current `ngModel` state (eg. `#nameInput`)
    3. Display an error box below based on `nameInput.valid`
    4. Implement a `(ngSubmit)` method to execute a function when user submit
3. Use `model driven form`
    1. Update the form to use `[ngFormModel]=formName` on the `<form>` DOM node
    2. Changes all `[(ngModel)]` into a `ngControl="inputName"`
    3. Import `ReactiveFormsModule` in your current angular module
    4. Import `FormBuilder` and `Validators` from `@angular/forms` into your component
    5. Inject into the component the `FormBuilder`
    6. Create a public `formName` variable by using `FormBuilder`
    7. Describe your forms using: `ControlGroup`
    8. Add some validators (custom?)

## 13 - Angular Modules

*Working based on 12 source code*

Following slides:

1. Create a Feature module called `ProductModule`
2. Create a Shared module called `SharedModule`
3. Refactor `AppModule` if necessary
4. Create a `ProductRoutingModule` and a `AppRoutingModule` to split down routing configuration
5. Optional: Create a `CoreComponent` to handle all services once in your application

## 14 - Angular 2 set-up revisited

No challenge here!

## 15 - Unit Testing w/ Jasmine & Karma

*Working based on 13 source code*

## 16 - Reactive Programming

No challenge here!

## 17 - Data Store with @ngrx/store

*Working based on 15 source code*
