import { Construct } from 'constructs'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { buildLayer } from '../../util/build-layer'

interface LayerProps {
  layerName: string
  description: string
}

class Layer extends Construct {
  public readonly layer: lambda.LayerVersion

  constructor(scope: Construct, id: string, props: LayerProps) {
    super(scope, id)

    const outDir = buildLayer(props.layerName)

    this.layer = new lambda.LayerVersion(
      this,
      `Layer${props.layerName
        .split('-')
        .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
        .join('')}`,
      {
        compatibleArchitectures: [lambda.Architecture.X86_64],
        compatibleRuntimes: [
          lambda.Runtime.NODEJS_18_X,
          lambda.Runtime.NODEJS_LATEST,
        ],
        code: lambda.Code.fromAsset(outDir),
        description: props.description,
      }
    )
  }
}

export default Layer
