<template>
  <div class="tech-container">
    <div class="hero-section">
      <h1 class="gradient-text">相关技术</h1>
      <div class="gradient-line"></div>
    </div>

    <div class="content-container">
      <div class="tech-articles">
        <!-- 文章1 -->
        <article class="tech-card">
          <div class="article-content">
            <h2>科学家研发无线智能戒指追踪三维手指运动及监测健康</h2>
            <p class="article-description">
              最新研究突破性地实现了低成本高精度的智能戒指技术，材料成本低于175元，为可穿戴设备领域带来新的可能。
            </p>
            <div class="article-meta">
              <p>DeepTech深科技</p>
              <p>2023-07-02 22:28 发布于北京</p>
            </div>
            <button class="read-more-btn" @click="readArticle(1)">
              阅读更多
              <span class="arrow">→</span>
            </button>
          </div>
        </article>

        <!-- 文章2 -->
        <article class="tech-card">
          <div class="article-content">
            <h2>华为智能穿戴设备睡眠监测原理介绍</h2>
            <p class="article-description">
              深入解析华为最新智能穿戴设备的睡眠监测技术，包括多传感器融合和AI算法应用。
            </p>
            <div class="article-meta">
              <p>华为技术论坛</p>
              <p>2023-07-02</p>
            </div>
            <button class="read-more-btn" @click="readArticle(2)">
              阅读更多
              <span class="arrow">→</span>
            </button>
          </div>
        </article>

        <!-- 文章3 -->
        <article class="tech-card">
          <div class="article-content">
            <h2>三星Watch 5新增基于皮肤温度周期跟踪功能</h2>
            <p class="article-description">
              智能穿戴再添新利器，三星最新技术让健康监测更加精准。
            </p>
            <div class="article-meta">
              <p>Argon科技</p>
              <p>2023-05-27 10:55 广东</p>
            </div>
            <button class="read-more-btn" @click="readArticle(3)">
              阅读更多
              <span class="arrow">→</span>
            </button>
          </div>
        </article>

        <!-- 文章4 -->
        <article class="tech-card">
          <div class="article-content">
            <h2>血氧饱和度监测技术解析</h2>
            <p class="article-description">
              想要提升心肺功能监测的准确性，智能穿戴设备的血氧监测技术至关重要。
            </p>
            <div class="article-meta">
              <p>智能健康研究院</p>
              <p>2023-05-27</p>
            </div>
            <button class="read-more-btn" @click="readArticle(4)">
              阅读更多
              <span class="arrow">→</span>
            </button>
          </div>
        </article>
      </div>

      <!-- 参考链接部分 -->
      <section class="references-section">
        <h2>技术参考</h2>
        <div class="reference-links">
          <a href="https://new.qq.com/rain/a/20230702A06EPX00" target="_blank" class="reference-link">
            智能戒指技术发展报告
          </a>
          <a href="https://consumer.huawei.com/cn/support/content/zh-cn15963854/" target="_blank" class="reference-link">
            华为穿戴技术白皮书
          </a>
          <a href="https://baijiahao.baidu.com/s?id=1767014263159168930" target="_blank" class="reference-link">
            三星健康监测技术解析
          </a>
          <a href="https://www.thepaper.cn/newsDetail_forward_22507426" target="_blank" class="reference-link">
            智能穿戴健康监测研究
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const readArticle = (id) => {
  // 这里可以添加阅读文章的逻辑
  console.log('Reading article:', id);
};
</script>

<style scoped>
.tech-container {
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

.tech-articles {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.tech-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.tech-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.article-content h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.article-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
}

.article-meta {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
}

.article-meta p {
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

.references-section {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.references-section h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: var(--primary-color);
}

.reference-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.reference-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
}

.reference-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transform: translateX(10px);
}

@media (max-width: 768px) {
  .gradient-text {
    font-size: 2.5rem;
  }

  .article-content h2 {
    font-size: 1.5rem;
  }

  .article-description {
    font-size: 1rem;
  }

  .read-more-btn {
    font-size: 1rem;
    padding: 10px 20px;
  }

  .reference-link {
    font-size: 1rem;
  }
}
</style>