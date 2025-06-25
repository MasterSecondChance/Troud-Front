// Polyfills for jsdom environment
const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock global objects needed by the application
Object.defineProperty(window, "sessionStorage", {
  value: {
    length: 0,
    key: jest.fn(),
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  },
  writable: true,
});

Object.defineProperty(window, "localStorage", {
  value: {
    length: 0,
    key: jest.fn(),
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  },
  writable: true,
});

// Mock console.warn and console.error to avoid noise in tests
const originalWarn = console.warn;
const originalError = console.error;

console.warn = (...args) => {
  if (
    typeof args[0] === "string" &&
    (args[0].includes("React.createFactory") ||
      args[0].includes("componentWillMount") ||
      args[0].includes("componentWillReceiveProps") ||
      args[0].includes("React Router Future Flag Warning") ||
      args[0].includes("v7_startTransition") ||
      args[0].includes("v7_relativeSplatPath"))
  ) {
    return;
  }
  originalWarn(...args);
};

console.error = (...args) => {
  if (
    typeof args[0] === "string" &&
    (args[0].includes("Support for defaultProps will be removed") ||
      args[0].includes("FontAwesomeIcon: Support for defaultProps") ||
      args[0].includes("ToastContainer: Support for defaultProps"))
  ) {
    return;
  }
  originalError(...args);
};

// Mock matchMedia for components that use it
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
