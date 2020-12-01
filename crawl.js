const axios = require("axios");
const cheerio = require("cheerio");

// axios를 활용해 AJAX로 HTML 문서를 가져오는 함수 구현
async function getHTML() {
  try {
    return await axios.get("https://www.coupang.com/np/categories/417869/?listSize=60&brand=&offerCondition=&filterType=&isPriceRange=false&minPrice=&maxPrice=&page=1&channel=user&fromComponent=Y&selectedPlpKeepFilter=&sorter=bestAsc&filter=&component=417769&rating=0");
  } catch (error) {
    console.error(error);
  }
}

// getHTML 함수 실행 후 데이터에서
// body #container #contents #searchOptionForm .newcx-container .newcx-body .newcx-main .newcx-list .productList .baby-product .baby-product-link .baby-product-wrap .image img
// 에 속한 Img를 imgdp 저장
getHTML()
  .then(html => {
    let imgList = [];
    const $ = cheerio.load(html.data);
    const bodyList = $(".baby-product-wrap .image img");

    bodyList.each(function(i, elem) {
      imgList[i] = {
        img: $(this)
          .attr("src")
          .split('//')
      };
    });
    return imgList;
  })
  .then(res => console.log(res));


// body #container #contents #searchOptionForm .newcx-container .newcx-body .newcx-main .newcx-list .productList .baby-product .baby-product-link .baby-product-wrap .image img