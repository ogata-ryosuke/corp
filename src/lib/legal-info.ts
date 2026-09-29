/**
 * MOR（モールス学習アプリ）法務ページの正典的な事業者情報。
 * 3 ページ（プライバシーポリシー / 利用規約 / 特定商取引法に基づく表記）で共有する。
 * これらは MOR リポジトリの引き継ぎ（docs/corp-legal-pages-handoff.md）で確定した値。
 */
export interface LegalInfo {
  /** 運営会社名 */
  companyName: string;
  /** 運営統括責任者 / 個人情報保護管理者 */
  representative: string;
  /** 法人登記住所 */
  registeredAddress: string;
  /** 郵便番号（住所と分離表記が必要な場合用） */
  postalCode: string;
  /** 法務ページ用の連絡先メールアドレス */
  contactEmail: string;
  /** 広告非表示 IAP の価格（税込）。改定時はここ 1 箇所を更新すればよい */
  productPrice: string;
  /** プライバシーポリシー / 利用規約の最終更新日（＝公開日） */
  publishDate: string;
  /** 特定商取引法ページの電話番号運用に関する注記 */
  phoneDisclosureNote: string;
  /** iOS 最低対応バージョン（MOR 側で確定次第反映。未確定時は null） */
  iosMinVersion: string | null;
  /** Android 最低対応 API レベル（MOR 側で確定次第反映。未確定時は null） */
  androidMinApi: string | null;
}

export const LEGAL_INFO: LegalInfo = {
  companyName: '株式会社バリアントコード',
  representative: '小方 亮佑',
  registeredAddress: '〒192-0082 東京都八王子市東町1番14号橋完ビル4階E号室',
  postalCode: '192-0082',
  contactEmail: 'support@variantcode.co.jp',
  productPrice: '¥600',
  publishDate: '2026-07-07',
  phoneDisclosureNote: '請求があれば遅滞なく開示いたします',
  iosMinVersion: '13.0',
  androidMinApi: '7.0（API 24）',
};

export interface LegalLink {
  path: string;
  label: string;
}

/** MOR 法務 3 ページの相互リンク定義 */
export const LEGAL_LINKS: readonly LegalLink[] = [
  { path: '/mor/privacy', label: 'プライバシーポリシー' },
  { path: '/mor/terms', label: '利用規約' },
  { path: '/mor/tokushoho', label: '特定商取引法に基づく表記' },
];
