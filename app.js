// Interactive AR Menu Book - Logic & Datasets (v2 Mobile-First)

// 1. Interactive UI Translations Dictionary (De-Vibe Coded & Age Friendly)
const UI_TRANSLATIONS = {
  en: {
    welcomeTitle: "Interactive Chinese Menu Companion",
    welcomeDesc: "Learn how to order food in Taiwan! Scan a menu page using your camera, or tap a category below to start browsing the menu.",
    hudInstruction: "Align menu card inside the frame",
    activeTitle: "Restaurant Practicing Console",
    speakBtn: "Speak",
    listenBtn: "Listen",
    pronunciationResult: "Speech Check",
    perfectScore: "Perfect! Excellent pronunciation!",
    goodScore: "Good try! Almost there!",
    retryScore: "Keep trying, you can do it!",
    phraseHeader: "Practicing Sentences",
    cameraStatus: "Scanner Active",
    noMicSupport: "Microphone/Speech API is not supported on this browser.",
    micListening: "Listening...",
    micIdle: "Tap mic to speak",
    starsPerfect: "⭐⭐⭐ Perfect!",
    starsGood: "⭐⭐ Good Try",
    starsRetry: "⭐ Keep Practicing",
    viewMenuBtn: "Reconstructed Menu",
    menuBookTitle: "Moon Pavilion Menu (Repaired)",
    backBtnText: "Back",
    scanSuccess: "Scan Successful!",
    
    // Category Names (Emojis completely stripped!)
    catMain: "Main Course",
    catAppetizer: "Appetizers",
    catBeverage: "Beverages & Pastries",
    
    // Branch Prompts
    branchPrompt: "Select a dish to practice:",
    
    // Dialogue Options Labels
    optOrder: "Option A: How to Order",
    optPrice: "Option B: Ask for Price",
    optInquire: "Option C: Special Customization"
  },
  id: { // Bahasa Indonesia
    welcomeTitle: "Kamus Menu Tionghoa Interaktif",
    welcomeDesc: "Belajar cara memesan makanan di Taiwan! Pindai halaman menu dengan kamera, atau ketuk kategori di bawah untuk mulai menjelajah.",
    hudInstruction: "Sejajarkan kartu menu di dalam bingkai",
    activeTitle: "Konsol Latihan Restoran",
    speakBtn: "Bicara",
    listenBtn: "Dengar",
    pronunciationResult: "Pemeriksaan Suara",
    perfectScore: "Sempurna! Pengucapan yang luar biasa!",
    goodScore: "Bagus! Hampir benar!",
    retryScore: "Terus mencoba, Anda pasti bisa!",
    phraseHeader: "Latihan Kalimat",
    cameraStatus: "Pemindai Aktif",
    noMicSupport: "Mikrofon tidak didukung di browser ini.",
    micListening: "Mendengarkan...",
    micIdle: "Ketuk mik untuk bicara",
    starsPerfect: "⭐⭐⭐ Sempurna!",
    starsGood: "⭐⭐ Cukup Bagus",
    starsRetry: "⭐ Terus Berlatih",
    viewMenuBtn: "Buku Menu Digital",
    menuBookTitle: "Buku Menu Moon Pavilion (Diperbaiki)",
    backBtnText: "Kembali",
    scanSuccess: "Sukses Scan!",
    
    // Kategori
    catMain: "Hidangan Utama",
    catAppetizer: "Hidangan Pembuka",
    catBeverage: "Minuman & Kue",
    
    // Prompt
    branchPrompt: "Pilih hidangan untuk berlatih:",
    
    // Dialog
    optOrder: "Pilihan A: Cara Memesan",
    optPrice: "Pilihan B: Tanya Harga",
    optInquire: "Pilihan C: Permintaan Khusus"
  },
  viet: { // Tiếng Việt
    welcomeTitle: "Trợ Lý Học Gọi Món Tiếng Trung",
    welcomeDesc: "Học cách gọi món ăn tại Đài Loan! Quét thực đơn bằng camera hoặc nhấn vào danh mục bên dưới để bắt đầu luyện tập nhé.",
    hudInstruction: "Căn chỉnh thực đơn vào trong khung hình",
    activeTitle: "Bảng Điều Khiển Gọi Món",
    speakBtn: "Nói",
    listenBtn: "Nghe",
    pronunciationResult: "Kiểm Tra Phát Âm",
    perfectScore: "Hoàn hảo! Giọng phát âm rất chuẩn!",
    goodScore: "Rất tốt! Gần chính xác rồi!",
    retryScore: "Hãy tiếp tục cố gắng nhé!",
    phraseHeader: "Mẫu Câu Thực Hành",
    cameraStatus: "Máy Quét Hoạt Động",
    noMicSupport: "Trình duyệt không hỗ trợ micro nhận diện giọng nói.",
    micListening: "Đang nghe...",
    micIdle: "Nhấn mic để nói",
    starsPerfect: "⭐⭐⭐ Hoàn Hảo!",
    starsGood: "⭐⭐ Khá Tốt",
    starsRetry: "⭐ Cố Gắng Lên",
    viewMenuBtn: "Xem Thực Đơn Kỹ Thuật Số",
    menuBookTitle: "Sách Thực Đơn Moon Pavilion (Đã Sửa)",
    backBtnText: "Quay lại",
    scanSuccess: "Quét thành công!",
    
    // Kategori
    catMain: "Món Chính",
    catAppetizer: "Món Khai Vị",
    catBeverage: "Đồ Uống & Bánh",
    
    // Prompt
    branchPrompt: "Chọn món ăn để thực hành:",
    
    // Dialog
    optOrder: "Lựa chọn A: Cách Gọi Món",
    optPrice: "Lựa chọn B: Hỏi Giá Tiền",
    optInquire: "Lựa chọn C: Yêu Cầu Riêng"
  },
  thai: { // ไทย
    welcomeTitle: "คู่มือสั่งอาหารภาษาจีนอินเตอร์แอคทีฟ",
    welcomeDesc: "เรียนรู้วิธีสั่งอาหารในไต้หวัน! สแกนการ์ดเมนูด้วยกล้อง หรือแตะเลือกหมวดหมู่อาหารด้านล่างเพื่อเริ่มเรียนรู้ได้ทันที",
    hudInstruction: "จัดวางการ์ดเมนูให้อยู่ในกรอบ",
    activeTitle: "ห้องฝึกสั่งอาหาร",
    speakBtn: "พูดตาม",
    listenBtn: "ฟังเสียง",
    pronunciationResult: "ผลการออกเสียง",
    perfectScore: "ยอดเยี่ยม! ออกเสียงได้ถูกต้องชัดเจน!",
    goodScore: "ดีมาก! เกือบจะถูกต้องแล้ว!",
    retryScore: "พยายามต่อไปนะ คุณทำได้แน่นอน!",
    phraseHeader: "ประโยคฝึกฝน",
    cameraStatus: "เปิดเครื่องสแกนแล้ว",
    noMicSupport: "เบราว์เซอร์นี้ไม่รองรับไมโครโฟน",
    micListening: "กำลังฟัง...",
    micIdle: "แตะไมค์แล้วเริ่มพูด",
    starsPerfect: "⭐⭐⭐ ยอดเยี่ยม!",
    starsGood: "⭐⭐ ดีมาก",
    starsRetry: "⭐ ฝึกฝนต่อไปนะ",
    viewMenuBtn: "ดูสมุดเมนูดิจิทัล",
    menuBookTitle: "สมุดเมนู Moon Pavilion (แก้ไขแล้ว)",
    backBtnText: "ย้อนกลับ",
    scanSuccess: "สแกนสำเร็จ!",
    
    // Kategori
    catMain: "อาหารจานหลัก",
    catAppetizer: "อาหารเรียกน้ำย่อย",
    catBeverage: "เครื่องดื่มและขนมหวาน",
    
    // Prompt
    branchPrompt: "เลือกอาหารเพื่อเริ่มฝึก:",
    
    // Dialog
    optOrder: "ทางเลือก A: วิธีการสั่งอาหาร",
    optPrice: "ทางเลือก B: การถามราคา",
    optInquire: "ทางเลือก C: การสั่งพิเศษ"
  },
  kr: { // 한국어
    welcomeTitle: "대만 음식 주문 중국어 길잡이",
    welcomeDesc: "대만 식당에서 중국어로 주문해 보세요! 카메라로 메뉴판을 스캔하거나 아래 카테고리를 터치하여 학습을 시작하세요.",
    hudInstruction: "메뉴판 카드를 테두리에 맞춰주세요",
    activeTitle: "식당 회화 연습 콘솔",
    speakBtn: "말하기",
    listenBtn: "듣기",
    pronunciationResult: "발음 평가 결과",
    perfectScore: "완벽해요! 원어민 발음입니다!",
    goodScore: "좋아요! 조금만 더 연습해 보세요!",
    retryScore: "계속 도전해 보세요. 할 수 있습니다!",
    phraseHeader: "실습 회화 문장",
    cameraStatus: "스캐너 켜짐",
    noMicSupport: "이 브라우저는 마이크 음성 인식을 지원하지 않습니다.",
    micListening: "듣는 중...",
    micIdle: "마이크를 누르고 말씀하세요",
    starsPerfect: "⭐⭐⭐ 완벽해요!",
    starsGood: "⭐⭐ 아주 좋아요",
    starsRetry: "⭐ 계속 연습하세요",
    viewMenuBtn: "디지털 메뉴판 보기",
    menuBookTitle: "Moon Pavilion 메뉴판 (텍스트 복원)",
    backBtnText: "이전으로",
    scanSuccess: "스캔 성공!",
    
    // Kategori
    catMain: "메인 요리",
    catAppetizer: "에피타이저",
    catBeverage: "음료 및 다과",
    
    // Prompt
    branchPrompt: "연습할 음식을 선택해 주세요:",
    
    // Dialog
    optOrder: "선택 A: 주문하는 방법",
    optPrice: "선택 B: 가격 물어보기",
    optInquire: "선택 C: 상세 맞춤형 질문"
  }
};

// 2. The 12 Authentic Moon Pavilion Dishes Dataset (All Emojis replaced with FontAwesome icons!)
const DISHES_DATA = [
  // CATEGORY: MAIN COURSE
  {
    id: "gua_bao",
    category: "main_course",
    iconClass: "fa-solid fa-bread-slice",
    nameZh: "台灣刈包",
    pinyin: "Táiwān guàbāo",
    price: "$280",
    translations: {
      en: "Taiwan Gua Bao",
      id: "Bakpao Gua (Steamed Pork Bun)",
      viet: "Bánh bao kẹp thịt kiểu Đài",
      thai: "กั่วเปาไต้หวัน (ซาลาเปาหมูสามชั้น)",
      kr: "대만식 꽈바오 (삼겹살 번)"
    },
    desc: {
      en: "Taiwan style steamed bun with marinated pork belly",
      id: "Bakpao babi rebus ala Taiwan",
      viet: "Bánh bao hấp nhồi thịt ba chỉ kho kiểu Đài Loan ngon tuyệt",
      thai: "ซาลาเปาอบไอน้ำไต้หวันยัดไส้ด้วยหมูสามชั้นตุ๋นรสเด็ด",
      kr: "부드러운 번 사이에 소스에 조린 삼겹살을 넣은 대만 대표 간식"
    },
    phrases: {
      order: {
        cn: "我要點一份台灣刈包。",
        pinyin: "Wǒ yào diǎn yī fèn táiwān guàbāo.",
        trans: {
          en: "I want to order a Taiwan Gua Bao.",
          id: "Saya mau memesan satu porsi Bakpao Gua.",
          viet: "Tôi muốn gọi một phần bánh bao kẹp thịt kiểu Đài.",
          thai: "ฉันต้องการสั่งกั่วเปาไต้หวันหนึ่งชุด",
          kr: "대만식 꽈바오 하나 주문할게요."
        }
      },
      price: {
        cn: "請問台灣刈包一份多少錢？",
        pinyin: "Qǐngwèn táiwān guàbāo yī fèn duōshǎo qián?",
        trans: {
          en: "Excuse me, how much is a Taiwan Gua Bao?",
          id: "Permisi, berapa harga satu porsi Bakpao Gua?",
          viet: "Xin hỏi một phần bánh bao kẹp thịt bao nhiêu tiền?",
          thai: "ขอถามหน่อย Gg กั่วเปาไต้หวันชุดละเท่าไหร่?",
          kr: "실례지만 꽈바오 한 접시에 얼마인가요?"
        }
      },
      custom: {
        cn: "這刈包裡是滷五花肉嗎？",
        pinyin: "Zhè guàbāo lǐ - lǔ wǔhuāròu ma?",
        trans: {
          en: "Is this bun filled with braised pork belly?",
          id: "Apakah bakpao ini berisi daging babi samcan rebus?",
          viet: "Trong bánh bao kẹp này có phải là thịt ba chỉ kho không?",
          thai: "ในกั่วเปานี้เป็นหมูสามชั้นตุ๋นใช่ไหม?",
          kr: "이 꽈바오 안에 든 것은 간장에 조린 삼겹살인가요?"
        }
      }
    }
  },
  {
    id: "shrimp_fried_rice",
    category: "main_course",
    iconClass: "fa-solid fa-bowl-rice",
    nameZh: "蝦仁炒飯",
    pinyin: "Xiārén chǎofàn",
    price: "$250",
    translations: {
      en: "Shrimp Fried Rice",
      id: "Nasi Goreng Udang",
      viet: "Cơm chiên tôm",
      thai: "ข้าวผัดกุ้ง",
      kr: "새우 볶음밥"
    },
    desc: {
      en: "Authentic Taiwan stir-fried rice with aromatic spices",
      id: "Nasi goreng udang khas Taiwan",
      viet: "Cơm chiên tôm chuẩn vị Đài Loan thơm ngon ngào ngạt",
      thai: "ข้าวผัดกุ้งแบบไต้หวันแท้ๆ ผัดด้วยเครื่องเทศกลิ่นหอม",
      kr: "향긋한 향신료와 함께 볶아낸 대만 정통 새우 볶음밥"
    },
    phrases: {
      order: {
        cn: "我要點一份蝦仁炒飯。",
        pinyin: "Wǒ yào diǎn yī fèn xiārén chǎofàn.",
        trans: {
          en: "I want to order a Shrimp Fried Rice.",
          id: "Saya mau memesan satu porsi Nasi Goreng Udang.",
          viet: "Tôi muốn gọi một phần cơm chiên tôm.",
          thai: "ฉันต้องการสั่งข้าวผัดกุ้งหนึ่งจาน",
          kr: "새우 볶음밥 하나 주세요."
        }
      },
      price: {
        cn: "請問蝦仁炒飯一盤多少錢？",
        pinyin: "Qǐngwèn xiārén chǎofàn yī pán duōshǎo qián?",
        trans: {
          en: "Excuse me, how much is a plate of Shrimp Fried Rice?",
          id: "Permisi, berapa harga satu piring Nasi Goreng Udang?",
          viet: "Xin hỏi một đĩa cơm chiên tôm bao nhiêu tiền?",
          thai: "ขอถามหน่อย ข้าวผัดกุ้งจานละเท่าไหร่?",
          kr: "새우 볶음밥 한 접시에 얼마인가요?"
        }
      },
      custom: {
        cn: "炒飯可以少油、少鹽嗎？",
        pinyin: "Chǎofàn kěyǐ shǎo yóu, shǎo yán ma?",
        trans: {
          en: "Can the fried rice be made with less oil and salt?",
          id: "Apakah nasi gorengnya bisa dikurangi minyak dan garamnya?",
          viet: "Cơm chiên có thể làm ít dầu và ít muối được không?",
          thai: "ข้าวผัดขอใส่น้ำมันน้อยและเค็มน้อยได้ไหม?",
          kr: "볶음밥에 기름이랑 소금은 좀 적게 넣어주실 수 있나요?"
        }
      }
    }
  },
  {
    id: "chicken_rice",
    category: "main_course",
    iconClass: "fa-solid fa-drumstick-bite",
    nameZh: "蒸雞肉飯",
    pinyin: "Zhēng jīròu fàn",
    price: "$980",
    translations: {
      en: "Steamed Chicken Rice",
      id: "Ayam Kukus Nasi Ketan",
      viet: "Cơm gà hấp",
      thai: "ข้าวมันไก่ตุ๋น",
      kr: "스팀 치킨 라이스"
    },
    desc: {
      en: "A slow-cooked rice with chicken and spices",
      id: "Nasi masak lambat dengan ayam dan rempah",
      viet: "Cơm nấu chín chậm mềm dẻo với thịt gà hấp và gia vị",
      thai: "ข้าวมันไก่ที่ผ่านการปรุงอย่างพิถีพิถันด้วยเครื่องเทศ",
      kr: "닭고기와 풍부한 향신료를 넣어 은은한 불에 지어낸 정성 가득한 닭고기 덮밥"
    },
    phrases: {
      order: {
        cn: "我要點一份蒸雞肉飯。",
        pinyin: "Wǒ yào diǎn yī fèn zhēng jīròu fàn.",
        trans: {
          en: "I want to order a Steamed Chicken Rice.",
          id: "Saya mau memesan satu porsi Ayam Kukus Nasi Ketan.",
          viet: "Tôi muốn gọi một phần cơm gà hấp.",
          thai: "ฉันต้องการสั่งข้าวมันไก่ตุ๋นหนึ่งที่",
          kr: "스팀 치킨 라이스 하나 주문할게요."
        }
      },
      price: {
        cn: "這道蒸雞肉飯一份多少錢？",
        pinyin: "Zhè dào zhēng jīròu fàn yī fèn duōshǎo qián?",
        trans: {
          en: "How much is this Steamed Chicken Rice?",
          id: "Berapa harga satu porsi Ayam Kukus Nasi Ketan ini?",
          viet: "Món cơm gà hấp này bao nhiêu tiền một phần?",
          thai: "ข้าวมันไก่ตุ๋นนี้ราคาชุดละเท่าไหร่?",
          kr: "이 스팀 치킨 라이스는 1인분에 얼마인가요?"
        }
      },
      custom: {
        cn: "這道雞肉飯有附湯嗎？",
        pinyin: "Zhè dào jīròu fàn yǒu fù tāng ma?",
        trans: {
          en: "Does this chicken rice come with soup?",
          id: "Apakah menu nasi ayam ini sudah termasuk sup?",
          viet: "Món cơm gà này có kèm canh không?",
          thai: "ข้าวมันไก่เมนูนี้มีน้ำซุปให้ด้วยไหม?",
          kr: "이 닭고기 덮밥 요리에는 국이 같이 나오나요?"
        }
      }
    }
  },
  {
    id: "seafood_soup",
    category: "main_course",
    iconClass: "fa-solid fa-bowl-food",
    nameZh: "酸辣海鮮湯",
    pinyin: "Suānlà hǎixiān tāng",
    price: "$180",
    translations: {
      en: "Seafood Soup",
      id: "Sup Makanan Laut",
      viet: "Canh hải sản chua cay",
      thai: "ต้มยำทะเล / ซุปอาหารทะเล",
      kr: "핫앤사워 해물탕"
    },
    desc: {
      en: "Fish marinated in a spicy sauce, served with vinegar",
      id: "Ikan yang direndam dalam saus cabai, disajikan dengan cuka.",
      viet: "Cá tẩm ướp đậm đà trong nước sốt cay ấm, dùng kèm giấm thanh mát",
      thai: "ปลาหมักซอสเผ็ดสูตรพิเศษ เสิร์ฟพร้อมน้ำส้มสายชูปรุงรส",
      kr: "매콤한 양념에 재운 생선을 식초와 함께 끓여낸 중독성 강한 해물 수프"
    },
    phrases: {
      order: {
        cn: "我要一碗酸辣海鮮湯。",
        pinyin: "Wǒ yào yī wǎn suānlà hǎixiān tāng.",
        trans: {
          en: "I want a bowl of Seafood Soup.",
          id: "Saya mau semangkuk Sup Makanan Laut.",
          viet: "Tôi muốn một tô canh hải sản chua cay.",
          thai: "ฉันต้องการซุปอาหารทะเลหนึ่งถ้วย",
          kr: "해물탕 한 그릇 주세요."
        }
      },
      price: {
        cn: "請問海鮮湯一碗多少錢？",
        pinyin: "Qǐngwèn hǎixiān tāng yī wǎn duōshǎo qián?",
        trans: {
          en: "Excuse me, how much is a bowl of Seafood Soup?",
          id: "Permisi, berapa harga semangkuk Sup Makanan Laut?",
          viet: "Xin hỏi một bát canh hải sản bao nhiêu tiền?",
          thai: "ขอถามหน่อย ซุปอาหารทะเลถ้วยละเท่าไหร่?",
          kr: "해물탕 한 그릇에 얼마인가요?"
        }
      },
      custom: {
        cn: "這碗海鮮湯味道會酸辣嗎？",
        pinyin: "Zhè wǎn hǎixiān tāng wèidào huì suānlà ma?",
        trans: {
          en: "Does this seafood soup taste sour and spicy?",
          id: "Apakah sup makanan laut ini rasanya asam dan pedas?",
          viet: "Tô canh hải sản này có vị chua và cay không?",
          thai: "ซุปอาหารทะเลถ้วยนี้มีรสเปรี้ยวเผ็ดไหม?",
          kr: "이 해물탕은 맛이 시고 매콤한가요?"
        }
      }
    }
  },

  // CATEGORY: APPETIZER
  {
    id: "fried_chicken",
    category: "appetizer",
    iconClass: "fa-solid fa-drumstick-bite",
    nameZh: "鹹香酥雞",
    pinyin: "Xián xiāng sū jī",
    price: "$200",
    translations: {
      en: "Fried Chicken",
      id: "Ayam Wijen Krispi",
      viet: "Gà rán muối tiêu",
      thai: "ไก่ทอดกรอบเกลือพริกไทย",
      kr: "대만식 옌수지 (닭튀김)"
    },
    desc: {
      en: "Salty and crispy chicken with sesame oil",
      id: "Ayam asin dan renyah dengan minyak wijen",
      viet: "Thịt gà rán giòn rụm đậm vị muối tiêu kết hợp dầu mè thơm lừng",
      thai: "ไก่ทอดรสเค็มกรอบนอกนุ่มใน หอมกรุ่นด้วยน้ำมันงา",
      kr: "바삭하고 짭조름한 닭튀김에 고소한 참기름 향을 더한 대만 대표 야식 요리"
    },
    phrases: {
      order: {
        cn: "我要點一份鹹香酥雞。",
        pinyin: "Wǒ yào diǎn yī fèn xián xiāng sū jī.",
        trans: {
          en: "I want to order a Fried Chicken portion.",
          id: "Saya mau memesan satu porsi Ayam Wijen Krispi.",
          viet: "Tôi muốn gọi một phần gà rán muối tiêu.",
          thai: "ฉันต้องการสั่งไก่ทอดเกลือหนึ่งชุด",
          kr: "옌수지 하나 주문할게요."
        }
      },
      price: {
        cn: "鹹香酥雞一份多少錢？",
        pinyin: "Xián xiāng sū jī yī fèn duōshǎo qián?",
        trans: {
          en: "How much is a portion of Fried Chicken?",
          id: "Berapa harga satu porsi Ayam Wijen Krispi?",
          viet: "Gà rán muối tiêu một phần bao nhiêu tiền?",
          thai: "ไก่ทอดเกลือชุดละเท่าไหร่?",
          kr: "옌수지 1인분에 얼마예요?"
        }
      },
      custom: {
        cn: "這酥雞可以不要加九層塔嗎？",
        pinyin: "Zhè sūjī kěyǐ bùyào jiā jiǔcéngtǎ ma?",
        trans: {
          en: "Can this fried chicken be made without basil?",
          id: "Apakah ayam krispi ini bisa tidak memakai daun selasih?",
          viet: "Món gà rán này có thể không cho húng quế vào được không?",
          thai: "ไก่ทอดนี้ขอไม่ใส่ใบโหระพาได้ไหม?",
          kr: "이 닭튀김에 바질(구층탑)은 빼주실 수 있나요?"
        }
      }
    }
  },
  {
    id: "fried_shrimp",
    category: "appetizer",
    iconClass: "fa-solid fa-fish-fins",
    nameZh: "酥炸魷",
    pinyin: "Sū zhá yóu",
    price: "$180",
    translations: {
      en: "Fried Shrimp (Squid)",
      id: "Cumi Wasabi",
      viet: "Mực chiên xù sốt mù tạt",
      thai: "ปลาหมึกชุบแป้งทอดซอสวาซาบิ",
      kr: "바삭한 오징어 튀김 (와사비 소스)"
    },
    desc: {
      en: "Deep-fried squid with wasabi and sour sauce",
      id: "Cumi goreng tepung dengan wasabi dan saus asam.",
      viet: "Mực ống chiên giòn rụm chấm sốt mù tạt cay nồng và nước sốt chua ngọt",
      thai: "ปลาหมึกชุบแป้งทอดกรอบเสิร์ฟพร้อมซอสวาซาบิรสจัดจ้านและซอสเปรี้ยว",
      kr: "오징어를 바삭하게 튀겨 톡 쏘는 와사비 소스 및 새콤한 소스와 곁들여 먹는 요리"
    },
    phrases: {
      order: {
        cn: "我要一份酥炸魷。",
        pinyin: "Wǒ yào yī fèn sū zhá yóu.",
        trans: {
          en: "I want a portion of Fried Squid.",
          id: "Saya mau satu porsi Cumi Wasabi.",
          viet: "Tôi muốn gọi một phần mực chiên xù.",
          thai: "ฉันต้องการสั่งปลาหมึกชุบแป้งทอดหนึ่งที่",
          kr: "오징어 튀김 하나 주세요."
        }
      },
      price: {
        cn: "請問酥炸魷一份多少錢？",
        pinyin: "Qǐngwèn sū zhá yóu yī fèn duōshǎo qián?",
        trans: {
          en: "Excuse me, how much is the Fried Squid?",
          id: "Permisi, berapa harga satu porsi Cumi Wasabi?",
          viet: "Xin hỏi một phần mực chiên xù bao nhiêu tiền?",
          thai: "ขอถามหน่อย ปลาหมึกชุบแป้งทอดราคาชุดละเท่าไหร่?",
          kr: "오징어 튀김 한 접시에 얼마인가요?"
        }
      },
      custom: {
        cn: "這道酥炸魷魚吃起來很脆嗎？",
        pinyin: "Zhè dào sūzhá yóuyú chī qǐlái hěn cuì ma?",
        trans: {
          en: "Is this deep-fried squid very crispy?",
          id: "Apakah cumi goreng tepung ini sangat renyah?",
          viet: "Món mực chiên xù này ăn có giòn lắm không?",
          thai: "ปลาหมึกชุบแป้งทอดจานนี้กินแล้วกรอบมากไหม?",
          kr: "이 오징어 튀김은 식감이 아주 바삭한가요?"
        }
      }
    }
  },
  {
    id: "kaos_sausage",
    category: "appetizer",
    iconClass: "fa-solid fa-hotdog",
    nameZh: "高粱香腸",
    pinyin: "Gāoliáng xiāngcháng",
    price: "$250",
    translations: {
      en: "Kao's Sausage",
      id: "Sosis Kaoliang",
      viet: "Lạp sườn hương rượu Cao Lương",
      thai: "กุนเชียงเหล้าเกาเหลียงไต้หวัน",
      kr: "고량주 향 소시지"
    },
    desc: {
      en: "Taiwan best marinated sausage with Kaoliang aroma",
      id: "Sosis marinasi terbaik Taiwan dengan aroma Kaoliang.",
      viet: "Lạp sườn đặc sản Đài Loan tẩm ướp hương rượu Cao Lương thơm đậm đà",
      thai: "กุนเชียงสูตรพิเศษของไต้หวัน หมักด้วยเหล้าเกาเหลียงกลิ่นหอมเป็นเอกลักษณ์",
      kr: "대만의 명품 고량주 향을 은은하게 가미하여 정통 방식으로 숙성한 대만식 수제 소시지"
    },
    phrases: {
      order: {
        cn: "我要點一份高粱香腸。",
        pinyin: "Wǒ yào diǎn yī fèn gāoliáng xiāngcháng.",
        trans: {
          en: "I want to order a portion of Kao's Sausage.",
          id: "Saya mau memesan satu porsi Sosis Kaoliang.",
          viet: "Tôi muốn gọi một phần lạp sườn rượu Cao Lương.",
          thai: "ฉันต้องการสั่งกุนเชียงเหล้าเกาเหลียงหนึ่งที่",
          kr: "고량주 소시지 하나 주문할게요."
        }
      },
      price: {
        cn: "高粱香腸一盤多少錢？",
        pinyin: "Gāoliáng xiāngcháng yī pán duōshǎo qián?",
        trans: {
          en: "How much is a plate of Kao's Sausage?",
          id: "Berapa harga satu piring Sosis Kaoliang?",
          viet: "Một đĩa lạp sườn Cao Lương bao nhiêu tiền?",
          thai: "กุนเชียงเหล้าเกาเหลียงจานละเท่าไหร่?",
          kr: "고량주 소시지 한 접시에 얼마인가요?"
        }
      },
      custom: {
        cn: "這香腸有附生大蒜片嗎？",
        pinyin: "Zhè xiāngcháng yǒu fù shēng dàsuàn piàn ma?",
        trans: {
          en: "Does this sausage come with raw garlic slices?",
          id: "Apakah sosis ini disajikan dengan irisan bawang putih mentah?",
          viet: "Lạp sườn này có kèm tỏi sống thái lát không?",
          thai: "กุนเชียงนี้มีกระเทียมฝานสดเสิร์ฟมาด้วยไหม?",
          kr: "이 소시지 요리에는 생마늘 편이 같이 나오나요?"
        }
      }
    }
  },
  {
    id: "pork_belly",
    category: "appetizer",
    iconClass: "fa-solid fa-bacon",
    nameZh: "烤醃豬肉",
    pinyin: "Kǎo yān zhūròu",
    price: "$220",
    translations: {
      en: "Pork Belly",
      id: "Babi Asam Cuka",
      viet: "Thịt ba chỉ nướng chua ngọt",
      thai: "หมูสามชั้นย่างซอสเปรี้ยว",
      kr: "돼지 삼겹살 석쇠구이"
    },
    desc: {
      en: "Seasonal cured pork belly marinated with vinegar",
      id: "Daging perut babi musiman yang diasinkan dengan cuka.",
      viet: "Thịt ba chỉ nướng được ướp giấm chua thanh và gia vị thơm ngậy",
      thai: "หมูสามชั้นหมักพิเศษย่างหอมๆ ราดด้วยซอสหมักน้ำส้มสายชูรสเปรี้ยวกลมกล่อม",
      kr: "삼겹살을 식초 베이스 소스에 절여 감칠맛 나게 구워낸 시즌 특선 삼겹살 요리"
    },
    phrases: {
      order: {
        cn: "我要點一份烤醃豬肉。",
        pinyin: "Wǒ yào diǎn yī fèn kǎo yān zhūròu.",
        trans: {
          en: "I want to order a Pork Belly portion.",
          id: "Saya mau memesan satu porsi Babi Asam Cuka.",
          viet: "Tôi muốn gọi một phần thịt ba chỉ nướng.",
          thai: "ฉันต้องการสั่งหมูสามชั้นย่างหนึ่งที่",
          kr: "삼겹살 석쇠구이 하나 주세요."
        }
      },
      price: {
        cn: "烤醃豬肉一份多少錢？",
        pinyin: "Kǎo yān zhūròu yī fèn duōshǎo qián?",
        trans: {
          en: "How much is the Pork Belly portion?",
          id: "Berapa harga satu porsi Babi Asam Cuka?",
          viet: "Thịt ba chỉ nướng nướng bao nhiêu tiền một phần?",
          thai: "หมูสามชั้นย่างราคาชุดละเท่าไหร่?",
          kr: "삼겹살 구이 한 접시에 얼마인가요?"
        }
      },
      custom: {
        cn: "這烤豬肉要蘸特製醋汁嗎？",
        pinyin: "Zhè kǎo zhūròu yào zhàn tèzhì cùzhī ma?",
        trans: {
          en: "Do I dip this roasted pork in the special vinegar sauce?",
          id: "Apakah daging babi panggang ini dicelupkan ke saus cuka khusus?",
          viet: "Món thịt heo nướng này có chấm nước sốt giấm đặc chế không?",
          thai: "หมูย่างนี้ต้องจิ้มน้ำส้มสายชูปรุงรสสูตรพิเศษใช่ไหม?",
          kr: "이 삼겹살 구이는 특제 식초 소스에 찍어 먹는 건가요?"
        }
      }
    }
  },

  // CATEGORY: BEVERAGES & PASTRIES
  {
    id: "apricot_tea",
    category: "beverages",
    iconClass: "fa-solid fa-mug-hot",
    nameZh: "杏仁茶",
    pinyin: "Xìngrén chá",
    price: "$150",
    translations: {
      en: "Apricot Kernel Tea",
      id: "Teh Almond",
      viet: "Trà hạnh nhân ấm",
      thai: "น้ำอัลมอนด์ร้อน / ชาเมล็ดแอปริคอท",
      kr: "대만식 행인차 (아몬드 차)"
    },
    desc: {
      en: "Tea made from the inner seeds of apricot pits",
      id: "Teh yang terbuat dari biji buah aprikot",
      viet: "Thức uống bổ dưỡng được chế biến từ hạt quả mơ (hạnh nhân Trung Hoa) xay nhuyễn thơm ngậy",
      thai: "เครื่องดื่มชาสมุนไพรบำรุงสุขภาพ ต้มจากเนื้อในของเมล็ดแอปริคอทสด",
      kr: "살구씨 안쪽의 핵을 곱게 갈아 전통 방식으로 끓여낸 고소하고 따뜻한 건강 차"
    },
    phrases: {
      order: {
        cn: "我要一杯熱的杏仁茶。",
        pinyin: "Wǒ yào yī bēi rè de xìngrén chá.",
        trans: {
          en: "I want a cup of hot Apricot Kernel Tea.",
          id: "Saya mau segelas Teh Almond hangat.",
          viet: "Tôi muốn một ly trà hạnh nhân nóng.",
          thai: "ฉันต้องการชาเมล็ดแอปริคอทร้อนหนึ่งแก้ว",
          kr: "따뜻한 행인차 한 잔 주세요."
        }
      },
      price: {
        cn: "請問杏仁茶一杯多少錢？",
        pinyin: "Qǐngwèn xìngrén chá yī bēi duōshǎo qián?",
        trans: {
          en: "Excuse me, how much is a cup of Apricot Kernel Tea?",
          id: "Permisi, berapa harga segelas Teh Almond?",
          viet: "Xin hỏi một ly trà hạnh nhân bao nhiêu tiền?",
          thai: "ขอถามหน่อย ชาเมล็ดแอปริคอทแก้วละเท่าไหร่?",
          kr: "행인차 한 잔에 얼마인가요?"
        }
      },
      custom: {
        cn: "這杏仁茶是熱的還是冰的？",
        pinyin: "Zhè xìngrén chá  rè de háishì bīng de?",
        trans: {
          en: "Is this apricot kernel tea hot or iced?",
          id: "Apakah teh almond ini disajikan hangat atau dingin?",
          viet: "Trà hạnh nhân này uống nóng hay đá vậy?",
          thai: "ชาเมล็ดแอปริคอทนี้เสิร์ฟแบบร้อนหรือแบบเย็น?",
          kr: "이 아몬드차(행인차)는 뜨겁게 나오나요, 아니면 차갑게 나오나요?"
        }
      }
    }
  },
  {
    id: "hakka_tea",
    category: "beverages",
    iconClass: "fa-solid fa-leaf",
    nameZh: "客家擂茶",
    pinyin: "Kèjiā léichá",
    price: "$160",
    translations: {
      en: "Hakka Grinding Tea",
      id: "Teh Hakka Giling",
      viet: "Trà Lôi kiểu Khách Gia",
      thai: "ชาบดสไตล์ฮากกา",
      kr: "하카 레이차 (맷돌 차)"
    },
    desc: {
      en: "Taiwan-style Hakka style with brown sugar",
      id: "Teh gula merah Hakka ala Taiwan",
      viet: "Trà giã tay của người Khách Gia (Hakka) pha thêm đường nâu ngọt ấm",
      thai: "ชาเขียวสมุนไพรบดแบบดั้งเดิมของชาวฮากกา ปรุงรสหวานด้วยน้ำตาลทรายแดง",
      kr: "녹차 잎과 견과류를 절구에 빻아 우려낸 하카 부족 전통 건강 차로 흑당을 가미하여 달콤함"
    },
    phrases: {
      order: {
        cn: "我要點一份客家擂茶。",
        pinyin: "Wǒ yào diǎn yī fèn kèjiā léichá.",
        trans: {
          en: "I want to order a Hakka Grinding Tea.",
          id: "Saya mau memesan satu porsi Teh Hakka Giling.",
          viet: "Tôi muốn gọi một phần trà Lôi Khách Gia.",
          thai: "ฉันต้องการสั่งชาบดสไตล์ฮากกาหนึ่งชุด",
          kr: "하카 레이차 하나 주문할게요."
        }
      },
      price: {
        cn: "客家擂茶一客多少錢？",
        pinyin: "Kèjiā léichá yī kè duōshǎo qián?",
        trans: {
          en: "How much is a portion of Hakka Grinding Tea?",
          id: "Berapa harga satu porsi Teh Hakka Giling?",
          viet: "Trà Lôi Khách Gia bao nhiêu tiền một phần?",
          thai: "ชาบดสไตล์ฮากกาชุดละเท่าไหร่?",
          kr: "하카 레이차 세트 하나에 얼마인가요?"
        }
      },
      custom: {
        cn: "擂茶裡面有加花生和芝麻嗎？",
        pinyin: "Léichá lǐmiàn yǒu jiā huāshēng hé zhīmá ma?",
        trans: {
          en: "Does the grinding tea contain peanuts and sesame?",
          id: "Apakah teh giling ini mengandung kacang tanah dan wijen?",
          viet: "Trong trà Lôi này có bỏ thêm đậu phộng và mè không?",
          thai: "ในชาบดนี้มีส่วนผสมของถั่วลิสงและงาด้วยใช่ไหม?",
          kr: "레이차 안에 땅콩과 깨가 들어가 있나요?"
        }
      }
    }
  },
  {
    id: "aiyu_jelly",
    category: "beverages",
    iconClass: "fa-solid fa-lemon",
    nameZh: "檸檬愛玉",
    pinyin: "Níngméng àiyù",
    price: "$160",
    translations: {
      en: "Lemon Aiyu Jelly",
      id: "Jeli Lemon Aiyu",
      viet: "Thạch ái ngọc chanh leo",
      thai: "วุ้นอ้ายยวี่มะนาว / วุ้นหิมะน้ำมะนาว",
      kr: "레몬 아이위 젤리 (레몬 우무)"
    },
    desc: {
      en: "Taiwan's special aiyu jelly served with lemon and tea",
      id: "Jelly Aiyu ala Taiwan dengan lemon dan teh",
      viet: "Món thạch ái ngọc thiên nhiên giải nhiệt của Đài Loan cùng nước cốt chanh thanh mát và trà thơm",
      thai: "วุ้นสมุนไพรอ้ายยวี่ออร์แกนิกไต้หวัน เสิร์ฟในน้ำมะนาวคั้นสดรสชาติเปรี้ยวหวานชื่นใจ",
      kr: "대만 고산지대 야생 무화과 씨앗으로 만든 천연 아이위 젤리에 레몬과 녹차를 곁들인 상큼한 디저트"
    },
    phrases: {
      order: {
        cn: "我要點一碗檸檬愛玉。",
        pinyin: "Wǒ yào diǎn yī wǎn níngméng àiyù.",
        trans: {
          en: "I want to order a Lemon Aiyu Jelly bowl.",
          id: "Saya mau memesan satu mangkuk Jeli Lemon Aiyu.",
          viet: "Tôi muốn gọi một bát thạch ái ngọc chanh.",
          thai: "ฉันต้องการสั่งวุ้นอ้ายยวี่มะนาวหนึ่งถ้วย",
          kr: "레몬 아이위 젤리 한 그릇 주세요."
        }
      },
      price: {
        cn: "檸檬愛玉一碗多少錢？",
        pinyin: "Níngméng àiyù yī wǎn duōshǎo qián?",
        trans: {
          en: "How much is a bowl of Lemon Aiyu Jelly?",
          id: "Berapa harga semangkuk Jeli Lemon Aiyu?",
          viet: "Thạch ái ngọc chanh bao nhiêu một bát?",
          thai: "วุ้นอ้ายยวี่มะนาวถ้วยละเท่าไหร่?",
          kr: "레몬 아이위 젤리 한 그릇에 얼마인가요?"
        }
      },
      custom: {
        cn: "這愛玉是用天然愛玉子做的嗎？",
        pinyin: "Zhè àiyù shì yòng tiānrán àiyùzǐ zuò de ma?",
        trans: {
          en: "Is this aiyu made from natural aiyu seeds?",
          id: "Apakah jeli aiyu ini dibuat dari biji buah aiyu alami?",
          viet: "Thạch ái ngọc này được làm từ hạt ái ngọc tự nhiên phải không?",
          thai: "วุ้นอ้ายยวี่นี้ทำจากเมล็ดอ้ายยวี่ธรรมชาติใช่ไหม?",
          kr: "이 아이위 젤리는 천연 아이위 나무 씨앗을 비벼서 직접 만든 건가요?"
        }
      }
    }
  },
  {
    id: "suncake",
    category: "beverages",
    iconClass: "fa-solid fa-cookie",
    nameZh: "太陽餅",
    pinyin: "Tàiyángbǐng",
    price: "$100",
    translations: {
      en: "Suncake",
      id: "Kue Matahari",
      viet: "Bánh mặt trời Taichung",
      thai: "ขนมเปี๊ยะพระอาทิตย์ (ไท่หยางปิ่ง)",
      kr: "타이양빙 (대만 태양 과자)"
    },
    desc: {
      en: "A famous traditional Taiwanese pastry originating from Taichung",
      id: "Berasal dari toko kue tradisional Taiwan yang terkenal di Taichung.",
      viet: "Bánh nướng ngàn lớp giòn ngọt xốp mịn nhồi mạch nha, đặc sản nổi tiếng nhất của thành phố Đài Trung",
      thai: "ขนมเปี๊ยะแป้งอบซ้อนกันเป็นชั้นๆ ยัดไส้แบะแซรสหวานนุ่มนวล ของฝากขึ้นชื่ออันดับหนึ่งจากเมืองไทจง",
      kr: "바삭하고 얇은 페이스트리 겹겹 사이에 달콤하고 부드러운 맥아당을 채운 대만 중부 타이중의 특산 명물 과자"
    },
    phrases: {
      order: {
        cn: "我要買一個太陽餅。",
        pinyin: "Wǒ yào mǎi yī gè tàiyángbǐng.",
        trans: {
          en: "I want to buy a Suncake.",
          id: "Saya mau membeli satu buah Kue Matahari.",
          viet: "Tôi muốn mua một cái bánh mặt trời.",
          thai: "ฉันต้องการซื้อขนมเปี๊ยะพระอาทิตย์หนึ่งชิ้น",
          kr: "타이양빙 하나 살게요."
        }
      },
      price: {
        cn: "請問太陽餅一個多少錢？",
        pinyin: "Qǐngwèn tàiyángbǐng yī gè duōshǎo qián?",
        trans: {
          en: "Excuse me, how much is a Suncake?",
          id: "Permisi, berapa harga satu Kue Matahari?",
          viet: "Xin hỏi bánh mặt trời một cái bao nhiêu tiền?",
          thai: "ขอถามหน่อย ขนมเปี๊ยะพระอาทิตย์ราคาชิ้นละเท่าไหร่?",
          kr: "타이양빙 하나에 얼마예요?"
        }
      },
      custom: {
        cn: "這太陽餅是台中最出名的特產。",
        pinyin: "Zhè tàiyángbǐng shì táizhōng zuì chūmíng de tèchǎn.",
        trans: {
          en: "This suncake is the most famous specialty in Taichung.",
          id: "Kue matahari ini adalah oleh-oleh paling terkenal di Taichung.",
          viet: "Bánh mặt trời này chính là đặc sản nổi tiếng nhất ở Đài Trung.",
          thai: "ขนมเปี๊ยะพระอาทิตย์นี้เป็นของฝากที่มีชื่อเสียงที่สุดของเมืองไทจง",
          kr: "이 타이양빙은 대만 타이중에서 가장 이름난 명물 특산품입니다."
        }
      }
    }
  }
];

// 3. State Management
let currentLanguage = 'en';
let activeDish = null;
let recognition = null;
let isListening = false;
let currentVoiceRecognitionOption = null; // Tracks which sentence is currently listening

// 4. Dom Elements Cache (Smartphone Friendly Optimized)
const DOM = {
  // Screens (Tree Logic nodes)
  screenRoot: document.getElementById('screen-root'),
  screenBranch: document.getElementById('screen-branch'),
  screenLeaf: document.getElementById('screen-leaf'),
  
  // Navigation button lists
  categoryButtons: document.querySelectorAll('.category-tree-btn'),
  btnBackToRoot: document.getElementById('btn-back-to-root'),
  btnBackToBranch: document.getElementById('btn-back-to-branch'),
  
  // Branch View fields
  branchTitleText: document.getElementById('branch-title-text'),
  branchDishesList: document.getElementById('branch-dishes-list'),
  
  // Leaf Scanned dish displaying fields
  dishTitle: document.getElementById('dish-title'),
  dishPinyin: document.getElementById('dish-pinyin'),
  dishTrans: document.getElementById('dish-trans'),
  dishVisual: document.getElementById('dish-visual'),
  
  // Dialogue practising branches
  branchSentenceContainer: document.getElementById('branch-sentence-container'),
  
  // Header selectors (Corrected class mapping!)
  langButtons: document.querySelectorAll('.lang-tab'),
  
  // Viewfinder simulation and overlays
  hudBadgeText: document.getElementById('hud-badge-text'),
  arHintText: document.getElementById('ar-hint-text'),
  cameraContainer: document.getElementById('ar-scene-container'),
  
  // Modal lightboxes
  menuModal: document.getElementById('menu-modal'),
  btnViewMenu: document.getElementById('btn-view-menu'),
  btnViewMenuText: document.getElementById('btn-view-menu-text'),
  modalTitleText: document.getElementById('modal-title-text'),
  reconstructedMenuBody: document.getElementById('modal-reconstructed-body'),
  closeModalBtn: document.getElementById('close-modal-btn'),
  
  // New Modal 2: Original Chinese Menu (CN.png)
  cnImageModal: document.getElementById('cn-image-modal'),
  btnViewCnMenu: document.getElementById('btn-view-cn-menu'),
  closeCnModalBtn: document.getElementById('close-cn-modal-btn')
};

// 5. Initialize Application
window.addEventListener('DOMContentLoaded', () => {
  setupLanguageSelectors();
  setupCategorySelector();
  setupSpeechRecognition();
  setupMenuModal();
  updateUILanguage();
  
  // Register image tracker detections
  setupMindARListeners();
});

// 6. Navigation Screen Engine (Branching slide animations)
function showScreen(screen) {
  DOM.screenRoot.classList.remove('active');
  DOM.screenBranch.classList.remove('active');
  DOM.screenLeaf.classList.remove('active');
  
  screen.classList.add('active');
}

// 7. Root Level Category Selectors Wiring
function setupCategorySelector() {
  DOM.categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      selectCategoryBranch(category);
    });
  });
  
  // Back from branches list to Category Root
  DOM.btnBackToRoot.addEventListener('click', () => {
    showScreen(DOM.screenRoot);
  });
  
  // Back from detailed Practice to branches list
  DOM.btnBackToBranch.addEventListener('click', () => {
    showScreen(DOM.screenBranch);
  });
}

function selectCategoryBranch(category) {
  const t = UI_TRANSLATIONS[currentLanguage];
  let catName = '';
  let catIcon = '';
  switch (category) {
    case 'main_course': 
      catName = t.catMain; 
      catIcon = 'fa-solid fa-bowl-food';
      break; 
    case 'appetizer': 
      catName = t.catAppetizer; 
      catIcon = 'fa-solid fa-pepper-hot';
      break; 
    case 'beverages': 
      catName = t.catBeverage; 
      catIcon = 'fa-solid fa-mug-hot';
      break; 
  }
  
  // Populate Branch List (Using vector icons instead of emojis)
  DOM.branchTitleText.innerHTML = `<i class="${catIcon}" style="margin-right: 8px; color: var(--bronze-gold);"></i> ${catName}`;
  DOM.branchDishesList.innerHTML = '';
  
  const filteredDishes = DISHES_DATA.filter(d => d.category === category);
  filteredDishes.forEach(dish => {
    const card = document.createElement('div');
    card.className = 'branch-dish-card';
    card.innerHTML = `
      <div class="dish-thumb-row">
        <div class="dish-emoji-badge"><i class="${dish.iconClass}" style="color: var(--primary);"></i></div>
        <div class="dish-name-group">
          <h4>${dish.nameZh}</h4>
          <p>${dish.translations[currentLanguage]}</p>
        </div>
      </div>
      <div class="dish-price-badge">${dish.price}</div>
    `;
    
    card.addEventListener('click', () => {
      selectDishLeaf(dish);
      triggerAROverlayForDish(dish.id);
      showScanningToast(dish.translations[currentLanguage]);
    });
    
    DOM.branchDishesList.appendChild(card);
  });
  
  showScreen(DOM.screenBranch);
}

// 8. Leaf detailed Practice Page loader
function selectDishLeaf(dish) {
  activeDish = dish;
  const t = UI_TRANSLATIONS[currentLanguage];
  
  // Load card headers
  DOM.dishTitle.innerText = dish.nameZh;
  DOM.dishPinyin.innerText = dish.pinyin;
  DOM.dishTrans.innerText = dish.translations[currentLanguage];
  
  // Replaced emoji visual with vector icon!
  DOM.dishVisual.innerHTML = `<i class="${dish.iconClass}" style="font-size: 28px; color: var(--primary);"></i>`;
  
  // Build dynamic branching options (Order, Price, Inquiry)
  DOM.branchSentenceContainer.innerHTML = '';
  
  const branches = [
    { key: 'order', label: t.optOrder, data: dish.phrases.order },
    { key: 'price', label: t.optPrice, data: dish.phrases.price },
    { key: 'custom', label: t.optInquire, data: dish.phrases.custom }
  ];
  
  branches.forEach(branch => {
    const box = document.createElement('div');
    box.className = 'branch-option-box';
    box.innerHTML = `
      <div class="option-badge-header">${branch.label}</div>
      <div class="option-text-group">
        <div class="option-cn">${branch.data.cn}</div>
        <div class="option-pinyin">${branch.data.pinyin}</div>
        <div class="option-trans">${branch.data.trans[currentLanguage]}</div>
      </div>
      <div class="option-controls-row">
        <button class="action-btn-sm listen" data-text="${branch.data.cn}">
          <i class="fa-solid fa-volume-high"></i> <span>${t.listenBtn}</span>
        </button>
        <button class="action-btn-sm speak" data-key="${branch.key}" data-target="${branch.data.cn}">
          <i class="fa-solid fa-microphone"></i> <span>${t.speakBtn}</span>
        </button>
      </div>
      
      <!-- Grading feedback slot unique for this option -->
      <div id="score-badge-${branch.key}" class="score-badge-card">
        <div id="score-val-${branch.key}" class="score-value-box">80%</div>
        <div class="score-texts">
          <h5 id="score-star-label-${branch.key}">⭐⭐ Good Try</h5>
          <p id="score-feedback-text-${branch.key}">Good job! Keep practicing.</p>
        </div>
      </div>
    `;
    
    // Wire TTS audio Synthesis
    box.querySelector('.listen').addEventListener('click', (e) => {
      playMandarinTTS(branch.data.cn);
      
      // Quick visual feedback
      const icon = e.currentTarget.querySelector('i');
      icon.className = 'fa-solid fa-volume-high fa-beat-fade';
      setTimeout(() => {
        icon.className = 'fa-solid fa-volume-high';
      }, 1500);
    });
    
    // Wire STT speech pronunciation
    box.querySelector('.speak').addEventListener('click', (e) => {
      if (!recognition) {
        alert(t.noMicSupport);
        return;
      }
      
      if (isListening) {
        recognition.stop();
      } else {
        currentVoiceRecognitionOption = branch.key; // Anchor result to this option
        try {
          recognition.start();
        } catch (err) {
          console.error(err);
        }
      }
    });
    
    DOM.branchSentenceContainer.appendChild(box);
  });
  
  showScreen(DOM.screenLeaf);
}

// 9. Language Flags Selector Switcher
function setupLanguageSelectors() {
  DOM.langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.langButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      currentLanguage = btn.dataset.lang;
      updateUILanguage();
    });
  });
}

function updateUILanguage() {
  const t = UI_TRANSLATIONS[currentLanguage];
  
  // Re-translate static labels
  DOM.hudBadgeText.innerText = t.cameraStatus;
  DOM.arHintText.innerText = t.hudInstruction;
  
  if (DOM.btnViewMenuText) DOM.btnViewMenuText.innerText = t.viewMenuBtn;
  if (DOM.modalTitleText) DOM.modalTitleText.innerText = t.menuBookTitle;
  
  // Translate main Category Selector panels
  document.getElementById('welcome-title-text').innerText = t.welcomeTitle;
  document.getElementById('welcome-desc-text').innerText = t.welcomeDesc;
  document.getElementById('btn-title-main').innerText = t.catMain;
  document.getElementById('btn-title-appetizer').innerText = t.catAppetizer;
  document.getElementById('btn-title-beverage').innerText = t.catBeverage;
  
  // Translate Leaf detailed practicing console buttons
  if (activeDish) {
    const parentNode = DOM.screenBranch;
    if (parentNode.classList.contains('active')) {
      const activeCategory = DISHES_DATA.find(d => d.id === DOM.branchDishesList.firstChild?.dataset?.dish)?.category;
      if (activeCategory) selectCategoryBranch(activeCategory);
    }
    if (DOM.screenLeaf.classList.contains('active')) {
      selectDishLeaf(activeDish);
    }
    
    // Automatically translate and update floating AR text overlays
    triggerAROverlayForDish(activeDish.id);
  }
  
  // Render Reconstructed Visible Menu Book (Resolves invisible text bug)
  buildReconstructedDigitalMenuHTML();
}

// 10. Digital Menu Book Builder (HTML-based correct character render, completely emoji-free!)
function buildReconstructedDigitalMenuHTML() {
  DOM.reconstructedMenuBody.innerHTML = '';
  
  const categories = [
    { id: 'main_course', name: UI_TRANSLATIONS[currentLanguage].catMain, icon: 'fa-solid fa-bowl-food' },
    { id: 'appetizer', name: UI_TRANSLATIONS[currentLanguage].catAppetizer, icon: 'fa-solid fa-pepper-hot' },
    { id: 'beverages', name: UI_TRANSLATIONS[currentLanguage].catBeverage, icon: 'fa-solid fa-mug-hot' }
  ];
  
  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'digital-menu-card';
    card.innerHTML = `<div class="digital-section-header"><i class="${cat.icon}" style="margin-right: 6px;"></i> ${cat.name}</div>`;
    
    const catDishes = DISHES_DATA.filter(d => d.category === cat.id);
    catDishes.forEach(dish => {
      const row = document.createElement('div');
      row.className = 'digital-menu-item-row';
      row.innerHTML = `
        <div class="digital-item-name-group">
          <div class="digital-item-names">
            <span class="digital-item-zh">${dish.nameZh}</span>
            <span class="digital-item-py">${dish.pinyin}</span>
          </div>
          <div class="digital-item-trans">${dish.translations[currentLanguage]}</div>
          <div class="digital-item-trans" style="font-size: 11px; font-style: italic; color: var(--text-muted); font-weight: normal; margin-top: 1px; line-height: 1.4;">
            ${dish.desc[currentLanguage]}
          </div>
        </div>
        <div class="digital-item-price">${dish.price}</div>
      `;
      card.appendChild(row);
    });
    
    DOM.reconstructedMenuBody.appendChild(card);
  });
}

// 11. Text-to-Speech Engine
function playMandarinTTS(text) {
  if (!('speechSynthesis' in window)) {
    return;
  }
  
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Grab Taiwanese Mandarin Chinese voice
  const voices = window.speechSynthesis.getVoices();
  let voice = voices.find(v => v.lang.includes('zh-TW'));
  if (!voice) {
    voice = voices.find(v => v.lang.includes('zh') || v.lang.includes('cmn'));
  }
  
  if (voice) {
    utterance.voice = voice;
  }
  
  utterance.rate = 0.75; // Slower and clear for comfortable listening of all ages
  utterance.pitch = 1.0;
  
  window.speechSynthesis.speak(utterance);
}

// 12. Speech Recognition (Grader engine)
function setupSpeechRecognition() {
  const SpeechGen = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechGen) return;
  
  recognition = new SpeechGen();
  recognition.lang = 'zh-TW';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  
  recognition.onstart = () => {
    isListening = true;
    const btn = document.querySelector(`.speak[data-key="${currentVoiceRecognitionOption}"]`);
    if (btn) {
      btn.classList.add('listening');
      btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>${UI_TRANSLATIONS[currentLanguage].micListening}</span>`;
    }
  };
  
  recognition.onend = () => {
    isListening = false;
    resetAllSpeakingButtons();
  };
  
  recognition.onerror = (e) => {
    console.error(e);
    isListening = false;
    resetAllSpeakingButtons();
  };
  
  recognition.onresult = (event) => {
    const spokenText = event.results[0][0].transcript;
    const confidence = event.results[0][0].confidence;
    
    evaluateBranchPronunciation(spokenText, confidence);
  };
}

function resetAllSpeakingButtons() {
  const t = UI_TRANSLATIONS[currentLanguage];
  document.querySelectorAll('.speak').forEach(btn => {
    btn.classList.remove('listening');
    btn.innerHTML = `<i class="fa-solid fa-microphone"></i> <span>${t.speakBtn}</span>`;
  });
}

function evaluateBranchPronunciation(spokenText, confidence) {
  if (!activeDish || !currentVoiceRecognitionOption) return;
  
  // Grab correct targeted sentence phrase
  const targetPhrase = activeDish.phrases[currentVoiceRecognitionOption].cn;
  
  // Clean punctuation
  const cleanSpoken = spokenText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()！？，。]/g,"").trim();
  const cleanTarget = targetPhrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()！？，。]/g,"").trim();
  
  let matches = 0;
  for (let char of cleanTarget) {
    if (cleanSpoken.includes(char)) matches++;
  }
  
  let score = 0;
  if (cleanTarget.length > 0) {
    score = Math.round((matches / cleanTarget.length) * 100);
  }
  
  // Small boost
  if (score > 30) {
    score = Math.min(100, Math.round(score * 0.95 + confidence * 5));
  }
  
  let ratingClass = 'perfect';
  let stars = '';
  let feedback = '';
  const t = UI_TRANSLATIONS[currentLanguage];
  
  if (score >= 85) {
    ratingClass = 'perfect';
    stars = t.starsPerfect;
    feedback = t.perfectScore;
  } else if (score >= 45) {
    ratingClass = 'good';
    stars = t.starsGood;
    feedback = t.goodScore;
  } else {
    ratingClass = 'retry';
    stars = t.starsRetry;
    feedback = t.retryScore;
  }
  
  // Render grading cards inside this specific active branch
  const scoreBox = document.getElementById(`score-badge-${currentVoiceRecognitionOption}`);
  const scoreVal = document.getElementById(`score-val-${currentVoiceRecognitionOption}`);
  const scoreStarLabel = document.getElementById(`score-star-label-${currentVoiceRecognitionOption}`);
  const scoreFeedbackText = document.getElementById(`score-feedback-text-${currentVoiceRecognitionOption}`);
  
  if (scoreBox && scoreVal) {
    scoreVal.innerText = `${score}%`;
    scoreVal.className = `score-value-box ${ratingClass}`;
    scoreStarLabel.innerText = stars;
    scoreFeedbackText.innerHTML = `${feedback}<br><small style="color: var(--text-muted)">You said: "${spokenText}"</small>`;
    
    scoreBox.style.display = 'flex';
    scoreBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// 13. Menu Books Lightbox Actions (Reconstructed and CN Menu + DOWNLOADS)
function setupMenuModal() {
  // Modal 1: Reconstructed readable Menu Book
  if (DOM.btnViewMenu && DOM.menuModal && DOM.closeModalBtn) {
    DOM.btnViewMenu.addEventListener('click', () => {
      DOM.menuModal.classList.add('active');
    });
    DOM.closeModalBtn.addEventListener('click', () => {
      DOM.menuModal.classList.remove('active');
    });
  }
  
  // Modal 2: Original Chinese Menu Book (CN.png)
  if (DOM.btnViewCnMenu && DOM.cnImageModal && DOM.closeCnModalBtn) {
    DOM.btnViewCnMenu.addEventListener('click', () => {
      DOM.cnImageModal.classList.add('active');
    });
    DOM.closeCnModalBtn.addEventListener('click', () => {
      DOM.cnImageModal.classList.remove('active');
    });
  }

  // Download Trigger for Translated Menu (Digital or high contrast PNG match)
  const btnDownloadMenu = document.getElementById('btn-download-menu');
  if (btnDownloadMenu) {
    btnDownloadMenu.addEventListener('click', () => {
      let imgPath = 'MOON PAV MENU/CN.png';
      switch (currentLanguage) {
        case 'en': imgPath = 'MOON PAV MENU/EN.png'; break;
        case 'id': imgPath = 'MOON PAV MENU/ID.png'; break;
        case 'kr': imgPath = 'MOON PAV MENU/KR.png'; break;
        case 'thai': imgPath = 'MOON PAV MENU/THAI.png'; break;
        case 'viet': imgPath = 'MOON PAV MENU/VIET.png'; break;
      }
      triggerFileDownload(imgPath, `Moon_Pavilion_Menu_${currentLanguage.toUpperCase()}.png`);
    });
  }

  // Download Trigger for Original Chinese Menu
  const btnDownloadCnMenu = document.getElementById('btn-download-cn-menu');
  if (btnDownloadCnMenu) {
    btnDownloadCnMenu.addEventListener('click', () => {
      triggerFileDownload('MOON PAV MENU/CN.png', 'Moon_Pavilion_Menu_CN.png');
    });
  }
}

// Utility function to trigger file download on any device
function triggerFileDownload(url, filename) {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
// 14. Floating Scan feedback overlay
function showScanningToast(text) {
  const existing = document.querySelector('.toast-notice');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = 'toast-notice';
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${text}`;
  document.querySelector('.phone-wrapper').appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 2200);
}

// 15. A-Frame camera event bindings
function setupMindARListeners() {
  const marker = document.getElementById('marker');
  if (!marker) return;
  
  marker.addEventListener('targetFound', () => {
    console.log("Mind-AR Target Detected!");
    
    // Show localized Success Scan toast
    const t = UI_TRANSLATIONS[currentLanguage];
    showScanningToast(t.scanSuccess || "Scan Successful!");
    
    // Show translated overlay on scanning, but STAY STILL on homepage (do NOT navigate bottom console)!
    const targetDish = DISHES_DATA[0];
    triggerAROverlayForDish(targetDish.id);
  });
}

// Projection in spatial camera view (Pre-translated PNG file dynamic mapping!)
function triggerAROverlayForDish(dishId) {
  const arOverlay = document.getElementById('ar-entity-overlay');
  const arMenuImage = document.getElementById('ar-menu-image');
  
  if (!arOverlay || !arMenuImage) return;
  
  // Determine correct pre-translated menu PNG path based on active language tab
  let imgPath = 'MOON PAV MENU/CN.png';
  switch (currentLanguage) {
    case 'en':
      imgPath = 'MOON PAV MENU/EN.png';
      break;
    case 'id':
      imgPath = 'MOON PAV MENU/ID.png';
      break;
    case 'kr':
      imgPath = 'MOON PAV MENU/KR.png';
      break;
    case 'thai':
      imgPath = 'MOON PAV MENU/THAI.png';
      break;
    case 'viet':
      imgPath = 'MOON PAV MENU/VIET.png';
      break;
  }
  
  // Update the 3D plane's texture image dynamically!
  arMenuImage.setAttribute('src', imgPath);
  
  // Show and animate scale using high-performance, bulletproof anime.js to prevent A-Frame dynamic attribute glitches!
  arOverlay.setAttribute('visible', 'true');
  arOverlay.object3D.scale.set(0.1, 0.1, 0.1);
  
  if (typeof AFRAME !== 'undefined' && AFRAME.ANIME) {
    AFRAME.ANIME({
      targets: arOverlay.object3D.scale,
      x: 1.0,
      y: 1.0,
      z: 1.0,
      duration: 500,
      easing: 'easeOutElastic'
    });
  } else {
    arOverlay.object3D.scale.set(1.0, 1.0, 1.0);
  }
}
