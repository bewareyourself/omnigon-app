### Test Application Overview

To view the project page go to app/ folder and open index.html file.

Jadde, Stylus and CoffeScript are used as preprocessoring tools.

Final CSS/JS files are concatenated and minified to reduce page load time. Also HTML minifiacation is used to remove all unnecessary comments and spaces.

NPM, Grunt GTX are used to configure the frontend build structure.
 
All Grunt tasks settings can be found in the src/grunt folder.

All data including images are defined in the src/languages/default/data.json file and parsed directly into the jade files.

All SVG icons are generated into one SVG sprite.

To view the project source files go to src/


### Installation

1. Install [Node.js](https://nodejs.org/en/download/package-manager/)

2. Go to the app root
     
     npm install -g grunt-cli
     npm install
     
3. Build tasks are defined in the Gruntfile.js                                     
   
    3.1 grunt build:base - builds the whole project
    3.2 grunt build:html - builds the html markup
    3.3 grunt build:css - builds the css styles
    3.4 grunt build:js - builds the JS scripts

