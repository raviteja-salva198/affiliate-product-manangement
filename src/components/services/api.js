import {
  dummyProducts,
  dummyCommissionRates,
  dummyAnnouncements,
  dummyUsers
} from "./data";

export const fetchProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyProducts), 500);
  });
};

export const addProduct = async (product) => {
  return new Promise((resolve) => {
    const newProduct = { ...product, id: Date.now() };
    dummyProducts.push(newProduct);
    setTimeout(() => resolve(newProduct), 500);
  });
};

export const updateProduct = async (id, updatedProduct) => {
  return new Promise((resolve) => {
    const index = dummyProducts.findIndex((p) => p.id === id);
    if (index !== -1) {
      dummyProducts[index] = { ...dummyProducts[index], ...updatedProduct };
      setTimeout(() => resolve(dummyProducts[index]), 500);
    } else {
      setTimeout(() => resolve(null), 500);
    }
  });
};

export const deleteProduct = async (id) => {
  return new Promise((resolve) => {
    const index = dummyProducts.findIndex((p) => p.id === id);
    if (index !== -1) {
      dummyProducts.splice(index, 1);
    }
    setTimeout(() => resolve(), 500);
  });
};

export const fetchCommissionRates = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyCommissionRates), 500);
  });
};

export const updateCommissionRate = async (occupation, rate) => {
  return new Promise((resolve) => {
    dummyCommissionRates[occupation] = rate;
    setTimeout(() => resolve({ [occupation]: rate }), 500);
  });
};


export const fetchAnnouncements = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyAnnouncements), 500);
  });
};

export const createAnnouncement = async (announcement) => {
  return new Promise((resolve) => {
    const newAnnouncement = {
      ...announcement,
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
    };
    dummyAnnouncements.push(newAnnouncement);
    setTimeout(() => resolve(newAnnouncement), 500);
  });
};


export const fetchUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyUsers), 500);
  });
};