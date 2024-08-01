
import './App.css';
import Form from './compound/form';
import Table from './compound/Table';
import Sridevi from './compound/sridevi';
import Form1, { users } from './Table/form';
import Table1 from './Table/table';
function App() {
  return (
   <>
   <div className='container'>
   <Form/>
   <Table/>
   <Sridevi/>
   {/* <Form1/> */}
   {/* <Table1 data={users}/> */}
   </div>
   </>
  );
}

export default App;
