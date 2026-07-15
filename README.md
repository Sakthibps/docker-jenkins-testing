# Docker Jenkins Testing

A Node.js Express application with Docker containerization and Jenkins CI/CD pipeline integration. This project demonstrates how to build, test, and deploy applications using Docker and Jenkins.

## Features

✅ **Docker Integration** - Builds a Docker image that runs clean tests  
✅ **Jenkins Pipeline** - Automated CI/CD pipeline with multiple stages  
✅ **Express API** - Sample REST API with health checks  
✅ **Jest Testing** - Comprehensive unit tests with coverage reporting  
✅ **ESLint** - Code quality and linting  
✅ **Multi-stage Pipeline** - Checkout → Build → Test → Tag  

## Project Structure

```
.
├── Dockerfile           # Docker image definition with test execution
├── Jenkinsfile         # Jenkins pipeline configuration
├── index.js            # Express application
├── index.test.js       # Jest unit tests
├── package.json        # Node.js dependencies and scripts
├── jest.config.js      # Jest configuration
├── .eslintrc.json      # ESLint configuration
├── docker-compose.yml  # Docker Compose for local development
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Prerequisites

- Docker & Docker Compose
- Node.js 18+ (for local development)
- Jenkins (for CI/CD pipeline)
- Git

## Local Development

### Using Docker Compose

```bash
# Start the application
docker-compose up

# The app will be available at http://localhost:3000
```

### Using Node.js directly

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run linting
npm run lint

# Start the application
npm start
```

## API Endpoints

### Health Check
```bash
GET /health
```
Response:
```json
{
  "status": "healthy",
  "message": "Server is running"
}
```

### Welcome
```bash
GET /api
```
Response:
```json
{
  "message": "Welcome to Docker Jenkins Testing API"
}
```

### Echo Message
```bash
POST /api/echo
Content-Type: application/json

{
  "message": "Hello World"
}
```
Response:
```json
{
  "echo": "Hello World"
}
```

## Docker Build & Test

### Build Docker Image
```bash
docker build -t docker-jenkins-testing:latest .
```

The Docker image will:
1. Install dependencies
2. Run ESLint for code quality
3. Execute Jest tests
4. Start the Express server

### Run Tests in Docker
```bash
docker run --rm docker-jenkins-testing:latest npm run test
```

## Jenkins Pipeline

The `Jenkinsfile` defines a CI/CD pipeline with the following stages:

### Stages

1. **Checkout** - Clones the repository
2. **Build Docker Image** - Creates the Docker image with build number
3. **Run Tests in Docker** - Executes tests inside the container
4. **Tag Latest Image** - Tags the image as latest

### Post Actions

- **Always** - Cleans up Docker images and workspace
- **Success** - Logs success message
- **Failure** - Logs failure message

### Jenkins Setup

1. Create a new Pipeline job in Jenkins
2. Configure to use GitHub repository
3. Set Pipeline script from SCM
4. Select Git and enter repository URL: `https://github.com/Sakthibps/docker-jenkins-testing`
5. Set branch to `*/main`
6. Configure webhook for automatic builds

## Testing

The project uses Jest for unit testing with supertest for HTTP assertions.

```bash
# Run tests with coverage
npm test

# Run tests in watch mode
npm test -- --watch
```

### Test Coverage

Minimum coverage thresholds (50%):
- Branches: 50%
- Functions: 50%
- Lines: 50%
- Statements: 50%

## Code Quality

```bash
# Run ESLint
npm run lint

# Fix linting issues automatically
npm run lint -- --fix
```

## Environment Variables

Create a `.env` file for local development:

```
NODE_ENV=development
PORT=3000
```

## License

MIT

## Author

Sakthibps

## Contributing

Feel free to open issues and submit pull requests!
