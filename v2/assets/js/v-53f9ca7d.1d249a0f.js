"use strict";(self.webpackChunkcropperjs=self.webpackChunkcropperjs||[]).push([[923],{9394:function(a,n,s){s.r(n),s.d(n,{data:function(){return t}});const t=JSON.parse('{"key":"v-53f9ca7d","path":"/zh/api/","title":"Cropper","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"实例属性","slug":"实例属性","link":"#实例属性","children":[]},{"level":2,"title":"实例方法","slug":"实例方法","link":"#实例方法","children":[{"level":3,"title":"getCropperCanvas","slug":"getcroppercanvas","link":"#getcroppercanvas","children":[]},{"level":3,"title":"getCropperImage","slug":"getcropperimage","link":"#getcropperimage","children":[]},{"level":3,"title":"getCropperSelection","slug":"getcropperselection","link":"#getcropperselection","children":[]},{"level":3,"title":"getCropperSelections","slug":"getcropperselections","link":"#getcropperselections","children":[]}]}],"git":{"updatedTime":1670149517000,"contributors":[{"name":"Chen Fengyuan","email":"chenfengyuan@outlook.com","commits":1}]},"filePathRelative":"zh/api/README.md"}')},5634:function(a,n,s){s.r(n),s.d(n,{default:function(){return c}});var t=s(6252);const p=(0,t.uE)('<h1 id="cropper" tabindex="-1"><a class="header-anchor" href="#cropper" aria-hidden="true">#</a> Cropper</h1><p><code>Cropper</code> 构造函数用于创建一个新的 Cropper 实例。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Cropper</span><span class="token punctuation">(</span>element<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre></div><ul><li><p><strong>element</strong></p><ul><li>类型：<code>HTMLImageElement | HTMLCanvasElement | string</code></li><li>用于裁剪的目标图像或画布元素。如果是字符串，将传入 <a href="https%EF%BC%9A//developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector"><code>document.querySelector</code></a> 中去查找元素。</li></ul></li><li><p><strong>options</strong> (可选)</p><ul><li>类型：<code>Object</code></li><li>用于裁剪的<a href="#options">选项</a>。</li></ul></li></ul><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3>',7),e=(0,t.uE)('<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cropper-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Cropper <span class="token keyword">from</span> <span class="token string">&#39;cropperjs&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nimage<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;/cropperjs/v2/picture.jpg&#39;</span><span class="token punctuation">;</span>\nimage<span class="token punctuation">.</span>alt <span class="token operator">=</span> <span class="token string">&#39;Picture&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> cropper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cropper</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">&#39;.cropper-container&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cropper<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>container</td><td><code>Element | string</code></td><td>默认为目标元素的父元素，如果父元素为空，则为 <code>document.body</code>。</td><td>Cropper 容器。如果是字符串，将传入 <code>document.querySelector</code> 中去查找元素。</td></tr><tr><td>template</td><td><code>string</code></td><td>默认为内置模板，见下文。</td><td>Cropper 模板。</td></tr></tbody></table><p>Cropper 的默认模板：</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-canvas</span> <span class="token attr-name">background</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-image</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-image</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-shade</span> <span class="token attr-name">hidden</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-shade</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>select<span class="token punctuation">&quot;</span></span> <span class="token attr-name">plain</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-selection</span> <span class="token attr-name">initial-coverage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0.5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">movable</span> <span class="token attr-name">resizable</span> <span class="token attr-name">zoomable</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-grid</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grid<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bordered</span> <span class="token attr-name">covered</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-grid</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-crosshair</span> <span class="token attr-name">theme-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rgba(238, 238, 238, 0.5)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">centered</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-crosshair</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>move<span class="token punctuation">&quot;</span></span> <span class="token attr-name">theme-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rgba(255, 255, 255, 0.35)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>n-resize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>e-resize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>s-resize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>w-resize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ne-resize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nw-resize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>se-resize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-handle</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sw-resize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-handle</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-selection</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-canvas</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="实例属性" tabindex="-1"><a class="header-anchor" href="#实例属性" aria-hidden="true">#</a> 实例属性</h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>element</td><td><code>HTMLImageElement | HTMLCanvasElement</code></td><td>标准化的 Cropper 元素。</td></tr><tr><td>options</td><td><code>Object</code></td><td>标准化的 Cropper 选项。</td></tr><tr><td>container</td><td><code>Element</code></td><td>标准化的 Cropper 容器。</td></tr></tbody></table><h2 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h2><h3 id="getcroppercanvas" tabindex="-1"><a class="header-anchor" href="#getcroppercanvas" aria-hidden="true">#</a> getCropperCanvas</h3><ul><li><strong>语法</strong>：<code>getCropperCanvas()</code></li><li><strong>等同于</strong>：<code>cropper.container.querySelector(&#39;cropper-canvas&#39;)</code></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperCanvas | null</code></li><li><code>&lt;cropper-canvas&gt;</code> 元素（如果有）。</li></ul></li></ul><p>获取 Cropper 容器中的 <code>&lt;cropper-canvas&gt;</code> 元素。</p><h3 id="getcropperimage" tabindex="-1"><a class="header-anchor" href="#getcropperimage" aria-hidden="true">#</a> getCropperImage</h3><ul><li><strong>语法</strong>：<code>getCropperImage()</code></li><li><strong>等同于</strong>：<code>cropper.container.querySelector(&#39;cropper-image&#39;)</code></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperImage | null</code></li><li><code>&lt;cropper-image&gt;</code> 元素（如果有）。</li></ul></li></ul><p>获取 Cropper 容器中的 <code>&lt;cropper-image&gt;</code> 元素。</p><h3 id="getcropperselection" tabindex="-1"><a class="header-anchor" href="#getcropperselection" aria-hidden="true">#</a> getCropperSelection</h3><ul><li><strong>语法</strong>：<code>getCropperSelection()</code></li><li><strong>等同于</strong>：<code>cropper.container.querySelector(&#39;cropper-selection&#39;)</code></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperSelection | null</code></li><li><code>&lt;cropper-selection&gt;</code> 元素（如果有）。</li></ul></li></ul><p>获取 Cropper 容器中的 <code>&lt;cropper-selection&gt;</code> 元素。</p><h3 id="getcropperselections" tabindex="-1"><a class="header-anchor" href="#getcropperselections" aria-hidden="true">#</a> getCropperSelections</h3><ul><li><strong>语法</strong>：<code>getCropperSelections()</code></li><li><strong>等同于</strong>：<code>cropper.container.querySelectorAll(&#39;cropper-selection&#39;)</code></li><li><strong>返回值</strong>： <ul><li>类型：<code>NodeListOf&lt;CropperSelection&gt; | null</code></li><li><code>&lt;cropper-selection&gt;</code> 元素（如果有）。</li></ul></li></ul><p>当有多个选择时，获取 Cropper 容器中的所有 <code>&lt;cropper-selection&gt;</code> 元素。</p>',21),o={};var c=(0,s(3744).Z)(o,[["render",function(a,n){const s=(0,t.up)("CropperExample"),o=(0,t.up)("ClientOnly");return(0,t.wg)(),(0,t.iD)("div",null,[p,(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s)])),_:1}),e])}]])}}]);