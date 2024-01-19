<!-- CardItem.vue -->
<template>
  <div class="card-item" :style="{ 'transition-delay': `${delay}s`, 'background-color': backgroundColor }">
    <a :href="link" class="card-link">
      <h2 :style="{ color: textColor }">{{ title }}</h2>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
    delay: Number,
  },
  data() {
    return {
      textColor: 'rgba(18, 18, 18, 0)', 
      backgroundColor: 'rgba(200, 200, 200, 0)',
    };
  },
  methods: {
    fadeIn() {
      setTimeout(() => {
        let opacity = 0;
        const interval = setInterval(() => {
          opacity += 0.1;
          this.textColor = `rgba(18, 18, 18, ${opacity})`;
          this.backgroundColor = `rgba(200, 200, 200, ${opacity})`;

          if (opacity >= 1) {
            clearInterval(interval);
          }
        }, 20);
      }, this.delay * 10000);
    },
  },
  mounted() {
    this.fadeIn();
  },
};
</script>

<style scoped>
.card-item {
  width: 300px;
  height: 100px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
}

a:hover {
  background-color: rgba(18, 18, 18, 0);
}

.card-item:hover {
  box-shadow: 0 0 11px rgba(21, 45, 58, 255);
  background: linear-gradient(to right, rgba(231, 101, 44, 255) 0%, rgba(231, 101, 44, 255) 100%);
  color: rgb(255, 255, 255);
}

.card-link {
  text-decoration: none;
  color: hsl(0, 0%, 20%);
  text-align: center;
}
</style>
