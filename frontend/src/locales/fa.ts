export default {
  message: "خوش آمدید",
  success: "موفق",
  failed: "خطا",
  enable: "فعال",
  disable: "غیرفعال",
  none: "هیچ",
  all: "همه",
  filter: "فیلتر",
  loading: "در حال بارگذاری...",
  confirm: "آیا مطمئن هستید ؟",
  yes: "بله",
  no: "خیر",
  unlimited: "نامحدود",
  remained: "باقیمانده",
  type: "مدل",
  protocol: "پروتکل",
  submit: "تایید",
  reset: "ریست",
  now: "اکنون",
  network: "شبکه",
  copyToClipboard: "کپی در حافظه",
  noData: "بدون داده!",
  invalidLogin: "ورود نامعتبر!",
  online: "آنلاین",
  version: "نسخه",
  email: "ایمیل",
  commaSeparated: "(جداشده با کاما)",
  count: "تعداد",
  template: "الگو",
  error: {
    dplData: "داده تکراری",
    core: "خطا در سینگ‌باکس",
  },
  pages: {
    login: "ورود",
    home: "خانه",
    inbounds: "ورودی‌ها",
    outbounds: "خروجی‌ها",
    clients: "کاربران",
    rules: "قوانین",
    tls: "رمزنگاری‌ها",
    basics: "ترازها",
    admins: "ادمین‌ها",
    settings: "پیکربندی",
  },
  main: {
    tiles: "کاشی‌ها",
    gauges: "سنجش‌ها",
    charts: "نمودارها",
    infos: "داده‌ها",
    gauge: {
      cpu: "سنجش پردازنده",
      mem: "سنجش حافظه",
    },
    chart: {
      cpu: "نمودار پردازنده",
      mem: "نمودار حافظه",
      net: "ترافیک شبکه",
      pnet: "بسته‌های شبکه",
    },
    info: {
      sys: "داده‌های سیستم",
      sbd: "داده‌های سینگ‌باکس",
      host: "نام",
      cpu: "پردازنده",
      core: "هسته",
      uptime: "مدت‌",
      threads: "نخ‌ها",
      memory: "حافظه",
      running: "اجرا"
    }
  },
  objects: {
    inbound: "ورودی‌",
    client: "کاربر",
    outbound: "خروجی‌",
    rule: "قانون",
    user: "کاربر",
    tag: "برچسب",
    listen: "گوش‌دادن",
    dial: "تماس",
    tls: "رمزنگاری",
    multiplex: "تسهیم",
    transport: "انتقال",
    headers: "سربرگ‌ها",
    key: "نام",
    value: "مقدار",
  },
  actions: {
    action: "فرمان",
    add: "ایجاد",
    new: "جدید",
    edit: "ویرایش",
    del: "حذف",
    clone: "شبیه‌سازی",
    save: "ذخیره",
    update: "بروزرسانی",
    submit: "ارسال",
    set: "تنظیم",
    generate: "تولید",
    disable: "غیرفعال",
    close: "بستن",
    restartApp: "ریستارت پنل",
  },
  login: {
    title: "ورود",
    username: "نام کاربری",
    unRules: "نام کاربری نمی‌تواند خالی باشد",
    password: "کلمه عبور",
    pwRules: "کلمه عبور نمی‌تواند خالی باشد",
  },
  menu: {
    logout: "خروج",
  },
  admin: {
    changeCred: "ویرایش داده‌ها",
    oldPass: "رمز کنونی",
    newUname: "نام کاربری جدید",
    newPass: "رمز جدید",
    lastLogin: "آخرین ورود",
    date: "تاریخ",
    time: "ساعت",
    changes: "تغییرات",
    actor: "مجری",
    key: "کلید",
    action: "عمل",
  },
  setting: {
    interface: "نما",
    sub: "سابسکریپشن",
    addr: "آدرس",
    port: "پورت",
    webPath: "مسیر پایه",
    domain: "دامنه",
    sslKey: "مسیر فایل کلید",
    sslCert: "مسیر فایل گواهی",
    webUri: "آدرس نهایی پنل",
    sessionAge: "بیشینه زمان لاگین ماندن",
    trafficAge: "بیشینه زمان ذخیره ترافیک",
    timeLoc: "منطقه زمانی",
    subEncode: "رمزگذاری",
    subInfo: "نمایش اطلاعات کاربر",
    path: "مسیر پیشفرض",
    update: "زمان بروزرسانی خودکار",
    subUri: "آدرس نهایی سابسکریپشن",
    jsonSub: "سابسکریپشن JSON",
    toDirect: "هدایت مستقیم",
    toBlock: "بستن مسیر",
    timestamp: "نمایش زمان",
    globalDns: "DNS کلی",
    directDns: "DNS مستقیم",
    toDirectDns: "هدایت به DNS مستقیم",
    jsonSubOptions: "گزینه‌های دیگر",
  },
  client: {
    name: "نام",
    desc: "شرح",
    group: "گروه",
    inboundTags: "برچسب‌های ورودی",
    basics: "پایه",
    config: "تنظیم",
    links: "لینک‌ها",
    external: "لینک‌ خارجی",
    sub: "سابسکریپشن خارجی",
  },
  types: {
    un: "نام کاربری",
    pw: "رمز",
    direct: {
      overrideAddr: "جایگزین آدرس",
      overridePort: "جایگزین پورت",
    },
    hy: {
      obfs: "رمز مبهم کننده",
      auth: "رمز احراز هویت",
      hyOptions: "گزینه‌های Hysteria",
      hy2Options: "گزینه‌های Hysteria2",
      ignoreBw: "نادیده‌گرفتن پهنای‌باند کاربر",
    },
    shdwTls: {
      hs: "سرور دست‌تکانی",
      addHS: "افزودن سرور دست‌تکانی",
    },
    ssh: {
      passphrase: "عبارت عبور",
      hostKey: "کلیدهای هاست‌ها",
      algorithm: "الگوریتم‌ها",
      clientVer: "نسخه کلاینت",
      options: "گزینه‌های SSH",
    },
    tor: {
      execPath: "مسیر فایل اجرایی",
      dataDir: "پوشه داده‌ها",
      extArgs: "آرگومان‌های اضافی",
    },
    tuic: {
      congControl: "کنترل ازدحام",
      authTimeout: "مهلت احراز هویت",
      hb: "ضربان قلب",
    },
    vless: {
      flow: "جریان",
      udpEnc: "کدگذاری بسته UDP",
    },
    vmess: {
      security: "امنیت",
      globalPadding: "لایه بندی کلی",
      authLen: "رمزگذاری اندازه بسته",
    },
    wg: {
      privKey: "کلید خصوصی",
      pubKey: "کلید عمومی همتا",
      psk: "کلید مشترک",
      localIp: "آدرس‌های محلی",
      worker: "عملگرها",
      ifName: "نام اینترفیس",
      sysIf: "استفاده از اینترفیس سیستم",
      gso: "بارگذاری تقسیم‌بندی عمومی",
      options: "گزینه‌های Wireguard",
      multiPeer: "چند همتایی",
      allowedIp: "آدرس‌های مجاز",
      peer: "همتا",
      peers: "همتاها",
    },
    lb: {
      defaultOut: "خروجی پیش‌فرض",
      interruptConn: "قطع ارتباط موجود",
      testUrl: "URL تست",
      interval: "فاصله زمانی",
      tolerance: "تحمل",
      urlTestOptions: "گزینه‌های URLTest"
    }
  },
  in: {
    addr: "آدرس",
    port: "پورت",
    clients: "فعال‌سازی کاربران",
    ssMethod: "روش",
    sSide: "سمت سرور",
    cSide: "سمت کاربر",
    multiDomain: "دامنه چندگانه",
    remark: "شرح",
    mdOption: "گزینه‌های دامنه چندگانه",
  },
  listen: {
    sniffing: "شنود آدرس",
    sniffingTimeout: "مهلت شنود آدرس",
    sniffingOverride: "جایگزینی مقصد",
    options: "گزینه‌های گوش‌دادن",
    tcpOptions: "گزینه‌های TCP",
    udpOptions: "گزینه‌های UDP",
    detour: "انحراف مسیر",
    detourText: "ارسال به ورودی دیگر",
    domainStrategy: "استراتژی دامنه",
  },
  dial: {
    bindIf: "اتصال به کارت شبکه",
    bindIp4: "اتصال به IPv4",
    bindIp6: "اتصال به IPv6",
    reuseAddr: "استفاده مجدد از آدرس",
    connTimeout: "مهلت ارتباط",
    fbTimeout: "مهلت فالبک",
    options: "گزینه‌های تماس",
    detourText: "ارسال به خروجی دیگر",
  },
  transport: {
    enable: "فعال‌سازی انتقال",
    host: "دامنه",
    hosts: "دامنه‌ها",
    path: "مسیر",
    httpMethod: "متد درخواست",
    idleTimeout: "مهلت بیکاری",
    pingTimeout: "مهلت پینگ",
    grpcServiceName: "نام سرویس",
    grpcPws: "حفظ ارتباط بدون دیتا",
  },
  mux: {
    enable: "فعال‌سازی تسهیم",
    maxConn: "بیشینه ارتباطات",
    minStr: "کمینه استریم",
    maxStr: "بیشینه استریم",
    padding: "فقط با پدینگ",
    enableBrutal: "فعال‌سازی شدت",
  },
  out: {
    addr: "آدرس سرور",
    port: "پورت سرور",
  },
  rule: {
    add: "ایجاد قانون",
    simple: "ساده",
    logical: "منطقی",
    mode: "حالت",
    invert: "برعکس",
    ipVer: "نسخه IP",
    domain: "دامنه‌ها",
    domainSufix: "پسوند‌های دامنه",
    domainKw: "کلمات کلیدی دامنه",
    domainRgx: "رجکس دامنه",
    ip: "محدوده‌های IP",
    privateIp: "آدرس های IP نامعتبر",
    port: "پورت‌ها",
    portRange: "محدوده‌های پورت",
    srcIp: "محدوده‌های آدرس IP مبدا",
    srcPrivateIp: "آدرس‌های IP مبدا نامعتبر",
    srcPort: "پورت‌های مبدا",
    srcPortRange: "محدوده پورتهای منبع",
    ruleset: "مجموعه‌ها",
    rulesetMatchSrc: "تطابق آدرس‌های مبدا با مجموعه قوانین",
    options: "گزینه‌های قوانین",
    domainRules: "دامنه/آدرس",
    srcIpRules: "آدرس مبدا",
    srcPortRules: "پورت مبدا",
  },
  ruleset: {
    add: "ایجاد مجموعه",
    format: "فرمت داده‌ها",
    interval: "بازه بروزرسانی‌ها",
    remote: "راه دور",
    local: "محلی",
  },
  basic: {
    log: {
      title: "گزارش‌ها",
      level: "سطح",
      output: "خروجی",
      timestamp: "فعال‌سازی ثبت زمان",
    },
    dns: {
      final: "سرور نهایی",
      server: "سرور",
      firstServer: "سرور نخست",
      addrResolver: "حل کننده دامنه",
    },
    routing: {
      title: "مسیریابی",
      defaultOut: "خروجی پیش‌فرض",
      defaultIf: "کارت شبکه پیش‌فرض",
      defaultRm: "Routing Mark پیش‌فرض",
      autoBind: "انتخاب اتوماتیک کارت شبکه",
    },
    exp: {
      storeFakeIp: "ذخیره آدرس‌های نامعتبر",
    },
  },
  tls: {
    enable: "فعالسازی رمزنگاری",
    usePath: "مسیر فایل",
    useText: "متن گواهی",
    certPath: "مسیر فایل گواهی",
    keyPath: "مسیر فایل کلید",
    cert: "گواهی",
    key: "کلید",
    options: "گزینه‌های رمز‌نگاری",
    minVer: "کمینه نسخه",
    maxVer: "بیشینه نسخه",
    cs: "مدل‌های رمزنگاری",
    privKey: "کلید خصوصی",
    pubKey: "کلید عمومی",
    disableSni: "غیرفعال‌سازی SNI",
    insecure: "تایید ارتباط ناامن",
    acme: {
      options: "گزینه‌های ACME",
      dataDir: "مسیر داده‌ها",
      defaultDomain: "دامنه پیش‌فرض",
      disableChallenges: "بستن چالش‌ها",
      httpChallenge: "بستن چالش HTTP",
      tlsChallenge: "بستن چالش TLS",
      altPorts: "پورت‌های جایگزین",
      altHport: "پورت جایگزین HTTP",
      altTport: "پورت جایگزین TLS",
      caProvider: "فراهم کننده گواهی",
      customCa: "فراهم کننده دیگر",
      extAcc: "حساب خارجی",
      dns01: "چالش DNS01",
      dns01Provider: "فراهم کننده چالش DNS01",
    },
  },
  stats: {
    upload: "آپلود",
    download: "دانلود",
    volume: "حجم",
    usage: "استفاده",
    enable: "فعال سازی کنترل ترافیک",
    graphTitle: "نمودار ترافیک",
    B: "ب",
    KB: "ک‌ب",
    MB: "م‌ب",
    GB: "گ‌ب",
    TB: "ت‌ب",
    PB: "پ‌ب",
    p: "پ",
    Kp: "ک‌پ",
    Mp: "م‌پ",
    Gp: "گ‌پ",
    bps: "ب/ث",
    Kbps: "ک‌ب/ث",
    Mbps: "م‌ب/ث",
  },
  date: {
    expiry: "انقضا",
    expired: "منقضی",
    d: "ر",
    h: "س",
    m: "د",
    s: "ث",
    ms: "م‌ث",
  }
}