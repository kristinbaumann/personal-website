---
layout: post
title:  enterJS conference 2017
excerpt: Running my full-day "Intro to React" Workshop
categories: talks
image:
  hero: /assets/img/blog/2017-06-24-enterjs-conference-react-workshop/group.jpg
  thumbnail: /assets/img/blog/2017-06-24-enterjs-conference-react-workshop/group.jpg
bgGradientOpacity: darker
---

In mid-June I attended and spoke at the 4th [enterJS](http://www.enterjs.de){:target="_blank"} conference in Darmstadt, Germany.

![](/assets/img/blog/2017-06-24-enterjs-conference-react-workshop/opener.png)

<span class="caption">Website <a href="http://www.enterjs.de" alt="Website EnterJS Conference Darmstadt">enterjs.de</a></span>

This conference focuses on JavaScript in enterprise companies and ways to tackle evolving challenges in developing modern web and cloud technologies. Over three days the Darmstadtium venue became home to web developers, designers, devops or project managers in the JavaScript world.

The first day started with six workshops with topics like ECMAScript, Angular and Node.js. I was running the <b>workshop "Practical introduction to React"</b> with 14 React newbies from all parts of Germany. 
In about six hours we dived deep into React concepts. The goal was to implement the first React application from scratch at the end of the day.

All workshop materials can be found on [reactworkshop.kristin-baumann.com](http://reactworkshop.kristin-baumann.com/){:target="_blank"} and the example code on [https://github.com/kristinbaumann/react-workshop](https://github.com/kristinbaumann/react-workshop){:target="_blank"}.

![](/assets/img/blog/2017-06-24-enterjs-conference-react-workshop/workshop_slide.png)

<span class="caption">Sorry, German slides ;)</span>

In the first part of the workshop I explained the React core concepts with many practical examples:

- What is React?
- Hello World in React
- Components in ECMAScript 5
- Components in ECMAScript 6 and JSX
- Important ECMAScript 6 features for React
- Composition and hierarchy of components
- Props (Default Props, Type Validation)
- State (State changes, stateless vs. stateful)
- Unidirectional data flow
- Lifecycle Methods
- Synthetic Events
- Render cycle & one-way data binding
- Virtual DOM

After a short coffee break we continued with React's ecosystem:

- State handling with Redux
- Routing with React Router
- Build process (node modules, Babel JavaScript compiler, webpack module bundler)

Fortunately we finished this tight schedule quite on time, so we could start the practical part with individual coding after lunch. Now we wanted to apply our learnings from the theoretical part by implementing a conference web application. 

As a preparation step before the actual coding session, we discussed in the group how we can break up the application in React components and which components can be reused with certain props and state:

![](/assets/img/blog/2017-06-24-enterjs-conference-react-workshop/component_hierarchy.png)

<span class="caption">Composition of React components for the conference application</span>

I divided the task into [six implementation steps](https://github.com/kristinbaumann/react-workshop/tree/master/15-conference-application){:target="_blank"}, so the task was easier to handle. After each step we compared our results and discussed possible solutions. The principle of pair programming helped to keep everyone included. 

Here is the final conference web application:

<iframe src="http://conferenceapp6b.kristin-baumann.com/" style="height: 450px; width: 100%;"></iframe>

<b>My learnings from running a React workshop</b>:

By preparing and running this React workshop I learned a lot. Thematically I looked into certain React specifics that I haven't heard of before in such detail. I learned React by reading about it online and just coding it. Therefore my knowledge, also in general of web programming, feels like a huge puzzle. With preparing the whole spectrum of React I filled in a few missing pieces of this puzzle, which felt like great win. 

I also needed to prepare the topic in a way that beginners would not be overwhelmed, which can easily happen when starting to learn React. Therefore I tweaked the exact schedule for quite a long time and then decided for or against certain topics. My goal was to explain all the pieces that are necessary to build a fully functional web application with React as UI library during the practical workshop part. So I included React's ecosystem (Redux, Router, etc.) as well. In retrospective I would shift more time from the ecosystem explanation to the topic of components, state and props and less. 

Last but not least I was challenged with public speaking for about 6 hours. As always I am a bit nervous beforehand and get calmer after the first few slides. I was happy that my efforts to make the workshop interactive and hands-on worked out quite well, so the participants stayed interested and we could discuss all the occurring questions.