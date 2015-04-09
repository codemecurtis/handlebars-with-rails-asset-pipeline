#Handlebars.js in rails 4.0+ asset pipeline

### Install Gems in GEMFILE
* gem 'handlebars_assets', '~> 0.4.4'
* gem 'sprockets'

### Require in application.js
* //= require handlebars
* // = require_tree ./templates

*Note: The ```require_tree ./templates``` is optional. Use this if you'd like to make a template folder in your asset pipeline. You can name the templates directory what ever you'd like!

### New Directories
From you application root
```$ cd app/assets/javascript```
```$ mkdir template```
Make template directory in javascript asset pipeline

