## React-Management-System
This is an example app for demonstrating how to use react to create a online course management system.

This projevy was cloned from Sarah Sweat's [RookieCookie App](https://github.com/sarahsweat/rookie-cookie). It was originally created for the purpose of testing you react coding ability. I am using this simple app tp demonstrate how to create a simple react app. 

In this project, you will learn:

### Organizing your code base
The first thing when you are working on any project, always think how you can break it into a component hierarchy. The original layout is just one simple APP.js file contains all necessary items. A good practice is to break them into as many re-usable components as possible. Not only that you can reuse it multiple times, but it is also easier to write unit tests. In this exercise, I break all components into 3 groups. Atoms contain all small reusable components, such as "CircleButton", "InputText", "DefaultImage", "ErrorMessage", ...etc. 
When you have some combinations of atom components, it is when you wanna consider putting them into "Molecules" folder. "ImageSwiper", "ClassCard", "NavBar" and the "PopModal" components are good examples for this purpose.
Finally, we have organisms which have our final pieces.
Compare Sarah's original repo and my repo to see the difference.

### Must-haves features for a MS
1. Delete an item in your system if you no longer want to have them.
2. Add/Craete a new item to your list whenever you need to.
3. Layout your items as an evenly-distributed grid for different devices.
4. Favor any items you like, and create a "My Favor" section for the user to check back anytime they want. They can also add and delete any favor items asmany times as they need to.

### What you can learn form this project
1. How to manage React state without redux. In this app, I use multiple React Hooks, such as useState(), useEffect(),and createRef().
2. How to create a simple ImageSwiper component.
3. How to create a simple PopModal. This is very useful, especially when you wanna create a simpel app without getting involved with routers.
4. How to use the Fetch API with vanilla JS.
5. How to create a media query helper funciton to make your responsive tasks easier when working with some component-level styles library such as 'styled-components'.
6. Allowing users to favor any items they like and come back to check back anytime they want is the most useful feature for any management system. However, unlike "Add" and "Delete" which will change the items you have, "Favor Items" work more like a temp list. You cannot completely remove or add them to our original list of items, but keep a copy and flag them instead. Adding tis feature is a good exercise for knowing the difference between all those React Hooks when managing the state.

### Demos before you start diving into the code bases
1. The demo of the original repo with some limited bug fixing can be found [HERE](https://react-management-system.herokuapp.com/).
2. This repo's demo can also be found at this heroku [link](https://react-management-system.herokuapp.com/).

### Sneak peek
<div align="left">
    <img src="/public/readme_01.jpg" >
</div>

### Available Scripts
<ul>
    <li><b>npm run build</b>: build the app for production</li>
    <li><b>npm run start</b>: run the exisitng build</li>
</ul>
