pipeline {
  agent any
    tools {
      nodeJS 'nodeJS'
                
    }
    stages {      
        stage('Build NoeJS') {
            steps { 
                    sh 'pwd'      
                    sh 'npm install'
            }
        }
        
         
        stage('Build docker image') {
           steps {
               script {         
                 def customImage = docker.build('felixgokmen/felix-portfolia', ".")
                 docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                 customImage.push("${env.BUILD_NUMBER}")
                 }                     
           }
        }
	  }
    }
}