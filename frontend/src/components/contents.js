import React, {useState} from 'react'
import {Formik} from 'formik'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Col,
    Row,
    Form,
    FormFeedback,
    FormGroup,
    Input
} from 'reactstrap';
import {toast} from 'react-toastify';

import Services from '../Servics'
import userImage from '../assets/images/logo512.png'

const initialValues = {
    username: "",
    userdescription: ""
};


const Contents = props => {
    
    
    const onSubmit = async(values, {setSubmitting, setErrors}) => {
        Services.UserInfoService.create(values)
            .then(res => {
                if(res.success){
                    toast.success("Successful !!!");
                    props.history.replace('/userinfo/all')
                } else{
                    setErrors({state: res.errorMsg});
                }
            }) ;
        setSubmitting(false) 
    }
    
    return (
        <>
            <div id="contents">
                <div className="row">
                    <div className="col-lg-3 col-md-5 col-sm-6">
                        <img src={userImage} id="userImage" />
                    </div>
                    <div className="col-lg-9 col-md-7 col-sm-6">
                        <div>
                            <Formik 
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                                render={
                                    ({
                                        values,
                                         errors,
                                         touched,
                                         status,
                                         dirty,
                                         handleChange,
                                         handleBlur,
                                         handleSubmit,
                                         isSubmitting,
                                         isValid,
                                    }) => (
                                        <Form onSubmit={handleSubmit}>
                                            <input 
                                                type="text" 
                                                name="username"
                                                value={values.username}
                                                className="form-control" 
                                                placeholder="Enter your name..." 
                                                id="userNameInput" 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <input 
                                                type="text" 
                                                name="userdescription"
                                                value={values.userdescription} 
                                                className="form-control" 
                                                id="userDescriptiton" 
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <button className="btn btn-success" type="submit"  id="btnSubmit" disabled={isSubmitting}>{isSubmitting? 'Waiting...': 'Submit'}</button>
                                        </Form>
                                    )
                                }
                                ></Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contents;