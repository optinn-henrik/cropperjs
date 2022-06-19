"use strict";(self.webpackChunkcropperjs=self.webpackChunkcropperjs||[]).push([[53],{8607:function(e,t,n){n.r(t),n.d(t,{data:function(){return a}});const a=JSON.parse('{"key":"v-1cf7beb3","path":"/api/cropper-canvas.html","title":"CropperCanvas","lang":"en-US","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"Examples","slug":"examples","children":[{"level":3,"title":"Basic","slug":"basic","children":[]},{"level":3,"title":"Background","slug":"background","children":[]},{"level":3,"title":"Interactive","slug":"interactive","children":[]},{"level":3,"title":"Disabled","slug":"disabled","children":[]}]},{"level":2,"title":"Properties","slug":"properties","children":[]},{"level":2,"title":"Methods","slug":"methods","children":[{"level":3,"title":"$setAction","slug":"setaction","children":[]},{"level":3,"title":"$toCanvas","slug":"tocanvas","children":[]}]},{"level":2,"title":"Events","slug":"events","children":[{"level":3,"title":"action","slug":"action","children":[]},{"level":3,"title":"actionstart","slug":"actionstart","children":[]},{"level":3,"title":"actionmove","slug":"actionmove","children":[]},{"level":3,"title":"actionend","slug":"actionend","children":[]}]},{"level":2,"title":"Slots","slug":"slots","children":[]}],"git":{"updatedTime":1655623672000,"contributors":[{"name":"Chen Fengyuan","email":"chenfengyuan@outlook.com","commits":1}]},"filePathRelative":"api/cropper-canvas.md"}')},3235:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var a=n(6252);const s=(0,a.uE)('<h1 id="croppercanvas" tabindex="-1"><a class="header-anchor" href="#croppercanvas" aria-hidden="true">#</a> CropperCanvas</h1><p>The <code>CropperCanvas</code> interface provides properties and methods for manipulating the layout and presentation of <code>&lt;cropper-canvas&gt;</code> elements.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><h3 id="basic" tabindex="-1"><a class="header-anchor" href="#basic" aria-hidden="true">#</a> Basic</h3>',4),o=(0,a._)("div",{class:"language-html ext-html"},[(0,a._)("pre",{class:"language-html"},[(0,a._)("code",null,[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("cropper-canvas")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("cropper-canvas")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])])],-1),l=(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"TIP"),(0,a._)("p",null,[(0,a.Uk)("The default minimum width and minimum height of this element are "),(0,a._)("code",null,"200px"),(0,a.Uk)(" and "),(0,a._)("code",null,"100px"),(0,a.Uk)(".")])],-1),c=(0,a._)("h3",{id:"background",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#background","aria-hidden":"true"},"#"),(0,a.Uk)(" Background")],-1),i=(0,a._)("div",{class:"language-html ext-html"},[(0,a._)("pre",{class:"language-html"},[(0,a._)("code",null,[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("cropper-canvas")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"background"),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("cropper-canvas")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])])],-1),p=(0,a._)("h3",{id:"interactive",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#interactive","aria-hidden":"true"},"#"),(0,a.Uk)(" Interactive")],-1),r=(0,a._)("div",{class:"language-html ext-html"},[(0,a._)("pre",{class:"language-html"},[(0,a._)("code",null,[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("cropper-canvas")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"background"),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("cropper-image")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"src"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("/cropperjs/v2/picture.jpg"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"alt"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("Picture"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("cropper-image")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("cropper-handle")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"action"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("move"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"plain"),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("cropper-handle")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("cropper-canvas")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])])],-1),d=(0,a._)("h3",{id:"disabled",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#"),(0,a.Uk)(" Disabled")],-1),u=(0,a._)("p",null,"All pointer events are disabled.",-1),h=(0,a._)("div",{class:"language-html ext-html"},[(0,a._)("pre",{class:"language-html"},[(0,a._)("code",null,[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("cropper-canvas")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"background"),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"disabled"),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("cropper-image")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"src"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("/cropperjs/v2/picture.jpg"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"alt"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("Picture"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("cropper-image")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("cropper-handle")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"action"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("move"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"plain"),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("cropper-handle")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("cropper-canvas")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])])],-1),g=(0,a._)("h2",{id:"properties",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),(0,a.Uk)(" Properties")],-1),k=(0,a.Uk)("Inherits properties from its parent, "),v=(0,a._)("code",null,"CropperElement",-1),_=(0,a.Uk)(", and implements the following properties:"),m=(0,a.uE)('<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Options</th><th>Description</th></tr></thead><tbody><tr><td>background</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>Indicates whether this element has a grid background.</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>Indicates whether this element is disabled.</td></tr><tr><td>scaleStep</td><td><code>number</code></td><td><code>0.1</code></td><td>-</td><td>Indicates the stepping interval of the scaling factor when zooming in/out by wheeling, must a positive number.</td></tr><tr><td>themeColor</td><td><code>string</code></td><td><code>&quot;#39f&quot;</code></td><td>-</td><td>Indicates the primary color of this element and its children.</td></tr></tbody></table><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><h3 id="setaction" tabindex="-1"><a class="header-anchor" href="#setaction" aria-hidden="true">#</a> $setAction</h3><ul><li><strong>Syntax</strong>: <code>$setAction(action)</code></li><li><strong>Arguments</strong>: <ul><li><code>action</code>: <ul><li>Type: <code>string</code></li><li>The new action.</li></ul></li></ul></li><li><strong>Returns</strong>: <ul><li>Type: <code>CropperCanvas</code></li><li>The element instance for chaining.</li></ul></li></ul><p>Changes the current action to a new one.</p><h3 id="tocanvas" tabindex="-1"><a class="header-anchor" href="#tocanvas" aria-hidden="true">#</a> $toCanvas</h3>',6),b=(0,a.uE)("<li><strong>Syntax</strong>: <ul><li><code>$toCanvas()</code></li><li><code>$toCanvas(options)</code></li></ul></li><li><strong>Arguments</strong>: <ul><li><code>options</code>: <ul><li>Type: <code>Object</code></li><li>The available options.</li><li>Properties: <ul><li><code>width</code>: <ul><li>Type: <code>number</code></li><li>The width of the canvas.</li></ul></li><li><code>height</code>: <ul><li>Type: <code>number</code></li><li>The height of the canvas.</li></ul></li><li><code>beforeDraw</code>: <ul><li>Type: <code>Function</code></li><li>The function called before drawing the image onto the canvas.</li><li>Syntax: <code>beforeDraw(context, canvas)</code></li><li>Arguments: <ul><li><code>context</code>: <ul><li>Type: <code>CanvasRenderingContext2D</code></li><li>The 2D rendering context of the canvas.</li></ul></li><li><code>canvas</code>: <ul><li>Type: <code>HTMLCanvasElement</code></li><li>The canvas element itself.</li></ul></li></ul></li><li>Example: <code>function (context) { context.filter = &#39;grayscale(100%)&#39;; }</code></li></ul></li></ul></li></ul></li></ul></li><li><strong>Returns</strong>: <ul><li>Type: <code>Promise</code></li><li>A promise that resolves to the generated canvas element.</li></ul></li>",3),f=(0,a._)("strong",null,"Example",-1),T=(0,a.Uk)(":"),y=(0,a.uE)('<p>Generates a real canvas element, with the image drawn into if there is one.</p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><h3 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> action</h3><p>The event is fired when a pointer changes on the canvas.</p><ul><li>Event: <ul><li><strong>event.bubbles</strong>: <code>true</code></li><li><strong>event.cancelable</strong>: <code>false</code></li><li><strong>event.composed</strong>: <code>true</code></li><li><strong>event.detail</strong>: <ul><li>Type: <code>Object</code></li><li>The related data of the action.</li></ul></li><li><strong>event.detail.action</strong>: <ul><li>Type: <code>string</code></li><li>Options: <code>&quot;select&quot;</code>, <code>&quot;move&quot;</code>, <code>&quot;scale&quot;</code>, <code>&quot;rotate&quot;</code>, <code>&quot;transform&quot;</code>, <code>&quot;n-resize&quot;</code>, <code>&quot;e-resize&quot;</code>, <code>&quot;s-resize&quot;</code>, <code>&quot;w-resize&quot;</code>, <code>&quot;ne-resize&quot;</code>, <code>&quot;nw-resize&quot;</code>, <code>&quot;se-resize&quot;</code>, and <code>&quot;sw-resize&quot;</code>.</li><li>The action type.</li></ul></li><li><strong>event.detail.relatedEvent</strong>: <ul><li>Type: <code>PointerEvent | TouchEvent | MouseEvent | WheelEvent</code></li><li>The related native event that triggered this event.</li></ul></li><li><strong>event.detail.scale</strong>: <ul><li>Type: <code>number</code></li><li>The scaling factor, only available when the <code>action</code> is <code>&quot;scale&quot;</code> or <code>&quot;transform&quot;</code>.</li></ul></li><li><strong>event.detail.rotate</strong>: <ul><li>Type: <code>number</code></li><li>The scaling factor, only available when the <code>action</code> is <code>&quot;rotate&quot;</code>or <code>&quot;transform&quot;</code>.</li></ul></li><li><strong>event.detail.startX</strong>: <ul><li>Type: <code>number</code></li><li>The starting <code>pageX</code> value, only available when the <code>relatedEvent</code> is <code>PointerEvent</code>, <code>TouchEvent</code>, or <code>MouseEvent</code>.</li></ul></li><li><strong>event.detail.startY</strong>: <ul><li>Type: <code>number</code></li><li>The starting <code>pageY</code> value, only available when the <code>relatedEvent</code> is <code>PointerEvent</code>, <code>TouchEvent</code>, or <code>MouseEvent</code>.</li></ul></li><li><strong>event.detail.endX</strong>: <ul><li>Type: <code>number</code></li><li>The ending <code>pageX</code> value, only available when the <code>relatedEvent</code> is <code>PointerEvent</code>, <code>TouchEvent</code>, or <code>MouseEvent</code>.</li></ul></li><li><strong>event.detail.endY</strong>: <ul><li>Type: <code>number</code></li><li>The ending <code>pageY</code> value, only available when the <code>relatedEvent</code> is <code>PointerEvent</code>, <code>TouchEvent</code>, or <code>MouseEvent</code>.</li></ul></li></ul></li><li>Example:</li></ul><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canvas<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-canvas</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\ndocument<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;action&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="actionstart" tabindex="-1"><a class="header-anchor" href="#actionstart" aria-hidden="true">#</a> actionstart</h3><p>The event is fired when a pointer becomes active.</p><ul><li>Event: <ul><li><strong>event.bubbles</strong>: <code>true</code></li><li><strong>event.cancelable</strong>: <code>true</code></li><li><strong>event.composed</strong>: <code>true</code></li><li><strong>event.detail</strong>: <ul><li>Type: <code>Object</code></li><li>The related data of the action.</li></ul></li><li><strong>event.detail.action</strong>: <ul><li>Type: <code>string</code></li><li>Options: same as the <code>action</code> event.</li><li>The action type.</li></ul></li><li><strong>event.detail.relatedEvent</strong>: <ul><li>Type: <code>PointerEvent | TouchEvent | MouseEvent</code></li><li>The related native event that triggered this event.</li></ul></li></ul></li></ul><h3 id="actionmove" tabindex="-1"><a class="header-anchor" href="#actionmove" aria-hidden="true">#</a> actionmove</h3><p>This event is fired when a pointer changes coordinates.</p><ul><li>Event: <ul><li><strong>event.bubbles</strong>: <code>true</code></li><li><strong>event.cancelable</strong>: <code>true</code></li><li><strong>event.composed</strong>: <code>true</code></li><li><strong>event.detail</strong>: <ul><li>Type: <code>Object</code></li><li>The related data of the action.</li></ul></li><li><strong>event.detail.action</strong>: <ul><li>Type: <code>string</code></li><li>Options: same as the <code>action</code> event.</li><li>The action type.</li></ul></li><li><strong>event.detail.relatedEvent</strong>: <ul><li>Type: <code>PointerEvent | TouchEvent | MouseEvent</code></li><li>The related native event that triggered this event.</li></ul></li></ul></li></ul><h3 id="actionend" tabindex="-1"><a class="header-anchor" href="#actionend" aria-hidden="true">#</a> actionend</h3><p>This event is fired when a pointer is no longer active.</p><ul><li>Event: <ul><li><strong>event.bubbles</strong>: <code>true</code></li><li><strong>event.cancelable</strong>: <code>true</code></li><li><strong>event.composed</strong>: <code>true</code></li><li><strong>event.detail</strong>: <ul><li>Type: <code>Object</code></li><li>The related data of the action.</li></ul></li><li><strong>event.detail.action</strong>: <ul><li>Type: <code>string</code></li><li>Options: same as the <code>action</code> event.</li><li>The action type.</li></ul></li><li><strong>event.detail.relatedEvent</strong>: <ul><li>Type: <code>PointerEvent | TouchEvent | MouseEvent</code></li><li>The related native event that triggered this event.</li></ul></li></ul></li></ul><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><p>There is only one default slot in this element.</p><blockquote><p>You can disable it by setting the <code>slottable</code> property to <code>false</code>:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-canvas</span> <span class="token attr-name">slottable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-canvas</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></blockquote>',18),U={};var q=(0,n(3744).Z)(U,[["render",function(e,t){const n=(0,a.up)("LiveDemo"),U=(0,a.up)("ClientOnly"),q=(0,a.up)("RouterLink"),E=(0,a.up)("CropperCanvasToNativeCanvas");return(0,a.wg)(),(0,a.iD)("div",null,[s,(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[o])),_:1})])),_:1}),l,c,(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[i])),_:1})])),_:1}),p,(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[r])),_:1})])),_:1}),d,u,(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[h])),_:1})])),_:1}),g,(0,a._)("p",null,[k,(0,a.Wm)(q,{to:"/api/cropper-element.html"},{default:(0,a.w5)((()=>[v])),_:1}),_]),m,(0,a._)("ul",null,[b,(0,a._)("li",null,[f,T,(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(E)])),_:1})])]),y])}]])},3744:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}}}]);