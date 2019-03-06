pipeline {
    agent any
    
    // parameters {}

    triggers { pollSCM('* * * * *') } //poll the source code repo every minute

    stages {
        stage('install Dependancies') {
            steps {
                bat "npm install"
            }
        }

        stage('Start Selenium Server and Run Acceptance Tests') {
            steps {
                bat "START /B npx webdriver-manager start && npm test"
            }
            post {
                always {
                    publishHTML([
                        allowMissing : false,
                        alwysLinkToLastBuild : false,
                        keepAll : false,
                        reportDir : '.tmp/report',
                        reportFiles : 'index.html',
                        reportName : 'BDD report',
                        reportTitles : ''])
                }
            }
        }
    }
}