<template>
  <div class="product-container">
    <div class="hero-section">
      <h1 class="gradient-text">守月产品</h1>
      <div class="gradient-line"></div>
    </div>

    <div class="content-container">
      <div class="product-showcase">
        <div class="product-image">
          <img src="../assets/img/ring-preview.png" alt="DR520 智能戒指" />
        </div>

        <div class="product-details">
          <h2>型号: DR520</h2>
          
          <div class="model-variants">
            <div class="variant-card" :class="{ active: selectedModel === 'WG1' }" @click="selectModel('WG1')">
              <h3>-WG1</h3>
              <p>守护健康版</p>
            </div>

            <div class="variant-card" :class="{ active: selectedModel === 'CG1' }" @click="selectModel('CG1')">
              <h3>-CG1</h3>
              <p>女性知音版</p>
            </div>

            <div class="variant-card" :class="{ active: selectedModel === 'HG1' }" @click="selectModel('HG1')">
              <h3>-HG1</h3>
              <p>随身护士版</p>
            </div>
          </div>

          <div class="size-selector">
            <h3>选择您的尺寸</h3>
            <div class="size-options">
              <button 
                v-for="size in sizes" 
                :key="size"
                :class="{ active: selectedSize === size }"
                @click="selectSize(size)"
                class="size-btn"
              >
                {{ size }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <section class="notice-section">
        <h2>注意事项</h2>
        <div class="notice-items">
          <div class="notice-item" v-for="(item, index) in noticeItems" :key="index" @click="toggleNotice(index)">
            <div class="notice-header">
              <h3>{{ item.title }}</h3>
              <span class="arrow" :class="{ 'arrow-down': item.isOpen }">→</span>
            </div>
            <div class="notice-content" v-if="item.isOpen">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedModel = ref('WG1');
const selectedSize = ref('21');
const sizes = ['13', '16', '18', '21', '23', '25', '27'];

const noticeItems = ref([
  {
    title: '戒指戴在哪个手指最合适？',
    content: `这取决于文化习俗、个人偏好以及戒指的类型和意义。以下是一些常见建议：

1. 无名指：
• 左手无名指通常用于佩戴订婚戒指和结婚戒指
• 右手无名指在某些国家也有类似传统

2. 食指：
• 血流量较大，有利于健康监测
• 佩戴舒适，不影响日常活动

3. 中指：
• 同样血流量充足
• 适合健康监测功能

4. 选择建议：
• 建议优先选择食指或中指
• 这些手指的血流量较大 
• 可以获得更准确的监测数据
• 佩戴舒适度高`,
    isOpen: false
  },
  {
    title: '如何选择合适的戒指尺寸',
    content: `选择合适的戒指尺寸对于舒适度和监测准确性至关重要：

1. 测量方法：
• 使用专业戒指尺寸棒测量
• 在正常温度下测量
• 考虑一天中不同时段的手指粗细变化

2. 注意事项：
• 确保戒指不会太松或太紧
• 避免影响血液循环
• 考虑季节变化对手指尺寸的影响

3. 建议尺寸：
• 戒指应该能够轻松转动
• 但不会自行滑落
• 建议留有0.5mm的余量`,
    isOpen: false
  },
  {
    title: '步数与距离的关系',
    content: `距离 = 步数 × 步长

• 步长因素：
  - 身高
  - 行走速度
  - 地形条件

• 计算方式：
  - 系统会根据您的身高自动计算步长
  - 通过加速度传感器识别步数
  - 结合GPS数据提高准确性

• 精确度：
  - 平地行走误差通常在±5%以内
  - 上下坡路段可能略有偏差`,
    isOpen: false
  },
  {
    title: '步数与卡路里的关系',
    content: `卡路里消耗 = 步数 × 每步消耗的卡路里

• 影响因素：
  - 体重
  - 行走速度
  - 地形坡度
  - 身体状况

• 计算方式：
  - 基础代谢率
  - 运动强度
  - 持续时间
  - 实时心率数据

• 注意事项：
  - 数据仅供参考
  - 建议结合其他健康指标
  - 可通过APP查看详细分析`,
    isOpen: false
  }
]);

const selectModel = (model) => {
  selectedModel.value = model;
};

const selectSize = (size) => {
  selectedSize.value = size;
};

const toggleNotice = (index) => {
  noticeItems.value[index].isOpen = !noticeItems.value[index].isOpen;
};
</script>

<style scoped>
.product-container {
  padding: 20px;
  color: #fff;
}

.hero-section {
  text-align: center;
  padding: 40px 0;
  margin-bottom: 40px;
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
  position: relative;
  z-index: 1;
}

.product-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 80px;
}

.product-image {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.product-image img {
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.product-image:hover img {
  transform: scale(1.05);
}

.product-details {
  padding: 20px;
}

.product-details h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: var(--primary-color);
}

.model-variants {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.variant-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.variant-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(10px);
}

.variant-card.active {
  background: rgba(var(--primary-color), 0.2);
  border-color: var(--primary-color);
}

.variant-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.size-selector {
  margin-top: 40px;
}

.size-selector h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.size-options {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.size-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #fff;
  font-size: 1.1rem;
}

.size-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.size-btn.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
}

.notice-section {
  margin-top: 80px;
}

.notice-section h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: var(--primary-color);
}

.notice-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.notice-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.notice-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notice-header h3 {
  font-size: 1.3rem;
}

.arrow {
  transition: transform 0.3s ease;
}

.arrow-down {
  transform: rotate(90deg);
}

.notice-content {
  margin-top: 20px;
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  white-space: pre-line;
}

.notice-item:hover {
  transform: translateX(5px);
  background: rgba(255, 255, 255, 0.08);
}

@media (max-width: 1024px) {
  .product-showcase {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .gradient-text {
    font-size: 2.5rem;
  }

  .product-details h2 {
    font-size: 2rem;
  }

  .variant-card h3 {
    font-size: 1.3rem;
  }

  .size-btn {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}
</style>