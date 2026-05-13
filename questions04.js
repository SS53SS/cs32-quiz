// questions04.js
quizDataRaw = [
    {
        "text": "IP（Internet Protocol）で送受信されるデータの単位（「　　　　　」とも呼ばれる）",
        "choices": ["IPヘッダ", "IPパケット", "ペイロード", "プロトコル"],
        "correctIndex": 1
    },
    {
        "text": "送りたいデータ本体（「　　　　　」）に、宛先などの制御情報を付加した一定の長さのデータのまとまり",
        "choices": ["IPヘッダ", "IPパケット", "ペイロード", "プロトコル"],
        "correctIndex": 2
    },
    {
        "text": "IPヘッダについて正しくないのはどれか",
        "choices": ["IPヘッダは20バイトである", "Optionでバイト数は変動する", "Paddingでバイト数は変動する"],
        "correctIndex": 0
    },
    {
        "text": "IPデータグラムフォーマットのフィールド名について正しくないのはどれか",
        "choices": ["Version：IPのバージョン種別を示す。現在の主流はバージョン6", "IHL：IPヘッダ長を示す", "Type of Service：IPデータグラム転送時のネットワークサービスレベルを指示する", "Total Length：IPデータグラム全長を示す"],
        "correctIndex": 0
    },
    {
        "text": "IPデータグラムフォーマットのフィールド名と説明について正しくないのはどれか",
        "choices": ["Version：IPのバージョン種別を示す。現在の主流はバージョン4", "IHL：IPヘッダ長を示す", "Type of Service：IPデータグラム転送時のネットワークサービスレベルを指示する", "Total Length：IPヘッダ全長を示す"],
        "correctIndex": 3
    },
    {
        "text": "IPデータグラムフォーマットのフィールド名と説明について正しくないのはどれか",
        "choices": ["Identification：IPデータグラムがフラグメント化された場合、各断片が元のデータグラムと同一であることを示す識別子", "Flags：Flagmentionに関する状態変更を指示する", "Fragment Offset：IPデータグラムがFragmentationによって分割された際、元のIPデータグラムの位置を示す"],
        "correctIndex": 1
    },
    {
        "text": "IPデータグラムフォーマットのフィールド名と説明について正しくないのはどれか",
        "choices": ["Identity：IPデータグラムがフラグメント化された場合、各断片が元のデータグラムと同一であることを示す識別子", "Flags：Flagmentionに関する制御を指示する", "Fragment Offset：IPデータグラムがFragmentationによって分割された際、元のIPデータグラムの位置を示す"],
        "correctIndex": 0
    },
    {
        "text": "IPデータグラムフォーマットのフィールド名とサイズについて正しくないのはどれか",
        "choices": ["Version：4", "IHL：4", "Type of Service：8", "Total Length：16", "Identification：16", "Flags：4", "Fragment Offset：13"],
        "correctIndex": 5
    },
    {
        "text": "IPデータグラムフォーマットのフィールド名とサイズについて正しくないのはどれか",
        "choices": ["TTL：4", "Protocol：8", "Header Checksum：16", "Source Address：32", "Destination Address：32", "Options：可変長", "Padding：可変長"],
        "correctIndex": 0
    },
    {
        "text": "IPデータグラムフォーマットのフィールド名とサイズについて正しくないのはどれか",
        "choices": ["TTL：8", "Protocol：8", "Header Checksum：16", "Source Address：32", "Destination Address：32", "Options：8", "Padding：可変長"],
        "correctIndex": 5
    },
    {
        "text": "Source AddressとはIPパケットの「　　　　　」のIPアドレス",
        "choices": ["送信先", "送信元", "宛先", "中継先"],
        "correctIndex": 1
    },
    {
        "text": "Destination AddressとはIPパケットの「　　　　　」のIPアドレス",
        "choices": ["送信先", "送信元", "中継先"],
        "correctIndex": 0
    },
    {
        "text": "IPの役割で、転送先の決定のため、LAN内のアドレス範囲は、一度計算すれば済むため、表のような形で管理することを何というか",
        "choices": ["ルートテーブル", "ルーティングマトリックス", "ルーティングテーブル", "rootmap"],
        "correctIndex": 2
    },
    {
        "text": "TTL　IPパケットを作る送信元パソコンのIPが初期値を決め、ルーターを通過するごとに「　　　　　」ずつ減少する",
        "choices": ["1", "2", "5", "10", "254"],
        "correctIndex": 0
    },
    {
        "text": "TTLの初期値について正しいものはどれか",
        "choices": ["UNIX：254", "Windows：128", "Linux：63", "Cisco IOS：200"],
        "correctIndex": 1
    },
    {
        "text": "TTLについて正しいものはどれか",
        "choices": ["IPパケットがネットワーク上で生存できる時間", "ICMPパケットの宛先", "IPパケットの規格", "DNSキャッシュ情報の保持時間として利用される値", "ルータを経由するたびに増加する値"],
        "correctIndex": 0
    },
    {
        "text": "期限切れパケットの破棄について、TTL値が「　　　　　」場合、ほかに転送することなく、パケットを破棄",
        "choices": ["0の", "0より大きい", "0より小さい", "128より小さい", "128より大きい"],
        "correctIndex": 0
    },
    {
        "text": "期限切れパケットの破棄について、TTL値が「　　　　　」場合、結果をTTL値に設定し、パケットを転送",
        "choices": ["0の", "0より大きい", "0より小さい", "128より小さい", "128より大きい"],
        "correctIndex": 1
    },
    {
        "text": "期限切れパケットの破棄について、Traceroute（tracert）コマンドは、「　　　　　」を活用",
        "choices": ["Flags", "IHL", "Option", "TTL"],
        "correctIndex": 3
    },
    {
        "text": "IPは、自身がつながっている回線のMTUを「　　　　　」に問い合わせ、自分とつながっている回線が許す限り大きなIPパケットを作って送る。",
        "choices": ["TTL", "Flags", "NDA", "NIC", "ITU.KCC"],
        "correctIndex": 3
    },
    {
        "text": "IPパケットの分割は、異なる回線同士を相互につなぐ中継所である「　　　　　」が行う",
        "choices": ["中継器", "交換機", "ルーター", "ブリッジ", "ゲートウェイ"],
        "correctIndex": 2
    },
    {
        "text": "パケットの分割／再構成におけるFlagsフィールドは3ビットで表現されるが、正しい説明はどれか",
        "choices": ["1ビット目は未使用（1で固定）", "2ビット目は中継ルーターに対して、フラグメントの分割の許可／禁止を0か1で示す", "3ビット目は送信元ホストに対して、分割されたデータグラムが継続するか0か1で示す"],
        "correctIndex": 1
    },
    {
        "text": "経路MTU探索とは何度か試しのIPパケットを宛先に送って、途中で分割されない「　　　　　」を見つける手法",
        "choices": ["最大サイズ", "最小サイズ", "最適なTTL値", "最大ホップ数", "最短経路"],
        "correctIndex": 0
    },
    {
        "text": "IPパケットが壊れていることが判明したら、「　　　　　」",
        "choices": ["自動で修正してパケットを転送する", "壊れていることをFlagsに反映し転送する", "その時点でパケットを捨てる", "転送中であれば転送後にパケットを破棄する"],
        "correctIndex": 2
    },
    {
        "text": "IPヘッダーの書き換わるフィールドはどれか",
        "choices": ["送信元IPアドレス", "宛先IPアドレス", "プロトコル番号", "ヘッダチェックサム"],
        "correctIndex": 3
    },
    {
        "text": "IPヘッダーの書き換わるフィールドはどれか",
        "choices": ["送信元IPアドレス", "宛先IPアドレス", "プロトコル番号", "TTL"],
        "correctIndex": 3
    }
];