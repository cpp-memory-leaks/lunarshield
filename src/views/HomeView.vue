<template>
  <div class="home-container">
    <div class="tech-hero">
      <div class="tech-particles"></div>
      <div class="tech-grid">
        <div class="grid-line" v-for="n in 20" :key="n"></div>
      </div>
      <div class="floating-rings">
        <div class="ring" v-for="n in 3" :key="n"></div>
      </div>
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="main-title">
            标定睡眠质量
            <br />
            衡量工作生活压力
            <br />
            关爱女性生理周期
            <br />
            贴身守护健康
          </h1>
          <p class="subtitle">
            Smart Wellness, Seamlessly Yours
            <br />
            – DigitalRing
          </p>
        </div>
        <div class="hero-image">
          <img src="../assets/img/ring-preview.png" alt="Digital Ring" />
        </div>
      </div>
    </div>

    <section class="product-section">
      <button class="product-button" @click="navigateToProduct">
        <span>守月产品</span>
        <div class="button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </button>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToProduct = () => {
  router.push('/Product');
};
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  padding: 0;
  color: #fff;
  overflow: hidden;
}

.tech-hero {
  position: relative;
  min-height: 80vh;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.1), rgba(0, 71, 225, 0.1));
}

.tech-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  animation: particleFloat 20s linear infinite;
}

.tech-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}

.grid-line {
  width: 100%;
  height: 100%;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  transform: perspective(1000px) rotateX(60deg);
}

.floating-rings {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.ring {
  position: absolute;
  border: 2px solid rgba(0, 220, 130, 0.3);
  border-radius: 50%;
  animation: ringFloat 10s ease-in-out infinite;
}

.ring:nth-child(1) {
  width: 200px;
  height: 200px;
  left: 20%;
  top: 30%;
  animation-delay: 0s;
}

.ring:nth-child(2) {
  width: 300px;
  height: 300px;
  left: 50%;
  top: 50%;
  animation-delay: -3s;
}

.ring:nth-child(3) {
  width: 150px;
  height: 150px;
  left: 70%;
  top: 20%;
  animation-delay: -6s;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 100px 20px;
  gap: 60px;
}

.hero-text {
  flex: 1;
}

.main-title {
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 40px;
  background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.5rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

.hero-image {
  flex: 1;
  position: relative;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  transition: transform 0.3s ease;
  animation: floatImage 6s ease-in-out infinite;
}

.product-section {
  padding: 40px 20px;
  display: flex;
  justify-content: flex-start;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.product-button {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  padding: 15px 30px;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

@keyframes particleFloat {
  0% { transform: translateY(0); }
  100% { transform: translateY(30px); }
}

@keyframes ringFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes floatImage {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* 保持原有的响应式样式 */
@media (max-width: 1024px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }

  .main-title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .product-section {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 40px 0;
  }

  .main-title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .product-button {
    font-size: 1rem;
    padding: 12px 24px;
  }
}
</style>
