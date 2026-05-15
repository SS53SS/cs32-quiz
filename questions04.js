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
    },
    {
        "text": "TCPとはIP（Internet Protocol）を使用して、相手に「　　　　　」を確実に、効率よく届けるための仕組みを提供するプロトコル",
        "choices": ["パケット", "ペイロード", "データ", "制御情報", "鍵", "プロトコル"],
        "correctIndex": 2
    },
    {
        "text": "TCPはデータを確実に届けるために、「　　　　　」し応答確認を行う",
        "choices": ["コネクションレスを確立", "コネクションを確立", "安全な経路を確認", "最適な経路を確認"],
        "correctIndex": 1
    },
    {
        "text": "TCPはデータを効率よく届けるために、「　　　　　」を行う",
        "choices": ["応答確認", "コネクションの確立", "経路選択", "通信制御"],
        "correctIndex": 3
    },
    {
        "text": "TCPはデータ部分が壊れていないかを確認するが、「　　　　　」",
        "choices": ["一部のフィールドが壊れている場合再送要求を行う", "中身については一切関知しない", "アプリケーションデータの意味まで解析する", "データの暗号化方式を自動で修復する"],
        "correctIndex": 1
    },
    {
        "text": "TCPセグメントのTCPヘッダのデータ形式のフィールド名Reservedのサイズは「　　　　　」",
        "choices": ["3", "4", "9", "16", "32"],
        "correctIndex": 0
    },
    {
        "text": "TCPセグメントのTCPヘッダのデータ形式のフィールド名Control Flagのサイズは「　　　　　」",
        "choices": ["3", "4", "9", "16", "32"],
        "correctIndex": 2
    },
    {
        "text": "TCPセグメントのTCPヘッダのデータ形式のフィールド名Control Flagは制御ビットであるが左から1ビットごとに、「　　　　　」、CWR、ECE、URG、ACK、PSH、RST、SYN、FINとそれぞれ呼ばれている。",
        "choices": ["NS", "CWR", "ECE", "URG", "ACK", "PSH", "RST", "SYN", "FIN"],
        "correctIndex": 0
    },
    {
        "text": "TCPセグメントのTCPヘッダのデータ形式のフィールド名Control Flagは制御ビットであるが左から1ビットごとに、NS、「　　　　　」、ECE、URG、ACK、PSH、RST、SYN、FINとそれぞれ呼ばれている。",
        "choices": ["NS", "CWR", "ECE", "URG", "ACK", "PSH", "RST", "SYN", "FIN"],
        "correctIndex": 1
    },
    {
        "text": "TCPセグメントのTCPヘッダのデータ形式のフィールド名Control Flagは制御ビットであるが左から1ビットごとに、NS、CWR、「　　　　　」、URG、ACK、PSH、RST、SYN、FINとそれぞれ呼ばれている。",
        "choices": ["NS", "CWR", "ECE", "URG", "ACK", "PSH", "RST", "SYN", "FIN"],
        "correctIndex": 2
    },
    {
        "text": "TCPセグメントのTCPヘッダのデータ形式のフィールド名OptionsはTCPによる通信の性能を向上させるために利用されるが、最大で「　　　　　」オクテットまでとなる",
        "choices": ["4", "8", "16", "32", "40"],
        "correctIndex": 4
    },
    {
        "text": "TCPの３つの役割とは何か　「　　　　　」、通信制御、アプリケーションとの仲介である",
        "choices": ["３ＷＡＹハンドシェイク", "接続と切断", "プロトコルの決定"],
        "correctIndex": 1
    },
    {
        "text": "コネクションとは各種の機器や回線、あるいはネットワークの中で通信を行う２つのアプリケーションが情報伝達のために占有して使用する仮想的な専用通信路のことであり、このコネクションを確立する手順をなんと呼ぶ",
        "choices": ["1WAYハンドシェイク", "2WAYハンドシェイク", "3WAYハンドシェイク", "4WAYハンドシェイク", "5WAYハンドシェイク"],
        "correctIndex": 2
    },
    {
        "text": "TCPヘッダのControl Flagにおいて、URG（アージェント）は送信するTCPセグメント中に、「　　　　　」を示す",
        "choices": ["一般的に処理すべきデータが含まれていること", "一般的に警告すべきデータが含まれていること", "緊急に処理すべきデータが含まれていること", "緊急に警告すべきデータが含まれていること"],
        "correctIndex": 2
    },
    {
        "text": "TCPヘッダのControl Flagにおいて、ACK（アック）は接続開始時の最初のTCPセグメント以外は、「　　　　　」になる",
        "choices": ["すべてACKとSYNがオン", "すべてACKとSYNがオフ", "すべてACKがオン", "すべてACKがオフ", "すべてSYNがオン", "すべてACKとSYNがオフ"],
        "correctIndex": 2
    },
    {
        "text": "TCPヘッダのControl Flagにおいて、PSH（プッシュ）は「　　　　　」のTCP機能に対して、TCPセグメントを速やかにアプリケーションに受け渡すことを要求するために使う",
        "choices": ["送信側が、受信側", "受信側が、送信側"],
        "correctIndex": 0
    },
    {
        "text": "TCPヘッダのControl Flagにおいて、PSH（プッシュ）は送信側が、受信側のTCP機能に対して、TCPセグメントを速やかに「　　　　　」に受け渡すことを要求するために使う",
        "choices": ["プレゼンテーション", "コネクション", "アプリケーション", "クライアント"],
        "correctIndex": 2
    },
    {
        "text": "TCPヘッダのControl Flagにおいて、RST（リセット）はTCPの接続状態を「　　　　　」ために使う",
        "choices": ["一時的に切る", "おかしなパケットを検出時に切る", "強制的に切る", "確認する前に切る"],
        "correctIndex": 2
    },
    {
        "text": "TCPヘッダのControl Flagにおいて、SYN（シン）は「　　　　　」するときに使う",
        "choices": ["TCPコネクションを同期", "TCPコネクションを確立", "TCPコネクションを終了", "TCPコネクションを転送", "TCPコネクションを切断"],
        "correctIndex": 1
    },
    {
        "text": "TCPヘッダのControl Flagにおいて、FIN（フィン）は「　　　　　」するときに使う",
        "choices": ["TCPコネクションを同期", "TCPコネクションを確立", "TCPコネクションを終了", "TCPコネクションを転送"],
        "correctIndex": 2
    },
    {
        "text": "TCPヘッダにおいて、通信確立後のデータ転送で使用するのはどれとどれか",
        "choices": ["Sequence NumberとACKnowledgement Number", "Source PortとACKnowledgement Number", "Sequence NumberとControl flag", "Sequence NumberとChecksum"],
        "correctIndex": 0
    },
    {
        "text": "TCPでは、相手との通信に先立ち必ず「　　　　　」を作る",
        "choices": ["物理的な通信路", "仮想的な通信路", "理想的な通信路"],
        "correctIndex": 1
    },
    {
        "text": "TCPコネクションの確立では送信側から受信側、受信側から送信側への２つの方向である「　　　　　」が可能な通信路が作られる",
        "choices": ["半二重通信", "全二重通信", "単方向通信", "非同期通信", "マルチキャスト通信"],
        "correctIndex": 1
    },
    {
        "text": "TCPの通信制御において３つの信頼性を高める工夫がある。含まれていないのはどれか",
        "choices": ["ウィンドウ制御", "再送制御", "輻輳（ふくそう）制御", "確認応答制御"],
        "correctIndex": 3
    },
    {
        "text": "TCPの通信制御（ウィンドウ制御）とは、相手からの「　　　」を待たずにTCPセグメントを続けて送れるようにし、信頼性を確保したままデータ転送のスループットを高める方法",
        "choices": ["送信要求", "受信要求", "確認応答", "接続終了通知", "再送要求"],
        "correctIndex": 2
    },
    {
        "text": "TCPの通信制御（再送制御）の説明において、「　　　　　」に確認応答が返ってこなければ、送信側は途中でTCPセグメントを紛失したと判断、TCPセグメントを再送信する",
        "choices": ["速やかに", "約60秒", "約5分", "一定時間内"],
        "correctIndex": 3
    },
    {
        "text": "TCPの通信制御（再送制御）の説明において、これまでに送ったTCPセグメントに対する確認応答が返ってくるまでの時間のことを何というか",
        "choices": ["ATT", "TTT", "RTT", "T_T", "APT"],
        "correctIndex": 2
    },
    {
        "text": "TCPの通信制御（輻輳制御）の説明において、輻輳（ふくそう）を回避するための仕組み（アルゴリズム）を何というか",
        "choices": ["ハイスピード・アルゴリズム", "ファストスタート・アルゴリズム", "ミドルスタート・アルゴリズム", "スロースタート・アルゴリズム"],
        "correctIndex": 3
    },
    {
        "text": "TCPの通信制御（輻輳制御）の説明において、輻輳（ふくそう）を回避するための仕組み（アルゴリズム）を何というか",
        "choices": ["ハイスピード・アルゴリズム", "ファストスタート・アルゴリズム", "ミドルスタート・アルゴリズム", "輻輳回避アルゴリズム"],
        "correctIndex": 3
    },
    {
        "text": "TCPの３つの役割のうち、アプリケーションの仲介においてポート番号で正しい組み合わせはどれか",
        "choices": ["0～1023：ウェルノウン・ポート", "1024～49151：ダイナミック／プライベートポート", "49152～65535：登録ポート"],
        "correctIndex": 0
    },
    {
        "text": "TCPの３つの役割のうち、アプリケーションの仲介においてポート番号で正しい組み合わせはどれか",
        "choices": ["0～1024：ウェルノウン・ポート", "1025～49151：登録ポート", "49152～65535：ダイナミック／プライベートポート"],
        "correctIndex": 2
    },
    {
        "text": "TCPの３つの役割のうち、アプリケーションの仲介において、アプリケーションは「　　　　　」を介して通信する",
        "choices": ["ラケット", "ポケット", "ソネット", "ソケット", "ランタイム"],
        "correctIndex": 3
    },
    {
        "text": "UDPとはIP（Internet Protocol）を使用してやり取りする際、相手に「　　　　　」ための仕組みを提供するプロトコル",
        "choices": ["データを確実に届ける", "データの暗号化方式を自動で修復する", "データを早く届ける", "データの到着順を保証する", "エラー発生時に必ず再送する"],
        "correctIndex": 2
    },
    {
        "text": "UDPは即時性を優先するため、「　　　　　」を保証する機能は持たない",
        "choices": ["機密性や完全性", "正確性や効率性", "可用性や保守性", "拡張性や柔軟性", "認証や暗号化"],
        "correctIndex": 1
    },
    {
        "text": "TCPのデータはセグメントと呼ばれたが、UDPとは「　　　　　」という",
        "choices": ["セメント", "ペイロード", "アプリケーション", "データグラム"],
        "correctIndex": 3
    },
    {
        "text": "UDPデータグラムのデータ形式において、ヘッダ名とサイズの組み合わせで間違っているのはどれか",
        "choices": ["送信元ポート番号：16", "あて先ポート番号：16", "UDPデータグラムの大きさ：8", "チェックサム：16"],
        "correctIndex": 2
    },
    {
        "text": "UDPの特徴はどれか",
        "choices": ["完全性の担保などは行わないコネクションレス型のプロトコル", "完全性の担保などは行わないコネクション型のプロトコル", "機密性の担保などは行わないコネクションレス型のプロトコル", "信頼性の担保などは行わないコネクションレス型のプロトコル", "信頼性の担保などは行わないコネクション型のプロトコル"],
        "correctIndex": 3
    },
    {
        "text": "UDPの特徴で誤っているのはどれか",
        "choices": ["TCPより高速処理", "TCPより通信効率が低い", "自由度が高い", "1対多の通信が可能"],
        "correctIndex": 1
    },
    {
        "text": "UDPの特徴で誤っているのはどれか",
        "choices": ["TCPより高速処理", "TCPより通信効率が高い", "自由度が低い", "1対多の通信が可能"],
        "correctIndex": 2
    },
    {
        "text": "UDPの用途として誤っているのはどれか",
        "choices": ["複数の相手へのメッセージを一斉同報するアプリケーション", "ストリーミング配信", "ドメイン名からIPアドレスを調べるDNS", "YouTube"],
        "correctIndex": 3
    },
    {
        "text": "ICMPプロトコルを使用しているコマンドはどれか",
        "choices": ["tracert", "nslookup", "telnet", "ipconfig"],
        "correctIndex": 0
    },
    {
        "text": "ICMPの用途で誤っているのはどれか",
        "choices": ["エラーの報告", "ネットワークのパフォーマンスを評価する診断ツール", "Webページの暗号化通信"],
        "correctIndex": 2
    },
    {
        "text": "ICMPメッセージフォーマットでTypeはメッセージタイプであるが何種類あるか",
        "choices": ["3", "6", "9", "15", "32"],
        "correctIndex": 3
    },
    {
        "text": "代表的なICMPメッセージであて先ネットワークに到達できない場合等のタイプの番号はどれか",
        "choices": ["0", "3", "5", "8", "11"],
        "correctIndex": 1
    },
    {
        "text": "代表的なICMPメッセージで「転送中に生存時間が0になった（TTL値が超過した）」のタイプの番号はどれか",
        "choices": ["0", "3", "5", "8", "11"],
        "correctIndex": 4
    },
    {
        "text": "ICMPメッセージのエラー通知は主にルータに実装される「　　　　　」から通知される",
        "choices": ["ARP", "ICMP", "IP", "TCP", "UDP"],
        "correctIndex": 1
    },
    {
        "text": "ICMPメッセージの問い合わせで通信状況を確認するときに使用するEcho Requestに対応するものはどれか",
        "choices": ["Echo on", "Echo off", "Echo Reply", "Echo decode"],
        "correctIndex": 2
    },
    {
        "text": "ICMPメッセージのエラー通知において「送信元に対して経路変更を促す目的で使用」はどれか",
        "choices": ["Destination Unreachable", "Redirect", "Time Exceeded"],
        "correctIndex": 1
    },
    {
        "text": "ICMPメッセージのエラー通知において「経路情報の不足等の理由によりIPパケットを送信・中継出来なかった場合やIPパケットを受信できなかった場合にその理由を送信元に通知」はどれか",
        "choices": ["Destination Unreachable", "Redirect", "Time Exceeded"],
        "correctIndex": 0
    },
    {
        "text": "ICMPメッセージのエラー通知において「中継すべきIPパケットのTTLが0になった場合やフラグメントの組み立てに失敗した場合に、その理由を送信元に通知」はどれか",
        "choices": ["Destination Unreachable", "Redirect", "Time Exceeded"],
        "correctIndex": 2
    },
    {
        "text": "Pingコマンドでネットワークのコネクション状態を確認する時のICMPメッセージタイプとしてRequest = 「　　　　　」,Reply = 0が使用される。",
        "choices": ["0", "1", "3", "5", "8"],
        "correctIndex": 4
    }
];