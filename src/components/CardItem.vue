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
      textColor: 'rgba(18, 18, 18, 0)', // Start with transparent color
      backgroundColor: 'rgba(224, 224, 224, 0)', // Start with transparent background-color
    };
  },
  methods: {
    fadeIn() {
      setTimeout(() => {
        let opacity = 0;
        const interval = setInterval(() => {
          opacity += 0.1;
          this.textColor = `rgba(18, 18, 18, ${opacity})`;
          this.backgroundColor = `rgba(224, 224, 224, ${opacity})`;

          if (opacity >= 1) {
            clearInterval(interval);
          }
        }, 1); // Change the interval to make it faster
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
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out; /* Double the speed */
}

.card-link {
  text-decoration: none;
  color: hsl(0, 0%, 20%);
  text-align: center;
}
</style>
