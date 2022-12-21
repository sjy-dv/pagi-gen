```js
const { page_gen } = require('pagination-generator')
/* example
    let { page } = req.query
    - page is 1
    - limit 10
    const dataSet = db.test.findAndCountAll({
        offset : (page - 1) * 10,
        limit : 10,
    })

*/
console.log(page_gen({
    count: dataSet.count,
    data : dataSet.rows,
    limit : 10,
    page : 1,
}))

//output
{
  pre_page: 1,
  current_page: 1,
  next_page: 2,
  num_page: 5331,
  rows: [
    // data values..
  ],
  view_page: [
    1, 2, 3, 4,  5,
    6, 7, 8, 9, 10
  ]
}
```
