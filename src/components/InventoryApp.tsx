import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import AppBarComponent from "./Header.tsx";
import ProductTable from "./ProductTable.tsx";
import CardStats from "./CardStats.tsx";
import ProductDialog from "./ProductDialog.tsx";

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

  // Widgets
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
    axios
      .get("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory")
      .then((response) => {
        setProducts(
          response.data.map((item: any) => ({
            ...item,
            price: parseFloat(item.price.replace("$", "")), // Remove $ and convert to number
            value: parseFloat(item.price.replace("$", "")) * item.quantity, // Calculate value
            disabled: false,
          }))
        );
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (name: string) => {
    setProducts((prev) => prev.filter((product) => product.name !== name));
  };

  const handleEdit = (product: Product) => {
    // Set the selected product and open the dialog
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleSave = (updatedProduct: Product) => {
    console.log(updatedProduct,"updatedProduct")
    setProducts((prev) =>
      prev.map((product) =>
        product.name === updatedProduct.name ? updatedProduct : product
      )
    );
    setOpenDialog(false); // Close dialog after save
    setSelectedProduct(null); // Clear selected product
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
        Inventory stats
      </Typography>

      <Container
        sx={{
          mt: 4,
          backgroundColor: "#161718",
          minHeight: "100vh",
          padding: 2,
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
