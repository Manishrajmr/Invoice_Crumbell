import { useState } from "react"
import Header from "./components/Header"
import MainDetails from "./components/MainDetails"
import ClientDetails from "./components/ClientsDetails"
import Dates from "./components/Dates"
import Table from "./components/Table"
import Notes from "./components/Notes"
import Footer from "./components/Footer"


function App() {


  return (

    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow ">

         <div>
          <Header />

          <MainDetails />

          <ClientDetails />

          <Dates />

          <Table />

          <Notes />

          <Footer />
          {/* <button className="bg-blue-500 mt-10 text-white font-bold px-8 py-2 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300" >Print</button> */}


        </div>

      </main>
    </>
  );
}

export default App;
