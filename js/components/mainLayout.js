import DropdownList from "./DropdownList.js";
import repositories from "./repositories.js";

export default {
  components: { DropdownList },
  template: `
  
  <div class="border border-black border-solid p-6 rounded-lg m-8 flex justify-center">
      <DropdownList :data="years" :title="'Año'" :name="'year'"></DropdownList>
      <DropdownList :data="months" :title="'Mes'" :name="'month'" ></DropdownList>
      <DropdownList :data="filters.company" :title="'Compañia'" :name="'company'"></DropdownList>
      <DropdownList :data="filters.clusters" :title="'Ramo'" :name="'cluster'"></DropdownList>
      <DropdownList :data="filters.renewalState" :title="'Estado renovación'" :name="'renewalState'"></DropdownList>
      <DropdownList :data="filters.executive" :title="'Ejecutivo'" :name="'executive'"></DropdownList>
      <DropdownList :data="filters.broker" :title="'Corredor'" :name="'broker'"></DropdownList>
  </div>
  
  `,

  data() {
    return {
      filters: {},
      years: [
        {
          name: "2024",
          value: "2024",
        },
        {
          name: "2025",
          value: "2025",
        },
      ],
      months: [
        {
          name: "05",
          value: "05",
        },
        {
          name: "06",
          value: "06",
        },
        {
          name: "07",
          value: "07",
        },
        {
          name: "08",
          value: "08",
        },
        {
          name: "09",
          value: "09",
        },
      ],
    };
  },

  async beforeMount() {
    const { filters } = repositories({ axios });

    this.filters = await filters();
    console.log(this.filters);
  },
};
