import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "概览",
      prefix: "overview/",
      link: "overview/",
      children: "structure",
    },
    {
      text: "Sangonomiya",
      icon: "note",
      prefix: "sangonomiya/",
      children: "structure",
    },
    {
      text: "Asta",
      icon: "note",
      prefix: "asta/",
      children: "structure",
    },
  ],
});
