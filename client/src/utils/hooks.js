import { useState } from "react";

export const useForm = (callBack, initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        console.log(values);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        callBack();
    }

    return {
        onChange,
        onSubmit,
        values
    }
}