import css from "./Filter.module.css";
import filter from "../../assets/filter.svg"
import search from "../../assets/search.svg"
import Select from "react-select";

const category = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "#FFF",
        borderColor: state.isFocused ? "#E0E0E0" : "#E0E0E0", 
        borderRadius: "30px",
        padding: "0 18px",
        boxShadow: "none",
        width: "100%",
        minHeight: "44px",
        // fontFamily: "var(--font-family)",
        fontWeight: "400",
        fontSize: "12px",
        letterSpacing: "-0.03em",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        "&:hover": {
          borderColor: "#E0E0E0",
        },
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "#BDBDBD",
        fontWeight: "400",
        fontSize: "14px",
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "#262626",
        fontWeight: "500",
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: "#222222",
        padding: "0",
        cursor: "pointer",
        "&:hover": {
          color: "#222222",
        },
    }),
    clearIndicator: (provided) => ({
        ...provided,
        color: "#222222",
        padding: "0",
        cursor: "pointer",
        "&:hover": {
          color: "#222222",
        },
    }),
    indicatorSeparator: () => ({
        display: "none",
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: "#FFFFFF",
        borderRadius: "15px",
        overflow: "hidden",
        marginTop: "5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? "#F9F9F9" : "#FFFFFF",
        color: state.isSelected ? "#FF8C00" : "#222222",
        fontWeight: state.isSelected ? "600" : "400",
        fontSize: "14px",
        padding: "10px 15px",
        "&:active": {
          backgroundColor: "#FFFFFF",
        },
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: "0",
    }),
}


const categoriesOptions = [
    { value: "electronics", label: "Electronics" },
    { value: "clothing", label: "Clothing" },
    { value: "books", label: "Books" },
    { value: "furniture", label: "Furniture" },
  ];

export default function Filter() {
    return(
        <form className={css.form}>
            <Select
                options={categoriesOptions}
                 placeholder="Product category"
                isClearable
                classNamePrefix="select"
                styles={category}
            />
            <div className={css.label}>
                <input className={css.input} type="text" placeholder="Search medicine"/>
                <button className={css.buttonSearch}><img src={search} alt="" /></button>
            </div>
            <button className={css.button}>
                <img src={filter} alt="filter" />
                <p>Filter</p>
            </button>
        </form>
    )
}