import{_ as s,j as i,af as t,h as a}from"./chunks/framework.Bs-adNqL.js";const k=JSON.parse('{"title":"Decorator View","description":"","frontmatter":{"meta":[{"name":"keywords","description":"api typescript node.js documentation View decorator"}]},"headers":[],"relativePath":"api/specs/schema/types/decorators/operations/decorator-view.md","filePath":"api/specs/schema/types/decorators/operations/decorator-view.md","lastUpdated":null}'),o={name:"api/specs/schema/types/decorators/operations/decorator-view.md"};function n(r,e,p,h,l,d){return a(),i("div",null,e[0]||(e[0]=[t('<h1 id="decorator-view" tabindex="-1">Decorator View <a class="header-anchor" href="#decorator-view" aria-label="Permalink to &quot;Decorator View&quot;">​</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { View } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/schema&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><blockquote><p>See <a href="https://github.com/tsedio/tsed/blob/v8.0.0/packages/specs/schema/src/types/decorators/operations/view.ts#L0-L0" target="_blank" rel="noreferrer">/packages/specs/schema/src/types/decorators/operations/view.ts</a>.</p></blockquote><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> View</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MethodDecorator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><ul><li><p><strong>path</strong> (<code>string</code>): Relative path to the view file.</p></li><li><p><strong>options</strong> (<code>Object</code>): Optional. Additional options</p></li></ul><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>Use a view and sends the rendered HTML string to the client. Optional parameter:</p><ul><li>viewOptions, an object whose properties define local variables for the view.</li></ul><p>The view argument is a string that is the file path of the view file to render. This can be an absolute path, or a path relative to the views setting. If the path does not contain a file extension, then the view engine setting determines the file extension. If the path does contain a file extension, then Express will load the module for the specified template engine (via require()) and render it using the loaded module’s __express function.</p><p>For more information, see <a href="http://expressjs.com/guide/using-template-engines.html" target="_blank" rel="noreferrer">Using template engines with Express</a>.</p><blockquote><p>NOTE: The view argument performs file system operations like reading a file from disk and evaluating Node.js modules, and as so for security reasons should not contain input from the end-user.</p></blockquote>',13)]))}const g=s(o,[["render",n]]);export{k as __pageData,g as default};
