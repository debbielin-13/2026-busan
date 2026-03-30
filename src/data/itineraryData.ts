export interface ItineraryItem {
  id: string;
  icon: string;
  title: string;
  krName: string;
  cnAddr: string;
  krAddr: string;
  note: string;
  gmapUrl?: string;
  nmapUrl?: string;
}

export interface DaySchedule {
  day: string;
  items: ItineraryItem[];
}

export const itineraryData: DaySchedule[] = [
  {
      day: "第一天：抵達與廣安里",
      items: [
          { id: "d1-1", icon: "🚩", title: "廣安里無人機表演", krName: "광안리 M 드론라이트쇼", cnAddr: "釜山廣域市水營區廣安海邊路 219", krAddr: "부산 수영구 광안해변로 219", note: "每週六舉行。建議提早前往沙灘佔據好視野。", gmapUrl: "https://maps.app.goo.gl/NyZBwx3F6tZCe1tT9", nmapUrl: "https://naver.me/xzxmzK1j" },
          { id: "d1-2", icon: "🚩", title: "廣安里民宿", krName: "광안리 숙소", cnAddr: "釜山廣域市水營區民樂水邊路 49", krAddr: "부산 수영구 민락수변로 49", note: "準備 Check-in。確認房東提供的密碼與入住指南。", nmapUrl: "https://naver.me/GFCv4i55" }
      ]
  },
  {
      day: "第二天：海雲台與汗蒸幕",
      items: [
          { id: "d2-1", icon: "🚩", title: "海雲台藍線公園", krName: "해운대블루라인파크 미포정거장", cnAddr: "釜山廣域市海雲臺區迎月路62號街13", krAddr: "부산 해운대구 달맞이길62번길 13", note: "可漫步海岸步道或搭乘列車，記得去拍超人氣的韓版灌籃高手平交道！", gmapUrl: "https://maps.app.goo.gl/RMdPn9nhdYKiCeaN8" },
          { id: "d2-2", icon: "🚩", title: "Skyline Luge 釜山斜坡滑車", krName: "스카이라인 루지 부산", cnAddr: "釜山機張郡機張邑機張海岸路 205", krAddr: "부산 기장군 기장읍 기장해안로 205", note: "出示購買憑證 QR Code 換票。通常包含兩次滑車+上山纜車。", gmapUrl: "https://maps.app.goo.gl/eWgi1jcENEY7X8AWA", nmapUrl: "https://naver.me/IDFUcLWo" },
          { id: "d2-3", icon: "🚩", title: "海東龍宮寺", krName: "해동용궁사", cnAddr: "釜山廣域市機張郡機張邑龍宮路 86", krAddr: "부산 기장군 기장읍 용궁길 86", note: "韓國唯一建在海邊的寺廟，風景優美，風大注意保暖。", gmapUrl: "https://maps.app.goo.gl/yutTipu7nA9oBdFAA", nmapUrl: "https://naver.me/58NdWaSm" },
          { id: "d2-4", icon: "🚩", title: "海雲台傳統市場", krName: "해운대 전통시장", cnAddr: "釜山廣域市海雲臺區龜南路41號街 22-1", krAddr: "부산 해운대구 구남로41번길 22-1", note: "推薦美食：盲鰻、糖餅、辣炒年糕、豬肉湯飯。", gmapUrl: "https://maps.app.goo.gl/wHxvZpX2Tubf3UNU9", nmapUrl: "https://naver.me/GRDya7Mt" },
          { id: "d2-5", icon: "🌸", title: "冬柏站櫻花路", krName: "동백역 벚꽃길", cnAddr: "釜山廣域市海雲臺區佑1洞 1388-3", krAddr: "부산 해운대구 우1동 1388-3", note: "春天必訪賞櫻秘境，沿著步道漫步拍照。", gmapUrl: "https://maps.app.goo.gl/e8SJn5MN8KaGZRq47", nmapUrl: "https://naver.me/GOzxtMPP" },
          { id: "d2-6", icon: "🚩", title: "SPA LAND 汗蒸幕", krName: "스파랜드 센텀시티", cnAddr: "釜山廣域市海雲臺區Centum南大路 35", krAddr: "부산 해운대구 센텀남대로 35", note: "位於新世界百貨內。記得體驗羊角頭，必買甜米釀跟烤雞蛋。", gmapUrl: "https://maps.app.goo.gl/1wgsNwuz9hYSkupu6", nmapUrl: "https://naver.me/xRhE40iE" }
      ]
  },
  {
      day: "第三天：五六島與西面",
      items: [
          { id: "d3-1", icon: "🚩", title: "五六島日出公園", krName: "오륙도해맞이공원", cnAddr: "釜山廣域市南區龍湖2洞 山198", krAddr: "부산 남구 용호제2동 산198", note: "可以走透明的天空步道，天氣好時海景非常壯觀。", gmapUrl: "https://maps.app.goo.gl/Q5cazRPGx9hFRZSVA", nmapUrl: "https://naver.me/GdyuvubQ" },
          { id: "d3-3", icon: "🌸", title: "南川洞櫻花路", krName: "남천동 벚꽃거리", cnAddr: "釜山廣域市水營區南川洞 148-4", krAddr: "부산 수영구 남천동 148-4", note: "釜山著名賞櫻勝地，兩側櫻花樹交織成美麗的隧道。", gmapUrl: "https://maps.app.goo.gl/ACDLtsnZkAVxQnC56", nmapUrl: "https://naver.me/FpxYjhUJ" },
          { id: "d3-2", icon: "🚩", title: "廣安里海灘", krName: "광안리해수욕장", cnAddr: "釜山廣域市水營區廣安海邊路 219", krAddr: "부산 수영구 광안해변로 219", note: "白天看廣安大橋也很美，附近很多高質感的看海咖啡廳。", gmapUrl: "https://maps.app.goo.gl/NyZBwx3F6tZCe1tT9", nmapUrl: "https://naver.me/xzxmzK1j" },
          { id: "d3-4", icon: "🚩", title: "西面民宿", krName: "몸만 스테이 서면", cnAddr: "釜山釜山鎮區西田路58號街 23 (3樓)", krAddr: "부산 부산진구 서전로58번길 23 3층", note: "轉移至西面住宿。晚上可以逛西面商圈吃美食。", nmapUrl: "https://naver.me/FmGp9KPg" }
      ]
  },
  {
      day: "第四天：甘川洞與松島",
      items: [
          { id: "d4-1", icon: "🚩", title: "甘川洞文化村", krName: "감천문화마을", cnAddr: "釜山廣域市沙下區甘內2路 203", krAddr: "부산 사하구 감내2로 203", note: "韓國的馬丘比丘，必拍：小王子雕像與層層疊疊的彩色房子。", gmapUrl: "https://maps.app.goo.gl/pKropCiFPMJJLuMQ9", nmapUrl: "https://naver.me/Gxk14DQ9" },
          { id: "d4-2", icon: "🚩", title: "松島纜車", krName: "송도해상케이블카", cnAddr: "釜山廣域市西區松島海邊路 171", krAddr: "부산 서구 송도해변로 171", note: "推薦購買水晶車廂(透明底)的票，有懼高症可選一般車廂。", gmapUrl: "https://maps.app.goo.gl/LNqvWRf8UQKYqovWA", nmapUrl: "https://naver.me/Fmf6KBhZ" },
          { id: "d4-3", icon: "🚩", title: "釜山塔", krName: "부산타워 (다이아몬드타워)", cnAddr: "釜山廣域市中區龍頭山路 37-55", krAddr: "부산 중구 용두산길 37-55", note: "可俯瞰釜山市景和港口，傍晚前往可以順便看夕陽與夜景。", gmapUrl: "https://maps.app.goo.gl/DnAXKXvTpYGvByMB7" },
          { id: "d4-4", icon: "🚩", title: "南浦洞 BIFF 廣場", krName: "남포동거리", cnAddr: "釜山廣域市中區南浦洞", krAddr: "부산 중구 남포동 일대", note: "逛 BIFF 廣場吃堅果糖餅，光復路商圈非常好買。", gmapUrl: "https://maps.app.goo.gl/cFmCuanqUKy99q2H8", nmapUrl: "https://naver.me/Fnm0F16k" }
      ]
  },
  {
      day: "第五天：影島藝術之旅",
      items: [
          { id: "d5-1", icon: "🚩", title: "Arte Museum 釜山", krName: "아르떼뮤지엄 부산", cnAddr: "釜山廣域市影島區海洋路247號街 29", krAddr: "부산 영도구 해양로247번길 29", note: "超大型沉浸式媒體藝術展，適合拍照打卡與躲避天氣。", gmapUrl: "https://maps.app.goo.gl/YBGJdMLUuebxbz2V7", nmapUrl: "https://naver.me/FIfsvnna" },
          { id: "d5-2", icon: "🚩", title: "東三海水川", krName: "동삼해수천", cnAddr: "釜山廣域市影島區東三洞 1126", krAddr: "부산 영도구 동삼동 1126", note: "春天這附近也有櫻花可以賞，人潮相對較少的好去處。", gmapUrl: "https://maps.app.goo.gl/1FyceaHTm5jKoHRW8", nmapUrl: "https://map.naver.com/v5/search/동삼해수천" },
          { id: "d5-3", icon: "🚩", title: "白淺灘文化村", krName: "흰여울문화마을", cnAddr: "釜山廣域市影島區瀛仙洞4街 1044-6", krAddr: "부산 영도구 영선동4가 1044-6", note: "被稱為韓國聖托里尼，沿海小路很美，推薦找間無敵海景咖啡廳坐坐。", gmapUrl: "https://maps.app.goo.gl/NW7EsFafTbnPL3T4A", nmapUrl: "https://naver.me/5PVDiMdk" }
      ]
  }
];
