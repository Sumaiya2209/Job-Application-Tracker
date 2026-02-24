
<h2>1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h2>

<p><strong>getElementById()</strong>: Selects unique element by ID.</p>

<p><strong>getElementsByClassName()</strong>: Selects multiple elements with same class name. It returns HTMLCollection that auto update by changing DOM.</p>

<p><strong>querySelector()</strong>: Select the first matching single element using CSS selector.</p>

<hr>

<h2>2. How do you create and insert a new element into the DOM?</h2>

<p>First, I create a new element by document.createElement(). Then set it's inner elements. Finally, insert it inside a parent element using appendChild().</p>

<hr>

<h2>3. What is Event Bubbling? And how does it work?</h2>

<p>Event Bubbling is when an event is clicked on an element and it moves up to its parent elements in the DOM.</p>

<p>When an element is clicked, the event triggers on that element first and then moves up to its parent, but it can be stopped using stopPropagation() if needed.</p>

<hr>

<h2>4. What is Event Delegation in JavaScript? Why is it useful?</h2>

<p>Event Delegation is where an event listener add to a parent element instead of adding it in each child element.</p>

<p>It helps to handle events for multiple child elements by using a single event listener.</p>

<hr>

<h2>5. What is the difference between preventDefault() and stopPropagation() methods?</h2>

<p>preventDefault() → Stops default browser behavior</p>

<p>stopPropagation() → Stops an event bubbling to parent elements</p>
