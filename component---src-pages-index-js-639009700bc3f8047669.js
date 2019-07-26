(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{129:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(135),s=a(136);a(159);t.default=function(){return l.a.createElement(s.a,null,l.a.createElement("section",{className:"sdm-layout__block"},l.a.createElement("h1",{className:"sdm-landing__title"},"I am ",l.a.createElement("span",{className:"sdm-accent"},"Di")),l.a.createElement("p",null,"I'm a ",l.a.createElement("span",{className:"sdm-accent"},"web developer")," from Vladivostok, Russia."),l.a.createElement("p",null,"The ",l.a.createElement("span",{className:"sdm-accent"},"оrganaizer")," of the ",l.a.createElement("a",{className:"sdm-multiline-link",href:"https://ruby-vladivostok.github.io/"},"Ruby Vladivostok")," meetup."),l.a.createElement("p",null,"You can find me on the internet as ",l.a.createElement("span",{className:"sdm-accent"},"@iamdidev"),", writing articles and posting tweets about web development, Ruby, SQL, NoSQL, JavaScript, Node.js, programming in general, learning and self-development.")),l.a.createElement("section",{className:"sdm-layout__block"},l.a.createElement("h2",{className:"sdm-landing__title"},"My recent ",l.a.createElement("span",{className:"sdm-accent"},"articles")),l.a.createElement("article",{className:"sdm-article"},l.a.createElement("a",{className:"sdm-multiline-link",href:"/blog/tech/2019-02-11-esential-books-that-every-programmer-should-read/"},"Essential Books That Every Programmer Should Read"),l.a.createElement("div",{className:"sdm-article__date"},l.a.createElement("time",{dateTime:"2019-02-11 21:00"},"Feb 11, 2019"))),l.a.createElement("article",{className:"sdm-article"},l.a.createElement("a",{className:"sdm-multiline-link",href:"/blog/tech/2019-02-05-playing-with-ruby-threads-and-queues/"},"Playing with Ruby Threads and Queues"),l.a.createElement("div",{className:"sdm-article__date"},l.a.createElement("time",{dateTime:"2019-02-05 16:04"},"Feb 5, 2019"))),l.a.createElement("p",null,l.a.createElement(r.Link,{to:"/blog"},"View all articles"),".")),l.a.createElement("div",{className:"sdm-layout__block sdm-layout__block--multisection"},l.a.createElement("section",{className:"sdm-layout__section"},l.a.createElement("h2",{className:"sdm-landing__title"},"Find me in ",l.a.createElement("span",{className:"sdm-accent"},"social networks")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{rel:"external",href:"https://twitter.com/shvetsovdm"},"Twitter")),l.a.createElement("li",null,l.a.createElement("a",{rel:"external",href:"https://github.com/shvetsovdm"},"Github")),l.a.createElement("li",null,l.a.createElement("a",{rel:"external",href:"https://codepen.io/shvetsovdm/"},"Codepen")))),l.a.createElement("section",{className:"sdm-layout__section"},l.a.createElement("h2",{className:"sdm-landing__title"},"Goodies"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"sdm-multiline-link",rel:"external",href:"https://www.youtube.com/playlist?list=PLZ9y9yxqfSW-HUoh2r-WCWU8ewrBI_8nm"},"Collection of great videos for programmers"))))))}},134:function(e,t,a){var n;e.exports=(n=a(138))&&n.default||n},135:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),l=a.n(n),r=a(4),s=a.n(r),i=a(133),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var o=a(134),m=a.n(o);a.d(t,"PageRenderer",function(){return m.a});var u=a(28);a.d(t,"parsePath",function(){return u.a});var d=l.a.createContext({}),p=function(e){return l.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},136:function(e,t,a){"use strict";a(140);var n=a(137),l=a(0),r=a.n(l),s=a(4),i=a.n(s),c=a(141),o=a.n(c),m=a(14),u=a(135),d=(a(139),function(e,t){return RegExp(e).test(t)}),p=function(e){var t=e.children;return r.a.createElement(u.StaticQuery,{query:"4202367756",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"author",content:"Dmitry Shvetsov"},{name:"og:title",content:e.site.siteMetadata.title},{name:"og:url",content:e.site.siteMetadata.host},{name:"og:description",content:e.site.siteMetadata.description},{name:"og:image",content:e.site.siteMetadata.gravatar}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(m.Location,null,function(e){var t=e.location;return"/"===t.pathname?null:r.a.createElement("nav",{className:"sdm-nav"},d("^/blog/?$",t.pathname)&&r.a.createElement(u.Link,{to:"/"},"Main page"),d("^/blog/.+$",t.pathname)&&r.a.createElement(u.Link,{to:"/blog"},"All articles"))}),r.a.createElement("div",{className:"sdm-layout"},t,r.a.createElement("footer",{className:"sdm-layout__block sdm-layout__block--footer"},r.a.createElement("p",null,"© Dmitry Shvetsov, 2016-2019"))))},data:n})};p.propTypes={children:i.a.node.isRequired},t.a=p},137:function(e){e.exports={data:{site:{siteMetadata:{title:"Dmitry Shvetsov, Fullstack Developer",description:"Full stack web developer. I use with love Ruby, Node.js, JavaScript, SQL, NoSQL databases. Based in Vladivostok, Russia.",host:"https://shvetsovdm.github.io/",gravatar:"https://www.gravatar.com/avatar/b8c8cd15abf09e505baec08c61a054a7"}}}}},138:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),l=a.n(n),r=a(4),s=a.n(r),i=a(46),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return l.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},139:function(e,t,a){},159:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-639009700bc3f8047669.js.map