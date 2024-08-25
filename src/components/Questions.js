import React from 'react'

export default function Questions({data}) {
    const [answer, setAnswer]=useState({});
    const [result, setRResult]=useState(null);

  return (
    <div>
    <p>Questions{data.id}</p>
    {data.map((item) => (
      <div key={item.id}>
        <p>{item.question}</p>
        <ul>
          {Object.entries(item.choices).map(([key, choice]) => (
            <li key={key}>
                <button> {key}: {choice}</button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  )
}
