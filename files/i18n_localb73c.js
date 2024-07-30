// 获取浏览器语言
const getBrowserLang = () => {
    if (typeof window === 'undefined' || !window.navigator) return
    const lang = window.navigator.language || window.navigator.browserLanguage
    if (!lang) return
    return lang.toLowerCase().substr(0, 2)
}
// 获取本地语言
const getLocalLang = () => {
    if (typeof window === 'undefined' || !window.localStorage) return
    const lang = window.localStorage.getItem('lang')
    if (!lang) return
    return lang.toLowerCase()
}
// 定义双语tag
const i18n_tags = "lang-tag"

// 定于双语翻译
const i18n_messages = {
    en: {
        app_name: '334 Rummy',
        web_title: '334 Rummy | 334rummy- Your Ultimate Destination for Online Gaming',
        title1: 'Play 35+ Games <br> Win Upto ₹5 Crores Daily',
        subTitle1: 'Play on India’s Best Gaming App.',
        subTitle2: '🔥 Get 5% Bonus on every Add Cash up to ₹100,000',
        wait_down_app: 'Wait For Apk...',
        down_app: 'Download App',
        rate_info: '4.9 Rating',
        rate_count: 'Rating 25M+ Downloads',
        avaliable: 'Available on',
        transfer1: 'Bank Transfer',
        transfer2: 'UPI Transfer',
        subTitle3: 'Withdraw winnings directly to your.',
        trust_me: 'Truly Best India Game Platform',
        features_title_1: 'World Class Security',
        features_info_1_1: 'Zero Fraud Guarantee',
        features_info_1_2: '100% safe and secure transactions',
        features_info_1_3: 'Complete data and identity privacy',
        features_title_2: 'Best in Category Offers & Rewards*',
        features_info_2_1: 'Welcome reward up to Rs 500 Bonus',
        features_info_2_2: 'Earn up to Rs 5,000 per friend via Referrals every day',
        features_info_2_3: 'UNLIMITED Earnings via Missions',
        features_title_3: 'Most Innovative Gaming Platform',
        features_info_3_1: 'Play Slots, Parchisi Star and other skilled games in one APP [Industry 1st]',
        features_info_3_2: 'Instant Withdrawals of Winnings in 24X7',
        features_info_3_3: '24X7 Customer Support',
        features_title_4: 'Never Stop Playing*',
        features_info_4_1: 'Play more than 35+ Games',
        features_info_4_2: 'Free Cash Tournaments and Leaderboard worth more than 1 Cr/ month',
        features_info_4_3: 'Real Cash Games, 100% Bonus Games, Gadget Leagues & Many More!',
        top_game: 'Top Games on 334 Rummy',
        start_playing: 'Start Playing',
        customer_service: 'Customer Service',
        title2: 'Best Gaming Experience',
        exp_1: 'Welcome Bonus',
        exp_2: 'VIP Club',
        exp_3: 'Leaderboard',
        exp_4: 'Salon Club',
        exp_5: 'Social Talking Center',
        exp_6: '35+ Games',
        title3: 'Earn more with 334 Rummy',
        subTitle4: 'Refer and Earn',
        subInfo1: 'Earn upto ₹50,000 everytime you refer friend',
        subBtn1: 'Know More',
        subTitle5: 'Are you an Influencer?',
        subInfo2: 'Earn Lakhs of rupees everytime your followers play a game',
        title4: 'Trusted by 1 Crore players',
        subTitle6: 'Made with ❤️ in India, for India!',
        ratings: 'Ratings',
        rate_score: '4.6',
        rate_people: 'out of 12,878',
        download: "Download the",
        app: '334 Rummy',
        title5: 'Play. Win. Earn',
        and_more: 'and more',
        tap_download: 'Tap to download the APP',
        subTitle7: '🔥 Get 5% Bonus on every Add Cash up to ₹100,000',
        gamer: 'Rummy Gamer',
        gamer_win: 'Won ₹2 Crore+',
        gamer_msg: '334 Rummy is the best online earning app. I am a big Rummy Fan and I love playing Real Cash Rummy on 334 Rummy.I also play Dragon Tiger and other skilled games on 334 Rummy and earn cash amount online daily.',
        read_more_about: 'Read More About 334 Rummy',
        read_less: 'Read Less',
        read_more: 'Read More',
        game_intro_1_1: 'Bringing the traditional Indian household card game',
        game_intro_1_2: 'to the online tables. Play Points Rummy & win Real Money. Join daily tables & tournaments as well as Salon room to play with your friends!',
        game_intro_2_1: 'Dragon Tiger is a fast-action game played with cards on a table. The game begins when players',
        game_intro_2_2: "bet on either Dragon or Tiger options on the table. Depending on whether you bet on the Dragon or the Tiger box, you win if the highest card appears on that particular option.",
        app_info: '334 Rummy is a skill-based platform where you make money while you play. This app takes your passion for the cards games one step ahead and engages you in an enthralling real cash games experience on your mobile screen.',
        rummy: 'Rummy',
        dragontiger: 'Dragon Tiger',
        casual: 'Casual Games',
        slots: 'Slots',
        slots_intro: 'Various classic slot games. The gameplay is simple',
        slots_detail: ', just click the "Spin" button, and your fortune will come immediately. There is also a Jackpot super bonus waiting for you who are lucky!',
        p_star: 'Parchisi Star',
        p_star_intro: 'The Parchisi Star board game is very popular in Spain called Parchisi',
        p_star_detail: " and has different names in other countries. This game is very challenging, suitable for all ages, and it is a very good casual game.",
        copyright: "© 334 Rummy 2017",
        disclaimer_title: 'DISCLAIMER',
        disclaimer_info_1: 'This game may be habit-forming or financially risky. Play Responsibly.',
        disclaimer_info_2: '*334 Rummy is the biggest gaming app in India based on the number of unity games, special tournaments and formats. ',
        disclaimer_info_3: '334 Rummy is available only to people above 18 years of age. 334 Rummy is available in all states where permissible by extant law. ',
        disclaimer_info_4: 'Consequently, users located in some states may not be able to access our App or its contests. For an updated list of such states, please download the App.',
        contact_with_us: "Contact with us",
        company: 'Company',
        about_us: 'About Us',
        contact_us: 'Contact Us',
        connect_with_us: 'Connect with us',
        hour: '24/7 Online Customer Service',
        email: 'Email',
        games: 'Games',
        legal: 'Legal',
        tearm_conditions: 'Terms & Conditions',
        fair_play_policy: 'Fair Play Policy',
        privacy_policy: 'Privacy Policy',
        pay_by: 'Secured payments by',
        help: 'Help',
        secure: '100% Secure',
    },
    hi: {
        app_name: 'योनो रम्मी',
        web_title: 'योनो रम्मी - ऑनलाइन लूडो, रम्मी, पोकर और सर्वश्रेष्ठ भारत ऐप',
        title1: '35+ खेल खेलें <br> जीतें ₹5 करोड़ रोजाना',
        subTitle1: 'भारत के सर्वश्रेष्ठ गेमिंग ऐप पर खेलें।',
        subTitle2: '🔥 ₹100,000 तक के हर एड कैश पर 5% बोनस पाएं',
        wait_down_app: 'एप्लिकेशन के लिए प्रतीक्षा करें...',
        down_app: 'एंड्रॉयड ऐप डाउनलोड करें',
        rate_info: '4.9 रेटिंग',
        rate_count: 'रेटिंग 25M+ डाउनलोड',
        avaliable: 'उपलब्ध है',
        transfer1: 'बैंक ट्रांसफर',
        transfer2: 'UPI ट्रांसफर',
        subTitle3: 'अपने विजय को निकालें।',
        trust_me: 'वास्तव में सर्वश्रेष्ठ भारत गेम प्लेटफॉर्म',
        features_title_1: 'वर्ल्ड क्लास सुरक्षा',
        features_info_1_1: 'जीरो फ्रॉड गारंटी',
        features_info_1_2: '100% सुरक्षित और सुरक्षित लेन-देन',
        features_info_1_3: 'पूरा डेटा और पहचान गोपनीयता',
        features_title_2: 'श्रेष्ठ श्रेणी के प्रस्ताव और इनाम*',
        features_info_2_1: 'वेलकम रिवार्ड तक ₹500 बोनस',
        features_info_2_2: 'रेफरल के माध्यम से प्रति दिन ₹5,000 तक कमाएं',
        features_info_2_3: 'मिशन के माध्यम से असीमित कमाई',
        features_title_3: 'सबसे अधिनियमित गेमिंग प्लेटफॉर्म',
        features_info_3_1: 'स्लॉट, परचीसी स्टार और अन्य कुशल खेलों को एक ऐप में खेलें [इंडस्ट्री 1st]',
        features_info_3_2: '24X7 में विजय की तुरंत निकासी',
        features_info_3_3: '24X7 ग्राहक सहायता',
        features_title_4: 'कभी खेलना न बंद करें*',
        features_info_4_1: '35+ से अधिक खेलें',
        features_info_4_2: '1 करोड़ से अधिक नि: शुल्क कैश टूर्नामेंट और लीडरबोर्ड',
        features_info_4_3: 'रियल कैश गेम, 100% बोनस गेम, गैजेट लीग और बहुत कुछ!',
        top_game: 'योनो रम्मी पर शीर्ष खेल',
        start_playing: 'खेलना शुरू करें',
        customer_service: 'ग्राहक सेवा',
        title2: 'श्रेष्ठ गेमिंग अनुभव',
        exp_1: 'वेलकम बोनस',
        exp_2: 'वीआईपी क्लब',
        exp_3: 'लीडरबोर्ड',
        exp_4: 'सैलून क्लब',
        exp_5: 'सोशल टॉकिंग सेंटर',
        exp_6: '35+ खेल',
        title3: 'योनो रम्मी के साथ अधिक कमाएं',
        subTitle4: 'रेफर और कमाएं',
        subInfo1: 'दोस्त को रेफर करने पर ₹50,000 तक कमाएं',
        subBtn1: 'अधिक जानकारी',
        subTitle5: 'क्या आप एक प्रभावक हैं?',
        subInfo2: 'अपने फॉलोअर्स एक खेल खेलने पर लाखों रुपये कमाएं',
        title4: '1 करोड़ खिलाड़ियों द्वारा विश्वसनीय',
        subTitle6: 'भारत में बनाया गया, भारत के लिए!',
        ratings: 'रेटिंग',
        rate_score: '4.6',
        rate_people: '12,878 में से',
        download: "डाउनलोड करें",
        app: 'योनो रम्मी ऐप',
        title5: 'खेलें। जीतें। कमाएं',
        and_more: 'और अधिक',
        tap_download: 'ऐप डाउनलोड करने के लिए टैप करें',
        subTitle7: '🔥 ₹100,000 तक के हर एड कैश पर 5% बोनस पाएं',
        gamer: 'रम्मी गेमर',
        gamer_win: '₹2 करोड़+ जीता',
        gamer_msg: 'योनो रम्मी सबसे अच्छा ऑनलाइन अर्निंग ऐप है। मैं एक बड़ा रम्मी फैन हूं और मुझे योनो रम्मी पर रियल कैश रम्मी खेलना पसंद है। मैं योनो रम्मी पर लूडो और अन्य कुशल खेल भी खेलता हूं और रोजाना ऑनलाइन नकदी राशि कमाता हूं।',
        read_more_about: 'योनो रम्मी ऐप के बारे में और अधिक पढ़ें',
        read_less: 'कम पढ़ें',
        read_more: 'अधिक पढ़ें',
        game_intro_1_1: 'पारंपरिक भारतीय घरेलू कार्ड गेम लाना',
        game_intro_1_2: 'ऑनलाइन टेबल। खेलें पॉइंट रम्मी और विजय रियल मनी। दैनिक टेबल और टूर्नामेंट के साथ अपने दोस्तों के साथ खेलने के लिए सैलून रूम में शामिल हों!',
        game_intro_2_1: 'पारंपरिक बोर्ड गेम अब ऑनलाइन मल्टीप्लेयर में खेलने के लिए उपलब्ध है',
        game_intro_2_2: "। अपने विरोधी को जीतने से पहले अपने सभी रंगीन पॉन्स घर लाएं। अपने विरोधी के पॉन्स को पकड़ने पर जब आप अतिरिक्त जीवन कमाते हैं और तीसरी पकड़ पर खेल जीतते हैं।",
        app_info: 'योनो रम्मी ऐप एक कौशल आधारित प्लेटफॉर्म है जहां आप खेलते समय पैसे कमाते हैं। यह ऐप आपके कार्ड खेलों के प्रति उत्साह को एक कदम आगे ले जाता है और आपको अपने मोबाइल स्क्रीन पर एक आकर्षक रियल कैश गेम्स अनुभव में लगातार करता है।',
        rummy: 'रम्मी',
        dragontiger: 'लूडो',
        casual: 'कैजुअल गेम्स',
        slots: 'स्लॉट',
        slots_intro: 'विभिन्न क्लासिक स्लॉट खेल। गेमप्ले सरल है',
        slots_detail: ', बस "स्पिन" बटन पर क्लिक करें, और आपकी भाग्यशाली तुरंत आ जाएगी। जो भाग्यशाली है, उसके लिए आपके लिए एक जैकपॉट सुपर बोनस भी इंतजार कर रहा है!',
        p_star: 'परचीसी स्टार',
        p_star_intro: 'परचीसी स्टार बोर्ड गेम स्पेन में बहुत लोकप्रिय है जिसे परचीसी कहा जाता है',
        p_star_detail: " और अन्य देशों में अलग-अलग नाम हैं। यह खेल बहुत चुनौतीपूर्ण है, सभी उम्र के लिए उपयुक्त है, और यह एक बहुत अच्छा कैजुअल गेम है।",
        disclaimer_title: 'अस्वीकरण',
        disclaimer_info_1: 'यह खेल आदत बनाने वाला या वित्तीय रूप से जोखिमपूर्ण हो सकता है। जिम्मेदारीपूर्वक खेलें।',
        disclaimer_info_2: '*योनो रम्मी एक ऐप है जो यूनिटी गेम, विशेष टूर्नामेंट और प्रारूपों की संख्या के आधार पर भारत में सबसे बड़ा गेमिंग ऐप है। ',
        disclaimer_info_3: 'योनो रम्मी केवल 18 वर्ष से अधिक उम्र के लोगों के लिए उपलब्ध है। योनो रम्मी वर्तमान कानून द्वारा अनुमति देने वाले सभी राज्यों में उपलब्ध है। ',
        disclaimer_info_4: 'इसलिए, कुछ राज्यों में स्थित उपयोगकर्ताओं को हमारे ऐप या उसके प्रतियोगियों तक पहुंच नहीं हो सकती है। ऐसे राज्यों की एक अद्यतन सूची के लिए, कृपया ऐप डाउनलोड करें।',
        contact_with_us: "हमसे संपर्क करें",
        company: 'कंपनी',
        about_us: 'हमारे बारे में',
        contact_us: 'हमसे संपर्क करें',
        connect_with_us: 'हमसे जुड़ें',
        hour: '24/7 ऑनलाइन ग्राहक सेवा',
        email: 'ईमेल',
        games: 'खेल',
        legal: 'कानूनी',
        tearm_conditions: 'नियम एवं शर्तें',
        fair_play_policy: 'निष्पक्ष खेल नीति',
        privacy_policy: 'गोपनीयता नीति',
        pay_by: 'द्वारा सुरक्षित भुगतान',
        help: 'मदद',
        secure: '100% सुरक्षित',
    },
}

const ALLOW_LANG = ['en', 'hi']
const DEFAULT_LANG = 'en'

// 定义一个方法
function getContent(tag) {
    let locale = getLocalLang() || getBrowserLang() || DEFAULT_LANG
    if (!ALLOW_LANG.includes(locale)){
        locale = DEFAULT_LANG
    }
    return i18n_messages[locale][tag]
}

// 根据浏览器语言替换语言
let locale = getLocalLang() || getBrowserLang() || DEFAULT_LANG
console.log(locale)
if (!ALLOW_LANG.includes(locale)){
    locale = DEFAULT_LANG
}
// 设置语言
const langTag = document.querySelector('html')
langTag.setAttribute('lang', locale)
// 找到 lang-tag 标签，根据标签的值，设置标签的内容
let objs = document.querySelectorAll('['+i18n_tags+']')
objs.forEach((obj) => {
    if (obj.getAttribute(i18n_tags) && i18n_messages[locale][obj.getAttribute(i18n_tags)])
    {
        obj.innerHTML = i18n_messages[locale][obj.getAttribute(i18n_tags)]
    }
});
