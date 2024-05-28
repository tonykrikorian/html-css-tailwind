export default {
  template: `
  
  <label for="cars">{{title}}:</label>
<select class="w-48 border border-gray-600 rounded-lg  ml-2 mr-3 p-2 " id="cars" name="cars" v-model="selectedValue"   @change="selectValue" >
  <option v-for="company in data"  :value="company.value" :id="company.value" >{{company.name}}</option>
  
</select>
  `,
  data() {
    return {
      selectedValue: "",
    };
  },
  props: {
    data: Array,
    title: String,
    name: String,
  },

  methods: {
    selectValue(e) {
      alert(this.selectedValue);

      this.$emit(String(this.name), this.selectedValue);
    },
  },
};
