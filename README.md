# SauceDemo Playwright Automation

## End-to-End Test Automation for SauceDemo using Playwright

This project provides a robust automation framework for testing the SauceDemo web application using Playwright. It covers critical user workflows, including login, product browsing, cart management, and checkout processes.

## 🛠 Tech Stack
- **Playwright** – Automated browser testing framework
- **Node.js** – JavaScript runtime
- **GitHub Actions** – Continuous Integration (CI)

## 🚀 Features
- **Cross-browser testing** (Chromium, Firefox, WebKit)
- **End-to-End testing** for key user journeys
- **Page Object Model (POM)** for maintainable code
- **Parallel test execution** for faster results
- **HTML reports with screenshots** for easy debugging
- **CI/CD integration** with GitHub Actions
- **Environment-specific configurations** using `.env` files

## 🛠 Prerequisites
Ensure you have the following installed before running the tests:
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **Playwright** (installed automatically via `npm install`)

## 🏁 Getting Started
### Clone the Repository
```bash
git clone https://github.com/Dimuthchathu101/SauceDemoPlaywright-Demo.git
cd SauceDemoPlaywright-Demo
```
### Install Dependencies
```bash
npm install
```
### Run Tests
#### Run all tests in headed mode:
```bash
npx playwright test --headed
```
#### Run tests in headless mode (default):
```bash
npx playwright test
```
#### Run tests on a specific browser (e.g., Firefox):
```bash
npx playwright test --project=firefox
```
### View Test Reports
```bash
npx playwright show-report
```

## 📂 Project Structure
```
saucedemo-playwright-automation/
├── tests/                  # Test specifications
│   ├── login.spec.js       # Login functionality tests
│   ├── products.spec.js    # Product page tests
│   └── checkout.spec.js    # Checkout process tests
├── pages/                  # Page Object Model classes
│   ├── E2ETesting.js       # E2E Testing interactions
├── utils/                  # Helper functions
│   └── helpers.js          # Reusable utilities
├── .env                    # Environment variables
├── playwright.config.js    # Playwright configuration
└── package.json            # Project dependencies
```

## ⚙️ Configuration
### Environment Variables
Create a `.env` file in the root directory to store sensitive data:
```
SAUCEDEMO_USER=xxxxxx
SAUCEDEMO_PASSWORD=xxxxxx

```
### Playwright Configuration
Modify `playwright.config.js` to customize:
- Browsers
- Viewport sizes
- Timeouts
- Parallel workers
- Retry policies

## 📊 Test Reports
Playwright generates detailed HTML reports with screenshots for each test. To view the report:
```bash
npx playwright show-report
```

## 🔄 CI/CD Integration
This project includes a sample GitHub Actions workflow (`.github/workflows/tests.yml`) for continuous integration. It runs tests on every push and uploads the test report as an artifact.

## 🤝 Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Implement your changes and write tests.
4. Submit a pull request.

---

**Happy Testing!** 🚀✨
Automating e-commerce workflows with confidence.

