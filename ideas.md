# LifeDesign株式会社 コーポレートサイト デザインアイデア

## 設計図の分析
- シングルページ構成：Hero / About / Services / Message / Company / Footer
- カラー：スレート系ダーク（#1e293b, #334155）＋インディゴアクセント
- フォント：Noto Sans JP
- コンタクトフォーム：削除
- 代表者顔写真：削除
- ページ説明文：別途追加

---

<response>
<text>
## アイデア1：「建築的ミニマリズム」

**Design Movement**: Japanese Architectural Minimalism × Swiss Grid System

**Core Principles**:
1. 余白を積極的に使い、情報に呼吸を与える
2. 縦横の強いグリッドラインで構造を表現
3. テキストの重みとサイズのコントラストで視覚的ヒエラルキーを構築
4. 装飾を排し、素材感と空間で品格を表現

**Color Philosophy**:
- ベース：オフホワイト（#F8F7F4）で温かみのある清潔感
- ダーク：チャコール（#1C1C1E）で重厚感
- アクセント：ディープネイビー（#1E3A5F）で信頼と知性
- ハイライト：ゴールドライン（#C9A96E）で高級感の点描

**Layout Paradigm**:
- 左寄せ非対称レイアウト
- セクション間に太いボーダーラインで区切り
- テキストブロックと画像の非対称配置

**Signature Elements**:
1. 細い水平ラインの装飾モチーフ
2. 大きな数字（01, 02...）によるセクションナンバリング
3. テキストのマスキングアニメーション

**Interaction Philosophy**:
- スクロールに連動した要素の出現
- ホバー時の下線スライドアニメーション
- 静的で落ち着いた動き

**Animation**:
- フェードイン＋スライドアップ（0.6s ease-out）
- テキストのマスクリビール
- ホバー時のボーダーラインアニメーション

**Typography System**:
- 見出し：Noto Serif JP（重厚感）
- 本文：Noto Sans JP（可読性）
- アクセント：欧文にCormorant Garamond
</text>
<probability>0.08</probability>
</response>

<response>
<text>
## アイデア2：「コンテンポラリー・プロフェッショナル」

**Design Movement**: Contemporary Corporate × Editorial Design

**Core Principles**:
1. 設計図のスレート＋インディゴカラーを洗練させて継承
2. 大胆なタイポグラフィで視線を誘導
3. カード要素に深みのある影とグラデーションを加える
4. セクションごとに異なる背景テクスチャで変化をつける

**Color Philosophy**:
- ダークスレート（#0F172A）を基調とした重厚感
- インディゴ（#4F46E5）→ バイオレット（#7C3AED）のグラデーションアクセント
- ライトセクションは純白ではなく微妙なグレー（#F1F5F9）
- テキストは純黒を避けスレート（#1E293B）で柔らかく

**Layout Paradigm**:
- ヒーロー：全画面ダーク背景に中央配置の大きな見出し
- Aboutセクション：左右2カラムの非対称（テキスト60% / 画像40%）
- サービス：4カラムカードグリッド
- 会社概要：ダーク背景でコントラスト

**Signature Elements**:
1. グラデーションのアクセントライン
2. カードのホバー時の浮き上がりエフェクト
3. セクション区切りの斜めカット（clip-path）

**Interaction Philosophy**:
- スムーズスクロールとIntersection Observerによるアニメーション
- ホバー時のカード浮き上がり（translateY）
- ナビゲーションのアクティブ状態表示

**Animation**:
- スクロール連動フェードイン（opacity + translateY）
- カードホバー：shadow拡大＋translateY(-4px)
- ヒーローの背景ブロブアニメーション

**Typography System**:
- 見出し：Noto Sans JP Bold（700）
- 本文：Noto Sans JP Regular（400）
- ラベル：Noto Sans JP Medium（500）、letter-spacing: 0.1em
</text>
<probability>0.07</probability>
</response>

<response>
<text>
## アイデア3：「ライン＆スペース」

**Design Movement**: Brutalist Typography × Japanese Precision

**Core Principles**:
1. 太いボーダーラインと大きなタイポグラフィで力強さを表現
2. 白黒を基調に、単色のアクセントカラーで視線を集める
3. 非対称な要素配置でダイナミズムを演出
4. テキストを主役にした情報設計

**Color Philosophy**:
- ほぼモノクロ：白（#FFFFFF）と黒（#000000）
- アクセント：ビビッドブルー（#0066FF）のみ
- グレー階調で奥行きを表現

**Layout Paradigm**:
- 大きな見出しが画面を占領するヒーロー
- テキストと要素の意図的な非整列
- 太いボーダーによるセクション区切り

**Signature Elements**:
1. 極太ボーダーライン（4-8px）
2. 大文字英語テキストのオーバーレイ
3. 斜体テキストのアクセント

**Interaction Philosophy**:
- クリック時の即座のレスポンス
- ホバー時の色反転（黒背景→白テキスト）
- ミニマルなアニメーション

**Animation**:
- テキストのスライドイン（水平方向）
- ホバー時の背景色フィル
- スクロール時のパララックス効果

**Typography System**:
- 見出し：Noto Sans JP Black（900）
- 本文：Noto Sans JP Light（300）
- 英語アクセント：Space Grotesk Bold
</text>
<probability>0.06</probability>
</response>

---

## 選択：アイデア2「コンテンポラリー・プロフェッショナル」

設計図のデザイン言語（スレート＋インディゴ）を継承しつつ、
React + Tailwindの強みを活かした洗練されたコーポレートサイトを構築する。
