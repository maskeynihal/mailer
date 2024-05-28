import type { AwsRegion } from '../strategies/secretStrategies/secrets';

const awsConfig = {
  region: process.env.AWS_REGION as AwsRegion,
  secretManagerName: process.env.SECRET_MANAGER_NAME as string
};

export default awsConfig;
