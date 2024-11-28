import{_ as i,j as a,af as t,h as e}from"./chunks/framework.Bs-adNqL.js";const c=JSON.parse('{"title":"Decorator ContentType","description":"","frontmatter":{"meta":[{"name":"keywords","description":"api typescript node.js documentation ContentType decorator"}]},"headers":[],"relativePath":"api/specs/schema/types/decorators/operations/decorator-content-type.md","filePath":"api/specs/schema/types/decorators/operations/decorator-content-type.md","lastUpdated":null}'),n={name:"api/specs/schema/types/decorators/operations/decorator-content-type.md"};function p(h,s,l,k,r,o){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="decorator-contenttype" tabindex="-1">Decorator ContentType <a class="header-anchor" href="#decorator-contenttype" aria-label="Permalink to &quot;Decorator ContentType&quot;">​</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ContentType } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@tsed/schema&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><blockquote><p>See <a href="https://github.com/tsedio/tsed/blob/v8.0.0/packages/specs/schema/src/types/decorators/operations/contentType.ts#L0-L0" target="_blank" rel="noreferrer">/packages/specs/schema/src/types/decorators/operations/contentType.ts</a>.</p></blockquote><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ContentType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./returns.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ReturnsChainedDecorators</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>Sets the Content-Type HTTP header to the MIME type as determined by mime.lookup() for the specified type. If type contains the “/” character, then it sets the <code>Content-Type</code> to type.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ContentType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;text/html&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ContentType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);               </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;text/html&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ContentType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);               </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;application/json&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ContentType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;application/json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; &#39;application/json&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ContentType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);                </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; image/png</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> private </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">myMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span></code></pre></div>`,9)]))}const E=i(n,[["render",p]]);export{c as __pageData,E as default};
