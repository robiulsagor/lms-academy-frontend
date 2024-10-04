export const signupFormControls = [
    {
        type: 'text',
        label: 'Username',
        name: 'username',
        placeholder: "Enter a user name",
        componentType: 'input'
    },
    {
        type: 'email',
        label: 'Email',
        name: 'email',
        placeholder: "Enter your email address",
        componentType: 'input'
    },
    {
        type: 'password',
        label: 'Password',
        name: 'password',
        placeholder: "Enter your a password",
        componentType: 'input'
    },
]

export const signinFormControls = [
    {
        type: 'email',
        label: 'Email',
        name: 'email',
        placeholder: "Enter your email address",
        componentType: 'input'
    },
    {
        type: 'password',
        label: 'Password',
        name: 'password',
        placeholder: "Enter your a password",
        componentType: 'input'
    }
]

export const initialSigninData = {
    email: '',
    password: ''
}

export const initialSignupData = {
    username: '',
    email: '',
    password: ''
}