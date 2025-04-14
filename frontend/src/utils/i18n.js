// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  // Passes the i18n instance down to react-i18next
  .use(initReactI18next)
  .init({
    lng: 'bg', // default language
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          about: "ABOUT",
          us: "US",
          contactUs: "CONTACT",
          why: "WHY",
          chooseUs: "CHOOSE US",
          emailHeadline: "Get 20% off",
          emailPara: "Get recommendations to manage your plane",
          bestEmail: "Your best email",
          subscribe: "SUBSCRIBE",
          logoMoto: "Find an aircraft for you. Save time from commercial airports.",
          company: "COMPANY",
          home: "Home",
          homeCaps: "HOME",
          aboutUs: "About us",
          aboutCaps: "ABOUT US",
          delivery: "Delivery",
          privacyPolicy: "Privacy policy",
          getInTouch: "GET IN TOUCH",
          copyright: "Copyright 2025@ jets360.com - All Right Reserved",
          bestSellerCaps: "BEST SELLER",
          best: "MOST",
          sellers: "POPULAR",
          latestArrivals: "latest arrivals",
          shopNow: "SHOP NOW",
          freeQuote: "Call for a free quote.",
          cart: "CART",
          total: "TOTAL",
          subtotal: "Subtotal",
          shippingFee: "Shiping fee",
          total: "Total",
          latest: "Latest",
          collections: "Collections",
          collectionsCaps: "COLLECTIONS",
          aircraftForYou: "Find the aircraft that will serve you.",
          contact: "Contact",
          contactCaps: "CONTACT",
          myProfile: "My Profile",
          orders: "Orders",
          logout: "Logout",
          relatedCaps: "RELATED",
          productsCaps: "",
          yourCaps: "YOUR",
          cartCaps: "CART",
          proceedToCheckoutCaps: "PROCEED TO CHECKOUT",
          allCaps: "ALL",
          manufacturersCaps: "MANUFACTURERS",

          sortByRelevance: "Sort by: Relevance",
          sortByPriceLowHigh: "Sort by price: Low to High",
          sortByPriceHighLow: "Sort by: High to low",
          filtersCaps: "FILTERS",
          categoriesCaps: "CATEGORIES",
          category1: "Category 1",
          category2: "Category 2",
          category3: "Category 3",
          typeCaps: "TYPE",
          subCategory1: "Subcategory 1",
          subCategory2: "Subcategory 2",
          subCategory3: "Subcategory 3",
          seats: "SEATS",
          manufacturer: "MANUFACTURER",

          store: "Store",
          streetAddress: "11 Balkan Street",
          cityAddress: "1303 Sofia, Bulgaria",
          phoneNumber: "Tel (415) 123-7823",
          careers: "Careers",
          careersParagraph: "Learn more about our team and available jobs.",
          exploreJobs: "Explore Jobs",

          // Login.jsx
          'Sign Up': "Sign Up",
          'Login': "Login",
          name: 'Name',
          email: 'Email',
          password: "Password",
          forgottenPassword: "Forgot your password?",
          createAccount: "Create an account",
          loginHere: "Login Here",
          checkEmailSuccess: "Check your email for a reset link",
          emailError: "An error occurred. Please try again.",

          Quantity: "Quantity",
          Size: "Size",
          Date: "Date",
          Payment: "Payment",
          COD: 'Cash on delivery',
          'Order Placed': "Order Placed",
          'Packing': "Packing",
          'Shipped': "Shipped",
          'Out for delivery': "Out for delivery",
          'Delivered': "Delivered",
          trackOrder: "Track Order",

          deliveryCaps: "DELIVERY",
          informationCaps: "INFORMATION",
          lastName: "Last name",
          street: "Street",
          city: "City",
          state: "State",
          zipcode: "Zipcode",
          country: "Country",
          phone: "Phone",
          paymentCaps: "PAYMENT",
          methodCaps: "METHOD",
          CODCaps: "CASH ON DELIVERY",
          placeOrderCaps: "PLACE ORDER",

          //About us
          aboutUsPara1: "Every flight starts with trust and passion. We know your time is valuable—skip the airport crowds and enjoy the ease of private aviation.",
          aboutUsPara2: "Our hand-picked aircraft meet strict standards for quality and transparency, and our expert team is here to guide you every step of the way.",
          aboutUsPara3: "More than just an airplane dealer, we’re your partner in making aviation dreams a reality.",

          ourMisson: "Our Mission",

          uspHeadline1: "Hand-Picked Excellence",
          usp1: "Every aircraft in our inventory is rigorously evaluated for safety, performance, and luxury. We conduct thorough inspections to ensure each jet not only meets but exceeds industry standards, giving you confidence in your investment.",
          uspHeadline2: "Tailored Expertise",
          usp2: "Our seasoned professionals work one-on-one with you to understand your unique aviation needs. We offer clear, personalized guidance at every step—from initial consultation to final acquisition—ensuring a perfect match for your lifestyle and business.",
          uspHeadline3: "Transparent, Time-Saving Process",
          usp3: "We streamline every phase of your purchase with straightforward procedures and complete transparency. By cutting out unnecessary bureaucracy, we save you valuable time and provide a hassle-free, efficient experience from decision to takeoff.",


          //OurPolicy.jsx
          policyHeadline1: "Curated Collection of Premium Jets",
          policy1: "Every aircraft listed is vetted for quality and reliability, ensuring peace of mind and a premium buying experience.",

          policyHeadline2: "Personalized, Expert Guidance",
          policy2: "Benefit from a smooth, informed process, making their investment decision easier and more secure.",

          policyHeadline3: "Transparent & Seamless Transaction Process",
          policy3: "We ensure every transaction is handled with utmost clarity, trusted financing solutions, and robust after-sales support.",


          //Hero.jsx
          takeALookAt: "Take a look at",
          theLatest: "THE LATEST",
          jets: "Jets",



          // AccountManagement.jsx
          "myAccount": "My Account",
          "username": "Username",
          "email": "Email",
          "changeEmail": "Change Email",
          "currentPassword": "Current Password",
          "newEmail": "New Email",
          "updateEmail": "Update Email",
          "changePassword": "Change Password",
          "newPassword": "New Password",
          "confirmNewPassword": "Confirm New Password",
          "updatePassword": "Update Password",
          "fillAllFieldsEmail": "Please fill in all fields for email update.",
          "fillAllFieldsPassword": "Please fill in all fields for password update.",
          "passwordsDoNotMatch": "New passwords do not match.",
          "errorFetchingProfile": "Error fetching profile",
          "errorUpdatingEmail": "Error updating email",
          "errorUpdatingPassword": "Error updating password",

          // ContactForm.jsx
          "contact_us": "Contact Us",
          "name": "Name",
          "email": "Email",
          "phone": "Phone Number",
          "message": "Message",
          "send": "Send",
          "email_sent_success": "Email sent successfully!",
          "error_sending_email": "Error sending email.",

          // OfferButton.jsx
          "free_offer": "Free Offer",
          "hide_form": "Hide form",

          // Product.jsx
          "addToCart": "ADD TO CART",
          "priceDetail": "The price is for a decorative replica at 1/200 scale.",
          "freeQuote": "Contact us for a free quote.",

          // ResetPassword.jsx
          "resetPassword": "Reset Password",
          "confirmPassword": "Confirm Password",
          "newPassword": "New Password",

          //Product.jsx
          "productAddedToCart": "Product added to cart",

        },
      },
      bg: {
        translation: {
          about: "ЗА",
          us: "НАС",
          contactUs: "СВЪРЖЕТЕ СЕ С",
          why: "ЗАЩО",
          chooseUs: "ДА ИЗБЕРЕТЕ НАС",
          emailHeadline: "Вземете 20% отстъпка",
          emailPara: "Ще ви изпращаме информация как да поддържате самолета си.",
          bestEmail: "Най-добър email",
          subscribe: "Абонирайте се",
          logoMoto: "Намерете самолета за вас. Спестете време от летищата.",
          company: "КОМПАНИЯ",
          home: "Начало",
          homeCaps: "НАЧАЛО",
          aboutUs: "За нас",
          aboutCaps: "ЗА НАС",
          delivery: "Доставка",
          privacyPolicy: "Поверителност",
          getInTouch: "Свържете се с нас",
          copyright: "Copyright 2025@ jets360.com - Всички права запазени",
          bestSellerCaps: "НАЙ-ПРОДАВАНИ",
          best: "НАЙ-",
          sellers: "ПОПУЛЯРНИ",
          latestArrivals: "Най-нови придобивки",
          shopNow: "КУПИ СЕГА",
          freeQuote: "Обадете се за безплатна оферта",
          cart: "ОБЩО",
          total: "В КОЛИЧКАТА",
          subtotal: "Цена за всички продукти",
          shippingFee: "Доставка",
          totalAmmount: "Общо за плащане",
          latest: "Последни",
          collections: "Придобивки",
          collectionsCaps: "КОЛЕКЦИИ",
          aircraftForYou: "Самолет, който ще ви служи.",
          contact: "Контакти",
          contactCaps: "КОНТАКТИ",
          myProfile: "Моят профил",
          orders: "Поръчки",
          logout: "Излизане от акаунта",
          relatedCaps: "ПОДОБНИ",
          productsCaps: "",
          yourCaps: "ВАШАТА",
          cartCaps: "КОЛИЧКА",
          proceedToCheckoutCaps: "Продължете към поръчка",
          allCaps: "ВСИЧКИ",
          manufacturersCaps: "ПРОИЗВОДИТЕЛИ",

          sortByRelevance: "Сортиране: по подразбиране",
          sortByPriceLowHigh: "Цена: Ниска към висока",
          sortByPriceHighLow: "Цена: Висока към ниска",
          filtersCaps: "ФИЛТРИ",
          categoriesCaps: "КАТЕГОРИИ",
          category1: "Категория 1",
          category2: "Категория 2",
          category3: "Категория 3",
          typeCaps: "ТИП",
          subCategory1: "Подкатегория 1",
          subCategory2: "Подкатегория 2",
          subCategory3: "Подкатегория 3",
          seats: "МЕСТА",
          manufacturer: "ПРОИЗВОДИТЕЛ",

          store: "Магазин",
          streetAddress: "ул. „Балкан“ 11",
          cityAddress: "1303 София, България",
          phoneNumber: "Тел. +359 89 432 5917",
          careers: "Кариери",
          careersParagraph: "Вижте повече за екипа и свободни места за работа.",
          exploreJobs: "Разгледайте Работните Места",

          // Login.jsx
          'Sign Up': "Регистрация",
          'Login': "Вход",
          name: "Име",
          email: 'Имейл',
          password: "Парола",
          forgottenPassword: "Забравена парола?",
          createAccount: "Създайте акаунт",
          loginHere: "Влезте в акаунта си",
          checkEmailSuccess: "Проверете имейла си за линк за възстановяване на паролата",
          emailError: "Възникна грешка. Моля, опитайте отново.",

          Quantity: "Брой",
          Size: "Размер",
          Date: "Дата",
          Payment: "Метод за плащане",
          COD: "Плащане при доставка",
          'Order Placed': "Направена поръчка",
          'Packing': "Опакова се",
          'Shipped': "Поръчката е изпратена",
          'Out for delivery': "Доставя се от куриер",
          'Delivered': "Доставена",
          trackOrder: "Проследяване",

          deliveryCaps: "ИНФОРМАЦИЯ ЗА",
          informationCaps: "ДОСТАВКА",
          lastName: "Фамилия",
          street: "Улица",
          city: "Град",
          state: "Област",
          zipcode: "Пощенски код",
          country: "Държава",
          phone: "Телефон",
          paymentCaps: "МЕТОД ЗА",
          methodCaps: "ПЛАЩАНЕ",
          CODCaps: "ПЛАЩАНЕ ПРИ ДОСТАВКА",
          placeOrderCaps: "НАПРАВЕТЕ ПОРЪЧКА",

          //За нас
          aboutUsPara1: "Всеки полет започва с доверие и страст. Знаем, че времето ви е ценно - избягвайте тълпите в летищата и се насладете на удобството на частната авиация.",
          aboutUsPara2: "Нашите внимателно подбрани самолети отговарят на строги стандарти за качество и прозрачност, а нашият екип от експерти е тук, за да ви води на всяка стъпка от процеса.",
          aboutUsPara3: "Повече от обикновен търговец на самолети, ние сме вашият партньор в спестяването на време.",

          ourMisson: "Мисия",

          uspHeadline1: "Редовна инспекция",
          usp1: "Всеки самолет от нашия инвентар е подложен на обстойни проверки, за да сме сигурни, че не само отговаря, но и надминава стандартите в индустрията, предоставяйки ви увереност във вашата инвестиция.",
          uspHeadline2: "Персонализиран процес",
          usp2: "Нашите опитни професионалисти работят индивидуално с вас, за да разберат вашите уникални нужди. Предоставяме ясни и персонализирани насоки на всяка стъпка – от първоначалната консултация до окончателната покупка – гарантирайки идеално съчетание с вашия начин на живот и бизнес.",
          uspHeadline3: "Пестим вашето време",
          usp3: "Оптимизираме всяка стъпка от покупката ви чрез ясни процедури и пълна прозрачност. Премахвайки излишната бюрокрация, спестяваме вашето ценно време и ви осигуряваме безпроблемно, ефективно преживяване от вземането на решение до излитането.",


          //OurPolicy.jsx
          policyHeadline1: "Подбрана колекция от висококласни самолети",
          policy1: "Всеки самолет в нашия каталог преминава строга проверка за качество и надеждност, осигурявайки ви спокойствие и първокласно изживяване при покупка.",

          policyHeadline2: "Персонализирани експертни насоки",
          policy2: "Възползвайте се от плавен и информиран процес, който улеснява и подсигурява вашето инвестиционно решение.",

          policyHeadline3: "Прозрачен и безпроблемен процес на транзакции",
          policy3: "Гарантираме, че всяка транзакция се осъществява с пълна прозрачност, чрез надеждни финансови решения и стабилна поддръжка след продажбата.",


          //Hero.jsx
          takeALookAt: "Разгледайте",
          theLatest: "НАЙ-НОВИТЕ",
          jets: "Самолети",


          // AccountManagement.jsx
          "myAccount": "Моят Акаунт",
          "username": "Потребителско Име",
          "email": "Имейл",
          "changeEmail": "Промяна на Имейл",
          "currentPassword": "Текуща Парола",
          "newEmail": "Нов Имейл",
          "updateEmail": "Актуализирай Имейл",
          "changePassword": "Промяна на Парола",
          "newPassword": "Нова Парола",
          "confirmNewPassword": "Потвърди Нова Парола",
          "updatePassword": "Актуализирай Парола",
          "fillAllFieldsEmail": "Моля, попълнете всички полета за актуализация на имейла.",
          "fillAllFieldsPassword": "Моля, попълнете всички полета за актуализация на паролата.",
          "passwordsDoNotMatch": "Новите пароли не съвпадат.",
          "errorFetchingProfile": "Грешка при извличане на профила",
          "errorUpdatingEmail": "Грешка при актуализация на имейла",
          "errorUpdatingPassword": "Грешка при актуализация на паролата",


          // ContactForm.jsx
          "contact_us": "Свържете се с нас",
          "name": "Име",
          "email": "Имейл",
          "phone": "Телефонен номер",
          "message": "Съобщение",
          "send": "Изпрати",
          "email_sent_success": "Имейлът е изпратен успешно!",
          "error_sending_email": "Грешка при изпращане на имейл.",

          // OfferButton.jsx
          "free_offer": "Безплатна оферта",
          "hide_form": "Скриване на формуляра",

          // Product.jsx
          "priceDetail": "Цената е за декоративна реплика с мащаб 1/200.",
          "freeQuote": "Свържете се с нас за безплатна оферта.",
          "addToCart": "Добавяне в количката",


          // ResetPassword.jsx
          "resetPassword": "Промяна",
          "confirmPassword": "Потвърждаване на Паролата",
          "newPassword": "Нова Парола",

          //Product.jsx
          "productAddedToCart": "Добавено в количката",
        },
      },
    },
    interpolation: {
      escapeValue: false, // React already handles XSS protection
    },
  });

export default i18n;
