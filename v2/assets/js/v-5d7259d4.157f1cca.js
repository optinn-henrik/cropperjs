"use strict";(self.webpackChunkcropperjs=self.webpackChunkcropperjs||[]).push([[352],{1753:function(n,a,t){t.r(a),t.d(a,{data:function(){return e}});const e=JSON.parse('{"key":"v-5d7259d4","path":"/guide.html","title":"Guide","lang":"en-US","frontmatter":{"sidebar":"auto"},"excerpt":"","headers":[{"level":2,"title":"Introduction","slug":"introduction","children":[]},{"level":2,"title":"Getting started","slug":"getting-started","children":[{"level":3,"title":"Installation","slug":"installation","children":[]},{"level":3,"title":"Usage","slug":"usage","children":[]}]},{"level":2,"title":"Packages","slug":"packages","children":[]},{"level":2,"title":"Interfaces","slug":"interfaces","children":[]},{"level":2,"title":"Browser support","slug":"browser-support","children":[]}],"git":{"updatedTime":1655623672000,"contributors":[{"name":"Chen Fengyuan","email":"chenfengyuan@outlook.com","commits":1}]},"filePathRelative":"guide.md"}')},2121:function(n,a,t){t.r(a),t.d(a,{default:function(){return Ua}});var e=t(6252);const s=(0,e.uE)('<h1 id="guide" tabindex="-1"><a class="header-anchor" href="#guide" aria-hidden="true">#</a> Guide</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Cropper.js is a series of web components for image cropping.</p><ul><li><strong>What is the difference between Cropper.js 1.0 and Cropper.js 2.0?</strong></li></ul><table><thead><tr><th>Type</th><th>Cropper.js 1.0</th><th>Cropper.js 2.0</th></tr></thead><tbody><tr><td>Funded</td><td>2015</td><td>2021</td></tr><tr><td>Status</td><td>Maintaining</td><td>Active</td></tr><tr><td>Package Number</td><td>1</td><td>12+</td></tr><tr><td>Architecture</td><td>All in one</td><td>Separated</td></tr><tr><td>Browser Compatibility</td><td>Modern browsers / IE 9+</td><td>Modern browsers</td></tr><tr><td>Extensible</td><td>No</td><td>Yes</td></tr><tr><td>Customizable</td><td>No</td><td>Yes</td></tr><tr><td>CSS-in-JS</td><td>No</td><td>Yes</td></tr><tr><td>Import on-demand</td><td>No</td><td>Yes</td></tr><tr><td>Multiple selections</td><td>No</td><td>Yes</td></tr><tr><td>Rotate image on touch</td><td>No</td><td>Yes</td></tr></tbody></table><ul><li><strong>What is the difference between Cropper, Cropper.js, and jQuery Cropper?</strong></li></ul>',6),p=(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",null,"GitHub Project"),(0,e._)("th",null,"npm Package"),(0,e._)("th",null,"Dependencies"),(0,e._)("th",null,"Funded"),(0,e._)("th",null,"Status"),(0,e._)("th",null,"Description")])],-1),l={href:"https://github.com/fengyuanchen/cropper",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("Cropper"),r={href:"https://www.npmjs.com/package/cropper",target:"_blank",rel:"noopener noreferrer"},c=(0,e._)("code",null,"cropper",-1),u={href:"https://www.npmjs.com/package/jquery",target:"_blank",rel:"noopener noreferrer"},i=(0,e._)("code",null,"jquery",-1),k=(0,e._)("td",null,"2014",-1),d=(0,e._)("td",null,"Deprecated",-1),_=(0,e._)("td",null,"A simple jQuery image cropping plugin.",-1),m={href:"https://github.com/fengyuanchen/cropperjs",target:"_blank",rel:"noopener noreferrer"},g=(0,e.Uk)("Cropper.js"),h={href:"https://www.npmjs.com/package/cropperjs",target:"_blank",rel:"noopener noreferrer"},f=(0,e._)("code",null,"cropperjs",-1),U=(0,e._)("td",null,"-",-1),v=(0,e._)("td",null,"2015",-1),w=(0,e._)("td",null,"Active",-1),b=(0,e._)("td",null,"JavaScript image cropper.",-1),C={href:"https://github.com/fengyuanchen/jquery-cropper",target:"_blank",rel:"noopener noreferrer"},j=(0,e.Uk)("jQuery Cropper"),y={href:"https://www.npmjs.com/package/jquery-cropper",target:"_blank",rel:"noopener noreferrer"},q=(0,e._)("code",null,"jquery-cropper",-1),x={href:"https://www.npmjs.com/package/jquery",target:"_blank",rel:"noopener noreferrer"},W=(0,e._)("code",null,"jquery",-1),E=(0,e.Uk)(" + "),A={href:"https://www.npmjs.com/package/cropperjs",target:"_blank",rel:"noopener noreferrer"},I=(0,e._)("code",null,"cropperjs",-1),S=(0,e._)("td",null,"2018",-1),T=(0,e._)("td",null,"Maintaining",-1),V=(0,e._)("td",null,"A jQuery plugin wrapper for Cropper.js.",-1),z=(0,e.uE)('<h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting started</h2><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3><h4 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h4><p>npm is the recommended installation method when building large-scale applications with Cropper.js.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> cropperjs@next\n</code></pre></div><p>For a specific package:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @cropper/element-canvas\n</code></pre></div><h4 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> CDN</h4><p>For prototyping or learning purposes, you can use the latest version with:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/cropperjs@next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- ECMAScript Module --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/cropperjs@next/dist/cropper.esm.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>For production, we recommend linking to a specific version number and build to avoid unexpected breakage from newer versions.</p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><h4 id="use-is-javascript" tabindex="-1"><a class="header-anchor" href="#use-is-javascript" aria-hidden="true">#</a> Use is JavaScript</h4><p>Import the Cropper class and constructing a new Cropper instance.</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> Cropper <span class="token keyword">from</span> <span class="token string">&#39;cropperjs&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> cropper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cropper</span><span class="token punctuation">(</span><span class="token string">&#39;#image&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/cropperjs/v2/picture.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Picture<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h4 id="use-in-dom" tabindex="-1"><a class="header-anchor" href="#use-in-dom" aria-hidden="true">#</a> Use in DOM</h4>',17),P=(0,e.Uk)("Import all Cropper elements from the "),M=(0,e._)("code",null,"cropperjs",-1),D=(0,e.Uk)(" package and "),F={href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define",target:"_blank",rel:"noopener noreferrer"},N=(0,e.Uk)("define"),H=(0,e.Uk)(" them as custom elements automatically."),G=(0,e.uE)('<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;cropperjs&#39;</span><span class="token punctuation">;</span>\n</code></pre></div>',1),O=(0,e._)("div",{class:"language-html ext-html"},[(0,e._)("pre",{class:"language-html"},[(0,e._)("code",null,[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-canvas")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"background"),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-image")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"src"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("/cropperjs/v2/picture.jpg"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"alt"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("Picture"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-image")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-shade")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"hidden"),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-shade")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-handle")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"action"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("select"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"plain"),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-handle")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-selection")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"initial-coverage"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("0.5"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"movable"),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"resizable"),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"zoomable"),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-grid")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"role"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("grid"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"covered"),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-grid")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-crosshair")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"centered"),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-crosshair")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-handle")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"action"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("move"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"theme-color"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("rgba(255, 255, 255, 0.35)"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-handle")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-handle")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"action"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("n-resize"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-handle")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-handle")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"action"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("e-resize"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-handle")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-handle")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"action"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("s-resize"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-handle")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-handle")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"action"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("w-resize"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-handle")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-handle")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"action"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("ne-resize"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-handle")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-handle")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"action"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("nw-resize"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-handle")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-handle")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"action"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("se-resize"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-handle")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-handle")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"action"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("sw-resize"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-handle")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-selection")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-canvas")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n")])])],-1),Y=(0,e._)("h4",{id:"use-on-demand",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#use-on-demand","aria-hidden":"true"},"#"),(0,e.Uk)(" Use on-demand")],-1),L=(0,e.Uk)("Import the required Cropper elements only and "),B={href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define",target:"_blank",rel:"noopener noreferrer"},J=(0,e.Uk)("define"),Q=(0,e.Uk)(" them as custom elements manually."),R=(0,e.uE)('<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> CropperCanvas <span class="token keyword">from</span> <span class="token string">&#39;@cropper/element-canvas&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> CropperImage <span class="token keyword">from</span> <span class="token string">&#39;@cropper/element-image&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> CropperHandle <span class="token keyword">from</span> <span class="token string">&#39;@cropper/element-handle&#39;</span><span class="token punctuation">;</span>\n\nCropperCanvas<span class="token punctuation">.</span><span class="token function">$define</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nCropperImage<span class="token punctuation">.</span><span class="token function">$define</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nCropperHandle<span class="token punctuation">.</span><span class="token function">$define</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',1),$=(0,e._)("div",{class:"language-html ext-html"},[(0,e._)("pre",{class:"language-html"},[(0,e._)("code",null,[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-canvas")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"background"),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-image")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"src"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("/cropperjs/v2/picture.jpg"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"alt"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("Picture"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-image")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n  "),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"<"),(0,e.Uk)("cropper-handle")]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"action"),(0,e._)("span",{class:"token attr-value"},[(0,e._)("span",{class:"token punctuation attr-equals"},"="),(0,e._)("span",{class:"token punctuation"},'"'),(0,e.Uk)("move"),(0,e._)("span",{class:"token punctuation"},'"')]),(0,e.Uk)(),(0,e._)("span",{class:"token attr-name"},"plain"),(0,e._)("span",{class:"token punctuation"},">")]),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-handle")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token tag"},[(0,e._)("span",{class:"token punctuation"},"</"),(0,e.Uk)("cropper-canvas")]),(0,e._)("span",{class:"token punctuation"},">")]),(0,e.Uk)("\n")])])],-1),Z=(0,e._)("h2",{id:"packages",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#packages","aria-hidden":"true"},"#"),(0,e.Uk)(" Packages")],-1),K=(0,e.Uk)("Cropper.js contains a series of "),X={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},nn=(0,e.Uk)("npm"),an=(0,e.Uk)(" packages:"),tn=(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",null,"Package"),(0,e._)("th",null,"Version"),(0,e._)("th",null,"Description")])],-1),en=(0,e._)("td",null,[(0,e._)("code",null,"cropperjs")],-1),sn={href:"https://www.npmjs.com/package/cropperjs/v/next",target:"_blank",rel:"noopener noreferrer"},pn=(0,e._)("img",{src:"https://img.shields.io/npm/v/cropperjs/next",alt:"Version"},null,-1),ln=(0,e._)("td",null,"The all-in-one package.",-1),on=(0,e._)("td",null,[(0,e._)("code",null,"@cropper/element")],-1),rn={href:"https://www.npmjs.com/package/@cropper/element",target:"_blank",rel:"noopener noreferrer"},cn=(0,e._)("img",{src:"https://img.shields.io/npm/v/@cropper/element",alt:"Version"},null,-1),un=(0,e._)("td",null,"An abstract class for constructing Cropper elements.",-1),kn=(0,e._)("td",null,[(0,e._)("code",null,"@cropper/element-canvas")],-1),dn={href:"https://www.npmjs.com/package/@cropper/element-canvas",target:"_blank",rel:"noopener noreferrer"},_n=(0,e._)("img",{src:"https://img.shields.io/npm/v/@cropper/element-canvas",alt:"Version"},null,-1),mn=(0,e._)("td",null,"A custom canvas element for the Cropper.",-1),gn=(0,e._)("td",null,[(0,e._)("code",null,"@cropper/element-image")],-1),hn={href:"https://www.npmjs.com/package/@cropper/element-image",target:"_blank",rel:"noopener noreferrer"},fn=(0,e._)("img",{src:"https://img.shields.io/npm/v/@cropper/element-image",alt:"Version"},null,-1),Un=(0,e._)("td",null,"A custom image element for the Cropper.",-1),vn=(0,e._)("td",null,[(0,e._)("code",null,"@cropper/element-shade")],-1),wn={href:"https://www.npmjs.com/package/@cropper/element-shade",target:"_blank",rel:"noopener noreferrer"},bn=(0,e._)("img",{src:"https://img.shields.io/npm/v/@cropper/element-shade",alt:"Version"},null,-1),Cn=(0,e._)("td",null,"A custom shade element for the Cropper.",-1),jn=(0,e._)("td",null,[(0,e._)("code",null,"@cropper/element-handle")],-1),yn={href:"https://www.npmjs.com/package/@cropper/element-handle",target:"_blank",rel:"noopener noreferrer"},qn=(0,e._)("img",{src:"https://img.shields.io/npm/v/@cropper/element-handle",alt:"Version"},null,-1),xn=(0,e._)("td",null,"A custom handle element for the Cropper.",-1),Wn=(0,e._)("td",null,[(0,e._)("code",null,"@cropper/element-selection")],-1),En={href:"https://www.npmjs.com/package/@cropper/element-selection",target:"_blank",rel:"noopener noreferrer"},An=(0,e._)("img",{src:"https://img.shields.io/npm/v/@cropper/element-selection",alt:"Version"},null,-1),In=(0,e._)("td",null,"A custom selection element for the Cropper.",-1),Sn=(0,e._)("td",null,[(0,e._)("code",null,"@cropper/element-grid")],-1),Tn={href:"https://www.npmjs.com/package/@cropper/element-grid",target:"_blank",rel:"noopener noreferrer"},Vn=(0,e._)("img",{src:"https://img.shields.io/npm/v/@cropper/element-grid",alt:"Version"},null,-1),zn=(0,e._)("td",null,"A custom grid element for the Cropper.",-1),Pn=(0,e._)("td",null,[(0,e._)("code",null,"@cropper/element-crosshair")],-1),Mn={href:"https://www.npmjs.com/package/@cropper/element-crosshair",target:"_blank",rel:"noopener noreferrer"},Dn=(0,e._)("img",{src:"https://img.shields.io/npm/v/@cropper/element-crosshair",alt:"Version"},null,-1),Fn=(0,e._)("td",null,"A custom crosshair element for the Cropper.",-1),Nn=(0,e._)("td",null,[(0,e._)("code",null,"@cropper/element-viewer")],-1),Hn={href:"https://www.npmjs.com/package/@cropper/element-viewer",target:"_blank",rel:"noopener noreferrer"},Gn=(0,e._)("img",{src:"https://img.shields.io/npm/v/@cropper/element-viewer",alt:"Version"},null,-1),On=(0,e._)("td",null,"A custom viewer element for the Cropper.",-1),Yn=(0,e._)("td",null,[(0,e._)("code",null,"@cropper/elements")],-1),Ln={href:"https://www.npmjs.com/package/@cropper/elements",target:"_blank",rel:"noopener noreferrer"},Bn=(0,e._)("img",{src:"https://img.shields.io/npm/v/@cropper/elements",alt:"Version"},null,-1),Jn=(0,e._)("td",null,"A series of custom elements for the Cropper.",-1),Qn=(0,e._)("td",null,[(0,e._)("code",null,"@cropper/utils")],-1),Rn={href:"https://www.npmjs.com/package/@cropper/utils",target:"_blank",rel:"noopener noreferrer"},$n=(0,e._)("img",{src:"https://img.shields.io/npm/v/@cropper/utils",alt:"Version"},null,-1),Zn=(0,e._)("td",null,"A series of common constants and utility functions for Cropper.",-1),Kn=(0,e._)("h2",{id:"interfaces",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#interfaces","aria-hidden":"true"},"#"),(0,e.Uk)(" Interfaces")],-1),Xn=(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",null,"Interface"),(0,e._)("th",null,"Inherits"),(0,e._)("th",null,"Description")])],-1),na=(0,e._)("tr",null,[(0,e._)("td",null,[(0,e._)("code",null,"Cropper")]),(0,e._)("td",null,[(0,e._)("code",null,"Function")]),(0,e._)("td",null,[(0,e.Uk)("The "),(0,e._)("code",null,"Cropper"),(0,e.Uk)(" constructor creates a new Cropper instance.")])],-1),aa=(0,e._)("td",null,[(0,e._)("code",null,"CropperElement")],-1),ta=(0,e._)("td",null,[(0,e._)("code",null,"HTMLElement")],-1),ea=(0,e.Uk)("The "),sa=(0,e._)("code",null,"CropperElement",-1),pa=(0,e.Uk)(" interface represents any Cropper element, extends the "),la={href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement",target:"_blank",rel:"noopener noreferrer"},oa=(0,e.Uk)("HTMLElement"),ra=(0,e.Uk)(" interface."),ca=(0,e._)("tr",null,[(0,e._)("td",null,[(0,e._)("code",null,"CropperCanvas")]),(0,e._)("td",null,[(0,e._)("code",null,"CropperElement")]),(0,e._)("td",null,[(0,e.Uk)("The "),(0,e._)("code",null,"CropperCanvas"),(0,e.Uk)(" interface provides properties and methods for manipulating the layout and presentation of "),(0,e._)("code",null,"<cropper-canvas>"),(0,e.Uk)(" elements.")])],-1),ua=(0,e._)("tr",null,[(0,e._)("td",null,[(0,e._)("code",null,"CropperImage")]),(0,e._)("td",null,[(0,e._)("code",null,"CropperElement")]),(0,e._)("td",null,[(0,e.Uk)("The "),(0,e._)("code",null,"CropperImage"),(0,e.Uk)(" interface provides properties and methods for manipulating the layout and presentation of "),(0,e._)("code",null,"<cropper-image>"),(0,e.Uk)(" elements.")])],-1),ia=(0,e._)("tr",null,[(0,e._)("td",null,[(0,e._)("code",null,"CropperShade")]),(0,e._)("td",null,[(0,e._)("code",null,"CropperElement")]),(0,e._)("td",null,[(0,e.Uk)("The "),(0,e._)("code",null,"CropperShade"),(0,e.Uk)(" interface provides properties and methods for manipulating the layout and presentation of "),(0,e._)("code",null,"<cropper-shade>"),(0,e.Uk)(" elements.")])],-1),ka=(0,e._)("tr",null,[(0,e._)("td",null,[(0,e._)("code",null,"CropperHandle")]),(0,e._)("td",null,[(0,e._)("code",null,"CropperElement")]),(0,e._)("td",null,[(0,e.Uk)("The "),(0,e._)("code",null,"CropperHandle"),(0,e.Uk)(" interface provides properties and methods for manipulating the layout and presentation of "),(0,e._)("code",null,"<cropper-handle>"),(0,e.Uk)(" elements.")])],-1),da=(0,e._)("tr",null,[(0,e._)("td",null,[(0,e._)("code",null,"CropperSelection")]),(0,e._)("td",null,[(0,e._)("code",null,"CropperElement")]),(0,e._)("td",null,[(0,e.Uk)("The "),(0,e._)("code",null,"CropperSelection"),(0,e.Uk)(" interface provides properties and methods for manipulating the layout and presentation of "),(0,e._)("code",null,"<cropper-selection>"),(0,e.Uk)(" elements.")])],-1),_a=(0,e._)("tr",null,[(0,e._)("td",null,[(0,e._)("code",null,"CropperGrid")]),(0,e._)("td",null,[(0,e._)("code",null,"CropperElement")]),(0,e._)("td",null,[(0,e.Uk)("The "),(0,e._)("code",null,"CropperGrid"),(0,e.Uk)(" interface provides properties and methods for manipulating the layout and presentation of "),(0,e._)("code",null,"<cropper-grid>"),(0,e.Uk)(" elements.")])],-1),ma=(0,e._)("tr",null,[(0,e._)("td",null,[(0,e._)("code",null,"CropperCrosshair")]),(0,e._)("td",null,[(0,e._)("code",null,"CropperElement")]),(0,e._)("td",null,[(0,e.Uk)("The "),(0,e._)("code",null,"CropperCrosshair"),(0,e.Uk)(" interface provides properties and methods for manipulating the layout and presentation of "),(0,e._)("code",null,"<cropper-crosshair>"),(0,e.Uk)(" elements.")])],-1),ga=(0,e._)("tr",null,[(0,e._)("td",null,[(0,e._)("code",null,"CropperViewer")]),(0,e._)("td",null,[(0,e._)("code",null,"CropperElement")]),(0,e._)("td",null,[(0,e.Uk)("The "),(0,e._)("code",null,"CropperViewer"),(0,e.Uk)(" interface provides properties and methods for manipulating the layout and presentation of "),(0,e._)("code",null,"<cropper-viewer>"),(0,e.Uk)(" elements.")])],-1),ha=(0,e.uE)('<h2 id="browser-support" tabindex="-1"><a class="header-anchor" href="#browser-support" aria-hidden="true">#</a> Browser support</h2><ul><li>Edge 79+</li><li>Firefox 63+</li><li>Chrome 54+</li><li>Safari 10.1+</li><li>Opera 41+</li><li>iOS Safari 10.3+</li><li>Android Browser 81+</li><li>Opera Mobile 46+</li><li>Chrome for Android 81+</li><li>Firefox for Android 68+</li><li>Samsung Internet 6.2+</li></ul>',2),fa={};var Ua=(0,t(3744).Z)(fa,[["render",function(n,a){const t=(0,e.up)("ExternalLinkIcon"),fa=(0,e.up)("LiveDemo"),Ua=(0,e.up)("ClientOnly");return(0,e.wg)(),(0,e.iD)("div",null,[s,(0,e._)("table",null,[p,(0,e._)("tbody",null,[(0,e._)("tr",null,[(0,e._)("td",null,[(0,e._)("a",l,[o,(0,e.Wm)(t)])]),(0,e._)("td",null,[(0,e._)("a",r,[c,(0,e.Wm)(t)])]),(0,e._)("td",null,[(0,e._)("a",u,[i,(0,e.Wm)(t)])]),k,d,_]),(0,e._)("tr",null,[(0,e._)("td",null,[(0,e._)("a",m,[g,(0,e.Wm)(t)])]),(0,e._)("td",null,[(0,e._)("a",h,[f,(0,e.Wm)(t)])]),U,v,w,b]),(0,e._)("tr",null,[(0,e._)("td",null,[(0,e._)("a",C,[j,(0,e.Wm)(t)])]),(0,e._)("td",null,[(0,e._)("a",y,[q,(0,e.Wm)(t)])]),(0,e._)("td",null,[(0,e._)("a",x,[W,(0,e.Wm)(t)]),E,(0,e._)("a",A,[I,(0,e.Wm)(t)])]),S,T,V])])]),z,(0,e._)("p",null,[P,M,D,(0,e._)("a",F,[N,(0,e.Wm)(t)]),H]),G,(0,e.Wm)(Ua,null,{default:(0,e.w5)((()=>[(0,e.Wm)(fa,null,{default:(0,e.w5)((()=>[O])),_:1})])),_:1}),Y,(0,e._)("p",null,[L,(0,e._)("a",B,[J,(0,e.Wm)(t)]),Q]),R,(0,e.Wm)(Ua,null,{default:(0,e.w5)((()=>[(0,e.Wm)(fa,null,{default:(0,e.w5)((()=>[$])),_:1})])),_:1}),Z,(0,e._)("p",null,[K,(0,e._)("a",X,[nn,(0,e.Wm)(t)]),an]),(0,e._)("table",null,[tn,(0,e._)("tbody",null,[(0,e._)("tr",null,[en,(0,e._)("td",null,[(0,e._)("a",sn,[pn,(0,e.Wm)(t)])]),ln]),(0,e._)("tr",null,[on,(0,e._)("td",null,[(0,e._)("a",rn,[cn,(0,e.Wm)(t)])]),un]),(0,e._)("tr",null,[kn,(0,e._)("td",null,[(0,e._)("a",dn,[_n,(0,e.Wm)(t)])]),mn]),(0,e._)("tr",null,[gn,(0,e._)("td",null,[(0,e._)("a",hn,[fn,(0,e.Wm)(t)])]),Un]),(0,e._)("tr",null,[vn,(0,e._)("td",null,[(0,e._)("a",wn,[bn,(0,e.Wm)(t)])]),Cn]),(0,e._)("tr",null,[jn,(0,e._)("td",null,[(0,e._)("a",yn,[qn,(0,e.Wm)(t)])]),xn]),(0,e._)("tr",null,[Wn,(0,e._)("td",null,[(0,e._)("a",En,[An,(0,e.Wm)(t)])]),In]),(0,e._)("tr",null,[Sn,(0,e._)("td",null,[(0,e._)("a",Tn,[Vn,(0,e.Wm)(t)])]),zn]),(0,e._)("tr",null,[Pn,(0,e._)("td",null,[(0,e._)("a",Mn,[Dn,(0,e.Wm)(t)])]),Fn]),(0,e._)("tr",null,[Nn,(0,e._)("td",null,[(0,e._)("a",Hn,[Gn,(0,e.Wm)(t)])]),On]),(0,e._)("tr",null,[Yn,(0,e._)("td",null,[(0,e._)("a",Ln,[Bn,(0,e.Wm)(t)])]),Jn]),(0,e._)("tr",null,[Qn,(0,e._)("td",null,[(0,e._)("a",Rn,[$n,(0,e.Wm)(t)])]),Zn])])]),Kn,(0,e._)("table",null,[Xn,(0,e._)("tbody",null,[na,(0,e._)("tr",null,[aa,ta,(0,e._)("td",null,[ea,sa,pa,(0,e._)("a",la,[oa,(0,e.Wm)(t)]),ra])]),ca,ua,ia,ka,da,_a,ma,ga])]),ha])}]])},3744:function(n,a){a.Z=(n,a)=>{const t=n.__vccOpts||n;for(const[n,e]of a)t[n]=e;return t}}}]);