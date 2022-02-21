import { createSelector } from "@reduxjs/toolkit";
export const getItems = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;
export const getLoading = (state) => state.contacts.isLoading;

// export const getVisibleItems = (state) => {
//   const items = getItems(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();
//   return items.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };
export const getVisibleItems = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
