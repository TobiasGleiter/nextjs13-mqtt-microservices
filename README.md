# Post and Comments App

## Microservice Architecture with Next.js, Node.js, Mqtt, Docker, and nginx loadbalancing

In this project, we build a scalable application using Next.js for the frontend and Node.js for the backend, following the microservices pattern. We containerize the services using Docker for easy deployment and scaling. MQTT is used for efficient, real-time communication between microservices, making it ideal for IoT applications. An Nginx server is employed for load balancing, ensuring even distribution of traffic and enhancing performance and reliability.

![Application Overview](./docs/frontend-preview.png)

## Features

- **Frontend with Next.js:** The frontend of this application is powered by Next.js, a popular React framework. Next.js provides server-side rendering, automatic code splitting, and an easy way to create dynamic, high-performance web applications.
- **Backend with Node.js:** Our backend services are built using Node.js, a lightweight and efficient runtime for building server-side applications. Node.js is known for its speed and scalability, making it an ideal choice for microservices.
- **Microservice Architecture:** We've designed this application to embrace a microservices architecture. Each microservice is responsible for a specific aspect of the application, allowing for independent development, deployment, and scaling.
- **Containerization with Docker:** All microservices are containerized using Docker, ensuring consistent behavior across different environments and simplifying deployment processes. Docker encapsulates each service along with its dependencies into a portable container.
- **Load Balancing with Nginx:** To ensure a seamless and responsive user experience, we employ an Nginx server for load balancing. Nginx efficiently distributes incoming traffic among multiple servers, optimizing performance and resilience.
- **Local MQTT with Eclipse-Mosquitto:** This branch leverages the official Eclipse Mosquitto image to establish a local MQTT broker, ensuring efficient and reliable message exchange within the network. The lightweight and open-source nature of Eclipse Mosquitto facilitates seamless communication between devices and applications, even in environments with limited bandwidth.

## Getting Started

To get started with this project, follow these steps:

1. `npm install` in all projects (client, microservices)
2. `cd client`, `cd comments`, ...
3. `npm start`in all projects (client, microservices)
4. `localhost:3000`to test the application

If you want to use Docker, pull the `simple-docker` branch. Then:

1. `npm install` in all projects (client, microservices)
2. `cd client` and `npm start`to start the client
3. `cd microservices` and `docker-compose up --build -d` to start the microservices
4. scale the posts service with `docker-compose --scale posts=2 -d`

If you want to use Docker-Compose, pull the `docker-moquitto-mqtt` branch. Then:

1. `npm install` in all projects (client, microservices)
2. `cd client` and `npm start`to start the client
3. `cd microservices` and `docker-compose up --build -d` to start the microservices
4. scale the posts service with `docker-compose --scale posts=2 -d`

If you want to use Docker-Compose with MongoDb, pull the `docker-moquitto-mqtt-mongodb` branch. Then:

1. `npm install` in all projects (client, microservices)
2. `cd client` and `npm start`to start the client
3. `cd microservices` and `docker-compose up --build -d` to start the microservices

## Dependencies

### Frontend Dependencies

- **Tailwind CSS:** A utility-first CSS framework that allows you to quickly build responsive and visually pleasing user interfaces.

- **Lint:** A popular static code analysis tool for identifying and fixing problems in your JavaScript and TypeScript code.

- **SWR (Stale-While-Revalidate):** A React Hooks library for remote data fetching. SWR makes it easy to handle data loading, caching, and real-time updates.

- **React Icons:** A collection of popular icon libraries made available as React components. It simplifies the process of adding icons to your React application.

### Backend Dependencies

- **CORS (Cross-Origin Resource Sharing):** Middleware for enabling cross-origin requests. It's essential for allowing your frontend to make requests to your backend API.

- **Express:** A fast and minimalistic Node.js web application framework for building robust and scalable web applications and APIs.

- **MQTT (Message Queuing Telemetry Transport):** A lightweight, messaging protocol often used in IoT applications. It enables efficient communication between devices and services.

- **Nodemon:** A utility that automatically restarts your Node.js application when files change, making development and debugging more efficient.

## Application Structure Overview

![Application Overview](./docs/Application.png)

## Event Flow (MQTT Events)

![Event Flow (MQTT Events)](./docs/Event-Data-Flow-Table.png)

## Folder Structure

```none
nextjs13-mqtt-microservices
└── client
└── docs
└── microservices
|    ├── comments
|    ├── moderation
|    ├── posts
|    └── query
└── (...)
```
