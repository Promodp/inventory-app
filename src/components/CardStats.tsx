import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Category, CurrencyExchange, RemoveShoppingCart, ShoppingCart } from "@mui/icons-material";
import Grid from '@mui/material/Grid2';
import { Constant } from '../constants/constants.ts'


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
                    <Card sx={{ backgroundColor: "var(--palette-card-bg)", color: "#ffffff", borderRadius: '10px' }}>
                        <CardContent>
                            <Grid container sx={{ marginTop: "3px" }} spacing={1}>
                                <Grid>
                                    <ShoppingCart sx={{ fontSize: 25, color: "#ffffff" }} />
                                </Grid>
                                <Grid sx={{ marginLeft: "15px" }}>
                                    <Typography sx={{ fontSize: "14px" }}>{Constant.TOTAL_PRODUCT}</Typography>
                                    <Typography variant="h4" sx={{ textAlign: "left" }}>
                                        {totalProducts}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                    <Card sx={{ backgroundColor: "var(--palette-card-bg)", color: "#ffffff", borderRadius: '10px' }}>
                        <CardContent>
                            <Grid container sx={{ marginTop: "3px" }} spacing={1}>
                                <Grid>
                                    <CurrencyExchange sx={{ fontSize: 25, color: "#ffffff" }} />
                                </Grid>
                                <Grid sx={{ marginLeft: "15px" }}>
                                    <Typography sx={{ fontSize: "14px" }}>{Constant.TOTAL_STORE_VALUE}</Typography>
                                    <Typography variant="h4" sx={{ textAlign: "left" }}>
                                        ${totalStoreValue}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                    <Card sx={{ backgroundColor: "var(--palette-card-bg)", color: "#ffffff", borderRadius: '10px' }}>
                        <CardContent>
                            <Grid container sx={{ marginTop: "3px" }} spacing={1}>
                                <Grid>
                                    <RemoveShoppingCart sx={{ fontSize: 25, color: "#ffffff" }} />
                                </Grid>
                                <Grid sx={{ marginLeft: "15px" }}>
                                    <Typography sx={{ fontSize: "14px" }}>{Constant.OUT_OF_STOCK}</Typography>
                                    <Typography variant="h4" sx={{ textAlign: "left" }}>
                                        {outOfStock}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                    <Card sx={{ backgroundColor: "var(--palette-card-bg)", color: "#ffffff", borderRadius: '10px' }}>
                        <CardContent>
                            <Grid container sx={{ marginTop: "3px" }} spacing={1}>
                                <Grid>
                                    <Category sx={{ fontSize: 25, color: "#ffffff" }} />
                                </Grid>
                                <Grid sx={{ marginLeft: "15px" }}>
                                    <Typography sx={{ fontSize: "14px" }}>{Constant.NO_OF_CATEGORY}</Typography>
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
