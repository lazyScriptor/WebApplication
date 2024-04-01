import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8089/users")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Hourly pay</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.student_id}</td>
              <td>{d.first_name}</td>
              <td>{d.last_name}</td>
              <td>{d.hourly_pay}</td>
              <td>{d.customer_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
