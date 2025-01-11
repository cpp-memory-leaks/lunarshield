<template>
    <div class="industry-container">
      <div class="hero-section">
        <h1 class="gradient-text">行业信息</h1>
        <div class="gradient-line"></div>
      </div>
  
      <div class="news-container">
        <!-- 三星新闻 -->
        <article class="news-card">
          <div class="news-content">
            <h2>三星 Galaxy Ring</h2>
            <p class="news-text">
              重塑潮流之巅，科技与时尚的璀璨交融三星的Galaxy Ring智能戒指结合了先进的科技和时尚设计，不仅注重健康监测功能，还强调时尚潮流，成为智能穿戴市场中的标志性产品。
            </p>
            <div class="news-meta">
              <p>来源：三星Galaxy Ring：重塑潮流之巅，科技与时尚的璀璨交融</p>
              <p>2024年09月10日 10:29:08 Citnews中文科技资讯</p>
            </div>
            <button class="read-more-btn" @click="readMore">
              阅读更多
              <span class="arrow">→</span>
            </button>
          </div>
        </article>
  
        <!-- 苹果新闻 -->
        <article class="news-card">
          <div class="news-content">
            <h2>苹果专利捧出智能戒指概念</h2>
            <p class="news-text">
              专利捧出智能戒指概念苹果新申请的智能戒指专利展示了其在可穿戴领域的创新理念，智能戒指可能成为未来Apple生态的重要组成部分，为用户提供更多个性化和健康监测服务。
            </p>
            <div class="news-meta">
              <p>来源：苹果专利捧出智能戒指概念</p>
              <p>财联社 2024年09月02日 07:00 上海</p>
            </div>
            <button class="read-more-btn" @click="readMore">
              阅读更多
              <span class="arrow">→</span>
            </button>
          </div>
        </article>
  
        <!-- 行业趋势新闻 -->
        <article class="news-card">
          <div class="news-content">
            <h2>可穿戴行业的大家伙</h2>
            <p class="news-text">
              小小智能戒指，凭什么成了可穿戴行业的"大家伙"？智能戒指以其小巧便捷、多功能的特点吸引了市场关注，具备健康监测、通知提醒等多种功能，逐渐在可穿戴设备领域占据重要地位。
            </p>
            <div class="news-meta">
              <p>来源：小小智能戒指，凭什么成了可穿戴行业的"大家伙"？</p>
              <p>雷科技·2024-08-09 17:11</p>
            </div>
            <button class="read-more-btn" @click="readMore">
              阅读更多
              <span class="arrow">→</span>
            </button>
          </div>
        </article>
  
        <!-- 技术新闻 -->
        <article class="news-card">
          <div class="news-content">
            <h2>经期和妊娠预测</h2>
            <p class="news-text">
              一枚戒指拥有7个温度传感器，可做经期和妊娠预测配备7个温度传感器的智能戒指能够精准监测体温，提供经期和妊娠预测功能，为女性用户带来更全面的健康管理体验。
            </p>
            <div class="news-meta">
              <p>来源：一枚戒指拥有 7 个温度传感器，可做经期和妊娠预测</p>
              <p>ShenzhenWare 知乎知识会员 深圳湾·新硬件·新智能·新生态</p>
              <p>发布于 2021-10-27 16:49</p>
            </div>
            <button class="read-more-btn" @click="readMore">
              阅读更多
              <span class="arrow">→</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  </template>
  
  <script setup>
  const readMore = () => {
    // 这里可以添加阅读更多的逻辑
    console.log('阅读更多');
  };
  </script>
  
  <style scoped>
  .industry-container {
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
  
  .news-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  
  .news-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 30px;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }
  
  .news-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  .news-content h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: var(--primary-color);
  }
  
  .news-text {
    font-size: 1.2rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 20px;
  }
  
  .news-meta {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 20px;
  }
  
  .news-meta p {
    margin: 5px 0;
  }
  
  .read-more-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    padding: 12px 25px;
    color: #fff;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
    backdrop-filter: blur(5px);
  }
  
  .read-more-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(5px);
  }
  
  .arrow {
    transition: transform 0.3s ease;
  }
  
  .read-more-btn:hover .arrow {
    transform: translateX(5px);
  }
  
  @media (max-width: 768px) {
    .gradient-text {
      font-size: 2.5rem;
    }
  
    .news-content h2 {
      font-size: 1.5rem;
    }
  
    .news-text {
      font-size: 1rem;
    }
  
    .read-more-btn {
      font-size: 1rem;
      padding: 10px 20px;
    }
  }
  </style>