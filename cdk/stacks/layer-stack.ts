import * as cdk from 'aws-cdk-lib'
import JsonLayer from '../constructs/json-layer/json-layer'
import { Construct } from 'constructs'

class LayerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props)

    new JsonLayer(this, 'Jsonlayer')
  }
}

export default LayerStack
