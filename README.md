# Introduce

This project is based on DDD`(Domain Driven Design)` architecture.

## Project Setup

First we will test to make sure the app is working. We're going to be using `yarn` for this example, but you could just as easily use NPM if you choose.

```bash
yarn install

yarn dev
```

## Pros

- **Modularity**: Each module operates independently, making it easy to develop and maintain. If a problem occurs, you can focus on debugging in that domain.
- **Reusability**: Common components and hooks are separated by module to increase reusability.
- **Scalability**: When adding new features or services, simply create a new domain. This is especially useful in large-scale projects.
- **Division of labor**: Each domain can be handled by different developers or teams, making it easier to divide work.

## Cons

- **Complexity**: The initial setup and learning curve can be somewhat complex, and in small to medium-sized projects, it may seem like over-engineering.
- **Shared state management**: If there are many states that need to be shared between domains, state management can become complex.
- **Boundary setting**: Applying DDD without proper boundary setting can lead to reverse functionality.

## Usage

When a new domain is created, a subdirectory is automatically created using a shell script. Use

```bash
yarn create:domain "Domain Name
```

command to create a subdirectory automatically. By default, the state management is configured to use Context API & Reducer, but it would be nice to change it to another state management library such as Redux or Mobx according your needs.
