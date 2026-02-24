<h2>1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll</h2>

<p><strong>getElementById()</strong>: Selects a unique element by ID.</p>

<p><strong>getElementsByClassName()</strong>: Selects multiple elements with the same class name. It returns an <code>HTMLCollection</code> that automatically updates when the DOM changes.</p>

<p><strong>querySelector()</strong>: Selects the first matching single element using a CSS selector.</p>

<p><strong>querySelectorAll()</strong>: Selects all matching elements using a CSS selector. It returns a static <code>NodeList</code>.</p>

<hr>

<h2>2. How do you create and insert a new element into the DOM?</h2>

<p>First, create a new element using <code>document.createElement()</code>. Then set its content or attributes. Finally, insert it inside a parent element using <code>appendChild()</code>.</p>

<hr>

<h2>3. What is Event Bubbling? And how does it work?</h2>

<p>Event Bubbling is when an event is clicked on an element and it moves up to its parent elements in the DOM.</p>

<p>When an element is clicked, the event triggers on that element first and then moves up to its parent, but it can be stopped using <code>stopPropagation()</code> if needed.</p>

<hr>

<h2>4. What is Event Delegation in JavaScript? Why is it useful?</h2>

<p>Event Delegation is a technique where an event listener is added to a parent element instead of adding it to each child element.</p>

<p>It helps to handle events for multiple child elements by using a single event listener.</p>

<hr>

<h2>5. Difference between preventDefault() and stopPropagation() methods</h2>

<p><code>preventDefault()</code> → Stops the default browser behavior.</p>

<p><code>stopPropagation()</code> → Stops an event from bubbling to parent elements.</p>
