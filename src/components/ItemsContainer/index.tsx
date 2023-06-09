import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { TextButton } from "../Button";
import { Colors } from "../../constants/colors";
import styles from "./styles.module.css";
import { useGetAllProductsQuery } from "../../features/apiSlice";
import SkeletonLoader from "../SekeletonLoader";

interface ProductI {
  bid: string;
  image: string;
  name: string;
  title: string;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function NameBadge({ abbr }: { abbr: string }) {
  return (
    <div className={styles.name_badge}>
      <p>{abbr}</p>
    </div>
  );
}

function getAbbr(name: string) {
  let fName = name.split(" ")[0];
  let lName = name.split(" ")[1];
  return fName.substring(0, 1) + lName.substring(0, 1);
}

function ItemCard({ product }: { product: ProductI }) {
  return (
    <Card
      sx={{ width: "auto", padding: "15px", borderRadius: "10px" }}
      variant="outlined"
    >
      <CardMedia
        component="img"
        height="132"
        image={product.image}
        alt="background-img"
        style={{ borderRadius: "15px" }}
      />
      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <NameBadge abbr={getAbbr(product.name)} />
        <p className={styles.bidder_name}>
          {product.name}{" "}
          <span style={{ fontWeight: "400", color: Colors.grat400 }}>(Highest Bidder)</span>
        </p>
      </div>
      <p className={styles.desc}>{product.title}</p>
      <p className={styles.price}>
        Current Bid: <span style={{ fontWeight: "700" }}>{product.bid}</span>
      </p>
      <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
      <TextButton
        label="Add to wishlist"
        textStyle={{ color: "white" }}
        style={{
          width: "100%",
          backgroundColor: Colors.primaryBlue600,
          border: "0px",
          height: "40px",
        }}
      />
    </Card>
  );
}

export default function ItemsContainer() {
  const {
    data: allProducts,
    isLoading,
    isFetching,
  } = useGetAllProductsQuery("productsApi");
  console.log(allProducts);
  return (
    <Card
      sx={{
        width: "auto",
        padding: "25px",
        marginTop: "50px",
        borderRadius: "10px",
      }}
      variant="outlined"
    >
      <Box sx={{ flexGrow: 1 }}>
        <div
          style={{
            display: "flex",
            height: "40px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p className={styles.title}>Featured Items</p>
          <TextButton label="View Auction" />
        </div>
        <Divider style={{ marginBottom: "15px", marginTop: "15px" }} />
        {isLoading || isFetching ? (
          <Grid
            container
            spacing={{ xs: 4, sm: 4, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
          >
            {[...Array(10)].map((_, i) => {
              return (
                <Grid item xs={4} key={i}>
                  <SkeletonLoader />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Grid
            container
            spacing={{ xs: 4, sm: 4, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
          >
            {allProducts.data.map((product: ProductI, i: number) => (
              <Grid key={i} item xs={4}>
                <ItemCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Card>
  );
}
