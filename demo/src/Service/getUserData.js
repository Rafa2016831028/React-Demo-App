import React ,{useState, useEffect} from 'react';
function GetUserDetails(){
     const [error, setError] = React.useState(null);
     const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://62213a0e-144d-4121-9e00-859350d438ec.mock.pstmn.io/get")
          .then(res => res.json())
          .then(
            (result) => {
                debugger
            console.log(result);
              setIsLoaded(true);
              setItems(Array.from(result.items));
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        const result = {items};
        debugger
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
}

export default GetUserDetails;