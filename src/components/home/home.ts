import { Vue, Component } from "vue-property-decorator";
import { useCounterStore } from "@/store/index";
@Component({
  components: {},
})
export default class Home extends Vue {
  public mounted() {
    const counter = useCounterStore();
    console.log("##########");
    console.log(counter.count);
    counter.increment();
    counter.count++;
    console.log(counter.count);
  }
}
