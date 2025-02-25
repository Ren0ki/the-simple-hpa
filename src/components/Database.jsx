import {useState} from "react";

const Database = () => {

    const [data, setData] = useState({ Cancer: "", CPTAC_Dataset: "", Sample_Size: "", Study_Focus: "", Proteomics_Techniques: ""});
    const [errors, setErrors] = useState({ general: ""});
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {

        const handleSubmit = async (e) => {

            e.preventDefault();
            setSubmitting(true);
            
            const formData = new FormData();
            formData.append("Cancer", data.Cancer.trim());
            formData.append("CPTAC_Dataset", data.CPTAC_Dataset.trim());
            formData.append("Sample_Size", data.Sample_Size.trim());
            formData.append("Study_Focus", data.Study_Focus.trim());
            formData.append("Proteomics_Techniques", data.Study_Focus.trim()); //update id and
        }
        return (

            <form onSubmit={handleSubmit} className={style["profile-form"]}>

                <input
                    type="text"
                    name="Cancer"
                    placeholder="Cancer"
                    required
                    value={data.Cancer}
                    onChange={handleChange}
                />

                 <input
                    type="text"
                    name="Sample_Size"
                    placeholder= "Sample Size"
                    required
                    value={data.Sample_Size}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    name="Study_Focus"
                    placeholder="Study Focus"
                    required
                    value={data.Study_Focus}
                    onChange={handleChange}
                />

                <input 
                    type = "text"
                    name="Proteomics_Techniques"
                    placeholder="Proteomics Techniques"
                    required
                    value={data.Proteomics_Techniques}
                    onChange={handleChange}
                ></input>

                <button type="submit" disabled={
                    submitting || 
                    data.Cancer.trim() === "" || 
                    data.CPTAC_Dataset.trim() === "" || 
                    data.Sample_Size.trim() === "" ||
                    data.Study_Focus.trim() === "" || 
                    data.Proteomics_Techniques.trim()
    
                }>Submit</button>
                
                {errors.general && <p className={style['error']}>{errors.general}</p>}
                {successMessage && <p className={style['success']}>{successMessage}</p>}
            </form>
        );
    };
  }
export default Database;