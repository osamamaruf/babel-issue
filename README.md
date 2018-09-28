# \<Babel Helpers issue\>

Repo to display `babelHelpers is not defined` error.

## Running the demo

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed.
Second, make sure you have the [Bower](https://bower.io/) installed. Then run `bower install` get required components.
Thirdly, make sure you have the [Grunt](https://gruntjs.com/getting-started) installed.
Lastly, install npm packages by running `npm install`.

## Building Your Application

To build use : 

```
$ grunt develop
```

## Issue

Serve from the build folder i.e. from (`build/es5-bundled`) use:

```
$ polymer serve
```

In the browser the following error is visible `babelHelpers is not defined`

The behavior has been tested on polymer-cli version 1.8.0.
