<template>
  <div id="app">
    <toolbar/>
    <visual-analysis-process :model-data="modelData"/>
  </div>
</template>

<script>
import VisualAnalysisProcess from "./components/VisualAnalysisProcess.vue";
import Toolbar from "./components/Toolbar.vue";

export default {
  name: "app",
  components: {
    VisualAnalysisProcess,
    Toolbar
  },
  data() {
    return {
      modelData: {
        target: { name: "Quality", extent: [0, 10] },
        intercept: 5.6375,
        featureData: [
          {
            p: 0.10990123004138723,
            extent: [4.6, 15.6],
            coef: 0.048289183405623715,
            feature: "fixed.acidity",
            mean: 8.258166666666664
          },
          {
            p: 6.239981198114827e-17,
            extent: [0.12, 1.58],
            coef: -1.2053718244861376,
            feature: "volatile.acidity",
            mean: 0.530520833333333
          },
          {
            p: 0.09836373543988783,
            extent: [0.0, 1.0],
            coef: -0.288826218570685,
            feature: "citric.acid",
            mean: 0.26580833333333315
          },
          {
            p: 0.14370206212937747,
            extent: [0.9, 15.4],
            coef: 0.027843759932178178,
            feature: "residual.sugar",
            mean: 2.503833333333333
          },
          {
            p: 5.3657684340921026e-5,
            extent: [0.012, 0.611],
            coef: -1.939168705977421,
            feature: "chlorides",
            mean: 0.08766499999999956
          },
          {
            p: 0.19007090031485097,
            extent: [1.0, 72.0],
            coef: 0.0033098731292115157,
            feature: "free.sulfur.dioxide",
            mean: 16.09625
          },
          {
            p: 0.0012373564370536906,
            extent: [6.0, 289.0],
            coef: -0.0027800221646009328,
            feature: "total.sulfur.dioxide",
            mean: 46.74666666666667
          },
          {
            p: 0.220159741258406,
            extent: [0.9900700000000001, 1.00369],
            coef: -31.157153370286835,
            feature: "density",
            mean: 0.9967093416666666
          },
          {
            p: 0.16695197852640228,
            extent: [2.74, 4.01],
            coef: -0.3053575858923504,
            feature: "pH",
            mean: 3.3196916666666714
          },
          {
            p: 2.2547711866285344e-10,
            extent: [0.33, 2.0],
            coef: 0.8647664002007605,
            feature: "sulphates",
            mean: 0.6580916666666657
          },
          {
            p: 5.1727447125952114e-18,
            extent: [8.4, 14.0],
            coef: 0.27369521750081005,
            feature: "alcohol",
            mean: 10.439597222222217
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>
