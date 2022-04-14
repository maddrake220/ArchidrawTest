import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { URL } from "../service/constants";

const TestStyled = styled.div`
  button {
    background-color: red;
  }
`;
interface ItemType {
  _id: string;
}

const Item: React.FC<ItemType> = ({ _id }) => {
  return <li>name: {_id}</li>;
};

const TestMocking = () => {
  const [data, setData] = useState<ItemType[] | null>(null);
  const [error, setError] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const { renderings } = json;
        setData(renderings);
      })
      .catch((error) => {
        setError(true);
        new Error("error occured while getting data", error);
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <TestStyled>
      <button onClick={handleClick}>fetch fake data</button>
      {data && (
        <ul>
          {data.map((item) => (
            <Item key={item._id} _id={item._id} />
          ))}
        </ul>
      )}
    </TestStyled>
  );
};

export default TestMocking;
