<template>
  <div class="content">
    <div class="hero-section">
      <h1 class="gradient-text">公司介绍</h1>
      <div class="gradient-line"></div>
    </div>

    <section class="mission-section">
      <h2>公司使命</h2>
      <p class="animated-text">
        我们致力于让每个人都能负担得起，享受得高品质的健康管理，通过创新智能流体科技，提供精准、
        便捷的健康监测与数据服务，帮助用户更深入地了解自身健康，实现全面提升生活品质。
      </p>
    </section>

    <section class="vision-section">
      <h2>公司愿景</h2>
      <p class="animated-text">
        成为全球智能健康穿戴设备的领导者，以前沿技术与用户需求为核心，不断突破自我，为全球用户提供便捷、时尚、可靠的健康管理工具，
        成为智能流体市场的首选品牌。
      </p>
    </section>

    <section class="values-section">
      <h2>核心理念</h2>
      <div class="core-values">
        <div class="value" v-for="(value, index) in coreValues" :key="index">
          <div class="value-card">
            <div class="value-icon">
              <img :src="value.icon" :alt="value.title" />
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const coreValues = [
  {
    title: '创新为先',
    description: '我们坚持技术领先，用全球前沿技术为用户带来高效、精准的健康体验。',
    icon: '../src/assets/img/develop.png'
  },
  {
    title: '品质至上',
    description: '以严谨工艺和严格标准，确保每一枚智能戒指的卓越品质。',
    icon: '../src/assets/img/quality.png'
  },
  {
    title: '客户关怀',
    description: '以用户需求为出发点，为每一位客户提供个性化的智能健康方案。',
    icon: '../src/assets/img/customer.png'
  },
  {
    title: '可负担的健康',
    description: '我们以公平的成本，让更多人享受智能健康穿戴设备的好处。',
    icon: '../src/assets/img/health.png'
  }
];
</script>

<style scoped>
.content {
  color: #fff;
  padding: 0 20px;
  font-size: 1.6rem;
}

.hero-section {
  text-align: center;
  padding: 30px 0;
  position: relative;
}

.gradient-text {
  font-size: 4rem;
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

section {
  margin: 80px 0;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

section h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #fff;
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

.animated-text {
  font-size: 1.25rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
}

.core-values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 20px 0;
}

.value-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
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
}

.value-icon img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-left: 25px;
}

.value-card h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.value-card p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 1.1rem;
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
    font-size: 3rem;
  }

  section {
    margin: 40px 0;
  }

  .core-values {
    grid-template-columns: 1fr;
    font-size: medium;
  }

  section h2 {
    font-size: 2rem;
  }

  .value-card h3 {
    font-size: 1.5rem;
  }

  .value-card p {
    font-size: 1rem;
  }
}
</style>