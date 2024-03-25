pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the repository from GitHub
                git branch: 'main', url: 'https://github.com/Tranvir0910/jenkins.git'
            }
        }
        // Add more stages as needed for your pipeline
        stage('Build Stage') {
            steps {
                // Clone the repository from GitHub
                withDockerRegistry(credentialsId: 'jenkins-blog', url: 'https://index.docker.io/v1/') {
                    sh '''sudo apt install maven'''
                    sh '''docker build -t nodejs-blog .'''
                    sh '''docker push tranvix0910/nodejs-blog'''
                }
            }
        }
        // Add more stages as needed for your pipeline
    }
    post {
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}
