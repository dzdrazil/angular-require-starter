angular-require-starter
=======================

Seed project for getting started with an AngularJS+RequireJS application. Demonstrates directory structure, routing and testing. Comes with some base classes + karma / phantomjs for unit testing.

## TL:DR; install instructions

 - install node
 - npm install -g bower
 - npm install -g karma
 - npm install -g grunt-cli
 - npm install
 - bower install

To recompile only the sass files
 - grunt build:sass

To recompile only the js files
 - grunt build:js

To build (dev)
 - grunt build:dev

To build (prod)
 - grunt build

To test
 - grunt karma:unit


## Directory Structure

The root directory simply contains two folders: _src_ and _www_.  The goal is simple: the _src_ folder contains assets that aren't intended to be exposed to the world, such as scss files and unminified js files.  The _www_ folder will contain all the standard assets that our website will use: css files, minifed js files, images, fonts and so on.

To make this transition as smooth as possible, we'll use a tool called [grunt](http://gruntjs.com/) to perform all of the necessary tasks for us- compiling scss into css, minifying js files, copying files into the correct locations, and so on.

By performing these steps in development, we ensure there's no surprise and mad-dash fixes that need to be done when we're ready to move to testing and production.

### The _src_ directory

The _src_ directory is where the build of our code will go.  By default, it will include:

 - **scss** for sass files
 - **app** for our JavaScript application
 - **node_modules** for libraries auto-installed to help out development
 - package.json tells node what to install
 - Gruntfile.js tells grunt what development tasks to automate, and how to run them

### The _www_ directory

 - **css** will be empty in the repository, as our build tasks will add the compiled .css files in development.  Ideally, these should only be checked into source control on a release branch.
 - **js** will be empty in the repository, and contain files minified by the build tasks in development.  Ideally, these files should only be checked into source control on a release branch.
 - **media** should contain images, videos, fonts and other media related assets.  These files are safe to commit to source control for most projects

 ### Build Reports

The grunt build tools are setup to generate build reports by default in a directory called 'build_reports' next to _src_ and _www_, but that is simply the default value in the Gruntfile.js configuration file.  This directory probably shouldn't be checked into source control, and it should be setup to whichever location makes sense based on the backend technology in use, so long as it is not inside of the _www_ folder in production.
