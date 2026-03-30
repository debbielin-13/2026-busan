export interface LocationItem {
  name: string;
  desc: string;
  img: string;
  alt: string;
}

export interface IntroDay {
  day: string;
  title: string;
  locations: LocationItem[];
}

export const introData: IntroDay[] = [
  {
      day: "D1", title: "璀璨廣安里之夜",
      locations: [
          { 
              name: "抵達廣安里民宿", 
              desc: "抵達美麗的釜山，入住充滿渡假風情的廣安里海景民宿。推開窗即是療癒的湛藍海景，放好行李，準備展開這趟浪漫旅程。", 
              img: "https://a0.muscache.com/im/pictures/hosting/Hosting-1169957954991685693/original/ca733b69-e6b9-45f6-a651-277cd4d11849.png?im_w=1920", alt: "廣安里海景民宿"
          },
          { 
              name: "廣安里 M 無人機表演", 
              desc: "夜幕低垂，沙灘上將上演震撼人心的 M 無人機展演。數百台無人機點亮夜空，與閃耀的廣安大橋交織出夢幻的視覺盛宴。", 
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOvQRdFqi0jBInyvODVyQaN3HRSMueDMQ4yw&s", alt: "廣安里 M 無人機表演"
          }
      ]
  },
  {
      day: "D2", title: "海雲台與汗蒸幕體驗",
      locations: [
          { 
              name: "海雲台藍線公園", 
              desc: "漫步於絕美的海岸步道，或是坐上火紅的「海雲台海岸列車」。沿著海岸線吹著微風，還能朝聖超人氣的「韓版灌籃高手平交道」將無敵海景盡收眼底！", 
              img: "https://yukigo.tw/wp-content/uploads/2024/09/Haeundae-Blueline-Park11.jpg", alt: "海雲台藍線公園"
          },
          { 
              name: "Skyline Luge 釜山斜坡滑車", 
              desc: "戴上安全帽，體驗風靡全球的斜坡滑車！搭乘景觀纜車飽覽壯麗山海後，乘風順著蜿蜒的賽道一路奔馳而下，保證大呼過癮。", 
              img: "https://tong.visitkorea.or.kr/cms/resource/11/3495811_image2_1.jpg", alt: "Skyline Luge 釜山斜坡滑車"
          },
          { 
              name: "海東龍宮寺", 
              desc: "尋訪韓國唯一依海而建的絕美古剎。當海浪拍打著奇岩怪石，伴隨著悠揚的梵音，令人感受到前所未有的祥和與平靜。", 
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4s3nKQL7bk9PFa-nfvzUHeo_Pray0Eyb52w&s", alt: "海東龍宮寺"
          },
          { 
              name: "冬柏站櫻花路", 
              desc: "午後漫步於冬柏站周邊的秘密櫻花小徑，粉白色的櫻花瓣隨風輕舞，彷彿走進日劇般唯美的春日浪漫。", 
              img: "https://fullfenblog.tw/wp-content/uploads/batch_IMG_1472.jpg", alt: "冬柏站櫻花路"
          },
          { 
              name: "SPA LAND 汗蒸幕", 
              desc: "玩累了一天，來到新世界百貨內、號稱「五星級」的頂級 SPA LAND。換上羊角頭，品嚐道地甜米釀與烤雞蛋，徹底洗滌一身疲憊。", 
              img: "https://www.bring-you.info/imgs/2018/12/things-to-do-in-seoul-9.jpg", alt: "SPA LAND 汗蒸幕"
          }
      ]
  },
  {
      day: "D3", title: "絕美海岸與櫻花海",
      locations: [
          { 
              name: "五六島天空步道", 
              desc: "漫步於透明的天空步道，挑戰您的膽量！春天更是這裡最美的季節，黃澄澄的野生水仙花迎風綻放，與蔚藍海景相互輝映，美不勝收。", 
              img: "https://3.bp.blogspot.com/--j-D7fZCT2w/XUANgTxdmRI/AAAAAAAAwoE/JzBirf-LDMw3hQARjCRKCrU4O10FKToSQCKgBGAs/s1600/oryukdo-2.jpg", alt: "五六島天空步道與水仙花"
          },
          { 
              name: "南川洞櫻花路", 
              desc: "走進釜山最負盛名的賞櫻聖地！道路兩側茂密的櫻花樹在空中交織成一條看不到盡頭的粉色隧道，絕對是殺光底片的夢幻打卡點。", 
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9Xbf_mFnAf3XI7BQLWeuZ41jbXVn_HCgqQ&s", alt: "南川洞櫻花路"
          },
          { 
              name: "西面商圈與美食", 
              desc: "傍晚轉移陣地，來到釜山最繁華的西面商圈。這裡匯聚了最新潮的服飾與美妝，更有讓人垂涎三尺的道地韓國烤肉與街頭小吃等您來品嚐。", 
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kK5hwP1OiK8d6crxoGdGazFS3updovAuFw&s", alt: "西面商圈與美食"
          }
      ]
  },
  {
      day: "D4", title: "甘川洞與松島風光",
      locations: [
          { 
              name: "甘川洞文化村", 
              desc: "迷失在被譽為「韓國馬丘比丘」的彩色童話村落。沿著山坡層層疊疊的繽紛小房子間穿梭，別忘了與坐在圍牆上的小王子合影留念。", 
              img: "https://www.settour.com.tw/ss_img/info/location/PUS/S0/PUS0000072/PUS0000072_136913.jpg", alt: "甘川洞文化村"
          },
          { 
              name: "松島海上纜車", 
              desc: "騰空飛越松島海灣！強烈推薦挑戰透明底的「水晶車廂」，將腳下波光粼粼的蔚藍海景與松島的秀麗風光360度零死角盡收眼底。", 
              img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_770/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ulhfkzn47rllnnvupgtb/%E6%9D%BE%E5%B3%B6%E6%B5%B7%E4%B8%8A%E7%BA%9C%E8%BB%8A%E9%96%80%E7%A5%A8.jpg", alt: "松島海上纜車"
          },
          { 
              name: "釜山塔 & 南浦洞", 
              desc: "傍晚登上釜山塔，俯瞰這座港都的璀璨日落與夜景。入夜後漫步於熱鬧的南浦洞商圈，品嚐 BIFF 廣場外酥內軟的黑糖堅果糖餅。", 
              img: "https://image.kkday.com/v2/image/get/s1.kkday.com/product_19378/20230509093601_6KYrq/jpg", alt: "釜山塔夜景"
          }
      ]
  },
  {
      day: "D5", title: "影島沉浸藝術之旅",
      locations: [
          { 
              name: "Arte Museum 釜山", 
              desc: "走進超大型的沉浸式媒體藝術展，感受科技與藝術完美結合的震撼視覺饗宴。在光影交錯與立體音效中，輕鬆拍出令人驚豔的網美大片。", 
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuz_eAfRz1clmcj5kBaeXQJRW2wFC0K7w2Qg&s", alt: "Arte Museum 釜山"
          },
          { 
              name: "東三海水川", 
              desc: "遠離喧囂的私房秘境！春天時分，東三海水川兩岸櫻花盛開，伴隨著微風拂過水面，是享受寧靜與賞櫻的絕佳去處。", 
              img: "https://i0.wp.com/journey.tw/wp-content/uploads/2025/04/20250410153456_0_d9e3d9.jpg?resize=1100%2C732&quality=99&ssl=1", alt: "東三海水川櫻花"
          },
          { 
              name: "白淺灘文化村", 
              desc: "被盛讚為「韓國聖托里尼」的絕美海濱聚落。漫步於純白色的蜿蜒小徑，找一間無敵海景咖啡廳坐下，用一杯咖啡為這趟旅程畫下完美的浪漫句點。", 
              img: "https://alinalife.tw/wp-content/uploads/2024/04/20240424142008_0.jpg", alt: "白淺灘文化村"
          }
      ]
  }
];
