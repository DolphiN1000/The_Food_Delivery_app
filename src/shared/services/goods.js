import axios from "axios";

const goodsInstance = axios.create({
  baseURL: "https://shops-goods-back.onrender.com/api",
});

export const getAllShops = async () => {
  const { data } = await goodsInstance.get("/shops");
  return data;
};

export const getAllGoodsByIdShop = async () => {
  const { data } = await goodsInstance.get("/shops/:shop");
  return data;
};

export const getGoodsById = async () => {
    const { data } = await goodsInstance.get("/:goods");
    return data;
  };

  export const addOrder = async(data) => {
    const {data: result} = await goodsInstance.post("/order", data);
    return result;
}