import './assignment.styles.scss';

import { useEffect, useState } from 'react';
import FormInput from '../form-input/form-input.componet';
import CustomButton from '../custom-button/custom-button.component';


const Assignment = ({ user, room, other }) => {
    //state
    const [dis, setDis] = useState(false);
    const [asign, setAsign] = useState('')
    //effect
    useEffect(() => {
        if (user === other.owner_e) {
            setDis(true)
        }
        else {
            setDis(false)
        }
    }, [user, other.owner_e])
    const handleChange = (e) => {
        setAsign(e.target.value)
    }
    return (
        <div className='assignment'>
            assignment
            {dis ? (<div>
                <form action="">
                    <FormInput type="text" value={asign}
                        name='Material'
                        handleChange={handleChange}
                        label='Material'
                        required
                    />
                    <CustomButton type='submit'>Post</CustomButton>
                </form>
            </div>) : null}
        </div>
    )
}
export default Assignment;