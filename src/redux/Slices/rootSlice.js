import { createSlice } from '@reduxjs/toolkit';
import { notifyRegisterApiError } from 'components/Toastify/Toastify';
//import { notifyTest } from 'components/Toastify/Toastify';
import { initialRootState } from 'redux/initialState';

export function handlePending(state) {
  state.isLoading = true;
  state.error = null;
}

export function handleRejected(state, { error }) {  
  state.isLoading = false;
  state.error = error.message;
  notifyRegisterApiError(error.message)
  // notifyTest();
}

export function handleFulfilled(state) {
  state.isLoading = false;
}

const rootSlice = createSlice({
  name: 'root',
  initialState: initialRootState,

  extraReducers: builder => {
    builder
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const rootReducer = rootSlice.reducer;
