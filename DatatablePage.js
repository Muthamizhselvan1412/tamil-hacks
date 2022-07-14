import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBDataTable  } from 'mdbreact';
import './datatable.css';
// import { MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';


const DatatablePage = (props) => {
  const data = {
    columns: [
      {
        label: 'Company',
        field: 'company',
       
      },
      {
        label: 'Sector',
        field: 'sector',
        
      },
      {
        label: 'Total Funding(US$ M)',
        field: 'totalfund',
        
      },
      {
        label: 'Latest Round',
        field: 'latestround',
        
      },
      {
        label: 'Latest Deal Date',
        field: 'date',
        
      },
      {
        label: 'Latest Deal Amount(US$ M)',
        field: 'amount',
        
      },
      {
        label: 'city',
        field: 'city',
        
      },
      {
        label: 'Add',
        field: 'add',
        
      }
    ],
    rows: [
      {
        company: [<i key="ApnaKlub" className="fa fa-leaf blue-text mr-2" ></i>, 'ApnaKlub'],
        sector: 'E-Commerce',
        totalfund: '10.00',
        latestround: '3',
        date: 'May 2022',
        amount: '8.00',
        city: 'Bangalore',
        add:[<i key="add" className="fa fa-book grey-text" ></i>, '']
      },
      {
        company: [<i key="BarRaiser" className="fa fa-download grey-text mr-2" ></i>, 'BarRaiser'],
        
        sector: 'Enterprice Software',
        totalfund: '4.20',
        latestround: '4',
        date: 'May 2022',
        amount: '2.20',
        city: 'Bangalore',
        add:[<i key="add" className="fa fa-book grey-text" ></i>, '']

      },
      {
        company: [<i key="BharatX" className="fa fa-book grey-text mr-2" ></i>, 'BharatX'],
        sector: 'Consumer App',
        totalfund: '5.00',
        latestround: '3',
        date: 'March 2022',
        amount: '2.30',
        city: 'Bangalore',
        add:[<i key="add" className="fa fa-book grey-text grey-text" aria-hidden="true"></i>, '']

      },
      {
        company: [<i key="BarRaiser" className="far fa-gem mr-2 grey-text " ></i>, 'BarRaiser'],
        sector: 'Asset Management',
        totalfund: '78.06',
        latestround: '4',
        date: 'Apr 2022',
        amount: '10.00',
        city: 'Bangalore',
        add:[<i key="add" className="fa fa-book grey-text grey-text" aria-hidden="true"></i>, '']

      },
      {
        company: [<i key="Bizzo" className="fa fa-leaf teal-text mr-2" ></i>, 'Bizzo'],
        sector: 'Enterprice Software',
        totalfund: '2.00',
        latestround: '3',
        date: 'Feb 2022',
        amount: '2.30',
        city: 'Munbai',
        add:[<i key="add" className="fa fa-book grey-text grey-text" aria-hidden="true"></i>, '']

      },
      {
        company: [<i key="Bliss-Club" className="fa fa-graduation-cap mr-2" ></i>, 'Bliss-Club'],
        sector: 'E-commerce',
        totalfund: '5.00',
        latestround: '23',
        date: 'Feb 2022',
        amount: '4',
        city: 'Bangalore',
        add:[<i key="add" className="fa fa-book grey-text grey-text" aria-hidden="true"></i>, '']

      },
      {
        company: [<i key="Byte Beam" className="fa fa-gift mr-2" ></i>, 'Byte Beam'],
        sector: 'Enterprice Software',
        totalfund: '15.00',
        latestround: '4',
        date: 'Dec 2022',
        amount: '7.30',
        city: 'Bangalore',
        add:[<i key="add" className="fa fa-book grey-text grey-text" aria-hidden="true"></i>, '']

      },
      {
        company: [<i key="CoinShfit" className="fa fa-magic mr-2" ></i>, 'CoinShfit'],
        sector: 'Enterprice Software',
        totalfund: '11.50',
        latestround: '3',
        date: 'Dec 2022',
        amount: '1.00',
        city: 'Mumbai',
        add:[<i key="add" className="fa fa-book grey-text grey-text" aria-hidden="true"></i>, '']

      },
      {
        company: [<i key="EXcital" className="fa fa-table mr-2" ></i>, 'EXcital'],
        sector: 'Broadbrand Service',
        totalfund: '11.30',
        latestround: '3',
        date: 'Nov 2022',
        amount: '2.50',
        city: 'Bangalore',
        add:[<i key="add" className="fa fa-book grey-text grey-text" aria-hidden="true"></i>, '']

      },
      {
        company: [<i key="Fanzstar" className="fa fa-leaf blue-text mr-2" ></i>, 'Fanzstar'],
         sector: 'Online Service',
        totalfund: '0.65',
        latestround: '3',
        date: 'Aug 2022',
        amount: '1.00',
        city: 'Delhi',
        add:[<i key="add" className="fa fa-book grey-text grey-text" ></i>, '']

      },
      {
        company: [<i key="BharatXAb" className="fa fa-leaf blue-text mr-2" ></i>, 'BharatXAb'],
        sector: 'Consumer App',
        totalfund: '4.00',
        latestround: '3',
        date: 'May 2022',
        amount: '2.30',
        city: 'Bangalore',
        add:[<i key="add" className="fa fa-book grey-text grey-text" ></i>, '']

      },
      {
        company: [<i key="BharatXY" className="fa fa-leaf teal-text mr-2" ></i>, 'BharatXY'],
        sector: 'Consumer App',
        totalfund: '5.00',
        latestround: '3',
        date: 'May 2022',
        amount: '2.30',
        city: 'Bangalore',
        add:[<i key="add" className="fa fa-book grey-text grey-text" ></i>, '']

      },
      {
        company: [<i key="BharatX" className="fa fa-leaf indigo-text mr-2" ></i>, 'BharatX'],
        sector: 'Consumer App',
        totalfund: '3.00',
        latestround: '3',
        date: 'May 2022',
        amount: '2.30',
        city: 'Bangalore',
        add:[<i key="add" className="fa fa-book grey-text grey-text" ></i>, '']

      },
    ]
  };

  return (
    <MDBDataTable 
      responsive
      noBottomColumns
      displayEntries={false}
      soratable={false}
      searching={false}
      info={false}
      // paging={true}
      data={data}
        />
  );
}

export default DatatablePage;