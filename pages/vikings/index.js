import React from 'react';
import Link from "next/link";
import styles from '../../styles/Vikings.module.css';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {vikings: data}
  }
}

const Vikings = ({vikings}) => {
  return (
    <div>
      <h1>All Vikings</h1>
      {vikings.map(viking => (
        <Link href={`/vikings/${viking.id}`} key={viking.id}>
          <a className={styles.single}>
            <h3>{viking.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Vikings;