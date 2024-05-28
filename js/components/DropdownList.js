export default {
  template: `
  
  <label for="cars">{{title}}:</label>
<select class="w-48 border border-gray-600 rounded-lg  ml-3 mr-3 p-2 " id="cars" name="cars" v-model="selectedValue">
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
  },
};
