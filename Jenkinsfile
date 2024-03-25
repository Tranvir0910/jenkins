pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the repository from GitHub
                git 'https://github.com/Tranvir0910/jenkins.git'
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
