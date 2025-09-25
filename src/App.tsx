

//Lessons
import Lesson_16 from "lessons/Lesson_16/Lesson_16";
import Lesson_18 from "lessons/Lesson_18/Lesson_18";

//Homeworks
import Homework_16 from "homeworks/Homework_16/Homework_16";

// Employees_Projeckt
import CreateEmployee from "pages/CreatEmployee/CreateEmployee";
import Employees from "pages/Employees/Employees";
import { ROUTES } from "pages/constants/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";
import Layout from "pages/Layout/Layout";



function App() {
  return (

      <>
         {/* Employees_Projeckt======>>>>>
         <BrowserRouter>
       <GlobalStyles />
       <Layout>
         <Routes>
           <Route path={ROUTES.HOME} element={<CreateEmployee />} />
           <Route path={ROUTES.CREATE_EMPLOYEE} element={<CreateEmployee />} />
           <Route path={ROUTES.EMPLOYEES} element={<Employees />} />
           <Route path={ROUTES.NOT_FOUND} element="Page Not Found" />
         </Routes>
       </Layout>
     </BrowserRouter> */}




  {/* lessons */}
  {/* <Lesson_16 /> */}
  {/* <Lesson_17 /> */}
  <Lesson_18 />

   {/* homeworks */}
  {/* <Homework_16 /> */}

 
   </>



  )
}

export default App;
