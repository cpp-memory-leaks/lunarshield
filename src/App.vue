<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const isMobile = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 1024;
  if (window.innerWidth > 1024) {
    isMenuOpen.value = false;
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', checkScreenSize);
  checkScreenSize();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<template>
  <div class="gradient-background">
    <div class="gradient-overlay"></div>
  </div>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="nav-logo">
      <span class="logo-text">Lunarshield</span>
    </div>
    <div class="nav-menu" :class="{ 'nav-menu-active': isMenuOpen }">
      <RouterLink to="/" class="nav-link">首页</RouterLink>
      <RouterLink to="/AboutView" class="nav-link">公司介绍</RouterLink>
      <RouterLink to="/IndustryInformation" class="nav-link">行业信息</RouterLink>
      <RouterLink to="/Product" class="nav-link">产品</RouterLink>
      <RouterLink to="/RelatedTechnology" class="nav-link">相关技术</RouterLink>
      <RouterLink to="/Support" class="nav-link">支持</RouterLink>
      <RouterLink to="/Login" class="nav-link">登录</RouterLink>
    </div>
    <button class="menu-toggle" @click="toggleMenu" v-show="isMobile">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
  <main class="main-content">
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView> 
</main>
  </template>

<style>
:root {
  --primary-color: hsla(160, 100%, 37%, 1);
  --primary-hover: hsla(160, 100%, 37%, 0.8);
  --nav-height: 60px;
}

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #0a0a0a;
  color: #fff;
  overflow-x: hidden;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  padding: 0 2rem;
  background: rgba(10, 10, 10, 0.3);
  backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar-scrolled {
  background: rgba(10, 10, 10, 0.8);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.5px;
}

.nav-menu {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  position: relative;
  letter-spacing: 0.3px;
  white-space: nowrap;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color), #36e4da);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover {
  color: #fff;
}

.nav-link:hover::after {
  width: 100%;
}

.router-link-active {
  color: #fff;
  font-weight: 600;
}

.router-link-active::after {
  width: 100%;
}

.main-content {
  padding-top: calc(var(--nav-height) + 1rem);
  margin: 0 auto;
  max-width: 1200px;
  padding-left: 1rem;
  padding-right: 1rem;
}

/* 页面切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .navbar {
    padding: 0 2rem;
  }
  
  .nav-menu {
    gap: 1.5rem;
  }

  .nav-logo {
    font-size: 1.6rem;
  }

  .nav-link {
    padding: 0.5rem 0.8rem;
    font-size: 1rem;
  }
}

.gradient-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background: 
    radial-gradient(circle at 50% 0%, 
      rgba(76, 0, 255, 0.5) 0%, 
      rgba(76, 0, 255, 0) 70%),
    radial-gradient(circle at 85% 30%, 
      rgba(0, 255, 163, 0.5) 0%, 
      rgba(0, 255, 163, 0) 70%),
    radial-gradient(circle at 15% 30%, 
      rgba(255, 0, 183, 0.5) 0%, 
      rgba(255, 0, 183, 0) 70%);
  pointer-events: none;
  z-index: -1;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background: linear-gradient(180deg, 
    rgba(10, 10, 10, 0) 0%,
    rgba(10, 10, 10, 0.8) 50%,
    rgba(10, 10, 10, 1) 100%);
}

@media (max-width: 768px) {
  .gradient-background {
    height: 100vh;
    background-size: 200% 200%;
  }
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.menu-toggle span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: #fff;
  transition: all 0.3s ease;
}

@media (max-width: 1024px) {
  .nav-menu {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.95);
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .nav-menu-active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-link {
    padding: 0.8rem;
    width: 100%;
    text-align: center;
  }
}
</style>