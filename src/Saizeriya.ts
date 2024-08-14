import { fetchMenus } from "./lib";
import { Menu } from "./types";

/**
 * サイゼリヤのメニューを管理するクラス
 */
export class Saizeriya {
  // メニューリストを格納するための配列
  private menus: Menu[] = [];

  /**
   * コンストラクタ
   * インスタンス生成時にメニューをロードする
   */
  constructor() {
    this.loadMenus();
  }

  /**
   * メニューを非同期でロードする
   * プライベートメソッド
   */
  private async loadMenus() {
    this.menus = await fetchMenus();
  }

  /**
   * 全てのメニューを取得する
   * @returns メニューの配列
   */
  async all(): Promise<Menu[]> {
    // メニューリストが空の場合、メニューをロードする
    if (this.menus.length === 0) {
      await this.loadMenus();
    }

    return this.menus;
  }
}
