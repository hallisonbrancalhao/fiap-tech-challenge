import { withModuleFederation } from '@nx/module-federation/angular';
import config from './module-federation.config';

/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
export default withModuleFederation(
  {
    ...config,
    remotes: [
      ['dashboard', 'https://main.d2uexl1wva9mc9.amplifyapp.com'],
      ['institutional', 'https://main.d2n3qfl1jdmcdh.amplifyapp.com']
    ]
  },
  { dts: false }
);
