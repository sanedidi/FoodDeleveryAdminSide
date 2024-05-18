import axios from "axios";
import {
  Box,
  CustomBtn,
  CustomInput,
  CustomSelect,
  Lang,
  React,
  Select,
  Textarea,
  makeAnimated,
  s,
  useState,
} from "./imports";

const animatedComponents = makeAnimated();

const MainProd = () => {
  const [article, setArticle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({ 
    branch_id: "",
    category_id: "",
    description: "",
    income_price: "",
    name: "",
    packaging_code: "",
    quantity: "",
    sale_price: "",
    storage_code: "",
    tax_code: "",
    tags: [],
    unit_code: "",
  });

  const colourOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((value, index) => {
          data.append(`${key}[${index}]`, value);
        });
      } else {
        data.append(key, formData[key]);
      }
    }
    data.append("photo", selectedFile);

    try {
      const response = await axios.post(
        "https://food-delivery-api-n6as.onrender.com/v1/product",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product created:", response.data);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000000).toString();
  };

  return (
    <Box className={s.prod}>
      <Box className={s.prod__left}>
        <Box className={s.prod__top}>
          <h2 className={s.prod__title}>Товар</h2>
          <p className={s.prod__text}>Активный</p>
        </Box>
        <Box className={s.prod__lang}>
          <Lang />
        </Box>
        <Box className={s.prod__bottom}>
          <form onSubmit={handleSubmit}>
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}>*Название </h2>
              <input
                style={{ backgroundColor: "transparent" }}
                placeholder="Введите Название"
                name="name"
                onChange={handleInputChange}
              />
            </Box>
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}>*Описание </h2>
              <textarea
                placeholder="Введите Описание"
                name="description"
                onChange={handleInputChange}
              />
            </Box>
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}>*Категории </h2>
              <Select
                placeholder="Выберите категории"
                options={colourOptions}
                name="category_id"
                onChange={(selectedOption) =>
                  setFormData({
                    ...formData,
                    category_id: selectedOption.value,
                  })
                }
              />
            </Box>
            <Box className={s.prod__price}>
              <Box className={s.prod__price_input}>
                <h2 className={s.prod__bottom_title}>Цена прихода </h2>
                <input
                  style={{ backgroundColor: "transparent" }}
                  placeholder="Напишите сумму"
                  name="income_price"
                  onChange={handleInputChange}
                />
              </Box>
              <Box className={s.prod__price_input}>
                <h2 className={s.prod__bottom_title}>Цена продаж </h2>
                <input
                  style={{ backgroundColor: "transparent" }}
                  placeholder="Напишите сумму"
                  name="sale_price"
                  onChange={handleInputChange}
                />
              </Box>
            </Box>
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}>Количество</h2>
              <input
                style={{ backgroundColor: "transparent" }}
                placeholder="Введите количество"
                name="quantity"
                onChange={handleInputChange}
              />
            </Box>
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}>*Артикул </h2>
              <Box className={s.prod__gen}>
                <input
                  value={article}
                  name="article"
                  onChange={(e) => setArticle(e.target.value)}
                  style={{ backgroundColor: "transparent" }}
                  placeholder="Введите Артикул"
                />
                <button
                  type="button"
                  onClick={() => setArticle(generateRandomNumber())}
                >
                  Генерировать
                </button>
              </Box>
            </Box>
            <Box className={s.prod__name}>
              <Box className={s.prod__choice}>
                <Box className={s.prod__item}>
                  <h2 className={s.prod__bottom_title}>
                    Делимый / Не делимый{" "}
                  </h2>
                  <Select
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    defaultValue={colourOptions[0]}
                    options={colourOptions}
                    name="divisible"
                    onChange={(selectedOption) =>
                      setFormData({
                        ...formData,
                        divisible: selectedOption.value,
                      })
                    }
                  />
                </Box>
                <Box className={s.prod__item}>
                  <h2 className={s.prod__bottom_title}>*Тег </h2>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[colourOptions[0]]}
                    isMulti
                    options={colourOptions}
                    name="tags"
                    onChange={(selectedOptions) =>
                      setFormData({
                        ...formData,
                        tags: selectedOptions.map((option) => option.value),
                      })
                    }
                  />
                </Box>
              </Box>
            </Box>
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}>*Единица измерения </h2>
              <Box className={s.prod__dd}>
                <Select
                  closeMenuOnSelect={true}
                  components={animatedComponents}
                  defaultValue={colourOptions[0]}
                  options={colourOptions}
                  name="unit"
                  onChange={(selectedOption) =>
                    setFormData({ ...formData, unit: selectedOption.value })
                  }
                />
              </Box>
            </Box>
            <Box className={s.prod__main_inputs}>
              <Box className={s.prod__inputs}>
                <h2 className={s.prod__bottom_title}>
                  {" "}
                  Код единицы измерения{" "}
                </h2>
                <input
                  style={{ backgroundColor: "transparent" }}
                  placeholder="Введите код"
                  name="unit_code"
                  onChange={handleInputChange}
                />
              </Box>
              <Box className={s.prod__inputs}>
                <h2 className={s.prod__bottom_title}> Код ИКПУ </h2>
                <input
                  style={{ backgroundColor: "transparent" }}
                  placeholder="Введите код"
                  name="tax_code"
                  onChange={handleInputChange}
                />
              </Box>
              <Box className={s.prod__inputs}>
                <h2 className={s.prod__bottom_title}> Код упаковки </h2>
                <input
                  style={{ backgroundColor: "transparent" }}
                  placeholder="Введите код"
                  name="packaging_code"
                  onChange={handleInputChange}
                />
              </Box>
            </Box>
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}>*Филлиалы </h2>
              <Select
                placeholder="Выберите Филлиалы"
                options={colourOptions}
                name="branch_id"
                onChange={(selectedOption) =>
                  setFormData({ ...formData, branch_id: selectedOption.value })
                }
              />
            </Box>
            <Box className={s.prod__name}>
              <h2 className={s.prod__bottom_title}>*Фото </h2>
              <input type="file" name="photo" onChange={handleFileChange} />
            </Box>
            <Box className={s.prod__name}>
              <button type="submit">Отправить</button>
            </Box>
          </form>
        </Box>
      </Box>
      <Box className={s.prod__right}></Box>
    </Box>
  );
};

export default MainProd;
