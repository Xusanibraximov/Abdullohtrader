// ---------- MENU ----------
const menu = document.getElementById("menu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

function showMenu(v){
  if (v){
    menu.classList.add("show");
    menu.setAttribute("aria-hidden", "false");
    openMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    menu.classList.remove("show");
    menu.setAttribute("aria-hidden", "true");
    openMenu.classList.remove("active");
    document.body.style.overflow = "";
  }
}
openMenu.addEventListener("click", ()=> showMenu(true));
closeMenu.addEventListener("click", ()=> showMenu(false));
menu.addEventListener("click", (e)=>{
  if (e.target.classList.contains("menu")) showMenu(false);
});
document.querySelectorAll(".menu__link").forEach(a=>{
  a.addEventListener("click", ()=> showMenu(false));
});

// ---------- LANGUAGE PICKER ----------
const langPicker = document.getElementById("langPicker");
const langToggle = document.getElementById("langToggle");
const langDropdown = document.getElementById("langDropdown");
const langOptions = document.querySelectorAll(".lang-option");

function setupLanguagePicker(){
  langToggle.addEventListener("click", (e)=>{
    e.stopPropagation();
    langDropdown.classList.toggle("show");
    langDropdown.setAttribute("aria-hidden", langDropdown.classList.contains("show") ? "false" : "true");
  });

  langOptions.forEach(opt=>{
    opt.addEventListener("click", (e)=>{
      e.stopPropagation();
      const lang = opt.dataset.lang;
      
      // Add spin animation
      langToggle.classList.add("spinning");
      setTimeout(()=> langToggle.classList.remove("spinning"), 600);
      
      // Update language
      setLang(lang);
      
      // Close dropdown
      langDropdown.classList.remove("show");
      langDropdown.setAttribute("aria-hidden", "true");
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e)=>{
    if (!langPicker.contains(e.target)){
      langDropdown.classList.remove("show");
      langDropdown.setAttribute("aria-hidden", "true");
    }
  });
}

// ---------- I18N / LANG SWITCH ----------
const LANG_KEY = "site_lang_v1";
const LANGS = ["en","ru","uz"];

const TRANSLATIONS = {
  en: {
    logo_text: "ABDULLOH TRADER",
    menu_big: "Learn continuously, grow endlessly.",
    menu_small: "© Abdulloh Trader, 2026. All rights reserved.",
    menu_col1_title: "Education",
    menu_col1_link1: "Format",
    menu_col1_link2: "Program",
    menu_col1_link3: "Plans",
    menu_col1_link4: "FAQ",
    menu_col2_title: "Media",
    menu_col2_link1: "Telegram",
    menu_col2_link2: "YouTube",
    menu_col2_link3: "Instagram",
    menu_col3_title: "Contacts",
    menu_col3_link1: "Contact",
    menu_col3_link2: "Reviews",
    // hero
    hero_h1: `Trading that <span class="accent">changes the rules</span>`,
    hero_p: `Professional crypto trader focused on <b>Bitcoin (BTC)</b> and <b>Ethereum (ETH)</b>. Structured execution, disciplined risk management, and 500+ students trained.`,
    pill1_bot: "Capital Base",
    pill2_bot: "Students",
    pill3_bot: "Primary Markets",
    cta_choose: "Choose a Plan",
    cta_join: "Join Telegram",
    note_text: "Trading involves risk. Past performance does not guarantee future results. Educational content only.",

    // format
    format_h2: "Education Format",
    format_card1_title: "Methodical materials",
    format_card1_text: `Structured text guides that cover everything needed for BTC/ETH trading: market structure, liquidity, risk, entries, invalidation.`,
    format_card2_title: "Video lessons",
    format_card2_text: `Detailed breakdown of each topic with real chart examples and execution logic.`,

    // program
    program_h2: "Training Program",
    block1_k: "BLOCK 1",
    block1_t: "Fundamentals & Smart Money",
    block1_s: "Market cycles • price states • structure • order flow",
    block1_list: `<li>Fundamental trading basics</li><li>Smart Money concept principles</li><li>Market cycles</li><li>Market structure (HH/HL, LH/LL)</li><li>Institutional order flow</li><li>Multi-timeframe sync</li>`,
    pricing_h2: "Available Plans",
    premium_name: "Premium",
    premium_btn: "Pay / Apply",
    premium_badge: "Most Popular",
    plan_mentorship: "1-on-1 mentorship",
    plan_journal: "Trade journal review",
    plan_priority: "Priority support",
    guarantee_basic: "30-day money-back guarantee",
    guarantee_advanced: "60-day money-back guarantee",
    guarantee_premium: "90-day money-back guarantee",


    // reviews
    reviews_h2: "Reviews",
    reviews_latest_title: "Latest Reviews",
    reviews_leave_title: "Leave a Review",
    review_name_label: "Full Name *",
    review_handle_label: "Telegram (optional)",
    review_rating_label: "Your Rating *",
    review_text_label: "Your Feedback * (min 20 chars)",
    review_proof_label: "I’m a student/client",
    review_submit_btn: "Submit",
    reviews_no_reviews: "No reviews yet.",    review_verified: "Verified",
    review_total_label: "total reviews",
    plan_live_sessions: "Live sessions",
    plan_community: "Community access",
    plan_video: "Video lessons",
    plan_text: "Text materials",
    plan_support: "24/7 support",
    plan_homework: "Homework review",
    plan_analytics: "BTC/ETH pairs analytics",
    days_30: "30 days",
    days_90: "90 days",
    contact_telegram_label: "Telegram",
    contact_message_label: "Message",
    contact_replace_links: "Replace links with real ones.",
    contact_bot_note: "We can connect this to Telegram bot later.",
    // faq
    faq_h2: "Frequently Asked Questions",
    faq_q1: "How do I get access after payment?",
    faq_a1: `After payment you fill a short form, then you receive login credentials and access to materials, plus Telegram community & live sessions schedule.`,
    faq_q2: "Who is this education for?",
    faq_a2: `For traders who want a structured BTC/ETH system: risk control, market structure, execution logic, and review.`,
    faq_q3: "Do you guarantee profits?",
    faq_a3: `No. Trading has risk. The program teaches process, discipline, and risk management — not profit promises.`,

    // contact
    contact_h2: "Contacts",
    contact_media_title: "Media",
    contact_message_title: "Message",
    contact_name_ph: "Your name",
    contact_handle_ph: "@username",
    contact_msg_ph: "Write your request...",
    contact_send_btn: "Send",

    // footer
    footer_text: "© Abdulloh Trader, 2026 • Educational only • Not financial advice",

    // messages
    messages_feedback_short: "Feedback must be at least 20 characters.",
    messages_review_added: "Thanks! Your review has been added.",

    // New keys for form labels
    form_name: "Name",
    form_telegram: "Telegram",
    form_message: "Message",
    labelText: "Full Name *",
  },

  ru: {
    logo_text: "ABDULLOH TRADER",
    menu_big: "Учись постоянно, развивайся бесконечно.",
    menu_small: "© Abdulloh Trader, 2026. Все права защищены.",
    menu_col1_title: "Обучение",
    menu_col1_link1: "Формат",
    menu_col1_link2: "Программа",
    menu_col1_link3: "Планы",
    menu_col1_link4: "FAQ",
    menu_col2_title: "Медиа",
    menu_col2_link1: "Telegram",
    menu_col2_link2: "YouTube",
    menu_col2_link3: "Instagram",
    menu_col3_title: "Контакты",
    menu_col3_link1: "Contact",
    menu_col3_link2: "Отзывы",
    hero_h1: `Трейдинг, который <span class="accent">меняет правила</span>`,

    hero_p: `Профессиональный крипто-трейдер, ориентированный на <b>Bitcoin (BTC)</b> и <b>Ethereum (ETH)</b>. Структурированное исполнение, дисциплинированное управление рисками, и 500+ обученных студентов.`,
    pill1_bot: "Капитал",
    pill2_bot: "Студенты",
    pill3_bot: "Основные рынки",
    cta_choose: "Выбрать план",
    cta_join: "Присоединиться в Telegram",
    note_text: "Торговля несет риск. Прошлые результаты не гарантируют будущих. Только образовательный контент.",

    format_h2: "Формат обучения",
    format_card1_title: "Методические материалы",
    format_card1_text: `Структурированные текстовые руководства по BTC/ETH: структура рынка, ликвидность, риск, входы, инвалидация.`,
    format_card2_title: "Видеоуроки",
    format_card2_text: `Подробный разбор тем с реальными примерами на графиках и логикой исполнения.`,

    program_h2: "Программа обучения",
    block1_k: "BLOCK 1",
    block1_t: "Основы и Smart Money",
    block1_s: "Циклы рынка • состояния цены • структура • поток ордеров",
    block1_list: `<li>Основы трейдинга</li><li>Принципы Smart Money</li><li>Циклы рынка</li><li>Структура рынка (HH/HL, LH/LL)</li><li>Институциональный поток ордеров</li><li>Синхронизация на таймфреймах</li>`,

    pricing_h2: "Доступные планы",
    premium_name: "Премиум",
    premium_btn: "Оплатить / Подать заявку",
    premium_badge: "Самый популярный",
    plan_mentorship: "Индивидуальное наставничество",
    plan_journal: "Проверка торговых журналов",
    plan_priority: "Приоритетная поддержка",
    guarantee_basic: "30-дневная гарантия возврата денег",
    guarantee_advanced: "60-дневная гарантия возврата денег",
    guarantee_premium: "90-дневная гарантия возврата денег",

    reviews_h2: "Отзывы",
    reviews_latest_title: "Последние отзывы",
    reviews_leave_title: "Оставить отзыв",
    review_name_label: "Полное имя *",
    review_handle_label: "Telegram (необязательно)",
    review_rating_label: "Ваша оценка *",
    review_text_label: "Ваш отзыв * (мин 20 символов)",
    review_proof_label: "Я студент/клиент",
    review_submit_btn: "Отправить",
    reviews_no_reviews: "Пока нет отзывов.",
    review_verified: "Проверено",
    review_total_label: "всего отзывов",
    plan_live_sessions: "Живые сессии",
    plan_community: "Доступ к сообществу",
    plan_video: "Видеоуроки",
    plan_text: "Текстовые материалы",
    plan_support: "Поддержка 24/7",
    plan_homework: "Проверка домашнего задания",
    plan_analytics: "Аналитика BTC/ETH",
    days_30: "30 дней",
    days_90: "90 дней",
    contact_telegram_label: "Telegram",
    contact_message_label: "Сообщение",
    contact_replace_links: "Замените ссылки на реальные.",
    contact_bot_note: "Позже мы сможем подключить это к боту Telegram.",

    faq_h2: "Часто задаваемые вопросы",
    faq_q1: `Как получить доступ после оплаты?`,
    faq_a1: `После оплаты вы заполняете короткую форму, затем получаете данные для входа и доступ к материалам, а также к сообществу в Telegram и расписанию живых сессий.`,
    faq_q2: `Для кого эта программа?`,
    faq_a2: `Для трейдеров, которые хотят структурированную систему BTC/ETH: контроль риска, структура рынка, логика исполнения и разборы.`,
    faq_q3: `Гарантируете ли вы прибыль?`,
    faq_a3: `Нет. Торговля связана с риском. Программа обучает процессу, дисциплине и управлению рисками — не обещает доходов.`,

    contact_h2: "Контакты",
    contact_media_title: "Медиа",
    contact_message_title: "Сообщение",
    contact_name_ph: "Ваше имя",
    contact_handle_ph: "@username",
    contact_msg_ph: "Напишите ваш запрос...",
    contact_send_btn: "Отправить",

    footer_text: "© Abdulloh Trader, 2026 • Только для обучения • Не является финансовой рекомендацией",

    messages_feedback_short: "Отзыв должен быть не менее 20 символов.",
    messages_review_added: "Спасибо! Ваш отзыв добавлен.",

    form_name: "Имя",
    form_telegram: "Telegram",
    form_message: "Сообщение",
    labelText: "Полное имя *",
  },

  uz: {
    logo_text: "ABDULLOH TRADER",
    menu_big: "Doimiy o'rganing, cheksiz rivojlaning.",
    menu_small: "© Abdulloh Trader, 2026. Barcha huquqlar himoyalangan.",
    menu_col1_title: "Ta'lim",
    menu_col1_link1: "Format",
    menu_col1_link2: "Dastur",
    menu_col1_link3: "Rejalar",
    menu_col1_link4: "FAQ",
    menu_col2_title: "Media",
    menu_col2_link1: "Telegram",
    menu_col2_link2: "YouTube",
    menu_col2_link3: "Instagram",
    menu_col3_title: "Kontaktlar",
    menu_col3_link1: "Kontakt",
    menu_col3_link2: "Sharhlar",
    hero_h1: `Treyding <span class="accent">qoidalarni o'zgartiradi</span>`,

    hero_p: `Professional kripto treyder, asosan <b>Bitcoin (BTC)</b> va <b>Ethereum (ETH)</b> ga e'tibor qaratadi. Tuzilgan ijro, intizomli xavf boshqaruvi va 500+ o'quvchi.`,
    pill1_bot: "Kapital bazasi",
    pill2_bot: "Talabalar",
    pill3_bot: "Asosiy bozorlar",
    cta_choose: "Rejani tanlang",
    cta_join: "Telegramga qo'shiling",
    note_text: "Savdo xavf tug'diradi. O'tgan natijalar kelajakni kafolatlamaydi. Faqat ta'lim maqsadida.",

    format_h2: "Ta'lim formati",
    format_card1_title: "Metodik materiallar",
    format_card1_text: `BTC/ETH bo'yicha kerakli hamma narsani qamrab oluvchi tuzilgan matnli qo'llanmalar: bozor tuzilishi, likvidlik, xavf, kirishlar, bekor qilish.`,
    format_card2_title: "Video darslar",
    format_card2_text: `Har bir mavzuni real grafik misollari va ijro mantiqi bilan batafsil tahlil.`,

    program_h2: "Trening dasturi",
    block1_k: "BLOCK 1",
    block1_t: "Asoslar & Smart Money",
    block1_s: "Bozor sikllari • narxa holatlari • tuzilma • order flow",
    block1_list: `<li>Trading asoslari</li><li>Smart Money prinsiplari</li><li>Bozor sikllari</li><li>Bozor tuzilishi (HH/HL, LH/LL)</li><li>Institutsional order flow</li><li>Ko'p vaqtchali sinxronizatsiya</li>`,

    pricing_h2: "Mavjud rejalar",
    premium_name: "Premium",
    premium_btn: "To'lash / Ariza yuborish",
    premium_badge: "Eng mashhur",
    plan_mentorship: "Bir-bir bilan o'qitish",
    plan_journal: "Savdo jurnalini tekshirish",
    plan_priority: "Prioritet qo'llab-quvvatlash",
    guarantee_basic: "30 kunlik pulni qaytarish kafolati",
    guarantee_advanced: "60 kunlik pulni qaytarish kafolati",
    guarantee_premium: "90 kunlik pulni qaytarish kafolati",

    reviews_h2: "Sharhlar",
    reviews_latest_title: "So'nggi sharhlar",
    reviews_leave_title: "Sharh qoldiring",
    review_name_label: "To'liq ismingiz *",
    review_handle_label: "Telegram (ixtiyoriy)",
    review_rating_label: "Sizning bahongiz *",
    review_text_label: "Fikringiz * (min 20 ta belgi)",
    review_proof_label: "Men talaba/mijozman",
    review_submit_btn: "Yuborish",
    reviews_no_reviews: "Hozircha sharhlar yo'q.",
    review_verified: "Tasdiqlangan",
    review_total_label: "umumiy sharh",
    plan_live_sessions: "Jonli sessiyalar",
    plan_community: "Jamoa kirishi",
    plan_video: "Video darslar",
    plan_text: "Matnli materiallar",
    plan_support: "24/7 qo'llab-quvvatlash",
    plan_homework: "Uy vazifasini tekshirish",
    plan_analytics: "BTC/ETH tahlili",
    days_30: "30 kun",
    days_90: "90 kun",
    contact_telegram_label: "Telegram",
    contact_message_label: "Xabar",
    contact_replace_links: "Ushbu havolalarni haqiqiy havolalar bilan almashtiring.",
    contact_bot_note: "Keyinchalik buni Telegram botiga ulab qo'yishimiz mumkin.",

    faq_h2: "Tez-tez so'raladigan savollar",
    faq_q1: `To'lovdan so'ng qanday qilib kirish olaman?`,
    faq_a1: `To'lovdan so'ng qisqa forma to'ldirasiz, keyin kirish ma'lumotlari va materiallarga kirish olasiz, shuningdek Telegram jamoasi va jonli sessiyalar jadvali.`,
    faq_q2: `Bu ta'lim kim uchun?`,
    faq_a2: `BTC/ETH uchun strukturaviy tizimni xohlaydigan treyderlar: xavfni boshqarish, bozor tuzilishi, ijro mantiqi va tahlillar.`,
    faq_q3: `Foyda kafolatlanadimi?`,
    faq_a3: `Yo'q. Savdo xavfga ega. Dastur jarayon, intizom va xavf boshqaruvini o'rgatadi — foydani kafolatlamaydi.`,

    contact_h2: "Kontaktlar",
    contact_media_title: "Media",
    contact_message_title: "Xabar",
    contact_name_ph: "Ismingiz",
    contact_handle_ph: "@username",
    contact_msg_ph: "So'rovingizni yozing...",
    contact_send_btn: "Yuborish",

    footer_text: "© Abdulloh Trader, 2026 • Faqat ta'lim maqsadida • Moliyaviy maslahat emas",

    messages_feedback_short: "Fikr kamida 20 ta belgidan iborat bo'lishi kerak.",
    messages_review_added: "Rahmat! Fikringiz qo'shildi.",

    form_name: "Ism",
    form_telegram: "Telegram",
    form_message: "Xabar",
    labelText: "To'liq ism *",
  }
};

function t(key){
  const lang = getLang();
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS['en'][key] || key;
}

function applyTranslations(){
  // basic replacements by selector -> key
  const map = [
    ['.logo__text','logo_text'],
    ['.menu__big','menu_big'],
    ['.menu__small','menu_small'],
    ['.menu__cols .menu__col:nth-of-type(1) .menu__title','menu_col1_title'],
    ['.menu__cols .menu__col:nth-of-type(1) .menu__link:nth-of-type(1)','menu_col1_link1'],
    ['.menu__cols .menu__col:nth-of-type(1) .menu__link:nth-of-type(2)','menu_col1_link2'],
    ['.menu__cols .menu__col:nth-of-type(1) .menu__link:nth-of-type(3)','menu_col1_link3'],
    ['.menu__cols .menu__col:nth-of-type(1) .menu__link:nth-of-type(4)','menu_col1_link4'],
    ['.menu__cols .menu__col:nth-of-type(2) .menu__title','menu_col2_title'],
    ['.menu__cols .menu__col:nth-of-type(2) .menu__link:nth-of-type(1)','menu_col2_link1'],
    ['.menu__cols .menu__col:nth-of-type(2) .menu__link:nth-of-type(2)','menu_col2_link2'],
    ['.menu__cols .menu__col:nth-of-type(2) .menu__link:nth-of-type(3)','menu_col2_link3'],
    ['.menu__cols .menu__col:nth-of-type(3) .menu__title','menu_col3_title'],
    ['.menu__cols .menu__col:nth-of-type(3) .menu__link:nth-of-type(1)','menu_col3_link1'],
    ['.menu__cols .menu__col:nth-of-type(3) .menu__link:nth-of-type(2)','menu_col3_link2'],
    ['.hero__left h1','hero_h1'],
    ['.hero__left .p','hero_p'],
    ['#format .h2','format_h2'],
    ['#format .card--icon:nth-of-type(1) .card__title','format_card1_title'],
    ['#format .card--icon:nth-of-type(1) .card__text','format_card1_text'],
    ['#format .card--icon:nth-of-type(2) .card__title','format_card2_title'],
    ['#format .card--icon:nth-of-type(2) .card__text','format_card2_text'],
    ['#program .h2','program_h2'],
    ['#program .progItem:nth-of-type(1) .progItem__k','block1_k'],
    ['#program .progItem:nth-of-type(1) .progItem__t','block1_t'],
    ['#program .progItem:nth-of-type(1) .progItem__s','block1_s'],
    ['#program .progBody .list','block1_list'],
    ['#pricing .h2','pricing_h2'],
    ['#pricing .plan:nth-of-type(3) .plan__name','premium_name'],
    ['#pricing .plan:nth-of-type(3) .plan__btn','premium_btn'],
    ['#pricing .plan:nth-of-type(3) .plan__badge','premium_badge'],
    ['#reviews .headRow h2','reviews_h2'],
    ['#reviews .card:nth-of-type(1) .card__title','reviews_latest_title'],
    ['#reviews .card:nth-of-type(2) .card__title','reviews_leave_title'],
    ['#reviewForm label.reviewFormLabel:nth-of-type(1) .labelText','review_name_label'],
    ['#reviewForm label.reviewFormLabel:nth-of-type(2) .labelText','review_handle_label'],
    ['#reviewForm .field .label','review_rating_label'],
    ['#reviewForm label.reviewFormLabel:nth-of-type(3) .labelText','review_text_label'],
    ['#reviewForm .check','review_proof_label'],
    ['#reviewForm button[type="submit"], #reviewForm .btn','review_submit_btn'],
    ['#faq .h2','faq_h2'],
    ['#faq .faqItem:nth-of-type(1) .faqQ span:first-child','faq_q1'],
    ['#faq .faqItem:nth-of-type(1) .faqA','faq_a1'],
    ['#faq .faqItem:nth-of-type(2) .faqQ span:first-child','faq_q2'],
    ['#faq .faqItem:nth-of-type(2) .faqA','faq_a2'],
    ['#faq .faqItem:nth-of-type(3) .faqQ span:first-child','faq_q3'],
    ['#faq .faqItem:nth-of-type(3) .faqA','faq_a3'],
    ['#contact .h2','contact_h2'],
    ['#contact .card:nth-of-type(1) .card__title','contact_media_title'],
    ['#contact .card:nth-of-type(2) .card__title','contact_message_title'],
    ['.note','note_text'],
    ['#pricing .plan:nth-of-type(1) .pill__bot','pill1_bot'],
    ['#pricing .plan:nth-of-type(2) .plan__check:nth-of-type(1)',''],
    ['#reviews .mini','reviews_no_reviews'],
    ['.footer','footer_text']
  ];

  map.forEach(([sel,key])=>{
    const el = document.querySelector(sel);
    if (!el || !key) return;
    el.innerHTML = t(key);
  });

  // hero buttons
  const btnChoose = document.querySelector('.hero__cta a.btn');
  const btnJoin = document.querySelector('.hero__cta a.btn.btn--ghost');
  if (btnChoose) btnChoose.textContent = t('cta_choose');
  if (btnJoin) btnJoin.textContent = t('cta_join');

  // pills
  const pill1 = document.querySelector('.pill:nth-of-type(1) .pill__bot');
  const pill2 = document.querySelector('.pill:nth-of-type(2) .pill__bot');
  const pill3 = document.querySelector('.pill:nth-of-type(3) .pill__bot');
  if (pill1) pill1.textContent = t('pill1_bot');
  if (pill2) pill2.textContent = t('pill2_bot');
  if (pill3) pill3.textContent = t('pill3_bot');

  // review form placeholders and labels
  const nameLabel = document.querySelector('#reviewForm label.reviewFormLabel:nth-of-type(1) .labelText');
  if (nameLabel) nameLabel.textContent = t('review_name_label');
  const handleLabel = document.querySelector('#reviewForm label.reviewFormLabel:nth-of-type(2) .labelText');
  if (handleLabel) handleLabel.textContent = t('review_handle_label');
  const ratingLabel = document.querySelector('#reviewForm .field .label');
  if (ratingLabel) ratingLabel.textContent = t('review_rating_label');
  const textLabel = document.querySelector('#reviewForm label.reviewFormLabel:nth-of-type(3) .labelText');
  if (textLabel) textLabel.textContent = t('review_text_label');
  const checkLabel = document.querySelector('#reviewForm .checkText');
  if (checkLabel) checkLabel.textContent = t('review_proof_label');

  const submitBtn = document.querySelector('#reviewForm button[type="submit"]');
  if (submitBtn) submitBtn.textContent = t('review_submit_btn');

  // total reviews label
  const totalReviewsLabel = document.querySelector('.totalReviewsLabel');
  if (totalReviewsLabel) totalReviewsLabel.textContent = t('review_total_label');

  // placeholders for contact form
  const contactName = document.querySelector('#contact form input[placeholder]');
  if (contactName) contactName.placeholder = t('contact_name_ph');
  const contactHandle = document.querySelector('#contact form input[placeholder]:nth-of-type(2)');
  // the simple approach below - set all inputs placeholders in contact card
  document.querySelectorAll('#contact form input').forEach((inp, idx)=>{
    if (idx === 0) inp.placeholder = t('contact_name_ph');
    if (idx === 1) inp.placeholder = t('contact_handle_ph');
  });
  const contactMsg = document.querySelector('#contact form textarea');
  if (contactMsg) contactMsg.placeholder = t('contact_msg_ph');
  const contactBtn = document.querySelector('#contact form .btn');
  if (contactBtn) contactBtn.textContent = t('contact_send_btn');

  // Contact form labels
  const contactFormLabels = document.querySelectorAll('#contact form .reviewFormLabel .labelText');
  if (contactFormLabels[0]) contactFormLabels[0].textContent = t('form_name');
  if (contactFormLabels[1]) contactFormLabels[1].textContent = t('form_telegram');
  if (contactFormLabels[2]) contactFormLabels[2].textContent = t('form_message');

  // Contact form placeholders
  const contactInputs = document.querySelectorAll('#contact form input');
  const contactTA = document.querySelector('#contact form textarea');
  
  if (contactInputs[0]) contactInputs[0].placeholder = t('contact_name_ph');
  if (contactInputs[1]) contactInputs[1].placeholder = t('contact_handle_ph');
  if (contactTA) contactTA.placeholder = t('contact_msg_ph');

  // Review form in card
  const reviewNameLabel = document.querySelector('#reviewForm label.reviewFormLabel:nth-of-type(1) .labelText');
  if (reviewNameLabel) reviewNameLabel.textContent = t('review_name_label');
  
  // Mini text in contact card
  const contactMiniTexts = document.querySelectorAll('#contact .mini');
  if (contactMiniTexts[0]) contactMiniTexts[0].textContent = t('contact_replace_links');
  if (contactMiniTexts[1]) contactMiniTexts[1].textContent = t('contact_bot_note');

  // set menu small/big already handled above
}

function getLang(){
  const saved = localStorage.getItem(LANG_KEY);
  if (saved && LANGS.includes(saved)) return saved;
  const nav = navigator.language || navigator.userLanguage || 'en';
  if (nav.startsWith('ru')) return 'ru';
  if (nav.startsWith('uz')) return 'uz';
  return 'en';
}

function setLang(lang){
  if (!LANGS.includes(lang)) return;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  
  // Update language picker display
  const codeMap = {en: 'EN', ru: 'РУ', uz: 'UZ'};
  const langCode = document.querySelector('.lang-code');
  if (langCode) langCode.textContent = codeMap[lang] || 'EN';
  
  // Update active state
  langOptions.forEach(opt=>{
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
  
  applyTranslations();
}

// wire buttons - removed old langBtn listeners

// ---------- FAQ ----------
document.querySelectorAll(".faqItem .faqQ").forEach(q=>{
  q.addEventListener("click", ()=>{
    const item = q.closest(".faqItem");
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faqItem").forEach(x=> x.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
    // update symbols
    document.querySelectorAll(".faqItem .faqBtn").forEach(b=> b.textContent = "+");
    const btn = q.querySelector(".faqBtn");
    btn.textContent = item.classList.contains("open") ? "—" : "+";
  });
});

// ---------- REVIEWS ----------
const KEY_REVIEWS = "abd_reviews_all_sancho_v1";
const seed = [
  { name:"Akmal R.", handle:"@akmaltrader", rating:5, text:"Clear system and strict risk control. The biggest change is consistency.", proof:true, date:"2026-01-10" },
  { name:"Sardor T.", handle:"", rating:5, text:"Professional approach. No hype. BTC/ETH structure finally became clear.", proof:true, date:"2026-01-18" },
  { name:"Bekzod K.", handle:"@bekzodfx", rating:4, text:"Realistic expectations and disciplined execution. Solid program.", proof:false, date:"2026-01-25" }
];

const $ = (s)=>document.querySelector(s);

function loadJson(key, fallback){
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
  catch { return fallback; }
}
function saveJson(key, val){ localStorage.setItem(key, JSON.stringify(val)); }
function escapeHtml(str){
  return String(str).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}
function starsText(n){
  n = Math.max(1, Math.min(5, Number(n||5)));
  return "★★★★★".slice(0,n) + "☆☆☆☆☆".slice(0,5-n);
}

(function init(){
  const existing = loadJson(KEY_REVIEWS, null);
  if (!existing) saveJson(KEY_REVIEWS, seed);
})();

// REVIEWS PAGINATION
let currentReviewPage = 0;
const REVIEWS_PER_PAGE = 5;

function renderReviews(){
  const list = $("#reviewsList");
  const avgEl = $("#avgRating");
  const starsEl = $("#avgStars");
  const totalEl = $("#totalReviews");
  const loadMoreContainer = $("#loadMoreContainer");
  const loadMoreBtn = $("#loadMoreBtn");

  const reviews = loadJson(KEY_REVIEWS, []);
  reviews.sort((a,b)=> (b.date||"").localeCompare(a.date||""));

  const total = reviews.length;
  totalEl.textContent = String(total);

  if (!total){
    avgEl.textContent = "—";
    starsEl.textContent = "☆☆☆☆☆";
    list.innerHTML = `<div class="mini">${t('reviews_no_reviews')}</div>`;
    if (loadMoreContainer) loadMoreContainer.style.display = "none";
    return;
  }

  const avg = reviews.reduce((s,r)=> s + Number(r.rating||0), 0) / total;
  avgEl.textContent = avg.toFixed(1);
  starsEl.textContent = starsText(Math.round(avg));

  // Show pagination
  currentReviewPage = 0;
  displayReviewsPage(reviews, list, loadMoreContainer, loadMoreBtn);
}

function displayReviewsPage(allReviews, listContainer, loadMoreContainer, loadMoreBtn){
  const start = currentReviewPage * REVIEWS_PER_PAGE;
  const end = start + REVIEWS_PER_PAGE;
  const pageReviews = allReviews.slice(start, end);

  if (currentReviewPage === 0){
    listContainer.innerHTML = "";
  }

  pageReviews.forEach(r=>{
    const meta = [r.handle?.trim() ? r.handle.trim() : "", r.proof ? t('review_verified') : "", r.date || ""].filter(Boolean).join(" • ");
    const div = document.createElement("div");
    div.className = "review";
    div.innerHTML = `
      <div class="review__top">
        <div>
          <div class="review__name">${escapeHtml(r.name || "Anonymous")}</div>
          <div class="review__meta">${escapeHtml(meta)}</div>
        </div>
        <div class="review__stars">${starsText(r.rating || 5)}</div>
      </div>
      <div class="review__text">${escapeHtml(r.text || "")}</div>
    `;
    listContainer.appendChild(div);
  });

  // Show/hide load more button
  const hasMore = end < allReviews.length;
  if (loadMoreContainer){
    loadMoreContainer.style.display = hasMore ? "block" : "none";
  }

  if (loadMoreBtn && hasMore){
    // Clear previous listener
    loadMoreBtn.onclick = null;
    
    // Add new listener
    loadMoreBtn.onclick = (e)=>{
      e.preventDefault();
      currentReviewPage++;
      // Get fresh references
      const freshLoadMoreContainer = $("#loadMoreContainer");
      const freshLoadMoreBtn = $("#loadMoreBtn");
      displayReviewsPage(allReviews, listContainer, freshLoadMoreContainer, freshLoadMoreBtn);
      // Scroll to reviews
      setTimeout(()=> listContainer.scrollIntoView({behavior: 'smooth', block: 'start'}), 100);
    };
  }
}

function initStarInput(){
  const wrap = $("#starInput");
  const hidden = $("#rating");
  let current = Number(hidden.value || 5);

  function draw(){
    wrap.innerHTML = "";
    for (let i=1;i<=5;i++){
      const b = document.createElement("button");
      b.type="button";
      b.className = "starBtn" + (i<=current ? " isOn" : "");
      b.textContent = "★";
      b.addEventListener("click", ()=>{
        current = i;
        hidden.value = String(i);
        draw();
      });
      wrap.appendChild(b);
    }
  }
  draw();
}

function initReviewForm(){
  const form = $("#reviewForm");
  if (!form) return;
  const msg = $("#reviewMsg");

  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    msg.textContent = "";

    try {
      const hp = form.elements["website"]?.value || "";
      if (hp && hp.trim().length) return;

      const name = form.elements["name"]?.value?.trim() || "";
      const handle = form.elements["handle"]?.value?.trim() || "";
      const rating = Number(form.elements["rating"]?.value || 5);
      const text = form.elements["text"]?.value?.trim() || "";
      
      // Safe checkbox access
      const proofEl = form.querySelector('input[name="proof"]');
      const proof = proofEl ? !!proofEl.checked : false;

      if (!name) {
        msg.textContent = "Name is required";
        return;
      }

      if (text.length < 20){
        msg.textContent = t('messages_feedback_short');
        return;
      }

      const reviews = loadJson(KEY_REVIEWS, []);
      reviews.push({
        name,
        handle,
        rating: Math.max(1, Math.min(5, rating)),
        text,
        proof,
        date: new Date().toISOString().slice(0,10)
      });
      saveJson(KEY_REVIEWS, reviews);

      form.reset();
      $("#rating").value = "5";
      initStarInput();

      msg.textContent = t('messages_review_added');
      
      const reviewsList = $("#reviewsList");
      renderReviews();
      
      setTimeout(()=> {
        const firstReview = reviewsList.querySelector('.review');
        if (firstReview) {
          firstReview.style.animation = 'none';
          setTimeout(() => firstReview.style.animation = 'fadeInUp 0.5s ease-out', 10);
        }
      }, 100);
    } catch (err) {
      console.error("Form error:", err);
      msg.textContent = "An error occurred. Please try again.";
    }
  });
}

// ---------- SUCCESS STORIES ----------
const STUDENT_STORIES = [
  {
    name: "Akbar Khodjaev",
    initial: "A",
    role: "Trader • Uzbekistan",
    story: "Started with small account, followed the system strictly. Now making consistent profits. The risk management taught here saved me from big losses.",
    profit: "+285%",
    trades: "45 wins"
  },
  {
    name: "Sardor Rakhimov",
    initial: "S",
    role: "Crypto Investor • Moscow",
    story: "Best education I found on BTC/ETH. Clear entry/exit logic. Not about hype, it's about discipline and smart execution.",
    profit: "+156%",
    trades: "32 wins"
  },
  {
    name: "Dilshod Mirza",
    initial: "D",
    role: "Active Trader • Dubai",
    story: "The structure knowledge changed everything. I was trading blind before. Now I understand WHY price moves.",
    profit: "+412%",
    trades: "67 wins"
  },
  {
    name: "Fatima Al-Rashid",
    initial: "F",
    role: "Day Trader • Qatar",
    story: "Professional approach. No false promises. I learned actual market structure and order flow concepts.",
    profit: "+198%",
    trades: "41 wins"
  },
  {
    name: "Rustam Sattarov",
    initial: "R",
    role: "Portfolio Manager • Kazakhstan",
    story: "Multi-timeframe analysis is gold. Applied it to my fund. Students seeing real results now.",
    profit: "+521%",
    trades: "103 wins"
  },
  {
    name: "Maya Uzbekova",
    initial: "M",
    role: "Swing Trader • Tashkent",
    story: "Systematic approach works. Stopped emotional trading. Following the program for 6 months - best decision.",
    profit: "+267%",
    trades: "38 wins"
  }
];

function renderStories(){
  const storiesGrid = document.getElementById('storiesGrid');
  if (!storiesGrid) return;
  
  storiesGrid.innerHTML = STUDENT_STORIES.map(story=> `
    <div class="story-card">
      <div class="story-card__avatar">${story.initial}</div>
      <div class="story-card__name">${story.name}</div>
      <div class="story-card__role">${story.role}</div>
      <div class="story-card__text">"${story.story}"</div>
      <div class="story-card__stats">
        <div class="story-stat">
          <div class="story-stat__value">${story.profit}</div>
          <div class="story-stat__label">Profit</div>
        </div>
        <div class="story-stat">
          <div class="story-stat__value">${story.trades}</div>
          <div class="story-stat__label">Wins</div>
        </div>
      </div>
      <div class="story-card__badge">✓ Verified Student</div>
    </div>
  `).join('');
}

renderStories();

// ---------- TRAINING COURSES ----------
const TRAINING_COURSES = [
  {
    number: "01",
    title: "Fundamentals & Smart Money",
    duration: "4 weeks",
    lessons: 12,
    topics: ["Market Cycles", "Price States", "Structure", "Order Flow"],
    icon: "📊",
    color: "#7fb2ff"
  },
  {
    number: "02",
    title: "Liquidity",
    duration: "3 weeks",
    lessons: 8,
    topics: ["Liquidity Pools", "Sweeps", "Stop-Hunts", "Supply/Demand"],
    icon: "💧",
    color: "#53c56b"
  },
  {
    number: "03",
    title: "POI Zones",
    duration: "3 weeks",
    lessons: 10,
    topics: ["Demand Zones", "Supply Zones", "OB", "FVG"],
    icon: "🎯",
    color: "#ff8a3d"
  },
  {
    number: "04",
    title: "Intermarket Analysis",
    duration: "2 weeks",
    lessons: 7,
    topics: ["BTC Dominance", "ETH/BTC Ratio", "Correlations", "Risk"],
    icon: "🔗",
    color: "#ff4f93"
  },
  {
    number: "05",
    title: "Openings & Sessions",
    duration: "2 weeks",
    lessons: 6,
    topics: ["Asia Session", "London Open", "NY Session", "Volatility"],
    icon: "🌍",
    color: "#ffd700"
  }
];

function renderCourses(){
  const coursesGrid = document.getElementById('coursesGrid');
  if (!coursesGrid) return;
  
  coursesGrid.innerHTML = TRAINING_COURSES.map((course, idx) => `
    <div class="course-card" style="--course-color: ${course.color}">
      <div class="course-card__header">
        <div class="course-card__number">${course.number}</div>
        <div class="course-card__icon">${course.icon}</div>
      </div>
      <div class="course-card__content">
        <h3 class="course-card__title">${course.title}</h3>
        <div class="course-card__meta">
          <div class="course-meta">
            <span class="course-meta__label">Duration:</span>
            <span class="course-meta__value">${course.duration}</span>
          </div>
          <div class="course-meta">
            <span class="course-meta__label">Lessons:</span>
            <span class="course-meta__value">${course.lessons}</span>
          </div>
        </div>
        <div class="course-card__topics">
          ${course.topics.map(topic => `<span class="course-tag">${topic}</span>`).join('')}
        </div>
      </div>
      <div class="course-card__footer">
        <button class="btn btn--sm">View Course</button>
      </div>
    </div>
  `).join('');
}

renderCourses();

initStarInput();
renderReviews();
initReviewForm();
setupLanguagePicker();
setLang(getLang());
