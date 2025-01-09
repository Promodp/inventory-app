import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import AppBarComponent from "./Header.tsx";
import ProductTable from "./ProductTable.tsx";
import CardStats from "./CardStats.tsx";
import ProductDialog from "./ProductDialog.tsx";
import { fetchInventoryData } from "../helpers/useApiCall.ts";
import { Labels } from "../constants/constants.ts";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  value: number;
  disabled: boolean;
}

const InventoryApp: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isAdmin, setIsAdmin] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  
  const totalProducts = products.filter((p) => !p.disabled).length;
  const totalStoreValue = products.reduce(
    (sum, p) => sum + (!p.disabled ? p.value : 0),
    0
  );
  const outOfStock = products.filter((p) => p.quantity === 0 && !p.disabled)
    .length;
  const uniqueCategories = new Set(
    products.filter((p) => !p.disabled).map((p) => p.category)
  ).size;

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchInventoryData();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  const handleDelete = (name: string) => {
    setProducts((prev) => prev.filter((product) => product.name !== name));
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleSave = (updatedProduct: Product) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.name === updatedProduct.name ? updatedProduct : product
      )
    );
    setOpenDialog(false);
    setSelectedProduct(null);
  };

  const handleDisable = (name: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.name === name ? { ...product, disabled: !product.disabled } : product
      )
    );
  };

  return (
    <>
      <AppBarComponent isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <Typography
        sx={{
          display: "flex",
          color: "white",
          fontSize: "30px",
          margin: "15px 0 0 22px",
        }}
      >
        {Labels.INVENTORY_STATS}
      </Typography>

      <Container
        sx={{
          backgroundColor: "var(--palette-background-dark)",
          minHeight: "100vh",
          marginTop: "10px",
          maxWidth: "1500px !important",
        }}
      >
        <CardStats
          totalProducts={totalProducts}
          totalStoreValue={totalStoreValue}
          outOfStock={outOfStock}
          uniqueCategories={uniqueCategories}
        />

        <ProductTable
          products={products}
          isAdmin={isAdmin}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleDisable={handleDisable}
        />

        <ProductDialog
          open={openDialog}
          selectedProduct={selectedProduct}
          onClose={() => setOpenDialog(false)}
          onSave={handleSave}
        />
      </Container>
    </>
  );
};

export default InventoryApp;
