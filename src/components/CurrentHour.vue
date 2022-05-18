<template>
  <div class="current-hour">
    <h2 class="hour">{{hours}} H {{ minutes }}</h2>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      hours: 0,
      minutes: 0,
    }
  },
  
  created() {
    this.setTime()
  },

  mounted() {
    setInterval(() => this.setTime(), 1000)
  },

  methods: {
    setTime() {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      
      hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours; // ici pour mettre un 0 quand est est sur 18 h 01 par exemple sinon ça affiche 18 H 1
      minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;

      this.hours = hours;
      this.minutes = minutes;
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');

.current-hour{
  position: absolute;
  right: 2%;
  top: 6%;
}

.hour{
  text-align: center;
  font-size: 85px;
  font-family: 'Inter', sans-serif;
  font-weight: 100;
  line-height: 103px;
  color: #FFFFFF;
}
</style>
