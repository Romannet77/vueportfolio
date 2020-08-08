<template id="">
  <div class="move-area" @mousemove="movefunction" style="width:1000px;height:1000px">
    cursor trap {{ x }},{{ y }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      x: 0,
      y: 0
    }
  },
  methods: {
    movefunction: function (event) {
      console.log(event)
      this.x = event.offsetX
      this.y = event.offsetY
    }
  }
}
</script>

<!-- <template>
  <div id="">
    <p v-on:mousemove="updateCoordinates">
      Coordinates: {{ x }} / {{ y }} <br />
      <span>COORDINATES SPOT</span>
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      x: 0,
      y: 0
    }
  },
  methods: {
    updateCoordinates: function (event) {
      this.x = event.clientX
      this.y = event.clientY
    }
  }
}
</script> -->
