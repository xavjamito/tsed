import{_ as s,j as t,af as i,h as e}from"./chunks/framework.Bs-adNqL.js";const k=JSON.parse('{"title":"Decorator Transactional","description":"","frontmatter":{"meta":[{"name":"keywords","description":"api typescript node.js documentation Transactional decorator"}]},"headers":[],"relativePath":"api/orm/mikro-orm/types/decorators/decorator-transactional.md","filePath":"api/orm/mikro-orm/types/decorators/decorator-transactional.md","lastUpdated":null}'),r={name:"api/orm/mikro-orm/types/decorators/decorator-transactional.md"};function o(n,a,l,p,h,c){return e(),t("div",null,a[0]||(a[0]=[i('<h1 id="decorator-transactional" tabindex="-1">Decorator Transactional <a class="header-anchor" href="#decorator-transactional" aria-label="Permalink to &quot;Decorator Transactional&quot;">​</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Transactional } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/mikro-orm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><blockquote><p>See <a href="https://github.com/tsedio/tsed/blob/v8.0.0/packages/orm/mikro-orm/src/types/decorators/transactional.ts#L0-L0" target="_blank" rel="noreferrer">/packages/orm/mikro-orm/src/types/decorators/transactional.ts</a>.</p></blockquote><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Transactional</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">contextNameOrOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TransactionOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MethodDecorator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>Register a new request context for your method and execute it inside the context.</p>',8)]))}const g=s(r,[["render",o]]);export{k as __pageData,g as default};
