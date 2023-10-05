#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { Config, Stage } from '../definitions'
import stagingConfig from '../config/staging.config'
import productionConfig from '../config/production.config'
import StagingStage from '../stage/staging-stage'
import ProductionStage from '../stage/production-stage'

const app = new cdk.App()

const stageContext: Stage | undefined = app.node.tryGetContext('stage')

if (!stageContext) {
  throw new Error('Please provide a stage context')
}

const config = {
  Staging: stagingConfig,
  Production: productionConfig,
}

const configToUse = config[stageContext]

const stageMap = {
  Staging: (config: Config) => new StagingStage(app, 'StagingStage', config),
  Production: (config: Config) =>
    new ProductionStage(app, 'ProductionStage', config),
}

const stageToRun = stageMap[stageContext]

stageToRun(configToUse)
