import{_ as n,K as c,o as p,c as d,O as e,w as s,Z as r,k as l,a as o}from"./chunks/framework.0cfd5cb8.js";const T=JSON.parse('{"title":"CropperShade","description":"","frontmatter":{},"headers":[],"relativePath":"zh/api/cropper-shade.md","filePath":"zh/api/cropper-shade.md","lastUpdated":1692530043000}'),D={name:"zh/api/cropper-shade.md"},F=r('<h1 id="croppershade" tabindex="-1">CropperShade <a class="header-anchor" href="#croppershade" aria-label="Permalink to &quot;CropperShade&quot;">​</a></h1><p><code>CropperShade</code> 接口提供了用于操作 <code>&lt;cropper-shade&gt;</code> 元素的布局和表示的属性和方法。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3>',4),i=l("div",{class:"language-html"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"html"),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"cropper-shade"),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"cropper-shade"),l("span",{style:{color:"#89DDFF"}},">")])])])],-1),y=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},"TIP"),l("p",null,[o("此元素的默认宽度和高度为 "),l("code",null,"0"),o("。")])],-1),h=l("h3",{id:"指定位置和大小",tabindex:"-1"},[o("指定位置和大小 "),l("a",{class:"header-anchor",href:"#指定位置和大小","aria-label":'Permalink to "指定位置和大小"'},"​")],-1),u=l("div",{class:"language-html"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"html"),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"cropper-canvas"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"background"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"cropper-shade"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"x"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"265"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"y"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"5"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"width"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"160"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"height"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"90"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"cropper-shade"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"cropper-canvas"),l("span",{style:{color:"#89DDFF"}},">")])])])],-1),C=l("h3",{id:"自定义颜色",tabindex:"-1"},[o("自定义颜色 "),l("a",{class:"header-anchor",href:"#自定义颜色","aria-label":'Permalink to "自定义颜色"'},"​")],-1),m=l("div",{class:"language-html"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"html"),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"cropper-canvas"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"background"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"cropper-shade"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"x"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"265"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"y"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"5"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"width"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"160"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"height"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"90"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"theme-color"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"rgba(0, 0, 0, 0.35)"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"cropper-shade"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"cropper-canvas"),l("span",{style:{color:"#89DDFF"}},">")])])])],-1),_=l("h3",{id:"当指针按下-松开时动态切换可见性",tabindex:"-1"},[o("当指针按下/松开时动态切换可见性 "),l("a",{class:"header-anchor",href:"#当指针按下-松开时动态切换可见性","aria-label":'Permalink to "当指针按下/松开时动态切换可见性"'},"​")],-1),b=l("div",{class:"language-html"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"html"),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"cropper-canvas"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"background"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"cropper-image"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"src"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"/cropperjs/v2/picture.jpg"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"alt"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"Picture"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"cropper-image"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"cropper-shade"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"hidden"),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"cropper-shade"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"cropper-handle"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"action"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"select"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"plain"),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"cropper-handle"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"cropper-selection"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"movable"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"resizable"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"zoomable"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"hidden"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"cropper-handle"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"action"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"move"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"plain"),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"cropper-handle"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"cropper-selection"),l("span",{style:{color:"#89DDFF"}},">")]),o(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"cropper-canvas"),l("span",{style:{color:"#89DDFF"}},">")])])])],-1),g=r('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>&lt;cropper-shade&gt;</code> 元素将自动同步当前活动的 <code>&lt;cropper-selection&gt;</code> 元素的位置和大小。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/hidden" target="_blank" rel="noreferrer"><code>hidden</code></a> 属性是原生全局属性。</p></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><p>从其父级 <a href="./cropper-element.html"><code>CropperElement</code></a> 继承属性，并实现以下属性：</p><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>可选值</th><th>描述</th></tr></thead><tbody><tr><td>x</td><td><code>number</code></td><td><code>0</code></td><td>-</td><td>指示元素的 x 轴坐标。</td></tr><tr><td>y</td><td><code>number</code></td><td><code>0</code></td><td>-</td><td>指示元素的 y 轴坐标。</td></tr><tr><td>width</td><td><code>number</code></td><td><code>0</code></td><td>-</td><td>指示元素的宽度。</td></tr><tr><td>height</td><td><code>number</code></td><td><code>0</code></td><td>-</td><td>指示元素的高度。</td></tr><tr><td>slottable</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>指示此元素是否启用默认插槽。</td></tr><tr><td>themeColor</td><td><code>string</code></td><td><code>&quot;rgba(0, 0, 0, 0.65)&quot;</code></td><td>-</td><td>指示此元素的颜色。</td></tr></tbody></table><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="change" tabindex="-1">$change <a class="header-anchor" href="#change" aria-label="Permalink to &quot;$change&quot;">​</a></h3><ul><li><strong>语法</strong>： <ul><li><code>$change(x, y)</code></li><li><code>$change(x, y, width, height)</code></li></ul></li><li><strong>参数</strong>： <ul><li><code>x</code>： <ul><li>类型：<code>number</code></li><li>水平方向的新位置。</li></ul></li><li><code>y</code>： <ul><li>类型：<code>number</code></li><li>垂直方向的新位置。</li></ul></li><li><code>width</code>： <ul><li>类型：<code>number</code></li><li>默认值：<code>this.width</code></li><li>新宽度。</li></ul></li><li><code>height</code>： <ul><li>类型：<code>number</code></li><li>默认值：<code>this.height</code></li><li>新高度。</li></ul></li></ul></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperShade</code></li><li>用于链接的元素实例。</li></ul></li></ul><p>变更阴影的位置和/或大小。</p><h3 id="reset" tabindex="-1">$reset <a class="header-anchor" href="#reset" aria-label="Permalink to &quot;$reset&quot;">​</a></h3><ul><li><strong>语法</strong>：<code>$reset()</code></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperShade</code></li><li>元素实例。</li></ul></li></ul><p>将阴影重置为其初始位置和大小。</p><h3 id="render" tabindex="-1">$render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;$render&quot;">​</a></h3><ul><li><strong>语法</strong>：<code>$render()</code></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperShade</code></li><li>元素实例。</li></ul></li></ul><p>刷新阴影的位置或大小。</p><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><p>此元素中只有一个默认插槽。</p><blockquote><p>你可以通过将 <code>slottable</code> 属性设置为 <code>false</code> 来禁用它：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">cropper-shade</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">slottable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">cropper-shade</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></blockquote>',18);function A(E,f,k,v,q,x){const a=c("LiveDemo"),t=c("ClientOnly");return p(),d("div",null,[F,e(t,null,{default:s(()=>[e(a,null,{default:s(()=>[i]),_:1})]),_:1}),y,h,e(t,null,{default:s(()=>[e(a,null,{default:s(()=>[u]),_:1})]),_:1}),C,e(t,null,{default:s(()=>[e(a,null,{default:s(()=>[m]),_:1})]),_:1}),_,e(t,null,{default:s(()=>[e(a,null,{default:s(()=>[b]),_:1})]),_:1}),g])}const S=n(D,[["render",A]]);export{T as __pageData,S as default};