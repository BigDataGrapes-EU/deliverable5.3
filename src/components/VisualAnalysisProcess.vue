<template>
  <md-steppers :md-active-step.sync="active" md-linear style="overflow: auto">
    <md-step id="configuration" md-label="Configuration" md-description="Data and Parameters">
      <data-introduction v-model="formData"/>
      <p class="md-headline">Select the visualization:</p>
      <div>
        <md-radio v-model="vizRadio" value="parallel-chart">Parallel Coordinates</md-radio>
        <md-radio v-model="vizRadio" value="waterfall-chart">Waterfall</md-radio>
      </div>
      <br>
      <md-button @click="updateAndVisualize" class="md-raised md-primary">Update Data and Visualize</md-button>
    </md-step>
    <md-step id="visualization" md-label="Quality Prediction" style="overflow: auto">
      <viz-reg-waterfall
        v-if="visualization == 'waterfall-chart'"
        :data="dataString"
        :height="height"
        :width="width"
      ></viz-reg-waterfall>
      <viz-reg-parallel
        v-if="visualization == 'parallel-chart'"
        :data="dataString"
        :height="height"
        :width="width"
      ></viz-reg-parallel>
    </md-step>
  </md-steppers>
</template>

<script>
import DataIntroduction from "./DataIntroduction.vue";

export default {
  name: "VisualAnalysisProcess",
  components: {
    DataIntroduction
  },
  props: {
    modelData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      visualization: "",
      vizRadio: "parallel-chart",
      active: "configuration",
      width: 0,
      height: 0,
      baseData: {
        alcohol: null,
        chlorides: null,
        "citric.acid": null,
        density: null,
        "fixed.acidity": null,
        "free.sulfur.dioxide": null,
        pH: null,
        "residual.sugar": null,
        sulphates: null,
        "total.sulfur.dioxide": null,
        "volatile.acidity": null
      },
      formData: {
        alcohol: 12.9,
        chlorides: 0.045,
        "citric.acid": 0.05,
        density: 0.9924,
        "fixed.acidity": 5.6,
        "free.sulfur.dioxide": 12,
        pH: 3.56,
        // quality: 8,
        "residual.sugar": 1.4,
        sulphates: 0.82,
        "total.sulfur.dioxide": 88,
        "volatile.acidity": 0.859
      }
    };
  },
  computed: {
    dataString() {
      const data = this.modelData.featureData.map(d => ({
        ...d,
        data: this.baseData[d.feature]
      }));
      return JSON.stringify({ ...this.modelData, featureData: data });
    }
  },
  methods: {
    updateAndVisualize() {
      const nav = this.$el
        .querySelector(".md-steppers-navigation")
        .getBoundingClientRect();
      const parent = this.$el.offsetParent.getBoundingClientRect();
      if (this.vizRadio === "waterfall-chart") {
        const size = Math.min(
          (parent.width - nav.left) * 0.9,
          (parent.height - nav.top - nav.height) * 0.9
        );
        this.width = size;
        this.height = size;
      } else {
        const size = Math.min(
          (parent.width - nav.left) * 0.9,
          (16 / 9) * (parent.height - nav.top - nav.height) * 0.9
        );
        this.width = size;
        this.height = (9 / 16) * size;
      }
      this.active = "visualization";
      this.visualization = this.vizRadio;
      this.baseData = { ...this.formData };
    }
  }
};
</script>

<style>
</style>