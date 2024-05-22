export default () => ({
  name: "demo",
  apply: (config: any, { command }: any) =>
    (command === "serve" || command === "build"),
  buildStart: () => {
    // 构建前
    console.log('buildStart');
  },
  // ...
});
