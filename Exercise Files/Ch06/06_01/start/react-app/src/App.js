// import "./App.css";
// import { useState, useEffect } from "react";

// // Fetching data from an API
// function GithubUser({ name, type, avatar }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{type}</p>
//       <img src={avatar} height={200} alt={name} />
//     </div>
//   );
// }

// function App() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://api.github.com/users/blessedmate`)
//       .then((response) => response.json())
//       .then(setData)
//       .then(() => setLoading(false))
//       .catch(setError);
//   }, []);

//   if (loading) return <h1>Loading...</h1>;
//   if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
//   if (!data) return null;
//   return (
//     <GithubUser name={data.name} type={data.type} avatar={data.avatar_url} />
//   );
// }

// import "./App.css";
// import { useState, useEffect } from "react";

// const query = `
// query {
//   allLifts {
//     name
//     elevationGain
//     status
//   }
// }
// `;

// const opts = {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ query }),
// };

// // Fetching data from graphQL
// function Lift({ name, elevationGain, status }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>
//         {elevationGain} {status}
//       </p>
//     </div>
//   );
// }

// function App() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://snowtooth.moonhighway.com`, opts)
//       .then((response) => response.json())
//       .then(setData)
//       .then(() => setLoading(false))
//       .catch(setError);
//   }, []);

//   if (loading) return <h1>Loading...</h1>;
//   if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
//   if (!data) return null;
//   return (
//     <div>
//       {data.data.allLifts.map((lift) => (
//         <Lift
//           key={lift.id}
//           name={lift.name}
//           elevationGain={lift.elevationGain}
//           status={lift.status}
//         />
//       ))}
//     </div>
//   );
// }

import "./App.css";

const tahoe_peaks = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Tallac", elevation: 9735 },
];

function List({ data, renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <List
      data={tahoe_peaks}
      renderEmpty={<p>This list is empty</p>}
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation} ft.
        </>
      )}
    />
  );
}

export default App;
