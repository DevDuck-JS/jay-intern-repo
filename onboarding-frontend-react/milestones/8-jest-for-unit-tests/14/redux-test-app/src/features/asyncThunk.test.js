import reducer, { fetchCount } from "./asyncThunk";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

test("fetchCount updates state after async call", async () => {
  mock.onGet("/api/count").reply(200, { count: 42 });

  const store = configureStore({ reducer, middleware: [thunk] });

  await store.dispatch(fetchCount());
  expect(store.getState().value).toBe(42);
});
