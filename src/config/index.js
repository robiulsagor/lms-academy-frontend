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

// for create course page

export const languageOptions = [
    { id: "english", label: "English" },
    { id: "spanish", label: "Spanish" },
    { id: "french", label: "French" },
    { id: "german", label: "German" },
    { id: "chinese", label: "Chinese" },
    { id: "japanese", label: "Japanese" },
    { id: "korean", label: "Korean" },
    { id: "portuguese", label: "Portuguese" },
    { id: "arabic", label: "Arabic" },
    { id: "russian", label: "Russian" },
];

export const courseLevelOptions = [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
];

export const courseCategories = [
    { id: "web-development", label: "Web Development" },
    { id: "backend-development", label: "Backend Development" },
    { id: "data-science", label: "Data Science" },
    { id: "machine-learning", label: "Machine Learning" },
    { id: "artificial-intelligence", label: "Artificial Intelligence" },
    { id: "cloud-computing", label: "Cloud Computing" },
    { id: "cyber-security", label: "Cyber Security" },
    { id: "mobile-development", label: "Mobile Development" },
    { id: "game-development", label: "Game Development" },
    { id: "software-engineering", label: "Software Engineering" },
];

export const createCorseLandingPageFormControls = [
    {
        type: 'text',
        label: 'Title',
        name: 'title',
        placeholder: "Enter course title",
        componentType: 'input'
    },
    {
        type: 'text',
        label: 'Category',
        name: 'category',
        placeholder: "",
        componentType: 'select',
        options: courseCategories

    },
    {
        type: 'text',
        label: 'Level',
        name: 'level',
        placeholder: "",
        componentType: 'select',
        options: courseLevelOptions,
    },
    {
        type: 'text',
        label: 'Primary Language',
        name: 'primaryLanguage',
        placeholder: "",
        componentType: 'select',
        options: languageOptions,
    },
    {
        type: 'text',
        label: 'Subtitle',
        name: 'subtitle',
        placeholder: "Enter course Subtitle",
        componentType: 'input'
    },
    {
        type: 'text',
        label: 'Description',
        name: 'description',
        placeholder: "Enter course description",
        componentType: 'textarea'
    },
    {
        type: 'number',
        label: 'Pricing',
        name: 'pricing',
        placeholder: "Enter course pricing",
        componentType: 'input'
    },
    {
        type: 'text',
        label: 'Objectives',
        name: 'objectives',
        placeholder: "Enter course Objectives",
        componentType: 'textarea'
    },
    {
        type: 'text',
        label: 'Welcome Message',
        name: 'welcomeMessage',
        placeholder: "Welcome message for students",
        componentType: 'textarea'
    }
]

export const courseLandingInitialFormData = {
    title: '',
    category: '',
    level: '',
    primaryLanguage: '',
    subtitle: '',
    description: '',
    pricing: '',
    objectives: '',
    welcomeMessage: '',
    image: ''
}

export const courseCurriculamInitialFormData = [
    {
        title: "",
        video_url: "https://res.cloudinary.com/dkxjcns9a/video/upload/v1728543196/ghuv5qi8hw1nqnl9e52b.mp4",
        free_preview: false,
        public_id: ""
    }
]