
### 6. Question's Answer:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**Answer:** All of these are basically Dom selection methods. However, there are some differences between them in the selection process. For example:

**getElementById:** Targets only one element. Because the ID is unique. When we have to select only one element by targeting it, we can select in this process.

**getElementsByClassName:** With this, classes with the same name can be selected together. It returns an HTML collection. Which we can call an array like object. HTMLCollection is a live collection, meaning it auto updates when the DOM changes. This selection method can be used by keeping the class name the same to target many elements at once.

**querySelector:** With this, we can select only one element. However, while writing its syntax, we have to use (.), (#) like CSS selectors. If there are multiple classes with the same name, it will select the first class of all.

**querySelectorAll:** The rules for writing this are also similar to CSS selectors. However, if there are multiple classes with the same name, all classes can be selected together. Then specific work can be done using forEach or for of loop. It returns nodeList. Which is basically static. Even if the DOM is changed using JavaScript, it does not update automatically.

2. How do you **create and insert a new element into the DOM**?

**Answer :** For this, first you need to create a new element. Then you need to add content to that element. Then you need to append the newly created element to its parent. For example:

```  
  const parentContainer = document.getElementById('parent-container');
    const newDiv = document.createElement("div");

    newDiv.innerHTML = `
       <div>
                    Example of create and insert a new element into the DOM.
                    </div>
    `;

   parentContainer.appendChild(newDiv);
   ```


3. What is **Event Bubbling** and how does it work?

**Answer :** When we add an event to a parent element, the event also fires on its children. This is the default functionality of the browser.

When we click somewhere in the browser, the browser does not understand where the click occurred. The browser then goes from the root element down step by step to the last element. This is called the capture phase. Then it starts rising step by step like a bubble, which is basically the bubbling phase. The event is triggered where it reaches the target phase.


4. What is **Event Delegation** in JavaScript? Why is it useful?

**Answer :** Event delegation is the process of firing events by setting event listeners in parent elements instead of placing event listeners in many places on a website.

By using event delegation, we do not have to add separate event listeners for each child. This does not require additional loops. As a result, Page performance is better because fewer event listeners are used.The code is small and easy to maintain.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

**Answer : ** The preventDefault() method is used to prevent the default behavior of an event.

The stopPropagation() method is used to stop event bubbling or capturing.




