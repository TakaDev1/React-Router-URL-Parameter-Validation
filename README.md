# React Router Product Dynamic Routing App

React RouterのURLパラメータを使用して、商品IDに応じた商品情報を表示する練習アプリです。

`/product/:id` の動的ルートを設定し、URLから取得した商品IDを数値に変換して、対応する商品名と金額を表示します。

---

## 目次

1. [概要](#概要)
2. [課題内容](#課題内容)
3. [学習内容](#学習内容)
4. [使用技術](#使用技術)
5. [アプリケーションの動作](#アプリケーションの動作)
6. [URLパラメータの処理](#urlパラメータの処理)
7. [数値変換とバリデーション](#数値変換とバリデーション)
8. [商品情報の表示](#商品情報の表示)
9. [ディレクトリ構成](#ディレクトリ構成)
10. [起動方法](#起動方法)
11. [確認方法](#確認方法)

---

## 概要

このアプリでは、React Routerの動的ルーティングを使用して商品詳細ページを作成します。

以下のようなURLにアクセスします。

```text
/product/1
/product/2
/product/3
```

URLの`id`を取得し、対応する商品情報を表示します。

---

## 課題内容

`/product/:id` にアクセスしたとき、URLの`id`に応じて処理を分岐します。

### 数値の場合

対応する商品が存在すれば、商品名と金額を表示します。

```text
/product/1

商品名: ノートパソコン
金額: 100,000円
```

### 数値ではない場合

`Invalid Product ID`を表示します。

```text
/product/abc

Invalid Product ID
```

### 数値だが商品が存在しない場合

`Product Not Found`を表示します。

```text
/product/999

Product Not Found
```

---

## 学習内容

このアプリでは以下の内容を学習します。

* React RouterのDynamic Routing
* URLパラメータ
* `useParams()`
* `parseInt()`
* `Number.isNaN()`
* 商品IDによるデータ検索
* 条件分岐
* `Link`によるページ遷移
* `toLocaleString()`による金額の桁区切り表示
* Tailwind CSSによるエラー表示

---

## 使用技術

* React
* TypeScript
* React Router
* Tailwind CSS

---

## アプリケーションの動作

### 商品ページへのリンク

ナビゲーションから商品ページへ移動できます。

```text
商品1
商品2
```

例えば、

```text
商品1
↓
/product/1
```

へ移動します。

---

## URLパラメータの処理

ルートでは`:id`を使用します。

```tsx
<Route
  path="/product/:id"
  element={<ProductParams />}
/>
```

`:id`はURLパラメータです。

例えば、

```text
/product/1
```

にアクセスした場合、

```text
id = "1"
```

として取得できます。

---

## `useParams()`によるID取得

`useParams()`を使用してURLパラメータを取得します。

```tsx
const { id } = useParams();
```

取得した`id`は文字列です。

```text
/product/1
     ↓
id = "1"
     ↓
string
```

そのため、商品IDとして利用する前に数値へ変換します。

---

## 数値変換とバリデーション

### `parseInt()`

`parseInt()`を使用して、URLパラメータを整数へ変換します。

```tsx
const productId = parseInt(id ?? "", 10);
```

例えば、

```ts
parseInt("1", 10);
```

の場合、

```text
1
```

という数値になります。

一方、

```ts
parseInt("abc", 10);
```

の場合、

```text
NaN
```

になります。

### `Number.isNaN()`

`Number.isNaN()`を使用して、数値変換に失敗したか確認します。

```tsx
if (Number.isNaN(productId)) {
  return (
    <p className="text-red-600">
      Invalid Product ID
    </p>
  );
}
```

これにより、数値ではないURLパラメータをエラーとして処理できます。

---

## 商品情報の表示

数値として有効なIDの場合、商品データから該当する商品を取得します。

```tsx
const product = ProductsData[productId];
```

商品が存在する場合は、商品名と金額を表示します。

```tsx
{product ? (
  <div>
    <p>商品名: {product.name}</p>
    <p>
      金額: {product.price.toLocaleString()}円
    </p>
  </div>
) : (
  <p>Product Not Found</p>
)}
```

---

## 金額の表示

`toLocaleString()`を使用すると、数値に桁区切りを付けられます。

```ts
product.price.toLocaleString()
```

例えば、

```text
100000
```

は、

```text
100,000
```

として表示されます。

---

## ディレクトリ構成

```text
src/
├── components/
│   └── Navigation.tsx
├── pages/
│   └── ProductParams.tsx
├── data/
│   └── ProductsData.ts
├── types/
│   └── Product.ts
└── App.tsx
```

### `components/`

```text
Navigation.tsx
```

商品ページへのリンクを管理します。

### `pages/`

```text
ProductParams.tsx
```

URLパラメータの取得、数値変換、バリデーション、商品検索、商品情報の表示を行います。

### `data/`

```text
ProductsData.ts
```

学習用の商品データを管理します。

### `types/`

```text
Product.ts
```

商品データで使用する型を管理します。

### `App.tsx`

React Routerのルーティングを管理します。

---

## 起動方法

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

表示されたURLをブラウザで開きます。

---

## 確認方法

以下のURLにアクセスして動作を確認します。

### 正常な商品ID

```text
/product/1
```

対応する商品情報が表示されます。

### 数値ではないID

```text
/product/abc
```

以下が表示されます。

```text
Invalid Product ID
```

赤文字で表示されます。

### 存在しない商品ID

```text
/product/999
```

以下が表示されます。

```text
Product Not Found
```

---

## 処理の流れ

```text
/product/:id
       ↓
useParams()
       ↓
idを取得
       ↓
parseInt()
       ↓
数値へ変換
       ↓
Number.isNaN()
       ↓
 ┌─────┴─────┐
 ↓           ↓
NaN        有効な数値
 ↓           ↓
エラー       商品検索
             ↓
       ┌─────┴─────┐
       ↓           ↓
    存在する      存在しない
       ↓           ↓
   商品表示    Product Not Found
```

この課題を通して、**React RouterのURLパラメータを取得し、値を検証してデータ検索につなげる基本的な流れ**を学習します。
