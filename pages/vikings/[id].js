import React from 'react';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((viking) => ({
    params: { id: viking.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { viking: data }
  }
}

const Details = ({ viking }) => {

  return (
    <div>
      <h1>{viking.name}</h1>
      <p>
        <span>Email: </span>
        {viking.email}
      </p>
      <p>
        <span>Website: </span>
        {viking.website}
      </p>
      <p>
        <span>Address: </span>
        {viking.address.city}
      </p>
    </div>
  );
};

  export default Details;