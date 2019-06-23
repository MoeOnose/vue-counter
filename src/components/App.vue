<template>
  <div>
    <!-- <p>Hello, World!</p> -->
    <counter/>
  </div>
</template>

<script>
import counter from './Counter' 
export default {
    components: {counter}    
}
</script>


<style scoped>
  * {
    border: 10px solid blue;
  }
</style>