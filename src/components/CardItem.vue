<template>
  <div class="card-item"
    :style="{ 'transition-delay': `${delay}s`, 'background-color': backgroundColor, 'border-color': borderColor }">
    <router-link :to="link" class="card-link">
      <h2 :style="{ color: textColor }">{{ title }}</h2>
    </router-link>
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
      backgroundColor: 'rgba(215, 215, 215, 0)',
      borderColor: 'rgba(232, 103, 44, 0)', 
    };
  },
  methods: {
    fadeIn() {
      setTimeout(() => {
        let opacity = 0;
        const interval = setInterval(() => {
          opacity += 0.1;
          this.textColor = `rgba(18, 18, 18, ${opacity})`;
          this.backgroundColor = `rgba(215, 215, 215, ${opacity})`;
          this.borderColor = `rgba(232, 103, 44, ${opacity})`;

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
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, border-color 0.5s ease-in-out;
  border: 1px solid rgba(232, 103, 44, 0);
}


a:hover {
  background-color: rgba(18, 18, 18, 0);
}

.card-item:hover {
  background: linear-gradient(to right, rgba(231, 101, 44, 255) 0%, rgba(231, 101, 44, 255) 100%);
}</style>