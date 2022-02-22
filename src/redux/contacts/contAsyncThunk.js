import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import Api from "Fetch-api/Api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    // const state = thunkAPI.getState();
    // const contacts = state.contacts.items;
    // console.log(contacts);
    // if (contacts === []) {
    //   alert("Нет контактов");
    // }
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
      console.log(data);
      // return data;
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
      // console.log(error);
    }
  }
);
