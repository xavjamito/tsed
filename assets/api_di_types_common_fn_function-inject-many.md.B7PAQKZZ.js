import{_ as s,j as t,af as a,h as n}from"./chunks/framework.Bs-adNqL.js";const d=JSON.parse('{"title":"Function injectMany","description":"","frontmatter":{"meta":[{"name":"keywords","description":"api typescript node.js documentation injectMany function"}]},"headers":[],"relativePath":"api/di/types/common/fn/function-inject-many.md","filePath":"api/di/types/common/fn/function-inject-many.md","lastUpdated":null}'),e={name:"api/di/types/common/fn/function-inject-many.md"};function l(p,i,o,h,r,k){return n(),t("div",null,i[0]||(i[0]=[a('<h1 id="function-injectmany" tabindex="-1">Function injectMany <a class="header-anchor" href="#function-injectmany" aria-label="Permalink to &quot;Function injectMany&quot;">​</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { injectMany } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/di&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><blockquote><p>See <a href="https://github.com/tsedio/tsed/blob/v8.0.0/packages/di/src/types/common/fn/injectMany.ts#L0-L0" target="_blank" rel="noreferrer">/packages/di/src/types/common/fn/injectMany.ts</a>.</p></blockquote><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> injectMany</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">opts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Partial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Pick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InvokeOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;useOpts&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;rebuild&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;locals&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span></code></pre></div><ul><li><p><strong>token</strong> (<code>string</code> | <code>symbol</code>): - The injection token to resolve</p></li><li><p><strong>opts</strong> (<code>Partial&lt;Pick&lt;InvokeOptions</code>): Optional. - configuration for the injection</p></li><li><p><strong>opts.useOpts</strong> (``): - Options for instance creation</p></li><li><p><strong>opts.rebuild</strong> (``): - Whether to rebuild the instance</p></li><li><p><strong>opts.locals</strong> (``): - Local container overrides</p></li></ul><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>Injects multiple instances of a given token using the injector service.</p>',9)]))}const g=s(e,[["render",l]]);export{d as __pageData,g as default};
