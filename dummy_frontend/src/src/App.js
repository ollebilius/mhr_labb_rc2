import React, { useState } from "react";
import { request } from "graphql-request";

function App() {
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
    humanRightsCard {
      contentItemId
      displayText
      htmlBody {
        html
      }
    }
  }

  `;

  const endpoint = "http://localhost:7979/api/graphql";
  const [exampleRequestResult, setResult] = useState([]);

  request(endpoint, exampleQuery)
    .then(data => setResult(data.humanRightsCard))
    .catch(err => {
      console.log(err); // GraphQL response errors
    });

  return (
    <ul>
      {exampleRequestResult.map(item => (
        <li>
          <h2>Kort</h2>
          Namn: {item.displayText} <br />
          ID: {item.contentItemId} <br />
          <span dangerouslySetInnerHTML={{ __html: item.htmlBody.html }} />
        </li>
      ))}
    </ul>
  );
}

export default App;
