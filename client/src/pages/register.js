import { useContext, useState } from "react";
import { AuthContext } from '../context/authContext';
import { useForm } from '../utils/hooks';
import { useMutation } from '@apollo/react-hooks';
import { Container, TextField, Stack, Alert, Button } from "@mui/material";

import { gql } from '@apollo/react-hooks';
import { useNavigate } from 'react-router-dom';

const REGISTER_USER = gql`
    mutation Mutation(
        $registerInput: RegisterInput
    ) {
        registerUser(
            registerInput: $registerInput
        ) {
            firstName
            lastName
            username
            token
        }
    }
`

function Register(props) {
    const context = useContext(AuthContext);
    let navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    function registerUserCallback() {
        console.log('Callback hit');
        registerUser();
    }

    const { onChange, onSubmit, values } = useForm(registerUserCallback, {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: ''

    });

    const [ registerUser, { loading }] = useMutation(REGISTER_USER, {
        update(proxy, { data: { registerUser: userData}}) {
            context.login(userData);
            navigate('/');
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors);
        },
        variables: { registerInput: values }
    });

    return (
        <Container spacing={2} maxWidth="sm">
            <h3>Register</h3>
            <p>This is the register page, register now!</p>
            <Stack spacing={2} paddingBottom={2}>
                <TextField
                    label="First Name"
                    name="firstName"
                    onChange={onChange}
                />

                <TextField
                    label="Last Name"
                    name="lastName"
                    onChange={onChange}
                />

                <TextField
                    label="Username"
                    name="username"
                    onChange={onChange}
                />

                <TextField
                    label="Password"
                    name="password"
                    onChange={onChange}
                />

                <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    onChange={onChange}
                />
            </Stack>
            {errors.map(function(error){
                return (
                    <Alert>
                        {error.message}
                    </Alert>
                );
            })}
            <Button variant="contained" onClick={onSubmit}>Register</Button>
        </Container>
    )
}

export default Register;