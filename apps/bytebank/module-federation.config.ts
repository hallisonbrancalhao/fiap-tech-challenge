import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'bytebank',
  remotes: ['dashboard', 'institutional'],
  shared: (libraryName, defaultConfig) => {
    if (libraryName.includes(`@apollo/client/`)) {
      return {
        ...defaultConfig,
        version: '3.13.5',
      }
    }
    return defaultConfig;
  },
};

export default config;
