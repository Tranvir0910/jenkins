pipeline {
    agent any
    stages {
        stage('Build Maven') {
            steps{
                sh 'mvn -B -DskipTests clean package'
            }
        }
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
                    sh 'docker build -t nodejs-blog .'
                    sh 'docker push tranvix0910/nodejs-blog'
                }
            }
        }
    }
}
