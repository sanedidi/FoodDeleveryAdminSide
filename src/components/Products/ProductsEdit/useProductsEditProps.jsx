import React from 'react'

const useProductsEditProps = () => {
    const [categories, setCategories] = useState([]);
    const [branches, setBranches] = useState([]);
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        category_id: '',
        branch_id: '',
        income_price: '',
        sale_price: '',
        articul: '',
        storage_code: '',
        tax_code: '',
        packaging_code: '',
        status: false,
        photo: null
      });
      
    return {
        categories, setCategories,
        branches, setBranches,
        productData, setProductData
    }
}

export default useProductsEditProps