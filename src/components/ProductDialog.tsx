import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, Typography } from "@mui/material";
import {Constant} from '../constants/constants.ts'

interface ProductDialogProps {
  open: boolean;
  selectedProduct: any | null;
  onClose: () => void;
  onSave: (updatedProduct: any) => void;
}

const ProductDialog: React.FC<ProductDialogProps> = ({
  open,
  selectedProduct,
  onClose,
  onSave,
}) => {
  const [product, setProduct] = useState<any | null>(null);

  useEffect(() => {
    if (selectedProduct) {
      setProduct({ ...selectedProduct });
    }
  }, [selectedProduct]);

  const handleInputChange = (field: string, value: any) => {
    setProduct((prevProduct: any) => ({
      ...prevProduct,
      [field]: value,
    }));
  };

  const handleSave = () => {
    if (product) {
      onSave(product);  
      onClose();        
    }
  };

  if (!product) return null;

  //TODO: Update the colors from the palettes

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ backgroundColor: "#282a27", color: "#ffffff", fontSize:'24px' }}>
       {Constant.HEADER_TITLE}
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: "#282a27", color: "#ffffff", marginTop: "-18px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography sx={{  color: "#ffffff", fontSize:'14px' }}>{product.name}</Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
              <label style={{ color: "#ffffff" }}>{Constant.CATEGORY}</label>
              <input
                type="text"
                value={product.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                style={{
                  backgroundColor: "#3e413c",
                  color: "#ffffff",
                  padding: "8px",
                  border: "1px solid #555",
                  borderRadius: "4px",
                }}
              />
              <label style={{ color: "#ffffff" }}>{Constant.QUANTITY}</label>
              <input
                type="number"
                value={product.quantity}
                onChange={(e) => handleInputChange("quantity", parseInt(e.target.value))}
                style={{
                  backgroundColor: "#3e413c",
                  color: "#ffffff",
                  padding: "8px",
                  border: "1px solid #555",
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
              <label style={{ color: "#ffffff" }}>{Constant.PRICE}</label>
              <input
                type="number"
                value={product.price}
                onChange={(e) => handleInputChange("price", parseFloat(e.target.value))}
                style={{
                  backgroundColor: "#3e413c",
                  color: "#ffffff",
                  padding: "8px",
                  border: "1px solid #555",
                  borderRadius: "4px",
                }}
              />
              <label style={{ color: "#ffffff" }}>{Constant.VALUE}</label>
              <input
                type="number"
                value={product.value}
                onChange={(e) => handleInputChange("value", parseFloat(e.target.value))}
                style={{
                  backgroundColor: "#3e413c",
                  color: "#ffffff",
                  padding: "8px",
                  border: "1px solid #555",
                  borderRadius: "4px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "#282a27" }}>
        <Button onClick={onClose} sx={{  color: "#7e8c45" }}>
          {Constant.CANCEL}
        </Button>
        <Button onClick={handleSave} variant="contained" sx={{ color: "#7e8c45", backgroundColor: "#3e413c" }}>
        {Constant.SAVE}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;
