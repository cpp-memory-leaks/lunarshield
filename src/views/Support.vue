<template>
  <div class="support-container">
    <div class="hero-section">
      <h1 class="gradient-text">支持</h1>
      <div class="gradient-line"></div>
    </div>

    <div class="content-container">
      <!-- APP下载部分 -->
      <section class="download-section">
        <h2>APP下载</h2>
        <div class="download-options">
          <div class="download-card">
            <div class="platform-icon">
              <img src="../assets/img/Android.png" alt="Android" />
            </div>
            <h3>Android版本</h3>
            <button class="download-btn">
              下载安装包
              <span class="arrow">→</span>
            </button>
          </div>

          <div class="download-card">
            <div class="platform-icon">
              <img src="../assets/img/iOS.png" alt="iOS" />
            </div>
            <h3>iOS版本</h3>
            <button class="download-btn">
              前往App Store
              <span class="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      <!-- 商务合作部分 -->
      <section class="business-section">
        <h2>商务合作</h2>
        <div class="qr-codes">
          <div class="qr-card">
            <img src="../assets/img/wechat.png" alt="商务合作二维码" />
            <p>扫码洽谈合作</p>
          </div>
        </div>
      </section>

      <!-- 联系方式部分 -->
      <section class="contact-section">
        <h2>联系方式</h2>
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <img src="../assets/img/address_logo.png" alt="地址" />
            </div>
            <div class="contact-text">
              <p>深圳市数字戒指科技有限公司</p>
              <p>深圳市守月科技有限公司</p>
              <p>深圳市宝安区航城街道黄麻布社区簕竹角坚鼎科技园1栋厂房2层</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <img src="../assets/img/email.png" alt="邮箱" />
            </div>
            <div class="contact-text">
              <p>lunarshied@foxmail.com</p>
            </div>
          </div>

          <div class="contact-methods">
            <div class="method-card">
              <div class="method-icon">
                <img src="../assets/img/wechat_logo.png" alt="微信" />
              </div>
              <p>微信</p>
              <img class="qr-code" src="../assets/img/wechat.png" alt="微信二维码" />
            </div>

            <div class="method-card">
              <div class="method-icon">
                <img src="../assets/img/phone_logo.png" alt="电话" />
              </div>
              <p>电话</p>
              <img class="qr-code" src="../assets/img/phone.png" alt="电话二维码" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.support-container {
  padding: 20px;
  color: #fff;
}

.hero-section {
  text-align: center;
  padding: 40px 0;
  margin-bottom: 60px;
}

.gradient-text {
  font-size: 3.5rem;
  background: linear-gradient(135deg, #00dc82 0%, #36e4da 50%, #0047e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
}

.gradient-line {
  height: 4px;
  width: 100px;
  margin: 0 auto;
  background: linear-gradient(90deg, #00dc82, #36e4da);
  border-radius: 2px;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
}

section {
  margin-bottom: 80px;
}

section h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: var(--primary-color);
}

.download-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.download-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.download-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.platform-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
}

.platform-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.download-card h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.download-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  padding: 12px 25px;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.download-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(5px);
}

.contact-info {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;
}

.contact-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.contact-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.contact-text {
  font-size: 1.2rem;
  line-height: 1.8;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.method-card {
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.method-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
}

.method-icon {
  width: 50px;
  height: 50px;
  margin: 0 auto 15px;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.method-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.qr-code {
  width: 150px;
  height: 150px;
  margin-top: 20px;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .gradient-text {
    font-size: 2.5rem;
  }

  section h2 {
    font-size: 2rem;
  }

  .download-card h3 {
    font-size: 1.5rem;
  }

  .contact-text {
    font-size: 1rem;
  }

  .contact-info {
    padding: 20px;
  }
}
</style>