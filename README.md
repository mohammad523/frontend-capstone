# frontend-capstone
# Project Overview

## Project Links

- https://github.com/mohammad523/frontend-capstone.git

- https://github.com/mohammad523/backend-capstone

- [deployed link](https://mohammad523.github.io/frontend-capstone/)

## Stack
- React.js
- Firebase

## Project Description

For this project, I plan to make a social media app that has a personal assistant to help control it. The personal assistant will have voice recognition capabilities and the user will be able to post, like, delete, and ask miscellaneous questions using the personal assistant. There are multiple JavaScript and React APIs that support voice recognition and text to speech.

## API

https://www.npmjs.com/package/react-speech-recognition

https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API




## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [wireframes](https://xd.adobe.com/view/9df55e9b-5a4b-4611-bf65-437671734eaf-c8a6/)
- [wireframes(Desktop and Mobile)](https://imgur.com/a/Y6aV0AH)
- [Backend Architecture](https://imgur.com/a/XA04S4W)
- [React File Structure](https://imgur.com/a/KuqWhvZ)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decide what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Fully functional social media app
	- Live feed of all posts
	- CRUD functionality


#### PostMVP EXAMPLE

- Voice assistant that can create posts, like, delete, and have a little conversation.
- Instant messaging using firebase
- Allow users to create custom dialogs with voice assistant
- User Authentication
- Sarcastic Voice Assistant that can tell the weather and jokes


## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Live Feed | Renders the live feed | 
| Live Chat | Renders current chats |
| Voice Assistant Page | Displays wave form animation onclick |
| Notifications Page | Renders the trivia game, contains score as state |
| Profile page |  Renders users profile Page |
| Login Page | Renders user authentication page |


Time frames are also key in the development cycle.  h
Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 1 | 2 | 2 |
| Home Feed Layout | H | 2 | 2 | 2 |
| Set up basic React routing | H | 1 | 1 | 1 |
| Set up new post component | H | 1 | 1 | 1 |
| set up logo design | H | 1 | 30mins | 30mins |
| set up personal assistant | H | 2 | 0 | 0 |
| set up personal assistant commands | H | 3 | 0 | 0 |
| set up user authentication page | H | 2 | 10 | 10 |
| set up back end post data base | H | 1 | 2 | 2 |
| set up instant messaging back-end structure | H | 1 | 0 | 0 |
| set up instant messaging front-end structure | H | 2 | 0 | 0 |
| set up instant messaging chat search | H | 1 | 0 | 0 |
| set up my profile page | H | 1 | 0 | 0 |
| set up media query for mobile design | H | 1 | 0 | 0 |
| Learn how to use Firebase | M | 2 | 8 | 8 |
| set up back-end user authentication | M | 2 | 6 | 6 |
| learn useContext | M | 1 | 1 | 1 |
| set up api structure for personal assistant | M | 2 | 0 | 0 |
| Allow users to create custom dialogues with PA | L | 3 | 0 | 0 |
| Animations everywhere | L | 3 | 0 | 0 |
| Total | H | 38 | 32 | 32 |

## Additional Libraries
Firebase - Instant Messaging

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code.



```
<Popup trigger={<button> What's on your mind?</button>} position="right center">
        <form onSubmit={handleSubmit}>
           <label>
                <input className= 'field' type="username" value={username} placeholder="@username"
                name='username' onChange={handleUNChange}/>
                <br/>
            </label>
           <label>
                <input className= 'field' type="yourName" value={yourName} placeholder="Your Name"
                name='yourName' onChange={handleYNChange}/>
                <br/>
            </label>
           <label>
                <input className= 'field' type="message" value={message} placeholder="What's on your mind?"
                name='message' onChange={handleMChange}/>
                <br/>
            </label>
            <button>submit</button>
            </form>
        </Popup>

```
...
