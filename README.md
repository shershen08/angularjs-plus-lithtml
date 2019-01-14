# Combining AngularJS (legacy app) with litHTML code

Demo on approaches towards migrations of large scale app built with AngularJS to modern Web components based frameworks.

## Install

```
cd lithtml && npm i
cd angularjs && npm i
```

## Run 

Run any http server in the root folder

`<div id="lithtml-app-separate"` - where the liHTML app mounts, not inside AngularJS

`<div ng-app="todomvc"` - where AngularJS is bootstrapped

`<div id="lithtml-app-builtin"` - where the liHTML app mounts, within AngularJS

## Key points

### Initial load

First AngularJS app loads and then triggers the loading of the modern app.

### Data exchange

Global event bus via events on window object.
Can be replaced with library that makes this controle more finegrained and testable.

### Build process 

- TODO

### Migration strategy


## References

 - [https://github.com/thepassle/create-lit-app](create-lit-app repo with build settings)
 - [https://github.com/LarsDenBakker/lit-html-examples](lit-html-examples repo)




Questions and suggestions: [@legkoletat](https://twitter.com/legkoletat)