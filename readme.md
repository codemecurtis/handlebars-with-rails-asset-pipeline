#Handlebars.js in rails 4.0+ asset pipeline

### Install Gems in GEMFILE
* gem 'handlebars_assets', '~> 0.4.4'
* gem 'sprockets'

### Require in application.js
* //= require handlebars

### Creating a Handlebars Template
<pre><code>
  &lt;script id="sample-template" type="text/x-handlebars-template"&gt;
    &lt;li&gt;
      &lt;h4&gt;{{title}}&lt;/h4&gt;
      &lt;p&gt;{{content}}&lt;/p&gt;
      &lt;p&gt;{{vote_count}}&lt;/p&gt;
    &lt;/li&gt;
  &lt;/script&gt;
</pre></code>

#### Sample use of this template

<pre>
<code>
  var source = $('#sample-template').html();
  var template = Handlebars.compile(source);
</code>
</pre>

In the success/done promise of your ajax call use the below code.

<pre>
<code>
  $('#myId').append(template(data))
</code>
</pre>

**Note: `#myId` should be changed to the html element you would like to append the new data or template to.data parameter in the template variable is what I names my parameter in the success/done function.**

### New Directories
From you application root
```$ cd app/assets/javascript```
```$ mkdir template```
Make template directory in javascript asset pipeline

### Removing handlebars templates from your .erb files
* // = require_tree ./templates

From your application root directory
```$ cd app/assets/javascripts```
```$ mkdir templates```
```$ cd templates```
```$ touch yourFile.hbs``` HBS is the file extension for compiling handlebars

In yourFile.hbs file add your template code you would like to use. Such as
<pre><code>
&lt;ul&gt;
  {{#each question}}
    &lt;li&gt;
      &lt;h4&gt;{{title}}&lt;/h4&gt;
      &lt;p&gt;{{content}}&lt;/p&gt;
      &lt;p&gt;{{vote_count}}&lt;/p&gt;
    &lt;/li&gt;
  {{/each}}
&lt;ul&gt;
</pre></code>

```Note: The question variable in the each statement comes from the context key that I created in my AJAX call.```

Here is a simple implementation

<pre><code>
  var data = {title: "Hello", content: "World", vote_count: 1}
  var context = {}
  context.questions = data
  HandlebarsTemplates&#91;'templates/yourFile'&#93;(context)
</code></pre>

The HandlebarsTemplates function will only work if you have atleast one template. You will get an undefined if no template is created.

You can append it using jQuery or whatever else you'd like. This also eliminates having to use the below code in your JS.
<pre><code>
  var source = $('#question_display').html();
  var template = Handlebars.compile(source);
</pre></code>

