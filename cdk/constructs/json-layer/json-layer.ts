import { Construct } from 'constructs'
import Layer from '../layer/layer'

class JsonLayer extends Construct {
  public readonly layer: Layer

  constructor(scope: Construct, id: string) {
    super(scope, id)

    this.layer = new Layer(this, 'JsonLambdaLayer', {
      layerName: 'json-layer',
      description: 'Make http/https requests and get json returned',
    })
  }
}

export default JsonLayer
