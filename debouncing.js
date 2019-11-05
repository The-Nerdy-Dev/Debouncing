let counter = 0;

const fetchListOfProducts = () => {
  // Simulate an API call here
  console.log(`Fetching the data....${counter++}`);
};

const debounce = (fn, delay) => {
  let timer;

  return arguments => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
};

const debounceProductSearchCall = debounce(fetchListOfProducts, 3000);
