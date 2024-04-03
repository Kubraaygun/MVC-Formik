import { useFormik } from "formik";
import { schema } from "./schema";

const LoginPage = () => {
  //Formik'in butun ozelliklerini kullanmamizi saglayan hook
  const formik = useFormik({
    //formda tutulacak verilerin ilk degeri
    initialValues: {
      email: "",
      age: "",
    },

    //Validasyon semasi
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
          <div>
            <label>Emailiniz</label>
            <input
              onChange={formik.handleChange}
              name="email"
              className="form-control mt-2"
              type="email"
            />
            <span>E mail alani zorunludur</span>
          </div>

          <div>
            <label>Yasiniz</label>
            <input
              onChange={formik.handleChange}
              name="age"
              className="form-control mt-2"
              type="number"
            />
            <span>Yas alani zorunludur</span>
          </div>
          <button>Gonder</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
