/**
 * obj={count : int, data : array[], limit:int, page:int}
 */
const page_gen = (obj) => {
  let numPage = (function () {
    if (obj.count % obj.limit == 0) {
      return obj.count / obj.limit;
    }
    return obj.count / obj.limit + 1;
  })();

  let responseObj = {
    pre_page: (function () {
      if (obj.page == 1 || obj.page == 0) {
        return 1;
      }
      return obj.page - 1;
    })(),
    current_page: (function () {
      return obj.page;
    })(),
    next_page: (function () {
      if (obj.page == numPage) {
        return obj.page;
      }
      return obj.page + 1;
    })(),
    num_page: numPage,
    rows: obj.data,
    view_page: (function () {
      let ptrix = [];
      let c = 0;
      while (c < obj.limit) {
        ptrix.push(obj.page + c);
        if (obj.page + c == numPage) {
          break;
        }
        c++;
      }
      return ptrix;
    })(),
  };
  return responseObj;
};

module.exports = { page_gen };
