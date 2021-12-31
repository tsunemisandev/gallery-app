export class UrlService {
  async getUrlList(promisse) {
    fetch("./url_list.txt")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        // console.log(data);
        return data.split("\n");
      })
      .then(promisse)
      .catch((e) => {
        console.log("error to read file");
        console.log(e);
      });
  }
}

function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        return allText;
      }
    }
  };
  rawFile.send(null);
}
