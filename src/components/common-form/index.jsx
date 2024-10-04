import { Button } from "../ui/button";
import FormControls from "./form-controls";


// eslint-disable-next-line react/prop-types
const CommonForm = ({ formControls = [], formData, setFormData, btnText, onSubmit, isDisabled }) => {
    return (
        <form onSubmit={onSubmit}>
            <FormControls
                formControls={formControls} formData={formData} setFormData={setFormData}
            />
            <Button disabled={!isDisabled()} type="submit" className="mt-2 w-full">{btnText || "Submit"} </Button>
        </form>
    )
}

export default CommonForm;
