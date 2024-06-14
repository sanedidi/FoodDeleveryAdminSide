import { toast, useState, useEffect, useNavigate } from "public/imports";
import { Calendar } from "primereact/calendar";
import request from "services/httpRequest";

const useOrdersAddProps = () => {
  const [branchOptions, setBranchOptions] = useState([]);
  const [prodOptions, setProdOptions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const [orderDetails, setOrderDetails] = useState({
    branch_id: "08410b3c-a6f9-40bb-a777-486a86289ee0",
    comment: "",
    customer_name: "",
    customer_phone: "",
    delivery_time: "",
    order_type: "самовывоз",
    payment_type: "",
    products: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await request.get(
          "https://food-delivery-api-n6as.onrender.com/v1/branches"
        );
        const options = response.data.Data.branches.map((branch) => ({
          value: branch.id,
          label: branch.name,
        }));
        setBranchOptions(options);
      } catch (error) {
        console.error("Не удалось получить данные филиалов", error);
      }
    };
    fetchBranches();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await request.get(
          "https://food-delivery-api-n6as.onrender.com/v1/products"
        );
        const options = response.data.Data.products.map((prod) => ({
          value: prod.id,
          label: prod.name,
          category_id: prod.category_id,
          photo: prod.photo,
          name: prod.name,
          desc: prod.description,
          price: prod.sale_price,
        }));
        setProdOptions(options);
      } catch (error) {
        console.error("Не удалось получить данные продуктов", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await request.get(
          "https://food-delivery-api-n6as.onrender.com/v1/categories",{
            params:{
              limit: 1000000000000,
            }
          }
        );
        const options = response.data.Data.category.map((cat) => ({
          value: cat.id,
          label: cat.name,
          photo: cat.photo,
        }));
        setCategories(options);
      } catch (error) {
        console.error("Не удалось получить данные категорий", error);
      }
    };
    fetchCategories();
  }, []);

  const handleInputChange = (field, value) => {
    setOrderDetails((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleProductChange = (productId, quantity, productName) => {
    const product = prodOptions.find((prod) => prod.value === productId);
    const existingProductIndex = orderDetails.products.findIndex(
      (product) => product.id === productId,
      (product) => product.name === productName
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...orderDetails.products];
      updatedProducts[existingProductIndex].quantity += quantity;
      if (updatedProducts[existingProductIndex].quantity < 0)
        updatedProducts[existingProductIndex].quantity = 0;
      setOrderDetails((prevState) => ({
        ...prevState,
        products: updatedProducts,
      }));
    } else {
      setOrderDetails((prevState) => ({
        ...prevState,
        products: [
          ...prevState.products,
          { id: productId, name: product.name, price: product.price, quantity },
        ],
      }));
    }

    const totalPriceChange = product.price * quantity;
    setTotalAmount((prevTotalAmount) => prevTotalAmount + totalPriceChange);
  };

  const handleSubmit = async () => {
    if (!orderDetails.branch_id) {
      toast.error("Пожалуйста, выберите филиал.");
      return;
    }

    if (!orderDetails.customer_name) {
      toast.error("Пожалуйста, введите имя клиента.");
      return;
    }

    if (!orderDetails.customer_phone) {
      toast.error("Пожалуйста, введите номер телефона клиента.");
      return;
    }

    if (!orderDetails.payment_type) {
      toast.error("Пожалуйста, выберите способ оплаты.");
      return;
    }

    if (!orderDetails.delivery_time) {
      toast.error("Пожалуйста, выберите дату!");
      return;
    }

    const hasProducts = orderDetails.products.some(
      (product) => product.quantity > 0
    );

    if (!hasProducts) {
      toast.error("Пожалуйста, выберите продукты для заказа.");
      return;
    }

    try {
      await request.post(
        "https://food-delivery-api-n6as.onrender.com/v1/order_p",
        {
          ...orderDetails,
          products: orderDetails.products.map((product) => ({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
          })),
        }
      );
      toast.success("Заказ успешно создан!");
      setTimeout(() => {
        navigate("/admin/orders");
      }, 1000);
    } catch (error) {
      toast.error("Ошибка при создании заказа", error);
    }
  };

  return {
    branchOptions,
    prodOptions,
    categories,
    selectedCategory,
    setSelectedCategory,
    totalAmount,
    selectedFromDate,
    selectedToDate,
    orderDetails,
    handleInputChange,
    handleProductChange,
    handleSubmit,
    setSelectedFromDate,
    setSelectedToDate,
  };
};

export default useOrdersAddProps;
