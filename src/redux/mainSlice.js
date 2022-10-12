import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../lib/axios';
const initalState = {
  loading: false,
  categories: [],
  products: [],
  currentCategory: '',
  productDetails: {},
  currentCategoryName: '',
  productCreated: '',
};

export const getCategories = createAsyncThunk(
  'main/getCategories',
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get('/categories');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProducts = createAsyncThunk(
  'main/getProducts',
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get('/products');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProductsWithCategory = createAsyncThunk(
  'main/getProductsWithCategory',
  async (params, { rejectWithValue }) => {
    let response = null;
    try {
      response = await axios.get('/products');

      if (params.category_name) {
        response.data = response.data.products.filter(
          (item) => item.category === params.category_name
        );
        return {
          message: 'success',
          products: response.data,
        };
      } else {
        return response.data;
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProductsWithSearch = createAsyncThunk(
  'main/getProductsWithSearch',
  async (params, { rejectWithValue }) => {
    let response = null;
    try {
      response = await axios.get('/products');

      if (params.search != '') {
        response.data = response.data.products.filter((item) =>
          item.name.toLowerCase().includes(params.search.toLowerCase())
        );
        return {
          message: 'success',
          products: response.data,
        };
      } else {
        return response.data;
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProductWithId = createAsyncThunk(
  'main/getProductWithId',
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/products/${params.id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createProduct = createAsyncThunk(
  'main/createProduct',
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.post('/products', params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const mainSlice = createSlice({
  name: 'main',
  initialState: initalState,
  reducers: {
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    setCurrentCategoryName: (state, action) => {
      state.currentCategoryName = action.payload;
    },

    setProductCreated: (state, action) => {
      state.productCreated = action.payload;
    },
  },
  extraReducers: (builder) => {
    // categories
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    // products
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    // products with category
    builder.addCase(getProductsWithCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductsWithCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    // products with search
    builder.addCase(getProductsWithSearch.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getProductsWithSearch.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    // product with id
    builder.addCase(getProductWithId.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getProductWithId.fulfilled, (state, action) => {
      state.loading = false;
      state.productDetails = action.payload;
    });

    // create Product
    builder.addCase(createProduct.pending, (state) => {
      state.productCreated = false;
    });

    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.productCreated = true;
    });
  },
});

export const { setCurrentCategory, setCurrentCategoryName, setProductCreated } =
  mainSlice.actions;
export default mainSlice.reducer;

// Selectors
export const selectCategories = (state) => state.main.categories;
export const selectProducts = (state) => state.main.products;
export const selectCurrentCategory = (state) => state.main.currentCategory;
export const selectProductDetails = (state) => state.main.productDetails;
export const selectCurrentCategoryName = (state) =>
  state.main.currentCategoryName;
export const selectProductCreated = (state) => state.main.productCreated;
