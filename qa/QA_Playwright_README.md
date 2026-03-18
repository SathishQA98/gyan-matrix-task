# QA Automation Framework -- Playwright + TypeScript

This document describes the **QA automation framework implemented for
the Vikunja test task**. The automation framework is built using
**TypeScript and Playwright** and is located inside the **`qa/`
folder**, which is a sibling to the `application/` folder.

The goal of this implementation is to demonstrate a **structured,
scalable, and maintainable test automation framework** following modern
best practices.

------------------------------------------------------------------------

# Project Structure

    root
     ├── application/        # Dockerized Vikunja application
     └── qa/                 # QA Automation Framework
          ├── tests/         # Test specifications
          ├── pages/         # Page Object Models (POM)
          ├── fixtures/      # Custom fixtures (user/browser context)
          ├── config/        # Environment configuration
          ├── playwright.config.ts
          ├── package.json
          └── README.md

The **QA project is fully isolated from the application**, which allows
the framework to be reusable and CI/CD friendly.

------------------------------------------------------------------------

# Accomplishments

The following tasks were completed as part of this automation
implementation:

## 1. QA Project Setup

-   Created a **`qa` folder** as a sibling to the `application`
    directory.
-   Initialized a **TypeScript + Playwright test project**.
-   Configured **Playwright test runner and project structure**.

------------------------------------------------------------------------

## 2. Test Framework Design

Implemented a **maintainable automation framework** with the following
components:

### Test Suites

-   Organized tests by feature and functionality.

### Page Object Model (POM)

-   UI interactions abstracted into reusable page classes.
-   Improves maintainability and readability.

### Fixtures

-   Implemented custom fixtures for:
    -   user context
    -   browser setup
-   Enables reusable login/session handling.

### Configuration Management

-   Environment variables managed using `.env`.
-   Base URL and environment-specific settings stored in config.

### Playwright Configuration

-   Custom `playwright.config.ts`
-   Centralized browser, timeout, and execution settings.

### Playwright Extensions

-   Extended Playwright capabilities for better test structure.

------------------------------------------------------------------------

## 3. CLI & Pipeline-Friendly Commands

The framework includes **CLI commands for easy execution**.

Example command defined in **`package.json`**:

``` bash
npm run test
```

This enables **CI/CD pipeline compatibility** and simplifies execution.

------------------------------------------------------------------------

# Prerequisites

Before running the automation tests, ensure the following are installed:

-   **Node.js (v18 or higher)**
-   **npm**
-   **Playwright**
-   **.env configuration file**

------------------------------------------------------------------------

# Running the Application

Start the application using Docker:

``` bash
cd application
docker-compose up -d
```

The application will be available at:

    http://localhost:8080

------------------------------------------------------------------------

# Running the Automation Tests

Developers can run the automation tests using the following steps.

## Step 1 -- Clone the Repository

``` bash
git clone <repository-url>
```

## Step 2 -- Navigate to QA Project

    cd qa

## Step 3 -- Install Dependencies

Initialize Playwright and install dependencies:

``` bash
npm init playwright@latest
```

## Step 4 -- Run the Tests

Execute tests using:

``` bash
npm run test
```

------------------------------------------------------------------------

# Key Design Principles

The framework was designed with the following principles:

-   **Scalability** -- Easy to add more tests and features
-   **Maintainability** -- Page Object Model used for reusable UI
    interactions
-   **Configurability** -- Environment variables supported
-   **CI/CD Friendly** -- CLI-based execution
-   **Separation of Concerns** -- Application and test framework
    isolated

------------------------------------------------------------------------

# Test Scope Implemented

The framework supports automation for the following scenarios:

-   User Registration
-   User Login
-   CRUD operations for application entities (e.g., tasks/projects)

The tests can be extended easily by adding new page objects and test
suites.

------------------------------------------------------------------------

# Notes

-   The **application code and Docker configuration were not modified**,
    as required by the task.
-   All QA automation work was implemented strictly within the **`qa/`
    directory**.
