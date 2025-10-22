declare module "prompt-sync" {
  function promptSync(options?: { sigint?: boolean }): (text?: string) => string;
  export = promptSync;
}
