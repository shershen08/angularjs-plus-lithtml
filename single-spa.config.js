//import { registerApplication, start } from 'single-spa';

window.singleSpa.registerApplication("hyper", loadingFunction, activityFunction);

window.singleSpa.start();

function loadingFunction() {
  return import("hyperapp/app.js");
}

function activityFunction(location) {
    return location.pathname.indexOf("/") === 0;
  }

// window.singleSpa.registerApplication('todomvc', loadingFunction, function activityFunction() {
//     return true;
//   })
  
  window.singleSpa.start();