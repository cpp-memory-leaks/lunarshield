<template>
  <div class="about-container">
    <div class="hero-section">
      <h1 class="gradient-text">关于我们</h1>
      <div class="gradient-line"></div>
    </div>

    <div class="content-container">
      <!-- 公司使命 -->
      <section class="mission-section">
        <h2>公司使命</h2>
        <p class="section-text">
          我们致力于让每个人都能负担得起、享受得到高品质的健康管理，通过创新智能戒指科技，提供精准、便捷的健康监测与数据服务，帮助用户更深入地了解自身健康，实现全面提升生活品质。
        </p>
      </section>

      <!-- 公司愿景 -->
      <section class="vision-section">
        <h2>公司愿景</h2>
        <p class="section-text">
          成为全球智能健康穿戴设备的领导者，以前沿技术与用户需求为核心，不断突破自我，为全球用户提供便捷、时尚、可靠的健康管理工具，成为智能戒指市场的首选品牌。
        </p>
      </section>

      <!-- 核心理念 -->
      <section class="values-section">
        <h2>核心理念</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">
              <img src="../assets/img/develop.png" alt="创新为先" />
            </div>
            <h3>创新为先</h3>
            <p>我们坚持技术领先，用全球前沿技术为用户带来更高效、精准的健康体验。</p>
          </div>

          <div class="value-card">
            <div class="value-icon">
              <img src="../assets/img/quality.png" alt="品质至上" />
            </div>
            <h3>品质至上</h3>
            <p>以严谨工艺和严格标准，确保每一枚智能戒指的卓越品质。</p>
          </div>

          <div class="value-card">
            <div class="value-icon">
              <img src="../assets/img/customer.png" alt="客户关怀" />
            </div>
            <h3>客户关怀</h3>
            <p>以用户需求为出发点，为每一位客户提供个性化的智能健康方案，让他们时刻感受到贴心守护。</p>
          </div>

          <div class="value-card">
            <div class="value-icon">
              <img src="../assets/img/health.png" alt="可负担的健康" />
            </div>
            <h3>可负担的健康</h3>
            <p>我们以合理的成本，让更多人有机会享受智能健康穿戴设备的好处，让健康不再昂贵。</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-container {
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
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

section h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: var(--primary-color);
  position: relative;
  display: inline-block;
}

section h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60%;
  height: 3px;
  background: var(--primary-color);
  border-radius: 2px;
}

.section-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.value-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  transition: all 0.3s ease;
  height: 100%;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.value-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.value-icon {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.value-icon img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.value-card h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: var(--primary-color);
  text-align: center;
}

.value-card p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 1.1rem;
  text-align: center;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .gradient-text {
    font-size: 2.5rem;
  }

  section h2 {
    font-size: 2rem;
  }

  .section-text {
    font-size: 1rem;
  }

  .value-card h3 {
    font-size: 1.5rem;
  }

  .value-card p {
    font-size: 1rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
