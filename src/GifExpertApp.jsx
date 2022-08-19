import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Iron Maiden'])
  
  const onAddCategory = ( newCategory) => {

    if( categories.includes(newCategory) ) return;
    // Agregar nueva categoría
    setCategories([ newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={ onAddCategory }
      />

      { categories.map( category => (
        <GifGrid key={category} category={category}/>
        )) 
      }

    </>
  )
};
