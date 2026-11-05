/**
 * İşlem Rehberi - Rehber Veri Tabanı
 * Her rehber: kimler başvurabilir, gerekli belgeler, işlem adımları ve resmî kaynak bağlantısı içerir.
 */

const GUIDES_DATA = [
  {
    id: "burs-basvurusu",
    title: "Burs Başvurusu (KYK ve Vakıf Bursları)",
    category: "egitim",
    categoryLabel: "Eğitim & Öğrenci",
    icon: "fa-graduation-cap",
    badge: "Popüler",
    estimatedTime: "20-30 Dakika",
    cost: "Ücretsiz",
    shortDesc: "Gençlik ve Spor Bakanlığı (KYK) ve vakıf burslarına başvuru süreci, değerlendirme kriterleri ve gerekli evraklar.",
    whoCanApply: [
      "Ön lisans, lisans, yüksek lisans ve doktora öğrencileri",
      "Örgün öğretimde aktif öğrencilik kaydı bulunanlar",
      "Maddi desteğe ihtiyacı olan ve başarı kriterlerini sağlayan öğrenciler",
      "Sabıka kaydı (adli sicil) bulunmayan adaylar",
      "Vakıf/özel burslar için ilgili kurumun belirlediği not ortalaması (genelde en az 2.50/4.00) şartını karşılayanlar"
    ],
    requiredDocuments: [
      { id: "doc-1", name: "Öğrenci Belgesi", note: "e-Devlet üzerinden barkodlu temin edilebilir" },
      { id: "doc-2", name: "Transkript (Not Dökümü)", note: "Ara sınıflar için güncel onaylı belge" },
      { id: "doc-3", name: "Vukuatlı Nüfus Kayıt Örneği", note: "e-Devlet üzerinden aile bilgilerini gösterir belge" },
      { id: "doc-4", name: "Aile Gelir Beyanı Belgeleri", note: "Anne-baba bordrosu, emeklilik dökümü veya gelir olmadığını gösterir belge" },
      { id: "doc-5", name: "İkametgah (Yerleşim Yeri) Belgesi", note: "e-Devlet üzerinden indirilebilir" },
      { id: "doc-6", name: "Şehit/Gazi yakını, engelli veya koruma altındaki bireyler için durum belgesi", note: "Varsa öncelik puanı kazandırır" },
      { id: "doc-7", name: "Öğrenci adına açılmış IBAN / Banka Hesap Bilgisi", note: "Burs ödemelerinin aktarılacağı hesap" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Başvuru Tarihlerini ve Şartları Takip Edin",
        desc: "KYK burs başvuruları genellikle her yıl Ekim-Kasım aylarında e-Devlet üzerinden açılır. Özel vakıf başvuruları ise Ağustos-Ekim aylarında başlar."
      },
      {
        stepNumber: 2,
        title: "e-Devlet Üzerinden Başvuru Formunu Doldurun",
        desc: "e-Devlet kapısına T.C. kimlik numaranızla giriş yapıp 'Gençlik ve Spor Bakanlığı Burs/Öğrenim Kredisi Başvurusu' hizmetine gidin. Ailevi durum, eğitim ve gelir bilgilerinizi eksiksiz doldurun."
      },
      {
        stepNumber: 3,
        title: "Bilgilerin ve Belgelerin Doğruluğunu Teyit Edin",
        desc: "Sistem gelir ve mülk durumunu devlet veri tabanlarından otomatik çeker. Tutarsızlık varsa güncelleme yapın ve onaylayarak başvuru çıktısını kaydedin."
      },
      {
        stepNumber: 4,
        title: "Sonuçları Kontrol Edin ve Taahhütnameyi Onaylayın",
        desc: "Sonuçlar açıklandığında burs kazanan öğrencilerin yine e-Devlet üzerinden belirlenen süre içinde taahhütname onayı yapması zorunludur."
      },
      {
        stepNumber: 5,
        title: "Banka Kartınızı Teslim Alın",
        desc: "Burs ödemeleri Ziraat Bankası Genç Bankkart hesabına yatar. Kartınızı banka şubesinden teslim alıp ilk ödemenizi çekebilirsiniz."
      }
    ],
    officialSource: {
      title: "Gençlik ve Spor Bakanlığı (GSB) KYK Burs Başvuru Portalı",
      url: "https://www.turkiye.gov.tr/genclik-ve-spor-burs-ogrenim-kredisi-basvurusu",
      platformName: "e-Devlet / GSB",
      isGovernmentVerified: true
    }
  },
  {
    id: "ogrenci-belgesi-alma",
    title: "Öğrenci Belgesi Alma (Barkodlu e-Devlet)",
    category: "egitim",
    categoryLabel: "Eğitim & Öğrenci",
    icon: "fa-id-card",
    badge: "Anında İşlem",
    estimatedTime: "2-5 Dakika",
    cost: "Ücretsiz",
    shortDesc: "YÖK ve MEB onaylı resmi, karekodlu ve barkodlu öğrenci belgesini e-Devlet üzerinden anında ücretsiz çıkarma rehberi.",
    whoCanApply: [
      "Türkiye'deki devlet veya vakıf üniversitelerinde aktif/kayıtlı ön lisans, lisans veya lisansüstü öğrencileri",
      "Milli Eğitim Bakanlığı'na bağlı ilk, orta ve lise düzeyindeki öğrenciler (veya velileri)",
      "Açık öğretim fakültesi ve açık lise öğrencileri",
      "e-Devlet şifresi veya mobil/elektronik imzası bulunan tüm kayıtlı vatandaşlar"
    ],
    requiredDocuments: [
      { id: "doc-1", name: "T.C. Kimlik Kartı ve e-Devlet Şifresi", note: "İnternet bankacılığı veya mobil imza ile de giriş yapılabilir" },
      { id: "doc-2", name: "Aktif Öğrencilik Statüsü", note: "Kayıt donduran veya silinen öğrencilerin durumu belgede belirtilir" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "e-Devlet Kapısına Giriş Yapın",
        desc: "turkiye.gov.tr adresini veya e-Devlet mobil uygulamasını açarak T.C. kimlik numaranız ve şifrenizle oturum açın."
      },
      {
        stepNumber: 2,
        title: "Arama Çubuğuna 'Öğrenci Belgesi' Yazın",
        desc: "Üniversite öğrencisiyseniz 'Yükseköğretim Kurulu Başkanlığı / Öğrenci Belgesi Sorgulama', lise/ortaokul için 'Milli Eğitim Bakanlığı / Öğrenci Belgesi Sorgulama' seçeneğine tıklayın."
      },
      {
        stepNumber: 3,
        title: "Kayıtlı Olduğunuz Programı Seçin ve Belge Oluşturun",
        desc: "Ekranda kayıtlı olduğunuz üniversite ve bölüm görünür. Sağ taraftaki 'Barkodlu Belge Oluştur' düğmesine basın."
      },
      {
        stepNumber: 4,
        title: "PDF Olarak İndirin veya Yazdırın",
        desc: "Oluşturulan belge üzerindeki karekod ve barkod sayesinde tüm resmi kurumlarda geçerlidir. Belgeyi telefonunuza/bilgisayarınıza PDF olarak indirebilirsiniz."
      }
    ],
    officialSource: {
      title: "Yükseköğretim Kurulu (YÖK) Öğrenci Belgesi Sorgulama",
      url: "https://www.turkiye.gov.tr/yok-ogrenci-belgesi-sorgulama",
      platformName: "e-Devlet / YÖK",
      isGovernmentVerified: true
    }
  },
  {
    id: "is-basvurusu",
    title: "İş Başvurusu (Özgeçmiş, İŞKUR ve Kariyer Portalları)",
    category: "kariyer",
    categoryLabel: "Kariyer & İstihdam",
    icon: "fa-briefcase",
    badge: "Temel Rehber",
    estimatedTime: "1-2 Saat",
    cost: "Ücretsiz",
    shortDesc: "İŞKUR kaydı, etkili özgeçmiş (CV) hazırlama, mülakat öncesi resmi evraklar ve kamu/özel sektör iş başvuru adımları.",
    whoCanApply: [
      "15 yaşını doldurmuş ve yasal çalışma yaşında olan her Türkiye Cumhuriyeti vatandaşı",
      "Kamu ilanları için ilgili KPSS puan türüne ve ilan kılavuzundaki özel şartlara sahip olanlar",
      "Özel sektörde aranan eğitim, yabancı dil veya tecrübe kriterlerini karşılayan adaylar",
      "İŞKUR üzerinden iş arayan kaydı açmak isteyen mezun ve iş arayanlar"
    ],
    requiredDocuments: [
      { id: "doc-1", name: "Güncel ve Profesyonel Özgeçmiş (CV)", note: "İletişim, eğitim, iş deneyimleri ve yetkinlikleri içeren PDF formatında belge" },
      { id: "doc-2", name: "Diploma veya Mezuniyet Belgesi", note: "e-Devlet'ten barkodlu mezuniyet belgesi temin edilebilir" },
      { id: "doc-3", name: "Adli Sicil Kaydı (Sabıka Kaydı)", note: "e-Devlet üzerinden 'Resmi/Özel' kullanım amacı seçilerek alınır" },
      { id: "doc-4", name: "SGK Tescil ve Hizmet Dökümü", note: "Geçmiş çalışma tecrübelerini belgelemek için barkodlu alınır" },
      { id: "doc-5", name: "Erkek Adaylar İçin Askerlik Durum Belgesi", note: "e-Devlet üzerinden 'Askerlik Durum Belgesi Sorgulama' ile barkodlu" },
      { id: "doc-6", name: "Sertifika ve Yabancı Dil Sonuç Belgeleri", note: "Varsa YDS, TOEFL veya mesleki yeterlilik belgeleri" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "İŞKUR ve Kariyer Portallarına Profil Oluşturun",
        desc: "esube.iskur.gov.tr adresinden e-Devlet ile giriş yaparak 'İş Arayan' kaydınızı tamamlayın. Kariyer.net, LinkedIn vb. platformlarda profilinizi eksiksiz doldurun."
      },
      {
        stepNumber: 2,
        title: "Hedefe Yönelik Özgeçmiş (CV) ve Ön Yazı Hazırlayın",
        desc: "Başvuracağınız sektöre ve pozisyona göre yeteneklerinizi vurgulayan, sade ve hatasız bir Türkçe ile yazılmış tek veya iki sayfalık CV oluşturun."
      },
      {
        stepNumber: 3,
        title: "İlan Şartlarını İnceleyin ve Başvuru Yapın",
        desc: "Kamu ilanları için 'Kariyer Kapısı (isealimkariyerkapisi.cbiko.gov.tr)' platformunu, özel sektör için firma portallarını kullanarak başvuru formunu doldurun."
      },
      {
        stepNumber: 4,
        title: "Mülakat ve Değerlendirme Sürecine Hazırlanın",
        desc: "Başvurunuz onaylandığında şirket hakkında araştırma yapın, teknik veya yetkinlik bazlı mülakat için sık sorulan soruları çalışın."
      },
      {
        stepNumber: 5,
        title: "İşe Giriş Evraklarını Tamamlayın",
        desc: "Teklif aldığınızda şirketin insan kaynakları biriminin talep ettiği sağlık raporu, kan grubu kartı, banka hesap bilgisi gibi evrakları teslim edin."
      }
    ],
    officialSource: {
      title: "İŞKUR E-Şube Resmi İş Arama ve Başvuru Portalı",
      url: "https://esube.iskur.gov.tr/",
      platformName: "Türkiye İş Kurumu (İŞKUR)",
      isGovernmentVerified: true
    }
  },
  {
    id: "pasaport-basvurusu",
    title: "Pasaport Başvurusu (Bordo / Yeşil Pasaport)",
    category: "seyahat",
    categoryLabel: "Seyahat & Kimlik",
    icon: "fa-passport",
    badge: "Randevulu İşlem",
    estimatedTime: "2-3 İş Günü + Kargo",
    cost: "Harç ve Defter Bedeli Değişken",
    shortDesc: "Umuma Mahsus (Bordo) veya Hususi (Yeşil) pasaport harç ödemesi, Nüfus randevusu ve gerekli biyometrik belgeler.",
    whoCanApply: [
      "Tüm Türkiye Cumhuriyeti vatandaşları (Bordo Umuma Mahsus pasaport için)",
      "Belirli kıdeme sahip devlet memurları, avukatlar ve ihracatçılar (Yeşil Hususi pasaport hakkı olanlar)",
      "Öğrenciler için: 25 yaş altındaki öğrenciler harçsız pasaport (sadece defter bedeli ödeyerek) başvurusu yapabilir",
      "Yurt dışına çıkış yasağı veya adli tedbiri bulunmayan kişiler"
    ],
    requiredDocuments: [
      { id: "doc-1", name: "T.C. Kimlik Kartı", note: "Nüfus cüzdanı veya geçici kimlik belgesi" },
      { id: "doc-2", name: "Son 6 Ayda Çekilmiş 1 Adet Biyometrik Fotoğraf", note: "50x60 mm ebatlarında, arka fonu beyaz, ICAO standartlarında" },
      { id: "doc-3", name: "Harç ve Defter Bedeli Ödeme Dekontu", note: "Sistemde elektronik görünür, ancak dekontu yanınızda bulundurmanız tavsiye edilir" },
      { id: "doc-4", name: "Eski Pasaport (Varsa)", note: "Daha önce alınmış ve süresi bitmiş veya geçerli pasaportlar iptal için getirilir" },
      { id: "doc-5", name: "Öğrenciler İçin: Harçsız Pasaport Talep Yazısı / Güncel Öğrenci Belgesi", note: "25 yaşını doldurmamış öğrenciler üniversiteden veya e-Devlet'ten alır" },
      { id: "doc-6", name: "Kısıtlı veya Ergin Olmayanlar İçin Muvafakatname", note: "18 yaşından küçük bireyler için anne ve babanın noter veya memur huzurundaki onayı" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Pasaport Harç ve Defter Bedelini Yatırın",
        desc: "İnteraktif Vergi Dairesi (ivd.gib.gov.tr), anlaşmalı bankalar veya PTT şubelerinden başvuru sürenize (6 ay, 1 yıl, 2 yıl, 3 yıl, 10 yıl) göre harç ve defter bedelini ödeyin."
      },
      {
        stepNumber: 2,
        title: "Nüfus ve Vatandaşlık İşleri'nden Randevu Alın",
        desc: "randevu.nvi.gov.tr adresi veya ALO 199 çağrı merkezi üzerinden ikamet ettiğiniz veya istediğiniz herhangi bir il/ilçe Nüfus Müdürlüğü'ne randevu oluşturun."
      },
      {
        stepNumber: 3,
        title: "Randevu Günü Belgelerinizle Nüfus Müdürlüğüne Gidin",
        desc: "Belgelerinizi teslim edin. Görevli memur parmak izinizi ve dijital imzanızı alarak başvurunuzu tamamlayacaktır."
      },
      {
        stepNumber: 4,
        title: "PTT Kargo ile Teslimatı Takip Edin",
        desc: "Kişiselleştirilen pasaportunuz yaklaşık 2-5 iş günü içinde beyan ettiğiniz adrese PTT kargo aracılığıyla imza karşılığı teslim edilir."
      }
    ],
    officialSource: {
      title: "Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü (NVİ) Randevu Sistemi",
      url: "https://randevu.nvi.gov.tr/",
      platformName: "İçişleri Bakanlığı NVİ",
      isGovernmentVerified: true
    }
  },
  {
    id: "e-devlet-islemleri",
    title: "E-Devlet İşlemleri (Şifre Alma, Giriş ve Temel Hizmetler)",
    category: "kamu",
    categoryLabel: "Kamu & E-Devlet",
    icon: "fa-landmark",
    badge: "Vazgeçilmez",
    estimatedTime: "5-15 Dakika",
    cost: "PTT Şifre Ücreti (İlk Şifre: ~10-20 TL)",
    shortDesc: "e-Devlet şifresi nasıl alınır, şifre sıfırlama, iki aşamalı güvenlik ve vatandaşlar için en sık kullanılan dijital kamu hizmetleri.",
    whoCanApply: [
      "15 yaşını doldurmuş tüm Türkiye Cumhuriyeti vatandaşları",
      "Mavi Kart sahipleri",
      "Türkiye'de ikamet eden ve yabancı kimlik numarası (99 ile başlayan) bulunan yabancılar"
    ],
    requiredDocuments: [
      { id: "doc-1", name: "T.C. Kimlik Kartı (Fotoğraflı)", note: "Üzerinde T.C. kimlik numarası bulunan resmi kimlik" },
      { id: "doc-2", name: "Kişisel Cep Telefonu Numarası", note: "Doğrulama SMS'i ve iki aşamalı giriş için aktif hat" },
      { id: "doc-3", name: "İnternet Bankacılığı Hesabı (Şifresiz Giriş Alternatifi)", note: "PTT'ye gitmeden doğrudan banka ile giriş yapılabilir" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "PTT Şubesinden veya Bankacılık Üzerinden Şifre Alın",
        desc: "Size en yakın PTT şubesine fotoğraflı kimliğinizle giderek kapalı zarf içinde ilk e-Devlet şifrenizi alın veya anlaşmalı bankaların internet şubesi üzerinden tek tıkla e-Devlet'e bağlanın."
      },
      {
        stepNumber: 2,
        title: "İlk Girişte Şifrenizi Değiştirin",
        desc: "turkiye.gov.tr adresine girin, geçici şifrenizle giriş yaptıktan sonra harf, rakam ve sembol içeren en az 8 karakterli yeni güvenli bir şifre belirleyin."
      },
      {
        stepNumber: 3,
        title: "Telefon ve E-Posta Bilgilerinizi Doğrulayın",
        desc: "Profil ayarlarından cep telefonu ve e-posta adresinizi SMS doğrulama koduyla onaylayın. Bu işlem gelecekte şifrenizi unutursanız SMS ile sıfırlamanızı sağlar."
      },
      {
        stepNumber: 4,
        title: "İki Aşamalı Girişi Aktif Edin",
        desc: "Güvenliğiniz için 'İki Aşamalı Giriş' özelliğini açın. Böylece şifreniz girilse dahi telefonunuza gelen SMS kodu olmadan kimse hesabınıza erişemez."
      },
      {
        stepNumber: 5,
        title: "Temel Hizmetleri Keşfedin",
        desc: "Adli sicil kaydı, ikametgah belgesi, SGK hizmet dökümü, vergi borcu sorgulama ve tapu bilgileri gibi yüzlerce kamu hizmetini saniyeler içinde kullanın."
      }
    ],
    officialSource: {
      title: "Türkiye Cumhuriyeti e-Devlet Kapısı Resmi Web Sitesi",
      url: "https://www.turkiye.gov.tr/",
      platformName: "T.C. Cumhurbaşkanlığı Dijital Dönüşüm Ofisi",
      isGovernmentVerified: true
    }
  },
  {
    id: "universite-kayit-islemleri",
    title: "Üniversite Kayıt İşlemleri (YKS E-Kayıt ve Şahsen Kayıt)",
    category: "egitim",
    categoryLabel: "Eğitim & Öğrenci",
    icon: "fa-school",
    badge: "Dönemsel Önemli",
    estimatedTime: "15-45 Dakika",
    cost: "Devlet Üniversitesi: Ücretsiz (İkinci öğretim hariç)",
    shortDesc: "YKS yerleştirme sonrası e-Devlet üzerinden elektronik üniversite kaydı (E-Kayıt) ve şahsen kayıt rehberi.",
    whoCanApply: [
      "ÖSYM tarafından yapılan YKS (Yükseköğretim Kurumları Sınavı) sonucunda bir üniversite programına yerleşen adaylar",
      "DGS (Dikey Geçiş Sınavı) veya Yatay Geçiş ile kayıt hakkı kazanan öğrenciler",
      "Lise mezuniyet şartını tamamlamış veya şartlı kayıt hakkı tanınan mezun adayları"
    ],
    requiredDocuments: [
      { id: "doc-1", name: "e-Devlet Şifresi", note: "Elektronik kayıt (e-Kayıt) için zorunludur" },
      { id: "doc-2", name: "Lise Diploması veya Mezuniyet Belgesi", note: "MEB sistemi entegrasyonuyla e-Kayıt'ta otomatik kontrol edilir; şahsen kayıtta aslı istenir" },
      { id: "doc-3", name: "T.C. Kimlik Kartı", note: "Şahsen başvurularda kimliğin aslı ve fotokopisi" },
      { id: "doc-4", name: "YKS Yerleştirme Sonuç Belgesi", note: "ÖSYM Aday İşlemleri Sistemi'nden (AİS) barkodlu çıktı" },
      { id: "doc-5", name: "Sağlık Raporu (Gereken Bölümler İçin)", note: "Havacılık, denizcilik, tıp vb. özel sağlık şartı koşan programlar için heyet raporu" },
      { id: "doc-6", name: "Erkek Adaylar İçin Askerlik Durum Belgesi", note: "e-Devlet'ten alınabilir (Askerlikle ilişiği olmadığını gösterir)" },
      { id: "doc-7", name: "Katkı Payı / Harç Dekontu (İkinci Öğretim veya Vakıf İçin)", note: "Birinci öğretim devlet üniversitelerinde harç ücreti bulunmaz" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Kayıt Tarihlerini ve Üniversite Duyurularını İnceleyin",
        desc: "YÖK ve yerleştiğiniz üniversitenin Öğrenci İşleri Daire Başkanlığı web sitesindeki kayıt kılavuzunu inceleyin (E-kayıt genelde Ağustos ayının son haftası yapılır)."
      },
      {
        stepNumber: 2,
        title: "e-Devlet 'Üniversite E-Kayıt' Sistemine Girin",
        desc: "turkiye.gov.tr'de arama kısmına 'Üniversite E-Kayıt' yazın veya Yükseköğretim Kurulu Başkanlığı menüsünden ilgili sayfayı açın."
      },
      {
        stepNumber: 3,
        title: "Bilgilerinizi Onaylayın ve 'EVET' Yazarak Başvuruyu Tamamlayın",
        desc: "Yerleştiğiniz program bilgilerini kontrol edin, ekrandaki onay kutucuklarını işaretleyip onay metnine büyük harflerle 'EVET' yazarak işlemi tamamlayın."
      },
      {
        stepNumber: 4,
        title: "Barkodlu E-Kayıt Belgesini Kaydedin",
        desc: "Kayıt tamamlandığında sistemin oluşturduğu barkodlu elektronik kayıt belgesini bilgisayarınıza indirin ve yazdırın. Bu belge öğrenci belgeniz niteliğindedir."
      },
      {
        stepNumber: 5,
        title: "Üniversitenin Öğrenci Bilgi Sistemine (OBS) Giriş Yapın",
        desc: "Üniversitenizin web sitesinde belirtilen tarih aralığında OBS sistemine şifre alarak giriş yapın ve ders kaydı (danışman onayı) adımlarını tamamlayın."
      }
    ],
    officialSource: {
      title: "YÖK Üniversite Elektronik Kayıt (E-Kayıt) Kapısı",
      url: "https://www.turkiye.gov.tr/yok-universite-ekayit",
      platformName: "e-Devlet / YÖK",
      isGovernmentVerified: true
    }
  }
];

// Kategori tanımları ve meta bilgileri
const CATEGORIES = [
  { id: "all", label: "Tüm Rehberler", icon: "fa-layer-group" },
  { id: "egitim", label: "Eğitim & Öğrenci", icon: "fa-graduation-cap" },
  { id: "kamu", label: "Kamu & E-Devlet", icon: "fa-landmark" },
  { id: "kariyer", label: "Kariyer & İstihdam", icon: "fa-briefcase" },
  { id: "seyahat", label: "Seyahat & Kimlik", icon: "fa-passport" }
];
