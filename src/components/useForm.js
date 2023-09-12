import { useState } from "react";

export default function useForm(initialData) {
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return {
        formData,
        handleChange,
    };
}
