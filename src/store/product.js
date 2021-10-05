const initialState = {
  product:[
    {
      category:'FOOD',
      name:'food',
      description:'spaghetti ',
      price:"15$",
      inventoryCount:'500',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoUzO7SEQug1o9K0m4oSse3CqB94358DtQ9aOsXj-mExxMjL43bQzek8xkGlaYDo6O-j4&usqp=CAU'
    },
    {
      category:'FOOD',
      name:'food',
      description:'Pizza',
      price:"6.5$",
      inventoryCount:'500',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBeMm4qbQeqykbV_c0thURzkwhX4F9IAOWskodiqNJaIvDEkqRsuWogoYvBAV-85FNx8U&usqp=CAU'
    },
    {
      category:'FOOD',
      name:'food',
      description:'Wings',
      price:"7.5$",
      inventoryCount:'1000',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS74dw3_3373dBu3qs_AGKIm5uJBG7AEihSJwOe61RYKnbGrSVnzIqxJ4GfV_k3JO14cYk&usqp=CAU'
    },
    {
      category:'Makeup',
      name:'makeup',
      description:'lipstice',
      price:"150$",
      inventoryCount:'200',
      image:'https://cdn.artdeco.de/media/catalog/product/5/7/57156c9a49d3478e087f5003099c7aae5fc73df1_525572b8_1e8c_4c22_9b21_180207a93c34-image_product_1629827672_1.jpg'
    },
    {
      category:'Makeup',
      name:'makeup',
      description:'eyeshadow',
      price:"200$",
      inventoryCount:'150',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG0f82DYGac9OLlJoXi-qZBxc0A36P8nyzhuAW28g5EylogZbUUwvMNJcwunbNCHAI__Q&usqp=CAU'
    },
    {
      category:'Makeup',
      name:'makeup',
      description:'mascara',
      price:"40$",
      inventoryCount:'1000',
      image:'https://cdn.salla.sa/vz0AnLdZgNkfvGeh3VCRUr9uM2AdHBk0Zvyajh0P.jpeg'
    },
    {
      category:'Clothes',
      name:'clothes',
      description:'dress',
      price:"150$",
      inventoryCount:'1000',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8bg5f87nxDOUcMZePHlNfg8SimkXtCffmihcMatbVYpRhKD0_PWSV_qyGnfAgSaYxwsA&usqp=CAU'
    },
    {
      category:'Clothes',
      name:'clothes',
      description:'bags',
      price:"200$",
      inventoryCount:'1000',
      image:'https://fns.modanisa.com/r/pro2/2019/10/29/z-omuz-cantasi--siyah--judour-bags-1339205-1339205-1.jpg'
    },
    {
      category:'Clothes',
      name:'clothes',
      description:'heals',
      price:"300$",
      inventoryCount:'Infinit',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkA1ZJ1c2gRwpHyH_nPM53i-HIt29tr_CBkA&usqp=CAU'
    }
    
  ],
  activeProduct: [],
}


const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE":
     state.activeProduct=state.product.filter(item=>{
       return (payload===item.category ? item.category:null)
     })
     console.log(state.activeProduct);
      return state;


    case "ADDPRODUCT":
      state.activeProduct = state.activeProduct.map((item) => {
        if (item.name === payload.name) {
          if (item.inventoryCount > 0) {
            item.inventoryCount = item.inventoryCount - 1;
          }
          return item;
        }
        return item;
      });
      return {...state};

    case "DELETE":
      state.activeProduct = state.activeProduct.map((item) => {
        if (item.name === payload.product.name) {
          item.inventoryCount = item.inventoryCount + 1;

          return item;
        }
        return item;
      });
      return {...state};

    default:
      return state;
  }
};




export default productsReducer;