pipeline {
    agent any
    tools {
        maven 'Maven 3.9.6'
    }
    stages {
        // stage('Build Maven') {
        //     steps{
        //         checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'jenkins-blog', url: 'https://github.com/Tranvir0910/jenkins.git']])
        //         sh 'mvn clean install'
        //     }
        // }
        stage('Clone Repository') {
            steps {
                // Clone the repository from GitHub
                git branch: 'main', url: 'https://github.com/Tranvir0910/jenkins.git'
            }
        }
        // Add more stages as needed for your pipeline
        // stage('Build Stage') {
        //     steps {
        //         // Clone the repository from GitHub
        //         withDockerRegistry(credentialsId: 'jenkins-blog', url: 'https://index.docker.io/v1/') {
        //             sh 'docker build -t nodejs-blog .'
        //             sh 'docker push tranvix0910/nodejs-blog'
        //         }
        //     }
        // }
    }
}
