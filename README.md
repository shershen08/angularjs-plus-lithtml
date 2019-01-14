# Combining AngularJS with litHTML app code

Demo on approaches towards migrations of large scale app built with AngularJS to modern Web components based frameworks.

## Install

```npm install```

## Run 

```npm run start```

Page contains following elements:

 - `<div id="lithtml-app-separate"` - where the liHTML app mounts, not inside AngularJS

 - `<div ng-app="todomvc"` - where AngularJS is bootstrapped

 - `<div id="lithtml-app-builtin"` - where the liHTML app mounts, within AngularJS

## Key points

### Initial load

First AngularJS app loads and then triggers the loading of the liHTML app.

### Data exchange

Global event bus via events on window object.
Can be replaced with library that makes this data flow control more finegrained and testable.

### Build process 

 - litHTML app is build as a part of the install process
 - TODO: add AngularJS build example

### Detailed AngularJs app migration strategy

- TODO


## References

 - [create-lit-app repo with build settings](https://github.com/thepassle/create-lit-app)
 - [lit-html-examples repo](https://github.com/LarsDenBakker/lit-html-examples])


## Questions and suggestions

[@legkoletat](https://twitter.com/legkoletat)
