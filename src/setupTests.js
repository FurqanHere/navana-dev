// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock(
  "swiper/react",
  () => {
    const React = require("react");
    return {
      Swiper: ({ children }) =>
        React.createElement("div", { "data-testid": "swiper" }, children),
      SwiperSlide: ({ children }) =>
        React.createElement("div", { "data-testid": "swiper-slide" }, children),
    };
  },
  { virtual: true }
);

jest.mock(
  "swiper/modules",
  () => ({
    Pagination: {},
    Autoplay: {},
    Navigation: {},
  }),
  { virtual: true }
);

jest.mock("swiper/css", () => ({}), { virtual: true });
jest.mock("swiper/css/pagination", () => ({}), { virtual: true });
jest.mock("swiper/css/navigation", () => ({}), { virtual: true });

jest.mock("axios", () => ({
  create: () => ({
    interceptors: { response: { use: () => {} } },
    request: () => Promise.resolve({ data: {} }),
  }),
}));

jest.mock("sweetalert2", () => ({}));
