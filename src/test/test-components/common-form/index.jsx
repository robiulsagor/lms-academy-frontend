import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"

const CommonForm = ({ formControls = [], formData, setFormData, btnText, onSubmit }) => {

    const renderInputs = (getItems) => {
        let ele = ''
        let value = formData[getItems.name]

        switch (getItems.componentType) {
            case 'input':
                ele = <Input type={getItems.type} placeholder={getItems.placeholder} name={getItems.name} id={getItems.name} value={value} onChange={e => setFormData({ ...formData, [getItems.name]: e.target.value })} />
                break;

            case 'select':
                ele = <Select type={getItems.type} placeholder={getItems.placeholder} name={getItems.name} id={getItems.name} ></Select>
                break;

            default:
                ele = <Input type={getItems.type} placeholder={getItems.placeholder} name={getItems.name} id={getItems.name} value={value} onChange={e => setFormData({ ...formData, [getItems.name]: e.target.value })} />
                break;
        }

        return ele
    }

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            {
                formControls.map(items => (
                    <div key={items.name}>
                        <Label htmlFor={items.name} className="block mb-2 text-gray-700">
                            {items.label}
                        </Label>
                        {renderInputs(items)}
                    </div>
                ))
            }

            <Button > {btnText || "Submit"}</Button>
        </form>
    )
}

export default CommonForm