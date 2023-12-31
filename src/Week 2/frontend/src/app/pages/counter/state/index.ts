import { createFeature, createReducer, createSelector, on } from "@ngrx/store";
import {
  CountByValues,
  CounterDocuments,
  CounterEvents,
} from "./counter.actions";

export interface CounterState {
  current: number;
  by: CountByValues;
}

const initialState: CounterState = {
  current: 0,
  by: 1,
};

export const counterFeature = createFeature({
  name: "counter",
  reducer: createReducer(
    initialState,
    on(CounterDocuments.counterState, (_, a) => a.payload),
    on(CounterEvents.countByChanged, (state, action) => ({
      ...state,
      by: action.by,
    })),
    on(CounterEvents.incrementClicked, (state) => ({
      ...state,
      current: state.current + state.by,
    })),
    on(CounterEvents.decrementClicked, (state) => ({
      ...state,
      current: state.current - state.by,
    })),
    on(CounterEvents.resetClicked, (state) => ({
      ...state,
      current: 0,
    })),
  ),
  extraSelectors: ({ selectCurrent }) => ({
    selectResetShouldBeDisabled: createSelector(selectCurrent, (c) => c === 0),
  }),
});
