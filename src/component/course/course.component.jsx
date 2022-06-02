
import './course.style.scss';


import FormInput from "../../component/form-input/form-input.componet";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../../component/custom-button/custom-button.component";
import Header from "../../component/header/header.component";
import { CardList } from '../card-list/card-list.component';
const form1 = {
    cname: '',
    cdis: '',
}

const form2 = {
    cid: '',
}

const Course = () => {
    const nav = useNavigate();


    const sign = useSelector((state) => (state.sign));
    const semail = useSelector((state) => (state.email));
    const clickCourse = useSelector((state) => state.course);


    const [si, ssi] = useState(sign);
    const [uemail, setemail] = useState(semail);
    const [form1fields, setform1] = useState(form1);
    const { cname, cdis } = form1fields;


    const [userd, setuser] = useState([]);
    const [role, setrole] = useState('true');
    const [fm2, setfm2] = useState(form2);
    const { cid, email } = fm2;
    const [courses, setcourses] = useState([]);



    console.log(semail);
    useEffect(() => {
        fetch(`http://localhost:5000/coursedis/${semail}`)
            .then((res) => res.json())
            .then((data) => setcourses(data));
    }, [semail]);
    console.log(courses);
    useEffect(() => {
        fetch(`http://localhost:5000/dis/${semail}`)
            .then((res) => res.json())
            .then((data) => setuser(...data));

    }, [semail]);
    useEffect(() => {
        if (userd.u_role === 'teacher') {
            setrole(false);
        }
    }, [userd])
    console.log(userd.u_role, role);

    const dispatch = useDispatch();
    console.log(sign);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setform1({ ...form1fields, [name]: value })
    };

    console.log(form1fields);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = form1fields;
            const res = await fetch('http://localhost:5000/coursepost', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(body)

            })
            setform1({ cname: '', cdis: '' })
            console.log(res);
            fetch(`http://localhost:5000/coursedis/${semail}`)
                .then((res) => res.json())
                .then((data) => setcourses(data));
        } catch (err) {
            console.log(err)
        }
        create();
    }

    const create = () => {
        let cre = document.querySelector('.create');
        cre.classList.toggle('dis');
    }
    const join = () => {
        let jn = document.querySelector('.join');
        jn.classList.toggle('dis');
    }
    const form2sumit = (e) => {
        e.preventDefault()
    }

    const sd = () => {
    }

    return (
        <div>

            <Header />
            <div className="course-page">
                {role ? (<h2 className="crejoin" onClick={join} >Join Classroom</h2>) : (<h2 className="crejoin" onClick={create}>Create Classroom</h2>)}
                <div className="create dis">
                    <h3>Add course</h3>
                    <form action="#" onSubmit={handleSubmit}>
                        <FormInput type="text" value={cname}
                            name='cname'
                            handleChange={handleChange}
                            label='Course Name'
                            required
                        />
                        <FormInput type="text" value={cdis}
                            name='cdis'
                            handleChange={handleChange}
                            label='Course Discription'
                            required
                        />
                        <CustomButton type='submit'>Create</CustomButton>
                    </form>
                </div>
                <div className="join dis">
                    <h3>Join Course</h3>
                    <form action="#" onSubmit={form2sumit}>
                        <FormInput type="text" value={cid}
                            name='cid'
                            handleChange={handleChange}
                            label='Enter Course id'
                            required
                        />
                        <CustomButton type='submit'>Join</CustomButton>
                    </form>

                </div>
                <div onClick={sd}>
                    <CardList data={courses} />
                </div>
            </div >
        </div>
    )
}
export default Course;