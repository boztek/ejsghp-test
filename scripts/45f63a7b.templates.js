Ember.TEMPLATES.about=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push("<h1>About this ...</h1>\n<p>Testing gh pages ember stuff.</p>")}),Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("About")}function g(a,b){var d,e,f="";return b.buffer.push('\n                            <li class="list-group-item">'),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"item",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</li>\n                        "),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k,l,m="",n=this.escapeExpression,o=this,p=c.helperMissing;return e.buffer.push('<div>\n    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#">Your App</a>\n        </div>\n        <div class="collapse navbar-collapse navbar-ex1-collapse">\n        </div>\n    </nav>\n    <div class="container" id="main">\n        <div class="row">\n            <div>\n                <div class="col-md-3">\n                    <div class="well sidebar-nav">\n                        <strong>Colors</strong>\n                        <ul class="list-group">\n                        '),j={},k={},l={hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:k,hashTypes:j,data:e},h=c["link-to"]||b["link-to"],i=h?h.call(b,"about",l):p.call(b,"link-to","about",l),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n                        "),j={},k={},i=c.each.call(b,"item","in","controller",{hash:{},inverse:o.noop,fn:o.program(3,g,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:k,hashTypes:j,data:e}),(i||0===i)&&e.buffer.push(i),e.buffer.push('\n                        </ul>\n                    </div>\n                </div>\n                <div class="col-md-9">\n                    '),j={},k={},e.buffer.push(n(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"),m}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="well">\n    Welcome to Yeoman and Ember.js!\n</div>\n')});