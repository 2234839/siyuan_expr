import { Plugin } from "siyuan";

export default class OceanPress extends Plugin {
  private btn_selector = "oceanpress_widget_button";
  private timeID: ReturnType<typeof setInterval> | null = null;

  async onLayoutReady() {
    console.log("启动");

  }
  async onunload() {
  }

  async addButton() {
  }
  previewCurrentPage() {}
}
function sleep(time: number) {
  return new Promise((s) => setTimeout(s, time));
}
