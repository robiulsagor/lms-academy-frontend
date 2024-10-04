import { useContext } from "react";
import { Button } from "../ui/button";
import FormControls from "./form-controls";
import { AuthContext } from "@/context/auth-context";
import ButtonLoadingSpinner from "../loading-spinner/ButtonLoadingSpinner";


// eslint-disable-next-line react/prop-types
const CommonForm = ({ formControls = [], formData, setFormData, btnText, onSubmit, isDisabled }) => {
    const { loading } = useContext(AuthContext)

    return (
        <form onSubmit={onSubmit}>
            <FormControls
                formControls={formControls} formData={formData} setFormData={setFormData}
            />
            <Button disabled={!isDisabled() || loading} type="submit" className="mt-2 w-full">
                {loading ? <ButtonLoadingSpinner /> : btnText || "Submit"}
            </Button>
        </form>
    )
}

export default CommonForm;
