// Modern React Testing Library setup
import "@testing-library/jest-dom";

// Mock sessionStorage for tests
const mockSessionStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  length: 0,
  key: jest.fn(),
};

Object.defineProperty(window, "sessionStorage", {
  value: mockSessionStorage,
  writable: true,
});

// Mock basic user data for tests
mockSessionStorage.getItem.mockImplementation((key) => {
  if (key === "userData") {
    return JSON.stringify({
      user: {
        _id: "test-user-id",
        phone: "1234567890test",
        userName: "Test User",
      },
      access_token: "test-token",
    });
  }
  return null;
});
