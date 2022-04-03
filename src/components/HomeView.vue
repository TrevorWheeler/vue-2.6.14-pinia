<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useCounterStore } from "@/store/index";

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  public mounted() {
    const counter = useCounterStore();
    console.log("##########");
    console.log(counter.count);
    counter.increment();
    counter.count++;
    console.log(counter.count);
  }
}
</script>
