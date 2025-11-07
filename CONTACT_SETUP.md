# İletişim Formu Kurulumu

İletişim formu **Web3Forms** kullanıyor. Kurulum çok basit:

## Adımlar:

1. **Web3Forms'a kaydolun:**
   - https://web3forms.com adresine gidin
   - Email adresinizi girin (muhammetyesil@outlook.com.tr)
   - Onay emailini kontrol edin

2. **Access Key alın:**
   - Dashboard'dan access key'inizi kopyalayın
   - Şöyle görünür: `550e8400-e29b-41d4-a716-446655440000`

3. **Key'i ekleyin:**
   - `app/iletisim/page.tsx` dosyasını açın
   - 21. satırda `YOUR_ACCESS_KEY_HERE` yerine kendi key'inizi yapıştırın
   - Dosyayı kaydedin

4. **Test edin:**
   - Siteyi başlatın: `npm run dev`
   - http://localhost:3000/iletisim adresine gidin
   - Formu doldurup gönderin
   - Email adresinize mesaj gelecek!

## Özellikler:

✅ Tamamen ücretsiz (250 mesaj/ay)
✅ Spam koruması
✅ Email bildirimleri
✅ Responsive tasarım
✅ Hata yönetimi
✅ Başarı/hata mesajları

## Alternatif Yöntemler:

Eğer Web3Forms kullanmak istemezseniz:

1. **Formspree** - https://formspree.io
2. **EmailJS** - https://www.emailjs.com
3. **Basin** - https://usebasin.com

Hepsi benzer şekilde çalışır, sadece API endpoint değişir.
