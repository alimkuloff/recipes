import React, { useEffect, useState } from 'react';
import { Table, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setRecipes } from '../redux/actions';
import axios from 'axios';

const RecipeTable = () => {
  const [loading, setLoading] = useState(true);
  const recipes = useSelector(state => state.recipes.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/recipes');
        dispatch(setRecipes(response.data));
      } catch (error) {
        console.error('Retseptlarni yuklashda xato:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [dispatch]);

  const columns = [
    { title: 'Retsept Nomi', dataIndex: 'recipeName', key: 'recipeName' },
    { title: 'Tavsif', dataIndex: 'description', key: 'description' },
  ];

  if (loading) return <Spin />; 

  return <Table dataSource={recipes} columns={columns} />;
};

export default RecipeTable;
