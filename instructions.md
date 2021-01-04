
<h1 id="project-0-static-web-page">Project 0: Static Web Page</h1>

<p>Build, deploy, and load test a static web page hosted on GitHub Pages.</p>

<p>This project will ensure that students can deploy and load test a simple web
page prior to working with more complicated web applications.</p>

<p>Static web pages are fast to serve, and are relatively trivial to scale. Anyone
with access to a free github account can deploy a static web site that can
scale to thousands of users without requring any knowledge of how such scaling
is accomplished.</p>

<h2 id="learning-outcomes">Learning Outcomes</h2>

<ul>
  <li>Student can setup a git repository and use it for version control.</li>
  <li>Student can build and deploy a simple static web page.</li>
  <li>Student can measure average page load time.</li>
  <li>Student can measure server’s rate limit.</li>
</ul>

<h2 id="overview-video">Overview Video</h2>

<p><a href="https://drive.google.com/file/d/1lp-hixCQucLdXq-Ug37SyASnce9csF7i/view">https://drive.google.com/file/d/1lp-hixCQucLdXq-Ug37SyASnce9csF7i/view</a></p>

<h2 id="project-submission">Project Submission</h2>

<p><a href="https://forms.gle/sQ9GfZnvy97zHeD4A">https://forms.gle/AiuHXw3C6NmPiouG6</a></p>

<h2 id="page-requirements">Page Requirements</h2>

<p>Your static webpage must:</p>

<ul>
  <li>be hosted on <a href="https://pages.github.com">GitHub Pages</a></li>
  <li>be served via HTTPS</li>
  <li>be created by hand – go nuts, but don’t use a page generator, i.e., no more
markup than necessary</li>
  <li>contain 100% valid HTML5</li>
  <li>contain 100% valid CSS</li>
  <li>utilize an external style sheet to provide style changes (no inline styles,
i.e., provided via <code class="language-plaintext highlighter-rouge">style</code> attributes)</li>
</ul>

<p>You webpage must include:</p>

<ul>
  <li>a page title</li>
  <li>a page heading</li>
  <li>an image hosted on the same domain</li>
  <li>an external CSS file written by you and hosted on the same domain</li>
  <li>an unordered list with at least three items</li>
  <li>a table with at least 2 columns and at least 3 rows</li>
  <li>a hyperlink to the github repository containing the source code</li>
</ul>

<h3 id="verification-script">Verification Script</h3>

<p>The <code class="language-plaintext highlighter-rouge">project0.py</code> script in
<a href="https://github.com/scalableinternetservices/ucsb_website/tree/master/scripts">https://github.com/scalableinternetservices/ucsb_website/tree/master/scripts</a>
can be used to automatically verify that your webpage meets the necessary
requirements.</p>

<p>Follow the directions in the README to clone the repository, install the python
dependencies, and run the verification script.</p>

<h2 id="questions-to-answer">Questions To Answer</h2>

<ul>
  <li>On average, how many requests can <code class="language-plaintext highlighter-rouge">ab</code> complete in 10 seconds with all the
power of two concurrency levels between 1 and 256 (i.e., 1, 2, 4, 8, 16, 32,
64, 128, 256)?</li>
  <li>Why are there diminishing returns at higher concurrency levels?</li>
  <li>What’s the performance difference when requesting HTTP and HTTPS?</li>
  <li>How can github respond so quickly?</li>
  <li>What is your site’s “Time to Interactive” according to PageSpeed Insights?</li>
</ul>

<h2 id="required-tools">Required Tools</h2>

<ul>
  <li><a href="https://httpd.apache.org/docs/2.4/programs/ab.html">ab</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a></li>
  <li>git via <a href="https://help.github.com/en#dotcom">GitHub</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">HTML5</a></li>
</ul>

<h2 id="other-resources">Other Resources</h2>

<ul>
  <li><a href="https://developers.google.com/speed/pagespeed/insights/">Google PageSpeed Insights</a></li>
  <li><a href="https://validator.w3.org">W3C Markup Validation Service</a></li>
  <li><a href="https://jigsaw.w3.org/css-validator/">W3C CSS Validation Service</a></li>
</ul>
