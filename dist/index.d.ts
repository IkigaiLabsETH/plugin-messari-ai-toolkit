import { Provider, Plugin } from '@elizaos/core';

declare const copilotProvider: Provider;

declare const index_copilotProvider: typeof copilotProvider;
declare namespace index {
  export { index_copilotProvider as copilotProvider };
}

declare const messariPlugin: Plugin;

export { messariPlugin as default, messariPlugin, index as providers };
