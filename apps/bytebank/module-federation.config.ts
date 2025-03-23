import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'bytebank',
  remotes: ['dashboard', 'institutional'],
};

export default config;
