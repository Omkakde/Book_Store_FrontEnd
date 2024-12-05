import React, { useEffect, useState } from "react";
import { getAllBooksAPI } from "./../../utils/Apis";
import BooksCard from "../books-card/BooksCard";
import { Grid } from "@mui/material";
import booksArr from "./../../assets/booksArray/booksArr";
import { styled } from "@mui/system";
import "./booksContainer.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BooksContainer() {
  const [booksList, setBooksList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getAllBooksAPI("get/book");
    if (res?.data) {
      setBooksList(res.data.result);
      console.log(res);
    }
  };

 
  const currentItems = booksList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const CustomGridItem = styled(Grid)({
    padding: "1px",
  });

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div className="books-container">
        <div className="header">
          <h3>Books ({booksList.length} items)</h3>
          <div className="sort-container">
            <select id="sortOptions" name="sortOptions">
              <option value="relevance">Sort by Relevance</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </div>
        </div>
        <Grid container spacing={1} justifyContent="center">
          {currentItems.map((book, index) => (
            <CustomGridItem item xs={12} sm={6} md={4} lg={3} key={book.id}>
              <BooksCard
                book={{
                  ...book,
                  image: booksArr[index % booksArr.length].image,
                }}
              />
            </CustomGridItem>
          ))}
        </Grid>
        <Stack spacing={3} alignItems="center" marginTop={5}>
          <Pagination
            count={Math.ceil(booksList.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>
    </>
  );
}
