import { useFormik } from "formik";
import { schema } from "./schema";
import InputField from "./InputField";


const LoginPage = () => {
  //Formik'in butun ozelliklerini kullanmamizi saglayan hook
  const formik = useFormik({
    //formda tutulacak verilerin ilk degeri
    initialValues: {
      email: "",
      age: "",
    },

    //Validasyon semasi
    //inputlardaki verileri semada kosullara uygun mu
    //kontrol edicek gecerli degilse error stateinde //hatalari tutar
    validationSchema: schema,

    //form gonderilince calisacak olan fonksiyon
    //otomatik olarak sayfa yenilemeyi engeller
    //1-parametre olarak formdaki verileri alir
    //2-formda calistirabilecegimiz aksiyonlari alir

    onSubmit: (values, actions) => {
      console.log(actions);
    },
  });

  return (
    <div className="login-page">
      <div className="container my-5">
        <h2 className="d-flex gap-3 justify-content-center align-items-center">
          <img height={60} src="/c-logo.png" alt="logo" />
          <span>Coinmania</span>
        </h2>

        <form onSubmit={formik.handleSubmit}>
          <InputField formik={formik} data={{label:"Emailiniz", name:"email", type:"email" }}/>

          <InputField formik={formik} data={{label:"Yaşınız", name:"age", type:"number" }}/>


      

          <button>Gonder</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
