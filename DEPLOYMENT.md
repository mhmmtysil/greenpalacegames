# Green Palace Games - GitHub Pages Deployment

GitHub Pages'de yayınlamak için adım adım talimatlar.

## 📋 Önkoşullar

- GitHub hesabı
- Git kurulu
- Proje dosyaları hazır

## 🚀 Deployment Adımları

### 1. GitHub Repository Oluşturma

1. [GitHub](https://github.com) üzerinde yeni bir repository oluşturun
   - Repository adı: `greenpalacegames`
   - Public olarak işaretleyin

### 2. Projeyi GitHub'a Yükleme

Terminal'de şu komutları çalıştırın:

\`\`\`bash
# GitHub repository'sini ekleyin (URL'i kendi repository URL'inizle değiştirin)
git remote add origin https://github.com/KULLANICI_ADINIZ/greenpalacegames.git

# Dosyaları commit edin
git add .
git commit -m "Initial commit: Green Palace Games website"

# Main branch'e push edin
git branch -M main
git push -u origin main
\`\`\`

### 3. GitHub Pages Ayarları

1. GitHub repository sayfanızda **Settings** sekmesine gidin
2. Sol menüden **Pages** sekmesine tıklayın
3. **Source** bölümünde **GitHub Actions** seçeneğini seçin

### 4. Otomatik Deployment

Push işleminden sonra GitHub Actions otomatik olarak:
- Projeyi build edecek
- Static dosyaları oluşturacak
- GitHub Pages'e deploy edecek

Actions sekmesinden deployment durumunu takip edebilirsiniz.

### 5. Site URL

Site şu adreste yayınlanacak:
\`\`\`
https://KULLANICI_ADINIZ.github.io/greenpalacegames/
\`\`\`

## ⚙️ Yapılandırma Detayları

### Next.js Static Export

Proje otomatik olarak static HTML/CSS/JS dosyalarına dönüştürülür:

- **output**: export
- **images**: unoptimized (GitHub Pages için)
- **basePath**: /greenpalacegames
- **assetPrefix**: /greenpalacegames/

### GitHub Actions Workflow

`.github/workflows/deploy.yml` dosyası:
- Main branch'e her push'ta çalışır
- Node.js 20 kullanır
- Otomatik build ve deploy işlemi

## 🔄 Güncelleme

Değişikliklerinizi yayınlamak için:

\`\`\`bash
git add .
git commit -m "Açıklama mesajı"
git push
\`\`\`

GitHub Actions otomatik olarak yeni versiyonu deploy edecek.

## 🐛 Sorun Giderme

### Build hatası alıyorsanız:

1. Local'de test edin:
\`\`\`bash
npm run build
\`\`\`

2. GitHub Actions loglarını kontrol edin:
   - Repository > Actions sekmesi
   - Başarısız workflow'a tıklayın
   - Hata mesajlarını inceleyin

### Sayfalar yüklenmiyor:

1. GitHub Pages ayarlarını kontrol edin
2. Custom domain kullanıyorsanız DNS ayarlarını kontrol edin
3. Browser cache'i temizleyin

### 404 Hatası

- Repository adının next.config.ts'deki basePath ile eşleştiğinden emin olun
- Repo adı farklıysa next.config.ts'i güncelleyin

## 📝 Notlar

- İlk deployment 2-5 dakika sürebilir
- Her push sonrası deployment ~1-2 dakika sürer
- Private repository'lerde GitHub Pages için GitHub Pro gerekir

## 🔗 Özel Domain (Opsiyonel)

Kendi domain'inizi kullanmak için:

1. Repository Settings > Pages > Custom domain
2. Domain adınızı girin (örn: games.example.com)
3. DNS ayarlarınızda CNAME kaydı ekleyin:
   - Name: games (veya subdomain)
   - Value: KULLANICI_ADINIZ.github.io

---

**Başarılı deployment sonrası siteniz canlıya alınmış olacak! 🎉**
