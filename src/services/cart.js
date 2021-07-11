import firestore from "../firestore.js";
//CART OBJECT:

//R in CRUD
export const getCartItems = async () => {
  const col = firestore.collection("cart");
  const queryData = await col.get();
  const documents = queryData.docs;
  return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
};

//U in CRUD
export const updateCartItems = async (id, record) => {
  const ref = firestore.collection("cart").doc(id);
  await ref.update(record);
};

export const addCartItems = async (record) => {
  const col = firestore.collection("cart");
  await col.add(record);
};

//D in CRUD
export const deleteCartItem = async (id) => {
  const col = firestore.collection("cart").doc(id);
  await col.delete();
};

