import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Category } from "@mui/icons-material";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Grid from '@mui/material/Grid2'; 

interface CardStatsProps {
  totalProducts: number;
  totalStoreValue: number;
  outOfStock: number;
  uniqueCategories: number;
}

const CardStats: React.FC<CardStatsProps> = ({
  totalProducts,
  totalStoreValue,
  outOfStock,
  uniqueCategories,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 3 }}>
          <Card sx={{ backgroundColor: "#243325", color: "#ffffff", borderRadius:'10px' }}>
            <CardContent>
              <Grid container sx={{marginTop: "3px"}}spacing={1}>
                <Grid>
                  <ShoppingCartIcon sx={{ fontSize: 25, color: "#ffffff" }} />
                </Grid>
                <Grid sx={{marginLeft:"15px"}}>
                  <Typography sx={{fontSize:"14px"}}>Total Products</Typography>
                  <Typography variant="h4" sx={{ textAlign: "left" }}>
                    {totalProducts}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <Card sx={{ backgroundColor: "#243325", color: "#ffffff",borderRadius:'10px' }}>
            <CardContent>
              <Grid container sx={{marginTop: "3px"}} spacing={1}>
                <Grid>
                  <CurrencyExchangeIcon sx={{ fontSize: 25, color: "#ffffff" }} />
                </Grid>
                <Grid sx={{marginLeft:"15px"}}>
                  <Typography sx={{fontSize:"14px"}}>Total Store Value</Typography>
                  <Typography variant="h4" sx={{ textAlign: "left" }}>
                    ${totalStoreValue}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <Card sx={{ backgroundColor: "#243325", color: "#ffffff" ,borderRadius:'10px'}}>
            <CardContent>
              <Grid container sx={{marginTop: "3px"}} spacing={1}>
                <Grid>
                  <RemoveShoppingCartIcon sx={{ fontSize: 25, color: "#ffffff" }} />
                </Grid>
                <Grid sx={{marginLeft:"15px"}}>
                  <Typography sx={{fontSize:"14px"}}>Out of Stock</Typography>
                  <Typography variant="h4" sx={{ textAlign: "left" }}>
                    {outOfStock}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <Card sx={{ backgroundColor: "#243325", color: "#ffffff" ,borderRadius:'10px'}}>
            <CardContent>
              <Grid container sx={{marginTop: "3px"}} spacing={1}>
                <Grid>
                  <Category sx={{ fontSize: 25, color: "#ffffff" }} />
                </Grid>
                <Grid sx={{marginLeft:"15px"}}>
                  <Typography sx={{fontSize:"14px"}}>No. of Categories</Typography>
                  <Typography variant="h4" sx={{ textAlign: "left" }}>
                    {uniqueCategories}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardStats;
