// questions06.js
quizDataRaw = [
    {
        "text": "DNS環境をセキュアに構築するために利用される代表的なサブステートメントallow-recursionの説明として正しいものを選べ。",
        "choices": ["再帰的な問い合わせを受け付けるかどうか", "再帰的な問い合わせを受け付けるホストを指定", "問い合わせを受け付けるホストの指定", "ゾーン転送を許可するホストの指定", "問い合わせの回送先DNSサーバの指定"],
        "correctIndex": 1
    },
    {
        "text": "DNS環境をセキュアに構築するために利用される代表的なサブステートメントrecursionの説明として正しいものを選べ。",
        "choices": ["再帰的な問い合わせを受け付けるかどうか", "再帰的な問い合わせを受け付けるホストを指定", "問い合わせを受け付けるホストの指定", "ゾーン転送を許可するホストの指定", "問い合わせの回送先DNSサーバの指定"],
        "correctIndex": 0
    },
    {
        "text": "DNS環境をセキュアに構築するために利用される代表的なサブステートメントallow-queryの説明として正しいものを選べ。",
        "choices": ["再帰的な問い合わせを受け付けるかどうか", "再帰的な問い合わせを受け付けるホストを指定", "問い合わせを受け付けるホストの指定", "ゾーン転送を許可するホストの指定", "問い合わせの回送先DNSサーバの指定"],
        "correctIndex": 2
    },
    {
        "text": "DNS環境をセキュアに構築するために利用される代表的なサブステートメントallow-transferの説明として正しいものを選べ。",
        "choices": ["再帰的な問い合わせを受け付けるかどうか", "再帰的な問い合わせを受け付けるホストを指定", "問い合わせを受け付けるホストの指定", "ゾーン転送を許可するホストの指定", "問い合わせの回送先DNSサーバの指定"],
        "correctIndex": 3
    },
    {
        "text": "DNS環境をセキュアに構築するために利用される代表的なサブステートメントforwardersの説明として正しいものを選べ。",
        "choices": ["再帰的な問い合わせを受け付けるかどうか", "再帰的な問い合わせを受け付けるホストを指定", "問い合わせを受け付けるホストの指定", "ゾーン転送を許可するホストの指定", "問い合わせの回送先DNSサーバの指定"],
        "correctIndex": 4
    },
    {
        "text": "DNS環境をセキュアに構築するために利用される代表的なサブステートメントにおいて「再帰的な問い合わせを受け付けるかどうか」を表すのはどれか",
        "choices": ["recursion", "allow-recursion", "allow-query", "allow-transfer", "forwarders", "dnssec-validation"],
        "correctIndex": 0
    },
    {
        "text": "DNS環境をセキュアに構築するために利用される代表的なサブステートメントにおいて「再帰的な要求をどのように処理するかを指定」を表すのはどれか",
        "choices": ["recursion", "allow-recursion", "allow-query", "allow-transfer", "forwarders", "dnssec-validation"],
        "correctIndex": 0
    },
    {
        "text": "DNS環境をセキュアに構築するために利用される代表的なサブステートメントにおいて「再帰的な問い合わせを受け付けるホストを指定」を表すのはどれか",
        "choices": ["recursion", "allow-recursion", "allow-query", "allow-transfer", "forwarders", "dnssec-validation"],
        "correctIndex": 1
    },
    {
        "text": "DNS環境をセキュアに構築するために利用される代表的なサブステートメントにおいて「問い合わせを受け付けるホストの指定」を表すのはどれか",
        "choices": ["recursion", "allow-recursion", "allow-query", "allow-transfer", "forwarders", "dnssec-validation"],
        "correctIndex": 2
    },
    {
        "text": "DNS環境をセキュアに構築するために利用される代表的なサブステートメントにおいて「すべての検索要求に対し要求を処理するかどうかを指定」を表すのはどれか",
        "choices": ["recursion", "allow-recursion", "allow-query", "allow-transfer", "forwarders", "dnssec-validation"],
        "correctIndex": 2
    },
    {
        "text": "DNS環境をセキュアに構築するために利用される代表的なサブステートメントにおいて「ゾーン転送を許可するホストの指定」を表すのはどれか",
        "choices": ["recursion", "allow-recursion", "allow-query", "allow-transfer", "forwarders", "dnssec-validation"],
        "correctIndex": 3
    },
    {
        "text": "DNS環境をセキュアに構築するために利用される代表的なサブステートメントにおいて「ゾーン転送要求に対し要求を処理するかどうかを指定」を表すのはどれか",
        "choices": ["recursion", "allow-recursion", "allow-query", "allow-transfer", "forwarders", "dnssec-validation"],
        "correctIndex": 3
    },
    {
        "text": "DNS環境をセキュアに構築するために利用される代表的なサブステートメントにおいて「問い合わせの回送先DNSサーバの指定」を表すのはどれか",
        "choices": ["recursion", "allow-recursion", "allow-query", "allow-transfer", "forwarders", "dnssec-validation"],
        "correctIndex": 4
    },
    {
        "text": "DNS環境をセキュアに構築するために利用される代表的なサブステートメントにおいて「外部への全ての検索要求を他のDNSサーバに転送するよう指定」を表すのはどれか",
        "choices": ["recursion", "allow-recursion", "allow-query", "allow-transfer", "forwarders", "dnssec-validation"],
        "correctIndex": 4
    },
    {
        "text": "DNS環境をセキュアに構築するために利用される代表的なサブステートメントにおいて「DNSの回答された情報が本当に正しい権威サーバーから返されているのか検証する」を表すのはどれか",
        "choices": ["recursion", "allow-recursion", "allow-query", "allow-transfer", "forwarders", "dnssec-validation"],
        "correctIndex": 5
    },
    {
        "text": "DNS環境をセキュアに構築するための設定（運用例）で、マスターサーバは「     」に配置する。",
        "choices": ["インターネット", "内部ネットワーク", "DMZ", "外部ネットワーク", "社内ネットワーク"],
        "correctIndex": 1
    },
    {
        "text": "DNS環境をセキュアに構築するための設定（運用例）で、スレーブサーバは「     」に配置する。",
        "choices": ["インターネット", "内部ネットワーク", "DMZ", "外部ネットワーク", "社内ネットワーク"],
        "correctIndex": 2
    },
    {
        "text": "DNSマスタサーバの設定において内部ＮＷ（192.168.1.0/24）のホストのみ検索要求を受け付けるようにするための設定例はどれか",
        "choices": ["allow-query { 192.168.1.0/24; };", "allow-recursion { 192.168.1.0/24; };", "allow-transfer { 192.168.1.0/24; };", "forwarders { 192.168.2.1; };"],
        "correctIndex": 0
    },
    {
        "text": "DNSマスタサーバの設定においてスレーブサーバ（192.168.2.1/24）からのみゾーン転送を許可するための設定例はどれか",
        "choices": ["allow-query { 192.168.1.0/24; };", "allow-recursion { 192.168.1.0/24; };", "allow-transfer { 192.168.1.0/24; };", "forwarders { 192.168.2.1; };"],
        "correctIndex": 2
    },
    {
        "text": "DNSマスタサーバの設定において検索要求はスレーブサーバ（192.168.1.0/24）へ転送して回答が得られない場合でも自分自身で検索要求を送信しない設定例はどれか",
        "choices": ["allow-query { 192.168.1.0/24; };", "allow-recursion { 192.168.1.0/24; };", "allow-transfer { 192.168.1.0/24; };", "forwarders { 192.168.2.1; };"],
        "correctIndex": 3
    },
    {
        "text": "DNSスレーブサーバの設定において検索要求は限定しない（全て）設定例はどれか",
        "choices": ["allow-query { any; };", "allow-recursion { 192.168.1.0/24; };", "allow-transfer { 192.168.1.0/24; };", "forwarders { 192.168.2.1; };"],
        "correctIndex": 0
    },
    {
        "text": "DNSスレーブサーバの設定において再帰的検索要求をDMZ内のホスト（192.168.2.0）、マスターサーバ（192.168.1.1）のみにする設定例はどれか",
        "choices": ["allow-query { any; };", "allow-recursion { 192.168.2.0/24; 192.168.1.1; };", "allow-transfer { 192.168.1.0/24; };", "forwarders { 192.168.2.1; };"],
        "correctIndex": 1
    },
    {
        "text": "DNSスレーブサーバの設定においてゾーン転送をしない設定例はどれか",
        "choices": ["allow-query { any; };", "allow-recursion { 192.168.2.0/24; 192.168.1.1; };", "allow-transfer { none; };", "forwarders { 192.168.2.1; };"],
        "correctIndex": 2
    },
    {
        "text": "DNSスレーブサーバの設定において外部との通信を内部ＮＷからの検索要求に従う設定例はどれか",
        "choices": ["allow-query { any; };", "allow-recursion { 192.168.2.0/24; 192.168.1.1; };", "allow-transfer { none; };", "forwarders { 192.168.2.1; };"],
        "correctIndex": 1
    },
    {
        "text": "apacheのアクセス認証で、アクセスしてくるホストのホスト名やIPアドレスによって制限する方法はどれか",
        "choices": ["ホスト認証", "ユーザ認証", "クラス認証", "ハッシュ認証", "グループ認証"],
        "correctIndex": 0
    },
    {
        "text": "apacheのアクセス認証で、ユーザ名とパスワードを用いて制限する方法はどれか",
        "choices": ["ホスト認証", "ユーザ認証", "クラス認証", "ハッシュ認証", "グループ認証"],
        "correctIndex": 1
    },
    {
        "text": "apacheのアクセス認証で、ユーザ認証の中で異なるのはどれか",
        "choices": ["Basic認証", "Digest認証", "HTTP基本認証", "ホスト認証"],
        "correctIndex": 3
    },
    {
        "text": "Basic認証でアクセス可能ユーザーの登録を行いたい。正しいコマンドはどれか",
        "choices": ["htpasswd -c /etc/httpd/.htpasswd user1", "htpasswd -c /etc/httpd/.htpasswd user1 password1", "htpasswd -c /etc/httpd/.htpasswd user1 -p password1", "htpasswd -c /etc/httpd/.htpasswd user1 -b password1", "htpasswd -c /etc/httpd/.htpasswd user1 -s password1"],
        "correctIndex": 0
    }
];