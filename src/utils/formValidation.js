const validation = (name, email, mobile, option, city) => {
    

    const nameCityRegex = /^[A-Za-z][A-Za-z\s'-]{0,49}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mobileRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
    
    if(!nameCityRegex.test(name)) return "Enter valid name";
    else if(!emailRegex.test(email)) return "Enter valid email address";
    else if(!mobileRegex.test(mobile)) return "Enter valid mobile number";
    else if(!nameCityRegex.test(city)) return "This field only contails characters";
    else if(option === "Select Service") return "Select any option";
    else return "Your form has been submitted";
}


export default validation;