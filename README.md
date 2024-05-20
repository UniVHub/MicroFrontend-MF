# MicroFrontend-MF

MicroFrontend Example with Module Federation in React

## What is about this microfrontend?

This microfrontend is a simple example of how to create a microfrontend with module federation in React. It's a interface about a cat blog, with a general container, a microfrontend for the posts and other for the comments.

## Prerequisites
Before running the project, ensure you have the following:
- Node.js installed on your machine
- Access to the project directory

### Setup and Execution Steps
1. **Navigate to Project Directory**: Open your terminal and navigate to the root directory of the project.

2. **Install Dependencies**: Run the following command in your terminal to install the necessary dependencies for each microfrontend and the container:
    ```bash
    npm i
    ```

3. **Start Microfrontends and Container**: After installing the dependencies, start each microfrontend and the container by running:
    ```bash
    npm start
    ```

4. **Access the Container**: Once the microfrontends and the container are up and running, you can access the container by opening your web browser and navigating to `http://localhost:3001`.

### Alternative Shortcut
Alternatively, you can simply execute the provided `run.sh` script to perform the above steps automatically. This script handles the dependency installation and starts the microfrontends and container.
