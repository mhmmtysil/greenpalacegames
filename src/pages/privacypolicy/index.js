import React from "react";
import Layout from "../../../components/layout";
import styles from "./privacypolicy.module.scss";

const PrivacyPolicy = () => {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <h1 className={styles.h1}>Gizlilik Sözleşmesi</h1>
          <div className={styles.content}>
            <p>
              {" "}
              Bu gizlilik sözleşmesi ("Sözleşme"), Green Palace Games ("Şirket",
              "Biz" veya "Bizim") ile Green Palace Games web sitesini ("Site")
              ziyaret eden veya oyunlarımızı kullanan kullanıcılar ("Kullanıcı"
              veya "Siz") arasında geçerlidir. Bu Sözleşme, tarafınızdan
              sağlanan kişisel bilgilerin toplanması, kullanılması ve korunması
              hakkında bilgi içermektedir.
            </p>
            <ol>
              <li>Toplanan Bilgiler</li>
            </ol>
            <p>
              Şirket, oyunlarımızı oynamanız veya Sitemizi ziyaret etmeniz
              sırasında aşağıdaki türden kişisel bilgileri toplayabilir:
            </p>
            <ul>
              <li>İsim</li>
              <li>E-posta adresi</li>
              <li>Kullanıcı adı</li>
              <li>Cihaz bilgileri</li>
              <li>İnternet Protokolü (IP) adresi</li>
              <li>Oyun içi aktiviteler ve tercihler</li>
            </ul>
            <ol start="2">
              <li>Bilgilerin Kullanımı</li>
            </ol>
            <p>
              Toplanan kişisel bilgiler, aşağıdaki amaçlarla kullanılabilir:
            </p>
            <ul>
              <li>Oyun hizmetlerinin sunulması ve iyileştirilmesi</li>
              <li>Müşteri destek hizmetlerinin sağlanması</li>
              <li>Kullanıcı deneyiminin kişiselleştirilmesi</li>
              <li>Yasa gereği veya yasal işlemlerde kullanılması</li>
              <li>Şirket politikalarının uygulanması</li>
            </ul>
            <ol start="3">
              <li>Bilgilerin Paylaşımı</li>
            </ol>
            <p>
              Şirket, toplanan kişisel bilgileri aşağıdaki durumlar dışında
              üçüncü taraflarla paylaşmayacaktır:
            </p>
            <ul>
              <li>Kullanıcının açık rızası olduğu durumlar</li>
              <li>Yasal gereklilikler veya yasal işlemler</li>
              <li>
                Hizmet sağlayıcılar ve işbirliği yaptığımız şirketlerle
                paylaşma, ancak gizliliklerini korumak amacıyla gerekli
                önlemleri almak
              </li>
            </ul>
            <ol start="4">
              <li>Veri Güvenliği</li>
            </ol>
            <p>
              Şirket, kişisel bilgilerin güvenliğini sağlamak için uygun teknik
              ve organizasyonel önlemler alır. Ancak, internet üzerinden
              iletişimin güvenli olmadığını ve tam güvenlik sağlanamayacağını
              unutmayın.
            </p>
            <ol start="5">
              <li>Çerezler</li>
            </ol>
            <p>
              Sitemizde çerezler kullanılabilir. Çerezler, kullanıcıların
              tercihlerini hatırlamamıza ve kullanıcı deneyimini iyileştirmemize
              yardımcı olur. Çerez kullanımı hakkında daha fazla bilgi için
              Çerez Politikamıza başvurun.
            </p>
            <ol start="6">
              <li>Diğer Sitelere Bağlantılar</li>
            </ol>
            <p>
              Sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu
              web siteleri, kendi gizlilik politikalarına sahip olabilir ve
              bizim kontrolümüz dışındadır. Bu web sitelerini ziyaret etmeden
              önce ilgili gizlilik politikalarını kontrol etmeniz önemlidir.
            </p>
            <ol start="7">
              <li>Veri Saklama Süresi</li>
            </ol>
            <p>
              Şirket, toplanan kişisel bilgileri yalnızca belirli bir süre
              boyunca saklayacaktır. Veri saklama süresi, bilgilerin amaçlarına
              ve yasal gerekliliklere uygun olarak belirlenir.
            </p>
            <ol start="8">
              <li>Çocukların Gizliliği</li>
            </ol>
            <p>
              Oyunlarımızı veya Sitemizi 13 yaşından küçük çocuklar
              kullanmamalıdır. Bilerek çocuklardan kişisel bilgi toplamamaya
              çalışırız.
            </p>
            <ol start="9">
              <li>Değişiklikler</li>
            </ol>
            <p>
              Bu Gizlilik Sözleşmesi zaman zaman güncellenebilir. Sözleşme
              üzerindeki değişiklikleri bildirmek için Sitemizi ziyaret
              ettiğinizde güncellenmiş bir sürümü yayınlayacağız. Değişiklikler
              geçerli tarihinden itibaren etkili olacaktır.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
