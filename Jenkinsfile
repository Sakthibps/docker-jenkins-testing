pipeline {
    agent any
    
    environment {
        IMAGE_NAME = 'docker-jenkins-testing'
        IMAGE_TAG = "${BUILD_NUMBER}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo 'Repository checked out successfully'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
                    echo "Docker image built: ${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }
        
        stage('Run Tests in Docker') {
            steps {
                script {
                    sh "docker run --rm ${IMAGE_NAME}:${IMAGE_TAG} npm run test"
                    echo 'Tests passed successfully'
                }
            }
        }
        
        stage('Tag Latest Image') {
            steps {
                script {
                    sh "docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${IMAGE_NAME}:latest"
                    echo 'Tagged image as latest'
                }
            }
        }
    }
    
    post {
        always {
            echo 'Cleaning up Docker images...'
            sh "docker rmi ${IMAGE_NAME}:${IMAGE_TAG} || true"
            cleanWs()
        }
        
        success {
            echo 'Pipeline executed successfully!'
        }
        
        failure {
            echo 'Pipeline failed! Check logs for details.'
        }
    }
}