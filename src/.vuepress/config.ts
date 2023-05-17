import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "The Imaginary",
      description: "Documents for Sangonomiya and Asta",
    },
  },

  theme,
});
