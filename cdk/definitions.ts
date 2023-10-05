import * as cdk from 'aws-cdk-lib'

export interface Config extends cdk.StageProps {

}

export type Stage = 'Staging' | 'Production'