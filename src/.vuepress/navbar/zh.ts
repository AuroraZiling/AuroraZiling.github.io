import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "概览", icon: "discover", link: "/overview/" },
  {
    text: "Sangonomiya 文档",
    icon: "note",
    link: "/sangonomiya/",
  },
  {
    text: "Asta 文档",
    icon: "note",
    link: "/asta/",
  },
  {
    text: "关于",
    icon: "note",
    link: "/about/",
  },
]);
