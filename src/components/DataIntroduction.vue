<template>
  <div>
    <p class="md-headline">Introduce the measured data:</p>
    <div class="md-layout md-gutter">
      <div v-for="(_, dim) in value" :key="dim" class="md-layout-item md-size-15">
        <md-field>
          <label for="age">{{dim}}</label>
          <md-input step="0.01" :id="dim" :name="dim" v-model.number="value[dim]"/>
        </md-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataIntroduction",
  props: {
    value: {
      type: Object
    }
  }
};
</script>

<style scoped>
</style>