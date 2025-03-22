import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'bytebank',
  remotes: [['dashboard', 'https://main.d2uexl1wva9mc9.amplifyapp.com/']],
};

export default config;
