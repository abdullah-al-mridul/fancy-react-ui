import{_ as a,c as t,ag as i,G as n,B as l,o}from"./chunks/framework.CJ72e6E2.js";const E=JSON.parse('{"title":"Border Spinner","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"loaders/explore-loaders.md","filePath":"loaders/explore-loaders.md"}'),p={name:"loaders/explore-loaders.md"};function r(d,s,h,c,k,g){const e=l("ReactWrapper");return o(),t("div",null,[s[0]||(s[0]=i(`<h1 id="border-spinner" tabindex="-1">Border Spinner <a class="header-anchor" href="#border-spinner" aria-label="Permalink to &quot;Border Spinner&quot;">​</a></h1><p>This page demonstrates the <code>BorderSpinner</code> component. The spinner can be used as a loading indicator in your applications.</p><h2 id="usage-example" tabindex="-1">Usage Example <a class="header-anchor" href="#usage-example" aria-label="Permalink to &quot;Usage Example&quot;">​</a></h2><p>To render the <code>BorderSpinner</code>, simply include it in your JSX as shown below:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BorderSpinner } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;fancy-react-ui&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BorderSpinner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Output:</p>`,6)),n(e),s[1]||(s[1]=i(`<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><p>The following table describes the props that the <code>BorderSpinner</code> component accepts:</p><table tabindex="0"><thead><tr><th>Prop Name</th><th>Default Value</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>size</code></td><td><code>40</code></td><td><code>number</code></td><td>Sets the size of the spinner.</td></tr><tr><td><code>color</code></td><td><code>#0066ff</code></td><td><code>string</code></td><td>Sets the color of the spinner. Accepts any valid CSS color value.</td></tr><tr><td><code>secondaryColor</code></td><td><code>rgba(0, 0, 0, 0.1)</code></td><td><code>string</code></td><td>Sets the secondary color of the spinner.</td></tr><tr><td><code>speed</code></td><td><code>0.8</code></td><td><code>number</code></td><td>Sets the animation speed of the spinner. Accepts any valid CSS time value.</td></tr><tr><td><code>thickness</code></td><td><code>4</code></td><td><code>number</code></td><td>Specifies the thickness of the spinner&#39;s line.</td></tr><tr><td><code>className</code></td><td><code>null</code></td><td><code>string</code></td><td>Applies custom CSS classes to the spinner for additional styling.</td></tr></tbody></table><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>All the listed props are optional. You can use them to customize the <code>BorderSpinner</code> to suit your application&#39;s needs.</p></div><h2 id="customization-example" tabindex="-1">Customization Example <a class="header-anchor" href="#customization-example" aria-label="Permalink to &quot;Customization Example&quot;">​</a></h2><p>Show how developers can customize the spinner using props or by overriding styles with CSS.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BorderSpinner</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#ff6600&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  speed</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  className</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my-custom-spinner&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><p>CSS for <code>.my-custom-spinner</code>:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.my-custom-spinner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border-radius</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="common-use-cases" tabindex="-1">Common Use Cases <a class="header-anchor" href="#common-use-cases" aria-label="Permalink to &quot;Common Use Cases&quot;">​</a></h2><p>Highlight typical scenarios where the spinner might be used:</p><ul><li>Loading content (e.g., fetching data).</li><li>During page transitions.</li><li>As a visual placeholder for asynchronous operations.</li></ul><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><p>Address potential issues developers might encounter, like:</p><ul><li>Spinner not displaying (ensure size and color are valid).</li><li>Performance tips if the spinner causes rendering lag.</li></ul><h2 id="related-components" tabindex="-1">Related Components <a class="header-anchor" href="#related-components" aria-label="Permalink to &quot;Related Components&quot;">​</a></h2><p>Explore similar components within the same library or ecosystem to find the best fit for your use case:</p><ul><li><a href="/loaders/chase-spinner.html">Chase Spinner</a>: A dynamic spinner with a unique chasing dots animation.</li></ul>`,18))])}const m=a(p,[["render",r]]);export{E as __pageData,m as default};
