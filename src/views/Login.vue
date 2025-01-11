<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-header">
        <h1 class="gradient-text">欢迎回来</h1>
        <p class="subtitle">登录您的守月账号</p>
      </div>

      <form class="login-form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">
            <i class="fas fa-user"></i>
          </label>
          <input 
            type="text" 
            id="username" 
            v-model="username" 
            placeholder="用户名/邮箱"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">
            <i class="fas fa-lock"></i>
          </label>
          <input 
            :type="showPassword ? 'text' : 'password'" 
            id="password" 
            v-model="password" 
            placeholder="密码"
            required
          />
          <button 
            type="button" 
            class="toggle-password"
            @click="showPassword = !showPassword"
          >
            <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
          </button>
        </div>

        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox" v-model="rememberMe" />
            <span>记住我</span>
          </label>
          <a href="#" class="forgot-password">忘记密码？</a>
        </div>

        <button type="submit" class="login-button">
          登录
          <i class="fas fa-arrow-right"></i>
        </button>

        <div class="divider">
          <span>或</span>
        </div>

        <div class="social-login">
          <button type="button" class="social-btn wechat">
            <i class="fab fa-weixin"></i>
          </button>
          <button type="button" class="social-btn qq">
            <i class="fab fa-qq"></i>
          </button>
        </div>

        <p class="register-link">
          还没有账号？ <a href="#">立即注册</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const showPassword = ref(false);
const rememberMe = ref(false);

const handleLogin = () => {
  // 处理登录逻辑
  console.log('登录信息：', {
    username: username.value,
    password: password.value,
    rememberMe: rememberMe.value
  });
};
</script>

<style scoped>
.login-container {
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background: linear-gradient(135deg, rgba(0, 220, 130, 0.1), rgba(0, 71, 225, 0.1));
}

.login-card {
  width: 100%;
  max-width: 420px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.login-header {
  text-align: center;
  margin-bottom: 40px;
}

.gradient-text {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #00dc82 0%, #36e4da 50%, #0047e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
}

.form-group {
  position: relative;
  margin-bottom: 25px;
}

.form-group label {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
}

.form-group input {
  width: 85%;
  padding: 15px 15px 15px 45px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus {
  border-color: var(--primary-color);
  background: rgba(255, 255, 255, 0.1);
  outline: none;
}

.toggle-password {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  color: rgba(255, 255, 255, 0.8);
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.forgot-password {
  color: var(--primary-color);
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.forgot-password:hover {
  opacity: 0.8;
}

.login-button {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #00dc82, #36e4da);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.login-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 220, 130, 0.3);
}

.divider {
  text-align: center;
  margin: 25px 0;
  position: relative;
  color: rgba(255, 255, 255, 0.6);
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 45%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 25px;
}

.social-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.1);
}

.wechat:hover {
  color: #07c160;
}

.qq:hover {
  color: #12b7f5;
}

.register-link {
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
}

.register-link a {
  color: var(--primary-color);
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.register-link a:hover {
  opacity: 0.8;
}

@media (max-width: 480px) {
  .login-card {
    padding: 30px 20px;
  }

  .gradient-text {
    font-size: 2rem;
  }

  .form-group input {
    padding: 12px 12px 12px 40px;
  }
}
</style>