import { copilotProvider } from "./providers/copilot.ts";
import { Plugin } from "@elizaos/core";

export * as providers from "./providers";

export const messariPlugin: Plugin = {
  name: "messariAiToolkit",
  description: "Messari AI Toolkit for crypto market research capabilities",
  actions: [],
  providers: [copilotProvider],
  evaluators: [],
  services: [],
};

export default messariPlugin;
