import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import Api from "Fetch-api/Api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (contactName, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/contacts", contactName);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      // console.log(contactId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
      // console.log(error);
    }
  }
);
