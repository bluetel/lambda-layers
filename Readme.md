# Lambda Layers

## Usage

Utility repo for various custom lambda layers.

## Release New Package

To produce the latest package of the lambda-layers please run `tsc --project tsconfig.layer.json`. You will need to run this anytime you make a change to the src folder. This is so when we install the package on other repos for e.g. na-frontend then we are using the latest code.

## Deploy To AWS

- Run `aws configure sso` and setup temp creds for the Deployment account in ap-northeast-1
- Run `npm run cdk -- diff --context stage=<stage> --profile <name-of-profile-from-sso> <stack-name>`
- Run `npm run cdk -- synth --context stage=<stage> --profile <name-of-profile-from-sso> <stack-name>`
- Check there is nothing that looks wrong with the output from these 2 commands
- Finally run `npm run cdk -- deploy --context stage=<stage> --profile <name-of-profile-from-sso> <stack-name>`
- On AWS check if this has created a new layer version, if it has then update the relative functions to use the new version