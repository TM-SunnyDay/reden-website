import type { I18n } from 'vue-i18n';
import { createI18n } from 'vue-i18n';
const messages = {
  en: {
    en: 'English',
    zh_CN: '简体中文(中国大陆)',
    zh_TW: '繁體中文(台灣)',
    $vuetify: {
      close: 'Close',
      open: 'Open',
      noDataText: 'No data available',
      dataIterator: {
        rowsPerPageText: 'Items per page: ',
        rowsPerPageAll: 'All',
        pageText: '{0}-{1} of {2}',
        noResultsText: 'No matching records found',
        nextPage: 'Next page',
        prevPage: 'Previous page',
        loadingText: 'Loading items...',
      },
      dataFooter: {
        itemsPerPageText: 'Items per page: ',
        itemsPerPageAll: 'All',
        prevPage: 'Previous page',
        nextPage: 'Next page',
        firstPage: 'First page',
        lastPage: 'Last page',
        pageText: '{0}-{1} items of {2}',
      },
      pagination: {
        ariaLabel: {
          root: 'Pagination',
        },
      },
    },
    reden: {
      learn_more: 'Learn More',
      footer: {
        reden_mod: {
          title: 'Reden Mod',
          undo_redo: 'Undo & Redo',
          rvc: 'Reden Version Control',
          debugger: 'Reden Debugger',
        },
        reden_ecosystem: {
          title: 'Reden Ecosystem',
          wiki: 'Reden Wiki',
          sponsors: 'Sponsors',
          github_organization: 'Github Organization',
        },
        reden_community: {
          title: 'Reden Community',
          discord: 'Discord',
          community_guidelines: 'Community Guidelines',
          community_events: 'Community Events',
        },
        follow_us: {
          title: 'Follow Us',
          blog: 'Blog',
          youtube: 'Youtube',
          bilibili: 'Bilibili',
        },
      },
      title: {
        home: 'Home',
      },
      home: {
        feature_intro: {
          title: 'Features',
          undo: 'Made a mistake? Reden can quickly undo your actions by just pressing Ctrl+Z. All chain reactions will be undone.',
          rvc: 'RVC (Reden Version Control) is a version control system designed for redstone. It allows you to manage your redstone projects in all versions with ease.',
          debugger:
            "Can't figure out why your redstone contraption isn't working? Reden Debugger can help you see how the game exactly processes your redstone contraption.",
        },
        community_intro: {
          title: 'Community',
          open_source:
            'Reden is an open-source project and free for everyone. We welcome everyone to contribute to Reden including code, documentation, wiki, and more.',
          wiki: 'Reden Wiki contains almost everything you need to know about redstone ans Reden. It is also a great place to share your knowledge with the community.',
          discord:
            'Join our Discord server to chat with other redstone developers and get help from the community.',
          sponsor:
            'Reden is sponsored by the community. We appreciate every sponsor who supports us.',
        },
      },
      download: 'Download',
      download_page: {
        sorry_constructing:
          'Sorry, our download page is under construction, we suggest you to download at',
      },
      my_account: 'My Account',
      wiki: 'Wiki',
      description:
        'Provide a one-stop working environment for redstone developers and become the best redstone debugging and teaching tool.',
    },
    user: {
      developer: 'Developer',
      developer_hover: 'This user is an active developer of this project',
      contributor: 'Contributor',
      contributor_hover: 'This user has contributed to this project',
      sponsor: 'Sponsor',
      sponsor_hover: 'This user has sponsored this project',
      staff: 'Staff',
      staff_hover: 'This user is a staff member of this project',
    },
    sponsors: {
      title: 'Sponsors',
      description:
        'Reden is supported by you, and we are sincerely grateful to every sponsor.',
      alipay: 'Support us with Alipay',
      paypal: 'Support us with PayPal',
      notice:
        'Reden is an open-source project and always free for everyone. We receive no funding from any company or organization. We rely on your support to keep the project running. When you support us, you will be listed here as a sponsor so please make sure you provide your name and email address when you donate. Thank you for your support!',
      badge:
        'You can get this Sponsor badge by supporting us, and it will be displayed on your profile.',
    },
    login: {
      title: 'Login to Reden',
      oauth: 'Or login with',
      button: {
        login: 'Login',
        captcha: 'Please complete the captcha first',
      },
    },
    register: {
      title: 'Register to Reden',
      invalid: {
        email: 'Invalid email address.',
        password: {
          strength:
            'Password is not strong enough, please use at least 8 characters, including uppercase, lowercase and numbers.',
          mismatching: 'Passwords do not match',
        },
        username: 'Invalid Username.',
      },
      existing: 'Already have an account?',
      login: 'Login',
      email_verification: {
        title: 'One more step',
        message:
          "We have sent an email to {email} with a link to complete your registration. If you don't see the email, please check other places it might be, like your junk, spam, social, or other folders.",
      },
      toast: {
        successful: {
          title: 'Register Successful',
          message: 'Please check your email to complete the registration',
        },
        try: 'Please try again later',
        failed: 'Failed to register',
        error: {
          unknown: 'Unknown error',
        },
      },
      placeholder: {
        email: 'Email',
        username: 'Username',
        password: 'Password',
        confirm: 'Confirm Password',
        invitation_code: 'Invitation Code (optional)',
      },
      button: {
        register: 'Register',
        captcha: 'Please complete the captcha first',
        done: 'Done',
      },
      oauth: 'Or register with: ',
    },
    search: {
      hover: 'Search Reden Features',
    },
  },
  zh_CN: {
    reden: {
      learn_more: '了解更多',
      footer: {
        reden_mod: {
          title: 'Reden Mod',
          undo_redo: '撤销 & 重做',
          rvc: 'Reden 版本控制 (RVC)',
          debugger: 'Reden 调试器',
        },
        reden_ecosystem: {
          title: 'Reden 生态系统',
          wiki: 'Reden Wiki',
          sponsors: '赞助者',
          github_organization: 'Github 组织',
        },
        reden_community: {
          title: 'Reden 社区',
          discord: 'Discord',
          community_guidelines: '社区指南',
          community_events: '社区活动',
        },
        follow_us: {
          title: '关注我们',
          blog: '博客',
          youtube: 'Youtube',
          bilibili: 'Bilibili',
        },
      },
      title: {
        home: '首页',
      },
      home: {
        feature_intro: {
          title: '功能介绍',
          undo: '不小心出了错？Reden 可以通过按下 Ctrl+Z 快速撤销您的操作。所有连锁反应都将被撤销。',
          rvc: 'RVC（Reden 版本控制）是专为红石设计的版本控制系统。它可以让您轻松管理所有版本的红石项目。',
          debugger:
            '搞不清楚为什么您的红石装置不工作？Reden 调试器可以帮助您查看游戏如何处理您的红石装置。',
        },
        community_intro: {
          title: '社区',
          open_source:
            'Reden 是一个开源项目，对所有人免费。我们欢迎所有人为 Reden 做出贡献，包括代码、文档、Wiki 等。',
          wiki: 'Reden Wiki 包含了您需要了解的关于红石和 Reden 的几乎所有内容。这也是与社区分享您的知识的好地方。',
          discord:
            '加入我们的 Discord 服务器，与其他红石开发者聊天并从社区获得帮助。',
          sponsor: 'Reden 得到了社区的赞助。我们感谢每一位支持我们的赞助者。',
        },
      },
      download: '下载',
      download_page: {
        sorry_constructing:
          '抱歉，我们的下载页面正在建设中，我们建议您前往此处下载：',
      },
      my_account: '我的账户',
      wiki: 'Wiki',
      description:
        '为红石机器开发者提供一站式工作环境，成为最好的红石调试和教学工具。',
    },
    user: {
      developer: '开发者',
      developer_hover: '此用户是本项目的活跃开发者',
      contributor: '贡献者',
      contributor_hover: '此用户参与过本项目的开发',
      sponsor: '赞助者',
      sponsor_hover: '此用户赞助过本项目',
      staff: '管理员',
      staff_hover: '此用户是本项目的管理员',
    },
    sponsors: {
      title: '赞助者',
      description: 'Reden 得到了你们的支持，我们在此由衷地感谢每一位赞助者。',
      alipay: '使用支付宝赞助',
      notice:
        'Reden 是一个开源项目，永远对所有人免费。我们没有从任何公司或组织获得资金。我们依靠您的支持来维持项目运行。当您支持我们时，您会在此页面被列出，因此请确保您在捐款时提供您的姓名和电子邮件地址。感谢您的支持！',
    },
    login: {
      title: '登录 Reden',
      oauth: '或使用以下方式登录',
      button: {
        login: '登录',
        captcha: '请先完成验证码',
      },
    },
    register: {
      title: '注册 Reden',
      invalid: {
        email: '无效的邮箱地址',
        password: {
          strength: '密码需使用至少8个字符（大写、小写和数字）',
          mismatching: '密码不符',
        },
        username: '无效用户名',
      },
      existing: '已经有账号了？',
      login: '登录',
      email_verification: {
        title: '最后一步',
        message1:
          '我们向 {email} 发送了一封包含链接的验证邮件。如果你没有看见该邮件，请注意垃圾站或其他文件夹。',
      },
      toast: {
        successful: {
          title: '注册成功！',
          message: '请检查你的邮箱来完成注册',
        },
        try: '请稍后再试',
      },
      placeholder: {
        email: '电子邮箱',
        username: '用户名',
        password: '密码',
        confirm: '重复密码',
        invitation_code: '邀请码(可选)',
      },
      button: {
        register: '注册',
        captcha: '请先完成验证码',
        done: '完成',
      },
      oauth: '或使用以下方式注册',
    },
    search: {
      hover: '搜索 Reden 功能',
    },
  },
  zh_TW: {
    reden: {
      learn_more: '了解更多',
      footer: {
        reden_mod: {
          title: 'Reden Mod',
          undo_redo: '撤銷 & 重作',
          rvc: 'Reden 版本控制 (RVC)',
          debugger: 'Reden 調試器',
        },
        reden_ecosystem: {
          title: 'Reden 生態系統',
          wiki: 'Reden Wiki',
          sponsors: '贊助者',
          github_organization: 'Github 組織',
        },
        reden_community: {
          title: 'Reden 社區',
          discord: 'Discord',
          community_guidelines: '社區指南',
          community_events: '社區活動',
        },
        follow_us: {
          title: '關注我們',
          blog: '部落格',
          youtube: 'Youtube',
          bilibili: 'Bilibili',
        },
      },
      title: {
        home: '首頁',
      },
      home: {
        feature_intro: {
          title: '功能介紹',
          undo: '不小心出錯了？Reden 可以通過按下 Ctrl+Z 快速撤銷您的操作。所有連鎖反應都將被撤銷。',
          rvc: 'RVC（Reden 版本控制）是專為紅石設計的版本控制系統。它可以讓您輕鬆管理所有版本的紅石專案。',
          debugger:
            '搞不清楚為什麼您的紅石裝置不工作？Reden 調試器可以幫助您查看遊戲如何處理您的紅石裝置。',
        },
        community_intro: {
          title: '社區',
          open_source:
            'Reden 是一個開源項目，對所有人免費。我們歡迎所有人為 Reden 做出貢獻，包括代碼、文檔、Wiki 等。',
          wiki: 'Reden Wiki 幾乎包含了您需要了解的關於紅石和 Reden 的所有內容。這也是與社區分享知識的好地方。',
          discord:
            '加入我們的 Discord 伺服器，與其他紅石開發者們聊天並從社區獲得幫助。',
          sponsor: 'Reden 得到了社區的贊助。我們感謝每一位支持我們的贊助者。',
        },
      },
      download: '下載',
      download_page: {
        sorry_constructing:
          '抱歉，我們的下載頁面正在建設中，我們建議您前往此處下載：',
      },
      my_account: '我的帳號',
      wiki: 'Wiki',
      description:
        '為紅石機器開發者提供一站式工作環境，成為最好的紅石調試和教學工具。',
    },
    user: {
      developer: '開發者',
      developer_hover: '此用戶是本項目的活躍開發者',
      contributor: '貢獻者',
      contributor_hover: '此用戶參與過本項目的開發',
      sponsor: '贊助者',
      sponsor_hover: '此用戶贊助過本項目',
      staff: '管理員',
      staff_hover: '此用戶是本項目的管理員',
    },
    sponsors: {
      title: '贊助者',
      description: 'Reden 得到了你們的支持，我們在此由衷地感謝每一位贊助者。',
      alipay: '使用支付寶贊助',
      notice:
        'Reden 是一個開源專案，永遠對所有人免費。我們沒有從任何公司或組織獲得資金。我們依靠您的支持來維持專案運行。當您支持我們時，您會在此頁面被列出，因此請確保在您捐款時提供您的姓名和電子郵件。感謝您的支持！',
    },
    login: {
      title: '登入 Reden',
      oauth: '或使用以下方式登入',
      button: {
        login: '登入',
        captcha: '請先完成驗證碼',
      },
    },
    register: {
      title: '註冊 Reden',
      invalid: {
        email: '無效的電子郵件',
        password: {
          strength: '密碼需使用至少8個字符（大寫、小寫以及數字）',
          mismatching: '密碼不符',
        },
        username: '無效用戶名',
      },
      existing: '已經有帳號了？',
      login: '登入',
      email_verification: {
        title: '最後一步',
        message1:
          '我們向 {email} 傳送了一封包含驗證連結的電子郵件。如果你沒有看見該郵件，請注意垃圾郵件或其他資料夾。',
      },
      toast: {
        successful: {
          title: '註冊成功！',
          message: '請檢查你的電子郵件來完成註冊',
        },
        try: '請稍後再試',
      },
      placeholder: {
        email: '電子郵件',
        username: '用戶名稱',
        password: '密碼',
        confirm: '重複密碼',
        invitation_code: '邀請碼（可選）',
      },
      button: {
        register: '註冊',
        captcha: '請先完成驗證碼',
        done: '完成',
      },
      oauth: '或使用以下方式註冊',
    },
    search: {
      hover: '搜尋 Reden 功能',
    },
  },
};

export const i18n: I18n = createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages,
});
