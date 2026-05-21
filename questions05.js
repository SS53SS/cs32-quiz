// questions05.js
quizDataRaw = [
    {
        "text": "TCP/IPネットワークでは、ネットワーク上にコンピュータを識別するために、「　　　　　」を利用する",
        "choices": ["MACアドレス", "ARPアドレス", "IPアドレス", "DNS名", "ホスト名", "ポート番号"],
        "correctIndex": 2
    },
    {
        "text": "完全修飾ドメイン名とはどれか",
        "choices": ["FQDN", "ホスト名", "ドメイン名", "サブドメイン", "IPアドレス"],
        "correctIndex": 0
    },
    {
        "text": "DNSとは",
        "choices": ["FQDNとIPアドレスを相互に変換する仕組み", "IPアドレスからMACアドレスを取得する仕組み", "Webページを暗号化して転送する仕組み", "メールを送受信するための仕組み"],
        "correctIndex": 0
    },
    {
        "text": "ホスト名とIPアドレスとを相互変換すること",
        "choices": ["名前解決", "経路制御", "暗号化通信", "フラグメンテーション", "認証処理"],
        "correctIndex": 0
    },
    {
        "text": "ホスト名からIPアドレスを求めること",
        "choices": ["正引き", "逆引き", "名前圧縮", "ループバック", "フォワーディング", "キャッシュ参照"],
        "correctIndex": 0
    },
    {
        "text": "IPアドレスからホスト名を求めること",
        "choices": ["正引き", "逆引き", "名前圧縮", "ループバック", "フォワーディング", "キャッシュ参照"],
        "correctIndex": 1
    },
    {
        "text": "インターネットに接続しているサーバは全てこのドメイン単位で管理され、世界的規模の「　　　　　」をもつ巨大な分散データベースを構成",
        "choices": ["ツリー構造", "リング構造", "スター構造", "バス構造", "メッシュ構造"],
        "correctIndex": 0
    },
    {
        "text": "マスタサーバとは",
        "choices": ["自ドメイン内にすべての情報をファイルとして管理しているサーバ", "セカンダリDNSサーバとも言われる", "自ドメインに関する情報を管理していない", "外部ドメイン名のみを管理するサーバ", "キャッシュ情報だけを保持するサーバ"],
        "correctIndex": 0
    },
    {
        "text": "スレーブサーバとは",
        "choices": ["自ドメイン内にすべての情報をファイルとして管理しているサーバ", "プライマリDNSサーバとも言われる", "セカンダリDNSサーバとも言われる", "DHCP機能だけを提供するサーバ", "外部ドメインの問い合わせだけを処理するサーバ"],
        "correctIndex": 2
    },
    {
        "text": "スレーブサーバーを構築する利点ではないのはどれか",
        "choices": ["可用性", "冗長性", "負荷分散"],
        "correctIndex": 0
    },
    {
        "text": "DNSは、ネームサーバと「　　　　　」（ライブラリから構成）",
        "choices": ["リゾルバ", "DHCP", "キャッシュサーバ", "プロキシ", "ゲートウェイ"],
        "correctIndex": 0
    },
    {
        "text": "ネームサーバは各ドメインに配置され、ドメイン内の各ホストのFQDNやIPアドレスなどの「　　　　　」を管理",
        "choices": ["MACアドレス変換表", "経路制御情報", "暗号化キー情報", "ドメイン空間の情報", "ARPキャッシュ情報"],
        "correctIndex": 3
    },
    {
        "text": "リゾルバとは「　　　　　」に問い合わせを行うクライアントのライブラリ",
        "choices": ["DHCPサーバ", "ネームサーバ", "Webサーバ", "FTPサーバ", "プロキシサーバ"],
        "correctIndex": 1
    },
    {
        "text": "ブートファイルの文法チェックコマンドで正しいのはどれか",
        "choices": ["/usr/sbin/named-checkconf /etc/named.conf", "/usr/sbin/named-checkconf /var/named.conf", "/usr/sbin/named-checkconf /var/named/named.conf", "/usr/sbin/named-checkconf /var/named/named.ca"],
        "correctIndex": 0
    },
    {
        "text": "ゾーンデータファイルのレコード種別で一般的に使用されないのはどれか",
        "choices": ["SOAレコード", "NSレコード", "Aレコード", "MXレコード", "TXTレコード", "HTTPレコード"],
        "correctIndex": 5
    }
];