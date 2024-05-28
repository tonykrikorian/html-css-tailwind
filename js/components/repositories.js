export default ({ axios }) => {
  return {
    filters: async () => {
      const response = await axios.get(
        "https://aks-qa.ant.cl/renewals/broker-renewal/filters?executiveId=259512158&username=tony.krikorian@anschile.cl&nationalId=259512158&brokerId=969155400"
      );

      return response.data;
    },
  };
};
