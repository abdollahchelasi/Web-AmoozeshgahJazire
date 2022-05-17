import Helmet from "react-helmet";
import "./App.css";
import Navb from "./folder/Nav";

function App() {
  return (
    <div>
      <Helmet>
        <link rel="icon" href="r.png" />
        <meta
          name="keywords"
          content="آموزشگاه جزیره قشم , آموزشگاه رانندگی جزیره , آموزشگاه رانندگی جزیره قشم"
        />
        <meta
          name="description"
          content="آموزشگاه رانندگی جزیره در جزیره زیبای قشم 🚦  جهت ثبت نام و سریع کلاس ها با کادر مجرب بدون پایان خدمت , اول رانندگی یاد بگیر بعد رانندگی کنید , این آموزشگاه رانندگی جزیره هست در قلب جزیره می درخشد ,  اگه میخوای گواهینامه موتور و ماشین بگیری بیا آموزشگاه رانندگی جزیره قشم 🚦"
        />
        <title>آموزشگاه رانندگی جزیره</title>
      </Helmet>
      <Navb />
    </div>
  );
}

export default App;
