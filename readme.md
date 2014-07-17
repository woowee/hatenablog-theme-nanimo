# hatenablog-theme-nanimo

はてなブログのテーマ 'nanimo' です。

[hatena/Hatena-Blog-Themes][00] をベースに作られています。

[00]: https://github.com/hatena/Hatena-Blog-Themes.git "hatena/Hatena-Blog-Themes"


### 構成

``` sh
hatenablog-theme-nanimo
|-- nanimo.less
|-- nanimo.css
|-- less
| |-- _mixin.less
| |-- _variable.less
| |-- _media-queries.less
| |-- _normalize.less
| `-- _mixin.less
|-- nanimo.js
|-- nanimo_gsc.less
|-- nanimo_gsc.css
`-- nanimo_gsc.js
```

* `nanimo.less`
    - テーマ 'nanimo' のスタイルです。
    - 4 つの LESS、_mixin.less、_variable.less、_media-queries.less、_normalize.less を読み込んでいます。詳細は後述該当該当項目参照。
    - さらに nanimo.js を一緒に使うことで、幾つかのパーツに変更を加えることができます。
    - さらに nanimo_gsc.css (nanimo_gsc.less) および nanimo_gsc.js を加えることで、検索ボックスに [Google カスタム検索][10]を使うことができるようになります。
* `less/_mixin.less`
    * ミックスインです。(ほぼ流用)
* `less/_variable.less`
    * テーマで使っている色、各種サイズ、および間隔等に関する変数です。
* `less/_media-queries.less`
    * media queries に関するスタイルです。(そのまま流用)
* `less/_normalize.less`
    * <a href="http://necolas.github.com/normalize.css/">normalize.css</a>です。(そのまま流用)
* `nanimo.js`
    - 'nanimo' テーマをインストールしたはてなブログに対し、付け加えるスクリプトです。
    - このスクリプトは、以下パーツに影響を与えます。;
        - サイドバーモジュールの "プロフィール"
        - サイドバーモジュールの "検索ボックス"
        - トップページ以外の "ページヘッダ"
        - "エントリー日付"
        - "コメント日付"
* `nanimo_gsc.less`
    - 'nanimo' テーマをインストールしたはてなブログで、[Google カスタム検索][10]を使う際に利用するスタイルです。
    - nanimo_gsc.js と併せて使います。
* `nanimo_gsc.js`
    - nanimo_gsc.less 同様、検索ボックスに [Google カスタム検索][10]を使用する際に組み込みます。
    - nanimo_gsc.css (nanimo_gsc.less) と併せて使います。
    - 事前に、[Google カスタム検索エンジン][10]への登録、コード取得等の準備が必要になります。

[10]: https://www.google.com/cse/?hl=ja "カスタム検索エンジン"

### 導入の手続き
#### テーマ 'nanimo' の導入について
[テーマストア][20]を介してインストールします。

[20]: http://blog.hatena.ne.jp/-/store/theme/12921228815727386161 "nanimo - テーマ ストア - はてなブログ"
[21]: https://raw.githubusercontent.com/woowee/hatenablog-theme-nanimo/master/nanimo/nanimo.css "nanimo.css"

#### 'nanimo' 向け追加スクリプト nanimo.js の導入について
スクリプト [nanimo.js][22]の内容を、ブログの管理画面 [設定 > 詳細設定 > headに要素を追加] のテキストボックスに追加します。

[22]:https://raw.githubusercontent.com/woowee/hatenablog-theme-nanimo/master/nanimo.js "nanimo.js"

#### 検索ボックスに、Google カスタム検索を使用する方法について
幾つかのステップを踏みます。;

0. Google のサービスで取得したカスタム検索エンジンのコードを、[デザイン > カスタム > ヘッダ > タイトル下] に追加します。  
なお、Google カスタム検索 については以下制限があります。;

    - Google カスタム検索 のコードは、V2 の利用を前提にしています。
    - Google カスタム検索 のレイアウトには [オーバーレイ] の利用を前提にしています。

0. スクリプト [nanimo_gsc.js][23] の内容を、[設定 > 詳細設定 > headに要素を追加] に追記します。
0. css [nanimo_gsc.css][24] の、文字列 `GOOGLE CUSTOME SEARCH ENGINE` に挟まれた部分のコードを [デザイン > カスタマイズ > デザインCSS] に追加します。


[24]: https://raw.githubusercontent.com/woowee/hatenablog-theme-nanimo/master/nanimo/nanimo_gsc.css "nanimo_gsc.css"
[23]: https://raw.githubusercontent.com/woowee/hatenablog-theme-nanimo/master/nanimo/nanimo_gsc.css "nanimo_gsc.js"


### ライセンス
これら LESS、css、およびスクリプトは、MIT ライセンスのもとで公開されています。
