export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

export const handleReject = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
