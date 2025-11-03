import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { fetchApiData } from '../utils/api';

const ApiList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchApiData();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <Card>Loading...</Card>;
  if (error) return <Card>Error: {error}</Card>;

  return (
    <Card>
      <h2 className="text-xl font-bold mb-4">API Data</h2>
      <ul className="space-y-2">
        {items.map(item => (
          <li key={item.id} className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{item.body}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ApiList;