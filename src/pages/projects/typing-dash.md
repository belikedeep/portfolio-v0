---
layout: ../../layouts/ProjectLayout.astro
title: Typing Dash
date: 2023-08-12
author: belikedeep
image: ../../../projects/4.jpg
---

## Links

- [GitHub Repository](https://github.com/belikedeep/typing-dash)
- [Live Demo](https://typing-dash.vercel.app/)

## Typing Dash (v0.1.0)

TypingDash, a modern web application designed to test and improve typing skills in real-time. This blog post will take you behind the scenes of TypingDash, exploring the motivation, technical decisions, and key concepts that make the app tick.

### Motivation

The idea for TypingDash was born out of a desire to create a fun and engaging way to practice typing. While there are many typing tests available online, I wanted to build something that not only challenges users but also provides a real-time competitive experience. The introduction of WebSockets into the project allowed for a more interactive and dynamic user experience, enabling real-time updates and interactions that traditional HTTP requests simply can't offer.

### Why WebSockets?

WebSockets provide a full-duplex communication channel over a single, long-lived connection, making them ideal for applications where real-time interaction is essential. In the context of TypingDash, WebSockets are used to:

- **Synchronize Typing Tests:** Multiple users can participate in a typing challenge simultaneously, with their progress being updated in real-time.
- **Real-Time Feedback:** Users receive instant feedback on their typing accuracy and speed as they progress through the test.
- **Competitive Gameplay:** WebSockets enable a competitive mode where users can see each other's progress and rankings in real-time.

### Technical Stack

TypingDash is built using a modern web development stack, ensuring scalability, maintainability, and performance. Here's an overview of the key technologies used:

- **TypeScript:** Provides strong typing, which improves code quality and developer productivity.
- **Express.js:** A minimalist web framework for Node.js, used for handling server-side logic.
- **WebSocket:** Implemented using socket.io, WebSockets are crucial for real-time communication.
- **Turbo:** A tool that accelerates build processes and development workflows, ensuring efficient project management.
- **Prettier & ESLint:** Tools for maintaining consistent code style and quality.

### Challenges Faced

**Real-Time Data Synchronization**

Ensuring that all users see the same data at the same time was another critical challenge. WebSockets naturally lend themselves to this kind of real-time synchronization, but managing edge cases—like network interruptions or users joining a challenge mid-way—required careful planning and testing.

### Conclusion

TypingDash is more than just a typing test; it's an interactive, real-time experience designed to make typing practice engaging and competitive. By leveraging WebSockets and a modern tech stack, TypingDash provides instant feedback and a shared experience that traditional typing tests can't match.

Building TypingDash was a rewarding journey, filled with technical challenges and opportunities to learn new skills. I hope this blog post provides insight into the motivations and technologies behind the project and inspires you to explore the exciting possibilities of real-time web applications.
