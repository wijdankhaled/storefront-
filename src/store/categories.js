const initialState = {
    categories: [
      {
        displayName: 'FOOD',
        normalizedName: 'FOOD',
        description: 'FOOD Category'
      },
      {
        displayName: 'Makeup',
        normalizedName: 'Makeup',
        description: 'something used to higlighlite the butey'
      },
      {
        displayName: 'Clothes',
        normalizedName: 'Clothes',
        description: 'Clothes Category'
      },
    ],
    activeCategory: "",
  };
  

  const categoryReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case "ACTIVE":
          let active=state.categories.filter(item=>{
              return payload===item.normalizedName? item.normalizedName:""
          })
          
        let activeCategory = {
            displayName:active[0].displayName,
          normalizedName:active[0].normalizedName,
          description:active[0].description
        };
        
        let categories = state.categories;
  
        return { activeCategory, categories };
      default:
        return state;
    }
  };
  
  export const selectCategory = (name) => {
    return {
      type: "ACTIVE",
      payload: name,
    };
  };
  
  
  export default categoryReducer;