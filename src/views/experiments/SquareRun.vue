<template>
  <div ref="draggableContainer" id="draggable-container">
    <p>{{ square }}</p>
    <div id="square-runner" @mouseover="makeSquareRun" style="height:50px;width:50px;background-color:green;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DraggableDiv',
  data: function () {
    return {
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0
      }
    }
  },
  methods: {
    makeSquareRun: function (event) {
      event.preventDefault()
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      document.onmousemove = this.elementRun
      // document.onmouseup = this.closeDragElement
    },
    elementRun: function (event) {
      event.preventDefault()
      this.positions.movementX = this.positions.clientX + event.clientX
      this.positions.movementY = this.positions.clientY + event.clientY
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      // set the element's new position:
      this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
      this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
    }
  }
}
</script>

/* <style>
#draggable-container {
  position: absolute;
  z-index: 9;
}
#draggable-header {
  z-index: 10;
}
</style> */
