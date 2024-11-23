const originalError = console.error;

console.error = (...args) => {
  if (
    args[0] &&
    args[0].includes(
      "ReactDOMTestUtils.act is deprecated in favor of React.act"
    )
  ) {
    return;
  }
  originalError(...args);
};

global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};
