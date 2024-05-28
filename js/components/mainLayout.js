import DropdownList from "./DropdownList.js";
import repositories from "./repositories.js";

export default {
  components: { DropdownList },
  template: `
  
  <div>
      <DropdownList :data="filters.company" :title="'Compañia'" ></DropdownList>
      <DropdownList :data="filters.clusters" :title="'Ramo'" ></DropdownList>
      <DropdownList :data="filters.renewalState" :title="'Estado renovación'" ></DropdownList>
  </div>
  
  `,

  data() {
    return {
      filters: {},
    };
  },

  async beforeMount() {
    const { filters } = repositories({ axios });

    this.filters = await filters();
    console.log(this.filters);
  },
};
