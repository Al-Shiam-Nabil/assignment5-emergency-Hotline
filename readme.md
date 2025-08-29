

## Create Readme

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**Answer:**All of these are basically Dom selection methods. However, there are some differences between them in the selection process. For example:

**getElementById:** Targets only one element. Because the ID is unique. When we have to select only one element by targeting it, we can select in this process.

**getElementsByClassName:** With this, classes with the same name can be selected together. It returns an HTML collection. Which we can call an array like object. HTMLCollection is a live collection, meaning it auto updates when the DOM changes. This selection method can be used by keeping the class name the same to target many elements at once.

**querySelector:** With this, we can select only one element. However, while writing its syntax, we have to use (.), (#) like CSS selectors. If there are multiple classes with the same name, it will select the first class of all.

**querySelectorAll:** The rules for writing this are also similar to CSS selectors. However, if there are multiple classes with the same name, all classes can be selected together. Then specific work can be done using forEach or for of loop. It returns nodeList. Which is basically static. Even if the DOM is changed using JavaScript, it does not update automatically.

2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?




