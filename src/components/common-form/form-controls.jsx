

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";

// eslint-disable-next-line react/prop-types
const FormControls = ({ formControls = [], formData, setFormData }) => {


    const renderComponentByType = (getControlItem) => {
        let element = ''
        let value = formData[getControlItem.name] || ''

        switch (getControlItem.componentType) {
            case 'input':
                element = <Input type={getControlItem.type} name={getControlItem.name} id={getControlItem.name} value={value} onChange={e => setFormData({ ...formData, [getControlItem.name]: e.target.value })} placeholder={getControlItem.placeholder} />
                break;

            case 'select':
                element = <Select onValueChange={value => setFormData({ ...formData, [getControlItem.name]: value })}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={getControlItem.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {/* <SelectLabel>Fruits</SelectLabel> */}
                            {getControlItem?.options.length > 0 && getControlItem.options.map(item => (
                                <SelectItem key={item.id} value={item.id}>{item.label}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                break;

            case 'textarea':
                element = <Textarea type={getControlItem.type} name={getControlItem.name} id={getControlItem.name} value={value} onChange={e => setFormData({ ...formData, [getControlItem.name]: e.target.value })} placeholder={getControlItem.placeholder}></Textarea>
                break;

            default:
                element = <Input type={getControlItem.type} name={getControlItem.name} id={getControlItem.name} value={value} onChange={e => setFormData({ ...formData, [getControlItem.name]: e.target.value })} placeholder={getControlItem.placeholder} />
        }

        return element
    }

    return (
        <div className="flex flex-col gap-3">
            {
                formControls.map(controlItem => (
                    <div key={controlItem.name} className="mb-3">
                        <Label htmlFor={controlItem.name} className="mb-2 block">{controlItem.label} </Label>
                        {renderComponentByType(controlItem)}
                    </div>
                )
                )
            }
        </div>
    )
}

export default FormControls;