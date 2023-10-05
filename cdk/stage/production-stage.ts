import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import LayerStack from '../stacks/layer-stack'

class ProductionStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props: cdk.StageProps) {
    super(scope, id, props)

    new LayerStack(this, 'LayerStack', props)
  }
}

export default ProductionStage
