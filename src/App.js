import { useEffect, useState } from "react";
import "./App.css";
import Image from "./components/Image";
import { UrlService } from "./services/UrlService";

function App() {
  const [urlList, setUrlList] = useState();
  useEffect(() => {
    const urlService = new UrlService();
    urlService.getUrlList((url_list) => {
      const UrlList = url_list.map((v, index) => {
        return <Image key={index} url={v} />;
      });
      setUrlList(UrlList);
      console.log(UrlList);
    });
  }, []);

  return (
    <section className="container mx-auto grid grid-cols-3 gap-4">
      {urlList}
    </section>
  );
}

export default App;
