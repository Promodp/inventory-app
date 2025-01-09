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
import "../App.css";
import { Constant } from "../constants/constants.ts";

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
  handleDisable: (name: string) => void;
  handleDelete: (name: string) => void;
}

// Common style function
const getTableCellStyles = (disabled: boolean) => ({
  color: disabled ? "dimgrey" : "var(--palette-white)",
  borderBottom: `1px solid var(--palette-border)`,
});

const defaultHeaderStyles = {
  color: "var(--palette-white)",
  borderBottom: `1px solid var(--palette-border)`,
};

// Configuration for table headers and corresponding row keys
const tableConfig = [
  { label: Constant.NAME, key: "name" },
  { label: Constant.CATEGORY, key: "category" },
  { label: Constant.PRICE, key: "price", format: (value: number) => `$${value}` },
  { label: Constant.QUANTITY, key: "quantity" },
  { label: Constant.VALUE, key: "value", format: (value: number) => `$${value}` },
  {
    label: Constant.ACTION,
    key: "action",
    render: (product: Product, isAdmin: boolean, handleEdit: any, handleDisable: any, handleDelete: any) => (
      <TableCell sx={getTableCellStyles(product.disabled)}>
        <IconButton
          onClick={() => handleEdit(product)}
          disabled={!isAdmin || product.disabled}
          color={!isAdmin ? "default" : "success"}
        >
          <Edit />
        </IconButton>
        <IconButton
          disabled={!isAdmin}
          onClick={() => handleDisable(product.name)}
          color="secondary"
        >
          {!product.disabled ? <Visibility /> : <VisibilityOff />}
        </IconButton>
        <IconButton
          onClick={() => handleDelete(product.name)}
          disabled={!isAdmin}
          color="error"
        >
          <Delete />
        </IconButton>
      </TableCell>
    ),
  },
];

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
        backgroundColor: "var(--palette-background-light)",
        border: `1px solid var(--palette-border-hover)`,
        borderRadius: "10px",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {tableConfig.map((header) => (
              <TableCell key={header.key} sx={defaultHeaderStyles}>
                <span className="table-cell">{header.label}</span>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} sx={getTableCellStyles(product.disabled)}>
              {tableConfig.map((column) => {
                if (column.key === "action" && column.render) {
                  return column.render(product, isAdmin, handleEdit, handleDisable, handleDelete);
                } else {
                  return (
                    <TableCell
                      key={column.key}
                      sx={getTableCellStyles(product.disabled)}
                    >
                      {column.format
                        ? column.format((product as any)[column.key])
                        : (product as any)[column.key]}
                    </TableCell>
                  );
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
