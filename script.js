function show_price_product() {
  let value = document.getElementById('enter_fruit').value;
  switch (value) {
    case 'quả ổi':
    case 'quả dưa hấu':
      document.getElementById(
        'show_result'
      ).innerHTML = `${value} có giá 20000 vnđ/kg`;
      break;
    case 'quả táo':
    case 'quả xoài':
      document.getElementById(
        'show_result'
      ).innerHTML = `${value} có giá 30000 vnđ/kg`;
      break;
    case 'quả cam':
    case 'quả chôm chôm':
      document.getElementById(
        'show_result'
      ).innerHTML = `${value} có giá 40000 vnđ/kg`;
      break;
    case 'quả măng cụt':
      document.getElementById(
        'show_result'
      ).innerHTML = `${value} có giá 50000 vnđ/kg`;
      break;
  }
}
