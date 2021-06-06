import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Item from '../../src/component/item';

// interface IProps {
//   product: IProduct;
// }

// export interface IProduct {
//   name: string;
//   image_link: string;
//   price: number;
//   description: string;
//   updated_at: string;
//   category: string;
//   product_type: string;
//   product_link: string;
// }

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setItem(res.data);
    });
  }

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  return <Item item={item}></Item>;
};

export default Post;
