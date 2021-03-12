#  Clean code




## Table of Contents
  - [What is clean code ?](#table-of-contents)
  - [Clean Code Principles](#table-of-contents)
  - [Clean code example ](#table-of-contents)
  - [Conclusion ](#table-of-contents)

## What is clean code ?

Clean code is code that is easy to understand and easy to change.

_easy to understand the execution flow of the entire application_
_easy to understand how the different objects, components collaborate with each other_
_easy to understand the role and responsibility of each class_
_easy to understand what each function does_
_easy to understand what is the purpose of each expression and variable_



## Clean Code Principles

1. Names rules:
- Use names that can be pronounced well.
- Choose descriptive and clear names.
- Use searchable names.
- Make it easy to remember them.
- Use names according to the context.
- Use names that are consistent with each other. For example, it’s confusing to have “retrieved” and “get” as equivalent methods in distinct classes.
- Use the same language in the names of variables, functions: English, French, etc. In my case, I prefer to use English because it’s a standard.
- Avoid encodings and don’t append prefixes or type information.

2. Comments

3. Formatting:
- Avoid too-long files.
- Good files have a heading, the critical stuff first, and details later.
- Although we now have big screens and with high resolution, avoid lines get too long (80 or 120 is       perfect, in my case 100). You will get used to being more concise, and your code will be more readable.
- Be consistent with the rules of your team.
  

4.  Objects and Data Structures:
- Hide internal structure.
- If you can, call only your methods of your class, of objects you have created, and avoid call methods reachable through these objects (Law of Demeter).
- Improve the decoupling of objects.
- Variables should be private and manipulated by getters and setters, but remember, there is no necessity to add getters/setters to each variable to expose them as public.
- The base class should know nothing about their derivatives.
- Objects expose behavior and hide data. Conversely, data structures expose data and lacks of (significant) behavior.
  
  5. Review your code regularly


## Clean code example

1. Names rules

Name your variables in a way that they reveal the intention behind it. This way they become searchable and easier to understand after a person sees it.

 ```javascript
    let daysSLV = 10;
    let y = new Date().getFullYear();

    let ok;
    if (user.age > 30) {
    ok = true;
    }
```


Don't add extra unneeded words to the variable names.


 ```javascript
   // Bad
    let nameValue;
    let theProduct;

   //Good
   let name;
   let product;

 ```
[More example`](https://github.com/ryanmcdermott/clean-code-javascrip)


## Conclusion

Learn the basics and the pillars of programming, and your code will be robust and will adapt to changes more quickly. Also, other programmers will be able to keep it without going crazy.












