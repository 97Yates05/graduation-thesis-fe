pipeline {
  agent any
  stages {
    stage('test') {
      agent any
      steps {
        sh 'ls'
        podTemplate(activeDeadlineSeconds: 999999, cloud: 'kubernetes')
      }
    }

  }
}