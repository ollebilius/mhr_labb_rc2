import React, { useState } from "react";
import { request } from "graphql-request";

function App() {
  //jag har testat att göra anropen med hjälp av "graphql-request" vilket är en "Most simple and lightweight GraphQL client"

  //om vi vill ha något mer avancerat som dessutom har stöd datahantering i applikationen
  //kan det vara värt att titta på "Apollo" (https://www.apollographql.com/)

  //det går bra att göra vanliga fetch-anrop också

  // fetch("http://localhost:7979/api/graphql", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/graphql"
  //   },
  //   body: "query { card { displayText } }"
  // })
  //   .then(r => r.json())
  //   .then(data => console.log("data returned:", data));

  const exampleQuery = `{
    smallcard {
      cardNumber
      avatarText
      bodyText
      displayText
    }
  }
  `;

  const endpoint = "http://localhost:7979/api/graphql";
  const [exampleRequestResult, setResult] = useState([]);

  request(endpoint, exampleQuery)
    .then((data) => setResult(data.smallcard))
    .catch((err) => {
      console.log(err); // GraphQL response errors
    });

  return (
    <ul>
      {exampleRequestResult.map((item) => (
        <li>
          <h2>Kort</h2>
          Namn: {item.displayText} <br />
          Text: {item.bodyText} <br />
        </li>
      ))}
    </ul>
  );
}

export default App;
