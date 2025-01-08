import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Delete, Edit, Visibility, VisibilityOff } from "@mui/icons-material";

import '../App.css';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  value: number;
  disabled: boolean;
}

interface ProductTableProps {
  products: Product[];
  isAdmin: boolean;
  handleEdit: (product: Product) => void;
  handleDisable:(name: string) => void;
  handleDelete: (name: string) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  isAdmin,
  handleEdit,
  handleDisable,
  handleDelete,
}) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 4,
        backgroundColor: "#212024",
        border: "1px solid #27292b", 
        borderRadius: "10px", 
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#ffffff",  borderBottom: "1px solid #343336" }}>
              <span className="table-cell">Name</span>
            </TableCell>
            <TableCell sx={{ color: "#ffffff",  borderBottom: "1px solid #343336" }}>
               <span className="table-cell">Category</span>
            </TableCell>
            <TableCell sx={{ color: "#ffffff",  borderBottom: "1px solid #343336" }}>
               <span className="table-cell">Price</span>
            </TableCell>
            <TableCell sx={{ color: "#ffffff" , borderBottom: "1px solid #343336"}}>
               <span className="table-cell">Quantity</span>
            </TableCell>
            <TableCell sx={{ color: "#ffffff",  borderBottom: "1px solid #343336" }}>
               <span className="table-cell">Value</span>
            </TableCell>
            <TableCell sx={{ color: "#ffffff",  borderBottom: "1px solid #343336" }}>
               <span className="table-cell">Action</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{
                color: "#ffffff",
                borderBottom: "1px solid #343336",
              }}
            >
              <TableCell sx={{ color: product.disabled? "dimgrey": "#ffffff",  borderBottom: "1px solid #343336" }}>
                {product.name}
              </TableCell>
              <TableCell sx={{ color: product.disabled? "dimgrey": "#ffffff",  borderBottom: "1px solid #343336" }}>
                {product.category}
              </TableCell>
              <TableCell sx={{ color: product.disabled? "dimgrey": "#ffffff",  borderBottom: "1px solid #343336"}}>
                ${product.price}
              </TableCell>
              <TableCell sx={{ color: product.disabled? "dimgrey": "#ffffff",   borderBottom: "1px solid #343336" }}>
                {product.quantity}
              </TableCell>
              <TableCell sx={{ color: product.disabled? "dimgrey": "#ffffff",   borderBottom: "1px solid #343336" }}>
                ${product.value}
              </TableCell>
              <TableCell sx={{ color: product.disabled? "dimgrey": "#ffffff",  borderBottom: "1px solid #343336" }}>
                <IconButton
                  onClick={() => handleEdit(product)}
                  disabled={!isAdmin || product.disabled}
                  color={!isAdmin ? "default": "success"}

                >
                  <Edit />
                </IconButton>
                <IconButton
                  disabled={!isAdmin}
                  onClick={() => handleDisable(product.name)}
                  color="secondary"
                >
                 { !product.disabled ? <Visibility />: <VisibilityOff/>}
                </IconButton>
                <IconButton
                  onClick={() => handleDelete(product.name)}
                  disabled={!isAdmin}
                  color="error"
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
