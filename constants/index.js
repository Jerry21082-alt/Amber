import { getRandomId } from "@/helpers";

export const projects = [
  {
    title1: "Step",
    title2: "Style",
    href: "https://step-style.vercel.app/",
    pagePhotos: ["/Rectangleg.png", "/Rectangleh.png", "/Rectanglei.png"],
    pagePhotos2: ["/Rectanglej.png", "/Rectanglek.png"],
    pagePhot3: "/Rectanglel.png",
    introPhoto: "/joshua-diaz-JE_BaGohWN4-unsplash (1).jpg",
    mobilePhotos: ["/Group 1.png", "/Group 2.png"],
    productionYear: 2023,
    overview: {
      section_1: {
        intro:
          "Step Style is a comprehensive and dynamic shoe e-commerce web application",
        paragraph_1:
          "This project showcases a full-fledged online store with a variety of features designed to enhance user experience and streamline the purchasing process.",
        paragraph_2:
          "The application offers a full suite of functionalities typical of a robust e-commerce platform, including an intuitive homepage, detailed product pages, an efficient cart and checkout system, and a dedicated section for product reviews. By leveraging the power of Next.js, the web application benefits from server-side rendering, resulting in fast load times and improved SEO, which is crucial for attracting and retaining users.",
      },
      section_2: {
        side: {
          heading: "Start with an idea and make it better",
          list: ["Home", "Product", "Details"],
        },
        paragraph_1:
          "A visually appealing and responsive homepage displaying featured products, promotional banners, and categories. Seamless navigation bar for easy access to different sections of the website.",
        paragraph_2:
          "We developed multiple content column layouts, carousels and media assets that provides an ease to the flow pages",
      },
      section_3: {
        paragraph_1:
          "Building this ecommerce app with Next.js, Redux, and Tailwind CSS involved overcoming challenges related to state management, real-time updates, input validation with regex, and UI/UX design. By leveraging these technologies effectively and addressing issues methodically, I ensured a robust and user-friendly application experience.",
      },
      section_4: {
        side: {
          heading: "Start with an idea and make it better",
          list: ["Brands", "Sections"],
        },
        paragraph_1:
          "Detailed product listings with high-quality images, descriptions, and pricing information. Interactive carousel slider for product images, supporting touch swipe functionality for a smooth user experience on both desktop and mobile devices.",
        paragraph_2:
          "User-friendly cart interface that allows customers to review their selected items, adjust quantities, and remove items. Dynamic price calculations and real-time updates based on user interactions.",
      },
      section_5: [
        "Studio Mega own branding set them apart from other agencies",
        "Utilized Tailwind CSS for rapid UI development, ensuring a consistent and modern design across the web application.",
      ],

      section_6: [
        "A fully featured mobile experience.",
        "StepStyle is meticulously designed to provide an exceptional mobile experience, ensuring that users can easily browse, select, and purchase products from any device.",
      ],
      section_7: [
        "Touch interactions",
        "Inline auto playing video and animation can been seen on the home, work , and case study pages",
        "The animated mobile navigation content keep the mobile experience feeling last fluid",
      ],
      section_8: {
        heading:
          "Dynamic price calculations and real-time updates based on user interactions.",
        paragraph_1:
          "Instant Price Adjustments: Reflects changes instantly. Live Cart Updates: Real-time item quantity changes. Auto Tax Calculation: Adjusts based on location.",
        paragraph_2:
          "This project demonstrates my proficiency in building complex, user-centric web applications using modern frontend technologies. By integrating Next.js, Tailwind CSS, and advanced form validation techniques, I created a robust e-commerce platform that provides an exceptional shopping experience for users. The implementation of a responsive design and interactive elements like the carousel slider further showcases my ability to deliver high-quality, scalable solutions in the fast-paced world of e-commerce.",
      },
    },
  },
  {
    title1: "Scan",
    title2: "Mate",
    href: "https://qr-mate.vercel.app/",
    pagePhotos: ["/Group a.png", "/Group b.png"],
    pagePhotos2: ["/Group c.png"],
    pagePhot3: "/Group d.png",

    introPhoto: "/claudio-schwarz-VaeGMpaSlck-unsplash (1).jpg",
    mobilePhotos: ["/Group e.png", "/Rectanglef.png"],
    productionYear: 2022,
    overview: {
      section_1: {
        intro:
          "The QR Code Generator, built with Next.js, Tailwind CSS, Redux, and JavaScript, enables users to create, customize, download, and share QR codes seamlessly.",
        paragraph_1:
          "This project showcases a comprehensive QR Code Generator application with a range of features designed to enhance user experience and streamline the creation, customization, and management of QR codes.",
        paragraph_2:
          "The QR Code Generator application offers a full suite of functionalities typical of a robust QR code management platform, including an intuitive homepage, a dedicated create page, detailed QR code information pages, and an efficient editing system. By leveraging the power of Next.js, the web application benefits from server-side rendering, resulting in fast load times and improved SEO, enhancing user engagement and experience.",
      },
      section_2: {
        side: {
          heading: "Start with an idea and make it better",
          list: ["Home", "Work", "Studio"],
        },
        paragraph_1:
          "A visually appealing and responsive homepage welcomes users with an overview of the application's features. The application includes a seamless navigation bar for easy access to the Create, Home, and User pages. The Create page allows users to generate and customize QR codes, the Edit page enables modification of existing codes, and the Details page provides comprehensive information about each QR code, including options to download, share, or print.",
        paragraph_2:
          "Users can modify existing QR codes, updating details or customizing design elements as needed.",
      },
      section_3: {
        paragraph_1:
          "I built this QR Code generator app with Javascript, Next.js, Redux, and Tailwind CSS involved addressing challenges related to state management, real-time updates, persistent storage, input validation, qrcode generation and UI/UX design. By leveraging these technologies and methodologies effectively, I ensured a robust and user-friendly application experience for creating and managing QR codes.",
      },
      section_4: {
        side: {
          heading: "Start with an idea and make it better",
          list: ["Home", "Work", "Studio"],
        },
        paragraph_1:
          "The QR Code Generator application features a detailed QR code management system with high-quality previews, customization options, and descriptive details. An interactive, real-time preview updates as users customize their QR codes, ensuring a smooth user experience on both desktop and mobile devices. Additionally, users can easily navigate between creating, editing, and viewing detailed information about each QR code, with options to download, share, or print.",
        paragraph_2:
          "The QR Code Generator application offers a user-friendly interface for creating and managing QR codes with dynamic, real-time previews. It supports seamless navigation between creation, editing, and detailed QR code management, including options to download, share, or print codes.",
      },
      section_5: [
        "Studio Mega own branding set them apart from other agencies",
        "Utilized Tailwind CSS for rapid UI development, ensuring a consistent and modern design across the web application.",
      ],

      section_6: [
        "A fully featured mobile experience.",
        "ScanMate is meticulously designed to ensure an exceptional mobile experience, enabling users to effortlessly create, manage, and share QR codes on any device.",
      ],
      section_7: [
        "Touch interactions",
        "Inline auto playing video and animation can been seen on the home, work , and case study pages",
        "The animated mobile navigation content keep the mobile experience feeling last fluid",
      ],
      section_8: {
        heading:
          "Dynamic respond instantly to user interactions, ensuring accurate and responsive QR code management.",
        // paragraph_1:
        //   "Instant Price Adjustments: Reflects changes instantly. Live Cart Updates: Real-time item quantity changes. Auto Tax Calculation: Adjusts based on location.",
        paragraph_2:
          "The QR Code Generator project exemplifies the effective integration of Next.js, Tailwind CSS, Redux, and JavaScript to create a functional and interactive web application. It offers comprehensive features for creating, customizing, and managing QR codes.",
      },
    },
  },
  {
    title1: "Block",
    title2: "Vault",
    href: "https://block-vault.vercel.app/",
    pagePhotos: [
      "/Rectangle.png",
      "/Rectangle2.png",
      "/Rectangle3.png",
      "/Rectangle4.png",
      "/Rectangle5.png",
      "/Rectangle6.png",
    ],
    pagePhotos2: ["/Rectangle7.png", "/Rectangle8.png", "/Rectangle9.png"],
    pagePhot3: "/Rectangle15.png",
    introPhoto: "/shubham-dhage-RIvtlFoanXk-unsplash.jpg",

    mobilePhotos: ["/Group y.png", "/Group 10.png"],
    productionYear: 2023,
    overview: {
      section_1: {
        intro:
          "The CryptoWeb Application, built with Next.js and Tailwind CSS, provides real-time cryptocurrency data visualization by fetching data from an external API. It displays interactive candlestick charts, offering a dynamic and informative experience for tracking cryptocurrency trends.",
        paragraph_1:
          "This project showcases a comprehensive CryptoWeb Application designed to enhance user experience by providing real-time cryptocurrency data visualization. It features interactive candlestick charts and seamless data fetching from an external API, offering users a dynamic and informative platform for tracking cryptocurrency trends.",
        paragraph_2:
          "The CryptoWeb Application offers robust functionalities for cryptocurrency tracking, including an intuitive homepage, real-time data fetching, interactive candlestick charts, and detailed information pages. Built with Next.js, it benefits from server-side rendering for fast load times and improved SEO, enhancing user engagement and experience.",
      },
      section_2: {
        side: {
          heading: "Start with an idea and make it better",
          list: ["Home", "Chart", "Market"],
        },
        paragraph_1:
          "A visually appealing and responsive homepage welcomes users with an overview of the application's features. The CryptoWeb Application includes seamless navigation for easy access to the Home, Data, and Chart pages. Users can view real-time cryptocurrency data, interact with candlestick charts, and access detailed information about each currency.",
        paragraph_2:
          "Users can interact with the candlestick charts, adjusting timeframes and viewing detailed data points as needed.",
      },
      section_3: {
        paragraph_1:
          "Building this cryptocurrency application with Next.js, Redux, and Tailwind CSS involved addressing challenges related to state management, data fetching, UI design, persistence, error handling, security, and performance optimization. By leveraging these technologies effectively and adhering to best practices, I ensured a robust and user-friendly application experience for querying and visualizing cryptocurrency stock information.",
      },
      section_4: {
        side: {
          heading: "Start with an idea and make it better",
          list: ["Wallet", "Buy/Sell"],
        },
        paragraph_1:
          "The CryptoWeb Application features detailed cryptocurrency data with high-quality candlestick charts and real-time updates. Users can easily navigate between viewing real-time data, interacting with charts, and accessing detailed currency information, ensuring a smooth experience on both desktop and mobile devices.",
        paragraph_2:
          "The CryptoWeb Application offers a user-friendly interface for tracking cryptocurrencies with dynamic, real-time candlestick charts. It supports seamless navigation between viewing data, interacting with charts, and accessing detailed currency information.",
      },
      section_5: [
        // "Studio Mega own branding set them apart from other agencies",
        "Utilized Tailwind CSS for rapid UI development, ensuring a consistent and modern design across the web application.",
      ],

      section_6: [
        "Intuitive Visualiztion.",
        "Data is displayed as interactive candlestick charts, providing a detailed and intuitive visualization of price movements and trends.",
      ],
      section_7: [
        "Touch interactions",
        // "Inline auto playing video and animation can been seen on the home, work , and case study pages",
        "The animated mobile navigation content keep the mobile experience feeling last fluid",
      ],
      section_8: {
        heading:
          "Users can interact with the charts, zoom in on specific timeframes, and view detailed data points for precise analysis.",
        // paragraph_1:
        //   "Instant Price Adjustments: Reflects changes instantly. Live Cart Updates: Real-time item quantity changes. Auto Tax Calculation: Adjusts based on location.",
        paragraph_2:
          "Fetches data from an external cryptocurrency API, which is then processed and displayed as candlestick charts using a charting library like Chart.js or D3.js.",
      },
    },
  },
  // {
  //   title1: "Dance",
  //   title2: "Academy",
  //   href: "/",
  //   pagePhotos: [
  //     "/carousel_01-slide_01.jpg",
  //     "/carousel_01-slide_02.jpg",
  //     "/carousel_01-slide_03.jpg",
  //   ],
  //   productionYear: 2024,
  // },
];
