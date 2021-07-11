import firestore from "../firestore.js";

// Product Object:
export const products = [
  {
    name: "Shirts",
    price: 85,
    variants: ["S", "M", "L"],
    images: "https://www.dropbox.com/s/38dzy6xrsyowuvo/shirts.jpg?raw=1",
    productId: 123
  },
  {
    name: "Coats",
    price: 180,
    variants: ["Grey", "Black", "Brown"],
    images: "https://www.dropbox.com/s/h87kmc75dl9282n/coat.jpg?raw=1",
    productId: 456
  },
  {
    name: "Ties",
    price: 35,
    variants: ["Plain", "Striped", "Dotted"],
    images: "https://www.dropbox.com/s/f7ehms26g8gwij7/tie.jpg?raw=1",
    productId: 789
  },
  {
    name: "Shoes",
    price: 145,
    variants: ["Black", "Light Brown", "Dark Brown"],
    images: "https://www.dropbox.com/s/nga54jofqnencjn/shoes.jpg?raw=1",
    productId: 101112
  },
  {
    name: "Watches",
    price: 1280,
    variants: ["Leather Strap", "Stainless Steel", "Titanium"],
    images: "https://www.dropbox.com/s/oniz4tcydd4w27w/watch.jpg?raw=1",
    productId: 131415
  },
  {
    name: "Suits",
    price: 1850,
    variants: ["Plain Blue", "Striped Grey", "Black"],
    images: "https://www.dropbox.com/s/4xnhx1t4qimeano/suits.jpg?raw=1",
    productId: 161718
  },
  {
    name: "Sweaters",
    price: 95,
    variants: ["Red", "Grey", "Blue"],
    images: "https://www.dropbox.com/s/mk9dym8g0r129g2/sweaters.jpg?raw=1",
    productId: 192021
  },
  {
    name: "Socks",
    price: 40,
    variants: ["Black", "Grey", "Brown"],
    images: "https://www.dropbox.com/s/ycssqsq4s8j05mn/socks.jpg?raw=1",
    productId: 222324
  }
];

// C in CRUD
const seedProducts = async () => {
  const col = firestore.collection("products");
  const data = await col.get();

  if (data.size > 0) {
    return;
  }
  
  //Array(promise)
  const promises = products.map(async (product) => {
    return await col.add(product);
  });

  const resolvedReferences  = await Promise.all(promises);
};

//R in CRUD
export const getProducts = async () => {
  await seedProducts();

  const col = firestore.collection("products");
  //query snapshot
  const queryData = await col.get();
  //Array query document snapshots
  const documents = queryData.docs;

  return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
};

//U in CRUD
export const updateProducts = async (id, record) => {
  const ref = firestore.collection("products").doc(id);
  await ref.update(record);
};

export const createProduct = async (record) => {
  const col = firestore.collection("products");
  await col.add(record);
};

//D in CRUD
export const deleteProduct = async (id) => {
  const col = firestore.collection("products").doc(id);
  await col.delete();
};

export const getProduct = async (id) => {
   const col = firestore.collection('products');
   const ref = col.doc(id);
   const doc = await ref.get();

   if(!doc.exists) {
     return undefined;
   }
   return {id: doc.id, ...doc.data()};
}

