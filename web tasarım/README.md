# İşlem Rehberi (Web Projesi - Sürüm 1.0)

Resmi ve günlük vatandaşlık, eğitim, kariyer ve bürokratik işlemler için adım adım yol haritası sunan modern arayüz projesi.

## 📌 Proje Genel Bakışı
Bu proje saf **HTML5, CSS3 ve JavaScript (Vanilla JS)** teknolojileriyle geliştirilmiş, herhangi bir harici kütüphane veya backend bağımlılığı gerektirmeyen, doğrudan tarayıcı üzerinden çalışan bir web uygulamasıdır.

### 🌟 Hazırlanan 6 Temel Rehber:
1. **Burs Başvurusu:** KYK ve özel vakıf bursları başvuru şartları, gelir beyanı evrakları, e-Devlet taahhütname onayı ve Ziraat Bankkart teslim süreci.
2. **Öğrenci Belgesi Alma:** Üniversite ve MEB kayıtlı öğrencilerin e-Devlet kapısı üzerinden anında barkodlu/karekodlu resmi belge oluşturma rehberi.
3. **İş Başvurusu:** İŞKUR kaydı, etkili özgeçmiş (CV) hazırlama, askerlik & adli sicil dökümü, Kariyer Kapısı ve mülakat hazırlığı.
4. **Pasaport Başvurusu:** Harç ve defter bedeli yatırma, NVİ randevu alma, biyometrik fotoğraf standartları ve 25 yaş altı öğrenciler için harçsız pasaport rehberi.
5. **E-Devlet İşlemleri:** PTT şubesinden ve internet bankacılığıyla şifre alma, iki aşamalı giriş güvenliği, iletişim bilgisi doğrulama ve temel kamu sorgulamaları.
6. **Üniversite Kayıt İşlemleri:** YKS yerleştirme sonrası e-Devlet üzerinden elektronik kayıt (E-Kayıt), şahsen kayıt gereken durumlar, evraklar ve OBS (Öğrenci Bilgi Sistemi) ders kaydı.

---

## 🎯 Her Rehberde Yer Alan Zorunlu Bölümler:
Her rehber detay penceresinde (modal) aşağıdaki 4 ana bölüm yer almaktadır:
- **1. Kimler Başvurabilir?** – Yaş, eğitim ve yasal uygunluk koşulları listesi.
- **2. Gerekli Belgeler** – İnteraktif kontrol listesi (kullanıcı hazırladığı evrakları işaretleyebilir, ilerleme çubuğu güncellenir ve durum tarayıcıda saklanır).
- **3. İşlem Adımları** – Numaralandırılmış adım adım görsel zaman çizelgesi (stepper).
- **4. Resmî Kaynak Bağlantısı** – İlgili kamu kurumunun (`turkiye.gov.tr`, `randevu.nvi.gov.tr`, `esube.iskur.gov.tr`, vb.) doğrulanmış doğrudan bağlantısı.

---

## 🚀 Öne Çıkan Özellikler:
- **Anlık Canlı Arama:** Başlık, açıklama, evrak isimleri ve işlem adımları içinde Türkçe karakter duyarlı arama.
- **Kategori Filtreleme:** Eğitim, Kamu & E-Devlet, Kariyer & İstihdam ve Seyahat & Kimlik sekmeleri ve canlı sayaçlar.
- **Hızlı Arama Etiketleri:** Tek tıkla sık aranan terimleri filtreleme.
- **Karanlık / Aydınlık Mod (Dark/Light Mode):** Tercihi hatırlayan modern tema desteği.
- **Yazdır / PDF Desteği:** Rehberi temiz bir şekilde yazıcıya veya PDF'e aktarma.
- **Bağlantı Paylaşma (Deep Linking):** Belirli bir rehberi doğrudan URL (`#burs-basvurusu`) üzerinden açabilme ve paylaşma.
- **Tam Duyarlı (Responsive):** Mobil, tablet ve masaüstü uyumlu tasarım.

---

## 📂 Dosya Yapısı:
```text
web tasarım/
│
├── index.html          # Ana sayfa, filtreler, rehber gridi ve detay modal şablonu
├── README.md           # Proje belgelendirmesi
├── css/
│   └── style.css       # Tasarım, tipografi, grid yapısı, modal ve animasyonlar
└── js/
    ├── data.js         # 6 adet rehberin kapsamlı verisi, belgeleri, adımları ve kaynak linkleri
    └── app.js          # Arama, filtreleme, modal etkileşimi, tema ve yerel depolama mantığı
```

---

## 💻 Nasıl Çalıştırılır?
1. `c:\Users\muham\OneDrive\Desktop\web tasarım` klasöründeki **`index.html`** dosyasına çift tıklayarak herhangi bir modern web tarayıcısında (Chrome, Edge, Firefox vb.) doğrudan açabilirsiniz.
2. Herhangi bir sunucu kurulumuna ihtiyaç yoktur.
