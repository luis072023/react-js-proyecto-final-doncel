const products =[
    {id:1, name: "Dulce de leche la serenisima",category:"Dulce", price: 3.10, stock:100, description: "dulce de leche de 1kg", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQc8P_7Qz6r9toOSu-oqNqVHGr6K5EMFlvqa-rpqlXwnjKwr8x0niC3buO_vIMsmk9kTvRR8LGSu18mTbC0saCG6M6VDaSdJnMqdWsxB6nyVDHf5IvGhr7VvQ&usqp=CAc"
  },
  {id: 2, name:"Dulce de leche pastelero mardel ", category:"Dulce",price: 4.50, stock:100, description: "Dulce de leche pastelero mardel de 500gr", img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTiermgva3KL74vWivZu9sSA7yvPXavmnjOEO00oMOLFAIYFtkcHZW0rc_DoaS-wmE5f5lLC3QeLpAO4i5U9L2qUzH3yC7EWj2Z0nTinXgY8YgS-s84dqiQ&usqp=CAc"
  },
  {id:3, name:"Dulce de leche vacalin",category:"Dulce", price:4.60, stock:100, description: "dulce de leche de 400gr", img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRGv88pyZOrCC08aIE7djE98EmD8BdOHNxaa3I4cHHHixogcjnKmOQ3MsWrFzghSaaAS_8CYCrf2zO3E8K6tFqnOFuYknNQvMUw9b_7I4Nxq3wmd4BGvo39&usqp=CAc"
  },
  {id: 4, name:"Dulce de leche repostero Vacalin",category:"Dulce", price:7.50, stock:100, description: "dulce de leche de 1 kg", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbLVceLimY22vRr_waNQCIzSYM5b5zk8dcOMfzGphShzx8TxKa0jk4ACsOl-c1Jk5T0i1xQO1LxXrGZd90niRbQrcVmmXmBWwaodLZcVewdoYaNNOR404C&usqp=CAc"
},
  {id:5, name:"Dulce de leche havanna 1kg",category:"Dulce", price:5.40, stock:100, description: "dulce de leche de 1kg", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJKXbFt_-sa9Mt1Th0R0z9tD5z9KwTcH7mNMeR_IMErXpjhV1V6ffR_LJTtK8MsHqFBckIAy2zT86lUXBFfBMU0wZordU94VBpf8uRHSvO2FQ25mLgRbjvKw&usqp=CAc"
  },
  {id:6, name: "Alfajor aguila",category:"Alfajores", price: 2.30, stock:100, description: "alfajor aguila de coco", img:"https://http2.mlstatic.com/D_NQ_NP_793870-MLA71150786705_082023-V.webp"
},
{id:7, name: "Alfajor Jorgelin negro",category:"Alfajores", price: 2.50, stock: 100, description: "Alfajor jorgelin negro triple", img: "https://au.clickandfoods.com/cdn/shop/products/JorgelinNegro.png?v=1693504852"
},
{id:8, name: "Alfajor fantoche blanco",category:"Alfajores", price: 2.80, stock:100, description: "Alfajor fantoche blanco triple", img:"https://acdn.mitiendanube.com/stores/001/160/839/products/project_20200926_0839125-011-f5af1c60153600534a16011214557500-1024-1024.png"
},
{id:9,name: "Alfajor havanna", category:"Alfajores",price: 1.90, stock: 100, description: "Alfajor havanna negro", img:"https://3.bp.blogspot.com/-uojsjWQI6Z8/WI-H29pN2rI/AAAAAAAAA4U/EAXFIV_B6qkgcl0P_0jTqSX3QShER9uaQCEw/s1600/20170130_094939.jpg"
},
{id: 10, name: "Alfajor tofi",category:"Alfajores", price: 2.30, stock: 100, description: "Alfajor tofi negro", img: "https://prod-resize.tiendainglesa.com.uy/images/large/P461582-1.jpg?20190425155555,Alfajor-Negro-Tofi-44g-en-Tienda-Inglesa"
},
{id: 11, name: "Yerba Playadito",category:"Yerba", price: 9.30, stock: 100, description: "Playadito Elaborado Con Palo Tradicional 1kg", img: "https://www.matemundo.de/ger_pm_Playadito-Elaborada-Con-Palo-Tradicional-1kg-8559_2.png"
},
{id: 12, name: "Yerba taragui",category:"Yerba", price: 4.30, stock: 100, description: "Taragui Elaborada Con Palo Tradicional 0.25kg", img: "https://www.matemundo.de/ger_il_Taragui-Elaborada-Con-Palo-Tradicional-0-25kg-4167.png"
},
{id: 13, name: "Yerba Rosamonte",category:"Yerba", price: 9.30, stock: 100, description: "Rosamonte Elaborado Con Palo Tradicional 1kg", img: "https://m.media-amazon.com/images/I/91vJMqsPr7L._SY679_PIbundle-5,TopRight,0,0_SX395SY679SH20_.jpg"
},
{id: 14, name: "Yerba Amanda",category:"Yerba", price: 9.30, stock: 100, description: "Amanda Té Yerba Mate Tradicional 1kg | Té mate de Argentina | Bebida detox y energética", img: "https://m.media-amazon.com/images/I/61OJl3KdnmL._AC_UL600_FMwebp_QL65_.jpg"
},
  ]



export const mFetch = (pid) => new Promise((res, rej) => {
  setTimeout(() => {
    if (pid) {
      const product = products.find(product => product.id === pid);
      if (product) {
        res(product);
      } else {
        rej("Producto no encontrado"); 
      }
    } else {
      res(products); 
    }
  }, 8000);
});
