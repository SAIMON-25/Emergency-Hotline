# Emergency-Hotline
### **What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll**
- getElementById - Returns the element with the specific id
- getElementsByClassName - Returns an HTMLCollection of elements with the specified class
- querySelector - Returns the first element that matches the CSS selector
- querySelectorAll - Returns a NodeList of all elements matching the selector

### **How do you create and insert a new element into the DOM?**
- Steps of creating and inserting a new element
   1) Create a child element by using **document.createElement()**
   2) Insert the content of the child by using **child.innerTEXT**
   3) Select the parent element by using **getElementById(id)**
   4) Append the child to the parent by using **parent.appendChild(child)**
### **What is Event Bubbling and how does it work?**
- Event bubbling is the process where an event triggered on a child element propagates up the DOM tree to its parents, until it reaches the document object
### **What is Event Delegation in JavaScript? Why is it useful?**
- Event delegation is a technique where you attach a single event listener on a parent element to handle events for its child elements, instead of attaching listeners to each child
- Useful - Handles dynamically added elements automatically.
### **What is the difference between preventDefault() and stopPropagation() methods?**
- preventDefault() - Prevents the default behavior of an event
- stopPropagation() - Stop bubbling
