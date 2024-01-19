<template>
  <div class="card-item" :style="{ 'transition-delay': `${delay}s`, 'background-color': backgroundColor, 'border-color': borderColor }">
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
      borderColor: 'rgba(232, 103, 44, 0)', // Initialer Wert für die Borderfarbe
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
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, border-color 0.5s ease-in-out; /* Füge die Border-Transition hinzu */
  border: 1px solid rgba(232, 103, 44, 0); /* Initialer Wert für die Border */
}

a:hover {
  background-color: rgba(18, 18, 18, 0);
}

.card-item:hover {
  background: linear-gradient(to right, rgba(231, 101, 44, 255) 0%, rgba(231, 101, 44, 255) 100%);
}
</style>